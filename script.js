// Global variables
let currentSlide = 0;
let slideInterval;
let timelineEvents = [];
let quizQuestions = [];
let currentQuizQuestion = 0;

// Sample data - replace with your actual content
const samplePhotos = [
    { src: '1.jpg?w=400&h=300&fit=crop', caption: 'Our first photo together' },
    { src: '2.jpg?w=400&h=300&fit=crop', caption: 'Climbing Antartica on Roblox' },
    { src: '3.jpg?w=400&h=300&fit=crop', caption: 'Our first boquet' },
    { src: '4.jpg?w=400&h=300&fit=crop', caption: 'Our second boquet' },
    { src: '5.jpg?w=400&h=300&fit=crop', caption: 'Our first photo IRL' },
    { src: '6.jpg?w=400&h=300&fit=crop', caption: 'Meeting your mother' },
    { src: '7.jpg?w=400&h=300&fit=crop', caption: 'Our first date' },
    { src: '8.jpg?w=400&h=300&fit=crop', caption: 'Saturday night market run' },
    { src: '9.jpg?w=400&h=300&fit=crop', caption: 'What a romantic kiss' },
    { src: '10.jpg?w=400&h=300&fit=crop', caption: 'Your favorite photobooth pic' },
    { src: '11.jpg?w=400&h=300&fit=crop', caption: 'Our future family :3' },
    { src: '12.jpg?w=400&h=300&fit=crop', caption: 'Cutepie' },
    { src: '13.jpg?w=400&h=300&fit=crop', caption: 'Me when you bully me' },
    { src: '14.jpg?w=400&h=300&fit=crop', caption: 'Second Time Meeting' },
    { src: '15.jpg?w=400&h=300&fit=crop', caption: 'Kwae Ti Yo Date' },
    { src: '16.jpg?w=400&h=300&fit=crop', caption: 'Lunch at passport' },
    { src: '17.jpg?w=400&h=300&fit=crop', caption: 'Sushi Date' },
    { src: '18.jpg?w=400&h=300&fit=crop', caption: 'Raining at Sat Market' },
    { src: '19.jpg?w=400&h=300&fit=crop', caption: 'Wattana <3' },
    { src: '20.jpg?w=400&h=300&fit=crop', caption: 'Laundry Run' },
    { src: '21.jpg?w=400&h=300&fit=crop', caption: 'Hotpotttttt' },
    { src: '22.jpg?w=400&h=300&fit=crop', caption: 'My fav pic' },
    { src: '23.jpg?w=400&h=300&fit=crop', caption: 'Late night Mu Kawt and BBQ' },
    { src: '24.jpg?w=400&h=300&fit=crop', caption: 'MALATANG MALATANG ~' },
    { src: '25.jpg?w=400&h=300&fit=crop', caption: 'Kissing in others house' },
    { src: '26.jpg?w=400&h=300&fit=crop', caption: 'You basically made them both ToT' },
    { src: '27.jpg?w=400&h=300&fit=crop', caption: 'My queen' },
    { src: '28.jpg?w=400&h=300&fit=crop', caption: 'Miniseoulllllll' },
    { src: '29.jpg?w=400&h=300&fit=crop', caption: 'Date night at Mable' },
    { src: '30.jpg?w=400&h=300&fit=crop', caption: 'First time trying these TwT' },
    { src: '31.jpg?w=400&h=300&fit=crop', caption: 'My princess' },
    { src: '32.jpg?w=400&h=300&fit=crop', caption: 'Badass couple' },
];

