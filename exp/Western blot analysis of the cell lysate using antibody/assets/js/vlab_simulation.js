window.steps = [
 {    
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/images/default.png'],
    animation_container_type: 'image',
    icons_container: 'show this time',
    icons: [
      { id: 'flask', src: './assets/images/button_flask.png', dataBg: './assets/images/bg_flask.png', width: 120, height: 150 },    
      { id: 'petridish', src: './assets/images/button_petri_dish.png', dataBg: './assets/images/bg_petridish.png', width: 75, height: 75 },      
      { id: 'pipette', src: './assets/images/button_pipette.png', dataBg: './assets/images/bg_pipette.png', width: 120, height: 150 }    
    ],
    inputIcons: ['petridish', 'flask', 'pipette'],
    button: 'Discard the media'
  },  
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/2_Dispose_Media.json'],
    animation_container_type: 'animation', 
    icons_container: 'hide this time', 
    icons: [], // No icons for this step  
    inputIcons: [],
    button: 'Discard the PBS'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/3_PBS_Drag_Appear.json', 
                          './assets/json/4_PBS_Pipette.json'
                        ],
    animation_container_type: 'animation', 
    icons_container: 'hide this time', 
    icons: [], // No icons for this step  
    inputIcons: [],
    button: 'Adjust pipette to measure 400 µL of PBS'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/4_Pipette_Set_400.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Add PBS over the cells'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/5_Pipette_Dish.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Shake the dish'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/6_Mix_Dish.json'],
    animation_container_type: 'animation',
    icons_container: 'hide this time',
    icons: [],
    inputIcons: [],
    button: 'Discard the PBS'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/7_PBS_Pipette_Flask.json'],
    animation_container_type: 'animation',
    icons_container: 'hide this time',
    icons: [],
    inputIcons: [],
    button: 'Repeat steps 3, 4, 5 and 6'
  },  
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/8_Repeat_Steps.json',
                          './assets/json/9_Repeat_Steps.json',
                          './assets/json/10_Repeat_Steps.json',
                          './assets/json/11_Repeat_Steps.json'
                        ],
    animation_container_type: 'animation',
    icons_container: 'hide this time',
    icons: [],
    inputIcons: [],
    button: 'PBS to dish through pipette (Please suggest a name)'
  },    
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/12_Pipette_PBS.json',
                          './assets/json/13_Pipette_Dish.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',
    icons: [],
    inputIcons: [],
    button: 'Scrape the cells to dettach them from the dish'
  },    
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/14_Pipette_Table.json',
                          './assets/json/15_Scraper_Appear.json',
                          './assets/json/16_Scrape.json'
                        ],
    animation_container_type: 'animation',
    icons_container: 'hide this time',
    icons: [],
    inputIcons: [],
    button: 'Transfer cells to microcentrifuge tubes'
  },      
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/17_Vial_Appear.json',
                          './assets/json/18_Vial_Fill.json'
                        ],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Set up the centrifuge'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/images/Centrifuge_Closed.png'],    
    animation_container_type: 'image', 
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Centrifuge the samples at 12000g for 5 minutes at 4°C'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/19_Vial_To_Centrifuge.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time', 
    icons: [], 
    inputIcons: [],
    button: 'Transfer the microcentrifuge tubes to the centrifuge'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/20_Load_Centrifuge.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Unload Centrifgue'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/21_Unload_Centrifuge.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Centrifuge to Ice'
  },
  {
    exp_part: 'Part 1 : Sample Preparation',
    animation_container: ['./assets/json/22_Centrifuge_to_Ice.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'End of the part 1'
  },
  {
    exp_part: 'Part 2 : Gel Preparation',
    animation_container: ['./assets/json/1_Prepare_Gasket.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Start of step 2'
  },
  {
    exp_part: 'Part 2 : Gel Preparation',
    animation_container: ['./assets/json/2_Gasket_Lock.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 2'
  },
  {
    exp_part: 'Part 2 : Gel Preparation',
    animation_container: ['./assets/json/3_Mount.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 2'
  },
  {
    exp_part: 'Part 2 : Gel Preparation',
    animation_container: ['./assets/json/4_Buffer_Info.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 2'
  },
  {
    exp_part: 'Part 2 : Gel Preparation',
    animation_container: ['./assets/json/5_Resolving_Buffer.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'End of the part 2'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/1_Holder_Out.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Start of the step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/2_Gasket_Out.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/3_Gasket_Assembly.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/4_Dam_Assembly.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/5_Assembly_Lock.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/6_Assembly_Tank.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/images/7_Transfer_Assembly_Empty.png'],    
    animation_container_type: 'image', 
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/images/7_Transfer_Assembly_Full.png'],    
    animation_container_type: 'image', 
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/images/8_Transfer_Tank_Empty.png'],    
    animation_container_type: 'image', 
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/images/8_Transfer_Tank_Full.png'],    
    animation_container_type: 'image', 
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/9_Comb_Out.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/10_Sample_Well.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/11_Tank_Close.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'Step 3'
  },
  {
    exp_part: 'Part 3 : SDS Page',
    animation_container: ['./assets/json/12_Electrophoresis.json'],
    animation_container_type: 'animation',    
    icons_container: 'hide this time',    
    icons: [],
    inputIcons: [],    
    button: 'End of the part 3'
  }
  // Add more objects for more steps...
];

// Define currentStep as a global variable
var currentStep = 0;

// Define prev_button and add event listener
document.getElementById('prev_button').addEventListener('click', function() {
  // Hide the 'prev_button'
  this.style.display = 'none';

  if (currentStep > 0) {
    currentStep--;
    this.setAttribute('data-step', currentStep);

    // Assume animationDuration is the duration of your animation in milliseconds
    var animationDuration = 10; 

    // Check if the current step is an animation
    if (window.steps[currentStep].animation_container_type === 'animation') {
      setTimeout(() => {
        updateContent(window.steps[currentStep]);
      }, animationDuration);
    } else {      
      updateContent(window.steps[currentStep]);
    }
  } else if (currentStep === 0) {
    // If it's the first step, hide the 'prev_button'
    this.style.display = 'none';
    return; // End the run
  }
});

//Define functionality for the 'next_button'
document.getElementById('next_button').addEventListener('click', function() {
  // Clear old images and background
  document.getElementById('animation_container').innerHTML = '';
  document.getElementById('animation_container').style.backgroundImage = 'none';
  // Hide the 'next_button'
  this.style.display = 'none';

  if (currentStep < window.steps.length - 1) {
    //console.log('currentStep: ' + currentStep);
    currentStep++;      
    this.setAttribute('data-step', currentStep);
    
    // Assume animationDuration is the duration of your animation in milliseconds
    var animationDuration = 10; 

    // Check if the current step is an animation
    if (window.steps[currentStep].animation_container_type === 'animation') {
      setTimeout(() => {
        updateContent(window.steps[currentStep]);
      }, animationDuration);
    } else {      
      updateContent(window.steps[currentStep]);
    }
  } else if (currentStep === window.steps.length - 1) {
    // If all steps are completed, set the background to 'thankyou.png'
    animation_container.style.backgroundImage = 'url(./assets/images/thankyou.png)';            
    return; // End the run
  }
});

function handleBlinking(iconsDiv, nextButton, step) {
  if (step.animation_container_type === 'image' && step.icons_container !== 'hide this time') {    
    iconsDiv.classList.add('blink');
    nextButton.classList.remove('blink');
  } else if (step.animation_container_type === 'animation') {
    nextButton.classList.add('blink');
    iconsDiv.classList.remove('blink');
  }
}

/*function handleBlinking(iconsDiv, nextButton, step) {
  if (step.animation_container_type === 'image' && step.icons_container !== 'hide this time') {    
    iconsDiv.classList.add('blink', 'pointer');
    nextButton.classList.remove('blink');
  } else if (step.animation_container_type === 'animation') {
    nextButton.classList.add('blink');
    iconsDiv.classList.remove('blink', 'pointer');
  }
}*/

function loadAnimations(animationFiles, container) {
  let index = 0;
  
  function loadNextAnimation() {    
    if (index < animationFiles.length) {
      // Clear any previous Lottie animation
      lottie.destroy();
  
      let animationFile = animationFiles[index];      
      container.style.backgroundImage = 'none';
      let animation = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animationFile
      });
      //console.log("The current animationFile is: " + animationFile);
      animation.addEventListener('complete', function() {
        //console.log("In the event listener complete function.");
        index++;
        loadNextAnimation();
      });
    }
  }
  loadNextAnimation();
}

function updateContent(step) {  
  totalIcons = step.icons.length;    
  var animation_container = document.getElementById('animation_container');    
  var iconsDiv = document.getElementById('icons_container');   
  var nextButton = document.getElementById('next_button');
  var prevButton = document.getElementById('prev_button');
  prevButton.style.display = currentStep > 0 ? 'block' : 'none'; 
  if(window.steps[currentStep].exp_part) {
    document.getElementById('exp_part_header').innerHTML = window.steps[currentStep].exp_part;
  }
  if (step.animation_container_type === 'image')
  { 
    // Clear any Lottie animation
    lottie.destroy(); 
    // Handle images
    animation_container.style.backgroundImage = 'url(' + step.animation_container + ')';
    setAspectRatio('animation_container', 1); // Just until Rohit fixes the aspect ratio
    //console.log("The background image is set to: " + step.animation_container);
    handleBlinking(iconsDiv, nextButton, step);
    // Show the 'nextButton' only if all icons have been dropped
    nextButton.style.display = totalIcons === 0 ? 'block' : 'none';  
  } 
  else if (step.animation_container_type === 'animation') 
  {    
    // Get the animation container    
    var container = document.getElementById('animation_container');
    // Remove all child nodes from the container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    loadAnimations(step.animation_container, container);
    //console.log("The animation is set to: " + step.animation_container);
    nextButton.style.display = 'block';    
  }

  document.getElementById('next_button').textContent = step.button;
  
  //Decide whether to show icons_container or not
  var show_or_hide = step.icons_container;
  if (show_or_hide === 'hide this time') {
    iconsDiv.style.display = 'none';    
  } 
  else 
  {
    iconsDiv.style.display = 'block';        
    var iconsDiv = document.getElementById('icons_container').querySelector('.icons');
    iconsDiv.innerHTML = ''; // Clear the previous icons
    step.icons.forEach(function(icon) {
      var img = document.createElement('img');
      img.setAttribute('id', icon.id);
      img.setAttribute('src', icon.src);
      img.setAttribute('draggable', 'true');
      img.setAttribute('data-bg', icon.dataBg);
      img.style.width = '50px';  // Set a fixed width
      img.style.height = '50px';  // Set a fixed height
      img.ondragstart = function(event) { drag(event); };
      iconsDiv.appendChild(img);
    });
    // Update the totalIcons variable
    totalIcons = step.icons.length;
  } // end of else loop         
  
  // Update the procedure_container div    
  window.updateProcedureDiv(currentStep);
}

function setAspectRatio(elementId, aspectRatio) {
  var element = document.getElementById(elementId);
  var width = element.offsetWidth;
  element.style.height = (width / aspectRatio) + 'px';
}

window.onload = window.onresize = function() {
  setAspectRatio('animation_container', 4 / 3);
  // Initialize the 'prev_button' display
  document.getElementById('prev_button').style.display = 'none';
  updateContent(window.steps[0]);
  document.getElementById('next_button').setAttribute('data-step', 0);
  // Dispatch a custom event
  window.dispatchEvent(new Event('stepsLoaded'));
};
