document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the icons in the icon-container
    var icons = document.querySelectorAll('#icon_container .tooltip-icon');

    icons.forEach(function(icon) {
        icon.isTooltipShown = false;
    
        icon.addEventListener('click', function(event) {
            event.stopImmediatePropagation(); 
    
            var currentIcon = event.currentTarget;
            
            if (currentIcon.isTooltipShown) {            
                hideTooltip();
                currentIcon.isTooltipShown = false;
            } else {
                showTooltip(currentIcon.id, currentIcon.src, currentIcon.alt, event); 
                currentIcon.isTooltipShown = true;
            }
        });
    });
});


export var tooltips = [
    {
        id: 'button_histopaque',
        text: 'Histopaque is a ready-to-use medium facilitates rapid recovery of viable lymphocytes and other mononuclear cells from small volumes of whole blood or bone marrow.'
    },
    {
        id: 'button_pbs',
        text: 'Phosphate buffered saline (PBS) is a non-toxic solution used in many biological laboratories. Unlike water, PBS prevents cells rupturing or shrivelling up due to osmosis.'
    },
    {
        id: 'button_centrifuge_tubes',
        text: 'Centrifuge tubes are used to contain liquids during centrifugation, which separates the sample into its components by rapidly rotating it around a fixed axis.'
    },
    {
        id: 'button_pipette',
        text: 'A pipette (sometimes spelled as pipet) is a type of laboratory tool commonly used in chemistry and biology to transport a measured volume of liquid, often as a media dispenser.'        
    },
    {
        id: 'button_vial',
        text: 'Vials are typically used to store medicines or laboratory samples. Although vials are mainly found in the medical field, they are critical to the workflow in various settings, from law enforcement agencies to department stores.'
    },
    {
        id: 'button_glass_slide',
        text: 'A glass slide is a thin, flat, rectangular piece of glass that is used as a platform for microscopic specimen observation. It is often used to hold objects for examination under a microscope.'
    }
];

// Function to show a tooltip with the given image and text
export function showTooltip(id, image, text, event) {
    // Get the tooltip container and its elements
    var tooltipContainer = document.getElementById('tooltip_display');
    var tooltipImage = document.getElementById('tooltip-image');
    var tooltipText = document.getElementById('tooltip-text');

    // Check if the tooltip container exists
    if (!tooltipContainer) {
        console.error('tooltip_display not found');
        return;
    }

    // Find the tooltip object for the clicked icon
    var tooltip = tooltips.find(function(t) {
        return t.id === id; 
    });

    // If a tooltip object was found, use its text
    if (tooltip) {
        text = tooltip.text;
    }

    // Update the tooltip's content
    tooltipImage.src = image;
    tooltipText.textContent = text;

    // Show the tooltip
    tooltipContainer.style.display = 'block';
}

// Function to hide the tooltip
export function hideTooltip() {
    // Get the tooltip container
    var tooltipContainer = document.getElementById('tooltip_display');

    // Check if the tooltip container exists
    if (!tooltipContainer) {
        console.error('tooltip_display not found');
        return;
    }

    // Hide the tooltip
    tooltipContainer.style.display = 'none';
}

