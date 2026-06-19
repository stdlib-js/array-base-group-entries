"use strict";var f=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var l=f(function(p,h){"use strict";var m=require("@stdlib/assert-is-array"),o=require("@stdlib/array-base-resolve-getter");function c(t,r){var a,g,i,n,v,s,u,e;if(i=t.length,r.length!==i)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(a=o(t),g=o(r),n={},e=0;e<i;e++)u=a(t,e),v=g(r,e).toString(),s=n[v],m(s)?s.push([e,u]):n[v]=[[e,u]];return n}h.exports=c});var d=l();module.exports=d;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
