 
 // detecting card clicks
 var numberOfDuffs = document.querySelectorAll("h1").length;
 for(i=0; i < numberOfDuffs; i++){
    document.querySelectorAll("h1")[i].addEventListener("click",function(){
           var innerHtml = this.innerHTML;
           makeSound(innerHtml);
       
    });
 }

// detecting keypress
document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    
})

function makeSound(key) {
  
    
    switch (key) {
        case "w":
           
            var tom1 = new Audio("tom-1.MP3");
            tom1.play();
        
            
             break;

       case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
                 break;  
       case "s":
                    var tom3 = new Audio("tom-3.mp3");
                    tom3.play();
                     break;

      case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
             break;

     case "j":
                var tom5 = new Audio("tom-5.mp3");
                tom5.play();
                 break;

    case "k":
            var tom7 = new Audio("tom-1.mp3");
            tom7.play();
             break;

    case "l":
            var tom6 = new Audio("tom-6.mp3");
            tom6.play();
             break;

        default:console.log("wronge");
    }
    
}