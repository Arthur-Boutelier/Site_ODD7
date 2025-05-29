function dragover_handler(event){
    event.preventDefault();
    event.target.classList.add("dropzone_hover");
}

function ondrop_handler(event){
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const dragged = document.getElementById(id);
    event.target.appendChild(dragged);
    dragged.classList.remove("rep_non_place");
    dragged.classList.add("rep_place");
    event.target.style.width = "max-content"
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