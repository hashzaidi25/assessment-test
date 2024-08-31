//getting the name from L.S
const getName = localStorage.getItem('name');
console.log(getName);

//display user name
const currName = document.getElementById('curr-name');
currName.textContent = getName;

//FUNCTION remove name from local storage
function removeFromLS() {
    localStorage.removeItem("name");
    console.log('cleared ');
}

//Go back and remove LC
const prev = document.getElementById('home');
prev.addEventListener('click', ()=>{
    removeFromLS();
    localStorage.removeItem('score');
});

