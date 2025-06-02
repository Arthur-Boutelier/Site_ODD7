function dragover_handler(event){
    if (!(event.target.classList.contains("rep"))){
        event.preventDefault();
        event.target.classList.add("dropzone_hover");
    }
}

function ondrop_handler(event){
    if (!(event.target.classList.contains("rep"))){
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
        }
        const id_parent = dragged.parentElement.id;
        if (id_parent != "ini_dropzone"){
            document.getElementById(id_parent).style.width = "6em";
        }
        event.target.appendChild(dragged);
        event.target.classList.remove("dropzone_hover");
    }
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
            point += 1;
        if (document.getElementById("q2_3").checked)
            point += 1;
    }
    if (document.getElementById("q1_3").checked)
        point += 3;
    return point;   
}

function check_dragdrop(){
    let point = 0;
    if (document.getElementById("dropzone1").querySelector("#rep5") != null)
        point += 1.5;
    if (document.getElementById("dropzone2").querySelector("#rep3") != null)
        point += 1.5;
    if (document.getElementById("dropzone3").querySelector("#rep1") != null)
        point += 1.5;
    if (document.getElementById("dropzone4").querySelector("#rep2") != null)
        point += 1.5;
    if (document.getElementById("dropzone5").querySelector("#rep4") != null)
        point += 1.5;
    return point;
}

function check_select(){
    let point = 0;
    let choice = document.getElementById("select_1").selectedIndex;
    if (choice == 1)
        point += 1.5;
    choice = document.getElementById("select_2").selectedIndex;
    if (choice == 2)
        point += 1.5;
    choice = document.getElementById("select_3").selectedIndex;
    if (choice == 1)
        point += 1.5;
    choice = document.getElementById("select_4").selectedIndex;
    if (choice == 3)
        point += 1.5;
    choice = document.getElementById("select_5").selectedIndex;
    if (choice == 2)
        point += 1.5;
    return point;       
}

function onleave_handler(event){
    event.preventDefault();
    event.target.classList.remove("dropzone_hover");
}