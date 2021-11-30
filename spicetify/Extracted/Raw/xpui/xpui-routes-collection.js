"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[309],{30310:(e,t,r)=>{r.d(t,{g:()=>b});var n=r(67294),a=r.n(n),l=r(94184),s=r.n(l),c=r(63926),o=r(52687);const i=({renderItems:e,nrItems:t,estimatedItemMaxHeight:r,scrollNodeRef:l,nrRowsOverscan:s=5})=>{const i=(0,n.useRef)(null),u=(0,n.useRef)(null),m=(0,n.useRef)(null),d=(0,n.useRef)(0),f=(0,n.useRef)({rowCount:0,rowHeight:r,columnCount:1}),[g,p]=(0,n.useState)({firstItemToRender:0,lastItemToRender:-1}),E=(0,n.useCallback)(((e,t)=>{const r=l.current;if(!r)return;const n=Math.floor(r.offsetHeight/t)+2*s;f.current={rowCount:n,rowHeight:t,columnCount:e}}),[s,l]),h=(0,n.useCallback)((()=>{const e=l.current;if(!e)return;const r=Math.floor((e.scrollTop-d.current)/f.current.rowHeight),n=Math.max(r-s,0),a=n*f.current.columnCount,c=Math.min((n+f.current.rowCount-1)*f.current.columnCount-1,t-1);a===g.firstItemToRender&&c===g.lastItemToRender||p({firstItemToRender:a,lastItemToRender:c})}),[g.firstItemToRender,g.lastItemToRender,t,s,l]),b=(0,n.useCallback)(((t,r,n)=>{const a=n+c.w;return a!==f.current.rowHeight&&t>0&&(E(t,a),h()),e(g.firstItemToRender,g.lastItemToRender,t)}),[E,g.firstItemToRender,g.lastItemToRender,h,e]);(0,n.useEffect)((()=>{const e=m.current,t=l.current;e&&t&&(d.current=e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop)}),[l]),(0,n.useEffect)((()=>{if(!window.IntersectionObserver)return()=>{};const e=new window.IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&h()}))}));return i.current&&e.observe(i.current),u.current&&e.observe(u.current),()=>{e.disconnect()}}),[h]);const y=Math.ceil(t/f.current.columnCount),v=Math.min(y*f.current.rowHeight,f.current.rowHeight*(s-2)),C=f.current.rowHeight*(g.firstItemToRender/f.current.columnCount),w=g.lastItemToRender/f.current.columnCount+1<y?f.current.rowHeight*(y-f.current.rowCount)-C:0;return a().createElement("div",{ref:m,className:o.Z.wrapper,style:{height:y*f.current.rowHeight+"px"}},a().createElement("div",{ref:i,className:o.Z.topSentinel,style:{height:`${C+v}px`}},a().createElement("div",{style:{height:`${v}px`}})),a().createElement("div",{style:{transform:`translateY(${C}px)`}},a().createElement(c.T,{columnAware:!0,rowAware:!0,render:b})),a().createElement("div",{ref:u,className:o.Z.bottomSentinel,style:{height:`${w+v}px`}},a().createElement("div",{style:{height:`${v}px`}})))};var u=r(59713),m=r.n(u);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(){const e=(e,t)=>{switch(t.type){case"INVALIDATE":return f(f({},e),{},{isValid:!1});case"CACHE_ITEMS":return e.isValid?f(f({},e),{},{items:f(f({},e.items),t.data),hasData:!0}):{isValid:!0,items:f({},t.data),hasData:!0};default:throw new Error("Action not supported")}},[t,r]=(0,n.useReducer)(e,{items:{},isValid:!0,hasData:!1});return{cacheItems:(0,n.useCallback)(((e,t)=>{const n=e.reduce(((e,r,n)=>(e[n+t]=r,e)),{});r({type:"CACHE_ITEMS",data:n})}),[r]),getCachedItems:(0,n.useCallback)(((e,r)=>{const n=[],a=[];for(let l=e;l<=r;l++)t.items[l]||n.push(l),a.push(t.items[l]);return t.isValid?{items:a,missing:n.length>0?{firstMissingIndex:Math.min(...n),lastMissingIndex:Math.max(...n)}:null}:{items:a,missing:{firstMissingIndex:e,lastMissingIndex:r}}}),[t]),invalidateCache:(0,n.useCallback)((()=>{r({type:"INVALIDATE"})}),[r]),hasCachedData:t.hasData}}var p=r(32648),E=r(56170);const h="eZ7jEw9xuzosqgETL17f";function b({renderCard:e,nrCards:t,fetchData:r,limit:l=50,cardGridApiRef:c}){const{scrollNodeRef:o}=(0,n.useContext)(p.VX),{invalidateCache:u,getItemsFromCache:m,hasCachedData:d}=function(e){const{getCachedItems:t,cacheItems:r,invalidateCache:a,hasCachedData:l}=g(),s=(0,n.useRef)(!1),c=(0,n.useRef)(!1);(0,n.useEffect)((()=>(c.current=!0,()=>{c.current=!1})));const o=(0,n.useCallback)(((t,n)=>{const a=Math.max(t,0);s.current||(s.current=!0,e(a,n).then((e=>{s.current=!1,e.length>0&&c.current&&r(e,a)})))}),[r,e]);return{invalidateCache:a,getItemsFromCache:(0,n.useCallback)(((e,r,n)=>{const{items:a,missing:l}=t(e,r);if(l){const{firstMissingIndex:t,lastMissingIndex:a}=l;a===r?o(t,n):t===e?o(a-n+1,n):o(t,a-t+1)}return a}),[o,t]),hasCachedData:l}}(r);(0,n.useImperativeHandle)(c,(()=>({update:()=>u()})));return a().createElement("div",{className:s()({[h]:!d})},a().createElement(i,{renderItems:(r,n,s)=>{const c=m(r,n,l);return-1===n&&t>0?[a().createElement(E.P,{key:"placeholder"})]:c.map(((t,n)=>t?e(t,r+n,s):a().createElement(E.P,{key:n})))},scrollNodeRef:o,nrItems:t,estimatedItemMaxHeight:500}))}},9069:(e,t,r)=>{r.r(t),r.d(t,{Collection:()=>it,default:()=>ut});var n=r(67294),a=r.n(n),l=r(65858),s=r(47886),c=r(20657);const o=(0,r(22222).P1)((e=>e.features),(e=>(null==e?void 0:e.enableShows)||!1));var i=r(9746),u=r(28638),m=r(32648),d=r(64005),f=r(85951);var g=r(55084);const p=()=>{const e=function(){const[e,t]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:r}=(0,n.useContext)(m.VX),a=(0,d.y)((e=>{null!=e&&e.width&&t(e.width)}),250);return(0,f.y)({refOrElement:r,observeOnly:"width",onResize:a}),e}(),t=(0,l.v9)(o),r=(0,n.useMemo)((()=>[{title:c.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists"},...t?[{title:c.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:user:@:collection:podcasts"}]:[],{title:c.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:user:@:collection:artists"},{title:c.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:user:@:collection:albums"}]),[t]);return a().createElement(u.w,null,a().createElement(i.n,{className:g.Z.tabBar,links:r,windowSize:e}))};var E=r(19565),h=r(64230),b=r(76343),y=r(45342),v=r(59713),C=r.n(v),w=r(69518),O=r.n(w),I=r(5292);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){C()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const D=e=>k(k({},e),{},{id:O().from(e.uri).getBase62Id(),external_urls:{spotify:""},href:"",images:e.images.map((e=>e.label?{url:e.url,label:e.label}:{url:e.url,height:e.height,width:e.width}))}),P=e=>e.map(D),x=I.oT.ADDED_AT,T=I.oT.ADDED_AT,A=I.oT.ADDED_AT,R=I.oT.MOST_RELEVANT;var N=r(22423),j=r(88852),H=r(14590),M=r(76391),L=r(6489);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){C()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){const n=Z({},r);return n.entities=t?e.items||[]:n.entities.concat(e.items||[]),n.total=e.totalLength,n.next=e.next,n}function z(e,t){const r=Z({},t),n=t.entities.filter((t=>t.uri!==e));return r.total=(t.total||0)-(t.entities.length-n.length),r.entities=n,r}const B={offset:0,limit:1},W=()=>{const e=(0,n.useContext)(y.H);return(e=>{const[t,r]=(0,n.useState)(null),a=(0,n.useCallback)((async()=>{if(!e)return;const t=await e();r((null==t?void 0:t.totalLength)||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&a()}),[t,a]),{total:t}})((0,n.useCallback)((()=>e?null==e?void 0:e.getShows(B):Promise.resolve({totalLength:0})),[e]))};var F=r(1663),Y=r(30310),G=r(89477),$=r(42922),Q=r(33241),U=r(35168),q=r(43782);const X=a().memo((({nrArtists:e})=>{const t=(0,n.useContext)(y.H),{filter:r}=(0,n.useContext)(N.fo),{sortState:l}=(0,n.useContext)(H.Q),s=(0,n.useRef)(null),[o,i]=(0,n.useState)(e),u=(0,n.useCallback)((async(e,n)=>{const a=await t.getArtists({offset:e,limit:n,filter:r,sort:(0,I.e3)(l)});return a.totalLength!==o&&i(a.totalLength),a.items}),[t,r,l,o]),m=(0,n.useCallback)(((e,t)=>a().createElement($.ZP,{key:e.uri,value:"card",index:t},a().createElement(G.I,{entity:e}))),[]);return(0,n.useEffect)((()=>{s.current&&s.current.update()}),[l,r,e]),a().createElement(a().Fragment,null,a().createElement("div",{className:g.Z.header},a().createElement(b.Dy,{as:"h1",variant:b.Dy.canon},c.ag.get("artists")),a().createElement(n.Suspense,{fallback:null},a().createElement(j.E,{filterPlaceholder:c.ag.get("collection.filter.artists"),sortOptions:I.o$}))),a().createElement(Y.g,{nrCards:o,renderCard:m,fetchData:u,cardGridApiRef:s}))})),J=a().memo((({nrArtists:e})=>{const t=(0,n.useContext)(y.H),[r,l]=(0,n.useState)({entities:[],total:e}),s=(0,n.useRef)(!1),o=(0,n.useRef)(!1),i=(0,n.useCallback)((async()=>{if(!o.current&&!s.current){var e;s.current=!0;const n=await t.getArtists({offset:null!==(e=r.next)&&void 0!==e?e:void 0});n.next||(o.current=!0),s.current=!1,r.next&&n.next===r.next||l(V(n,!1,r))}}),[t,r]),u=(0,n.useCallback)((e=>{l(z(e,r))}),[r]);return a().createElement(Q.C,{onReachBottom:i,triggerOnInitialLoad:!0},a().createElement("div",{className:g.Z.header},a().createElement(b.Dy,{as:"h1",variant:b.Dy.canon},c.ag.get("artists"))),a().createElement(q.Y,{onCollectionItemRemove:u},a().createElement(U.D,{entities:P(r.entities)})))})),K=a().memo((()=>{const{total:e}=(()=>{const e=(0,n.useContext)(y.H),[t,r]=(0,n.useState)(null),a=(0,n.useCallback)((async()=>{if(!e)return;const t=await(null==e?void 0:e.getArtists(B));r((null==t?void 0:t.totalLength)||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&a()}),[t,a]),(0,M.b)(L.EW.UPDATE,a),{total:t}})(),t=(0,n.useContext)(y.H),{canFetchArtistsWithOffset:r}=t.getCapabilities();return null===e?a().createElement(F.h,{errorMessage:c.ag.get("error.request-collection-artists-failure")}):e>0?r?a().createElement(X,{nrArtists:e}):a().createElement(J,{nrArtists:e}):a().createElement(E.u,{message:c.ag.get("collection.empty-page.artists-subtitle"),title:c.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.artists-cta")},a().createElement(h.d,{size:64,viewBox:"0 0 64 64"}))})),ee=a().memo((()=>a().createElement(H.$,{uri:"collection/artists",defaultSortOption:T},a().createElement(N.hz,{uri:"collection/artists"},a().createElement(K,null)))));var te=r(84200),re=r(3634);const ne=a().memo((({nrAlbums:e})=>{const t=(0,n.useContext)(y.H),{filter:r}=(0,n.useContext)(N.fo),{sortState:l}=(0,n.useContext)(H.Q),s=(0,n.useRef)(null),[o,i]=(0,n.useState)(e),u=(0,n.useCallback)((async(e,n)=>{const a=await t.getAlbums({offset:e,limit:n,filter:r,sort:(0,I.Aq)(l)});return a.totalLength!==o&&i(a.totalLength),a.items}),[t,r,l,o]),m=(0,n.useCallback)(((e,t)=>a().createElement($.ZP,{key:e.uri,value:"card",index:t},a().createElement(re.r,{entity:e}))),[]);return(0,n.useEffect)((()=>{s.current&&s.current.update()}),[l,r,e]),a().createElement(a().Fragment,null,a().createElement("div",{className:g.Z.header},a().createElement(b.Dy,{as:"h1",variant:b.Dy.canon},c.ag.get("albums")),a().createElement(n.Suspense,{fallback:null},a().createElement(j.E,{filterPlaceholder:c.ag.get("collection.filter.albums"),sortOptions:I.Ru}))),a().createElement(Y.g,{nrCards:o,renderCard:m,fetchData:u,cardGridApiRef:s}))})),ae=a().memo((()=>{const{total:e}=(()=>{const e=(0,n.useContext)(y.H),[t,r]=(0,n.useState)(null),a=(0,n.useCallback)((async()=>{if(!e)return;const t=await(null==e?void 0:e.getAlbums(B));r((null==t?void 0:t.totalLength)||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&a()}),[t,a]),(0,M.b)(L.EW.UPDATE,a),{total:t}})();return null===e?a().createElement(F.h,{errorMessage:c.ag.get("error.request-collection-albums-failure")}):e?a().createElement(ne,{nrAlbums:e}):a().createElement(E.u,{linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.albums-cta"),message:c.ag.get("collection.empty-page.albums-subtitle"),title:c.ag.get("collection.empty-page.albums-title")},a().createElement(te.Z,null))})),le=a().memo((()=>a().createElement(H.$,{uri:"collection/albums",defaultSortOption:x},a().createElement(N.hz,{uri:"collection/albums"},a().createElement(ae,null)))));var se=r(98620),ce=r(94184),oe=r.n(ce);const ie="GbXSJaVC61cQYqOVDfz9",ue="aMCCvuHnzEolcWDV6Dep",me="I5M33T0sD_CfHK0syD91",de="collection-collectionEntityHeroCard-headerContainer",fe="collection-collectionEntityHeroCard-tracksContainer",ge="kpaIPaMKzZenz_AOcVex",pe="collection-collectionEntityHeroCard-descriptionContainer",Ee="collection-collectionEntityHeroCard-opacityText";var he=r(47418),be=r(39561);function ye(e,t=null){return Array.from(new Array(e).keys()).map((e=>a().createElement("div",{className:ge,style:{width:t?`${t}ch`:void 0},key:e})))}const ve=({entity:e={},onClick:t})=>{const r=(0,be.MY)({limit:7}),{name:n="",uri:l=""}=e;return a().createElement(he.Z,{className:oe()(ie,ue),onClick:t,headerText:n,featureIdentifier:"your_library",uri:l,ariaPlayLabel:c.ag.get("playlist.a11y.play",n),ariaPauseLabel:c.ag.get("playlist.a11y.pause",n),renderCardImage:()=>a().createElement("div",{className:de},a().createElement("div",{className:fe},r?r.items.map((({uri:e,name:t,artists:[r]},n)=>a().createElement("span",{key:e},a().createElement("span",{className:Ee},n?" • ":""),a().createElement("span",{dir:"auto"},r.name),a().createElement("span",{dir:"auto",className:Ee},t)))):ye(3))),renderSubHeaderContent:()=>a().createElement("div",{className:pe},r?`${r.totalLength} ${n}`:ye(1,n.length))})},Ce=({entity:e={}})=>{const t=(0,be.j$)({limit:7}),{name:r="",uri:n=""}=e;return a().createElement(he.Z,{className:oe()(ie,me),headerText:r,featureIdentifier:"your_library",uri:n,ariaPlayLabel:c.ag.get("playlist.a11y.play",r),ariaPauseLabel:c.ag.get("playlist.a11y.pause",r),renderCardImage:()=>a().createElement("div",{className:de},a().createElement("div",{className:fe},t?t.items.map((({uri:e,name:t,show:r},n)=>a().createElement("span",{key:e},a().createElement("span",{className:Ee},n?" • ":""),a().createElement("span",{dir:"auto"},t),a().createElement("span",{dir:"auto",className:Ee},r.name)))):ye(3))),renderSubHeaderContent:()=>a().createElement("div",{className:pe},t?c.ag.get("tracklist-header.episodes-counter",t.totalLength):ye(1,r.length))})};var we=r(90464),Oe=r(36590),Ie=r(8498),Se=r(23802);const ke="ozl1gcw8TYlzsdJPIebd",De="_WawrTbtZrXJISWuBhQT",Pe=()=>{const e=(0,Se.g)("images/playlist-folder-filled.svg");return a().createElement("div",{className:ke},a().createElement("img",{src:e,alt:c.ag.get("local-files"),className:De}))};var xe=r(13947),Te=r(66393),Ae=r(72131),Re=r(68942),Ne=r(84242),je=r(69691),He=r(5229);function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(r),!0).forEach((function(t){C()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const _e=function({entity:e}){var t;const r=(0,we.ui)(),{name:l,uri:s,images:o}=e,i=(0,n.useRef)(null),u=(0,n.useRef)(!0),m=(0,n.useContext)(Te.t),{isPlaying:f}=(0,je.cR)(Ae.bf),{togglePlay:g}=(0,Ne.n)({uri:Ae.bf,pages:[{items:(null===(t=i.current)||void 0===t?void 0:t.map((e=>Le(Le({},e),{},{provider:null}))))||[]}]},{featureIdentifier:"local_files"});(0,n.useEffect)((()=>(u.current=!0,()=>{u.current=!1})),[]);const[p]=(0,He.z)(Re.J,!1),E=(0,d.y)((async()=>{if(!i.current){const e=await m.getContents();i.current=e.items}var e;u&&g(void 0,{uri:Ae.bf,pages:[{items:(null===(e=i.current)||void 0===e?void 0:e.map((e=>Le(Le({},e),{},{provider:null}))))||[]}]})}),xe.s_);return r.canFetchAllTracks&&p?a().createElement(Oe.Z,{delegatePlayback:!0,delegateLogging:!0,isPlaying:f,onPlay:E,headerText:l,featureIdentifier:"local_files",uri:s,renderCardImage:()=>a().createElement(Ie.x,{images:o,fallback:{Component:Pe}}),renderSubHeaderContent:()=>a().createElement("span",null,c.ag.get("local-files.description"))}):null},Ze=function(e){return a().createElement(n.Suspense,{fallback:null},a().createElement(_e,e))};var Ve=r(10711),ze=r(56661),Be=r(55508),We=r(29255),Fe=r(72138),Ye=r(56347),Ge=r(63282);function $e(e){return Boolean(e)}const Qe=a().memo((function({nrPlaylists:e,showYourEpisodesCard:t,showLocalFilesCard:r}){const{filter:s}=(0,n.useContext)(N.fo),{sortState:o}=(0,n.useContext)(H.Q),i=(0,n.useContext)(Fe.BS),[u,m]=(0,n.useState)(e),d=(0,n.useRef)(null),f=(0,l.v9)(We.Gg).user,p=(0,n.useMemo)((()=>s?[]:[(0,se.I2)(f),(0,se.I2)(f),t?(0,se.bl)(f):null,r?(0,se.gB)(f):null].filter($e)),[s,r,t,f]),E=(0,n.useCallback)((async(e,t)=>{const r=p.slice(e),n=await i.getContents({offset:e-(p.length-r.length),limit:t,filter:s,sort:(0,I.pT)(o),flatten:!0,decorateImagesAndOwner:!0});return n.totalItemCount!==u&&m(n.totalItemCount),r.concat(n.items)}),[p,i,s,o,u]),h=(0,n.useCallback)(((e,t,r)=>{if(e.id===se.G&&1===t)return null;const n=function(e,t,r){return e===se.G&&r>1?ve:e===se.nk?Ze:e===se.Y3?Ve.T:(0,ze.U)(t)}(e.id,e.uri,r);return a().createElement($.ZP,{key:e.uri,value:"card",index:t},a().createElement(n,{entity:e}))}),[]);return(0,n.useEffect)((()=>{d.current&&d.current.update()}),[o,s,e]),a().createElement(a().Fragment,null,a().createElement("div",{className:g.Z.header},a().createElement(b.Dy,{as:"h1",variant:b.Dy.canon},c.ag.get("playlists")),a().createElement(n.Suspense,{fallback:null},a().createElement(j.E,{filterPlaceholder:c.ag.get("collection.filter.playlists"),sortOptions:I.w0}))),a().createElement(Y.g,{nrCards:u+p.length,renderCard:h,fetchData:E,cardGridApiRef:d}))})),Ue=a().memo((()=>{const e=(0,Fe.Rt)(),t=(0,Ye.x)(),r=(0,we.ui)(),{createPlaylist:l}=(0,Ge.K)(),[s]=(0,He.z)(Re.J,!1),o=(0,n.useCallback)((()=>{l()}),[l]);return null===e||null===t?a().createElement(F.h,{errorMessage:c.ag.get("error.request-collection-albums-failure")}):null!=e&&e.playlistCount?a().createElement(Qe,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:r.canFetchAllTracks&&s}):a().createElement(E.u,{linkTitle:c.ag.get("collection.empty-page.playlists-cta"),onClick:o,title:c.ag.get("collection.empty-page.playlists-title"),message:c.ag.get("collection.empty-page.playlists-subtitle")},a().createElement(Be.Z,null))})),qe=a().memo((()=>a().createElement(H.$,{uri:"collection/playlists",defaultSortOption:R},a().createElement(N.hz,{uri:"collection/playlists"},a().createElement(Ue,null)))));var Xe=r(48064),Je=r(21794),Ke=r(35808),et=r(19480);const tt=()=>{const e="ginger-audio-shows-top-20-web",{view:t}=(0,Ke.P)(e);if(!t)return null;const{content:r,name:n}=t,{total:l=0,items:s}=r;return a().createElement(et.P,{title:n,total:l,seeAllUri:(0,Je.p)(e)},s.map((e=>{const t=(0,ze.U)(e.uri);return a().createElement(t,{key:e.uri,entity:e})})))};var rt=r(63926);const nt=a().memo((({nrShows:e})=>{const t=(0,n.useContext)(y.H),{filter:r}=(0,n.useContext)(N.fo),{sortState:s}=(0,n.useContext)(H.Q),o=(0,n.useRef)(!1),i=(0,n.useRef)({entities:[],total:e}),[u,m]=(0,n.useState)(0),{user:d}=(0,l.v9)(We.Gg),f=(0,n.useCallback)((async(e,n,a=!1)=>{if(!o.current){o.current=!a;const l=await t.getShows({offset:e,limit:n,filter:r,sort:(0,I.EY)(s)});i.current=V(l,a,i.current),o.current=!1,m((e=>e+1))}}),[t,r,s,i]),p=(0,n.useCallback)((e=>{i.current=z(e,i.current),m((e=>e+1))}),[]);(0,n.useEffect)((()=>{f(0,50,!!u)}),[r,s]);const E=(0,n.useCallback)((()=>{i.current.entities.length!==i.current.total&&f(i.current.entities.length,50)}),[f,i]);return a().createElement(Q.C,{onReachBottom:E},a().createElement("div",{className:g.Z.header},a().createElement(b.Dy,{as:"h1",variant:b.Dy.canon},c.ag.get("podcasts")),a().createElement(n.Suspense,{fallback:null},a().createElement(j.E,{filterPlaceholder:c.ag.get("collection.filter.podcasts"),sortOptions:I.a6}))),a().createElement(q.Y,{onCollectionItemRemove:p},a().createElement($.ZP,{value:"EntitiesGrid"},a().createElement(rt.T,{render:()=>{const e=(0,se.bl)(d);return(r||!e||0===i.current.entities.length?[]:[a().createElement(n.Suspense,{fallback:null,key:"your-episodes-card"},a().createElement(Ce,{entity:e}))]).concat(P(i.current.entities).map(((e,t)=>{const r=(0,ze.U)(e.uri);return a().createElement($.ZP,{key:e.uri,value:"card",index:t},a().createElement(r,{entity:e}))})))}}))))})),at=a().memo((()=>{const{total:e}=W();return null===e?a().createElement(F.h,{errorMessage:c.ag.get("error.request-collection-shows-failure")}):e?a().createElement(nt,{nrShows:e}):a().createElement("div",{className:"CollectionShowsContainer"},a().createElement(E.u,{linkTo:"/genre/podcasts-web",linkTitle:c.ag.get("collection.empty-page.shows-cta"),message:c.ag.get("collection.empty-page.shows-subtitle"),title:c.ag.get("collection.empty-page.shows-title")},a().createElement(Xe.Z,null)),a().createElement(tt,null))})),lt=a().memo((()=>a().createElement(H.$,{uri:"collection/podcasts",defaultSortOption:A},a().createElement(N.hz,{uri:"collection/podcasts"},a().createElement(at,null)))));var st=r(70369),ct=r(13983);const ot=a().lazy((async()=>await r.e(246).then(r.bind(r,30990)))),it=()=>{const e=(0,l.v9)(o);return(0,ct.z)("your_library"),a().createElement("section",{className:"contentSpacing"},a().createElement(st.$,null,c.ag.get("collection.page-title")),a().createElement(s.AW,{path:"/collection/artists"},a().createElement(ee,null)),a().createElement(s.AW,{path:"/collection/albums"},a().createElement(le,null)),a().createElement(s.AW,{path:"/collection/playlists"},a().createElement(qe,null)),e&&a().createElement(s.AW,{path:"/collection/podcasts"},a().createElement(lt,null)),a().createElement(s.AW,{path:"/collection/music-downloads"},a().createElement(ot,null)),a().createElement(p,null))},ut=it},14590:(e,t,r)=>{r.d(t,{Q:()=>c,$:()=>o});var n=r(67294),a=r.n(n),l=r(22583),s=r(5292);const c=(0,n.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:s.oT.ADDED_AT}),o=a().memo((function({uri:e,children:t,defaultSortOption:r}){return a().createElement(l.r,{uri:e,defaultState:r,sortContext:c},t)}))},88852:(e,t,r)=>{r.d(t,{E:()=>d});var n=r(67294),a=r.n(n),l=r(45342);const s="_t4dWNbZEvXjJEyYebWT";var c=r(61048),o=r(95289),i=r(5292),u=r(14590);const m=a().memo((({sortOptions:e})=>{const{sortState:t,setSortState:r}=(0,n.useContext)(u.Q),l=(0,n.useCallback)((e=>{r(i.ei[e])}),[r]),s=e.map((e=>i.MY[e])),c=i.MY[t];return a().createElement(o.A,{options:s,onSelect:l,selected:c})})),d=a().memo((({filterPlaceholder:e,sortOptions:t})=>{const r=(0,n.useContext)(l.H);return a().createElement("div",{className:s},null!=r&&r.getCapabilities().canFilter?a().createElement(c.K,{placeholder:e}):null,null!=r&&r.getCapabilities().canSort?a().createElement(m,{sortOptions:t}):null)}))},22578:(e,t,r)=>{r.d(t,{$:()=>f});var n=r(20657),a=r(67294),l=r.n(a),s=r(64593),c=r(8341),o=r(83693),i=r(76303),u=r(47886),m=r(24183);function d(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const f=({children:e})=>{let t=d(e);(e=>{const{mainLandmarkRef:t}=(0,m.Oh)(),r=(0,u.k6)(),n=(0,a.useRef)(r.length<2);n.current=r.length<2,(0,a.useEffect)((()=>{const r=t.current;r&&!n.current&&e&&(r.setAttribute("aria-label",e),r.focus())}),[e,t])})(e);const r=(0,c.Y)(i.o9)===o.PO.PLAYING,f=(0,c.Y)((e=>null==e?void 0:e.item));return f&&r&&((0,o.G_)(f)?t=[f.name,f.artists.map((e=>e.name)).join(n.ag.getSeparator())].join(" · "):(0,o.iw)(f)?t=[f.name,f.show.name].join(" · "):(0,o.k6)(f)&&(t=d(n.ag.get("ad-formats.advertisement")))),l().createElement(s.q,{defaultTitle:"Spotify",defer:!1},l().createElement("title",null,t))}},70369:(e,t,r)=>{r.d(t,{$:()=>n.$});var n=r(22578)},9746:(e,t,r)=>{r.d(t,{n:()=>k});var n=r(67294),a=r.n(n),l=r(94184),s=r.n(l),c=r(43031),o=r(20657);const i="mQQafuUEkVAF6_IZIBvx",u="FFWho1ZPRDDGyq9nc4o6",m="HQLDjbV6xRYCfJh7xaFQ",d="m46NG2aV0C_Hh_hOFF_H",f="o7zB3eJkQwbTbMYmUUYk",g="qzbUrDo4r4uBEsHuGDvW",p="RANP_Xq9O1O2VevAb3a8",E="cRcbfCF3jsPg0TEpeWb9",h="_ef8TD60opVEITog7_gB",b="iMpd7siW4KnGNoNu6XS1";var y=r(76343),v=r(32626),C=r(30005),w=r(21691);const O=({items:e,activeItemId:t,setActiveDropdownItem:r})=>a().createElement(C.v,null,e.map((e=>a().createElement(w.s,{role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:g,activeClassName:p,isActive:t=>!!t&&(r(e),!0),onClick:()=>{r(e)}},e.title))));var I=r(26115),S=r(74594);const k=a().memo((({isCentered:e,links:t,landmarkLabel:r,className:l,windowSize:g=1/0})=>{const[C,w]=(0,n.useState)(null),k=(0,n.useRef)(null),[D,P]=(0,n.useState)([]),[x,T]=(0,n.useState)(0),[A,R]=(0,n.useState)([]);(0,n.useEffect)((()=>{k.current&&T(k.current.clientWidth)}),[g]),(0,n.useEffect)((()=>{if(!k.current)return;const e=Array.from(k.current.children).map((e=>e.clientWidth));P(e)}),[t]),(0,n.useEffect)((()=>{if(!k.current)return;if(D.slice(0,-1).reduce(((e,t)=>e+t),0)<=x)return void R([]);const e=D.reduce(((e,t)=>e>t?e:t),0),t=[];let r=e;D.forEach(((e,n)=>{x>=r+e?r+=e:t.push(n)})),R(t)}),[x,D]);const N=(0,n.useCallback)((e=>!!e&&(w(null),!0)),[]);return a().createElement("nav",{className:s()(l,i),"aria-label":r},a().createElement("ul",{className:e?u:h,ref:k},t.filter(((e,t)=>!A.includes(t))).map((e=>a().createElement("li",{key:e.to,className:m},a().createElement(c.O,{exact:!0,className:E,activeClassName:p,to:e.to,isActive:N},a().createElement(y.Dy,{variant:y.Dy.mestoBold},e.title))))),A.length||0===D.length?a().createElement("li",{className:m},a().createElement(v.xV,{renderInline:!0,menu:a().createElement(O,{items:t.filter(((e,t)=>A.includes(t))),activeItemId:null==C?void 0:C.itemId,setActiveDropdownItem:w})},((e,t,r)=>a().createElement("button",{className:s()(d,{[f]:C}),type:"button",onClick:t,ref:r},a().createElement(y.Dy,{as:"span",variant:y.Dy.mestoBold},C?C.title:o.ag.get("more")),e?a().createElement(I.q,{iconSize:16,className:b}):a().createElement(S.m,{iconSize:16,className:b}))))):null))}))},33241:(e,t,r)=>{r.d(t,{C:()=>u});var n=r(67294),a=r.n(n),l=r(70131),s=r(94184),c=r.n(s);const o="A2DbnLZllxrV6OfKJAh1",i="HoTgHiisTsEBZK3R92VY",u=a().memo((e=>{const{triggerOnInitialLoad:t=!1,onReachBottom:r,showScrollbar:s=!0,horizontalScroll:u=!1}=e,{ref:m,inView:d}=(0,l.YD)({initialInView:t});return(0,n.useEffect)((()=>{d&&r&&r()}),[d,r]),a().createElement("div",{className:c()({[i]:!s,[o]:u}),"data-testid":"infinite-scroll-list"},e.children,a().createElement("div",{ref:m}))}))},35808:(e,t,r)=>{r.d(t,{P:()=>o});var n=r(94321),a=r(29255),l=r(67294),s=r(65858),c=r(43088);const o=e=>{const t=(0,c.n)(),[r,o]=(0,l.useState)((()=>t.getViewFromCache(e))),i=(0,s.v9)(n.r),{locale:u,overrides:m}=(0,s.v9)(a.Gg),d=(null==m?void 0:m.country)||i,f=(null==m?void 0:m.locale)||u;(0,l.useEffect)((()=>{t.getView(e,{country:d,locale:f}).then((e=>{o(e)}))}),[d,f,e,t]);return{view:r,getNextPage:(0,l.useCallback)((()=>{t.getMore(e).then((e=>{e&&o(e)}))}),[e,t]),refreshContents:(0,l.useCallback)((()=>{t.getView(e,{country:d,locale:f,ignoreCache:!0}).then((e=>{o(e)}))}),[d,f,e,t])}}},55084:(e,t,r)=>{r.d(t,{Z:()=>n});const n={header:"rmaQ3sbwXnyBSHG1a3Sj",tabBar:"mlFBFMH4eIXfL4nis37W",AddToPlaylistIcon:"dcGDUSi80WNf1yQ_LWz3"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map