const sampleTimelineEvents = [
    {
        id: 1,
        title: 'First Meeting',
        date: '2025-02-27',
        description: 'The day we first met and everything changed forever.'
    },
    {
        id: 2,
        title: 'First Game of Roblox - Blair',
        date: '2025-03-12',
        description: 'I used to think you were actually 25! ToT'
    },
    {
        id: 3,
        title: 'Becoming Official',
        date: '2025-05-01',
        description: 'The day we decided to make it official and start this beautiful journey together.'
    },
    {
        id: 4,
        title: 'First Time Meeting IRL',
        date: '2025-07-04',
        description: 'I was so nervous, my heart was pounding like crazy! But I fell in love with you even more as soon as I saw you.'
    },
    {
        id: 5,
        title: 'First Date',
        date: '2025-07-05',
        description: 'We went to Lotus to eat Som Tum and had some drinks hehe'
    },
    {
        id: 6,
        title: 'Second Time Meeting IRL',
        date: '2025-09-10',
        description: 'It was like meeting for the first time all over again!!! Both our hearts were racing'
    },
    {
        id: 7,
        title: 'Our First Time',
        date: '2025-09-12',
        description: 'Two lovefools deciding to give each others virginity.'
    },
    {
        id: 8,
        title: 'Our Hardest Goodbye Yet',
        date: '2025-09-20',
        description: 'Who knew saying goodbye to each other would be this emotional (I actually cried by myself the night before but I didn\'t tell you because I was shy)'
    },
    {
        id: 9,
        title: '5 Month Anniversary',
        date: '2025-10-01',
        description: 'Celebrating 5 amazing months of love, laughter, and growing together.'
    }
];

// Quiz data (10 read-only questions)
const sampleQuizQuestions = [
    { id: 1, question: 'Where did we first meet?', options: ['Discord VC', '#general', '#feet-reveal', '#anime'], correct: 0 },
    { id: 2, question: 'Our first Roblox game together?', options: ['Adopt Me', 'Blair', 'Brookhaven', 'Death Rails'], correct: 1 },
    { id: 3, question: 'Date we became official?', options: ['May 1, 2025', 'July 4, 2025', 'Sept 5, 2025', 'Oct 1, 2025'], correct: 0 },
    { id: 4, question: 'First IRL meeting date?', options: ['July 4, 2025', 'Sept 10, 2025', 'Feb 27, 2025', 'Sept 12, 2025'], correct: 0 },
    { id: 5, question: 'First date spot?', options: ['Lotus', 'Passport', 'Sat Market', 'Mable'], correct: 0 },
    { id: 6, question: 'What did I eat at Mable?', options: ['Fruitti di Mare', 'Cabonara', 'Ravioli', 'Beef tartare'], correct: 2 },
    { id: 7, question: 'Which one did we not eat at Passport?', options: ['Burger', 'French Fries', 'Citrus Salad', 'Egg Benedict'], correct: 2 },
    { id: 8, question: 'When did we lose our virginity?', options: ['September 10', 'September 11', 'September 12', 'September 13'], correct: 2 },
    { id: 9, question: 'Our second IRL meet date?', options: ['Sept 5', 'Sept 10', 'Sept 12', 'Sept 20'], correct: 1 },
    { id: 10, question: 'Will you marry me?', options: ['Yesssss', 'Nah uh', 'Hell nah', 'You are wierd'], correct: 0 }
];


// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load sample data first
    timelineEvents = [...sampleTimelineEvents];
    quizQuestions = [...sampleQuizQuestions];
    
    // Initialize components
    initializeLoveLetterOpening();
    initializeNavigation();
    initializePhotoWall();
    initializeTimeline();
    createRomanticEffects();
    
    // Update displays after everything is initialized
    renderTimeline();
    renderQuiz();

    // Music toggle
    const musicToggle = document.getElementById('music-toggle');
    const audio = document.getElementById('bg-music');
    if (musicToggle && audio) {
        musicToggle.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().catch(() => {});
                musicToggle.textContent = '🔊 Music';
            } else {
                audio.pause();
                musicToggle.textContent = '🔈 Music';
            }
        });
    }

    // Try to autoplay immediately on load (may be blocked by some browsers)
    try {
        if (audio) {
            audio.volume = 0.25;
            const p = audio.play();
            if (p && typeof p.then === 'function') {
                p.then(() => {
                    if (musicToggle) musicToggle.textContent = '🔊 Music';
                }).catch(() => {
                    // Autoplay blocked; keep button to start manually
                    if (musicToggle) musicToggle.textContent = '🔈 Music';
                });
            }
        }
    } catch (_) {}
});

