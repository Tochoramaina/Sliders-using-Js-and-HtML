 let nextButton = document.getElementById('next')
 let prevButton = document.getElementById("prev")
 let backButton = document.getElementById('back')
 let seeMoreButton = document.querySelectorAll(".seeMore");
 let carousel = document.querySelector('.carousel');
 let listHtml = document.querySelector(".carousel .list")

 nextButton.onclick = function(){
    showSlider('next')
 };
 prevButton.onclick = function(){
    showSlider('prev')
 };

 // a timeout function to allow allow user to click buttons after 2ms
 let unAcceptClick;
 const showSlider = (type) => {
    // restricting users clicking the button when they are running
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carousel.classList.remove('prev', 'next')
    let items = document.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        listHtml.appendChild(items[0]);
        //adding next animation effects
        carousel.classList.add('next')
    }
    else{
        let positionLast = items.length - 1;
        listHtml.prepend(items[positionLast])
        // adding prev animation effects
        carousel.classList.add("prev")
    }
    // clearing time to ensure the animation time restart from the beggining instead of cumulatively
    clearTimeout(unAcceptClick)
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
 }

 seeMoreButton.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('showDetail')
    }
 })
 backButton.onclick = function(){
    carousel.classList.remove('showDetail')
 }