window.updateProcedureDiv = function(currentStep) {
    // Store the procedure steps in an array
    var procedureSteps = [
      '1. Discard the media',
      '2. Get the PBS',      
      '3. Discard the PBS',
      '4. Adjust pipette to measure 400 µL of PBS',
      '5. Add PBS over the cells',
      '6. Shake the dish',
      '7. Discard the PBS',
      '8. Repeat steps 3-6',
      '9. PBS to Dish thourgh pipette',
      '10. Scrape the cells to dettach them from the dish',
      '11. Transfer cells to microcentrifuge tubes',
      '12. Set up the centrifuge',
      '13. Centrifuge the samples at 12000g for 5 minutes at 4°C',
      '14. Transfer the microcentrifuge tubes',
      '15. Unload the Centrifuge after 30 mins',
      '16. Transfer the centrifuged samples to ice box',
      '17. End of step 1'
    ];
  
    // Calculate the start and end indices of the steps to be displayed
    var start = Math.max(0, currentStep - 2);
    var end = Math.min(procedureSteps.length, currentStep + 3);
  
    // Get the steps to be displayed
    var visibleSteps = procedureSteps.slice(start, end);
  
    // Generate the HTML for the procedure_container div
    var procedureHtml = '<b>Procedure Steps:</b>';
    procedureHtml += '<ol>';    
    for (var i = 0; i < visibleSteps.length; i++) {
      // Highlight the current step
      var highlightClass = (start + i === currentStep) ? 'highlight' : '';
      procedureHtml += `<li><span class="${highlightClass}">${visibleSteps[i]}</span></li>`;
    }
    procedureHtml += '</ol>';
  
    // Update the procedure_container div
    var procedureDiv = document.getElementById('procedure_container');
    procedureDiv.innerHTML = procedureHtml;
  }