// Love Letter Opening Animation Functions
function initializeLoveLetterOpening() {
    // Hide love letter opening and show intro sequence after 5 seconds
    const loveLetterOpening = document.getElementById('love-letter-opening');
    const introSequence = document.getElementById('intro-sequence');
    
    console.log('Love letter opening initialized');
    
    // Add click handler to skip animation
    loveLetterOpening.addEventListener('click', () => {
        console.log('Skipping love letter animation');
        loveLetterOpening.style.opacity = '0';
        setTimeout(() => {
            loveLetterOpening.style.display = 'none';
            introSequence.classList.remove('hidden');
            introSequence.style.opacity = '1';
            startIntroSlideshow();
            updateProgressBar();
        }, 300);
    });
    
    setTimeout(() => {
        console.log('Starting transition to intro sequence');
        loveLetterOpening.style.opacity = '0';
        setTimeout(() => {
            loveLetterOpening.style.display = 'none';
            introSequence.classList.remove('hidden');
            introSequence.style.opacity = '1';
            console.log('Intro sequence should now be visible');
            startIntroSlideshow();
            updateProgressBar();
        }, 800);
    }, 5000);
}

// Intro Sequence Functions
function initializeIntro() {
    // This function is called after the love letter transition
    startIntroSlideshow();
    updateProgressBar();
}

function startIntroSlideshow() {
    // Reset to first slide
    currentSlide = 0;
    const slides = document.querySelectorAll('.intro-slide');
    slides.forEach(s => s.classList.remove('active'));
    if (slides[0]) slides[0].classList.add('active');
    updateProgressBar();

    // Ensure equal timing for all slides
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        const lastIndex = slides.length - 1;
        if (currentSlide < lastIndex) {
            nextSlide();
        } else {
            clearInterval(slideInterval);
        }
    }, 3500); // 3.5s per slide for comfortable reading
}

function nextSlide() {
    const slides = document.querySelectorAll('.intro-slide');
    const progressBar = document.querySelector('.progress-bar');
    
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    
    if (currentSlide < slides.length) {
        slides[currentSlide].classList.add('active');
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progress = ((currentSlide + 1) / 4) * 100;
    progressBar.style.width = progress + '%';
}

function startMainExperience() {
    const introSequence = document.getElementById('intro-sequence');
    const mainApp = document.getElementById('main-app');
    
    introSequence.style.opacity = '0';
    setTimeout(() => {
        introSequence.style.display = 'none';
        mainApp.classList.remove('hidden');
        mainApp.style.opacity = '1';
        // Start background music after user interaction
        try {
            const audio = document.getElementById('bg-music');
            if (audio) {
                audio.volume = 0.25;
                audio.play().catch(() => {});
            }
        } catch (_) {}
    }, 500);
}

// Navigation Functions
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const homeCards = document.querySelectorAll('.home-card');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            showSection(section);
            updateActiveNav(item);
        });
    });
    
    homeCards.forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.section;
            showSection(section);
            updateActiveNav(document.querySelector(`[data-section="${section}"]`));
        });
    });
}

function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Re-render timeline when timeline section is shown
        if (sectionName === 'timeline') {
            setTimeout(() => {
                renderTimeline();
            }, 50);
        }
        // Ensure quiz renders when quiz section is shown
        if (sectionName === 'quiz') {
            setTimeout(() => {
                renderQuiz();
            }, 50);
        }
    }
}

function updateActiveNav(activeItem) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Photo Wall Functions
function initializePhotoWall() {
    renderPhotoWall();
}

