var tooltipDecorator = function ( node, content ) {
  var tooltip, handlers, eventName;
  
 
  var start = function ( event ) {
    tooltip = document.createElement( tooltipDecorator.elementName );
    tooltip.className = tooltipDecorator.className;
    tooltip.textContent = content;
    
    node.parentNode.insertBefore( tooltip, node );
  },

  move = function ( event ) {
    tooltip.style.left = event.clientX + tooltipDecorator.offsetX + 'px';
    tooltip.style.top = ( event.clientY - tooltip.clientHeight + tooltipDecorator.offsetY ) + 'px';
  },

  leave = function () {
    tooltip.parentNode.removeChild( tooltip );
  }

  // Assign functions to event handlers
  handlers = {
    mouseover: start,
    mousemove: move,      
    mouseleave: leave
  };
    
  // add event handlers to the node
  for ( eventName in handlers ) {
    if ( handlers.hasOwnProperty( eventName ) ) {
      node.addEventListener( eventName, handlers[ eventName ], false );
    }
  }
    
  return {
    teardown: function () {
      for ( eventName in handlers ) {
        if ( handlers.hasOwnProperty( eventName )) {
          node.removeEventListener( eventName, handlers[ eventName ], false );
        }
      }
    }
  }
};

tooltipDecorator.className = 'ractive-tooltip';
tooltipDecorator.element = 'p';
tooltipDecorator.offsetX = -100;
tooltipDecorator.offsetY = -40;

Ractive.decorators.tooltip = tooltipDecorator;

ractive = new Ractive({
  el: 'container',
  template: '#tpl'
});