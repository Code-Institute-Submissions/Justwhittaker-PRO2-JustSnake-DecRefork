// game.js

var canvas;
var ctx;

var direction = {
    NORTH: 0,
    EAST: 1,
    SOUTH: 2,
    WEST: 3
};

var snake = {
    direction: direction.NORTH,
    parts: [
        { position: { x: 10, y: 10 } }
    ]
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
    setSnakeDirection(direction.NORTH);
}

function goEast() {
    setSnakeDirection(direction.EAST);
}

function goSouth() {
    setSnakeDirection(direction.SOUTH);
}

function goWest() {
    setSnakeDirection(direction.WEST);
}

function initWorld() {
    canvas = $('#game-panel')[0];
    ctx = canvas.getContext('2d');
}

function clearWorld() {
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function checkFoodHit() {
    if (snake.position.x == food.position.x && snake.position.y == food.position.y) {
        addFood();
        growSnake();
    }
}

function addFood() {
    food.position.x = Math.floor(Math.random() * ((canvas.width / 10) - 1));
    food.position.y = Math.floor(Math.random() * ((canvas.height / 10) - 1));
}

function growSnake() {
    snake.length = snake.length + 1;
}

function loop() {
    moveSnake();
    checkFoodHit();
    clearWorld();
    drawSnake();
    drawFood();
}

function start() {
    initWorld();
    addFood();
    setInterval(loop, 300);
}

// Snake

function setSnakeDirection(direction) {
    snake.direction = direction;
}

function moveSnake() {
    if (snake.direction == direction.NORTH) {
        snake.position.y = snake.position.y - 1;
    }
    if (snake.direction == direction.EAST) {
        snake.position.x = snake.position.x + 1;
    }
    if (snake.direction == direction.SOUTH) {
        snake.position.y = snake.position.y + 1;
    }
    if (snake.direction == direction.WEST) {
        snake.position.x = snake.position.x - 1;
    }
}

function drawSnake() {
    ctx.fillStyle = '#00FF00';
    for (var i = 0; i < snake.length; i++) {
        ctx.fillRect(snake.position.x * 10, snake.position.y * 10, 10, 10);
    }
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.position.x * 10, food.position.y * 10, 10, 10);
}
// main

$(document).ready(start);