(function(e,t){var n=e.document,r;r=function(){var r={},i={},s=!1,o={ENTER:13,ESC:27,SPACE:32},u=[],f,l,h,p,v,m,g,y,b,w,E,S;i={buttons:{holder:'<nav class="alertify-buttons">{{buttons}}</nav>',submit:'<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',ok:'<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',cancel:'<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'},input:'<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',message:'<p class="alertify-message">{{message}}</p>',log:'<article class="alertify-log{{class}}">{{message}}</article>'};S=function(){var e,r,i=!1,s=n.createElement("fakeelement"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(e in o)if(s.style[e]!==t){r=o[e];i=!0;break}return{type:r,supported:i}};f=function(e){return n.getElementById(e)};r={labels:{ok:"OK",cancel:"Cancel"},delay:5e3,buttonReverse:!1,buttonFocus:"ok",transition:t,addListeners:function(e){var t=typeof h!="undefined",r=typeof l!="undefined",i=typeof E!="undefined",s="",u=this,f,c,d,v,m;f=function(t){typeof t.preventDefault!="undefined"&&t.preventDefault();d(t);typeof E!="undefined"&&(s=E.value);typeof e=="function"&&(typeof E!="undefined"?e(!0,s):e(!0));return!1};c=function(t){typeof t.preventDefault!="undefined"&&t.preventDefault();d(t);typeof e=="function"&&e(!1);return!1};d=function(e){u.hide();u.unbind(n.body,"keyup",v);u.unbind(p,"focus",m);i&&u.unbind(w,"submit",f);t&&u.unbind(h,"click",f);r&&u.unbind(l,"click",c)};v=function(e){var t=e.keyCode;t===o.SPACE&&!i&&f(e);t===o.ESC&&r&&c(e)};m=function(e){i?E.focus():!r||u.buttonReverse?h.focus():l.focus()};this.bind(p,"focus",m);t&&this.bind(h,"click",f);r&&this.bind(l,"click",c);this.bind(n.body,"keyup",v);i&&this.bind(w,"submit",f);this.transition.supported||this.setFocus()},bind:function(e,t,n){typeof e.addEventListener=="function"?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},handleErrors:function(){if(typeof e.onerror!="undefined"){var t=this;e.onerror=function(e,n,r){t.error("["+e+" on line "+r+" of "+n+"]",0)};return!0}return!1},appendButtons:function(e,t){return this.buttonReverse?t+e:e+t},build:function(e){var t="",n=e.type,s=e.message,o=e.cssClass||"";t+='<div class="alertify-dialog">';r.buttonFocus==="none"&&(t+='<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>');n==="prompt"&&(t+='<form id="alertify-form">');t+='<article class="alertify-inner">';t+=i.message.replace("{{message}}",s);n==="prompt"&&(t+=i.input);t+=i.buttons.holder;t+="</article>";n==="prompt"&&(t+="</form>");t+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>';t+="</div>";switch(n){case"confirm":t=t.replace("{{buttons}}",this.appendButtons(i.buttons.cancel,i.buttons.ok));t=t.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"prompt":t=t.replace("{{buttons}}",this.appendButtons(i.buttons.cancel,i.buttons.submit));t=t.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"alert":t=t.replace("{{buttons}}",i.buttons.ok);t=t.replace("{{ok}}",this.labels.ok);break;default:}y.className="alertify alertify-"+n+" "+o;g.className="alertify-cover";return t},close:function(e,t){var n=t&&!isNaN(t)?+t:this.delay,r=this,i,s;this.bind(e,"click",function(){i(e)});s=function(e){e.stopPropagation();r.unbind(this,r.transition.type,s);b.removeChild(this);b.hasChildNodes()||(b.className+=" alertify-logs-hidden")};i=function(e){if(typeof e!="undefined"&&e.parentNode===b)if(r.transition.supported){r.bind(e,r.transition.type,s);e.className+=" alertify-log-hide"}else{b.removeChild(e);b.hasChildNodes()||(b.className+=" alertify-logs-hidden")}};if(t===0)return;setTimeout(function(){i(e)},n)},dialog:function(e,t,r,i,o){m=n.activeElement;var f=function(){if(b&&b.scrollTop!==null&&g&&g.scrollTop!==null)return;f()};if(typeof e!="string")throw new Error("message must be a string");if(typeof t!="string")throw new Error("type must be a string");if(typeof r!="undefined"&&typeof r!="function")throw new Error("fn must be a function");if(typeof this.init=="function"){this.init();f()}u.push({type:t,message:e,callback:r,placeholder:i,cssClass:o});s||this.setup();return this},extend:function(e){if(typeof e!="string")throw new Error("extend method must have exactly one paramter");return function(t,n){this.log(t,e,n);return this}},hide:function(){var e,t=this;u.splice(0,1);if(u.length>0)this.setup(!0);else{s=!1;e=function(n){n.stopPropagation();y.className+=" alertify-isHidden";t.unbind(y,t.transition.type,e)};if(this.transition.supported){this.bind(y,this.transition.type,e);y.className="alertify alertify-hide alertify-hidden"}else y.className="alertify alertify-hide alertify-hidden alertify-isHidden";g.className="alertify-cover alertify-cover-hidden";m.focus()}},init:function(){n.createElement("nav");n.createElement("article");n.createElement("section");g=n.createElement("div");g.setAttribute("id","alertify-cover");g.className="alertify-cover alertify-cover-hidden";n.body.appendChild(g);y=n.createElement("section");y.setAttribute("id","alertify");y.className="alertify alertify-hidden";n.body.appendChild(y);b=n.createElement("section");b.setAttribute("id","alertify-logs");b.className="alertify-logs alertify-logs-hidden";n.body.appendChild(b);n.body.setAttribute("tabindex","0");this.transition=S();delete this.init},log:function(e,t,n){var r=function(){if(b&&b.scrollTop!==null)return;r()};if(typeof this.init=="function"){this.init();r()}b.className="alertify-logs";this.notify(e,t,n);return this},notify:function(e,t,r){var i=n.createElement("article");i.className="alertify-log"+(typeof t=="string"&&t!==""?" alertify-log-"+t:"");i.innerHTML=e;b.appendChild(i);setTimeout(function(){i.className=i.className+" alertify-log-show"},50);this.close(i,r)},set:function(e){var t;if(typeof e!="object"&&e instanceof Array)throw new Error("args must be an object");for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},setFocus:function(){if(E){E.focus();E.select()}else v.focus()},setup:function(e){var n=u[0],i=this,o;s=!0;o=function(e){e.stopPropagation();i.setFocus();i.unbind(y,i.transition.type,o)};this.transition.supported&&!e&&this.bind(y,this.transition.type,o);y.innerHTML=this.build(n);p=f("alertify-resetFocus");h=f("alertify-ok")||t;l=f("alertify-cancel")||t;v=r.buttonFocus==="cancel"?l:r.buttonFocus==="none"?f("alertify-noneFocus"):h,E=f("alertify-text")||t;w=f("alertify-form")||t;typeof n.placeholder=="string"&&n.placeholder!==""&&(E.value=n.placeholder);e&&this.setFocus();this.addListeners(n.callback)},unbind:function(e,t,n){typeof e.removeEventListener=="function"?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n)}};return{alert:function(e,t,n){r.dialog(e,"alert",t,"",n);return this},confirm:function(e,t,n){r.dialog(e,"confirm",t,"",n);return this},extend:r.extend,init:r.init,log:function(e,t,n){r.log(e,t,n);return this},prompt:function(e,t,n,i){r.dialog(e,"prompt",t,n,i);return this},success:function(e,t){r.log(e,"success",t);return this},error:function(e,t){r.log(e,"error",t);return this},set:function(e){r.set(e)},labels:r.labels,debug:r.handleErrors}};typeof define=="function"?define([],function(){return new r}):typeof e.alertify=="undefined"&&(e.alertify=new r)})(this);