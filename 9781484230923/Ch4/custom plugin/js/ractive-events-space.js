(function(global, factory) {
  'use strict';

  if (global.Ractive) {
    factory(global.Ractive);
  } else {
    throw new Error(
      'Could not find Ractive! It must be loaded before the Ractive-events-space plugin'   
    );
  }
})(typeof window !== 'undefined' ? window : this, function(Ractive) {
  'use strict';

  function onSpace(node, fire) {
    function defineKeyAction(event) {
      var which = event.which || event.keyCode;

      if (which === 32) {
        event.preventDefault();

        fire({ node: node, original: event });
      }
    }

    node.addEventListener('keydown', defineKeyAction, false);
    window.addEventListener('keydown', defineKeyAction, false);

    return {
      teardown: function() {
        node.removeEventListener('keydown', defineKeyAction, false);
        window.removeEventListener('keydown', defineKeyAction, false);
      }
    };
  }
  
  Ractive.events.space = onSpace;
});
