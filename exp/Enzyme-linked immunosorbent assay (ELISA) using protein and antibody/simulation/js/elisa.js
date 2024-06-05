let currentAnimation = 0;
const animations = Array.from({length: 4}, (_, i) => `./simulation/json/Step_${i+1}.json`);
let animationInstance = null;
let currentProcedure = null;

// Create an array of all procedures
var allProcedures = [ 
    '1. ELISA step 1',
    '2. ELISA step 2',        
    '3. ELISA step 3',
    '4. ELISA step 4' ];

import { tooltips } from './tooltip.js';
import { showTooltip } from './tooltip.js';
import { hideTooltip } from './tooltip.js';

document.getElementById('prev').style.display = 'none';
document.getElementById('procedure_container').style.display = 'none';
document.getElementById('extra-button').style.display = 'none';
document.getElementById('procedure_title').style.display = 'none';

document.getElementById('start').addEventListener('click', () => {
    loadAnimation();
    document.getElementById('start').style.display = 'none';
    document.getElementById('play-all').style.display = 'inline-block';
    document.getElementById('next').style.display = 'inline-block';
    // Hide the procedure block/title and the extra button
    document.getElementById('procedure_container').style.display = 'block';
    document.getElementById('extra-button').style.display = 'block';
    document.getElementById('procedure_title').style.display = 'block';
    // Do not display the Previous button yet
});

document.getElementById('play-all').addEventListener('click', () => {
    playAllAnimations();
});


document.getElementById('next').addEventListener('click', () => {
    currentAnimation = (currentAnimation + 1) % animations.length;    
    loadAnimation(); // Load and play the current animation

    // Display the 'Prev' button when the 'Next' button is clicked for the first time
    document.getElementById('prev').style.display = 'inline-block';
    
    // If currentAnimation has reached the end of the animations array, change the button text to 'End'
    if (currentAnimation === animations.length - 1) {
        document.getElementById('next').textContent = 'End';
    }
});


document.getElementById('prev').addEventListener('click', () => {
    currentAnimation = (currentAnimation - 1 + animations.length) % animations.length;    
    loadAnimation(); // Load and play the current animation
});

document.addEventListener('DOMContentLoaded', (event) => {
    const proceduresContainer = document.getElementById('procedure_container');

    allProcedures = allProcedures.map((procedure, index) => {
        const procedureElement = document.createElement('div');        
        procedureElement.id = `procedure-${index}`;
        procedureElement.className = 'procedure';

        const procedureText = document.createElement('span');
        procedureText.textContent = procedure;
        procedureElement.appendChild(procedureText);

        proceduresContainer.appendChild(procedureElement);
        return procedureElement;
    });
});

function loadAnimation() {
    // Hide the previous procedure
    if (currentProcedure) {
        currentProcedure.style.display = 'none';
    }

// Show the current procedure and the two procedures before and after it
allProcedures.forEach((procedure, index) => {
    if (index >= currentAnimation - 2 && index <= currentAnimation + 2) {
        procedure.style.display = 'block';
    } else {
        procedure.style.display = 'none';
    }

    if (index === currentAnimation) {
        procedure.classList.add('active');
    } else {
        procedure.classList.remove('active');
    }
}); 

    console.log(`Loading animation ${currentAnimation}`); // Log when an animation is loaded
    if(animationInstance) {
        animationInstance.destroy();
    }
    animationInstance = lottie.loadAnimation({
        container: document.getElementById('animation_container'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animations[currentAnimation]
    });
    animationInstance.setSpeed(0.75); // Reduce the speed of the animation to 75% of the original speed    
}

function playAllAnimations() {
    currentAnimation = 0;
    playAnimation(currentAnimation);
}

function playAnimation(index) {
    return new Promise((resolve, reject) => {
        loadAnimation();
        animationInstance.addEventListener('complete', () => {
            //console.log(`Animation ${index} completed`); // Log when an animation completes
            resolve();
        });
    }).then(() => {
        if (currentAnimation < animations.length - 1) {
            currentAnimation++;            
            playAnimation(currentAnimation);
        }
    }).finally(() => {
        // If all animations have completed, display the 'Prev' button
        if (currentAnimation === animations.length - 1) {
            document.getElementById('prev').style.display = 'inline-block';
        }
    });
}

document.getElementById('extra-button').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('icon_container').style.display = 'block';
});

document.getElementById('close-icon-container').addEventListener('click', function() {
    document.getElementById('icon_container').style.display = 'none';
    document.getElementById('extra-button').style.display = 'block';
});

// Get the close button
var closeButton = document.getElementById('close-tooltip');

// Check if the close button exists
if (!closeButton) {
    console.error('close-tooltip not found');
} else {
    // Add an event listener to the close button
    closeButton.addEventListener('click', hideTooltip);
}