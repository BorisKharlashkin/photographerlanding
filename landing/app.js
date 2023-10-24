const popup=document.querySelector('.pop-up')
const portfolio=document.querySelector('.portfolio-grid.grid')
const photos=document.querySelectorAll('.toshow')

console.log(portfolio)

photos.forEach(img=>{
    img.onclick=()=>{
        popup.style.display='block';
        document.querySelector('.pop-up img').src=img.getAttribute('src');
    }

}); 

document.addEventListener( 'click', (e) => {
    if (!portfolio.contains(e.target) && e.target===popup){
        document.querySelector('.pop-up').style.display='none';
    }

});

