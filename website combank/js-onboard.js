var progressBar = document.querySelector('progress'),
    ticking = false;

var winheight, docheight, trackLength, throttlescroll;

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function getMeasurements() {
    winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = getDocHeight();
    trackLength = docheight - winheight
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
    }
}

function update() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var pctScrolled = scrollTop / trackLength * 100;
    var wholePct = Math.floor(pctScrolled);
    progressBar.value = pctScrolled;

    ticking = false;
}

getMeasurements();
window.addEventListener('scroll', requestTick, false);
window.addEventListener("resize", getMeasurements, false);