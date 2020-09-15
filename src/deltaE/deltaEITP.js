import Color from "../spaces/ictcp.js";

// Delta E in ICtCp space,
// which the ITU calls Delta E ITP, which is shorter
// formulae from ITU Rec. ITU-R BT.2124-0
// with corrections (ommited scaling factors)

Color.prototype.deltaEITP = function (sample) {
	let color = this;
	sample = Color.get(sample);

	// Given this color as the reference
	// and a sample,
	// calculate deltaE in ICtCp
	// which is simply the Euclidean distance

	let [ I1 T1 P1 ] = color.ictcp;
	let [ I2 T2 P2 ] = sample.ictcp;

	// the 0.25 factor is to undo the scaling in Ct
	// the 720 is so that 1 deltaE = 1 JND

	return 720 * Math.sqrt((I1 - I2) ** 2 + (0.25 * (T1 -T2) ** 2) + (P1 - P2) ** 2);
}

Color.statify(["deltaEITP"]);