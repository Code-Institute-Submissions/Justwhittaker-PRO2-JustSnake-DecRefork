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
    head: {
        position: { x: -1, y: -1 }
    },
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
    if (snake.parts[0].position.x == food.position.x && snake.parts[0].position.y == food.position.y) {
        growSnake();
        addFood();
    }
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