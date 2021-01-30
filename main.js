var bt=document.getElementById('bt');
var bt2=document.getElementById('bt2');
var ad=document.getElementById('ad');
var fm=document.getElementById('fm');

bt.addEventListener('click', function(){
ad.play();
fm.play();
});

bt2.addEventListener('click', function(){
fm.pause();
});