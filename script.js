var DARK = false;


const darkbtn = document.getElementById("darkbtn");

darkbtn.addEventListener("click", function(){
    DARK = !DARK;
    document.body.style.backgroundColor = DARK ? "#343434" : "#f5f5f5f5";
    document.body.style.color = DARK ? "#f5f5f5f5" : "#343434";
    darkbtn.style.color = DARK ? "#f5f5f5f5" : "#343434";
})