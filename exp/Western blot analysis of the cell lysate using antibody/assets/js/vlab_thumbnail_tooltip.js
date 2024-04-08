let currentImage = null;
let currentText = null;
let currentButton = null;

// Function to reset all button colors
function resetColors() {
    // Get all thumbnail buttons
    var buttons = document.getElementsByClassName('thumbnail_button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('different-color');
    }
}

function showTooltip(image, text, event, button) {          
    //console.log('showTooltip called with image:', image, 'and text:', text);
    const rightSideContent = document.getElementById('right_side_content');
    const tooltip_container = document.getElementById('tooltip_container');
    const tooltip_image = document.getElementById('tooltip_image');
    const tooltip_text = document.getElementById('tooltip_text');  

    if (tooltip_container.style.display === 'block' && currentImage === image && currentText === text) {
        tooltip_container.style.display = 'none';
        resetColors(); // Reset colors when tooltip is hidden
    } else {
        tooltip_image.src = image;
        tooltip_text.textContent = text;
        tooltip_container.style.display = 'block';

        // Get the dimensions of the right_side_content
        let rightSideContentRect = rightSideContent.getBoundingClientRect();

        // Calculate the center
        let center = rightSideContentRect.left + rightSideContentRect.width / 2;

        // Position the tooltip_container
        tooltip_container.style.left = (center - tooltip_container.offsetWidth / 2) + 'px';
        tooltip_container.style.top = (rightSideContentRect.top + window.scrollY + 10) + 'px'; // Add a 10px gap

        currentImage = image;
        currentText = text;
        currentButton = button;

        resetColors(); 
        button.classList.add('different-color'); 
    }
    rightSideContent.appendChild(tooltip_container);    
};

window.addEventListener('load', function() {
    document.getElementById('thumbnail_button1').addEventListener('click', function(event) {
        showTooltip('./assets/images/button_flask.png', 'Flasks can be used for making solutions or for holding, containing, collecting, or sometimes volumetrically measuring chemicals, samples, solutions, etc. for chemical reactions or other processes such as mixing, heating, cooling, dissolving, precipitation, boiling (as in distillation), or analysis.', event, this);
    });
    
    document.getElementById('thumbnail_button2').addEventListener('click', function(event) {
        showTooltip('./assets/images/button_petri_dish.png', 'A petri dish is used to culture different types of cells, including bacteria and molds. It often contains a nutritional medium on which the cells can grow. A petri dish is a flat, shallow dish made of glass or plastic with a suitable lid.', event, this);
    });
        
    document.getElementById('thumbnail_button3').addEventListener('click', function(event) {
        showTooltip('./assets/images/button_pipette.png', 'A pipette (sometimes spelled as pipet) is a type of laboratory tool commonly used in chemistry and biology to transport a measured volume of liquid, often as a media dispenser.', event, this);
    });

    document.getElementById('thumbnail_button4').addEventListener('click', function(event) {
        showTooltip('./assets/images/button_PBS.png', 'Phosphate buffered saline (PBS) is a non-toxic solution used in many biological laboratories. Unlike water, PBS prevents cells rupturing or shrivelling up due to osmosis.', event, this);
    });
        
    document.getElementById('thumbnail_button5').addEventListener('click', function(event) {
        showTooltip('./assets/images/button_vial.png', 'Vials are typically used to store medicines or laboratory samples. Although vials are mainly found in the medical field, they are critical to the workflow in various settings, from law enforcement agencies to department stores.', event, this);
    }); 

    document.getElementById('thumbnail_button6').addEventListener('click', function(event) {
        showTooltip('./assets/images/button_scraper.png', 'Cell scrapers are used when it is necessary to harvest cells from a culture vessel without disrupting their viability or integrity. They are particularly useful when cells have formed a monolayer and need to be removed for further analysis, subculturing, or experimental procedures.', event, this);
    }); 

    document.getElementById('tooltip_close').addEventListener('click', function() {
        document.getElementById('tooltip_container').style.display = 'none';
        resetColors(); // Reset colors when tooltip is hidden
      });
});