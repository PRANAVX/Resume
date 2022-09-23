const frontend = document.getElementById("frontend");
const javascript = document.getElementById("javascript");
const css = document.getElementById("css");
const html = document.getElementById("html");
const react = document.getElementById("react");

frontend.onmousemove = ()=>{
    javascript.style.animationPlayState="paused";
    html.style.animationPlayState="paused";
    css.style.animationPlayState="paused";
    react.style.animationPlayState="paused";
}
frontend.onmouseleave=()=>{
    javascript.style.animationPlayState="running";
    html.style.animationPlayState="running";
    css.style.animationPlayState="running";
    react.style.animationPlayState="running";

}