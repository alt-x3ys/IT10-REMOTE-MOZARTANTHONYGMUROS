const nameForm = document.querySelector("#nameForm");
const myName = "Mozart";




nameForm.addEventListener('submit', function(event){
    event.preventDefault();
})

document.getElementById("submitbtn").addEventListener('click', function(){
    let nameValue = document.getElementById("name").value;
    if (nameValue.trim() === ""){
        alert("Input field is empty.");
    }
    
});

document.getElementById("submitbtn").addEventListener('click', function(){
    let nameValue = document.getElementById("name").value;
    if (nameValue === myName){
        document.getElementById("name").style.borderColor = "green";
        alert('Correct name.');
    } else {
        document.getElementById("name").style.borderColor = "red";
        alert('Incorrect name.');
    }
});