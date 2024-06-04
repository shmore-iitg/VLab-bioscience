let currentAnimation = 0;
const animations = Array.from({length: 21}, (_, i) => `./simulation/json/${i+1}_Day_${i+1}.json`);
let animationInstance = null;

const titles = ['Embryo development', 
                'Heart development', 
                'Blood vessels grow and limb developes', 
                'Limb, bud, eye, ear develop',
                'Growth of beak and claw starts. Limb grows',
                'Formation of reproductive organ',
                'Beak development',
                'Feather germs start to form',
                'Further development of feather',
                'Tow nail starts to form',
                'Flight feather appear',
                'Scales on legs start to form',
                'Eyelids form',
                'Embryo beings to assume the hatching position',
                'Gut retraction to abdominal cavity',
                'Chick start breathing air from Air cell',
                'Head tucks between leg',
                'Chick occipies almost entire egg + Movement increase for hatching',
                'Informal pipping and ___ respiration begins',
                'External piping begins',
                'Chick hatches from the egg'];


document.getElementById('prev').style.display = 'none';

document.getElementById('start').addEventListener('click', () => {
    loadAnimation();
    document.getElementById('start').style.display = 'none';
    document.getElementById('play-all').style.display = 'inline-block';
    document.getElementById('next').style.display = 'inline-block';
    // Do not display the Previous button yet
});

document.getElementById('play-all').addEventListener('click', () => {
    playAllAnimations();
});


document.getElementById('next').addEventListener('click', () => {
    currentAnimation = (currentAnimation + 1) % animations.length;
    //console.log(`Next clicked Loading animation ${currentAnimation}`); // Log when the 'Next' button is clicked
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

function loadAnimation() {
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
    animationInstance.setSpeed(0.30); // Reduce the speed of the animation to 75% of the original speed    
    
    // Set the title
    document.getElementById('title').textContent = titles[currentAnimation];
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