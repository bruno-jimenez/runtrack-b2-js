function myChangebackgroundColor() {
            var resizeWindow = window.innerHeight;

            // Choisissez ici vos propres conditions pour définir les couleurs en fonction de la hauteur
            if (resizeWindow >= 504) {
                document.documentElement.style.backgroundColor = "#003049";
            console.log('504 ok')
            } else if (resizeWindow > 600) {
                document.documentElement.style.backgroundColor = "#d90429";
            console.log('505 ok')
            } else {
                document.documentElement.style.backgroundColor = "#ffb703";
            console.log('1337 ok')
            }
            
        }

        // Appeler la fonction au chargement de la page et lors du redimensionnement de la fenêtre
        window.onload = myChangebackgroundColor;
        window.onresize = myChangebackgroundColor;