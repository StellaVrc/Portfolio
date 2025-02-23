document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const sidebar = document.querySelector(".sidebar");
        hamburger.addEventListener("click", function () {
            sidebar.classList.toggle("open")
        });
    });
    
    //Configuration du dark-light mode 
    //Ici, on attend que le contenu de la page soit completement chargé avant d'exectuer
    document.addEventListener("DOMContentLoaded", () => {
        //Et là, on recupere l'element du bouton qui bascule le theme
        const themeDark = document.getElementById("dark-mode");
        //On recupere l'element body car c'est lui qui subira le changement de thème
        const body = document.body;
        //On recupere le theme auparavant enregistrée dans le stockage local du navigateur afin de conserver le theme selectionné
        const savedTheme = localStorage.getItem("theme");
    
        //On utilise ici des opérateurs ternaires pour rendre le code plus concis

        //En fonction du thème enregistrée, la condition savedTheme s'exectuera pour appliquer le theme choisi
        if (savedTheme) {
            //Cette classe vient appliquer le style de theme sombre
            body.classList.add(savedTheme === "dark" ? "dark-mode" : "light");
            //Le texte du bouton est modifié en fonction du theme choisi
            themeDark.textContent = savedTheme === "dark" ? "☀️ Mode Clair" : "🌙 Mode Sombre";
        }

        //Cet evenement ecoute les clics sur le bouton pour le changement de mode
        themeDark.addEventListener("click", () => {
            //La classe utilisée sert à ajouter ou supprimer la classe dark-mode, ainsi newTheme devient ce qu'on lui attribue comme mode
            const newTheme = body.classList.toggle("dark-mode") ? "dark" : "light";
            //Va venir sauvegarder le theme appliqué dans le stockage local pour l'utilisé lors des futurs chargements de page
            localStorage.setItem("theme", newTheme);
            //Le texte du bouton est mis à jour en fonction du nouveau thème
            themeDark.textContent = newTheme === "dark" ? "☀️ Mode Clair" : "🌙 Mode Sombre";
        });
    });
    

