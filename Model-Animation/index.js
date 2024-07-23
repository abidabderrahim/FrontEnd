let btn = document.getElementById("btn");
let model = document.getElementById("model-container");
let closebtn = document.getElementById("close");

btn.addEventListener('click', () => {
    model.style.display = 'block';
});

closebtn.addEventListener('click', () =>{
    model.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if(e.target === model){
        model.style.display = 'none';
    }
});