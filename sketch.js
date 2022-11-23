let field;
let imgtrunk1;
let imgtrunk2;
let sapling;
let truck;
let trunk1 = true;
let trunk2 = true;
let trunk3 = true;
let trunk4 = true;
let trunk5 = true;
let trunk6 = true;
let sapling1 = false;
let sapling2 = false;
let sapling3 = false;
let sapling4 = false;
let sapling5 = false;
let sapling6 = false;
let move = false;

function setup() {
  createCanvas(800, 600);
}

function preload() {
  field = loadImage("assets/field.png");
  imgtrunk1 = loadImage("assets/trunk1.png");
  imgtrunk2 = loadImage("assets/trunk2.png");
  sapling = loadImage("assets/sapling.png");
  truck = loadImage("assets/truck.png")
}

function draw() {
  image(field,0,0);

  if (trunk1) {image(imgtrunk1,42,460);}
  if (trunk2) {image(imgtrunk1,342,296);}
  if (trunk3) {image(imgtrunk1,546,236);}
  if (trunk4) {image(imgtrunk2,86,272);}
  if (trunk5) {image(imgtrunk2,242,436);}
  if (trunk6) {image(imgtrunk2,570,392);}

  if (sapling1) {image(sapling,78,356);}
  if (sapling2) {image(sapling,378,194);}
  if (sapling3) {image(sapling,584,138);}
  if (sapling4) {image(sapling,130,136);}
  if (sapling5) {image(sapling,284,302);}
  if (sapling5) {image(sapling,620,256);}
 }

 function mousePressed() {
  
 }