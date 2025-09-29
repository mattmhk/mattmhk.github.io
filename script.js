// Global variables
let currentSlide = 0;
let slideInterval;
let timelineEvents = [];

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
        title: 'Becoming Official',
        date: '2025-05-01',
        description: 'The day we decided to make it official and start this beautiful journey together.'
    },
    {
        id: 2,
        title: 'First Time Meeting IRL',
        date: '2025-07-04',
        description: 'I was so nervous, my heart was pounding like crazy! But I fell in love with you even more as soon as I saw you.'
    },
    {
        id: 3,
        title: 'First Date',
        date: '2025-09-05',
        description: 'We went to Lotus to eat Som Tum and had some drinks hehe'
    },
    {
        id: 4,
        title: 'Second Time Meeting IRL',
        date: '2025-09-10',
        description: 'It was like meeting for the first time all over again!!! Both our hearts were racing'
    },
    {
        id: 5,
        title: 'Our First Time',
        date: '2025-09-12',
        description: 'Two lovefools deciding to give each others virginity.'
    },
    {
        id: 6,
        title: 'Our Hardest Goodbye Yet',
        date: '2025-09-20',
        description: 'Who knew saying goodbye to each other would be this emotional (I actually cried by myself the night before but I didn\'t tell you because I was shy)'
    },
    {
        id: 7,
        title: '5 Month Anniversary',
        date: '2025-10-01',
        description: 'Celebrating 5 amazing months of love, laughter, and growing together.'
    }
];


// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load sample data first
    timelineEvents = [...sampleTimelineEvents];
    
    // Initialize components
    initializeIntro();
    initializeNavigation();
    initializePhotoWall();
    initializeTimeline();
    createRomanticEffects();
    
    // Update displays after everything is initialized
    renderTimeline();
});

// Intro Sequence Functions
function initializeIntro() {
    startIntroSlideshow();
    updateProgressBar();
}

function startIntroSlideshow() {
    slideInterval = setInterval(() => {
        if (currentSlide < 3) {
            nextSlide();
        } else {
            clearInterval(slideInterval);
        }
    }, 3000);
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
