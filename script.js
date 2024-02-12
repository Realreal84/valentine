function revealAnswer(answer) {
    var catResponse = document.getElementById('catResponse');
    
    var yayText = document.createElement('p');
    yayText.className = 'yay-text';
    yayText.innerText = 'YAYAYAYAY';

    var jumpingCat = document.createElement('img');
    jumpingCat.src = 'cat-jump.gif'; // Replace with the actual filename
    jumpingCat.alt = 'Jumping Cat';
    jumpingCat.className = 'jumping-cat';

    catResponse.innerHTML = ''; // Clear any previous content
    catResponse.appendChild(jumpingCat);
    catResponse.appendChild(yayText);

    document.getElementById('answerOfCourse').style.display = 'none';
    document.getElementById('answerDuh').style.display = 'none';
}
