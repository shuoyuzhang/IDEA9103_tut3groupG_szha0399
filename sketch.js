let img;

function preload() {
  img = loadImage("artwork.jpg"); // Load the image
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Set the canvas size to the window size
  img.resize(windowWidth, windowHeight); // Resize the image to fill the canvas
  noStroke();
  img.loadPixels();

  let gridSize = 10; // Size of each square in the grid

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let index = (x + y * img.width) * 4;
      
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      fill(r, g, b);
      
      // Draw a rectangle with a random width and height
      let w = random(gridSize / 2, gridSize * 1.5);
      let h = random(gridSize / 2, gridSize * 1.5);
      rect(x, y, w, h);
    }
  }
}

function draw() {
  // No need to redraw the image in every frame
}
