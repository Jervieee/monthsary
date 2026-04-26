// Sweet Monthsary Message
const message = `Happy Monthsary, my love! 

Every moment with you feels like a beautiful dream I never want to wake up from. 
You are my sunshine on cloudy days, my calm in the storm, and the reason my heart beats a little faster every single day.

Thank you for filling my life with so much love, laughter, and happiness. 
I fall for you more and more with each passing day.

Here's to many more monthsaries together! 
I love you to the moon and back. ❤️`;

// Typing Effect
const typingText = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');
let charIndex = 0;

function typeMessage() {
    if (charIndex < message.length) {
        if (message.charAt(charIndex) === '\n') {
            typingText.innerHTML += '<br>';
        } else {
            typingText.innerHTML += message.charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeMessage, 50);
    } else {
        cursor.style.display = 'none';
    }
}

// Start typing after a short delay
setTimeout(typeMessage, 1000);

// Falling Hearts Canvas
const heartsCanvas = document.getElementById('heartsCanvas');
const heartsCtx = heartsCanvas.getContext('2d');
let hearts = [];

function resizeHeartsCanvas() {
    heartsCanvas.width = window.innerWidth;
    heartsCanvas.height = window.innerHeight;
}
resizeHeartsCanvas();
window.addEventListener('resize', resizeHeartsCanvas);

class Heart {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * heartsCanvas.width;
        this.y = -20;
        this.size = Math.random() * 15 + 8;
        this.speed = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.sway = Math.random() * 2;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
        this.swayOffset = Math.random() * Math.PI * 2;
        this.color = this.getRandomColor();
    }
    
    getRandomColor() {
        const colors = ['#ff4b6e', '#c9184a', '#ffb3c6', '#ff758f', '#ff8fa3', '#fff0f5'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        this.x += Math.sin(this.y * this.swaySpeed + this.swayOffset) * this.sway;
        
        if (this.y > heartsCanvas.height + 20) {
            this.reset();
        }
    }
    
    draw() {
        heartsCtx.save();
        heartsCtx.translate(this.x, this.y);
        heartsCtx.rotate((this.rotation * Math.PI) / 180);
        heartsCtx.globalAlpha = this.opacity;
        heartsCtx.fillStyle = this.color;
        heartsCtx.font = `${this.size}px Arial`;
        heartsCtx.textAlign = 'center';
        heartsCtx.textBaseline = 'middle';
        heartsCtx.fillText('❤️', 0, 0);
        heartsCtx.restore();
    }
}

// Create initial hearts
for (let i = 0; i < 50; i++) {
    const heart = new Heart();
    heart.y = Math.random() * heartsCanvas.height;
    hearts.push(heart);
}

function animateHearts() {
    heartsCtx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animateHearts);
}
animateHearts();

// Sparkles Canvas
const sparklesCanvas = document.getElementById('sparklesCanvas');
const sparklesCtx = sparklesCanvas.getContext('2d');
let sparkles = [];

function resizeSparklesCanvas() {
    sparklesCanvas.width = window.innerWidth;
    sparklesCanvas.height = window.innerHeight;
}
resizeSparklesCanvas();
window.addEventListener('resize', resizeSparklesCanvas);

class Sparkle {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * sparklesCanvas.width;
        this.y = Math.random() * sparklesCanvas.height;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random();
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
    }
    
    update() {
        this.opacity += this.fadeSpeed * this.fadeDirection;
        
        if (this.opacity >= 1) {
            this.fadeDirection = -1;
        } else if (this.opacity <= 0) {
            this.reset();
            this.opacity = 0;
            this.fadeDirection = 1;
        }
    }
    
    draw() {
        sparklesCtx.save();
        sparklesCtx.globalAlpha = this.opacity;
        sparklesCtx.fillStyle = '#ffffff';
        sparklesCtx.shadowColor = '#ffb3c6';
        sparklesCtx.shadowBlur = 10;
        sparklesCtx.beginPath();
        sparklesCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        sparklesCtx.fill();
        sparklesCtx.restore();
    }
}

// Create sparkles
for (let i = 0; i < 60; i++) {
    sparkles.push(new Sparkle());
}

function animateSparkles() {
    sparklesCtx.clearRect(0, 0, sparklesCanvas.width, sparklesCanvas.height);
    sparkles.forEach(sparkle => {
        sparkle.update();
        sparkle.draw();
    });
    requestAnimationFrame(animateSparkles);
}
animateSparkles();

// Rose Click - Burst Hearts Effect
const rose = document.getElementById('rose');

rose.addEventListener('click', function(e) {
    const rect = rose.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        createBurstHeart(centerX, centerY);
    }
});

function createBurstHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'burst-heart';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 150 + 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.setProperty('--tx', tx + 'px');
    heart.style.setProperty('--ty', ty + 'px');
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    const colors = ['#ff4b6e', '#c9184a', '#ffb3c6', '#ff758f'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add mouse trail hearts
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.92) {
        createTrailHeart(e.clientX, e.clientY);
    }
});

function createTrailHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'burst-heart';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.setProperty('--tx', (Math.random() - 0.5) * 60 + 'px');
    heart.style.setProperty('--ty', (Math.random() - 0.5) * 60 - 30 + 'px');
    heart.style.fontSize = '12px';
    heart.style.animationDuration = '1.5s';
    
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

// Add floating text effect on click anywhere
document.addEventListener('click', function(e) {
    if (e.target.closest('.rose')) return;
    
    const texts = ['I Love You!', '❤️', 'Forever', 'My Love', 'XOXO'];
    const text = document.createElement('div');
    text.style.position = 'fixed';
    text.style.left = e.clientX + 'px';
    text.style.top = e.clientY + 'px';
    text.style.fontFamily = "'Dancing Script', cursive";
    text.style.fontSize = '1.5rem';
    text.style.color = '#ff4b6e';
    text.style.pointerEvents = 'none';
    text.style.zIndex = '100';
    text.style.textShadow = '0 2px 8px rgba(255, 179, 198, 0.5)';
    text.innerText = texts[Math.floor(Math.random() * texts.length)];
    text.style.animation = 'burstFloat 1.5s ease-out forwards';
    text.style.setProperty('--tx', (Math.random() - 0.5) * 80 + 'px');
    text.style.setProperty('--ty', -80 + 'px');
    document.body.appendChild(text);
    
    setTimeout(() => text.remove(), 1500);
});

