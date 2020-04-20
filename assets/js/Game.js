var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 16;
var count = 0;
var score=0;
var max=0;  

var snake = {
  x: 160,
  y: 160,

//snake velocity moving 1 length every frame
    dx: grid,
    dy: 0,
//tracking occupied grid
    cells: [],

    maxCells: 4
};

var apple = {
  x: 320,
  y: 320
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//game loop
function loop() {
  requestAnimationFrame(loop);
  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);
//move snake
   snake.x += snake.dx;
    snake.y += snake.dy;
// wrap snake pos horizontally
    if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  
// wrap snake pos vertically
if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
// front array is the head of the snake
snake.cells.unshift({x: snake.x, y: snake.y});
  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
// make apple
    context.fillStyle = 'yellow';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);

// create snake
    context.fillStyle = 'green';
    snake.cells.forEach(function(cell, index) {
        context.fillRect(cell.x, cell.y, grid-1,grid-1)
    
    // snake eats apple
        if (cell.x === apple.x && cell.y === apple.y){
            snake.maxCells++;
            score+=10;
    // get score
            document.getElementById('score').innerHTML=score;
        
    // canvas 400X400 which is 25*25 grids
        apple.x = getRandomInt (0,25) * grid;
        apple.y = getRandomInt (0,25) * grid;
    }
    // collision check
        for (var i = index + 1; i < snake.cells.length; i++)
        {
    //snake collision reset
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y)
            {
                if(score>max)
                {
                    max=score;
                }
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
                    score=0;
            apple.x = getRandomInt(0,25) * grid;
            apple.y = getRandomInt(0,25) * grid;
                document.getElementById('high').innerHTML=max;
            }
        }
    }

    );

}

// give movement on keyboard
document.addEventListener('keydown',function(e) {
     // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

//start game
requestAnimationFrame(loop);

