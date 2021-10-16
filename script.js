let sound = new Audio('mp3/soul.mp3');
let laugh = new Audio('mp3/demonic_laugh.mp3');
let wow = new Audio('mp3/wow.mp3');
wow.autoplay = true;
let alertWindow = 1;

let img = document.querySelector('.img');
let button = document.querySelector('.button');
button.onclick = function(){
    if(alertWindow === 1){
        alert('XAXAXAXAXAXAXAXAXAXAXA');
    }
    
    this.classList.toggle('active');

    if(this.innerText === 'НАТИСНИ НА МЕНЕ ｡◕‿‿◕｡'){
        this.innerText = 'NOW YOUR SOUL IS MINE (◣‿◢)و ̑̑';
    } else{
        this.innerText = 'НАТИСНИ НА МЕНЕ ｡◕‿‿◕｡';
    }

    let imgSrc = img.getAttribute('src');
    if(imgSrc === 'img/hell-hound.jpg'){
        img.src = 'img/puppy.jpg'
    } else{
        img.src = 'img/hell-hound.jpg'
    }
    
    let buttonClass = button.getAttribute('class');
    if(buttonClass === 'button active'){
        sound.play();
        laugh.play();
    } else{
        wow.play();
    }

    document.querySelector('.btn').classList.toggle('active_btn');
    document.querySelector('body').classList.toggle('pressed');

    alertWindow++;
}
