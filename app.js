// SELECTING ELEMENTS FROM THE DOM
const form = document.querySelector('.input-form');
const nameInput = document.getElementById('name');
const ieltsTypeInput = document.getElementById('ielts-type');
const targetBandInput = document.getElementById('target-band');
const startBtn = document.querySelector('.start-btn');
const err = document.querySelector('.error');

// WHEN BUTTON CLICK
startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get input values
    const userName = nameInput.value;
    const ieltsType = ieltsTypeInput.value;
    const targetBand = targetBandInput.value;

    // Validate input
    if (userName.length > 0 && ieltsType.length > 0 && targetBand.length > 0) {
        // Save to local storage
        localStorage.setItem('name', userName);
        localStorage.setItem('ieltsType', ieltsType);
        localStorage.setItem('targetBand', targetBand);

        // Redirect to the next page
        window.location.href = './rules/rules.html';
    } else {
        // Show error message if any input is missing
        errMsg();
    }
});

// ------------------- FUNCTIONS ----------------------

// Error function
const errMsg = () => {
    err.style.visibility = 'visible';

    setTimeout(() => {
        err.style.visibility = 'hidden';
    }, 1500);
};
