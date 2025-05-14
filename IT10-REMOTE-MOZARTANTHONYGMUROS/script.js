const nameForm = document.querySelector("#nameForm");
const submitBtn = document.querySelector("#submitbtn");
const myName = "Mozart";




nameForm.addEventListener('submit', function(event){
    event.preventDefault();
})

document.getElementById("name").addEventListener('blur', function(){
    alert("Input field is empty.")
});