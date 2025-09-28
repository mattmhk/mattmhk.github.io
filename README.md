# Our 5 Month Anniversary Website 💕

A romantic and interactive website to celebrate your 5-month anniversary together. This website features a Spotify Wrapped-style intro, interactive sections, and romantic games.

## Features

### 🎬 Intro Sequence
- Spotify Wrapped-style slideshow with smooth transitions
- Automatic progression through romantic messages
- Elegant fade-in animations

### 🏠 Main Hub
- Beautiful navigation with romantic theme
- Home dashboard with quick access to all sections
- Responsive design for all devices

### 📸 Photo Wall
- Interactive masonry grid layout
- Hover effects and smooth animations
- Click to view photos in full size
- Easy to customize with your own photos

### ⏰ Interactive Timeline
- Add, edit, and delete relationship milestones
- Beautiful timeline design with romantic colors
- Automatic date formatting
- Persistent storage (saves to browser)

### 💌 Love Letter
- Handwritten-style design
- Editable content (click Edit to modify)
- Saves automatically to browser storage
- Perfect for personal messages

### ❓ Relationship Quiz
- Customizable questions and answers
- Interactive quiz interface
- Score tracking and results
- Edit questions through the interface

### 🎮 Mini Games
- **Jigsaw Puzzle**: Drag and drop puzzle pieces
- **Memory Match**: Find matching pairs of hearts
- Both games are fully interactive and fun

### ✨ Romantic Effects
- Floating hearts animation
- Sparkling effects
- Warm color palette (pinks, reds, golds)
- Elegant typography

## Customization Guide

### Adding Your Photos
1. Replace the sample photos in the `samplePhotos` array in `script.js`
2. Update the `src` property with your photo URLs
3. Add meaningful captions to the `caption` property

```javascript
const samplePhotos = [
    { src: 'your-photo-url-1.jpg', caption: 'Your caption here' },
    { src: 'your-photo-url-2.jpg', caption: 'Another caption' },
    // Add more photos...
];
```

### Customizing Timeline Events
1. Edit the `sampleTimelineEvents` array in `script.js`
2. Add your own milestones with dates and descriptions
3. The timeline will automatically sort by date

```javascript
const sampleTimelineEvents = [
    {
        id: 1,
        title: 'Your Event Title',
        date: '2024-01-15', // YYYY-MM-DD format
        description: 'Your event description'
    },
    // Add more events...
];
```

### Editing Quiz Questions
1. Modify the `sampleQuizQuestions` array in `script.js`
2. Update questions, options, and correct answers
3. Use the "Edit Questions" button in the quiz section for easy editing

```javascript
const sampleQuizQuestions = [
    {
        id: 1,
        question: 'Your question here?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correct: 0 // Index of correct answer (0-3)
    },
    // Add more questions...
];
```

### Personalizing the Love Letter
1. Click the "Edit" button in the Love Letter section
2. Modify the text directly in the browser
3. Click "Save" to store your changes
4. The content will be saved automatically

### Changing Colors and Styling
- Edit the CSS variables in `styles.css`
- The main color scheme uses warm pinks and reds
- All colors are defined with CSS custom properties for easy customization

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser
2. **Watch the intro**: Enjoy the romantic slideshow introduction
3. **Explore sections**: Use the navigation or home cards to explore different sections
4. **Add content**: Use the edit buttons to personalize content
5. **Play games**: Try the jigsaw puzzle and memory match games
6. **Save changes**: All your edits are automatically saved to your browser

## Technical Details

- **Pure HTML, CSS, and JavaScript** - No external dependencies
- **Responsive design** - Works on desktop, tablet, and mobile
- **Local storage** - Your data is saved in your browser
- **Modern animations** - Smooth transitions and effects
- **Accessible** - Keyboard navigation and screen reader friendly

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Tips for Best Experience

1. **Use high-quality photos** for the photo wall and games
2. **Add meaningful dates** to your timeline events
3. **Personalize the love letter** with your own words
4. **Create fun quiz questions** about your relationship
5. **Test on different devices** to ensure everything looks great

## Future Enhancements

The website is designed to be easily extensible. You could add:
- Background music
- More mini-games
- Photo upload functionality
- Social sharing features
- Print-friendly versions

## Support

If you need help customizing the website or have questions, the code is well-commented and organized for easy modification.

---

**Made with ❤️ for your special anniversary**

Enjoy celebrating your 5 months together! 💕
