var __JSON;__JSON||(__JSON={});
(function(){function a(a){return 10>a?"0"+a:a}function b(a){h.lastIndex=0;return h.test(a)?'"'+a.replace(h,function(a){var g=l[a];return"string"===typeof g?g:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,l){var g,d,f,e,h=n,p,r=l[a];r&&"object"===typeof r&&"function"===typeof r.to__JSON&&(r=r.to__JSON(a));"function"===typeof k&&(r=k.call(l,a,r));switch(typeof r){case "string":return b(r);case "number":return isFinite(r)?String(r):"null";case "boolean":case "null":return String(r);
case "object":if(!r)return"null";n+=q;p=[];if("[object Array]"===Object.prototype.toString.apply(r)){e=r.length;for(g=0;g<e;g+=1)p[g]=c(g,r)||"null";f=0===p.length?"[]":n?"[\n"+n+p.join(",\n"+n)+"\n"+h+"]":"["+p.join(",")+"]";n=h;return f}if(k&&"object"===typeof k)for(e=k.length,g=0;g<e;g+=1)"string"===typeof k[g]&&(d=k[g],(f=c(d,r))&&p.push(b(d)+(n?": ":":")+f));else for(d in r)Object.prototype.hasOwnProperty.call(r,d)&&(f=c(d,r))&&p.push(b(d)+(n?": ":":")+f);f=0===p.length?"{}":n?"{\n"+n+p.join(",\n"+
n)+"\n"+h+"}":"{"+p.join(",")+"}";n=h;return f}}"function"!==typeof Date.prototype.to__JSON&&(Date.prototype.to__JSON=function(b){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.to__JSON=Number.prototype.to__JSON=Boolean.prototype.to__JSON=function(a){return this.valueOf()});var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n,q,l={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;"function"!==typeof __JSON.stringify&&(__JSON.stringify=function(a,b,g){var d;q=n="";if("number"===typeof g)for(d=0;d<g;d+=1)q+=" ";else"string"===typeof g&&(q=g);if((k=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("__JSON.stringify");return c("",
{"":a})});"function"!==typeof __JSON.parse&&(__JSON.parse=function(a,b){function g(a,d){var l,c,k=a[d];if(k&&"object"===typeof k)for(l in k)Object.prototype.hasOwnProperty.call(k,l)&&(c=g(k,l),void 0!==c?k[l]=c:delete k[l]);return b.call(a,d,k)}var d;a=String(a);e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"===typeof b?g({"":d},""):d;throw new SyntaxError("__JSON.parse");})})();var BoxeverStorage=BoxeverStorage||{};
(function(){function a(){var a="{}";if("userDataBehavior"==s){f.load("bStorage");try{a=f.getAttribute("bStorage")}catch(b){}try{u=f.getAttribute("bStorage_update")}catch(g){}d.bStorage=a}h();l();k()}function b(){var w;clearTimeout(r);r=setTimeout(function(){if("localStorage"==s||"globalStorage"==s)w=d.bStorage_update;else if("userDataBehavior"==s){f.load("bStorage");try{w=f.getAttribute("bStorage_update")}catch(b){}}if(w&&w!=u){u=w;var l=t.parse(t.stringify(g.__bstorage_meta.CRC32)),k;a();k=t.parse(t.stringify(g.__bstorage_meta.CRC32));
var m,e=[],h=[];for(m in l)l.hasOwnProperty(m)&&(k[m]?l[m]!=k[m]&&"2."==String(l[m]).substr(0,2)&&e.push(m):h.push(m));for(m in k)k.hasOwnProperty(m)&&(l[m]||e.push(m));c(e,"updated");c(h,"deleted")}},25)}function c(a,b){a=[].concat(a||[]);if("flushed"==b){a=[];for(var l in p)p.hasOwnProperty(l)&&a.push(l);b="deleted"}l=0;for(var g=a.length;l<g;l++){if(p[a[l]])for(var d=0,k=p[a[l]].length;d<k;d++)p[a[l]][d](a[l],b);if(p["*"])for(d=0,k=p["*"].length;d<k;d++)p["*"][d](a[l],b)}}function e(){var a=(+new Date).toString();
"localStorage"==s||"globalStorage"==s?d.bStorage_update=a:"userDataBehavior"==s&&(f.setAttribute("bStorage_update",a),f.save("bStorage"));b()}function h(){if(d.bStorage)try{g=t.parse(String(d.bStorage))}catch(a){d.bStorage="{}"}else d.bStorage="{}";x=d.bStorage?String(d.bStorage).length:0;g.__bstorage_meta||(g.__bstorage_meta={});g.__bstorage_meta.CRC32||(g.__bstorage_meta.CRC32={})}function n(){if(g.__bstorage_meta.PubSub){for(var a=+new Date-2E3,b=0,l=g.__bstorage_meta.PubSub.length;b<l;b++)if(g.__bstorage_meta.PubSub[b][0]<=
a){g.__bstorage_meta.PubSub.splice(b,g.__bstorage_meta.PubSub.length-b);break}g.__bstorage_meta.PubSub.length||delete g.__bstorage_meta.PubSub}try{d.bStorage=t.stringify(g),f&&(f.setAttribute("bStorage",d.bStorage),f.save("bStorage")),x=d.bStorage?String(d.bStorage).length:0}catch(k){}}function q(a){if(!a||"string"!=typeof a&&"number"!=typeof a)throw new TypeError("Key name must be string or numeric");if("__bstorage_meta"==a)throw new TypeError("Reserved key name");return!0}function l(){var a,b,d,
k,m=Infinity,f=!1,h=[];clearTimeout(A);if(g.__bstorage_meta&&"object"==typeof g.__bstorage_meta.TTL){a=+new Date;d=g.__bstorage_meta.TTL;k=g.__bstorage_meta.CRC32;for(b in d)d.hasOwnProperty(b)&&(d[b]<=a?(delete d[b],delete k[b],delete g[b],f=!0,h.push(b)):d[b]<m&&(m=d[b]));Infinity!=m&&(A=setTimeout(l,m-a));f&&(n(),e(),c(h,"deleted"))}}function k(){var a;if(g.__bstorage_meta.PubSub){var b,l=y;for(a=g.__bstorage_meta.PubSub.length-1;0<=a;a--)if(b=g.__bstorage_meta.PubSub[a],b[0]>y){var l=b[0],d=b[1];
b=b[2];if(v[d])for(var k=0,c=v[d].length;k<c;k++)v[d][k](d,t.parse(t.stringify(b)))}y=l}}var m=window.jQuery||window.$||(window.$={}),t={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||window.__JSON&&window.__JSON.parse||__JSON&&__JSON.parse||String.prototype.evalJSON&&function(a){return String(a).evalJSON()}||m.parseJSON||m.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||window.__JSON&&window.__JSON.stringify||__JSON&&__JSON.stringify||m.toJSON};
if(!t.parse||!t.stringify)throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var g={__bstorage_meta:{CRC32:{}}},d={bStorage:"{}"},f=null,x=0,s=!1,p={},r=!1,u=0,v={},y=+new Date,A,z={isXML:function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1},encode:function(a){if(!this.isXML(a))return!1;try{return(new XMLSerializer).serializeToString(a)}catch(b){try{return a.xml}catch(d){}}return!1},decode:function(a){var b=
"DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(a){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a);return b};if(!b)return!1;a=b.call("DOMParser"in window&&new DOMParser||window,a,"text/xml");return this.isXML(a)?a:!1}};BoxeverStorage={version:"0.4.3",set:function(a,b,d){q(a);d=d||{};if("undefined"==typeof b)return this.deleteKey(a),b;if(z.isXML(b))b={_is_xml:!0,xml:z.encode(b)};else{if("function"==typeof b)return;b&&"object"==typeof b&&
(b=t.parse(t.stringify(b)))}g[a]=b;for(var l=g.__bstorage_meta.CRC32,k=t.stringify(b),m=k.length,f=2538058380^m,e=0,h;4<=m;)h=k.charCodeAt(e)&255|(k.charCodeAt(++e)&255)<<8|(k.charCodeAt(++e)&255)<<16|(k.charCodeAt(++e)&255)<<24,h=1540483477*(h&65535)+((1540483477*(h>>>16)&65535)<<16),h^=h>>>24,h=1540483477*(h&65535)+((1540483477*(h>>>16)&65535)<<16),f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16)^h,m-=4,++e;switch(m){case 3:f^=(k.charCodeAt(e+2)&255)<<16;case 2:f^=(k.charCodeAt(e+1)&255)<<
8;case 1:f^=k.charCodeAt(e)&255,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16)}f^=f>>>13;f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16);l[a]="2."+((f^f>>>15)>>>0);this.setTTL(a,d.TTL||0);c(a,"updated");return b},get:function(a,b){q(a);return a in g?g[a]&&"object"==typeof g[a]&&g[a]._is_xml?z.decode(g[a].xml):g[a]:"undefined"==typeof b?null:b},deleteKey:function(a){q(a);return a in g?(delete g[a],"object"==typeof g.__bstorage_meta.TTL&&a in g.__bstorage_meta.TTL&&delete g.__bstorage_meta.TTL[a],
delete g.__bstorage_meta.CRC32[a],n(),e(),c(a,"deleted"),!0):!1},setTTL:function(a,b){var d=+new Date;q(a);b=Number(b)||0;return a in g?(g.__bstorage_meta.TTL||(g.__bstorage_meta.TTL={}),0<b?g.__bstorage_meta.TTL[a]=d+b:delete g.__bstorage_meta.TTL[a],n(),l(),e(),!0):!1},getTTL:function(a){var b=+new Date;q(a);return a in g&&g.__bstorage_meta.TTL&&g.__bstorage_meta.TTL[a]?(a=g.__bstorage_meta.TTL[a]-b)||0:0},flush:function(){g={__bstorage_meta:{CRC32:{}}};n();e();c(null,"flushed");return!0},storageObj:function(){function a(){}
a.prototype=g;return new a},index:function(){var a=[],b;for(b in g)g.hasOwnProperty(b)&&"__bstorage_meta"!=b&&a.push(b);return a},storageSize:function(){return x},currentBackend:function(){return s},storageAvailable:function(){return!!s},listenKeyChange:function(a,b){q(a);p[a]||(p[a]=[]);p[a].push(b)},stopListening:function(a,b){q(a);if(p[a])if(b)for(var d=p[a].length-1;0<=d;d--)p[a][d]==b&&p[a].splice(d,1);else delete p[a]},subscribe:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");
v[a]||(v[a]=[]);v[a].push(b)},publish:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");g.__bstorage_meta||(g.__bstorage_meta={});g.__bstorage_meta.PubSub||(g.__bstorage_meta.PubSub=[]);g.__bstorage_meta.PubSub.unshift([+new Date,a,b]);n();e()},reInit:function(){a()}};(function(){var a=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),a=!0,window.localStorage.removeItem("_tmptest")}catch(g){}if(a)try{window.localStorage&&(d=window.localStorage,
s="localStorage",u=d.bStorage_update)}catch(m){}else if("globalStorage"in window)try{window.globalStorage&&(d="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],s="globalStorage",u=d.bStorage_update)}catch(c){}else if(f=document.createElement("link"),f.addBehavior){f.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(f);try{f.load("bStorage")}catch(e){f.setAttribute("bStorage",
"{}"),f.save("bStorage"),f.load("bStorage")}a="{}";try{a=f.getAttribute("bStorage")}catch(t){}try{u=f.getAttribute("bStorage_update")}catch(n){}d.bStorage=a;s="userDataBehavior"}else{f=null;return}h();l();"localStorage"==s||"globalStorage"==s?"addEventListener"in window?window.addEventListener("storage",b,!1):document.attachEvent("onstorage",b):"userDataBehavior"==s&&setInterval(b,1E3);k();"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&b()},!1)})()})();
var BoxeverXML={isXML:function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1},string2xml:function(a){if(window.ActiveXObject){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a)}else b=(new DOMParser).parseFromString(a,"text/xml");return b},xml2string:function(a){var b=a.documentElement;return void 0==b.xml?(new XMLSerializer).serializeToString(a):b.xml},unescape:function(a){a=a.replace(/&lt;/gi,"\x3c");a=a.replace(/&gt;/gi,"\x3e");a=a.replace(/&quot;/gi,
'"');return a=a.replace(/&amp;/gi,"\x26")}},BoxeverJSONP={exec:function(a,b){var c="jsonp"+(100*Math.random()).toString(),c=c.replace(/\./g,"");a=a.replace("callback\x3d?","callback\x3d"+c);a=a.replace("cb\x3d?","cb\x3d"+c);window[c]=function(a){try{var h=document.getElementById(c);h.parentNode.removeChild(h)}catch(n){}"string"===typeof a&&(a=BoxeverXML.unescape(a),window.DOMParser?a=(new DOMParser).parseFromString(a,"text/xml"):(h=new ActiveXObject("Microsoft.XMLDOM"),h.async=!1,h.loadXML(a),a=h));
b(a);try{window[c]=null,delete window[c]}catch(q){}};document.getElementsByTagName("head")[0].appendChild(function(){var b=document.createElement("script");b.type="text/javascript";b.charset="UTF-8";b.src=a;b.async=!0;b.id=c;return b}())}},_boxever_settings=_boxever_settings||{},BoxeverJERS=BoxeverJERS||{errors:[]};
(function(){function a(a){var e=c+"/boxever-log-js-error.js?client_key\x3d"+b+"\x26message\x3d"+encodeURIComponent(a);document.getElementsByTagName("head")[0].appendChild(function(){var a=document.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=e;return a}())}var b,c,e=BoxeverJERS.errors;BoxeverJERS.errors={push:function(){for(var b=0;b<arguments.length;b++)try{if("function"===typeof arguments[b])arguments[b]();else{var c=arguments[b],e={};"string"===typeof c?e.message=c:
(e.name="undefined"!==typeof c.name&&null!==c.name?c.name.toString():"",e.message="undefined"!==typeof c.message&&null!==c.message?c.message:"",e.stack="undefined"!==typeof c.stack&&null!==c.stack?c.stack:"");e.parent_url=document.location.href;var l=__JSON.stringify(e);a(l)}}catch(k){l={message:"Unknown error occured sending error report"},l=__JSON.stringify(l),a(l)}}};"[object Array]"===Object.prototype.toString.call(e)&&(BoxeverJERS.errors.push.apply(BoxeverJERS.errors,e),"undefined"!==typeof BoxeverJERS.settings&&
("undefined"!==typeof BoxeverJERS.settings.client_key&&(b=BoxeverJERS.settings.client_key),"undefined"!==typeof BoxeverJERS.settings.client_key&&(c=BoxeverJERS.settings.target)));this.validateSettings=function(a){if(!a.hasOwnProperty("client_key"))throw Error("Configuration property 'client_key' is required");if(!a.hasOwnProperty("target"))throw Error("Configuration property 'target' is required");};this.initSettings=function(){this.validateSettings(_boxever_settings);b=_boxever_settings.client_key;
c=_boxever_settings.target};this.init=function(){this.initSettings()};init()})();var _boxever_error_service=_boxever_error_service||{errors:[]};(function(){var a=_boxever_error_service.errors;"[object Array]"===Object.prototype.toString.call(a)&&BoxeverJERS.errors.push.apply(BoxeverJERS.errors,a);_boxever_error_service=BoxeverJERS})();
var BoxeverCrossDomain=BoxeverCrossDomain||function(){var a,b,c=1,e,h=this;return{postMessage:function(a,b,l){b&&(l=l||parent,h.postMessage?l.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(l.location=b.replace(/#.*$/,"")+"#"+ +new Date+c++ +"\x26"+a))},receiveMessage:function(c,q){h.postMessage?(e&&(h.removeEventListener?h.removeEventListener("message",e,!1):h.detachEvent("onmessage",e)),c&&(e=function(a){if("string"===typeof q&&a.origin!==q||"[object Function]"===Object.prototype.toString.call(q)&&
!1===q(a.origin))return!1;c(a)},h.addEventListener?h.addEventListener("message",e,!1):h.attachEvent("onmessage",e))):(a&&clearInterval(a),a=null,c&&(a=setInterval(function(){var a=document.location.hash,k=/^#?\d+&/;a!==b&&k.test(a)&&(b=a,c({data:a.replace(k,"")}))},100)))}}}(),_boxeverq=_boxeverq||[];
function __boxever(){this.version="1.3.1";this.client_key;this.target;this.cookie_name;this.cookie_domain;this.cookie_path="/";this.cookie_expires_days=730;this.browser_id="anonymous";this.cross_domain_origin;this.cross_domain_url;this.token_counter=1;this.proxy_url="boxever-proxy.html";this.token=0;this.event=null;this.flag_ttl=24E5;__boxeverQueue=function(){this.push=function(){for(var a=0;a<arguments.length;a++)try{if("function"===typeof arguments[a])arguments[a]()}catch(b){BoxeverJERS.errors.push(b)}}};
this.setCookie=function(a,b,c){b=encodeURI(b);if("undefined"!==typeof c&&null!==c){var e=new Date;e.setDate(e.getDate()+c);b=b+"; expires\x3d"+e.toUTCString()}b=b+"; path\x3d"+this.cookie_path;"undefined"!==typeof this.cookie_domain&&null!==this.cookie_domain&&0<this.cookie_domain.length&&(b=b+"; domain\x3d"+this.cookie_domain);document.cookie=a+"\x3d"+b};this.getCookie=function(a){var b,c,e,h=document.cookie.split(";");for(b=0;b<h.length;b++)if(c=h[b].substr(0,h[b].indexOf("\x3d")),e=h[b].substr(h[b].indexOf("\x3d")+
1),c=c.replace(/^\s+|\s+$/g,""),c==a)return e=decodeURI(e)};this.storage=null;this.consoleLogData=function(a){};this.getVersion=function(){return this.version};this.getID=function(){return this.browser_id};this.getClientKey=function(){return this.client_key};this.getTarget=function(a){return a?this.target.replace("v1.2","v"+a):this.target};this.getCookieName=function(){return this.cookie_name};this.getCookieDomain=function(){return this.cookie_domain};this.getCookiePath=function(){return this.cookie_path};
this.getCookieExpiresDays=function(){return this.cookie_expires_days};this.reset=function(){_boxeverq=[];this.storage&&this.storage.removeItem(this.cookie_name);this.init()};this.resetCookieName=function(){this.storage&&this.storage.removeItem(this.cookie_name)};this.getURLParameter=function(a){return decodeURIComponent(((new RegExp("[?|\x26]"+a+"\x3d([^\x26;]+?)(\x26|#|;|$)")).exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null};this.checkCookieEnabled=function(){var a=!1;try{this.setCookie("boxever_test",
"text_value",1),a="text_value"==this.getCookie("boxever_test"),this.setCookie("boxever_test","text_value",-1)}catch(b){}return a};this.checkStorageEnabled=function(){return BoxeverStorage.storageAvailable()};this.initRegular=function(){var a=this.storage.getItem(this.cookie_name);void 0!=a&&null!=a&&0<a.length?(this.storage.setItem(this.cookie_name,a,this.cookie_expires_days),this.browser_id=a,a=_boxeverq,_boxeverq=new __boxeverQueue,_boxeverq.push.apply(_boxeverq,a)):this.browserCreate("{}",function(a){try{void 0!=
a&&void 0!=a.ref&&(_boxever.browser_id=a.ref,_boxever.storage.setItem(_boxever.cookie_name,_boxever.browser_id,_boxever.cookie_expires_days),a=_boxeverq,_boxeverq=new __boxeverQueue,_boxeverq.push.apply(_boxeverq,a))}catch(c){throw BoxeverJERS.errors.push(c),c;}},"json")};this.addUTMParams=function(a){var b;try{decodeURIComponent(window.location.search),b=decodeURIComponent}catch(c){try{unescape(window.location.search),b=unescape}catch(e){}}if(b){for(var h,n=/\+/g,q=/([^&=]+)=?([^&]*)/g,l=window.location.search.substring(1),
k={};h=q.exec(l);)k[b(h[1].replace(n," "))]=b(h[2].replace(n," "));for(var m in k)if(0==m.indexOf("utm_")||0==m.indexOf("UTM_")||"b_cer"===m||"utr"===m)a[m]=k[m]}return a};this.callIfFlagIsFalse=function(a,b,c){var e=!1;this.checkStorageEnabled()&&(e=BoxeverStorage.get(a,!1));try{if(!e&&(b(),this.checkStorageEnabled())){var h=this.flag_ttl;void 0!==c&&(h=c);BoxeverStorage.set(a,!0,{TTL:h})}}catch(n){BoxeverJERS.errors.push(n)}};this.eventPublish=function(a,b,c){c=this.target.split("/v")[0];var e=
this.target.split("/v")[1];a=this.proxy_url+"?token\x3d"+this.token_counter+"\x26baseUrl\x3d"+c+"\x26version\x3d"+e+"\x26client_key\x3d"+this.client_key+"\x26event\x3d"+encodeURIComponent(__JSON.stringify(a));this.token_counter++;c=document.createElement("iframe");c.style.display="none";c.width="0";c.height="0";c.src=a;document.body.appendChild(c);b()};this.isCookied=function(){var a=this.storage.getItem(this.cookie_name);return void 0!=a&&null!=a&&0<a.length};this.consume=function(){1<this.token&&
this.initRegular()};this.onCookieConsume=function(){_boxever.isCookied()?_boxever.consume():setTimeout(function(){_boxever.onCookieConsume()},10)};this.initConsumer=function(){var a=this.getURLParameter("token"),b=this.getURLParameter("event");if("undefined"!==typeof a&&null!=a&&"undefined"!==typeof b&&null!=b)if(this.token=a,this.event=__JSON.parse(b),_boxeverq.push(function(){_boxever.event.browser_id=_boxever.getID();_boxever.eventCreate(_boxever.event,function(a){},"json")}),1==a)this.initRegular();
else this.onCookieConsume();else BoxeverJERS.errors.push("consumer token or event is undefined or null")};this.initPublisher=function(){this.eventCreate=this.eventPublish;var a=_boxeverq;_boxeverq=new __boxeverQueue;_boxeverq.push.apply(_boxeverq,a)};this.initCrossDomain=function(){var a=this.getCookie(this.cookie_name);if(void 0!=a&&null!=a&&0<a.length)this.browser_id=a,a=_boxeverq,_boxeverq=new __boxeverQueue,_boxeverq.push.apply(_boxeverq,a);else if(this.checkCookieEnabled()){var a=this.cross_domain_origin,
b=this.cross_domain_url,b=b+"?",b=b+"client_key\x3d"+encodeURIComponent(this.getClientKey()),b=b+"\x26",b=b+"parent_url\x3d"+encodeURIComponent(window.location);BoxeverCrossDomain.receiveMessage(function(a){try{void 0!=a&&void 0!=a.data&&"string"==typeof a.data&&36==a.data.length&&(_boxever.browser_id=a.data,_boxever.setCookie(_boxever.getCookieName(),a.data),a=_boxeverq,_boxeverq=new __boxeverQueue,_boxeverq.push.apply(_boxeverq,a))}catch(b){throw BoxeverJERS.errors.push(b),b;}},a);document.getElementsByTagName("body")[0].appendChild(function(){var a=
document.createElement("iframe");a.style.cssText="visibility:hidden;display:none";a.width=0;a.height=0;a.src=b;return a}())}};this.validateSettings=function(a){if(!a.hasOwnProperty("client_key"))throw Error("Configuration property 'client_key' is required");if(!a.hasOwnProperty("target"))throw Error("Configuration property 'target' is required");if(!a.hasOwnProperty("cookie_domain"))throw Error("Configuration property 'cookie_domain' is required");};this.initSettings=function(){this.validateSettings(_boxever_settings);
this.client_key=_boxever_settings.client_key;this.cookie_name="bid_"+_boxever_settings.client_key;this.target=_boxever_settings.target;this.cookie_domain=_boxever_settings.cookie_domain;"undefined"!=typeof _boxever_settings.publisher?"undefined"!=typeof _boxever_settings.publisher.url&&(this.proxy_url=_boxever_settings.publisher.url):"undefined"!==typeof _boxever_settings.cross_domain&&("undefined"!=typeof _boxever_settings.cross_domain.origin&&(this.cross_domain_origin=_boxever_settings.cross_domain.origin),
"undefined"!=typeof _boxever_settings.cross_domain.url&&(this.cross_domain_url=_boxever_settings.cross_domain.url));this.checkCookieEnabled()?this.storage={setItem:function(a,b,c){_boxever.setCookie(a,b,c)},getItem:function(a){return _boxever.getCookie(a)},removeItem:function(a){_boxever.setCookie(a,"",-1);return!0}}:this.checkStorageEnabled()&&(this.storage={setItem:function(a,b,c){BoxeverStorage.set(a,b,c)},getItem:function(a,b){return BoxeverStorage.get(a,b)},removeItem:function(a){return BoxeverStorage.deleteKey(a)}})};
this.init=function(){try{if(this.initSettings(),this.storage||"undefined"!=typeof _boxever_settings.publisher)"undefined"!=typeof _boxever_settings.publisher?this.initPublisher():"undefined"!=typeof _boxever_settings.consumer?this.initConsumer():"undefined"!==typeof _boxever_settings.cross_domain?this.initCrossDomain():this.initRegular()}catch(a){throw BoxeverJERS.errors.push(a),a;}}}var Boxever=Boxever||new __boxever;
(function(a){a.get=function(a,c){""===c&&(c="BoxeverUtils.consoleLogData");BoxeverJSONP.exec(a+"\x26callback\x3d?",c)};a.post=function(a,c,e){""===e&&(e="BoxeverUtils.consoleLogData");var h="",h=BoxeverXML.isXML(c)?BoxeverXML.xml2string(c):"string"===typeof c&&"\x3c"==c.charAt(0)?c:"string"===typeof c&&"{"==c.charAt(0)?__JSON.stringify(__JSON.parse(c)):__JSON.stringify(c);a=-1==a.indexOf("?")?a+"?":a+"\x26";a=a+"message\x3d"+encodeURIComponent(h)+"\x26callback\x3d?";BoxeverJSONP.exec(a,e)}})(Boxever);
(function(a){function b(b,k,m,c,g,d){var f=a.getTarget(),f=f+"/"+b,f=f+"/create.",f=f+c,f=f+"?",f=f+"client_key\x3d"+a.getClientKey();"undefined"!=typeof g&&(f=f+"\x26boxever_version\x3d"+g);"undefined"!=typeof d&&(f=f+"\x26content_version\x3d"+d);a.post(f,k,function(b){try{if("NOT_FOUND"===b.status&&"Invalid browser id/ref specified"===b.error_msg){var d="Resetting cookie name for browser id/ref "+a.getID()+" for client_key "+a.getClientKey();a.resetCookieName();BoxeverJERS.errors.push(d)}}catch(k){}m(b)})}
function c(b,k,c,e,g){var d=a.getTarget(),d=d+"/"+b,d=d+"/create.",d=d+g,d=d+"?",d=d+"client_key\x3d"+a.getClientKey(),d=d+"\x26",d=d+"api_token\x3d"+c;a.post(d,k,e)}function e(b,k,c,e,g){var d=a.getTarget(),d=d+"/"+b,d=d+"/",d=d+k,d=d+"/show.",d=d+g,d=d+"?",d=d+"client_key\x3d"+a.getClientKey(),d=d+"\x26",d=d+"api_token\x3d"+c;a.get(d,e)}function h(b,k,c,e,g){var d=a.getTarget(),d=d+"/"+b,d=d+"/search.",d=d+g,d=d+"?",d=d+"client_key\x3d"+a.getClientKey(),d=d+"\x26",d=d+"api_token\x3d"+c;null!==k&&
0<k.indexOf("\x3d")&&(c=k.indexOf("\x3d"),b=encodeURIComponent(k.substring(0,c)),k=encodeURIComponent(k.substring(c).replace("\x3d","")),d+="\x26",d=d+b+"\x3d"+k);a.get(d,e)}function n(b,k,c,e,g,d){var f=a.getTarget(),f=f+"/"+b,f=f+"/",f=f+k,f=f+"/update.",f=f+d,f=f+"?",f=f+"client_key\x3d"+a.getClientKey(),f=f+"\x26",f=f+"api_token\x3d"+e;a.post(f,c,g)}function q(b,k,c,e,g,d){var f=a.getTarget(),f=f+"/"+b,f=f+"/",f=f+k;null!==c&&0<c.length&&(f=f+"/"+encodeURIComponent(c));f+="/delete.";f+=d;f+="?";
f=f+"client_key\x3d"+a.getClientKey();f+="\x26";f=f+"api_token\x3d"+e;a.get(f,g)}a.pingCreate=function(a,k,c){b("ping",a,k,c)};a.eventCreate=function(a,k,c){b("event",a,k,c,"1.3.1","undefined"!=typeof _boxever_content_version?_boxever_content_version:void 0)};a.eventShow=function(a,b,c,h){e("event",a,b,c,h)};a.eventSearch=function(a,b,c,e){h("event",a,b,c,e)};a.browserCreate=function(a,c,e){b("browser",a,c,e)};a.browserShow=function(a,b,c,h){e("browser",a,b,c,h)};a.customerCreate=function(a,b,e,h){c("customer",
a,b,e,h)};a.customerShow=function(a,b,c,h){e("customer",a,b,c,h)};a.customerUpdate=function(a,b,c,e,g){n("customer",a,b,c,e,g)};a.customerDelete=function(a,b,c,e,g){q("customer",a,b,c,e,g)};a.customerSearch=function(a,b,c,e){h("customer",a,b,c,e)};a.customerDataCreate=function(a,b,e,h){c("customerdata",a,b,e,h)};a.customerDataShow=function(a,b,c,h){e("customerdata",a,b,c,h)};a.customerDataUpdate=function(a,b,c,e,g){n("customerdata",a,b,c,e,g)};a.customerDataDelete=function(a,b,c,e,g){q("customerdata",
a,b,c,e,g)};a.campaignCreate=function(a,c,e){b("campaign",a,c,e)};a.campaignShow=function(a,b,c){e("campaign",ref,api_token,b,c)};a.campaignSearch=function(a,b,c,e){h("campaign",a,b,c,e)};a.auditShow=function(a,b,c,h){e("audit",a,b,c,h)};a.auditSearch=function(a,b,c,e){h("audit",a,b,c,e)};a.profileCreate=function(a,c,e,h){b("profile",a,e,h)};a.profileShow=function(a,b,c,h){e("profile",a,b,c,h)};a.profileUpdate=function(a,b,c,e,g){n("profile",b,a,c,e,g)};a.profileSearch=function(a,b,c,e){h("profile",
a,b,c,e)}})(Boxever);(function(a){a.flowExecutionCreate=function(b,c){var e=a.getTarget("2"),e=e+"/flowExecutions";a.post(e,b,c)}})(Boxever);var _boxever=Boxever;_boxever.init();