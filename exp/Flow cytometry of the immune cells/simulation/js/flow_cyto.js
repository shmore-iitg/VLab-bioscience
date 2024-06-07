let currentAnimation = 0;
const animations = Array.from({length: 10}, (_, i) => `./simulation/json/Step_${i+1}.json`);
let animationInstance = null;
let currentProcedure = null;

// Create an array of all procedures
var allProcedures = [ 
    '1. 5 ml Histopaque is added to 2 tubes',
    '2. PBS is added to our chicken blood sample',        
    '3. Blood – PBS sample is added to tubes containing histopaque',
    '4. The tubes are centrifuged',
    '5. The middle layer is carefully pipetted out',
    '6. Flow Cytometry of the immune cells',
    '7. Bottom layer is carefully pipetted  out',
    '8. The tubes are centrifuged',
    '9. Flow Cytometry of the immune cells',               
    '10. Flow Cytometry of the immune cells' ];

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


function nextAnimation() {
    currentAnimation = (currentAnimation + 1) % animations.length;  
    console.log(`Next - Loading animation ${currentAnimation}`); // Log when an animation is loaded    
    loadAnimation(); // Load and play the current animation

    // Display the 'Prev' button when the 'Next' button is clicked for the first time
    document.getElementById('prev').style.display = 'inline-block';

    // If currentAnimation has reached the end of the animations array, change the button text to 'End'
    if (currentAnimation === animations.length - 1) {
        document.getElementById('next').textContent = 'Show Flowcytometer functionality';

        // Create a video element
        var video = document.createElement('video');
        video.src = './simulation/video/flow_cyto.mp4'; // Replace with the path to your video file
        video.controls = true;
        video.style.width = '100%';
        video.style.height = 'auto';
        
        // Change the 'Next' button's click event handler to append the video to the animation_container and play it
        document.getElementById('next').removeEventListener('click', nextAnimation);
        document.getElementById('next').addEventListener('click', () => {
            // Clear the animation_container and append the video element to it
            var animationContainer = document.getElementById('animation_container'); // Replace with the id of your container
            animationContainer.innerHTML = ''; // Clear the animation_container
            animationContainer.appendChild(video);             
            video.play();
        });    
    }
}

document.getElementById('next').addEventListener('click', nextAnimation);

document.getElementById('prev').addEventListener('click', () => {
    // Check if the 'Next' button's textContent is 'Show Flowcytometer functionality'
    const nextButton = document.getElementById('next');
    if (nextButton.textContent === 'Show Flowcytometer functionality') {
        // Change the 'Next' button's textContent back to 'Next'
        nextButton.textContent = 'Next';

        // Remove the event listener that plays the video
        nextButton.removeEventListener('click', () => {
            // Clear the animation_container and append the video element to it
            var animationContainer = document.getElementById('animation_container'); // Replace with the id of your container
            animationContainer.innerHTML = ''; // Clear the animation_container
            animationContainer.appendChild(video);             
            video.play();
        });

        // Add back the original event listener
        nextButton.addEventListener('click', nextAnimation);
    } else {
        // Decrement the currentAnimation index only if the 'Next' button does not show 'Show Flowcytometer functionality'
        currentAnimation = (currentAnimation - 1 + animations.length) % animations.length;  
    }

    console.log(`Prev - Loading animation ${currentAnimation}`); // Log when an animation is loaded  
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