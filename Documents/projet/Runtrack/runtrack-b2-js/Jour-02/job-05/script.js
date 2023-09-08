document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-search-student');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = document.getElementById('email-search-student').value;

        
        fetch('request.php', {
            method: 'POST',
            body: JSON.stringify({
                email: email
            })
        })
        .then(response => response.json())
        .then(data => {
            displaySearchResult(data);
        })
        .catch(error => {
            console.error("Erreur lors de la requête : " + error);
        });
    });

function displaySearchResult(data) {
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = ''; 

        if (data.success) {
   
            const studentData = data.student;
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `
                <h2>Résultat de la recherche :</h2>
          
