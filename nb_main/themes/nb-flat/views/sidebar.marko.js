function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"container\"> <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse top-nav waves-effect waves-light circle hide-on-large-only mobile-menu-toggle\"> <i class=\"zmdi zmdi-menu\"></i> </a> </div> <ul id=\"nav-mobile\" class=\"side-nav fixed nb-sidemenu\"> <li> <a href=\"/\" target=\"_blank\" class=\"waves-effect waves-teal\"> <i class=\"zmdi zmdi-check-all\"></i> View site </a> </li> <li class=\"active\"> <a href=\"about.html\" class=\"waves-effect waves-teal\"> <i class=\"zmdi zmdi-home\"></i> Dashboard </a> </li> <li class=\"has-sub-menu\"> <ul class=\"collapsible collapsible-accordion\"> <li> <a class=\"collapsible-header  waves-effect waves-teal\"> <i class=\"zmdi zmdi zmdi-collection-folder-image\"></i> Media </a> <div class=\"collapsible-body\"> <ul> <li> <a href=\"#\">Upload</a> </li> <li> <a href=\"#\">Settings</a> </li> </ul> </div> </li> <li> <a class=\"collapsible-header  waves-effect waves-teal\"> <i class=\"zmdi zmdi-settings\"></i> Settings </a> <div class=\"collapsible-body\"> <ul> <li> <a href=\"#\">Site</a> </li> <li> <a href=\"#\">Themes</a> </li> </ul> </div> </li> </ul> </li> <li class=\"bold\"> <a href=\"/logout\" class=\"waves-effect waves-teal\"> <i class=\"zmdi zmdi-power\"></i> Logout </a> </li> </ul> <nav class=\"top-nav\"> <div class=\"nav-wrapper\"> <a href=\"#\" class=\"brand-logo\">Nodeblog</a> <ul class=\"right hide-on-med-and-down\"> <li><a href=\"sass.html\">Sass</a></li> <li><a href=\"badges.html\">Components</a></li> <li><a href=\"collapsible.html\">JavaScript</a></li> </ul> </div> </nav>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
