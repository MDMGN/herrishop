document.addEventListener('DOMContentLoaded',()=>{
  if (document.getElementsByClassName('demo').length > 0) {
    let i = 0;
    let txt = `
              function message(){
                  $author = 'Darren Vargas';
  
                  /*API REST - Proyecto en SEIM*/
  
                echo 'Disfruten y póngase a jugar 😀. By'.$author.'';
              }
              message();
               `;
    let speed = 60;
    function typeItOut () {
      if (i < txt.length) {
        document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }
  
    setTimeout(typeItOut, 1800);
  }
})

document.addEventListener('click',e=>{
  if(e.target.matches('.menu__item span')){
      document.querySelector('.menu__item').classList.toggle('open')
      document.querySelector('.menu').classList.toggle('responsive')
  }
})