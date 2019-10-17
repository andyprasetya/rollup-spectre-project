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

ui.toggleClass = function(targetdiv, toggleClassName) {
  targetdiv = typeof targetdiv !== 'undefined' ? targetdiv : 'default';
  toggleClassName = typeof toggleClassName !== 'undefined' ? toggleClassName : 'active';

  let element = document.getElementById(targetdiv);
  element.classList.toggle(toggleClassName);
}

ui.addClass = function(targetdiv, customClassName) {
  targetdiv = typeof targetdiv !== 'undefined' ? targetdiv : 'default';
  customClassName = typeof customClassName !== 'undefined' ? customClassName : 'default';

  let element, arr;
  element = document.getElementById(targetdiv);
  arr = element.className.split(" ");
  if (arr.indexOf(customClassName) == -1) {
    element.className += " " + customClassName;
  }
}

ui.removeClass = function(targetdiv, customClassName) {
  targetdiv = typeof targetdiv !== 'undefined' ? targetdiv : 'default';
  customClassName = typeof customClassName !== 'undefined' ? customClassName : 'default';

  var element = document.getElementById(targetdiv);
  element.classList.remove(customClassName);
}

export default ui;