window.onscroll = function(){
    const starsL = document.getElementById('stars');
    const moonL = document.getElementById('moon');
    const mountains3L = document.getElementById('mountains3');
    const mountains4L = document.getElementById('mountains4');
    const riverL = document.getElementById('river');
    const boatL = document.getElementById('boat');
    const timberL = document.querySelector('#timber');
    const value = scrollY;
    starsL.style.left = value + 'px';
    moonL.style.top = value * 3 + 'px';
    mountains3L.style.top = value * 2 + 'px';
    mountains4L.style.top = value * 1.5 + 'px';
    riverL.style.top = value  + 'px';
    boatL.style.top = value  + 'px';
    boatL.style.left = value * 3 + 'px';
    timberL.style.fontSize = value  + 'px';
    if(scrollY >= 70){
      timberL.style.fontSize = 70 + 'px';
      timberL.style.position = 'fixed';
      if(scrollY >= 530){
        timberL.style.display = 'none';
       }
       else{
         timberL.style.display = 'block';
       }
       if(scrollY >= 200){
         //document.querySelector('.sidebar').style.background = 'radial-gradient(circle, rgba(185,148,164,1) 0%, rgba(60,110,167,1) 61%)';
         document.querySelector('.sidebar').style.background = 'radial-gradient(circle, rgba(185,148,164,1) 0%, rgba(60,110,167,1) 60%)';
         //document.querySelector('.sidebar').style.background = 'radial-gradient(circle, rgba(180,171,182,10) 0%, rgba(21,47,76,1) 60%)';
       }
       else{
         document.querySelector('.sidebar').style.background = 'radial-gradient( circle farthest-corner at 83.7% 4.3%,  rgba(173,0,171,1) 0%, rgb(3, 17, 33) 60% )';
       }
       
       
     }
     
   };