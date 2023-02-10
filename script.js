const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll('img')[0],
arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
const showGideIcons = () =>{
    if(carousel.scrollLeft == 0){
        arrowIcons[0].style.display = 'none';
    }
    else{
        arrowIcons[0].style.display = 'block';
    }

    if (carousel.scrollLeft == scrollWidth) {
        arrowIcons[1].style.display = 'none';
    }
    else {
        arrowIcons[1].style.display = 'block';
    }
}

arrowIcons.forEach(icon =>{
    icon.addEventListener('click', () =>{
        carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showGideIcons(),60);
    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging');
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const draggStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
}
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('mouseup', draggStop)