var templates = {};

templates.topNavigation = function() {
  let dom = `<div class='topnav' id='apptopnav'>
      <a href='./' class='h6 custom-navbar-brand'>Rollup Spectre Project</a>
      <div class='topnav-left'>
        <a href='#' class='active'><i class='fa fa-home'></i>&nbsp;Home</a>
        <a href='#'><i class='fa fa-file'></i>&nbsp;Menu #1</a>
        <a href='#'><i class='fa fa-map'></i>&nbsp;Menu #2</a>
        <a href='#'><i class='fa fa-book'></i>&nbsp;Menu #3</a>
      </div>
      <div class='topnav-right'>
        <a href='#'><i class='fa fa-cog'></i>&nbsp;Menu #4</a>
        <a href='#'><i class='fa fa-lock'></i>&nbsp;Menu #5</a>
      </div>
      <a href='#apptopnav' class='bar-icon'><i class='fa fa-bars'></i></a>
    </div>`;
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