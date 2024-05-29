var currentAnimationIndex = 0;
var animations = [];
let containers = [];

function loadNextAnimation(animationPaths) {
    // Check that animationPaths is defined and is an array
    if (!Array.isArray(animationPaths)) {
        console.error(`Invalid animationPaths`);
        return;
    }

    if (currentAnimationIndex >= animationPaths.length) {
        currentAnimationIndex = 0; // Reset the index if you want to loop the animations
        return;
    }

    let container = document.getElementById('animation_div');

    // Clear the container before loading a new animation
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    var animationPath = animationPaths[currentAnimationIndex];
    
    // When you create a new animation, add its container to the containers array    
    let animation = bodymovin.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animationPath
    });
    containers.push(container);
    animation.setSpeed(0.5);
    
    animation.addEventListener('complete', () => {
        animation.goToAndStop(animation.totalFrames, true);
        if (currentAnimationIndex < animationPaths.length) {
            loadNextAnimation(animationPaths);
        }
    });

    currentAnimationIndex++; // Increment the index to play the next animation
}

export function updateAnimation(steps) {    
    // If there are current animations, stop them and destroy them
    animations.forEach((animation, index) => {
        animation.stop();
        animation.destroy();

        // Clear the container for this animation
        let container = containers[index];
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    });

    // Reset the animations and containers arrays
    animations = [];
    containers = [];

    // Reset the current animation index and step index
    currentAnimationIndex = 0;

    // Start loading the animations 
    // console.log("In animation.js steps =  ",steps);    
    loadNextAnimation(steps);
}