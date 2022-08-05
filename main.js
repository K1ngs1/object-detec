var img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);

    fill("blue");
    text("Cat", 120, 120);
    noFill();
    stroke("blue");
    rect(100, 100, 450, 350);
}
