window.onload = function () {
    const body = document.body;
  
    console.log(body);





    

function createMole() {


    let moleDiv = document.createElement('div');
    moleDiv.className = 'mole';
    document.body.appendChild(moleDiv);

    // setInterval(flapWings, 250);

    // function flapWings() {
    //   duckDiv.classList.toggle('flap');
    // }

    const randomHole = () => {
        return Math.floor(Math.random() * 9 + 1)
      }
  
   
    //   function randomPosition(mole) {
    //     mole.style.top = randomHeight() + 'px';
    //     mole.style.left = randomWidth() + 'px';
    //   }

    //   randomPosition(moleDiv)
    
    
    function moveMole(mole) {
      let newHole = randomHole();

      if (newHole == 1){
        mole.style.top = 0 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 2){
        mole.style.top = 0 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 3){
        mole.style.top = 0 + 'px';
        mole.style.left = 943 + 'px';
      } else if (newHole == 4){
        mole.style.top = 222 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 5){
        mole.style.top = 222 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 6){
        mole.style.top = 222 + 'px';
        mole.style.left = 943 + 'px';
      } else if (newHole == 7){
        mole.style.top = 444 + 'px';
        mole.style.left = 395 + 'px';
      } else if (newHole == 8){
        mole.style.top = 444 + 'px';
        mole.style.left = 667 + 'px';
      } else if (newHole == 9){
        mole.style.top = 444 + 'px';
        mole.style.left = 943 + 'px';
      }

        // mole.style.top = 0 + 'px';
        // mole.style.top = 222 + 'px';
        // mole.style.top = 444 + 'px';
        
        // mole.style.left = 395 + 'px'; 
        // mole.style.left = 667 + 'px';
        // mole.style.left = 943 + 'px';
      }
    
      function newLocation() {
        moveMole(moleDiv) 
      }
    
      setInterval(newLocation, 1000);
    
      return moleDiv
}





  
  for (let i = 0; i < 5; i++) {
    
   
  }


  createMole()





}