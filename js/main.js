
    const textBienvenue = document.querySelector('#section-welcome h1');
    const image = document.querySelector('#section-welcome img');

    
    function elementOut() {
        textBienvenue.style.animation = 'slideOutLeft 2s forwards';
        image.style.animation = 'slideOutRight 2s forwards';
    }

   
    setTimeout(elementOut, 2000);

    
    