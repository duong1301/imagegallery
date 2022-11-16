let closeElement = document.querySelector('.show-view__top')
let viewShow = document.querySelector('.show-view')
let imgElements = document.querySelectorAll('.grid-view .image img');
let imgURLs = Array.from(imgElements).map(function(img) {
    return img.src;
})
let controlBtns = document.querySelectorAll('.show-view .control');
let numOfPic = 8;



closeElement.onclick = closeHandle;


imgElements.forEach(element => {
    element.onclick = function(e) {
        viewShow.classList.remove('hide');
        let imgURL = e.target.getAttribute('src');
        let imgIndex = e.target.getAttribute('img-index');
        let imgShowModeElement = document.querySelector('.show-view__body img')
        imgShowModeElement.src = imgURL;
        imgShowModeElement.setAttribute('img-index', imgIndex)
        controlBtns[0].style.visibility = 'unset'
        controlBtns[1].style.visibility = 'unset'
        if (imgIndex == 0) {
            controlBtns[0].style.visibility = 'hidden'
        }
        if (imgIndex == numOfPic - 1) {
            controlBtns[1].style.visibility = 'hidden'

        }
    }
})
console.log(imgURLs);

function closeHandle(e) {
    viewShow.classList.add('hide');
}

function changePic(num) {
    let view = document.querySelector('.show-view__body .content img');
    let currentImgIndex = view.getAttribute('img-index');
    let newImgIndex = Number(currentImgIndex) + num;
    view.setAttribute('img-index', newImgIndex)
    view.setAttribute('src', imgURLs[newImgIndex])
    console.log(newImgIndex);
    return newImgIndex
}

controlBtns[0].onclick = function() {
    let index = changePic(-1);
    controlBtns[1].style.visibility = 'unset';

    if (index == 0) {
        this.style.visibility = 'hidden'
    }

}

controlBtns[1].onclick = function() {
    let index = changePic(+1);
    controlBtns[0].style.visibility = 'unset';

    if (index == numOfPic - 1) {
        this.style.visibility = 'hidden'
    }

}