export let list = [
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

export let map = list.reduce(function(map, name) {
	map[name] = true;
	return map;
}, Object.create(null)) as { [name: string]: true };
