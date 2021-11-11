window.onload = main;

function main(){
    addEventListeners();
    //Göra mer saker om det behövs i framtiden
}

function addEventListeners(){
    const menuButton = document.getElementById('menu-button');
    menuButton.onclick = toggleMenu;

    const textSizeButton = document.getElementById('size-button');
    textSizeButton.onclick = toggleTextSize; 
}

function toggleMenu(){
    const header = document.querySelector('header');
    
    if (header.style.height === '100%'){
        header.style.height = null;
    } else {
        header.style.height = '100%'
    }
}

function toggleTextSize(){
    const html = document.querySelector('html');
    if (html.style.fontSize ==='1.2rem'){
        html.style.fontSize = null;
    } else {
        html.style.fontSize = '1.2rem';
    }

}