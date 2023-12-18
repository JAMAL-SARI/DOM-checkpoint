let prixUnit   =document.querySelector('#prixUnit');
let prixTota   =document.querySelector('#prixTota');
let discre =document.querySelector('.discre');
let crem   =document.querySelector('.crem');
let suprimer =document.querySelector('.suprimer');
let aimer   =document.querySelector('.aimer');
let coeur   =document.querySelector('#coeur');
let number  = document.querySelector("#number");
let articl=document.querySelector(".articl");

console.log(coeur);




for(let i=0;i<suprimer.length;i++){
    
    suprimer[i].addEventListener("click",function()
    {
    suprimer[i].parentNode.remove()
    });
}


for(let j=0;j<aimer.length;j++){
 

    aimer[j].addEventListener("click",function()
    {
        // console.log(aimer[j].outerHTML);
     aimer[j].style.background='red';
    } );
}



// console.log(indexOff(this.suprimer));
for(i=0; i<suprimer.length ; i++){
    suprimer[i].addEventListener("click",function(){
        // alert(this.innerText + "clicked");
    console.log(suprimer[i]);
    });

    
//   suprimer.onclick=function(){
    
//  i = suprimer[i] }
//  console.log(i);}






////////////////////////////////////
// ///////////////////////////////////////
// code pour un suel  produit 

// discre.onclick=function(){
//     number.value--
//     if(number.value<1){
//        number.value=1
       
//     }  

//     prixTota.value=prixUnit.value*number.value;
  
// }
// crem.onclick=function(){
//     number.value++

   
//     prixTota.value=prixUnit.value*number.value;
// }

aimer.onclick=function(){
    prixTota.style.color="red"
    coeur.style.color='red';
}

