let nappi = document.querySelector("button");

nappi.addEventListener("click", setnote);

function setnote(){
    let date = new Date();
    let checkbox = document.getElementById("checkBox");
    let note =  document.getElementById("note").value;
    let nimi = document.getElementById("name").value;   
    let div = document.createElement("div");
    div.setAttribute("class", "LuotuDiv");
    let noteContainer = document.getElementById("noteContainer");
    
    div.innerText =date + "\n" + "\n" + nimi + "\n" + note;
    noteContainer.appendChild(div);
        if(checkbox.checked == true){
            div.setAttribute("class", "important");
        }
}

