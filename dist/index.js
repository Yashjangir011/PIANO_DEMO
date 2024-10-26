// Select all elements with the class "btn"
var btn_Length = document.querySelectorAll(".btn").length;

for (let i = 0; i < btn_Length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("mouseover", function() {
        var text = this.textContent.trim();  // `textContent` can be used here
        playSound(text);
    });
}

// for (let i = 0; i < btn_Length; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener(  "mouseover", function() {
//         var text = this.textContent.trim();  // `textContent` can be used here
//         playSound(text);
//     });
// }



// Define the playSound function
function playSound(text) {
    switch (text) {
        case 'a':
            var audio = new Audio("/dist/tunes/a6-102820.mp3");
            setTimeout( audio.play() ,100 )
            break;
        case 'b':
            var audio = new Audio("/dist/tunes/c6-102822.mp3");
            audio.play();
            break;
        case 'c':
            var audio = new Audio("/dist/tunes/do-80236.mp3");
            setTimeout(audio.play() ,10)
            
            break;
        default: 
            alert("sry wrong input");
    }
}
