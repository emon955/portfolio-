const slider = document.querySelector('.slider')

const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

leftArrow.addEventListener('click',function(){
    slider.scrollLeft -= 125;
})
rightArrow.addEventListener('click',function(){
    slider.scrollLeft += 125;
})