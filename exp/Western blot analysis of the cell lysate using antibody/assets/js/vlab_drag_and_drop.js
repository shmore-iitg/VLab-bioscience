// Ensure window.steps is defined and contains a property for the current step
window.steps = window.steps || {};
window.currentStep = window.currentStep || 0;
window.steps[window.currentStep] = window.steps[window.currentStep] || {};

// Initialize an empty array to keep track of the dropped icons
var droppedIcons = [];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    if (ev.target.getAttribute('draggable') == 'true') {
        ev.dataTransfer.setData("bg", ev.target.getAttribute('data-bg'));
        ev.dataTransfer.setData("src", ev.target.id);
    }
}

function drop(ev) {    
    ev.preventDefault();
    var src = ev.dataTransfer.getData("src");
    if (src) {
        // Add the dropped icon to the droppedIcons array
        droppedIcons.push(src);      
        // Get the current step
        var currentStep = window.steps[window.currentStep];
        var iconsDiv = document.getElementById('icons_container');   
        var nextButton = document.getElementById('next_button');
        
        // If the icon is in the inputIcons array
        if (currentStep.inputIcons.includes(src)) {
            // Construct the filename of the image to display            
            var filename = 'url(./assets/images/bg_' + droppedIcons.join('_') + '.png)';            
            // Set the background image to the constructed filename            
            document.getElementById('animation_container').style.backgroundImage = filename;          
            // If all icons have been dropped
            if (currentStep.inputIcons.every(icon => droppedIcons.includes(icon))) {
                //console.log('All icons have been dropped');                
                // Show the next_button and start blinking                
                nextButton.classList.add('blink');
                nextButton.style.display = 'block';

                // Hide the icons_container div and stop it from blinking                
                iconsDiv.style.display = 'none';
                iconsDiv.classList.remove('blink');
            }
        }
        document.getElementById(src).style.display = 'none';
        document.getElementById('animation_container').style.backgroundRepeat = 'no-repeat';
        document.getElementById('animation_container').style.backgroundSize = 'cover';        
    }
}