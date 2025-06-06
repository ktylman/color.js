import ColorSpace from "../ColorSpace.js";
import Jzazbz from "./jzazbz.js";
import lch from "./lch.js";

export default new ColorSpace({
	id: "jzczhz",
	name: "JzCzHz",
	coords: {
		jz: {
			refRange: [0, 1],
			name: "Jz",
		},
		cz: {
			refRange: [0, 0.26],
			name: "Chroma",
		},
		hz: {
			refRange: [0, 360],
			type: "angle",
			name: "Hue",
		},
	},

	base: Jzazbz,
	fromBase: lch.fromBase,
	toBase: lch.toBase,

	formats: {
		// https://drafts.csswg.org/css-color-hdr/#JzCzhz
		jzczhz: {
			coords: [
				"<percentage> | <number>", 
				"<number> | <percentage>", 
				"<number> | <angle>"
			],
		},
	},
});
