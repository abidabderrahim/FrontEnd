let btn = document.querySelector("#new-text");
let text = document.querySelector(".text");
let lang = document.querySelector(".lang");

const texts = [{
    text:`printf("Hello, World!");`,
    lang: `C Language`
},{
    text:`print("Hello, World")`,
    lang:`Python`
},{
    text:`fmt.Println("Hello, World")`,
    lang:`golang`
},{
    text:`puts "Hello, World!"`,
    lang:`Ruby`
},{
    text:`echo "Hello, World!"`,
    lang:`nim`
},{
    text:`echo "Hello, World!"`,
    lang:`bash`
},];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * texts.length);
    text.textContent = texts[random].text;
    lang.textContent = texts[random].lang;
});