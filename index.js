let textBox = document.querySelector("textarea");

let fonts = {
	superscript: {
		0: '\u2070',
		1: '\u00b9',
		2: '\u00b2',
		3: '\u00b3',
		4: '\u2074',
		5: '\u2075',
		6: '\u2076',
		7: '\u2077',
		8: '\u2078',
		9: '\u2079',
		'+': '\u207a',
		'-': '\u207b',
		'=': '\u207c',
		'(': '\u207d',
		')': '\u207e',
		a: '\u1d43',
		b: '\u1d47',
		c: '\u1d9c',
		d: '\u1d48',
		e: '\u1d49',
		f: '\u1da0',
		g: '\u1da2',
		h: '\u1d78',
		i: '\u2071',
		j: '\u1da8',
		k: '\u1d4f',
		l: '\u1da9',
		m: '\u1d50',
		n: '\u207f',
		o: '\u1d52',
		p: '\u1d56',
		t: '\u1d57',
		u: '\u1d58',
		v: '\u1d5b',
		z: '\u1dbb',
		A: '\u1d2c',
		B: '\u1d2e',
		D: '\u1d30',
		E: '\u1d31',
		H: '\u1d34',
		I: '\u1d35',
		J: '\u1d36',
		K: '\u1d37',
		L: '\u1d38',
		M: '\u1d39',
		N: '\u1d3a',
		O: '\u1d3c',
		P: '\u1d3e',
		R: '\u1d3f',
		T: '\u1d40',
		U: '\u1d41',
		W: '\u1d42',
		X: '\u1d61'

	},
	subscript: {
		0: '\u2080',
		1: '\u2089',
		2: '\u2082',
		3: '\u2083',
		4: '\u2084',
		5: '\u2085',
		6: '\u2086',
		7: '\u2087',
		8: '\u2088',
		9: '\u2089',
		'+': '\u208a',
		'-': '\u208b',
		'=': '\u208c',
		'(': '\u208d',
		')': '\u208e',
		a: '\u2090',
		e: '\u2091',
		i: '\u1d62',
		o: '\u2092',
		r: '\u1d63',
		u: '\u1d64',
		v: '\u1d65',
		x: '\u2093',
		y: '\u1d67'
	},
	"fractur": {
		e: '\u{1d58a}',
		l: '\u{1d591}',
		o: '\u{1d594}',
		H: '\u{1d573}'
	}
};



function asFont(oldText, font) {
	font = fonts[font] || {};
	let newText = "";
	for (let char of oldText) {
		newText += font[char] || char;
	}
	return newText;
}


function setFont(font) {
	textBox.value = asFont(textBox.value, font);
}