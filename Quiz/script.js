function dragover_handler(event){
    event.preventDefault();
    event.target.classList.add("dropzone_hover");
}

function ondrop_handler(event){
    const id = event.dataTransfer.getData("text/plain");
    const dragged = document.getElementById(id);
    if (event.target.id == "ini_dropzone"){
        dragged.classList.add("rep_non_place");
        dragged.classList.remove("rep_place");
    }
    else{
        dragged.classList.remove("rep_non_place");
        dragged.classList.add("rep_place");
        event.target.style.width = "max-content";
        console.log("caca");
    }
    const id_parent = dragged.parentElement.id;
    if (id_parent != "ini_dropzone"){
        document.getElementById(id_parent).style.width = "6em";
    }
    event.target.appendChild(dragged);
    event.target.classList.remove("dropzone_hover");
}

function dragstart_handler(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function submit_handler(){
    let score = 0;
    console.log(score);
    score += check_qcm();
    score += check_dragdrop();
    score += check_select();
    console.log(score);
    return false;
}

function check_qcm(){
    let point = 0;
    if (document.getElementById("q2_2").checked == false){
        if (document.getElementById("q2_1").checked)
            point += 1.5;
        if (document.getElementById("q2_3").checked)
            point += 1.5;
    }
    if (document.getElementById("q1_3").checked)
        point += 3;
    return point;   
}

function check_dragdrop(){
    let point = 0;
    if (document.getElementById("dropzone1").querySelector("#rep2") != null)
        point += 2;
    return point;
}

function check_select(){
    let point = 0;
    let choice = document.getElementById("select_1").selectedIndex;
    if (choice == 3)
        point += 2;
    return point;       
}

function onleave_handler(event){
    event.preventDefault();
    event.target.classList.remove("dropzone_hover");
}

function displayScore(score){
    const result = document.getElementById("result");

    const p = document.createElement("p");
    p.textContent = "Votre score est de " + score;
    result.appendChild(p);
}