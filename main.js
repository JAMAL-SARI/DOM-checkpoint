let prixUnit   =document.querySelectorAll('#prixUnit');
let prixTota   =document.querySelectorAll('#prixTota');
let discre =document.querySelectorAll('.discre');
let crem   =document.querySelectorAll('.crem');
let suprimer =document.querySelectorAll('.suprimer');
let aimer   =document.querySelectorAll('.aimer');
let coeur   =document.querySelectorAll('#coeur');
let number  = document.querySelectorAll("#number");
let articl=document.querySelectorAll(".articl");
let quantite =document.querySelectorAll(".quant");





//  delete prodact function  okkkk


for(let i=0;i<suprimer.length;i++){
    
    suprimer[i].addEventListener("click",function()
    {
    suprimer[i].parentNode.remove()
    });
}



//  like prodact function okkkk

for(let j=0 ; j<aimer.length ; j++){

    aimer[j].addEventListener("click",function()
    {
     aimer[j].childNodes[0].style.color='red';
    } );
}



// loss  prodact function 

for(let k=0 ; k<crem.length ; k++){

    crem[k].addEventListener("click",function()
    {
     number[k].value++
     prixTota[k].value=number[k].value*prixUnit[k].value;

     
     if( prixTota[k].value>1 ){
        quantite[k].style.background='red';
     }
     else{quantite[r].style.background='linear-gradient(rgb(171, 227, 234),rgb(220, 236, 220))'}
    } );

}


for(let r=0 ; r<discre.length ; r++){

    discre[r].addEventListener("click",function()
    {
     number[r].value--
     if(number[r].value<0)
     {
        number[r].value=0;
     }

     prixTota[r].value=number[r].value*prixUnit[r].value;

     if( prixTota[r].value>1 ){
        quantite[r].style.background='red';
     }
     else{quantite[r].style.background='linear-gradient(rgb(171, 227, 234),rgb(220, 236, 220))'}

    } );

}



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

// aimer.onclick=function(){
//     prixTota.style.color="red"
//     coeur.style.color='red';
// }

