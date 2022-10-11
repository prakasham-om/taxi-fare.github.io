//$(document).ready(function(){
 //   var autocomplete;
 //   var autocomplete1;
//    var Id="first";

 //   var Id2="second" ;
  //  autocomplete=new google.maps.places.Autocomplete((document.getElementById(Id)),{
       // types:['geocode'],
   // })
   // autocomplete1=new google.maps.places.Autocomplete((document.getElementById(Id2)),{
    //    types:['geocode'],
   // })
//})

  var a= document.getElementById('first')
    
    a.addEventListener('input',function(){
        document.getElementById('second').addEventListener('input',function(){
   const btn= document.getElementById('cal')
   
   btn.addEventListener('click',function(){
    var dis=document.getElementById("km").value;

     let small=10;
     let mid=20;
     let dis2=dis-small;
     
     if(dis>=1 && dis<=small){
        document.getElementById('show_me').innerHTML=`taxi fare: ${dis*5}`
     }
    else if(dis>small && dis<=30){
        document.getElementById('show_me').innerHTML=`taxi fare: ${dis2*2+50}`
    }

    else if(dis>30){
     
    let dis1=dis-small;
    let dis3=dis1-mid;
    document.getElementById('show_me').innerHTML=`taxi fare: ${dis3*1+50+40}`
            

        }
    })

     

    })
})