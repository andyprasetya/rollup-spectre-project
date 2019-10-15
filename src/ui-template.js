var templates = {};

templates.topNavigation = function() {
  let dom = `<div class='off-canvas'>
  <a class='off-canvas-toggle btn btn-primary btn-action' href='#sidebar-id'>
    <i class='icon icon-menu'></i>
  </a>

  <div id='sidebar-id' class='off-canvas-sidebar'>
    
  </div>

  <a class='off-canvas-overlay' href='#close'></a>

  <div class='off-canvas-content bg-dark'>
    <header class='navbar'>
      <section class='navbar-section'>
        <a href='#' class='navbar-brand mr-2'>Spectre.css</a>
        <a href='#' class='btn btn-link'>Docs</a>
        <a href='#' class='btn btn-link'>GitHub</a>
      </section>
      <section class='navbar-section'>
        <div class='input-group input-inline'>
          <input class='form-input' type='text' placeholder='search'>
          <button class='btn btn-primary input-group-btn'>Search</button>
        </div>
      </section>
    </header>
  </div>
</div>`;
  return dom;
}

templates.modalBoxes = function() {
  let dom = ``;
  return dom;
}

export default templates;
