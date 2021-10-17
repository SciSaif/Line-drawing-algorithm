const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 30;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var grid;

(function setup() {
    grid = new Grid();
    grid.draw();
}());


