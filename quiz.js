// Function Declaration
function checkAnswer() {
    // Correct Answer Variable
    var correctAnswer = "4";

    // Retrieve User's Answer
    var selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option is selected
    if (selectedOption) {
        var userAnswer = selectedOption.value;

        // Compare User Answer with Correct Answer
        var feedback = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option selected, provide feedback
        var feedback = document.getElementById('feedback');
        feedback.textContent = "Please select an answer.";
    }
}

// Add Event Listener to Submit Button
var submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
