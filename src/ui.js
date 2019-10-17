import templates from './ui-template';

var ui = {};

ui.initUI = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  // Create Top Navigation
  ui.createTopNavigation(anchordiv);
  // Create modal divs (hidden)
  ui.createModalBoxes(anchordiv);

}

ui.createTopNavigation = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  
  let anchorSelector = document.getElementById('app');
  anchorSelector.insertAdjacentHTML('beforebegin', templates.topNavigation());
}

ui.createModalBoxes = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  
  let anchorSelector = document.getElementById('app');
  anchorSelector.insertAdjacentHTML('afterend', templates.modalBoxes());
}

ui.toggleActive = function(targetdiv) {
  targetdiv = typeof targetdiv !== 'undefined' ? targetdiv : 'modalbox';

  let element = document.getElementById(targetdiv);
  element.classList.toggle('active');
}

export default ui;