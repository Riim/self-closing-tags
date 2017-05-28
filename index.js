var list = exports.list = [
	'area',
	'base',
	'basefont',
	'br',
	'col',
	'command',
	'embed',
	'frame',
	'hr',
	'img',
	'input',
	'isindex',
	'keygen',
	'link',
	'meta',
	'param',
	'source',
	'track',
	'wbr',

	// svg tags
	'circle',
	'ellipse',
	'line',
	'path',
	'polygone',
	'polyline',
	'rect',
	'stop',
	'use'
];

exports.map = list.reduce(function(map, name) {
	map[name] = true;
	return map;
}, Object.create(null));

exports.default = exports;
