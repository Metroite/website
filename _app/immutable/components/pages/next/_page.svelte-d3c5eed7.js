import{S as N,i as P,s as L,k as i,a as y,K as S,l as d,h as s,c as M,m as f,n as l,E as n,b as B,B as x,o as b,N as C}from"../../../chunks/index-5fb8b1eb.js";const{document:I}=C;function $(w){let a,h,o,t,e,u,p,m,g,_,T,v;return{c(){a=i("meta"),h=y(),o=i("section"),t=i("h1"),e=i("div"),u=i("p"),p=y(),m=i("p"),g=y(),_=i("p"),T=y(),v=i("p"),this.h()},l(c){const E=S("svelte-vxzyi1",I.head);a=d(E,"META",{name:!0,content:!0}),E.forEach(s),h=M(c),o=d(c,"SECTION",{class:!0});var D=f(o);t=d(D,"H1",{class:!0});var H=f(t);e=d(H,"DIV",{class:!0});var r=f(e);u=d(r,"P",{id:!0}),f(u).forEach(s),p=M(r),m=d(r,"P",{id:!0}),f(m).forEach(s),g=M(r),_=d(r,"P",{id:!0}),f(_).forEach(s),T=M(r),v=d(r,"P",{id:!0}),f(v).forEach(s),r.forEach(s),H.forEach(s),D.forEach(s),this.h()},h(){I.title="Next",l(a,"name","description"),l(a,"content","Next update countdown"),l(u,"id","days"),l(m,"id","hours"),l(_,"id","mins"),l(v,"id","secs"),l(e,"class","rainbowText svelte-1lfhta"),l(t,"class","svelte-1lfhta"),l(o,"class","svelte-1lfhta")},m(c,E){n(I.head,a),B(c,h,E),B(c,o,E),n(o,t),n(t,e),n(e,u),n(e,p),n(e,m),n(e,g),n(e,_),n(e,T),n(e,v)},p:x,i:x,o:x,d(c){s(a),c&&s(h),c&&s(o)}}}function k(w){return b(()=>{const a=new Date("Nov 12, 2022 21:00:00").getTime();function h(){let o=new Date().getTime(),t=a-o,e=Math.floor(t/(1e3*60*60*24)),u=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(t%(1e3*60*60)/(1e3*60)),m=Math.floor(t%(1e3*60)/1e3);document.getElementById("days").innerHTML=e+"D ",document.getElementById("hours").innerHTML=u+"H ",document.getElementById("mins").innerHTML=p+"M ",document.getElementById("secs").innerHTML=m+"S "}h(),setInterval(h,1e3)}),[]}class z extends N{constructor(a){super(),P(this,a,k,$,L,{})}}export{z as default};
