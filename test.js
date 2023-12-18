let buttons= document.querySelectorAll('button');
console.log(buttons);

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function()
    {alert(this.innerText + 'clicked');
    this.remove()
    });

}