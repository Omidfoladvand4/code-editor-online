const left = document.querySelector('.left');
const right = document.querySelector('.right');
const bar = document.querySelector('.bar');
const editor = document.querySelector('.editor')
const iframe = document.querySelector('.iframe');
const run = document.querySelector('.btn-run');
const dark = document.querySelector('.btn-dark');
const light = document.querySelector('.btn-light');


const drag = (e)=>{
    e.preventDefault();
    left.style.width = (e.pageX - bar.offsetWidth / 3)+ "px";
}



// bar.addEventListener('mousedown', function(){
//     document.addEventListener('mousemove', drag)
// })

// bar.addEventListener('mouseup', function(){
//     document.removeEventListener('mousemove', drag)
// })


run.addEventListener('click', ()=>{
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html)
})

dark.addEventListener('click',function(){
    editor.style.backgroundColor = '#333';
    editor.style.color = '#fff'
})

light.addEventListener('click',function(){
    editor.style.backgroundColor = '#fff';
    editor.style.color = '#333'
})

document.getElementById('live').onclick = function(){
    if(this.checked){
        editor.addEventListener('keyup', ()=>{
            const html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html)
        })
    }
}