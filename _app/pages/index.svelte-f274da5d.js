import{S as W,i as D,s as O,e as q,t as E,k as I,c as y,a as P,h as b,d as f,m as N,b as m,g as S,H as _,j as w,N as T,I as C,R as V}from"../chunks/vendor-2b52b4e8.js";import{b as H}from"../chunks/paths-4b3c6e7e.js";function F(h,e,t){const l=h.slice();return l[1]=e[t],l}function z(h){let e,t=h[0].length+"",l,c;return{c(){e=q("p"),l=E(t),c=E(" post"),this.h()},l(n){e=y(n,"P",{class:!0});var r=P(e);l=b(r,t),c=b(r," post"),r.forEach(f),this.h()},h(){m(e,"class","svelte-889x9q")},m(n,r){S(n,e,r),_(e,l),_(e,c)},p(n,r){r&1&&t!==(t=n[0].length+"")&&w(l,t)},d(n){n&&f(e)}}}function B(h){let e,t=h[0].length+"",l,c;return{c(){e=q("p"),l=E(t),c=E(" posts"),this.h()},l(n){e=y(n,"P",{class:!0});var r=P(e);l=b(r,t),c=b(r," posts"),r.forEach(f),this.h()},h(){m(e,"class","svelte-889x9q")},m(n,r){S(n,e,r),_(e,l),_(e,c)},p(n,r){r&1&&t!==(t=n[0].length+"")&&w(l,t)},d(n){n&&f(e)}}}function R(h){let e,t,l=h[1].title+"",c,n,r,d,$,g=h[1].date+"",p,k,i,s,v=h[1].preview+"",a;return{c(){e=q("h2"),t=q("a"),c=E(l),r=I(),d=q("span"),$=E("["),p=E(g),k=E("]"),i=I(),s=q("span"),a=E(v),this.h()},l(o){e=y(o,"H2",{class:!0});var u=P(e);t=y(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var x=P(t);c=b(x,l),x.forEach(f),r=N(u),d=y(u,"SPAN",{class:!0});var A=P(d);$=b(A,"["),p=b(A,g),k=b(A,"]"),A.forEach(f),u.forEach(f),i=N(o),s=y(o,"SPAN",{class:!0});var j=P(s);a=b(j,v),j.forEach(f),this.h()},h(){m(t,"sveltekit:prefetch",""),m(t,"href",n=`${H}/posts/${h[1].slug}`),m(t,"class","svelte-889x9q"),m(d,"class","post-date svelte-889x9q"),m(e,"class","svelte-889x9q"),m(s,"class","svelte-889x9q")},m(o,u){S(o,e,u),_(e,t),_(t,c),_(e,r),_(e,d),_(d,$),_(d,p),_(d,k),S(o,i,u),S(o,s,u),_(s,a)},p(o,u){u&1&&l!==(l=o[1].title+"")&&w(c,l),u&1&&n!==(n=`${H}/posts/${o[1].slug}`)&&m(t,"href",n),u&1&&g!==(g=o[1].date+"")&&w(p,g),u&1&&v!==(v=o[1].preview+"")&&w(a,v)},d(o){o&&f(e),o&&f(i),o&&f(s)}}}function G(h){let e,t,l,c,n,r,d;function $(s,v){return s[0].length>1?B:z}let g=$(h),p=g(h),k=h[0],i=[];for(let s=0;s<k.length;s+=1)i[s]=R(F(h,k,s));return{c(){e=I(),t=q("section"),l=q("div"),c=q("h1"),n=E("Facundo Wade"),r=I(),p.c(),d=I();for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){T('[data-svelte="svelte-re5dxk"]',document.head).forEach(f),e=N(s),t=y(s,"SECTION",{class:!0});var a=P(t);l=y(a,"DIV",{});var o=P(l);c=y(o,"H1",{class:!0});var u=P(c);n=b(u,"Facundo Wade"),u.forEach(f),r=N(o),p.l(o),o.forEach(f),d=N(a);for(let x=0;x<i.length;x+=1)i[x].l(a);a.forEach(f),this.h()},h(){document.title="Inicio",m(c,"class","svelte-889x9q"),m(t,"class","svelte-889x9q")},m(s,v){S(s,e,v),S(s,t,v),_(t,l),_(l,c),_(c,n),_(l,r),p.m(l,null),_(t,d);for(let a=0;a<i.length;a+=1)i[a].m(t,null)},p(s,[v]){if(g===(g=$(s))&&p?p.p(s,v):(p.d(1),p=g(s),p&&(p.c(),p.m(l,null))),v&1){k=s[0];let a;for(a=0;a<k.length;a+=1){const o=F(s,k,a);i[a]?i[a].p(o,v):(i[a]=R(o),i[a].c(),i[a].m(t,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=k.length}},i:C,o:C,d(s){s&&f(e),s&&f(t),p.d(),V(i,s)}}}const M=!0;let Q=0;async function U({params:h,fetch:e}){return{props:{posts:await e(`${H}/posts/get-posts`).then(l=>l.json())}}}function J(h,e,t){let{posts:l}=e;return h.$$set=c=>{"posts"in c&&t(0,l=c.posts)},[l]}class X extends W{constructor(e){super();D(this,e,J,G,O,{posts:0})}}export{Q as currentPage,X as default,U as load,M as prerender};
