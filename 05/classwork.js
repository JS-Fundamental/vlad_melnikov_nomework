let circle = document.getElementsByClassName('cirkle');
function addClassName(arr) {
    let className, circleColor;
    for (let i = 0; i < arr.length; i++)
    { className = circle[i].dataset.anim; arr[i].classList.add(className); circleColor = circle[i].firstElementChild.dataset.color; arr[i].style.backgroundColor = circleColor; };
}; addClassName(circle);