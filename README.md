# Q-and-A
    - description : Time based question and answer platform to take quiz

## Product Overview:
    -1 create a  data structure(array of objects) :
            const quizQuestions = [
                {
                    que : 'who is bill gates',
                    opt : ['lawyer', 'business man', 'doctor', 'programmer']
                    ans : 1
                }
            ]
    -2 storing all the questions to local storage
        -To make the questions available offline
        -to enable fast load
        -activate count down

    -3 display first question

    -4 loop through the options and create an option paragraph
        <p class="opt">Bill Gates</p>

    -5 add eventlistener to the paragraph
    (ifquestionindex > array.length)
        -moves to next question when clicked
        - questionindex++
        --score++ if correct
    (ifquestionindex < array.length)
        - display finall result
    
   
## Key Features:
    -Count down timer
    -Question available offline(local storage)
    -result notification
    -name input and display


## Project Overview:
    Briefly describe the project and its purpose.
    Include any important background information or context.

## Technologies Used:
    Html5, Css, Javascript


## colours and style guild 
   # FONT
    -font-family: 'Overpass', sans-serif; -----TEXT
    -font-family: 'Ubuntu', sans-serif;   -----LOGO

   # COLOR
       - Text Color:
        For most of the text content, you can use black (#212121) or a slightly lighter shade like dark blue (#1976D2) for better legibility. Use white (#FFFFFF) for text that needs to stand out on a dark background.
        
        - Navigation Bar (Nav) Color:
        used the main color (#2196F3) for the background of the navigation bar to make it prominent. For the text or icons within the navigation bar, used white (#FFFFFF) for good contrast.
        
        - Button Color:
        Used the accent colors from the palette, such as deep blue (#1976D2) or sky blue (#64B5F6), for button backgrounds. To ensure that the button text color provides enough contrast against the chosen background color. if the button background is deep blue, use white (#FFFFFF) for the text color.
        
        - Background Color:
        blue shade (#E3F2FD) as the background color to create a fresh and clean look. Ensuring that the text and other elements on this background have sufficient contrast for readability.



