(function(window){var svgSprite='<svg><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M832.2 264.6H192.3c-35.2 0-64-28.8-64-64s28.8-64 64-64h639.8c35.2 0 64 28.8 64 64 0.1 35.2-28.7 64-63.9 64zM832.2 577.9H196.1c-35.2 0-64-28.8-64-64s28.8-64 64-64h636.1c35.2 0 64 28.8 64 64s-28.8 64-64 64zM832.2 896.9H192.3c-35.2 0-64-28.8-64-64s28.8-64 64-64h639.8c35.2 0 64 28.8 64 64 0.1 35.2-28.7 64-63.9 64z" fill="#666666" ></path></symbol><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M502.3 63.2c129.2 0 233.8 103 233.8 230s-104.7 230-233.8 230-233.8-103-233.8-230c-0.1-127 104.7-230 233.8-230zM414.6 576.2h194.9c166.8 0 302.1 133 302.1 297.1v19.1c0 64.7-135.3 67.1-302.1 67.1H414.6c-166.8 0-302.1-0.1-302.1-67.1v-19.1c0-164.1 135.2-297.1 302.1-297.1z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)