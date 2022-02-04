const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const pauseButton = document.querySelector('#pause')
const timer = document.querySelector('#counter')
const buttons = document.getElementsByTagName('button')
let count = 0;
let intervalID;
function disableButtons() {
    plusButton.disabled = true
    minusButton.disabled = true

}
function enableButtons() {
    plusButton.disabled = false
    minusButton.disabled = false
}

function replacePause() {
    pauseButton.textContent = 'resume'
}
function startCount() {
    timer.textContent = count += 1
}
function stopCount() {
    timer.textContent = count = 0
}

document.addEventListener('DOMContentLoaded', (event) => {
    startCount(0)
    intervalID = setInterval(startCount, 1000)
})

//plus button
plusButton.addEventListener('click', () => {
    intervalID = setInterval(function () {
        count += 1;
        timer.textContent = count;
    }, 1000)
})
   
//minus button
minusButton.addEventListener('click', () => {
    intervalID = setInterval(function () {
        count -= 1;
        timer.textContent = count;
    }, 1000)
})


pauseButton.addEventListener('click', function(){
    intervalID = setInterval(function () {
        disableButtons()
        replacePause()
        pauseButton.setAttribute('class', 'frozen')
        timer.textContent = count;
    }, 1000)
    // if(pauseButton.classList.contains('frozen')) {
    //     pauseButton.classList.remove('frozen')
    //     intervalID = clearInterval()
    // }
    
    
//pause button not working or replacing
// pauseButton.addEventListener('click', () => {
//     intervalID = setInterval(function (pauseButton){
//         if(pauseButton.textContent == 'pause'){
//         replacePause();
//         stopCount();
//         disableButtons()
//         } else {
//         enableButtons();
//         startCount()
//         clearTimeout()
//     }
// })
// })

