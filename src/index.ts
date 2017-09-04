import { Map } from '@riim/map-set-polyfill';

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

export let map = list.reduce((map, name) => map.set(name, true), new Map<string, true>());
