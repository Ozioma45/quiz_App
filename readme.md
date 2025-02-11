# Quiz App

A simple interactive quiz application built with JavaScript that allows users to answer multiple-choice questions, track their progress, and view their final score.

- Live Preview [CLICK HERE](https://ozioma45.github.io/quiz_App/)

## Features

- Dynamic question rendering
- Multiple-choice answer selection
- Navigation between questions (Next/Previous buttons)
- Progress bar to indicate quiz completion
- Score calculation and result display
- Ability to restart the quiz

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run

1. Clone this repository:
   ```sh
   git clone https://github.com/Ozioma45/quiz_App
   ```
2. Navigate to the project directory:
   ```sh
   cd quiz_App
   ```
3. Open `index.html` in your browser.

## Usage

1. Click on an answer to select it.
2. Click the "Next" button to proceed to the next question.
3. Use the "Previous" button to navigate back if needed.
4. At the end of the quiz, your score will be displayed.
5. Click the "Restart" button to take the quiz again.

## Code Structure

- `index.html` - Contains the structure of the quiz UI.
- `style.css` - Styles the quiz elements for a user-friendly interface.
- `script.js` - Handles the quiz logic, including question rendering, answer selection, navigation, and scoring.

## Known Issues & Fixes

### Selected Answers Persist After Restart

- The issue was caused by not resetting the `selectedAnswers` object.
- **Fix:** Ensure `selectedAnswers = {};` is set in `restartQuiz()`.

## Future Improvements

- Add a timer for each question.
- Implement a database to store quiz results.
- Allow users to add custom questions.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute and enhance this project! 🚀
