window.onload = () => {
    myWidth = window.innerWidth;
    document.getElementById("size").textContent = `width : ${myWidth}px`;
}
window.onresize = () => {
    myWidth = window.innerWidth;
    document.getElementById("size").textContent = `width : ${myWidth}px`;
}