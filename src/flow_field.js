function generateFlowField(w, h, d) {
  ff = [];

  for (let wi = d; wi < w; wi += d) {
    for (let hi = d; hi < h; hi += d) {
      let vp = createVector(wi, hi);
      let vd = createVector(
        random(-1, 1),
        random(-1, 1)
      );

      ff.push(
        {
          pos: vp,
          dir: vd
        }
      )
    }
  }

  console.log(ff);

  return ff;
}

function displayFlowField(ff, l) {
  for (const { pos, dir } of ff) {
    strokeWeight(2);
    point(pos.x, pos.y);

    // Calculate vector direction
    const vd = pos.copy().add(dir.copy().setMag(l));

    strokeWeight(1);
    line(pos.x, pos.y, vd.x, vd.y);
  }
}
