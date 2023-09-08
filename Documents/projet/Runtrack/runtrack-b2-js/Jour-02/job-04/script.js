function myRegisterStudent(formElement) {
            
    const email = formElement.querySelector('#student-mail').value;
    const fullName = formElement.querySelector('#student-fullname').value;
    const gender = formElement.querySelector('#student-gender').value;
    const grade = formElement.querySelector('#student-grade').value;
    const birthdate = formElement.querySelector('#student-birthdate').value;


            fetch('/request.php', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    fullName: fullName,
                    gender: gender,
                    grade: grade,
                    birthdate: birthdate
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Étudiant enregistré avec succès !");
                } else {
                    alert("Erreur lors de l'enregistrement de l'étudiant : " + data.message);
                }
            })
            .catch(error => {
                console.error("Erreur lors de la requête : " + error);
            });
}
