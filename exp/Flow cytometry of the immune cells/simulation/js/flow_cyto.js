let currentAnimation = 0;
const animations = Array.from({length: 10}, (_, i) => `./simulation/json/Step_${i+1}.json`);
let animationInstance = null;
let currentProcedure = null;

// Create an array of all procedures
var allProcedures = [ 
    '1. Prepare the apparatus',
    '2. Dispose of the media in the petri dish',        
    '3. Collect the PBS with the pipette',
    '4. Add 400uL of PBS to the petri dish',
    '5. Shake the petri dish for 5 seconds',
    '6. Dispose of the PBS in the flask',
    '7. Repeat the previous steps',
    '8. Collect 400 uL of the PBS in the pipette and add into the petri dish',
    '9. Scrape the petri dish',               
    '10. Pipette 400 uL of PBS from the petri dish into the vial' ];

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
        container: document.getElementById('simulation_container'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animations[currentAnimation]
    });
    animationInstance.setSpeed(0.75); // Reduce the speed of the animation to 75% of the original speed
    // If the current animation is the last one, hide the Next button
    if (currentAnimation === animations.length - 1) {
        document.getElementById('next').style.display = 'none';
    } else {
        document.getElementById('next').style.display = 'inline-block';
    }    
}

function playAllAnimations() {
    currentAnimation = 0;
    playAnimation(currentAnimation);
}

function playAnimation(index) {
    return new Promise((resolve, reject) => {
        loadAnimation();
        animationInstance.addEventListener('complete', () => {
            console.log(`Animation ${index} completed`); // Log when an animation completes
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