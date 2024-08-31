// Quiz questions for IELTS assessment
const quizQuestions = [
    {
        que: 'What is the speaker mainly talking about in the listening section?',
        opt: ['A historical event', 'A scientific discovery', 'A recent news event', 'A travel experience'],
        ans: 1,
        audio: 'audio-file-path.mp3', // Replace with the actual audio file path
        type: 'Listening'
    },
    {
        que: 'What is the woman planning to do this weekend?',
        opt: ['Visit a museum', 'Go shopping', 'Attend a concert', 'Stay home and relax'],
        ans: 2,
        audio: 'audio-file-path-2.mp3', // Replace with the actual audio file path
        type: 'Listening'
    },
    {
        que: 'Which of the following best summarizes the main idea of the passage?',
        opt: ['The impact of climate change on polar bears', 'The economic benefits of renewable energy', 'The decline of traditional farming methods', 'The importance of early childhood education'],
        ans: 1,
        passage: `
            The Future of Renewable Energy
            
            As concerns about climate change and environmental sustainability grow, renewable energy sources are becoming increasingly important.
            Traditional fossil fuels such as coal, oil, and natural gas have long been the dominant sources of energy, but their environmental impact is significant.
            In contrast, renewable energy sources like solar, wind, and hydroelectric power produce little to no greenhouse gas emissions.

            One of the key benefits of renewable energy is its potential to reduce our reliance on finite resources.
            Fossil fuels are not only harmful to the environment but are also depleting at an alarming rate.
            As these resources become scarcer, their prices are likely to increase, leading to economic instability.
            Renewable energy, on the other hand, is abundant and can be harnessed continuously.

            In addition to environmental and economic benefits, renewable energy also offers social advantages.
            It can provide energy access to remote areas that are not connected to the grid, improving the quality of life for people in these regions.
            Moreover, the renewable energy sector is creating new jobs, contributing to economic growth and reducing unemployment.

            However, there are challenges to the widespread adoption of renewable energy.
            The initial costs of setting up renewable energy infrastructure can be high, and there are also technical challenges related to energy storage and distribution.
            Despite these obstacles, many countries are investing heavily in renewable energy, recognizing its long-term benefits.

            As the world moves towards a more sustainable future, the role of renewable energy will continue to grow.
            While challenges remain, the potential for renewable energy to transform our energy systems and reduce our environmental impact is undeniable.
        `,
        type: 'Reading'
    },
    {
        que: 'According to the passage, why is renewable energy becoming more popular?',
        opt: ['It is cheaper than fossil fuels', 'It is environmentally friendly', 'It requires less maintenance', 'It is supported by the government'],
        ans: 1,
        type: 'Reading'
    },
    {
        que: 'Choose the best sentence to start a formal letter:',
        opt: ['Hey there, I hope you’re doing well!', 'I am writing to inform you about the upcoming changes.', 'What’s up? Just wanted to let you know about something.', 'You won’t believe what happened today!'],
        ans: 1,
        type: 'Writing'
    },
    {
        que: 'Which of the following sentences is the most suitable for an academic essay?',
        opt: ['I think pollution is really bad and we should do something about it.', 'Pollution is a critical issue that requires immediate global action.', 'Pollution is bad, and it’s making the world a worse place to live.', 'We need to seriously consider how bad pollution is for us.'],
        ans: 1,
        type: 'Writing'
    },
    {
        que: 'Which of the following is the best way to introduce yourself in a formal setting?',
        opt: ['Hi, I’m [Your Name], and I’m super excited to be here!', 'Hello, my name is [Your Name], and I’m pleased to meet you.', 'Hey, what’s up? I’m [Your Name].', 'Yo, I’m [Your Name]. Let’s get started!'],
        ans: 1,
        type: 'Writing'
    },
    {
        que: 'In a job interview, how should you respond to the question, "What are your strengths?"',
        opt: ['I don’t really have any strengths.', 'I’m okay at a lot of things, I guess.', 'I’m very organized and have strong communication skills.', 'I’m good at everything!'],
        ans: 2,
        type: 'Speaking'
    },
    {
        que: 'Choose the word that best completes the sentence: The scientists conducted a series of experiments to ______ the hypothesis.',
        opt: ['confirm', 'argue', 'question', 'remove'],
        ans: 0,
        type: 'Vocabulary'
    },
    {
        que: 'Which word is closest in meaning to “innovative”?',
        opt: ['Traditional', 'Creative', 'Simple', 'Common'],
        ans: 1,
        type: 'Vocabulary'
    }
];

// Add questions to local storage if not already present
if (!localStorage.getItem('quizQuestions')) {
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
}

// Accessing questions from local storage
const storedQuestions = JSON.parse(localStorage.getItem("quizQuestions"));

// Accessing elements
const questionElement = document.querySelector('.quest');
const optionsElement = document.querySelector('.options');
const indexElement = document.querySelector('.ques-left');
const secondsElement = document.querySelector('.seconds');
const audioElement = document.querySelector('.audio');
const passageElement = document.querySelector('.passage');
const topicElement = document.querySelector('.topic');

// Display current index question
const displayQuestion = () => {
    let sec = 8;

    const countDown = () => {
        if (sec >= 0) {
            secondsElement.innerHTML = `${sec}s`;
            sec--;
        } else {
            currentQuestionIndex++;
            displayQuestion();
            clearInterval(beginCount);
        }
    }
    // Begin countdown
    const beginCount = setInterval(countDown, 1000);

    if (currentQuestionIndex >= storedQuestions.length) {
        clearInterval(beginCount);
        window.location.href = "../result/result.html";
    }

    // Display questions
    const currentQuestion = storedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.que;
    indexElement.textContent = `${currentQuestionIndex + 1} / ${storedQuestions.length}`;

    // Update section title based on question type
    topicElement.textContent = currentQuestion.type;

    // Clear previous passage and audio elements if any
    passageElement.textContent = '';
    audioElement.src = '';

    // Check if the question has an audio file or a passage
    if (currentQuestion.audio) {
        audioElement.src = currentQuestion.audio;
        audioElement.style.display = 'block'; // Show the audio player
    } else {
        audioElement.style.display = 'none'; // Hide the audio player if no audio
    }

    if (currentQuestion.passage) {
        passageElement.textContent = currentQuestion.passage;
        passageElement.style.display = 'block'; // Show the passage
    } else {
        passageElement.style.display = 'none'; // Hide the passage if not present
    }

    // Loop over options and create option elements
    let displayOption = currentQuestion.opt.map((option, index) => {
        return `<p class="opt" data-index="${index}">${option}</p>`;
    });
    displayOption = displayOption.join('');
    optionsElement.innerHTML = displayOption;

    // When an option is clicked
    const paragraphs = document.querySelectorAll('.opt');
    paragraphs.forEach((paragraph, index) => {
        paragraph.addEventListener('click', () => {
            const selectedOptionIndex = parseInt(paragraph.dataset.index);

            if (selectedOptionIndex === currentQuestion.ans) {
                console.log('correct');
                score++;
                // Store the score
                localStorage.setItem('score', JSON.stringify(score));
                console.log(score);
            } else {
                console.log('wrong');
            }
            currentQuestionIndex++;
            clearInterval(beginCount);

            // If there are more questions
            if (currentQuestionIndex < storedQuestions.length) {
                displayQuestion();
            } else {
                console.log(`Your score is ${score}`);
                clearInterval(beginCount);
                window.location.href = "../result/result.html";
            }
        });
    });
};

// Question index
let currentQuestionIndex = 0;

// Initial score
let score = 0;

// Call the displayQuestion function to show the first question
displayQuestion();
