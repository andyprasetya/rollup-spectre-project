var templates = {};

templates.topNavigation = function() {
  let dom = ``;
  return dom;
}

templates.modalBoxes = function() {
  let dom = `<div class='modal' id='modalbox'>
      <a href='#close' class='modal-overlay' aria-label='Close'></a>
      <div class='modal-container'>
        <div class='modal-header'>
          <a href='#close' class='btn btn-clear float-right' aria-label='Close'></a>
          <div id='modalboxtitle' class='modal-title h5'></div>
        </div>
        <div class='modal-body'>
          <div id='modalboxcontent' class='content'></div>
        </div>
        <div id='modalboxfooter' class='modal-footer'></div>
      </div>
    </div>
    <div class='modal' id='modalform'>
      <a href='#close' class='modal-overlay' aria-label='Close'></a>
      <form id='dynamicmodalform' name='dynamicmodalform'>
      <div class='modal-container'>
        <div class='modal-header'>
          <a href='#close' class='btn btn-clear float-right' aria-label='Close'></a>
          <div id='modalformtitle' class='modal-title h5'></div>
        </div>
        <div class='modal-body'>
          <div id='modalformcontent' class='content'></div>
        </div>
        <div id='modalformfooter' class='modal-footer'></div>
      </div>
      </form>
    </div>`;
  return dom;
}

export default templates;