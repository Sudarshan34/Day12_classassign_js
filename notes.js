const ta = document.querySelector(".ta");
const colorpicker = document.getElementById("color-picker");
const btn = document.querySelector(".btn")


btn.addEventListener("click", ()=>{
    if(ta.value){
        var note = document.createElement("div");
        note.classList.add("div");
        note.style.backgroundColor = colorpicker.value;
        note.textContent = note.value;
    }
})

const del = document.createElement("p");
del.textContent = "Del";
del.addEventListener("click",()=>{
    
})
