let menuVisibile = false;
//Funcion para mostrar o ocultar el menu
function mostrar0ocultarMenu(){
    if(menuVisibile){
        document.getElementById("nav").classList="";
        menuVisibile = false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisibile = true
    }
}

function seleccionar(){
    //Oculto el menu cuando haya seleccionado una opcion
    document.getElementById("nav").classList="";
    menuVisibile = false
}

//Funcion para hacer funcionar las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight -skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("PHP");
        habilidades[3].classList.add("Java");
        habilidades[4].classList.add("Dax");
        habilidades[5].classList.add("MAzure");
        habilidades[6].classList.add("Comunicacion");
        habilidades[7].classList.add("TrabajoEquipo");
        habilidades[8].classList.add("Creatividad");
        habilidades[9].classList.add("Dedicación");
        habilidades[10].classList.add("GestionTiempo");
        habilidades[11].classList.add("Adaptabilidad");
    }
}


//Detectamos el scrolling para aplicar la animacion
window.onscroll = function(){
    efectoHabilidades();
}

// Descargar curriculum
document.getElementById('descargarCV').addEventListener('click', function() {
    const pdfUrl = 'Curriculum/Curriculum_DavidJimenezVillena.pdf'

    const link = document.createElement('a'); 
    link.href = pdfUrl; 
    link.download = 'CV_DavidJimenezVillena.pdf';

    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);
});


// Abrir el tfg en el github
document.getElementById('TFGRestaurante').addEventListener('click', function() { 
    window.open('https://github.com/djsekai34/Proyecto-TFG-Restaurante', '_blank');
});


document.getElementById('cifradoCesar').addEventListener('click', function() { 
    window.open('https://djsekai34.github.io/CifradoCesar/', '_blank');
});