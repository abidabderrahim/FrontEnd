let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// with ctx I can access all object properties
// in canvas object , methods , properties . .
let circle_array = [];
let hcolor = 0;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
window.addEventListener('load', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x : undefined,
    y : undefined,
};

canvas.addEventListener('click', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 10; i++){
        circle_array.push(new circle());
    }
})
canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 2; i++){
        circle_array.push(new circle());
    }
})
class circle {
    constructor (){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
        // 1.5 and -1.5 .
        this.color = 'hsl('+ hcolor +', 100%, 50%)';
    }
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function circle_start(){
    for(let i= 0; i < circle_array.length; i++){
        circle_array[i].update();
        circle_array[i].draw();
    }
}

function animate(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    circle_start();
    hcolor += 5;
    requestAnimationFrame(animate);
}
animate();

