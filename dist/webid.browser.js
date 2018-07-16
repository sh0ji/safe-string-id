parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"RSrv":[function(require,module,exports) {
"use strict";var e=1;function t(){return(e=(9301*e+49297)%233280)/233280}function n(t){e=t}module.exports={nextValue:t,seed:n};
},{}],"Sd1I":[function(require,module,exports) {
"use strict";var e,t,r,n=require("./random/random-from-seed"),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function o(){r=!1}function i(t){if(t){if(t!==e){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var r=t.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(r.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+r.join(", "));e=t,o()}}else e!==u&&(e=u,o())}function s(t){return i(t),e}function a(e){n.seed(e),t!==e&&(o(),t=e)}function h(){e||i(u);for(var t,r=e.split(""),o=[],s=n.nextValue();r.length>0;)s=n.nextValue(),t=Math.floor(s*r.length),o.push(r.splice(t,1)[0]);return o.join("")}function f(){return r||(r=h())}function l(e){return f()[e]}function c(){return e||u}module.exports={get:c,characters:s,seed:a,lookup:l,shuffled:f};
},{"./random/random-from-seed":"RSrv"}],"830r":[function(require,module,exports) {
"use strict";var o,t="object"==typeof window&&(window.crypto||window.msCrypto);o=t&&t.getRandomValues?function(o){return t.getRandomValues(new Uint8Array(o))}:function(o){for(var t=[],r=0;r<o;r++)t.push(Math.floor(256*Math.random()));return t},module.exports=o;
},{}],"Ktnl":[function(require,module,exports) {
module.exports=function(t,r,e){for(var a=(2<<Math.log(r.length-1)/Math.LN2)-1,h=Math.ceil(1.6*a*e/r.length),l="";;)for(var n=t(h),o=0;o<h;o++){var f=n[o]&a;if(r[f]&&(l+=r[f]).length===e)return l}};
},{}],"gnMd":[function(require,module,exports) {
"use strict";var r=require("./alphabet"),e=require("./random/random-byte"),t=require("nanoid/format");function a(a){for(var o,n=0,u="";!o;)u+=t(e,r.get(),1),o=a<Math.pow(16,n+1),n++;return u}module.exports=a;
},{"./alphabet":"Sd1I","./random/random-byte":"830r","nanoid/format":"Ktnl"}],"EQbp":[function(require,module,exports) {
"use strict";var e,r,t=require("./generate"),a=require("./alphabet"),o=1459707606518,u=6;function n(a){var n="",i=Math.floor(.001*(Date.now()-o));return i===r?e++:(e=0,r=i),n+=t(u),n+=t(a),e>0&&(n+=t(e)),n+=t(i)}module.exports=n;
},{"./generate":"gnMd","./alphabet":"Sd1I"}],"mo1C":[function(require,module,exports) {
"use strict";var e=require("./alphabet");function t(t){return!(!t||"string"!=typeof t||t.length<6)&&!new RegExp("[^"+e.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}module.exports=t;
},{"./alphabet":"Sd1I"}],"n5O4":[function(require,module,exports) {
"use strict";module.exports=0;
},{}],"LEeL":[function(require,module,exports) {
"use strict";var e=require("./alphabet"),r=require("./build"),u=require("./is-valid"),t=require("./util/cluster-worker-id")||0;function o(r){return e.seed(r),module.exports}function s(e){return t=e,module.exports}function i(r){return void 0!==r&&e.characters(r),e.shuffled()}function d(){return r(t)}module.exports=d,module.exports.generate=d,module.exports.seed=o,module.exports.worker=s,module.exports.characters=i,module.exports.isValid=u;
},{"./alphabet":"Sd1I","./build":"EQbp","./is-valid":"mo1C","./util/cluster-worker-id":"n5O4"}],"Km+F":[function(require,module,exports) {
"use strict";module.exports=require("./lib/index");
},{"./lib/index":"LEeL"}],"B76A":[function(require,module,exports) {
var define;
var e,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(r,n,t){"object"===("undefined"==typeof exports?"undefined":o(exports))?(module.exports=t(),module.exports.default=t()):"function"==typeof e&&e.amd?e(t):n.slugify=t()}(0,this,function(){var e=JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function o(o,r){if("string"!=typeof o)throw new Error("slugify: string argument expected");r="string"==typeof r?{replacement:r}:r||{};var n=o.split("").reduce(function(o,n){return o+(e[n]||n).replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").replace(/^\s+|\s+$/g,"").replace(/[-\s]+/g,r.replacement||"-").replace("#{replacement}$","");return r.lower?n.toLowerCase():n}return o.extend=function(o){for(var r in o)e[r]=o[r]},o});
},{}],"iJA9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e=exports.getCharacters=function(){return function(r){var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";return r?e.replace(r,"~"===r?"-":"~"):e}}(),t=exports.DefaultOptions={delimiter:"-",delimiterInShortid:!1,lower:!0,maxLength:128,remove:null,strict:!0},n=exports.Private={delimiter:new WeakMap,prefix:new WeakMap,suffix:new WeakMap},o=exports.Errors={TYPE_IS_STRING:function(){return function(e){return{assertion:"string"==typeof e,error:new TypeError("Expected a string. Received "+(void 0===e?"undefined":r(e))+".")}}}(),STRICT_DELIMITER:function(){return function(r){return{assertion:/^[\w-._~]*$/.test(r),error:new Error(r+" is not a safe delimiter.")}}}(),NON_STRICT_DELIMITER:function(){return function(r){return{assertion:/^\S*$/g.test(r),error:new Error("The delimiter cannot be a space.")}}}(),VALID_PREFIX:function(){return function(r){return{assertion:/^[a-z]+/i.test(r),error:new Error("prefix must begin with a letter (a-z).")}}}()},i=exports.Assertions=function(){var r={};return Object.keys(o).forEach(function(e){r[e]=function(r){var t=o[e](r);if(!t.assertion)throw t.error}}),r}();
},{}],"dGJt":[function(require,module,exports) {
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),i=require("shortid"),r=u(i),n=require("slugify"),s=u(n),o=require("./constants");function u(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=function(){function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f(this,i),this.configure(t)}return e(i,[{key:"slugifyOpts",value:function(){return function(t){return{replacement:t,remove:this.options.remove,lower:this.options.lower}}}()},{key:"createSlug",value:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.delimiter,i=t?(0,s.default)(t,this.slugifyOpts(e)):"";return this.options.strict?i.replace(/[^\w_:.-]/gi,this.delimiter).replace(/^[^a-z]+/,""):i}}()},{key:"configure",value:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=Object.assign({},o.DefaultOptions,t),this.delimiter=this.options.delim||this.options.delimiter,this.prefix=this.options.pre||this.options.prefix,this.suffix=this.options.suf||this.options.suffix}}()},{key:"parse",value:function(){return function(e,i){var n="string"==typeof e?e:"",s="object"===(void 0===e?"undefined":t(e))?e:i;s&&this.configure(s);var u=this.createSlug(n);r.default.characters((0,o.getCharacters)(this.options.delimiterInShortid?null:this.delimiter));var f=r.default.generate(),l=this.options.maxLength-this.prefix.length-this.suffix.length,a=u?[u.substr(0,l-f.length),f].join(this.delimiter):f;return{id:this.prefix+(u.substr(0,l)||f)+this.suffix,unique:this.prefix+a+this.suffix,original:n,slug:u,shortid:f,delimiter:this.delimiter,prefix:this.prefix,suffix:this.suffix}}}()},{key:"generate",value:function(){return function(t,e){return this.parse(t,e).id}}()},{key:"generateUnique",value:function(){return function(t,e){return this.parse(t,e).unique}}()},{key:"delimiter",get:function(){return function(){return o.Private.delimiter.get(this)}}(),set:function(){return function(t){this.options.strict?o.Assertions.STRICT_DELIMITER(t):o.Assertions.NON_STRICT_DELIMITER(t),o.Private.delimiter.set(this,t)}}()},{key:"prefix",get:function(){return function(){return o.Private.prefix.get(this)}}(),set:function(){return function(t){if(t){o.Assertions.TYPE_IS_STRING(t),this.options.strict&&o.Assertions.VALID_PREFIX(t);var e=this.createSlug(t.trim(),null);e&&!e.endsWith(this.delimiter)&&(e+=this.delimiter),o.Private.prefix.set(this,e)}else o.Private.prefix.set(this,"")}}()},{key:"suffix",get:function(){return function(){return o.Private.suffix.get(this)}}(),set:function(){return function(t){if(t){o.Assertions.TYPE_IS_STRING(t);var e=this.createSlug(t.trim(),null);e&&!e.startsWith(this.delimiter)&&(e=this.delimiter+e),o.Private.suffix.set(this,e)}else o.Private.suffix.set(this,"")}}()}]),i}();module.exports=new l;
},{"shortid":"Km+F","slugify":"B76A","./constants":"iJA9"}]},{},["dGJt"], null)
//# sourceMappingURL=/webid.browser.map