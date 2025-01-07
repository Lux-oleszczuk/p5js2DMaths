let arr = [];
let cellClicked = [];
let cellClickedReleased = [];
const CELLSIZE = 20;


function setup() {
    let w = floor(innerWidth / CELLSIZE) * CELLSIZE;
    let h = floor(innerHeight / CELLSIZE) * CELLSIZE;
    createCanvas(w, h);
    for (let i = 0; i < 50; i++) {
        arr.push(i);
    }

    for(let y = 0; y < height; y+= CELLSIZE) {
        for (let x = 0; x < width; x+= CELLSIZE) {
            cellClicked.push(false)
        }
    }

}
function draw() {
    background(220);
    let cellIndex = 0;
    for (let y = 0; y < height; y+= CELLSIZE) {
        for (let x = 0; x < width; x+=CELLSIZE) {
            let index = y + x/CELLSIZE; // find the index
            if (inside(x, y, CELLSIZE, CELLSIZE)) {
                cellClicked[cellIndex] = true;
                // were inside
                //fill(255, 0, 0);
                fill( 172, 26, 26);
            } else if (!cellClicked[cellIndex]) {

                // not inside
                fill(255);
            }
            stroke(0);
            rect(x, y, CELLSIZE, CELLSIZE);
            // colorMode(HSB);
            let h = map(index, 0, height, 0, 255);
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