"use strict";define("pedal-map/ajax/service",["exports","ember","ember-ajax/services/ajax","pedal-map/config/environment"],function(e,t,a,n){e.default=a.default.extend({host:n.default.apiHost,auth:t.default.inject.service(),headers:t.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token");return t&&(e.Authorization="Token token="+t),e}})})}),define("pedal-map/app",["exports","ember","pedal-map/resolver","ember-load-initializers","pedal-map/config/environment"],function(e,t,a,n,l){var s=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,s=t.default.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:a.default}),(0,n.default)(s,l.default.modulePrefix),e.default=s}),define("pedal-map/application/adapter",["exports","pedal-map/config/environment","active-model-adapter","ember"],function(e,t,a,n){e.default=a.default.extend({host:t.default.apiHost,auth:n.default.inject.service(),headers:n.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token");return t&&(e.Authorization="Token token="+t),e}})})}),define("pedal-map/application/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signOut:function(){var e=this;this.get("auth").signOut().then(function(){return e.get("store").unloadAll()}).then(function(){return e.transitionTo("sign-in")}).then(function(){e.get("flashMessages").warning("You have been signed out.")}).catch(function(){e.get("flashMessages").danger("There was a problem. Are you sure you're signed-in?")})},error:function(e){var t=e.errors&&e.errors.some(function(e){return"401"===e.status});return t?(this.get("flashMessages").danger("You must be authenticated to access this page."),this.transitionTo("/sign-in")):this.get("flashMessages").danger("There was a problem. Please try again."),!1}}})}),define("pedal-map/application/serializer",["exports","active-model-adapter"],function(e,t){e.default=t.ActiveModelSerializer.extend({})}),define("pedal-map/application/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"uJ2vxABC",block:'{"statements":[["append",["helper",["my-application"],null,[["signOut"],["signOut"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/application/template.hbs"}})}),define("pedal-map/auth/service",["exports","ember","ember-local-storage"],function(e,t,a){e.default=t.default.Service.extend({ajax:t.default.inject.service(),credentials:(0,a.storageFor)("auth"),isAuthenticated:t.default.computed.bool("credentials.token"),signUp:function(e){return this.get("ajax").post("/sign-up",{data:{credentials:{email:e.email,password:e.password,password_confirmation:e.passwordConfirmation}}})},signIn:function(e){var t=this;return this.get("ajax").post("/sign-in",{data:{credentials:{email:e.email,password:e.password}}}).then(function(e){t.get("credentials").set("id",e.user.id),t.get("credentials").set("email",e.user.email),t.get("credentials").set("token",e.user.token)})},changePassword:function(e){return this.get("ajax").patch("/change-password/"+this.get("credentials.id"),{data:{passwords:{old:e.previous,new:e.next}}})},signOut:function(){var e=this;return this.get("ajax").del("/sign-out/"+this.get("credentials.id")).finally(function(){return e.get("credentials").reset()})}})}),define("pedal-map/auth/storage",["exports","ember-local-storage/local/object"],function(e,t){e.default=t.default.extend({})}),define("pedal-map/board/edit/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("pedal-map/board/edit/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"JQC9Yzk6",block:'{"statements":[["append",["helper",["board-details/edit"],null,[["board"],[["get",["board"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/board/edit/template.hbs"}})}),define("pedal-map/board/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({user_id:t.default.belongsTo("user"),name:t.default.attr("string"),length:t.default.attr("number"),width:t.default.attr("number")})}),define("pedal-map/board/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(e){return this.get("store").findRecord("board",e.board_id)}})}),define("pedal-map/board/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"heTrn97l",block:'{"statements":[["append",["helper",["board-details"],null,[["board"],[["get",["model"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/board/template.hbs"}})}),define("pedal-map/boards/new/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").createRecord("board",{})},actions:{save:function(e){e.save(),this.transitionTo("boards")},cancel:function(e){console.log("in boards/new route cancel"),e.rollbackAttributes(),this.transitionTo("boards")}}})}),define("pedal-map/boards/new/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"tR52gfrB",block:'{"statements":[["append",["helper",["board-details/edit"],null,[["board","save","cancel"],[["get",["model"]],"save","cancel"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/boards/new/template.hbs"}})}),define("pedal-map/boards/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").findAll("board")},actions:{editBoard:function(){console.log("inside boards/route editBoard()"),this.transitionTo("board/edit")},deleteBoard:function(e){console.log("inside boards/route.js"),e.destroyRecord()}}})}),define("pedal-map/boards/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"FMYVsdr3",block:'{"statements":[["open-element","h4",[]],["flush-element"],["text","Your Saved Boards:"],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["model"]]],null,1],["text","\\n"],["block",["link-to"],["boards/new"],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","button",[]],["static-attr","class","btn"],["flush-element"],["text","Add a New Board"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["append",["helper",["board-list/card"],null,[["board","deleteBoard","cancel","editBoard"],[["get",["board"]],"deleteBoard","cancelCreateBoard","editBoard"]]],false],["text","\\n"]],"locals":["board"]}],"hasPartials":false}',meta:{moduleName:"pedal-map/boards/template.hbs"}})}),define("pedal-map/change-password/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{changePassword:function(e){var t=this;this.get("auth").changePassword(e).then(function(){return t.get("auth").signOut()}).then(function(){return t.transitionTo("sign-in")}).then(function(){t.get("flashMessages").success("Successfully changed your password!")}).then(function(){t.get("flashMessages").warning("You have been signed out.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("pedal-map/change-password/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"kVjCHorJ",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Change Password"],["close-element"],["text","\\n\\n"],["append",["helper",["change-password-form"],null,[["submit"],["changePassword"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/change-password/template.hbs"}})}),define("pedal-map/components/board-details/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({})}),define("pedal-map/components/board-details/edit/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({Board:{name:null,length:null,width:null,pedals:null},actions:{save:function(){this.sendAction("save",this.get("board"))},cancel:function(){this.sendAction("cancel",this.get("board"))}}})}),define("pedal-map/components/board-details/edit/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"4DNHACmm",block:'{"statements":[["open-element","form",[]],["modifier",["action"],[["get",[null]],"save"],[["on"],["submit"]]],["flush-element"],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Board Title",["get",["board","name"]]]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Board Length",["get",["board","length"]]]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Board Width",["get",["board","width"]]]]],false],["text","\\n  "],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-xs"],["flush-element"],["text","Save"],["close-element"],["text","\\n  "],["open-element","button",[]],["static-attr","class","btn btn-xs btn-danger"],["modifier",["action"],[["get",[null]],"cancel"]],["flush-element"],["text","Cancel"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/board-details/edit/template.hbs"}})}),define("pedal-map/components/board-details/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"VLVslSbR",block:'{"statements":[["open-element","h3",[]],["static-attr","class","board-header"],["flush-element"],["append",["unknown",["board","name"]],false],["close-element"],["text","\\n\\nLength: "],["append",["unknown",["board","length"]],false],["text"," "],["open-element","br",[]],["flush-element"],["close-element"],["text","\\nWidth: "],["append",["unknown",["board","width"]],false],["text"," "],["open-element","br",[]],["flush-element"],["close-element"],["text","\\nPedals: "],["append",["unknown",["board","pedals"]],false],["text","\\n\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/board-details/template.hbs"}})}),define("pedal-map/components/board-list/card/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{editBoard:function(){console.log("inside board-list/card/component editBoard()"),this.sendAction("editBoard",this.get("board"))},deleteBoard:function(){console.log("inside board-list/card"),this.sendAction("deleteBoard",this.get("board"))}}})}),define("pedal-map/components/board-list/card/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"oeG1e6ec",block:'{"statements":[["open-element","h4",[]],["flush-element"],["text","\\n"],["block",["link-to"],["board",["get",["board"]]],null,0],["text","  "],["open-element","button",[]],["static-attr","class","btn btn-primary btn-xs"],["modifier",["action"],[["get",[null]],"editBoard"]],["flush-element"],["text","Edit"],["close-element"],["text","\\n  "],["open-element","button",[]],["static-attr","class","btn btn-default btn-xs btn-danger"],["modifier",["action"],[["get",[null]],"deleteBoard"]],["flush-element"],["text","Delete"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["unknown",["board","name"]],false],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"pedal-map/components/board-list/card/template.hbs"}})}),define("pedal-map/components/board-list/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({model:function(){return this.get("store").findAll("board")},actions:{deleteBoard:function(){console.log("inside board-list"),this.sendAction("deleteBoard",this.get("board"))}}})}),define("pedal-map/components/board-list/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Z8jlYSxM",block:'{"statements":[["append",["helper",["board-list/card"],null,[["board","deleteBoard"],[["get",["model"]],"deleteBoard"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/board-list/template.hbs"}})}),define("pedal-map/components/change-password-form/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],passwords:{},actions:{submit:function(){this.sendAction("submit",this.get("passwords"))},reset:function(){this.set("passwords",{})}}})}),define("pedal-map/components/change-password-form/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8A9BCWD6",block:'{"statements":[["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","previous"],["flush-element"],["text","Old Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","previous","Old password",["get",["passwords","previous"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","next"],["flush-element"],["text","New Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","next","New password",["get",["passwords","next"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Change Password\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/change-password-form/template.hbs"}})}),define("pedal-map/components/email-input/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("pedal-map/components/email-input/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"meXsTXOl",block:'{"statements":[["open-element","label",[]],["static-attr","for","email"],["flush-element"],["text","Email"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["email","email","Email",["get",["email"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/email-input/template.hbs"}})}),define("pedal-map/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("pedal-map/components/hamburger-menu/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"button",classNames:["navbar-toggle","collapsed"],attributeBindings:["toggle:data-toggle","target:data-target","expanded:aria-expanded"],toggle:"collapse",target:"#navigation",expanded:!1})}),define("pedal-map/components/hamburger-menu/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"CGqgBk1T",block:'{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","sr-only"],["flush-element"],["text","Toggle navigation"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/hamburger-menu/template.hbs"}})}),define("pedal-map/components/my-application/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({auth:t.default.inject.service(),user:t.default.computed.alias("auth.credentials.email"),isAuthenticated:t.default.computed.alias("auth.isAuthenticated"),actions:{signOut:function(){this.sendAction("signOut")}}})}),define("pedal-map/components/my-application/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"w8ggTKd5",block:'{"statements":[["text","\\n"],["open-element","nav",[]],["static-attr","class","navbar navbar-default"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","container-fluid"],["flush-element"],["text","\\n    "],["append",["unknown",["navbar-header"]],false],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","collapse navbar-collapse"],["static-attr","id","navigation"],["flush-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,9],["text","      "],["close-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav navbar-right"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,7,5],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["text","\\n"],["open-element","h1",[]],["static-attr","class","pedalmap-header"],["flush-element"],["text","~PedalMap~"],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["flashMessages","queue"]]],null,2],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,1],["text","\\n"],["open-element","div",[]],["static-attr","class","full"],["flush-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","col-md-8 col-md-offset-2"],["flush-element"],["text","\\n    "],["append",["unknown",["outlet"]],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","button",[]],["static-attr","class","btn"],["flush-element"],["text","Show Boards"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["link-to"],["boards"],null,0]],"locals":[]},{"statements":[["text","  "],["append",["helper",["flash-message"],null,[["flash"],[["get",["flash"]]]]],false],["text","\\n"]],"locals":["flash"]},{"statements":[["text","Sign In"]],"locals":[]},{"statements":[["text","Sign Up"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-up"],null,4],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-in"],null,3],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Change Password"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["change-password"],null,6],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["open-element","a",[]],["static-attr","href","#"],["modifier",["action"],[["get",[null]],"signOut"]],["flush-element"],["text","Sign Out"],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Users"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["users"],null,8],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"pedal-map/components/my-application/template.hbs"}})}),define("pedal-map/components/navbar-header/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["navbar-header"]})}),define("pedal-map/components/navbar-header/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"DfTxbnMV",block:'{"statements":[["append",["unknown",["hamburger-menu"]],false],["text","\\n"],["block",["link-to"],["application"],[["class"],["navbar-brand"]],0],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Home"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"pedal-map/components/navbar-header/template.hbs"}})}),define("pedal-map/components/password-confirmation-input/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("pedal-map/components/password-confirmation-input/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"UkFzGkGz",block:'{"statements":[["open-element","label",[]],["static-attr","for","password-confirmation"],["flush-element"],["text","Password Confirmation"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password-confirmation","Password Confirmation",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/password-confirmation-input/template.hbs"}})}),define("pedal-map/components/password-input/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("pedal-map/components/password-input/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"kGX5geJn",block:'{"statements":[["open-element","label",[]],["static-attr","for","kind"],["flush-element"],["text","Password"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password","Password",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/password-input/template.hbs"}})}),define("pedal-map/components/sign-in-form/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("pedal-map/components/sign-in-form/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"MSYmwsSe",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign In\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/sign-in-form/template.hbs"}})}),define("pedal-map/components/sign-up-form/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],credentials:{},actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("pedal-map/components/sign-up-form/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"GXTLrF2R",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n"],["append",["helper",["password-confirmation-input"],null,[["password"],[["get",["credentials","passwordConfirmation"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign Up\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/components/sign-up-form/template.hbs"}})}),define("pedal-map/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("pedal-map/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("pedal-map/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("pedal-map/helpers/app-version",["exports","ember","pedal-map/config/environment"],function(e,t,a){function n(){return l}e.appVersion=n;var l=a.default.APP.version;e.default=t.default.Helper.helper(n)}),define("pedal-map/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("pedal-map/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("pedal-map/initializers/active-model-adapter",["exports","active-model-adapter","active-model-adapter/active-model-serializer"],function(e,t,a){e.default={name:"active-model-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("adapter:-active-model",t.default),e.register("serializer:-active-model",a.default)}}}),define("pedal-map/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","pedal-map/config/environment"],function(e,t,a){var n=a.default.APP,l=n.name,s=n.version;e.default={name:"App Version",initialize:(0,t.default)(l,s)}}),define("pedal-map/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("pedal-map/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("pedal-map/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("pedal-map/initializers/export-application-global",["exports","ember","pedal-map/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var l,s=a.default.exportApplicationGlobal;l="string"==typeof s?s:t.default.String.classify(a.default.modulePrefix),n[l]||(n[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[l]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("pedal-map/initializers/flash-messages",["exports","ember","pedal-map/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0],t=a.default||{},n=t.flashMessageDefaults,r=n||[],d=r.injectionFactories,m=s(i,n),p=!(d&&d.length);e.register("config:flash-messages",m,{instantiate:!1}),e.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),l(o,p,{id:"ember-cli-flash.deprecate-injection-factories",until:"2.0.0"}),m.injectionFactories.forEach(function(t){e.inject(t,"flashMessages","service:flash-messages")})}e.initialize=n;var l=t.default.deprecate,s=t.default.assign||t.default.merge,o="[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.",i={timeout:3e3,extendedTimeout:0,priority:100,sticky:!1,showProgress:!1,type:"info",types:["success","info","warning","danger","alert","secondary"],injectionFactories:["route","controller","view","component"],preventDuplicates:!1};e.default={name:"flash-messages",initialize:n}}),define("pedal-map/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("pedal-map/initializers/local-storage-adapter",["exports","ember-local-storage/initializers/local-storage-adapter"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("pedal-map/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("pedal-map/initializers/text-field",["exports","ember"],function(e,t){function a(){t.default.TextField.reopen({classNames:["form-control"]})}e.initialize=a,e.default={name:"text-field",initialize:a}}),define("pedal-map/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("pedal-map/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("pedal-map/pedal/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({name:t.default.attr("string"),length:t.default.attr("number"),width:t.default.attr("number"),link:t.default.attr("string")})}),define("pedal-map/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("pedal-map/router",["exports","ember","pedal-map/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType});n.map(function(){this.route("sign-up"),this.route("sign-in"),this.route("change-password"),this.route("users"),this.route("boards"),this.route("boards/new"),this.route("board",{path:"boards/:board_id"},function(){this.route("edit")}),this.route("board/edit",{path:"boards/:board_id/edit"})}),e.default=n}),define("pedal-map/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("pedal-map/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("pedal-map/sign-in/route",["exports","ember","rsvp"],function(e,t,a){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),model:function(){return a.default.Promise.resolve({})},actions:{signIn:function(e){var t=this;return this.get("auth").signIn(e).then(function(){return t.transitionTo("application")}).then(function(){return t.get("flashMessages").success("Thanks for signing in!")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("pedal-map/sign-in/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"DQv2eoNj",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign In"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-in-form"],null,[["submit","reset","credentials"],["signIn","reset",["get",["model"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
meta:{moduleName:"pedal-map/sign-in/template.hbs"}})}),define("pedal-map/sign-up/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signUp:function(e){var t=this;this.get("auth").signUp(e).then(function(){return t.get("auth").signIn(e)}).then(function(){return t.transitionTo("application")}).then(function(){t.get("flashMessages").success("Successfully signed-up! You have also been signed-in.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("pedal-map/sign-up/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"md8KoRQl",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign Up"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-up-form"],null,[["submit"],["signUp"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"pedal-map/sign-up/template.hbs"}})}),define("pedal-map/user/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({email:t.default.attr("string")})}),define("pedal-map/users/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").findAll("user")}})}),define("pedal-map/users/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"1q9pRTS1",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Users"],["close-element"],["text","\\n\\n"],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["model"]]],null,0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","li",[]],["flush-element"],["append",["unknown",["user","email"]],false],["close-element"],["text","\\n"]],"locals":["user"]}],"hasPartials":false}',meta:{moduleName:"pedal-map/users/template.hbs"}})}),define("pedal-map/config/environment",["ember"],function(e){var t="pedal-map";try{var a=t+"/config/environment",n=document.querySelector('meta[name="'+a+'"]').getAttribute("content"),l=JSON.parse(unescape(n)),s={default:l};return Object.defineProperty(s,"__esModule",{value:!0}),s}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("pedal-map/app").default.create({name:"pedal-map",version:"0.0.0+010bcbd5"});