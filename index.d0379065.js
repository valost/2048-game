!function(){function t(t){return t&&t.__esModule?t.default:t}var e,r,a={};function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function s(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}}function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=/*#__PURE__*/function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.status=e.STATUS.idle,this.initialState=t,this.state=t.map(function(t){return i(t)}),this.score=0}return t=[{key:"start",value:function(){this.status=e.STATUS.playing,this.getRandomCells(),this.getRandomCells()}},{key:"getRandomCells",value:function(){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)0===this.state[e][r]&&t.push([e,r]);if(t.length>0){var a,n=function(t){if(Array.isArray(t))return t}(a=t[Math.floor(Math.random()*t.length)])||function(t,e){var r,a,n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var s=[],i=!0,o=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(s.push(r.value),2!==s.length);i=!0);}catch(t){o=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return s}}(a,2)||s(a,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=n[0],o=n[1];this.state[i][o]=.9>Math.random()?2:4}}},{key:"checkGameStatus",value:function(){for(var t=!1,r=!1,a=0;a<4;a++)for(var n=0;n<4;n++){if(2048===this.state[a][n]){this.status=e.STATUS.win;return}0===this.state[a][n]&&(r=!0),(a<3&&this.state[a][n]===this.state[a+1][n]||n<3&&this.state[a][n]===this.state[a][n+1])&&(t=!0)}t||r||(this.status=e.STATUS.lose)}},{key:"moveLeft",value:function(){if(this.status===e.STATUS.playing){for(var t=this,r=!1,a=0;a<4;a++)!function(e){for(var a=[],n=0;n<4;n++)0!==t.state[e][n]&&a.push(t.state[e][n]);for(var s=0;s<a.length;s++)a[s]===a[s+1]&&(a[s]*=2,a[s+1]=0,t.score+=a[s],r=!0);for(var i=a.filter(function(t){return 0!==t});i.length<4;)i.push(0);for(var o=0;o<4;o++)t.state[e][o]!==i[o]&&(t.state[e][o]=i[o],r=!0)}(a);r&&(this.getRandomCells(),this.checkGameStatus())}}},{key:"moveRight",value:function(){if(this.status===e.STATUS.playing){for(var t=this,r=!1,a=0;a<4;a++)!function(e){for(var a=[],n=3;n>=0;n--)0!==t.state[e][n]&&a.push(t.state[e][n]);for(var s=0;s<a.length;s++)a[s]===a[s+1]&&(a[s]*=2,a[s+1]=0,t.score+=a[s],r=!0);for(var i=a.filter(function(t){return 0!==t});i.length<4;)i.push(0);for(var o=0;o<4;o++)t.state[e][o]!==i[3-o]&&(t.state[e][o]=i[3-o],r=!0)}(a);r&&(this.getRandomCells(),this.checkGameStatus())}}},{key:"moveUp",value:function(){if(this.status===e.STATUS.playing){for(var t=this,r=!1,a=0;a<4;a++)!function(e){for(var a=[],n=0;n<4;n++)0!==t.state[n][e]&&a.push(t.state[n][e]);for(var s=0;s<a.length;s++)a[s]===a[s+1]&&(a[s]*=2,a[s+1]=0,t.score+=a[s],r=!0);for(var i=a.filter(function(t){return 0!==t});i.length<4;)i.push(0);for(var o=0;o<4;o++)t.state[o][e]!==i[o]&&(t.state[o][e]=i[o],r=!0)}(a);r&&(this.getRandomCells(),this.checkGameStatus())}}},{key:"moveDown",value:function(){if(this.status===e.STATUS.playing){for(var t=this,r=!1,a=0;a<4;a++)!function(e){for(var a=[],n=3;n>=0;n--)0!==t.state[n][e]&&a.push(t.state[n][e]);for(var s=0;s<a.length;s++)a[s]===a[s+1]&&(a[s]*=2,a[s+1]=0,t.score+=a[s],r=!0);for(var i=a.filter(function(t){return 0!==t});i.length<4;)i.push(0);for(var o=0;o<4;o++)t.state[o][e]!==i[3-o]&&(t.state[o][e]=i[3-o],r=!0)}(a);r&&(this.getRandomCells(),this.checkGameStatus())}}},{key:"restart",value:function(){this.status=e.STATUS.idle,this.state=this.initialState.map(function(t){return i(t)}),this.score=0}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}}],function(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(e.prototype,t),e}();r={idle:"idle",playing:"playing",win:"win",lose:"lose"},(e="STATUS")in o?Object.defineProperty(o,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[e]=r;var l=new/*@__PURE__*/(t(a=o)),u=document.querySelector(".start"),c=document.querySelector(".game-field"),f=document.querySelector(".game-score"),h=document.querySelector(".message-start"),d=document.querySelector(".message-lose"),v=document.querySelector(".message-win");function m(){c.innerHTML="";for(var t=l.getState(),e=0;e<4;e++){for(var r=document.createElement("tr"),a=0;a<4;a++){var n=document.createElement("td"),s=t[e][a];n.textContent=0!==s?s:"",n.classList.add("field-cell"),0!==s&&n.classList.add("field-cell--".concat(s)),r.appendChild(n)}c.appendChild(r)}}function y(){f.textContent=l.getScore()}function S(){l.getStatus()===/*@__PURE__*/t(a).STATUS.win?v.classList.remove("hidden"):l.getStatus()===/*@__PURE__*/t(a).STATUS.lose&&d.classList.remove("hidden")}u.addEventListener("click",function(){u.classList.contains("start")?(l.start(),u.classList.remove("start"),u.classList.add("restart"),u.textContent="Restart",h.classList.add("hidden"),d.classList.add("hidden"),v.classList.add("hidden")):u.classList.contains("restart")&&(l.restart(),u.classList.remove("restart"),u.classList.add("start"),u.textContent="Start",h.classList.add("hidden"),d.classList.add("hidden"),v.classList.add("hidden")),m(),y()}),document.addEventListener("keyup",function(t){switch(t.key){case"ArrowRight":l.moveRight();break;case"ArrowLeft":l.moveLeft();break;case"ArrowUp":l.moveUp();break;case"ArrowDown":l.moveDown()}m(),y(),S()}),m(),y(),S()}();
//# sourceMappingURL=index.d0379065.js.map
