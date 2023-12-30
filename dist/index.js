"use strict";var f=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var l=f(function(p,h){
var m=require('@stdlib/assert-is-array/dist'),o=require('@stdlib/array-base-resolve-getter/dist');function c(t,r){var u,g,n,a,i,v,s,e;if(n=t.length,r.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(u=o(t),g=o(r),a={},e=0;e<n;e++)s=u(t,e),i=g(r,e).toString(),v=a[i],m(v)?v.push([e,s]):a[i]=[[e,s]];return a}h.exports=c
});var d=l();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
