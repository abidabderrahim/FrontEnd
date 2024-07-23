let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// with ctx I can access all object properties
// in canvas object , methods , properties . .
let circle_array = [];

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
canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    circle_array.push(new circle());
})
class circle {
    constructor (){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
        // 1.5 and -1.5 .
    }
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function circle_init(){
    for(let i = 0; i < 100; i++){
        circle_array.push(new circle());
    }
}
circle_init();

function circle_start(){
    for(let i= 0; i < circle_array.length; i++){
        circle_array[i].update();
        circle_array[i].draw();
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle_start();
    requestAnimationFrame(animate);
}
animate();

