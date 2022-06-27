window.onload = function () {
  const body = document.body;

  console.log(body);
  let level = '';

  //// All the Mole Creation stuff
  

  function createMole() {


    let moleDiv = document.createElement('div');
    moleDiv.className = 'mole';
    document.body.appendChild(moleDiv);


    //Picks a random number (hole) between 1 and 9
    const randomHole = () => {
      return Math.floor(Math.random() * 9 + 1)
    }

    //Sets a random starting position for the mole
    function randomPosition(mole) {
      let newHole = randomHole();

      if (newHole == 1) {
        mole.style.top = 0 + 'px';
        mole.style.left = 395 + 'px';
        mole.style.zIndex = '2';
      } else if (newHole == 2) {
        mole.style.top = 0 + 'px';
        mole.style.left = 667 + 'px';
        mole.style.zIndex = '2';
      } else if (newHole == 3) {
        mole.style.top = 0 + 'px';
        mole.style.left = 943 + 'px';
        mole.style.zIndex = '2';
      } else if (newHole == 4) {
        mole.style.top = 222 + 'px';
        mole.style.left = 395 + 'px';
        mole.style.zIndex = '3';
      } else if (newHole == 5) {
        mole.style.top = 222 + 'px';
        mole.style.left = 667 + 'px';
        mole.style.zIndex = '3';
      } else if (newHole == 6) {
        mole.style.top = 222 + 'px';
        mole.style.left = 943 + 'px';
        mole.style.zIndex = '3';
      } else if (newHole == 7) {
        mole.style.top = 444 + 'px';
        mole.style.left = 395 + 'px';
        mole.style.zIndex = '4'
      } else if (newHole == 8) {
        mole.style.top = 444 + 'px';
        mole.style.left = 667 + 'px';
        mole.style.zIndex = '4'
      } else if (newHole == 9) {
        mole.style.top = 444 + 'px';
        mole.style.left = 943 + 'px';
        mole.style.zIndex = '4'
      }

    }

    randomPosition(moleDiv)


    //Sets new random positions for the mole
    function moveMole(mole) {
      let newHole = randomHole();

      if (newHole == 1) {
        mole.style.top = 0 + 'px';
        mole.style.left = 395 + 'px';
        mole.style.zIndex = '2';
      } else if (newHole == 2) {
        mole.style.top = 0 + 'px';
        mole.style.left = 667 + 'px';
        mole.style.zIndex = '2';
      } else if (newHole == 3) {
        mole.style.top = 0 + 'px';
        mole.style.left = 943 + 'px';
        mole.style.zIndex = '2';
      } else if (newHole == 4) {
        mole.style.top = 222 + 'px';
        mole.style.left = 395 + 'px';
        mole.style.zIndex = '3';
      } else if (newHole == 5) {
        mole.style.top = 222 + 'px';
        mole.style.left = 667 + 'px';
        mole.style.zIndex = '3';
      } else if (newHole == 6) {
        mole.style.top = 222 + 'px';
        mole.style.left = 943 + 'px';
        mole.style.zIndex = '3';
      } else if (newHole == 7) {
        mole.style.top = 444 + 'px';
        mole.style.left = 395 + 'px';
        mole.style.zIndex = '4'
      } else if (newHole == 8) {
        mole.style.top = 444 + 'px';
        mole.style.left = 667 + 'px';
        mole.style.zIndex = '4'
      } else if (newHole == 9) {
        mole.style.top = 444 + 'px';
        mole.style.left = 943 + 'px';
        mole.style.zIndex = '4'
      }


    }

    function newLocation() {
      moveMole(moleDiv)
    }

    const moleInterval = setInterval(newLocation, 2800);

    molePop()

    function molePop() {
      moleDiv.classList.toggle('pop')
      setTimeout(moleunPop, 1400)
    }

    function moleunPop() {
      moleDiv.classList.toggle('pop')
      setTimeout(molePop, 1400)
    }


    moleDiv.addEventListener("click", addDead)
    
    


    function addDead() {
      splat.load();
      splat.play();
      hammer.load();
      hammer.play();
      const randomSound = () => {
        return Math.floor(Math.random() * 20 + 1)
      }
      let newSound = randomSound();

      if (newSound == 1) {
        lol.play();
      } else if (newSound == 2) {
        pain.play();
      } else if (newSound == 3) {
        wee.play();
      } else if (newSound == 4) {
        ow.play();
      } else if (newSound == 5) {
        ah.play();
      } else if (newSound == 6) {
        pain.play();
      } else if (newSound == 7) {
        ah.play();
      } else if (newSound == 8) {
        ow.play();
      } else if (newSound == 9) {
        ah.play();
      } else if (newSound == 10) {
        ow.play();
      } 
      
      moleDiv.removeEventListener("click", addDead);


      moleDiv.classList.add('dead');
      clearInterval(moleInterval);
      clearTimeout(molePop);
      clearTimeout(moleunPop);
      const moleOut = setTimeout(moleDie, 2000);

      function moleDie() {
        moleDiv.remove()
      }

      setTimeout(checkForWinner, 2000);

    }

    return moleDiv
  }

  //// Timer stuff
  
  let timer = document.querySelector('h3');
  let time = '21'

  function setTimer() {

    let interval = setInterval(function () {
      time--;
      timer.innerText = `${time}`
      if (time === 5) {
        timer.style.color = 'red';
      }
      if (time === 0) {
        
        clearInterval(interval);
        gameOver();


        
        
      }
    }, 1000);
  }

  let coverLayer 

  function gameOver() {
    starMan.pause();
    gameOverSound.play();
    levelNum.style.opacity = '90%';
    levelNum.innerText = 'GAME OVER'
    levelNum.zIndex = '10';
    levelNum.style.fontSize = '40px';
    levelNum.style.fontFamily = 'Impact, fantasy';
    levelNum.style.fontWeight = 'lighter'
    levelNum.style.transform = 'scale(8)';
    levelNum.style.pointerEvents = 'initial';
    levelNum.style.background = 'none';
    levelNum.style.border = 'none';
    levelNum.style.transition = '.5s'
    levelNum.style.color = 'red'

  
  
    timer.style.opacity = '0%';

    
    
  }

  

  

  //// Title Screen Stuff

  const gameTitle = document.querySelector('h1');

  titleGlow()

  function titleGlow() {
    gameTitle.style.transform = 'scale(1.02)';
    gameTitle.classList.toggle('title')
    setTimeout(titleUnglow, 1000)
  }

  function titleUnglow() {
    gameTitle.style.transform = "";
    gameTitle.classList.toggle('title')
    setTimeout(titleGlow, 1000)
  }


  const startButton = document.querySelector('button');
  const startScreen = document.querySelector('#startbox');


  //// Level slide
  let levelNum = document.querySelector('h2');

  //// Mole splat sound
  let splat = new Audio('audio/splat.mp3');
  let starMan = new Audio('audio/mario.mp3');
  let lol = new Audio('audio/lol.mp3');
  let pain = new Audio('audio/pain.mp3');
  let wee = new Audio('audio/wee.mp3');
  let ow = new Audio('audio/ow.mp3');
  let ah = new Audio('audio/ah.mp3');
  let hammer = new Audio('audio/hammer.mp3');
  let gameOverSound = new Audio('audio/gameover.mp3')
  let clear = new Audio('audio/clear.mp3')

  const backGround = document.createElement('div');
  backGround.className = 'grass';
  
  //// startButton is clicked, startGame

  startButton.addEventListener("click", startGame);

  function startGame() {
    startButton.removeEventListener("click", startGame);
    starMan.load();
    starMan.play();
    starMan.loop = true;
    // startButton.style.color = 'yellow';
    startScreen.style.opacity = '0%';
    startScreen.style.transform = 'scale(5)';
    // startButton.style.transform = 'scale(.5)';
    const moleHoles = document.createElement('div');
    moleHoles.setAttribute('id', 'moleholes');
    document.body.appendChild(moleHoles)
    const block = document.createElement('div');
    block.className = 'block';
    document.body.appendChild(block);
    const block2 = document.createElement('div');
    block2.className = 'block2';
    document.body.appendChild(block2);
    const block3 = document.createElement('div');
    block3.className = 'block3';
    document.body.appendChild(block3);


    document.body.appendChild(backGround);





    setTimeout(() => startScreen.remove(), 1000)

    setTimeout(playGame, 1000)
  }

  function checkForWinner() {
    let moles = document.getElementsByClassName('mole').length;
    if (moles == 0) {
      timer.style.opacity = '0%';
      if (level == 1) {
        levelTwo()
      } else if (level == 2) {
        levelThree()
      } else if (level == 3) {
        levelFour()
      } else if (level == 4) {
        levelFive()
      } else if (level == 5) {
        levelSix()
      } else if (level == 6) {
        levelSeven()
      } else if (level == 7) {
        levelEight()
      } else if (level == 8) {
        gameComplete()
      }
      
    }
  }


  function playGame() {

    //// Level One

    levelOne()

    function levelOne() {
      level = 1;
      // levelNum.style.display = '';
      levelNum.style.transform = 'scale(5)';
      levelNum.style.opacity = '100%';
      setTimeout(() => levelNum.style.opacity='0%', 2000);

      for (let i = 0; i < 3; i++) {
    
        setTimeout(createMole, 3000)
        
      }
    


      setTimeout(setTimer, 2000,)
     
      

      // setTimeout(createMole, 3000)
      // setTimeout(createMole, 6000)
    }
  }




  function levelTwo() {
    level = 2;
    levelNum.innerText = 'Level 2'
    levelNum.style.opacity='100%'

    setTimeout(() => time = '21', 2000);
    setTimeout(() => timer.style.color = 'black', 2000);
    setTimeout(() => timer.style.opacity = '100%', 3000);
    
    document.body.style.backgroundColor = 'DarkKhaki';
    backGround.style.backgroundImage = "url('images/backgrounded2.png')"

    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 5; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }

  function levelThree() {
    level = 3;
    levelNum.innerText = 'Level 3'
    levelNum.style.opacity='100%'

    setTimeout(() => time = '21', 2000);
    setTimeout(() => timer.style.color = 'black', 2000);
    setTimeout(() => timer.style.opacity = '100%', 3000);
    
    document.body.style.backgroundColor = 'lightblue';
    backGround.style.backgroundImage = "url('images/backgrounded3.png')"

    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 7; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }

  function levelFour() {
    level = 4;
    levelNum.innerText = 'Level 4'
    levelNum.style.opacity='100%'

    setTimeout(() => time = '21', 2000);
    setTimeout(() => timer.style.color = 'black', 2000);
    setTimeout(() => timer.style.opacity = '100%', 3000);
    
    document.body.style.backgroundColor = 'DarkGreen';
    backGround.style.backgroundImage = "url('images/backgrounded4.png')"

    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 9; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }

  function levelFive() {
    level = 5;
    levelNum.innerText = 'Level 5'
    levelNum.style.opacity='100%'

    setTimeout(() => time = '21', 2000);
    setTimeout(() => timer.style.color = 'black', 2000);
    setTimeout(() => timer.style.opacity = '100%', 3000);
    
    document.body.style.backgroundColor = 'MediumPurple';
    backGround.style.backgroundImage = "url('images/backgrounded5.png')"

    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 11; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }
  
  function levelSix() {
    level = 6;
    levelNum.innerText = 'Level 6'
    levelNum.style.opacity='100%'

    setTimeout(() => time = '21', 2000);
    setTimeout(() => timer.style.color = 'black', 2000);
    setTimeout(() => timer.style.opacity = '100%', 3000);
    
    document.body.style.backgroundColor = 'MidnightBlue';
    backGround.style.backgroundImage = "url('images/backgrounded6.png')"

    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 13; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }

  function levelSeven() {
    level = 7;
    levelNum.innerText = 'Level 7'
    levelNum.style.opacity='100%'

    setTimeout(() => time = '21', 2000);
    setTimeout(() => timer.style.color = 'black', 2000);
    setTimeout(() => timer.style.opacity = '100%', 3000);
    
    document.body.style.backgroundColor = 'SaddleBrown';
    backGround.style.backgroundImage = "url('images/backgrounded7.png')"

    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 15; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }

  function levelEight () {
    level = 8;
    levelNum.innerText = 'Level 8'
    levelNum.style.opacity='100%'

    setTimeout(() => time = '21', 2000);
    setTimeout(() => timer.style.color = 'black', 2000);
    setTimeout(() => timer.style.opacity = '100%', 3000);
    
    document.body.style.backgroundColor = 'DarkGray';
    backGround.style.backgroundImage = "url('images/backgrounded8.png')"

    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 17; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }

  function gameComplete(){
    starMan.pause();
    gameOverSound.remove();
    clear.play();

    levelNum.style.opacity = '100%';
    levelNum.innerText = 'YOU WIN!'
    levelNum.zIndex = '10';
    levelNum.style.fontSize = '40px';
    levelNum.style.fontFamily = 'Impact, fantasy';
    levelNum.style.transform = 'scale(8)';
    backGround.style.backgroundImage = "url('images/backgrounded9.png')"
    setTimeout(congratsText, 4000)
    setTimeout(() => levelNum.remove(), 3000);
    let killMoleHoles = document.getElementById('moleholes');
    killMoleHoles.remove();
   
    time = ''
    
    

    function congratsText() {
      
      let congrats = document.querySelector('h4');
      congrats.innerText = 'Congratulations!'
      
    }

  }

}