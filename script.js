window.onload = function () {
  const body = document.body;

  console.log(body);




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

  startButton.addEventListener("click", startGame);

  function startGame () {
    startButton.style.color = 'yellow';
    document.body.style.backgroundImage = 'url(images/background.png)';
    startScreen.remove();

    createMole()
  }






  function createMole() {


    let moleDiv = document.createElement('div');
    moleDiv.className = 'mole';
    document.body.appendChild(moleDiv);

    // setInterval(flapWings, 250);

    // function flapWings() {
    //   duckDiv.classList.toggle('flap');
    // }

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
      } else if (newHole == 2) {
        mole.style.top = 0 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 3) {
        mole.style.top = 0 + 'px';
        mole.style.left = 943 + 'px';
      } else if (newHole == 4) {
        mole.style.top = 222 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 5) {
        mole.style.top = 222 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 6) {
        mole.style.top = 222 + 'px';
        mole.style.left = 943 + 'px';
      } else if (newHole == 7) {
        mole.style.top = 444 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 8) {
        mole.style.top = 444 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 9) {
        mole.style.top = 444 + 'px';
        mole.style.left = 943 + 'px';
      }

    }

    randomPosition(moleDiv)


    //Sets new random positions for the mole
    function moveMole(mole) {
      let newHole = randomHole();

      if (newHole == 1) {
        mole.style.top = 0 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 2) {
        mole.style.top = 0 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 3) {
        mole.style.top = 0 + 'px';
        mole.style.left = 943 + 'px';
      } else if (newHole == 4) {
        mole.style.top = 222 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 5) {
        mole.style.top = 222 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 6) {
        mole.style.top = 222 + 'px';
        mole.style.left = 943 + 'px';
      } else if (newHole == 7) {
        mole.style.top = 444 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 8) {
        mole.style.top = 444 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 9) {
        mole.style.top = 444 + 'px';
        mole.style.left = 943 + 'px';
      }


    }

    function newLocation() {
      moveMole(moleDiv)
    }

    const moleInterval = setInterval(newLocation, 1000);

    
    moleDiv.addEventListener("click", addDead)

    function addDead() {
      moleDiv.classList.add('dead');
      const moleOut = setTimeout(moleDie, 1000);
      clearInterval(moleInterval);
      

      function moleDie() {
        moleDiv.remove()
      }

    }
    
    return moleDiv
  }






  for (let i = 0; i < 5; i++) {


  }


  // createMole()





}