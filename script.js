// let mode = document.getElementsByClassName('change-mode')



function changebg(){
    console.log(document.querySelector('body').style.background);

    if (document.querySelector('body').style.background === 'rgb(27, 27, 27)'){
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('.navigation').style.background = 'whitesmoke';
    document.querySelector('.search').style.background = '#f3f3f3';
    document.querySelector('footer').style.background = '#cccccc';
    document.querySelector('.left1').style.background = 'linear-gradient(190deg, rgba(174, 174, 174, 0.593), whitesmoke)';

    }
    else{
        document.querySelector('body').style.background = 'rgb(27, 27, 27)';
        document.querySelector('body').style.color = 'white';
        document.querySelector('.navigation').style.background = '#363636';
        // document.querySelector('.links a').style.color = 'white';
        let navbuttons = document.querySelector('.links a');
        document.querySelector('.search').style.background = 'gray';
        document.querySelector('footer').style.background = 'darkgray';
        document.querySelector('.left1').style.background = 'linear-gradient(180deg, rgba(174, 174, 174, 0.389), #1a1a1a)';
        
        
    }
}
