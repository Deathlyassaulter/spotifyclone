console.log("welcome to spotify");


//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let op = document.getElementById('op');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: "Excuses", filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
  {songName: "Samjho Na", filePath:"songs/2.mp3",coverPath: "covers/2.jpg"},
  {songName: "Baller", filePath:"songs/3.mp3",coverPath: "covers/3.jpg"},
  {songName: "Elevated", filePath:"songs/4.mp3",coverPath: "covers/4.jpg"},
  {songName: "Haaray", filePath:"songs/5.mp3",coverPath: "covers/5.jpg"},
  {songName: "Insane", filePath:"songs/6.mp3",coverPath: "covers/6.jpg"},
  {songName: "Ma Belle", filePath:"songs/7.mp3",coverPath: "covers/7.jpg"},
  {songName: "Maan meri Jaan", filePath:"songs/8.mp3",coverPath: "covers/8.jpg"},
  {songName: "Roz Roz", filePath:"songs/9.mp3",coverPath: "covers/9.jpg"},
  {songName: "No Love",filePath:"songs/10.mp3",coverPath: "covers/10.jpg"},

]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("song")[0].innerText= songs[i].songName;
}); 




//  audioElement.play();

//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
        op.style.opacity = 1;
    
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    op.style.opacity = 0;
}
})


//listen to the events

audioElement.addEventListener('timeupdate',()=>{
    
    //Update seekbar
  let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})


const make = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play'); 
            
            
    })
}

 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        make();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause'); 
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
    songIndex = 0;}
    else
    {
        songIndex+=1
    }
audioElement.src = `songs/${songIndex+1}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex = 9;}
    else
    {
        songIndex-=1
    }
audioElement.src = `songs/${songIndex+1}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        
})