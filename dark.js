var DARK = false;


const darkbtn = document.getElementById("darkbtn");

darkbtn.addEventListener("click", function(){
    DARK = !DARK;

    document.documentElement.style.setProperty('--main-bg-color', DARK ? "#343434" : "#f5f5f5f5");
    document.documentElement.style.setProperty('--main-opposite-bg-color', DARK ? "#f5f5f5f5" : "#343434");
    document.documentElement.style.setProperty('--secondary-bg-color', DARK ? "#393E46" : "#ECF0EC");

})