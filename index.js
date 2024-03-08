// belajar eventListener

function handleClick() {
    alert("Ini button diklik");
}

var drumButtons = document.querySelectorAll(".drum");
// console.log(drumButtons);

for (let i = 0; i< drumButtons.length; i++) {
    drumButtons [i].addEventListener("click", function(){
        let btninnerHTML = this.innerHTML;
        makeSound(btninnerHTML);
        buttonAnimation(btninnerHTML);

        // animasi warna huruf putih (dom)
        this.style.color="white";
    });
}
// deteksi keyboard yang ditekan
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(btninnerHTML);
    alert("keyboard ditekan");
});

function makeSound(key){
    switch(key){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                alert("gak ada buttonnya");
        }
}

// Area Animasi
function buttonAnimation(key){
    let activeBtn =  document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    activeBtn.classList.add("white");

    // menghapus classpress
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
        activeBtn.classList.add("white");
    }, 100);
}
    // console.log(i);
    // drumButtons [i].addEventListener("click", handleClick);

    // menambahkan audio
    // var audio = new Audio('sounds/crash.mp3');
    // audio.play();