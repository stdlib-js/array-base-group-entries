"use strict";var f=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var l=f(function(p,h){"use strict";var m=require("@stdlib/assert-is-array"),o=require("@stdlib/array-base-resolve-getter");function c(t,r){var u,g,n,a,i,v,s,e;if(n=t.length,r.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(u=o(t),g=o(r),a={},e=0;e<n;e++)s=u(t,e),i=g(r,e).toString(),v=a[i],m(v)?v.push([e,s]):a[i]=[[e,s]];return a}h.exports=c});var d=l();module.exports=d;
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
