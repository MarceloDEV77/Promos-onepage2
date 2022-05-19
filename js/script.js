window.addEventListener('scroll',function(){
    let scroll=window.scrollY;
    if(scroll>300){
      ////documento.getElementById('about').style.dvisibility='visible';
   
      document.getElementById('about').style.visibility="visible";
      document.getElementById('about').style.left="10px";
      document.getElementById('about').style.transition=2+"s";
   
    }else{
       document.getElementById('about').style.visibility="hidden"; 
       document.getElementById('about').style.left="-1500px"; 
    }
   
   
    if(scroll>500){
        document.getElementById('menu').style.position="fixed";
        
    }else{
       document.getElementById('menu').style.position="relative"; 
    }
   
   
    if(scroll>5){
        
        document.getElementById('dividir1').style.left=scroll+18*5+"px";
        document.getElementById('dividir1').style.transition='0.5s';
        if(scroll>505){
           document.getElementById('dividir1').style.left="100px"; 
        }
    }
   
   
    
    console.log(scroll);
   });
   
   
   
   
   