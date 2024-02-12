function revealAnswer(answer) {
    console.log('revealAnswer function executed');
    
    var catResponse = document.getElementById('catResponse');

    // Clear any previous content
    catResponse.innerHTML = '';

    // Create a new paragraph element for the YAYAYAYAY text
    var yayText = document.createElement('p');
    yayText.className = 'yay-text';
    yayText.innerText = 'YAYAYAYAY';

    // Create a new image element for the jumping cat
    var jumpingCat = document.createElement('img');
    jumpingCat.src = 'cat-jump.gif'; // Replace with the actual filename
    jumpingCat.alt = 'Jumping Cat';
    jumpingCat.className = 'jumping-cat';

    // Append the elements to the catResponse container
    catResponse.appendChild(jumpingCat);
    catResponse.appendChild(yayText);

    // Show the catResponse container
    catResponse.style.display = 'block';

    // Disable the buttons after clicking
    document.getElementById('answerOfCourse').disabled = true;
    document.getElementById('answerDuh').disabled = true;
}
