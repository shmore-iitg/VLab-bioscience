export function updateProcedure(procedures, currentStep) {
    var procedureDiv = document.getElementById('procedure_div');
    procedureDiv.innerHTML = '';
    procedureDiv.style.textAlign = 'start';
    procedures.forEach(function(procedure, index) {
        var procedureElement = document.createElement('p');
        procedureElement.textContent = procedure;
        if (index === currentStep) {
            procedureElement.style.backgroundColor = '#FFD074';
        }
        procedureDiv.appendChild(procedureElement);
    });
}