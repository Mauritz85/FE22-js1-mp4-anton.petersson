let spotlightPath = anime.path('#svg path')

const spotlightMovement = anime({
  targets: '.spotlight',
  translateX: spotlightPath('x'),
  translateY: spotlightPath('y'),
  rotate: spotlightPath('angle'),
  easing: 'linear',
  duration: 10000,
  loop: true,
  autoplay: false,
  direction: 'alternate',
  
});

const spotlightColorAnimation = anime({
  targets: '.spotlight',
  backgroundColor: 'rgb(100, 105, 200)',
  duration: 200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo'
  

});

const spotlightOpacityAnimation = anime({
  targets: '.spotlight',
  backgroundColor: 'rgb(100, 105, 200)',
  duration: 1700,
  loop: true,
  direction: 'alternate',
  opacity: 0.8,
  autoplay: false,
  easing: 'easeInOutExpo'
  

});


const wooferAnimation = anime ({
  targets: '.woofer',
  duration: 1000,
  loop: true,
  duration: 450,
  autoplay: false,
  backgroundColor: 'rgb(90, 90, 90)'

});

const wooferCentreAnimation = anime({
  targets: '.woofer-centre',
  scale: 1.5,
  loop: true,
  duration: 450,
  autoplay: false
});

function getRandom() {
  return Math.random() * 100;
}


const notesAnimation1 = anime ({
  targets: '.note1',
  loop: true,
  easing: 'easeInOutSine',
  color: 'rgb(400, 200, 200)',
  duration: 1000,
  fontSize: '50px',
  loopBegin: function getRandom(anim) {
    Math.random() * 100
  },
  translateX: getRandom(),
  translateY: getRandom(),
  autoplay: false
});

const notesAnimation2 = anime({
  targets: '.note2',
  loop: true,
  easing: 'easeInOutSine',
  color: 'rgb(255, 238, 3)',
  duration: 1000,
  fontSize: '50px',
  loopBegin: function getRandom(anim) {
    Math.random() * -100
  },
  translateX: getRandom(),
  translateY: getRandom(),
  delay: 500,
  autoplay: false
});

const notesAnimation3 = anime({
  targets: '.note3',
  loop: true,
  easing: 'easeInOutSine',
  color: 'rgb(200, 238, 3)',
  duration: 1000,
  fontSize: '50px',
  loopBegin: function getRandom(anim) {
    Math.random() * 100
  },
  translateX: getRandom(),
  translateY: getRandom(),
  delay: 1000,
  autoplay: false
});

const notesAnimation4 = anime({
  targets: '.note4',
  loop: true,
  easing: 'easeInOutSine',
  color: 'rgb(200, 100, 3)',
  duration: 1000,
  fontSize: '50px',
  loopBegin: function getRandom(anim) {
    Math.random() * 100
  },
  translateX: getRandom(),
  translateY: getRandom(),
  delay: 1500,
  autoplay: false,

});

const backgroundAnimation = anime({
  targets: '.speaker-box',
  backgroundColor: '#000000',
  duration: 500,
  loop: true,
  direction: 'reverse',
  autoplay: false,
});

const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const stopBtn = document.getElementById('stop')


const animationsArray =[ 
  spotlightMovement,
  spotlightOpacityAnimation,
  wooferAnimation,
  wooferCentreAnimation,
  notesAnimation1,
  notesAnimation2,
  notesAnimation3,
  notesAnimation4,
  backgroundAnimation
];


playBtn.addEventListener('click', function() {
  for (let i=0; i<animationsArray.length; i++){
    animationsArray[i].play()

  }
});

pauseBtn.addEventListener('click', function() {
  for (let i=0; i<animationsArray.length; i++){
    animationsArray[i].pause()

  }
});

stopBtn.addEventListener('click', function() {
  for (let i=0; i<animationsArray.length; i++){
    animationsArray[i].restart()
    animationsArray[i].pause()

  }
});

