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

 const showSlider = (type) => {
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
 }