"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{6:(e,t,i)=>{i.d(t,{b:()=>d});var a=i(9766),r=i(542),n=i(8198),o="horizontal",s=["horizontal","vertical"],l=a.forwardRef((e,t)=>{var i;let{decorative:a,orientation:l=o,...d}=e,u=(i=l,s.includes(i))?l:o;return(0,n.jsx)(r.sG.div,{"data-orientation":u,...a?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},...d,ref:t})});l.displayName="Separator";var d=l},134:(e,t,i)=>{i.d(t,{db:()=>B,cV:()=>H,OU:()=>es,i4:()=>x});var a,r,n,o,s,l,d,u,c,h,m,p,v,b,g,f,E,y,k,A,T=i(484),w=i(1885),C=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},S=(e,t,i)=>(C(e,t,"read from private field"),i?i.call(e):t.get(e)),I=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},R=(e,t,i,a)=>(C(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let L={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof B&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof B?a.element[a.attributeName]=t:a.value=t}}}};class x extends w.Au.DocumentFragment{constructor(e,t,i=L){var n;super(),I(this,a,void 0),I(this,r,void 0),this.append(e.content.cloneNode(!0)),R(this,a,M(this)),R(this,r,i),null==(n=i.createCallback)||n.call(i,this,S(this,a),t),i.processCallback(this,S(this,a),t)}update(e){S(this,r).processCallback(this,S(this,a),e)}}a=new WeakMap,r=new WeakMap;let M=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new U;for([i,a]of O(r.value))if(i){let i=new B(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let o=[];if(n)for([i,a]of O(n))if(i){let i=new H(e);o.push(i),t.push([a,i])}else o.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new W(e,r);o.push(i),t.push([i.expression,i])}r.replaceWith(...o.flatMap(e=>e.replacementNodes||[e]))}}else M(r,t);return t},D={},O=e=>{let t="",i=0,a=D[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),D[e]=a};class N{get value(){return""}set value(e){}toString(){return this.value}}let P=new WeakMap;class U{constructor(){I(this,n,[])}[Symbol.iterator](){return S(this,n).values()}get length(){return S(this,n).length}item(e){return S(this,n)[e]}append(...e){for(let t of e)t instanceof B&&P.set(t,this),S(this,n).push(t)}toString(){return S(this,n).join("")}}n=new WeakMap;class B extends N{constructor(e,t,i){super(),I(this,u),I(this,o,""),I(this,s,void 0),I(this,l,void 0),I(this,d,void 0),R(this,s,e),R(this,l,t),R(this,d,i)}get attributeName(){return S(this,l)}get attributeNamespace(){return S(this,d)}get element(){return S(this,s)}get value(){return S(this,o)}set value(e){S(this,o)!==e&&(R(this,o,e),S(this,u,c)&&1!==S(this,u,c).length?S(this,s).setAttributeNS(S(this,d),S(this,l),S(this,u,c).toString()):null==e?S(this,s).removeAttributeNS(S(this,d),S(this,l)):S(this,s).setAttributeNS(S(this,d),S(this,l),e))}get booleanValue(){return S(this,s).hasAttributeNS(S(this,d),S(this,l))}set booleanValue(e){if(S(this,u,c)&&1!==S(this,u,c).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}o=new WeakMap,s=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakSet,c=function(){return P.get(this)};class H extends N{constructor(e,t){super(),I(this,h,void 0),I(this,m,void 0),R(this,h,e),R(this,m,t?[...t]:[new Text])}get replacementNodes(){return S(this,m)}get parentNode(){return S(this,h)}get nextSibling(){return S(this,m)[S(this,m).length-1].nextSibling}get previousSibling(){return S(this,m)[0].previousSibling}get value(){return S(this,m).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),R(this,m,function(e,t,i,a=null){let r=0,n,o,s,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)s=i[r++],o=n?n.nextSibling:a,n==s?n=o:r<l&&i[r]==o?(e.replaceChild(s,n),n=o):e.insertBefore(s,n);for(;n!=a;)o=n.nextSibling,e.removeChild(n),n=o}return i}(S(this,m)[0].parentNode,S(this,m),t,this.nextSibling))}}h=new WeakMap,m=new WeakMap;class W extends H{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}var G=i(178);let $={string:e=>String(e)};class q{constructor(e){this.template=e,this.state=void 0}}let V=new WeakMap,F=new WeakMap,K={partial:(e,t)=>{t[e.expression]=new q(e.template)},if:(e,t)=>{var i;if(z(e.expression,t))if(V.get(e)!==e.template){V.set(e,e.template);let i=new x(e.template,t,j);e.replace(i),F.set(e,i)}else null==(i=F.get(e))||i.update(t);else e.replace(""),V.delete(e),F.delete(e)}},Y=Object.keys(K),j={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof W){if(!n.directive){let e=Y.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=K[n.directive])||a.call(K,n,i);continue}let t=z(e,i);if(t instanceof q){V.get(n)!==t.template?(V.set(n,t.template),n.value=t=new x(t.template,t.state,j),F.set(n,t)):null==(r=F.get(n))||r.update(t.state);continue}t?(n instanceof B&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof B?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,V.delete(n),F.delete(n))):n instanceof B?n.value=void 0:(n.value=void 0,V.delete(n),F.delete(n))}}},Q={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=$[t])?void 0:i.call($,e)}};function z(e,t={}){var i,a,r,n,o,s,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return Z(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return Z(e);let s={...t};i.state=s;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(o=l[e+2])?void 0:o.token;i&&"="===a&&(s[i]=J(d,t))}return i}if(1===d.length)return X(d[0])?J(d[0].token,t):Z(e);if(2===d.length){let i=Q[null==(s=d[0])?void 0:s.token];return i&&X(d[1])?i(J(d[1].token,t)):Z(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=Q[i];if(!a||!X(d[0])||!X(d[2]))return Z(e);let r=J(d[0].token,t);return a(r,"|"===i?d[2].token:J(d[2].token,t))}}function Z(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function X({type:e}){return["number","boolean","string","param"].includes(e)}function J(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):(0,G.P3)(e)?parseFloat(e):t[e]}var ee=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},et=(e,t,i)=>(ee(e,t,"read from private field"),i?i.call(e):t.get(e)),ei=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ea=(e,t,i,a)=>(ee(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),er=(e,t,i)=>(ee(e,t,"access private method"),i);let en={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},eo=w.Al.createElement("template");eo.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class es extends w.Au.HTMLElement{constructor(){super(),ei(this,f),ei(this,y),ei(this,p,void 0),ei(this,v,void 0),ei(this,b,void 0),ei(this,g,void 0),ei(this,A,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),ea(this,g,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(en[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),ea(this,A,this.render.bind(this)),er(this,f,E).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=et(this,p))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(ea(this,p,e),ea(this,b,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>en[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=en[e.name])?i:(0,G.xQ)(e.name),{value:a}=e;null!=a?((0,G.P3)(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&er(this,y,k).call(this)}connectedCallback(){this.addEventListener(T.T$.BREAKPOINTS_COMPUTED,et(this,A)),et(this,g).observe(this,{attributes:!0}),et(this,g).observe(this.renderRoot,{attributes:!0,subtree:!0}),er(this,y,k).call(this)}disconnectedCallback(){this.removeEventListener(T.T$.BREAKPOINTS_COMPUTED,et(this,A)),et(this,g).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==et(this,v)&&(ea(this,v,this.template),this.renderer=new x(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(eo.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function el(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}p=new WeakMap,v=new WeakMap,b=new WeakMap,g=new WeakMap,f=new WeakSet,E=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},y=new WeakSet,k=function(){var e;let t=this.getAttribute("template");if(!t||t===et(this,b))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){ea(this,b,t),ea(this,p,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(ea(this,b,t),el(t).then(e=>{let t=w.Al.createElement("template");t.innerHTML=e,ea(this,p,t),this.createRenderer()}).catch(console.error))},A=new WeakMap,es.observedAttributes=["template"],es.processor=j,w.Au.customElements.get("media-theme")||w.Au.customElements.define("media-theme",es)},178:(e,t,i)=>{function a(e){return null==e?void 0:e.map(n).join(" ")}function r(e){return null==e?void 0:e.split(/\s+/).map(o)}function n(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function o(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function s(e){return null==e?void 0:e.map(d).join(" ")}function l(e){return null==e?void 0:e.split(/\s+/).map(u)}function d(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function u(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function c(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function h(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function m(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}i.d(t,{Br:()=>s,MT:()=>r,P3:()=>m,SF:()=>a,cb:()=>p,gf:()=>h,j3:()=>l,xQ:()=>c});let p=e=>new Promise(t=>setTimeout(t,e))},197:(e,t,i)=>{i.d(t,{T:()=>k});var a,r,n,o,s,l,d,u=i(484),c=i(8475),h=i(1063),m=i(1885),p=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},v=(e,t,i)=>(p(e,t,"read from private field"),i?i.call(e):t.get(e)),b=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},g=(e,t,i,a)=>(p(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let f="tooltipplacement",E="disabled",y="notooltip";class k extends m.Au.HTMLElement{constructor(){if(super(),b(this,l),b(this,a,void 0),this.preventClick=!1,this.tooltipEl=null,b(this,r,e=>{this.preventClick||this.handleClick(e),setTimeout(v(this,n),0)}),b(this,n,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),b(this,o,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",v(this,o))}),b(this,s,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",v(this,o)):this.addEventListener("keyup",v(this,o),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,h.kg)(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",f,u.Ex.MEDIA_CONTROLLER,u.GC.MEDIA_LANG]}enable(){this.addEventListener("click",v(this,r)),this.addEventListener("keydown",v(this,s)),this.tabIndex=0}disable(){this.removeEventListener("click",v(this,r)),this.removeEventListener("keydown",v(this,s)),this.removeEventListener("keyup",v(this,o)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var r,o,s,l,d;e===u.Ex.MEDIA_CONTROLLER?(t&&(null==(o=null==(r=v(this,a))?void 0:r.unassociateElement)||o.call(r,this),g(this,a,null)),i&&this.isConnected&&(g(this,a,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(d=null==(l=v(this,a))?void 0:l.associateElement)||d.call(l,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===f&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===u.GC.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),v(this,n).call(this)}connectedCallback(){var e,t,i;let{style:r}=(0,h.aQ)(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let n=this.getAttribute(u.Ex.MEDIA_CONTROLLER);n&&(g(this,a,null==(e=this.getRootNode())?void 0:e.getElementById(n)),null==(i=null==(t=v(this,a))?void 0:t.associateElement)||i.call(t,this)),m.Au.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=l,t=d,p(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=v(this,a))?void 0:e.unassociateElement)||t.call(e,this),g(this,a,null),this.removeEventListener("mouseenter",v(this,n)),this.removeEventListener("focus",v(this,n)),this.removeEventListener("click",v(this,r))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return(0,h.vT)(this,f)}set tooltipPlacement(e){(0,h.tA)(this,f,e)}get mediaController(){return(0,h.vT)(this,u.Ex.MEDIA_CONTROLLER)}set mediaController(e){(0,h.tA)(this,u.Ex.MEDIA_CONTROLLER,e)}get disabled(){return(0,h.Y_)(this,E)}set disabled(e){(0,h.QW)(this,E,e)}get noTooltip(){return(0,h.Y_)(this,y)}set noTooltip(e){(0,h.QW)(this,y,e)}handleClick(e){}}a=new WeakMap,r=new WeakMap,n=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakSet,d=function(){this.addEventListener("mouseenter",v(this,n)),this.addEventListener("focus",v(this,n)),this.addEventListener("click",v(this,r));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},k.shadowRootOptions={mode:"open"},k.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${c.A.shadowRootOptions.mode}">
          ${c.A.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},k.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},k.getTooltipContentHTML=function(){return""},m.Au.customElements.get("media-chrome-button")||m.Au.customElements.define("media-chrome-button",k)},484:(e,t,i)=>{i.d(t,{CY:()=>m,Ex:()=>r,GC:()=>s,LJ:()=>n,Np:()=>h,T$:()=>l,U4:()=>p,Up:()=>u,a8:()=>a,br:()=>v,lr:()=>c,nJ:()=>d});let a={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},r={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},n={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},o=Object.entries(n),s=o.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),l=o.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(l).reduce((e,[t,i])=>{let a=s[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let d=Object.entries(s).reduce((e,[t,i])=>{let a=l[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),u={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},c={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},h={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},m={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},p={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},v={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"}},653:(e,t,i)=>{var a,r,n,o,s,l,d,u,c,h,m,p,v,b,g,f,E,y,k,A,T,w,C,S,I,R,L,x,M,D,O,N,P,U,B,H,W,G,$,q,V,F,K,Y,j,Q,z,Z,X,J,ee,et,ei,ea,er,en,eo,es,el,ed,eu,ec,eh,em,ep,ev,eb,eg,ef,eE,ey,e_,ek,eA,eT,ew,eC,eS,eI,eR,eL,ex,eM,eD,eO,eN,eP,eU,eB,eH,eW,eG,e$,eq,eV,eF,eK=i(484),eY=i(1885);function ej(e){return e.split("-")[0]}var eQ=i(5770);class ez extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class eZ extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var eX=i(1063),eJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},e0=(e,t,i)=>(eJ(e,t,"read from private field"),i?i.call(e):t.get(e)),e1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},e2=(e,t,i,a)=>(eJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),e3=(e,t,i)=>(eJ(e,t,"access private method"),i);function e4({type:e,text:t,value:i,checked:a}){let r=eY.Al.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=eY.Al.createElement("span");return n.textContent=t,r.append(n),r}function e5(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let e8="style",e9="hidden",e6="disabled";class e7 extends eY.Au.HTMLElement{constructor(){if(super(),e1(this,u),e1(this,h),e1(this,v),e1(this,g),e1(this,E),e1(this,k),e1(this,C),e1(this,I),e1(this,L),e1(this,M),e1(this,O),e1(this,P),e1(this,B),e1(this,W),e1(this,$),e1(this,V),e1(this,K),e1(this,j),e1(this,a,null),e1(this,r,null),e1(this,n,null),e1(this,o,new Set),e1(this,s,void 0),e1(this,l,!1),e1(this,d,null),e1(this,p,()=>{let e=e0(this,o),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));e2(this,o,t)}),e1(this,T,()=>{e3(this,C,S).call(this),e3(this,I,R).call(this,!1)}),e1(this,w,()=>{e3(this,C,S).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,eX.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),e2(this,s,new MutationObserver(e0(this,p)))}static get observedAttributes(){return[e6,e9,e8,"anchor",eK.Ex.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":e3(this,u,c).call(this,e);break;case"invoke":e3(this,g,f).call(this,e);break;case"click":e3(this,L,x).call(this,e);break;case"toggle":e3(this,O,N).call(this,e);break;case"focusout":e3(this,B,H).call(this,e);break;case"keydown":e3(this,W,G).call(this,e)}}connectedCallback(){var e,t;e0(this,s).observe(this.defaultSlot,{childList:!0}),e2(this,d,(0,eX.Vw)(this.shadowRoot,":host")),e3(this,v,b).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),e2(this,a,(0,eX.xf)(this)),null==(t=null==(e=e0(this,a))?void 0:e.associateElement)||t.call(e,this),this.hidden||((0,eQ.v)(tt(this),e0(this,T)),(0,eQ.v)(this,e0(this,w))),e3(this,h,m).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;e0(this,s).disconnect(),(0,eQ.u)(tt(this),e0(this,T)),(0,eQ.u)(this,e0(this,w)),this.disable(),null==(t=null==(e=e0(this,a))?void 0:e.unassociateElement)||t.call(e,this),e2(this,a,null),e2(this,r,null),e2(this,n,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var r,n,o,s;e===e9&&i!==t?(e0(this,l)||e2(this,l,!0),this.hidden?e3(this,k,A).call(this):e3(this,E,y).call(this),this.dispatchEvent(new eZ({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===eK.Ex.MEDIA_CONTROLLER?(t&&(null==(n=null==(r=e0(this,a))?void 0:r.unassociateElement)||n.call(r,this),e2(this,a,null)),i&&this.isConnected&&(e2(this,a,(0,eX.xf)(this)),null==(s=null==(o=e0(this,a))?void 0:o.associateElement)||s.call(o,this))):e===e6&&i!==t?null==i?this.enable():this.disable():e===e8&&i!==t&&e3(this,v,b).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=(0,eX.l5)(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(te)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&e3(this,j,Q).call(this,t)}focus(){if(e2(this,r,(0,eX.bq)()),this.items.length){e3(this,K,Y).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=e3(this,$,q).call(this,e);i&&(e3(this,j,Q).call(this,i,"checkbox"===i.type),e0(this,n)&&!this.hidden&&(null==(t=e0(this,r))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=e3(this,$,q).call(this,e))?t:e3(this,V,F).call(this))?i:r[0],o=Math.max(0,r.indexOf(n));"ArrowDown"===a?o++:"ArrowUp"===a?o--:"Home"===e.key?o=0:"End"===e.key&&(o=r.length-1),o<0&&(o=r.length-1),o>r.length-1&&(o=0),e3(this,K,Y).call(this,r[o]),r[o].focus()}}function te(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function tt(e){var t;return null!=(t=e.getAttribute("bounds")?(0,eX.CQ)(e,`#${e.getAttribute("bounds")}`):(0,eX.Bk)(e)||e.parentElement)?t:e}a=new WeakMap,r=new WeakMap,n=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakSet,c=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&e3(this,h,m).call(this),t.name||e0(this,p).call(this)},h=new WeakSet,m=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},p=new WeakMap,v=new WeakSet,b=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},g=new WeakSet,f=function(e){e2(this,n,e.relatedTarget),(0,eX.qg)(this,e.relatedTarget)||(this.hidden=!this.hidden)},E=new WeakSet,y=function(){var e;null==(e=e0(this,n))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),(0,eQ.v)(tt(this),e0(this,T)),(0,eQ.v)(this,e0(this,w))},k=new WeakSet,A=function(){var e;null==(e=e0(this,n))||e.setAttribute("aria-expanded","false"),(0,eQ.u)(tt(this),e0(this,T)),(0,eQ.u)(this,e0(this,w))},T=new WeakMap,w=new WeakMap,C=new WeakSet,S=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(ej(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",o=ej(i),s=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(o){case"top":a={x:s,y:e.y-t.height};break;case"bottom":a={x:s,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,o;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),o=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-o.x,y:n.y-o.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=tt(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:o}=e0(this,d);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,r)}px`),o.setProperty("--_menu-bottom",`${n}px`);let s=getComputedStyle(this),l=o.getPropertyValue("--_menu-bottom")===s.bottom?n:parseFloat(s.bottom),u=a.height-l-parseFloat(s.marginBottom);this.style.setProperty("--_menu-max-height",`${u}px`)},I=new WeakSet,R=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=e0(this,d);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),e3(this,C,S).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),e3(this,C,S).call(this);a.removeProperty("--media-menu-transition-in")},L=new WeakSet,x=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(e0(this,M,D))){null==(t=e0(this,r))||t.focus(),this.hidden=!0;return}let i=e3(this,$,q).call(this,e);!i||i.hasAttribute("disabled")||(e3(this,K,Y).call(this,i),this.handleSelect(e))},M=new WeakSet,D=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},O=new WeakSet,N=function(e){if(e.target===this)return;e3(this,P,U).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new ez({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);e3(this,I,R).call(this,!0)},P=new WeakSet,U=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},B=new WeakSet,H=function(e){var t;(0,eX.qg)(this,e.relatedTarget)||(e0(this,l)&&(null==(t=e0(this,r))||t.focus()),e0(this,n)&&e0(this,n)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},W=new WeakSet,G=function(e){var t,i,a,n,o;let{key:s,ctrlKey:d,altKey:u,metaKey:c}=e;if(!d&&!u&&!c&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(e0(this,l)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(n=null==(a=this.nextElementSibling)?void 0:a.focus)||n.call(a),this.blur()}else"Escape"===s?(null==(o=e0(this,r))||o.focus(),e0(this,l)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},$=new WeakSet,q=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},V=new WeakSet,F=function(){return this.items.find(e=>0===e.tabIndex)},K=new WeakSet,Y=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},j=new WeakSet,Q=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},e7.shadowRootOptions={mode:"open"},e7.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},eY.Au.customElements.get("media-chrome-menu")||eY.Au.customElements.define("media-chrome-menu",e7);var ti=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ta=(e,t,i)=>(ti(e,t,"read from private field"),i?i.call(e):t.get(e)),tr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tn=(e,t,i,a)=>(ti(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),to=(e,t,i)=>(ti(e,t,"access private method"),i);let ts="type",tl="value",td="checked",tu="disabled";class tc extends eY.Au.HTMLElement{constructor(){if(super(),tr(this,X),tr(this,ee),tr(this,ei),tr(this,es),tr(this,z,!1),tr(this,Z,void 0),tr(this,er,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=eY.Al.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),tr(this,en,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",ta(this,en))}),tr(this,eo,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",ta(this,en)):this.addEventListener("keyup",ta(this,en),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,eX.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ts,tu,td,tl]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),th(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":to(this,X,J).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":ta(this,eo).call(this,e);break;case"keyup":ta(this,en).call(this,e)}}attributeChangedCallback(e,t,i){e===td&&th(this)&&!ta(this,z)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===ts&&i!==t?this.role="menuitem"+i:e===tu&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(tu)||this.enable(),this.role="menuitem"+this.type,tn(this,Z,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),to(this,es,el).call(this),this.submenuElement&&to(this,ee,et).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),to(this,es,el).call(this),tn(this,Z,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=(0,eX.l5)(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(ts))?e:""}set type(e){this.setAttribute(ts,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(tl))?e:this.text}set value(e){this.setAttribute(tl,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(th(this))return"true"===this.getAttribute("aria-checked")}set checked(e){th(this)&&(tn(this,z,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!th(this)&&this.invokeTargetElement&&(0,eX.qg)(this,e.target)&&this.invokeTargetElement.dispatchEvent(new ez({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function th(e){return"radio"===e.type||"checkbox"===e.type}z=new WeakMap,Z=new WeakMap,X=new WeakSet,J=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?to(this,ee,et).call(this):to(this,ei,ea).call(this))},ee=new WeakSet,et=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",ta(this,er)),this.submenuElement.addEventListener("addmenuitem",ta(this,er)),this.submenuElement.addEventListener("removemenuitem",ta(this,er)),ta(this,er).call(this)},ei=new WeakSet,ea=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",ta(this,er)),this.submenuElement.removeEventListener("addmenuitem",ta(this,er)),this.submenuElement.removeEventListener("removemenuitem",ta(this,er)),ta(this,er).call(this)},er=new WeakMap,en=new WeakMap,eo=new WeakMap,es=new WeakSet,el=function(){var e;let t=null==(e=ta(this,Z))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},tc.shadowRootOptions={mode:"open"},tc.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},tc.getSuffixSlotInnerHTML=function(e){return""},eY.Au.customElements.get("media-chrome-menu-item")||eY.Au.customElements.define("media-chrome-menu-item",tc);class tm extends e7{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eX.Bk)(this).querySelector("media-settings-menu-button")}}tm.getTemplateHTML=function(e){return`
    ${e7.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},eY.Au.customElements.get("media-settings-menu")||eY.Au.customElements.define("media-settings-menu",tm);class tp extends tc{}tp.shadowRootOptions={mode:"open"},tp.getTemplateHTML=function(e){return`
    ${tc.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},tp.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},eY.Au.customElements.get("media-settings-menu-item")||eY.Au.customElements.define("media-settings-menu-item",tp);var tv=i(197);class tb extends tv.T{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=(0,eX.l5)(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new ez({relatedTarget:this}))}}eY.Au.customElements.get("media-chrome-menu-button")||eY.Au.customElements.define("media-chrome-menu-button",tb);var tg=i(7506);class tf extends tb{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",(0,tg.t)("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:(0,eX.Bk)(this).querySelector("media-settings-menu")}}tf.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},tf.getTooltipContentHTML=function(){return(0,tg.t)("Settings")},eY.Au.customElements.get("media-settings-menu-button")||eY.Au.customElements.define("media-settings-menu-button",tf);var tE=i(178),ty=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t_=(e,t,i)=>(ty(e,t,"read from private field"),i?i.call(e):t.get(e)),tk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tA=(e,t,i,a)=>(ty(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tT=(e,t,i)=>(ty(e,t,"access private method"),i);class tw extends e7{constructor(){super(...arguments),tk(this,ec),tk(this,em),tk(this,ed,[]),tk(this,eu,void 0)}static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_AUDIO_TRACK_LIST,eK.GC.MEDIA_AUDIO_TRACK_ENABLED,eK.GC.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.GC.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===eK.GC.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(tA(this,ed,(0,tE.j3)(null!=i?i:"")),tT(this,ec,eh).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tT(this,em,ep))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tT(this,em,ep))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=(0,eX.Bk)(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return t_(this,ed)}set mediaAudioTrackList(e){tA(this,ed,e),tT(this,ec,eh).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=(0,eX.vT)(this,eK.GC.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){(0,eX.tA)(this,eK.GC.MEDIA_AUDIO_TRACK_ENABLED,e)}}ed=new WeakMap,eu=new WeakMap,ec=new WeakSet,eh=function(){if(t_(this,eu)===JSON.stringify(this.mediaAudioTrackList))return;tA(this,eu,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=e4({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(e5(this,"checked-indicator")),this.defaultSlot.append(e)}},em=new WeakSet,ep=function(){if(null==this.value)return;let e=new eY.Au.CustomEvent(eK.a8.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},eY.Au.customElements.get("media-audio-track-menu")||eY.Au.customElements.define("media-audio-track-menu",tw);let tC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,tS=e=>{let t=(0,tg.t)("Audio");e.setAttribute("aria-label",t)};class tI extends tb{static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_AUDIO_TRACK_ENABLED,eK.GC.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),tS(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.GC.MEDIA_LANG&&tS(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=(0,eX.Bk)(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=(0,eX.vT)(this,eK.GC.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){(0,eX.tA)(this,eK.GC.MEDIA_AUDIO_TRACK_ENABLED,e)}}tI.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${tC}</slot>
  `},tI.getTooltipContentHTML=function(){return(0,tg.t)("Audio")},eY.Au.customElements.get("media-audio-track-menu-button")||eY.Au.customElements.define("media-audio-track-menu-button",tI);var tR=i(5166),tL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tM=(e,t,i)=>(tL(e,t,"access private method"),i);let tD=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class tO extends e7{constructor(){super(...arguments),tx(this,eb),tx(this,ef),tx(this,ev,void 0)}static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_SUBTITLES_LIST,eK.GC.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.GC.MEDIA_SUBTITLES_LIST&&t!==i?tM(this,eb,eg).call(this):e===eK.GC.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",tM(this,eb,eg).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tM(this,ef,eE))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tM(this,ef,eE))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eX.Bk)(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return tN(this,eK.GC.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){tP(this,eK.GC.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tN(this,eK.GC.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){tP(this,eK.GC.MEDIA_SUBTITLES_SHOWING,e)}}ev=new WeakMap,eb=new WeakSet,eg=function(){var e,t,i,a,r,n;let o=(tL(this,t=ev,"read from private field"),(i?i.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),s=this.value!==this.getAttribute(eK.GC.MEDIA_SUBTITLES_SHOWING);if(!o&&!s)return;a=ev,r=JSON.stringify(this.mediaSubtitlesList),tL(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=e4({type:"radio",text:this.formatMenuItemText((0,tg.t)("Off")),value:"off",checked:l});for(let t of(d.prepend(e5(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let i=e4({type:"radio",text:this.formatMenuItemText(t.label,t),value:(0,tR.PH)(t),checked:this.value==(0,tR.PH)(t)});i.prepend(e5(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(e5(this,"captions-indicator")),this.defaultSlot.append(i)}},ef=new WeakSet,eE=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(eK.GC.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new eY.Au.CustomEvent(eK.a8.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new eY.Au.CustomEvent(eK.a8.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},tO.getTemplateHTML=function(e){return`
    ${e7.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${tD}</slot>
  `};let tN=(e,t)=>{let i=e.getAttribute(t);return i?(0,tR.W5)(i):[]},tP=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=(0,tR.mc)(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};eY.Au.customElements.get("media-captions-menu")||eY.Au.customElements.define("media-captions-menu",tO);let tU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tB=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,tH=e=>{e.setAttribute("data-captions-enabled",(0,tR.VV)(e).toString())},tW=e=>{e.setAttribute("aria-label",(0,tg.t)("closed captions"))};class tG extends tb{static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_SUBTITLES_LIST,eK.GC.MEDIA_SUBTITLES_SHOWING,eK.GC.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),tW(this),tH(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.GC.MEDIA_SUBTITLES_SHOWING?tH(this):e===eK.GC.MEDIA_LANG&&tW(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=(0,eX.Bk)(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return t$(this,eK.GC.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){tq(this,eK.GC.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return t$(this,eK.GC.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){tq(this,eK.GC.MEDIA_SUBTITLES_SHOWING,e)}}tG.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${tU}</slot>
      <slot name="off">${tB}</slot>
    </slot>
  `},tG.getTooltipContentHTML=function(){return(0,tg.t)("Captions")};let t$=(e,t)=>{let i=e.getAttribute(t);return i?(0,tR.W5)(i):[]},tq=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=(0,tR.mc)(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};eY.Au.customElements.get("media-captions-menu-button")||eY.Au.customElements.define("media-captions-menu-button",tG);var tV=i(4026),tF=i(793),tK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tY=(e,t,i)=>(tK(e,t,"read from private field"),i?i.call(e):t.get(e)),tj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tQ=(e,t,i)=>(tK(e,t,"access private method"),i);let tz="rates";class tZ extends e7{constructor(){super(),tj(this,e_),tj(this,eA),tj(this,ey,new tV.M(this,tz,{defaultValue:tF.ap})),tQ(this,e_,ek).call(this)}static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_PLAYBACK_RATE,tz]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.GC.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,tQ(this,e_,ek).call(this)):e===tz&&t!=i&&(tY(this,ey).value=i,tQ(this,e_,ek).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tQ(this,eA,eT))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tQ(this,eA,eT))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eX.Bk)(this).querySelector("media-playback-rate-menu-button")}get rates(){return tY(this,ey)}set rates(e){e?Array.isArray(e)?tY(this,ey).value=e.join(" "):"string"==typeof e&&(tY(this,ey).value=e):tY(this,ey).value="",tQ(this,e_,ek).call(this)}get mediaPlaybackRate(){return(0,eX.dm)(this,eK.GC.MEDIA_PLAYBACK_RATE,tF.L5)}set mediaPlaybackRate(e){(0,eX.pK)(this,eK.GC.MEDIA_PLAYBACK_RATE,e)}}ey=new WeakMap,e_=new WeakSet,ek=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(tY(this,ey)).map(e=>Number(e)));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=e4({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(e5(this,"checked-indicator")),this.defaultSlot.append(t)}},eA=new WeakSet,eT=function(){if(!this.value)return;let e=new eY.Au.CustomEvent(eK.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},eY.Au.customElements.get("media-playback-rate-menu")||eY.Au.customElements.define("media-playback-rate-menu",tZ);class tX extends tb{static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eK.GC.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",(0,tg.t)("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:(0,eX.Bk)(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return(0,eX.dm)(this,eK.GC.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){(0,eX.pK)(this,eK.GC.MEDIA_PLAYBACK_RATE,e)}}tX.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},tX.getTooltipContentHTML=function(){return(0,tg.t)("Playback rate")},eY.Au.customElements.get("media-playback-rate-menu-button")||eY.Au.customElements.define("media-playback-rate-menu-button",tX);var tJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t0=(e,t,i)=>(tJ(e,t,"read from private field"),i?i.call(e):t.get(e)),t1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t2=(e,t,i,a)=>(tJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),t3=(e,t,i)=>(tJ(e,t,"access private method"),i);class t4 extends e7{constructor(){super(...arguments),t1(this,eS),t1(this,eR),t1(this,ew,[]),t1(this,eC,{})}static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_RENDITION_LIST,eK.GC.MEDIA_RENDITION_SELECTED,eK.GC.MEDIA_RENDITION_UNAVAILABLE,eK.GC.MEDIA_HEIGHT,eK.GC.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case eK.GC.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",t3(this,eS,eI).call(this);break;case eK.GC.MEDIA_RENDITION_LIST:t2(this,ew,(0,tE.MT)(i)),t3(this,eS,eI).call(this);break;case eK.GC.MEDIA_HEIGHT:case eK.GC.MEDIA_WIDTH:t3(this,eS,eI).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",t3(this,eR,eL))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",t3(this,eR,eL))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eX.Bk)(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return t0(this,ew)}set mediaRenditionList(e){t2(this,ew,e),t3(this,eS,eI).call(this)}get mediaRenditionSelected(){return(0,eX.vT)(this,eK.GC.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){(0,eX.tA)(this,eK.GC.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return(0,eX.dm)(this,eK.GC.MEDIA_HEIGHT)}set mediaHeight(e){(0,eX.pK)(this,eK.GC.MEDIA_HEIGHT,e)}get mediaWidth(){return(0,eX.dm)(this,eK.GC.MEDIA_WIDTH)}set mediaWidth(e){(0,eX.pK)(this,eK.GC.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}ew=new WeakMap,eC=new WeakMap,eS=new WeakSet,eI=function(){let e,t=!this.mediaRenditionSelected;if(t0(this,eC).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&t0(this,eC).mediaHeight===this.mediaHeight&&t0(this,eC).mediaWidth===this.mediaWidth&&t0(this,eC).isAuto===t)return;t0(this,eC).mediaRenditionList=JSON.stringify(this.mediaRenditionList),t0(this,eC).mediaHeight=this.mediaHeight,t0(this,eC).mediaWidth=this.mediaWidth,t0(this,eC).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=e4({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(e5(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${(0,tg.t)("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${(0,tg.t)("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText((0,tg.t)("Auto")));let n=e4({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(e5(this,"checked-indicator")),this.defaultSlot.append(n)},eR=new WeakSet,eL=function(){if(null==this.value)return;let e=new eY.Au.CustomEvent(eK.a8.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},eY.Au.customElements.get("media-rendition-menu")||eY.Au.customElements.define("media-rendition-menu",t4);let t5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class t8 extends tb{static get observedAttributes(){return[...super.observedAttributes,eK.GC.MEDIA_RENDITION_SELECTED,eK.GC.MEDIA_RENDITION_UNAVAILABLE,eK.GC.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",(0,tg.t)("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:(0,eX.Bk)(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return(0,eX.vT)(this,eK.GC.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){(0,eX.tA)(this,eK.GC.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return(0,eX.dm)(this,eK.GC.MEDIA_HEIGHT)}set mediaHeight(e){(0,eX.pK)(this,eK.GC.MEDIA_HEIGHT,e)}}t8.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t5}</slot>
  `},t8.getTooltipContentHTML=function(){return(0,tg.t)("Quality")},eY.Au.customElements.get("media-rendition-menu-button")||eY.Au.customElements.define("media-rendition-menu-button",t8);var t9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t6=(e,t,i)=>(t9(e,t,"read from private field"),i?i.call(e):t.get(e)),t7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ie=(e,t,i,a)=>(t9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),it=(e,t,i)=>(t9(e,t,"access private method"),i);class ii extends e7{constructor(){super(),t7(this,eM),t7(this,eO),t7(this,eP),t7(this,eB),t7(this,eG),t7(this,ex,!1),t7(this,eW,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=it(this,eB,eH).call(this,t);(i||a)&&(t6(this,ex)?it(this,eO,eN).call(this):it(this,eG,e$).call(this,e))}),t7(this,eq,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=it(this,eB,eH).call(this,t);i||a&&(r||n)||it(this,eO,eN).call(this)}),t7(this,eV,e=>{"Escape"===e.key&&it(this,eO,eN).call(this)}),t7(this,eF,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}it(this,eO,eN).call(this)}),this.setAttribute("noautohide",""),it(this,eM,eD).call(this)}connectedCallback(){super.connectedCallback(),(0,eX.Bk)(this).addEventListener("contextmenu",t6(this,eW)),this.addEventListener("click",t6(this,eF))}disconnectedCallback(){super.disconnectedCallback(),(0,eX.Bk)(this).removeEventListener("contextmenu",t6(this,eW)),this.removeEventListener("click",t6(this,eF)),document.removeEventListener("mousedown",t6(this,eq)),document.removeEventListener("keydown",t6(this,eV))}}ex=new WeakMap,eM=new WeakSet,eD=function(){this.hidden=!t6(this,ex)},eO=new WeakSet,eN=function(){ie(this,ex,!1),it(this,eM,eD).call(this)},eP=new WeakSet,eU=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&it(e,eO,eN).call(e)})},eB=new WeakSet,eH=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},eW=new WeakMap,eG=new WeakSet,e$=function(e){e.preventDefault(),it(this,eP,eU).call(this),ie(this,ex,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,it(this,eM,eD).call(this),document.addEventListener("mousedown",t6(this,eq),{once:!0}),document.addEventListener("keydown",t6(this,eV),{once:!0})},eq=new WeakMap,eV=new WeakMap,eF=new WeakMap,ii.getTemplateHTML=function(e){return`
      ${e7.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},eY.Au.customElements.get("media-context-menu")||eY.Au.customElements.define("media-context-menu",ii);class ia extends tc{}ia.shadowRootOptions={mode:"open"},ia.getTemplateHTML=function(e){return`
    ${tc.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},eY.Au.customElements.get("media-context-menu-item")||eY.Au.customElements.define("media-context-menu-item",ia)},793:(e,t,i)=>{i.d(t,{L5:()=>m,ap:()=>h});var a,r=i(197),n=i(1885),o=i(484),s=i(4026),l=i(1063),d=i(7506),u=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let c="rates",h=[1,1.2,1.5,1.7,2],m=1;class p extends r.T{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,a,new s.M(this,c,{defaultValue:h})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:m}x`}static get observedAttributes(){return[...super.observedAttributes,o.GC.MEDIA_PLAYBACK_RATE,c]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===c&&(u(this,a).value=i),e===o.GC.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?m:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",(0,d.t)("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return u(this,a)}set rates(e){e?Array.isArray(e)?u(this,a).value=e.join(" "):"string"==typeof e&&(u(this,a).value=e):u(this,a).value=""}get mediaPlaybackRate(){return(0,l.dm)(this,o.GC.MEDIA_PLAYBACK_RATE,m)}set mediaPlaybackRate(e){(0,l.pK)(this,o.GC.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(u(this,a).values(),e=>+e).sort((e,t)=>e-t),r=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:m,s=new n.Au.CustomEvent(o.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(s)}}a=new WeakMap,p.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||m}x</slot>
  `},p.getTooltipContentHTML=function(){return(0,d.t)("Playback rate")},n.Au.customElements.get("media-playback-rate-button")||n.Au.customElements.define("media-playback-rate-button",p)},884:(e,t,i)=>{i.d(t,{F:()=>o});var a=i(8322);let r=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,n=a.$,o=(e,t)=>i=>{var a;if((null==t?void 0:t.variants)==null)return n(e,null==i?void 0:i.class,null==i?void 0:i.className);let{variants:o,defaultVariants:s}=t,l=Object.keys(o).map(e=>{let t=null==i?void 0:i[e],a=null==s?void 0:s[e];if(null===t)return null;let n=r(t)||r(a);return o[e][n]}),d=i&&Object.entries(i).reduce((e,t)=>{let[i,a]=t;return void 0===a||(e[i]=a),e},{});return n(e,l,null==t||null==(a=t.compoundVariants)?void 0:a.reduce((e,t)=>{let{class:i,className:a,...r}=t;return Object.entries(r).every(e=>{let[t,i]=e;return Array.isArray(i)?i.includes({...s,...d}[t]):({...s,...d})[t]===i})?[...e,i,a]:e},[]),null==i?void 0:i.class,null==i?void 0:i.className)}},1063:(e,t,i)=>{i.d(t,{Bk:()=>n,CQ:()=>u,DI:()=>m,Ek:()=>s,J9:()=>h,QW:()=>E,Vw:()=>v,Y_:()=>f,aQ:()=>p,bq:()=>function e(t=document){var i;let a=null==t?void 0:t.activeElement;return a?null!=(i=e(a.shadowRoot))?i:a:null},dm:()=>b,kg:()=>r,l5:()=>c,pK:()=>g,qg:()=>d,tA:()=>k,u0:()=>l,vT:()=>y,xf:()=>o});var a=i(484);function r(e){let t={};for(let i of e)t[i.name]=i.value;return t}function n(e){var t;return null!=(t=o(e))?t:u(e,"media-controller")}function o(e){var t;let{MEDIA_CONTROLLER:i}=a.Ex,r=e.getAttribute(i);if(r)return null==(t=c(e))?void 0:t.getElementById(r)}let s=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},l=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},d=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||d(e,t.getRootNode().host)),u=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||u(e.getRootNode().host,t)};function c(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function h(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function m(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,o=r*r+n*n;return 0===o?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/o))}function p(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||v(e,t)}function v(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let o=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[o]}function b(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function g(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}b(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function f(e,t){return e.hasAttribute(t)}function E(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}f(e,t)!=i&&e.toggleAttribute(t,i)}function y(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function k(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;y(e,t,void 0)!==a&&e.setAttribute(t,a)}},1251:(e,t,i)=>{i.d(t,{eS:()=>N,yd:()=>B});var a,r,n,o,s,l,d,u,c,h,m,p,v,b,g,f,E,y,k,A,T=i(1885),w=i(484),C=i(5770),S=i(4143),I=i(7506),R=i(1063),L=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},x=(e,t,i)=>(L(e,t,"read from private field"),i?i.call(e):t.get(e)),M=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},D=(e,t,i,a)=>(L(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),O=(e,t,i)=>(L(e,t,"access private method"),i);let N={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},P=Object.values(w.GC);function U(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(N.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),o=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),s=!1;if(Object.keys(n).forEach(t=>{if(o.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),s=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),s=!0)}),s){let t=new CustomEvent(w.T$.BREAKPOINTS_CHANGE,{detail:o});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(w.T$.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class B extends T.Au.HTMLElement{constructor(){if(super(),M(this,c),M(this,m),M(this,v),M(this,g),M(this,E),M(this,a,void 0),M(this,r,0),M(this,n,null),M(this,o,null),M(this,s,void 0),this.breakpointsComputed=!1,M(this,l,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),M(this,d,!1),M(this,u,e=>{x(this,d)||(setTimeout(()=>{U(e.target,e.contentRect.width),D(this,d,!1)},0),D(this,d,!0))}),M(this,k,void 0),M(this,A,()=>{if(!x(this,k).assignedElements({flatten:!0}).length){x(this,n)&&this.mediaUnsetCallback(x(this,n));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,R.kg)(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}D(this,a,new MutationObserver(x(this,l)))}static get observedAttributes(){return[N.AUTOHIDE,N.GESTURES_DISABLED].concat(P).filter(e=>![w.GC.MEDIA_RENDITION_LIST,w.GC.MEDIA_AUDIO_TRACK_LIST,w.GC.MEDIA_CHAPTERS_CUES,w.GC.MEDIA_WIDTH,w.GC.MEDIA_HEIGHT,w.GC.MEDIA_ERROR,w.GC.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==N.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(D(this,n,e),e.localName.includes("-")&&await T.Au.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;x(this,a).observe(this,{childList:!0,subtree:!0}),(0,C.v)(this,x(this,u));let t=null!=this.getAttribute(N.AUDIO)?(0,I.t)("audio player"):(0,I.t)("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(N.USER_INACTIVE,""),U(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(D(this,k,i),x(this,k).addEventListener("slotchange",x(this,A))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=T.Au.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;(0,C.u)(this,x(this,u)),clearTimeout(x(this,o)),x(this,a).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=T.Au.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),x(this,k)&&(x(this,k).removeEventListener("slotchange",x(this,A)),D(this,k,null)),D(this,d,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){D(this,n,null)}handleEvent(e){switch(e.type){case"pointerdown":D(this,r,e.timeStamp);break;case"pointermove":O(this,c,h).call(this,e);break;case"pointerup":O(this,m,p).call(this,e);break;case"mouseleave":O(this,v,b).call(this);break;case"mouseup":this.removeAttribute(N.KEYBOARD_CONTROL);break;case"keyup":O(this,E,y).call(this),this.setAttribute(N.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);D(this,s,isNaN(t)?0:t)}get autohide(){return(void 0===x(this,s)?2:x(this,s)).toString()}get breakpoints(){return(0,R.vT)(this,N.BREAKPOINTS)}set breakpoints(e){(0,R.tA)(this,N.BREAKPOINTS,e)}get audio(){return(0,R.Y_)(this,N.AUDIO)}set audio(e){(0,R.QW)(this,N.AUDIO,e)}get gesturesDisabled(){return(0,R.Y_)(this,N.GESTURES_DISABLED)}set gesturesDisabled(e){(0,R.QW)(this,N.GESTURES_DISABLED,e)}get keyboardControl(){return(0,R.Y_)(this,N.KEYBOARD_CONTROL)}set keyboardControl(e){(0,R.QW)(this,N.KEYBOARD_CONTROL,e)}get noAutohide(){return(0,R.Y_)(this,N.NO_AUTOHIDE)}set noAutohide(e){(0,R.QW)(this,N.NO_AUTOHIDE,e)}get autohideOverControls(){return(0,R.Y_)(this,N.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){(0,R.QW)(this,N.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return(0,R.Y_)(this,N.USER_INACTIVE)}set userInteractive(e){(0,R.QW)(this,N.USER_INACTIVE,e)}}a=new WeakMap,r=new WeakMap,n=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakMap,c=new WeakSet,h=function(e){if("mouse"!==e.pointerType&&e.timeStamp-x(this,r)<250)return;O(this,g,f).call(this),clearTimeout(x(this,o));let t=this.hasAttribute(N.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&O(this,E,y).call(this)},m=new WeakSet,p=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(N.USER_INACTIVE);[this,this.media].includes(e.target)&&t?O(this,v,b).call(this):O(this,E,y).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&O(this,E,y).call(this)},v=new WeakSet,b=function(){if(0>x(this,s)||this.hasAttribute(N.USER_INACTIVE))return;this.setAttribute(N.USER_INACTIVE,"");let e=new T.Au.CustomEvent(w.T$.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},g=new WeakSet,f=function(){if(!this.hasAttribute(N.USER_INACTIVE))return;this.removeAttribute(N.USER_INACTIVE);let e=new T.Au.CustomEvent(w.T$.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},E=new WeakSet,y=function(){O(this,g,f).call(this),clearTimeout(x(this,o));let e=parseInt(this.autohide);e<0||D(this,o,setTimeout(()=>{O(this,v,b).call(this)},1e3*e))},k=new WeakMap,A=new WeakMap,B.shadowRootOptions={mode:"open"},B.getTemplateHTML=function(e){return`
    <style>
      
      :host([${w.GC.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${N.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${N.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${N.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${N.AUDIO}])[${N.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${N.AUDIO}])[${N.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${N.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${N.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${N.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${N.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${N.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${N.USER_INACTIVE}]:not([${w.GC.MEDIA_PAUSED}]):not([${w.GC.MEDIA_IS_AIRPLAYING}]):not([${w.GC.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${N.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${N.USER_INACTIVE}]:not([${N.NO_AUTOHIDE}]):not([${w.GC.MEDIA_PAUSED}]):not([${w.GC.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${N.USER_INACTIVE}][${N.AUTOHIDE_OVER_CONTROLS}]:not([${N.NO_AUTOHIDE}]):not([${w.GC.MEDIA_PAUSED}]):not([${w.GC.MEDIA_IS_CASTING}]):not([${N.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${N.AUDIO}])[${w.GC.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${S.A.shadowRootOptions.mode}">
          ${S.A.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},T.Au.customElements.get("media-container")||T.Au.customElements.define("media-container",B)},1885:(e,t,i)=>{i.d(t,{Al:()=>h,Au:()=>c});class a{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class r extends a{}class n extends r{constructor(){super(...arguments),this.role=null}}class o{observe(){}unobserve(){}disconnect(){}}let s={createElement:function(){return new l.HTMLElement},createElementNS:function(){return new l.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},l={ResizeObserver:o,document:s,Node:r,Element:n,HTMLElement:class extends n{constructor(){super(...arguments),this.innerHTML=""}get content(){return new l.DocumentFragment}},DocumentFragment:class extends a{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},d="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,u=Object.keys(l).every(e=>e in globalThis),c=d&&!u?l:globalThis,h=d&&!u?s:globalThis.document},2711:(e,t,i)=>{i.d(t,{vC:()=>E});var a=i(9766);i(8198);let r=["shift","alt","meta","mod","ctrl","control"],n={esc:"escape",return:"enter",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function o(e){return(n[e.trim()]||e.trim()).toLowerCase().replace(/key|digit|numpad/,"")}function s(e){return r.includes(e)}function l(e,t=","){return e.toLowerCase().split(t)}function d(e,t="+",i=">",a=!1,n,s){let l=[],u=!1;(e=e.trim()).includes(i)?(u=!0,l=e.toLocaleLowerCase().split(i).map(e=>o(e))):l=e.toLocaleLowerCase().split(t).map(e=>o(e));let c={alt:l.includes("alt"),ctrl:l.includes("ctrl")||l.includes("control"),shift:l.includes("shift"),meta:l.includes("meta"),mod:l.includes("mod"),useKey:a},h=l.filter(e=>!r.includes(e));return{...c,keys:h,description:n,isSequence:u,hotkey:e,metadata:s}}"u">typeof document&&(document.addEventListener("keydown",e=>{void 0!==e.code&&h([o(e.code)])}),document.addEventListener("keyup",e=>{void 0!==e.code&&m([o(e.code)])})),"u">typeof window&&(window.addEventListener("blur",()=>{u.clear()}),window.addEventListener("focus",()=>{u.clear()}),window.addEventListener("contextmenu",()=>{setTimeout(()=>{u.clear()},0)})),"u">typeof document&&document.addEventListener("visibilitychange",()=>{u.clear()});let u=new Set;function c(e){return Array.isArray(e)}function h(e){let t=Array.isArray(e)?e:[e];u.has("meta")&&u.forEach(e=>{s(e)||u.delete(e.toLowerCase())}),t.forEach(e=>{u.add(e.toLowerCase())})}function m(e){let t=Array.isArray(e)?e:[e];"meta"===e?u.clear():t.forEach(e=>{u.delete(e.toLowerCase())})}let p=["input","textarea","select","searchbox","slider","spinbutton","menuitem","menuitemcheckbox","menuitemradio","option","radio","textbox"];function v(e,t=!1){var i;let a,r,{target:n,composed:o}=e;return(i=n).tagName&&!i.tagName.startsWith("-")&&i.tagName.includes("-")&&o?(a=e.composedPath()[0]&&e.composedPath()[0].tagName,r=e.composedPath()[0]&&e.composedPath()[0].role):(a=n&&n.tagName,r=n&&n.role),c(t)?!!(a&&t?.some(e=>e.toLowerCase()===a.toLowerCase()||e===r)):!!(a&&t&&t)}let b=(0,a.createContext)(void 0),g=(0,a.createContext)({hotkeys:[],activeScopes:[],toggleScope:()=>{},enableScope:()=>{},disableScope:()=>{}}),f="u">typeof window?a.useLayoutEffect:a.useEffect;function E(e,t,i,r){var n;let E,[y,k]=(0,a.useState)(null),A=(0,a.useCallback)(e=>(k(e),()=>k(null)),[]),T=(0,a.useRef)(!1),w=Array.isArray(i)?Array.isArray(r)?void 0:r:i,C=c(e)?e.join(w?.delimiter):e,S=Array.isArray(i)?i:Array.isArray(r)?r:void 0,I=(0,a.useCallback)(t,S??[]),R=(0,a.useRef)(I);S?R.current=I:R.current=t;let L=(n=function(e){if(!e)return;let{enabled:t,preventDefault:i,ignoreEventWhen:a,...r}=e;return"function"==typeof t?r:{...r,enabled:t}}(w),function e(t,i){return t&&i&&"object"==typeof t&&"object"==typeof i?Object.keys(t).length===Object.keys(i).length&&Object.keys(t).reduce((a,r)=>a&&e(t[r],i[r]),!0):t===i}((E=(0,a.useRef)(void 0)).current,n)||(E.current=n),E.current),x=(0,a.useRef)(w?.enabled);x.current=w?.enabled;let M=(0,a.useRef)(w?.preventDefault);M.current=w?.preventDefault;let D=(0,a.useRef)(w?.ignoreEventWhen);D.current=w?.ignoreEventWhen;let{activeScopes:O}=(0,a.useContext)(g),N=(0,a.useContext)(b);return f(()=>{var e;if(!1===x.current||(e=L?.scopes,!((0!==O.length||!e)&&(!e||O.some(t=>e.includes(t))||O.includes("*")))))return;let t=[],i,a=(e,a=!1)=>{if(!(v(e,p)&&!v(e,L?.enableOnFormTags))){if(null!==y){let t=y.getRootNode();if((t instanceof Document||t instanceof ShadowRoot)&&t.activeElement!==y&&!y.contains(t.activeElement))return void(e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation())}e.target?.isContentEditable&&!L?.enableOnContentEditable||l(C,L?.delimiter).forEach(r=>{if(r.includes(L?.splitKey??"+")&&r.includes(L?.sequenceSplitKey??">"))return void console.warn(`Hotkey ${r} contains both ${L?.splitKey??"+"} and ${L?.sequenceSplitKey??">"} which is not supported.`);let n=d(r,L?.splitKey,L?.sequenceSplitKey,L?.useKey,L?.description,L?.metadata);if(n.isSequence){i=setTimeout(()=>{t=[]},L?.sequenceTimeoutMs??1e3);let a=n.useKey?e.key:o(e.code);if(s(a.toLowerCase()))return;if(t.push(a),a!==n.keys?.[t.length-1]){t=[],i&&clearTimeout(i);return}t.length===n.keys?.length&&(R.current(e,n),i&&clearTimeout(i),t=[])}else if(((e,t,i=!1)=>{let{alt:a,meta:r,mod:n,shift:s,ctrl:l,keys:d,useKey:h}=t,{code:m,key:p,ctrlKey:v,metaKey:b,shiftKey:g,altKey:f}=e,E=o(m);if(h&&d?.length===1&&d.includes(p.toLowerCase()))return!0;if(!d?.includes(E)&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(E))return!1;if(!i){if(a!==f&&"alt"!==E||s!==g&&"shift"!==E)return!1;if(n){if(!(typeof navigator>"u")&&/mac/i.test(navigator.userAgent)&&!/iphone|ipad|ipod/i.test(navigator.userAgent)?!b:!v)return!1}else if(r!==b&&"meta"!==E&&"os"!==E||l!==v&&"ctrl"!==E&&"control"!==E)return!1}return!!(d&&1===d.length&&d.includes(E))||(d&&d.length>0?!!d.includes(E)&&function(e,t=","){return(c(e)?e:e.split(t)).every(e=>u.has(e.trim().toLowerCase()))}(d):!d||0===d.length)})(e,n,L?.ignoreModifiers)||n.keys?.includes("*")){var l,h;if(D.current?.(e)||a&&T.current||(("function"==typeof(l=M.current)&&l(e,n)||!0===l)&&e.preventDefault(),"function"==typeof(h=x.current)?!h(e,n):!0!==h&&void 0!==h))return;R.current(e,n),a||(T.current=!0)}})}},r=e=>{void 0!==e.code&&(h(o(e.code)),(L?.keydown===void 0&&L?.keyup!==!0||L?.keydown)&&a(e))},n=e=>{void 0!==e.code&&(m(o(e.code)),T.current=!1,L?.keyup&&a(e,!0))},b=y||w?.document||document;return b.addEventListener("keyup",n,w?.eventListenerOptions),b.addEventListener("keydown",r,w?.eventListenerOptions),N&&l(C,L?.delimiter).forEach(e=>{N.addHotkey(d(e,L?.splitKey,L?.sequenceSplitKey,L?.useKey,L?.description,L?.metadata))}),()=>{b.removeEventListener("keyup",n,w?.eventListenerOptions),b.removeEventListener("keydown",r,w?.eventListenerOptions),N&&l(C,L?.delimiter).forEach(e=>{N.removeHotkey(d(e,L?.splitKey,L?.sequenceSplitKey,L?.useKey,L?.description,L?.metadata))}),t=[],i&&clearTimeout(i)}},[y,L,O,C]),A}},4026:(e,t,i)=>{i.d(t,{M:()=>m});var a,r,n,o,s,l,d=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u=(e,t,i)=>(d(e,t,"read from private field"),i?i.call(e):t.get(e)),c=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},h=(e,t,i,a)=>(d(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class m{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){c(this,s),c(this,a,void 0),c(this,r,void 0),c(this,n,void 0),c(this,o,new Set),h(this,a,e),h(this,r,t),h(this,n,new Set(i))}[Symbol.iterator](){return u(this,s,l).values()}get length(){return u(this,s,l).size}get value(){var e;return null!=(e=[...u(this,s,l)].join(" "))?e:""}set value(e){var t;e!==this.value&&(h(this,o,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...u(this,s,l)][e]}values(){return u(this,s,l).values()}forEach(e,t){u(this,s,l).forEach(e,t)}add(...e){var t,i;e.forEach(e=>u(this,o).add(e)),(""!==this.value||(null==(t=u(this,a))?void 0:t.hasAttribute(`${u(this,r)}`)))&&(null==(i=u(this,a))||i.setAttribute(`${u(this,r)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>u(this,o).delete(e)),null==(t=u(this,a))||t.setAttribute(`${u(this,r)}`,`${this.value}`)}contains(e){return u(this,s,l).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}a=new WeakMap,r=new WeakMap,n=new WeakMap,o=new WeakMap,s=new WeakSet,l=function(){return u(this,o).size?u(this,o):u(this,n)}},4143:(e,t,i)=>{i.d(t,{A:()=>c});var a,r=i(484),n=i(1063),o=i(1885),s=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l=(e,t,i)=>(s(e,t,"read from private field"),i?i.call(e):t.get(e)),d=(e,t,i,a)=>(s(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class u extends o.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,a,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,n.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[r.Ex.MEDIA_CONTROLLER,r.GC.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var n,o,s,u,c;e===r.Ex.MEDIA_CONTROLLER&&(t&&(null==(o=null==(n=l(this,a))?void 0:n.unassociateElement)||o.call(n,this),d(this,a,null)),i&&this.isConnected&&(d(this,a,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(c=null==(u=l(this,a))?void 0:u.associateElement)||c.call(u,this)))}connectedCallback(){var e,t,i,o;let s;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),d(this,a,(i=this,(s=i.getAttribute(r.Ex.MEDIA_CONTROLLER))?null==(o=i.getRootNode())?void 0:o.getElementById(s):(0,n.CQ)(i,"media-controller"))),this.getAttribute(r.Ex.MEDIA_CONTROLLER)&&(null==(t=null==(e=l(this,a))?void 0:e.associateElement)||t.call(e,this)),l(this,a)&&(l(this,a).addEventListener("pointerdown",this),l(this,a).addEventListener("click",this),l(this,a).hasAttribute("tabindex")||(l(this,a).tabIndex=0))}disconnectedCallback(){var e,t,i,n;this.getAttribute(r.Ex.MEDIA_CONTROLLER)&&(null==(t=null==(e=l(this,a))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=l(this,a))||i.removeEventListener("pointerdown",this),null==(n=l(this,a))||n.removeEventListener("click",this),d(this,a,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:n,width:o,height:s}=this.getBoundingClientRect(),l=t-a,d=i-n;if(l<0||d<0||l>o||d>s||0===o&&0===s)return;let u=this._pointerType||"mouse";if(this._pointerType=void 0,u===r.Np.TOUCH)return void this.handleTap(e);if(u===r.Np.MOUSE||u===r.Np.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return(0,n.Y_)(this,r.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,n.QW)(this,r.GC.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?r.a8.MEDIA_PLAY_REQUEST:r.a8.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.Au.CustomEvent(t,{composed:!0,bubbles:!0}))}}a=new WeakMap,u.shadowRootOptions={mode:"open"},u.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},o.Au.customElements.get("media-gesture-receiver")||o.Au.customElements.define("media-gesture-receiver",u);var c=u},4586:(e,t,i)=>{let a,r;i.d(t,{xX:()=>im,dl:()=>i5});var n,o,s,l,d,u,c,h,m,p,v,b,g,f,E,y,k,A,T,w,C,S,I,R,L,x,M,D,O,N,P,U,B,H,W,G,$,q,V,F,K,Y,j,Q,z,Z,X,J,ee,et,ei,ea,er,en,eo,es,el,ed,eu,ec,eh,em,ep,ev,eb,eg,ef,eE,ey,e_,ek,eA,eT,ew,eC,eS,eI,eR,eL,ex,eM,eD,eO,eN,eP,eU,eB,eH,eW,eG,e$,eq,eV,eF,eK,eY,ej,eQ,ez,eZ,eX,eJ,e0,e1,e2,e3,e4,e5,e8,e9,e6,e7,te,tt,ti,ta=i(484),tr=i(178),tn=i(7506);let to=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ts=e=>{if(!(0,tr.gf)(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?(0,tn.t)(to[t].singular):(0,tn.t)(to[t].plural),`${e} ${i}`)}).filter(e=>e).join(", ");return i?(0,tn.t)("{time} remaining",{time:r}):r};function tl(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),o=Math.floor(t/60%60),s=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||s>0?n+":":"")||o>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});var td=i(1251),tu=i(1885),tc=i(4026),th=i(5166),tm=i(1063);let tp="exitFullscreen"in tu.Al?"exitFullscreen":"webkitExitFullscreen"in tu.Al?"webkitExitFullscreen":"webkitCancelFullScreen"in tu.Al?"webkitCancelFullScreen":void 0,tv="fullscreenElement"in tu.Al?"fullscreenElement":"webkitFullscreenElement"in tu.Al?"webkitFullscreenElement":void 0,tb="fullscreenEnabled"in tu.Al?"fullscreenEnabled":"webkitFullscreenEnabled"in tu.Al?"webkitFullscreenEnabled":void 0,tg=()=>{var e,t;return a||(a=null==(t=null==(e=tu.Al)?void 0:e.createElement)?void 0:t.call(e,"video"))},tf=async(e=tg())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([tE(e,i.signal),ty(e,t)]);return i.abort(),a},tE=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),ty=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await (0,tr.cb)(10)}return e.volume!==t},t_=/.*Version\/.*Safari\/.*/.test(tu.Au.navigator.userAgent),tk=(e=tg())=>(!tu.Au.matchMedia("(display-mode: standalone)").matches||!t_)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),tA=(e=tg())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[tb])||i&&"webkitSupportsFullscreen"in i})({documentElement:tu.Al,media:e}),tT=tA(),tw=tk(),tC=!!tu.Au.WebKitPlaybackTargetAvailabilityEvent,tS=!!tu.Au.chrome,tI=e=>(0,th.aI)(e.media,e=>[ta.Up.SUBTITLES,ta.Up.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),tR=e=>(0,th.aI)(e.media,e=>e.mode===ta.lr.SHOWING&&[ta.Up.SUBTITLES,ta.Up.CAPTIONS].includes(e.kind)),tL=(e,t)=>{let i=tI(e),a=tR(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)(0,th.ip)(ta.lr.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=tu.Au.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...tu.Au.navigator.languages]:tu.Au.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:o,kind:s}=t;(0,th.ip)(ta.lr.DISABLED,i,a),(0,th.ip)(ta.lr.SHOWING,i,[{language:n,label:o,kind:s}])}}},tx=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?tM(e,t):Object.entries(e).every(([e,i])=>e in t&&tx(i,t[e])))),tM=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>tx(e,t[i])))},tD=Object.values(ta.U4),tO=tf().then(e=>r=e),tN=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof tu.Au.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=tu.Au.customElements.get(t);i&&e instanceof i||(await tu.Au.customElements.whenDefined(t),tu.Au.customElements.upgrade(e))}))},tP=new tu.Au.DOMParser,tU={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==tu.Au.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&tu.Au.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;tu.Au.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===tu.Au.localStorage.getItem("media-chrome-pref-muted");tU.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?tu.Au.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||tu.Au.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=tu.Au.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;tU.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&(0,tr.gf)(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[ta.U4.LIVE,ta.U4.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(tD.includes(r))return r===ta.U4.UNKNOWN?a:r;let n=t.duration;return n===1/0?ta.U4.LIVE:Number.isFinite(n)?ta.U4.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=tU.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===ta.U4.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(tU.mediaStreamType.get(e)!==ta.U4.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>tI(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>tR(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let o=e=>{var i;n.defaultSubtitles&&(e&&![ta.Up.CAPTIONS,ta.Up.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||tL(t,!0))};return r.addEventListener("loadstart",o),null==(i=r.textTracks)||i.addEventListener("addtrack",o),null==(a=r.textTracks)||a.addEventListener("removetrack",o),()=>{var e,t;r.removeEventListener("loadstart",o),null==(e=r.textTracks)||e.removeEventListener("addtrack",o),null==(t=r.textTracks)||t.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=(0,th.aI)(i,{kind:ta.Up.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&tP.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&(0,tm.qg)(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!tu.Al.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else tu.Al.pictureInPictureElement&&tu.Al.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[tv];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===ta.br.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(tv in e))return(0,tm.qg)(n,r);for(;null==e?void 0:e[tv];){if(e[tv]===r)return!0;e=null==(t=e[tv])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(tp){let e=null==(t=null==i?void 0:i[tp])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&tu.Au.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!tT||!tA(t))return ta.CY.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return tw&&tk(t)?(null==t?void 0:t.disablePictureInPicture)?ta.CY.UNAVAILABLE:void 0:ta.CY.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return ta.CY.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&tO.then(t=>e(t?void 0:ta.CY.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return tS&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?ta.CY.UNAVAILABLE:void 0:ta.CY.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>tC?(null==t?void 0:t.availability)==="not-available"?ta.CY.UNAVAILABLE:void 0:ta.CY.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:ta.CY.UNAVAILABLE:ta.CY.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?ta.CY.UNAVAILABLE:void 0:ta.CY.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},tB={[ta.a8.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let o,s,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=(0,th.aI)(l,{kind:ta.Up.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);s=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),o=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:o,mediaPreviewCoords:s,mediaPreviewChapter:c}},[ta.a8.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[ta.a8.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let o=e.mediaStreamType.get(t)===ta.U4.LIVE,s=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(o&&s&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[ta.a8.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[ta.a8.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[ta.a8.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[ta.a8.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[ta.a8.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[ta.a8.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[ta.a8.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let o=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-o,t)},[ta.a8.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=tI(t),o=(0,th.C2)(i),s=null==(a=o[0])?void 0:a.language;s&&!r.noSubtitlesLangPref&&tu.Au.localStorage.setItem("media-chrome-pref-subtitles-lang",s),(0,th.ip)(ta.lr.SHOWING,n,o)},[ta.a8.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=tI(t);(0,th.ip)(ta.lr.DISABLED,a,null!=i?i:[])},[ta.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){tL(t,i)},[ta.a8.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[ta.a8.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[ta.a8.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[ta.a8.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[ta.a8.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[ta.a8.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[ta.a8.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[ta.a8.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[ta.a8.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var tH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tW=(e,t,i)=>(tH(e,t,"read from private field"),i?i.call(e):t.get(e)),tG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t$=(e,t,i,a)=>(tH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tq=(e,t,i)=>(tH(e,t,"access private method"),i);let tV=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],tF="defaultsubtitles",tK="defaultstreamtype",tY="defaultduration",tj="fullscreenelement",tQ="hotkeys",tz="keyboardbackwardseekoffset",tZ="keyboardforwardseekoffset",tX="keyboarddownvolumestep",tJ="keyboardupvolumestep",t0="keysused",t1="lang",t2="loop",t3="liveedgeoffset",t4="noautoseektolive",t5="nodefaultstore",t8="nohotkeys",t9="nomutedpref",t6="nosubtitleslangpref",t7="novolumepref",ie="seektoliveoffset";class it extends td.yd{constructor(){super(),tG(this,m),tG(this,b),tG(this,f),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,tG(this,n,new tc.M(this,tQ)),tG(this,o,void 0),tG(this,s,void 0),tG(this,l,null),tG(this,d,void 0),tG(this,u,void 0),tG(this,c,e=>{var t;null==(t=tW(this,s))||t.dispatch(e)}),tG(this,h,void 0),tG(this,v,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||tV.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",tW(this,v))}),this.associateElement(this);let e={};t$(this,d,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new tu.Au.CustomEvent(ta.nJ[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(t8,tQ,tK,tF,tY,t9,t7,t1,t2,t3,ie,t4)}get mediaStore(){return tW(this,s)}set mediaStore(e){var t,i;(tW(this,s)&&(null==(t=tW(this,u))||t.call(this),t$(this,u,void 0)),t$(this,s,e),tW(this,s)||this.hasAttribute(t5))?t$(this,u,null==(i=tW(this,s))?void 0:i.subscribe(tW(this,d))):tq(this,m,p).call(this)}get fullscreenElement(){var e;return null!=(e=tW(this,o))?e:this}set fullscreenElement(e){var t;this.hasAttribute(tj)&&this.removeAttribute(tj),t$(this,o,e),null==(t=tW(this,s))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return(0,tm.Y_)(this,tF)}set defaultSubtitles(e){(0,tm.QW)(this,tF,e)}get defaultStreamType(){return(0,tm.vT)(this,tK)}set defaultStreamType(e){(0,tm.tA)(this,tK,e)}get defaultDuration(){return(0,tm.dm)(this,tY)}set defaultDuration(e){(0,tm.pK)(this,tY,e)}get noHotkeys(){return(0,tm.Y_)(this,t8)}set noHotkeys(e){(0,tm.QW)(this,t8,e)}get keysUsed(){return(0,tm.vT)(this,t0)}set keysUsed(e){(0,tm.tA)(this,t0,e)}get liveEdgeOffset(){return(0,tm.dm)(this,t3)}set liveEdgeOffset(e){(0,tm.pK)(this,t3,e)}get noAutoSeekToLive(){return(0,tm.Y_)(this,t4)}set noAutoSeekToLive(e){(0,tm.QW)(this,t4,e)}get noVolumePref(){return(0,tm.Y_)(this,t7)}set noVolumePref(e){(0,tm.QW)(this,t7,e)}get noMutedPref(){return(0,tm.Y_)(this,t9)}set noMutedPref(e){(0,tm.QW)(this,t9,e)}get noSubtitlesLangPref(){return(0,tm.Y_)(this,t6)}set noSubtitlesLangPref(e){(0,tm.QW)(this,t6,e)}get noDefaultStore(){return(0,tm.Y_)(this,t5)}set noDefaultStore(e){(0,tm.QW)(this,t5,e)}attributeChangedCallback(e,t,i){var a,r,l,d,u,c,h,m,p,v,b,g;if(super.attributeChangedCallback(e,t,i),e===t8)i!==t&&""===i?(this.hasAttribute(tQ)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===tQ)tW(this,n).value=i;else if(e===tF&&i!==t)null==(a=tW(this,s))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(tF)}});else if(e===tK)null==(l=tW(this,s))||l.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(tK))?r:void 0}});else if(e===t3&&i!==t)null==(d=tW(this,s))||d.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(t3)?+this.getAttribute(t3):void 0,seekToLiveOffset:this.hasAttribute(ie)?+this.getAttribute(ie):this.hasAttribute(t3)?+this.getAttribute(t3):void 0}});else if(e===ie&&i!==t)null==(u=tW(this,s))||u.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(ie)?+this.getAttribute(ie):this.hasAttribute(t3)?+this.getAttribute(t3):void 0}});else if(e===t4)null==(c=tW(this,s))||c.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(t4)}});else if(e===tj){let e=i?null==(h=this.getRootNode())?void 0:h.getElementById(i):void 0;t$(this,o,e),null==(m=tW(this,s))||m.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===t1&&i!==t?((0,tn.x)(i),null==(p=tW(this,s))||p.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===t2&&i!==t?null==(v=tW(this,s))||v.dispatch({type:ta.a8.MEDIA_LOOP_REQUEST,detail:null!=i}):e===t7&&i!==t?null==(b=tW(this,s))||b.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(t7)}}):e===t9&&i!==t&&(null==(g=tW(this,s))||g.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(t9)}}))}connectedCallback(){var e,t,i;this.associateElement(this),tW(this,s)||this.hasAttribute(t5)||tq(this,m,p).call(this),null==(e=tW(this,s))||e.dispatch({type:"documentelementchangerequest",detail:tu.Al}),null==(t=tW(this,s))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),tW(this,s)&&!tW(this,u)&&t$(this,u,null==(i=tW(this,s))?void 0:i.subscribe(tW(this,d))),void 0!==tW(this,h)&&tW(this,s)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=tW(this,s))||i.dispatch({type:ta.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:tW(this,h)}))},0),this.hasAttribute(t8)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),tW(this,s)){let e=tW(this,s).getState();t$(this,h,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=tW(this,s))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=tW(this,s))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=tW(this,s))||r.dispatch({type:ta.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}tW(this,u)&&(null==(n=tW(this,u))||n.call(this),t$(this,u,void 0)),this.unassociateElement(this),tW(this,l)&&(tW(this,l).remove(),t$(this,l,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=tW(this,s))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=tW(this,s))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){ic(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=ih(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(ta.a8).forEach(t=>{e.addEventListener(t,tW(this,c))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(ta.a8).forEach(t=>{e.removeEventListener(t,tW(this,c))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),tW(this,s)&&Object.entries(tW(this,s).getState()).forEach(([t,i])=>{ic([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",tq(this,b,g))}disableHotkeys(){this.removeEventListener("keydown",tq(this,b,g)),this.removeEventListener("keyup",tW(this,v))}get hotkeys(){return tW(this,n)}set hotkeys(e){(0,tm.tA)(this,tQ,e)}keyboardShortcutHandler(e){var t,i,a,r,o,l,d,u,c;let h,m,p,v=e.target;if(!((null!=(a=null!=(i=null==(t=v.getAttribute(t0))?void 0:t.split(" "))?i:null==v?void 0:v.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||tW(this,n).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&tW(this,n).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&tW(this,n).contains("noshift+/")))switch(e.key){case" ":case"k":h=tW(this,s).getState().mediaPaused?ta.a8.MEDIA_PLAY_REQUEST:ta.a8.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new tu.Au.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"m":h="off"===this.mediaStore.getState().mediaVolumeLevel?ta.a8.MEDIA_UNMUTE_REQUEST:ta.a8.MEDIA_MUTE_REQUEST,this.dispatchEvent(new tu.Au.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"f":h=this.mediaStore.getState().mediaIsFullscreen?ta.a8.MEDIA_EXIT_FULLSCREEN_REQUEST:ta.a8.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new tu.Au.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new tu.Au.CustomEvent(ta.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(tz)?+this.getAttribute(tz):10;m=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),p=new tu.Au.CustomEvent(ta.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(p);break}case"ArrowRight":case"l":{let e=this.hasAttribute(tZ)?+this.getAttribute(tZ):10;m=Math.max((null!=(o=this.mediaStore.getState().mediaCurrentTime)?o:0)+e,0),p=new tu.Au.CustomEvent(ta.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(p);break}case"ArrowUp":{let e=this.hasAttribute(tJ)?+this.getAttribute(tJ):.025;m=Math.min((null!=(l=this.mediaStore.getState().mediaVolume)?l:1)+e,1),p=new tu.Au.CustomEvent(ta.a8.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(p);break}case"ArrowDown":{let e=this.hasAttribute(tX)?+this.getAttribute(tX):.025;m=Math.max((null!=(d=this.mediaStore.getState().mediaVolume)?d:1)-e,0),p=new tu.Au.CustomEvent(ta.a8.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(p);break}case"<":m=Math.max((null!=(u=this.mediaStore.getState().mediaPlaybackRate)?u:1)-.25,.25).toFixed(2),p=new tu.Au.CustomEvent(ta.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(p);break;case">":m=Math.min((null!=(c=this.mediaStore.getState().mediaPlaybackRate)?c:1)+.25,2).toFixed(2),p=new tu.Au.CustomEvent(ta.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(p);break;case"/":case"?":e.shiftKey&&tq(this,f,E).call(this);break;case"p":h=this.mediaStore.getState().mediaIsPip?ta.a8.MEDIA_EXIT_PIP_REQUEST:ta.a8.MEDIA_ENTER_PIP_REQUEST,p=new tu.Au.CustomEvent(h,{composed:!0,bubbles:!0}),this.dispatchEvent(p)}}}n=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,m=new WeakSet,p=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=tU,requestMap:r=tB,options:n={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{let s,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||tx(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,g,f,E,y,k,A,T,w,C;let S=!!s;if(s={...d,...null!=s?s:{},...e},S)return;await tN(...Object.values(e));let I=l.length>0&&0===t&&o,R=d.media!==s.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=s.media)?void 0:r.textTracks),x=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=s.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=s.media)?void 0:v.audioTracks),D=(null==(b=d.media)?void 0:b.remote)!==(null==(g=s.media)?void 0:g.remote),O=d.documentElement!==s.documentElement,N=!!d.media&&(R||I),P=!!(null==(f=d.media)?void 0:f.textTracks)&&(L||I),U=!!(null==(E=d.media)?void 0:E.videoRenditions)&&(x||I),B=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||I),H=!!(null==(k=d.media)?void 0:k.remote)&&(D||I),W=!!d.documentElement&&(O||I),G=N||P||U||B||H||W,$=0===l.length&&1===t&&o,q=!!s.media&&(R||$),V=!!(null==(A=s.media)?void 0:A.textTracks)&&(L||$),F=!!(null==(T=s.media)?void 0:T.videoRenditions)&&(x||$),K=!!(null==(w=s.media)?void 0:w.audioTracks)&&(M||$),Y=!!(null==(C=s.media)?void 0:C.remote)&&(D||$),j=!!s.documentElement&&(O||$),Q=q||V||F||K||Y||j;if(!(G||Q)){Object.entries(s).forEach(([e,t])=>{d[e]=t}),h(),s=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:o=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(s.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),V&&(null==(a=s.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),F&&(null==(a=s.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),K&&(null==(a=s.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,o.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),Y&&(null==(a=s.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(s.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&G&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,s)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else G&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(s).forEach(([e,t])=>{d[e]=t}),h(),s=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(tF),defaultDuration:this.hasAttribute(tY)?+this.getAttribute(tY):void 0,defaultStreamType:null!=(e=this.getAttribute(tK))?e:void 0,liveEdgeOffset:this.hasAttribute(t3)?+this.getAttribute(t3):void 0,seekToLiveOffset:this.hasAttribute(ie)?+this.getAttribute(ie):this.hasAttribute(t3)?+this.getAttribute(t3):void 0,noAutoSeekToLive:this.hasAttribute(t4),noVolumePref:this.hasAttribute(t7),noMutedPref:this.hasAttribute(t9),noSubtitlesLangPref:this.hasAttribute(t6)}})},v=new WeakMap,b=new WeakSet,g=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:o}=e,s=o&&("/"===r||"?"===r);if(s&&(null==(t=tW(this,l))?void 0:t.open)||i||a||!s&&!tV.includes(r))return void this.removeEventListener("keyup",tW(this,v));let d=e.target,u=d instanceof HTMLElement&&("media-volume-range"===d.tagName.toLowerCase()||"media-time-range"===d.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||tW(this,n).contains(`no${r.toLowerCase()}`)||" "===r&&tW(this,n).contains("nospace")||u||e.preventDefault(),this.addEventListener("keyup",tW(this,v),{once:!0})},f=new WeakSet,E=function(){tW(this,l)||(t$(this,l,tu.Al.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(tW(this,l))),tW(this,l).open=!0};let ii=Object.values(ta.GC),ia=Object.values(ta.LJ),ir=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(tu.Au.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,ta.Ex.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>ii.includes(e)):[]},io=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&tu.Au.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof tu.Au.customElements.get(e.nodeName.toLowerCase()))&&tu.Au.customElements.upgrade(e),ia.some(t=>t in e)||!!ir(e).length},is=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},il={[ta.GC.MEDIA_SUBTITLES_LIST]:th.mc,[ta.GC.MEDIA_SUBTITLES_SHOWING]:th.mc,[ta.GC.MEDIA_SEEKABLE]:is,[ta.GC.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(is).join(" "),[ta.GC.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[ta.GC.MEDIA_RENDITION_LIST]:tr.SF,[ta.GC.MEDIA_AUDIO_TRACK_LIST]:tr.Br},id=async(e,t,i)=>{var a,r;if(e.isConnected||await (0,tr.cb)(0),"boolean"==typeof i||null==i)return(0,tm.QW)(e,t,i);if("number"==typeof i)return(0,tm.pK)(e,t,i);if("string"==typeof i)return(0,tm.tA)(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=il[t])?void 0:a.call(il,i))?r:i;return e.setAttribute(t,n)},iu=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;io(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>iu(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!io(e)?tu.Au.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},ic=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=ir(e),r=t.toLowerCase();a.includes(r)&&id(e,r,i)})},ih=(e,t,i)=>{iu(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(ta.a8.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(ta.a8.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],o=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>iu(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>iu(e,t)))};e.addEventListener("slotchange",o);let s=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:o,attributeName:s}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>iu(e,t)),Array.prototype.forEach.call(r,e=>iu(e,i))):"attributes"===n&&s===ta.Ex.MEDIA_CHROME_ATTRIBUTES&&(io(o)?t(o):i(o))})});return s.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{iu(e,i),e.removeEventListener("slotchange",o),s.disconnect(),e.removeEventListener(ta.a8.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(ta.a8.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};tu.Au.customElements.get("media-controller")||tu.Au.customElements.define("media-controller",it);var im=it,ip=i(197);let iv=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,ib=e=>{let t=e.mediaIsAirplaying?(0,tn.t)("stop airplay"):(0,tn.t)("start airplay");e.setAttribute("aria-label",t)};class ig extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_IS_AIRPLAYING,ta.GC.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ib(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_IS_AIRPLAYING&&ib(this)}get mediaIsAirplaying(){return(0,tm.Y_)(this,ta.GC.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){(0,tm.QW)(this,ta.GC.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return(0,tm.vT)(this,ta.GC.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){(0,tm.tA)(this,ta.GC.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new tu.Au.CustomEvent(ta.a8.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}ig.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${ta.GC.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${ta.GC.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${ta.GC.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iv}</slot>
      <slot name="exit">${iv}</slot>
    </slot>
  `},ig.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tn.t)("start airplay")}</slot>
    <slot name="tooltip-exit">${(0,tn.t)("stop airplay")}</slot>
  `},tu.Au.customElements.get("media-airplay-button")||tu.Au.customElements.define("media-airplay-button",ig);let iE=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,iy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,i_=e=>{e.setAttribute("aria-checked",(0,th.VV)(e).toString())};class ik extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_SUBTITLES_LIST,ta.GC.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",(0,tn.t)("closed captions")),i_(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_SUBTITLES_SHOWING&&i_(this)}get mediaSubtitlesList(){return iA(this,ta.GC.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){iT(this,ta.GC.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return iA(this,ta.GC.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){iT(this,ta.GC.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new tu.Au.CustomEvent(ta.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}ik.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${iE}</slot>
      <slot name="off">${iy}</slot>
    </slot>
  `},ik.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${(0,tn.t)("Enable captions")}</slot>
    <slot name="tooltip-disable">${(0,tn.t)("Disable captions")}</slot>
  `};let iA=(e,t)=>{let i=e.getAttribute(t);return i?(0,th.W5)(i):[]},iT=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=(0,th.mc)(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tu.Au.customElements.get("media-captions-button")||tu.Au.customElements.define("media-captions-button",ik);let iw=e=>{let t=e.mediaIsCasting?(0,tn.t)("stop casting"):(0,tn.t)("start casting");e.setAttribute("aria-label",t)};class iC extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_IS_CASTING,ta.GC.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iw(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_IS_CASTING&&iw(this)}get mediaIsCasting(){return(0,tm.Y_)(this,ta.GC.MEDIA_IS_CASTING)}set mediaIsCasting(e){(0,tm.QW)(this,ta.GC.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return(0,tm.vT)(this,ta.GC.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){(0,tm.tA)(this,ta.GC.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?ta.a8.MEDIA_EXIT_CAST_REQUEST:ta.a8.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new tu.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}iC.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${ta.GC.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${ta.GC.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${ta.GC.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},iC.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tn.t)("Start casting")}</slot>
    <slot name="tooltip-exit">${(0,tn.t)("Stop casting")}</slot>
  `},tu.Au.customElements.get("media-cast-button")||tu.Au.customElements.define("media-cast-button",iC);var iS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iI=(e,t,i)=>(iS(e,t,"read from private field"),i?i.call(e):t.get(e)),iR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iL=(e,t,i,a)=>(iS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ix=(e,t,i)=>(iS(e,t,"access private method"),i);let iM="open";class iD extends tu.Au.HTMLElement{constructor(){super(),iR(this,T),iR(this,C),iR(this,I),iR(this,L),iR(this,M),iR(this,O),iR(this,y,!1),iR(this,k,null),iR(this,A,null)}static get observedAttributes(){return[iM,"anchor"]}get open(){return(0,tm.Y_)(this,iM)}set open(e){(0,tm.QW)(this,iM,e)}handleEvent(e){switch(e.type){case"invoke":ix(this,L,x).call(this,e);break;case"focusout":ix(this,M,D).call(this,e);break;case"keydown":ix(this,O,N).call(this,e)}}connectedCallback(){ix(this,T,w).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){ix(this,T,w).call(this),e===iM&&i!==t&&(this.open?ix(this,C,S).call(this):ix(this,I,R).call(this))}focus(){iL(this,k,(0,tm.bq)());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}y=new WeakMap,k=new WeakMap,A=new WeakMap,T=new WeakSet,w=function(){if(!iI(this,y)&&(iL(this,y,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=(0,tm.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=(0,tm.aQ)(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},C=new WeakSet,S=function(){var e;null==(e=iI(this,A))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},I=new WeakSet,R=function(){var e;null==(e=iI(this,A))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},L=new WeakSet,x=function(e){iL(this,A,e.relatedTarget),(0,tm.qg)(this,e.relatedTarget)||(this.open=!this.open)},M=new WeakSet,D=function(e){var t;!(0,tm.qg)(this,e.relatedTarget)&&(null==(t=iI(this,k))||t.focus(),iI(this,A)&&iI(this,A)!==e.relatedTarget&&this.open&&(this.open=!1))},O=new WeakSet,N=function(e){var t,i,a,r,n;let{key:o,ctrlKey:s,altKey:l,metaKey:d}=e;s||l||d||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),"Tab"===o?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===o&&(null==(n=iI(this,k))||n.focus(),this.open=!1))},iD.shadowRootOptions={mode:"open"},iD.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},iD.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},tu.Au.customElements.get("media-chrome-dialog")||tu.Au.customElements.define("media-chrome-dialog",iD);var iO=i(5770),iN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iP=(e,t,i)=>(iN(e,t,"read from private field"),i?i.call(e):t.get(e)),iU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iB=(e,t,i,a)=>(iN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iH=(e,t,i)=>(iN(e,t,"access private method"),i);class iW extends tu.Au.HTMLElement{constructor(){if(super(),iU(this,F),iU(this,Y),iU(this,Q),iU(this,Z),iU(this,J),iU(this,et),iU(this,ea),iU(this,en),iU(this,P,void 0),iU(this,U,void 0),iU(this,B,void 0),iU(this,H,void 0),iU(this,W,{}),iU(this,G,[]),iU(this,$,()=>{if(this.range.matches(":focus-visible")){let{style:e}=(0,tm.aQ)(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),iU(this,q,()=>{let{style:e}=(0,tm.aQ)(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),iU(this,V,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tm.kg)(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),iB(this,B,this.shadowRoot.querySelector("#startpoint")),iB(this,H,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",ta.Ex.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,s;e===ta.Ex.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=iP(this,P))?void 0:a.unassociateElement)||r.call(a,this),iB(this,P,null)),i&&this.isConnected&&(iB(this,P,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(s=null==(o=iP(this,P))?void 0:o.associateElement)||s.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),iH(this,Y,j).call(this)):(this.range.setAttribute(e,i),iH(this,Q,z).call(this)))}connectedCallback(){var e,t,i;let{style:a}=(0,tm.aQ)(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),iP(this,W).pointer=(0,tm.aQ)(this.shadowRoot,"#pointer"),iP(this,W).progress=(0,tm.aQ)(this.shadowRoot,"#progress"),iP(this,W).thumb=(0,tm.aQ)(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),iP(this,W).activeSegment=(0,tm.aQ)(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(ta.Ex.MEDIA_CONTROLLER);r&&(iB(this,P,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iP(this,P))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",iP(this,$)),this.shadowRoot.addEventListener("focusout",iP(this,q)),iH(this,Y,j).call(this),(0,iO.v)(this.container,iP(this,V))}disconnectedCallback(){var e,t;iH(this,Q,z).call(this),null==(t=null==(e=iP(this,P))?void 0:e.unassociateElement)||t.call(e,this),iB(this,P,null),this.shadowRoot.removeEventListener("focusin",iP(this,$)),this.shadowRoot.removeEventListener("focusout",iP(this,q)),(0,iO.u)(this.container,iP(this,V))}updatePointerBar(e){var t;null==(t=iP(this,W).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=iP(this,W).progress)||e.style.setProperty("width",`${i}%`),null==(t=iP(this,W).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];iB(this,G,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,o]=[0===e,e===i.length-1],s=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=o?a:i[e+1],d=`calc(${(l-r)*100}%${n||o?"":" - var(--segments-gap)"})`,u=tu.Al.createElementNS("http://www.w3.org/2000/svg","rect"),c=(0,tm.Vw)(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",s),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return(0,tm.DI)(e.clientX,e.clientY,iP(this,B).getBoundingClientRect(),iP(this,H).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":iH(this,en,eo).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":iH(this,J,ee).call(this,e);break;case"pointerdown":iH(this,Z,X).call(this,e);break;case"pointerup":iH(this,et,ei).call(this);break;case"pointerleave":iH(this,ea,er).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}P=new WeakMap,U=new WeakMap,B=new WeakMap,H=new WeakMap,W=new WeakMap,G=new WeakMap,$=new WeakMap,q=new WeakMap,V=new WeakMap,F=new WeakSet,K=function(e){let t=iP(this,W).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=iP(this,G).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},Y=new WeakSet,j=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},Q=new WeakSet,z=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=tu.Au.window)||e.removeEventListener("pointerup",this),null==(t=tu.Au.window)||t.removeEventListener("pointermove",this)},Z=new WeakSet,X=function(e){var t;iB(this,U,e.composedPath().includes(this.range)),null==(t=tu.Au.window)||t.addEventListener("pointerup",this,{once:!0})},J=new WeakSet,ee=function(e){var t;"mouse"!==e.pointerType&&iH(this,Z,X).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=tu.Au.window)||t.addEventListener("pointermove",this)},et=new WeakSet,ei=function(){var e;null==(e=tu.Au.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},ea=new WeakSet,er=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=tu.Au.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=iP(this,W).activeSegment)||t.style.removeProperty("transform")},en=new WeakSet,eo=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),iH(this,F,K).call(this,e),this.dragging&&("mouse"!==e.pointerType||!iP(this,U))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},iW.shadowRootOptions={mode:"open"},iW.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},iW.getContainerTemplateHTML=function(e){return""},tu.Au.customElements.get("media-chrome-range")||tu.Au.customElements.define("media-chrome-range",iW);var iG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i$=(e,t,i)=>(iG(e,t,"read from private field"),i?i.call(e):t.get(e)),iq=(e,t,i,a)=>(iG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iV extends tu.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,es,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tm.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ta.Ex.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,s;e===ta.Ex.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=i$(this,es))?void 0:a.unassociateElement)||r.call(a,this),iq(this,es,null)),i&&this.isConnected&&(iq(this,es,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(s=null==(o=i$(this,es))?void 0:o.associateElement)||s.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(ta.Ex.MEDIA_CONTROLLER);a&&(iq(this,es,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=i$(this,es))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=i$(this,es))?void 0:e.unassociateElement)||t.call(e,this),iq(this,es,null)}}es=new WeakMap,iV.shadowRootOptions={mode:"open"},iV.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},tu.Au.customElements.get("media-control-bar")||tu.Au.customElements.define("media-control-bar",iV);var iF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iK=(e,t,i)=>(iF(e,t,"read from private field"),i?i.call(e):t.get(e)),iY=(e,t,i,a)=>(iF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ij extends tu.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,el,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tm.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ta.Ex.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,s;e===ta.Ex.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iK(this,el))?void 0:a.unassociateElement)||r.call(a,this),iY(this,el,null)),i&&this.isConnected&&(iY(this,el,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(s=null==(o=iK(this,el))?void 0:o.associateElement)||s.call(o,this)))}connectedCallback(){var e,t,i;let{style:a}=(0,tm.aQ)(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(ta.Ex.MEDIA_CONTROLLER);r&&(iY(this,el,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iK(this,el))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iK(this,el))?void 0:e.unassociateElement)||t.call(e,this),iY(this,el,null)}}el=new WeakMap,ij.shadowRootOptions={mode:"open"},ij.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},ij.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},tu.Au.customElements.get("media-text-display")||tu.Au.customElements.define("media-text-display",ij);var iQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iz=(e,t,i)=>(iQ(e,t,"read from private field"),i?i.call(e):t.get(e));class iZ extends ij{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ed,void 0),((e,t,i,a)=>(iQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,ed,this.shadowRoot.querySelector("slot")),iz(this,ed).textContent=tl(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===ta.GC.MEDIA_DURATION&&(iz(this,ed).textContent=tl(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return(0,tm.dm)(this,ta.GC.MEDIA_DURATION)}set mediaDuration(e){(0,tm.pK)(this,ta.GC.MEDIA_DURATION,e)}}ed=new WeakMap,iZ.getSlotTemplateHTML=function(e,t){return`
    <slot>${tl(t.mediaDuration)}</slot>
  `},tu.Au.customElements.get("media-duration-display")||tu.Au.customElements.define("media-duration-display",iZ);let iX={2:(0,tn.t)("Network Error"),3:(0,tn.t)("Decode Error"),4:(0,tn.t)("Source Not Supported"),5:(0,tn.t)("Encryption Error")},iJ={2:(0,tn.t)("A network error caused the media download to fail."),3:(0,tn.t)("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:(0,tn.t)("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:(0,tn.t)("The media is encrypted and there are no keys to decrypt it.")},i0=e=>{var t,i;return 1===e.code?null:{title:null!=(t=iX[e.code])?t:`Error ${e.code}`,message:null!=(i=iJ[e.code])?i:e.message}};var i1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function i2(e){var t;let{title:i,message:a}=null!=(t=i0(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let i3=[ta.GC.MEDIA_ERROR_CODE,ta.GC.MEDIA_ERROR_MESSAGE];class i4 extends iD{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eu,null)}static get observedAttributes(){return[...super.observedAttributes,...i3]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!i3.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==i0(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=i0(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return i1(this,e=eu,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;i1(this,t=eu,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return(0,tm.dm)(this,"mediaerrorcode")}set mediaErrorCode(e){(0,tm.pK)(this,"mediaerrorcode",e)}get mediaErrorMessage(){return(0,tm.vT)(this,"mediaerrormessage")}set mediaErrorMessage(e){(0,tm.tA)(this,"mediaerrormessage",e)}}eu=new WeakMap,i4.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${i2({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},i4.formatErrorMessage=i2,tu.Au.customElements.get("media-error-dialog")||tu.Au.customElements.define("media-error-dialog",i4);var i5=i4,i8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},i9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class i6 extends iD{constructor(){super(...arguments),i9(this,ec,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),i9(this,eh,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",i8(this,ec)),document.addEventListener("keydown",i8(this,eh)))}disconnectedCallback(){this.removeEventListener("click",i8(this,ec)),document.removeEventListener("keydown",i8(this,eh))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",i8(this,ec)),document.addEventListener("keydown",i8(this,eh))):(this.removeEventListener("click",i8(this,ec)),document.removeEventListener("keydown",i8(this,eh))))}}ec=new WeakMap,eh=new WeakMap,i6.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},tu.Au.customElements.get("media-keyboard-shortcuts-dialog")||tu.Au.customElements.define("media-keyboard-shortcuts-dialog",i6);var i7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let ae=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,at=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,ai=e=>{let t=e.mediaIsFullscreen?(0,tn.t)("exit fullscreen mode"):(0,tn.t)("enter fullscreen mode");e.setAttribute("aria-label",t)};class aa extends ip.T{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,em,null)}static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_IS_FULLSCREEN,ta.GC.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ai(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_IS_FULLSCREEN&&ai(this)}get mediaFullscreenUnavailable(){return(0,tm.vT)(this,ta.GC.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){(0,tm.tA)(this,ta.GC.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return(0,tm.Y_)(this,ta.GC.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){(0,tm.QW)(this,ta.GC.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;i7(this,t=em,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(i7(this,a=em,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),o=this.mediaIsFullscreen?new tu.Au.CustomEvent(ta.a8.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new tu.Au.CustomEvent(ta.a8.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(o)}}em=new WeakMap,aa.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${ta.GC.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${ta.GC.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${ta.GC.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ae}</slot>
      <slot name="exit">${at}</slot>
    </slot>
  `},aa.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tn.t)("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${(0,tn.t)("Exit fullscreen mode")}</slot>
  `},tu.Au.customElements.get("media-fullscreen-button")||tu.Au.customElements.define("media-fullscreen-button",aa),i(4143);let{MEDIA_TIME_IS_LIVE:ar,MEDIA_PAUSED:an}=ta.GC,{MEDIA_SEEK_TO_LIVE_REQUEST:ao,MEDIA_PLAY_REQUEST:as}=ta.a8,al=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?(0,tn.t)("seek to live"):(0,tn.t)("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=(0,tn.t)("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class ad extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ar,an]}connectedCallback(){super.connectedCallback(),al(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),al(this)}get mediaPaused(){return(0,tm.Y_)(this,ta.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tm.QW)(this,ta.GC.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return(0,tm.Y_)(this,ta.GC.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){(0,tm.QW)(this,ta.GC.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new tu.Au.CustomEvent(ao,{composed:!0,bubbles:!0})),this.hasAttribute(an)&&this.dispatchEvent(new tu.Au.CustomEvent(as,{composed:!0,bubbles:!0})))}}ad.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ar}]:not([${an}])) slot[name=indicator] > *,
      :host([${ar}]:not([${an}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ar}]:not([${an}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${(0,tn.t)("live")}</slot>
  `},tu.Au.customElements.get("media-live-button")||tu.Au.customElements.define("media-live-button",ad);var au=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ac=(e,t,i)=>(au(e,t,"read from private field"),i?i.call(e):t.get(e)),ah=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},am=(e,t,i,a)=>(au(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ap="loadingdelay",av="noautohide",ab=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class ag extends tu.Au.HTMLElement{constructor(){if(super(),ah(this,ep,void 0),ah(this,ev,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tm.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ta.Ex.MEDIA_CONTROLLER,ta.GC.MEDIA_PAUSED,ta.GC.MEDIA_LOADING,ap]}attributeChangedCallback(e,t,i){var a,r,n,o,s;e===ap&&t!==i?this.loadingDelay=Number(i):e===ta.Ex.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ac(this,ep))?void 0:a.unassociateElement)||r.call(a,this),am(this,ep,null)),i&&this.isConnected&&(am(this,ep,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(s=null==(o=ac(this,ep))?void 0:o.associateElement)||s.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(ta.Ex.MEDIA_CONTROLLER);a&&(am(this,ep,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ac(this,ep))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ac(this,ep))?void 0:e.unassociateElement)||t.call(e,this),am(this,ep,null)}get loadingDelay(){return ac(this,ev)}set loadingDelay(e){am(this,ev,e);let{style:t}=(0,tm.aQ)(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return(0,tm.Y_)(this,ta.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tm.QW)(this,ta.GC.MEDIA_PAUSED,e)}get mediaLoading(){return(0,tm.Y_)(this,ta.GC.MEDIA_LOADING)}set mediaLoading(e){(0,tm.QW)(this,ta.GC.MEDIA_LOADING,e)}get mediaController(){return(0,tm.vT)(this,ta.Ex.MEDIA_CONTROLLER)}set mediaController(e){(0,tm.tA)(this,ta.Ex.MEDIA_CONTROLLER,e)}get noAutohide(){return(0,tm.Y_)(this,av)}set noAutohide(e){(0,tm.QW)(this,av,e)}}ep=new WeakMap,ev=new WeakMap,ag.shadowRootOptions={mode:"open"},ag.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${ta.GC.MEDIA_LOADING}]:not([${ta.GC.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${ta.GC.MEDIA_LOADING}]:not([${ta.GC.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${ta.GC.MEDIA_LOADING}]:not([${ta.GC.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${ab}</slot>
    <div id="status" role="status" aria-live="polite">${(0,tn.t)("media loading")}</div>
  `},tu.Au.customElements.get("media-loading-indicator")||tu.Au.customElements.define("media-loading-indicator",ag);let af=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,aE=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,ay=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,a_=e=>{let t="off"===e.mediaVolumeLevel?(0,tn.t)("unmute"):(0,tn.t)("mute");e.setAttribute("aria-label",t)};class ak extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),a_(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_VOLUME_LEVEL&&a_(this)}get mediaVolumeLevel(){return(0,tm.vT)(this,ta.GC.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){(0,tm.tA)(this,ta.GC.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?ta.a8.MEDIA_UNMUTE_REQUEST:ta.a8.MEDIA_MUTE_REQUEST;this.dispatchEvent(new tu.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}ak.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${ta.GC.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${ta.GC.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${ta.GC.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${ta.GC.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${af}</slot>
      <slot name="low">${aE}</slot>
      <slot name="medium">${aE}</slot>
      <slot name="high">${ay}</slot>
    </slot>
  `},ak.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${(0,tn.t)("Mute")}</slot>
    <slot name="tooltip-unmute">${(0,tn.t)("Unmute")}</slot>
  `},tu.Au.customElements.get("media-mute-button")||tu.Au.customElements.define("media-mute-button",ak);let aA=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,aT=e=>{let t=e.mediaIsPip?(0,tn.t)("exit picture in picture mode"):(0,tn.t)("enter picture in picture mode");e.setAttribute("aria-label",t)};class aw extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_IS_PIP,ta.GC.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),aT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_IS_PIP&&aT(this)}get mediaPipUnavailable(){return(0,tm.vT)(this,ta.GC.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){(0,tm.tA)(this,ta.GC.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return(0,tm.Y_)(this,ta.GC.MEDIA_IS_PIP)}set mediaIsPip(e){(0,tm.QW)(this,ta.GC.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?ta.a8.MEDIA_EXIT_PIP_REQUEST:ta.a8.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new tu.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}aw.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${ta.GC.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${ta.GC.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${ta.GC.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${aA}</slot>
      <slot name="exit">${aA}</slot>
    </slot>
  `},aw.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tn.t)("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${(0,tn.t)("Exit picture in picture mode")}</slot>
  `},tu.Au.customElements.get("media-pip-button")||tu.Au.customElements.define("media-pip-button",aw),i(793);let aC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,aS=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,aI=e=>{let t=e.mediaPaused?(0,tn.t)("play"):(0,tn.t)("pause");e.setAttribute("aria-label",t)};class aR extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_PAUSED,ta.GC.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),aI(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===ta.GC.MEDIA_PAUSED||e===ta.GC.MEDIA_LANG)&&aI(this)}get mediaPaused(){return(0,tm.Y_)(this,ta.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tm.QW)(this,ta.GC.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?ta.a8.MEDIA_PLAY_REQUEST:ta.a8.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new tu.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}aR.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${ta.GC.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${ta.GC.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${ta.GC.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${ta.GC.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${aC}</slot>
      <slot name="pause">${aS}</slot>
    </slot>
  `},aR.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${(0,tn.t)("Play")}</slot>
    <slot name="tooltip-pause">${(0,tn.t)("Pause")}</slot>
  `},tu.Au.customElements.get("media-play-button")||tu.Au.customElements.define("media-play-button",aR);let aL="placeholdersrc";class ax extends tu.Au.HTMLElement{static get observedAttributes(){return[aL,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tm.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===aL)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return(0,tm.vT)(this,aL)}set placeholderSrc(e){(0,tm.tA)(this,"src",e)}get src(){return(0,tm.vT)(this,"src")}set src(e){(0,tm.tA)(this,"src",e)}}ax.shadowRootOptions={mode:"open"},ax.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},tu.Au.customElements.get("media-poster-image")||tu.Au.customElements.define("media-poster-image",ax);var aM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class aD extends ij{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eb,void 0),((e,t,i,a)=>(aM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eb,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_PREVIEW_CHAPTER,ta.GC.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===ta.GC.MEDIA_PREVIEW_CHAPTER||e===ta.GC.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((aM(this,a=eb,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=(0,tn.t)("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return(0,tm.vT)(this,ta.GC.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){(0,tm.tA)(this,ta.GC.MEDIA_PREVIEW_CHAPTER,e)}}eb=new WeakMap,tu.Au.customElements.get("media-preview-chapter-display")||tu.Au.customElements.define("media-preview-chapter-display",aD);var aO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aN=(e,t,i)=>(aO(e,t,"read from private field"),i?i.call(e):t.get(e)),aP=(e,t,i,a)=>(aO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aU extends tu.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eg,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tm.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ta.Ex.MEDIA_CONTROLLER,ta.GC.MEDIA_PREVIEW_IMAGE,ta.GC.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(ta.Ex.MEDIA_CONTROLLER);a&&(aP(this,eg,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aN(this,eg))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aN(this,eg))?void 0:e.unassociateElement)||t.call(e,this),aP(this,eg,null)}attributeChangedCallback(e,t,i){var a,r,n,o,s;[ta.GC.MEDIA_PREVIEW_IMAGE,ta.GC.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===ta.Ex.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aN(this,eg))?void 0:a.unassociateElement)||r.call(a,this),aP(this,eg,null)),i&&this.isConnected&&(aP(this,eg,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(s=null==(o=aN(this,eg))?void 0:o.associateElement)||s.call(o,this)))}get mediaPreviewImage(){return(0,tm.vT)(this,ta.GC.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){(0,tm.tA)(this,ta.GC.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(ta.GC.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(ta.GC.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(ta.GC.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,o,s]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/o,a=parseInt(c)/s,r=parseInt(h)/o,n=parseInt(m)/s;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/o,parseInt(c)/s),a=Math.max(parseInt(h)/o,parseInt(m)/s),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=(0,tm.aQ)(this.shadowRoot,":host"),v=(0,tm.aQ)(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=1>Math.min(e,t)?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${o*e}px`,p.height=`${s*t}px`;let f=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};b.src!==l&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,f(),b.onload=null},b.src=l,f()),f(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}eg=new WeakMap,aU.shadowRootOptions={mode:"open"},aU.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},tu.Au.customElements.get("media-preview-thumbnail")||tu.Au.customElements.define("media-preview-thumbnail",aU);var aB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aH=(e,t,i)=>(aB(e,t,"read from private field"),i?i.call(e):t.get(e));class aW extends ij{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ef,void 0),((e,t,i,a)=>(aB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,ef,this.shadowRoot.querySelector("slot")),aH(this,ef).textContent=tl(0)}static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_PREVIEW_TIME&&null!=i&&(aH(this,ef).textContent=tl(parseFloat(i)))}get mediaPreviewTime(){return(0,tm.dm)(this,ta.GC.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){(0,tm.pK)(this,ta.GC.MEDIA_PREVIEW_TIME,e)}}ef=new WeakMap,tu.Au.customElements.get("media-preview-time-display")||tu.Au.customElements.define("media-preview-time-display",aW);let aG="seekoffset";class a$ extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_CURRENT_TIME,aG]}connectedCallback(){super.connectedCallback(),this.seekOffset=(0,tm.dm)(this,aG,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",(0,tn.t)("seek back {seekOffset} seconds",{seekOffset:a})),e===aG&&(this.seekOffset=(0,tm.dm)(this,aG,30))}get seekOffset(){return(0,tm.dm)(this,aG,30)}set seekOffset(e){(0,tm.pK)(this,aG,e),this.setAttribute("aria-label",(0,tn.t)("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),(0,tm.Ek)((0,tm.u0)(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return(0,tm.dm)(this,ta.GC.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){(0,tm.pK)(this,ta.GC.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new tu.Au.CustomEvent(ta.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}a$.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},a$.getTooltipContentHTML=function(){return(0,tn.t)("Seek backward")},tu.Au.customElements.get("media-seek-backward-button")||tu.Au.customElements.define("media-seek-backward-button",a$);let aq="seekoffset";class aV extends ip.T{static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_CURRENT_TIME,aq]}connectedCallback(){super.connectedCallback(),this.seekOffset=(0,tm.dm)(this,aq,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",(0,tn.t)("seek forward {seekOffset} seconds",{seekOffset:a})),e===aq&&(this.seekOffset=(0,tm.dm)(this,aq,30))}get seekOffset(){return(0,tm.dm)(this,aq,30)}set seekOffset(e){(0,tm.pK)(this,aq,e),this.setAttribute("aria-label",(0,tn.t)("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),(0,tm.Ek)((0,tm.u0)(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return(0,tm.dm)(this,ta.GC.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){(0,tm.pK)(this,ta.GC.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new tu.Au.CustomEvent(ta.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aV.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},aV.getTooltipContentHTML=function(){return(0,tn.t)("Seek forward")},tu.Au.customElements.get("media-seek-forward-button")||tu.Au.customElements.define("media-seek-forward-button",aV);var aF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aK=(e,t,i)=>(aF(e,t,"read from private field"),i?i.call(e):t.get(e)),aY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aj=(e,t,i,a)=>(aF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aQ=(e,t,i)=>(aF(e,t,"access private method"),i);let az={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},aZ=[...Object.values(az),ta.GC.MEDIA_CURRENT_TIME,ta.GC.MEDIA_DURATION,ta.GC.MEDIA_SEEKABLE],aX=["Enter"," "],aJ="&nbsp;/&nbsp;",a0=(e,{timesSep:t=aJ}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],o=0;Number.isFinite(e.mediaDuration)?o=e.mediaDuration:Number.isFinite(n)&&(o=n);let s=e.remaining?tl(0-(o-r)):tl(r);return e.showDuration?`${s}${t}${tl(o)}`:s};class a1 extends ij{constructor(){super(),aY(this,ek),aY(this,eT),aY(this,eC),aY(this,eI),aY(this,eE,void 0),aY(this,ey,null),aY(this,e_,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!aX.includes(a)?this.removeEventListener("keyup",aK(this,ey)):this.addEventListener("keyup",aK(this,ey))}),aj(this,eE,this.shadowRoot.querySelector("slot")),aK(this,eE).innerHTML=`${a0(this)}`}static get observedAttributes(){return[...super.observedAttributes,...aZ,"disabled"]}connectedCallback(){let{style:e}=(0,tm.aQ)(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",(0,tn.t)("playback time")),aQ(this,eC,eS).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),aQ(this,eT,ew).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",(0,tn.t)("playback time")),aZ.includes(e)?this.update():"disabled"===e&&i!==t?null==i?aQ(this,eC,eS).call(this):aQ(this,eI,eR).call(this):e===az.NO_TOGGLE&&i!==t&&(this.noToggle?aQ(this,eI,eR).call(this):aQ(this,eC,eS).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return(0,tm.Y_)(this,az.REMAINING)}set remaining(e){(0,tm.QW)(this,az.REMAINING,e)}get showDuration(){return(0,tm.Y_)(this,az.SHOW_DURATION)}set showDuration(e){(0,tm.QW)(this,az.SHOW_DURATION,e)}get noToggle(){return(0,tm.Y_)(this,az.NO_TOGGLE)}set noToggle(e){(0,tm.QW)(this,az.NO_TOGGLE,e)}get mediaDuration(){return(0,tm.dm)(this,ta.GC.MEDIA_DURATION)}set mediaDuration(e){(0,tm.pK)(this,ta.GC.MEDIA_DURATION,e)}get mediaCurrentTime(){return(0,tm.dm)(this,ta.GC.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){(0,tm.pK)(this,ta.GC.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(ta.GC.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(ta.GC.MEDIA_SEEKABLE):this.setAttribute(ta.GC.MEDIA_SEEKABLE,e.join(":"))}update(){let e=a0(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",(0,tn.t)("video not loaded, unknown time."));let n=e.remaining?ts(0-(r-i)):ts(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let o=ts(r),s=(0,tn.t)("{currentTime} of {totalTime}",{currentTime:n,totalTime:o});e.setAttribute("aria-description",s)})(this),e!==aK(this,eE).innerHTML&&(aK(this,eE).innerHTML=e)}}eE=new WeakMap,ey=new WeakMap,e_=new WeakMap,ek=new WeakSet,eA=function(){aK(this,ey)||(aj(this,ey,e=>{let{key:t}=e;aX.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",aK(this,ey))}),this.addEventListener("keydown",aK(this,e_)),this.addEventListener("click",this.toggleTimeDisplay))},eT=new WeakSet,ew=function(){aK(this,ey)&&(this.removeEventListener("keyup",aK(this,ey)),this.removeEventListener("keydown",aK(this,e_)),this.removeEventListener("click",this.toggleTimeDisplay),aj(this,ey,null))},eC=new WeakSet,eS=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),aQ(this,ek,eA).call(this))},eI=new WeakSet,eR=function(){this.removeAttribute("role"),this.disable(),aQ(this,eT,ew).call(this)},a1.getSlotTemplateHTML=function(e,t){return`
    <slot>${a0(t)}</slot>
  `},tu.Au.customElements.get("media-time-display")||tu.Au.customElements.define("media-time-display",a1);var a2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a3=(e,t,i)=>(a2(e,t,"read from private field"),i?i.call(e):t.get(e)),a4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a5=(e,t,i,a)=>(a2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class a8{constructor(e,t,i){a4(this,eL,void 0),a4(this,ex,void 0),a4(this,eM,void 0),a4(this,eD,void 0),a4(this,eO,void 0),a4(this,eN,void 0),a4(this,eP,void 0),a4(this,eU,void 0),a4(this,eB,0),a4(this,eH,(e=performance.now())=>{a5(this,eB,requestAnimationFrame(a3(this,eH))),a5(this,eD,performance.now()-a3(this,eM));let t=1e3/this.fps;if(a3(this,eD)>t){let i,a,r,n;a5(this,eM,e-a3(this,eD)%t);let o=1e3/((e-a3(this,ex))/++(i=this,a=eO,{set _(value){a5(i,a,value,r)},get _(){return a3(i,a,n)}})._),s=(e-a3(this,eN))/1e3/this.duration,l=a3(this,eP)+s*this.playbackRate;l-a3(this,eL).valueAsNumber>0?a5(this,eU,this.playbackRate/this.duration/o):(a5(this,eU,.995*a3(this,eU)),l=a3(this,eL).valueAsNumber+a3(this,eU)),this.callback(l)}}),a5(this,eL,e),this.callback=t,this.fps=i}start(){0===a3(this,eB)&&(a5(this,eM,performance.now()),a5(this,ex,a3(this,eM)),a5(this,eO,0),a3(this,eH).call(this))}stop(){0!==a3(this,eB)&&(cancelAnimationFrame(a3(this,eB)),a5(this,eB,0))}update({start:e,duration:t,playbackRate:i}){let a=e-a3(this,eL).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),a5(this,eP,e),a5(this,eN,performance.now()),this.duration=t,this.playbackRate=i}}eL=new WeakMap,ex=new WeakMap,eM=new WeakMap,eD=new WeakMap,eO=new WeakMap,eN=new WeakMap,eP=new WeakMap,eU=new WeakMap,eB=new WeakMap,eH=new WeakMap;var a9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a6=(e,t,i)=>(a9(e,t,"read from private field"),i?i.call(e):t.get(e)),a7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},re=(e,t,i,a)=>(a9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rt=(e,t,i)=>(a9(e,t,"access private method"),i);let ri=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},ra=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class rr extends iW{constructor(){super(),a7(this,eZ),a7(this,e0),a7(this,e2),a7(this,e4),a7(this,e8),a7(this,e6),a7(this,te),a7(this,eW,null),a7(this,eG,void 0),a7(this,e$,void 0),a7(this,eq,void 0),a7(this,eV,void 0),a7(this,eF,void 0),a7(this,eK,void 0),a7(this,eY,void 0),a7(this,ej,void 0),a7(this,eQ,void 0),a7(this,ez,()=>{rt(this,eZ,eX).call(this)?a6(this,eG).start():a6(this,eG).stop()}),a7(this,eJ,e=>{!this.dragging&&((0,tr.gf)(e)&&(this.range.valueAsNumber=e),a6(this,eQ)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),re(this,e$,this.shadowRoot.querySelectorAll('[part~="box"]')),re(this,eV,this.shadowRoot.querySelector('[part~="preview-box"]')),re(this,eF,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);re(this,eK,parseInt(e.getPropertyValue("--media-box-padding-left"))),re(this,eY,parseInt(e.getPropertyValue("--media-box-padding-right"))),re(this,eG,new a8(this.range,a6(this,eJ),60))}static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_PAUSED,ta.GC.MEDIA_DURATION,ta.GC.MEDIA_SEEKABLE,ta.GC.MEDIA_CURRENT_TIME,ta.GC.MEDIA_PREVIEW_IMAGE,ta.GC.MEDIA_PREVIEW_TIME,ta.GC.MEDIA_PREVIEW_CHAPTER,ta.GC.MEDIA_BUFFERED,ta.GC.MEDIA_PLAYBACK_RATE,ta.GC.MEDIA_LOADING,ta.GC.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",(0,tn.t)("seek")),a6(this,ez).call(this),re(this,eW,this.getRootNode()),null==(e=a6(this,eW))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),a6(this,eG).stop(),null==(e=a6(this,eW))||e.removeEventListener("transitionstart",this),re(this,eW,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===ta.GC.MEDIA_CURRENT_TIME||e===ta.GC.MEDIA_PAUSED||e===ta.GC.MEDIA_ENDED||e===ta.GC.MEDIA_LOADING||e===ta.GC.MEDIA_DURATION||e===ta.GC.MEDIA_SEEKABLE){let e,t,i,a;a6(this,eG).update({start:ri(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),a6(this,ez).call(this),e=this.range,t=ts(+ra(this)),i=ts(+this.mediaSeekableEnd),a=t&&i?(0,tn.t)("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):(0,tn.t)("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===ta.GC.MEDIA_BUFFERED&&this.updateBufferedBar();(e===ta.GC.MEDIA_DURATION||e===ta.GC.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=a6(this,ej),this.updateBar())}}get mediaChaptersCues(){return a6(this,ej)}set mediaChaptersCues(e){var t;re(this,ej,e),this.updateSegments(null==(t=a6(this,ej))?void 0:t.map(e=>({start:ri(this,e.startTime),end:ri(this,e.endTime)})))}get mediaPaused(){return(0,tm.Y_)(this,ta.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tm.QW)(this,ta.GC.MEDIA_PAUSED,e)}get mediaLoading(){return(0,tm.Y_)(this,ta.GC.MEDIA_LOADING)}set mediaLoading(e){(0,tm.QW)(this,ta.GC.MEDIA_LOADING,e)}get mediaDuration(){return(0,tm.dm)(this,ta.GC.MEDIA_DURATION)}set mediaDuration(e){(0,tm.pK)(this,ta.GC.MEDIA_DURATION,e)}get mediaCurrentTime(){return(0,tm.dm)(this,ta.GC.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){(0,tm.pK)(this,ta.GC.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return(0,tm.dm)(this,ta.GC.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){(0,tm.pK)(this,ta.GC.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(ta.GC.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(ta.GC.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(ta.GC.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(ta.GC.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(ta.GC.MEDIA_SEEKABLE):this.setAttribute(ta.GC.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return(0,tm.vT)(this,ta.GC.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){(0,tm.tA)(this,ta.GC.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return(0,tm.dm)(this,ta.GC.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){(0,tm.pK)(this,ta.GC.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return(0,tm.Y_)(this,ta.GC.MEDIA_ENDED)}set mediaEnded(e){(0,tm.QW)(this,ta.GC.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=ri(this,r)}let{style:a}=(0,tm.aQ)(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=(0,tm.aQ)(this.shadowRoot,"#current-rail"),t=(0,tm.aQ)(this.shadowRoot,'[part~="current-box"]'),i=rt(this,e0,e1).call(this,a6(this,eF)),a=rt(this,e2,e3).call(this,i,this.range.valueAsNumber),r=rt(this,e4,e5).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":rt(this,te,tt).call(this);break;case"pointermove":rt(this,e8,e9).call(this,e);break;case"pointerup":a6(this,eQ)&&re(this,eQ,!1);break;case"pointerdown":re(this,eQ,!0);break;case"pointerleave":rt(this,e6,e7).call(this,null);break;case"transitionstart":(0,tm.qg)(e.target,this)&&setTimeout(()=>a6(this,ez).call(this),0)}}}eW=new WeakMap,eG=new WeakMap,e$=new WeakMap,eq=new WeakMap,eV=new WeakMap,eF=new WeakMap,eK=new WeakMap,eY=new WeakMap,ej=new WeakMap,eQ=new WeakMap,ez=new WeakMap,eZ=new WeakSet,eX=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&(0,tm.J9)(this)},eJ=new WeakMap,e0=new WeakSet,e1=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?(0,tm.CQ)(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),o=i.right-a.left-r/2;return{box:{width:r,min:n,max:o},bounds:i,range:a}},e2=new WeakSet,e3=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},e4=new WeakSet,e5=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+a6(this,eK)){let t=e.range.left-e.bounds.left-a6(this,eK);return`${n-i/2+t}px`}if(n>r-a6(this,eY)){let t=e.bounds.right-e.range.right-a6(this,eY);return`${n+i/2-t-e.range.width}px`}return 0},e8=new WeakSet,e9=function(e){let t=[...a6(this,e$)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void rt(this,e6,e7).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=(0,tm.aQ)(this.shadowRoot,"#preview-rail"),r=(0,tm.aQ)(this.shadowRoot,'[part~="preview-box"]'),n=rt(this,e0,e1).call(this,a6(this,eV)),o=(e.clientX-n.range.left)/n.range.width;o=Math.max(0,Math.min(1,o));let s=rt(this,e2,e3).call(this,n,o),l=rt(this,e4,e5).call(this,n,o);a.style.transform=`translateX(${s})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(a6(this,eq))-Math.round(o*i))&&o>.01&&o<.99||(re(this,eq,o*i),rt(this,e6,e7).call(this,a6(this,eq)))},e6=new WeakSet,e7=function(e){this.dispatchEvent(new tu.Au.CustomEvent(ta.a8.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},te=new WeakSet,tt=function(){a6(this,eG).stop();let e=ra(this);this.dispatchEvent(new tu.Au.CustomEvent(ta.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},rr.shadowRootOptions={mode:"open"},rr.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${ta.GC.MEDIA_PREVIEW_IMAGE}], [${ta.GC.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${ta.GC.MEDIA_PREVIEW_IMAGE}], [${ta.GC.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${ta.GC.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${ta.GC.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${ta.GC.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${ta.GC.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${ta.GC.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${ta.GC.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${ta.GC.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${ta.GC.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${ta.GC.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${ta.GC.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${ta.GC.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${ta.GC.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${aU.shadowRootOptions.mode}">
            ${aU.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},tu.Au.customElements.get("media-time-range")||tu.Au.customElements.define("media-time-range",rr),i(8475);var rn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class ro extends iW{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ti,()=>{let e=this.range.value,t=new tu.Au.CustomEvent(ta.a8.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_VOLUME,ta.GC.MEDIA_MUTED,ta.GC.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",(0,tn.t)("volume")),this.range.addEventListener("input",rn(this,ti))}disconnectedCallback(){this.range.removeEventListener("input",rn(this,ti)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_VOLUME||e===ta.GC.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return(0,tm.dm)(this,ta.GC.MEDIA_VOLUME,1)}set mediaVolume(e){(0,tm.pK)(this,ta.GC.MEDIA_VOLUME,e)}get mediaMuted(){return(0,tm.Y_)(this,ta.GC.MEDIA_MUTED)}set mediaMuted(e){(0,tm.QW)(this,ta.GC.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return(0,tm.vT)(this,ta.GC.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){(0,tm.tA)(this,ta.GC.MEDIA_VOLUME_UNAVAILABLE,e)}}ti=new WeakMap,tu.Au.customElements.get("media-volume-range")||tu.Au.customElements.define("media-volume-range",ro);class rs extends ip.T{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,ta.GC.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=(0,tn.t)("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ta.GC.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return(0,tm.Y_)(this,ta.GC.MEDIA_LOOP)}set mediaLoop(e){(0,tm.QW)(this,ta.GC.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new tu.Au.CustomEvent(ta.a8.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}rs.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${ta.GC.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},rs.getTooltipContentHTML=function(){return(0,tn.t)("Loop")},tu.Au.customElements.get("media-loop-button")||tu.Au.customElements.define("media-loop-button",rs)},5166:(e,t,i)=>{i.d(t,{C2:()=>o,PH:()=>s,VV:()=>h,W5:()=>n,aI:()=>c,ip:()=>u,mc:()=>l});var a=i(484);let r=(e="")=>{let[t,i,r]=e.split(":"),n=r?decodeURIComponent(r):void 0;return{kind:"cc"===t?a.Up.CAPTIONS:a.Up.SUBTITLES,language:i,label:n}},n=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=r(e);return{...t,...i}}),o=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?r(e):e):"string"==typeof e?n(e):[e]:[],s=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,l=(e=[])=>Array.prototype.map.call(e,s).join(" "),d=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},u=(e,t=[],i=[])=>{let a=o(i).map(d);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},c=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:d(t);return Array.from(e.textTracks).filter(i)},h=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(a.GC.MEDIA_SUBTITLES_SHOWING)}},5354:(e,t,i)=>{i(4586);var a=i(1885),r=i(134);i(653);let n=a.Au.document?.createElement?.("template");n&&(n.innerHTML=String.raw`
    <style>
      :host {
        --vimeonova-black: 23 35 34;
        --vimeonova-primary-color: var(--media-primary-color, rgb(253 244 255));
        --vimeonova-secondary-color: var(--media-secondary-color, rgb(--vimeonova-black / 0.75));
        --vimeonova-accent-color: var(--media-accent-color, rgb(0 186 115));
        --vimeonova-control-bar-height: 32px;
        --vimeonova-control-bar-border-radius: 0.125em;
        --vimeonova-play-button-border-radius: 0.25em;

        --media-control-background: var(--vimeonova-secondary-color);
        --media-control-hover-background: var(--vimeonova-secondary-color);
        --media-icon-color: var(--vimeonova-primary-color);
        --media-menu-border-radius: 0.25em;
        --media-tooltip-display: none;

        color: var(--vimeonova-primary-color);
      }

      @supports (color: color-mix(in srgb, red, blue)) {
        :host {
          --vimeonova-secondary-color: color-mix(
            in srgb,
            var(--media-secondary-color, rgb(23 35 34)) 75%,
            transparent
          );
        }
      }

      media-controller {
        display: block;
        container: media-theme-vimeonova / inline-size;
      }

      .hidden {
        display: none;
      }

      .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 1px;
        margin: 0.625em;
      }

      .title,
      .byline {
        display: inline-block;
        background: var(--vimeonova-secondary-color);
        margin: 0;
        padding: 0.18em 0.24em;
        line-height: 1;
        font-size: 0.8em;
        font-weight: normal;
      }

      .title {
        color: var(--vimeonova-accent-color);
        font-size: 1.3em;
        font-weight: bold;
      }

      .byline {
        color: var(--vimeonova-accent-color);
      }

      .control-bar-container {
        position: relative;
        overflow: visible;
        display: flex;
        align-items: end;
        padding: 0.35em;
        width: 100%;
        box-sizing: border-box;
      }

      @container (inline-size >=384px) {
        .control-bar-container {
          column-gap: 0.625em;
          padding: 0.625em;
        }
      }

      .control-bar-right {
        flex-grow: 1;
      }

      media-control-bar {
        background: var(--media-control-background);
        height: var(--vimeonova-control-bar-height);
        border-bottom-left-radius: var(--vimeonova-control-bar-border-radius);
        border-bottom-right-radius: var(--vimeonova-control-bar-border-radius);
        width: 100%;
      }

      media-control-bar [role='button'],
      media-control-bar [role='switch'] {
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        --media-button-icon-active-transform: scale(1.2);
        --media-button-icon-transition: transform 0.2s ease;
        color: var(--vimeonova-primary-color);
        padding: 0.3125em 0.35em;
      }

      media-control-bar svg {
        fill: none;
      }

      media-control-bar svg:active {
        transform: scale(1.2);
      }

      media-play-button {
        --media-control-background: var(--vimeonova-secondary-color);
        --media-control-hover-background: var(--vimeonova-accent-color);
        --media-button-icon-height: 100%;
        display: none;
        border-radius: var(--vimeonova-play-button-border-radius);
        color: var(--vimeonova-primary-color);
        width: 65px;
        height: 40px;
        padding: 0.3125em 0.625em;
      }

      [slot='centered-chrome'] media-play-button {
        display: block;
        position: relative;
        top: -30%;
      }

      media-play-button:active {
        --media-control-hover-background: var(--vimeonova-accent-color);
      }

      @supports (color: color-mix(in srgb, red, blue)) {
        media-play-button:active {
          --media-control-hover-background: color-mix(
            in srgb,
            var(--vimeonova-accent-color) 80%,
            transparent
          );
        }
      }

      media-time-range {
        --media-range-padding: 0;
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        --media-time-range-buffered-color: dimgray;
        --media-range-track-background: rgb(var(--vimeonova-black) / 0.5);
        --media-range-track-border-radius: 0;
        --media-range-bar-color: var(--vimeonova-accent-color);
        --media-range-thumb-background: none;
        --media-range-thumb-width: 0px;
        --media-range-thumb-height: 0px;
        --media-range-track-height: 10px;
        --media-preview-thumbnail-border-radius: 2px;
        --media-preview-thumbnail-border: 4px solid var(--vimeonova-secondary-color);
        --media-box-margin: 0;
        --media-preview-time-background: rgb(var(--vimeonova-black) / 1);
        padding-inline: 10px;
      }

      media-time-range.small {
        --media-box-padding-left: 2px;
        --media-box-padding-right: 2px;
        --media-range-track-height: 5px;
        --media-range-track-border-radius: var(--vimeonova-control-bar-border-radius)
          var(--vimeonova-control-bar-border-radius) 0 0;
        height: 5px;
        width: 100%;
        padding: 0;
      }

      @keyframes buffer {
        100% {
          --media-range-track-background: rgb(var(--vimeonova-black) / 0.5)
            url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%"><style>@keyframes buffer { 100% { transform: translateX(-10px); }}%3C/style><defs><pattern id="buffer-pattern" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="dimgray" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="dimgray" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="dimgray" stroke-linecap="butt" /></pattern></defs><rect width="110%" height="100%" fill="url(%23buffer-pattern)" style="animation: buffer 250ms linear infinite;" /></svg>');
        }
      }

      [medialoading]:not([mediapaused]) media-time-range {
        animation: 1000000s 0.5s buffer reverse;
      }

      media-time-range.large {
        display: none;
        height: var(--vimeonova-control-bar-height);
        flex-grow: 10000;
      }

      media-time-range > * {
        position: relative;
        bottom: -11px;
      }

      media-time-range.small > * {
        bottom: 3px;
      }

      @container (inline-size >=384px) {
        [slot='centered-chrome'] media-play-button {
          display: none;
        }

        .control-bar-container media-play-button {
          display: block;
        }

        media-time-range.small {
          border-top-left-radius: var(--vimeonova-control-bar-border-radius);
          border-top-right-radius: var(--vimeonova-control-bar-border-radius);
        }
      }

      @container (inline-size >=484px) {
        media-control-bar {
          border-radius: var(--vimeonova-control-bar-border-radius);
        }

        media-time-range.small {
          display: none;
        }

        media-time-range.large {
          display: block;
        }
      }

      media-preview-time-display,
      media-time-display {
        --media-preview-time-background: var(--vimeonova-primary-color);
        padding: 2px 4px;
        border-radius: 0;
        line-height: normal;
        color: rgb(var(--vimeonova-black) / 1);
        font-family: Verdana, sans-serif;
        font-size: 10px;
        box-shadow: rgb(0 0 0 / 0.7) 1px 1px 0px 0px;
        text-shadow: none;
      }

      media-preview-thumbnail {
        max-width: 213px;
        max-height: 200px;
      }

      media-preview-time-display {
        margin-top: 5px;
        min-width: auto;
        --media-preview-time-background: rgb(var(--vimeonova-black) / 1);
        color: var(--vimeonova-primary-color);
      }

      [part='arrow'] {
        --media-box-arrow-background: rgb(var(--vimeonova-black) / 1);
        --media-box-arrow-height: 4px;
        --media-box-arrow-width: 4px;
        --media-box-arrow-offset: 0px;
        left: 1px;
      }

      [part='arrow'][slot='current']::before {
        --media-box-arrow-background: var(--vimeonova-primary-color);
      }

      [part='arrow']::before {
        content: '';
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(
          --media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0
        );
        border-style: solid;
        position: absolute;
        bottom: 0.5px;
        margin-left: calc((var(--media-box-arrow-width) + 1px) * -1);
      }

      media-volume-range {
        --media-range-track-background-color: rgb(var(--vimeonova-black) / 0.8);
        --media-range-track-border-radius: 1px;
        --media-range-bar-color: var(--vimeonova-accent-color);
        --media-range-thumb-background: none;
        --media-range-thumb-width: 0px;
        --media-range-thumb-height: 0px;
        --media-range-track-height: 6px;
        height: var(--vimeonova-control-bar-height);
        background: var(--vimeonova-secondary-color);
        border-radius: var(--media-menu-border-radius);
      }

      .media-volume-wrapper {
        position: relative;
      }

      .media-volume-range-wrapper {
        width: 122px;
        height: 34px;
        overflow: hidden;
        opacity: 0;
        transform: rotate(-90deg);
        position: absolute;
        top: -80px;
        left: -52px;
        border-left: 16px solid transparent;
        visibility: hidden;
      }

      @container (inline-size >=484px) {
        .media-volume-range-wrapper {
          top: -77px;
        }
      }

      media-mute-button:hover + .media-volume-range-wrapper,
      media-mute-button:focus + .media-volume-range-wrapper,
      media-mute-button:focus-within + .media-volume-range-wrapper,
      .media-volume-range-wrapper:hover,
      .media-volume-range-wrapper:focus,
      .media-volume-range-wrapper:focus-within {
        opacity: 1;
        visibility: visible;
      }

      [role='menu'] {
        position: absolute;
        margin-bottom: 10px;
      }

      @container (inline-size >=484px) {
        [role='menu'] {
          margin-bottom: 7px;
        }
      }

      .spacer {
        flex-grow: 1;
        height: 100%;
      }
    </style>

    <media-controller
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <div slot="top-chrome" class="header">
        <template if="mediatitle">
          <h1 class="title">{{mediatitle}}</h1>
        </template>
        <template if="mediabyline">
          <h2 class="byline">{{mediabyline}}</h2>
        </template>
      </div>

      <div slot="centered-chrome">
        <media-play-button>
          <svg
            slot="play"
            aria-hidden="true"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 4v16l13 -8z"></path>
          </svg>
          <svg
            slot="pause"
            aria-hidden="true"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="6" y="5" width="4" height="14" rx="0"></rect>
            <rect x="14" y="5" width="4" height="14" rx="0"></rect>
          </svg>
        </media-play-button>
      </div>

      <div class="control-bar-container" id="vimeonova-bounds">
        <media-play-button>
          <svg
            slot="play"
            aria-hidden="true"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 4v16l13 -8z"></path>
          </svg>
          <svg
            slot="pause"
            aria-hidden="true"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="6" y="5" width="4" height="14" rx="0"></rect>
            <rect x="14" y="5" width="4" height="14" rx="0"></rect>
          </svg>
        </media-play-button>

        <div class="control-bar-right">
          <media-time-range class="small">
            <media-preview-time-display slot="preview"></media-preview-time-display>
            <div part="arrow" slot="preview"></div>
            <media-time-display slot="current"></media-time-display>
            <div part="arrow" slot="current"></div>
          </media-time-range>
          <media-control-bar>
            <media-time-range class="large" bounds="vimeonova-bounds">
              <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
              <media-preview-time-display slot="preview"></media-preview-time-display>
              <div part="arrow" slot="preview"></div>
              <media-time-display slot="current"></media-time-display>
              <div part="arrow" slot="current"></div>
            </media-time-range>
            <div class="spacer"></div>
            <media-captions-menu-button>
              <svg slot="on" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-.532l-2.2 2.64a1 1 0 0 1-1.536 0l-2.2-2.64H5.999A4 4 0 0 1 2 15V8Zm13.57.183a3.333 3.333 0 0 1 2.338.826.82.82 0 0 1-1.083 1.232 1.693 1.693 0 0 0-2.336.097 1.674 1.674 0 0 0 0 2.324 1.692 1.692 0 0 0 2.336.097.82.82 0 0 1 1.083 1.232 3.333 3.333 0 0 1-4.6-.191 3.314 3.314 0 0 1 0-4.6m2.261-1.017c-.856.035-1.666.4-2.261 1.017Zm-6.7-.005a3.338 3.338 0 0 1 2.342.828.825.825 0 0 1-1.089 1.239 1.688 1.688 0 0 0-2.33.097 1.669 1.669 0 0 0 0 2.316 1.688 1.688 0 0 0 2.33.097.825.825 0 1 1 1.09 1.24 3.338 3.338 0 0 1-4.608-.192 3.319 3.319 0 0 1 0-4.606m2.265-1.02a3.347 3.347 0 0 0-2.265 1.02Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg slot="off" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.6"
                  d="M17.367 9.625a2.513 2.513 0 0 0-3.469.144 2.494 2.494 0 0 0 0 3.461 2.513 2.513 0 0 0 3.469.145m-6.7-3.75a2.513 2.513 0 0 0-3.469.144 2.494 2.494 0 0 0 0 3.461 2.512 2.512 0 0 0 3.469.145"
                />
                <path
                  fill="currentColor"
                  d="M17 18v-1h-.468l-.3.36L17 18Zm-5 0 .768-.64-.3-.36H12v1Zm2.5 3-.768.64a1 1 0 0 0 1.536 0L14.5 21ZM6 6h12V4H6v2Zm14 2v7h2V8h-2ZM4 15V8H2v7h2Zm14 2h-1v2h1v-2Zm-6 0H6v2h6v-2Zm4.232.36-2.5 3 1.536 1.28 2.5-3-1.536-1.28Zm-.964 3-2.5-3-1.536 1.28 2.5 3 1.536-1.28ZM2 15a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2H2Zm18 0a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm-2-9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2ZM6 4a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V4Z"
                />
              </svg>
            </media-captions-menu-button>
            <media-playback-rate-menu-button></media-playback-rate-menu-button>
            <div class="media-volume-wrapper">
              <media-mute-button>
                <svg
                  slot="high"
                  aria-hidden="true"
                  viewBox="0 0 24 25"
                  stroke-width="1.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 8a5 5 0 0 1 0 8"></path>
                  <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                  <path
                    d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  slot="medium"
                  aria-hidden="true"
                  viewBox="0 0 24 25"
                  stroke-width="1.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 8a5 5 0 0 1 0 8"></path>
                  <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                  <path
                    d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  slot="low"
                  aria-hidden="true"
                  viewBox="0 0 24 25"
                  stroke-width="1.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 8a5 5 0 0 1 0 8"></path>
                  <path
                    d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  slot="off"
                  aria-hidden="true"
                  viewBox="0 0 24 25"
                  stroke-width="1.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
                  ></path>
                  <path d="M16 10l4 4m0 -4l-4 4"></path>
                </svg>
              </media-mute-button>
              <div class="media-volume-range-wrapper">
                <media-volume-range></media-volume-range>
              </div>
            </div>
            <media-rendition-menu-button>
              <svg slot="icon" class="media-hd-icon" aria-hidden="true" viewBox="0 0 28 24">
                <path
                  fill="currentColor"
                  d="M19.866 18.971h-5.458L16.728 5h5.239c1.437 0 2.638.289 3.602.866.964.578 1.648 1.403 2.053 2.477.405 1.073.485 2.351.239 3.834-.237 1.428-.716 2.649-1.44 3.663a7.076 7.076 0 0 1-2.756 2.326c-1.114.537-2.38.805-3.8.805Zm-1.133-3.22h1.378c.691 0 1.308-.12 1.849-.361.546-.246 1-.655 1.364-1.228.369-.578.635-1.367.798-2.367.155-.946.15-1.676-.013-2.19-.164-.519-.476-.878-.935-1.078-.46-.205-1.053-.307-1.78-.307h-1.406l-1.255 7.531ZM0 18.971 2.32 5h3.792l-.9 5.458h5.02L11.134 5h3.794l-2.32 13.971H8.814l.9-5.457h-5.02l-.901 5.457H0Z"
                />
              </svg>
              <svg slot="icon" class="media-sd-icon hidden" aria-hidden="true" viewBox="0 0 28 24">
                <path
                  fill="currentColor"
                  d="M19.857 18.967H14.41L16.725 5.02h5.23c1.434 0 2.633.288 3.595.864.962.577 1.646 1.401 2.05 2.472.404 1.072.483 2.347.238 3.827-.236 1.426-.715 2.645-1.437 3.657a7.062 7.062 0 0 1-2.75 2.322c-1.113.536-2.377.804-3.794.804Zm-1.13-3.214h1.375c.69 0 1.306-.12 1.846-.361.545-.246.999-.654 1.362-1.226.367-.577.633-1.364.797-2.363.154-.944.15-1.673-.014-2.186-.164-.517-.474-.876-.933-1.076-.459-.204-1.051-.306-1.777-.306H19.98l-1.253 7.518Zm-8.496-6.374c.041-.45-.068-.801-.327-1.056-.258-.258-.694-.388-1.307-.388-.39 0-.717.046-.98.136-.26.091-.461.216-.607.375-.14.159-.229.343-.265.551a.792.792 0 0 0 .007.45.85.85 0 0 0 .279.36c.14.11.324.207.551.294.232.086.507.163.824.231l1.09.245c.744.164 1.369.38 1.872.647.509.263.909.577 1.199.94.29.363.481.77.572 1.219.095.45.098.94.007 1.47-.155.918-.51 1.694-1.07 2.33-.558.635-1.286 1.119-2.185 1.45-.899.331-1.939.497-3.119.497-1.207 0-2.233-.18-3.078-.538-.84-.363-1.448-.917-1.825-1.662-.372-.748-.463-1.704-.272-2.866h3.595c-.054.426-.009.785.136 1.076.146.29.38.51.702.66.322.15.724.225 1.205.225.409 0 .758-.05 1.049-.15.29-.1.52-.238.688-.415.168-.177.27-.38.306-.606a.741.741 0 0 0-.109-.559c-.109-.163-.306-.31-.592-.442s-.68-.252-1.178-.361l-1.335-.3c-1.185-.272-2.08-.722-2.683-1.348-.604-.627-.817-1.485-.64-2.574.145-.89.51-1.666 1.096-2.329.59-.667 1.34-1.185 2.247-1.553.913-.372 1.923-.558 3.03-.558 1.126 0 2.068.188 2.826.565.763.377 1.31.906 1.642 1.587.336.68.426 1.48.272 2.397h-3.623Z"
                />
              </svg>
              <svg slot="icon" class="media-4k-icon hidden" aria-hidden="true" viewBox="0 0 28 24">
                <path
                  fill="currentColor"
                  d="M13.163 18.887 15.47 5h3.77l-.922 5.615h.19L23.606 5H28l-5.696 6.184 3.499 7.703H21.3l-2.224-5.207-1.546 1.654-.596 3.553h-3.77ZM0 16.717l.488-2.929L7.54 5h2.658l-.65 3.906h-1.52L4.232 13.68l-.027.108h8.246l-.489 2.93H0Zm6.401 2.17.516-3.065.298-1.274L8.788 5h3.526L10.01 18.887H6.4Z"
                />
              </svg>
            </media-rendition-menu-button>
            <media-pip-button>
              <svg
                slot="enter"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"></path>
                <rect x="14" y="14" width="7" height="5" rx="1" fill="currentColor"></rect>
                <line x1="7" y1="9" x2="11" y2="13"></line>
                <path d="M8 13h3v-3"></path>
              </svg>
              <svg
                slot="exit"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"></path>
                <rect x="14" y="14" width="7" height="5" rx="1" fill="currentColor"></rect>
                <line x1="7" y1="9" x2="11" y2="13"></line>
                <path d="M7 12v-3h3"></path>
              </svg>
            </media-pip-button>
            <media-airplay-button></media-airplay-button>
            <media-cast-button>
              <svg
                slot="enter"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="3" y1="19" x2="3.01" y2="19"></line>
                <path d="M7 19a4 4 0 0 0 -4 -4"></path>
                <path d="M11 19a8 8 0 0 0 -8 -8"></path>
                <path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2"></path>
              </svg>
              <svg
                slot="exit"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 19h.01"></path>
                <path d="M7 19a4 4 0 0 0 -4 -4"></path>
                <path d="M11 19a8 8 0 0 0 -8 -8"></path>
                <path
                  d="M15 19h3a3 3 0 0 0 .875 -.13m1.997 -2.002a3 3 0 0 0 .128 -.868v-8a3 3 0 0 0 -3 -3h-9m-3.865 .136a3 3 0 0 0 -1.935 1.864"
                ></path>
                <path d="M3 3l18 18"></path>
              </svg>
            </media-cast-button>
            <media-fullscreen-button>
              <svg slot="enter" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5h4v4M15 9l4-4M9 19H5v-4M5 19l4-4M15 19h4v-4M15 15l4 4M9 5H5v4M5 5l4 4"
                />
              </svg>
              <svg slot="exit" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 9h4V5M4.5 4.5 9 9M5 15h4v4M4.5 19.5 9 15M19 9h-4V5M15 9l4.5-4.5M19 15h-4v4M15 15l4.5 4.5"
                />
              </svg>
            </media-fullscreen-button>
          </media-control-bar>
        </div>
      </div>

      <media-captions-menu anchor="auto" hidden></media-captions-menu>
      <media-playback-rate-menu anchor="auto" hidden></media-playback-rate-menu>
      <media-rendition-menu anchor="auto" hidden></media-rendition-menu>
    </media-controller>

  `);class o extends r.OU{static template=n}a.Au.customElements&&!a.Au.customElements.get("media-theme-vimeonova")&&a.Au.customElements.define("media-theme-vimeonova",o)},5770:(e,t,i)=>{i.d(t,{u:()=>l,v:()=>s});var a=i(1885);let r=new WeakMap,n=e=>{let t=r.get(e);return t||r.set(e,t=new Set),t},o=new a.Au.ResizeObserver(e=>{for(let t of e)for(let e of n(t.target))e(t)});function s(e,t){n(e).add(t),o.observe(e)}function l(e,t){let i=n(e);i.delete(t),i.size||o.unobserve(e)}},6301:(e,t,i)=>{let a,r;i.d(t,{Q:()=>G});var n=i(9766);let o=new Set,s=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,m=new WeakMap,p=new WeakMap,v=new WeakSet,b=0,g=0,f="__aa_tgt",E="__aa_del",y="__aa_new",k=e=>{var t;let i=!(t=e).reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]).every(e=>"#comment"===e.nodeName)&&t.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(R(t.target),!e.has(t.target)){e.add(t.target);for(let i=0;i<t.target.children.length;i++){let a=t.target.children.item(i);if(a){if(E in a)return!1;R(t.target,a),e.add(a)}}}if(t.removedNodes.length)for(let i=0;i<t.removedNodes.length;i++){let a=t.removedNodes[i];if(E in a)return!1;a instanceof Element&&(e.add(a),R(t.target,a),l.set(a,[t.previousSibling,t.nextSibling]))}}return e},new Set);i&&i.forEach(e=>{var t,i,r;let n,o;return n=(t=e).isConnected,o=s.has(t),void(n&&l.has(t)&&l.delete(t),(null==(i=d.get(t))?void 0:i.playState)!=="finished"&&(null==(r=d.get(t))||r.cancel()),y in t?H(t):o&&n?function(e){let t,i=s.get(e),a=x(e);if(!N(e))return s.set(e,a);if(A(e)){s.set(e,a),T(e);return}if(!i)return;let r=D(e);if("function"!=typeof r){let n=i.left-a.left,o=i.top-a.top,s=i.left+i.width-(a.left+a.width);0==i.top+i.height-(a.top+a.height)&&(o=0),0==s&&(n=0);let[l,d,u,c]=M(e,i,a),h={transform:`translate(${n}px, ${o}px)`},m={transform:"translate(0, 0)"};l!==d&&(h.width=`${l}px`,m.width=`${d}px`),u!==c&&(h.height=`${u}px`,m.height=`${c}px`),t=e.animate([h,m],{duration:r.duration,easing:r.easing})}else{let[n]=U(r(e,"remain",i,a));(t=new Animation(n)).play()}d.set(e,t),s.set(e,a),t.addEventListener("finish",w.bind(null,e,!1),{once:!0})}(t):o&&!n?function(e){var t;let i;if(!l.has(e)||!s.has(e))return;let[r,n]=l.get(e);Object.defineProperty(e,E,{value:!0,configurable:!0});let o=window.scrollX,u=window.scrollY;if(n&&n.parentNode&&n.parentNode instanceof Element?n.parentNode.insertBefore(e,n):r&&r.parentNode?r.parentNode.appendChild(e):null==(t=O(e))||t.appendChild(e),!N(e))return W(e);let[c,h,m,p]=function(e){var t;let i=s.get(e),[a,,r]=M(e,i,x(e)),n=e.parentElement;for(;n&&("static"===getComputedStyle(n).position||n instanceof HTMLBodyElement);)n=n.parentElement;n||(n=document.body);let o=getComputedStyle(n),l=d.has(e)&&(null==(t=d.get(e))?void 0:t.playState)!=="finished"?s.get(n):x(n);return[Math.round(i.top-l.top)-L(o.borderTopWidth),Math.round(i.left-l.left)-L(o.borderLeftWidth),a,r]}(e),v=D(e),f=s.get(e);(o!==b||u!==g)&&function(e,t,i,r){let n=b-t,o=g-i,s=document.documentElement.style.scrollBehavior;if("smooth"===getComputedStyle(a).scrollBehavior&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+n,window.scrollY+o),!e.parentElement)return;let l=e.parentElement,d=l.clientHeight,u=l.clientWidth,c=performance.now();!function e(){requestAnimationFrame(()=>{if(!B(r)){let t=d-l.clientHeight,i=u-l.clientWidth;c+r.duration>performance.now()?(window.scrollTo({left:window.scrollX-i,top:window.scrollY-t}),d=l.clientHeight,u=l.clientWidth,e()):document.documentElement.style.scrollBehavior=s}})}()}(e,o,u,v);let y={position:"absolute",top:`${c}px`,left:`${h}px`,width:`${m}px`,height:`${p}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(B(v)){let[t,a]=U(v(e,"remove",f));(null==a?void 0:a.styleReset)!==!1&&(y=(null==a?void 0:a.styleReset)||y,Object.assign(e.style,y)),(i=new Animation(t)).play()}else Object.assign(e.style,y),i=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:v.duration,easing:"ease-out"});d.set(e,i),i.addEventListener("finish",()=>W(e,y),{once:!0})}(t):H(t))})};function A(e){let t=e.getBoundingClientRect(),i=(null==a?void 0:a.clientWidth)||0,r=(null==a?void 0:a.clientHeight)||0;return t.bottom<0||t.top>r||t.right<0||t.left>i}function T(e){let t=u.get(e);null==t||t.disconnect();let i=s.get(e),r=0;i||(i=x(e),s.set(e,i));let{offsetWidth:n,offsetHeight:o}=a,l=[i.top-5,n-(i.left+5+i.width),o-(i.top+5+i.height),i.left-5].map(e=>`${-1*Math.floor(e)}px`).join(" "),d=new IntersectionObserver(()=>{++r>1&&w(e)},{root:a,threshold:1,rootMargin:l});d.observe(e),u.set(e,d)}function w(e,t=!0){clearTimeout(p.get(e));let i=D(e),a=t?B(i)?500:i.duration:0;p.set(e,setTimeout(async()=>{let t=d.get(e);try{await (null==t?void 0:t.finished),s.set(e,x(e)),T(e)}catch{}},a))}function C(e){setTimeout(()=>{h.set(e,setInterval(()=>S(w.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function S(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let I="u">typeof window&&"ResizeObserver"in window;function R(e,t){t||f in e?!t||f in t||Object.defineProperty(t,f,{value:e}):Object.defineProperty(e,f,{value:e})}function L(e){return Number(e.replace(/[^0-9.\-]/g,""))}function x(e){let t=e.getBoundingClientRect(),{x:i,y:a}=function(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}(e);return{top:t.top+a,left:t.left+i,width:t.width,height:t.height}}function M(e,t,i){let a=t.width,r=t.height,n=i.width,o=i.height,s=getComputedStyle(e);if("content-box"===s.getPropertyValue("box-sizing")){let e=L(s.paddingTop)+L(s.paddingBottom)+L(s.borderTopWidth)+L(s.borderBottomWidth),t=L(s.paddingLeft)+L(s.paddingRight)+L(s.borderRightWidth)+L(s.borderLeftWidth);a-=t,n-=t,r-=e,o-=e}return[a,n,r,o].map(Math.round)}function D(e){return f in e&&m.has(e[f])?m.get(e[f]):{duration:250,easing:"ease-in-out"}}function O(e){if(f in e)return e[f]}function N(e){let t=O(e);return!!t&&v.has(t)}function P(e,...t){t.forEach(t=>t(e,m.has(e)));for(let i=0;i<e.children.length;i++){let a=e.children.item(i);a&&t.forEach(e=>e(a,m.has(a)))}}function U(e){return Array.isArray(e)?e:[e]}function B(e){return"function"==typeof e}function H(e){let t;y in e&&delete e[y];let i=x(e);s.set(e,i);let a=D(e);if(N(e)){if(A(e))return void T(e);if("function"!=typeof a)t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*a.duration,easing:"ease-in"});else{let[r]=U(a(e,"add",i));(t=new Animation(r)).play()}d.set(e,t),t.addEventListener("finish",w.bind(null,e,!1),{once:!0})}}function W(e,t){var i;e.remove(),s.delete(e),l.delete(e),d.delete(e),null==(i=u.get(e))||i.disconnect(),setTimeout(()=>{if(E in e&&delete e[E],Object.defineProperty(e,y,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(let i in t)e.style[i]=""},0)}function G(e){let[t,i]=(0,n.useState)(),a=(0,n.useMemo)(()=>e,[]),b=(0,n.useCallback)(e=>{e instanceof HTMLElement?i(function(e,t={}){if(I&&r&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!B(t)&&!t.disrespectUserMotionPreference)){v.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),P(e,w,C,e=>null==r?void 0:r.observe(e)),B(t)?m.set(e,t):m.set(e,{duration:250,easing:"ease-in-out",...t});let i=new MutationObserver(k);i.observe(e,{childList:!0}),c.set(e,i),o.add(e)}return Object.freeze({parent:e,enable:()=>{v.add(e)},disable:()=>{v.delete(e),P(e,e=>{let t=d.get(e);try{null==t||t.cancel()}catch{}d.delete(e);let i=p.get(e);i&&clearTimeout(i),p.delete(e);let a=h.get(e);a&&clearInterval(a),h.delete(e)})},isEnabled:()=>v.has(e),destroy:()=>{v.delete(e),o.delete(e),m.delete(e);let t=c.get(e);null==t||t.disconnect(),c.delete(e),P(e,e=>{null==r||r.unobserve(e);let t=d.get(e);try{null==t||t.cancel()}catch{}d.delete(e);let i=u.get(e);null==i||i.disconnect(),u.delete(e);let a=h.get(e);a&&clearInterval(a),h.delete(e);let n=p.get(e);n&&clearTimeout(n),p.delete(e),s.delete(e),l.delete(e)})}})}(e,a)):i(void 0)},[a]),g=(0,n.useCallback)(e=>{t&&(e?t.enable():t.disable())},[t]);return(0,n.useEffect)(()=>()=>{var e;null==(e=null==t?void 0:t.destroy)||e.call(t)},[t]),[b,g]}I&&(a=document.documentElement,new MutationObserver(k),r=new ResizeObserver(e=>{e.forEach(e=>{e.target===a&&(clearTimeout(p.get(a)),p.set(a,setTimeout(()=>{o.forEach(e=>P(e,e=>S(()=>w(e))))},100))),s.has(e.target)&&w(e.target)})}),window.addEventListener("scroll",()=>{g=window.scrollY,b=window.scrollX}),r.observe(a))},7506:(e,t,i)=>{var a;i.d(t,{x:()=>o,t:()=>s});let r={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},n=(null==(a=globalThis.navigator)?void 0:a.language)||"en",o=e=>{n=e},s=(e,t={})=>(e=>{var t,i,a;let[o]=n.split("-");return(null==(t=r[n])?void 0:t[e])||(null==(i=r[o])?void 0:i[e])||(null==(a=r.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`)},7546:(e,t,i)=>{var a=i(3166);i.o(a,"notFound")&&i.d(t,{notFound:function(){return a.notFound}}),i.o(a,"useParams")&&i.d(t,{useParams:function(){return a.useParams}})},8026:(e,t,i)=>{let a;i.d(t,{Ay:()=>oE});var r=i(9766),n=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=function(e,t){return function(){return e&&(t=e(e=0)),t}},h=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},m=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=l(t),d=0,c=n.length;d<c;d++)r=n[d],u.call(e,r)||r===i||o(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=s(t,r))||a.enumerable});return e},p=function(e,t,i){return i=null!=e?n(d(e)):{},m(!t&&e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)},v=h(function(e,t){t.exports="u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{}});function b(e,t){return null!=t&&"u">typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):b(e,t)}var g=c(function(){g()});function f(e){return e&&"u">typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var E=c(function(){}),y=h(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),k=h(function(e,t){function i(e,t){if(!b(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}g(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),A=h(function(e,t){function i(e,t){if(!b(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}g(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),T=h(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),w=h(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),C=h(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),S=h(function(e,t){E(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,o,s;return o=[],s=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(s=s.toLowerCase()),o.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=f(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var o=e._attributes[r][n],s=(o.prefix?o.prefix+":":"")+n;t.push({name:s,value:o.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(s)>-1?o.push(" />"):(o.push(">"),n.childNodes.length?o.push.apply(o,n.childNodes.map(e)):n.textContent||n.innerText?o.push(r(n.textContent||n.innerText)):n.innerHTML&&o.push(n.innerHTML),o.push("</"+s+">")),o.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),I=h(function(e,t){g();var i=y(),a=T(),r=w(),n=C(),o=S(),s="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!b(this,l))return new l(e);var a=void 0===i?s:i||null;this.tagName=a===s?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return o(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),R=h(function(e,t){g();var i=I();function a(e){if(!b(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),L=h(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),x=h(function(e,t){g();var i=y(),a=k(),r=A(),n=I(),o=R(),s=L(),l=T(),d=w(),u=C();function c(){if(!b(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new o(this)},h.createEvent=function(e){return new s(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),M=h(function(e,t){t.exports=new(x())}),D=h(function(e,t){var i,a="u">typeof global?global:"u">typeof window?window:{},r=M();"u">typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function N(e,t){if(e){if("string"==typeof e)return O(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return O(e,t)}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(e,t)||N(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var U=p(v()),B=p(v()),H=p(v()),W=function(){var e=H.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},G=function(){if("function"==typeof(null==(e=B.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),B.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var o=W(),s=null==o?void 0:o.toString(16).substring(3);return s?t.substring(0,28)+s:t},$=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},q=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=$()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},V=function(e){e&&void 0!==e.nodeName?e=q(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function F(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=function(e){var t,i,a,r,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,F(s)),d=(i=console.info).bind.apply(i,F(s)),u=(a=console.debug).bind.apply(a,F(s)),c=(r=console.warn).bind.apply(r,F(s)),h=(n=console.error).bind.apply(n,F(s)),m=o;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,F(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,F(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,F(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,F(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,F(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:o)}}}("[mux]"),Y=p(v());function j(){return"1"===(Y.default.doNotTrack||Y.default.navigator&&Y.default.navigator.doNotTrack)}function Q(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){if(!b(e,t))throw TypeError("Cannot call a class as a function")}function Z(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function X(e,t,i){return t&&Z(e.prototype,t),i&&Z(e,i),e}function J(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function et(e,t,i){return(et="u">typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function ei(e,t){return(ei=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}g(),E();var ea=function(e){return er(e)[0]},er=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},en=p(v()),eo=function(){var e=en.default.performance;return void 0!==(e&&e.timing)},es=function(){var e=en.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},el=function(){var e=en.default.performance,t=e&&e.timing;return t&&t.navigationStart};function ed(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function eu(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){J(e,t,i[t])})}return e}function ec(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var eh=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],em=["x-cdn","content-type"].concat(eh);function ep(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(em.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ev(e){if(e){var t=eh.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eb=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eg=function(e){if(!e)return{};var t=el(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ef=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ep(e.getAllResponseHeaders())},eE=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,o=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!eo())return void r.warn("performance timing not supported. Not tracking HLS.js.");var s=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,o=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eg(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;s("requestcompleted",ec(eu({},eb(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:ea(r),request_response_headers:ef(o),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eg(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=o(m)+n(m.duration);s("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:ea(i.url),request_response_headers:ef(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eg(t.stats);s("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:ea(i.url),request_response_headers:ef(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,o=eg(a=a||n.stats),l=o.bytesLoaded,d=o.requestStart,u=o.responseStart,c=o.responseEnd,h=r?ef(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?ea(r.responseURL):void 0,request_id:h?ev(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,s("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;s("fragmentchange",{currentFragmentPDT:o(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,o=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ef(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&s("requestfailed",{request_error:n,request_url:c,request_hostname:ea(c),request_id:h?ev(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==o?void 0:o.code,request_error_text:null==o?void 0:o.text}),l&&s("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(o&&(o.code||o.text)?"response: ".concat(o.code,", ").concat(o.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";s("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:ea(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var o,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(o=d),l?s("renditionchange",{video_source_fps:o,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ey=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},e_=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=ea(e.url),r=e.url,n=e.bytesLoaded,o=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ep(u[u.length-1]._responseHeaders||""));var c=i?ev(i):void 0;return{requestStart:o,requestResponseStart:s,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ek=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},eA=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},eT=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},ew=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=eT(i),n=function(i,a){return e.emit(t,i,a)},o=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:ea(i),request_url:i})};i.on("manifestLoaded",o);var s={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,o=(a||{}).mediaInfo||{},l=o.type,d=o.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?s.video=u:"audio"===l?s.audio=u:s.media=u;var c=e_(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:g,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:s})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,o=a||{},s=o.mediaInfo,l=o.start,d=(s||{}).type,u=e_(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,f=u.requestUrl,E=u.requestId,y=ek(d,i),k=y.currentLevel,A=y.renditionWidth,T=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:g,request_id:E,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:k,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:T})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eA(c.video.codec)}}},m=function(e,t,r){var o=e.mediaType;if("audio"===o||"video"===o){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)s={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var s,l=i.getRepresentationsByType(o);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(s={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);s=i.getBitrateInfoListFor(o).find(function(t){return t.qualityIndex===e.newQuality})}if(!(s&&"number"==typeof s.bitrate))return void a.warn("missing bitrate info for ".concat(o));c[o]=ec(eu({},s),{codec:i.getCurrentTrackFor(o).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:ea(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},o=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:ea(r.url),request_type:r.mediaType,request_error_code:o.status,request_error_text:o.statusText});var s="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=o&&o.status||null!=o&&o.statusText?"response: ".concat(null==o?void 0:o.status,", ").concat(null==o?void 0:o.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:s})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",o),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eC=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eS=0,eI=function(){function e(){z(this,e),J(this,"_listeners",void 0)}return X(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eS,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eS;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],o=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t),s(o,t)}}}]),e}(),eR=p(v()),eL=function(){function e(t){var i=this;z(this,e),J(this,"_playbackHeartbeatInterval",void 0),J(this,"_playheadShouldBeProgressing",void 0),J(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eR.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return X(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eR.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eR.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),ex=function e(t){var i=this;z(this,e),J(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},eM=function(){function e(t){z(this,e),J(this,"_watchTimeTrackerLastCheckedTime",void 0),J(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return X(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),ed(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eD=function(){function e(t){var i=this;z(this,e),J(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),J(this,"_lastTime",void 0),J(this,"_isAdPlaying",void 0),J(this,"_callbackUpdatePlaybackTime",void 0),J(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=W(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=W(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return X(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=W(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=W(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&ed(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&ed(this.pm.data,"ad_playing_time_ms_cumulative",i),ed(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eO=function(){function e(t){z(this,e),J(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return X(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eN=function e(t){if(z(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;ed(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(ed(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eP=function(){function e(t){var i=this;z(this,e),J(this,"_lastCheckedTime",void 0),J(this,"_lastPlayheadTime",void 0),J(this,"_lastPlayheadTimeUpdatedTime",void 0),J(this,"_rebuffering",void 0),J(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:W()})}))}return X(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eU=function(){function e(t){var i=this;z(this,e),J(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||W(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||W(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return X(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),eB=function e(t){var i=this;z(this,e),J(this,"_lastPlayerHeight",void 0),J(this,"_lastPlayerWidth",void 0),J(this,"_lastPlayheadPosition",void 0),J(this,"_lastSourceHeight",void 0),J(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),ed(t.data,"view_total_content_playback_time",e),ed(t.data,"view_total_upscaling",r*e),ed(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eH=function e(t){var i=this;z(this,e),J(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=W(),r=(t.data.viewer_time||e)-(a||e);ed(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,ed(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eW=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eG=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],e$=function(){function e(t){var i=this;z(this,e),J(this,"_adHasPlayed",void 0),J(this,"_adRequests",void 0),J(this,"_adResponses",void 0),J(this,"_currentAdRequestNumber",void 0),J(this,"_currentAdResponseNumber",void 0),J(this,"_prerollPlayTime",void 0),J(this,"_wouldBeNewAdPlay",void 0),J(this,"isAdBreak",void 0),J(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eG.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eW(i._adRequests,a),ed(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||ed(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eW(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&ed(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,ed(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||ed(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||ed(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return X(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=P(er(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=P(er(t.ad_asset_url),2),o=n[0],s=n[1];this.pm.data.view_preroll_ad_asset_domain=s,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),eq=function e(t){var i=this;z(this,e),J(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=W(),t.on("before*",r)},r=function(e){var a=W(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eV=p(v()),eF=(tE=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("u">typeof document){if(arguments.length>1){if("number"==typeof(r=tE({path:"/"},i.defaults,r)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*r.expires),r.expires=o}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=e+"="+a+(r.expires?"; expires="+r.expires.toUTCString():"")+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":"")}e||(n={});for(var s=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<s.length;d++){var u=s[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",tE(t,{expires:-1}))},i.withConverter=e,i}(function(){})),eK="muxData",eY=function(){var e;try{e=(eF.get(eK)||"").split("&").reduce(function(e,t){var i=P(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},ej=function(e){try{eF.set(eK,Object.entries(e).map(function(e){var t=P(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},eQ=function(){var e=eY();return e.mux_viewer_id=e.mux_viewer_id||G(),e.msn=e.msn||Math.random(),ej(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},ez=function(){var e=eY(),t=W();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=G(),e.sst=t),e.sex=t+15e5,ej(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eZ=eJ({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),eX=eJ({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function eJ(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e0(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),o=n[0],s=eZ[o];s||(K.info("Data key word `"+n[0]+"` not expected in "+a),s=o+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),eX[e]?s+=eX[e]:Number.isInteger(Number(e))?s+=e:(K.info("Data key word `"+e+"` not expected in "+a),s+="_"+e+"_")}),r?i[s]=e[a]:t[s]=e[a]}}),Object.assign(t,i)}var e1=p(v()),e2=p(D()),e3={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e4=["hb","requestcompleted","requestfailed","requestcanceled"],e5=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e3,t)};e5.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e5.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},e5.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e1.default.clearTimeout(this._sendTimeout)},e5.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e0({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);e9(this._beaconUrl,i,!0,function(){})},e5.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=W();e9(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,K.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=W()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e5.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e5.prototype._startBeaconSending=function(){var e=this;e1.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e1.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e5.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(W())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,o=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},s=function(){return n<=t._options.maxPayloadKBSize};return o(),s()||(K.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e4.indexOf(e.e)}),o()),s()||(K.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),o()),a};var e8="function"==typeof e2.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},e9=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(e1.default.fetch)return void e1.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:e8(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(e1.default.XMLHttpRequest){var r=new e1.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},e6=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],e7=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],te=["ad_id","ad_creative_id","ad_universal_id"],tt=["viewstart","error","ended","viewend"],ti=function(){function e(t,i){var a,r,n,o,s,l,d,u,c,h,m,p,v,b,g,f,E,y,k,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};z(this,e),J(this,"mux",void 0),J(this,"envKey",void 0),J(this,"options",void 0),J(this,"eventQueue",void 0),J(this,"sampleRate",void 0),J(this,"disableCookies",void 0),J(this,"respectDoNotTrack",void 0),J(this,"previousBeaconData",void 0),J(this,"lastEventTime",void 0),J(this,"rateLimited",void 0),J(this,"pageLevelData",void 0),J(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e5((a=this.envKey,n=(r=this.options).beaconCollectionDomain,o=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(o||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(E=this.options.sampleRate)?E:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(k=this.options.respectDoNotTrack)&&k,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(s=this.options.platform)?void 0:s.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(g=this.options.platform)||null==(b=g.os)?void 0:b.version,page_url:null===eV.default||void 0===eV.default||null==(f=eV.default.location)?void 0:f.href},this.viewerData=this.disableCookies?{}:eQ()}return X(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&j())return K.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return K.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:ez(),a=ec(eu({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,o=e0(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return K.info("Not sending event due to sample rate restriction",e,a,o);if(this.envKey||K.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,o),!this.rateLimited)if(K.info("Sending event",e,a,o),this.rateLimited=!this.eventQueue.queueEvent(e,o),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(tt.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",o=e0(a),this.eventQueue.queueEvent(a.event,o),K.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=eu({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=P(t,2),o=r[0],s=r[1];i.previousBeaconData&&(s!==i.previousBeaconData[o]||e6.indexOf(o)>-1||i.objectHasChanged(n,o,s,i.previousBeaconData[o])||i.eventRequiresKey(e,o))&&(a[o]=s,i.previousBeaconData[o]=s)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||te.includes(t)&&e7.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),ta=function e(t){z(this,e);var i=0,a=0,r=0,n=0,o=0,s=0,l=0;t.on("requestcompleted",function(e,s){var l,d,u=s.request_start,c=s.request_response_start,h=s.request_response_end,m=s.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;o++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/o)}}),t.on("requestfailed",function(e,i){n++,s++,t.data.view_request_count=n,t.data.view_request_failed_count=s}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tr=function e(t){var i=this;z(this,e),J(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=W(),o=i._lastEventTime;if(i._lastEventTime=n,o&&n-o>36e5){var s=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,J({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},s)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function tn(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var to=function e(t){z(this,e);var i=function(e){var i,a,r,s=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=s&&!tn(s,n)&&o<=l&&(n=s,o=l,t.emit("cdnchange",{video_cdn:s}))},a=null,r=null,n=null,o=0;t.on("viewinit",function(){a=null,r=null,n=null,o=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(tn(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},ts=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},tl=function e(t){var i=this;z(this,e),J(this,"_emittingAutomaticEvent",!1),J(this,"_hasInitialized",!1),J(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?ts(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},td=function(){function e(t){z(this,e),J(this,"pm",void 0),J(this,"_currentRangeStart",void 0),J(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return X(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),tu=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),tc=function(e){if(!e)return tu.UNKNOWN;switch(e){case"cellular":case"wimax":return tu.CELLULAR;case"wifi":return tu.WIFI;case"ethernet":return tu.WIRED;case"none":return tu.NO_CONNECTION;case"bluetooth":case"other":default:return tu.OTHER;case"unknown":return tu.UNKNOWN}},th=p(v()),tm=function(){function e(t){var i=this;z(this,e),J(this,"pm",void 0),J(this,"lastType",void 0),J(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),th.default.addEventListener("online",a),th.default.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),th.default.removeEventListener("online",a),th.default.removeEventListener("offline",a)})})}return X(e,[{key:"type",get:function(){var t,i;return(null==(t=th.default.navigator)?void 0:t.onLine)===!1?tu.NO_CONNECTION:null!=(i=e.connection)&&i.type?tc(e.connection.type):tu.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",eu({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=th.default.navigator)&&"connection"in e&&"object"==typeof e.connection?th.default.navigator.connection:null}}]),e}(),tp=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],tv=new Set(["requestcompleted","requestfailed","requestcanceled"]),tb=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&ei(a,e);var t,i=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ee(a);return e=t?Reflect.construct(i,arguments,ee(this).constructor):i.apply(this,arguments),e&&("object"===f(e)||"function"==typeof e)?e:Q(this)});function a(e,t,r){z(this,a),J(Q(n=i.call(this)),"pageLoadEndTime",void 0),J(Q(n),"pageLoadInitTime",void 0),J(Q(n),"_destroyed",void 0),J(Q(n),"_heartBeatTimeout",void 0),J(Q(n),"adTracker",void 0),J(Q(n),"dashjs",void 0),J(Q(n),"data",void 0),J(Q(n),"disablePlayheadRebufferTracking",void 0),J(Q(n),"disableRebufferTracking",void 0),J(Q(n),"disableAdPlaybackRangeFiltering",void 0),J(Q(n),"errorTracker",void 0),J(Q(n),"errorTranslator",void 0),J(Q(n),"emitTranslator",void 0),J(Q(n),"getAdData",void 0),J(Q(n),"getPlayheadTime",void 0),J(Q(n),"getStateData",void 0),J(Q(n),"stateDataTranslator",void 0),J(Q(n),"hlsjs",void 0),J(Q(n),"id",void 0),J(Q(n),"longResumeTracker",void 0),J(Q(n),"minimumRebufferDuration",void 0),J(Q(n),"mux",void 0),J(Q(n),"playbackEventDispatcher",void 0),J(Q(n),"playbackHeartbeat",void 0),J(Q(n),"playbackHeartbeatTime",void 0),J(Q(n),"playheadTime",void 0),J(Q(n),"seekingTracker",void 0),J(Q(n),"sustainedRebufferThreshold",void 0),J(Q(n),"watchTimeTracker",void 0),J(Q(n),"currentFragmentPDT",void 0),J(Q(n),"currentFragmentStart",void 0),n.pageLoadInitTime=el(),n.pageLoadEndTime=es(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),K.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new ti(e,r.data.env_key,r),n.data={player_instance_id:G(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,o=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(Q(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",o),this.one("adbreakstart",o)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),o(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"u">typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var s=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",s,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tp.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tr(Q(n)),n.errorTracker=new ex(Q(n)),new eq(Q(n)),n.seekingTracker=new eH(Q(n)),n.playheadTime=new eO(Q(n)),n.playbackHeartbeat=new eL(Q(n)),new eB(Q(n)),n.watchTimeTracker=new eM(Q(n)),new eD(Q(n)),new td(Q(n)),n.adTracker=new e$(Q(n)),new eP(Q(n)),new eN(Q(n)),new eU(Q(n)),new ta(Q(n)),new to(Q(n)),new tl(Q(n)),new tm(Q(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return X(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=et(ee(a.prototype),"emit",this)).call.apply(i,[this].concat(F(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=P(er(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tv.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=G(),i=function(){t===e.data.view_id&&ed(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,eE(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ey(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,ew(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eC(this.dashjs),this.dashjs=void 0)}}]),a}(eI),tg=p(D());function tf(){return tg.default&&!!(tg.default.fullscreenElement||tg.default.webkitFullscreenElement||tg.default.mozFullScreenElement||tg.default.msFullscreenElement)}var tE,ty,t_=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tk={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tA=p(v());tA.default&&tA.default.WeakMap&&(ty=new WeakMap);var tT=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tT.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tT.prototype.processLine=function(e){var t=e.indexOf(":"),i=tx(e,t),a=i[0],r=2===i.length?tS(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":tw(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":tw(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":tw(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var o=eb(tM(i[1]));Object.assign(this.manifest.sessionData,o)}},tT.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",o=i&&3*i,s=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=o),o&&t[r]<o&&(t[r]=o),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<s&&(t[n]=s)}};var tw=function(e,t){var i,a=tC(t[0].replace("#EXT-X-",""));tL(t[1])?(i={},i=Object.assign(tR(t[1]),i)):i=tS(t[1]),e[a]=i},tC=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tS=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tI=function(e){var t={},i=e.split("=");return i.length>1&&(t[tC(i[0])]=tS(i[1])),t},tR=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tI(t[a]),i);return i},tL=function(e){return e.indexOf("=")>-1},tx=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tM=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tD={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){K.info("safeCall error",e)}return r},safeIncrement:ed,getComputedStyle:function(e,t){var i;return e&&t&&tA.default&&"function"==typeof tA.default.getComputedStyle?(ty&&ty.has(e)&&(i=ty.get(e)),i||(i=tA.default.getComputedStyle(e,null),ty&&ty.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ep,cdnHeadersToRequestId:ev,extractHostnameAndDomain:er,extractHostname:ea,manifestParser:tT,generateShortID:$,generateUUID:G,now:W,findMediaElement:V},tO={},tN=function(e){var t=arguments;"string"==typeof e?tN.hasOwnProperty(e)?U.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tN[e].apply(null,t)},0):K.warn("`"+e+"` is an unknown task"):"function"==typeof e?U.default.setTimeout(function(){e(tN)},0):K.warn("`"+e+"` is invalid.")},tP={loaded:W(),NAME:"mux-embed",VERSION:"5.18.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=P(V(t),3),r=a[0],n=a[1],o=a[2],s=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return s.error("No element was found with the `"+n+"` query selector.");if("video"!==o&&"audio"!==o)return s.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,s.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),o={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tf(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var s=r.getStartDate();if(s&&"function"==typeof s.getTime&&s.getTime()){var u=s.getTime();o.player_program_time=u+i,r.seekable.length>0&&(o.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return o}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){s.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=P(V(t),3),a=i[0],n=i[1],o=i[2];return a?"video"!==o&&"audio"!==o?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},t_.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tk[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=tf()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=tf(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(tN,e,t)},destroyMonitor:function(e){var t=P(V(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():K.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=q(e);tO[i]?tO[i].addHLSJS(t):K.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=q(e);tO[i]?tO[i].addDashJS(t):K.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=q(e);tO[t]?tO[t].removeHLSJS():K.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=q(e);tO[t]?tO[t].removeDashJS():K.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){j()&&t&&t.respectDoNotTrack&&K.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=q(e);tO[i]=new tb(tN,i,t)},emit:function(e,t,i){var a=q(e);tO[a]?(tO[a].emit(t,i),"destroy"===t&&delete tO[a]):K.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=q(e);tO[i]?tO[i].emit("hb",t):K.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=q(e);tO[i]?tO[i].emitTranslator=t:K.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=q(e);tO[i]?tO[i].stateDataTranslator=t:K.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=q(e);tO[i]?tO[i].getPlayheadTime=t:K.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:j,log:K,utils:tD,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tN,tP),void 0!==U.default&&"function"==typeof U.default.addEventListener&&U.default.addEventListener("pagehide",function(e){e.persisted||(tN.WINDOW_UNLOADING=!0)},!1);var tU=i(3379),tB=tU.Ay,tH="video",tW=e=>e===tH?"playback":e,tG=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tG.MEDIA_ERR_ABORTED=1,tG.MEDIA_ERR_NETWORK=2,tG.MEDIA_ERR_DECODE=3,tG.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tG.MEDIA_ERR_ENCRYPTED=5,tG.MEDIA_ERR_CUSTOM=100,tG.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var t$=(e,t)=>null!=t&&e in t,tq={ANY:"any",MUTED:"muted"},tV="on-demand",tF="live",tK="unknown",tY="native",tj={HEADER:"header",QUERY:"query",NONE:"none"},tQ=Object.values(tj),tz={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tZ={HLS:tz.M3U8};Object.keys(tZ),[...Object.values(tz)];var tX={code:"en"},tJ=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},t0=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t1=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return t$(e,tZ)?tZ[e]:t}return t4(e)},t2=e=>"VOD"===e?tV:tF,t3=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t4=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=t8(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return t6(e)?tz.M3U8:"";let r=i.slice(a+1).toUpperCase();return t$(r,tz)?tz[r]:""},t5=e=>{try{return new URL(e),!1}catch{return!0}},t8=(e,t)=>{var i;if(!t5(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&t5(t.toString())&&(r=new URL(t,a)),new URL(e,r)},t9="mux.com",t6=({src:e,customDomain:t=t9})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),o=2===n.length,s=!(null!=n&&n[1].includes("."));return a&&r&&o&&s},t7=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function ie(e,t=!0){var i;return new it(t&&null!=(i=null==tX?void 0:tX[e])?i:e,t?tX.code:"en")}var it=class{constructor(e,t=(e=>null!=(e=tX)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ii=Object.values(tq),ia=e=>"boolean"==typeof e||"string"==typeof e&&ii.includes(e),ir=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tq.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tq.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},io=e=>"time"in e?e.time:e.startTime;function is(e,t,i,a,r,n){let o=document.createElement("track");return o.kind=t,o.label=i,a&&(o.srclang=a),r&&(o.id=r),n&&(o.default=!0),o.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",o.setAttribute("data-removeondestroy",""),e.append(o),o.track}function il(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function id(e,t,i,a){let r=il(e,i,a);return r||((r=is(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>io(t)-io(e)).forEach(t=>{var i,n;let o=t.value,s=io(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(s,t.endTime,"chapters"===a?o:JSON.stringify(null!=o?o:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=s),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=s),null==r||r.addCue(new VTTCue(s,d,"chapters"===a?o:JSON.stringify(null!=o?o:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var iu="cuepoints",ic=Object.freeze({label:iu});async function ih(e,t,i=ic){return id(e,t,i.label,"metadata")}var im=e=>({time:e.startTime,value:JSON.parse(e.text)});function ip(e,t={label:iu}){var i,a;let r=il(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return im(r.activeCues[0]);let{currentTime:n}=e;return im(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iv(e,t=ic){return new Promise(i=>{tJ(e,"loadstart",async()=>{let a=await ih(e,[],t);tJ(e,"cuechange",()=>{let t=ip(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ib="chapters",ig=Object.freeze({label:ib}),iE=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function iy(e,t,i=ig){return id(e,t,i.label,"chapters")}function i_(e,t={label:ib}){var i,a;let r=il(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iE(r.activeCues[0]);let{currentTime:n}=e;return iE(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ik(e,t=ig){return new Promise(i=>{tJ(e,"loadstart",async()=>{let a=await iy(e,[],t);tJ(e,"cuechange",()=>{let t=i_(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iA=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var o,s,l,d;let u,c;if(n){let i=ie("Your device appears to be offline",r),a=tG.MEDIA_ERR_NETWORK,n=new tG(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let h="status"in e?e.status:e.code,m=Date.now(),p=tG.MEDIA_ERR_NETWORK;if(200===h)return;let v=tW(t),b=(u=tW(t),c=`${u}Token`,null!=(l=i.tokens)&&l[u]?null==(d=i.tokens)?void 0:d[u]:t$(c,i)?i[c]:void 0),g=t===tH?"v":"drm"===t?"d":void 0,[f]=t0(null!=(o=i.playbackId)?o:"");if(!h||!f)return;let E=t7(b);if(b&&!E){let i=new tG(ie("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:v}),p,!0,ie("Compact JWT string: {token}",r).format({token:b}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(h>=500){let e=new tG("",p,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===h)if(E){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(E,m)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tG(ie("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:v}),p,!0,ie("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(s=E.exp)?s:0),currentDate:new Intl.DateTimeFormat("en",i).format(m)}));return a.errorCategory=t,a.muxCode=2403210,a.data=e,a}if((({sub:e},t)=>e!==t)(E,f)){let i=new tG(ie("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v}),p,!0,ie("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:v,playbackId:f,tokenPlaybackId:E.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e},t)=>!e)(E,0)){let i=new tG(ie("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,ie("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(E,g)){let i=new tG(ie("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g,aud:E.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new tG(ie("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v,category:t}),p,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===h){let n=new tG(ie("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),p,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:f}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===tF?"live":i.streamType===tV?"on-demand":"unknown",n.data=e,n}if(404===h){let i=new tG(ie("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),p,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===h){let i=new tG(ie("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),p,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let y=new tG("",p,null==a||a);return y.errorCategory=t,y.muxCode=2e6,y.data=e,y},iT=tB.DefaultConfig.capLevelController,iw={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},iC=class e extends iT{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iw[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let o=r[r.length-1];return t.findIndex(e=>e===o)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iT.getMaxLevelByMediaSize(a,16/9*n,n)}};iC.minMaxResolution=720,iC.maxAutoResolution=new WeakMap;var iS,iI,iR,iL,ix,iM,iD=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),iO="fairplay",iN=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,iP=async(e,t)=>{if(t===tz.MP4)return{streamType:tV,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tz.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await ((e,t)=>{let i,a=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(t5(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=t8(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())})(i,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(iN)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),o=t2(n),s=t3(n),l;if(o===tF){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:o,targetLiveWindow:s,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iU=async(e,t,i=t1({src:e}))=>{var a,r,n,o;let{streamType:s,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await iP(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&iB(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=i$.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=i$.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(o=i$.get(t))?o:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iB=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),o={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(o[e.key]=e.value);(null!=(a=i$.get(t))?a:{}).metadata=o;let s=new CustomEvent("muxmetadata");t.dispatchEvent(s)}catch(e){console.error(e)}},iH=null!=(iI=null==(iS=null==globalThis?void 0:globalThis.navigator)?void 0:iS.userAgent)?iI:"",iW=null!=(ix=null==(iL=null==(iR=null==globalThis?void 0:globalThis.navigator)?void 0:iR.userAgentData)?void 0:iL.platform)?ix:"",iG=iH.toLowerCase().includes("android")||["x11","android"].some(e=>iW.toLowerCase().includes(e)),i$=new WeakMap,iq="mux.com",iV=null==(iM=tB.isSupported)?void 0:iM.call(tB),iF=()=>{if("u">typeof window)return tN.utils.now()},iK=tN.utils.generateUUID,iY=({playbackId:e,customDomain:t=iq,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:o,assetStartTime:s,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=t0(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),o&&p.searchParams.set("program_end_time",`${o}`),s&&p.searchParams.set("asset_start_time",`${s}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},ij=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iQ=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},iz=e=>{var t;return null==(t=i$.get(e))?void 0:t.error},iZ=e=>{var t,i;return null!=(i=null==(t=i$.get(e))?void 0:t.streamType)?i:tK},iX=e=>{var t,i;return null!=(i=null==(t=i$.get(e))?void 0:t.seekable)?i:e.seekable},iJ=.034,i0=(e,t,i=iJ)=>e>t||((e,t,i=iJ)=>Math.abs(e-t)<=i)(e,t,i),i1=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:o}=n;if(!(null!=o&&o.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let s=o[o.length-1];if(e.currentTime<=s.start)return!1;let l=s.start+s.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},i2=(e,t)=>e.ended||e.loop?e.ended:!!(t&&i1(e,t))||((e,t=iJ)=>e.paused&&i0(e.currentTime,e.duration,t))(e),i3=(e,t,i)=>{var a,r,n;i4(t,i,e);let{metadata:o={}}=e,{view_session_id:s=iK()}=o,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:aa(e)&&null!=(n=null!=(r=ij(e.playbackId))?r:iQ(e.src))?n:e.src;o.view_session_id=s,o.video_id=l,e.metadata=o,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let o=null==(i=i$.get(t))?void 0:i.coreReference;i3(e,t,o),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},i$.set(t,{retryCount:0});let d=i8(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,o=!1,s=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;o||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=s,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tJ(i,"play",()=>{o=!0,a.config.maxBufferLength=s,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?tB:void 0}):an(e,t,d),ao(e,t,d),iv(t),ik(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,o=ia(a)?a:!!a,s=()=>{r||tJ(t,"playing",()=>{r=!0},{once:!0})};if(s(),tJ(t,"loadstart",()=>{r=!1,s(),ir(t,o)},{once:!0}),tJ(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tK?e.streamType===tF:!Number.isFinite(t.duration)),ir(t,o)},{once:!0}),i&&i.once(tB.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tK?e.streamType===tF:null!=(a=i.details.live)&&a}),!o){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tJ(t,"play",()=>{"metadata"===t.preload?i.once(tB.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||ir(t,o=ia(e)?e:!!e)}})(e,t,d);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,o=t.playbackRate||1,s=()=>{0!==t.playbackRate&&(o=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,tJ(t,"ratechange",s);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",s),t.playbackRate=o)};i.on(tB.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(tB.Events.FRAG_BUFFERED,l),t.playbackRate=o)},{once:!0})})(e,t,d),((e,t,i)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!i)return;let r=0;i.on(tB.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate)})})(e,0,d);let h={engine:d,setAutoplay:c,setPreload:u},m=i$.get(t);return m&&(m.coreReference=h),h},i4=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",al),e.removeEventListener("error",au),e.removeEventListener("durationchange",as),i$.delete(e),e.dispatchEvent(new Event("teardown")))};function i5(e,t){var i;let a=t1(e);if(a!==tz.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,o=iV&&("mse"===n||iG||!(/^((?!chrome|android).)*safari/i.test(iH)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===tY||!o)}var i8=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:o,_hlsConfig:s={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=t1(e)===tz.M3U8,c=i5(e,t);if(u&&!c&&iV){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=i9(a),h=i6(e),m=[tj.QUERY,tj.HEADER].includes(o)?{useHeaders:o===tj.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=ar(e,s),v=new tB({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(o&&o!==tj.QUERY)return;let r=t8(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...s});return p.capLevelController===iC&&void 0!==l&&iC.setMaxAutoResolution(v,l),v.on(tB.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&iB(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),v}},i9=e=>e===tF?{backBufferLength:8}:{},i6=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=ij(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:at(e,"fairplay"),serverCertificateUrl:ai(e,"fairplay")},"com.widevine.alpha":{licenseUrl:at(e,"widevine")},"com.microsoft.playready":{licenseUrl:at(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?iO:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},i7=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ae=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},at=({playbackId:e,tokens:{drm:t}={},customDomain:i=iq},a)=>{let r=ij(e);return`https://license.${i.toLocaleLowerCase().endsWith(iq)?i:iq}/license/${a}/${r}?token=${t}`},ai=({playbackId:e,tokens:{drm:t}={},customDomain:i=iq},a)=>{let r=ij(e);return`https://license.${i.toLocaleLowerCase().endsWith(iq)?i:iq}/appcert/${a}/${r}?token=${t}`},aa=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iq)||!!i&&a.includes(i.toLocaleLowerCase())},ar=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=iC,i.capLevelToPlayerSize=!0):i.capLevelController=tU.Rx,i},an=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:o=tN,muxDataSDKOptions:s={}}=e,l=aa(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};o.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tB:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...s,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},ao=(e,t,i)=>{var a,r;let n=i5(e,t),{src:o,customDomain:s=iq}=e,l=()=>{t.ended||e.disablePseudoEnded||!i2(t,i)||(i1(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=iX(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(tJ(t,"durationchange",c),t&&n){let i=t1(e);if("string"==typeof o){if(o.endsWith(".mp4")&&o.includes(s)){let e=iQ(o);iB(new URL(`https://stream.${s}/${e}/metadata.json`).toString(),t)}let n=()=>{if(iZ(t)!==tF||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tJ(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>iU(o,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iA(i,tH,e);if(a)return void ad(t,a)}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};tJ(t,"play",e,{once:!0}),tJ(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>i7(ai(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iA(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>ae(t,at(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iA(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:ad,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,iO)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new tG(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tG.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,a(e,t),()=>{}}let n=t(),o=null,s=t=>{(async()=>{try{var i,r;let a,o,s,u,c,h,m,p;e.webkitKeys||l();let v=await n;if(null===t.initData||null==v)return;let b=(i=t.initData,r=v,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(iD(i)),o=new Uint8Array(i),s=new Uint8Array(a),u=new Uint8Array(r),c=new Uint8Array(o.byteLength+4+u.byteLength+4+s.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),i=e.byteLength;t.setUint32(h,i,!0),h+=4,m(e)},m(o),p(s),p(u),c);d(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new tG("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",tG.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},s=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new tG(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tG.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",s),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),o=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",s),e.addEventListener("teardown",l),o=l},u=()=>{e.removeEventListener("webkitneedkey",s),e.removeEventListener("teardown",u),null==o||o();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",s),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let o=null,s=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new tG(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tG.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,a(e,t)});if(!n)return;let o=await n.createMediaKeys();try{let e=await t();await o.setServerCertificate(e).catch(()=>{let e=ie("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tG(e,tG.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(o)},d=async(t,r)=>{let s=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await s.update(n)}catch{let t=new tG(ie("Failed to update DRM license. This may be an issue with the player or your protected content."),tG.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,a(e,t)}},d=()=>{s.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new tG(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tG.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((i=new tG(ie("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tG.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006),i&&a(e,i)})};s.addEventListener("keystatuseschange",d),s.addEventListener("message",l);let u=async()=>{s.removeEventListener("keystatuseschange",d),s.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await s.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),o=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),o=u,await s.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new tG(ie("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tG.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",s),e.removeEventListener("teardown",u),o&&await o(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",s),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):tJ(t,"encrypted",()=>{let e=new tG(ie("Attempting to play DRM-protected content without providing a DRM token."),tG.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,ad(t,e)},{once:!0}),t.setAttribute("src",o),e.startTime&&((null!=(r=i$.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",as,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",al),t.addEventListener("error",au),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tJ(t,"pause",l),tJ(t,"seeked",l),tJ(t,"play",()=>{t.ended||i0(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else{let a,r;i&&o?(i.once(tB.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,o,s,l,d,u,c;let h,m,p,v,b,{streamType:g,targetLiveWindow:f,liveEdgeStartOffset:E,lowLatency:y}=(m=t2(h=e.type),p=t3(h),b=!!(null!=(c=e.partList)&&c.length),m===tF&&(v=b?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:v,lowLatency:b});if(g===tF){y?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(o=i.userConfig.backBufferLength)?o:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(s=i$.get(t))?s:{}).seekable=e}(null!=(l=i$.get(t))?l:{}).liveEdgeStartOffset=E,(null!=(d=i$.get(t))?d:{}).targetLiveWindow=f,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=i$.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),c(),iZ(t)!==tF||Number.isFinite(t.duration)||(i.on(tB.Events.LEVEL_UPDATED,c),tJ(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tB.Events.LEVELS_UPDATED,c)}))}),i.on(tB.Events.ERROR,(a,r)=>{var n,o;let s=ac(r,e);if(2412e3===s.muxCode){let e=null!=(n=i$.get(t))?n:{},a=null!=(o=e.retryCount)?o:0;if(a<6){let n=0===a?5e3:6e4,o=new tG(`Retrying in ${n/1e3} seconds...`,s.code,s.fatal);Object.assign(o,s),ad(t,o);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new tG('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',s.code,s.fatal);Object.assign(i,s),ad(t,i);return}}ad(t,s)}),i.on(tB.Events.MANIFEST_LOADED,()=>{let e=i$.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",au),tJ(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tB.Events.MANIFEST_PARSED,function(t,i){s();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tB.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(o(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(tB.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let o=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!o.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let o=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},s=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),o()};t.once(tB.Events.DESTROYING,()=>{var t,i;s(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(tB.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,o=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),s=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${o}`;is(t,e.kind,e.label,null==n?void 0:n.lang,s,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(tB.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(tB.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i,a;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let r=t.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(tB.Events.MANIFEST_LOADED,r),i.once(tB.Events.MEDIA_ATTACHED,r),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")}};function as(e){var t;let i=e.target,a=null==(t=i$.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function al(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tG(i,a);if(t.src&&a===tG.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=iz(t))?e:t.error;(null==i?void 0:i.code)===tG.MEDIA_ERR_SRC_NOT_SUPPORTED&&ad(t,r)},500);if(t.src&&(a!==tG.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}ad(t,r)}function ad(e,t){var i;t.fatal&&((null!=(i=i$.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function au(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tG))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=i$.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var ac=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tB.ErrorTypes.NETWORK_ERROR]:tG.MEDIA_ERR_NETWORK,[tB.ErrorTypes.MEDIA_ERROR]:tG.MEDIA_ERR_DECODE,[tB.ErrorTypes.KEY_SYSTEM_ERROR]:tG.MEDIA_ERR_ENCRYPTED},o,s=[tB.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tB.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tG.MEDIA_ERR_NETWORK:n[e.type];if(s===tG.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===tB.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===tB.ErrorTypes.NETWORK_ERROR?tH:void 0)?i:tH;o=null!=(a=iA(e.response,r,t,e.fatal))?a:new tG("",s,e.fatal)}else s===tG.MEDIA_ERR_ENCRYPTED?e.details===tB.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((o=new tG(ie("Attempting to play DRM-protected content without providing a DRM token."),tG.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",o.muxCode=5000002):e.details===tB.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((o=new tG(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tG.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",o.muxCode=5000001):e.details===tB.ErrorDetails.KEY_SYSTEM_NO_SESSION?((o=new tG(ie("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tG.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",o.muxCode=5000002):e.details===tB.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((o=new tG(ie("Failed to update DRM license. This may be an issue with the player or your protected content."),tG.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",o.muxCode=5000003):e.details===tB.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((o=new tG(ie("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tG.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",o.muxCode=5000004):e.details===tB.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((o=new tG(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tG.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",o.muxCode=5000005):e.details===tB.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((o=new tG(ie("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tG.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",o.muxCode=5000006):((o=new tG(e.error.message,tG.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",o.muxCode=5e6):o=new tG("",s,e.fatal);return o.context||(o.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),o.data=e,o};let ah=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],am=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function ap(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${ag(e)}></audio>
    </slot>
    <slot></slot>
  `}function av(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${ag(e)}></video>
    </slot>
    <slot></slot>
  `}function ab(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?ap:av;static shadowRootOptions={mode:"open"};static Events=ah;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...am]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();e.has(a)?!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i):this.set?this.set(t,i):this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#r=null;#n=new Map;#o;#s;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#o=new MutationObserver(this.#u.bind(this)),this.#s=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#s),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#o?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i(),this.#s||this.#d()}disconnectedCallback(){for(let e of(this.#o?.disconnect(),this.#o=void 0,this.#s&&(this.shadowRoot?.removeEventListener("slotchange",this.#s),this.#s=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function ag(e){let t="";for(let i in e){if(!am.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let af=ab(globalThis.HTMLElement??class{},{tag:"video"});ab(globalThis.HTMLElement??class{},{tag:"audio"});var aE,ay,a_,ak,aA,aT,aw,aC,aS,aI,aR,aL,ax,aM,aD=e=>{throw TypeError(e)},aO=(e,t,i)=>t.has(e)||aD("Cannot "+i),aN=(e,t,i)=>(aO(e,t,"read from private field"),i?i.call(e):t.get(e)),aP=(e,t,i)=>t.has(e)?aD("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),aU=(e,t,i,a)=>(aO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aB=(e,t,i)=>(aO(e,t,"access private method"),i),aH=(()=>{try{return"0.31.0"}catch{}return"UNKNOWN"})(),aW=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,aG={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},a$=Object.values(aG),aq="mux-video",aV=class extends af{constructor(){super(),aP(this,aR),aP(this,aE),aP(this,ay),aP(this,a_,{}),aP(this,ak,{}),aP(this,aA),aP(this,aT),aP(this,aw),aP(this,aC),aP(this,aS,""),aP(this,aI,e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=i$.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(aU(this,aS,"default"),this.updateLogo())}),aP(this,ax),aU(this,ay,iF())}static get NAME(){return aq}static get VERSION(){return aH}static get observedAttributes(){var e;return[...a$,...null!=(e=af.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?aW:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${af.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[aG.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(aG.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tQ.includes(e)?this.setAttribute(aG.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tQ.join()}`):this.removeAttribute(aG.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(aG.PLAYER_INIT_TIME)?+this.getAttribute(aG.PLAYER_INIT_TIME):aN(this,ay)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aG.PLAYER_INIT_TIME):this.setAttribute(aG.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=aN(this,aw))?e:aq}set playerSoftwareName(e){aU(this,aw,e)}get playerSoftwareVersion(){var e;return null!=(e=aN(this,aT))?e:aH}set playerSoftwareVersion(e){aU(this,aT,e)}get _hls(){var e;return null==(e=aN(this,aR,aL))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=iz(this.nativeEl))?e:null}get errorTranslator(){return aN(this,aC)}set errorTranslator(e){aU(this,aC,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(aG.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(aG.TYPE,e):this.removeAttribute(aG.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(aG.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(aG.DEBUG,""):this.removeAttribute(aG.DEBUG))}get disableTracking(){return this.hasAttribute(aG.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(aG.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(aG.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(aG.DISABLE_COOKIES,""):this.removeAttribute(aG.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(aG.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(aG.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(aG.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(aG.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(aG.START_TIME):this.setAttribute(aG.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(aG.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(aG.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(aG.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(aG.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(aG.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(aG.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(aG.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(aG.MIN_PRELOAD_SEGMENTS):this.setAttribute(aG.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(aG.PLAYBACK_ID)?this.getAttribute(aG.PLAYBACK_ID):null!=(e=iQ(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(aG.PLAYBACK_ID,e):this.removeAttribute(aG.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(aG.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aG.MAX_RESOLUTION,e):this.removeAttribute(aG.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aG.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aG.MIN_RESOLUTION,e):this.removeAttribute(aG.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(aG.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(aG.MAX_AUTO_RESOLUTION):this.setAttribute(aG.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(aG.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aG.RENDITION_ORDER,e):this.removeAttribute(aG.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(aG.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(aG.PROGRAM_START_TIME):this.setAttribute(aG.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(aG.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(aG.PROGRAM_END_TIME):this.setAttribute(aG.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(aG.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(aG.ASSET_START_TIME):this.setAttribute(aG.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(aG.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(aG.ASSET_END_TIME):this.setAttribute(aG.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(aG.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aG.CUSTOM_DOMAIN,e):this.removeAttribute(aG.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:aN(this,ax)}set capRenditionToPlayerSize(e){aU(this,ax,e)}get drmToken(){var e;return null!=(e=this.getAttribute(aG.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(aG.DRM_TOKEN,e):this.removeAttribute(aG.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(aG.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(aG.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(aG.PLAYBACK_ID)){let[,e]=t0(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(aG.PLAYBACK_TOKEN,e):this.removeAttribute(aG.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(aG.PLAYBACK_TOKEN),t=this.getAttribute(aG.DRM_TOKEN);return{...aN(this,ak),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){aU(this,ak,null!=e?e:{})}get ended(){return i2(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(aG.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(aG.ENV_KEY,e):this.removeAttribute(aG.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aG.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aG.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aG.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(aG.STREAM_TYPE))?e:iZ(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(aG.STREAM_TYPE,e):this.removeAttribute(aG.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(aG.TARGET_LIVE_WINDOW)?+this.getAttribute(aG.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=i$.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(aG.TARGET_LIVE_WINDOW):this.setAttribute(aG.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(aG.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=i$.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=iX(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(aG.LIVE_EDGE_OFFSET))return+this.getAttribute(aG.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(aG.LIVE_EDGE_OFFSET):this.setAttribute(aG.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iX(this.nativeEl)}async addCuePoints(e){return ih(this.nativeEl,e)}get activeCuePoint(){return ip(this.nativeEl)}get cuePoints(){return function(e,t={label:iu}){let i=il(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>im(e)):[]}(this.nativeEl)}async addChapters(e){return iy(this.nativeEl,e)}get activeChapter(){return i_(this.nativeEl)}get chapters(){return function(e,t={label:ib}){var i;let a=il(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iE(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(aG.PREFER_PLAYBACK);if("mse"===e||e===tY)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===tY?this.setAttribute(aG.PREFER_PLAYBACK,e):this.removeAttribute(aG.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![aG.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...aN(this,a_)}}set metadata(e){aU(this,a_,null!=e?e:{}),this.mux&&this.mux.emit("hb",aN(this,a_))}get _hlsConfig(){return aN(this,aA)}set _hlsConfig(e){aU(this,aA,e)}get logo(){var e;return null!=(e=this.getAttribute(aG.LOGO))?e:aN(this,aS)}set logo(e){e?this.setAttribute(aG.LOGO,e):this.removeAttribute(aG.LOGO)}load(){i3(this,this.nativeEl,aN(this,aR,aL))}unload(){i4(this.nativeEl,aN(this,aR,aL),this)}attributeChangedCallback(e,t,i){var a,r;switch(af.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case aG.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case aG.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?aB(this,aR,aM).call(this):e&&!a?this.unload():e&&a&&(this.unload(),aB(this,aR,aM).call(this));break}case"autoplay":if(i===t)break;null==(a=aN(this,aR,aL))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=aN(this,aR,aL))||r.setPreload(i);break;case aG.PLAYBACK_ID:case aG.CUSTOM_DOMAIN:case aG.MAX_RESOLUTION:case aG.MIN_RESOLUTION:case aG.RENDITION_ORDER:case aG.PROGRAM_START_TIME:case aG.PROGRAM_END_TIME:case aG.ASSET_START_TIME:case aG.ASSET_END_TIME:case aG.PLAYBACK_TOKEN:this.src=iY(this);break;case aG.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case aG.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case aG.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case aG.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case aG.LOGO:(null==i||i!==t)&&this.updateLogo();break;case aG.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),aB(this,aR,aM).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case aG.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case aG.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(aN(this,aS)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",aN(this,aI)),this.nativeEl&&this.src&&!aN(this,aR,aL)&&aB(this,aR,aM).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",aN(this,aI)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};aE=new WeakMap,ay=new WeakMap,a_=new WeakMap,ak=new WeakMap,aA=new WeakMap,aT=new WeakMap,aw=new WeakMap,aC=new WeakMap,aS=new WeakMap,aI=new WeakMap,aR=new WeakSet,aL=function(){var e,t;return e=this.nativeEl,null==(t=i$.get(e))?void 0:t.coreReference},ax=new WeakMap,aM=async function(){aN(this,aE)||(await aU(this,aE,Promise.resolve()),aU(this,aE,null),this.load())};let aF=new WeakMap;class aK extends Error{}class aY extends Error{}let aj=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function aQ(){return globalThis.cast?.framework?.CastContext.getInstance()}function az(){return aQ()?.getCurrentSession()}function aZ(){return az()?.getSessionObj().media[0]}function aX(e){return aQ().setOptions({...aJ(),...e})}function aJ(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function a0(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function a1(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function a2(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return aj.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function a3(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=a1(i),n=a0(r),o=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),s=n;if(o)try{let t=new URL(o,e).toString(),i=await (await fetch(t)).text(),a=a1(i);s=a0(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:s}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let a4=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),a5=new WeakSet;rS=()=>{globalThis.chrome?.cast?.isAvailable?a||(a=cast.framework,aQ().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{a4.forEach(t=>aF.get(t).onCastStateChanged?.(e))}),aQ().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{a4.forEach(t=>aF.get(t).onSessionStateChanged?.(e))}),a4.forEach(e=>aF.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?rS():customElements.whenDefined("google-cast-button").then(rS):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(rS)};let a8=0;class a9 extends EventTarget{#p;#a;#v;#b;#g="disconnected";#f=!1;#E=new Set;#y=new WeakMap;#_=()=>this.#k();constructor(e){super(),this.#p=e,a4.add(this),aF.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#A(),onSessionStateChanged:()=>this.#T(),getCastPlayer:()=>this.#w}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#_),this.#b&&this.#v?.controller&&Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&a5.delete(this.#p),this.#a=!1}get #w(){if(a5.has(this.#p))return this.#v}get state(){return this.#g}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new aK("disableRemotePlayback attribute is present.");return this.#y.set(e,++a8),this.#E.add(e),queueMicrotask(()=>e(this.#C())),a8}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new aK("disableRemotePlayback attribute is present.");e?this.#E.delete(e):this.#E.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new aK("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new aY("The RemotePlayback API is disabled on this platform.");let e=a5.has(this.#p);a5.add(this.#p),aX(this.#p.castOptions),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await aQ().requestSession()}catch(t){if(e||a5.delete(this.#p),"cancel"===t)return;throw Error(t)}aF.get(this.#p)?.loadOnPrompt?.()}#S(){a5.has(this.#p)&&(Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),a5.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#C(){let e=aQ()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#A(){let e=aQ().getCastState();if(a5.has(this.#p)&&"CONNECTING"===e&&(this.#g="connecting",this.dispatchEvent(new Event("connecting"))),!this.#f&&e?.includes("CONNECT"))for(let e of(this.#f=!0,this.#E))e(!0);else if(this.#f&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#f=!1,this.#E))e(!1)}async #T(){let{SESSION_RESUMED:e}=a.SessionState;if(aQ().getSessionState()===e&&this.#p.castSrc===aZ()?.media.contentId){a5.add(this.#p),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{aZ().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#b[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#b[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){a&&!this.#a&&(this.#a=!0,aX(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#_),this.#A(),this.#v=new a.RemotePlayer,new a.RemotePlayerController(this.#v),this.#b={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#g="connected",this.dispatchEvent(new Event("connect"))):(this.#S(),this.#g="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#w?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#w?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#w?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#w?.isMediaLoaded&&(await Promise.resolve(),this.#I())}})}#I(){this.#k()}async #k(){let e;if(!this.#w)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),o=az()?.getSessionObj().media[0]?.activeTrackIds??[],s=o;if(o.length&&(s=s.filter(e=>!r.includes(e))),n?.trackId&&(s=[...s,n.trackId]),e=s=[...new Set(s)],!(o.length===e.length&&o.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(s);await new Promise((t,i)=>{aZ().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let a6=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#R={paused:!1};#L=aJ();#x;#M;get remote(){if(this.#M)return this.#M;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),aF.set(this,{loadOnPrompt:()=>this.#D()}),this.#M=new a9(this)}return super.remote}get #w(){return aF.get(this.#M)?.getCastPlayer?.()}disconnectedCallback(){this.#M?.destroy(),this.#M=null,aF.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#L.receiverApplicationId=i;return}if(this.#w)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #D(){this.#R.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#w)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await a2(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await a3(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#R.paused,r.activeTrackIds=i,await az()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#w){this.#w.isPaused&&this.#w.controller?.playOrPause();return}return super.play()}pause(){if(this.#w){this.#w.isPaused||this.#w.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#L}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#x}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#x=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#w)switch(this.#w.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#w?this.#w.isPaused:super.paused}get muted(){return this.#w?this.#w?.isMuted:super.muted}set muted(e){if(this.#w){(e&&!this.#w.isMuted||!e&&this.#w.isMuted)&&this.#w.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#w?this.#w?.volumeLevel??1:super.volume}set volume(e){if(this.#w){this.#w.volumeLevel=+e,this.#w.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.duration??NaN:super.duration}get currentTime(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.currentTime??0:super.currentTime}set currentTime(e){if(this.#w){this.#w.currentTime=e,this.#w.controller?.seek();return}super.currentTime=e}};class a7 extends Event{track;constructor(e,t){super(e),this.track=t.track}}let re=new WeakMap;function rt(e){var t,i;let a;return re.get(e)??(t=e,i={},(a=re.get(t))||re.set(t,a={}),Object.assign(a,i))}function ri(e,t){let i=e.videoTracks;rt(t).media=new WeakRef(e),rt(t).renditionSet||(rt(t).renditionSet=new Set);let a=rt(i).trackSet;a.add(t);let r=a.size-1;r in rr.prototype||Object.defineProperty(rr.prototype,r,{get(){return[...rt(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new a7("addtrack",{track:t}))})}function ra(e){let t=rt(e).media?.deref()?.videoTracks;t&&(rt(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new a7("removetrack",{track:e}))}))}class rr extends EventTarget{#O;#N;#P;constructor(){super(),rt(this).trackSet=new Set}get #U(){return rt(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#O}set onaddtrack(e){this.#O&&(this.removeEventListener("addtrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rn extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function ro(e){let t=rt(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...rt(e).renditionSet]):[]}class rs extends EventTarget{#B;#H;#P;[Symbol.iterator](){return ro(this).values()}get length(){return ro(this).length}getRenditionById(e){return ro(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return ro(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of ro(this).entries())i.selected=t===e}get onaddrendition(){return this.#B}set onaddrendition(e){this.#B&&(this.removeEventListener("addrendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#H}set onremoverendition(e){this.#H&&(this.removeEventListener("removerendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rl{src;id;width;height;bitrate;frameRate;codec;#W=!1;get selected(){return this.#W}set selected(e){if(this.#W!==e){var t;let i;this.#W=e,t=this,(i=rt(t).media?.deref()?.videoRenditions)&&!rt(i).changeRequested&&(rt(i).changeRequested=!0,queueMicrotask(()=>{delete rt(i).changeRequested,rt(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class rd{id;kind;label="";language="";sourceBuffer;#W=!1;addRendition(e,t,i,a,r,n){var o;let s,l,d,u=new rl;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,o=this,s=rt(o).media?.deref()?.videoRenditions,rt(u).media=rt(o).media,rt(u).track=o,(l=rt(o).renditionSet).add(u),(d=l.size-1)in rs.prototype||Object.defineProperty(rs.prototype,d,{get(){return ro(this)[d]}}),queueMicrotask(()=>{s&&o.selected&&s.dispatchEvent(new rn("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=rt(e).media?.deref()?.videoRenditions,i=rt(e).track,rt(i).renditionSet.delete(e),queueMicrotask(()=>{let i=rt(e).track;t&&i.selected&&t.dispatchEvent(new rn("removerendition",{rendition:e}))})}get selected(){return this.#W}set selected(e){this.#W===e||(this.#W=e,!0===e&&function(e){let t=rt(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(rt(t).changeRequested)return;rt(t).changeRequested=!0,queueMicrotask(()=>{delete rt(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function ru(e){let t=rt(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...rt(e).renditionSet]):[]}class rc extends EventTarget{#B;#H;#P;[Symbol.iterator](){return ru(this).values()}get length(){return ru(this).length}getRenditionById(e){return ru(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return ru(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of ru(this).entries())i.selected=t===e}get onaddrendition(){return this.#B}set onaddrendition(e){this.#B&&(this.removeEventListener("addrendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#H}set onremoverendition(e){this.#H&&(this.removeEventListener("removerendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rh{src;id;bitrate;codec;#W=!1;get selected(){return this.#W}set selected(e){if(this.#W!==e){var t;let i;this.#W=e,t=this,(i=rt(t).media?.deref()?.audioRenditions)&&!rt(i).changeRequested&&(rt(i).changeRequested=!0,queueMicrotask(()=>{delete rt(i).changeRequested,rt(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function rm(e,t){let i=e.audioTracks;rt(t).media=new WeakRef(e),rt(t).renditionSet||(rt(t).renditionSet=new Set);let a=rt(i).trackSet;a.add(t);let r=a.size-1;r in rv.prototype||Object.defineProperty(rv.prototype,r,{get(){return[...rt(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new a7("addtrack",{track:t}))})}function rp(e){let t=rt(e).media?.deref()?.audioTracks;t&&(rt(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new a7("removetrack",{track:e}))}))}class rv extends EventTarget{#O;#N;#P;constructor(){super(),rt(this).trackSet=new Set}get #U(){return rt(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#O}set onaddtrack(e){this.#O&&(this.removeEventListener("addtrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rb{id;kind;label="";language="";sourceBuffer;#G=!1;addRendition(e,t,i){var a;let r,n,o,s=new rh;return s.src=e,s.codec=t,s.bitrate=i,a=this,r=rt(a).media?.deref()?.audioRenditions,rt(s).media=rt(a).media,rt(s).track=a,(n=rt(a).renditionSet).add(s),(o=n.size-1)in rc.prototype||Object.defineProperty(rc.prototype,o,{get(){return ru(this)[o]}}),queueMicrotask(()=>{r&&a.enabled&&r.dispatchEvent(new rn("addrendition",{rendition:s}))}),s}removeRendition(e){let t,i;t=rt(e).media?.deref()?.audioRenditions,i=rt(e).track,rt(i).renditionSet.delete(e),queueMicrotask(()=>{let i=rt(e).track;t&&i.enabled&&t.dispatchEvent(new rn("removerendition",{rendition:e}))})}get enabled(){return this.#G}set enabled(e){if(this.#G!==e){let t;this.#G=e,(t=rt(this).media?.deref()?.audioTracks)&&!rt(t).changeRequested&&(rt(t).changeRequested=!0,queueMicrotask(()=>{delete rt(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let rg=ry(globalThis.HTMLMediaElement,"video"),rf=ry(globalThis.HTMLMediaElement,"audio");function rE(e){if(!e?.prototype)return e;let t=ry(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=rt(e).videoTracks;if(!t&&(t=new rr,rt(e).videoTracks=t,rg)){let i=rg.call(e.nativeEl??e);for(let t of i)ri(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof rd)){for(let e of i)ra(e);return}ri(e,a.track)}),i.addEventListener("removetrack",e=>{ra(e.track)})}return t}});let i=ry(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=rt(e).audioTracks;if(!t&&(t=new rv,rt(e).audioTracks=t,rf)){let i=rf.call(e.nativeEl??e);for(let t of i)rm(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof rb)){for(let e of i)rp(e);return}rm(e,a.track)}),i.addEventListener("removetrack",e=>{rp(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new rd;return a.kind=e,a.label=t,a.language=i,ri(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=ra),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new rb;return a.kind=e,a.label=t,a.language=i,rm(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=rp),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=rt(e).videoRenditions;return t||(rt(t=new rs).media=new WeakRef(e),rt(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=rt(e).audioRenditions;return t||(rt(t=new rc).media=new WeakRef(e),rt(e).audioRenditions=t),t};return e}function ry(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var r_=e=>{throw TypeError(e)},rk=(e,t,i)=>t.has(e)||r_("Cannot "+i),rA=(e,t,i)=>(rk(e,t,"read from private field"),i?i.call(e):t.get(e)),rT=(e,t,i)=>t.has(e)?r_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rw=(e,t,i,a)=>(rk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rC=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends rC{}globalThis.DocumentFragment=e}var rS,rI,rR=class extends rC{},rL=class{constructor(e,t={}){rT(this,rI),rw(this,rI,null==t?void 0:t.detail)}get detail(){return rA(this,rI)}initCustomEvent(){}};rI=new WeakMap;var rx={document:{createElement:function(e,t){return new rR}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rR)},CustomEvent:rL,EventTarget:rC,HTMLElement:rR,HTMLVideoElement:class extends rC{}},rM="u"<typeof window||void 0===globalThis.customElements,rD=rM?rx:globalThis;rM&&rx.document;var rO,rN=class extends a6(rE(aV)){constructor(){super(...arguments),rT(this,rO)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rA(this,rO))?e:this.muxCastCustomData}set castCustomData(e){rw(this,rO,e)}};rO=new WeakMap,rD.customElements.get("mux-video")||(rD.customElements.define("mux-video",rN),rD.MuxVideoElement=rN);var rP=i(4586),rU=i(1251),rB=i(484),rH=i(134);i(653);var rW=e=>{throw TypeError(e)},rG=(e,t,i)=>t.has(e)||rW("Cannot "+i),r$=(e,t,i)=>(rG(e,t,"read from private field"),i?i.call(e):t.get(e)),rq=(e,t,i)=>t.has(e)?rW("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rV=(e,t,i,a)=>(rG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rF=(e,t,i)=>(rG(e,t,"access private method"),i),rK=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends rK{}globalThis.DocumentFragment=e}var rY,rj=class extends rK{},rQ=class{constructor(e,t={}){rq(this,rY),rV(this,rY,null==t?void 0:t.detail)}get detail(){return r$(this,rY)}initCustomEvent(){}};rY=new WeakMap;var rz={document:{createElement:function(e,t){return new rj}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rj)},CustomEvent:rQ,EventTarget:rK,HTMLElement:rj,HTMLVideoElement:class extends rK{}},rZ="u"<typeof window||void 0===globalThis.customElements,rX=rZ?rz:globalThis,rJ=rZ?rz.document:globalThis.document;function r0(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function r1(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function r2(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function r3(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var r4,r5,r8,r9=(e,t)=>!!e&&!!t&&(!!e.contains(t)||r9(e,t.getRootNode().host)),r6="mux.com",r7=(()=>{try{return"3.13.0"}catch{}return"UNKNOWN"})(),ne=e=>{if(e){if([tF,tV].includes(e))return e;if(null!=e&&e.includes("live"))return tF}},nt={crossorigin:"crossOrigin",playsinline:"playsInline"},ni=class{constructor(e,t){rq(this,r4),rq(this,r5),rq(this,r8,[]),rV(this,r4,e),rV(this,r5,t)}[Symbol.iterator](){return r$(this,r8).values()}get length(){return r$(this,r8).length}get value(){var e;return null!=(e=r$(this,r8).join(" "))?e:""}set value(e){var t;e!==this.value&&(rV(this,r8,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return r$(this,r8)[e]}values(){return r$(this,r8).values()}keys(){return r$(this,r8).keys()}forEach(e){r$(this,r8).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||r$(this,r8).push(e)}),(""!==this.value||null!=(t=r$(this,r4))&&t.hasAttribute(`${r$(this,r5)}`))&&null!=(i=r$(this,r4))&&i.setAttribute(`${r$(this,r5)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{r$(this,r8).splice(r$(this,r8).indexOf(e),1)}),null==(t=r$(this,r4))||t.setAttribute(`${r$(this,r5)}`,`${this.value}`)}contains(e){return r$(this,r8).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};r4=new WeakMap,r5=new WeakMap,r8=new WeakMap;var na=`[mux-player ${r7}]`;function nr(...e){console.warn(na,...e)}function nn(...e){console.error(na,...e)}function no(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${ie("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),nr(i)}var ns={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},nl={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},nd=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),nu=[...Object.values(ns).filter(e=>ns.PLAYSINLINE!==e),...Object.values(nl)];function nc(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var nh=class extends rX.HTMLElement{static get observedAttributes(){return nu}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case nl.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case nl.VOLUME:{let e=null!=(a=r2(i))?a:1;this.media&&(this.media.volume=e);return}case nl.PLAYBACKRATE:{let e=null!=(r=r2(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:nd}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:nd}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=r2(this.getAttribute(nl.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(nl.PLAYBACKRATE,`${e}`):this.removeAttribute(nl.PLAYBACKRATE)}get crossOrigin(){return nc(this,ns.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(ns.CROSSORIGIN,`${e}`)}get autoplay(){return null!=nc(this,ns.AUTOPLAY)}set autoplay(e){e?this.setAttribute(ns.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(ns.AUTOPLAY)}get loop(){return null!=nc(this,ns.LOOP)}set loop(e){e?this.setAttribute(ns.LOOP,""):this.removeAttribute(ns.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=nc(this,ns.MUTED)}set defaultMuted(e){e?this.setAttribute(ns.MUTED,""):this.removeAttribute(ns.MUTED)}get playsInline(){return null!=nc(this,ns.PLAYSINLINE)}set playsInline(e){nn("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(ns.PRELOAD,e):this.removeAttribute(ns.PRELOAD)}},nm=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,np=new WeakMap,nv=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=np.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=np.get(this.element);e&&e.delete(this.type)}}static for(t){np.has(t.element)||np.set(t.element,new Map);let i=t.attributeName.slice(2),a=np.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},nb=new Map,ng=new WeakMap,nf=new WeakMap,nE=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(nb.has(this.stringsKey))return nb.get(this.stringsKey);{let e=rJ.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),nb.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(ng.get(e)!==i){ng.set(e,i);let t=new rH.i4(i,this.values,this.processor);nf.set(e,t),e instanceof rH.cV?e.replace(...t.children):e.appendChild(t);return}let a=nf.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},ny={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof rH.db&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof rH.db){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof rH.db&&e.attributeName.startsWith("on")&&(nv.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof rH.cV&&(e.replace(""),1)||t instanceof nE&&e instanceof rH.cV&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof rH.cV&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof rH.db){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function n_(e,...t){return new nE(e,t,ny)}var nk=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),nA=e=>e.charAt(0).toUpperCase()+e.slice(1),nT=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===tG.MEDIA_ERR_NETWORK)return"";if(e.code===tG.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tG.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},nw=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,nC=rJ.createElement("template");"innerHTML"in nC&&(nC.innerHTML=nw);var nS,nI,nR=class extends rH.OU{};nR.template=null==(nI=null==(nS=nC.content)?void 0:nS.children)?void 0:nI[0],rX.customElements.get("media-theme-gerwig")||rX.customElements.define("media-theme-gerwig",nR);var nL={SRC:"src",POSTER:"poster"},nx={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},nM=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],nD=rP.dl.formatErrorMessage;function nO(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}rP.dl.formatErrorMessage=e=>{var t,i;if(e instanceof tG){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=nA(null!=(i=e.errorCategory)?i:"video"),n=tW(null!=(a=e.errorCategory)?a:tH);if(2000002===e.muxCode)return ie("Your device appears to be offline",t);if(2403210===e.muxCode)return ie("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return ie("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return ie("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return ie("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return ie("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tG.MEDIA_ERR_NETWORK)return ie("Network Error",t);if(e.code===tG.MEDIA_ERR_DECODE)return ie("Media Error",t);if(e.code===tG.MEDIA_ERR_SRC_NOT_SUPPORTED)return ie("Source Not Supported",t)}return ie("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.muxCode){let r=nA(null!=(i=e.errorCategory)?i:"video"),n=tW(null!=(a=e.errorCategory)?a:tH);return 2000002===e.muxCode?ie("Check your internet connection and try reloading this video.",t):2403210===e.muxCode?ie("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?ie("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?ie("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?ie("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?ie("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===tG.MEDIA_ERR_NETWORK||e.code===tG.MEDIA_ERR_DECODE||e.code===tG.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${ie("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return nD(e)};var nN,nP,nU,nB,nH,nW,nG,n$,nq,nV,nF,nK,nY,nj,nQ,nz,nZ,nX,nJ,n0,n1,n2=Object.values(aG),n3=Object.values(nL),n4=Object.values(nx),n5="mux-player",n8={isDialogOpen:!1},n9={redundant_streams:!0},n6=class extends nh{constructor(){super(),rq(this,nY),rq(this,nN),rq(this,nP,!1),rq(this,nU,{}),rq(this,nB,!0),rq(this,nH,new ni(this,"hotkeys")),rq(this,nW),rq(this,nG,()=>rF(this,nY,nZ).call(this)),rq(this,n$,()=>rF(this,nY,nZ).call(this)),rq(this,nq,()=>rF(this,nY,nZ).call(this)),rq(this,nV),rq(this,nF,{...n8,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&rF(this,nY,nz).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(r9(this,rJ.activeElement)||e.preventDefault())}}),rq(this,nK,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tG)){let{message:e,code:t}=null!=i?i:{};i=new tG(e,t)}if(!(null!=i&&i.fatal)){nr(i),i.data&&nr(`${i.name} data:`,i.data);return}let a=nT(i,!1);a.message&&no(a),nn(i),i.data&&nn(`${i.name} data:`,i.data),rF(this,nY,nz).call(this,{isDialogOpen:!0})}),rV(this,nN,iF()),this.attachShadow({mode:"open"}),rF(this,nY,nQ).call(this),this.isConnected&&rF(this,nY,nj).call(this)}static get NAME(){return n5}static get VERSION(){return r7}static get observedAttributes(){var e;return[...null!=(e=nh.observedAttributes)?e:[],...n3,...n2,...n4]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){rF(this,nY,nj).call(this);let e=this.media;e&&(e.metadata=nO(this))}disconnectedCallback(){var e,t,i,a,r,n,o,s;null==(e=r$(this,nW))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",r$(this,nG)),null==(i=this.media)||i.removeEventListener("loadstart",r$(this,n$)),this.removeEventListener("error",r$(this,nK)),this.media&&(this.media.errorTranslator=void 0),null==(r=null==(a=this.media)?void 0:a.textTracks)||r.removeEventListener("addtrack",r$(this,nq)),null==(o=null==(n=this.media)?void 0:n.textTracks)||o.removeEventListener("removetrack",r$(this,nq)),null==(s=r$(this,nV))||s.call(this),rV(this,nV,void 0),rV(this,nP,!1)}attributeChangedCallback(e,t,i){var a;switch(rF(this,nY,nj).call(this),super.attributeChangedCallback(e,t,i),e){case nx.HOTKEYS:r$(this,nH).value=i;break;case nx.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&nr(ie("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case nx.THUMBNAIL_TOKEN:if(i){let e=t7(i);if(e){let{aud:t}=e;"t"!==t&&nr(ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case nx.STORYBOARD_TOKEN:if(i){let e=t7(i);if(e){let{aud:t}=e;"s"!==t&&nr(ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case nx.DRM_TOKEN:if(i){let e=t7(i);if(e){let{aud:t}=e;"d"!==t&&nr(ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case aG.PLAYBACK_ID:null!=i&&i.includes("?token")&&nn(ie("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case aG.STREAM_TYPE:i&&![tF,tV,tK].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:no({file:"invalid-stream-type.md",message:ie("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tF?null==this.getAttribute(nx.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case nx.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=rJ.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case aG.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}[aG.PLAYBACK_ID,nL.SRC,nx.PLAYBACK_TOKEN].includes(e)&&t!==i&&rV(this,nF,{...r$(this,nF),...n8}),rF(this,nY,nZ).call(this,{[null!=(a=nt[e])?a:r1(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(rB.GC.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new rX.CustomEvent(rB.a8.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rB.T$.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(rB.GC.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new rX.CustomEvent(rB.a8.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rB.T$.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(aG.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tQ.includes(e)?this.setAttribute(aG.PREFER_CMCD,e):nr(`Invalid value for preferCmcd. Must be one of ${tQ.join()}`):this.removeAttribute(aG.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rB.GC.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(rB.GC.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(nx.THEME))?e:"gerwig"}set theme(e){this.setAttribute(nx.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(nM.includes(i))continue;let a=e.getAttribute(i);t[r1(i)]=""===a||a}return t}set themeProps(e){var t,i;rF(this,nY,nj).call(this);let a={...this.themeProps,...e};for(let r in a){if(nM.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(r0(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(r0(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(aG.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(aG.PLAYBACK_ID,e):this.removeAttribute(aG.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=n7(this,nL.SRC))?e:void 0:null!=(t=this.getAttribute(nL.SRC))?t:void 0}set src(e){e?this.setAttribute(nL.SRC,e):this.removeAttribute(nL.SRC)}get poster(){var e;let t=this.getAttribute(nL.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void nr("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=r6,thumbnailTime:a,programTime:r}={})=>{var n;let o=null==t?a:void 0,{aud:s}=null!=(n=t7(t))?n:{};if(!(t&&"t"!==s))return`https://image.${i}/${e}/thumbnail.webp${r3({token:t,time:o,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(nL.POSTER,e):this.removeAttribute(nL.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(nx.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(nx.STORYBOARD_SRC,e):this.removeAttribute(nx.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tF,tK].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=r6,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:o}=null!=(n=t7(t))?n:{};if(!(t&&"s"!==o))return`https://image.${i}/${e}/storyboard.vtt${r3({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(nx.AUDIO)}set audio(e){e?this.setAttribute(nx.AUDIO,""):this.removeAttribute(nx.AUDIO)}get hotkeys(){return r$(this,nH)}get nohotkeys(){return this.hasAttribute(nx.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(nx.NOHOTKEYS,""):this.removeAttribute(nx.NOHOTKEYS)}get thumbnailTime(){return r2(this.getAttribute(nx.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(nx.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(nx.VIDEO_TITLE))?e:this.getAttribute(nx.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(nx.VIDEO_TITLE,e):this.removeAttribute(nx.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=n7(this,nx.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(nx.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(nx.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=rX.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(nx.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(nx.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=rX.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(nx.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(nx.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=rX.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(nx.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(nx.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(nx.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(nx.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(nx.PLAYBACK_RATES))return this.getAttribute(nx.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(nx.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(nx.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=r2(this.getAttribute(nx.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(nx.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=r2(this.getAttribute(nx.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(nx.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(nx.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(nx.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(nx.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return r2(this.getAttribute(nx.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(nx.DEFAULT_DURATION):this.setAttribute(nx.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(aG.PLAYER_INIT_TIME)?r2(this.getAttribute(aG.PLAYER_INIT_TIME)):r$(this,nN)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aG.PLAYER_INIT_TIME):this.setAttribute(aG.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(aG.PLAYER_SOFTWARE_NAME))?e:n5}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(aG.PLAYER_SOFTWARE_VERSION))?e:r7}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aG.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aG.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aG.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(aG.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aG.MAX_RESOLUTION,e):this.removeAttribute(aG.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aG.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aG.MIN_RESOLUTION,e):this.removeAttribute(aG.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(aG.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(aG.MAX_AUTO_RESOLUTION):this.setAttribute(aG.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(aG.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aG.RENDITION_ORDER,e):this.removeAttribute(aG.RENDITION_ORDER))}get programStartTime(){return r2(this.getAttribute(aG.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(aG.PROGRAM_START_TIME):this.setAttribute(aG.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return r2(this.getAttribute(aG.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(aG.PROGRAM_END_TIME):this.setAttribute(aG.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return r2(this.getAttribute(aG.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(aG.ASSET_START_TIME):this.setAttribute(aG.ASSET_START_TIME,`${e}`)}get assetEndTime(){return r2(this.getAttribute(aG.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(aG.ASSET_END_TIME):this.setAttribute(aG.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(nx.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(nx.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):n9}set extraSourceParams(e){null==e?this.removeAttribute(nx.EXTRA_SOURCE_PARAMS):this.setAttribute(nx.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(aG.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aG.CUSTOM_DOMAIN,e):this.removeAttribute(aG.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=n7(this,aG.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(aG.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(nx.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(nx.NO_VOLUME_PREF,""):this.removeAttribute(nx.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(nx.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(nx.NO_MUTED_PREF,""):this.removeAttribute(nx.NO_MUTED_PREF)}get debug(){return null!=n7(this,aG.DEBUG)}set debug(e){e?this.setAttribute(aG.DEBUG,""):this.removeAttribute(aG.DEBUG)}get disableTracking(){return null!=n7(this,aG.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(aG.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=n7(this,aG.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(aG.DISABLE_COOKIES,""):this.removeAttribute(aG.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(aG.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tK}set streamType(e){this.setAttribute(aG.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(nx.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(nx.DEFAULT_STREAM_TYPE))?i:tV}set defaultStreamType(e){e?this.setAttribute(nx.DEFAULT_STREAM_TYPE,e):this.removeAttribute(nx.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(nx.TARGET_LIVE_WINDOW)?+this.getAttribute(nx.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(nx.TARGET_LIVE_WINDOW):this.setAttribute(nx.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return r2(n7(this,aG.START_TIME))}set startTime(e){this.setAttribute(aG.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return r2(n7(this,aG.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(aG.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(aG.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return r2(n7(this,aG.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(aG.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(aG.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return r2(n7(this,aG.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(aG.MIN_PRELOAD_SEGMENTS):this.setAttribute(aG.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(aG.PREFER_PLAYBACK);if("mse"===e||e===tY)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===tY?this.setAttribute(aG.PREFER_PLAYBACK,e):this.removeAttribute(aG.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(rF(this,nY,nj).call(this),this.media)?this.media.metadata={...nO(this),...e}:nn("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(rF(this,nY,nj).call(this),this.media)?this.media._hlsConfig=e:nn("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(rF(this,nY,nj).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void nn("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(rF(this,nY,nj).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void nn("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(nx.PLAYBACK_TOKEN),t=this.getAttribute(nx.DRM_TOKEN),i=this.getAttribute(nx.THUMBNAIL_TOKEN),a=this.getAttribute(nx.STORYBOARD_TOKEN);return{...r$(this,nU),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){rV(this,nU,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(nx.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(nx.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(nx.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(nx.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(nx.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(nx.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(nx.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(nx.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return is(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(nx.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(nx.CAST_RECEIVER,e):this.removeAttribute(nx.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:nn("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(nx.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(nx.NO_TOOLTIPS,""):this.removeAttribute(nx.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(nx.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(nx.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(nx.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:nn("underlying media element missing when trying to set capRenditionToPlayerSize")}};function n7(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}nN=new WeakMap,nP=new WeakMap,nU=new WeakMap,nB=new WeakMap,nH=new WeakMap,nW=new WeakMap,nG=new WeakMap,n$=new WeakMap,nq=new WeakMap,nV=new WeakMap,nF=new WeakMap,nK=new WeakMap,nY=new WeakSet,nj=function(){var e,t,i,a;if(!r$(this,nP)){rV(this,nP,!0),rF(this,nY,nZ).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof rX.HTMLElement))throw""}catch{nn("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{nn("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof rP.xX))throw""}catch{nn("<media-controller> failed to upgrade!")}rF(this,nY,nX).call(this),rF(this,nY,nJ).call(this),rF(this,nY,n0).call(this),rV(this,nB,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rU.eS.USER_INACTIVE))||t),rF(this,nY,n1).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",r$(this,nG)),null==(a=this.media)||a.addEventListener("loadstart",r$(this,n$))}},nQ=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},nz=function(e){Object.assign(r$(this,nF),e),rF(this,nY,nZ).call(this)},nZ=function(e={}){var t,i,a,r,n,o,s,l,d,u,c,h,m,p,v,b,g,f,E,y,k,A,T,w,C,S,I,R,L,x,M,D,O,N,P,U,B,H,W,G,$,q,V,F,K,Y,j,Q,z,Z;let X,J,ee,et;t={...r$(this,nF),...e},X={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(nx.STORYBOARD_SRC),fullscreenElement:this.getAttribute(nx.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=rX.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(nx.NOHOTKEYS),hotKeys:this.getAttribute(nx.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(aG.TARGET_LIVE_WINDOW),streamType:ne(this.getAttribute(aG.STREAM_TYPE)),primaryColor:this.getAttribute(nx.PRIMARY_COLOR),secondaryColor:this.getAttribute(nx.SECONDARY_COLOR),accentColor:this.getAttribute(nx.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(J=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(J).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(nx.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(aG.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(nx.TITLE),videoTitle:null!=(r=this.getAttribute(nx.VIDEO_TITLE))?r:this.getAttribute(nx.TITLE),novolumepref:this.hasAttribute(nx.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(nx.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(nx.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(nx.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},o=n_`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(X)}
    ${nm}
  </style>
  ${l=X,n_`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${ee=l.hotKeys?`${l.hotKeys}`:"","live"===ne(l.streamType)&&(ee+=" noarrowleft noarrowright"),ee||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(tF))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(Z={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},et="",Object.entries(Z).forEach(([e,t])=>{null!=t&&(et+=`${r0(e)}: ${t}; `)}),h=et?et.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(v=l.playbackRates)&&v}"
    defaultshowremainingtime="${null!=(b=l.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(f=l.hideDuration)&&f}"
    title="${null!=(E=l.title)&&E}"
    videotitle="${null!=(y=l.videoTitle)&&y}"
    proudlydisplaymuxbadge="${null!=(k=l.proudlyDisplayMuxBadge)&&k}"
    exportparts="${nk}"
    onclose="${l.onCloseErrorDialog}"
    onfocusin="${l.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(A=l.noHotKeys)&&A}"
      target-live-window="${null!=(T=l.targetLiveWindow)&&T}"
      stream-type="${null!=(w=ne(l.streamType))&&w}"
      crossorigin="${null!=(C=l.crossOrigin)?C:""}"
      playsinline
      autoplay="${null!=(S=l.autoplay)&&S}"
      muted="${null!=(I=l.muted)&&I}"
      loop="${null!=(R=l.loop)&&R}"
      preload="${null!=(L=l.preload)&&L}"
      debug="${null!=(x=l.debug)&&x}"
      prefer-cmcd="${null!=(M=l.preferCmcd)&&M}"
      disable-tracking="${null!=(D=l.disableTracking)&&D}"
      disable-cookies="${null!=(O=l.disableCookies)&&O}"
      prefer-playback="${null!=(N=l.preferPlayback)&&N}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(P=l.beaconCollectionDomain)&&P}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(B=l.playerSoftwareName)&&B}"
      player-software-version="${null!=(H=l.playerSoftwareVersion)&&H}"
      env-key="${null!=(W=l.envKey)&&W}"
      custom-domain="${null!=(G=l.customDomain)&&G}"
      src="${l.src?l.src:!!l.playbackId&&iY(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&iY(l)}"
      cast-receiver="${null!=($=l.castReceiver)&&$}"
      drm-token="${null!=(V=null==(q=l.tokens)?void 0:q.drm)&&V}"
      playback-token="${null!=(K=null==(F=l.tokens)?void 0:F.playback)&&K}"
      exportparts="video"
      disable-pseudo-ended="${null!=(Y=l.disablePseudoEnded)&&Y}"
      max-auto-resolution="${null!=(j=l.maxAutoResolution)&&j}"
      cap-rendition-to-player-size="${null!=(Q=l.capRenditionToPlayerSize)&&Q}"
    >
      ${l.storyboard?n_`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:n_``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(z=l.placeholder)&&z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,s=this.shadowRoot,o.renderInto(s)},nX=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(nM.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};rV(this,nW,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),r$(this,nW).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},nJ=function(){this.addEventListener("error",r$(this,nK)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tG))return e;let r=nT(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},n0=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r$(this,nq)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r$(this,nq))},n1=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tF&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tF&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},o=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rU.eS.USER_INACTIVE))&&t)},s=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",o)),null==(i=a)||i.addEventListener("cuechange",o),n(i,r$(this,nB))};s(),null==(e=this.textTracks)||e.addEventListener("change",s),null==(t=this.textTracks)||t.addEventListener("addtrack",s);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rU.eS.USER_INACTIVE))||t;r$(this,nB)!==a&&(rV(this,nB,a),n(i,r$(this,nB)))};this.addEventListener("userinactivechange",l),rV(this,nV,()=>{var e,t;null==i||i.removeEventListener("cuechange",o),null==(e=this.textTracks)||e.removeEventListener("change",s),null==(t=this.textTracks)||t.removeEventListener("addtrack",s),this.removeEventListener("userinactivechange",l)})};var oe=e=>{throw TypeError(e)},ot=(e,t,i)=>t.has(e)||oe("Cannot "+i),oi=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends oi{}globalThis.DocumentFragment=e}var oa,or=class extends oi{},on=class{constructor(e,t={}){((e,t,i)=>t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,oa),((e,t,i,a)=>(ot(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,oa,null==t?void 0:t.detail)}get detail(){let e,t;return ot(this,e=oa,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};oa=new WeakMap;var oo={document:{createElement:function(e,t){return new or}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(or)},CustomEvent:on,EventTarget:oi,HTMLElement:or,HTMLVideoElement:class extends oi{}},os="u"<typeof window||void 0===globalThis.customElements,ol=os?oo:globalThis;os&&oo.document,ol.customElements.get("mux-player")||(ol.customElements.define("mux-player",n6),ol.MuxPlayerElement=n6);var od=parseInt(r.version)>=19,ou={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function oc(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var oh=Object.prototype.hasOwnProperty,om=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!oh.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),op=(e,t,i)=>{e[i]=t},ov=(e,t,i,a=op,n=om)=>(0,r.useEffect)(()=>{let r=null==i?void 0:i.current;r&&n(r,t,e)&&a(r,t,e)},[null==i?void 0:i.current,t]),ob=(()=>{try{return"3.13.0"}catch{}return"UNKNOWN"})(),og=(e,t,i)=>(0,r.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),of=r.forwardRef(({children:e,...t},i)=>r.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!od&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=ou)&&i in a)return ou[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=od||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),oE=r.forwardRef((e,t)=>{var i;let a=(0,r.useRef)(null),n=function(...e){return r.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=oc(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():oc(e[t],null)}}}}(...e),e)}(a,t),[o]=((e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:o,onLoadedData:s,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:g,onPause:f,onSeeking:E,onSeeked:y,onStalled:k,onSuspend:A,onEnded:T,onError:w,onCuePointChange:C,onChapterChange:S,metadata:I,tokens:R,paused:L,playbackId:x,playbackRates:M,currentTime:D,themeProps:O,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...B}=t;return ov("tokens",R,e),ov("playbackId",x,e),ov("playbackRates",M,e),ov("metadata",I,e),ov("extraSourceParams",N,e),ov("_hlsConfig",U,e),ov("themeProps",O,e),ov("castCustomData",P,e),ov("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&om(e,t,i)),ov("currentTime",D,e,(e,t)=>{null!=t&&(e.currentTime=t)}),og("abort",e,i),og("canplay",e,a),og("canplaythrough",e,r),og("emptied",e,n),og("loadstart",e,o),og("loadeddata",e,s),og("loadedmetadata",e,l),og("progress",e,d),og("durationchange",e,u),og("volumechange",e,c),og("ratechange",e,h),og("resize",e,m),og("waiting",e,p),og("play",e,v),og("playing",e,b),og("timeupdate",e,g),og("pause",e,f),og("seeking",e,E),og("seeked",e,y),og("stalled",e,k),og("suspend",e,A),og("ended",e,T),og("error",e,w),og("cuepointchange",e,C),og("chapterchange",e,S),[B]})(a,e),[s]=(0,r.useState)(null!=(i=e.playerInitTime)?i:iF());return r.createElement(of,{ref:n,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:ob,playerInitTime:s,...o})})},8475:(e,t,i)=>{i.d(t,{A:()=>l});var a=i(1063),r=i(1885);let n="placement",o="bounds";class s extends r.Au.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!(0,a.J9)(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),r=null!=(e=(0,a.CQ)(this,"#"+this.bounds))?e:(0,a.Bk)(this);if(!r)return;let{x:n,width:o}=r.getBoundingClientRect(),{x:s,width:l}=this.getBoundingClientRect(),d=i.getPropertyValue("--media-tooltip-offset-x"),u=d?parseFloat(d.replace("px","")):0,c=i.getPropertyValue("--media-tooltip-container-margin"),h=c?parseFloat(c.replace("px","")):0,m=s-n+u-h,p=s+l-(n+o)+u+h;m<0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):p>0?this.style.setProperty("--media-tooltip-offset-x",`${p}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,a.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[n,o]}get placement(){return(0,a.vT)(this,n)}set placement(e){(0,a.tA)(this,n,e)}get bounds(){return(0,a.vT)(this,o)}set bounds(e){(0,a.tA)(this,o,e)}}s.shadowRootOptions={mode:"open"},s.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},r.Au.customElements.get("media-tooltip")||r.Au.customElements.define("media-tooltip",s);var l=s}}]);