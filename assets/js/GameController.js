var score = 0,
    highScore = 0,
    time = 30,
    timer,
    IsPlaying = false,
    timeBoard = document.getElementById('time'),
    scoreboard = document.getElementById('score'),
    btnStart = document.getElementById('btn');

function fallDown(apple) {
    if(!(IsPlaying && apple instanceof HTMLElement)){
        return;
   }
    apple.setAttribute('data-top', apple.style.top);
    apple.style.top = "380px";
    score += 5;
    renderScore();
    hideFallenApple(apple);
}

function hideFallenApple(apple) {

    setTimeout(function(){
        apple.style.display = 'none';
        restoreFallenApple(apple);
    }, 500);

}

function restoreFallenApple(apple) {
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function(){
        apple.style.display = 'inline-block';
    }, 500);
}

function renderScore() {
    scoreboard.innerText = score;
    if (score > highScore) {
        highScore = score;
        document.getElementById('high').innerText = highScore;
    }
}

function startGame() {
    btnStart.disable = "disable";
    IsPlaying = true;
    renderScore();
    timer = setInterval(countDown, 1000);
}

function countDown() {
    time -= 1;
    timeBoard.innerText = time;
    if (time == 0) {
        clearInterval(timer);
        endGame();
    }
}

function endGame() {
    IsPlaying = false;
    alert("Your score is: " + score);
    score = 0;
    time = 30;
    btnStart.removeAttribute('disable');
}