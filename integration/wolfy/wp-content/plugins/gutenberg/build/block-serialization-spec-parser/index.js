this.wp=this.wp||{},this.wp.blockSerializationSpecParser=function(t){var r={};function n(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=241)}({241:function(t,r,n){var e,u,o;u=[],void 0===(o="function"==typeof(e=function(){"use strict";function t(r,n,e,u){this.message=r,this.expected=n,this.found=e,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return function(t,r){function n(){this.constructor=t}n.prototype=r.prototype,t.prototype=new n}(t,Error),t.buildMessage=function(t,r){var n={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var r,n="";for(r=0;r<t.parts.length;r++)n+=t.parts[r]instanceof Array?o(t.parts[r][0])+"-"+o(t.parts[r][1]):o(t.parts[r]);return"["+(t.inverted?"^":"")+n+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+e(t)})}function c(t){return n[t.type](t)}return"Expected "+function(t){var r,n,e=new Array(t.length);for(r=0;r<t.length;r++)e[r]=c(t[r]);if(e.sort(),e.length>0){for(r=1,n=1;r<e.length;r++)e[r-1]!==e[r]&&(e[n]=e[r],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}(t)+" but "+function(t){return t?'"'+u(t)+'"':"end of input"}(r)+" found."},{SyntaxError:t,parse:function(r,n){n=void 0!==n?n:{};var e,u={},o={Block_List:$},c=$,i={type:"any"},a=function(t,r,n){return[r,n]},s=function(t,r,n){return function(t,r,n){var e,u,o,c,i,a=[];for(t.length&&a.push(ct(t)),e=0,u=r.length;e<u;e++)c=r[e],i=c[0],o=c[1],a.push(i),o.length&&a.push(ct(o));return n.length&&a.push(ct(n)),a}(t,r,n)},l="\x3c!--",f=K("\x3c!--",!1),h="wp:",p=K("wp:",!1),g=function(t,r){return r},d="/--\x3e",v=K("/--\x3e",!1),b=function(t,r){return{blockName:t,attrs:r||{},innerBlocks:[],innerHTML:""}},x=function(t,r,n){var e=function(t,r){var n,e,u,o=[],c=[];for(n=0,e=r.length;n<e;n++)u=r[n],t(u)?o.push(u):c.push(u);return[o,c]}(function(t){return"string"==typeof t},r),u=e[0],o=e[1];return{blockName:t.blockName,attrs:t.attrs,innerBlocks:o,innerHTML:u.join("")}},A="--\x3e",y=K("--\x3e",!1),m=function(t,r){return{blockName:t,attrs:r||{}}},w="/wp:",k=K("/wp:",!1),C=function(t){return{blockName:t}},S="/",F=K("/",!1),N=function(t){return"core/"+t},E=/^[a-z]/,M=Q([["a","z"]],!1,!1),_=/^[a-z0-9_\-]/,O=Q([["a","z"],["0","9"],"_","-"],!1,!1),j=V("JSON-encoded attributes embedded in a block's opening comment"),z="{",T=K("{",!1),B="}",L=K("}",!1),P="",R=function(t){return function(t){try{return JSON.parse(t)}catch(t){return null}}(t)},H=/^[ \t\r\n]/,J=Q([" ","\t","\r","\n"],!1,!1),U=0,q=[{line:1,column:1}],D=0,G=[],I=0;if("startRule"in n){if(!(n.startRule in o))throw new Error("Can't start parsing from rule \""+n.startRule+'".');c=o[n.startRule]}function K(t,r){return{type:"literal",text:t,ignoreCase:r}}function Q(t,r,n){return{type:"class",parts:t,inverted:r,ignoreCase:n}}function V(t){return{type:"other",description:t}}function W(t){var n,e=q[t];if(e)return e;for(n=t-1;!q[n];)n--;for(e={line:(e=q[n]).line,column:e.column};n<t;)10===r.charCodeAt(n)?(e.line++,e.column=1):e.column++,n++;return q[t]=e,e}function X(t,r){var n=W(t),e=W(r);return{start:{offset:t,line:n.line,column:n.column},end:{offset:r,line:e.line,column:e.column}}}function Y(t){U<D||(U>D&&(D=U,G=[]),G.push(t))}function Z(r,n,e){return new t(t.buildMessage(r,n),r,n,e)}function $(){var t,n,e,o,c,l,f,h,p,g;for(t=U,n=U,e=[],o=U,c=U,I++,l=tt(),I--,l===u?c=void 0:(U=c,c=u),c!==u?(r.length>U?(l=r.charAt(U),U++):(l=u,0===I&&Y(i)),l!==u?o=c=[c,l]:(U=o,o=u)):(U=o,o=u);o!==u;)e.push(o),o=U,c=U,I++,l=tt(),I--,l===u?c=void 0:(U=c,c=u),c!==u?(r.length>U?(l=r.charAt(U),U++):(l=u,0===I&&Y(i)),l!==u?o=c=[c,l]:(U=o,o=u)):(U=o,o=u);if((n=e!==u?r.substring(n,U):e)!==u){if(e=[],o=U,(c=tt())!==u){for(l=U,f=[],h=U,p=U,I++,g=tt(),I--,g===u?p=void 0:(U=p,p=u),p!==u?(r.length>U?(g=r.charAt(U),U++):(g=u,0===I&&Y(i)),g!==u?h=p=[p,g]:(U=h,h=u)):(U=h,h=u);h!==u;)f.push(h),h=U,p=U,I++,g=tt(),I--,g===u?p=void 0:(U=p,p=u),p!==u?(r.length>U?(g=r.charAt(U),U++):(g=u,0===I&&Y(i)),g!==u?h=p=[p,g]:(U=h,h=u)):(U=h,h=u);(l=f!==u?r.substring(l,U):f)!==u?(c=a(n,c,l),o=c):(U=o,o=u)}else U=o,o=u;for(;o!==u;)if(e.push(o),o=U,(c=tt())!==u){for(l=U,f=[],h=U,p=U,I++,g=tt(),I--,g===u?p=void 0:(U=p,p=u),p!==u?(r.length>U?(g=r.charAt(U),U++):(g=u,0===I&&Y(i)),g!==u?h=p=[p,g]:(U=h,h=u)):(U=h,h=u);h!==u;)f.push(h),h=U,p=U,I++,g=tt(),I--,g===u?p=void 0:(U=p,p=u),p!==u?(r.length>U?(g=r.charAt(U),U++):(g=u,0===I&&Y(i)),g!==u?h=p=[p,g]:(U=h,h=u)):(U=h,h=u);(l=f!==u?r.substring(l,U):f)!==u?(c=a(n,c,l),o=c):(U=o,o=u)}else U=o,o=u;if(e!==u){for(o=U,c=[],r.length>U?(l=r.charAt(U),U++):(l=u,0===I&&Y(i));l!==u;)c.push(l),r.length>U?(l=r.charAt(U),U++):(l=u,0===I&&Y(i));(o=c!==u?r.substring(o,U):c)!==u?(n=s(n,e,o),t=n):(U=t,t=u)}else U=t,t=u}else U=t,t=u;return t}function tt(){var t;return(t=function(){var t,n,e,o,c,i;return t=U,r.substr(U,4)===l?(n=l,U+=4):(n=u,0===I&&Y(f)),n!==u&&ot()!==u?(r.substr(U,3)===h?(e=h,U+=3):(e=u,0===I&&Y(p)),e!==u&&(o=nt())!==u&&ot()!==u?(c=U,(i=ut())!==u&&ot()!==u?(i=g(o,i),c=i):(U=c,c=u),c===u&&(c=null),c!==u?(r.substr(U,4)===d?(i=d,U+=4):(i=u,0===I&&Y(v)),i!==u?(n=b(o,c),t=n):(U=t,t=u)):(U=t,t=u)):(U=t,t=u)):(U=t,t=u),t}())===u&&(t=function(){var t,n,e,o,c,a,s;if(t=U,(n=function(){var t,n,e,o,c,i;return t=U,r.substr(U,4)===l?(n=l,U+=4):(n=u,0===I&&Y(f)),n!==u&&ot()!==u?(r.substr(U,3)===h?(e=h,U+=3):(e=u,0===I&&Y(p)),e!==u&&(o=nt())!==u&&ot()!==u?(c=U,(i=ut())!==u&&ot()!==u?(i=g(o,i),c=i):(U=c,c=u),c===u&&(c=null),c!==u?(r.substr(U,3)===A?(i=A,U+=3):(i=u,0===I&&Y(y)),i!==u?(n=m(o,c),t=n):(U=t,t=u)):(U=t,t=u)):(U=t,t=u)):(U=t,t=u),t}())!==u){for(e=[],(o=tt())===u&&(o=U,c=U,a=U,I++,s=rt(),I--,s===u?a=void 0:(U=a,a=u),a!==u?(r.length>U?(s=r.charAt(U),U++):(s=u,0===I&&Y(i)),s!==u?c=a=[a,s]:(U=c,c=u)):(U=c,c=u),o=c!==u?r.substring(o,U):c);o!==u;)e.push(o),(o=tt())===u&&(o=U,c=U,a=U,I++,s=rt(),I--,s===u?a=void 0:(U=a,a=u),a!==u?(r.length>U?(s=r.charAt(U),U++):(s=u,0===I&&Y(i)),s!==u?c=a=[a,s]:(U=c,c=u)):(U=c,c=u),o=c!==u?r.substring(o,U):c);e!==u&&(o=rt())!==u?(n=x(n,e,o),t=n):(U=t,t=u)}else U=t,t=u;return t}()),t}function rt(){var t,n,e,o,c;return t=U,r.substr(U,4)===l?(n=l,U+=4):(n=u,0===I&&Y(f)),n!==u&&ot()!==u?(r.substr(U,4)===w?(e=w,U+=4):(e=u,0===I&&Y(k)),e!==u&&(o=nt())!==u&&ot()!==u?(r.substr(U,3)===A?(c=A,U+=3):(c=u,0===I&&Y(y)),c!==u?(n=C(o),t=n):(U=t,t=u)):(U=t,t=u)):(U=t,t=u),t}function nt(){var t;return(t=function(){var t,n,e,o,c;return t=U,n=U,(e=et())!==u?(47===r.charCodeAt(U)?(o=S,U++):(o=u,0===I&&Y(F)),o!==u&&(c=et())!==u?n=e=[e,o,c]:(U=n,n=u)):(U=n,n=u),t=n!==u?r.substring(t,U):n}())===u&&(t=function(){var t,n;return t=U,(t=(n=et())!==u?r.substring(t,U):n)!==u&&(t=N(t)),t}()),t}function et(){var t,n,e,o,c;if(t=U,n=U,E.test(r.charAt(U))?(e=r.charAt(U),U++):(e=u,0===I&&Y(M)),e!==u){for(o=[],_.test(r.charAt(U))?(c=r.charAt(U),U++):(c=u,0===I&&Y(O));c!==u;)o.push(c),_.test(r.charAt(U))?(c=r.charAt(U),U++):(c=u,0===I&&Y(O));o!==u?n=e=[e,o]:(U=n,n=u)}else U=n,n=u;return t=n!==u?r.substring(t,U):n}function ut(){var t,n,e,o,c,a,s,l,f,h,p,g,d;if(I++,t=U,n=U,e=U,123===r.charCodeAt(U)?(o=z,U++):(o=u,0===I&&Y(T)),o!==u){for(c=[],a=U,s=U,I++,l=U,125===r.charCodeAt(U)?(f=B,U++):(f=u,0===I&&Y(L)),f!==u&&(h=ot())!==u&&(p=P)!==u?(47===r.charCodeAt(U)?(g=S,U++):(g=u,0===I&&Y(F)),g===u&&(g=null),g!==u?(r.substr(U,3)===A?(d=A,U+=3):(d=u,0===I&&Y(y)),d!==u?l=f=[f,h,p,g,d]:(U=l,l=u)):(U=l,l=u)):(U=l,l=u),I--,l===u?s=void 0:(U=s,s=u),s!==u?(r.length>U?(l=r.charAt(U),U++):(l=u,0===I&&Y(i)),l!==u?a=s=[s,l]:(U=a,a=u)):(U=a,a=u);a!==u;)c.push(a),a=U,s=U,I++,l=U,125===r.charCodeAt(U)?(f=B,U++):(f=u,0===I&&Y(L)),f!==u&&(h=ot())!==u&&(p=P)!==u?(47===r.charCodeAt(U)?(g=S,U++):(g=u,0===I&&Y(F)),g===u&&(g=null),g!==u?(r.substr(U,3)===A?(d=A,U+=3):(d=u,0===I&&Y(y)),d!==u?l=f=[f,h,p,g,d]:(U=l,l=u)):(U=l,l=u)):(U=l,l=u),I--,l===u?s=void 0:(U=s,s=u),s!==u?(r.length>U?(l=r.charAt(U),U++):(l=u,0===I&&Y(i)),l!==u?a=s=[s,l]:(U=a,a=u)):(U=a,a=u);c!==u?(125===r.charCodeAt(U)?(a=B,U++):(a=u,0===I&&Y(L)),a!==u?e=o=[o,c,a]:(U=e,e=u)):(U=e,e=u)}else U=e,e=u;return(n=e!==u?r.substring(n,U):e)!==u&&(n=R(n)),I--,(t=n)===u&&(n=u,0===I&&Y(j)),t}function ot(){var t,n;if(t=[],H.test(r.charAt(U))?(n=r.charAt(U),U++):(n=u,0===I&&Y(J)),n!==u)for(;n!==u;)t.push(n),H.test(r.charAt(U))?(n=r.charAt(U),U++):(n=u,0===I&&Y(J));else t=u;return t}function ct(t){return t.length&&{blockName:null,attrs:{},innerBlocks:[],innerHTML:t}}if((e=c())!==u&&U===r.length)return e;throw e!==u&&U<r.length&&Y({type:"end"}),Z(G,D<r.length?r.charAt(D):null,D<r.length?X(D,D+1):X(D,D))}}})?e.apply(r,u):e)||(t.exports=o)}});