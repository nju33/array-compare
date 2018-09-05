!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.arrayCompare={})}(this,function(e){e.arrayCompare=function(e,n){for(var t=Math.max(e.length,n.length),o=[],r=0;r<t;){var a=e[r],f=n[r];o.push({equal:a===f,a:a,b:f}),r++}return o}});
//# sourceMappingURL=array-compare.umd.js.map
