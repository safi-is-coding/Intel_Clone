// let mode = document.getElementsByClassName('change-mode')



function changebg(){
    if (document.querySelector('body').style.background === 'black'){
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('.navigation').style.background = 'whitesmoke';
    document.querySelector('.search').style.background = '#f3f3f3';
    document.querySelector('footer').style.background = '#cccccc';

    }
    else{
        document.querySelector('body').style.background = 'black';
        document.querySelector('body').style.color = 'white';
        document.querySelector('.navigation').style.background = 'darkgray';
        document.querySelector('.search').style.background = 'gray';
        document.querySelector('footer').style.background = 'darkgray';
        

        
    }
}