function renderPhotoWall() {
    const photoGrid = document.getElementById('photo-grid');
    photoGrid.innerHTML = '';
    
    samplePhotos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <div class="photo-overlay">
                <p>${photo.caption}</p>
            </div>
        `;
        
        photoItem.addEventListener('click', () => {
            openPhotoModal(photo);
        });
        
        photoGrid.appendChild(photoItem);
    });
}

function openPhotoModal(photo) {
    // Create a simple modal for photo viewing
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 80%; text-align: center;">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <img src="${photo.src}" alt="${photo.caption}" style="max-width: 100%; border-radius: 10px;">
            <h3 style="margin-top: 1rem; color: #8b4a6b;">${photo.caption}</h3>
        </div>
    `;
    document.body.appendChild(modal);
}

// Timeline Functions

function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) {
        console.log('Timeline container not found');
        return;
    }
    
    if (!timelineEvents || timelineEvents.length === 0) {
        console.log('No timeline events to render');
        timelineContainer.innerHTML = '<p style="text-align: center; color: #666;">No timeline events available.</p>';
        return;
    }
    
    timelineContainer.innerHTML = '';
    
    // Sort events by date
    const sortedEvents = [...timelineEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    sortedEvents.forEach(event => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${formatDate(event.date)}</div>
                <h3 class="timeline-title">${event.title}</h3>
                <p class="timeline-description">${event.description}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
    
    console.log(`Rendered ${sortedEvents.length} timeline events`);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}


// Love Letter Functions


// Game Functions

function startMemoryGame() {
    const gameContainer = document.getElementById('memory-game');
    gameContainer.classList.remove('hidden');
    
    const gameContent = document.getElementById('memory-content');
    
    // Select 4 random photos from your collection for the memory game
    const shuffledPhotos = [...samplePhotos].sort(() => 0.5 - Math.random()).slice(0, 4);
    const cards = [];
    
    // Create pairs (each photo appears twice)
    shuffledPhotos.forEach((photo, index) => {
        cards.push({ id: index * 2, pair: index, photo: photo });
        cards.push({ id: index * 2 + 1, pair: index, photo: photo });
    });
    
    // Shuffle the cards
    const shuffledCards = cards.sort(() => 0.5 - Math.random());
    
    gameContent.innerHTML = `
        <div style="text-align: center;">
            <h4>Memory Match Game</h4>
            <p>Find matching pairs of our photos!</p>
            <div id="memory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px; margin: 2rem auto;">
                ${shuffledCards.map(card => `
                    <div class="memory-card" data-card="${card.id}" data-pair="${card.pair}" onclick="flipMemoryCard(${card.id})" style="width: 80px; height: 80px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; position: relative; overflow: hidden;">
                        <div class="card-back" style="position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                            ❤️
                        </div>
                        <div class="card-front" style="position: absolute; width: 100%; height: 100%; display: none; align-items: center; justify-content: center;">
                            <img src="${card.photo.src}" alt="${card.photo.caption}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="add-event-btn" onclick="resetMemoryGame()">New Game</button>
        </div>
    `;
    
    initializeMemoryGame();
}

let flippedCards = [];
let matchedPairs = 0;

function initializeMemoryGame() {
    flippedCards = [];
    matchedPairs = 0;
}

function flipMemoryCard(cardId) {
    const card = document.querySelector(`[data-card="${cardId}"]`);
    if (flippedCards.length >= 2 || card.classList.contains('flipped')) return;
    
    card.classList.add('flipped');
    const cardBack = card.querySelector('.card-back');
    const cardFront = card.querySelector('.card-front');
    
    cardBack.style.display = 'none';
    cardFront.style.display = 'flex';
    
    flippedCards.push(cardId);
    
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const pair1 = document.querySelector(`[data-card="${card1}"]`).dataset.pair;
    const pair2 = document.querySelector(`[data-card="${card2}"]`).dataset.pair;
    
    if (pair1 === pair2) {
        matchedPairs++;
        if (matchedPairs === 4) {
            setTimeout(() => {
                alert('Congratulations! You found all the pairs! 💕');
            }, 500);
        }
    } else {
        const card1Element = document.querySelector(`[data-card="${card1}"]`);
        const card2Element = document.querySelector(`[data-card="${card2}"]`);
        
        card1Element.classList.remove('flipped');
        card2Element.classList.remove('flipped');
        
        card1Element.querySelector('.card-back').style.display = 'flex';
        card1Element.querySelector('.card-front').style.display = 'none';
        card2Element.querySelector('.card-back').style.display = 'flex';
        card2Element.querySelector('.card-front').style.display = 'none';
    }
    
    flippedCards = [];
}

function resetMemoryGame() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        card.classList.remove('flipped');
        card.querySelector('.card-back').style.display = 'flex';
        card.querySelector('.card-front').style.display = 'none';
    });
    initializeMemoryGame();
}

function closeMemoryGame() {
    document.getElementById('memory-game').classList.add('hidden');
}

// Romantic Effects
function createRomanticEffects() {
    createFloatingHearts();
    createSparkles();
}

function createFloatingHearts() {
    const heartsContainer = document.getElementById('floating-hearts');
    
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }
    }, 2000);
}

function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    
    setInterval(() => {
        if (Math.random() < 0.2) { // 20% chance every interval
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }
    }, 1000);
}

// Utility Functions
function saveData() {
    localStorage.setItem('timelineEvents', JSON.stringify(timelineEvents));
}

function loadData() {
    const savedTimeline = localStorage.getItem('timelineEvents');
    
    if (savedTimeline) {
        timelineEvents = JSON.parse(savedTimeline);
    }
}

// Load saved data on page load
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    // Ensure timeline events are available
    if (!timelineEvents || timelineEvents.length === 0) {
        timelineEvents = [...sampleTimelineEvents];
    }
    
    // Render timeline with a small delay to ensure DOM is ready
    setTimeout(() => {
        renderTimeline();
    }, 100);
});

// Save data when changes are made
window.addEventListener('beforeunload', saveData);

// Quiz Functions (read-only)
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer || quizQuestions.length === 0) return;
    
    // Ensure index bounds
    if (currentQuizQuestion >= quizQuestions.length) currentQuizQuestion = 0;
    
    const q = quizQuestions[currentQuizQuestion];
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h3>Question ${currentQuizQuestion + 1} of ${quizQuestions.length}</h3>
            <p>${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectQuizOption(${index})">${option}</div>
                `).join('')}
            </div>
            <button class="add-event-btn" onclick="nextQuizQuestion()" style="margin-top: 1rem;">${currentQuizQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}</button>
        </div>
    `;
}

function selectQuizOption(optionIndex) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => option.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    quizQuestions[currentQuizQuestion].selected = optionIndex;
}

function nextQuizQuestion() {
    if (currentQuizQuestion < quizQuestions.length - 1) {
        currentQuizQuestion++;
        renderQuiz();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const quizContainer = document.getElementById('quiz-container');
    let correct = 0;
    quizQuestions.forEach(q => { if (q.selected === q.correct) correct++; });
    const percent = Math.round((correct / quizQuestions.length) * 100);
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h3>Quiz Complete!</h3>
            <p>You got ${correct} out of ${quizQuestions.length} questions correct!</p>
            <p>${percent}% - ${percent >= 80 ? 'Amazing!' : percent >= 60 ? 'Great job!' : 'So cute, keep learning about us!'} </p>
            <button class="add-event-btn" onclick="restartQuiz()">Take Quiz Again</button>
        </div>
    `;
}

function restartQuiz() {
    currentQuizQuestion = 0;
    quizQuestions.forEach(q => delete q.selected);
    renderQuiz();
}
