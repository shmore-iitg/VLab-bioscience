export function updateProcedure(procedures, currentStep) {
    var procedureDiv = document.getElementById('procedure_div');
    procedureDiv.innerHTML = '';
    procedures.forEach(function(procedure, index) {
        var procedureElement = document.createElement('p');
        procedureElement.textContent = procedure;
        if (index === currentStep) {
            procedureElement.style.backgroundColor = '#FFD074';
        }
        procedureDiv.appendChild(procedureElement);
    });
}