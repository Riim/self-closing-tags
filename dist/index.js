"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = require("@riim/map-set-polyfill");
exports.list = [
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
exports.map = exports.list.reduce(function (map, name) { return map.set(name, true); }, new map_set_polyfill_1.Map());
