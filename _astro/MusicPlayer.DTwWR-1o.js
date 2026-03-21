import{s as D,b as A,e as Ee,c as Ie,o as Qe,a as Ze}from"./attributes.Dtzc99bF.js";import{o as $e,w as et,a as tt,am as it,bk as nt,bl as rt,e as at,u as lt,bm as ot,bn as st,Y as ut,bo as ne,bp as Te,bq as Le,r as De,a9 as F,d as q,a7 as se,a8 as X,b as k,p as G,g as h,h as y,t as T,ac as I,i as p,f as C,j as E,ad as U,aa as le,a5 as Y,br as _e,s as ct,a6 as dt,aA as ft}from"./utils.BxiYbKr4.js";import{a as vt,s as K}from"./render.DhrDkOJH.js";import{i as V}from"./if.Cn7Knjab.js";import{b as gt}from"./this.CcEZh3RQ.js";import{I as S}from"./Icon.COLaWD8g.js";import{m as Z}from"./config.ClZRzpr9.js";import{I as R}from"./zh_TW.B395Vq90.js";import{i as M}from"./translation.twlkpUS2.js";import{p as j}from"./props.BbzzkLCY.js";import{a as mt}from"./actions.CI75ql0-.js";import{e as yt,i as ht}from"./each.vJlvG-dZ.js";function bt(t,e,i,n,l){$e&&et();var o=e.$$slots?.[i],b=!1;o===!0&&(o=e.children,b=!0),o===void 0||o(t,b?()=>n:n)}const xt=()=>performance.now(),O={tick:t=>requestAnimationFrame(t),now:()=>xt(),tasks:new Set};function Re(){const t=O.now();O.tasks.forEach(e=>{e.c(t)||(O.tasks.delete(e),e.f())}),O.tasks.size!==0&&O.tick(Re)}function wt(t){let e;return O.tasks.size===0&&O.tick(Re),{promise:new Promise(i=>{O.tasks.add(e={c:t,f:i})}),abort(){O.tasks.delete(e)}}}function oe(t,e){Te(()=>{t.dispatchEvent(new CustomEvent(e))})}function kt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function Pe(t){const e={},i=t.split(";");for(const n of i){const[l,o]=n.split(":");if(!l||o===void 0)break;const b=kt(l.trim());e[b]=o.trim()}return e}const _t=t=>t;function Pt(t,e,i,n){var l=(t&ot)!==0,o="both",b,r=e.inert,s=e.style.overflow,a,u;function d(){return Te(()=>b??=i()(e,n?.()??{},{direction:o}))}var f={is_global:l,in(){e.inert=r,a=ve(e,d(),u,1,()=>{oe(e,"introend"),a?.abort(),a=b=void 0,e.style.overflow=s})},out(_){e.inert=!0,u=ve(e,d(),a,0,()=>{oe(e,"outroend"),_?.()})},stop:()=>{a?.abort(),u?.abort()}},g=tt;if((g.nodes.t??=[]).push(f),vt){var w=l;if(!w){for(var c=g.parent;c&&(c.f&it)!==0;)for(;(c=c.parent)&&(c.f&nt)===0;);w=!c||(c.f&rt)!==0}w&&at(()=>{lt(()=>f.in())})}}function ve(t,e,i,n,l){var o=n===1;if(st(e)){var b,r=!1;return ut(()=>{if(!r){var _=e({direction:o?"in":"out"});b=ve(t,_,i,n,l)}}),{abort:()=>{r=!0,b?.abort()},deactivate:()=>b.deactivate(),reset:()=>b.reset(),t:()=>b.t()}}if(i?.deactivate(),!e?.duration&&!e?.delay)return oe(t,o?"introstart":"outrostart"),l(),{abort:ne,deactivate:ne,reset:ne,t:()=>n};const{delay:s=0,css:a,tick:u,easing:d=_t}=e;var f=[];if(o&&i===void 0&&(u&&u(0,1),a)){var g=Pe(a(0,1));f.push(g,g)}var w=()=>1-n,c=t.animate(f,{duration:s,fill:"forwards"});return c.onfinish=()=>{c.cancel(),oe(t,o?"introstart":"outrostart");var _=i?.t()??1-n;i?.abort();var v=n-_,L=e.duration*Math.abs(v),m=[];if(L>0){var P=!1;if(a)for(var H=Math.ceil(L/16.666666666666668),z=0;z<=H;z+=1){var J=_+v*d(z/H),te=Pe(a(J,1-J));m.push(te),P||=te.overflow==="hidden"}P&&(t.style.overflow="hidden"),w=()=>{var $=c.currentTime;return _+v*d($/L)},u&&wt(()=>{if(c.playState!=="running")return!1;var $=w();return u($,1-$),!0})}c=t.animate(m,{duration:L,fill:"forwards"}),c.onfinish=()=>{w=()=>n,u?.(n,1-n),l()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=ne)},deactivate:()=>{l=ne},reset:()=>{n===0&&u?.(1,0)},t:()=>w()}}function pt(t,e,i=e){var n=()=>{i(t.volume)};e()==null&&n(),Le(t,["volumechange"],n,!1),De(()=>{var l=Number(e());l!==t.volume&&!isNaN(l)&&(t.volume=l)})}function Ct(t,e,i=e){var n=()=>{i(t.muted)};e()==null&&n(),Le(t,["volumechange"],n,!1),De(()=>{var l=!!e();t.muted!==l&&(t.muted=l)})}var St=C('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),Et=C('<div class="orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95" role="button" tabindex="0"><!></div>'),It=C('<div role="button" tabindex="0"><img/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div>'),Tt=C("<div><img/></div>");function ge(t,e){q(e,!0);let i=j(e,"size",3,"mini"),n=j(e,"interactive",3,!1);function l(d){return d.startsWith("http://")||d.startsWith("https://")||d.startsWith("/")?d:`/${d}`}const o={mini:"cover-container relative w-12 h-12 rounded-full overflow-hidden",expanded:"cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"};var b=se(),r=X(b);{var s=d=>{var f=Et(),g=h(f);{var w=v=>{S(v,{icon:"eos-icons:loading",class:"text-white text-lg"})},c=v=>{var L=St();k(v,L)},_=v=>{S(v,{icon:"material-symbols:music-note",class:"text-white text-lg"})};V(g,v=>{e.isLoading?v(w):e.isPlaying?v(c,1):v(_,-1)})}y(f),T(v=>D(f,"aria-label",v),[()=>M(R.musicPlayerShow)]),I("click",f,function(...v){e.onclick?.apply(this,v)}),I("keydown",f,v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),e.onclick?.())}),k(d,f)},a=d=>{var f=It(),g=h(f);let w;var c=p(g,2),_=h(c);{var v=P=>{S(P,{icon:"eos-icons:loading",class:"text-white text-xl"})},L=P=>{S(P,{icon:"material-symbols:pause",class:"text-white text-xl"})},m=P=>{S(P,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};V(_,P=>{e.isLoading?P(v):e.isPlaying?P(L,1):P(m,-1)})}y(c),y(f),T((P,H,z)=>{A(f,1,`${o[i()]} cursor-pointer`,"svelte-9fvt81"),D(f,"aria-label",P),D(g,"src",H),D(g,"alt",z),w=A(g,1,"w-full h-full object-cover transition-transform duration-300 svelte-9fvt81",null,w,{spinning:e.isPlaying&&!e.isLoading,"animate-pulse":e.isLoading})},[()=>e.isPlaying?M(R.musicPlayerPause):M(R.musicPlayerPlay),()=>l(e.cover),()=>M(R.musicPlayerCover)]),I("click",f,function(...P){e.onclick?.apply(this,P)}),I("keydown",f,P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),e.onclick?.())}),k(d,f)},u=d=>{var f=Tt(),g=h(f);let w;y(f),T((c,_)=>{A(f,1,Ee(o[i()]),"svelte-9fvt81"),D(g,"src",c),D(g,"alt",_),w=A(g,1,"w-full h-full object-cover transition-transform duration-300 svelte-9fvt81",null,w,{spinning:e.isPlaying&&!e.isLoading,"animate-pulse":e.isLoading})},[()=>l(e.cover),()=>M(R.musicPlayerCover)]),k(d,f)};V(r,d=>{i()==="orb"?d(s):n()?d(a,1):d(u,-1)})}k(t,b),G()}F(["click","keydown"]);var Lt=C('<div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div>'),Dt=C('<div class="text-xs text-30 mt-1"> </div>'),Rt=C('<div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <!></div>');function pe(t,e){q(e,!0);let i=j(e,"showTime",3,!1),n=j(e,"size",3,"mini");function l(a){if(!Number.isFinite(a)||a<0)return"0:00";const u=Math.floor(a/60),d=Math.floor(a%60);return`${u}:${d.toString().padStart(2,"0")}`}var o=se(),b=X(o);{var r=a=>{var u=Lt(),d=h(u),f=h(d,!0);y(d);var g=p(d,2),w=h(g,!0);y(g),y(u),T(()=>{K(f,e.song.title),K(w,e.song.artist)}),k(a,u)},s=a=>{var u=Rt(),d=h(u),f=h(d,!0);y(d);var g=p(d,2),w=h(g,!0);y(g);var c=p(g,2);{var _=v=>{var L=Dt(),m=h(L);y(L),T((P,H)=>K(m,`${P??""} / ${H??""}`),[()=>l(e.currentTime),()=>l(e.duration)]),k(v,L)};V(c,v=>{i()&&v(_)})}y(u),T(()=>{K(f,e.song.title),K(w,e.song.artist)}),k(a,u)};V(b,a=>{n()==="mini"?a(r):a(s,-1)})}k(t,o),G()}var Mt=C('<!> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><!></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div>',1),At=C('<div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div>'),Vt=C("<!> <!> <!>",1),Ht=C("<div><!></div>");function Me(t,e){q(e,!0);let i=j(e,"size",3,"mini"),n=j(e,"showControls",3,!1),l=j(e,"showPlaylist",3,!1);var o=Ht(),b=h(o);{var r=a=>{var u=Mt(),d=X(u);ge(d,{get cover(){return e.song.cover},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"mini",interactive:!0,get onclick(){return e.onCoverClick}});var f=p(d,2),g=h(f);pe(g,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},size:"mini"}),y(f);var w=p(f,2),c=h(w),_=h(c);S(_,{icon:"material-symbols:visibility-off",class:"text-lg"}),y(c);var v=p(c,2),L=h(v);S(L,{icon:"material-symbols:expand-less",class:"text-lg"}),y(v),y(w),T((m,P)=>{D(f,"aria-label",m),D(c,"title",P)},[()=>M(R.musicPlayerExpand),()=>M(R.musicPlayerHide)]),I("click",f,function(...m){e.onInfoClick?.apply(this,m)}),I("keydown",f,m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),e.onInfoClick?.())}),I("click",c,m=>{m.stopPropagation(),e.onHideClick?.()}),I("click",v,m=>{m.stopPropagation(),e.onExpandClick?.()}),k(a,u)},s=a=>{var u=Vt(),d=X(u);ge(d,{get cover(){return e.song.cover},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"expanded"});var f=p(d,2);pe(f,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},showTime:!0,size:"expanded"});var g=p(f,2);{var w=c=>{var _=At(),v=h(_),L=h(v);S(L,{icon:"material-symbols:visibility-off",class:"text-lg"}),y(v);var m=p(v,2);let P;var H=h(m);S(H,{icon:"material-symbols:queue-music",class:"text-lg"}),y(m),y(_),T((z,J)=>{D(v,"title",z),P=A(m,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,P,{"text-[var(--primary)]":l()}),D(m,"title",J)},[()=>M(R.musicPlayerHide),()=>M(R.musicPlayerPlaylist)]),I("click",v,function(...z){e.onHideClick?.apply(this,z)}),I("click",m,function(...z){e.onPlaylistClick?.apply(this,z)}),k(c,_)};V(g,c=>{n()&&c(w)})}k(a,u)};V(b,a=>{i()==="mini"?a(r):a(s,-1)})}y(o),T(()=>A(o,1,Ee(i()==="mini"?"flex items-center gap-3 mb-0":"flex items-center gap-4 mb-4"))),k(t,o),G()}F(["click","keydown"]);var zt=C("<div><!></div>");function Ft(t,e){var i=zt();let n;var l=h(i);Me(l,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"mini",get onCoverClick(){return e.onCoverClick},get onInfoClick(){return e.onInfoClick},get onHideClick(){return e.onHideClick},get onExpandClick(){return e.onExpandClick}}),y(i),T(()=>n=A(i,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 absolute bottom-0 right-0 w-[17.5rem] svelte-g9ac72",null,n,{"mini-enter":!e.isHidden,"mini-leave":e.isHidden,"pointer-events-none":e.isHidden})),k(t,i)}var Nt=C('<div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>');function Bt(t,e){q(e,!0);var i=Nt(),n=h(i);y(i),T(l=>{D(i,"aria-label",l),D(i,"aria-valuenow",e.duration>0?e.currentTime/e.duration*100:0),Ie(n,`width: ${e.duration>0?e.currentTime/e.duration*100:0}%`)},[()=>M(R.musicPlayerProgress)]),I("click",i,function(...l){e.onclick?.apply(this,l)}),I("keydown",i,function(...l){e.onkeydown?.apply(this,l)}),k(t,i),G()}F(["click","keydown"]);var jt=C('<div class="progress-section mb-4"><!></div>');function Kt(t,e){var i=jt(),n=h(i);Bt(n,{get currentTime(){return e.currentTime},get duration(){return e.duration},get onclick(){return e.onProgressClick},get onkeydown(){return e.onProgressKeyDown}}),y(i),k(t,i)}var Ot=C("<button><!></button>");function Ut(t,e){var i=Ot();let n;var l=h(i);{var o=s=>{S(s,{icon:"eos-icons:loading",class:"text-xl"})},b=s=>{S(s,{icon:"material-symbols:pause",class:"text-xl"})},r=s=>{S(s,{icon:"material-symbols:play-arrow",class:"text-xl"})};V(l,s=>{e.isLoading?s(o):e.isPlaying?s(b,1):s(r,-1)})}y(i),T(()=>{n=A(i,1,"btn-regular w-12 h-12 rounded-full",null,n,{"opacity-50":e.isLoading}),i.disabled=e.isLoading}),I("click",i,function(...s){e.onclick?.apply(this,s)}),k(t,i)}F(["click"]);var Wt=C('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>');function Yt(t,e){let i=j(e,"disabled",3,!1);var n=Wt(),l=h(n);S(l,{icon:"material-symbols:skip-previous",class:"text-xl"}),y(n),T(()=>n.disabled=i()),I("click",n,function(...o){e.onclick?.apply(this,o)}),k(t,n)}F(["click"]);var Xt=C('<button class="btn-plain w-10 h-10 rounded-lg"><!></button>');function qt(t,e){let i=j(e,"disabled",3,!1);var n=Xt(),l=h(n);S(l,{icon:"material-symbols:skip-next",class:"text-xl"}),y(n),T(()=>n.disabled=i()),I("click",n,function(...o){e.onclick?.apply(this,o)}),k(t,n)}F(["click"]);var Gt=C("<button><!></button>"),Jt=C("<button><!></button>");function Ce(t,e){let i=j(e,"repeatMode",3,0),n=j(e,"disabled",3,!1);var l=se(),o=X(l);{var b=s=>{var a=Gt();let u;var d=h(a);S(d,{icon:"material-symbols:shuffle",class:"text-lg"}),y(a),T(()=>{u=A(a,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":e.isActive,"btn-plain":!e.isActive}),a.disabled=n()}),I("click",a,function(...f){e.onclick?.apply(this,f)}),k(s,a)},r=s=>{var a=Jt();let u;var d=h(a);{var f=c=>{S(c,{icon:"material-symbols:repeat-one",class:"text-lg"})},g=c=>{S(c,{icon:"material-symbols:repeat",class:"text-lg"})},w=c=>{S(c,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};V(d,c=>{i()===1?c(f):i()===2?c(g,1):c(w,-1)})}y(a),T(()=>u=A(a,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":e.isActive,"btn-plain":!e.isActive})),I("click",a,function(...c){e.onclick?.apply(this,c)}),k(s,a)};V(o,s=>{e.mode==="shuffle"?s(b):s(r,-1)})}k(t,l)}F(["click"]);var Qt=C('<div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <!> <!> <!></div>');function Zt(t,e){var i=Qt(),n=h(i);{let s=U(()=>!e.canSkip);Ce(n,{mode:"shuffle",get isActive(){return e.isShuffled},get onclick(){return e.onShuffleClick},get disabled(){return E(s)}})}var l=p(n,2);{let s=U(()=>!e.canSkip);Yt(l,{get onclick(){return e.onPrevClick},get disabled(){return E(s)}})}var o=p(l,2);Ut(o,{get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},get onclick(){return e.onPlayClick}});var b=p(o,2);{let s=U(()=>!e.canSkip);qt(b,{get onclick(){return e.onNextClick},get disabled(){return E(s)}})}var r=p(b,2);{let s=U(()=>e.isRepeating>0);Ce(r,{mode:"repeat",get isActive(){return E(s)},get repeatMode(){return e.isRepeating},get onclick(){return e.onRepeatClick}})}y(i),k(t,i)}var $t=C('<button class="btn-plain w-8 h-8 rounded-lg"><!></button>');function ei(t,e){var i=$t(),n=h(i);{var l=r=>{S(r,{icon:"material-symbols:volume-off",class:"text-lg"})},o=r=>{S(r,{icon:"material-symbols:volume-down",class:"text-lg"})},b=r=>{S(r,{icon:"material-symbols:volume-up",class:"text-lg"})};V(n,r=>{e.isMuted||e.volume===0?r(l):e.volume<.5?r(o,1):r(b,-1)})}y(i),I("click",i,function(...r){e.onclick?.apply(this,r)}),k(t,i)}F(["click"]);var ti=C('<div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div>');function ii(t,e){var i=ti(),n=h(i);let l;y(i),mt(i,o=>e.volumeBarRef?.(o)),T(()=>{D(i,"aria-label",e.ariaLabel),D(i,"aria-valuenow",e.volume*100),l=A(n,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,l,{"duration-100":!e.isVolumeDragging,"duration-0":e.isVolumeDragging}),Ie(n,`width: ${e.volume*100}%`)}),I("pointerdown",i,function(...o){e.onpointerdown?.apply(this,o)}),I("keydown",i,function(...o){e.onkeydown?.apply(this,o)}),k(t,i)}F(["pointerdown","keydown"]);var ni=C('<div class="bottom-controls flex items-center gap-2"><!> <!> <!></div>');function ri(t,e){var i=ni(),n=h(i);ei(n,{get volume(){return e.volume},get isMuted(){return e.isMuted},get onclick(){return e.onVolumeButtonClick}});var l=p(n,2);ii(l,{get volume(){return e.volume},get isVolumeDragging(){return e.isVolumeDragging},get volumeBarRef(){return e.volumeBarRef},get onpointerdown(){return e.onSliderPointerDown},get onkeydown(){return e.onSliderKeyDown},get ariaLabel(){return e.ariaLabel}});var o=p(l,2);bt(o,e,"default",{}),y(i),k(t,i)}var ai=C('<button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button>'),li=C("<div><!> <!> <!> <!></div>");function oi(t,e){q(e,!0);var i=li();let n;var l=h(i);Me(l,{get song(){return e.song},get currentTime(){return e.currentTime},get duration(){return e.duration},get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},size:"expanded",showControls:!0,get showPlaylist(){return e.showPlaylist},get onHideClick(){return e.onHideClick},get onPlaylistClick(){return e.onPlaylistClick}});var o=p(l,2);Kt(o,{get currentTime(){return e.currentTime},get duration(){return e.duration},get onProgressClick(){return e.onProgressClick},get onProgressKeyDown(){return e.onProgressKeyDown}});var b=p(o,2);Zt(b,{get isPlaying(){return e.isPlaying},get isLoading(){return e.isLoading},get isShuffled(){return e.isShuffled},get isRepeating(){return e.isRepeating},get canSkip(){return e.canSkip},get onPlayClick(){return e.onPlayClick},get onPrevClick(){return e.onPrevClick},get onNextClick(){return e.onNextClick},get onShuffleClick(){return e.onShuffleClick},get onRepeatClick(){return e.onRepeatClick}});var r=p(b,2);{let s=U(()=>M(R.musicPlayerVolume));ri(r,{get volume(){return e.volume},get isMuted(){return e.isMuted},get isVolumeDragging(){return e.isVolumeDragging},get volumeBarRef(){return e.volumeBarRef},get onVolumeButtonClick(){return e.onVolumeButtonClick},get onSliderPointerDown(){return e.onSliderPointerDown},get onSliderKeyDown(){return e.onSliderKeyDown},get ariaLabel(){return E(s)},children:(a,u)=>{var d=ai(),f=h(d);S(f,{icon:"material-symbols:expand-more",class:"text-lg"}),y(d),T(g=>D(d,"title",g),[()=>M(R.musicPlayerCollapse)]),I("click",d,function(...g){e.onCollapseClick?.apply(this,g)}),k(a,d)},$$slots:{default:!0}})}y(i),T(()=>n=A(i,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out absolute bottom-0 right-0 w-80",null,n,{"opacity-0":e.isHidden,"scale-95":e.isHidden,"pointer-events-none":e.isHidden})),k(t,i),G()}F(["click"]);function si(t){const e=t-1;return e*e*e+1}function ui(t,{delay:e=0,duration:i=400,easing:n=si,axis:l="y"}={}){const o=getComputedStyle(t),b=+o.opacity,r=l==="y"?"height":"width",s=parseFloat(o[r]),a=l==="y"?["top","bottom"]:["left","right"],u=a.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),d=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),g=parseFloat(o[`margin${u[0]}`]),w=parseFloat(o[`margin${u[1]}`]),c=parseFloat(o[`border${u[0]}Width`]),_=parseFloat(o[`border${u[1]}Width`]);return{delay:e,duration:i,easing:n,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*b};${r}: ${v*s}px;padding-${a[0]}: ${v*d}px;padding-${a[1]}: ${v*f}px;margin-${a[0]}: ${v*g}px;margin-${a[1]}: ${v*w}px;border-${a[0]}-width: ${v*c}px;border-${a[1]}-width: ${v*_}px;min-${r}: 0`}}var ci=C('<span class="text-sm text-[var(--content-meta)]"> </span>'),di=C('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>');function fi(t,e){q(e,!0);function i(m){return m.startsWith("http://")||m.startsWith("https://")||m.startsWith("/")?m:`/${m}`}var n=di();let l;var o=h(n),b=h(o);{var r=m=>{S(m,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},s=m=>{S(m,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},a=m=>{var P=ci(),H=h(P,!0);y(P),T(()=>K(H,e.index+1)),k(m,P)};V(b,m=>{e.isCurrent&&e.isPlaying?m(r):e.isCurrent?m(s,1):m(a,-1)})}y(o);var u=p(o,2),d=h(u);y(u);var f=p(u,2),g=h(f);let w;var c=h(g,!0);y(g);var _=p(g,2);let v;var L=h(_,!0);y(_),y(f),y(n),T(m=>{l=A(n,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,l,{"bg-[var(--btn-plain-bg)]":e.isCurrent,"text-[var(--primary)]":e.isCurrent}),D(n,"aria-label",`播放 ${e.song.title??""} - ${e.song.artist??""}`),D(d,"src",m),D(d,"alt",e.song.title),w=A(g,1,"font-medium truncate",null,w,{"text-[var(--primary)]":e.isCurrent,"text-90":!e.isCurrent}),K(c,e.song.title),v=A(_,1,"text-sm text-[var(--content-meta)] truncate",null,v,{"text-[var(--primary)]":e.isCurrent}),K(L,e.song.artist)},[()=>i(e.song.cover)]),I("click",n,function(...m){e.onclick?.apply(this,m)}),I("keydown",n,m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),e.onclick())}),k(t,n),G()}F(["click","keydown"]);var vi=C('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>');function gi(t,e){q(e,!0);var i=se(),n=X(i);{var l=o=>{var b=vi(),r=h(b),s=h(r),a=h(s,!0);y(s);var u=p(s,2),d=h(u);S(d,{icon:"material-symbols:close",class:"text-lg"}),y(u),y(r);var f=p(r,2);yt(f,21,()=>e.playlist,ht,(g,w,c)=>{{let _=U(()=>c===e.currentIndex);fi(g,{get song(){return E(w)},index:c,get isCurrent(){return E(_)},get isPlaying(){return e.isPlaying},onclick:()=>e.onPlaySong(c)})}}),y(f),y(b),T(g=>K(a,g),[()=>M(R.musicPlayerPlaylist)]),I("click",u,function(...g){e.onClose?.apply(this,g)}),Pt(3,b,()=>ui,()=>({duration:300,axis:"y"})),k(o,b)};V(n,o=>{e.show&&o(l)})}k(t,i),G()}F(["click"]);const Ae="music-player-volume",mi=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}],yi={title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0,id:0},hi=3e3,bi=1e3;function xi(){return{isPlaying:!1,currentTime:0,duration:0,volume:.7,isMuted:!1,isLoading:!1,currentSong:yi,autoplayFailed:!1,willAutoPlay:!1}}function wi(t,e){!e||!t.currentSong.url||(t.isPlaying?e.pause():e.play().catch(()=>{}))}function ki(t){t.isMuted=!t.isMuted}function _i(t,e){if(t.isLoading=!1,e?.duration&&e.duration>1&&(t.duration=Math.floor(e.duration),t.currentSong={...t.currentSong,duration:t.duration}),t.willAutoPlay||t.isPlaying){const i=e?.play();i!==void 0&&i.catch(n=>{console.warn("自动播放被拦截，等待用户交互:",n),t.autoplayFailed=!0,t.isPlaying=!1})}}function Pi(t){return t.currentSong.url?(t.isLoading=!1,{shouldContinue:t.isPlaying||t.willAutoPlay}):{shouldContinue:!1}}function re(t,e,i=!0){e&&(e.url!==t.currentSong.url&&(t.currentSong={...e},e.url?t.isLoading=!0:t.isLoading=!1),t.willAutoPlay=i)}function pi(t,e){if(t.autoplayFailed&&e){const i=e.play();i!==void 0&&i.then(()=>{t.autoplayFailed=!1}).catch(()=>{})}}function Ci(t){let e=t.name??t.title??M(R.unknownSong),i=t.artist??t.author??M(R.unknownArtist),n=t.duration??0;return typeof n=="string"&&(n=parseInt(n,10)),n>1e4&&(n=Math.floor(n/1e3)),(!Number.isFinite(n)||n<=0)&&(n=0),{id:typeof t.id=="string"?parseInt(t.id,10):t.id??0,title:e,artist:i,cover:t.pic??"",url:t.url??"",duration:n}}function Si(){return{playlist:[],currentIndex:0,isShuffled:!1,isRepeating:0}}function Ei(t){t.isShuffled=!t.isShuffled,t.isShuffled&&(t.isRepeating=0)}function Ii(t){t.isRepeating=(t.isRepeating+1)%3,t.isRepeating!==0&&(t.isShuffled=!1)}function Ti(t){return t.playlist.length<=1?t.currentIndex:t.currentIndex>0?t.currentIndex-1:t.playlist.length-1}function Li(t,e=!0){if(t.playlist.length<=1)return t.currentIndex;let i;if(t.isShuffled)do i=Math.floor(Math.random()*t.playlist.length);while(i===t.currentIndex&&t.playlist.length>1);else i=t.currentIndex<t.playlist.length-1?t.currentIndex+1:0;return i}function fe(t,e){return e<0||e>=t.playlist.length?!1:(t.currentIndex=e,!0)}async function Di(t,e,i,n,l,o,b,r){if(!e||!l)return;o();const s=e.replace(":server",i).replace(":type",n).replace(":id",l).replace(":auth","").replace(":r",Date.now().toString());try{const a=await fetch(s);if(!a.ok)throw new Error("meting api error");const u=await a.json();t.playlist=u.map(Ci),b()}catch{r(M(R.musicPlayerErrorPlaylist)),b()}}function Ri(t,e){return t.playlist=[...mi],t.playlist.length===0?(e("本地播放列表为空"),!1):!0}function Mi(t){return t.playlist.length>1}const Se=["click","keydown","touchstart"],Ai=typeof document<"u";function Vi(t){return Ai?(Se.forEach(e=>{document.addEventListener(e,t,{capture:!0})}),()=>{Se.forEach(e=>{document.removeEventListener(e,t,{capture:!0})})}):()=>{}}function Hi(t){return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("/")?t:`/${t}`}function zi(){return{isExpanded:!1,isHidden:!1,showPlaylist:!1,errorMessage:"",showError:!1}}function Fi(t){t.isExpanded=!t.isExpanded,t.isExpanded&&(t.showPlaylist=!1,t.isHidden=!1)}function Ni(t){t.isHidden=!t.isHidden,t.isHidden&&(t.isExpanded=!1,t.showPlaylist=!1)}function Bi(t){t.showPlaylist=!t.showPlaylist}function ji(t,e){t.errorMessage=e,t.showError=!0,setTimeout(()=>{t.showError=!1},hi)}function Ki(t){t.showError=!1}function Oi(){return{isVolumeDragging:!1,isPointerDown:!1,volumeBarRect:null,rafId:null}}function Ui(t){try{if(typeof localStorage<"u"){const e=localStorage.getItem(Ae);e!==null&&!isNaN(parseFloat(e))&&(t.volume=parseFloat(e))}}catch(e){console.warn("Failed to load volume settings from localStorage:",e)}}function Wi(t){try{typeof localStorage<"u"&&localStorage.setItem(Ae,t.volume.toString())}catch(e){console.warn("Failed to save volume settings to localStorage:",e)}}function Ve(t,e,i,n,l){if(!n||!i)return;const o=e.volumeBarRect||i.getBoundingClientRect(),b=Math.max(0,Math.min(1,(t-o.left)/o.width));l.volume=b}function Yi(t,e,i,n,l){i&&(t.preventDefault(),e.isPointerDown=!0,i.setPointerCapture(t.pointerId),e.volumeBarRect=i.getBoundingClientRect(),Ve(t.clientX,e,i,n,l))}function Xi(t,e,i,n,l){e.isPointerDown&&(t.preventDefault(),e.isVolumeDragging=!0,!e.rafId&&(e.rafId=requestAnimationFrame(()=>{Ve(t.clientX,e,i,n,l),e.rafId=null})))}function qi(t,e,i,n){e.isPointerDown&&(e.isPointerDown=!1,e.isVolumeDragging=!1,e.volumeBarRect=null,i&&i.releasePointerCapture(t.pointerId),e.rafId&&(cancelAnimationFrame(e.rafId),e.rafId=null),Wi(n))}function Gi(t,e){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.key==="Enter"&&e())}var Ji=C('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Qi=C(`<!> <div><div><!></div> <!> <!> <!></div> <style>.orb-player-container {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		.orb-enter {
			animation: orbElasticIn 460ms cubic-bezier(0.22, 1.25, 0.36, 1)
				forwards;
		}

		.orb-leave {
			animation: orbElasticOut 360ms cubic-bezier(0.4, 0, 1, 1) forwards;
		}

		@keyframes orbElasticIn {
			0% {
				opacity: 0;
				transform: translateX(0) scale(0.55);
			}
			70% {
				opacity: 1;
				transform: translateX(0) scale(1.12);
			}
			100% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
		}

		@keyframes orbElasticOut {
			0% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
			100% {
				opacity: 0;
				transform: translateX(0) scale(0.6);
			}
		}

		.music-player.hidden-mode {
			width: 3rem;
			height: 3rem;
		}

		.music-player {
			width: 20rem;
			max-width: 20rem;
			min-width: 20rem;
			-webkit-user-select: none;
			   -moz-user-select: none;
			        user-select: none;
		}

		:global(.mini-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.expanded-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.orb-player) {
			position: relative;
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}

		:global(.orb-player::before) {
			content: "";
			position: absolute;
			inset: -0.125rem;
			background: linear-gradient(
				45deg,
				var(--primary),
				transparent,
				var(--primary)
			);
			border-radius: 50%;
			z-index: -1;
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		:global(.orb-player:hover::before) {
			opacity: 0.3;
			animation: rotate 2s linear infinite;
		}

		:global(.orb-player .animate-pulse) {
			animation: musicWave 1.5s ease-in-out infinite;
		}

		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@keyframes musicWave {
			0%,
			100% {
				transform: scaleY(0.5);
			}
			50% {
				transform: scaleY(1);
			}
		}

		:global(.animate-pulse) {
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}

		@keyframes pulse {
			0%,
			100% {
				opacity: 1;
			}
			50% {
				opacity: 0.5;
			}
		}

		:global(.progress-section div:hover),
		:global(.bottom-controls > div:hover) {
			transform: scaleY(1.2);
			transition: transform 0.2s ease;
		}

		@media (max-width: 768px) {
			.music-player {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				bottom: 0.5rem !important;
				right: 0.5rem !important;
			}
			:global(.mini-player) {
				width: 280px !important;
			}
			:global(.expanded-player) {
				width: calc(100vw - 16px);
				max-width: none;
			}
			.music-player.expanded {
				width: calc(100vw - 16px);
				min-width: calc(100vw - 16px);
				max-width: none;
				right: 0.5rem !important;
			}
			:global(.playlist-panel) {
				width: calc(100vw - 16px) !important;
				right: 0.5rem !important;
				max-width: none;
			}
			:global(.controls) {
				gap: 8px;
			}
			:global(.controls button) {
				width: 36px;
				height: 36px;
			}
			:global(.controls button:nth-child(3)) {
				width: 44px;
				height: 44px;
			}
		}

		@media (max-width: 480px) {
			.music-player {
				width: 260px;
				min-width: 260px;
				max-width: 260px;
			}
			:global(.song-title) {
				font-size: 14px;
			}
			:global(.song-artist) {
				font-size: 12px;
			}
			:global(.controls) {
				gap: 6px;
				margin-bottom: 12px;
			}
			:global(.controls button) {
				width: 32px;
				height: 32px;
			}
			:global(.controls button:nth-child(3)) {
				width: 40px;
				height: 40px;
			}
			:global(.playlist-item) {
				padding: 8px 12px;
			}
			:global(.playlist-item .w-10) {
				width: 32px;
				height: 32px;
			}
		}

		@keyframes slide-up {
			from {
				transform: translateY(100%);
				opacity: 0;
			}
			to {
				transform: translateY(0);
				opacity: 1;
			}
		}

		.animate-slide-up {
			animation: slide-up 0.3s ease-out;
		}

		@media (hover: none) and (pointer: coarse) {
			:global(.music-player button),
			:global(.playlist-item) {
				min-height: 44px;
			}
			:global(.progress-section > div),
			:global(.bottom-controls > div:nth-child(2)) {
				height: 12px;
			}
		}

		@keyframes spin-continuous {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		:global(.cover-container img) {
			animation: spin-continuous 3s linear infinite;
			animation-play-state: paused;
		}

		:global(.cover-container img.spinning) {
			animation-play-state: running;
		}

		:global(button.bg-\\\\[var\\\\(--primary\\\\)\\\\]) {
			box-shadow: 0 0 0 2px var(--primary);
			border: none;
		}</style>`,1),Zi=C('<audio preload="auto"></audio> <!>',1);function fn(t,e){q(e,!0);let i=Z.mode??"meting",n=Z.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",l=Z.id??"14164869977",o=Z.server??"netease",b=Z.type??"playlist",r=le(xi()),s=le(Si()),a=le(zi()),u=dt(void 0),d=null,f=le(Oi());function g(x){ji(a,x)}function w(){Ki(a)}function c(){Fi(a)}function _(){Ni(a)}function v(){Bi(a)}function L(){Ei(s)}function m(){Ii(s)}function P(){const x=Ti(s);x!==-1&&(fe(s,x),re(r,s.playlist[x],r.isPlaying))}function H(x=!0){const N=Li(s,r.isPlaying);N!==-1&&(fe(s,N),re(r,s.playlist[N],x))}function z(x){fe(s,x)&&re(r,s.playlist[x],!0)}function J(){wi(r,E(u))}function te(){ki(r)}function $(){_i(r,E(u))}function He(x){const N=Pi(r);g(M(R.musicPlayerErrorSong)),N.shouldContinue&&s.playlist.length>1?setTimeout(()=>H(!0),bi):s.playlist.length<=1&&g(M(R.musicPlayerErrorEmpty))}function ze(){s.isRepeating===1?E(u)&&(E(u).currentTime=0,E(u).play().catch(()=>{})):H(!0)}function Fe(x){const N=x.currentTarget;if(!E(u)||!N)return;const W=N.getBoundingClientRect(),ee=(x.clientX-W.left)/W.width*r.duration;E(u).currentTime=ee,r.currentTime=ee}function Ne(x){if(x.key==="Enter"||x.key===" "){x.preventDefault();const W=.5*r.duration;E(u)&&(E(u).currentTime=W,r.currentTime=W)}}function Be(x){Yi(x,f,d,E(u),r)}function je(x){Xi(x,f,d,E(u),r)}function Ke(x){qi(x,f,d,r)}function Oe(x){Gi(x,te)}let ue;Qe(()=>{Ui(r),ue=Vi(()=>pi(r,E(u))),Z.enable&&(i==="meting"?Di(s,n,o,b,l,()=>{r.isLoading=!0},()=>{r.isLoading=!1},g).then(()=>{s.playlist.length>0&&re(r,s.playlist[0],!1)}):Ri(s,g)&&re(r,s.playlist[0],!1))}),Ze(()=>{ue&&ue()});function Ue(x){d=x}var me=Zi();Y("pointermove",_e,je),Y("pointerup",_e,Ke);var B=X(me);gt(B,x=>ct(u,x),()=>E(u));var We=p(B,2);{var Ye=x=>{var N=Qi(),W=X(N);{var ye=Q=>{var ie=Ji(),we=h(ie),ke=h(we);S(ke,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var ce=p(ke,2),Ge=h(ce,!0);y(ce);var de=p(ce,2),Je=h(de);S(Je,{icon:"material-symbols:close",class:"text-lg"}),y(de),y(we),y(ie),T(()=>K(Ge,a.errorMessage)),I("click",de,w),k(Q,ie)};V(W,Q=>{a.showError&&Q(ye)})}var ee=p(W,2);let he;var ae=h(ee),Xe=h(ae);ge(Xe,{get cover(){return r.currentSong.cover},get isPlaying(){return r.isPlaying},get isLoading(){return r.isLoading},size:"orb",onclick:_}),y(ae);var be=p(ae,2);{let Q=U(()=>a.isExpanded||a.isHidden);Ft(be,{get song(){return r.currentSong},get currentTime(){return r.currentTime},get duration(){return r.duration},get isPlaying(){return r.isPlaying},get isLoading(){return r.isLoading},get isHidden(){return E(Q)},onCoverClick:J,onInfoClick:c,onHideClick:_,onExpandClick:c})}var xe=p(be,2);{let Q=U(()=>Mi(s)),ie=U(()=>!a.isExpanded);oi(xe,{get song(){return r.currentSong},get currentTime(){return r.currentTime},get duration(){return r.duration},get isPlaying(){return r.isPlaying},get isLoading(){return r.isLoading},get isShuffled(){return s.isShuffled},get isRepeating(){return s.isRepeating},get showPlaylist(){return a.showPlaylist},get canSkip(){return E(Q)},get volume(){return r.volume},get isMuted(){return r.isMuted},get isVolumeDragging(){return f.isVolumeDragging},get isHidden(){return E(ie)},volumeBarRef:Ue,onPlayClick:J,onPrevClick:P,onNextClick:()=>H(),onShuffleClick:L,onRepeatClick:m,onProgressClick:Fe,onProgressKeyDown:Ne,onVolumeButtonClick:te,onSliderPointerDown:Be,onSliderKeyDown:Oe,onHideClick:_,onPlaylistClick:v,onCollapseClick:c})}var qe=p(xe,2);gi(qe,{get playlist(){return s.playlist},get currentIndex(){return s.currentIndex},get isPlaying(){return r.isPlaying},get show(){return a.showPlaylist},onClose:v,onPlaySong:z}),y(ee),ft(2),T(()=>{he=A(ee,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,he,{expanded:a.isExpanded,"hidden-mode":a.isHidden}),A(ae,1,`orb-player-container ${a.isHidden?"orb-enter pointer-events-auto":"orb-leave pointer-events-none"}`)}),k(x,N)};V(We,x=>{Z.enable&&x(Ye)})}T(x=>D(B,"src",x),[()=>Hi(r.currentSong.url)]),Y("play",B,()=>r.isPlaying=!0),Y("pause",B,()=>r.isPlaying=!1),Y("timeupdate",B,()=>{E(u)&&(r.currentTime=E(u).currentTime)}),Y("ended",B,ze),Y("error",B,He),Y("loadeddata",B,$),pt(B,()=>r.volume,x=>r.volume=x),Ct(B,()=>r.isMuted,x=>r.isMuted=x),k(t,me),G()}F(["click"]);export{fn as default};
