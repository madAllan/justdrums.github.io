var drums=document.querySelectorAll('.drum');
var audio='';
for (var i=0;i<drums.length;i++){
drums[i].addEventListener('click',function(){
makeSound(this.innerHTML);	
buttonAnimation(this.innerHTML);
});
}
document.addEventListener('keydown',function(event){
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(key){
switch(key){
	case 'w':
audio=new Audio('sounds/tom-1.mp3');
audio.play();
break;
case 'a':
audio=new Audio('sounds/tom-2.mp3');
audio.play();
break;
case 's':
audio=new Audio('sounds/tom-3.mp3');
audio.play();
break;
case 'd':
audio=new Audio('sounds/tom-4.mp3');
audio.play();
break;
case 'j':
audio=new Audio('sounds/kick-bass.mp3');
audio.play();
break;
case 'k':
audio=new Audio('sounds/crash.mp3');
audio.play();
break;case 'l':
audio=new Audio('sounds/snare.mp3');
audio.play();
break;
default:
	alert('other key have been click.');

}
}
function buttonAnimation(button){
	var activeButton=document.querySelector("."+button);
activeButton.classList.add('pressed');
setTimeout(function(){
activeButton.classList.remove('pressed');
},100);
}