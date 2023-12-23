function make_lattice(num) {
  for (let i = 1; i < num; i++) {
    for (let j = 1; j < num; j++) {
      let x = (width / num) * i;
      let y = (height / num) * j;
      let r = s / (lattice_num)*(2/5);

      lattice.push(new BounceBall(x, y, r, m, g, k, s));
    }
  }
}
