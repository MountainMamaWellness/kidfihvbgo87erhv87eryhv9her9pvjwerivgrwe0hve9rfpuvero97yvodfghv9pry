document.addEventListener('DOMContentLoaded', () => {
    const wishList = document.getElementById('wishList');
    const santa = document.getElementById('santa');
    const santaButton = document.getElementById('santaButton');

    // When clicking on the item text, toggle completion and show confetti
    wishList.addEventListener('click', (e) => {
        if (e.target.classList.contains('item-text')) {
            const listItem = e.target.closest('.wish-item');
            listItem.classList.toggle('completed');
            triggerConfetti(listItem);
        }
    });

    // Santa Fly By
    santaButton.addEventListener('click', () => {
        // Animate Santa from left to right
        santa.style.transform = 'translateX(110vw)';
        // Reset after animation completes
        setTimeout(() => {
            santa.style.transform = 'translateX(-200px)';
        }, 6000);
    });

    function triggerConfetti(element) {
        const rect = element.getBoundingClientRect();
        // Generate multiple confetti particles
        for(let i=0; i<15; i++) {
            const confetti = createConfettiParticle();
            document.body.appendChild(confetti);
            positionConfetti(confetti, rect);
            animateConfetti(confetti);
        }
    }

    function createConfettiParticle() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-particle');
        // Random color
        const colors = ['#FF0000', '#00FF00', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF', '#FFA500', '#008000', '#FF69B4'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        return confetti;
    }

    function positionConfetti(confetti, rect) {
        const x = rect.left + rect.width / 2; 
        const y = rect.top + window.scrollY + rect.height / 2; 
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
    }

    function animateConfetti(confetti) {
        // Random direction and distance
        const angle = Math.random() * 2 * Math.PI; 
        const distance = 100 + Math.random()*100; 
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const rotation = (Math.random()*360) + 'deg';

        confetti.style.setProperty('--x', x + 'px');
        confetti.style.setProperty('--y', y + 'px');
        confetti.style.setProperty('--r', rotation);

        setTimeout(() => {
            confetti.remove();
        }, 1200);
    }
});
