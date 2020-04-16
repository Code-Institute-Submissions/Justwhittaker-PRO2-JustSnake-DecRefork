var canvas =document.getElementById('snake');
var context = canvas.getContext('2d');
var grid = 16;
var count = 0;
var score = 0;
var max = 0;

var snake = {
    x: 180,
    y: 180,

//snake velocity moving 1 length every frame
    dx: grid,
    dy: 0,
//tracking occupied grid
    cells: [],
};

var apple = {
    x:360,
    y:360,
};

