$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    createPlatform(300, 700, 50, 50, "red",); //bright red for a finished platform
    createPlatform(400, 600, 65, 50, "red");
    createPlatform(650, 570, 70, 50, "red");
    createPlatform(750, 450, 80, 50, "red",);
    createPlatform(1000, 350, 90, 50, "red");
    createPlatform(650, 300, 100, 50, "red");
    createPlatform(500, 200, 100, 50, "red",);
    createPlatform(1200, 300, 50, 50, "red");
    createPlatform(100, 100, 250, 50, "red");




    createCollectable("diamond", 1200, 100, 40, 0.5, 0.7);
    createCollectable("kennedi", 800, 400, 40, 0.5, 0.7);
    createCollectable("grace", 100, 50, 40, 0.5, 0.7);


    
    createCannon("right", 200, 1000)
    createCannon("left", 400, 1000)
    createCannon("right", 650, 2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
