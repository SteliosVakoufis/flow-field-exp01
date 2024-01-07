function generateFlowField(w, h, d) {
  ff = [];

  for (let wi = d; wi < w; wi += d) {
    for (let hi = d; hi < h; hi += d) {
      let v = createVector(wi, hi);
      ff.push(v)
    }
  }

  return ff;
}

function displayFlowField(ff, l) {
  ff.forEach(v => {
    strokeWeight(2);
    point(v.x, v.y);

    strokeWeight(1);
    h = v.heading();
    const vh = createVector(
      v.x + l * cos(h),
      v.y + l * sin(h)
    )
    line(v.x, v.y, vh.x, vh.y);
  });
}
