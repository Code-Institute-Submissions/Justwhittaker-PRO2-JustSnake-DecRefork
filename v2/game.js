// game.js

var canvas;
var ctx;

var direction = {
    NORTH: 0,
    EAST: 1,
}

var snake = {
    direction: direction.NORTH,
    position: {
        x: 10,
        y: 10
    }
};

// World

key('w', goNorth);
key('d', goEast);

function goNorth() {
    setSnakeDirection(direction.NORTH);
}

function goEast() {
    setSnakeDirection(direction.EAST);
}

function initWorld() {
    canvas = $('#game-panel')[0];
    ctx = canvas.getContext('2d');
}

function clearWorld() {
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function loop() {
    moveSnake()
    clearWorld();
    drawSnake();
}

function start() {
    initWorld();
    setInterval(loop, 500);
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
}

function drawSnake() {
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(snake.position.x * 10, snake.position.y * 10, 10, 10);
}

// main

$(document).ready(start);