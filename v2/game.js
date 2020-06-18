// game.js

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

key('w', goNorth);
key('d', goEast);
key('s', goSouth);
key('a', goWest);

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

function initWorld() {
    canvas = $('#game-panel')[0];
    ctx = canvas.getContext('2d');
}

function initSnake() {
    snake = {
        direction: direction.NORTH,
        head: {
            position: { x: -1, y: -1 }
        },
        parts: [
            { position: { x: 10, y: 10 } }
        ]
    };
}

function clearWorld() {
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function checkFoodHit() {
    if (snake.parts[0].position.x == food.position.x && snake.parts[0].position.y == food.position.y) {
        growSnake();
        addFood();
        plusScore();
        drawScore();
    }
}

function drawScore() {
    $('#score').html(score);
}

function resetScore() {
    score = 0;
}

function plusScore() {
    score = score + 10;
}

function addFood() {
    food.position.x = Math.floor(Math.random() * ((canvas.width / 10) - 1));
    food.position.y = Math.floor(Math.random() * ((canvas.height / 10) - 1));
}

function growSnake() {
    snake.parts.push(snake.head);
}

function loop() {
    moveSnake();
    checkWallHit();
    checkSnakeHit();
    checkFoodHit();
    clearWorld();
    drawSnake();
    drawFood();
}

function newGame() {
    initWorld();
    initSnake();
    addFood();
    resetScore();
    drawScore();
}

function start() {
    newGame();
    setInterval(loop, 300);
}

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