// game.js
// variables

var canvas;
var ctx;
var snake;

var score = 0;

var direction = {
    NORTH: 0,
    EAST: 1,
    SOUTH: 2,
    WEST: 3
};


var food = {
    position: {
        x: -1,
        y: -1
    }
};

// World

// from keymaser.js
key('w', goNorth, buttonNorth);
key('d', goEast, buttonEast);
key('s', goSouth, buttonSouth);
key('a', goWest, buttonWest);

// Set key Direction Controls
function goNorth() {
    if (snake.direction != direction.SOUTH) {
        setSnakeDirection(direction.NORTH);
    }
}

function goEast() {
    if (snake.direction != direction.WEST) {
        setSnakeDirection(direction.EAST);
    }
}

function goSouth() {
    if (snake.direction != direction.NORTH) {
        setSnakeDirection(direction.SOUTH);
    }
}

function goWest() {
    if (snake.direction != direction.EAST) {
        setSnakeDirection(direction.WEST);
    }
}
//Set button direction controls
function buttonNorth() {
    if (snake.direction != direction.SOUTH) {
        setSnakeDirection(direction.NORTH);
    }
}

function buttonSouth() {
    if (snake.direction != direction.NORTH) {
        setSnakeDirection(direction.SOUTH);
    }
}

function buttonEast() {
    if (snake.direction != direction.WEST) {
        setSnakeDirection(direction.EAST)
    }

    function buttonWest() {
        if (snake.direction != direction.EAST) {
            setSnakeDirection(direction.WEST);
        }
    }

    // Intialize World
    function initWorld() {
        canvas = $('#game-panel')[0];
        ctx = canvas.getContext('2d');
    }

    // Intialize Snake
    function initSnake() {
        snake = {
            direction: direction.EAST,
            head: {
                position: { x: -1, y: -1 }
            },
            parts: [
                { position: { x: 10, y: 10 } }
            ]
        };
    }
    // Reset World -- Core code from https://www.html5canvastutorials.com/advanced/html5-canvas-snake-game/
    function clearWorld() {
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Snake consumes Food
    function checkFoodHit() {
        if (snake.parts[0].position.x == food.position.x && snake.parts[0].position.y == food.position.y) {
            growSnake();
            addFood();
            plusScore();
            drawScore();
        }
    }

    // Score Functionality 
    function drawScore() {
        $('#score').html(score);
    }

    function resetScore() {
        score = 0;
    }

    function plusScore() {
        score = score + 10;
    }

    // Randomize food spawn -- Core code from https://www.html5canvastutorials.com/advanced/html5-canvas-snake-game/
    function addFood() {
        food.position.x = Math.floor(Math.random() * ((canvas.width / 10) - 1));
        food.position.y = Math.floor(Math.random() * ((canvas.height / 10) - 1));
    }

    // Grow Snake after eating apple
    function growSnake() {
        snake.parts.push(snake.head);
    }

    // Primary Loop
    function newGame() {
        initWorld();
        initSnake();
        addFood();
        resetScore();
        drawScore();
    }

    // Secondary Loop
    function loop() {
        moveSnake();
        checkWallHit();
        checkSnakeHit();
        checkFoodHit();
        clearWorld();
        drawSnake();
        drawFood();
    }

    function start() {
        newGame();
        setInterval(loop, 120);
    }

    // Collision detection
    function checkWallHit() {
        var head = snake.parts[0];
        if (head.position.x < 0 || head.position.y < 0 || head.position.x == canvas.width / 10 || head.position.y == canvas.height / 10) {
            newGame();
        }
    }

    function checkSnakeHit() {
        var head = snake.parts[0];
        for (var i = 1; i < snake.parts.length; i++) {
            var part = snake.parts[i];
            if (head.position.x == part.position.x && head.position.y == part.position.y) {
                newGame();
            }
        }
    }

    // Snake

    function setSnakeDirection(direction) {
        snake.direction = direction;
    }

    // Snake direction render
    function moveSnake() {
        var head = {
            position: {
                x: snake.parts[0].position.x,
                y: snake.parts[0].position.y
            }
        };
        snake.head.position.x = head.position.x;
        snake.head.position.y = head.position.y;
        if (snake.direction == direction.NORTH) {
            head.position.y = head.position.y - 1;
        }
        if (snake.direction == direction.EAST) {
            head.position.x = head.position.x + 1;
        }
        if (snake.direction == direction.SOUTH) {
            head.position.y = head.position.y + 1;
        }
        if (snake.direction == direction.WEST) {
            head.position.x = head.position.x - 1;
        }
        //Build blocks -- Core code https://www.html5canvastutorials.com/advanced/html5-canvas-snake-game/
        snake.parts.pop();
        snake.parts.unshift(head);
    }

    function drawSnake() {
        ctx.fillStyle = '#00FF00';
        for (var i = 0; i < snake.parts.length; i++) {
            var part = snake.parts[i];
            ctx.fillRect(part.position.x * 10, part.position.y * 10, 10, 10);
        }
    }

    function drawFood() {
        ctx.fillStyle = 'red';
        ctx.fillRect(food.position.x * 10, food.position.y * 10, 10, 10);
    }

    // main

    $(document).ready(start);