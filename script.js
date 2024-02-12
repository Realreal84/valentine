function revealAnswer(answer) {
    document.getElementById('catResponse').style.display = 'block';
    document.getElementById('catResponse').innerHTML = '<img src="cat-jump.gif" alt="Jumping Cat" class="jumping-cat"><p class="yay-text">YAYAYAYAYAY</p>';
    document.getElementById('answerOfCourse').style.display = 'none';
    document.getElementById('answerDuh').style.display = 'none';
}
