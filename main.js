let prixUnit   =document.querySelectorAll('#prixUnit');
let prixTota   =document.querySelectorAll('#prixTota');
let discre =document.querySelectorAll('.discre');
let crem   =document.querySelectorAll('.crem');
let suprimer =document.querySelectorAll('.supremer');
let aimer   =document.querySelectorAll('.aimer');
let coeur   =document.querySelectorAll('.coeur');
let number  = document.querySelectorAll("#number");
let articl=document.querySelectorAll(".articl");
console.log(aimer);

for(let i=0;i<suprimer.length;i++){
    
    suprimer[i].addEventListener("click",function()
    {
    this.parentNode.remove()
    });
}

for(let j=0;j<aimer.length;j++){
    
    aimer[j].addEventListener("click",function()
    {
    this.style.color='red';
    });
}


    
   








// // console.log(indexOff(this.suprimer));
// for(i=0; i<suprimer.length ; i++){
//     suprimer[i].addEventListener("click",function(){
//         // alert(this.innerText + "clicked");
//     console.log(suprimer[i]);
//     });
// //   suprimer.onclick=function(){
    
// //  i = suprimer[i] }
// //  console.log(i);}













discre.onclick=function(){
    number.value--
    if(number.value<1){
       number.value=1
    }
   
    prixTota.value=prixUnit.value*number.value;
  

}
crem.onclick=function(){
    number.value++
   
   
    prixTota.value=prixUnit.value*number.value;
}

aimer.onclick=function(){
    coeur.style.color='red';
}
// suprimer.onclick=function(){
//     articl.nodeList[4].remove();
    
//     alert("are you sur the delet this prodact")}

