window.onload = function () {
  const body = document.body;

  console.log(body);

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
      splat.play();
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
  let time = '31'
  function setTimer() {

    let interval = setInterval(function () {
      time--;
      timer.innerText = `${time}`
      if (time === 0) {
        clearInterval(interval);
      }
    }, 1000);
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

  
  //// startButton is clicked, startGame

  startButton.addEventListener("click", startGame);

  function startGame() {
    startButton.removeEventListener("click", startGame);
    startButton.style.color = 'yellow';
    startScreen.style.opacity = '0%';
    startScreen.style.transform = 'scale(5)';
    startButton.style.transform = 'scale(.5)';
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

    const backGround = document.createElement('div');
    backGround.className = 'grass';
    document.body.appendChild(backGround);





    setTimeout(() => startScreen.remove(), 1000)

    setTimeout(playGame, 1000)
  }







  function playGame() {

    //// Level One

    levelOne()

    function levelOne() {

      // levelNum.style.display = '';
      levelNum.style.transform = 'scale(5)';
      levelNum.style.opacity = '100%';
      setTimeout(() => levelNum.style.opacity='0%', 2000);

      for (let i = 0; i < 5; i++) {
    
        setTimeout(createMole, 3000)
        
      }
    


      setTimeout(setTimer, 2000,)
      

      // setTimeout(createMole, 3000)
      // setTimeout(createMole, 6000)
    }
  }


  function checkForWinner() {
    let moles = document.getElementsByClassName('mole').length;
    if (moles == 0) {
      timer.style.opacity = '0%'
      levelTwo()
    }
  }

  function levelTwo () {
    levelNum.innerText = 'Level 2'
    levelNum.style.opacity='100%'
    setTimeout(() => levelNum.style.opacity='0%', 2000);
    for (let i = 0; i < 5; i++) {
    
      setTimeout(createMole, 3000)
      
    }

  }

}