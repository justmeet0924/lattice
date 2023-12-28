function make_lattice(num, array) {

	let w = width;
	let h = height;
	let s = min(w, h);
	for (let i = 1; i < num; i++) {
		for (let j = 1; j < num; j++) {
			let x = (width / num) * i;
			let y = (height / num) * j;
			let r = s / (num) * (2 / 5);

			array.push(new Ball(x, y, r));
		}
	}
}

//make points which make lattice
function make_lattice_2(num, array) {

	for (let i = 1; i < num; i++) {
		for (let j = 1; j < num; j++) {
			let x = (width / num) * i;
			let y = (height / num) * j;

			array.push({x:x,y:y});
		}
	}
}
