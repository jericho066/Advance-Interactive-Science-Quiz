# 🧪 Interactive Science Quiz

A comprehensive, responsive web-based quiz application covering multiple science subjects. Test your knowledge across Physics, Biology, Chemistry, Astronomy, Geology, and Computer Science with an intuitive interface and detailed answer review system.

## ✨ Features

### Core Functionality
- **6 Science Topics**: Physics, Biology, Chemistry, Astronomy, Geology, and Computer Science
- **Flexible Quiz Length**: Choose from 10, 15, 20, 30, 40, or 50 questions
- **Question Randomization**: Questions are shuffled for unique quiz experiences
- **Real-time Feedback**: Instant feedback with streak tracking
- **Progress Tracking**: Visual progress bar throughout the quiz

### Interactive Elements
- **Answer Review System**: Detailed breakdown showing correct answers and your selections
- **Performance Statistics**: Score tracking with passing threshold (70%)
- **Streak Counter**: Gamification element tracking consecutive correct answers
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Smooth Animations**: Hover effects and transitions for better interaction
- **Visual Feedback**: Color-coded answer states (correct/incorrect)
- **Comprehensive Results**: Final score with detailed statistics
- **Restart Functionality**: Easy quiz reset with topic re-selection

## 🚀 Demo

[Live Demo](https://jericho066.github.io/advance-interactive-science-quiz/)


## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: 
  - Flexbox and Grid layouts
  - Custom properties for theming
  - Responsive design with clamp() functions
  - Smooth animations and transitions
- **Vanilla JavaScript**: 
  - ES6+ features
  - Modular code organization
  - Event-driven architecture
  - Local state management

## 📁 Project Structure

```
science-quiz/
├── index.html              # Main HTML file
├── src/
│   ├── style.css           # Main stylesheet
│   ├── script.js           # Core JavaScript logic
│   └── feedbacks.js        # Feedback messages system
├── questions/
│   ├── physics.js          # Physics questions (60+ questions)
│   ├── biology.js          # Biology questions (60+ questions)
│   ├── chemistry.js        # Chemistry questions (60+ questions)
│   ├── astronomy.js        # Astronomy questions (60+ questions)
│   ├── geology.js          # Geology questions (60+ questions)
│   └── com-sci.js          # Computer Science questions (60+ questions)
└── README.md
```

## 🎯 How to Use

1. **Start**: Click "Okay" to proceed from the welcome screen
2. **Select Topic**: Choose from 6 available science subjects
3. **Choose Length**: Pick the number of questions (10-50)
4. **Take Quiz**: Answer questions with instant feedback
5. **Review Results**: See your final score and statistics
6. **View Answers**: Detailed review of all questions and correct answers
7. **Restart**: Try again with different settings

## 💻 Installation & Setup

### Option 1: Direct Download
```bash
# Clone the repository
git clone https://github.com/jericho066/advance-interactive-science-quiz.git

# Navigate to project directory
cd advance-interactive-science-quiz

# Open in browser
open index.html
```

### Option 2: GitHub Pages
1. Fork this repository
2. Go to repository Settings
3. Enable GitHub Pages from the main branch
4. Access via `https://your-username.github.io/science-quiz`

### Option 3: Local Development Server
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Then open http://localhost:8000
```

## 🧪 Question Database

The quiz includes 350+ carefully curated questions across six subjects:

- **Physics**: Classical mechanics, thermodynamics, electromagnetism, optics, modern physics
- **Biology**: Cell biology, genetics, ecology, anatomy, physiology
- **Chemistry**: Atomic structure, chemical bonds, reactions, organic chemistry
- **Astronomy**: Solar system, stars, galaxies, cosmology, space exploration
- **Geology**: Rock types, Earth structure, plate tectonics, mineralogy
- **Computer Science**: Programming concepts, algorithms, data structures, networking

## 🎨 Customization

### Adding New Questions
Add questions to the respective subject files in the `questions/` directory:

```javascript
{
  question: "Your question here?",
  answers: [
    { text: "Option A", correct: false },
    { text: "Option B", correct: true },
    { text: "Option C", correct: false },
    { text: "Option D", correct: false }
  ]
}
```

### Styling
Modify `src/style.css` to customize:
- Color scheme (CSS custom properties)
- Typography and spacing
- Animation timings
- Responsive breakpoints

### Adding New Topics
1. Create new question file in `questions/`
2. Add topic option in `index.html`
3. Update `selectTopic()` function in `script.js`

## 🐛 Known Issues

- Ensure all question files are properly linked in `index.html`
- Some advanced physics questions may be challenging for general audiences
- Mobile optimization is ongoing for very small screens

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Questions**: Add more questions or improve existing ones
2. **Features**: Implement new functionality (timer, difficulty levels, etc.)
3. **Bug Fixes**: Report and fix issues
4. **UI/UX**: Improve design and user experience

### Contribution Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Question difficulty levels
- [ ] Timer mode for each question
- [ ] Detailed explanations for answers
- [ ] Performance analytics over time
- [ ] Question bookmarking system
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Sound effects and music
- [ ] Achievement system

## 📄 License

This project is open source and available under the [MIT License](https://github.com/jericho066/advance-interactive-science-quiz/blob/main/LICENSE).
