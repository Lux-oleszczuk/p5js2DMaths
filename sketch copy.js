let arr = [];
let cellClicked = [];
const CELLSIZE = 50;


function setup() {
    let w = floor(innerWidth / CELLSIZE) * CELLSIZE;
    let h = floor(innerHeight / CELLSIZE) * CELLSIZE;
    createCanvas(w, h);
    for (let i = 0; i < 50; i++) {
        arr.push(i);
    }

    for(let y = 0; y < CELLSIZE; y++) {
        for (let x = 0; x < CELLSIZE; x++) {
            cellClicked.push(false)
        }
    }

}
function draw() {
    background(220);
    let cellIndex = 0;
    for (let y = 0; y < CELLSIZE; y++) {
        for (let x = 0; x < CELLSIZE; x++) {
            let xpos = x * 20;
            let ypos = y * 20;
            let index = y * 10 + x; // find the index
            if (inside(xpos, ypos, 20, 20)) {
                cellClicked[cellIndex] = true;
                // were inside
                fill(255, 0, 0);
            } else if (!cellClicked[cellIndex]) {

                // not inside
                fill(255);
            }
            stroke(0);
            rect(xpos, ypos, CELLSIZE, CELLSIZE);
            // colorMode(HSB);
            let h = map(index, 0, 255, 0, 255);
            fill(h);
            // colorMode(RGB);
            cellIndex++;
        }
    }
    // make the gradient
    for (let i = 0; i < height; i++) {
        colorMode(HSB);
        let h = map(i, 0, height, CELLSIZE, CELLSIZE);
        noStroke();
        line(CELLSIZE, i, CELLSIZE, i);
    }
    colorMode(RGB);
}
function inside(x, y, w, h) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        return true;
    } else {
        return false;
    }
}