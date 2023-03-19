let dubaiText = document.getElementById('dubaitext');
let burjkhlifa = document.getElementById('dburjkhlifa');
let stars= document.getElementById('stars');

windon.addEventlistener('scroll', () => {
      let value = window.scrollY;

      dubaiText.style.left = value * -2 + 'px';
      burjkhalifa.style.top = value * 1 + 'px';
      stars.style.top = value * 1 + 'px';
      

});
