"use strict";var Q=function(q,u){return function(){return u||q((u={exports:{}}).exports,u),u.exports}};var w=Q(function(er,o){
var S=require('@stdlib/strided-base-reinterpret-complex128/dist');function O(q,u,J,H,z,g,h,m,l,G,B,C,b,x,_){var D,v,i,r,a,e,F,j,c,M,$,U,I,y,K,E,n,R;if(D=q+z+l,D<=1)return b;if(e=S(u,0),F=S(g,0),j=S(G,0),c=S(b,0),M=J*2,$=h*2,U=B*2,I=x*2,y=H*2,K=m*2,E=C*2,n=_*2,z===0&&l===0){for(v=e[y],i=e[y+1],R=1;R<q;R++)y+=M,r=e[y],a=e[y+1],c[n]=r-v,c[n+1]=a-i,v=r,i=a,n+=I;return b}if(z>0){for(v=F[K],i=F[K+1],R=1;R<z;R++)K+=$,r=F[K],a=F[K+1],c[n]=r-v,c[n+1]=a-i,v=r,i=a,n+=I;q>0?(r=e[y],a=e[y+1],c[n]=r-v,c[n+1]=a-i,v=r,i=a,n+=I):l>0&&(r=j[E],a=j[E+1],c[n]=r-v,c[n+1]=a-i,v=r,i=a,n+=I)}else q>0?(v=e[y],i=e[y+1]):(v=j[E],i=j[E+1]);if(q>0){for(y+=M,R=1;R<q;R++)r=e[y],a=e[y+1],c[n]=r-v,c[n+1]=a-i,v=r,i=a,n+=I,y+=M;l>0&&(r=j[E],a=j[E+1],c[n]=r-v,c[n+1]=a-i,v=r,i=a,n+=I)}if(l>0)for(E+=U,R=1;R<l;R++)r=j[E],a=j[E+1],c[n]=r-v,c[n+1]=a-i,v=r,i=a,n+=I,E+=U;return b}o.exports=O
});var Y=Q(function(cr,f){
var V=require('@stdlib/blas-base-zcopy/dist').ndarray,T=w();function s(q,u,J,H,z,g,h,m,l,G,B,C,b,x,_,D,v,i,r){var a,e,F,j;if(a=q+g+G,a<=1||u>=a)return x;if(u===0)return V(g,h,m,l,x,_,D),e=D+g*_,V(q,J,H,z,x,_,e),e=D+(g+q)*_,V(G,B,C,b,x,_,e),x;if(u===1)return T(q,J,H,z,g,h,m,l,G,B,C,b,x,_,D),x;for(T(q,J,H,z,g,h,m,l,G,B,C,b,v,i,r),F=a-1,j=1;j<u-1;j++)T(F,v,i,r,0,h,m,l,0,B,C,b,v,i,r),F-=1;return T(F,v,i,r,0,h,m,l,0,B,C,b,x,_,D),x}f.exports=s
});var X=Q(function(ur,p){
var L=require('@stdlib/strided-base-stride2offset/dist'),d=Y();function t(q,u,J,H,z,g,h,m,l,G,B,C,b,x){var _=L(q,H),D=L(z,h),v=L(m,G),i=L(q+z+m-u,C),r=L(q+z+m-1,x);return d(q,u,J,H,_,z,g,h,D,m,l,G,v,B,C,i,b,x,r),B}p.exports=t
});var A=Q(function(lr,W){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=X(),rr=Y();N(k,"ndarray",rr);W.exports=k
});var ar=require("path").join,vr=require('@stdlib/utils-try-require/dist'),ir=require('@stdlib/assert-is-error/dist'),nr=A(),Z,P=vr(ar(__dirname,"./native.js"));ir(P)?Z=nr:Z=P;module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
