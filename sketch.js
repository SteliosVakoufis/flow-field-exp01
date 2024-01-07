let flowField;
let flowFieldDensity;

function setup() {
  createCanvas(400, 400);

  // Generate the flowField
  flowFieldDensity = 25;
  flowField = generateFlowField(width, height, flowFieldDensity);
}

function draw() {
  background(220);

  displayFlowField(flowField, 10);
}
