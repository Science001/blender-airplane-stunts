mv = document.getElementById("model-viewer")
btn = document.getElementById("open-btn")
introCard = document.getElementById("intro")
airplaneImg = document.getElementById("airplane-img")
var waiting = false

function launchIfWaiting() {
    if (waiting) launch()
}

function launch() {
    introCard.style.display = "none";
    airplaneImg.style.display = "none";
    mv.style.filter = "none";
    setTimeout(function () { mv.play() }, 2000)
}

mv.addEventListener('load', function () {
    mv.pause();
    mv.currentTime = 0;
    mv.style.opacity = 1;
    launchIfWaiting()
})

btn.addEventListener('click', function () {
    if (mv.loaded) {
        launch()
    }
    else {
        btn.innerHTML = "Setting up..."
        waiting = true
    }
})