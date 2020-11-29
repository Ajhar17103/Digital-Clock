function myapp(){
    let date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let timeFormat=document.getElementById('dayNight');
   
    if(hours===0){
        hours=12;
        timeFormat.innerHTML='AM'
    }
    if(hours>12){
        hours=hours-12   
        timeFormat.innerText='PM'
    }
    hours=hours < 10 ? '0'+ hours : hours
    min=min < 10 ? ' 0'+ min : min;
    sec=sec < 10 ? '0' + sec:sec;

    let finalTime=hours+':'+min+':'+sec; 
    document.getElementById('showClock').innerHTML=finalTime
     
   
}
setInterval(myapp,1000)
myapp();


   
    

 

