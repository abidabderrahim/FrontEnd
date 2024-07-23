window.onresize = () => {
    mywidth = window.innerWidth;
    myheight = window.innerHeight;
    document.getElementById("width").textContent = `Width : ${mywidth}px`;
    document.getElementById("height").textContent = `Height : ${myheight}px`;
};
window.onload = () => {
    mywidth = window.innerWidth;
    myheight = window.innerHeight;
    document.getElementById("width").textContent = `Width : ${mywidth}px`;
    document.getElementById("height").textContent = `Height : ${myheight}px`;
};