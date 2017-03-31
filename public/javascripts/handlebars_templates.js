this["JST"] = this["JST"] || {};

this["JST"]["album"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class=\"button edit\" href=\"/albums/edit/\">Edit Album</a><a class=\"button delete\" href=\"/albums/delete/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Delete</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\"/><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><h3>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p><p>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><a class=\"button add\" href=\"#\">Add to cart</a>";
  stack1 = ((helper = (helper = helpers.isAdmin || (depth0 != null ? depth0.isAdmin : depth0)) != null ? helper : alias2),(options={"name":"isAdmin","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.isAdmin) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<label for=\"cart_toggle\">"
    + alias3(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " items</label><input id=\"cart_toggle\" type=\"checkbox\" /><div id=\"items\"><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><p>$"
    + alias3((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><a class=\"button checkout\" href=\"/checkout\">Check Out</a></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"remove\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">Remove</a>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " x "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "<small>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</small></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>0 items</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.quantity : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\" /><div class=\"first\"><h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</p><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p></div><a class=\"button deleteitem\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">Remove</a><div class=\"last\"><p>Price: $"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><p>Quantity: <input type=\"number\" min=\"1\" name=\"quantity\" value=\""
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\"/></p><p>Subtotal: $"
    + alias4((helpers.subtotal || (depth0 && depth0.subtotal) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),(depth0 != null ? depth0.quantity : depth0),{"name":"subtotal","hash":{},"data":data}))
    + "</p></div></li>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button placeorder\" href=\"/orders/new\">Place Order</a><a class=\"button home\" href=\"/\">Back</a>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button home\" href=\"/\">Back</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h1>Confirm Items</h1><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><h2>"
    + alias3(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " items</h2><h2>Total: $"
    + alias3((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</h2>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.quantity : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["edit_album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form action=\"/albums/edit/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" method=\"put\"><h1>Edit Album</h1><fieldset><dl><dt><label>Title</label></dt><dd><input type=\"text\" name=\"title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"/></dd><dt><label>Artist</label></dt><dd><input type=\"text\" name=\"artist\" value=\""
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "\"/></dd><dt><label>Date</label></dt><dd><input type=\"date\" name=\"date\" value=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\"/></dd><dt><label>Cover</label></dt><dd><input type=\"url\" name=\"cover\" value=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\"/></dd><dt><label>Price</label></dt><dd><input type=\"text\" name=\"price\" value=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\"/></dd></dl></fieldset><input type=\"submit\" value=\"Update\" /></form>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<footer> <a class=\"button\" href=\"/albums/new\">Add an album</a></footer>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<h1>Albums</h1><ul></ul>";
  stack1 = ((helper = (helper = helpers.isAdmin || (depth0 != null ? depth0.isAdmin : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"isAdmin","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.isAdmin) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["JST"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/login\" method=\"post\"><h1>Log In</h1><fieldset><dl><dt><label>Username</label></dt><dd><input type=\"text\" name=\"username\" required/></dd><dt><label>Password</label></dt><dd><input type=\"password\" name=\"password\" required/></dd></dl></fieldset><fieldset class=\"actions\"><input type=\"submit\" value=\"Log In\" /><a class=\"button\" href=\"/\">Back</a></fieldset></form>";
},"useData":true});

this["JST"]["new_album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/albums\" method=\"post\"><h1>Add Album</h1><fieldset><dl><dt><label>Title</label></dt><dd><input type=\"text\" name=\"title\" /></dd><dt><label>Artist</label></dt><dd><input type=\"text\" name=\"artist\" /></dd><dt><label>Date</label></dt><dd><input type=\"date\" name=\"date\" /></dd><dt><label>Cover</label></dt><dd><input type=\"url\" name=\"cover\" /></dd><dt><label>Price</label></dt><dd><input type=\"text\" name=\"price\" /></dd></dl></fieldset><fieldset class=\"actions\"><input type=\"submit\" value=\"Create\" /></fieldset></form>";
},"useData":true});

this["JST"]["signup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/signup\" method=\"post\"><h1>Sign Up</h1><fieldset><dl><dt><label>Create username</label></dt><dd><input type=\"text\" name=\"username\" required/></dd><dt><label>Create password</label></dt><dd><input type=\"password\" name=\"password\" required/></dd></dl></fieldset><fieldset class=\"actions\"><input type=\"submit\" value=\"Sign Up\" /><a class=\"button\" href=\"/\">Back</a></fieldset></form>";
},"useData":true});

this["JST"]["user"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label for=\"user_toggle\">"
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</label><input id=\"user_toggle\" type=\"checkbox\" /><div id=\"options\"><ul><li><a class=\"orders\" href=\"/orders/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">View Orders</a></li><li><a class=\"logout\" href=\"/logout\">Log Out</a></li></ul></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<a class=\"login\" href=\"/login\">Login</a> |<a class=\"signup\" href=\"/signup\">Sign Up</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.username : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["view_orders"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"first\"><header><div class=\"order_overview\"><p>Order Placed</p><small>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</small></div><div class=\"order_overview\"><p>No. Items</p><small>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</small></div><div class=\"order_overview\"><p>Total</p><small>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</small></div></header><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></li>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><div class=\"img\"><img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\"/></div><div class=\"order_details\"><p>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p><p>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</p><small>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</small><small>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</small><small>Qty: "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</small></div></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Order History</h1><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.orders : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a class=\"button\" href=\"/\">Home</a>";
},"useData":true});