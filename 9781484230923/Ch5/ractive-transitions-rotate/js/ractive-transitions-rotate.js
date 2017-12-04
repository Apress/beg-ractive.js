'use strict';

Ractive.transitions.rotate = function rotate(t, params) {

  var DEFAULTS = {
    transform: 'rotate(20deg)'
  };

  params = t.processParams(params, DEFAULTS);

  t.setStyle('transform', params.transform);

  t.complete;
}
