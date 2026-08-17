(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="170",zp=0,hu=1,Bp=2,qd=1,Yd=2,ri=3,Vi=0,sn=1,Xe=2,zi=0,ps=1,ms=2,du=3,fu=4,Hp=5,cs=100,Gp=101,Vp=102,Wp=103,$p=104,Xp=200,qp=201,Yp=202,jp=203,Tc=204,Ac=205,Kp=206,Zp=207,Jp=208,Qp=209,tm=210,em=211,nm=212,im=213,sm=214,Rc=0,Cc=1,Pc=2,ir=3,Ic=4,Lc=5,Dc=6,kc=7,wl=0,rm=1,om=2,Bi=0,am=1,cm=2,lm=3,jd=4,um=5,hm=6,dm=7,Kd=300,sr=301,rr=302,ra=303,Nc=304,ya=306,oa=1e3,us=1001,Uc=1002,Dn=1003,fm=1004,fo=1005,Xn=1006,La=1007,hs=1008,xi=1009,Zd=1010,Jd=1011,Xr=1012,Tl=1013,vs=1014,ci=1015,Qr=1016,Al=1017,Rl=1018,or=1020,Qd=35902,tf=1021,ef=1022,Ln=1023,nf=1024,sf=1025,Qs=1026,ar=1027,rf=1028,Cl=1029,of=1030,Pl=1031,Il=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,Oc=35840,Fc=35841,zc=35842,Bc=35843,Hc=36196,Gc=37492,Vc=37496,Wc=37808,$c=37809,Xc=37810,qc=37811,Yc=37812,jc=37813,Kc=37814,Zc=37815,Jc=37816,Qc=37817,tl=37818,el=37819,nl=37820,il=37821,na=36492,sl=36494,rl=36495,af=36283,ol=36284,al=36285,cl=36286,pm=3200,mm=3201,Ll=0,gm=1,Oi="",en="srgb",hr="srgb-linear",Sa="linear",le="srgb",Is=7680,pu=519,xm=512,_m=513,vm=514,cf=515,Mm=516,ym=517,Sm=518,bm=519,mu=35044,gu="300 es",li=2e3,aa=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Da=Math.PI/180,ll=180/Math.PI;function fr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function Em(n,t){return(n%t+t)%t}function ka(n,t,e){return(1-e)*n+e*t}function Ar(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,s,r,o,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],M=s[4],x=s[7],C=s[2],w=s[5],T=s[8];return r[0]=o*_+a*v+c*C,r[3]=o*m+a*M+c*w,r[6]=o*p+a*x+c*T,r[1]=l*_+u*v+h*C,r[4]=l*m+u*M+h*w,r[7]=l*p+u*x+h*T,r[2]=d*_+f*v+g*C,r[5]=d*m+f*M+g*w,r[8]=d*p+f*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new $t;function lf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wm(){const n=ca("canvas");return n.style.display="block",n}const xu={};function Br(n){n in xu||(xu[n]=!0,console.warn(n))}function Tm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Am(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(n.r=pi(n.r),n.g=pi(n.g),n.b=pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?Sa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const _u=[.64,.33,.3,.6,.15,.06],vu=[.2126,.7152,.0722],Mu=[.3127,.329],yu=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[hr]:{primaries:_u,whitePoint:Mu,transfer:Sa,toXYZ:yu,fromXYZ:Su,luminanceCoefficients:vu,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:_u,whitePoint:Mu,transfer:le,toXYZ:yu,fromXYZ:Su,luminanceCoefficients:vu,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let Ls;class Cm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=ca("canvas")),Ls.width=t.width,Ls.height=t.height;const i=Ls.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pm=0;class uf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;class qe extends dr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=us,s=us,r=Xn,o=hs,a=Ln,c=xi,l=qe.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=fr(),this.name="",this.source=new uf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Kd;qe.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,C=(p+1)/2,w=(u+d)/4,T=(h+_)/4,R=(g+m)/4;return M>x&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=T/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=R/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=T/r,s=R/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lm extends dr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends Lm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class hf extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,p*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const x=a*v;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Oa.copy(this).projectOnVector(t),this.sub(Oa)}reflect(t){return this.sub(Oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new L,bu=new to;class eo{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),mo.subVectors(this.max,Rr),Ds.subVectors(t.a,Rr),ks.subVectors(t.b,Rr),Ns.subVectors(t.c,Rr),wi.subVectors(ks,Ds),Ti.subVectors(Ns,ks),Zi.subVectors(Ds,Ns);let e=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Zi.y,Zi.x,0];return!Fa(e,Ds,ks,Ns,mo)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,Ds,ks,Ns,mo))?!1:(go.crossVectors(wi,Ti),e=[go.x,go.y,go.z],Fa(e,Ds,ks,Ns,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,po=new eo,Ds=new L,ks=new L,Ns=new L,wi=new L,Ti=new L,Zi=new L,Rr=new L,mo=new L,go=new L,Ji=new L;function Fa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ji.fromArray(n,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const km=new eo,Cr=new L,za=new L;class Dl{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):km.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(za)),this.expandByPoint(Cr.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new L,Ba=new L,xo=new L,Ai=new L,Ha=new L,_o=new L,Ga=new L;class Nm{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ba.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(Ba);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=Ai.dot(this.direction),c=-Ai.dot(xo),l=Ai.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ba).addScaledVector(xo,d),f}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,i,s,r){Ha.subVectors(e,t),_o.subVectors(i,t),Ga.crossVectors(Ha,_o);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const c=a*this.direction.dot(_o.crossVectors(Ai,_o));if(c<0)return null;const l=a*this.direction.dot(Ha.cross(Ai));if(l<0||c+l>o)return null;const u=-a*Ai.dot(Ga);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,s,r,o,a,c,l,u,h,d,f,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(t,e,i,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Um,t,Om)}lookAt(t,e,i){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Ri.crossVectors(i,on),Ri.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ri.crossVectors(i,on)),Ri.normalize(),vo.crossVectors(on,Ri),s[0]=Ri.x,s[4]=vo.x,s[8]=on.x,s[1]=Ri.y,s[5]=vo.y,s[9]=on.y,s[2]=Ri.z,s[6]=vo.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],M=i[7],x=i[11],C=i[15],w=s[0],T=s[4],R=s[8],S=s[12],y=s[1],P=s[5],O=s[9],U=s[13],H=s[2],X=s[6],W=s[10],Z=s[14],V=s[3],at=s[7],dt=s[11],xt=s[15];return r[0]=o*w+a*y+c*H+l*V,r[4]=o*T+a*P+c*X+l*at,r[8]=o*R+a*O+c*W+l*dt,r[12]=o*S+a*U+c*Z+l*xt,r[1]=u*w+h*y+d*H+f*V,r[5]=u*T+h*P+d*X+f*at,r[9]=u*R+h*O+d*W+f*dt,r[13]=u*S+h*U+d*Z+f*xt,r[2]=g*w+_*y+m*H+p*V,r[6]=g*T+_*P+m*X+p*at,r[10]=g*R+_*O+m*W+p*dt,r[14]=g*S+_*U+m*Z+p*xt,r[3]=v*w+M*y+x*H+C*V,r[7]=v*T+M*P+x*X+C*at,r[11]=v*R+M*O+x*W+C*dt,r[15]=v*S+M*U+x*Z+C*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,C=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,w=e*v+i*M+s*x+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=v*T,t[1]=(_*d*r-h*m*r-_*s*f+i*m*f+h*s*p-i*d*p)*T,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*T,t[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*T,t[4]=M*T,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=x*T,t[9]=(g*h*r-u*_*r-g*i*f+e*_*f+u*i*p-e*h*p)*T,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*p+e*a*p)*T,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*f-e*a*f)*T,t[12]=C*T,t[13]=(u*_*s-g*h*s+g*i*d-e*_*d-u*i*m+e*h*m)*T,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*T,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*d+e*a*d)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,v=c*l,M=c*u,x=c*h,C=i.x,w=i.y,T=i.z;return s[0]=(1-(_+p))*C,s[1]=(f+x)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+M)*T,s[9]=(m-v)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const l=1/r,u=1/o,h=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,e.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=li){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(a===li)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===aa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=li){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*l,f=(i+s)*u;let g,_;if(a===li)g=(o+r)*h,_=-2*h;else if(a===aa)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Us=new L,Tn=new _e,Um=new L(0,0,0),Om=new L(1,1,1),Ri=new L,vo=new L,on=new L,Eu=new _e,wu=new to;class Fn{constructor(t=0,e=0,i=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fm=0;const Tu=new L,Os=new to,Jn=new _e,Mo=new L,Pr=new L,zm=new L,Bm=new to,Au=new L(1,0,0),Ru=new L(0,1,0),Cu=new L(0,0,1),Pu={type:"added"},Hm={type:"removed"},Fs={type:"childadded",child:null},Va={type:"childremoved",child:null};class Ne extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new L,e=new Fn,i=new to,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new $t}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mo.copy(t):Mo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Pr,Mo,this.up):Jn.lookAt(Mo,Pr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(Jn),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hm),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new L,Qn=new L,Wa=new L,ti=new L,zs=new L,Bs=new L,Iu=new L,$a=new L,Xa=new L,qa=new L,Ya=new ue,ja=new ue,Ka=new ue;class In{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){An.subVectors(s,e),Qn.subVectors(i,e),Wa.subVectors(t,e);const o=An.dot(An),a=An.dot(Qn),c=An.dot(Wa),l=Qn.dot(Qn),u=Qn.dot(Wa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ya.setScalar(0),ja.setScalar(0),Ka.setScalar(0),Ya.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,i),Ka.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ya,r.x),o.addScaledVector(ja,r.y),o.addScaledVector(Ka,r.z),o}static isFrontFacing(t,e,i,s){return An.subVectors(i,e),Qn.subVectors(t,e),An.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return In.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,i),Bs.subVectors(r,i),$a.subVectors(t,i);const c=zs.dot($a),l=Bs.dot($a);if(c<=0&&l<=0)return e.copy(i);Xa.subVectors(t,s);const u=zs.dot(Xa),h=Bs.dot(Xa);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(zs,o);qa.subVectors(t,r);const f=zs.dot(qa),g=Bs.dot(qa);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Bs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Iu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Iu,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(zs,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Za(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Em(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return te.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Fe(Ve.r*255,0,255))*65536+Math.round(Fe(Ve.g*255,0,255))*256+Math.round(Fe(Ve.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ve.copy(this),e);const i=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=en){te.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,s=Ve.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(yo);const i=ka(Ci.h,yo.h,e),s=ka(Ci.s,yo.s,e),r=ka(Ci.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Ht;Ht.NAMES=ff;let Gm=0;class pr extends dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=fr(),this.name="",this.blending=ps,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ac&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kn extends pr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new L,So=new st;class yn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mu&&(t.usage=this.usage),t}}class pf extends yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class mf extends yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kt extends yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Vm=0;const gn=new _e,Ja=new Ne,Hs=new L,an=new eo,Ir=new eo,ke=new L;class Ue extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?mf:pf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(an.min,Ir.min),an.expandByPoint(ke),ke.addVectors(an.max,Ir.max),an.expandByPoint(ke)):(an.expandByPoint(Ir.min),an.expandByPoint(Ir.max))}an.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ke.fromBufferAttribute(a,l),c&&(Hs.fromBufferAttribute(t,l),ke.add(Hs)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new L,c[R]=new L;const l=new L,u=new L,h=new L,d=new st,f=new st,g=new st,_=new L,m=new L;function p(R,S,y){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(_),a[S].add(_),a[y].add(_),c[R].add(m),c[S].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,S=v.length;R<S;++R){const y=v[R],P=y.start,O=y.count;for(let U=P,H=P+O;U<H;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new L,x=new L,C=new L,w=new L;function T(R){C.fromBufferAttribute(s,R),w.copy(C);const S=a[R];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(w,S);const P=x.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,S=v.length;R<S;++R){const y=v[R],P=y.start,O=y.count;for(let U=P,H=P+O;U<H;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new yn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lu=new _e,Qi=new Nm,bo=new Dl,Du=new L,Eo=new L,wo=new L,To=new L,Qa=new L,Ao=new L,ku=new L,Ro=new L;class nt extends Ne{constructor(t=new Ue,e=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Qa.fromBufferAttribute(h,t),o?Ao.addScaledVector(Qa,u):Ao.addScaledVector(Qa.sub(e),u))}e.add(Ao)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(bo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(bo,Du)===null||Qi.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=M;x<C;x+=3){const w=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);s=Co(this,p,t,i,l,u,h,w,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Co(this,o,t,i,l,u,h,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=M;x<C;x+=3){const w=x,T=x+1,R=x+2;s=Co(this,p,t,i,l,u,h,w,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;s=Co(this,o,t,i,l,u,h,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wm(n,t,e,i,s,r,o,a){let c;if(t.side===sn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Vi,a),c===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ro);return l<e.near||l>e.far?null:{distance:l,point:Ro.clone(),object:n}}function Co(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Eo),n.getVertexPosition(c,wo),n.getVertexPosition(l,To);const u=Wm(n,t,e,i,Eo,wo,To,ku);if(u){const h=new L;In.getBarycoord(ku,Eo,wo,To,h),s&&(u.uv=In.getInterpolatedAttribute(s,a,c,l,h,new st)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,c,l,h,new st)),o&&(u.normal=In.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};In.getNormal(Eo,wo,To,d.normal),u.face=d,u.barycoord=h}return u}class ws extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function g(_,m,p,v,M,x,C,w,T,R,S){const y=x/T,P=C/R,O=x/2,U=C/2,H=w/2,X=T+1,W=R+1;let Z=0,V=0;const at=new L;for(let dt=0;dt<W;dt++){const xt=dt*P-U;for(let Ft=0;Ft<X;Ft++){const Qt=Ft*y-O;at[_]=Qt*v,at[m]=xt*M,at[p]=H,l.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[p]=w>0?1:-1,u.push(at.x,at.y,at.z),h.push(Ft/T),h.push(1-dt/R),Z+=1}}for(let dt=0;dt<R;dt++)for(let xt=0;xt<T;xt++){const Ft=d+xt+X*dt,Qt=d+xt+X*(dt+1),G=d+(xt+1)+X*(dt+1),J=d+(xt+1)+X*dt;c.push(Ft,Qt,J),c.push(Qt,G,J),V+=6}a.addGroup(f,V,S),f+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=cr(n[e]);for(const s in i)t[s]=i[s]}return t}function $m(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Xm={clone:cr,merge:Ye};var qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends pr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=$m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xf extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new L,Nu=new st,Uu=new st;class un extends xf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Nu,Uu),e.subVectors(Uu,Nu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Da*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gs=-90,Vs=1;class jm extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Gs,Vs,t,e);s.layers=this.layers,this.add(s);const r=new un(Gs,Vs,t,e);r.layers=this.layers,this.add(r);const o=new un(Gs,Vs,t,e);o.layers=this.layers,this.add(o);const a=new un(Gs,Vs,t,e);a.layers=this.layers,this.add(a);const c=new un(Gs,Vs,t,e);c.layers=this.layers,this.add(c);const l=new un(Gs,Vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _f extends qe{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Km extends Ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _f(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ws(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:zi});r.uniforms.tEquirect.value=e;const o=new nt(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=Xn),new jm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const tc=new L,Zm=new L,Jm=new $t;class os{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=tc.subVectors(i,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Jm.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Dl,Po=new L;class kl{constructor(t=new os,e=new os,i=new os,s=new os,r=new os,o=new os){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],M=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-f,x-p).normalize(),i[1].setComponents(c+r,d+l,m+f,x+p).normalize(),i[2].setComponents(c+o,d+u,m+g,x+v).normalize(),i[3].setComponents(c-o,d-u,m-g,x-v).normalize(),i[4].setComponents(c-a,d-h,m-_,x-M).normalize(),e===li)i[5].setComponents(c+a,d+h,m+_,x+M).normalize();else if(e===aa)i[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Qm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class mr extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let M=0;M<l;M++){const x=M*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,x=v+l*(p+1),C=v+1+l*(p+1),w=v+1+l*p;f.push(M,x,w),f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.width,t.height,t.widthSegments,t.heightSegments)}}var t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ox=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:t0,alphahash_pars_fragment:e0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:c0,batching_vertex:l0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:d0,iridescence_fragment:f0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:_0,color_fragment:v0,color_pars_fragment:M0,color_pars_vertex:y0,color_vertex:S0,common:b0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:w0,displacementmap_pars_vertex:T0,displacementmap_vertex:A0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:k0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:O0,fog_pars_vertex:F0,fog_fragment:z0,fog_pars_fragment:B0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:G0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:W0,lights_pars_begin:$0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:j0,lights_phong_pars_fragment:K0,lights_physical_fragment:Z0,lights_physical_pars_fragment:J0,lights_fragment_begin:Q0,lights_fragment_maps:tg,lights_fragment_end:eg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:cg,map_particle_pars_fragment:lg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:xg,normal_fragment_maps:_g,normal_pars_fragment:vg,normal_pars_vertex:Mg,normal_vertex:yg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Tg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Ig,dithering_pars_fragment:Lg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Og,shadowmask_pars_fragment:Fg,skinbase_vertex:zg,skinning_pars_vertex:Bg,skinning_vertex:Hg,skinnormal_vertex:Gg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:$g,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:Qg,background_frag:tx,backgroundCube_vert:ex,backgroundCube_frag:nx,cube_vert:ix,cube_frag:sx,depth_vert:rx,depth_frag:ox,distanceRGBA_vert:ax,distanceRGBA_frag:cx,equirect_vert:lx,equirect_frag:ux,linedashed_vert:hx,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:xx,meshmatcap_frag:_x,meshnormal_vert:vx,meshnormal_frag:Mx,meshphong_vert:yx,meshphong_frag:Sx,meshphysical_vert:bx,meshphysical_frag:Ex,meshtoon_vert:wx,meshtoon_frag:Tx,points_vert:Ax,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Ix,sprite_frag:Lx},ut={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Wn={basic:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ye([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ye([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ye([ut.points,ut.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ye([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ye([ut.common,ut.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ye([ut.sprite,ut.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ye([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ye([ut.lights,ut.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Wn.physical={uniforms:Ye([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Io={r:0,b:0,g:0},es=new Fn,Dx=new _e;function kx(n,t,e,i,s,r,o){const a=new Ht(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===ya)?(u===void 0&&(u=new nt(new ws(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:cr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(M.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(es)),u.material.toneMapped=te.getTransfer(x.colorSpace)!==le,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new nt(new mr(2,2),new Wi({name:"BackgroundMaterial",uniforms:cr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=te.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(Io,gf(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function Nx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,P,O,U,H){let X=!1;const W=h(U,O,P);r!==W&&(r=W,l(r.object)),X=f(y,U,O,H),X&&g(y,U,O,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(y,P,O,U),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,P,O){const U=O.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let X=H[P.id];X===void 0&&(X={},H[P.id]=X);let W=X[U];return W===void 0&&(W=d(c()),X[U]=W),W}function d(y){const P=[],O=[],U=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,P,O,U){const H=r.attributes,X=P.attributes;let W=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){const dt=H[V];let xt=X[V];if(xt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),dt===void 0||dt.attribute!==xt||xt&&dt.data!==xt.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function g(y,P,O,U){const H={},X=P.attributes;let W=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){let dt=X[V];dt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const xt={};xt.attribute=dt,dt&&dt.data&&(xt.data=dt.data),H[V]=xt,W++}r.attributes=H,r.attributesNum=W,r.index=U}function _(){const y=r.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const O=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;O[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),H[y]!==P&&(n.vertexAttribDivisor(y,P),H[y]=P)}function v(){const y=r.newAttributes,P=r.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==y[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function M(y,P,O,U,H,X,W){W===!0?n.vertexAttribIPointer(y,P,O,H,X):n.vertexAttribPointer(y,P,O,U,H,X)}function x(y,P,O,U){_();const H=U.attributes,X=O.getAttributes(),W=P.defaultAttributeValues;for(const Z in X){const V=X[Z];if(V.location>=0){let at=H[Z];if(at===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const dt=at.normalized,xt=at.itemSize,Ft=t.get(at);if(Ft===void 0)continue;const Qt=Ft.buffer,G=Ft.type,J=Ft.bytesPerElement,lt=G===n.INT||G===n.UNSIGNED_INT||at.gpuType===Tl;if(at.isInterleavedBufferAttribute){const tt=at.data,St=tt.stride,Lt=at.offset;if(tt.isInstancedInterleavedBuffer){for(let kt=0;kt<V.locationSize;kt++)p(V.location+kt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let kt=0;kt<V.locationSize;kt++)m(V.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let kt=0;kt<V.locationSize;kt++)M(V.location+kt,xt/V.locationSize,G,dt,St*J,(Lt+xt/V.locationSize*kt)*J,lt)}else{if(at.isInstancedBufferAttribute){for(let tt=0;tt<V.locationSize;tt++)p(V.location+tt,at.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let tt=0;tt<V.locationSize;tt++)m(V.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let tt=0;tt<V.locationSize;tt++)M(V.location+tt,xt/V.locationSize,G,dt,xt*J,xt/V.locationSize*tt*J,lt)}}else if(W!==void 0){const dt=W[Z];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(V.location,dt);break;case 3:n.vertexAttrib3fv(V.location,dt);break;case 4:n.vertexAttrib4fv(V.location,dt);break;default:n.vertexAttrib1fv(V.location,dt)}}}}v()}function C(){R();for(const y in i){const P=i[y];for(const O in P){const U=P[O];for(const H in U)u(U[H].object),delete U[H];delete P[O]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const O in P){const U=P[O];for(const H in U)u(U[H].object),delete U[H];delete P[O]}delete i[y.id]}function T(y){for(const P in i){const O=i[P];if(O[y.id]===void 0)continue;const U=O[y.id];for(const H in U)u(U[H].object),delete U[H];delete O[y.id]}}function R(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Ux(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ox(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Ln&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==xi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ci&&!R)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function Fx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new os,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,M=v*4;let x=p.clippingState||null;c.value=x,x=u(g,d,M,f);for(let C=0;C!==M;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function zx(n){let t=new WeakMap;function e(o,a){return a===ra?o.mapping=sr:a===Nc&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ra||a===Nc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Km(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Mf extends xf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,Ou=[.125,.215,.35,.446,.526,.582],ls=20,ec=new Mf,Fu=new Ht;let nc=null,ic=0,sc=0,rc=!1;const as=(1+Math.sqrt(5))/2,Ws=1/as,zu=[new L(-as,Ws,0),new L(as,Ws,0),new L(-Ws,0,as),new L(Ws,0,as),new L(0,as,-Ws),new L(0,as,Ws),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nc,ic,sc),this._renderer.xr.enabled=rc,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Qr,format:Ln,colorSpace:hr,depthBuffer:!1},s=Bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bx(r)),this._blurMaterial=Hx(r,t,e)}return s}_compileMaterial(t){const e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,ec)}_sceneToCubeUV(t,e,i,s){const a=new un(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Fu),u.toneMapping=Bi,u.autoClear=!1;const f=new kn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new nt(new ws,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Fu),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Lo(s,v*M,p>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Lo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ec)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zu[(s-r-1)%zu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let v=0;for(let T=0;T<ls;++T){const R=T/_,S=Math.exp(-R*R/2);p.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[s],C=3*x*(s>M-Ks?s-M+Ks:0),w=4*(this._cubeSize-x);Lo(e,C,w,3*x,2*x),c.setRenderTarget(e),c.render(h,ec)}}function Bx(n){const t=[],e=[],i=[];let s=n;const r=n-Ks+1+Ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Ks?c=Ou[o-n+Ks-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(S,_*g*w),M.set(d,m*g*w);const y=[w,w,w,w,w,w];x.set(y,p*g*w)}const C=new Ue;C.setAttribute("position",new yn(v,_)),C.setAttribute("uv",new yn(M,m)),C.setAttribute("faceIndex",new yn(x,p)),t.push(C),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Bu(n,t,e){const i=new Ms(n,t,e);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Hx(n,t,e){const i=new Float32Array(ls),s=new L(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Hu(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Gu(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ra||c===Nc,u=c===sr||c===rr;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ul(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new ul(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Vx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Br("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wx(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let M=0,x=v.length;M<x;M+=3){const C=v[M+0],w=v[M+1],T=v[M+2];d.push(C,w,w,T,T,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const C=M+0,w=M+1,T=M+2;d.push(C,w,w,T,T,C)}}else return;const m=new(lf(d)?mf:pf)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $x(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qx(n,t,e){const i=new WeakMap,s=new ue;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*w*4*h),R=new hf(T,C,w,h);R.type=ci,R.needsUpdate=!0;const S=x*4;for(let P=0;P<h;P++){const O=p[P],U=v[P],H=M[P],X=C*w*4*P;for(let W=0;W<O.count;W++){const Z=W*S;g===!0&&(s.fromBufferAttribute(O,W),T[X+Z+0]=s.x,T[X+Z+1]=s.y,T[X+Z+2]=s.z,T[X+Z+3]=0),_===!0&&(s.fromBufferAttribute(U,W),T[X+Z+4]=s.x,T[X+Z+5]=s.y,T[X+Z+6]=s.z,T[X+Z+7]=0),m===!0&&(s.fromBufferAttribute(H,W),T[X+Z+8]=s.x,T[X+Z+9]=s.y,T[X+Z+10]=s.z,T[X+Z+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new st(C,w)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Yx(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class yf extends qe{constructor(t,e,i,s,r,o,a,c,l,u=Qs){if(u!==Qs&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=vs),i===void 0&&u===ar&&(i=or),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sf=new qe,Vu=new yf(1,1),bf=new hf,Ef=new Dm,wf=new _f,Wu=[],$u=[],Xu=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function gr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ba(n,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Zx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Qx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Yu.set(i),n.uniformMatrix2fv(this.addr,!1,Yu),De(e,i)}}function t_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;qu.set(i),n.uniformMatrix3fv(this.addr,!1,qu),De(e,i)}}function e_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),De(e,i)}}function n_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function s_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function r_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function o_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function c_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function l_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function u_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vu.compareFunction=cf,r=Vu):r=Sf,e.setTexture2D(t||r,s)}function h_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ef,s)}function d_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||wf,s)}function f_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||bf,s)}function p_(n){switch(n){case 5126:return jx;case 35664:return Kx;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(n,t){n.uniform1fv(this.addr,t)}function g_(n,t){const e=gr(t,this.size,2);n.uniform2fv(this.addr,e)}function x_(n,t){const e=gr(t,this.size,3);n.uniform3fv(this.addr,e)}function __(n,t){const e=gr(t,this.size,4);n.uniform4fv(this.addr,e)}function v_(n,t){const e=gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function M_(n,t){const e=gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function y_(n,t){const e=gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function S_(n,t){n.uniform1iv(this.addr,t)}function b_(n,t){n.uniform2iv(this.addr,t)}function E_(n,t){n.uniform3iv(this.addr,t)}function w_(n,t){n.uniform4iv(this.addr,t)}function T_(n,t){n.uniform1uiv(this.addr,t)}function A_(n,t){n.uniform2uiv(this.addr,t)}function R_(n,t){n.uniform3uiv(this.addr,t)}function C_(n,t){n.uniform4uiv(this.addr,t)}function P_(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sf,r[o])}function I_(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ef,r[o])}function L_(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wf,r[o])}function D_(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bf,r[o])}function k_(n){switch(n){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return __;case 35674:return v_;case 35675:return M_;case 35676:return y_;case 5124:case 35670:return S_;case 35667:case 35671:return b_;case 35668:case 35672:return E_;case 35669:case 35673:return w_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}class N_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p_(e.type)}}class U_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k_(e.type)}}class O_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function ju(n,t){n.seq.push(t),n.map[t.id]=t}function F_(n,t,e){const i=n.name,s=i.length;for(oc.lastIndex=0;;){const r=oc.exec(i),o=oc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ju(e,l===void 0?new N_(a,n,t):new U_(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new O_(a),ju(e,h)),e=h}}}class ia{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);F_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ku(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const z_=37297;let B_=0;function H_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Zu=new $t;function G_(n){te._getMatrix(Zu,te.workingColorSpace,n);const t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ju(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+H_(n.getShaderSource(t),o)}else return s}function V_(n,t){const e=G_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function W_(n,t){let e;switch(t){case am:e="Linear";break;case cm:e="Reinhard";break;case lm:e="Cineon";break;case jd:e="ACESFilmic";break;case hm:e="AgX";break;case dm:e="Neutral";break;case um:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Do=new L;function $_(){te.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function q_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Hr(n){return n!==""}function Qu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(n){return n.replace(j_,Z_)}const K_=new Map;function Z_(n,t){let e=Yt[t];if(e===void 0){const i=K_.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(n){return n.replace(J_,Q_)}function Q_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function ev(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function iv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wl:t="ENVMAP_BLENDING_MULTIPLY";break;case rm:t="ENVMAP_BLENDING_MIX";break;case om:t="ENVMAP_BLENDING_ADD";break}return t}function sv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function rv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=tv(e),l=ev(e),u=nv(e),h=iv(e),d=sv(e),f=X_(e),g=q_(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?W_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),$_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=hl(o),o=Qu(o,e),o=th(o,e),a=hl(a),a=Qu(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,C=Ku(s,s.VERTEX_SHADER,M),w=Ku(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(C).trim(),H=s.getShaderInfoLog(w).trim();let X=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,w);else{const Z=Ju(s,C,"vertex"),V=Ju(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Z+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||H==="")&&(W=!1);W&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(C),s.deleteShader(w),R=new ia(s,_),S=Y_(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,z_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new cv(t),e.set(t,i)),i}}class cv{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}}function lv(n,t,e,i,s,r,o){const a=new df,c=new av,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,O,U){const H=O.fog,X=U.geometry,W=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),V=Z&&Z.mapping===ya?Z.image.height:null,at=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=dt!==void 0?dt.length:0;let Ft=0;X.morphAttributes.position!==void 0&&(Ft=1),X.morphAttributes.normal!==void 0&&(Ft=2),X.morphAttributes.color!==void 0&&(Ft=3);let Qt,G,J,lt;if(at){const ae=Wn[at];Qt=ae.vertexShader,G=ae.fragmentShader}else Qt=S.vertexShader,G=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),lt=c.getFragmentShaderID(S);const tt=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,kt=U.isBatchedMesh===!0,Gt=!!S.map,j=!!S.matcap,rt=!!Z,I=!!S.aoMap,It=!!S.lightMap,et=!!S.bumpMap,yt=!!S.normalMap,ct=!!S.displacementMap,Ut=!!S.emissiveMap,_t=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,F=S.clearcoat>0,q=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,Tt=S.transmission>0,ht=b&&!!S.anisotropyMap,vt=F&&!!S.clearcoatMap,jt=F&&!!S.clearcoatNormalMap,it=F&&!!S.clearcoatRoughnessMap,bt=Q&&!!S.iridescenceMap,Ot=Q&&!!S.iridescenceThicknessMap,zt=Y&&!!S.sheenColorMap,Et=Y&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,qt=!!S.specularColorMap,de=!!S.specularIntensityMap,D=Tt&&!!S.transmissionMap,ft=Tt&&!!S.thicknessMap,$=!!S.gradientMap,K=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Vt=!!S.extensions;let ye=Bi;S.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ye=n.toneMapping);const He={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:Qt,fragmentShader:G,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:kt,batchingColor:kt&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:hr,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:j,envMap:rt,envMapMode:rt&&Z.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:It,bumpMap:et,normalMap:yt,displacementMap:d&&ct,emissiveMap:Ut,normalMapObjectSpace:yt&&S.normalMapType===gm,normalMapTangentSpace:yt&&S.normalMapType===Ll,metalnessMap:_t,roughnessMap:A,anisotropy:b,anisotropyMap:ht,clearcoat:F,clearcoatMap:vt,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:q,iridescence:Q,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:Y,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:Jt,specularColorMap:qt,specularIntensityMap:de,transmission:Tt,transmissionMap:D,thicknessMap:ft,gradientMap:$,opaque:S.transparent===!1&&S.blending===ps&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:Gt&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:It&&_(S.lightMap.channel),bumpMapUv:et&&_(S.bumpMap.channel),normalMapUv:yt&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:Ut&&_(S.emissiveMap.channel),metalnessMapUv:_t&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:vt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(S.sheenRoughnessMap.channel),specularMapUv:Jt&&_(S.specularMap.channel),specularColorMapUv:qt&&_(S.specularColorMap.channel),specularIntensityMapUv:de&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ft&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(yt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Gt||K),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:St,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:Ut&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xe,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const y=g[S.type];let P;if(y){const O=Wn[y];P=Xm.clone(O.uniforms)}else P=S.uniforms;return P}function C(S,y){let P;for(let O=0,U=u.length;O<U;O++){const H=u[O];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new rv(n,y,S,r),u.push(P)),P}function w(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function uv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function hv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ih(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function sh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,f,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||hv),i.length>1&&i.sort(d||ih),s.length>1&&s.sort(d||ih)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function dv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new sh,n.set(i,[o])):s>=r.length?(o=new sh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function pv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mv=0;function gv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xv(n){const t=new fv,e=pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new _e,o=new _e;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,C=0,w=0,T=0;l.sort(gv);for(let S=0,y=l.length;S<y;S++){const P=l[S],O=P.color,U=P.intensity,H=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*U,h+=O.g*U,d+=O.b*U;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],U);T++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=W,f++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(U),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;const Z=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=Z.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=X,x++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(O).multiplyScalar(U),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(U),W.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=T,i.version=mv++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function rh(n){const t=new xv(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _v(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rh(n),t.set(s,[a])):r>=o.length?(a=new rh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class vv extends pr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mv extends pr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bv(n,t,e){let i=new kl;const s=new st,r=new st,o=new ue,a=new vv({depthPacking:mm}),c=new Mv,l={},u=e.maxTextureSize,h={[Vi]:sn,[sn]:Vi,[Xe]:Xe},d=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:yv,fragmentShader:Sv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let p=this.type;this.render=function(w,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(zi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==ri&&this.type===ri,H=p===ri&&this.type!==ri;for(let X=0,W=w.length;X<W;X++){const Z=w[X],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const at=V.getFrameExtents();if(s.multiply(at),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,V.mapSize.y=r.y)),V.map===null||U===!0||H===!0){const xt=this.type!==ri?{minFilter:Dn,magFilter:Dn}:{};V.map!==null&&V.map.dispose(),V.map=new Ms(s.x,s.y,xt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const dt=V.getViewportCount();for(let xt=0;xt<dt;xt++){const Ft=V.getViewport(xt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(o),V.updateMatrices(Z,xt),i=V.getFrustum(),x(T,R,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&v(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,P)};function v(w,T){const R=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ms(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,R,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,R,f,_,null)}function M(w,T,R,S){let y=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=y.uuid,U=T.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let X=H[U];X===void 0&&(X=y.clone(),H[U]=X,T.addEventListener("dispose",C)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,S===ri?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=R}return y}function x(w,T,R,S,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===ri)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const U=t.update(w),H=w.material;if(Array.isArray(H)){const X=U.groups;for(let W=0,Z=X.length;W<Z;W++){const V=X[W],at=H[V.materialIndex];if(at&&at.visible){const dt=M(w,at,S,y);w.onBeforeShadow(n,w,T,R,U,dt,V),n.renderBufferDirect(R,null,U,dt,w,V),w.onAfterShadow(n,w,T,R,U,dt,V)}}}else if(H.visible){const X=M(w,H,S,y);w.onBeforeShadow(n,w,T,R,U,X,null),n.renderBufferDirect(R,null,U,X,w,null),w.onAfterShadow(n,w,T,R,U,X,null)}}const O=w.children;for(let U=0,H=O.length;U<H;U++)x(O[U],T,R,S,y)}function C(w){w.target.removeEventListener("dispose",C);for(const R in l){const S=l[R],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Ev={[Rc]:Cc,[Pc]:Dc,[Ic]:kc,[ir]:Lc,[Cc]:Rc,[Dc]:Pc,[kc]:Ic,[Lc]:ir};function wv(n,t){function e(){let D=!1;const ft=new ue;let $=null;const K=new ue(0,0,0,0);return{setMask:function(gt){$!==gt&&!D&&(n.colorMask(gt,gt,gt,gt),$=gt)},setLocked:function(gt){D=gt},setClear:function(gt,pt,Vt,ye,He){He===!0&&(gt*=ye,pt*=ye,Vt*=ye),ft.set(gt,pt,Vt,ye),K.equals(ft)===!1&&(n.clearColor(gt,pt,Vt,ye),K.copy(ft))},reset:function(){D=!1,$=null,K.set(-1,0,0,0)}}}function i(){let D=!1,ft=!1,$=null,K=null,gt=null;return{setReversed:function(pt){if(ft!==pt){const Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const ye=gt;gt=null,this.setClear(ye)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?tt(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(pt){$!==pt&&!D&&(n.depthMask(pt),$=pt)},setFunc:function(pt){if(ft&&(pt=Ev[pt]),K!==pt){switch(pt){case Rc:n.depthFunc(n.NEVER);break;case Cc:n.depthFunc(n.ALWAYS);break;case Pc:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Ic:n.depthFunc(n.EQUAL);break;case Lc:n.depthFunc(n.GEQUAL);break;case Dc:n.depthFunc(n.GREATER);break;case kc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=pt}},setLocked:function(pt){D=pt},setClear:function(pt){gt!==pt&&(ft&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){D=!1,$=null,K=null,gt=null,ft=!1}}}function s(){let D=!1,ft=null,$=null,K=null,gt=null,pt=null,Vt=null,ye=null,He=null;return{setTest:function(ae){D||(ae?tt(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(ae){ft!==ae&&!D&&(n.stencilMask(ae),ft=ae)},setFunc:function(ae,bn,Yn){($!==ae||K!==bn||gt!==Yn)&&(n.stencilFunc(ae,bn,Yn),$=ae,K=bn,gt=Yn)},setOp:function(ae,bn,Yn){(pt!==ae||Vt!==bn||ye!==Yn)&&(n.stencilOp(ae,bn,Yn),pt=ae,Vt=bn,ye=Yn)},setLocked:function(ae){D=ae},setClear:function(ae){He!==ae&&(n.clearStencil(ae),He=ae)},reset:function(){D=!1,ft=null,$=null,K=null,gt=null,pt=null,Vt=null,ye=null,He=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,C=null,w=null,T=new Ht(0,0,0),R=0,S=!1,y=null,P=null,O=null,U=null,H=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Z>=2);let at=null,dt={};const xt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),Qt=new ue().fromArray(xt),G=new ue().fromArray(Ft);function J(D,ft,$,K){const gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(D,pt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<$;Vt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ft+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}const lt={};lt[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(n.DEPTH_TEST),o.setFunc(ir),et(!1),yt(hu),tt(n.CULL_FACE),I(zi);function tt(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function St(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Lt(D,ft){return h[D]!==ft?(n.bindFramebuffer(D,ft),h[D]=ft,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ft),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function kt(D,ft){let $=f,K=!1;if(D){$=d.get(ft),$===void 0&&($=[],d.set(ft,$));const gt=D.textures;if($.length!==gt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Vt=gt.length;pt<Vt;pt++)$[pt]=n.COLOR_ATTACHMENT0+pt;$.length=gt.length,K=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,K=!0);K&&n.drawBuffers($)}function Gt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const j={[cs]:n.FUNC_ADD,[Gp]:n.FUNC_SUBTRACT,[Vp]:n.FUNC_REVERSE_SUBTRACT};j[Wp]=n.MIN,j[$p]=n.MAX;const rt={[Xp]:n.ZERO,[qp]:n.ONE,[Yp]:n.SRC_COLOR,[Tc]:n.SRC_ALPHA,[tm]:n.SRC_ALPHA_SATURATE,[Jp]:n.DST_COLOR,[Kp]:n.DST_ALPHA,[jp]:n.ONE_MINUS_SRC_COLOR,[Ac]:n.ONE_MINUS_SRC_ALPHA,[Qp]:n.ONE_MINUS_DST_COLOR,[Zp]:n.ONE_MINUS_DST_ALPHA,[em]:n.CONSTANT_COLOR,[nm]:n.ONE_MINUS_CONSTANT_COLOR,[im]:n.CONSTANT_ALPHA,[sm]:n.ONE_MINUS_CONSTANT_ALPHA};function I(D,ft,$,K,gt,pt,Vt,ye,He,ae){if(D===zi){_===!0&&(St(n.BLEND),_=!1);return}if(_===!1&&(tt(n.BLEND),_=!0),D!==Hp){if(D!==m||ae!==S){if((p!==cs||x!==cs)&&(n.blendEquation(n.FUNC_ADD),p=cs,x=cs),ae)switch(D){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFunc(n.ONE,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,M=null,C=null,w=null,T.set(0,0,0),R=0,m=D,S=ae}return}gt=gt||ft,pt=pt||$,Vt=Vt||K,(ft!==p||gt!==x)&&(n.blendEquationSeparate(j[ft],j[gt]),p=ft,x=gt),($!==v||K!==M||pt!==C||Vt!==w)&&(n.blendFuncSeparate(rt[$],rt[K],rt[pt],rt[Vt]),v=$,M=K,C=pt,w=Vt),(ye.equals(T)===!1||He!==R)&&(n.blendColor(ye.r,ye.g,ye.b,He),T.copy(ye),R=He),m=D,S=!1}function It(D,ft){D.side===Xe?St(n.CULL_FACE):tt(n.CULL_FACE);let $=D.side===sn;ft&&($=!$),et($),D.blending===ps&&D.transparent===!1?I(zi):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function yt(D){D!==zp?(tt(n.CULL_FACE),D!==P&&(D===hu?n.cullFace(n.BACK):D===Bp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),P=D}function ct(D){D!==O&&(W&&n.lineWidth(D),O=D)}function Ut(D,ft,$){D?(tt(n.POLYGON_OFFSET_FILL),(U!==ft||H!==$)&&(n.polygonOffset(ft,$),U=ft,H=$)):St(n.POLYGON_OFFSET_FILL)}function _t(D){D?tt(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+X-1),at!==D&&(n.activeTexture(D),at=D)}function b(D,ft,$){$===void 0&&(at===null?$=n.TEXTURE0+X-1:$=at);let K=dt[$];K===void 0&&(K={type:void 0,texture:void 0},dt[$]=K),(K.type!==D||K.texture!==ft)&&(at!==$&&(n.activeTexture($),at=$),n.bindTexture(D,ft||lt[D]),K.type=D,K.texture=ft)}function F(){const D=dt[at];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(D){Qt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function Et(D){G.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Jt(D,ft){let $=l.get(ft);$===void 0&&($=new WeakMap,l.set(ft,$));let K=$.get(D);K===void 0&&(K=n.getUniformBlockIndex(ft,D.name),$.set(D,K))}function qt(D,ft){const K=l.get(ft).get(D);c.get(ft)!==K&&(n.uniformBlockBinding(ft,K,D.__bindingPointIndex),c.set(ft,K))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},at=null,dt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,C=null,w=null,T=new Ht(0,0,0),R=0,S=!1,y=null,P=null,O=null,U=null,H=null,Qt.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:St,bindFramebuffer:Lt,drawBuffers:kt,useProgram:Gt,setBlending:I,setMaterial:It,setFlipSided:et,setCullFace:yt,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:_t,activeTexture:A,bindTexture:b,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:bt,texImage3D:Ot,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:jt,texStorage3D:it,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ht,compressedTexSubImage3D:vt,scissor:zt,viewport:Et,reset:de}}function oh(n,t,e,i){const s=Tv(i);switch(e){case tf:return n*t;case nf:return n*t;case sf:return n*t*2;case rf:return n*t/s.components*s.byteLength;case Cl:return n*t/s.components*s.byteLength;case of:return n*t*2/s.components*s.byteLength;case Pl:return n*t*2/s.components*s.byteLength;case ef:return n*t*3/s.components*s.byteLength;case Ln:return n*t*4/s.components*s.byteLength;case Il:return n*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fc:case Bc:return Math.max(n,16)*Math.max(t,8)/4;case Oc:case zc:return Math.max(n,8)*Math.max(t,8)/2;case Hc:case Gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case na:case sl:case rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case af:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case al:case cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tv(n){switch(n){case xi:case Zd:return{byteLength:1,components:1};case Xr:case Jd:case Qr:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case vs:case Tl:case ci:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Av(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):ca("canvas")}function _(A,b,F){let q=1;const Q=_t(A);if((Q.width>F||Q.height>F)&&(q=F/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(q*Q.width),Tt=Math.floor(q*Q.height);h===void 0&&(h=g(Y,Tt));const ht=b?g(Y,Tt):h;return ht.width=Y,ht.height=Tt,ht.getContext("2d").drawImage(A,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Tt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,b,F,q,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=b;if(b===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),b===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),b===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),b===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),b===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),b===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),b===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),b===n.RGBA){const Tt=Q?Sa:te.getTransfer(q);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Tt===le?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(A,b){let F;return A?b===null||b===vs||b===or?F=n.DEPTH24_STENCIL8:b===ci?F=n.DEPTH32F_STENCIL8:b===Xr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vs||b===or?F=n.DEPTH_COMPONENT24:b===ci?F=n.DEPTH_COMPONENT32F:b===Xr&&(F=n.DEPTH_COMPONENT16),F}function C(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){const b=A.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&u.delete(b)}function T(A){const b=A.target;b.removeEventListener("dispose",T),y(b)}function R(A){const b=i.get(A);if(b.__webglInit===void 0)return;const F=A.source,q=d.get(F);if(q){const Q=q[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(A),Object.keys(q).length===0&&d.delete(F)}i.remove(A)}function S(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const F=A.source,q=d.get(F);delete q[b.__cacheKey],o.memory.textures--}function y(A){const b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let Q=0;Q<b.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)n.deleteFramebuffer(b.__webglFramebuffer[q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=A.textures;for(let q=0,Q=F.length;q<Q;q++){const Y=i.get(F[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(A)}let P=0;function O(){P=0}function U(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function H(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function X(A,b){const F=i.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(F,A,b);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+b)}function W(A,b){const F=i.get(A);if(A.version>0&&F.__version!==A.version){G(F,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+b)}function Z(A,b){const F=i.get(A);if(A.version>0&&F.__version!==A.version){G(F,A,b);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+b)}function V(A,b){const F=i.get(A);if(A.version>0&&F.__version!==A.version){J(F,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+b)}const at={[oa]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[Uc]:n.MIRRORED_REPEAT},dt={[Dn]:n.NEAREST,[fm]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},xt={[xm]:n.NEVER,[bm]:n.ALWAYS,[_m]:n.LESS,[cf]:n.LEQUAL,[vm]:n.EQUAL,[Sm]:n.GEQUAL,[Mm]:n.GREATER,[ym]:n.NOTEQUAL};function Ft(A,b){if(b.type===ci&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Xn||b.magFilter===La||b.magFilter===fo||b.magFilter===hs||b.minFilter===Xn||b.minFilter===La||b.minFilter===fo||b.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,at[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,at[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,at[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,dt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==fo&&b.minFilter!==hs||b.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(A,b){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const q=b.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const Y=H(b);if(Y!==A.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[Y].usedTimes++;const Tt=Q[A.__cacheKey];Tt!==void 0&&(Q[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(b)),A.__cacheKey=Y,A.__webglTexture=Q[Y].texture}return F}function G(A,b,F){let q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=n.TEXTURE_3D);const Q=Qt(A,b),Y=b.source;e.bindTexture(q,A.__webglTexture,n.TEXTURE0+F);const Tt=i.get(Y);if(Y.version!==Tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+F);const ht=te.getPrimaries(te.workingColorSpace),vt=b.colorSpace===Oi?null:te.getPrimaries(b.colorSpace),jt=b.colorSpace===Oi||ht===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(b.image,!1,s.maxTextureSize);it=Ut(b,it);const bt=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type);let zt=M(b.internalFormat,bt,Ot,b.colorSpace,b.isVideoTexture);Ft(q,b);let Et;const Jt=b.mipmaps,qt=b.isVideoTexture!==!0,de=Tt.__version===void 0||Q===!0,D=Y.dataReady,ft=C(b,it);if(b.isDepthTexture)zt=x(b.format===ar,b.type),de&&(qt?e.texStorage2D(n.TEXTURE_2D,1,zt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,zt,it.width,it.height,0,bt,Ot,null));else if(b.isDataTexture)if(Jt.length>0){qt&&de&&e.texStorage2D(n.TEXTURE_2D,ft,zt,Jt[0].width,Jt[0].height);for(let $=0,K=Jt.length;$<K;$++)Et=Jt[$],qt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Et.width,Et.height,bt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,$,zt,Et.width,Et.height,0,bt,Ot,Et.data);b.generateMipmaps=!1}else qt?(de&&e.texStorage2D(n.TEXTURE_2D,ft,zt,it.width,it.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,bt,Ot,it.data)):e.texImage2D(n.TEXTURE_2D,0,zt,it.width,it.height,0,bt,Ot,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,zt,Jt[0].width,Jt[0].height,it.depth);for(let $=0,K=Jt.length;$<K;$++)if(Et=Jt[$],b.format!==Ln)if(bt!==null)if(qt){if(D)if(b.layerUpdates.size>0){const gt=oh(Et.width,Et.height,b.format,b.type);for(const pt of b.layerUpdates){const Vt=Et.data.subarray(pt*gt/Et.data.BYTES_PER_ELEMENT,(pt+1)*gt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,pt,Et.width,Et.height,1,bt,Vt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,it.depth,bt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,it.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,it.depth,bt,Ot,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,it.depth,0,bt,Ot,Et.data)}else{qt&&de&&e.texStorage2D(n.TEXTURE_2D,ft,zt,Jt[0].width,Jt[0].height);for(let $=0,K=Jt.length;$<K;$++)Et=Jt[$],b.format!==Ln?bt!==null?qt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,$,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Et.width,Et.height,bt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,$,zt,Et.width,Et.height,0,bt,Ot,Et.data)}else if(b.isDataArrayTexture)if(qt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,zt,it.width,it.height,it.depth),D)if(b.layerUpdates.size>0){const $=oh(it.width,it.height,b.format,b.type);for(const K of b.layerUpdates){const gt=it.data.subarray(K*$/it.data.BYTES_PER_ELEMENT,(K+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,bt,Ot,gt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,Ot,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,it.width,it.height,it.depth,0,bt,Ot,it.data);else if(b.isData3DTexture)qt?(de&&e.texStorage3D(n.TEXTURE_3D,ft,zt,it.width,it.height,it.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,Ot,it.data)):e.texImage3D(n.TEXTURE_3D,0,zt,it.width,it.height,it.depth,0,bt,Ot,it.data);else if(b.isFramebufferTexture){if(de)if(qt)e.texStorage2D(n.TEXTURE_2D,ft,zt,it.width,it.height);else{let $=it.width,K=it.height;for(let gt=0;gt<ft;gt++)e.texImage2D(n.TEXTURE_2D,gt,zt,$,K,0,bt,Ot,null),$>>=1,K>>=1}}else if(Jt.length>0){if(qt&&de){const $=_t(Jt[0]);e.texStorage2D(n.TEXTURE_2D,ft,zt,$.width,$.height)}for(let $=0,K=Jt.length;$<K;$++)Et=Jt[$],qt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,bt,Ot,Et):e.texImage2D(n.TEXTURE_2D,$,zt,bt,Ot,Et);b.generateMipmaps=!1}else if(qt){if(de){const $=_t(it);e.texStorage2D(n.TEXTURE_2D,ft,zt,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ot,it)}else e.texImage2D(n.TEXTURE_2D,0,zt,bt,Ot,it);m(b)&&p(q),Tt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function J(A,b,F){if(b.image.length!==6)return;const q=Qt(A,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const Y=i.get(Q);if(Q.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const Tt=te.getPrimaries(te.workingColorSpace),ht=b.colorSpace===Oi?null:te.getPrimaries(b.colorSpace),vt=b.colorSpace===Oi||Tt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let K=0;K<6;K++)!jt&&!it?bt[K]=_(b.image[K],!0,s.maxCubemapSize):bt[K]=it?b.image[K].image:b.image[K],bt[K]=Ut(b,bt[K]);const Ot=bt[0],zt=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),Jt=M(b.internalFormat,zt,Et,b.colorSpace),qt=b.isVideoTexture!==!0,de=Y.__version===void 0||q===!0,D=Q.dataReady;let ft=C(b,Ot);Ft(n.TEXTURE_CUBE_MAP,b);let $;if(jt){qt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Jt,Ot.width,Ot.height);for(let K=0;K<6;K++){$=bt[K].mipmaps;for(let gt=0;gt<$.length;gt++){const pt=$[gt];b.format!==Ln?zt!==null?qt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,zt,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,zt,Et,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Jt,pt.width,pt.height,0,zt,Et,pt.data)}}}else{if($=b.mipmaps,qt&&de){$.length>0&&ft++;const K=_t(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Jt,K.width,K.height)}for(let K=0;K<6;K++)if(it){qt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt[K].width,bt[K].height,zt,Et,bt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,bt[K].width,bt[K].height,0,zt,Et,bt[K].data);for(let gt=0;gt<$.length;gt++){const Vt=$[gt].image[K].image;qt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Vt.width,Vt.height,zt,Et,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Jt,Vt.width,Vt.height,0,zt,Et,Vt.data)}}else{qt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,zt,Et,bt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Jt,zt,Et,bt[K]);for(let gt=0;gt<$.length;gt++){const pt=$[gt];qt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,zt,Et,pt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Jt,zt,Et,pt.image[K])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function lt(A,b,F,q,Q,Y){const Tt=r.convert(F.format,F.colorSpace),ht=r.convert(F.type),vt=M(F.internalFormat,Tt,ht,F.colorSpace),jt=i.get(b),it=i.get(F);if(it.__renderTarget=b,!jt.__hasExternalTextures){const bt=Math.max(1,b.width>>Y),Ot=Math.max(1,b.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,vt,bt,Ot,b.depth,0,Tt,ht,null):e.texImage2D(Q,Y,vt,bt,Ot,0,Tt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),yt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,it.__webglTexture,0,et(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,it.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(A,b,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const q=b.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Y=x(b.stencilBuffer,Q),Tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=et(b);yt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Y,b.width,b.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Y,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,A)}else{const q=b.textures;for(let Q=0;Q<q.length;Q++){const Y=q[Q],Tt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),vt=M(Y.internalFormat,Tt,ht,Y.colorSpace),jt=et(b);F&&yt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,vt,b.width,b.height):yt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,vt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,vt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const Q=q.__webglTexture,Y=et(b);if(b.depthTexture.format===Qs)yt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(b.depthTexture.format===ar)yt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const b=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");St(b.__webglFramebuffer,A)}else if(F){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=n.createRenderbuffer(),tt(b.__webglDepthbuffer[q],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),tt(b.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(A,b,F){const q=i.get(A);b!==void 0&&lt(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Lt(A)}function Gt(A){const b=A.texture,F=i.get(A),q=i.get(b);A.addEventListener("dispose",T);const Q=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=b.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[ht]=[];for(let vt=0;vt<b.mipmaps.length;vt++)F.__webglFramebuffer[ht][vt]=n.createFramebuffer()}else F.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)F.__webglFramebuffer[ht]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ht=0,vt=Q.length;ht<vt;ht++){const jt=i.get(Q[ht]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&yt(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const vt=Q[ht];F.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);const jt=r.convert(vt.format,vt.colorSpace),it=r.convert(vt.type),bt=M(vt.internalFormat,jt,it,vt.colorSpace,A.isXRRenderTarget===!0),Ot=et(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,bt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)lt(F.__webglFramebuffer[ht][vt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else lt(F.__webglFramebuffer[ht],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ht=0,vt=Q.length;ht<vt;ht++){const jt=Q[ht],it=i.get(jt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Ft(n.TEXTURE_2D,jt),lt(F.__webglFramebuffer,A,jt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),Ft(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)lt(F.__webglFramebuffer[vt],A,b,n.COLOR_ATTACHMENT0,ht,vt);else lt(F.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,ht,0);m(b)&&p(ht),e.unbindTexture()}A.depthBuffer&&Lt(A)}function j(A){const b=A.textures;for(let F=0,q=b.length;F<q;F++){const Q=b[F];if(m(Q)){const Y=v(A),Tt=i.get(Q).__webglTexture;e.bindTexture(Y,Tt),p(Y),e.unbindTexture()}}}const rt=[],I=[];function It(A){if(A.samples>0){if(yt(A)===!1){const b=A.textures,F=A.width,q=A.height;let Q=n.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(A),ht=b.length>1;if(ht)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const jt=i.get(b[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Q,n.NEAREST),c===!0&&(rt.length=0,I.length=0,rt.push(n.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(Y),I.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const jt=i.get(b[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function et(A){return Math.min(s.maxSamples,A.samples)}function yt(A){const b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ct(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ut(A,b){const F=A.colorSpace,q=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==hr&&F!==Oi&&(te.getTransfer(F)===le?(q!==Ln||Q!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function _t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=yt}function Rv(n,t){function e(i,s=Oi){let r;const o=te.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===Al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zd)return n.BYTE;if(i===Jd)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===Tl)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===tf)return n.ALPHA;if(i===ef)return n.RGB;if(i===Ln)return n.RGBA;if(i===nf)return n.LUMINANCE;if(i===sf)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===rf)return n.RED;if(i===Cl)return n.RED_INTEGER;if(i===of)return n.RG;if(i===Pl)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===Jo||i===Qo||i===ta||i===ea)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oc||i===Fc||i===zc||i===Bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hc||i===Gc||i===Vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hc||i===Gc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wc||i===$c||i===Xc||i===qc||i===Yc||i===jc||i===Kc||i===Zc||i===Jc||i===Qc||i===tl||i===el||i===nl||i===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$c)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===sl||i===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===af||i===ol||i===al||i===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Cv extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wi({vertexShader:Iv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kv extends dr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new Dv,m=e.getContextAttributes();let p=null,v=null;const M=[],x=[],C=new st;let w=null;const T=new un;T.viewport=new ue;const R=new un;R.viewport=new ue;const S=[T,R],y=new Cv;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=M[G];return J===void 0&&(J=new ac,M[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=M[G];return J===void 0&&(J=new ac,M[G]=J),J.getGripSpace()},this.getHand=function(G){let J=M[G];return J===void 0&&(J=new ac,M[G]=J),J.getHandSpace()};function U(G){const J=x.indexOf(G.inputSource);if(J===-1)return;const lt=M[J];lt!==void 0&&(lt.update(G.inputSource,G.frame,l||o),lt.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",X);for(let G=0;G<M.length;G++){const J=x[G];J!==null&&(x[G]=null,M[G].disconnect(J))}P=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,v=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ms(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,lt=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?ar:Qs,lt=m.stencil?or:vs);const St={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ms(d.textureWidth,d.textureHeight,{format:Ln,type:xi,depthTexture:new yf(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(G){for(let J=0;J<G.removed.length;J++){const lt=G.removed[J],tt=x.indexOf(lt);tt>=0&&(x[tt]=null,M[tt].disconnect(lt))}for(let J=0;J<G.added.length;J++){const lt=G.added[J];let tt=x.indexOf(lt);if(tt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=x.length){x.push(lt),tt=Lt;break}else if(x[Lt]===null){x[Lt]=lt,tt=Lt;break}if(tt===-1)break}const St=M[tt];St&&St.connect(lt)}}const W=new L,Z=new L;function V(G,J,lt){W.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(lt.matrixWorld);const tt=W.distanceTo(Z),St=J.projectionMatrix.elements,Lt=lt.projectionMatrix.elements,kt=St[14]/(St[10]-1),Gt=St[14]/(St[10]+1),j=(St[9]+1)/St[5],rt=(St[9]-1)/St[5],I=(St[8]-1)/St[0],It=(Lt[8]+1)/Lt[0],et=kt*I,yt=kt*It,ct=tt/(-I+It),Ut=ct*-I;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ut),G.translateZ(ct),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),St[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _t=kt+ct,A=Gt+ct,b=et-Ut,F=yt+(tt-Ut),q=j*Gt/A*_t,Q=rt*Gt/A*_t;G.projectionMatrix.makePerspective(b,F,q,Q,_t,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function at(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,lt=G.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),y.near=R.near=T.near=J,y.far=R.far=T.far=lt,(P!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far),T.layers.mask=G.layers.mask|2,R.layers.mask=G.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const tt=G.parent,St=y.cameras;at(y,tt);for(let Lt=0;Lt<St.length;Lt++)at(St[Lt],tt);St.length===2?V(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),dt(G,y,tt)};function dt(G,J,lt){lt===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(lt.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ll*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let xt=null;function Ft(G,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const lt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let tt=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,tt=!0);for(let Lt=0;Lt<lt.length;Lt++){const kt=lt[Lt];let Gt=null;if(f!==null)Gt=f.getViewport(kt);else{const rt=h.getViewSubImage(d,kt);Gt=rt.viewport,Lt===0&&(t.setRenderTargetTextures(v,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(v))}let j=S[Lt];j===void 0&&(j=new un,j.layers.enable(Lt),j.viewport=new ue,S[Lt]=j),j.matrix.fromArray(kt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(kt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Lt===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),tt===!0&&y.cameras.push(j)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Lt=h.getDepthInformation(lt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let lt=0;lt<M.length;lt++){const tt=x[lt],St=M[lt];tt!==null&&St!==void 0&&St.update(tt,J,l||o)}xt&&xt(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Qt=new vf;Qt.setAnimationLoop(Ft),this.setAnimationLoop=function(G){xt=G},this.dispose=function(){}}}const ns=new Fn,Nv=new _e;function Uv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(ns)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ov(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function l(v,M){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(v,C);const w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function u(v){const M=h();v.__bindingPointIndex=M;const x=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=s[v.id],x=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,T=x.length;w<T;w++){const R=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,y=R.length;S<y;S++){const P=R[S];if(f(P,w,S,C)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let X=0;X<U.length;X++){const W=U[X],Z=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,x,C){const w=v.value,T=M+"_"+x;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const R=C[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const M=v.uniforms;let x=0;const C=16;for(let T=0,R=M.length;T<R;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,P=S.length;y<P;y++){const O=S[y],U=Array.isArray(O.value)?O.value:[O.value];for(let H=0,X=U.length;H<X;H++){const W=U[H],Z=_(W),V=x%C,at=V%Z.boundary,dt=V+at;x+=at,dt!==0&&C-dt<Z.storage&&(x+=C-dt),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Z.storage}}}const w=x%C;return w>0&&(x+=C-w),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Fv{constructor(t={}){const{canvas:e=wm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Bi,this.toneMappingExposure=1;const x=this;let C=!1,w=0,T=0,R=null,S=-1,y=null;const P=new ue,O=new ue;let U=null;const H=new Ht(0);let X=0,W=e.width,Z=e.height,V=1,at=null,dt=null;const xt=new ue(0,0,W,Z),Ft=new ue(0,0,W,Z);let Qt=!1;const G=new kl;let J=!1,lt=!1;const tt=new _e,St=new _e,Lt=new L,kt=new ue,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function rt(){return R===null?V:1}let I=i;function It(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){const k="webgl2";if(I=It(k,E),I===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let et,yt,ct,Ut,_t,A,b,F,q,Q,Y,Tt,ht,vt,jt,it,bt,Ot,zt,Et,Jt,qt,de,D;function ft(){et=new Vx(I),et.init(),qt=new Rv(I,et),yt=new Ox(I,et,t,qt),ct=new wv(I,et),yt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ut=new Xx(I),_t=new uv,A=new Av(I,et,ct,_t,yt,qt,Ut),b=new zx(x),F=new Gx(x),q=new Qm(I),de=new Nx(I,q),Q=new Wx(I,q,Ut,de),Y=new Yx(I,Q,q,Ut),zt=new qx(I,yt,A),it=new Fx(_t),Tt=new lv(x,b,F,et,yt,de,it),ht=new Uv(x,_t),vt=new dv,jt=new _v(et),Ot=new kx(x,b,F,ct,Y,f,c),bt=new bv(x,Y,yt),D=new Ov(I,Ut,yt,ct),Et=new Ux(I,et,Ut),Jt=new $x(I,et,Ut),Ut.programs=Tt.programs,x.capabilities=yt,x.extensions=et,x.properties=_t,x.renderLists=vt,x.shadowMap=bt,x.state=ct,x.info=Ut}ft();const $=new kv(x,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(W,Z,!1))},this.getSize=function(E){return E.set(W,Z)},this.setSize=function(E,k,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Z=k,e.width=Math.floor(E*V),e.height=Math.floor(k*V),z===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(W*V,Z*V).floor()},this.setDrawingBufferSize=function(E,k,z){W=E,Z=k,V=z,e.width=Math.floor(E*z),e.height=Math.floor(k*z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(xt)},this.setViewport=function(E,k,z,B){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,k,z,B),ct.viewport(P.copy(xt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ft)},this.setScissor=function(E,k,z,B){E.isVector4?Ft.set(E.x,E.y,E.z,E.w):Ft.set(E,k,z,B),ct.scissor(O.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){ct.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){at=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(E=!0,k=!0,z=!0){let B=0;if(E){let N=!1;if(R!==null){const ot=R.texture.format;N=ot===Il||ot===Pl||ot===Cl}if(N){const ot=R.texture.type,mt=ot===xi||ot===vs||ot===Xr||ot===or||ot===Al||ot===Rl,At=Ot.getClearColor(),Rt=Ot.getClearAlpha(),Bt=At.r,Wt=At.g,Ct=At.b;mt?(g[0]=Bt,g[1]=Wt,g[2]=Ct,g[3]=Rt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Bt,_[1]=Wt,_[2]=Ct,_[3]=Rt,I.clearBufferiv(I.COLOR,0,_))}else B|=I.COLOR_BUFFER_BIT}k&&(B|=I.DEPTH_BUFFER_BIT),z&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),jt.dispose(),_t.dispose(),b.dispose(),F.dispose(),Y.dispose(),de.dispose(),D.dispose(),Tt.dispose(),$.dispose(),$.removeEventListener("sessionstart",iu),$.removeEventListener("sessionend",su),Ki.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=Ut.autoReset,k=bt.enabled,z=bt.autoUpdate,B=bt.needsUpdate,N=bt.type;ft(),Ut.autoReset=E,bt.enabled=k,bt.autoUpdate=z,bt.needsUpdate=B,bt.type=N}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Vt(E){const k=E.target;k.removeEventListener("dispose",Vt),ye(k)}function ye(E){He(E),_t.remove(E)}function He(E){const k=_t.get(E).programs;k!==void 0&&(k.forEach(function(z){Tt.releaseProgram(z)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,z,B,N,ot){k===null&&(k=Gt);const mt=N.isMesh&&N.matrixWorld.determinant()<0,At=Up(E,k,z,B,N);ct.setMaterial(B,mt);let Rt=z.index,Bt=1;if(B.wireframe===!0){if(Rt=Q.getWireframeAttribute(z),Rt===void 0)return;Bt=2}const Wt=z.drawRange,Ct=z.attributes.position;let ee=Wt.start*Bt,fe=(Wt.start+Wt.count)*Bt;ot!==null&&(ee=Math.max(ee,ot.start*Bt),fe=Math.min(fe,(ot.start+ot.count)*Bt)),Rt!==null?(ee=Math.max(ee,0),fe=Math.min(fe,Rt.count)):Ct!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,Ct.count));const ge=fe-ee;if(ge<0||ge===1/0)return;de.setup(N,B,At,z,Rt);let Je,ie=Et;if(Rt!==null&&(Je=q.get(Rt),ie=Jt,ie.setIndex(Je)),N.isMesh)B.wireframe===!0?(ct.setLineWidth(B.wireframeLinewidth*rt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(N.isLine){let Dt=B.linewidth;Dt===void 0&&(Dt=1),ct.setLineWidth(Dt*rt()),N.isLineSegments?ie.setMode(I.LINES):N.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else N.isPoints?ie.setMode(I.POINTS):N.isSprite&&ie.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ie.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,jn=N._multiDrawCounts,se=N._multiDrawCount,En=Rt?q.get(Rt).bytesPerElement:1,Ps=_t.get(B).currentProgram.getUniforms();for(let rn=0;rn<se;rn++)Ps.setValue(I,"_gl_DrawID",rn),ie.render(Dt[rn]/En,jn[rn])}else if(N.isInstancedMesh)ie.renderInstances(ee,ge,N.count);else if(z.isInstancedBufferGeometry){const Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,jn=Math.min(z.instanceCount,Dt);ie.renderInstances(ee,ge,jn)}else ie.render(ee,ge)};function ae(E,k,z){E.transparent===!0&&E.side===Xe&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,ho(E,k,z),E.side=Vi,E.needsUpdate=!0,ho(E,k,z),E.side=Xe):ho(E,k,z)}this.compile=function(E,k,z=null){z===null&&(z=E),p=jt.get(z),p.init(k),M.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const At=ot[mt];ae(At,z,N),B.add(At)}else ae(ot,z,N),B.add(ot)}),M.pop(),p=null,B},this.compileAsync=function(E,k,z=null){const B=this.compile(E,k,z);return new Promise(N=>{function ot(){if(B.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&B.delete(mt)}),B.size===0){N(E);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let bn=null;function Yn(E){bn&&bn(E)}function iu(){Ki.stop()}function su(){Ki.start()}const Ki=new vf;Ki.setAnimationLoop(Yn),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(E){bn=E,$.setAnimationLoop(E),E===null?Ki.stop():Ki.start()},$.addEventListener("sessionstart",iu),$.addEventListener("sessionend",su),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,R),p=jt.get(E,M.length),p.init(k),M.push(p),St.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(St),lt=this.localClippingEnabled,J=it.init(this.clippingPlanes,lt),m=vt.get(E,v.length),m.init(),v.push(m),$.enabled===!0&&$.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Ia(ot,k,-1/0,x.sortObjects)}Ia(E,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(at,dt),j=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,j&&Ot.addToRenderList(m,E),this.info.render.frame++,J===!0&&it.beginShadows();const z=p.state.shadowsArray;bt.render(z,E,k),J===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ot=k.cameras;if(N.length>0)for(let mt=0,At=ot.length;mt<At;mt++){const Rt=ot[mt];ou(B,N,E,Rt)}j&&Ot.render(E);for(let mt=0,At=ot.length;mt<At;mt++){const Rt=ot[mt];ru(m,E,Rt,Rt.viewport)}}else N.length>0&&ou(B,N,E,k),j&&Ot.render(E),ru(m,E,k);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,k),de.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ia(E,k,z,B){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){B&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);const mt=Y.update(E),At=E.material;At.visible&&m.push(E,mt,At,z,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const mt=Y.update(E),At=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),kt.copy(mt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(At)){const Rt=mt.groups;for(let Bt=0,Wt=Rt.length;Bt<Wt;Bt++){const Ct=Rt[Bt],ee=At[Ct.materialIndex];ee&&ee.visible&&m.push(E,mt,ee,z,kt.z,Ct)}}else At.visible&&m.push(E,mt,At,z,kt.z,null)}}const ot=E.children;for(let mt=0,At=ot.length;mt<At;mt++)Ia(ot[mt],k,z,B)}function ru(E,k,z,B){const N=E.opaque,ot=E.transmissive,mt=E.transparent;p.setupLightsView(z),J===!0&&it.setGlobalState(x.clippingPlanes,z),B&&ct.viewport(P.copy(B)),N.length>0&&uo(N,k,z),ot.length>0&&uo(ot,k,z),mt.length>0&&uo(mt,k,z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function ou(E,k,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ms(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Qr:xi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=p.state.transmissionRenderTarget[B.id],mt=B.viewport||P;ot.setSize(mt.z,mt.w);const At=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),j&&Ot.render(z);const Rt=x.toneMapping;x.toneMapping=Bi;const Bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),J===!0&&it.setGlobalState(x.clippingPlanes,B),uo(E,z,B),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ct=0,ee=k.length;Ct<ee;Ct++){const fe=k[Ct],ge=fe.object,Je=fe.geometry,ie=fe.material,Dt=fe.group;if(ie.side===Xe&&ge.layers.test(B.layers)){const jn=ie.side;ie.side=sn,ie.needsUpdate=!0,au(ge,z,B,Je,ie,Dt),ie.side=jn,ie.needsUpdate=!0,Wt=!0}}Wt===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}x.setRenderTarget(At),x.setClearColor(H,X),Bt!==void 0&&(B.viewport=Bt),x.toneMapping=Rt}function uo(E,k,z){const B=k.isScene===!0?k.overrideMaterial:null;for(let N=0,ot=E.length;N<ot;N++){const mt=E[N],At=mt.object,Rt=mt.geometry,Bt=B===null?mt.material:B,Wt=mt.group;At.layers.test(z.layers)&&au(At,k,z,Rt,Bt,Wt)}}function au(E,k,z,B,N,ot){E.onBeforeRender(x,k,z,B,N,ot),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,k,z,B,E,ot),N.transparent===!0&&N.side===Xe&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,x.renderBufferDirect(z,k,B,N,E,ot),N.side=Vi,N.needsUpdate=!0,x.renderBufferDirect(z,k,B,N,E,ot),N.side=Xe):x.renderBufferDirect(z,k,B,N,E,ot),E.onAfterRender(x,k,z,B,N,ot)}function ho(E,k,z){k.isScene!==!0&&(k=Gt);const B=_t.get(E),N=p.state.lights,ot=p.state.shadowsArray,mt=N.state.version,At=Tt.getParameters(E,N.state,ot,k,z),Rt=Tt.getProgramCacheKey(At);let Bt=B.programs;B.environment=E.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(E.isMeshStandardMaterial?F:b).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Vt),Bt=new Map,B.programs=Bt);let Wt=Bt.get(Rt);if(Wt!==void 0){if(B.currentProgram===Wt&&B.lightsStateVersion===mt)return lu(E,At),Wt}else At.uniforms=Tt.getUniforms(E),E.onBeforeCompile(At,x),Wt=Tt.acquireProgram(At,Rt),Bt.set(Rt,Wt),B.uniforms=At.uniforms;const Ct=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=it.uniform),lu(E,At),B.needsLights=Fp(E),B.lightsStateVersion=mt,B.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Wt,B.uniformsList=null,Wt}function cu(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=ia.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function lu(E,k){const z=_t.get(E);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.batchingColor=k.batchingColor,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.instancingMorph=k.instancingMorph,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function Up(E,k,z,B,N){k.isScene!==!0&&(k=Gt),A.resetTextureUnits();const ot=k.fog,mt=B.isMeshStandardMaterial?k.environment:null,At=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:hr,Rt=(B.isMeshStandardMaterial?F:b).get(B.envMap||mt),Bt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Wt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ct=!!z.morphAttributes.position,ee=!!z.morphAttributes.normal,fe=!!z.morphAttributes.color;let ge=Bi;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=x.toneMapping);const Je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=Je!==void 0?Je.length:0,Dt=_t.get(B),jn=p.state.lights;if(J===!0&&(lt===!0||E!==y)){const mn=E===y&&B.id===S;it.setState(B,E,mn)}let se=!1;B.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==jn.state.version||Dt.outputColorSpace!==At||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Rt||B.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Bt||Dt.vertexTangents!==Wt||Dt.morphTargets!==Ct||Dt.morphNormals!==ee||Dt.morphColors!==fe||Dt.toneMapping!==ge||Dt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Dt.__version=B.version);let En=Dt.currentProgram;se===!0&&(En=ho(B,k,N));let Ps=!1,rn=!1,wr=!1;const xe=En.getUniforms(),Hn=Dt.uniforms;if(ct.useProgram(En.program)&&(Ps=!0,rn=!0,wr=!0),B.id!==S&&(S=B.id,rn=!0),Ps||y!==E){ct.buffers.depth.getReversed()?(tt.copy(E.projectionMatrix),Am(tt),Rm(tt),xe.setValue(I,"projectionMatrix",tt)):xe.setValue(I,"projectionMatrix",E.projectionMatrix),xe.setValue(I,"viewMatrix",E.matrixWorldInverse);const bi=xe.map.cameraPosition;bi!==void 0&&bi.setValue(I,Lt.setFromMatrixPosition(E.matrixWorld)),yt.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xe.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,rn=!0,wr=!0)}if(N.isSkinnedMesh){xe.setOptional(I,N,"bindMatrix"),xe.setOptional(I,N,"bindMatrixInverse");const mn=N.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),xe.setValue(I,"boneTexture",mn.boneTexture,A))}N.isBatchedMesh&&(xe.setOptional(I,N,"batchingTexture"),xe.setValue(I,"batchingTexture",N._matricesTexture,A),xe.setOptional(I,N,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",N._indirectTexture,A),xe.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",N._colorsTexture,A));const Tr=z.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&zt.update(N,z,En),(rn||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,xe.setValue(I,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Hn.envMap.value=Rt,Hn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&k.environment!==null&&(Hn.envMapIntensity.value=k.environmentIntensity),rn&&(xe.setValue(I,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Op(Hn,wr),ot&&B.fog===!0&&ht.refreshFogUniforms(Hn,ot),ht.refreshMaterialUniforms(Hn,B,V,Z,p.state.transmissionRenderTarget[E.id]),ia.upload(I,cu(Dt),Hn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ia.upload(I,cu(Dt),Hn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xe.setValue(I,"center",N.center),xe.setValue(I,"modelViewMatrix",N.modelViewMatrix),xe.setValue(I,"normalMatrix",N.normalMatrix),xe.setValue(I,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const mn=B.uniformsGroups;for(let bi=0,Ei=mn.length;bi<Ei;bi++){const uu=mn[bi];D.update(uu,En),D.bind(uu,En)}}return En}function Op(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Fp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,k,z){_t.get(E.texture).__webglTexture=k,_t.get(E.depthTexture).__webglTexture=z;const B=_t.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const z=_t.get(E);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,z=0){R=E,w=k,T=z;let B=!0,N=null,ot=!1,mt=!1;if(E){const Rt=_t.get(E);if(Rt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(I.FRAMEBUFFER,null),B=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Rt.__hasExternalTextures)A.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&_t.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);const Wt=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?N=Wt[k][z]:N=Wt[k],ot=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?N=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[z]:N=Wt,P.copy(E.viewport),O.copy(E.scissor),U=E.scissorTest}else P.copy(xt).multiplyScalar(V).floor(),O.copy(Ft).multiplyScalar(V).floor(),U=Qt;if(ct.bindFramebuffer(I.FRAMEBUFFER,N)&&B&&ct.drawBuffers(E,N),ct.viewport(P),ct.scissor(O),ct.setScissorTest(U),ot){const Rt=_t.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,z)}else if(mt){const Rt=_t.get(E.texture),Bt=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,z||0,Bt)}S=-1},this.readRenderTargetPixels=function(E,k,z,B,N,ot,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(At=At[mt]),At){ct.bindFramebuffer(I.FRAMEBUFFER,At);try{const Rt=E.texture,Bt=Rt.format,Wt=Rt.type;if(!yt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-B&&z>=0&&z<=E.height-N&&I.readPixels(k,z,B,N,qt.convert(Bt),qt.convert(Wt),ot)}finally{const Rt=R!==null?_t.get(R).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,k,z,B,N,ot,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(At=At[mt]),At){const Rt=E.texture,Bt=Rt.format,Wt=Rt.type;if(!yt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-B&&z>=0&&z<=E.height-N){ct.bindFramebuffer(I.FRAMEBUFFER,At);const Ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.bufferData(I.PIXEL_PACK_BUFFER,ot.byteLength,I.STREAM_READ),I.readPixels(k,z,B,N,qt.convert(Bt),qt.convert(Wt),0);const ee=R!==null?_t.get(R).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,ee);const fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Tm(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ot),I.deleteBuffer(Ct),I.deleteSync(fe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,z=0){E.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-z),N=Math.floor(E.image.width*B),ot=Math.floor(E.image.height*B),mt=k!==null?k.x:0,At=k!==null?k.y:0;A.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,mt,At,N,ot),ct.unbindTexture()},this.copyTextureToTexture=function(E,k,z=null,B=null,N=0){E.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],k=arguments[2],N=arguments[3]||0,z=null);let ot,mt,At,Rt,Bt,Wt,Ct,ee,fe;const ge=E.isCompressedTexture?E.mipmaps[N]:E.image;z!==null?(ot=z.max.x-z.min.x,mt=z.max.y-z.min.y,At=z.isBox3?z.max.z-z.min.z:1,Rt=z.min.x,Bt=z.min.y,Wt=z.isBox3?z.min.z:0):(ot=ge.width,mt=ge.height,At=ge.depth||1,Rt=0,Bt=0,Wt=0),B!==null?(Ct=B.x,ee=B.y,fe=B.z):(Ct=0,ee=0,fe=0);const Je=qt.convert(k.format),ie=qt.convert(k.type);let Dt;k.isData3DTexture?(A.setTexture3D(k,0),Dt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),Dt=I.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const jn=I.getParameter(I.UNPACK_ROW_LENGTH),se=I.getParameter(I.UNPACK_IMAGE_HEIGHT),En=I.getParameter(I.UNPACK_SKIP_PIXELS),Ps=I.getParameter(I.UNPACK_SKIP_ROWS),rn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt);const wr=E.isDataArrayTexture||E.isData3DTexture,xe=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Hn=_t.get(E),Tr=_t.get(k),mn=_t.get(Hn.__renderTarget),bi=_t.get(Tr.__renderTarget);ct.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ei=0;Ei<At;Ei++)wr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,N,Wt+Ei),E.isDepthTexture?(xe&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(k).__webglTexture,N,fe+Ei),I.blitFramebuffer(Rt,Bt,ot,mt,Ct,ee,ot,mt,I.DEPTH_BUFFER_BIT,I.NEAREST)):xe?I.copyTexSubImage3D(Dt,N,Ct,ee,fe+Ei,Rt,Bt,ot,mt):I.copyTexSubImage2D(Dt,N,Ct,ee,fe+Ei,Rt,Bt,ot,mt);ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Dt,N,Ct,ee,fe,ot,mt,At,Je,ie,ge.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,N,Ct,ee,fe,ot,mt,At,Je,ge.data):I.texSubImage3D(Dt,N,Ct,ee,fe,ot,mt,At,Je,ie,ge):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Ct,ee,ot,mt,Je,ie,ge.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Ct,ee,ge.width,ge.height,Je,ge.data):I.texSubImage2D(I.TEXTURE_2D,N,Ct,ee,ot,mt,Je,ie,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,jn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,se),I.pixelStorei(I.UNPACK_SKIP_PIXELS,En),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ps),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rn),N===0&&k.generateMipmaps&&I.generateMipmap(Dt),ct.unbindTexture()},this.copyTextureToTexture3D=function(E,k,z=null,B=null,N=0){return E.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,E=arguments[2],k=arguments[3],N=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,z,B,N)},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Ul{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zv extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tf extends qe{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new st:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],r=[],o=[],a=new L,c=new _e;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Fe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ol extends zn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bv extends Ol{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const ko=new L,cc=new Fl,lc=new Fl,uc=new Fl;class Hv extends zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ko.subVectors(s[0],s[1]).add(s[0]),l=ko);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ko),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),cc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),lc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),uc.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),lc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),uc.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(cc.calc(c),lc.calc(c),uc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ah(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function Gv(n,t){const e=1-n;return e*e*t}function Vv(n,t){return 2*(1-n)*n*t}function Wv(n,t){return n*n*t}function Vr(n,t,e,i){return Gv(n,t)+Vv(n,e)+Wv(n,i)}function $v(n,t){const e=1-n;return e*e*e*t}function Xv(n,t){const e=1-n;return 3*e*e*n*t}function qv(n,t){return 3*(1-n)*n*n*t}function Yv(n,t){return n*n*n*t}function Wr(n,t,e,i,s){return $v(n,t)+Xv(n,e)+qv(n,i)+Yv(n,s)}class Af extends zn{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jv extends zn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y),Wr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rf extends zn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kv extends zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends zn{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pf extends zn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(ah(a,c.x,l.x,u.x,h.x),ah(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var la=Object.freeze({__proto__:null,ArcCurve:Bv,CatmullRomCurve3:Hv,CubicBezierCurve:Af,CubicBezierCurve3:jv,EllipseCurve:Ol,LineCurve:Rf,LineCurve3:Kv,QuadraticBezierCurve:Cf,QuadraticBezierCurve3:Pf,SplineCurve:If});class Zv extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new la[s.type]().fromJSON(s))}return this}}class ch extends Zv{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Rf(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Cf(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Af(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new If(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Ol(t,e,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zl extends Ue{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new L,d=new st,f=new L,g=new L,_=new L;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){const M=i+v*u*s,x=Math.sin(M),C=Math.cos(M);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*x,h.y=t[w].y,h.z=t[w].x*C,o.push(h.x,h.y,h.z),d.x=v/e,d.y=w/(t.length-1),a.push(d.x,d.y);const T=c[3*w+0]*x,R=c[3*w+1],S=c[3*w+0]*C;l.push(T,R,S)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const x=M+v*t.length,C=x,w=x+t.length,T=x+t.length+1,R=x+1;r.push(C,w,R),r.push(T,R,w)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.points,t.segments,t.phiStart,t.phiLength)}}class xr extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,u=new st;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=i+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yi extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function v(){const x=new L,C=new L;let w=0;const T=(e-t)/i;for(let R=0;R<=r;R++){const S=[],y=R/r,P=y*(e-t)+t;for(let O=0;O<=s;O++){const U=O/s,H=U*c+a,X=Math.sin(H),W=Math.cos(H);C.x=P*X,C.y=-y*i+m,C.z=P*W,h.push(C.x,C.y,C.z),x.set(X,T,W).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-y),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const y=_[S][R],P=_[S+1][R],O=_[S+1][R+1],U=_[S][R+1];(t>0||S!==0)&&(u.push(y,P,U),w+=3),(e>0||S!==r-1)&&(u.push(P,O,U),w+=3)}l.addGroup(p,w,0),p+=w}function M(x){const C=g,w=new st,T=new L;let R=0;const S=x===!0?t:e,y=x===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const H=O/s*c+a,X=Math.cos(H),W=Math.sin(H);T.x=S*W,T.y=m*y,T.z=S*X,h.push(T.x,T.y,T.z),d.push(0,y,0),w.x=X*.5+.5,w.y=W*.5*y+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){const U=C+O,H=P+O;x===!0?u.push(H,H+1,U):u.push(H+1,H,U),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _r extends Yi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class no extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new L,x=new L,C=new L;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],x),f(e[w+2],C),c(M,x,C,v)}function c(v,M,x,C){const w=C+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const S=v.clone().lerp(x,R/w),y=M.clone().lerp(x,R/w),P=w-R;for(let O=0;O<=P;O++)O===0&&R===w?T[R][O]=S:T[R][O]=S.clone().lerp(y,O/P)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const y=Math.floor(S/2);S%2===0?(d(T[R][y+1]),d(T[R+1][y]),d(T[R][y])):(d(T[R][y+1]),d(T[R+1][y+1]),d(T[R+1][y]))}}function l(v){const M=new L;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const v=new L;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(x,1-C)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],C=o[v+4],w=Math.max(M,x,C),T=Math.min(M,x,C);w>.9&&T<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const v=new L,M=new L,x=new L,C=new L,w=new st,T=new st,R=new st;for(let S=0,y=0;S<r.length;S+=9,y+=6){v.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),C.copy(v).add(M).add(x).divideScalar(3);const P=m(C);_(w,y+0,v,P),_(T,y+2,M,P),_(R,y+4,x,P)}}function _(v,M,x,C){C<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.vertices,t.indices,t.radius,t.details)}}class Bl extends no{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bl(t.radius,t.detail)}}class Ts extends ch{constructor(t){super(t),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ch().fromJSON(s))}return this}}const Jv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Lf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(i&&(r=i1(n,t,r,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)h=n[g],d=n[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return qr(r,o,e,a,c,f,0),o}};function Lf(n,t,e,i,s){let r,o;if(s===p1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=lh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=lh(r,n[r],n[r+1],o);return o&&Ea(o,o.next)&&(jr(o),o=o.next),o}function ys(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ea(e,e.next)||Me(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&c1(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?t1(n,i,s,r):Qv(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),jr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=e1(ys(n),t,e),qr(n,t,e,i,s,r,2)):o===2&&n1(n,t,e,i,s,r):qr(ys(n),t,e,i,s,r,1);break}}}function Qv(n){const t=n.prev,e=n,i=n.next;if(Me(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Zs(s,a,r,c,o,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function t1(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=dl(f,g,t,e,i),v=dl(_,m,t,e,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Zs(a,u,c,h,l,d,M.x,M.y)&&Me(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zs(a,u,c,h,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Zs(a,u,c,h,l,d,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zs(a,u,c,h,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function e1(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Ea(s,r)&&Df(s,i,i.next,r)&&Yr(s,r)&&Yr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),jr(i),jr(i.next),i=n=r),i=i.next}while(i!==n);return ys(i)}function n1(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h1(o,a)){let c=kf(o,a);o=ys(o,o.next),c=ys(c,c.next),qr(o,t,e,i,s,r,0),qr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function i1(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Lf(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(u1(l));for(s.sort(s1),r=0;r<s.length;r++)e=r1(s[r],e);return e}function s1(n,t){return n.x-t.x}function r1(n,t){const e=o1(n,t);if(!e)return t;const i=kf(e,n);return ys(i,i.next),ys(e,e.next)}function o1(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Zs(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Yr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&a1(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function a1(n,t){return Me(n.prev,n,t.prev)<0&&Me(t.next,n,n.next)<0}function c1(n,t,e,i){let s=n;do s.z===0&&(s.z=dl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,l1(s)}function l1(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function dl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function u1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Zs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function h1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!d1(n,t)&&(Yr(n,t)&&Yr(t,n)&&f1(n,t)&&(Me(n.prev,n,t.prev)||Me(n,t.prev,t))||Ea(n,t)&&Me(n.prev,n,n.next)>0&&Me(t.prev,t,t.next)>0)}function Me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ea(n,t){return n.x===t.x&&n.y===t.y}function Df(n,t,e,i){const s=Uo(Me(n,t,e)),r=Uo(Me(n,t,i)),o=Uo(Me(e,i,n)),a=Uo(Me(e,i,t));return!!(s!==r&&o!==a||s===0&&No(n,e,t)||r===0&&No(n,i,t)||o===0&&No(e,n,i)||a===0&&No(e,t,i))}function No(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Uo(n){return n>0?1:n<0?-1:0}function d1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Yr(n,t){return Me(n.prev,n,n.next)<0?Me(n,t,n.next)>=0&&Me(n,n.prev,t)>=0:Me(n,t,n.prev)<0||Me(n,n.next,t)<0}function f1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function kf(n,t){const e=new fl(n.i,n.x,n.y),i=new fl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function lh(n,t,e,i){const s=new fl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Hi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Hi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];uh(t),hh(i,t);let o=t.length;e.forEach(uh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,hh(i,e[c]);const a=Jv.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function uh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function hh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class io extends Ue{constructor(t=new Ts([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:m1;let M,x=!1,C,w,T,R;p&&(M=p.getSpacedPoints(u),x=!0,d=!1,C=p.computeFrenetFrames(u,!1),w=new L,T=new L,R=new L),d||(m=0,f=0,g=0,_=0);const S=a.extractPoints(l);let y=S.shape;const P=S.holes;if(!Hi.isClockWise(y)){y=y.reverse();for(let j=0,rt=P.length;j<rt;j++){const I=P[j];Hi.isClockWise(I)&&(P[j]=I.reverse())}}const U=Hi.triangulateShape(y,P),H=y;for(let j=0,rt=P.length;j<rt;j++){const I=P[j];y=y.concat(I)}function X(j,rt,I){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,I)}const W=y.length,Z=U.length;function V(j,rt,I){let It,et,yt;const ct=j.x-rt.x,Ut=j.y-rt.y,_t=I.x-j.x,A=I.y-j.y,b=ct*ct+Ut*Ut,F=ct*A-Ut*_t;if(Math.abs(F)>Number.EPSILON){const q=Math.sqrt(b),Q=Math.sqrt(_t*_t+A*A),Y=rt.x-Ut/q,Tt=rt.y+ct/q,ht=I.x-A/Q,vt=I.y+_t/Q,jt=((ht-Y)*A-(vt-Tt)*_t)/(ct*A-Ut*_t);It=Y+ct*jt-j.x,et=Tt+Ut*jt-j.y;const it=It*It+et*et;if(it<=2)return new st(It,et);yt=Math.sqrt(it/2)}else{let q=!1;ct>Number.EPSILON?_t>Number.EPSILON&&(q=!0):ct<-Number.EPSILON?_t<-Number.EPSILON&&(q=!0):Math.sign(Ut)===Math.sign(A)&&(q=!0),q?(It=-Ut,et=ct,yt=Math.sqrt(b)):(It=ct,et=Ut,yt=Math.sqrt(b/2))}return new st(It/yt,et/yt)}const at=[];for(let j=0,rt=H.length,I=rt-1,It=j+1;j<rt;j++,I++,It++)I===rt&&(I=0),It===rt&&(It=0),at[j]=V(H[j],H[I],H[It]);const dt=[];let xt,Ft=at.concat();for(let j=0,rt=P.length;j<rt;j++){const I=P[j];xt=[];for(let It=0,et=I.length,yt=et-1,ct=It+1;It<et;It++,yt++,ct++)yt===et&&(yt=0),ct===et&&(ct=0),xt[It]=V(I[It],I[yt],I[ct]);dt.push(xt),Ft=Ft.concat(xt)}for(let j=0;j<m;j++){const rt=j/m,I=f*Math.cos(rt*Math.PI/2),It=g*Math.sin(rt*Math.PI/2)+_;for(let et=0,yt=H.length;et<yt;et++){const ct=X(H[et],at[et],It);tt(ct.x,ct.y,-I)}for(let et=0,yt=P.length;et<yt;et++){const ct=P[et];xt=dt[et];for(let Ut=0,_t=ct.length;Ut<_t;Ut++){const A=X(ct[Ut],xt[Ut],It);tt(A.x,A.y,-I)}}}const Qt=g+_;for(let j=0;j<W;j++){const rt=d?X(y[j],Ft[j],Qt):y[j];x?(T.copy(C.normals[0]).multiplyScalar(rt.x),w.copy(C.binormals[0]).multiplyScalar(rt.y),R.copy(M[0]).add(T).add(w),tt(R.x,R.y,R.z)):tt(rt.x,rt.y,0)}for(let j=1;j<=u;j++)for(let rt=0;rt<W;rt++){const I=d?X(y[rt],Ft[rt],Qt):y[rt];x?(T.copy(C.normals[j]).multiplyScalar(I.x),w.copy(C.binormals[j]).multiplyScalar(I.y),R.copy(M[j]).add(T).add(w),tt(R.x,R.y,R.z)):tt(I.x,I.y,h/u*j)}for(let j=m-1;j>=0;j--){const rt=j/m,I=f*Math.cos(rt*Math.PI/2),It=g*Math.sin(rt*Math.PI/2)+_;for(let et=0,yt=H.length;et<yt;et++){const ct=X(H[et],at[et],It);tt(ct.x,ct.y,h+I)}for(let et=0,yt=P.length;et<yt;et++){const ct=P[et];xt=dt[et];for(let Ut=0,_t=ct.length;Ut<_t;Ut++){const A=X(ct[Ut],xt[Ut],It);x?tt(A.x,A.y+M[u-1].y,M[u-1].x+I):tt(A.x,A.y,h+I)}}}G(),J();function G(){const j=s.length/3;if(d){let rt=0,I=W*rt;for(let It=0;It<Z;It++){const et=U[It];St(et[2]+I,et[1]+I,et[0]+I)}rt=u+m*2,I=W*rt;for(let It=0;It<Z;It++){const et=U[It];St(et[0]+I,et[1]+I,et[2]+I)}}else{for(let rt=0;rt<Z;rt++){const I=U[rt];St(I[2],I[1],I[0])}for(let rt=0;rt<Z;rt++){const I=U[rt];St(I[0]+W*u,I[1]+W*u,I[2]+W*u)}}i.addGroup(j,s.length/3-j,0)}function J(){const j=s.length/3;let rt=0;lt(H,rt),rt+=H.length;for(let I=0,It=P.length;I<It;I++){const et=P[I];lt(et,rt),rt+=et.length}i.addGroup(j,s.length/3-j,1)}function lt(j,rt){let I=j.length;for(;--I>=0;){const It=I;let et=I-1;et<0&&(et=j.length-1);for(let yt=0,ct=u+m*2;yt<ct;yt++){const Ut=W*yt,_t=W*(yt+1),A=rt+It+Ut,b=rt+et+Ut,F=rt+et+_t,q=rt+It+_t;Lt(A,b,F,q)}}}function tt(j,rt,I){c.push(j),c.push(rt),c.push(I)}function St(j,rt,I){kt(j),kt(rt),kt(I);const It=s.length/3,et=v.generateTopUV(i,s,It-3,It-2,It-1);Gt(et[0]),Gt(et[1]),Gt(et[2])}function Lt(j,rt,I,It){kt(j),kt(rt),kt(It),kt(rt),kt(I),kt(It);const et=s.length/3,yt=v.generateSideWallUV(i,s,et-6,et-3,et-2,et-1);Gt(yt[0]),Gt(yt[1]),Gt(yt[3]),Gt(yt[1]),Gt(yt[2]),Gt(yt[3])}function kt(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Gt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return g1(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new la[s.type]().fromJSON(s)),new io(i,t.options)}}const m1={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new st(r,o),new st(a,c),new st(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new st(o,1-c),new st(l,1-h),new st(d,1-g),new st(_,1-p)]:[new st(a,1-c),new st(u,1-h),new st(f,1-g),new st(m,1-p)]}};function g1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ua extends no{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ua(t.radius,t.detail)}}class so extends no{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new so(t.radius,t.detail)}}class vr extends Ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new L,g=new st;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,M=v,x=v+i+1,C=v+i+2,w=v+1;a.push(M,x,w),a.push(x,C,w)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hl extends Ue{constructor(t=new Ts([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const g=d.holes;Hi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];Hi.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=Hi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],M=v[0]+h,x=v[1]+h,C=v[2]+h;i.push(M,x,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return x1(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Hl(i,t.curveSegments)}}function x1(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class vi extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],M=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const w=C/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-M),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const M=u[p][v+1],x=u[p][v],C=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&f.push(M,x,w),(p!==i-1||c<Math.PI)&&f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mr extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new L,h=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gl extends Ue{constructor(t=new Pf(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new st;let u=new L;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),v(),p()}function m(M){u=t.getPointAt(M/e,u);const x=o.normals[M],C=o.binormals[M];for(let w=0;w<=s;w++){const T=w/s*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);c.x=S*x.x+R*C.x,c.y=S*x.y+R*C.y,c.z=S*x.z+R*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const C=(s+1)*(M-1)+(x-1),w=(s+1)*M+(x-1),T=(s+1)*M+x,R=(s+1)*(M-1)+x;g.push(C,w,R),g.push(w,T,R)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)l.x=M/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gl(new la[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Mi extends pr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pl extends pr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vl extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _1 extends Vl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const hc=new _e,dh=new L,fh=new L;class Nf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ph=new _e,Lr=new L,dc=new L;class v1 extends Nf{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lr),dc.copy(i.position),dc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(dc),i.updateMatrixWorld(),s.makeTranslation(-Lr.x,-Lr.y,-Lr.z),ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph)}}class wa extends Vl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new v1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class M1 extends Nf{constructor(){super(new Mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y1 extends Vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new M1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);function je(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function S1(n,t){let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function yr(n=1337){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function b1(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ha(n,t,e){return t+n()*(e-t)}const Pn=252,gs=-Pn,E1=Pn,Kr=8.5,Zr=-302,Nn=112,da=-422,ui={x:0,z:-400},w1=6,T1=Nn+w1,Ii={...ui},A1=4,Re={x:0,z:gs+A1},Wl=26,R1=44,C1=6.2,P1=Wl/2+1,mh=3,I1=9,L1=30,D1=4.6,k1=Re.z,ds=34,fc=Pn,N1=22,Oo=8,gh=3.6,U1=ds+26,O1=60,F1=5.2,z1=ds-4,B1=5,H1=gs+2,G1=Zr-6,V1=30,W1=22,Fo=Kr+1,$1=5,X1=da,xh=7.4,ml=38;function q1(n){const t=n-ui.z;return Math.sqrt(Math.max(1,Nn*Nn-t*t))}const _h=520,er={x:0,z:0,r:14},Y1={x:0,z:6},$i={x:17,z:9},j1=5.4,vh={x:$i.x-1.5,z:$i.z+6.2},K1=[{x:-16,z:-6,rot:.35},{x:15,z:-9,rot:-.4},{x:-4,z:-19,rot:.1}],Z1=4.6,J1=[{x:0,z:-40,w:6,d:80},{x:40,z:0,w:80,d:6}],me={x:-48,z:26,r:26,island:8},Q1=1.5,ve={x:-178,z:162,r:80},Te={x:176,z:-178,r:76},be={x:186,z:130,r:76},$e={sea:{x:-214,z:206},volc:{x:212,z:-220},ice:{x:224,z:170}},Gi={...$e.sea,r:13},Uf=9,Mh=11,tM=2.1,eM=1.7;function nM(n){const t=(n+1)/(Uf+1);return{x:ve.x+(Gi.x-ve.x)*t+Math.sin(n*tM)*Mh,z:ve.z+(Gi.z-ve.z)*t+Math.cos(n*eM)*Mh}}const iM=[{x:-181.6,z:177.4},{x:-175.704697,z:169.382711},{x:-198.387333,z:164.56522},{x:-192.215047,z:183.757755},{x:-186.599412,z:193.563372},{x:-209.276653,z:181.777869},{x:-202.830146,z:184.943078},{x:-197.496785,z:205.846773},{x:-220.163237,z:207.228744}],gl={min:4.6,max:6.8},sM={count:9,center:Te,radialFactor:.85,radiusMin:4,radiusMax:10},Gr={...$e.volc,r:9},fa=17,rM=10,oM=8,xs={seaBrokenColumns:{count:5,ringR:9,colliderR:1.3},volcSpires:{count:40,colliderR:1.2},volcArenaSpires:{count:rM,ringR:fa,colliderR:2},iceSpikes:{count:44,colliderR:1},iceTrees:{count:22,rFactorMin:.3,rFactorMax:1,colliderR:1.3},iceArenaSpires:{count:oM,ringR:fa,colliderR:1.8},seaReeds:{count:70,rFactorMin:.82,rFactorMax:1.02}},pc={edgeClouds:{count:140,rMin:Nn+2,rSpan:24},floatingIslands:{count:16,rMin:34,rSpan:Nn-52,yMin:12,ySpan:26},colonnade:{count:28,rFactor:.8,colliderR:1.9}},sa=34,aM={sea:14,volc:15,ice:15},mc=48,cM=.3,lM=2.4,uM=4.6,hM=2.9,yh=6,dM=.52,Sh=.55;function fM(n,t){return Math.atan2(t.z-n.z,t.x-n.x)}const Of=[{id:"sea",x:$e.sea.x,z:$e.sea.z,r:sa,biome:ve},{id:"volc",x:$e.volc.x,z:$e.volc.z,r:sa,biome:Te},{id:"ice",x:$e.ice.x,z:$e.ice.z,r:sa,biome:be}],xn=.55,$s=.94,pM=34,bh=4.2,mM=.4,gM=3.4,xl=[{ax:6,az:4,bx:ve.x*xn,bz:ve.z*xn,w:5.5},{ax:ve.x*xn,az:ve.z*xn,bx:$e.sea.x*$s,bz:$e.sea.z*$s,w:5},{ax:6,az:-4,bx:Te.x*xn,bz:Te.z*xn,w:5.5},{ax:Te.x*xn,az:Te.z*xn,bx:$e.volc.x*$s,bz:$e.volc.z*$s,w:5},{ax:10,az:2,bx:be.x*xn,bz:be.z*xn,w:5.5},{ax:be.x*xn,az:be.z*xn,bx:$e.ice.x*$s,bz:$e.ice.z*$s,w:5}],nn={count:430,rMin:20,rSpan:228,wildStart:120,wildSpan:110,treeChanceBase:.74,treeChanceWildPenalty:.62,roadClearHalf:9,lakePad:3,biomePad:6,castlePad:12,pathPad:7},xM=1.3,_M=1.5,dn={baseSpeed:7.2,sprintMul:1.65,jumpSpeed:9.2,gravity:26,playerRadius:.9,inputDeadzone:.12,landImpactVy:-6,landImpactNorm:22},Eh={groundY:-1.1,speedMul:.42},wh={groundY:.45,speedMul:1.6},vM=.001;function Ff(n,t){if(n.z>=gs){const l=MM(n.x,-Pn,Pn),u=Math.min(n.z,E1);return l===n.x&&u===n.z?n:{x:l,z:u}}if(t.isPlayer&&!t.gates.heavenOpen)return{x:n.x,z:gs};let e=n.x,i=n.z;const s=e-ui.x,r=i-ui.z,o=Math.hypot(s,r),a=Math.abs(e)<=Kr&&i>=Zr,c=o<=Nn;return!a&&!c&&(i>=Zr?i=gs:o>vM&&(e=ui.x+s/o*Nn,i=ui.z+r/o*Nn)),t.isPlayer&&!t.gates.innerOpen&&i<da&&(i=da),e===n.x&&i===n.z?n:{x:e,z:i}}function MM(n,t,e){return n<t?t:n>e?e:n}function pa(n){return n.z>=gs?"mainland":n.z<da?"inner":n.z>=Zr&&Math.abs(n.x)<=Kr?"bridge":"heaven"}function zf(n,t){return n===t?!0:n==="bridge"||t==="bridge"||n==="heaven"&&t==="inner"||n==="inner"&&t==="heaven"}const Bf=150,Ta={slime:{name:"슬라임",lv:1,hp:34,dmg:6,xp:16,gold:4,color:6474058,scale:.62,speed:3.4,aggro:11,reach:2.2,cd:1.3,hop:!0,model:"buildSlime",ph:2.6},bat:{name:"핏빛 박쥐",lv:3,hp:30,dmg:9,xp:26,gold:8,color:6965888,scale:.9,speed:7.6,aggro:17,reach:2.2,cd:.9,fly:2.6,model:"buildBat",ph:4},goblin:{name:"고블린",lv:4,hp:70,dmg:11,xp:38,gold:11,color:9395913,scale:.85,speed:4.6,aggro:15,reach:2.6,cd:1.1},wolf:{name:"서리 늑대",lv:6,hp:98,dmg:16,xp:62,gold:21,color:6975616,scale:.95,speed:7,aggro:20,reach:2.8,cd:1,model:"buildWolf",ph:3.4},spider:{name:"거대 거미",lv:7,hp:135,dmg:18,xp:78,gold:27,color:3813440,scale:1.1,speed:5.2,aggro:16,reach:2.9,cd:1.2,slow:!0,model:"buildSpider",ph:3.2},golem:{name:"돌 골렘",lv:8,hp:180,dmg:23,xp:112,gold:40,color:9146261,scale:1.45,speed:2.9,aggro:14,reach:3.6,cd:1.7},ghost:{name:"원혼",lv:9,hp:125,dmg:21,xp:98,gold:36,color:12572904,scale:1,speed:4.4,aggro:19,reach:2.6,cd:1.2,fly:1.6,ghost:!0,model:"buildGhost",ph:4.2},skel:{name:"해골 병사",lv:11,hp:270,dmg:29,xp:175,gold:64,color:14209728,scale:1.05,speed:4.4,aggro:16,reach:3,cd:1.1},mage:{name:"다크 메이지",lv:13,hp:215,dmg:35,xp:245,gold:95,color:5909120,scale:1,speed:3.6,aggro:26,reach:20,cd:1.9,ranged:!0},gslime:{name:"황금 슬라임",lv:15,hp:230,dmg:30,xp:330,gold:230,color:16765514,scale:1,speed:5.6,aggro:18,reach:2.6,cd:1,hop:!0},troll:{name:"동굴 트롤",lv:16,hp:650,dmg:44,xp:440,gold:175,color:5929541,scale:1.75,speed:3.4,aggro:16,reach:4,cd:1.6,regen:7},lava:{name:"용암 정령",lv:19,hp:820,dmg:57,xp:660,gold:290,color:16742970,scale:1.3,speed:4.2,aggro:18,reach:3.4,cd:1.3,burn:!0,fly:.8,model:"buildLava",ph:4.4},jelly:{name:"가시 해파리",lv:21,hp:340,dmg:38,xp:520,gold:150,color:9427184,scale:1.15,speed:4,aggro:18,reach:3,cd:1.2,fly:1.4,slow:!0,model:"buildJelly",ph:4.6},crab:{name:"심해 게",lv:23,hp:780,dmg:46,xp:700,gold:210,color:12079162,scale:1.25,speed:4.4,aggro:17,reach:3.4,cd:1.3},hound:{name:"마그마 하운드",lv:25,hp:640,dmg:52,xp:820,gold:250,color:12862490,scale:1.05,speed:8.2,aggro:22,reach:3,cd:.9,burn:!0,model:"buildWolf",ph:3.4},ash:{name:"재의 정령",lv:27,hp:980,dmg:60,xp:1e3,gold:320,color:16742970,scale:1.55,speed:4.4,aggro:19,reach:3.6,cd:1.3,burn:!0,fly:1,model:"buildLava",ph:4.6},icee:{name:"얼음 정령",lv:26,hp:900,dmg:55,xp:900,gold:290,color:11066608,scale:1.35,speed:4.6,aggro:19,reach:3.4,cd:1.2,slow:!0,fly:.9,model:"buildIceElem",ph:4.4},wraith:{name:"눈보라 망령",lv:28,hp:820,dmg:64,xp:1100,gold:360,color:13625590,scale:1.3,speed:5.6,aggro:24,reach:20,cd:1.6,ranged:!0,slow:!0,ghost:!0,fly:2,model:"buildGhost",ph:4.4},levi:{name:"심연의 리바이어던",lv:45,hp:14e3,dmg:130,xp:16e3,gold:9e3,color:1924206,scale:1.5,speed:5.4,aggro:44,reach:26,cd:1.4,ranged:!0,slow:!0,boss:!0,world:!0,rank:"world",unlock:"trident",model:"buildLeviathan",ph:11},magma:{name:"용암의 군주",lv:52,hp:19e3,dmg:165,xp:24e3,gold:14e3,color:16738842,scale:1.35,speed:4.2,aggro:40,reach:6.5,cd:1.6,burn:!0,boss:!0,world:!0,rank:"world",unlock:"magmablade",model:"buildMagmaLord",ph:13},angel:{name:"천사",lv:62,hp:1500,dmg:150,xp:5200,gold:1800,color:15791098,scale:1.25,speed:5,reach:3.4,cd:1.5,model:"buildAngel",kind:"angel",ph:5.6},wangel:{name:"전투천사",lv:68,hp:2600,dmg:200,xp:9e3,gold:3200,color:13620964,scale:1.4,speed:5.4,reach:4.6,cd:1.4,model:"buildWarAngel",kind:"angel",ph:6.4},gabriel:{name:"대천사 가브리엘",lv:78,hp:42e3,dmg:280,xp:7e4,gold:45e3,color:16769162,scale:1.9,speed:5.2,aggro:40,reach:6.5,cd:1.5,boss:!0,world:!0,rank:"world",unlock:"judgement",model:"buildGabriel",kind:"angel",ph:9.5},creator:{name:"조물주",lv:90,hp:9e4,dmg:360,xp:2e5,gold:15e4,color:16774872,scale:1.6,speed:3.4,aggro:46,reach:9,cd:1.8,boss:!0,world:!0,rank:"final",model:"buildCreator",kind:"creator",ph:20},frost:{name:"빙하의 군주",lv:58,hp:24e3,dmg:195,xp:34e3,gold:2e4,color:10474732,scale:1.4,speed:4.6,aggro:42,reach:24,cd:1.5,ranged:!0,slow:!0,boss:!0,world:!0,rank:"world",unlock:"frostspear",model:"buildFrostLord",ph:14},dragon:{name:"고대 드래곤",lv:30,hp:4600,dmg:98,xp:4200,gold:3200,color:6961792,scale:2,speed:5,aggro:34,reach:22,cd:1.5,ranged:!0,burn:!0,boss:!0,rank:"normal",model:"buildDragon",ph:8.5}},yM=Ta;function Pe(n){return yM[n]}function js(n){return Object.prototype.hasOwnProperty.call(Ta,n)}const Hf=7,Gf=24;function SM(n){return n.boss?Gf:Hf}const bM=2.5,EM=3,gc={levi:{name:"해일",color:5232872,ring:6283504},magma:{name:"분화",color:16742954,ring:16751162},frost:{name:"절대영도",color:10479871,ring:12578815}},Th=[.7,.4],wM=4.2,Ah=[{x:-214,z:206,r:34},{x:212,z:-220,r:34},{x:224,z:170,r:34}],TM=3,Rh=7,Vf=[{type:"slime",x:0,z:-42,r:20,count:7,region:"mainland"},{type:"bat",x:34,z:-58,r:18,count:8,region:"mainland"},{type:"goblin",x:-48,z:-52,r:20,count:6,region:"mainland"},{type:"wolf",x:-18,z:-80,r:20,count:7,region:"mainland"},{type:"spider",x:72,z:-52,r:18,count:6,region:"mainland"},{type:"golem",x:52,z:-14,r:18,count:3,region:"mainland"},{type:"ghost",x:-82,z:-12,r:18,count:6,region:"mainland"},{type:"skel",x:76,z:24,r:20,count:7,region:"mainland"},{type:"mage",x:22,z:-92,r:16,count:5,region:"mainland"},{type:"gslime",x:-48,z:26,r:6,count:3,region:"mainland"},{type:"troll",x:-76,z:-84,r:18,count:4,region:"mainland"},{type:"lava",x:86,z:-86,r:16,count:4,region:"mainland"},{type:"dragon",x:-84,z:78,r:8,count:1,region:"mainland"},{type:"jelly",x:-184,z:158,r:30,count:8,region:"sea"},{type:"crab",x:-164,z:178,r:24,count:6,region:"sea"},{type:"levi",x:-214,z:206,r:3,count:1,region:"sea"},{type:"hound",x:168,z:-172,r:28,count:7,region:"volcano"},{type:"ash",x:188,z:-190,r:24,count:5,region:"volcano"},{type:"magma",x:212,z:-220,r:3,count:1,region:"volcano"},{type:"icee",x:178,z:124,r:28,count:7,region:"ice"},{type:"wraith",x:198,z:142,r:24,count:5,region:"ice"},{type:"frost",x:224,z:170,r:3,count:1,region:"ice"},{type:"wolf",x:-96,z:150,r:34,count:3,region:"mainland"},{type:"spider",x:-150,z:96,r:30,count:2,region:"sea"},{type:"jelly",x:-144,z:120,r:26,count:2,region:"sea"},{type:"crab",x:-196,z:150,r:22,count:2,region:"sea"},{type:"hound",x:132,z:-104,r:32,count:3,region:"mainland"},{type:"golem",x:186,z:-118,r:28,count:2,region:"volcano"},{type:"ash",x:198,z:-186,r:24,count:2,region:"volcano"},{type:"lava",x:150,z:-208,r:22,count:2,region:"volcano"},{type:"icee",x:118,z:158,r:30,count:3,region:"ice"},{type:"wraith",x:196,z:104,r:26,count:2,region:"ice"},{type:"skel",x:214,z:196,r:24,count:2,region:"ice"},{type:"troll",x:-140,z:-140,r:34,count:2,region:"mainland"},{type:"ghost",x:-206,z:-96,r:28,count:2,region:"mainland"},{type:"mage",x:-96,z:-196,r:26,count:2,region:"mainland"},{type:"gslime",x:-186,z:-186,r:22,count:2,region:"mainland"},{type:"dragon",x:206,z:36,r:12,count:2,region:"mainland"},{type:"angel",x:0,z:-344,r:40,count:7,region:"heaven"},{type:"angel",x:-58,z:-400,r:34,count:6,region:"heaven"},{type:"angel",x:58,z:-400,r:34,count:6,region:"heaven"},{type:"wangel",x:0,z:-384,r:30,count:5,region:"heaven"},{type:"wangel",x:-34,z:-446,r:26,count:4,region:"heaven"},{type:"wangel",x:34,z:-446,r:26,count:4,region:"heaven"},{type:"gabriel",x:0,z:-372,r:3,count:1,region:"heaven"},{type:"creator",x:0,z:-472,r:3,count:1,region:"heaven"}];function Wf(n,t,e=0){for(let i=0;i<Ah.length;i++){const s=Ah[i];if(s!==void 0&&Math.hypot(n-s.x,t-s.z)<s.r+e)return s}return null}function AM(n){return Pe(n).world===!0}function $f(n,t){const e=t()*Math.PI*2,i=t()*n.r;return{x:n.x+Math.cos(e)*i,z:n.z+Math.sin(e)*i}}function RM(n,t=TM){const e=Wf(n.x,n.z,t);if(!e)return n;const i=Math.atan2(n.z-e.z,n.x-e.x)||0;return{x:e.x+Math.cos(i)*(e.r+Rh),z:e.z+Math.sin(i)*(e.r+Rh)}}function CM(n,t){const e=AM(n.type),i=[];for(let s=0;s<n.count;s++){const r=$f(n,t);i.push(e?r:RM(r))}return i}const Xi={kiwi:{id:"kiwi",name:"키위새",icon:"🥝",desc:"끝내 날지 못했다. 대신 다리가 미쳤다.",stats:"이속 +70% · 공속 2배 · 데미지 55%",skill:"땅파기 — 잠깐 무적, HP 35% 회복",dmgMul:.55,cdMul:.45,spdMul:1.7,jumpMul:.62,goldMul:1,xpMul:1,hpBonus:0,spCd:9,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"creature",showWeapon:!1,col:{shirt:10121800,pants:7033139,skin:11569749}},sword:{id:"sword",name:"검사",icon:"⚔️",desc:"특별한 거 없다. 그래서 강하다.",stats:"데미지 +40% · 최대 HP +50",skill:"회전 베기 — 주변 전체에 2.4배",dmgMul:1.4,cdMul:1,spdMul:1,jumpMul:1,goldMul:1,xpMul:1,hpBonus:50,spCd:8,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!0,col:{shirt:10134706,pants:3818064,skin:15909002}},archer:{id:"archer",name:"궁수",icon:"🏹",desc:"맞기 전에 쏘면 안 맞는다.",stats:"원거리 공격 · 사거리 34",skill:"다중 사격 — 부채꼴 7발",dmgMul:1,cdMul:.8,spdMul:1.1,jumpMul:1,goldMul:1,xpMul:1,hpBonus:-5,spCd:7,ranged:!0,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!1,col:{shirt:4160826,pants:5982766,skin:15909002}},necro:{id:"necro",name:"네크로맨서",icon:"💀",desc:"죽인 걸 다시 부려먹는 게 효율적이다.",stats:"처치 시 45% 확률로 해골 소환 (최대 5)",skill:"망자 소집 — 해골 4체 즉시 소환",dmgMul:.85,cdMul:1,spdMul:1,jumpMul:1,goldMul:1,xpMul:1,hpBonus:-10,spCd:14,ranged:!1,water:!1,raise:.45,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!1,col:{shirt:4926064,pants:2759232,skin:14209728}},fish:{id:"fish",name:"간고등어",icon:"🐟",desc:"물 위를 걷는다. 자반이라 안 젖는다.",stats:"물 위 보행 · 물에서 데미지·이속 +60%, HP 재생",skill:"소금 뿌리기 — 장판 지속 피해",dmgMul:1,cdMul:.9,spdMul:1,jumpMul:1.1,goldMul:1,xpMul:1,hpBonus:20,spCd:8,ranged:!1,water:!0,raise:0,tripleJump:!1,fear:!1,rig:"creature",showWeapon:!1,col:{shirt:9414845,pants:6058887,skin:13228260}},parsley:{id:"parsley",name:"파슬리",icon:"🐸",desc:"부클레 니트로 뜬 개구리 인형. 손바느질 박음선까지 그대로다.",stats:"3단 점프 · 점프력 2.2배",skill:"혀 낚아채기 — 전방 적 전부 끌어당겨 강타",dmgMul:1.15,cdMul:.85,spdMul:1.15,jumpMul:2.2,goldMul:1,xpMul:1,hpBonus:10,spCd:6,ranged:!1,water:!1,raise:0,tripleJump:!0,fear:!1,rig:"creature",showWeapon:!0,col:{shirt:2768762,pants:2768762,skin:6080842}},boss:{id:"boss",name:"최종보스",icon:"👑",desc:"몹이 도망간다. 경험치는 거의 안 준다. 알아서 하세요.",stats:"데미지 2.6배 · 최대 HP +200 · 획득 XP 25%",skill:"멸망 — 반경 15 초토화",dmgMul:2.6,cdMul:1.15,spdMul:.95,jumpMul:1,goldMul:1,xpMul:.25,hpBonus:200,spCd:16,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!0,rig:"hero",showWeapon:!0,col:{shirt:1709600,pants:986388,skin:9117471}},alba:{id:"alba",name:"알바",icon:"🧹",desc:"주 15시간. 4대보험 없음. 골드는 잘 번다.",stats:"골드 3배 · 데미지 70%",skill:"퇴근 — 3초간 무적 + 이속 3배",dmgMul:.7,cdMul:.95,spdMul:1.05,jumpMul:1,goldMul:3,xpMul:1,hpBonus:0,spCd:12,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!1,col:{shirt:15262940,pants:3093824,skin:15909002}}},Xf=["kiwi","sword","archer","necro","fish","parsley","boss","alba"],$n={hp:100,level:1,need:60,sp:1,gold:0,xpCoef:60,xpExp:1.42,spPerLevel:1,spBonusEvery:5,spBonusPoints:2};function qf(n){return Math.round($n.xpCoef*Math.pow(n,$n.xpExp))}function PM(n){return Xi[n]}function IM(n){return Object.prototype.hasOwnProperty.call(Xi,n)}function LM(n){return n.skill.split(" —")[0]??n.skill}function DM(n){return{dmgMul:n.dmgMul,cdMul:n.cdMul,spdMul:n.spdMul,jumpMul:n.jumpMul,goldMul:n.goldMul,xpMul:n.xpMul,hp:n.hpBonus,spCd:n.spCd,...n.ranged?{ranged:!0}:{},...n.water?{water:!0}:{},...n.raise?{raise:n.raise}:{}}}function Sr(n){return DM(Xi[n])}const _l=["stick","mop","iron","dagger","great","spear","flame","baguette","trident","magmablade","judgement","frostspear"],Ch=Object.freeze({radius:4.5,dmgRatio:.45,skipsPrimaryTarget:!0}),zo=-1,Li={kind:"shop"},Ss={stick:{id:"stick",name:"나무 몽둥이",desc:"마을에서 그냥 주는 것. 없는 것보단 낫다.",price:0,dmg:0,unlock:Li},mop:{id:"mop",name:"물걸레",desc:"골드 획득 +30%. 알바는 이걸로도 잘 싸운다.",price:200,dmg:4,gold:.3,unlock:Li},iron:{id:"iron",name:"강철 검",desc:"평범하다. 평범한 게 제일 좋을 때가 있다.",price:600,dmg:14,unlock:Li},dagger:{id:"dagger",name:"단검",desc:"공격속도 +30% · 크리티컬 +6%",price:1400,dmg:10,atkSpeed:-.3,crit:.06,unlock:Li},great:{id:"great",name:"대검",desc:"공격속도 -22% · 사거리 +1",price:2600,dmg:38,atkSpeed:.22,reach:1,unlock:Li},spear:{id:"spear",name:"미스릴 창",desc:"사거리 +2.4. 맞기 전에 찌른다.",price:5200,dmg:52,reach:2.4,unlock:Li},flame:{id:"flame",name:"화염검",desc:"적중 시 주변에 화염이 번진다.",price:9e3,dmg:82,flame:Ch,unlock:Li},baguette:{id:"baguette",name:"전설의 바게트",desc:"누가 흘리고 간 건지는 모른다. 아직 바삭하다.",price:2e4,dmg:150,atkSpeed:-.1,crit:.15,unlock:Li},trident:{id:"trident",name:"심연의 삼지창",desc:"바다 밑바닥에서 건져 올린 것. 아직 젖어 있다.",price:zo,dmg:190,reach:3.2,unlock:{kind:"boss",bossId:"levi",bossName:"심연의 리바이어던"}},magmablade:{id:"magmablade",name:"용암의 대검",desc:"식지 않는다. 쥐고 있으면 손이 뜨겁다.",price:zo,dmg:300,atkSpeed:.18,flame:Ch,unlock:{kind:"boss",bossId:"magma",bossName:"용암의 군주"}},judgement:{id:"judgement",name:"심판의 대검",desc:"대천사의 검. 빛이 검신을 타고 흐른다.",price:zo,dmg:520,crit:.15,reach:2.4,unlock:{kind:"boss",bossId:"gabriel",bossName:"대천사 가브리엘"}},frostspear:{id:"frostspear",name:"서리의 창",desc:"닿은 자리가 하얗게 언다.",price:zo,dmg:400,crit:.22,reach:2.6,unlock:{kind:"boss",bossId:"frost",bossName:"빙하의 군주"}}},kM=[{id:"hp",name:"튼튼함",icon:"❤",desc:"최대 HP +${25*r}",max:5,tier:"기초",tierIndex:0,classId:null,effect:{kind:"maxHpFlat",perRank:25},implementedInOriginal:!0},{id:"str",name:"힘",icon:"💪",desc:"공격력 +${6*r}",max:5,tier:"기초",tierIndex:0,classId:null,effect:{kind:"attackFlat",perRank:6},implementedInOriginal:!0},{id:"spd",name:"신속",icon:"💨",desc:"이동속도 +${6*r}%",max:4,tier:"기초",tierIndex:0,classId:null,effect:{kind:"moveSpeedPct",perRank:.06},implementedInOriginal:!0},{id:"luck",name:"행운",icon:"🍀",desc:"골드 획득 +${20*r}%",max:3,tier:"기초",tierIndex:0,classId:null,effect:{kind:"goldGainPct",perRank:.2},implementedInOriginal:!0},{id:"crit",name:"예리함",icon:"🗡",desc:"크리티컬 확률 +${5*r}%",max:4,tier:"숙련",tierIndex:1,req:["str",2],classId:null,effect:{kind:"critChancePct",perRank:.05},implementedInOriginal:!0},{id:"regen",name:"재생",icon:"✚",desc:"초당 HP ${(1.2*r).toFixed(1)} 회복",max:3,tier:"숙련",tierIndex:1,req:["hp",2],classId:null,effect:{kind:"hpRegenPerSec",perRank:1.2},implementedInOriginal:!0},{id:"guard",name:"철벽",icon:"🛡",desc:"받는 피해 -${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["hp",3],classId:null,effect:{kind:"damageReductionPct",perRank:.08},implementedInOriginal:!0},{id:"evade",name:"회피",icon:"🌀",desc:"피격 회피 ${6*r}%",max:3,tier:"숙련",tierIndex:1,req:["spd",2],classId:null,effect:{kind:"evadeChancePct",perRank:.06,cap:.5},implementedInOriginal:!0,implNote:"원본은 Math.min(0.5, …) 상한을 건다. max 3랭크(18%)로는 닿지 않는다."},{id:"greed",name:"탐욕",icon:"💰",desc:"골드 획득 +${18*r}% · 경험치 +${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["luck",2],classId:null,effect:{kind:"composite",parts:[{kind:"goldGainPct",perRank:.18},{kind:"xpGainPct",perRank:.08}]},implementedInOriginal:!0},{id:"vamp",name:"흡혈",icon:"🩸",desc:"준 피해의 ${8*r}% 회복",max:3,tier:"통달",tierIndex:2,req:["crit",1],classId:null,effect:{kind:"lifestealPct",perRank:.08},implementedInOriginal:!0},{id:"brutal",name:"잔혹",icon:"💥",desc:"크리티컬 피해 +${25*r}%",max:4,tier:"통달",tierIndex:2,req:["crit",2],classId:null,effect:{kind:"critDamagePct",perRank:.25},implementedInOriginal:!0},{id:"bulwark",name:"불굴",icon:"🗿",desc:"HP 30% 이하일 때 받는 피해 -${15*r}%",max:3,tier:"통달",tierIndex:2,req:["guard",2],classId:null,effect:{kind:"damageReductionBelowHpPct",perRank:.15,hpThreshold:.3},implementedInOriginal:!1,implNote:'D-2. 원본 전체에서 rk("bulwark") 호출이 0회 — 공용 노드 중 유일한 미구현.'},{id:"swift",name:"질풍",icon:"⚡",desc:"공격속도 +${7*r}%",max:3,tier:"통달",tierIndex:2,req:["evade",2],classId:null,effect:{kind:"attackSpeedPct",perRank:.07},implementedInOriginal:!0},{id:"scholar",name:"현자",icon:"📖",desc:"경험치 획득 +${15*r}%",max:3,tier:"통달",tierIndex:2,req:["greed",1],classId:null,effect:{kind:"xpGainPct",perRank:.15},implementedInOriginal:!0},{id:"awake",name:"각성",icon:"✨",desc:"특수기 쿨타임 -${12*r}%",max:3,tier:"통달",tierIndex:2,classId:null,requiresAnyClass:!0,effect:{kind:"specialCooldownPct",perRank:.12},implementedInOriginal:!0,implNote:"원본 cReq:true — 직업 미선택 시 잠김(skState 2363)."},{id:"apex",name:"정점",icon:"👑",desc:"모든 능력치 +8% · 특수기 쿨타임 -15%",max:1,tier:"궁극",tierIndex:3,req:["awake",2],classId:null,cap:!0,effect:{kind:"composite",parts:[{kind:"allStatsPct",perRank:.08},{kind:"specialCooldownPct",perRank:.15}]},implementedInOriginal:!0,implNote:"AX(=1+0.08) 는 maxHp·dmg·spdB 에만 곱해진다. crit/guard/cdB 등에는 안 들어간다."}],NM=[{id:"dash",name:"질주",icon:"🏃",desc:"이동속도 +${12*r}%",max:3,tier:"기초",tierIndex:0,classId:"kiwi",effect:{kind:"moveSpeedPct",perRank:.12},implementedInOriginal:!0},{id:"peck",name:"부리 연타",icon:"🐦",desc:"공격속도 +${10*r}%",max:3,tier:"기초",tierIndex:0,classId:"kiwi",effect:{kind:"attackSpeedPct",perRank:.1},implementedInOriginal:!0},{id:"dig",name:"굴 파기",icon:"⛏",desc:"땅파기 회복 +${15*r}%p · 무적 +${(0.4*r).toFixed(1)}초",max:3,tier:"숙련",tierIndex:1,req:["dash",1],classId:"kiwi",effect:{kind:"composite",parts:[{kind:"specialHealPctBonus",perRank:.15},{kind:"specialInvulBonusSec",perRank:.4}]},implementedInOriginal:!0},{id:"glide",name:"활공",icon:"🪶",desc:"점프 높이 +${12*r}% · 낙하 속도 -${10*r}%",max:3,tier:"숙련",tierIndex:1,req:["dash",2],classId:"kiwi",effect:{kind:"composite",parts:[{kind:"jumpHeightPct",perRank:.12},{kind:"fallSpeedReductionPct",perRank:.1}]},implementedInOriginal:!0,implNote:"점프 높이만 구현. 낙하 속도 감소는 원본 물리에 없다."},{id:"flock",name:"무리 본능",icon:"🐤",desc:"주변 적 ${r}명당 공격력 +${5*r}%",max:3,tier:"통달",tierIndex:2,req:["peck",2],classId:"kiwi",effect:{kind:"attackPctPerNearbyEnemy",perRank:.05,enemyCountPerRank:1},implementedInOriginal:!1,implNote:"D-2. 설명상 묶음 크기(r명)와 배율(5r%)이 둘 다 랭크에 비례한다 — 구현 전 원저작자 확인 필요."},{id:"sprint",name:"폭주",icon:"🌪",desc:"달리기 중 공격력 +${15*r}%",max:3,tier:"통달",tierIndex:2,req:["glide",1],classId:"kiwi",effect:{kind:"attackPctWhileSprinting",perRank:.15},implementedInOriginal:!1,implNote:"D-2. 원본에 달리기 판정(tick 5724 sprint)은 있으나 이 노드와 연결되지 않았다."},{id:"kiwiX",name:"거대 키위",icon:"🥝",desc:"모든 이동 관련 효과 2배 · 이단 점프 해금",max:1,tier:"궁극",tierIndex:3,req:["sprint",2],classId:"kiwi",cap:!0,effect:{kind:"composite",parts:[{kind:"movementEffectMultiplier",value:2},{kind:"extraJumpFlat",perRank:1}]},implementedInOriginal:!0,implNote:"2배가 적용되는 것은 dash 뿐이다. spd·curr 은 그대로다. 이단 점프는 구현됨."},{id:"rage",name:"광폭화",icon:"😡",desc:"HP 50% 이하일 때 공격력 +${20*r}%",max:3,tier:"기초",tierIndex:0,classId:"sword",effect:{kind:"attackPctBelowHp",perRank:.2,hpThreshold:.5},implementedInOriginal:!0},{id:"plate",name:"중갑",icon:"🛡",desc:"최대 HP +${35*r}",max:3,tier:"기초",tierIndex:0,classId:"sword",effect:{kind:"maxHpFlat",perRank:35},implementedInOriginal:!0},{id:"whirl",name:"대회전",icon:"🌀",desc:"회전 베기 반경 +${1.5*r} · 피해 +${30*r}%",max:3,tier:"숙련",tierIndex:1,req:["rage",1],classId:"sword",effect:{kind:"composite",parts:[{kind:"specialRadiusFlat",perRank:1.5},{kind:"specialDamagePct",perRank:.3}]},implementedInOriginal:!0},{id:"parry",name:"받아넘기기",icon:"⚔",desc:"받는 피해 -${7*r}% · 반사 ${10*r}%",max:3,tier:"숙련",tierIndex:1,req:["plate",2],classId:"sword",effect:{kind:"composite",parts:[{kind:"damageReductionPct",perRank:.07},{kind:"reflectPct",perRank:.1}]},implementedInOriginal:!0,implNote:"반쪽 구현. P.reflect(2333)는 대입만 되고 어디서도 읽히지 않아 반사 효과는 무효다."},{id:"cleave",name:"참격",icon:"🩸",desc:"공격이 뒤쪽 적에게 ${25*r}% 피해",max:3,tier:"통달",tierIndex:2,req:["whirl",2],classId:"sword",effect:{kind:"rearSplashPct",perRank:.25},implementedInOriginal:!1,implNote:"D-2. doAttack 은 전방 판정(fwd.dot ≥ 0.15)만 한다."},{id:"temper",name:"단련",icon:"🔨",desc:"무기 공격력 +${12*r}%",max:3,tier:"통달",tierIndex:2,req:["parry",1],classId:"sword",effect:{kind:"weaponAttackPct",perRank:.12},implementedInOriginal:!0,implNote:"원본은 무기 데미지가 아니라 총 공격력 배수로 적용한다(맨손에도 붙는다)."},{id:"swordX",name:"검성",icon:"🗡",desc:"3연타 마무리가 광역 폭발 · 콤보 피해 +40%",max:1,tier:"궁극",tierIndex:3,req:["cleave",2],classId:"sword",cap:!0,effect:{kind:"composite",parts:[{kind:"comboFinisherExplosion"},{kind:"comboDamagePct",perRank:.4}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나. 콤보 시스템(P.combo)은 존재한다."},{id:"pierce",name:"관통",icon:"➶",desc:"화살이 적 ${r}명 더 관통",max:3,tier:"기초",tierIndex:0,classId:"archer",effect:{kind:"pierceCountFlat",perRank:1},implementedInOriginal:!0},{id:"rapid",name:"속사",icon:"⚡",desc:"공격속도 +${12*r}%",max:3,tier:"기초",tierIndex:0,classId:"archer",effect:{kind:"attackSpeedPct",perRank:.12},implementedInOriginal:!0},{id:"volley",name:"화살비",icon:"🌧",desc:"다중 사격 +${2*r}발",max:3,tier:"숙련",tierIndex:1,req:["rapid",1],classId:"archer",effect:{kind:"specialProjectileFlat",perRank:2},implementedInOriginal:!0},{id:"snipe",name:"저격",icon:"🎯",desc:"먼 적일수록 피해 +최대 ${20*r}%",max:3,tier:"숙련",tierIndex:1,req:["pierce",2],classId:"archer",effect:{kind:"attackPctByDistance",perRank:.2},implementedInOriginal:!1,implNote:"D-2."},{id:"venom",name:"맹독시",icon:"🧪",desc:"화살에 초당 ${4*r} 중독 피해",max:3,tier:"통달",tierIndex:2,req:["snipe",1],classId:"archer",effect:{kind:"poisonDps",perRank:4},implementedInOriginal:!1,implNote:"D-2. 몹 지속 피해 틀(burnT)은 플레이어 쪽에만 있고 몹에는 없다."},{id:"kite",name:"견제",icon:"🪁",desc:"공격 후 이동속도 +${14*r}% (2초)",max:3,tier:"통달",tierIndex:2,req:["volley",2],classId:"archer",effect:{kind:"moveSpeedAfterAttackPct",perRank:.14,durationSec:2},implementedInOriginal:!1,implNote:"D-2."},{id:"archX",name:"폭풍의 궁",icon:"🏹",desc:"화살이 모두 관통 · 사격 속도 +50%",max:1,tier:"궁극",tierIndex:3,req:["venom",2],classId:"archer",cap:!0,effect:{kind:"composite",parts:[{kind:"pierceAll"},{kind:"attackSpeedPct",perRank:.5}]},implementedInOriginal:!0,implNote:'반쪽 구현. 관통은 미적용(4439 는 rk("pierce")만 본다). 속도는 P.cdB ×0.5 라 설명(+50%)보다 큰 실질 +100%.'},{id:"legion",name:"군단",icon:"💀",desc:"해골 최대치 +${2*r}",max:3,tier:"기초",tierIndex:0,classId:"necro",effect:{kind:"minionCapFlat",perRank:2},implementedInOriginal:!0},{id:"bone",name:"백골 강화",icon:"🦴",desc:"해골 공격력 +${25*r}%",max:3,tier:"기초",tierIndex:0,classId:"necro",effect:{kind:"minionDamagePct",perRank:.25},implementedInOriginal:!0},{id:"rite",name:"강령술",icon:"🕯",desc:"소환 확률 +${15*r}%p",max:3,tier:"숙련",tierIndex:1,req:["legion",1],classId:"necro",effect:{kind:"summonChancePct",perRank:.15},implementedInOriginal:!0},{id:"curse",name:"저주",icon:"🌑",desc:"적 방어 -${12*r}% · 이동속도 -${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["bone",2],classId:"necro",effect:{kind:"composite",parts:[{kind:"enemyDefenseReductionPct",perRank:.12},{kind:"enemySlowPct",perRank:.08}]},implementedInOriginal:!1,implNote:"D-2. 몹에 방어력 개념 자체가 없다(MOBTYPES 에 def 필드 없음)."},{id:"harvest",name:"영혼 수확",icon:"👻",desc:"처치 시 HP +${8*r} · 해골 즉시 소환 ${10*r}%",max:3,tier:"통달",tierIndex:2,req:["rite",2],classId:"necro",effect:{kind:"composite",parts:[{kind:"healOnKillFlat",perRank:8},{kind:"summonOnKillChancePct",perRank:.1}]},implementedInOriginal:!1,implNote:"D-2. 같은 killMob 안에 feast/rite 는 있는데 harvest 만 빠졌다."},{id:"plague",name:"역병",icon:"☠",desc:"저주가 주변 ${(1.5*r).toFixed(1)}칸 적에게 전염",max:3,tier:"통달",tierIndex:2,req:["curse",1],classId:"necro",effect:{kind:"curseSpreadRadius",perRank:1.5},implementedInOriginal:!1,implNote:"D-2. 선행 노드 curse 자체가 미구현이라 연쇄로 무효다."},{id:"necroX",name:"사령왕",icon:"👑",desc:"해골이 죽으면 즉시 재소환 · 군단 +4",max:1,tier:"궁극",tierIndex:3,req:["harvest",2],classId:"necro",cap:!0,effect:{kind:"composite",parts:[{kind:"minionInstantRevive"},{kind:"minionCapFlat",perRank:4}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나."},{id:"brine",name:"염장",icon:"🧂",desc:"소금 장판 지속 +${2*r}초 · 피해 +${25*r}%",max:3,tier:"기초",tierIndex:0,classId:"fish",effect:{kind:"composite",parts:[{kind:"specialDurationSec",perRank:2},{kind:"specialDamagePct",perRank:.25}]},implementedInOriginal:!0},{id:"curr",name:"회유",icon:"🌊",desc:"뭍에서 이동속도 +${10*r}%",max:3,tier:"기초",tierIndex:0,classId:"fish",effect:{kind:"moveSpeedOnLandPct",perRank:.1},implementedInOriginal:!0,implNote:'이중 적용. recalc 의 P.spdB 에 들어간 뒤 tick 5727 에서 한 번 더 곱해진다. 또 원본은 "뭍에서"가 아니라 항상 적용된다.'},{id:"cure",name:"자반 숙성",icon:"🐟",desc:"물속 데미지 보너스 +${20*r}%p",max:3,tier:"숙련",tierIndex:1,req:["brine",1],classId:"fish",effect:{kind:"waterDamageBonusPct",perRank:.2},implementedInOriginal:!0},{id:"scale",name:"비늘 갑주",icon:"🛡",desc:"받는 피해 -${9*r}% · 물속에서 2배",max:3,tier:"숙련",tierIndex:1,req:["curr",2],classId:"fish",effect:{kind:"damageReductionPct",perRank:.09,doubledInWater:!0},implementedInOriginal:!0,implNote:"반쪽 구현. 물속 2배 조건이 없어 항상 -9%/랭크로만 동작한다."},{id:"tide",name:"밀물",icon:"💧",desc:"물 밖에서도 초당 HP ${(0.8*r).toFixed(1)} 회복",max:3,tier:"통달",tierIndex:2,req:["cure",2],classId:"fish",effect:{kind:"hpRegenPerSec",perRank:.8},implementedInOriginal:!0},{id:"splash",name:"파도치기",icon:"🌀",desc:"착지 시 주변 ${(2+r).toFixed(0)}칸에 ${20*r} 피해",max:3,tier:"통달",tierIndex:2,req:["scale",1],classId:"fish",effect:{kind:"landingAoeDamage",damagePerRank:20,radiusBase:2,radiusPerRank:1},implementedInOriginal:!1,implNote:"D-2. 착지 판정(P.landT)은 있으나 피해가 붙지 않는다."},{id:"fishX",name:"심해의 왕",icon:"🔱",desc:"항상 물속 판정 · 모든 물 효과 2배",max:1,tier:"궁극",tierIndex:3,req:["tide",2],classId:"fish",cap:!0,effect:{kind:"composite",parts:[{kind:"alwaysConsideredInWater"},{kind:"waterEffectMultiplier",value:2}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나. inWater() 판정에 손대지 않는다."},{id:"hop",name:"개구리 다리",icon:"🐸",desc:"점프 ${r}단 추가",max:3,tier:"기초",tierIndex:0,classId:"parsley",effect:{kind:"extraJumpFlat",perRank:1},implementedInOriginal:!0},{id:"tong",name:"긴 혀",icon:"👅",desc:"혀 사거리 +${6*r} · 피해 +${30*r}%",max:3,tier:"기초",tierIndex:0,classId:"parsley",effect:{kind:"composite",parts:[{kind:"specialRangeFlat",perRank:6},{kind:"specialDamagePct",perRank:.3}]},implementedInOriginal:!0},{id:"bag",name:"바게트 숙성",icon:"🥖",desc:"근접 공격력 +${12*r}%",max:3,tier:"숙련",tierIndex:1,req:["tong",1],classId:"parsley",effect:{kind:"meleeAttackPct",perRank:.12},implementedInOriginal:!0,implNote:"이중 적용. recalc 과 doAttack 양쪽에서 곱해져 표기의 약 2배로 동작한다."},{id:"plush",name:"솜뭉치",icon:"🧸",desc:"최대 HP +${30*r} · 낙하 피해 무효",max:3,tier:"숙련",tierIndex:1,req:["hop",2],classId:"parsley",effect:{kind:"composite",parts:[{kind:"maxHpFlat",perRank:30},{kind:"fallDamageImmune"}]},implementedInOriginal:!0,implNote:"원본에는 낙하 피해 자체가 없어 두 번째 효과는 공허하다."},{id:"herb",name:"허브 향",icon:"🌿",desc:"주변 ${(3+r).toFixed(0)}칸 적 공격력 -${10*r}%",max:3,tier:"통달",tierIndex:2,req:["bag",2],classId:"parsley",effect:{kind:"enemyAttackReductionAura",perRank:.1,radiusBase:3,radiusPerRank:1},implementedInOriginal:!1,implNote:"D-2."},{id:"bounce",name:"통통",icon:"🎈",desc:"점프 착지 시 ${25*r} 광역 피해",max:3,tier:"통달",tierIndex:2,req:["plush",1],classId:"parsley",effect:{kind:"landingAoeDamage",damagePerRank:25},implementedInOriginal:!1,implNote:"D-2. 원본이 반경을 명시하지 않았다 — splash(2+r칸)를 참고해 정해야 한다."},{id:"parsX",name:"전설의 파슬리",icon:"👑",desc:"혀가 적을 끌어당김 · 모든 피해 +30%",max:1,tier:"궁극",tierIndex:3,req:["herb",2],classId:"parsley",cap:!0,effect:{kind:"composite",parts:[{kind:"specialPullsEnemies"},{kind:"allDamagePct",perRank:.3}]},implementedInOriginal:!0,implNote:"끌어당김은 파슬리 특수기의 기본 동작(4536)이라 이 노드가 추가하는 것은 피해 +30% 뿐이다."},{id:"dread",name:"공포",icon:"😱",desc:"적 이동속도 -${12*r}%",max:3,tier:"기초",tierIndex:0,classId:"boss",effect:{kind:"enemySlowPct",perRank:.12},implementedInOriginal:!0},{id:"feast",name:"포식",icon:"🍖",desc:"처치 시 HP +${12*r}",max:3,tier:"기초",tierIndex:0,classId:"boss",effect:{kind:"healOnKillFlat",perRank:12},implementedInOriginal:!0},{id:"doom",name:"대멸망",icon:"💀",desc:"멸망 반경 +${4*r} · 피해 +${30*r}%",max:3,tier:"숙련",tierIndex:1,req:["dread",1],classId:"boss",effect:{kind:"composite",parts:[{kind:"specialRadiusFlat",perRank:4},{kind:"specialDamagePct",perRank:.3}]},implementedInOriginal:!0},{id:"tyrant",name:"폭군",icon:"👑",desc:"최대 HP +${45*r} · 공격력 +${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["feast",2],classId:"boss",effect:{kind:"composite",parts:[{kind:"maxHpFlat",perRank:45},{kind:"attackPct",perRank:.08}]},implementedInOriginal:!0},{id:"abyss",name:"심연",icon:"🌑",desc:"받는 피해 -${10*r}% · 처치 시 무적 ${(0.3*r).toFixed(1)}초",max:3,tier:"통달",tierIndex:2,req:["doom",2],classId:"boss",effect:{kind:"composite",parts:[{kind:"damageReductionPct",perRank:.1},{kind:"invulOnKillSec",perRank:.3}]},implementedInOriginal:!0,implNote:"반쪽 구현. 처치 시 무적은 killMob 어디에도 없다."},{id:"wrath",name:"진노",icon:"🔥",desc:"HP가 낮을수록 공격력 최대 +${25*r}%",max:3,tier:"통달",tierIndex:2,req:["tyrant",1],classId:"boss",effect:{kind:"attackPctByMissingHp",perRank:.25},implementedInOriginal:!1,implNote:"D-2. 검사 rage 와 달리 연속 스케일링이라 별도 구현이 필요하다."},{id:"bossX",name:"종말",icon:"☄",desc:"멸망이 즉시 재사용 가능 · 피해 2배",max:1,tier:"궁극",tierIndex:3,req:["abyss",2],classId:"boss",cap:!0,effect:{kind:"composite",parts:[{kind:"specialCooldownReset"},{kind:"specialDamageMultiplier",value:2}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나."},{id:"wage",name:"시급 인상",icon:"💵",desc:"골드 획득 +${25*r}%",max:3,tier:"기초",tierIndex:0,classId:"alba",effect:{kind:"goldGainPct",perRank:.25},implementedInOriginal:!0},{id:"grit",name:"짬",icon:"😤",desc:"공격력 +${10*r}%",max:3,tier:"기초",tierIndex:0,classId:"alba",effect:{kind:"attackPct",perRank:.1},implementedInOriginal:!0,implNote:"이중 적용. recalc 과 doAttack 양쪽에서 곱해져 표기의 약 2배로 동작한다."},{id:"shift",name:"주휴수당",icon:"📅",desc:"퇴근 지속 +${r}초 · 종료 시 HP +${15*r}",max:3,tier:"숙련",tierIndex:1,req:["wage",1],classId:"alba",effect:{kind:"composite",parts:[{kind:"specialDurationSec",perRank:1},{kind:"healOnSpecialEndFlat",perRank:15}]},implementedInOriginal:!0,implNote:'원본은 "종료 시"가 아니라 특수기 발동 즉시 회복시킨다(4558).'},{id:"mop",name:"물걸레질",icon:"🧹",desc:"공격이 ${(1+0.5*r).toFixed(1)}칸 범위로 확장",max:3,tier:"숙련",tierIndex:1,req:["grit",2],classId:"alba",effect:{kind:"attackRangeFlat",base:1,perRank:.5},implementedInOriginal:!1,implNote:'D-2. 같은 이름의 무기 "물걸레"(WEAPONS 4568)와 혼동하지 말 것. 스킬 쪽은 무효다.'},{id:"bonus",name:"성과급",icon:"🎁",desc:"처치 시 ${8*r}% 확률로 골드 2배",max:3,tier:"통달",tierIndex:2,req:["shift",2],classId:"alba",effect:{kind:"goldDoubleChanceOnKill",perRank:.08},implementedInOriginal:!1,implNote:"D-2."},{id:"union",name:"노조",icon:"✊",desc:"받는 피해 -${8*r}% · HP 회복 +${15*r}%",max:3,tier:"통달",tierIndex:2,req:["mop",1],classId:"alba",effect:{kind:"composite",parts:[{kind:"damageReductionPct",perRank:.08},{kind:"healingReceivedPct",perRank:.15}]},implementedInOriginal:!0,implNote:"반쪽 구현. HP 회복량 증가는 코드에 없다."},{id:"albaX",name:"점장 승진",icon:"👔",desc:"골드 획득 3배 · 퇴근 쿨타임 절반",max:1,tier:"궁극",tierIndex:3,req:["bonus",2],classId:"alba",cap:!0,effect:{kind:"composite",parts:[{kind:"goldGainMultiplier",value:3},{kind:"specialCooldownMultiplier",value:.5}]},implementedInOriginal:!0}],xc=["기초","숙련","통달","궁극"],Yf=["hp","str","spd","luck","crit","regen","guard","evade","greed","vamp","brutal","bulwark","swift","scholar","awake","apex","dash","peck","dig","glide","flock","sprint","kiwiX","rage","plate","whirl","parry","cleave","temper","swordX","pierce","rapid","volley","snipe","venom","kite","archX","legion","bone","rite","curse","harvest","plague","necroX","brine","curr","cure","scale","tide","splash","fishX","hop","tong","bag","plush","herb","bounce","parsX","dread","feast","doom","tyrant","abyss","wrath","bossX","wage","grit","shift","mop","bonus","union","albaX"];function Jr(n){return Yf.includes(n)}const ro=[...kM,...NM];new Map(ro.map(n=>[n.id,n]));ro.filter(n=>!n.implementedInOriginal).map(n=>n.id);function UM(n){throw new Error(`미처리 스킬 효과: ${JSON.stringify(n)}`)}const OM=2,FM=4.4,zM=73.6,BM=new Set(["archX"]),HM=new Set(["dash"]);function GM(){return{maxHpFlat:0,attackFlat:0,attackGeneralPct:0,attackMeleePct:0,attackWeaponPct:0,attackAllDamagePct:0,allStatsPct:0,critChance:0,critDamage:0,lifesteal:0,hpRegenPerSec:0,goldGainPct:0,goldGainMul:1,xpGainPct:0,evadeSum:0,evadeCap:Number.POSITIVE_INFINITY,moveSpeedPct:0,moveSpeedOnLandPct:0,moveSpeedDoubledPortion:0,movementEffectMul:1,damageReductionPct:0,damageReductionPctWaterExtra:0,reflectPct:0,attackSpeedPct:0,attackCooldownMul:1,specialCooldownPct:0,specialCooldownMul:1,jumpHeightPct:0,extraJumps:0,belowHpGuardPct:0,belowHpGuardThreshold:0,belowHpAtkPct:0,belowHpAtkThreshold:0,attackPctByMissingHp:0,attackPctByDistance:0,attackPctWhileSprinting:0,nearbyEnemyPct:0,nearbyEnemyPer:0,comboDamagePct:0,rearSplashPct:0,attackRangeFlat:0,moveSpeedAfterAttackPct:0,moveSpeedAfterAttackSec:0,alwaysInWater:!1,waterDamageBonusPct:0,waterEffectMul:1,fallSpeedReductionPct:0,fallDamageImmune:!1,healingReceivedPct:0,healOnKillFlat:0,invulOnKillSec:0,summonChancePct:0,summonOnKillChancePct:0,goldDoubleChanceOnKill:0,landingAoeDamage:0,landingAoeRadius:0,poisonDps:0,enemySlowPct:0,enemyDefenseReductionPct:0,enemyAuraPct:0,enemyAuraRadius:0,curseSpreadRadius:0,minionCapFlat:0,minionDamagePct:0,minionInstantRevive:!1,pierceCount:0,pierceAll:!1,specialDamagePct:0,specialDamageMul:1,specialCooldownReset:!1,specialRadiusFlat:0,specialRangeFlat:0,specialDurationSec:0,specialInvulBonusSec:0,specialHealPctBonus:0,specialProjectileFlat:0,specialPullsEnemies:!1,healOnSpecialEndFlat:0,comboFinisherExplosion:!1}}function jf(n,t,e,i){switch(t.kind){case"maxHpFlat":n.maxHpFlat+=t.perRank*e;break;case"attackFlat":n.attackFlat+=t.perRank*e;break;case"attackPct":n.attackGeneralPct+=t.perRank*e;break;case"meleeAttackPct":n.attackMeleePct+=t.perRank*e;break;case"weaponAttackPct":n.attackWeaponPct+=t.perRank*e;break;case"allDamagePct":n.attackAllDamagePct+=t.perRank*e;break;case"allStatsPct":n.allStatsPct+=t.perRank*e;break;case"critChancePct":n.critChance+=t.perRank*e;break;case"critDamagePct":n.critDamage+=t.perRank*e;break;case"attackSpeedPct":BM.has(i)?n.attackCooldownMul*=1-t.perRank*e:n.attackSpeedPct+=t.perRank*e;break;case"moveSpeedPct":n.moveSpeedPct+=t.perRank*e,HM.has(i)&&(n.moveSpeedDoubledPortion+=t.perRank*e);break;case"moveSpeedOnLandPct":n.moveSpeedOnLandPct+=t.perRank*e;break;case"moveSpeedAfterAttackPct":n.moveSpeedAfterAttackPct+=t.perRank*e,n.moveSpeedAfterAttackSec=Math.max(n.moveSpeedAfterAttackSec,t.durationSec);break;case"jumpHeightPct":n.jumpHeightPct+=t.perRank*e;break;case"fallSpeedReductionPct":n.fallSpeedReductionPct+=t.perRank*e;break;case"extraJumpFlat":n.extraJumps+=t.perRank*e;break;case"hpRegenPerSec":n.hpRegenPerSec+=t.perRank*e;break;case"lifestealPct":n.lifesteal+=t.perRank*e;break;case"damageReductionPct":n.damageReductionPct+=t.perRank*e,t.doubledInWater===!0&&(n.damageReductionPctWaterExtra+=t.perRank*e);break;case"damageReductionBelowHpPct":n.belowHpGuardPct+=t.perRank*e,n.belowHpGuardThreshold=Math.max(n.belowHpGuardThreshold,t.hpThreshold);break;case"reflectPct":n.reflectPct+=t.perRank*e;break;case"evadeChancePct":n.evadeSum+=t.perRank*e,n.evadeCap=Math.min(n.evadeCap,t.cap);break;case"healingReceivedPct":n.healingReceivedPct+=t.perRank*e;break;case"invulOnKillSec":n.invulOnKillSec+=t.perRank*e;break;case"fallDamageImmune":n.fallDamageImmune=!0;break;case"attackPctBelowHp":n.belowHpAtkPct+=t.perRank*e,n.belowHpAtkThreshold=Math.max(n.belowHpAtkThreshold,t.hpThreshold);break;case"attackPctByMissingHp":n.attackPctByMissingHp+=t.perRank*e;break;case"attackPctByDistance":n.attackPctByDistance+=t.perRank*e;break;case"attackPctWhileSprinting":n.attackPctWhileSprinting+=t.perRank*e;break;case"attackPctPerNearbyEnemy":n.nearbyEnemyPct+=t.perRank*e,n.nearbyEnemyPer=Math.max(n.nearbyEnemyPer,t.enemyCountPerRank*e);break;case"rearSplashPct":n.rearSplashPct+=t.perRank*e;break;case"attackRangeFlat":n.attackRangeFlat+=t.base+t.perRank*e;break;case"goldGainPct":n.goldGainPct+=t.perRank*e;break;case"goldGainMultiplier":n.goldGainMul*=t.value;break;case"goldDoubleChanceOnKill":n.goldDoubleChanceOnKill+=t.perRank*e;break;case"xpGainPct":n.xpGainPct+=t.perRank*e;break;case"healOnKillFlat":n.healOnKillFlat+=t.perRank*e;break;case"enemySlowPct":n.enemySlowPct+=t.perRank*e;break;case"enemyDefenseReductionPct":n.enemyDefenseReductionPct+=t.perRank*e;break;case"enemyAttackReductionAura":n.enemyAuraPct+=t.perRank*e,n.enemyAuraRadius=Math.max(n.enemyAuraRadius,t.radiusBase+t.radiusPerRank*e);break;case"poisonDps":n.poisonDps+=t.perRank*e;break;case"curseSpreadRadius":n.curseSpreadRadius+=t.perRank*e;break;case"waterDamageBonusPct":n.waterDamageBonusPct+=t.perRank*e;break;case"waterEffectMultiplier":n.waterEffectMul*=t.value;break;case"alwaysConsideredInWater":n.alwaysInWater=!0;break;case"landingAoeDamage":{n.landingAoeDamage+=t.damagePerRank*e;const s=t.radiusBase===void 0?OM:t.radiusBase+(t.radiusPerRank??0)*e;n.landingAoeRadius=Math.max(n.landingAoeRadius,s);break}case"pierceCountFlat":n.pierceCount+=t.perRank*e;break;case"pierceAll":n.pierceAll=!0;break;case"minionCapFlat":n.minionCapFlat+=t.perRank*e;break;case"minionDamagePct":n.minionDamagePct+=t.perRank*e;break;case"minionInstantRevive":n.minionInstantRevive=!0;break;case"summonChancePct":n.summonChancePct+=t.perRank*e;break;case"summonOnKillChancePct":n.summonOnKillChancePct+=t.perRank*e;break;case"specialCooldownPct":n.specialCooldownPct+=t.perRank*e;break;case"specialCooldownMultiplier":n.specialCooldownMul*=t.value;break;case"specialCooldownReset":n.specialCooldownReset=!0;break;case"specialDamagePct":n.specialDamagePct+=t.perRank*e;break;case"specialDamageMultiplier":n.specialDamageMul*=t.value;break;case"specialRadiusFlat":n.specialRadiusFlat+=t.perRank*e;break;case"specialRangeFlat":n.specialRangeFlat+=t.perRank*e;break;case"specialDurationSec":n.specialDurationSec+=t.perRank*e;break;case"specialInvulBonusSec":n.specialInvulBonusSec+=t.perRank*e;break;case"specialHealPctBonus":n.specialHealPctBonus+=t.perRank*e;break;case"specialProjectileFlat":n.specialProjectileFlat+=t.perRank*e;break;case"specialPullsEnemies":n.specialPullsEnemies=!0;break;case"healOnSpecialEndFlat":n.healOnSpecialEndFlat+=t.perRank*e;break;case"comboFinisherExplosion":n.comboFinisherExplosion=!0;break;case"comboDamagePct":n.comboDamagePct+=t.perRank*e;break;case"movementEffectMultiplier":n.movementEffectMul*=t.value;break;case"composite":for(const s of t.parts)jf(n,s,e,i);break;default:UM(t)}}function oo(n){const t=GM();for(const e of ro){if(!Jr(e.id))continue;const i=n[e.id]??0;i<=0||jf(t,e.effect,i,e.id)}return{maxHpFlat:t.maxHpFlat,attackFlat:t.attackFlat,attackPctSum:t.attackGeneralPct+t.attackMeleePct+t.attackWeaponPct+t.attackAllDamagePct,attackPctBreakdown:{general:t.attackGeneralPct,melee:t.attackMeleePct,weapon:t.attackWeaponPct,allDamage:t.attackAllDamagePct},allStatsPct:t.allStatsPct,critChance:t.critChance,critDamage:t.critDamage,lifesteal:t.lifesteal,hpRegenPerSec:t.hpRegenPerSec,goldGainPct:t.goldGainPct,goldGainMul:t.goldGainMul,xpGainPct:t.xpGainPct,evadeChance:Math.min(t.evadeCap,t.evadeSum),moveSpeedPct:t.moveSpeedPct,moveSpeedOnLandPct:t.moveSpeedOnLandPct,moveSpeedDoubledPortion:t.moveSpeedDoubledPortion,movementEffectMul:t.movementEffectMul,damageReductionPct:t.damageReductionPct,damageReductionPctWaterExtra:t.damageReductionPctWaterExtra,reflectPct:t.reflectPct,attackSpeedPct:t.attackSpeedPct,attackCooldownMul:t.attackCooldownMul,specialCooldownPct:t.specialCooldownPct,specialCooldownMul:t.specialCooldownMul,jumpHeightPct:t.jumpHeightPct,extraJumps:t.extraJumps,damageReductionBelowHp:t.belowHpGuardPct>0?{threshold:t.belowHpGuardThreshold,pct:t.belowHpGuardPct}:null,attackPctBelowHp:t.belowHpAtkPct>0?{threshold:t.belowHpAtkThreshold,pct:t.belowHpAtkPct}:null,attackPctByMissingHp:t.attackPctByMissingHp,attackPctByDistance:t.attackPctByDistance,attackPctWhileSprinting:t.attackPctWhileSprinting,attackPctPerNearbyEnemy:t.nearbyEnemyPct>0&&t.nearbyEnemyPer>0?{pct:t.nearbyEnemyPct,per:t.nearbyEnemyPer}:null,comboDamagePct:t.comboDamagePct,rearSplashPct:t.rearSplashPct,attackRangeFlat:t.attackRangeFlat,moveSpeedAfterAttack:t.moveSpeedAfterAttackPct>0?{pct:t.moveSpeedAfterAttackPct,durationSec:t.moveSpeedAfterAttackSec}:null,alwaysInWater:t.alwaysInWater,waterDamageBonusPct:t.waterDamageBonusPct,waterEffectMul:t.waterEffectMul,fallSpeedReductionPct:t.fallSpeedReductionPct,fallDamageImmune:t.fallDamageImmune,healingReceivedPct:t.healingReceivedPct,healOnKillFlat:t.healOnKillFlat,invulOnKillSec:t.invulOnKillSec,summonChancePct:t.summonChancePct,summonOnKillChancePct:t.summonOnKillChancePct,goldDoubleChanceOnKill:t.goldDoubleChanceOnKill,landingAoe:t.landingAoeDamage>0?{damage:t.landingAoeDamage,radius:t.landingAoeRadius}:null,poisonDps:t.poisonDps,enemySlowPct:t.enemySlowPct,enemyDefenseReductionPct:t.enemyDefenseReductionPct,enemyAttackReductionAura:t.enemyAuraPct>0?{pct:t.enemyAuraPct,radius:t.enemyAuraRadius}:null,curseSpreadRadius:t.curseSpreadRadius,minionCapFlat:t.minionCapFlat,minionDamagePct:t.minionDamagePct,minionInstantRevive:t.minionInstantRevive,pierceCount:t.pierceCount,pierceAll:t.pierceAll,specialDamagePct:t.specialDamagePct,specialDamageMul:t.specialDamageMul,specialCooldownReset:t.specialCooldownReset,specialRadiusFlat:t.specialRadiusFlat,specialRangeFlat:t.specialRangeFlat,specialDurationSec:t.specialDurationSec,specialInvulBonusSec:t.specialInvulBonusSec,specialHealPctBonus:t.specialHealPctBonus,specialProjectileFlat:t.specialProjectileFlat,specialPullsEnemies:t.specialPullsEnemies,healOnSpecialEndFlat:t.healOnSpecialEndFlat,comboFinisherExplosion:t.comboFinisherExplosion}}oo({});function Kf(n){return n<0?0:n>1?1:n}function Zf(n){return n.maxHp>0?Kf(n.hp/n.maxHp):0}function VM(n,t){let e=1;const i=Zf(t),s=n.attackPctBelowHp;s!==null&&i<=s.threshold&&(e*=1+s.pct),n.attackPctByMissingHp>0&&(e*=1+n.attackPctByMissingHp*(1-i)),n.attackPctByDistance>0&&(e*=1+n.attackPctByDistance*Kf(t.targetDistance/zM)),n.attackPctWhileSprinting>0&&t.sprinting&&(e*=1+n.attackPctWhileSprinting);const r=n.attackPctPerNearbyEnemy;if(r!==null&&r.per>0){const o=Math.floor(t.nearbyEnemyCount/r.per);o>0&&(e*=1+r.pct*o)}return n.comboDamagePct>0&&t.comboStep>=1&&(e*=1+n.comboDamagePct),e}function WM(n,t,e){const i=t.damageReductionBelowHp;return i===null||Zf(e)>i.threshold?n:n*Math.max(0,1-i.pct)}function $M(n,t){return t.inWater||n.alwaysInWater}function XM(n,t){const e=n.moveSpeedAfterAttack;return e===null||t<0||t>e.durationSec?1:1+e.pct}const Aa={dmgMul:1,cdMul:1,spdMul:1,jumpMul:1,goldMul:1,xpMul:1,hp:0,spCd:0},Xs={HP_AT_LV1:100,HP_PER_LV:18,DMG_AT_LV1:14,DMG_PER_LV:5,CRIT:.18,CRIT_DMG:1.9},bs={REACH_BASE:3.6,AIM_BASE:4.4,FORWARD_DOT_MIN:.15,ROLL_MIN:.88,ROLL_SPAN:.24,WATER_MUL_BASE:1.6,WATER_MUL_PER_CURE:.2},Mn={WINDOW:.9,LENGTH:3,FINISHER_INDEX:2,SWING_FINISHER:.62,SWING_NORMAL:.42,CD_FINISHER:.62,CD_NORMAL:.4},nr={EVADE_INVUL:.25,HIT_INVUL:.5,DEATH_GOLD_KEEP:.8,RESPAWN_INVUL:1.5,RESPAWN_X:0,RESPAWN_Z:6},hi={ROLL_MIN:.7,ROLL_SPAN:.7,SCATTER:1.6,MAGNET_RADIUS:3.2,MAGNET_SPEED:7,PICKUP_RADIUS:1.1,LIFETIME:40};function ln(n,t){return n[t]??0}function qM(n,t){const{cls:e,weapon:i}=t,s=oo(t.skills),r=1+s.allStatsPct,o=(Xs.HP_AT_LV1+Xs.HP_PER_LV*(n.lv-1)+e.hp+s.maxHpFlat)*r;let a=(Xs.DMG_AT_LV1+Xs.DMG_PER_LV*(n.lv-1)+s.attackFlat)*r*(1+s.attackPctSum),c=Xs.CRIT+s.critChance;const l=Xs.CRIT_DMG+s.critDamage,u=s.lifesteal,h=s.hpRegenPerSec;let d=(1+s.goldGainPct)*s.goldGainMul;const f=1+s.xpGainPct,g=s.evadeChance,_=(1+s.moveSpeedPct+s.moveSpeedOnLandPct+s.moveSpeedDoubledPortion*(s.movementEffectMul-1))*r,m=1-s.damageReductionPct;let p=(1-s.attackSpeedPct)*s.attackCooldownMul;const v=(1-s.specialCooldownPct)*s.specialCooldownMul,M=1+s.jumpHeightPct,x=s.reflectPct;return a+=i.dmg??0,c+=i.crit??0,p*=1+(i.cd??0),d+=i.gold??0,{maxHp:o,dmg:a,crit:c,critDmg:l,vamp:u,hpReg:h,goldB:d,xpB:f,evade:g,spdB:_,guard:m,cdB:p,spCdB:v,jumpB:M,reflect:x,reach:i.reach??0,fire:i.fire===!0,apexMul:r}}function YM(n,t,e){return Math.min(n+Math.max(0,e-t),e)}function jM(n,t){return n.spCd*t.spCdB}function KM(n,t){return bs.REACH_BASE+n+t}function ZM(n,t){return bs.AIM_BASE+n+t}function JM(n,t){return n.x*t.x+n.z*t.z>=bs.FORWARD_DOT_MIN}const Ph={MELEE_BASE:4,RANGED:26};function QM(n,t,e){return n?Ph.RANGED:Ph.MELEE_BASE+t+e}function ty(n,t){return(n?3:1)+ln(t,"hop")+(ln(t,"kiwiX")?1:0)}function ey(n,t,e){const i=e()<t.crit,s=bs.ROLL_MIN+e()*bs.ROLL_SPAN;return{damage:Math.round(n*(i?t.critDmg:1)*s),crit:i}}const Ih={SPEED:46,LIFE:1.6};function ny(n){return ln(n,"pierce")}function iy(n,t,e,i){if(n.dead||n.invul>0)return{player:n,ignored:!0,evaded:!1,damage:0,died:!1};if(e.evade>0&&i()<e.evade)return{player:{...n,invul:nr.EVADE_INVUL},ignored:!1,evaded:!0,damage:0,died:!1};const s=Math.max(1,Math.round(t*e.guard)),r=n.hp-s,o=r<=0;return{player:{...n,hp:o?0:r,invul:nr.HIT_INVUL,dead:o,gold:o?Math.floor(n.gold*nr.DEATH_GOLD_KEEP):n.gold},ignored:!1,evaded:!1,damage:s,died:o}}function sy(n,t){const e=Math.round(n*(hi.ROLL_MIN+t()*hi.ROLL_SPAN)),i=(t()-.5)*hi.SCATTER,s=(t()-.5)*hi.SCATTER;return{amount:e,offsetX:i,offsetZ:s}}function ry(n,t,e){const i=n.raise??0;return i<=0?!1:e()<i+ln(t,"rite")*.15}const ma={baseCap:5,life:70};function Jf(n){return ma.baseCap+n.minionCapFlat}function Qf(n,t){const e=PM(n),i={cls:n,name:LM(e),cooldown:e.spCd};switch(n){case"kiwi":{const s=ln(t,"dig");return{...i,toast:"땅파기",conditionalToast:null,effects:[{kind:"invulnerable",duration:1.6+s*.4},{kind:"heal",fractionOfMax:.35+s*.15,flat:0},{kind:"aoe",radius:6,damageMul:.8,color:10121800}]}}case"sword":{const s=ln(t,"whirl");return{...i,toast:null,conditionalToast:null,effects:[{kind:"aoe",radius:6.5+s*1.5,damageMul:2.4*(1+s*.3),color:14673646},{kind:"swing",duration:.5}]}}case"archer":{const s=3+ln(t,"volley");return{...i,toast:null,conditionalToast:null,effects:[{kind:"arrow-fan",count:s*2+1,damageMul:.85,spreadStep:.14,speed:Ih.SPEED,life:Ih.LIFE,pierce:ln(t,"pierce")}]}}case"necro":return{...i,toast:"망자 소집",conditionalToast:null,effects:[{kind:"summon",unit:"skeleton",count:4,radius:3,cap:Jf(oo(t)),life:ma.life}]};case"fish":{const s=ln(t,"brine"),r=.9*(1+s*.25);return{...i,toast:"소금 뿌리기",conditionalToast:null,effects:[{kind:"field",radius:7,duration:5+s*2,tickInterval:.5,damageMulPerSecond:r,damageMulPerTick:r*.5,color:16777215}]}}case"parsley":{const s=ln(t,"tong");return{...i,toast:null,conditionalToast:{onHit:"혀 낚아채기",onMiss:"허공을 핥았다"},effects:[{kind:"cone-pull",range:18+s*6,facingDotMin:.35,damageMul:1.8*(1+s*.3),pullDistance:2.5,pullLerp:.85}]}}case"boss":{const s=ln(t,"doom");return{...i,toast:"멸 망",conditionalToast:null,effects:[{kind:"aoe",radius:15+s*4,damageMul:3.2*(1+s*.3),color:9117471},{kind:"heal",fractionOfMax:0,flat:40}]}}case"alba":{const s=ln(t,"shift");return{...i,toast:"퇴근합니다",conditionalToast:null,effects:[{kind:"invulnerable",duration:3+s},{kind:"speed-buff",multiplier:3,duration:3+s},{kind:"heal",fractionOfMax:0,flat:s*15}]}}}}const Se={gate1:Th[0],gate2:Th[1],castDuration:wM,pulseInterval:.9,pulseRadius:30,pulseDamageMul:.55,pulseDuration:1.2,pulseSwingDur:.8,finaleRadius:34,finaleDamageMul:.9,finaleDuration:1,idleCdMin:9,idleCdSpan:4,idleRange:46,idleRadius:24,idleDamageMul:.6,idleDuration:1,idleSwingDur:.95,initialCd:8},oy={levi:{...gc.levi,provisional:!1},magma:{...gc.magma,provisional:!1},frost:{...gc.frost,provisional:!1},gabriel:{name:null,color:16769162,ring:16773832,provisional:!0},creator:{name:null,color:16774872,ring:16777215,provisional:!0}},ay={name:null,color:5232872,ring:6283504,provisional:!0};function tp(n){return oy[n]??ay}function cy(){return{phase:0,cast:0,skCd:Se.initialCd,pulse:0,invuln:!1}}function ly(n,t,e,i,s){const r=tp(n.zone.type),o=n.boss??cy(),a=[],c=n.hp/n.maxHp,l=o.phase===0&&c<=Se.gate1?1:o.phase===1&&c<=Se.gate2?2:0;let u=o.phase,h=o.cast,d=o.invuln,f=o.pulse,g=o.skCd,_=n.atkT,m=n.atkD;return l&&(u=l,h=Se.castDuration,d=!0,a.push({kind:"boss-phase-start",mobId:n.id,phase:l,duration:Se.castDuration,skillName:r.name,color:r.color})),h>0?(h-=e,f-=e,f<=0&&(f=Se.pulseInterval,a.push({kind:"shockwave",mobId:n.id,x:n.pos.x,z:n.pos.z,maxRadius:Se.pulseRadius,damage:Math.round(t.dmg*Se.pulseDamageMul),duration:Se.pulseDuration,color:r.ring}),_=m=Se.pulseSwingDur,a.push({kind:"swing",mobId:n.id,duration:Se.pulseSwingDur})),h<=0&&(d=!1,a.push({kind:"boss-phase-end",mobId:n.id}),a.push({kind:"shockwave",mobId:n.id,x:n.pos.x,z:n.pos.z,maxRadius:Se.finaleRadius,damage:Math.round(t.dmg*Se.finaleDamageMul),duration:Se.finaleDuration,color:r.ring})),{mob:{...n,atkT:_,atkD:m,boss:{phase:u,cast:h,skCd:g,pulse:f,invuln:d}},events:a}):(g-=e,g<=0&&i<Se.idleRange&&(g=Se.idleCdMin+s()*Se.idleCdSpan,_=m=Se.idleSwingDur,a.push({kind:"swing",mobId:n.id,duration:Se.idleSwingDur}),a.push({kind:"shockwave",mobId:n.id,x:n.pos.x,z:n.pos.z,maxRadius:Se.idleRadius,damage:Math.round(t.dmg*Se.idleDamageMul),duration:Se.idleDuration,color:r.ring})),{mob:{...n,atkT:_,atkD:m,boss:{phase:u,cast:h,skCd:g,pulse:f,invuln:d}},events:a})}const ne={wanderMinT:1.5,wanderSpanT:2.5,wanderMoveAboveT:1.2,wanderSpeedMul:.32,fearSpeedMul:1.15,dreadSlowPerRank:.12,meleeRangePad:.9,rangedRangeMul:.6,faceTurnRate:8,wanderTurnRate:4,fearWalkRate:14,walkRate:10,walkSpeedRef:4.5,collideRadiusMul:.8,castlePushMul:1.5,meleeSwingDur:.62,worldSwingDur:.95,rangedSwingDur:.7,damageVarianceMin:.85,damageVarianceSpan:.3,regenAfterHitT:3,respawnDelayMob:Hf,respawnDelayBoss:Gf,deathSinkFly:2.2,deathSinkGround:.6,deathSinkMin:-3.5,deathRollRate:6,projectileSpeedBoss:26,projectileSpeedMob:20,projectileLife:3.2},uy=-252,_c=34,hy=5,dy=6;function Lh(n,t,e,i=0){for(const s of n)if(Math.hypot(t-s.x,e-s.z)<s.r+i)return s;return null}function fy(n,t,e,i){const s=t.fly;if(n.dead){const R=n.dieT+i,S=Math.min(Math.PI/2,n.roll+i*ne.deathRollRate),y=s?ne.deathSinkFly:ne.deathSinkGround,P=Math.max(ne.deathSinkMin,n.pos.y-i*y),O=t.boss?ne.respawnDelayBoss:ne.respawnDelayMob;if(R>O){const U=e.rng()*Math.PI*2,H=e.rng()*n.zone.r,X={x:n.zone.x+Math.cos(U)*H,y:s,z:n.zone.z+Math.sin(U)*H};return{mob:{...n,pos:X,yaw:0,roll:0,hp:n.maxHp,dead:!1,dieT:0,cd:0,boss:n.boss},events:[{kind:"respawn",mobId:n.id,pos:X}]}}return{mob:{...n,dieT:R,roll:S,pos:{...n.pos,y:P}},events:[]}}const r=[];let o=n.cd-i;const a=n.hitT+i;let c=n.hp;t.regen&&a>ne.regenAfterHitT&&(c=Math.min(n.maxHp,c+t.regen*i));let l=n.pos.x,u=n.pos.z,h=n.yaw,d=n.atkT,f=n.atkD,g=n.wander,_=n.wt,m=0;const p=e.target.pos.x-l,v=e.target.pos.z-u,M=Math.hypot(p,v),x=(R,S,y)=>{if(t.ghost||!e.collide)return{x:R,z:S};const P=e.collide({x:R,y,z:S},ne.collideRadiusMul*t.scale);return{x:P.x,z:P.z}};if(!e.target.dead&&M<t.aggro){if(e.fear&&!t.boss){const S=t.speed*ne.fearSpeedMul*i,y=l-p/M*S,P=u-v/M*S,O=x(y,P,n.pos.y);l=O.x,u=O.z,h=Math.atan2(-p,-v);const U=n.walk+i*ne.fearWalkRate,H=s+(t.hop?Math.abs(Math.sin(e.elapsed*4+U))*.18:s?Math.sin(e.elapsed*2+n.bob)*.25:0);return{mob:{...n,pos:{x:l,y:H,z:u},yaw:h,hp:c,hitT:a,cd:o,walk:U,atkT:d>0?d-i:d},events:r}}h=h+S1(h,Math.atan2(p,v))*Math.min(1,i*ne.faceTurnRate);const R=t.ranged?t.reach*ne.rangedRangeMul:t.reach+ne.meleeRangePad;if(M>R){const S=t.speed*(1-e.dreadRank*ne.dreadSlowPerRank)*i,y=x(l+p/M*S,u+v/M*S,n.pos.y);l=y.x,u=y.z,m=1}else if(t.ranged&&M<t.reach&&o<=0)o=t.cd,d=f=ne.rangedSwingDur,r.push({kind:"swing",mobId:n.id,duration:ne.rangedSwingDur}),r.push({kind:"projectile",mobId:n.id,origin:{x:l,y:(t.boss?5.4:3.4)*t.scale+s,z:u},dir:{x:p/M,y:0,z:v/M},damage:t.dmg,burn:t.burn,speed:t.boss?ne.projectileSpeedBoss:ne.projectileSpeedMob,life:ne.projectileLife});else if(!t.ranged&&o<=0){o=t.cd;const S=t.world?ne.worldSwingDur:ne.meleeSwingDur;d=f=S,r.push({kind:"swing",mobId:n.id,duration:S});const y=ne.damageVarianceMin+e.rng()*ne.damageVarianceSpan;r.push({kind:"melee",mobId:n.id,damage:Math.round(t.dmg*y),slow:t.slow,burn:t.burn})}}else{_-=i,_<=0&&(_=ne.wanderMinT+e.rng()*ne.wanderSpanT,g=e.rng()*Math.PI*2);const R=n.home.x-l,S=n.home.z-u;if(Math.hypot(R,S)>n.zone.r&&(g=Math.atan2(R,S)),_>ne.wanderMoveAboveT){const y=t.speed*ne.wanderSpeedMul*i,P=x(l+Math.sin(g)*y,u+Math.cos(g)*y,n.pos.y);l=P.x,u=P.z,h=h+(g-h)*Math.min(1,i*ne.wanderTurnRate),m=.6}}if(t.world){if(n.home.z<uy){const S=l-n.home.x,y=u-n.home.z,P=Math.hypot(S,y);P>_c&&(l=n.home.x+S/P*_c,u=n.home.z+y/P*_c)}const R=Lh(e.castles,n.home.x,n.home.z,dy);if(R){const S=Math.hypot(l-R.x,u-R.z),y=R.r-hy;if(S>y){const P=Math.atan2(u-R.z,l-R.x);l=R.x+Math.cos(P)*y,u=R.z+Math.sin(P)*y}}}else{const R=ne.castlePushMul*t.scale,S=Lh(e.castles,l,u,R);if(S){const y=Math.atan2(u-S.z,l-S.x);l=S.x+Math.cos(y)*(S.r+R),u=S.z+Math.sin(y)*(S.r+R)}}const C=n.walk+i*ne.walkRate*m*(t.speed/ne.walkSpeedRef);d>0&&(d-=i);let w=n.pos.y;t.hop&&d<=0?w=Math.abs(Math.sin(e.elapsed*4+C))*.18*(m||.3):s&&d<=0&&(w=s+Math.sin(e.elapsed*1.8+n.bob)*.3);const T={...n,pos:{x:l,y:w,z:u},yaw:h,hp:c,hitT:a,cd:o,walk:C,atkT:d,atkD:f,wander:g,wt:_};if(t.world){const R=Math.hypot(l-e.target.pos.x,u-e.target.pos.z),S=ly(T,t,i,R,e.rng);return{mob:S.mob,events:[...r,...S.events]}}return{mob:T,events:r}}const py=["levi","magma","frost"];function ep(n){return py.includes(n)}const my=Object.freeze({lordsKilled:Object.freeze([]),cutscene:Object.freeze({kind:"none"}),heavenOpen:!1,gabrielKilled:!1,innerOpen:!1,creatorKilled:!1}),gy=1.4,np=8,ip=3,sp=20,_s=1/sp;function xy(n){return Math.round(n*sp)}function _y(n,t,e){if(ep(t)){if(n.lordsKilled.includes(t))return n;const i=[...n.lordsKilled,t],s=i.length===3&&n.cutscene.kind==="none"&&!n.heavenOpen;return{...n,lordsKilled:i,cutscene:s?{kind:"playing",startedAtTick:e+xy(gy)}:n.cutscene}}return t==="gabriel"?n.gabrielKilled?n:{...n,gabrielKilled:!0,innerOpen:!0}:n.creatorKilled?n:{...n,creatorKilled:!0}}function vy(n,t){if(n.cutscene.kind!=="playing")return n;const e=(t-n.cutscene.startedAtTick)*_s;if(e<ip)return n;const i=e>=np;return{...n,heavenOpen:!0,cutscene:i?{kind:"none"}:n.cutscene}}function My(n){const t=[...n.lordsKilled];return n.gabrielKilled&&t.push("gabriel"),n.creatorKilled&&t.push("creator"),{slain:t,hv:n.heavenOpen,ig:n.innerOpen,cc:n.creatorKilled}}function yy(n){return{lordsKilled:n.slain.filter(ep),cutscene:{kind:"none"},heavenOpen:n.hv,gabrielKilled:n.slain.includes("gabriel"),innerOpen:n.ig,creatorKilled:n.cc||n.slain.includes("creator")}}const vl=2;function rp(n){if(typeof n!="object"||n===null)return null;const t=n;if(t.v!==vl)return null;const e=typeof t.cls=="string"&&Xf.includes(t.cls)?t.cls:null,i=typeof t.weapon=="string"&&_l.includes(t.weapon)?t.weapon:"stick",s=Array.isArray(t.owned)?t.owned.filter(a=>typeof a=="string"&&_l.includes(a)):[];s.includes("stick")||s.push("stick");const r={},o=t.skills;if(typeof o=="object"&&o!==null)for(const[a,c]of Object.entries(o)){if(!Yf.includes(a))continue;const l=Math.floor(Number(c));Number.isFinite(l)&&l>0&&(r[a]=Math.min(9,l))}return{v:vl,name:typeof t.name=="string"?t.name.slice(0,16):"모험가",lv:Dr(t.lv,1,200,1),xp:Dr(t.xp,0,Number.MAX_SAFE_INTEGER,0),gold:Dr(t.gold,0,Number.MAX_SAFE_INTEGER,0),sp:Dr(t.sp,0,999,1),cls:e,weapon:i,owned:s,skills:r,pt:Dr(t.pt,0,Number.MAX_SAFE_INTEGER,0),gates:Sy(t.gates),seenCutscenes:Array.isArray(t.seenCutscenes)?t.seenCutscenes.filter(a=>typeof a=="string").slice(0,16):[]}}function Sy(n){const t={slain:[],hv:!1,ig:!1,cc:!1};if(typeof n!="object"||n===null)return t;const e=n;return{slain:Array.isArray(e.slain)?e.slain.filter(i=>typeof i=="string").slice(0,8):[],hv:e.hv===!0,ig:e.ig===!0,cc:e.cc===!0}}function Dr(n,t,e,i){const s=Math.floor(Number(n));return Number.isFinite(s)?s<t?t:s>e?e:s:i}const Ml=1,by=8,oi={ATTACK:1,JUMP:2,SPECIAL:4,RUN:8},op={DEAD:32},Ey="dev",tn=(()=>{const n=yr(1337),t=new Uint8Array(256);for(let i=0;i<256;i++)t[i]=i;for(let i=255;i>0;i--){const s=n()*(i+1)|0,r=t[i];t[i]=t[s],t[s]=r}const e=new Uint8Array(512);for(let i=0;i<512;i++)e[i]=t[i&255];return e})(),vc=n=>n*n*n*(n*(n*6-15)+10),is=(n,t,e)=>n+e*(t-n);function Di(n,t,e,i){n&=15;const s=n<8?t:e,r=n<4?e:n===12||n===14?t:i;return(n&1?-s:s)+(n&2?-r:r)}function ga(n,t,e){const i=Math.floor(n)&255,s=Math.floor(t)&255,r=Math.floor(e)&255;n-=Math.floor(n),t-=Math.floor(t),e-=Math.floor(e);const o=vc(n),a=vc(t),c=vc(e),l=tn[i]+s,u=tn[l]+r,h=tn[l+1]+r,d=tn[i+1]+s,f=tn[d]+r,g=tn[d+1]+r;return is(is(is(Di(tn[u],n,t,e),Di(tn[f],n-1,t,e),o),is(Di(tn[h],n,t-1,e),Di(tn[g],n-1,t-1,e),o),a),is(is(Di(tn[u+1],n,t,e-1),Di(tn[f+1],n-1,t,e-1),o),is(Di(tn[h+1],n,t-1,e-1),Di(tn[g+1],n-1,t-1,e-1),o),a),c)}function wy(n,t,e,i=3){let s=0,r=.5,o=1;for(let a=0;a<i;a++)s+=r*Math.abs(ga(n*o,t*o,e*o)),o*=2.07,r*=.5;return s-.34}function Ty(n,t,e){const i=n.clone(),s=i.getAttribute("position"),r=i.getAttribute("normal");if(!s||!r)return i;const o=new L,a=new L;for(let c=0;c<s.count;c++){o.fromBufferAttribute(s,c),a.fromBufferAttribute(r,c).normalize();const l=wy(o.x*e,o.y*e,o.z*e,3)*t+ga(o.x*1.8,o.y*1.8,o.z*1.8)*t*.7;s.setXYZ(c,o.x+a.x*l,o.y+a.y*l,o.z+a.z*l)}return s.needsUpdate=!0,i.computeVertexNormals(),i}function ao(n,t=n){const e=document.createElement("canvas");e.width=n,e.height=t;const i=e.getContext("2d");if(!i)throw new Error("2D 캔버스 컨텍스트를 만들 수 없다 — 절차 텍스처 생성 불가");return i}const $l=(n,t)=>t[n()*t.length|0];function kr(n,t,e,i,s,r,o,a,c){const l=ao(t);l.fillStyle=e,l.fillRect(0,0,t,t),l.lineCap="round",l.lineWidth=o;for(let u=0;u<s;u++){const h=n()*t,d=n()*t,f=a===void 0?n()*6.283:a+(n()-.5)*.6,g=r*(.45+n()),_=Math.cos(f+1.57)*g*c*(n()-.5),m=Math.sin(f+1.57)*g*c*(n()-.5);l.strokeStyle=$l(n,i);for(let p=-1;p<=1;p++)for(let v=-1;v<=1;v++){const M=h+p*t,x=d+v*t;l.beginPath(),l.moveTo(M,x),l.quadraticCurveTo(M+Math.cos(f)*g*.5+_,x+Math.sin(f)*g*.5+m,M+Math.cos(f)*g,x+Math.sin(f)*g),l.stroke()}}return l.canvas}function Bo(n,t,e,i,s,r){const o=ao(t);o.fillStyle=e,o.fillRect(0,0,t,t);for(let a=0;a<s;a++){const c=n()*t,l=n()*t,u=r*(.45+n());o.fillStyle=$l(n,i);for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++)o.beginPath(),o.arc(c+h*t,l+d*t,u,0,6.283),o.fill()}return o.canvas}function Ay(n,t,e,i,s){const r=ao(t);r.fillStyle=e,r.fillRect(0,0,t,t),r.lineWidth=Math.max(1,s*.09);for(let o=0;o*s*.62<t+s;o++)for(let a=-1;a*s<t+s;a++){const c=a*s+(o%2?s*.5:0),l=o*s*.62;r.fillStyle=$l(n,i),r.beginPath(),r.arc(c,l,s*.52,Math.PI,0,!1),r.fill(),r.strokeStyle="rgba(0,0,0,.22)",r.stroke()}return r.canvas}function Ry(n){const t=ao(n),e=t.createImageData(n,n);for(let i=0;i<n;i++)for(let s=0;s<n;s++){const r=ga(s*.019,i*.3,.5)*.5+.5,a=.56+(Math.sin(r*24+ga(s*.055,i*.055,2)*4)*.5+.5)*.44,c=(i*n+s)*4;e.data[c]=178*a,e.data[c+1]=128*a,e.data[c+2]=80*a,e.data[c+3]=255}return t.putImageData(e,0,0),t.canvas}const Cy={cloth:{seed:1337,repeat:2,draw:n=>kr(n,256,"#8a8a8a",["#a6a6a6","#6e6e6e","#9a9a9a"],1500,9,1.6,0,.2)},denim:{seed:9257,repeat:2,draw:n=>kr(n,256,"#7e7e7e",["#9e9e9e","#5e5e5e"],1600,11,1.4,.72,.1)},skin:{seed:17177,repeat:2,draw:n=>Bo(n,256,"#9a9a9a",["#a8a8a8","#8e8e8e"],1400,1.5)},fuzz:{seed:25097,repeat:2,draw:n=>kr(n,256,"#8a8a8a",["#c0c0c0","#5a5a5a"],2e3,13,1.5,void 0,.7)},knit:{seed:33017,repeat:3,draw:n=>Bo(n,256,"#8a8a8a",["#d8d8d8","#4a4a4a","#b0b0b0"],2200,3.4)},fur:{seed:40937,repeat:3,draw:n=>kr(n,256,"#8a8a8a",["#b8b8b8","#5c5c5c"],2600,10,1.3,void 0,.5)},scale:{seed:48857,repeat:2,draw:n=>Ay(n,256,"#8a8a8a",["#a4a4a4","#767676","#9a9a9a"],22)},bone:{seed:56777,repeat:2,draw:n=>Bo(n,256,"#a2a2a2",["#b6b6b6","#8a8a8a","#6e6e6e"],900,2.2)},metal:{seed:64697,repeat:1,draw:n=>kr(n,256,"#9a9a9a",["#b4b4b4","#828282"],1800,26,1,0,0)},wood:{seed:72617,repeat:1,draw:()=>Ry(256)},rock:{seed:80537,repeat:2,draw:n=>Bo(n,256,"#8e8e8e",["#a8a8a8","#6c6c6c","#bcbcbc"],1300,3)}},Dh=new Map;function ap(n){const t=Dh.get(n);if(t)return t;const e=Cy[n],i=new Tf(e.draw(yr(e.seed)));return i.wrapS=i.wrapT=oa,i.repeat.set(e.repeat,e.repeat),i.anisotropy=4,i.colorSpace=en,i.name=n,Dh.set(n,i),i}const xa=new Map;function Zt(n,t,e,i,s=1){const r=s?1:0,o=`${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)},${i.toFixed(3)},${r}`,a=xa.get(o);if(a)return a;const c=Math.max(.004,Math.min(i,n/2-.004,t/2-.004,e/2-.004)),l=n/2-c,u=t/2-c,h=new Ts;h.moveTo(-l,-t/2),h.lineTo(l,-t/2),h.absarc(l,-u,c,-Math.PI/2,0,!1),h.lineTo(n/2,u),h.absarc(l,u,c,0,Math.PI/2,!1),h.lineTo(-l,t/2),h.absarc(-l,u,c,Math.PI/2,Math.PI,!1),h.lineTo(-n/2,-u),h.absarc(-l,-u,c,Math.PI,Math.PI*1.5,!1);const d=new io(h,{depth:Math.max(.01,e-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:r?2:1,curveSegments:r?3:1});return d.translate(0,0,-(e-c*2)/2),d.computeVertexNormals(),xa.set(o,d),d}function cp(n,t,e,i=26){const s=`b${n.toFixed(3)},${t.toFixed(4)},${e.toFixed(2)},${i}`,r=xa.get(s);if(r)return r;const o=new vi(n,i,i*.7|0),a=Ty(o,t,e);return o.dispose(),xa.set(s,a),a}function kh(n,t,e,i,s=26){const r=new nt(cp(n,e,i,s),t);return r.castShadow=!0,r.receiveShadow=!0,r}const _a=new Map;function Pt(n,t,e=.9,i=0,s=0){const r=t==null?null:t instanceof qe?t:ap(t),o=i||.02,a=r?r.name||r.uuid:"-",c=`t${n}|${a}|${e}|${o}|${s}`,l=_a.get(c);if(l)return l;const u=new Mi({color:n,map:r,bumpMap:r,bumpScale:r?.035:0,emissive:s,roughness:e,metalness:o,envMapIntensity:.6});return _a.set(c,u),u}function Ie(n,t=2.2){const e=`g${n}|${t}`,i=_a.get(e);if(i)return i;const s=new Mi({color:n,emissive:n,emissiveIntensity:t,roughness:.3,metalness:0});return _a.set(e,s),s}const Nh=9426167,Py=2761264;function Iy(n,t){try{const e=ao(256,128),i=e.createLinearGradient(0,0,0,128);i.addColorStop(0,"#cfe6ff"),i.addColorStop(.45,"#8fc0e4"),i.addColorStop(.62,"#6d8f5c"),i.addColorStop(1,"#2e3a24"),e.fillStyle=i,e.fillRect(0,0,256,128);const s=e.createRadialGradient(70,26,0,70,26,46);s.addColorStop(0,"rgba(255,250,224,1)"),s.addColorStop(1,"rgba(255,250,224,0)"),e.fillStyle=s,e.beginPath(),e.arc(70,26,46,0,6.283),e.fill();const r=new Tf(e.canvas);r.mapping=ra;const o=new ul(t);o.compileEquirectangularShader(),n.environment=o.fromEquirectangular(r).texture,r.dispose(),o.dispose()}catch(e){console.warn("환경맵 생성 실패, 조명만으로 렌더링합니다",e)}}function Ly(n){const t=new zv;t.background=new Ht(Nh);const e=new Ul(Nh,55,130);t.fog=e;const i=n.clientWidth||n.width||1,s=n.clientHeight||n.height||1,r=new un(58,i/s,.1,400),o=new Fv({canvas:n,antialias:!0});o.setPixelRatio(Math.min(globalThis.devicePixelRatio??1,2)),o.setSize(i,s,!1),o.shadowMap.enabled=!0,o.shadowMap.type=Yd,o.outputColorSpace=en,o.toneMapping=jd,o.toneMappingExposure=1,Iy(t,o);const a=new _1(12576511,4877114,.52);t.add(a);const c=new y1(16774102,1.9);c.position.set(30,55,20),c.castShadow=!0,c.shadow.mapSize.set(2048,2048);const l=70;return c.shadow.camera.left=-l,c.shadow.camera.right=l,c.shadow.camera.top=l,c.shadow.camera.bottom=-l,c.shadow.camera.far=160,c.shadow.camera.updateProjectionMatrix(),t.add(c),{scene:t,camera:r,renderer:o,sun:c,hemi:a,fog:e}}function Dy(n,t,e,i){const s=Math.max(1,Math.floor(t)),r=Math.max(1,Math.floor(e));n.camera.aspect=s/r,n.camera.updateProjectionMatrix(),n.renderer.setPixelRatio(Math.min(i,2)),n.renderer.setSize(s,r,!1)}function ky(n,t){const e=Py;n.fog.color.setHex(e);const i=n.scene.background;i instanceof Ht?i.setHex(e):n.scene.background=new Ht(e)}const Uh=new Map;function As(n,t){const e=Uh.get(n);if(e)return e;const i=t();return Uh.set(n,i),i}function Ny(){return As("box",()=>new ws(1,1,1))}function Uy(n){return As(`circle${n}`,()=>new xr(1,n))}function Oy(n){return As(`cone${n}`,()=>new _r(1,1,n))}function Fy(n,t){return As(`sphere${n}_${t}`,()=>new vi(1,n,t))}function Xl(n,t,e,i){const s=`cyl${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)},${i}`;return As(s,()=>new Yi(n,t,e,i))}function zy(n,t,e){const i=`ring${n.toFixed(3)},${t.toFixed(3)},${e}`;return As(i,()=>new vr(n,t,e))}function lp(n,t){const e=`plane${n.toFixed(3)},${t.toFixed(3)}`;return As(e,()=>new mr(n,t))}const Oh=new Map;function ql(n,t){const e=Oh.get(n);if(e)return e;const i=t();return Oh.set(n,i),i}function qi(n,t=1){return ql(`L${n}|${t}`,()=>t<1?new pl({color:n,transparent:!0,opacity:t}):new pl({color:n}))}function Mc(n,t=1){return ql(`B${n}|${t}`,()=>t<1?new kn({color:n,transparent:!0,opacity:t}):new kn({color:n}))}function By(){return ql("ICE",()=>new Mi({color:10473704,transparent:!0,opacity:.78,roughness:.12,metalness:.05,envMapIntensity:1.6}))}function qn(n,t,e,i){const s=new nt(Ny(),qi(i));return s.scale.set(n,t,e),s}function $r(n,t,e,i,s,r){const o=new nt(Uy(r),i);return o.rotation.x=-Math.PI/2,o.scale.set(e,e,1),o.position.set(n,s,t),o}function mi(n,t,e,i,s=.03,r=48){const o=$r(n,t,e,qi(i),s,r);return o.receiveShadow=!0,o}function va(n,t,e,i){const s=new nt(Oy(e),i);return s.scale.set(n,t,n),s}function Hy(n,t,e){const i=new Mt,s=qn(1.1*e,3.4*e,1.1*e,8016432);s.position.y=1.7*e;const r=qn(4.4*e,2.4*e,4.4*e,4165434);r.position.y=4.2*e;const o=qn(3*e,2*e,3*e,5088069);o.position.y=5.9*e;for(const a of[s,r,o])a.castShadow=!0,a.receiveShadow=!0,i.add(a);return i.position.set(n,0,t),{object:i,collider:{x:n,z:t,r:xM*e}}}function Gy(n,t,e,i){const s=qn(2.4*e,1.8*e,2.2*e,9146261);return s.position.set(n,.9*e,t),s.rotation.y=i()*3,s.castShadow=!0,s.receiveShadow=!0,{object:s,collider:{x:n,z:t,r:_M*e}}}const ei={sandbarMargin:3,sandbar:12562050,bigIslet:6979418,smallIslet:9077857,isletRock:8223338,water:2060200,waterOpacity:.76,reed:6257212,column:10133644},Vy=10,_n={ashMargin:4,ash:3024418,sootFactor:.55,soot:2366489,lava:16738850,lavaGlow:16726528,lavaGlowOpacity:.28,lavaGlowScale:1.35,spire:2365974,calderaFloor:1708560,calderaSpire:2759960,bossLava:16742954},Fi={snowMargin:4,snow:14674674,glazeFactor:.7,glaze:12376296,treeTrunk:5919048,treeLeafLow:14477810,treeLeafHigh:15660795,throneFloor:9422044};function Wy(n){const t=new Mt;t.name="sea";const e=[];t.add(mi(ve.x,ve.z,ve.r+ei.sandbarMargin,ei.sandbar));const i=[Gi];for(let a=0;a<Uf;a++){const c=nM(a);i.push({x:c.x,z:c.z,r:ha(n,gl.min,gl.max)})}for(const a of i){const c=a.r>Vy,l=new nt(Xl(a.r,a.r+1.4,1.6,22),qi(c?ei.bigIslet:ei.smallIslet));if(l.position.set(a.x,-.78,a.z),l.receiveShadow=!0,l.castShadow=!0,t.add(l),!c)for(let u=0;u<3;u++){const h=n()*6.28,d=n()*a.r*.6,f=qn(1.2,.9,1.1,ei.isletRock);f.position.set(a.x+Math.cos(h)*d,.4,a.z+Math.sin(h)*d),f.castShadow=!0,f.receiveShadow=!0,t.add(f)}}const s=$r(ve.x,ve.z,ve.r,qi(ei.water,ei.waterOpacity),.35,64);s.name="seaWater",t.add(s);const r=xs.seaReeds;for(let a=0;a<r.count;a++){const c=n()*6.283,l=ve.r*ha(n,r.rFactorMin,r.rFactorMax),u=qn(.14,2.4+n()*1.6,.14,ei.reed);u.position.set(ve.x+Math.cos(c)*l,1.4,ve.z+Math.sin(c)*l),u.rotation.z=(n()-.5)*.4,u.castShadow=!0,t.add(u)}const o=xs.seaBrokenColumns;for(let a=0;a<o.count;a++){const c=a/o.count*6.283,l=qn(1.6,4+n()*3,1.6,ei.column);l.position.set(Gi.x+Math.cos(c)*o.ringR,2.2,Gi.z+Math.sin(c)*o.ringR),l.rotation.y=n(),l.castShadow=!0,l.receiveShadow=!0,t.add(l),e.push({x:l.position.x,z:l.position.z,r:o.colliderR})}return{group:t,colliders:e,islets:i}}function $y(n,t,e){for(const i of e)if(Math.hypot(n-i.x,t-i.z)<i.r)return!0;return!1}function Xy(n){const t=new Mt;t.name="volcano";const e=[],i=[];t.add(mi(Te.x,Te.z,Te.r+_n.ashMargin,_n.ash)),t.add(mi(Te.x,Te.z,Te.r*_n.sootFactor,_n.soot,.04));const s=sM;for(let u=0;u<s.count;u++){const h=n()*6.283,d=n()*s.center.r*s.radialFactor,f=s.center.x+Math.cos(h)*d,g=s.center.z+Math.sin(h)*d,_=ha(n,s.radiusMin,s.radiusMax);i.push({x:f,z:g,r:_}),t.add($r(f,g,_,Mc(_n.lava),.06,20)),t.add($r(f,g,_*_n.lavaGlowScale,Mc(_n.lavaGlow,_n.lavaGlowOpacity),.05,20))}const r=xs.volcSpires,o=Pt(_n.spire,"rock",.96);for(let u=0;u<r.count;u++){const h=n()*6.283,d=n()*Te.r,f=Te.x+Math.cos(h)*d,g=Te.z+Math.sin(h)*d;if($y(f,g,i))continue;const _=3+n()*9,m=va(1.2+n()*1.4,_,5,o);m.position.set(f,_/2,g),m.rotation.y=n()*3,m.castShadow=!0,m.receiveShadow=!0,t.add(m),e.push({x:f,z:g,r:r.colliderR})}const a=$e.volc;t.add(mi(a.x,a.z,fa,_n.calderaFloor,.05,32));const c=xs.volcArenaSpires,l=Pt(_n.calderaSpire,"rock",.95);for(let u=0;u<c.count;u++){const h=u/c.count*6.283,d=va(2.2,8+n()*5,5,l);d.position.set(a.x+Math.cos(h)*c.ringR,4.5,a.z+Math.sin(h)*c.ringR),d.castShadow=!0,t.add(d),e.push({x:d.position.x,z:d.position.z,r:c.colliderR})}return i.push(Gr),t.add($r(Gr.x,Gr.z,Gr.r,Mc(_n.bossLava),.07,24)),{group:t,colliders:e,lavaPools:i}}function qy(n,t){const e=new Mt,i=qn(1,4,1,Fi.treeTrunk);i.position.y=2;const s=qn(4,2,4,Fi.treeLeafLow);s.position.y=4.6;const r=qn(2.6,1.6,2.6,Fi.treeLeafHigh);r.position.y=6;for(const o of[i,s,r])o.castShadow=!0,o.receiveShadow=!0,e.add(o);return e.position.set(n,0,t),e}function Yy(n){const t=new Mt;t.name="icefield";const e=[],i=By();t.add(mi(be.x,be.z,be.r+Fi.snowMargin,Fi.snow)),t.add(mi(be.x,be.z,be.r*Fi.glazeFactor,Fi.glaze,.04));const s=xs.iceSpikes;for(let c=0;c<s.count;c++){const l=n()*6.283,u=n()*be.r,h=be.x+Math.cos(l)*u,d=be.z+Math.sin(l)*u,f=3+n()*10,g=va(.9+n()*1.3,f,5,i);g.position.set(h,f/2-.4,d),g.rotation.set((n()-.5)*.3,n()*3,(n()-.5)*.3),g.castShadow=!0,t.add(g),e.push({x:h,z:d,r:s.colliderR})}const r=xs.iceTrees;for(let c=0;c<r.count;c++){const l=n()*6.283,u=be.r*ha(n,r.rFactorMin,r.rFactorMax),h=be.x+Math.cos(l)*u,d=be.z+Math.sin(l)*u;t.add(qy(h,d)),e.push({x:h,z:d,r:r.colliderR})}const o=$e.ice;t.add(mi(o.x,o.z,fa,Fi.throneFloor,.05,32));const a=xs.iceArenaSpires;for(let c=0;c<a.count;c++){const l=c/a.count*6.283,u=va(2,11+n()*6,5,i);u.position.set(o.x+Math.cos(l)*a.ringR,5.5,o.z+Math.sin(l)*a.ringR),u.castShadow=!0,t.add(u),e.push({x:u.position.x,z:u.position.z,r:a.colliderR})}return{group:t,colliders:e}}const fn={ground:5941317,plaza:12891025,road:12167300,lakeBed:13220237,lakeIsle:7125070,lakeWater:3117014,pathDefault:9274743,lampPost:4864554,lampGlow:16762730},ni={bedSegments:48,isleFlare:1.2,isleHeight:1.4,isleSegments:32,isleY:-.68,waterInnerInset:.5,waterSegments:56,waterY:.35,waterOpacity:.72},jy=[fn.pathDefault,8358544,fn.pathDefault,9071192,fn.pathDefault,11058379],Ee={slabJitter:1.8,slabSizeMin:2.6,slabSizeSpan:1.6,slabThickness:.18,slabCornerR:.3,slabY:.09,slabSnap:.4,postRTop:.22,postRBottom:.3,postH:4.4,postSegments:10,postY:2.2,lampR:.62,lampY:4.7,lightIntensity:.8,lightDistance:20,lightY:5},Ho={nsZMin:-80,nsZMax:12,ewXMin:-12,ewXMax:80},Nr={treeMin:.7,treeSpan:.7,rockMin:.6,rockSpanBase:.8,rockSpanWild:1.5};function Ky(){const n=new Mt;n.name="ground";const t=new nt(lp(_h,_h),qi(fn.ground));return t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t),n}function Zy(){const n=new Mt;n.name="village";const t=mi(er.x,er.z,er.r,fn.plaza,.02,32);n.add(t);for(const e of J1){const i=new nt(lp(e.w,e.d),qi(fn.road));i.rotation.x=-Math.PI/2,i.position.set(e.x,.015,e.z),i.receiveShadow=!0,n.add(i)}return n}function Jy(){const n=new Mt;n.name="lake",n.add(mi(me.x,me.z,me.r+Q1,fn.lakeBed,.03,ni.bedSegments));const t=new nt(Xl(me.island,me.island+ni.isleFlare,ni.isleHeight,ni.isleSegments),qi(fn.lakeIsle));t.position.set(me.x,ni.isleY,me.z),t.receiveShadow=!0,t.castShadow=!0,n.add(t);const e=new nt(zy(me.island-ni.waterInnerInset,me.r,ni.waterSegments),qi(fn.lakeWater,ni.waterOpacity));return e.name="lakeWater",e.rotation.x=-Math.PI/2,e.position.set(me.x,ni.waterY,me.z),n.add(e),n}function Qy(n,t,e){for(const i of xl){const s=i.bx-i.ax,r=i.bz-i.az,o=s*s+r*r;if(o<1)continue;const a=Math.max(0,Math.min(1,((n-i.ax)*s+(t-i.az)*r)/o)),c=i.ax+s*a,l=i.az+r*a;if(Math.hypot(n-c,t-l)<e)return!0}return!1}function Fh(n,t){return Math.round(n/t)*t}function tS(n,t,e,i){const s=new Mt,{ax:r,az:o,bx:a,bz:c}=n,l=Math.hypot(a-r,c-o),u=Math.max(2,Math.round(l/gM)),h=Pt(t,"rock",.95);for(let m=0;m<=u;m++){const p=m/u,v=r+(a-r)*p+(e()-.5)*Ee.slabJitter,M=o+(c-o)*p+(e()-.5)*Ee.slabJitter,x=Fh(Ee.slabSizeMin+e()*Ee.slabSizeSpan,Ee.slabSnap),C=Fh(Ee.slabSizeMin+e()*Ee.slabSizeSpan,Ee.slabSnap),w=new nt(Zt(x,Ee.slabThickness,C,Ee.slabCornerR,0),h);w.position.set(v,Ee.slabY,M),w.rotation.y=e()*3.14,w.receiveShadow=!0,s.add(w)}const d=Math.floor(l/pM),f=Pt(fn.lampPost,"wood",.92),g=Ie(fn.lampGlow,2.2),_=Math.atan2(c-o,a-r)+Math.PI/2;for(let m=1;m<=d;m++){const p=m/(d+1),v=r+(a-r)*p+Math.cos(_)*bh,M=o+(c-o)*p+Math.sin(_)*bh,x=new nt(Xl(Ee.postRTop,Ee.postRBottom,Ee.postH,Ee.postSegments),f);x.position.set(v,Ee.postY,M),x.castShadow=!0,s.add(x);const C=new nt(Fy(12,10),g);C.scale.setScalar(Ee.lampR),C.position.set(v,Ee.lampY,M),s.add(C);const w=new wa(fn.lampGlow,Ee.lightIntensity,Ee.lightDistance);w.position.set(v,Ee.lightY,M),s.add(w),i.push({x:v,z:M,r:mM})}return s}function eS(n,t){const e=new Mt;e.name="paths";for(let i=0;i<xl.length;i++){const s=xl[i];s!==void 0&&e.add(tS(s,jy[i]??fn.pathDefault,n,t))}return e}function nS(n,t){const e=nn.roadClearHalf;return!!(Math.abs(n)<e&&t>Ho.nsZMin&&t<Ho.nsZMax||Math.abs(t)<e&&n>Ho.ewXMin&&n<Ho.ewXMax||Math.hypot(n-me.x,t-me.z)<me.r+nn.lakePad||Math.hypot(n-ve.x,t-ve.z)<ve.r+nn.biomePad||Math.hypot(n-Te.x,t-Te.z)<Te.r+nn.biomePad||Math.hypot(n-be.x,t-be.z)<be.r+nn.biomePad||Wf(n,t,nn.castlePad)||Qy(n,t,nn.pathPad))}function iS(n,t){const e=new Mt;e.name="scatter";for(let i=0;i<nn.count;i++){const s=n()*Math.PI*2,r=nn.rMin+Math.sqrt(n())*nn.rSpan,o=Math.cos(s)*r,a=Math.sin(s)*r;if(nS(o,a))continue;const c=Math.min(1,Math.max(0,(r-nn.wildStart)/nn.wildSpan)),l=n()<nn.treeChanceBase-c*nn.treeChanceWildPenalty?Hy(o,a,Nr.treeMin+n()*Nr.treeSpan):Gy(o,a,Nr.rockMin+n()*(Nr.rockSpanBase+c*Nr.rockSpanWild),n);e.add(l.object),t.push(l.collider)}return e}function sS(n){const t=yr(n),e=new Mt;e.name="terrain";const i=[];e.add(Ky()),e.add(Zy()),e.add(Jy());const s=Wy(t);e.add(s.group),i.push(...s.colliders);const r=Xy(t);e.add(r.group),i.push(...r.colliders);const o=Yy(t);return e.add(o.group),i.push(...o.colliders),e.add(eS(t,i)),e.add(iS(t,i)),{group:e,colliders:i,lavaPools:r.lavaPools,seaIslets:s.islets}}const rS="gate-door",oS="gate-pillar",Cn=6.283;function up(n){return n<0?0:n>1?1:n}const zh=new Map;function yi(n,t){const e=zh.get(n);if(e)return e;const i=t();return zh.set(n,i),i}const hn=(n,t,e,i)=>yi(`cy${n},${t},${e},${i}`,()=>new Yi(n,t,e,i)),Es=(n,t,e)=>yi(`co${n},${t},${e}`,()=>new _r(n,t,e)),lr=(n,t,e)=>yi(`sp${n},${t},${e}`,()=>new vi(n,t,e)),Bh=(n,t,e,i)=>yi(`to${n},${t},${e},${i}`,()=>new Mr(n,t,e,i)),hp=(n,t)=>yi(`ci${n},${t}`,()=>new xr(n,t)),aS=(n,t,e)=>yi(`ri${n},${t},${e}`,()=>new vr(n,t,e)),cS=(n,t)=>yi(`pl${n},${t}`,()=>new mr(n,t)),lS=(n,t)=>yi(`oc${n},${t}`,()=>new so(n,t)),uS=(n,t,e)=>yi(`bx${n},${t},${e}`,()=>new ws(n,t,e)),Hh=new Map;function co(n){const t=Hh.get(n);if(t)return t;const e=new pl({color:n});return Hh.set(n,e),e}function vn(n,t,e,i){return new nt(uS(n,t,e),co(i))}function Nt(n,t,e=!1,i=!1){e&&(t.castShadow=!0),i&&(t.receiveShadow=!0),n.add(t)}const hS=3818064,dS=.15,fS=16771496,pS=3;function mS(){const n=new Mt,t=[],e=Pt(7498334,"rock",.92),i=Pt(4867132,"rock",.95),s=Pt(14266442,"metal",.3,.85),r=Ie(16771496,2.4),o=Wl,a=R1;for(const f of[-1,1]){const g=Re.x+f*o,_=new nt(hn(5.2,6.6,a,18),e);_.position.set(g,a/2,Re.z),Nt(n,_,!0);for(let v=0;v<6;v++){const M=new nt(Bh(5.6-v*.1,.42,8,20),s);M.rotation.x=Math.PI/2,M.position.set(g,5+v*6.6,Re.z),Nt(n,M)}const m=new nt(Es(6.4,9,18),i);m.position.set(g,a+4.5,Re.z),Nt(n,m,!0);const p=new nt(lr(1.5,14,12),r);p.position.set(g,a+11,Re.z),Nt(n,p),t.push({x:g,z:Re.z,r:C1,id:oS})}const c=new nt(Zt(o*2+13,7,8,.6,0),e);c.position.set(Re.x,a+3.5,Re.z),Nt(n,c,!0);const l=new nt(Es(o+7,11,4),i);l.rotation.y=Math.PI/4,l.position.set(Re.x,a+12,Re.z),Nt(n,l);const u=[],h=Ie(hS,dS);for(let f=0;f<mh;f++){const g=Re.x+(f-(mh-1)/2)*I1,_=new nt(Bh(2.9,.5,10,26),h);_.position.set(g,L1,Re.z+D1);const m=new nt(lS(1.5,0),h);_.add(m),_.userData.core=m,_.userData.on=!1,Nt(n,_),u.push(_)}const d=[];for(const f of[-1,1]){const g=new Mt,_=new nt(Zt(o-1.5,a-2,2.6,.4,0),i);_.position.set(f*(o/2-.5),(a-2)/2,0),Nt(g,_,!0);for(let m=0;m<7;m++){const p=new nt(Zt(o-3,.7,3.2,.15,0),s);p.position.set(f*(o/2-.5),3.5+m*5.6,0),g.add(p)}g.position.set(Re.x,0,Re.z),g.userData.sd=f,n.add(g),d.push(g),t.push({x:Re.x+f*(o/2),z:Re.z,r:P1,id:rS})}return{meshes:{group:n,runes:u,doors:d},colliders:t}}function gS(n,t){const e=n.runes[t];if(!e||e.userData.on===!0)return;const i=Ie(fS,pS);e.userData.on=!0,e.material=i;const s=e.userData.core;s instanceof nt&&(s.material=i)}function Gh(n,t){const e=up(t);n.doors.forEach((i,s)=>{const r=i.userData.sd,o=typeof r=="number"?r:s===0?-1:1;i.position.x=Re.x+o*e*(Wl-1)})}function xS(n,t){for(const e of n.runes){if(e.userData.on!==!0)continue;const i=e.userData.core;i instanceof nt&&(i.rotation.y+=t*1.3,i.rotation.x+=t*.8)}}const _S=.6,vS=.3;function MS(){const n=new Mt,t=[],e=Pt(7235161,"rock",.93),i=Pt(5590595,"rock",.95),s=Pt(9077106,"rock",.86),r=Pt(14266442,"metal",.32,.85),o=Ie(16762730,2),a=k1,c=N1;for(const l of[-1,1]){for(let f=ds;f<fc;f+=Oo){const g=Math.min(Oo,fc-f)+_S,_=l*(f+g/2-vS),m=new nt(Zt(g,c,5,.3,0),e);m.position.set(_,c/2,a),Nt(n,m,!0,!0);const p=new nt(Zt(g+1.4,2.6,6.6,.3,0),i);if(p.position.set(_,1.3,a),Nt(n,p,!1,!0),Math.round(f/Oo)%2===0){const M=new nt(Zt(g*.52,2.6,5.4,.2,0),s);M.position.set(_,c+1.3,a),Nt(n,M,!0)}const v=new nt(Zt(g,.6,2.2,.2,0),s);v.position.set(_,c+.3,a+3.2),Nt(n,v),t.push({x:_-g*.25,z:a,r:gh}),t.push({x:_+g*.25,z:a,r:gh})}for(let f=U1;f<fc-Oo;f+=O1){const g=l*f,_=new nt(hn(4.6,5.6,c+9,16),i);_.position.set(g,(c+9)/2,a),Nt(n,_,!0,!0);const m=new nt(hn(5.6,5,1.8,16),s);m.position.set(g,c+9.6,a),Nt(n,m,!0);for(let x=0;x<9;x++){const C=x/9*Cn,w=new nt(Zt(1.7,2.1,1.3,.15,0),s);w.position.set(g+Math.cos(C)*5,c+11.4,a+Math.sin(C)*5),w.rotation.y=-C,Nt(n,w)}const p=new nt(Es(5.9,8.5,16),e);p.position.set(g,c+16.6,a),Nt(n,p,!0);const v=new nt(lr(.8,12,10),o);v.position.set(g,c+21.4,a),Nt(n,v);const M=new wa(16762730,.9,30);M.position.set(g,c+21,a),n.add(M),t.push({x:g,z:a,r:F1})}const u=l*z1,h=new nt(Zt(12,c+7,6.2,.4,0),i);h.position.set(u,(c+7)/2,a),Nt(n,h,!0);const d=new nt(Zt(13.4,2.2,7.4,.3,0),r);d.position.set(u,c+8.2,a),Nt(n,d),t.push({x:u,z:a,r:B1})}return{group:n,colliders:t}}const yS=1337;function SS(n=yr(yS)){const t=new Mt,e=[],i=Pt(15922943,null,.95,0),s=Pt(15265012,"rock",.42,.08),r=Pt(14728284,"metal",.28,.88),o=Ie(16773832,1.1),a=new nt(hp(T1,72),co(14673909));a.rotation.x=-Math.PI/2,a.position.set(Ii.x,.05,Ii.z),Nt(t,a,!1,!0);const c=pc.edgeClouds;for(let _=0;_<c.count;_++){const m=n()*Cn,p=c.rMin+n()*c.rSpan,v=kh(4+n()*7,i,.5,2.2,12);v.scale.set(1.5,.55,1.5),v.position.set(Ii.x+Math.cos(m)*p,-1+n()*2.5,Ii.z+Math.sin(m)*p),t.add(v)}const l=H1,u=G1,h=V1,d=(l-u)/h+1.2;for(let _=0;_<=h;_++){const m=l+(u-l)*(_/h),p=new nt(Zt(W1,.8,d,.3,0),s);p.position.set(0,.4,m),Nt(t,p,!1,!0);for(const v of[-1,1]){const M=new nt(Zt(1,1.5,d,.2,0),s);M.position.set(v*Fo,1.2,m),Nt(t,M,!0)}if(_%$1===0)for(const v of[-1,1]){const M=new nt(hn(.55,.7,5.2,10),s);M.position.set(v*Fo,2.6,m),Nt(t,M,!0);const x=new nt(lr(.78,10,8),o);x.position.set(v*Fo,5.6,m),Nt(t,x);const C=new wa(16773832,.7,22);C.position.set(v*Fo,6,m),t.add(C)}}const f=pc.floatingIslands;for(let _=0;_<f.count;_++){const m=n()*Cn,p=f.rMin+n()*f.rSpan,v=Ii.x+Math.cos(m)*p,M=Ii.z+Math.sin(m)*p,x=f.yMin+n()*f.ySpan,C=kh(5+n()*5,i,.6,2.6,14);C.scale.set(1.3,.5,1.3),C.position.set(v,x,M),t.add(C);const w=new nt(hn(.9,1.4,7,10),s);w.position.set(v,x+4,M),Nt(t,w);const T=new nt(lr(1.3,12,10),o);T.position.set(v,x+8.4,M),Nt(t,T)}const g=pc.colonnade;for(let _=0;_<g.count;_++){const m=_/g.count*Cn,p=Nn*g.rFactor,v=Ii.x+Math.cos(m)*p,M=Ii.z+Math.sin(m)*p,x=16+n()*8,C=new nt(hn(1.5,1.9,x,14),s);C.position.set(v,x/2,M),Nt(t,C,!0);const w=new nt(Zt(4.6,1.2,4.6,.2,0),r);w.position.set(v,x+.6,M),Nt(t,w),e.push({x:v,z:M,r:g.colliderR})}return{group:t,colliders:e}}const Vh=40,bS=8,dp=.3,ES=46;function wS(){const n=new Mt,t=X1,e=Pt(14728284,"metal",.26,.9),i=new kn({color:16773832,transparent:!0,opacity:dp,side:Xe,depthWrite:!1,blending:ms}),s=q1(t),r=new nt(cS(s*2+bS,Vh),i);r.position.set(0,Vh/2,t),n.add(r);const o=[],a=Math.ceil(s/xh),c=ml/2;for(let l=-a;l<=a;l++){const u=new nt(hn(.5,.5,ml,10),e);u.position.set(l*xh,c,t),Nt(n,u,!0),o.push(u)}return{group:n,bars:o,veil:r}}function Wh(n,t,e){const i=up(t),s=ml/2+i*ES;for(const r of n)r.position.y=s;if(e){const r=e.material;!Array.isArray(r)&&"opacity"in r&&(r.opacity=dp*(1-i))}}const TS={sea:{stone:5071984,stone2:3952988,trim:7178132,floor:3491663,accent:5232872},volc:{stone:4863792,stone2:3680031,trim:7031354,floor:3810848,accent:16742954},ice:{stone:9414843,stone2:7440800,trim:11980768,floor:7177624,accent:10479871}},AS=1.1;function RS(n){const t=Of.find(e=>e.id===n);if(!t)throw new Error(`알 수 없는 성 id: ${n}`);return t}function CS(n){const t=RS(n),e=TS[n],i=new Mt,s=[],r=t.x,o=t.z,a=sa,c=aM[n],l=fM(t,t.biome),u=cM,h=Pt(e.stone,"rock",.92),d=Pt(e.stone2,"rock",.94),f=Pt(e.trim,"rock",.85),g=Ie(e.accent,1.6),_=new nt(hp(a-1.5,56),co(e.floor));_.rotation.x=-Math.PI/2,_.position.set(r,.06,o),Nt(i,_,!1,!0);for(let M=0;M<3;M++){const x=new nt(hn(9-M*2.2,9.6-M*2.2,.5,40),d);x.position.set(r,.25+M*.5,o),Nt(i,x,!1,!0)}const m=new nt(aS(3.4,4.4,40),g);m.rotation.x=-Math.PI/2,m.position.set(r,1.82,o),Nt(i,m);const p=Cn/mc*a*1.16;for(let M=0;M<mc;M++){const x=M/mc*Cn;let C=x-l;for(;C>Math.PI;)C-=Cn;for(;C<-Math.PI;)C+=Cn;if(Math.abs(C)<u)continue;const w=r+Math.cos(x)*a,T=o+Math.sin(x)*a,R=new nt(Zt(p,c,3.2,.25,0),h);if(R.position.set(w,c/2,T),R.rotation.y=-x,Nt(i,R,!0,!0),M%2===0){const S=new nt(Zt(p*.55,2.2,3.4,.2,0),f);S.position.set(w,c+1.1,T),S.rotation.y=-x,Nt(i,S,!0)}s.push({x:w,z:T,r:lM})}for(let M=0;M<yh;M++){const x=M/yh*Cn+dM,C=r+Math.cos(x)*a,w=o+Math.sin(x)*a,T=new nt(hn(4.2,5,c+7,16),d);T.position.set(C,(c+7)/2,w),Nt(i,T,!0,!0);const R=new nt(hn(5,4.6,1.6,16),f);R.position.set(C,c+7.4,w),Nt(i,R,!0);for(let P=0;P<8;P++){const O=P/8*Cn,U=new nt(Zt(1.5,1.9,1.2,.15,0),f);U.position.set(C+Math.cos(O)*4.5,c+9,w+Math.sin(O)*4.5),U.rotation.y=-O,Nt(i,U)}const S=new nt(Es(5.2,8.5,16),h);S.position.set(C,c+13.6,w),Nt(i,S,!0);const y=new nt(lr(.85,12,10),g);y.position.set(C,c+18.4,w),Nt(i,y),s.push({x:C,z:w,r:uM})}for(const M of[-1,1]){const x=l+M*u*1.05,C=r+Math.cos(x)*a,w=o+Math.sin(x)*a,T=new nt(hn(2.6,3.1,c+5,14),f);T.position.set(C,(c+5)/2,w),Nt(i,T,!0);const R=new nt(Es(3,5,14),h);R.position.set(C,c+7.5,w),Nt(i,R,!0),s.push({x:C,z:w,r:hM})}const v=new nt(Zt(a*u*2.6,3,4,.3,0),h);v.position.set(r+Math.cos(l)*a,c+1.5,o+Math.sin(l)*a),v.rotation.y=-l,Nt(i,v,!0);for(let M=0;M<4;M++){const x=M/4*Cn+.78,C=r+Math.cos(x)*(a*Sh),w=o+Math.sin(x)*(a*Sh),T=new nt(hn(.7,1,4.2,10),d);T.position.set(C,2.1,w),Nt(i,T,!0);const R=new nt(hn(1.5,.8,1.1,12),f);R.position.set(C,4.6,w),Nt(i,R,!0);const S=new nt(lr(1.05,10,8),g);S.position.set(C,5.3,w),Nt(i,S);const y=new wa(e.accent,1.1,26);y.position.set(C,6,w),i.add(y),s.push({x:C,z:w,r:AS})}return{group:i,colliders:s}}const PS=[{wall:14272936,roof:12604719},{wall:13359584,roof:4157096},{wall:14734264,roof:8014496}];function IS(n,t,e,i,s){const r=new Mt,o=vn(7,4.5,6,i);o.position.y=2.25;const a=new nt(Es(6,3,4),co(s));a.position.y=6,a.rotation.y=Math.PI/4;const c=vn(1.6,2.6,.3,5979426);c.position.set(0,1.3,3.05);for(const l of[o,a,c])Nt(r,l,!0,!0);return r.position.set(n,0,t),r.rotation.y=e,r}function LS(){const n=new Mt,t=vn(9,5,7,14207400);t.position.y=2.5;const e=new nt(Es(7.4,3.2,4),co(8011562));e.position.y=6.6,e.rotation.y=Math.PI/4;const i=vn(2.2,3.2,.3,5979426);i.position.set(0,1.6,3.55);for(const u of[t,e,i])Nt(n,u,!0,!0);for(let u=-4;u<=4;u++){const h=vn(.9,.25,2.4,u%2?15262422:12600366);h.position.set(u*.95,4.5,4.4),h.rotation.x=-.25,Nt(n,h,!0)}const s=vn(5,1.5,.3,3811868);s.position.set(0,5.5,3.7),Nt(n,s,!0);const r=vn(.25,1,.12,14673646);r.position.set(-1.2,5.55,3.9),n.add(r);const o=vn(.8,.16,.14,9071157);o.position.set(-1.2,5.05,3.9),n.add(o);const a=vn(.9,.3,.12,14673646);a.position.set(1.2,5.85,3.9),n.add(a);const c=vn(.16,1.1,.12,9071157);c.position.set(1.2,5.4,3.9),n.add(c);const l=vn(3.4,.3,1.2,7030054);l.position.set(-5.2,1.6,3.2),Nt(n,l,!0);for(const u of[-1,0,1]){const h=vn(.16,2,.1,13226716);h.position.set(-5.2+u*1.1,2.6,3.2),Nt(n,h,!0)}return n.position.set($i.x,0,$i.z),n}function DS(){const n=new Mt,t=[];n.add(LS()),t.push({x:$i.x,z:$i.z,r:j1}),K1.forEach((i,s)=>{const r=PS[s];r&&(n.add(IS(i.x,i.z,i.rot,r.wall,r.roof)),t.push({x:i.x,z:i.z,r:Z1}))});const e=new Ne;return e.name="shopKeeperAnchor",e.position.set(vh.x,0,vh.z),e.rotation.y=Math.PI,n.add(e),{group:n,colliders:t,keeperAnchor:e}}function kS(n,t){const e=new Mt;e.name="world";const i=sS(t),s=mS(),r=MS(),o=SS(),a=wS(),c=DS(),l=["sea","volc","ice"].map(h=>CS(h));e.add(i.group,s.meshes.group,r.group,o.group,a.group,c.group,...l.map(h=>h.group)),n.scene.add(e);const u=[...i.colliders.map(h=>({x:h.x,z:h.z,r:h.r})),...s.colliders,...r.colliders,...c.colliders,...l.flatMap(h=>h.colliders)];return{root:e,terrain:i,gate:s.meshes,innerGate:a,village:c,colliders:u,lavaPools:i.lavaPools,seaIslets:i.seaIslets}}class NS{constructor(t){this.world=t}litRunes=0;gateOpen01=0;innerOpen01=0;apply(t){const e=t.slain.filter(i=>i==="levi"||i==="magma"||i==="frost").length;for(;this.litRunes<e;)gS(this.world.gate,this.litRunes),this.litRunes++;t.hv&&(this.targetGateOpen=1),t.ig&&(this.targetInnerOpen=1)}targetGateOpen=0;targetInnerOpen=0;update(t){this.gateOpen01<this.targetGateOpen&&(this.gateOpen01=Math.min(1,this.gateOpen01+t/US),Gh(this.world.gate,this.gateOpen01)),this.innerOpen01<this.targetInnerOpen&&(this.innerOpen01=Math.min(1,this.innerOpen01+t/OS),Wh(this.world.innerGate.bars,this.innerOpen01,this.world.innerGate.veil)),xS(this.world.gate,t)}snapTo(t){this.apply(t),t.hv&&(this.gateOpen01=1,Gh(this.world.gate,1)),t.ig&&(this.innerOpen01=1,Wh(this.world.innerGate.bars,1,this.world.innerGate.veil))}}const US=np-ip,OS=1/.45,re={hitstopTimeScale:.04,shakeDefaultDuration:.25,shakeGain:3.2,fovDecayRate:7,fovFollowRate:12,fovEpsilon:.01,particleOpacity:.95,particleElevation:1.2,particleShrink:1.6,particleAdditiveGravityMax:.5,trailSegments:16,trailColor:14676223,trailLife:.22,trailOpacity:.55,trailMinPoints:2,ringDefaultDuration:1.1,ringDefaultMaxRadius:26,ringOpacity:.85,ringY:.5,damageNumberLife:.8},Rn={shakeAmp:.1,shakeDuration:.18,fovPunch:1.4,countBase:5,countScale:8,speedBase:4,speedScale:4,size:.16,gravity:9,life:.4,color:13616812},$h={hit:{count:7,color:16773312,speed:6,size:.09,gravity:6,life:.32},hitCrit:{count:12,color:16765514,speed:9,size:.13,gravity:6,life:.32},blocked:{count:5,color:10474732,speed:5,size:.09,gravity:4,life:.25},taken:{count:6,color:16734794,speed:5,size:.1,gravity:7,life:.28},coin:{count:8,color:16765514,speed:5,size:.09,gravity:4,life:.25},death:{count:14,color:13616812,speed:6,size:.12,gravity:6,life:.4}},Go=new L;function FS(n,t,e,i,s){const r={x:0,y:0,visible:!1};return Go.copy(n).project(t),r.x=(Go.x*.5+.5)*e,r.y=(-Go.y*.5+.5)*i,r.visible=Go.z<=1,r}const zS=.14,BS=.16,HS=16,GS=.5,VS=.42,yc=.5,Xh={burst:.42,field:.26,cone:.4},qh={burst:.85,field:.5,cone:.7},WS=.055,$S=4.2,XS=.05,Yh=new Map;function qS(n){const t=Math.round(n*100),e=Yh.get(t);if(e)return e;const i=Math.max(6,Math.round(n*2/.09)),s=new xr(1,i,-n,n*2);return Yh.set(t,s),s}let jh=null,Kh=null;function Zh(){return jh??=new xr(1,48),jh}function YS(){return Kh??=new vr(1-WS,1,56),Kh}class jS{scene;slots=[];pulseT=0;reducedMotion=!1;constructor(t){this.scene=t;for(let e=0;e<HS;e++)this.slots.push(this.makeSlot())}setReducedMotion(t){this.reducedMotion=t}makeSlot(){const t=new kn({color:16777215,transparent:!0,opacity:0,side:Xe,depthWrite:!1}),e=new nt(Zh(),t);e.rotation.x=-Math.PI/2,e.visible=!1,e.renderOrder=2;const i=new kn({color:16777215,transparent:!0,opacity:0,side:Xe,depthWrite:!1,blending:ms}),s=new nt(YS(),i);return s.rotation.x=-Math.PI/2,s.visible=!1,s.renderOrder=3,this.scene.add(e,s),{fill:e,fillMat:t,edge:s,edgeMat:i,t:0,duration:0,shape:"burst",active:!1}}show(t){const e=this.takeSlot();e.active=!0,e.t=0,e.shape=t.shape,e.duration=t.shape==="field"?Math.max(yc,t.duration??1):t.shape==="cone"?VS:GS;const i=t.shape==="cone";e.fill.geometry=i?qS(t.halfAngle??Math.PI/4):Zh(),e.edge.visible=!i,e.fill.rotation.z=i?(t.yaw??0)-Math.PI/2:0,e.fillMat.color.setHex(t.color),e.edgeMat.color.setHex(t.color),e.fillMat.opacity=Xh[t.shape],e.edgeMat.opacity=qh[t.shape],e.fill.position.set(t.x,zS,t.z),e.edge.position.set(t.x,BS,t.z),e.fill.scale.setScalar(t.radius),e.edge.scale.setScalar(t.radius),e.fill.visible=!0}takeSlot(){const t=this.slots.find(i=>!i.active);if(t)return t;let e=this.slots[0];for(const i of this.slots)i.t>e.t&&(e=i);return e}update(t){this.pulseT+=t;for(const e of this.slots){if(!e.active)continue;e.t+=t;const i=e.t/e.duration;if(i>=1){e.active=!1,e.fill.visible=!1,e.edge.visible=!1;continue}const s=Xh[e.shape],r=qh[e.shape];if(e.shape==="field"){const o=e.duration-e.t,a=o<yc?o/yc:1,c=this.reducedMotion?0:Math.sin(this.pulseT*$S)*XS;e.fillMat.opacity=(s+c)*a,e.edgeMat.opacity=r*a}else{const o=(1-i)*(1-i);e.fillMat.opacity=s*o,e.edgeMat.opacity=r*o}}}get activeCount(){return this.slots.reduce((t,e)=>t+(e.active?1:0),0)}dispose(){for(const t of this.slots)this.scene.remove(t.fill,t.edge),t.fillMat.dispose(),t.edgeMat.dispose();this.slots.length=0}}let Jh=null,Qh=null;function KS(){return Jh??=new vi(1,6,4),Jh}function ZS(){return Qh??=new vr(1,1.8,48),Qh}const JS=220,QS=12,tb=48;function td(n){const t=1-n;return 1-t*t}class eb{scene;camera;overlay;baseFov;stopT=0;shakeT=0;shakeAmp=0;fov=0;particles=[];particleCursor=0;rings=[];numbers=[];trailGeo;trailMat;trailMesh;trailPts=[];trailHead=0;trailCount=0;trailLife=0;area;reducedMotion=!1;motionQuery;onMotionChange;disposed=!1;constructor(t,e){this.scene=t.scene,this.camera=t.camera,this.overlay=e,this.baseFov=t.camera.fov,this.motionQuery=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")??null,this.reducedMotion=this.motionQuery?.matches??!1,this.area=new jS(t.scene),this.area.setReducedMotion(this.reducedMotion),this.onMotionChange=s=>{this.reducedMotion=s.matches,this.area.setReducedMotion(s.matches),s.matches&&(this.shakeT=0,this.shakeAmp=0,this.fov=0)},this.motionQuery?.addEventListener("change",this.onMotionChange),this.initParticles(),this.initRings(),this.initNumbers();const i=this.buildTrail();this.trailGeo=i.geo,this.trailMat=i.mat,this.trailMesh=i.mesh}initParticles(){const t=KS();for(let e=0;e<JS;e++){const i=new kn({color:16777215,transparent:!0,opacity:re.particleOpacity,depthWrite:!1}),s=new nt(t,i);s.visible=!1,s.frustumCulled=!1,this.scene.add(s),this.particles.push({mesh:s,mat:i,vx:0,vy:0,vz:0,g:0,t:0,life:1,active:!1})}}initRings(){const t=ZS();for(let e=0;e<QS;e++){const i=new kn({color:16777215,transparent:!0,opacity:re.ringOpacity,side:Xe,depthWrite:!1,blending:ms}),s=new nt(t,i);s.rotation.x=-Math.PI/2,s.visible=!1,this.scene.add(s),this.rings.push({mesh:s,mat:i,t:0,duration:re.ringDefaultDuration,maxRadius:re.ringDefaultMaxRadius,onSweep:null,active:!1})}}initNumbers(){for(let t=0;t<tb;t++){const e=document.createElement("div");e.className="dmgnum",e.style.display="none",this.overlay.appendChild(e),this.numbers.push({el:e,x:0,y:0,t:0,active:!1})}}buildTrail(){const t=re.trailSegments,e=new Ue;e.setAttribute("position",new yn(new Float32Array(t*2*3),3));const i=new Float32Array(t*2*4);for(let a=0;a<t;a++){const c=1-a/(t-1),l=c*c;for(let u=0;u<2;u++){const h=a*2+u;i[h*4+0]=1,i[h*4+1]=1,i[h*4+2]=1,i[h*4+3]=l}}e.setAttribute("color",new yn(i,4));const s=[];for(let a=0;a<t-1;a++){const c=a*2,l=a*2+1,u=(a+1)*2,h=(a+1)*2+1;s.push(c,l,u,l,h,u)}e.setIndex(s);const r=new kn({color:re.trailColor,vertexColors:!0,transparent:!0,opacity:re.trailOpacity,side:Xe,depthWrite:!1,blending:ms}),o=new nt(e,r);o.frustumCulled=!1,o.renderOrder=20,o.visible=!1,this.scene.add(o);for(let a=0;a<t;a++)this.trailPts.push({a:new L,b:new L});return{geo:e,mat:r,mesh:o}}hitstop(t){this.stopT=Math.max(this.stopT,t)}shake(t,e=re.shakeDefaultDuration){this.reducedMotion||(this.shakeAmp=Math.max(this.shakeAmp,t),this.shakeT=Math.max(this.shakeT,e))}fovPunch(t){this.reducedMotion||(this.fov=Math.max(this.fov,t))}burst(t,e,i,s){const r=$h.hit;this.emit(t,{count:i,color:e,speed:s?.speed??r.speed,size:s?.size??r.size,gravity:s?.gravity??r.gravity,life:s?.life??r.life})}burstPreset(t,e){this.emit(t,$h[e])}land(t,e){const i=Math.max(0,Math.min(1,e));this.shake(Rn.shakeAmp*i,Rn.shakeDuration),this.fovPunch(Rn.fovPunch*i),this.emit(t,{count:Math.round(Rn.countBase+Rn.countScale*i),color:Rn.color,speed:Rn.speedBase+Rn.speedScale*i,size:Rn.size,gravity:Rn.gravity,life:Rn.life})}areaHit(t){this.area.show(t)}ring(t,e,i,s){const r=this.rings.find(o=>!o.active);r&&(r.active=!0,r.t=0,r.duration=s?.duration??re.ringDefaultDuration,r.maxRadius=e,r.onSweep=s?.onSweep??null,r.mat.color.setHex(i),r.mat.opacity=re.ringOpacity,r.mesh.position.set(t.x,re.ringY,t.z),r.mesh.scale.setScalar(1),r.mesh.visible=!0)}trail(t,e,i){const s=re.trailSegments;this.trailHead=(this.trailHead+1)%s;const r=this.trailPts[this.trailHead];r&&(r.a.copy(t),r.b.copy(e),this.trailCount<s&&this.trailCount++,this.trailLife=re.trailLife,i!==void 0&&this.trailMat.color.setHex(i))}damageNumber(t,e,i){const s=this.overlay.clientWidth||window.innerWidth,r=this.overlay.clientHeight||window.innerHeight,o=FS(t,this.camera,s,r);if(!o.visible)return;const a=this.numbers.find(c=>!c.active)??this.oldestNumber();a&&(a.active=!0,a.t=0,a.x=o.x,a.y=o.y,a.el.className=i==="normal"?"dmgnum":`dmgnum ${i}`,a.el.textContent=e,a.el.style.left=`${o.x}px`,a.el.style.top=`${o.y}px`,a.el.style.display="",this.applyNumberFrame(a))}update(t){let e=t;return this.stopT>0&&(this.stopT-=t,e=t*re.hitstopTimeScale),this.updateTrail(t),this.updateParticles(t),this.updateRings(e),this.area.update(e),this.updateNumbers(t),e}applyCamera(t){if(this.shakeT>0?this.shakeT-=t:this.shakeAmp=0,this.fov+=(0-this.fov)*Math.min(1,t*re.fovDecayRate),this.shakeT>0){const i=this.shakeAmp*this.shakeT*re.shakeGain;this.camera.position.x+=(Math.random()-.5)*i,this.camera.position.y+=(Math.random()-.5)*i,this.camera.position.z+=(Math.random()-.5)*i}const e=this.baseFov+this.fov;Math.abs(this.camera.fov-e)>re.fovEpsilon&&(this.camera.fov+=(e-this.camera.fov)*Math.min(1,t*re.fovFollowRate),this.camera.updateProjectionMatrix())}get motionReduced(){return this.reducedMotion}stats(){return{particles:this.particles.reduce((t,e)=>t+(e.active?1:0),0),rings:this.rings.reduce((t,e)=>t+(e.active?1:0),0),numbers:this.numbers.reduce((t,e)=>t+(e.active?1:0),0)}}emit(t,e){const i=e.gravity<re.particleAdditiveGravityMax;for(let s=0;s<e.count;s++){const r=this.takeParticle();if(!r)return;const o=Math.random()*6.283,a=Math.random()*re.particleElevation,c=e.speed*(.5+Math.random());r.vx=Math.cos(o)*Math.cos(a)*c,r.vy=Math.sin(a)*c,r.vz=Math.sin(o)*Math.cos(a)*c,r.g=e.gravity,r.t=0,r.life=e.life,r.active=!0,r.mat.color.setHex(e.color),r.mat.opacity=re.particleOpacity,r.mat.blending=i?ms:ps,r.mesh.position.copy(t),r.mesh.scale.setScalar(e.size*(.5+Math.random())),r.mesh.visible=!0}}takeParticle(){const t=this.particles.length;if(t===0)return null;for(let i=0;i<t;i++){const s=(this.particleCursor+i)%t,r=this.particles[s];if(r&&!r.active)return this.particleCursor=(s+1)%t,r}const e=this.particles[this.particleCursor];return this.particleCursor=(this.particleCursor+1)%t,e??null}updateParticles(t){for(const e of this.particles){if(!e.active)continue;e.t+=t,e.vy-=e.g*t,e.mesh.position.x+=e.vx*t,e.mesh.position.y+=e.vy*t,e.mesh.position.z+=e.vz*t;const i=1-e.t/e.life;e.mat.opacity=Math.max(0,i)*re.particleOpacity,e.mesh.scale.multiplyScalar(1-t*re.particleShrink),e.t>e.life&&(e.active=!1,e.mesh.visible=!1)}}updateRings(t){for(const e of this.rings){if(!e.active)continue;e.t+=t;const i=e.t/e.duration,s=1+i*e.maxRadius;e.mesh.scale.setScalar(s),e.mat.opacity=re.ringOpacity*(1-i),e.onSweep?.(s),e.t>=e.duration&&(e.active=!1,e.onSweep=null,e.mesh.visible=!1)}}updateTrail(t){const e=re.trailSegments;if(this.trailLife>0){this.trailLife-=t;const i=this.trailGeo.attributes.position;if(!i)return;const s=i.array;for(let r=0;r<e;r++){const o=Math.min(r,Math.max(0,this.trailCount-1)),a=this.trailPts[(this.trailHead-o+e*2)%e];if(!a)break;s[r*6+0]=a.a.x,s[r*6+1]=a.a.y,s[r*6+2]=a.a.z,s[r*6+3]=a.b.x,s[r*6+4]=a.b.y,s[r*6+5]=a.b.z}i.needsUpdate=!0,this.trailMesh.visible=this.trailCount>re.trailMinPoints,this.trailMat.opacity=re.trailOpacity*Math.max(0,this.trailLife/re.trailLife)}else this.trailMesh.visible&&(this.trailMesh.visible=!1,this.trailCount=0)}oldestNumber(){let t=null;for(const e of this.numbers)(!t||e.t>t.t)&&(t=e);return t}applyNumberFrame(t){const e=Math.min(1,t.t/re.damageNumberLife);let i,s;if(e<.25){const r=td(e/.25);i=-50+-40*r,s=.6+(1.15-.6)*r}else{const r=td((e-.25)/.75);i=-90+-70*r,s=1.15+(1-1.15)*r}t.el.style.transform=`translate(-50%, ${i.toFixed(2)}%) scale(${s.toFixed(3)})`,t.el.style.opacity=String(Math.max(0,1-e))}updateNumbers(t){for(const e of this.numbers)if(e.active){if(e.t+=t,e.t>=re.damageNumberLife){e.active=!1,e.el.style.display="none";continue}this.applyNumberFrame(e)}}dispose(){if(!this.disposed){this.disposed=!0,this.motionQuery?.removeEventListener("change",this.onMotionChange);for(const t of this.particles)this.scene.remove(t.mesh),t.mat.dispose();this.particles.length=0;for(const t of this.rings)this.scene.remove(t.mesh),t.onSweep=null,t.mat.dispose();this.rings.length=0;for(const t of this.numbers)t.el.remove();this.numbers.length=0,this.area.dispose(),this.scene.remove(this.trailMesh),this.trailGeo.dispose(),this.trailMat.dispose(),this.trailPts.length=0}}}new L;const Js={x:0,y:-.16,z:.12,rotX:.25};function nb(n){const t=new Mt;return t.position.set(Js.x,Js.y,Js.z),t.rotation.x=Js.rotX,n.add(t),t}const ed=new Map;function Vo(n,t,e=.9,i=.02){const s=`${n}|${t??"-"}|${e}|${i}`,r=ed.get(s);if(r)return r;const o=t===null?null:ap(t),a=new Mi({color:n,map:o,bumpMap:o,bumpScale:.035,roughness:e,metalness:i,envMapIntensity:.55});return ed.set(s,a),a}const pe={pelY:-.2,pelYaw:-.38,pelRoll:.05,spYaw:.5,spPitch:.15,spRoll:-.05,legB:-.32,legF:.24,kneeB:.44,kneeF:.32,ankB:.12,ankF:-.15,armRX:-1.95,armRZ:.42,elbR:-.72,armLX:-.62,armLZ:-.52,elbL:-1.05},ib=2.9,sb=1.6,rb=.55,ob=.34,ab=.95,cb=.3,lb=.5,ub=4,hb=.3,nd=.16,db=.22,id=.55,fb=7,pb=.35,mb=.18,gb=-.18,xb=.12,ai=n=>n<0?0:n>1?1:n;function _b(n){const t=ai(n);return t<.28?-.42*Math.sin(t/.28*1.5708):t<.55?-.42+1.42*Math.pow((t-.28)/.27,.55):1-Math.pow((t-.55)/.45,1.4)}function vb(n){return n>.24&&n<.72}function Yl(n,t){return Math.max(ai(n),ai(Math.abs(t)))}function Mb(n,t,e){const i=pe.armRX*Yl(e,n);return t===0?i+1.85*n:t===1?i+1.05*n:i+2.3*n}function yb(n,t){return pe.elbR*Yl(t,n)+.6*n+rb*Math.max(0,n)}function Sb(n,t){const e=ai(n);return Js.rotX+ib*Yl(t,n)*(1-e)+sb*e}function bb(n,t,e,i,s,r,o){const a=i,c=Math.sin(t);for(const{i:h,leg:d,kn:f,ank:g}of[{i:0,leg:n.legL,kn:n.kneeL,ank:n.ankleL},{i:1,leg:n.legR,kn:n.kneeR,ank:n.ankleR}]){const _=t+(h?Math.PI:0),m=Math.sin(_),p=Math.cos(_);d.rotation.x=m*(.55+a*.35)*e,d.rotation.z=(h?-1:1)*e*.05;const v=Math.max(0,Math.sin(_-.9));f.rotation.x=(v*(.85+a*.75)+.06)*e+.06,g.rotation.x=(-m*.3+Math.max(0,-p)*.25)*e-.04}n.pelvis.position.y=n.pelvisY+Math.abs(c)*(.1+a*.1)*e,n.pelvis.rotation.z=-c*(.05+a*.05)*e,n.pelvis.rotation.y=c*(.1+a*.08)*e,n.spine.rotation.x=a*.22*e+s,n.spine.rotation.y=-c*(.09+a*.07)*e,n.spine.rotation.z=c*.03*e+r;const l=(.55+a*.45)*e;n.armL.rotation.x=-c*l,n.armL.rotation.z=.06*e,o||(n.armR.rotation.x=c*l,n.armR.rotation.z=-.06*e);const u=-.22-a*.65*e;n.elbL.rotation.x=u-Math.max(0,c)*.5*e,o||(n.elbR.rotation.x=u-Math.max(0,-c)*.5*e)}function Eb(n,t,e,i){if(t<=.002)return;const s=Math.sin(e*2.7)*.5+.5;n.pelvis.position.y+=pe.pelY*t,n.pelvis.rotation.y+=pe.pelYaw*t,n.pelvis.rotation.z+=pe.pelRoll*t,n.spine.rotation.y+=pe.spYaw*t,n.spine.rotation.x+=(pe.spPitch+s*.025)*t,n.spine.rotation.z+=pe.spRoll*t,n.legL.rotation.x+=pe.legB*t,n.legR.rotation.x+=pe.legF*t,n.legL.rotation.z+=-.1*t,n.legR.rotation.z+=.1*t,n.kneeL.rotation.x+=pe.kneeB*t,n.kneeR.rotation.x+=pe.kneeF*t,n.ankleL.rotation.x+=pe.ankB*t,n.ankleR.rotation.x+=pe.ankF*t,i||(n.armR.rotation.x+=(pe.armRX-s*.05)*t,n.armR.rotation.z+=pe.armRZ*t,n.elbR.rotation.x+=pe.elbR*t),n.armL.rotation.x+=pe.armLX*t,n.armL.rotation.z+=pe.armLZ*t,n.elbL.rotation.x+=pe.elbL*t}function wb(n,t,e,i){const s=pe.armRZ*i,r=pe.spYaw*i,o=pe.spPitch*i,a=n.pelvisY+pe.pelY*i;n.armR.rotation.x=Mb(t,e,i),e===0?(n.armR.rotation.z=s+.28*t,n.spine.rotation.y=r-.85*t,n.spine.rotation.x=o+.1*t,n.pelvis.rotation.y=pe.pelYaw*i+.3*t):e===1?(n.armR.rotation.z=s-1.7*t,n.spine.rotation.y=r+.72*t,n.spine.rotation.x=o+.06*t,n.pelvis.rotation.y=pe.pelYaw*i-.34*t):(n.armR.rotation.z=s-.18*t,n.spine.rotation.y=r-.22*t,n.spine.rotation.x=o+.42*t,n.pelvis.position.y=a-.26*Math.max(0,t));const c=Math.max(0,t);n.elbR.rotation.x=yb(t,i),n.weaponSlot.position.z=Js.z+ob*c,n.legR.rotation.x+=c*.3,n.legL.rotation.x-=c*.22,n.kneeR.rotation.x+=c*.18}function sd(n,t){const e=ai(t.stance??0),i=ai(t.run01??0),s=t.time??0,r=ai(t.attackT),o=r>0,a=ai(t.speed01)*(ab-e*cb);if(bb(n,t.walkPhase,a,i*(1-e*lb),t.leanX??0,t.leanZ??0,o),Eb(n,e,s,o),t.airborne&&id>0){const u=Math.min(1,Math.abs(t.vy??0)/fb+pb)*id;n.legL.rotation.x=-.75*u,n.legR.rotation.x=-.75*u,n.kneeL.rotation.x=1.5*u,n.kneeR.rotation.x=1.5*u,n.ankleL.rotation.x=-.6*u,n.ankleR.rotation.x=-.6*u,n.armL.rotation.x-=.35*u,o||(n.armR.rotation.x-=.35*u)}const c=o?_b(r):0;if(o&&wb(n,c,t.comboStep,e),n.head.rotation.y=t.headYaw??0,t.hurtT>0){const u=ai(t.hurtT/mb);n.spine.rotation.x+=gb*u,n.head.rotation.x=xb*u}else n.head.rotation.x=0;n.weaponSlot.rotation.x=Sb(c,e),n.root.rotation.z=t.dead?Math.min(Math.PI/2,(t.deadT??0)*ub):0;const l=t.landT??0;if(l>0&&!t.dead){const u=l/hb;n.root.scale.set(1+u*nd,1-u*db,1+u*nd)}else n.root.scale.set(1,1,1)}const yl={shirt:3108816,pants:3752271,skin:15909002,hair:3811868},rd=[3108816,13650479,4173402,13676591,9063120,3127488,13660072,9080730];function Tb(n){const t=rd.length,e=rd[(n%t+t)%t]??yl.shirt;return{...yl,shirt:e}}function Ma(n,t={}){const e=new Mt,i=t.scale??1,s=!(t.simple??!1),r=[],o=Vo(n.shirt,"cloth"),a=Vo(n.skin,"skin",.78),c=Vo(n.pants,"denim"),l=Vo(n.hair,"fuzz",.97),u={shirt:[o],skin:[a],pants:[c],hair:[l]},h=Pt(2436150,"cloth",.72),d=Pt(16185594,null,.32),f=Pt(1316894,null,.18,.12),g=Pt(14201418,"metal",.32,.7),_=Pt(10115658,null,.6),m=Pt(4864556,"cloth",.86),p=s?1:0,v=(G,J,lt,tt,St)=>{const Lt=new nt(Zt(G*i,J*i,lt*i,tt*i,p),St);return Lt.castShadow=!0,Lt.receiveShadow=!0,Lt},M=(G,J,lt)=>{const tt=new Mt;return tt.position.set(G*i,J*i,0),lt.add(tt),tt},x=1.58,C=new Mt;C.position.y=x*i,e.add(C);const w=new Mt;w.position.y=.84*i,C.add(w);const T=(G,J,lt,tt,St=w)=>(G.position.set(J*i,lt*i,tt*i),St.add(G),r.push(G),G);s&&(T(v(1.63,.28,.99,.09,h),0,.06,0,C),T(v(.32,.32,.14,.05,g),0,.06,.5,C),T(v(.34,.4,.26,.1,m),.62,-.04,.24,C));const R=T(v(1.55,1.8,.92,.26,o),0,0,0);s&&(T(v(1.6,.22,.98,.08,h),0,.8,0),T(v(.16,1.5,.06,.03,h),0,.02,.47),T(v(.3,.3,.1,.06,h),-.42,.34,.48)),T(v(.78,.26,.8,.11,o),-.72,.66,0),T(v(.78,.26,.8,.11,o),.72,.66,0),s||(T(v(1.63,.24,.99,.08,h),0,.06,0,C),T(v(1.6,.2,.98,.07,h),0,.8,0),T(v(.5,.3,.48,.15,a),0,.98,0));const S=new Mt;S.position.set(0,1.58*i,0),w.add(S);const y=(G,J,lt,tt)=>T(G,J,lt,tt,S);if(s&&y(v(.52,.34,.5,.16,a),0,-.78,0),y(v(1.32,1.3,1.3,.3,a),0,0,0),y(v(1.42,.42,1.42,.17,l),0,.62,0),s){y(v(1.44,.34,.28,.11,l),0,.32,-.58);for(let G=0;G<5;G++){const J=(G-2)*.26;y(v(.2,.3+Math.abs(J)*.3,.12,.05,l),J,.4,.6)}y(v(.16,.3,.3,.08,a),-.68,.02,0),y(v(.16,.3,.3,.08,a),.68,.02,0)}const P=[];P.push(y(v(.3,.34,.1,.06,d),-.31,.1,.66)),P.push(y(v(.3,.34,.1,.06,d),.31,.1,.66)),y(v(.15,.2,.08,.035,f),-.31,.07,.71),y(v(.15,.2,.08,.035,f),.31,.07,.71),s&&(y(v(.06,.07,.05,.02,d),-.27,.13,.75),y(v(.06,.07,.05,.02,d),.35,.13,.75),y(v(.34,.09,.1,.03,l),-.31,.34,.68),y(v(.34,.09,.1,.03,l),.31,.34,.68),y(v(.2,.22,.22,.08,a),0,-.12,.7),y(v(.44,.09,.08,.03,_),0,-.38,.68));const O=M(-1.04,.74,w),U=M(1.04,.74,w),H=M(0,-.78,O),X=M(0,-.78,U),W=M(0,-.72,H),Z=M(0,-.72,X);for(const{a2:G,e2:J,h2:lt,sd:tt}of[{a2:O,e2:H,h2:W,sd:-1},{a2:U,e2:X,h2:Z,sd:1}]){const St=v(.56,.88,.64,.2,o);St.position.y=-.42*i,G.add(St),r.push(St);const Lt=v(.5,.82,.58,.19,o);if(Lt.position.y=-.38*i,J.add(Lt),r.push(Lt),s){const Gt=v(.6,.15,.68,.05,h);Gt.position.y=-.74*i,J.add(Gt),r.push(Gt);const j=v(.18,.3,.2,.08,a);j.position.set(tt*.24*i,-.16*i,.14*i),j.rotation.z=-tt*.5,lt.add(j),r.push(j)}const kt=v(.52,.48,.6,.19,a);kt.position.y=-.17*i,lt.add(kt),r.push(kt)}H.rotation.x=-.25,X.rotation.x=-.25;const V=M(-.42,0,C),at=M(.42,0,C),dt=M(0,-.72,V),xt=M(0,-.72,at),Ft=M(0,-.66,dt),Qt=M(0,-.66,xt);for(const{l:G,k:J,an:lt}of[{l:V,k:dt,an:Ft},{l:at,k:xt,an:Qt}]){const tt=v(.68,.8,.74,.21,c);tt.position.y=-.4*i,G.add(tt),r.push(tt);const St=v(.64,.74,.7,.2,c);if(St.position.y=-.37*i,J.add(St),r.push(St),s){const kt=v(.7,.18,.76,.07,c);kt.position.set(0,-.02*i,.03*i),J.add(kt),r.push(kt);const Gt=v(.5,.07,.1,.03,d);Gt.position.set(0,-.1*i,.5*i),lt.add(Gt),r.push(Gt);const j=v(.8,.1,.98,.04,f);j.position.set(0,-.33*i,.1*i),lt.add(j),r.push(j)}const Lt=v(.78,.36,.96,.13,h);Lt.position.set(0,-.18*i,.1*i),lt.add(Lt),r.push(Lt)}return{root:e,head:S,torso:R,armL:O,armR:U,legL:V,legR:at,weaponSlot:nb(Z),elbL:H,elbR:X,kneeL:dt,kneeR:xt,handL:W,handR:Z,ankleL:Ft,ankleR:Qt,pelvis:C,spine:w,pelvisY:x*i,scale:i,eyes:P,parts:r,mats:u}}const od=new Map,ad=new Map,jl=new WeakSet;function Si(n,t){const e=od.get(n);if(e)return e;const i=t();return od.set(n,i),jl.add(i),i}function Ab(n,t){const e=ad.get(n);if(e)return e;const i=t();return ad.set(n,i),jl.add(i),i}function Xt(n){return jl.add(n),n}class Rb extends zn{constructor(t,e,i,s){super(),this.radius=t,this.height=e,this.turns=i,this.y0=s}getPoint(t,e=new L){const i=t*Math.PI*2*this.turns,s=this.radius+Math.sin(t*Math.PI)*this.radius*.09;return e.set(Math.cos(i)*s,this.y0+t*this.height,Math.sin(i)*s)}}function Bn(n,t,e,i){return Si(`bl${n},${t},${e},${i}`,()=>{const s=new Ts;s.moveTo(-t,0),s.lineTo(-t*.97,n*.58),s.lineTo(-t*.74,n*.87),s.quadraticCurveTo(-t*.46,n*(1-i*.02),0,n),s.quadraticCurveTo(t*.46,n*(1-i*.02),t*.74,n*.87),s.lineTo(t*.97,n*.58),s.lineTo(t,0),s.closePath();const r=new io(s,{depth:e,bevelEnabled:!0,bevelThickness:e*.36,bevelSize:e*.32,bevelSegments:2,curveSegments:8,steps:10});r.translate(0,0,-e/2);const o=r.getAttribute("position"),a=new L;for(let c=0;c<o.count;c++){a.fromBufferAttribute(o,c);const l=Math.min(1,Math.max(0,a.y/n));o.setXYZ(c,a.x*(1-l*.07),a.y,a.z*(1-l*.45))}return o.needsUpdate=!0,r.computeVertexNormals(),r})}const we=(n,t)=>new st(n,t);function Sl(n,t,e=20){return Si(`la${n},${e}`,()=>new zl([...t],e))}function Kl(n,t,e,i,s,r,o){return Si(`hx${n},${t},${e},${i},${s},${r},${o}`,()=>new Gl(new Rb(n,t,e,i),s,r,o,!1))}function Cb(n){return Si(`gd${n}`,()=>{const e=new Ts;e.moveTo(-n+.055,-.055),e.lineTo(n-.055,-.055),e.absarc(n-.055,0,.055,-Math.PI/2,Math.PI/2,!1),e.lineTo(-n+.055,.055),e.absarc(-n+.055,0,.055,Math.PI/2,Math.PI*1.5,!1);const i=new io(e,{depth:.13,bevelEnabled:!0,bevelThickness:.02,bevelSize:.018,bevelSegments:2,curveSegments:6});i.translate(0,0,-.065);const s=i.getAttribute("position"),r=new L;for(let o=0;o<s.count;o++)r.fromBufferAttribute(s,o),s.setXYZ(o,r.x,r.y+r.x*r.x*.45,r.z*(1+Math.max(0,1-Math.abs(r.x)*5)*.25));return s.needsUpdate=!0,i.computeVertexNormals(),i})}const ji=(n,t,e)=>Si(`sp${n},${t},${e}`,()=>new vi(n,t,e)),Ra=(n,t,e,i)=>Si(`cy${n},${t},${e},${i}`,()=>new Yi(n,t,e,i)),Pb=(n,t,e)=>Si(`co${n},${t},${e}`,()=>new _r(n,t,e)),Zl=(n,t,e,i)=>Si(`to${n},${t},${e},${i}`,()=>new Mr(n,t,e,i)),cd=(n,t)=>Si(`oc${n},${t}`,()=>new so(n,t));function Ib(){return{WOOD:Xt(Pt(10251071,"wood",.8)),WOODD:Xt(Pt(7161382,"wood",.84)),CORD:Xt(Pt(11901544,"cloth",.92)),STEEL:Xt(Pt(14673646,"metal",.22,.88)),BRASS:Xt(Pt(14201418,"metal",.28,.8)),LEATH:Xt(Pt(4861724,"cloth",.85)),BREAD:Xt(Pt(14659175,"rock",.9)),CRUST:Xt(Pt(11040314,"rock",.88))}}function Lb(){return Ab("ice",()=>new Mi({color:11068664,transparent:!0,opacity:.88,roughness:.08,metalness:.12,envMapIntensity:2.4}))}function Db(n){return(t,e,i=0,s=0,r=0,o=0,a=0,c=0)=>{Xt(t),Xt(e);const l=new nt(t,e);return l.position.set(i,s,r),l.rotation.set(o,a,c),l.castShadow=!0,n.add(l),l}}function pn(n,t,e,i){const s=i??t.WOODD;n(Sl(`grip${e}`,[we(0,-e*.55),we(.055,-e*.52),we(.07,-e*.42),we(.062,-e*.1),we(.058,e*.18),we(.07,e*.44),we(.062,e*.52),we(0,e*.55)]),s),n(Kl(.064,e*.86,5.5,-e*.44,110,.017,6),t.CORD),n(Sl(`butt${e}`,[we(0,-e*.86),we(.05,-e*.84),we(.088,-e*.74),we(.098,-e*.66),we(.082,-e*.6),we(0,-e*.57)]),s)}function br(n,t,e,i,s=.22){n(Cb(e),i??t.WOODD,0,s,0)}const kb=1337;function Nb(n,t){const e=new Mt;e.name=`weapon:${n}`;const i=Db(e),s=Ib(),r=t?.classId??null,o=yr(kb);switch(n){case"stick":r==="parsley"?Ob(i,s):Ub(i,s);break;case"mop":Fb(i,s,o);break;case"dagger":zb(i,s);break;case"spear":Bb(i,s);break;case"great":Hb(i,s);break;case"flame":Gb(i,s);break;case"baguette":Vb(i,s);break;case"trident":Wb(i,s);break;case"magmablade":$b(i,s,o);break;case"frostspear":Xb(i,s,o);break;case"judgement":qb(i,s);break;default:Yb(i,s,r);break}return e}function Ub(n,t){n(Sl("stick",[we(0,-.2),we(.09,-.15),we(.1,.9),we(.16,1.5),we(.19,1.72),we(.1,1.86),we(0,1.9)]),t.WOOD,0,.1,0);for(let e=0;e<6;e++){const i=e*1.9;n(ji(.06,8,6),t.WOODD,Math.cos(i)*.15,1.35+Math.sin(i*1.7)*.28,Math.sin(i)*.15)}pn(n,t,.42)}function Ob(n,t){n(Bn(2.2,.19,.3,.4),t.BREAD,0,.3,0).rotation.z=.05;for(let e=0;e<5;e++)n(Zt(.42,.055,.4,.02),t.CRUST,0,.6+e*.36,0,0,0,.28);pn(n,t,.5,t.CRUST)}function Fb(n,t,e){n(Ra(.062,.07,2.4,14),Xt(Pt(11055288,"metal",.35,.7)),0,1.25,0),n(Zt(.74,.26,.42,.07),Xt(Pt(4165321,"cloth",.8)),0,2.42,0);const i=Xt(Pt(14542572,"fuzz",.96));for(let s=-3;s<=3;s++)n(Zt(.1,.62,.34,.04),i,s*.11,2.78,0,0,0,(e()-.5)*.2);pn(n,t,.44,Xt(Pt(2764856,"cloth",.9)))}function zb(n,t){n(Bn(.95,.11,.07,1),t.STEEL,0,.28,0),br(n,t,.26,t.BRASS,.24),pn(n,t,.4)}function Bb(n,t){n(Ra(.055,.065,3.2,12),t.WOOD,0,1.35,0),n(Bn(.85,.13,.1,1),t.STEEL,0,2.9,0),n(Zl(.075,.02,8,16),t.BRASS,0,2.82,0,Math.PI/2,0,0);for(let e=0;e<3;e++)n(Kl(.062,.2,1.5,.6+e*.5,30,.014,5),t.CORD);pn(n,t,.5)}function Hb(n,t){n(Bn(2.9,.24,.15,1),t.STEEL,0,.42,0),n(Zt(.09,2.5,.055,.02),Xt(Pt(11056320,"metal",.3,.85)),0,1.6,0),br(n,t,.62,t.BRASS,.34),pn(n,t,.72,t.LEATH),n(ji(.14,14,10),t.BRASS,0,-.66,0)}function Gb(n,t){n(Bn(2.35,.19,.12,1),Xt(Pt(16742970,"metal",.34,.5,9054720)),0,.34,0),n(Zt(.07,2,.05,.02),Xt(Pt(16765514,null,.3,.4,9067008)),0,1.3,0),br(n,t,.46,Xt(Pt(5909010,"metal",.5,.4)),.28),pn(n,t,.56,Xt(Pt(3807756,"cloth",.9))),n(ji(.16,16,12),Xt(Pt(16765514,null,.2,.3,16738816)),0,-.56,0)}function Vb(n,t){n(Bn(2.75,.26,.42,.3),t.BREAD,0,.36,0).rotation.z=.04;for(let e=0;e<6;e++)n(Zt(.5,.07,.46,.025),t.CRUST,0,.72+e*.38,0,0,0,.3);n(ji(.2,16,12),Xt(Pt(16765514,null,.3,.4,6965760)),0,3.2,0),pn(n,t,.54,t.CRUST)}function Wb(n,t){const e=Xt(Pt(7330016,"metal",.18,.9)),i=Xt(Pt(1924206,"metal",.3,.75));n(Ra(.06,.075,3,12),i,0,1.25,0);for(const s of[-1,0,1])n(Bn(1.05,.09,.07,1),e,s*.32,2.55,0,0,0,s*.1);n(Zt(.86,.14,.14,.05),i,0,2.5,0);for(let s=0;s<4;s++)n(Kl(.07,.22,1.6,.35+s*.45,24,.014,5),t.CORD);n(ji(.16,14,10),Xt(Ie(9437168,2.4)),0,-.56,0),pn(n,t,.52,i)}function $b(n,t,e){n(Bn(3.2,.3,.2,1),Xt(Pt(2757906,"rock",.9,.1)),0,.5,0);const i=Xt(Ie(16738842,2.6));for(let s=0;s<7;s++)n(Zt(.1,.34,.06,.03),i,s%2?.07:-.07,.95+s*.36,.055,0,0,(e()-.5)*.4);n(Zt(.06,2.6,.04,.02),Xt(Ie(16761402,3)),0,1.7,0),br(n,t,.7,Xt(Pt(3808532,"rock",.9)),.36),pn(n,t,.78,Xt(Pt(2364176,"cloth",.92))),n(ji(.19,16,12),Xt(Ie(16747050,3)),0,-.72,0)}function Xb(n,t,e){const i=Lb();n(Ra(.055,.07,3.4,12),Xt(Pt(4878212,"metal",.3,.7)),0,1.4,0),n(Bn(1.5,.16,.11,1),i,0,2.9,0);for(let s=0;s<5;s++){const r=s/5*6.283;n(Pb(.11,.7,5),i,Math.cos(r)*.24,2.65,Math.sin(r)*.24,(e()-.5)*.5,0,(e()-.5)*.5)}n(cd(.2,0),Xt(Ie(10479871,2.8)),0,2.5,0),n(Zl(.085,.022,8,16),i,0,2.3,0,Math.PI/2,0,0),pn(n,t,.56,Xt(Pt(3032662,"cloth",.9))),n(cd(.17,0),Xt(Ie(14677247,2.6)),0,-.6,0)}function qb(n,t){const e=Xt(Ie(16769162,2.2)),i=Xt(Pt(15779930,"metal",.2,.95));n(Bn(2.9,.24,.15,1),Xt(Pt(16184036,"metal",.16,.94)),0,.42,0),n(Zt(.06,2.6,.04,.02),Xt(Ie(16769162,2.8)),0,1.62,0),br(n,t,.7,i,.34);for(const s of[-1,1])n(Zt(.34,.075,.11,.035),i,s*.7,.4,0,0,0,-s*.55);n(Zl(.26,.028,8,24),e,0,.3,0,Math.PI/2,0,0),pn(n,t,.72,Xt(Pt(5917228,"cloth",.88))),n(ji(.15,16,12),Xt(Ie(16769162,2.4)),0,-.66,0)}function Yb(n,t,e){const i=e==="boss"?Xt(Pt(9117471,"metal",.28,.8)):t.STEEL;n(Bn(2.15,.16,.1,1),i,0,.3,0),br(n,t,.42,t.BRASS,.26),pn(n,t,.5,t.LEATH),n(ji(.11,14,10),t.BRASS,0,-.52,0)}function oe(){return new Mt}const fp=new WeakSet,pp=new WeakSet;function lo(n){return fp.add(n),n}function Ca(n){return pp.add(n),n}function jb(n){return fp.has(n)}function mp(n){return pp.has(n)}const ld=new Map,ud=new Map,Un=n=>n.toFixed(4);function Rs(n,t){const e=ld.get(n);if(e)return e;const i=lo(t());return ld.set(n,i),i}function Kb(n,t){const e=ud.get(n);if(e)return e;const i=Ca(t());return ud.set(n,i),i}const Zb=(n,t,e)=>Rs(`sph|${Un(n)}|${t}|${e}`,()=>new vi(n,t,e)),Jb=(n,t,e,i)=>Rs(`dom|${Un(n)}|${t}|${e}|${Un(i)}`,()=>new vi(n,t,e,0,6.283,0,i)),Ke=(n,t,e)=>Rs(`con|${Un(n)}|${Un(t)}|${e}`,()=>new _r(n,t,e)),hd=(n,t,e,i)=>Rs(`cyl|${Un(n)}|${Un(t)}|${Un(e)}|${i}`,()=>new Yi(n,t,e,i)),Qb=n=>Rs(`ddc|${Un(n)}`,()=>new Bl(n,0)),gp=n=>Rs(`oct|${Un(n)}`,()=>new so(n,0)),xp=(n,t,e)=>Rs(`shp|${n}|${e}`,()=>new Hl(t(),e));function ce(n,t,e=.9,i=0,s=0){return Ca(Pt(n,t??null,e,i,s))}function Ze(n,t=2.2){return Ca(Ie(n,t))}function tE(n,t=0){return ce(n,null,.88,.02,t)}function _i(n){const t=`std|${n.color}|${Un(n.roughness)}|${n.metalness??0}|${n.opacity??1}|${n.emissive??0}|${n.envMapIntensity??1}|${n.doubleSide?1:0}|${n.depthWrite===!1?0:1}`;return Kb(t,()=>{const e=new Mi({color:n.color,roughness:n.roughness,metalness:n.metalness??0,emissive:n.emissive??0,envMapIntensity:n.envMapIntensity??1});return n.opacity!==void 0&&n.opacity<1&&(e.transparent=!0,e.opacity=n.opacity),n.doubleSide&&(e.side=Xe),n.depthWrite===!1&&(e.depthWrite=!1),e})}function ze(n,t){return new nt(n,t)}function gi(n,t){const e=new nt(n,t);return e.castShadow=!0,e}function _p(n,t){const e=new nt(n,t);return e.castShadow=!0,e.receiveShadow=!0,e}function On(n,t,e,i,s,r=0){return ze(lo(Zt(n,t,e,i,r)),s)}function Jl(n,t,e,i,s,r=0){return gi(lo(Zt(n,t,e,i,r)),s)}function Oe(n,t,e,i,s,r=0){return _p(lo(Zt(n,t,e,i,r)),s)}function ur(n,t,e,i,s=0){return gi(Ke(n,t,e||4),tE(i,s))}function Be(n,t,e=12,i=9){return ze(Zb(n,e,i),t)}function he(n,t,e,i,s){return _p(lo(cp(n,e,i,s)),t)}function wt(n,t,e,i,s){return t.position.set(e,i,s),n.add(t),t}function di(n,t,e){const i=new Mt;return i.position.set(t,e,0),n.add(i),i}const Sn=[-1,1];function Er(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return yr(t||1)}function eE(){const n=new Mt,t=Er("slime"),e=_i({color:6474058,roughness:.12,metalness:.05,opacity:.82,envMapIntensity:2}),i=he(1.5,e,.16,2.4,22);i.scale.set(1,.78,1),i.position.y=1.2,n.add(i);const s=he(.55,ce(3111460,null,.5,0,993800),.1,4,12);s.position.y=1,n.add(s);for(const o of Sn)wt(n,Be(.24,ce(16185594,null,.2),12,9),o*.42,1.55,1.12),wt(n,Be(.12,ce(1185812,null,.15,.1),10,8),o*.45,1.53,1.28);for(let o=0;o<4;o++){const a=Be(.1+t()*.1,e,8,6),c=t()*6.28;wt(n,a,Math.cos(c)*1.2,.4+t()*1.4,Math.sin(c)*1.2)}const r={kind:"slime",armL:oe(),armR:oe(),legL:oe(),legR:oe(),body:i,baseScale:1,bob:0};return n.userData=r,n.add(r.armR),n}function nE(){const n=new Mt,t=4862808,e=3153983,i=ce(t,"fur",.95),s=he(.52,i,.05,6,16);s.scale.set(1,1.1,1.25),s.position.y=2.3,n.add(s),wt(n,he(.38,i,.04,8,14),0,2.85,.3);const r=ur(.07,.24,4,16777215);r.rotation.x=Math.PI,wt(n,r,0,2.6,.58);const o=new Mt,a=new Mt,c=_i({color:e,roughness:.72,opacity:.94,doubleSide:!0}),l=ce(t,null,.8),u=[[o,-1],[a,1]];for(const[d,f]of u){wt(n,d,f*.4,2.45,0);const g=gi(xp("batWing",()=>{const _=new Ts;return _.moveTo(0,0),_.bezierCurveTo(.9,.7,2,.5,2.5,-.1),_.bezierCurveTo(1.9,-.35,1.6,-.75,1.2,-.5),_.bezierCurveTo(.9,-.9,.5,-.6,0,0),_},12),c);g.rotation.set(-Math.PI/2,0,f<0?Math.PI:0),d.add(g);for(let _=0;_<3;_++){const m=On(2.2,.06,.06,.02,l);m.position.set(f*1.1,0,-.35+_*.35),m.rotation.y=f*(.1-_*.16),d.add(m)}}for(const d of Sn)wt(n,ur(.15,.55,5,e),d*.21,3.24,.24),wt(n,Be(.09,Ze(14699322,2.6),10,8),d*.16,2.9,.6),wt(n,On(.1,.4,.1,.04,ce(e,null,.85),1),d*.2,1.75,-.1);const h={kind:"bat",armL:oe(),armR:oe(),legL:oe(),legR:oe(),wingL:o,wingR:a,baseScale:1,bob:0};return n.userData=h,n.add(h.armR),n}function iE(){const n=new Mt,t=6975612,e=4672856,i=14213866,s=ce(t,"fur",.97),r=ce(e,"fur",.97),o=ce(i,"fur",.97),a=ce(2764342,null,.8),c=(v,M,x,C)=>Oe(v,M,x,Math.min(v,M,x)*.3,C),l=he(1,s,.07,4.5,18);l.scale.set(1.02,1,2.3),wt(n,l,0,1.55,-.1),wt(n,c(.9,.5,2,o),0,1.14,-.1),wt(n,c(.85,.85,.8,s),0,1.95,1.25);const u=he(.5,r,.05,7,14);u.scale.set(1,.92,1.15),wt(n,u,0,2.1,1.85),wt(n,c(.5,.44,.78,s),0,1.9,2.45),wt(n,Be(.14,ce(1316894,null,.2,.1),10,8),0,1.98,2.9);const h=he(.3,r,.05,8,12);h.scale.set(1,1,3.4),wt(n,h,0,1.85,-1.7).rotation.x=-.55;for(const v of Sn){wt(n,ur(.22,.55,5,e),v*.3,2.68,1.7),wt(n,Be(.1,Ze(9429247,2.4),10,8),v*.28,2.22,2.3);for(let M=0;M<3;M++)wt(n,ur(.1,.3,4,i),v*.1,2.2+M*.02,.6-M*.6)}const d=(v,M)=>{const x=new Mt;x.position.set(v,1.35,M),n.add(x);const C=c(.32,1.3,.36,r);C.position.y=-.66,x.add(C);const w=c(.38,.22,.52,a);return w.position.set(0,-1.35,.1),x.add(w),x},f=d(-.44,.95),g=d(.44,.95),_=d(-.44,-1),m=d(.44,-1),p={kind:"quad",armL:f,armR:g,legL:_,legR:m,fl:f,fr:g,bl:_,br:m,baseScale:1,bob:0};return n.userData=p,n}function sE(){const n=new Mt,t=ce(3024438,"fur",.9),e=ce(1643296,"fur",.9),i=he(1,t,.09,3.6,18);i.scale.set(1,.85,1.2),wt(n,i,0,1.5,-1),wt(n,On(.5,.1,1,.04,ce(12600366,null,.6)),0,2.26,-1),wt(n,he(.62,e,.06,6,14),0,1.45,.35);const s=Ze(14699322,2.8);for(let a=0;a<4;a++){const c=a<2?-1:1;wt(n,Be(.1,s,8,6),c*(.16+a%2*.22),1.68-a%2*.16,.82)}for(const a of Sn){const c=ur(.1,.45,5,14209728);c.rotation.x=Math.PI*.85,wt(n,c,a*.2,1.05,.78)}const r=[];for(let a=0;a<8;a++){const c=a<4?-1:1,l=a%4,u=new Mt;u.position.set(c*.45,1.5,.7-l*.42),u.rotation.y=c*(.5-l*.32),n.add(u);const h=Jl(1.15,.14,.14,.06,t);h.position.set(c*.55,.3,0),h.rotation.z=-c*.5,u.add(h);const d=On(1.25,.11,.11,.05,e);d.position.set(c*1.5,-.35,0),d.rotation.z=c*.85,u.add(d),r.push(u)}const o={kind:"spider",armL:oe(),armR:oe(),legL:oe(),legR:oe(),legs:r,baseScale:1,bob:0};return n.userData=o,n.add(o.armR),n}function rE(){const n=new Mt,t=_i({color:12572904,roughness:.1,opacity:.5,emissive:1847360,envMapIntensity:2.2,depthWrite:!1}),e=ce(790550,null,.3),i=he(.92,t,.08,3.2,18);i.scale.set(1,1.2,1),i.position.y=2.5,n.add(i);for(let c=0;c<5;c++){const l=ze(Ke(.3,1.1,8),t);l.rotation.x=Math.PI,wt(n,l,(c-2)*.38,1.35,0)}for(const c of Sn)wt(n,On(.24,.34,.1,.06,e),c*.3,2.7,.8);wt(n,On(.3,.4,.1,.08,e),0,2.2,.82);const s=new Mt,r=new Mt,o=[[s,-1],[r,1]];for(const[c,l]of o){wt(n,c,l*.86,2.6,0);const u=Be(.24,t,10,8);u.scale.set(1,2.4,1),u.position.y=-.55,c.add(u)}const a={kind:"ghost",armL:s,armR:r,legL:oe(),legR:oe(),baseScale:1,bob:0};return n.userData=a,n}function oE(){const n=new Mt,t=Er("lava"),e=he(.75,ce(16747066,null,.35,.1,16730624),.09,4,16);e.position.y=2.3,n.add(e);const i=ce(3809304,"rock",.96),s=[];for(let o=0;o<11;o++){const a=.4+t()*.55,c=gi(Qb(a*.7),i),l=o/11*Math.PI*2,u=1+t()*.45,h=1.1+t()*2.4;wt(n,c,Math.cos(l)*u,h,Math.sin(l)*u),s.push({m:c,a:l,r:u,y:h})}for(const o of Sn)wt(n,Be(.15,Ze(16765514,3),10,8),o*.26,2.7,.62);const r={kind:"lava",armL:oe(),armR:oe(),legL:oe(),legR:oe(),chunks:s,core:e,baseScale:1,bob:0};return n.userData=r,n.add(r.armR),n}function aE(){const n=new Mt,t=_i({color:9427184,roughness:.1,opacity:.5,emissive:1722982,envMapIntensity:2.2,depthWrite:!1}),e=gi(Jb(1.15,18,12,Math.PI*.62),t);e.scale.set(1,.95,1),e.position.y=2.9,n.add(e),wt(n,he(.55,Ze(16743120,1.6),.06,5,12),0,2.7,0);const i=[];for(let r=0;r<10;r++){const o=r/10*6.283,a=new Mt;a.position.set(Math.cos(o)*.85,2.75,Math.sin(o)*.85),n.add(a);const c=On(.11,1.5,.11,.05,t);c.position.y=-.75,a.add(c);const l=On(.08,1.2,.08,.035,t);l.position.y=-2,a.add(l),i.push(a)}const s={kind:"jelly",armL:oe(),armR:oe(),legL:oe(),legR:oe(),tent:i,dome:e,baseScale:1,bob:0};return n.userData=s,n.add(s.armR),n}function cE(){const n=new Mt,t=Er("iceElem"),e=_i({color:11066608,roughness:.1,metalness:.06,opacity:.82,envMapIntensity:2}),i=he(.7,Ze(10479871,2),.08,4,14);i.position.y=2.3,n.add(i);const s=[];for(let o=0;o<10;o++){const a=.45+t()*.6,c=gi(gp(a*.8),e),l=o/10*6.283,u=1+t()*.5,h=1.1+t()*2.4;wt(n,c,Math.cos(l)*u,h,Math.sin(l)*u),s.push({m:c,a:l,r:u,y:h})}for(const o of Sn)wt(n,Be(.14,Ze(14677247,3),10,8),o*.26,2.66,.6);const r={kind:"lava",armL:oe(),armR:oe(),legL:oe(),legR:oe(),chunks:s,core:i,baseScale:1,bob:0};return n.userData=r,n.add(r.armR),n}function lE(){const n=new Mt,t=5909098,e=3414080,i=ce(t,"scale",.68,.12),s=ce(e,"scale",.68,.12),r=ce(11569738,"scale",.8),o=ce(14207400,"bone",.6,.1),a=he(1.7,i,.1,2.2,24);a.scale.set(1,.92,1.6),a.position.y=3.3,n.add(a);const c=he(1.25,r,.07,3,16);c.scale.set(.82,.55,1.45),wt(n,c,0,2.65,.1);for(let x=0;x<4;x++)wt(n,he(.8-x*.11,i,.05,6,12),0,3.8+x*.5,1.7+x*.8);const l=he(.9,s,.06,5,18);l.scale.set(1,.85,1.35),wt(n,l,0,5.7,5),wt(n,On(.95,.3,1.5,.12,s),0,5.2,5.35);for(let x=0;x<5;x++)wt(n,ur(.09,.32,4,16777215),(x-2)*.19,5.3,5.85).rotation.x=Math.PI;for(const x of Sn){const C=gi(Ke(.18,1.3,6),o);C.rotation.x=-.7,wt(n,C,x*.48,6.5,4.6),wt(n,Be(.18,Ze(16765514,3),12,9),x*.54,5.9,5.6);const w=ze(Ke(.1,.5,5),o);w.rotation.x=Math.PI*.6,wt(n,w,x*.6,5.2,4.9)}const u=new Mt,h=new Mt,d=_i({color:e,roughness:.6,metalness:.05,opacity:.95,doubleSide:!0}),f=[[u,-1],[h,1]];for(const[x,C]of f){wt(n,x,C*1.3,4.4,0);const w=gi(xp("dragonWing",()=>{const T=new Ts;return T.moveTo(0,0),T.bezierCurveTo(2,1.6,4.6,1.1,5.6,-.4),T.bezierCurveTo(4.4,-1,3.6,-2.2,2.6,-1.4),T.bezierCurveTo(1.8,-2.4,1,-1.4,0,0),T},14),d);w.rotation.set(-Math.PI/2,0,C<0?Math.PI:0),x.add(w);for(let T=0;T<3;T++){const R=On(4.6,.11,.13,.05,o);R.position.set(C*2.3,.05,-1.2+T*1),R.rotation.y=C*(.12-T*.18),x.add(R)}}for(let x=0;x<7;x++)wt(n,he(.75-x*.09,i,.04,7,10),0,3-x*.14,-2.3-x*.9),wt(n,ze(Ke(.15,.45,5),o),0,3.7-x*.16,-2.3-x*.9);for(let x=0;x<5;x++)wt(n,gi(Ke(.22,.8,5),o),0,4.85-Math.abs(x-2)*.12,1.4-x*.75);const g=(x,C)=>{const w=di(n,x,2.7);w.position.z=C;const T=Jl(.66,2,.76,.26,s);T.position.y=-1,w.add(T);const R=On(.9,.32,1.1,.14,o);return R.position.set(0,-2.05,.24),w.add(R),w},_=g(-1.05,1.2),m=g(1.05,1.2),p=g(-1.15,-1.4),v=g(1.15,-1.4),M={kind:"dragon",armL:_,armR:m,legL:p,legR:v,fl:_,fr:m,bl:p,br:v,wingL:u,wingR:h,baseScale:1,bob:0};return n.userData=M,n}const dd=3.6;function uE(){const n=new Mt,t=ce(1924206,"scale",.42,.35),e=ce(997960,"scale",.42,.35),i=ce(11060400,"scale",.55,.2),s=_i({color:3514552,roughness:.3,metalness:.2,opacity:.9,doubleSide:!0}),r=[];for(let h=0;h<14;h++){const d=h/13,f=2-Math.abs(d-.25)*1.5,g=new Mt;g.position.set(0,0,-h*2.5);const _=he(Math.max(.5,f),h<3?e:t,.08,3,16);_.scale.set(1,.88,1.15),g.add(_);const m=he(Math.max(.3,f*.6),i,.05,4,12);if(m.scale.set(.9,.4,1.1),m.position.y=-f*.55,g.add(m),h%2===0&&h<12){const p=ze(Ke(f*.5,f*1.5,3),s);p.position.y=f*.9,g.add(p)}if(h===5||h===8)for(const p of Sn){const v=ze(Ke(f*.5,f*2,3),s);v.position.set(p*f*.9,-f*.2,0),v.rotation.z=p*1.25,v.scale.set(1,1,.4),g.add(v)}n.add(g),r.push(g)}const o=new Mt;o.position.set(0,0,dd),n.add(o);const a=he(2,e,.1,3.5,20);a.scale.set(.95,.85,1.5),o.add(a);const c=Jl(2.2,.7,3.4,.3,e);c.position.set(0,-1.15,.9),o.add(c);const l=ce(15791344,null,.35);for(let h=0;h<8;h++){const d=ze(Ke(.16,.6,4),l);d.position.set((h%4-1.5)*.55,-.72,h<4?2.2:1.3),d.rotation.x=Math.PI,o.add(d)}for(const h of Sn){wt(o,Be(.34,Ze(9437168,3.2),14,10),h*1,.55,1.7);const d=ze(Ke(.3,2.2,5),s);d.rotation.set(-.5,0,h*.5),wt(o,d,h*1,1.5,-.3)}wt(o,ze(Ke(1,3,3),s),0,1.9,-.6);const u={kind:"serpent",armL:oe(),armR:oe(),legL:oe(),legR:oe(),segs:r,head:o,headZ:dd,baseScale:1,bob:0};return n.userData=u,n.add(u.armR),n}function hE(){const n=new Mt,t=Er("magmaLord"),e=ce(1774096,"rock",.92,.08),i=ce(2891032,"rock",.94),s=Ze(16738842,2.6),r=Ze(16761402,3),o=he(2.4,e,.16,2.6,22);o.scale.set(1.15,1,.9),o.position.y=6.4,n.add(o),wt(n,Oe(3,1.2,2.2,.4,i),0,4.6,0);for(let m=0;m<12;m++){const p=t()*6.283,v=5.2+t()*2.6,M=Oe(.2,.9+t()*.9,.2,.06,s);M.rotation.z=(t()-.5)*1.4,wt(n,M,Math.cos(p)*2.2,v,Math.sin(p)*1.7)}const a=Be(.85,r,18,14);wt(n,a,0,6.6,1.9);const c=he(1.15,i,.1,4,18);c.position.y=8.8,n.add(c);for(const m of Sn){wt(n,Be(.24,r,12,9),m*.42,8.9,1);const p=ze(Ke(.34,2.4,6),i);p.rotation.set(-.4,0,m*.7),wt(n,p,m*.85,9.9,-.2)}wt(n,Oe(1.3,.4,1,.14,s),0,8.2,.85);for(let m=0;m<6;m++){const p=m/6*3.14-1.57,v=Math.sin(p)*1.7;wt(n,ze(hd(.4,.62,1.3,7),i),v,8-Math.abs(p)*.6,-1.9),wt(n,ze(hd(.34,.34,.14,7),r),v,8.66-Math.abs(p)*.6,-1.9)}const l=di(n,-2.9,7.6),u=di(n,2.9,7.6),h=[];for(const m of[l,u]){const p=Oe(1.5,2.6,1.5,.5,e);p.position.y=-1.3,m.add(p);const v=new Mt;v.position.y=-2.6,m.add(v);const M=Oe(1.35,2.5,1.35,.45,i);M.position.y=-1.25,v.add(M);const x=he(1.15,e,.1,4,14);x.position.y=-2.9,v.add(x);const C=Oe(1.4,.4,1.2,.14,s);C.position.set(0,-2.9,.9),v.add(C),h.push(v)}const d=di(n,-1.35,4.3),f=di(n,1.35,4.3),g=[];for(const m of[d,f]){const p=Oe(1.5,2.4,1.6,.5,e);p.position.y=-1.2,m.add(p);const v=new Mt;v.position.y=-2.4,m.add(v);const M=Oe(1.35,2.1,1.5,.45,i);M.position.y=-1.05,v.add(M);const x=Oe(1.7,.7,2.4,.24,e);x.position.set(0,-2.2,.4),v.add(x),g.push(v)}const _={kind:"titan",armL:l,armR:u,legL:d,legR:f,core:a,head:c,baseScale:1,bob:0,...vp(h,g)};return n.userData=_,n}const dE=Ta.frost.scale;function fE(){const n=new Mt,t=Er("frostLord"),e=_i({color:10474732,roughness:.1,metalness:.08,opacity:.8,envMapIntensity:2.4}),i=_i({color:7317704,roughness:.16,metalness:.06,opacity:.88,envMapIntensity:2}),s=ce(15398652,"bone",.5),r=he(2.3,e,.14,2.8,22);r.scale.set(1.1,1.05,.85),r.position.y=6.6,n.add(r),wt(n,Oe(3.1,1.1,2.1,.38,i),0,4.8,0);const o=ze(gp(.8),Ze(10479871,2.8));wt(n,o,0,6.8,1.7);for(let m=0;m<9;m++){const p=t()*6.283,v=1.6+t()*3.4,M=ze(Ke(.4,v,5),e);M.rotation.set((t()-.5)*.7,t()*3,(t()-.5)*.7),wt(n,M,Math.cos(p)*2,7.4+t()*1.6,Math.sin(p)*1.5-.6)}const a=he(1.1,i,.09,4,18);a.position.y=9,n.add(a);for(let m=0;m<7;m++){const p=m/7*6.283,v=ze(Ke(.22,(1.5+m%2*.8)/dE,5),e);wt(n,v,Math.cos(p)*.85,10.1,Math.sin(p)*.85)}for(const m of Sn)wt(n,Be(.22,Ze(14677759,3.4),12,9),m*.4,9.1,.95);wt(n,Oe(1.2,.35,.9,.12,s),0,8.45,.8);const c=di(n,-2.95,7.8),l=di(n,2.95,7.8),u=[],h=[[c,-1],[l,1]];for(const[m,p]of h){const v=Oe(1.4,2.6,1.4,.48,e);v.position.y=-1.3,m.add(v);const M=new Mt;M.position.y=-2.6,m.add(M);const x=Oe(1.25,2.4,1.25,.44,i);x.position.y=-1.2,M.add(x);const C=he(1.05,e,.09,4,14);C.position.y=-2.8,M.add(C);for(let w=0;w<3;w++){const T=ze(Ke(.2,1.1,5),e);T.position.set(p*.7,-1.2-w*.7,-.7),T.rotation.z=p*1.1,M.add(T)}u.push(M)}const d=di(n,-1.35,4.5),f=di(n,1.35,4.5),g=[];for(const m of[d,f]){const p=Oe(1.45,2.5,1.5,.48,e);p.position.y=-1.25,m.add(p);const v=new Mt;v.position.y=-2.5,m.add(v);const M=Oe(1.3,2.2,1.4,.44,i);M.position.y=-1.1,v.add(M);const x=Oe(1.6,.7,2.3,.22,s);x.position.set(0,-2.3,.4),v.add(x),g.push(v)}const _={kind:"titan",armL:c,armR:l,legL:d,legR:f,core:o,head:a,baseScale:1,bob:0,...vp(u,g)};return n.userData=_,n}function vp(n,t){const e={},[i,s]=n,[r,o]=t;return i&&(e.elbowL=i),s&&(e.elbowR=s),r&&(e.kneeL=r),o&&(e.kneeR=o),e}const pE={slime:"slime",bat:"bat",wolf:"wolf",hound:"wolf",spider:"spider",ghost:"ghost",wraith:"ghost",lava:"lava",ash:"lava",jelly:"jelly",icee:"iceElem",dragon:"dragon",levi:"leviathan",magma:"magmaLord",frost:"frostLord",angel:"angel",wangel:"warAngel",gabriel:"gabriel",creator:"creator",goblin:"humanoid",golem:"humanoid",skel:"humanoid",mage:"humanoid",gslime:"humanoid",troll:"humanoid",crab:"humanoid"},mE={slime:eE,bat:nE,wolf:iE,spider:sE,ghost:rE,lava:oE,jelly:aE,iceElem:cE,dragon:lE,leviathan:uE,magmaLord:hE,frostLord:fE},gE=.72,xE=.46,_E={hound:{color:6957592},wraith:{color:13625590,emissive:2771558}};function vE(n,t,e,i){const s=n.get(t);if(s)return s;const r=e.clone();r instanceof Mi&&i(r);const o=Ca(r);return n.set(t,o),o}function Mp(n,t,e,i){n.traverse(s=>{if(!(s instanceof nt))return;const r=s.material;Array.isArray(r)||(s.material=vE(i,t(r),r,e))})}const ME=new Map;function yE(n,t){Mp(n,e=>`${e.uuid}|${t.color}|${t.emissive??-1}`,e=>{e.color.setHex(t.color),t.emissive!==void 0&&e.emissive.setHex(t.emissive)},ME)}const SE=new Map;function bE(n,t){Mp(n,e=>`${e.uuid}|${t}`,e=>{e.color.multiplyScalar(t),e.roughness=Math.min(1,e.roughness*.9+.14),e.metalness=Math.min(1,e.metalness+.06),e.emissive.getHex()!==0&&e.emissive.multiplyScalar(1.7),e.envMapIntensity=.7},SE)}const Ur=(n,t,e,i,s)=>[{color:n,r:t,x:-e,y:i,z:s},{color:n,r:t,x:e,y:i,z:s}],EE={goblin:{eyes:Ur(16756794,.07,.31,4.07,.74)},golem:{eyes:Ur(5038186,.09,.3,4.05,.72),ember:{color:5038186,n:3,rad:1.2,h:3.4}},skel:{eyes:Ur(10147071,.075,.31,4.07,.73)},mage:{eyes:Ur(16726634,.085,.31,4.07,.75),ember:{color:10640639,n:4,rad:1.3,h:4.2}},troll:{eyes:Ur(16765514,.09,.24,3.9,.86)},gslime:{ember:{color:16765514,n:4,rad:1.5,h:2.8}},lava:{ember:{color:16747066,n:6,rad:1.5,h:3.4}},dragon:{ember:{color:16738858,n:8,rad:3,h:6}},slime:{ember:{color:8191898,n:3,rad:1.6,h:2.6}}};function wE(n,t){const e=EE[t];if(!e)return;for(const o of e.eyes??[])wt(n,Be(o.r,Ze(o.color,3),8,6),o.x,o.y,o.z);const i=e.ember;if(!i)return;const s=Er(`ember:${t}`),r=new Mt;for(let o=0;o<i.n;o++){const a=Be(.055*(.6+s()),Ze(i.color,2.6),5,4),c=s()*6.283,l=i.rad*(.4+s());a.position.set(Math.cos(c)*l,i.h*s(),Math.sin(c)*l),r.add(a)}n.add(r),n.userData.embers=r}function TE(n,t={}){if(!js(n))throw new Error(`알 수 없는 몹 id: ${n}`);const e=Pe(n),i=pE[n],s=mE[i],r=t.external?.[i];let o;if(s)o=s();else if(r)o=r(n);else throw new Error(`모델 '${i}' (몹 '${n}') 는 creatures.ts 소관이 아니다. BuildCreatureOptions.external 로 빌더를 넘겨라 — humanoid 는 makeChar+dressMob, angel/warAngel/gabriel/creator 는 천국 모듈이 만든다.`);const a=_E[n];a&&yE(o,a),bE(o,e.world?gE:xE),e.world||wE(o,n),o.scale.setScalar(e.scale);const c=o.userData;return c.baseScale=e.scale,c.bob=t.bob??0,o}const yp=.62,AE=.7;function RE(n,t=yp){return 0}function CE(n,t){const e=n.userData;if(!e.kind)return;const i=t.time??performance.now()/1e3,s=t.walkPhase,r=t.amplitude??AE,o=e.bob??0,a=e.baseScale??1,c=1/a,l=RE(t.attackT,t.attackD??yp),u=Math.max(0,l),h=Math.max(0,-l);switch(PE(e,h),e.kind){case"slime":{if(!e.body)break;const d=Math.sin(i*4+o),f=h*.34-u*.3;e.body.scale.set(1+d*.09+f,.78-d*.1-f*1.5,1+d*.09+f),t.groundY!==void 0&&(n.position.y=t.groundY+u*.9);break}case"bat":{if(!e.wingL||!e.wingR)break;const f=(.5+Math.sin(i*17+o)*.95)*(1-h*.75)+u*1.5;e.wingL.rotation.z=f,e.wingR.rotation.z=-f,n.rotation.x=-h*.4+u*.7;break}case"quad":{const{fl:d,fr:f,bl:g,br:_}=e;if(!d||!f||!g||!_)break;const m=Math.sin(s);d.rotation.x=m*r-u*1.5-h*.3,f.rotation.x=-m*r-u*1.5-h*.3,_.rotation.x=m*r+h*.4,g.rotation.x=-m*r+h*.4,n.rotation.x=h*.35-u*.55,e.head&&(e.head.rotation.x=-h*.3+u*.6);break}case"spider":{if(!e.legs)break;e.legs.forEach((d,f)=>{const g=f<3;d.rotation.x=Math.sin(s*1.6+f*1.1)*r*.55+(g?-h*.9-u*1.2:h*.3+u*.25)}),n.rotation.x=-h*.42+u*.5;break}case"ghost":{if(!e.armL||!e.armR)break;e.armL.rotation.x=Math.sin(i*2.2)*.4-.3-h*.9-u*1.9,e.armR.rotation.x=Math.sin(i*2.2+1)*.4-.3-h*.9-u*1.9;const d=1+h*.22-u*.12;n.scale.setScalar(a*d);break}case"lava":{if(!e.chunks||!e.core)break;e.chunks.forEach((d,f)=>{const g=d.a+i*(.6+f%3*.25);d.m.position.set(Math.cos(g)*d.r,d.y+Math.sin(i*2+f)*.18*c,Math.sin(g)*d.r),d.m.rotation.y=g*1.5,d.m.rotation.x=i*.6+f}),e.core.scale.setScalar(1+Math.sin(i*5)*.08+u*.8-h*.25);for(const d of e.chunks)d.m.position.multiplyScalar(1-h*.35+u*.55);break}case"jelly":{if(!e.dome||!e.tent)break;const d=Math.sin(i*2.2+o);e.dome.scale.set(1+d*.1,.95-d*.12,1+d*.1),e.dome.scale.multiplyScalar(1-u*.22+h*.15),e.tent.forEach((f,g)=>{f.rotation.x=Math.sin(i*2+g*.7)*.28+u*.9,f.rotation.z=Math.cos(i*1.7+g*.5)*.24});break}case"serpent":{if(!e.segs||!e.head)break;e.segs.forEach((f,g)=>{const _=i*1.5-g*.42;f.position.x=Math.sin(_)*2.6*c,f.position.y=Math.sin(_*.8+1)*1.8*c,f.rotation.z=Math.cos(_)*.22});const d=e.head;d.position.x=Math.sin(i*1.5+.42)*2.6*(1-u*.7)*c,d.position.y=(Math.sin(i*1.2+1.4)*1.2+1.2+h*2.4-u*1)*c,d.position.z=(e.headZ??0)+(-h*3+u*6.5)*c,d.rotation.y=-Math.cos(i*1.5)*.3*(1-u),d.rotation.x=h*.5-u*.7;break}case"titan":{const{armL:d,armR:f,legL:g,legR:_,core:m,head:p}=e;if(!d||!f||!g||!_)break;const v=Math.sin(s);g.rotation.x=v*r*.7,_.rotation.x=-v*r*.7,e.kneeL&&(e.kneeL.rotation.x=Math.max(0,-v)*r*.8),e.kneeR&&(e.kneeR.rotation.x=Math.max(0,v)*r*.8),f.rotation.x=v*r*.55-h*2.4+u*1.6,d.rotation.x=-v*r*.55-h*2.4+u*1.6,n.rotation.x=-h*.28+u*.42,m&&m.scale.setScalar(1+Math.sin(i*2.6)*.1),p&&(p.rotation.y=Math.sin(i*.5)*.14);break}case"dragon":{const{wingL:d,wingR:f,fl:g,fr:_}=e;if(!d||!f||!g||!_)break;const m=Math.sin(i*3.2)*.55;d.rotation.z=m+.15+h*1.1,f.rotation.z=-m-.15-h*1.1,g.rotation.x=Math.sin(s*.6)*r*.5-u*1.1,_.rotation.x=-Math.sin(s*.6)*r*.5-u*1.1,e.head&&(e.head.rotation.x=h*.55-u*.85),n.rotation.x=h*.3-u*.45;break}}}function PE(n,t){const e=n.eyes;if(!e||e.length===0||t<=.01&&!n.glowing)return;const i=t*2.6;for(const s of e){const r=s.material;if(Array.isArray(r))continue;let o=r;mp(o)&&(o=o.clone(),s.material=o),o instanceof Mi&&(n.eyeBase===void 0&&(n.eyeBase=o.emissiveIntensity),o.emissiveIntensity=n.eyeBase+i)}n.glowing=t>.01}function fd(n){n.removeFromParent(),n.traverse(t=>{const e=t,i=e.geometry;i&&!jb(i)&&i.dispose();const s=e.material;if(s)for(const r of Array.isArray(s)?s:[s])mp(r)||r.dispose()}),n.clear()}function IE(n){const t=new Ht(n),e={h:0,s:0,l:0};t.getHSL(e);const i=new Ht().setHSL(e.h,e.s*.8,Math.max(.08,e.l*.55)),s=new Ht().setHSL(e.h,e.s*.45,Math.min(.82,e.l*1.35+.12)),r=new Ht().setHSL(e.h,e.s*.6,Math.max(.05,e.l*.35));return{shirt:n,pants:i.getHex(),skin:s.getHex(),hair:r.getHex()}}function Ql(n,t){return Object.assign(n.userData,t,{baseScale:1,bob:0}),n}const LE=n=>{const t=Pe(n),e=Ma(IE(t.color));return Ql(e.root,{kind:"humanoid",armL:e.armL,armR:e.armR,legL:e.legL,legR:e.legR,head:e.head,...e.eyes.length>0?{eyes:e.eyes}:{}})},DE={angel:{robe:15791098,trim:16771496,glow:16774872,feathers:5,wingSpan:1.5,haloR:.46},warAngel:{robe:13620964,trim:14201946,glow:16773312,feathers:6,wingSpan:1.8,haloR:.5},gabriel:{robe:16769162,trim:16774872,glow:16776168,feathers:9,wingSpan:2.9,haloR:.78}};function pd(n,t){const e=new Mt,i=Pt(n.robe,"cloth",.5,0);for(let s=0;s<n.feathers;s++){const r=s/Math.max(1,n.feathers-1),o=n.wingSpan*(1-r*.45),a=new nt(Zt(o,.1,.34,.05),i);a.castShadow=!0,a.position.set(t*(.28+o/2),.42-r*.62,-.12-r*.05),a.rotation.z=t*(.24-r*.5),a.rotation.y=t*r*.22,e.add(a)}return e.position.set(t*.34,1.5,-.24),e}function kE(n){const t=new nt(new Mr(n.haloR,.055,8,24),Ie(n.glow,2.4));return t.rotation.x=Math.PI/2,t.position.y=2.42,t}function tu(n,t){const e=DE[t],i=Ma({shirt:e.robe,pants:e.robe,skin:16180943,hair:e.trim}),s=pd(e,-1),r=pd(e,1),o=kE(e);if(i.root.add(s,r,o),t==="gabriel"){const a=Pt(e.trim,"metal",.28,.85);for(const c of[-1,1]){const l=new nt(Zt(.62,.3,.62,.12),a);l.castShadow=!0,l.position.set(c*.62,1.62,0),i.root.add(l)}}return Ql(i.root,{kind:"humanoid",armL:i.armL,armR:i.armR,legL:i.legL,legR:i.legR,head:i.head,wingL:s,wingR:r,core:o,...i.eyes.length>0?{eyes:i.eyes}:{}})}const NE=n=>tu(n,"angel"),UE=n=>tu(n,"warAngel"),OE=n=>tu(n,"gabriel"),FE=()=>{const n=new Mt,t=new nt(new ua(1.35,1),Ie(16774872,3.2));t.position.y=2.6,n.add(t);const e=new nt(new ua(2.05,1),new Mi({color:16774872,emissive:16773312,emissiveIntensity:.35,transparent:!0,opacity:.22,roughness:.2,metalness:0}));e.position.y=2.6,n.add(e);const i=Pt(16771496,"metal",.25,.9),s=[];for(let a=0;a<3;a++){const c=new nt(new Mr(2.5+a*.5,.09,8,40),i);c.position.y=2.6,c.rotation.set(a*Math.PI/3,a*Math.PI/5,0),n.add(c),s.push(c)}const r=new nt(new Yi(.5,1.1,2.6,12,1,!0),new kn({color:16774872,transparent:!0,opacity:.16,side:Xe,depthWrite:!1}));r.position.y=1.3,n.add(r);const o=()=>{const a=new Mt;return n.add(a),a};return Ql(n,{kind:"creator",armL:o(),armR:o(),legL:o(),legR:o(),core:t,chunks:s.map((a,c)=>({m:a,a:c*2.1,r:2.5+c*.5,y:2.6}))})},zE={humanoid:LE,angel:NE,warAngel:UE,gabriel:OE,creator:FE},md={ice:{g1:"#eafaff",g2:"#5fc4ee",g3:"#12507e",flow:"#ffffff",glow:"#8fe6ff",eye:"#9ff0ff"},lava:{g1:"#ffd45e",g2:"#ff6a1a",g3:"#7d1606",flow:"#2e0c04",glow:"#ff9a3a",eye:"#ffb347"},abyss:{g1:"#79e8ff",g2:"#2b4fd6",g3:"#2e0d48",flow:"#070d2c",glow:"#8fb8ff",eye:"#7fe4ff"},dark:{g1:"#ff9a86",g2:"#c0342a",g3:"#3e0a08",flow:"#1f0605",glow:"#ff7a6a",eye:"#ff8a6a"},holy:{g1:"#fffbe8",g2:"#ffd24a",g3:"#8a6410",flow:"#fff6d8",glow:"#ffe9a8",eye:"#fff2c8"},divine:{g1:"#ffffff",g2:"#ffe9a8",g3:"#2a2438",flow:"#fff8e0",glow:"#fff2c8",eye:"#ffffff"}},gd="dark",BE={levi:"abyss",magma:"lava",frost:"ice",gabriel:"holy",creator:"divine"},xd=1e3,HE=250,ki=212,Ni=104,Vn=576,ss=58,GE=29,Wo=200,$o=133,Or=54,VE=9,WE=-125,$E=30,XE=.42,_d=["M0,0 L0,14 M0,7 L8,0","M0,14 L5,0 L10,14","M0,0 L0,14 M0,1 L8,5 L0,9","M0,0 L8,7 L0,14","M0,0 L0,14 M8,0 L8,14 M0,7 L8,7","M0,14 L0,0 L8,0 M0,7 L6,7","M0,0 L8,14 M8,0 L0,14","M4,0 L4,14 M0,3 L8,3"],qE=[["M172,96 C138,80 96,84 68,104 C42,122 40,152 62,170 C88,191 142,190 176,172 C160,148 158,120 172,96 Z","gold",3],["M68,104 C42,100 16,104 4,118 C22,124 40,128 56,132 L74,124 Z","gold2",3],["M62,170 C36,172 14,166 6,152 C28,150 50,150 68,152 Z","gold2",3],["M22,124 L30,150 L36,126 Z","bone",1.6],["M46,130 L52,152 L58,132 Z","bone",1.6],["M18,152 L26,132 L32,154 Z","bone",1.6],["M150,90 C154,52 132,22 92,8 C118,32 128,58 124,90 Z","gold",3],["M176,104 C198,80 232,70 254,78 C230,88 208,102 194,124 Z","gold",3],["M182,150 C206,146 228,154 238,168 C216,166 196,170 182,180 Z","gold2",3],["M112,102 C126,96 146,98 158,108 C142,110 124,112 112,118 Z","gold2",2]];let YE=0;const vd="#241a08";function jE(n,t){const e=[];e.push(`<circle cx="${Wo}" cy="${$o}" r="${Or}" fill="none" stroke="${n}" stroke-width="11"/>`),e.push(`<circle cx="${Wo}" cy="${$o}" r="${Or}" fill="none" stroke="${vd}" stroke-width="2" stroke-opacity=".75"/>`),e.push(`<circle cx="${Wo}" cy="${$o}" r="${Or-9}" fill="none" stroke="#f0dfa8" stroke-width="1.2" stroke-opacity=".5"/>`);const i=[];for(let r=0;r<VE;r++){const o=_d[r%_d.length];if(o===void 0)continue;const a=(WE+r*$E)*Math.PI/180,c=Wo+Math.cos(a)*Or,l=$o+Math.sin(a)*Or,u=a*180/Math.PI+90,h=`translate(${c.toFixed(1)},${l.toFixed(1)}) rotate(${u.toFixed(1)}) translate(-4,-7) scale(0.62)`;i.push(`<path d="${o}" transform="${h}"/>`)}e.push(`<g fill="none" stroke="#f3e6b8" stroke-width="2.1" stroke-linecap="round" stroke-opacity=".92">${i.join("")}</g>`);const s=[];for(const[r,o,a]of qE){const c=o==="gold"?n:o==="gold2"?t:"#f4ecd2";s.push(`<path d="${r}" fill="${c}" stroke="${vd}" stroke-width="${a}" stroke-linejoin="round"/>`)}s.push('<ellipse class="bb-eye" cx="112" cy="126" rx="15" ry="10"/>'),s.push('<ellipse cx="112" cy="126" rx="5" ry="9" fill="#0b1016" fill-opacity=".7"/>');for(let r=0;r<4;r++)s.push(`<path d="M${176+r*10},118 q10,26 -4,54" fill="none" stroke="${t}" stroke-width="4" stroke-opacity=".85"/>`);return e.push(`<g>${s.join("")}</g>`),e.join("")}function KE(){const n=[];for(let e=0;e<9;e++){const i=118+e%3*14,s=44+e%4*16,r=13+e%3*5;n.push(`<ellipse cx="${212+e*95}" cy="${i}" rx="${s}" ry="${r}"/>`),n.push(`<ellipse cx="${212+e*95+260}" cy="${i}" rx="${s}" ry="${r}"/>`)}const t=[];for(let e=0;e<11;e++){const i=9+e%3*7;t.push(`<rect x="${212+e*78}" y="104" width="${i}" height="58" rx="4"/>`),t.push(`<rect x="${212+e*78+260}" y="104" width="${i}" height="58" rx="4"/>`)}return{a:n.join(""),b:t.join("")}}function ZE(n){const t=`url(#bbGold${n})`,e=`url(#bbGold2${n})`,i=jE(t,e),s=KE();return`
<div class="bb-head">
  <div class="bb-name">—</div>
  <div class="bb-sub"><span class="bb-sub-label">BOSS HEALTH</span> <span class="bb-lv"></span></div>
</div>
<svg class="bb-svg" viewBox="0 0 ${xd} ${HE}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bbGold${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"    stop-color="#f6e6b4"/>
      <stop offset="0.32" stop-color="#c9a751"/>
      <stop offset="0.34" stop-color="#c9a751"/>
      <stop offset="0.62" stop-color="#8d6c28"/>
      <stop offset="1"    stop-color="#4e3a12"/>
    </linearGradient>
    <linearGradient id="bbGold2${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"   stop-color="#e8d295"/>
      <stop offset="0.5" stop-color="#9d7c33"/>
      <stop offset="1"   stop-color="#3d2d0e"/>
    </linearGradient>
    <linearGradient id="bbFill${n}" x1="0" y1="0" x2="0" y2="1">
      <stop class="bb-g1" offset="0"/>
      <stop class="bb-g2" offset="0.5"/>
      <stop class="bb-g3" offset="1"/>
    </linearGradient>
    <linearGradient id="bbEmpty${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#161a20"/>
      <stop offset="1" stop-color="#080a0e"/>
    </linearGradient>
    <clipPath id="bbTrack${n}"><rect x="${ki}" y="${Ni}" width="${Vn}" height="${ss}" rx="${GE}"/></clipPath>
    <clipPath id="bbFillClip${n}"><rect class="bb-fill-r" x="${ki}" y="${Ni}" width="${Vn}" height="${ss}"/></clipPath>
    <clipPath id="bbChipClip${n}"><rect class="bb-chip-r" x="${ki}" y="${Ni}" width="${Vn}" height="${ss}"/></clipPath>
  </defs>

  <!-- 용머리 · 룬 고리. 오른쪽은 미러 변환 -->
  <g>${i}</g>
  <g transform="translate(${xd},0) scale(-1,1)">${i}</g>

  <!-- 게이지 -->
  <g clip-path="url(#bbTrack${n})">
    <rect x="${ki}" y="${Ni}" width="${Vn}" height="${ss}" fill="url(#bbEmpty${n})"/>
    <g clip-path="url(#bbChipClip${n})">
      <rect x="${ki}" y="${Ni}" width="${Vn}" height="${ss}" fill="#efe6cf" opacity="0.55"/>
    </g>
    <g clip-path="url(#bbFillClip${n})">
      <rect x="${ki}" y="${Ni}" width="${Vn}" height="${ss}" fill="url(#bbFill${n})"/>
      <g class="bb-flow bb-flow-a" opacity="0.42">${s.a}</g>
      <g class="bb-flow bb-flow-b" opacity="0.3">${s.b}</g>
      <rect class="bb-sheen" x="${ki}" y="${Ni}" width="${Vn}" height="20" fill="#ffffff" opacity="0.3"/>
    </g>
    <rect x="${ki}" y="${Ni}" width="${Vn}" height="${ss}" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="3"/>
  </g>

  <!-- 프레임 -->
  <rect x="200" y="92" width="600" height="82" rx="41" fill="none" stroke="${t}" stroke-width="13"/>
  <rect x="200" y="92" width="600" height="82" rx="41" fill="none" stroke="#2a1f0a" stroke-width="2.5" stroke-opacity=".8"/>
  <rect x="207" y="99" width="586" height="68" rx="34" fill="none" stroke="#f3e3ac" stroke-width="1.4" stroke-opacity=".55"/>
  <!-- 상·하 중앙 마름모 -->
  <path d="M500 78 L520 92 L500 106 L480 92 Z" fill="${t}" stroke="#2a1f0a" stroke-width="2"/>
  <path d="M500 160 L520 174 L500 188 L480 174 Z" fill="${t}" stroke="#2a1f0a" stroke-width="2"/>

  <!-- 무적 방벽 링 (신규 — §5 참조) -->
  <rect class="bb-ward" x="200" y="92" width="600" height="82" rx="41" fill="none" stroke-width="4"/>

  <!-- 하단 명판 -->
  <path d="M368 182 L632 182 L654 202 L632 222 L368 222 L346 202 Z" fill="#12100b" stroke="${e}" stroke-width="5"/>
  <text class="bb-num" x="500" y="209" text-anchor="middle" font-size="21" font-weight="600" fill="#e8dfc6">0 / 0</text>
</svg>`}const Md="data-bq-bossbar";function JE(){return Object.keys(md).map(n=>{const t=md[n];return`.bossbar.bb-t-${n}{--bb-g1:${t.g1};--bb-g2:${t.g2};--bb-g3:${t.g3};--bb-flow:${t.flow};--bb-glow:${t.glow};--bb-eye:${t.eye}}`}).join(`
`)}const QE=`
/* 보스 체력바 (V4) — 원본 190–216 이관. 컨테이너 위치/폭은 styles.css 소관 */
.bossbar.bb-ready{ opacity:0; transition:opacity .4s ease; }
.bossbar.bb-ready.bb-on{ opacity:1; }

${JE()}

.bossbar .bb-head{ text-align:center; margin-bottom:-6px; position:relative; z-index:2; }
.bossbar .bb-name{
  font-size:clamp(19px,4.4vw,34px); font-weight:700; letter-spacing:.01em;
  color:#fff; line-height:1.1;
  text-shadow:0 0 16px var(--bb-glow,#8fe6ff), 0 0 34px var(--bb-glow,#8fe6ff), 0 3px 5px rgba(0,0,0,.95);
}
.bossbar .bb-sub{
  font-size:clamp(9px,1.7vw,13px); font-weight:600; letter-spacing:.34em;
  color:#e7dcc0; margin-top:2px; text-shadow:0 2px 5px rgba(0,0,0,.95);
}
.bossbar .bb-lv{ font-size:11px; font-weight:700; color:#ffd88a; letter-spacing:.2em;
  text-shadow:0 2px 5px rgba(0,0,0,.9); }
.bossbar .bb-svg{ display:block; width:100%; height:auto; overflow:visible; }
.bossbar .bb-num{ font-family:inherit; }

/* 테마 색이 붙는 곳 — stop-color / fill 은 CSS 속성이라 변수로 즉시 갈린다 */
.bossbar .bb-g1{ stop-color:var(--bb-g1); }
.bossbar .bb-g2{ stop-color:var(--bb-g2); }
.bossbar .bb-g3{ stop-color:var(--bb-g3); }
.bossbar .bb-flow{ fill:var(--bb-flow); }
.bossbar .bb-eye{ fill:var(--bb-eye); }

/* 격파 — 이름이 식고 바 전체가 탈색된다 */
.bossbar.bb-dead .bb-name{ color:#8d939c; --bb-glow:#40464e; }
.bossbar.bb-dead .bb-svg{ filter:grayscale(.65) brightness(.75); }

/* 무적 페이즈 (신규) — 프레임 바깥에 테마색 방벽 링 */
.bossbar .bb-ward{ stroke:var(--bb-glow,#8fe6ff); opacity:0; transition:opacity .18s ease; }
.bossbar.bb-invuln .bb-ward{ opacity:.9; animation:bbWard 1.1s ease-in-out infinite; }
.bossbar.bb-invuln .bb-sub-label{ color:var(--bb-glow,#8fe6ff); }

/* 게이지 안쪽 흐름 */
@keyframes bbDrift { from{transform:translateX(-260px)} to{transform:translateX(0)} }
@keyframes bbDrift2{ from{transform:translateX(0)} to{transform:translateX(-260px)} }
@keyframes bbPulse { 0%,100%{opacity:.30} 50%{opacity:.62} }
@keyframes bbWard  { 0%,100%{opacity:.42} 50%{opacity:1} }
.bossbar .bb-flow-a{ animation:bbDrift 7s linear infinite; }
.bossbar .bb-flow-b{ animation:bbDrift2 11s linear infinite; }
.bossbar .bb-sheen { animation:bbPulse 2.6s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce){
  .bossbar .bb-flow-a,
  .bossbar .bb-flow-b,
  .bossbar .bb-sheen,
  .bossbar.bb-invuln .bb-ward{ animation:none }
}
`;function tw(n){if(n.querySelector(`style[${Md}]`))return;const t=n.createElement("style");t.setAttribute(Md,""),t.textContent=QE,n.head.appendChild(t)}function qs(n,t){const e=n.querySelector(t);if(!e)throw new Error(`bossbar: 요소를 찾지 못했다 — ${t}`);return e}class ew{host;nameEl;subEl;lvEl;numEl;fillR;chipR;ratio=1;chip=1;theme=gd;visible=!1;rafId=0;lastT=0;wroteFill=-1;wroteChip=-1;wroteNum="";constructor(t){this.host=t,tw(t.ownerDocument);const e=`-${++YE}`;t.innerHTML=ZE(e),t.classList.remove("hidden"),t.classList.add("bb-ready",`bb-t-${gd}`),t.setAttribute("aria-hidden","true"),this.nameEl=qs(t,".bb-name"),this.subEl=qs(t,".bb-sub-label"),this.lvEl=qs(t,".bb-lv"),this.numEl=qs(t,".bb-num"),this.fillR=qs(t,".bb-fill-r"),this.chipR=qs(t,".bb-chip-r")}show(t,e,i){this.nameEl.textContent!==t&&(this.chip=this.ratio,this.wroteChip=-1),this.nameEl.textContent=t,this.lvEl.textContent=i===void 0?"":`· Lv ${i}`,this.setTheme(e),this.host.classList.remove("bb-dead"),this.host.classList.add("bb-on"),this.host.setAttribute("aria-hidden","false"),this.visible=!0,this.startLoop()}setHp(t,e){const i=e>0?e:1;this.ratio=Math.min(1,Math.max(0,t)/i),this.chip<this.ratio&&(this.chip=this.ratio);const s=`${Math.max(0,Math.ceil(t)).toLocaleString()} / ${i.toLocaleString()}`;s!==this.wroteNum&&(this.wroteNum=s,this.numEl.textContent=s),this.host.classList.toggle("bb-dead",t<=0),this.paint(),this.startLoop()}setInvulnerable(t){this.host.classList.toggle("bb-invuln",t),this.subEl.textContent=t?"무적 · 방벽":"BOSS HEALTH"}hide(){this.visible=!1,this.host.classList.remove("bb-on","bb-invuln"),this.host.setAttribute("aria-hidden","true"),this.subEl.textContent="BOSS HEALTH",this.stopLoop()}step(t){this.stopLoop(),this.advance(t)}dispose(){this.stopLoop()}setTheme(t){t!==this.theme&&(this.host.classList.remove(`bb-t-${this.theme}`),this.host.classList.add(`bb-t-${t}`),this.theme=t)}advance(t){this.chip>this.ratio?this.chip=Math.max(this.ratio,this.chip-t*XE):this.chip=this.ratio,this.paint()}paint(){const t=+(Vn*this.ratio).toFixed(1);t!==this.wroteFill&&(this.wroteFill=t,this.fillR.setAttribute("width",String(t)));const e=+(Vn*this.chip).toFixed(1);e!==this.wroteChip&&(this.wroteChip=e,this.chipR.setAttribute("width",String(e)))}startLoop(){if(this.rafId||!this.visible||this.chip<=this.ratio||typeof requestAnimationFrame!="function")return;this.lastT=0;const t=e=>{this.rafId=0;const i=this.lastT?Math.min(.1,(e-this.lastT)/1e3):0;this.lastT=e,this.advance(i),this.visible&&this.chip>this.ratio&&(this.rafId=requestAnimationFrame(t))};this.rafId=requestAnimationFrame(t)}stopLoop(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0)}}const nw=116,iw=512,sw=8,rw=2*(Math.abs(ui.z)+Nn),Xo=Math.PI*2,We={ground:"#3f7a35",lakeWater:"#2f8fd6",lakeIsland:"#6cb84e",sea:"#1f6fa8",volc:"#3a221c",ice:"#dfeaf2",bossRing:"#fff",worldBossRing:"#ff4a4a",worldBossDot:"#ff4a4a",village:"#c4b391",shop:"#ffd24a",self:"#fff"},rs={void:"#141a20",rampart:"#9a927f",gateLocked:We.worldBossDot,bridge:"#cfd8e4",heaven:"#e9f2ff",peer:"#48d6ff",outline:"#101820"},Sc={biome:.85,zone:.55},ii={worldBossDot:2.6,bossRingWidth:1.5,worldBossRingWidth:2,shopHalf:2.5,selfWingX:3.6,selfTail:4,peer:3,liveBoss:4};function ow(n){return"#"+n.toString(16).padStart(6,"0")}function aw(n,t,e){return n<t?t:n>e?e:n}class cw{canvas;ctx;span=iw;frame=0;constructor(t){const e=t.getContext("2d");if(!e)throw new Error("미니맵 캔버스에서 2D 컨텍스트를 얻지 못했다");this.canvas=t,this.ctx=e}setScale(t){this.span=Math.max(1,t)}getScale(){return this.span}tick(t){return this.frame=(this.frame+1)%sw,this.frame!==0?!1:(this.render(t),!0)}render(t){const{ctx:e,canvas:i}=this,s=i.width,r=i.height,o=Math.min(s,r),a=(s-o)/2,c=(r-o)/2,l=this.span,u=l/2,h=p=>a+(p+u)/l*o,d=p=>c+(p+u)/l*o,f=p=>p/l*o,g=aw(o/nw,1,2.2),_=l>=rw,m=_&&t.gates.heavenOpen;e.clearRect(0,0,s,r),this.drawGround(h,d,f,o,a,c,_),this.drawZones(h,d,f,g,_,m),this.drawVillage(h,d,f,g),_&&this.drawNorthGate(h,d,f,g,t.gates.heavenOpen,m),this.drawBosses(h,d,g,t.mobs),this.drawPeers(h,d,g,t.others),this.drawSelf(h,d,g,t.self)}drawGround(t,e,i,s,r,o,a){const c=this.ctx;if(a){c.fillStyle=rs.void,c.fillRect(r,o,s,s),c.fillStyle=We.ground;const u=t(-Pn),h=e(-Pn);c.fillRect(u,h,t(Pn)-u,e(Pn)-h)}else c.fillStyle=We.ground,c.fillRect(r,o,s,s);this.disc(t(me.x),e(me.z),i(me.r),We.lakeWater),this.disc(t(me.x),e(me.z),i(me.island),We.lakeIsland);const l=(u,h)=>{c.globalAlpha=Sc.biome,this.disc(t(u.x),e(u.z),i(u.r),h),c.globalAlpha=1};l(ve,We.sea),l(Te,We.volc),l(be,We.ice)}drawZones(t,e,i,s,r,o){const a=this.ctx;for(const c of Vf){if(r&&!o&&c.region==="heaven")continue;const l=Pe(c.type),u=t(c.x),h=e(c.z),d=i(c.r);a.globalAlpha=Sc.zone,a.fillStyle=ow(l.color),a.beginPath(),a.arc(u,h,d,0,Xo),a.fill(),a.globalAlpha=1,l.boss===!0&&(a.strokeStyle=l.world===!0?We.worldBossRing:We.bossRing,a.lineWidth=(l.world===!0?ii.worldBossRingWidth:ii.bossRingWidth)*s,a.stroke()),l.world===!0&&this.disc(u,h,ii.worldBossDot*s,We.worldBossDot)}}drawVillage(t,e,i,s){this.disc(t(er.x),e(er.z),i(er.r),We.village),this.ctx.fillStyle=We.shop;const r=ii.shopHalf*s;this.ctx.fillRect(t($i.x)-r,e($i.z)-r,r*2,r*2)}drawNorthGate(t,e,i,s,r,o){const a=this.ctx,c=e(gs);if(a.lineWidth=2*s,a.strokeStyle=rs.rampart,a.beginPath(),a.moveTo(t(-Pn),c),a.lineTo(t(-ds),c),a.moveTo(t(ds),c),a.lineTo(t(Pn),c),a.stroke(),!r){a.strokeStyle=rs.gateLocked,a.lineWidth=2.4*s,a.beginPath(),a.moveTo(t(-ds),e(Re.z)),a.lineTo(t(ds),e(Re.z)),a.stroke();return}if(!o)return;a.fillStyle=rs.bridge;const l=t(-Kr),u=e(Zr);a.fillRect(l,u,t(Kr)-l,c-u),a.globalAlpha=Sc.biome,this.disc(t(ui.x),e(ui.z),i(Nn),rs.heaven),a.globalAlpha=1}drawBosses(t,e,i,s){const r=this.ctx;let o=!1;for(const a of s)a.boss&&(o||(r.lineWidth=1.6*i,o=!0),r.strokeStyle=a.world===!0?We.worldBossRing:We.bossRing,r.beginPath(),r.arc(t(a.x),e(a.z),ii.liveBoss*i,0,Xo),r.stroke())}drawPeers(t,e,i,s){if(s.length===0)return;const r=this.ctx;r.lineWidth=1*i,r.strokeStyle=rs.outline;for(const o of s)r.fillStyle=rs.peer,r.beginPath(),r.arc(t(o.x),e(o.z),ii.peer*i,0,Xo),r.fill(),r.stroke()}drawSelf(t,e,i,s){const r=this.ctx;r.save(),r.translate(t(s.x),e(s.z)),r.rotate(-s.yaw),r.fillStyle=We.self,r.beginPath(),r.moveTo(0,-5*i),r.lineTo(ii.selfWingX*i,ii.selfTail*i),r.lineTo(-3.6*i,ii.selfTail*i),r.closePath(),r.fill(),r.restore()}disc(t,e,i,s){const r=this.ctx;r.fillStyle=s,r.beginPath(),r.arc(t,e,i,0,Xo),r.fill()}}const yd=[{key:"burnT",icon:"🔥",label:"화상"},{key:"slowT",icon:"🕸",label:"둔화"},{key:"invulnT",icon:"✨",label:"무적"},{key:"buffT",icon:"💨",label:"가속"}];class lw{lv;cls;hpFill;hpText;xpFill;xpText;gold;spDot;status;objective;toasts;help;net;prev={};prevStatus="";constructor(t=document){this.lv=cn(t,"#lvBadge"),this.cls=cn(t,"#clsBadge"),this.hpFill=cn(t,"#hpFill"),this.hpText=cn(t,"#hpText"),this.xpFill=cn(t,"#xpFill"),this.xpText=cn(t,"#xpText"),this.gold=cn(t,"#goldBadge"),this.spDot=cn(t,"#spDot"),this.status=cn(t,"#statusIcons"),this.objective=cn(t,"#objective"),this.toasts=cn(t,"#toasts"),this.help=cn(t,"#help"),this.net=cn(t,"#netBadge")}update(t){if(t.level!==this.prev.level&&(this.lv.textContent=`Lv ${t.level}`),t.hp!==this.prev.hp||t.maxHp!==this.prev.maxHp){const i=t.maxHp>0?Math.max(0,Math.min(1,t.hp/t.maxHp)):0;this.hpFill.style.transform=`scaleX(${i})`,this.hpText.textContent=`${Math.max(0,Math.ceil(t.hp))} / ${Math.round(t.maxHp)}`}if(t.xp!==this.prev.xp||t.xpNeed!==this.prev.xpNeed){const i=t.xpNeed>0?Math.max(0,Math.min(1,t.xp/t.xpNeed)):0;this.xpFill.style.transform=`scaleX(${i})`,this.xpText.textContent=`${Math.floor(t.xp)} / ${t.xpNeed}`}if(t.gold!==this.prev.gold&&(this.gold.textContent=`${t.gold.toLocaleString("ko-KR")} G`),t.classId!==this.prev.classId)if(t.classId){const i=Xi[t.classId];this.cls.textContent=`${i.icon} ${i.name}`,this.cls.classList.remove("hidden")}else this.cls.classList.add("hidden");t.sp!==this.prev.sp&&this.spDot.classList.toggle("hidden",t.sp<=0);const e=yd.map(i=>Number(t[i.key])>0?"1":"0").join("");e!==this.prevStatus&&(this.prevStatus=e,this.status.replaceChildren(...yd.filter(i=>Number(t[i.key])>0).map(i=>{const s=document.createElement("span");return s.textContent=i.icon,s.title=i.label,s}))),this.prev=t}setObjective(t){this.objective.textContent!==t&&(this.objective.textContent=t)}setHelp(t){this.help.replaceChildren(...t.map(e=>{const i=document.createElement("div");return i.textContent=e,i}))}setNet(t,e){if(this.net.replaceChildren(),this.net.append(document.createTextNode(t)),e){const i=document.createElement("b");i.textContent=` ${e}`,this.net.appendChild(i)}}toast(t,e=2200){const i=document.createElement("div");i.className="toast",i.textContent=t,this.toasts.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity .3s",setTimeout(()=>i.remove(),320)},e)}}function uw(n,t,e=0){return{level:t.level,hp:t.hp,maxHp:t.maxHp,xp:n.xp,xpNeed:n.xpNeed,gold:n.gold,classId:t.classId??null,sp:n.sp,burnT:n.burnT,slowT:n.slowT,invulnT:n.invulnT,buffT:e}}function hw(n){return n.creatorKilled?"🏆 조물주를 쓰러뜨렸다":n.gabrielKilled?"조물주에게 간다 — 봉인 너머 북쪽 끝":n.heavenOpen?"천국으로 — 대천사 가브리엘을 찾아라":n.lords>=3?"문이 열린다…":!n.hasClass&&n.level>=5?"직업을 고르자":n.level<5?`Lv 5 까지 사냥하기 (${n.level}/5)`:`세 군주를 무찌르고 문을 열자 (${n.lords}/3)`}function cn(n,t){const e=n.querySelector(t);if(!e)throw new Error(`HUD 요소를 찾을 수 없다: ${t}`);return e}class dw{constructor(t){this.host=t,window.addEventListener("popstate",()=>{this.historyDepth>0&&this.historyDepth--,this.closeTop({fromHistory:!0})})}stack=[];historyDepth=0;onChange=null;get open(){return this.stack.length>0}get topId(){return this.stack[this.stack.length-1]?.spec.id??null}has(t){return this.stack.some(e=>e.spec.id===t)}toggle(t){this.topId===t.id?this.closeTop():this.push(t)}push(t){if(this.has(t.id))return;const e=document.createElement("div");e.className="panel",e.dataset.panel=t.id,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",t.title);const i=document.createElement("div");i.className="panel-head";const s=document.createElement("div");s.className="panel-title",s.textContent=t.title,i.appendChild(s);const r=()=>this.close(t.id);if(!t.modal){const l=document.createElement("button");l.className="icon-btn",l.textContent="✕",l.setAttribute("aria-label","닫기"),l.addEventListener("click",r),i.appendChild(l)}const o=document.createElement("div");o.className="panel-body";const a=document.createElement("div");a.className="panel-foot",e.append(i,o,a),this.host.appendChild(e);const c=t.render(o,r);t.footer?.(a,r),this.stack.push({spec:t,el:e,cleanup:c}),history.pushState({panel:t.id},""),this.historyDepth++,this.onChange?.(!0)}closeTop(t={}){const e=this.stack[this.stack.length-1];return!e||e.spec.modal?!1:(this.remove(this.stack.length-1,t.fromHistory===!0),!0)}close(t){const e=this.stack.findIndex(i=>i.spec.id===t);e<0||this.remove(e,!1)}closeAll(){for(;this.stack.length>0;)this.remove(this.stack.length-1,!1)}resolveModal(t){const e=this.stack.findIndex(i=>i.spec.id===t);e<0||this.remove(e,!1)}remove(t,e){const i=this.stack[t];i&&(this.stack.splice(t,1),i.cleanup?.(),i.el.remove(),!e&&this.historyDepth>0&&(this.historyDepth--,history.back()),this.onChange?.(this.stack.length>0))}}function fi(n,t,e="default"){const i=document.createElement("button");return i.className=e==="default"?"btn":`btn btn-${e}`,i.textContent=n,i.addEventListener("click",t),i}function Sp(n){const t=document.createElement("button");t.className="card"+(n.selected?" selected":""),t.type="button",n.disabled&&(t.disabled=!0);const e=document.createElement("h4");if(e.textContent=n.title,t.appendChild(e),n.desc){const i=document.createElement("p");i.textContent=n.desc,t.appendChild(i)}if(n.stats){const i=document.createElement("div");i.className="stats",i.textContent=n.stats,t.appendChild(i)}if(n.price){const i=document.createElement("div");i.className="price",i.textContent=n.price,t.appendChild(i)}return n.onClick&&t.addEventListener("click",n.onClick),t}function bp(n){const t=document.createElement("div");return t.className="card-grid",t.append(...n),t}const fw={opening:{id:"opening",duration:10,lines:[{at:0,text:"세상의 북쪽 끝에 문이 있다."},{at:3,text:"자물쇠는 셋. 열쇠는 없다."},{at:6,text:"세 군주를 쓰러뜨리는 수밖에."},{at:8.5,text:"아무도 시키지 않았다."}]},gate:{id:"gate",duration:8,blocking:!0,lines:[{at:0,text:"세 개의 룬이 모두 켜졌다."},{at:2.6,text:"문이 열린다."},{at:5,text:"다리 너머는 구름이다."}]},seal:{id:"seal",duration:4,lines:[{at:0,text:"가브리엘이 무릎을 꿇는다."},{at:2,text:"안쪽 봉인이 풀렸다."}]},ending:{id:"ending",duration:15,lines:[{at:0,text:"조물주가 조용해졌다."},{at:3.5,text:"문 너머에 있던 것은 구원이 아니었다."},{at:7,text:"그냥 다음 방이었다."},{at:11,text:"집에 갈 시간이다."}]}};class pw{root;caption;skipBtn;current=null;t=0;lineIdx=-1;resolve=null;seen=new Set;constructor(t){this.root=t,this.caption=Sd(t,"#cutCaption"),this.skipBtn=Sd(t,"#btnSkip"),this.skipBtn.addEventListener("click",()=>this.skip())}get playing(){return this.current!==null}markSeen(t){this.seen.add(t)}get seenIds(){return[...this.seen]}play(t,e={}){const i=fw[t];return!i||this.seen.has(t)&&!e.force?Promise.resolve():(this.seen.add(t),this.current=i,this.t=0,this.lineIdx=-1,this.caption.textContent="",this.root.classList.remove("hidden"),new Promise(s=>{this.resolve=s}))}update(t){const e=this.current;if(!e)return;this.t+=t;let i=-1;for(let s=0;s<e.lines.length;s++){const r=e.lines[s];r&&r.at<=this.t&&(i=s)}i!==this.lineIdx&&(this.lineIdx=i,this.caption.textContent=i>=0?e.lines[i]?.text??"":""),this.t>=e.duration&&this.finish()}skip(){this.current&&this.finish()}finish(){this.current=null,this.root.classList.add("hidden"),this.caption.textContent="";const t=this.resolve;this.resolve=null,t?.()}}function Sd(n,t){const e=n.querySelector(t);if(!e)throw new Error(`컷신 요소를 찾을 수 없다: ${t}`);return e}const bd="/minchan_rpg/",mw={boss:`${bd}audio/bgm-boss.mp3`,creator:`${bd}audio/bgm-creator.mp3`};class gw{ctx=null;master=null;bgmGain=null;source=null;buffers=new Map;loading=new Map;current=null;bgmEnabled=!0;volume=55;unlock(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=this.volume/100,this.bgmGain.connect(this.master))}setVolume(t){this.volume=Math.max(0,Math.min(100,t)),this.bgmGain&&(this.bgmGain.gain.value=this.volume/100)}blip(t,e=.08,i="square",s=.25){const r=this.ctx,o=this.master;if(!r||!o||r.state!=="running")return;const a=r.createOscillator(),c=r.createGain();a.type=i,a.frequency.value=t,c.gain.setValueAtTime(s,r.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),a.connect(c),c.connect(o),a.start(),a.stop(r.currentTime+e)}async preload(t){const e=this.buffers.get(t);if(e)return e;const i=this.loading.get(t);if(i)return i;const s=(async()=>{try{const r=await fetch(mw[t]);if(!r.ok)return null;const o=await r.arrayBuffer();this.unlock();const a=this.ctx;if(!a)return null;const c=await a.decodeAudioData(o);return this.buffers.set(t,c),c}catch{return null}})();return this.loading.set(t,s),s}async playBgm(t){if(!this.bgmEnabled||this.current===t)return;const e=await this.preload(t),i=this.ctx,s=this.bgmGain;if(!e||!i||!s)return;this.stopBgm();const r=i.createBufferSource();r.buffer=e,r.loop=!0,r.connect(s),r.start(),this.source=r,this.current=t}stopBgm(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.current=null}get playing(){return this.current}}const Ys={hit:n=>n.blip(220,.07,"square",.22),crit:n=>n.blip(520,.11,"sawtooth",.28),hurt:n=>n.blip(120,.14,"sawtooth",.3),coin:n=>n.blip(880,.06,"triangle",.18),levelUp:n=>{n.blip(523,.09,"triangle",.24),setTimeout(()=>n.blip(784,.14,"triangle",.24),90)},swing:n=>n.blip(300,.06,"triangle",.12),jump:n=>n.blip(420,.05,"sine",.15),special:n=>n.blip(180,.22,"sawtooth",.3),ui:n=>n.blip(660,.04,"sine",.14),gate:n=>n.blip(90,.6,"sawtooth",.32)},bl={sensitivity:100,cameraDistance:13,invertY:!1,autoAttack:!1,deadzone:.12,leftHanded:!1,haptics:!0,uiScale:1};class xw{settings;lastDevice="keyboard";raw={keyMove:{x:0,z:0},padMove:{x:0,z:0},joyMove:{x:0,z:0},look:{dx:0,dy:0},zoom:0,attackHeld:!1,jumpEdge:!1,specialEdge:!1,runHeld:!1,ui:[]};constructor(t={...bl}){this.settings=t}markDevice(t){this.lastDevice!==t&&(this.lastDevice=t,this.onDeviceChange?.(t))}onDeviceChange;pushUi(t){this.raw.ui.includes(t)||this.raw.ui.push(t)}consume(){const t=this.raw,e=t.keyMove.x+t.joyMove.x+t.padMove.x,i=t.keyMove.z+t.joyMove.z+t.padMove.z;let s=Ed(e),r=Ed(i);const o=Math.hypot(s,r);o<this.settings.deadzone?(s=0,r=0):o>1&&(s/=o,r/=o);const a=this.settings.sensitivity/100,c={move:{x:s,z:r},look:{dx:t.look.dx*a,dy:t.look.dy*a*(this.settings.invertY?-1:1)},attack:t.attackHeld,jump:t.jumpEdge,special:t.specialEdge,run:t.runHeld,ui:t.ui.slice(),zoom:t.zoom};return t.look.dx=0,t.look.dy=0,t.zoom=0,t.jumpEdge=!1,t.specialEdge=!1,t.ui.length=0,c}vibrate(t){this.settings.haptics&&navigator.vibrate?.(t)}}function Ed(n){return n<-1?-1:n>1?1:n}const bc={KeyW:{move:{z:-1}},ArrowUp:{move:{z:-1}},KeyS:{move:{z:1}},ArrowDown:{move:{z:1}},KeyA:{move:{x:-1}},ArrowLeft:{move:{x:-1}},KeyD:{move:{x:1}},ArrowRight:{move:{x:1}},KeyT:{ui:"tree"},KeyE:{ui:"shop"},KeyM:{ui:"map"},KeyC:{ui:"cameraReset"},Tab:{ui:"autoAttack"},Escape:{ui:"menu"}},wd=new Set(["KeyF","KeyJ"]),_w=new Set(["KeyQ","KeyR"]),vw=new Set(["Space"]),Td=new Set(["ShiftLeft","ShiftRight"]),Mw=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"]);function yw(n,t=window){const e=new Set,i=()=>{let a=0,c=0;for(const l of e){const u=bc[l];u?.move&&(a+=u.move.x??0,c+=u.move.z??0)}n.raw.keyMove.x=a,n.raw.keyMove.z=c},s=a=>{if(a.repeat)return;n.markDevice("keyboard"),Mw.has(a.code)&&a.preventDefault(),e.add(a.code),wd.has(a.code)&&(n.raw.attackHeld=!0),_w.has(a.code)&&(n.raw.specialEdge=!0),vw.has(a.code)&&(n.raw.jumpEdge=!0),Td.has(a.code)&&(n.raw.runHeld=!0);const c=bc[a.code];c?.ui&&n.pushUi(c.ui),c?.move&&i()},r=a=>{e.delete(a.code),wd.has(a.code)&&(n.raw.attackHeld=!1),Td.has(a.code)&&(n.raw.runHeld=!1),bc[a.code]?.move&&i()},o=()=>{e.clear(),n.raw.keyMove.x=0,n.raw.keyMove.z=0,n.raw.attackHeld=!1,n.raw.runHeld=!1};return t.addEventListener("keydown",s),t.addEventListener("keyup",r),t.addEventListener("blur",o),()=>{t.removeEventListener("keydown",s),t.removeEventListener("keyup",r),t.removeEventListener("blur",o)}}const Sw=12,bw=320,qo=44,Ew=-.1,ww=.95;function Tw(n,t,e){let i=-1,s=0,r=0,o=-1,a=0,c=0,l=0,u=0,h=0,d=0;const f=y=>y.pointerType!=="mouse",g=y=>{i=y.pointerId,s=y.clientX,r=y.clientY,t.joy.style.left=`${s}px`,t.joy.style.top=`${r}px`,t.joy.classList.remove("hidden"),t.knob.style.transform="translate(0px, 0px)"},_=y=>{const P=y.clientX-s,O=y.clientY-r,U=Math.hypot(P,O),H=U>qo?qo/U:1;t.knob.style.transform=`translate(${P*H}px, ${O*H}px)`,n.raw.joyMove.x=P*H/qo,n.raw.joyMove.z=O*H/qo},m=()=>{i=-1,n.raw.joyMove.x=0,n.raw.joyMove.z=0,t.joy.classList.add("hidden")},p=y=>{n.markDevice("touch"),!(i>=0)&&(y.preventDefault(),g(y),t.joyZone.setPointerCapture(y.pointerId))},v=y=>{y.pointerId===i&&(y.preventDefault(),_(y))},M=y=>{y.pointerId===i&&m()},x=y=>{n.markDevice(f(y)?"touch":"keyboard"),!(o>=0)&&(o=y.pointerId,a=y.clientX,c=y.clientY,l=y.clientX,u=y.clientY,h=performance.now(),d=0,t.surface.setPointerCapture?.(y.pointerId))},C=y=>{if(y.pointerId!==o)return;const P=y.clientX-a,O=y.clientY-c;a=y.clientX,c=y.clientY,d=Math.max(d,Math.hypot(y.clientX-l,y.clientY-u)),n.raw.look.dx+=P,n.raw.look.dy+=O},w=y=>{if(y.pointerId!==o)return;const P=performance.now()-h;d<Sw&&P<bw&&(n.raw.attackHeld=!0,setTimeout(()=>{n.raw.attackHeld=!1},60)),o=-1},T=y=>{y.preventDefault(),n.raw.zoom+=Math.sign(y.deltaY)},R=t.surface;R.addEventListener("pointerdown",x),R.addEventListener("pointermove",C),R.addEventListener("pointerup",w),R.addEventListener("pointercancel",w),R.addEventListener("wheel",T,{passive:!1});const S=t.joyZone;return S.addEventListener("pointerdown",p),S.addEventListener("pointermove",v),S.addEventListener("pointerup",M),S.addEventListener("pointercancel",M),()=>{R.removeEventListener("pointerdown",x),R.removeEventListener("pointermove",C),R.removeEventListener("pointerup",w),R.removeEventListener("pointercancel",w),R.removeEventListener("wheel",T),S.removeEventListener("pointerdown",p),S.removeEventListener("pointermove",v),S.removeEventListener("pointerup",M),S.removeEventListener("pointercancel",M)}}function Aw(n,t,e){n.yaw-=t*.0055,n.pitch=Math.max(Ew,Math.min(ww,n.pitch+e*.0042))}function Rw(n,t){n.distance=Math.max(6,Math.min(24,n.distance+t))}function Cw(n,t){const e=(s,r,o)=>{const a=l=>{l.preventDefault(),n.markDevice("touch"),r()},c=()=>o?.();return s.addEventListener("pointerdown",a),s.addEventListener("pointerup",c),s.addEventListener("pointercancel",c),s.addEventListener("pointerleave",c),()=>{s.removeEventListener("pointerdown",a),s.removeEventListener("pointerup",c),s.removeEventListener("pointercancel",c),s.removeEventListener("pointerleave",c)}},i=[e(t.attack,()=>{n.raw.attackHeld=!0},()=>{n.raw.attackHeld=!1}),e(t.jump,()=>{n.raw.jumpEdge=!0}),e(t.special,()=>{n.raw.specialEdge=!0})];return()=>i.forEach(s=>s())}const si={A:0,B:1,X:2,Y:3,LB:4,LT:6,RT:7,START:9,L3:10};class Pw{constructor(t,e=.18){this.hub=t,this.deadzone=e}prev=new Map;connected=!1;attach(){const t=()=>{this.connected=!0,this.hub.markDevice("gamepad")},e=()=>{this.connected=navigator.getGamepads().some(i=>i!==null)};return window.addEventListener("gamepadconnected",t),window.addEventListener("gamepaddisconnected",e),()=>{window.removeEventListener("gamepadconnected",t),window.removeEventListener("gamepaddisconnected",e)}}poll(){const e=(navigator.getGamepads?.()??[]).find(l=>l!==null);if(!e){this.hub.raw.padMove.x=0,this.hub.raw.padMove.z=0;return}const i=jo(e.axes[0]??0,this.deadzone),s=jo(e.axes[1]??0,this.deadzone),r=jo(e.axes[2]??0,this.deadzone),o=jo(e.axes[3]??0,this.deadzone);(i!==0||s!==0||r!==0||o!==0)&&this.hub.markDevice("gamepad"),this.hub.raw.padMove.x=i,this.hub.raw.padMove.z=s,this.hub.raw.look.dx+=r*14,this.hub.raw.look.dy+=o*14,this.hub.raw.attackHeld=Yo(e,si.X),this.hub.raw.runHeld=Yo(e,si.LB)||Yo(e,si.L3),this.edge(e,si.A)&&(this.hub.raw.jumpEdge=!0),this.edge(e,si.B)&&(this.hub.raw.specialEdge=!0),this.edge(e,si.Y)&&this.hub.pushUi("tree"),this.edge(e,si.START)&&this.hub.pushUi("menu");const a=e.buttons[si.LT]?.value??0,c=e.buttons[si.RT]?.value??0;a>.3&&(this.hub.raw.zoom-=a*.4),c>.3&&(this.hub.raw.zoom+=c*.4)}edge(t,e){const i=Yo(t,e),s=this.prev.get(e)??!1;return this.prev.set(e,i),i&&!s}}function Yo(n,t){return n.buttons[t]?.pressed??!1}function jo(n,t){return Math.abs(n)<t?0:n}function Iw(n,t){const e=Math.cos(t),i=Math.sin(t);return{x:-(n.x*e+n.z*i),z:-(n.z*e-n.x*i)}}function Lw(n){return Math.atan2(n.x,n.z)}const Ad=600,Dw=5e3;class kw{constructor(t){this.url=t}ws=null;outbox=[];retryTimer=null;retryDelay=Ad;closedByUs=!1;onMessage=null;onStateChange=null;onReconnect=null;get endpoint(){return this.url}connect(){this.closedByUs=!1,this.onStateChange?.("connecting");const t=new WebSocket(this.url);this.ws=t,t.onopen=()=>{this.retryDelay=Ad;const e=this.onReconnect?.(),i=this.outbox;this.outbox=[],e&&t.send(JSON.stringify(e));for(const s of i)t.send(JSON.stringify(s));this.onStateChange?.("open")},t.onclose=()=>{this.onStateChange?.("closed"),this.scheduleRetry()},t.onerror=()=>{this.onStateChange?.("closed"),this.scheduleRetry()},t.onmessage=e=>{let i;try{i=JSON.parse(String(e.data))}catch{return}this.onMessage?.(i)}}send(t){const e=this.ws;if(e?.readyState===WebSocket.OPEN){e.send(JSON.stringify(t));return}t.t!=="input"&&this.outbox.push(t)}close(){this.closedByUs=!0,this.retryTimer!==null&&clearTimeout(this.retryTimer),this.retryTimer=null,this.outbox.length=0,this.ws?.close(),this.ws=null}scheduleRetry(){if(this.closedByUs||this.retryTimer!==null)return;const t=this.retryDelay;this.retryDelay=Math.min(Dw,Math.round(this.retryDelay*1.8)),this.retryTimer=setTimeout(()=>{this.retryTimer=null,this.closedByUs||this.connect()},t)}}class Rd{constructor(t,e={}){this.transport=t,this.handlers=e,t.onMessage=i=>this.handle(i),"onReconnect"in t&&(t.onReconnect=()=>this.joinName?this.joinMessage():null),t.onStateChange=i=>{this.state=i,this.handlers.onState?.(i),i==="open"?this.startPing():this.stopPing()}}playerId=-1;roomCode="";worldSeed=0;state="closed";rtt=0;seq=0;joinName="모험가";joinRoom="";pingTimer=null;join(t,e){this.joinName=t,e&&(this.joinRoom=e),this.transport.send(this.joinMessage())}joinMessage(){const t=this.roomCode||this.joinRoom,e=this.saveProvider?.();return{...{t:"join",protocol:Ml,name:this.joinName},...t?{roomCode:t}:{},...e!=null?{save:e}:{}}}saveProvider=null;sendInput(t){const e=++this.seq;return this.transport.send({t:"input",frame:{...t,seq:e}}),e}send(t){this.transport.send(t)}close(){this.stopPing(),this.transport.close()}startPing(){this.stopPing(),this.pingTimer=setInterval(()=>{this.transport.send({t:"ping",clientTime:performance.now()})},2e3)}stopPing(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}handle(t){switch(t.t){case"hello":this.playerId=t.playerId,this.roomCode=t.roomCode,this.worldSeed=t.worldSeed,this.handlers.onHello?.(t.playerId,t.roomCode,t.worldSeed);break;case"reject":this.state="rejected",this.handlers.onReject?.(t.reason);break;case"snapshot":this.handlers.onSnapshot?.(t);break;case"event":this.handlers.onEvent?.(t.ev);break;case"pong":this.rtt=performance.now()-t.clientTime;break}}}const Nw=.1,Uw=6,Ep=9999;function wp(n){return qM({lv:n.lv},{skills:n.skills,cls:n.classId?Sr(n.classId):Aa,weapon:Ss[n.weaponId]})}function Cs(n){const t=n.stats.maxHp;n.stats=wp(n),n.mods=oo(n.skills),n.hp=YM(n.hp,t,n.stats.maxHp)}function Ow(n,t,e){const i={id:n,name:t.slice(0,16)||`모험가${n}`,x:e.x,y:0,z:e.z,yaw:0,vy:0,grounded:!0,jumpsLeft:1,lv:$n.level,xp:0,need:$n.need,sp:$n.sp,gold:$n.gold,classId:null,weaponId:"stick",owned:new Set(["stick"]),skills:{},hp:$n.hp,dead:!1,invul:0,burnT:0,burnTick:0,slowT:0,buffT:0,attackCd:0,comboStep:0,comboT:0,specialCd:0,sinceAttack:Ep,specialCharged:!1,wantsAttack:!1,wantsSpecial:!1,moving:!1,running:!1,ackSeq:0,lastInputAt:0,stats:{},mods:oo({})};return i.stats=wp(i),i.hp=i.stats.maxHp,i}function Fw(n){return{hp:n.hp,maxHp:n.stats.maxHp,sprinting:n.running,inWater:!1,nearbyEnemyCount:0,targetDistance:0,comboStep:n.comboStep}}function Pa(n){return ty(n.classId==="parsley",n.skills)}function zw(n,t,e,i,s){if(t.seq<=n.ackSeq)return;n.ackSeq=t.seq;const r=Math.min(e,Math.min(Math.abs(t.dt),Nw));n.yaw=t.yaw;const o=t.actions|0;if(n.wantsAttack=(o&oi.ATTACK)!==0,n.wantsSpecial=(o&oi.SPECIAL)!==0,n.running=(o&oi.RUN)!==0,n.dead){n.moving=!1;return}const a=Cd(t.moveX),c=Cd(t.moveZ),l=Math.hypot(a,c);n.moving=l>dn.inputDeadzone;const u=s.surfaceAt(n.x,n.z,n.classId==="fish");if(n.moving){let h=dn.baseSpeed*n.stats.spdB*u.speedMul;n.running&&(h*=dn.sprintMul),n.slowT>0&&(h*=.45),n.buffT>0&&(h*=3),h*=XM(n.mods,n.sinceAttack);const d=n.x+a/l*h*r,f=n.z+c/l*h*r,g=s.collide({x:d,z:f},dn.playerRadius),_=Ff(g,{isPlayer:!0,gates:i});n.x=_.x,n.z=_.z}if(o&oi.JUMP&&n.jumpsLeft>0){const h=n.classId?Sr(n.classId).jumpMul:1;n.vy=dn.jumpSpeed*h*n.stats.jumpB,n.jumpsLeft--,n.grounded=!1}}function Bw(n,t,e){const i={drowned:0,burned:0,landed:0};if(n.dead)return i;const s=e.surfaceAt(n.x,n.z,n.classId==="fish");return n.vy-=dn.gravity*t,n.y+=n.vy*t,n.y<=s.groundY?(!n.grounded&&n.vy<dn.landImpactVy&&(i.landed=Math.min(1,-n.vy/dn.landImpactNorm)),n.y=s.groundY,n.vy=0,n.grounded||(n.jumpsLeft=Pa(n)),n.grounded=!0):n.grounded=!1,s.lava&&n.y<.6&&(n.burnT=Math.max(n.burnT,1.4)),n.burnT>0&&(n.burnT-=t,n.burnTick+=t,n.burnTick>=.7&&(n.burnTick=0,n.hp-=6,i.burned=6)),n.slowT>0&&(n.slowT-=t),n.buffT>0&&(n.buffT-=t),n.invul>0&&(n.invul-=t),n.attackCd>0&&(n.attackCd-=t),n.comboT>0&&(n.comboT-=t),n.specialCd>0&&(n.specialCd-=t),n.sinceAttack<Ep&&(n.sinceAttack+=t),s.water&&n.classId!=="fish"&&(n.burnTick+=0),n.stats.hpReg>0&&n.hp>0&&(n.hp=Math.min(n.stats.maxHp,n.hp+n.stats.hpReg*t)),n.classId==="fish"&&(s.water||n.mods.alwaysInWater)&&(n.hp=Math.min(n.stats.maxHp,n.hp+Uw*n.mods.waterEffectMul*t)),n.hp<=0&&(n.dead=!0),i}function Hw(n,t,e){const i={...n.stats,guard:WM(n.stats.guard,n.mods,Fw(n))},s=iy({lv:n.lv,hp:n.hp,xp:n.xp,need:n.need,sp:n.sp,gold:n.gold,dead:n.dead,invul:n.invul},t,i,e);return n.hp=s.player.hp,n.invul=s.player.invul,n.gold=s.player.gold,n.dead=s.player.dead,{applied:s.damage,died:s.died}}function Gw(n){n.hp=n.stats.maxHp,n.dead=!1,n.invul=nr.RESPAWN_INVUL,n.x=nr.RESPAWN_X,n.z=nr.RESPAWN_Z,n.y=0,n.vy=0,n.burnT=0,n.burnTick=0,n.slowT=0,n.jumpsLeft=Pa(n)}function Vw(n,t){const e=n.classId?Sr(n.classId):Aa,i=Math.round(t*n.stats.xpB*e.xpMul);n.xp+=i;const s=[];for(;n.xp>=n.need;)n.xp-=n.need,n.lv++,n.sp+=n.lv%$n.spBonusEvery===0?$n.spBonusPoints:$n.spPerLevel,n.need=qf(n.lv),Cs(n),n.hp=n.stats.maxHp,s.push(n.lv);return{leveled:s}}function Ww(n,t){const e=Math.max(0,Math.round(t*n.stats.goldB));return n.gold+=e,e}function $w(n,t){return!IM(t)||n.classId===t?!1:(Xw(n),n.classId=t,Cs(n),n.specialCd=0,n.jumpsLeft=Pa(n),!0)}function Xw(n){if(!n.classId)return;const t=n.classId;for(const[e,i]of Object.entries(n.skills)){if(!Jr(e))continue;const s=Zw.get(e);s&&s===t&&(n.sp+=i??0,delete n.skills[e])}Cs(n)}function qw(n){let t=0;for(const e of Object.values(n.skills))t+=e??0;n.skills={},n.sp+=t,Cs(n)}function Yw(n,t){if(!Jr(t)||n.sp<=0)return!1;const e=Rp.get(t);if(!e||e.classId!==null&&e.classId!==n.classId||e.requiresAnyClass&&n.classId===null)return!1;const i=n.skills[t]??0;if(i>=e.max)return!1;if(e.req){const[s,r]=e.req;if(!Jr(s)||(n.skills[s]??0)<r)return!1}return n.skills[t]=i+1,n.sp--,Cs(n),!0}function jw(n,t){if(!(t in Ss))return!1;const e=t,i=Ss[e];return n.owned.has(e)||i.unlock.kind!=="shop"||n.gold<i.price?!1:(n.gold-=i.price,n.owned.add(e),Tp(n,e),!0)}function Tp(n,t){if(!(t in Ss))return!1;const e=t;return n.owned.has(e)?(n.weaponId=e,Cs(n),!0):!1}function Kw(n,t){if(!(t in Ss))return!1;const e=t;return n.owned.has(e)?!1:(n.owned.add(e),!0)}function Ap(n){const t=n.classId?Sr(n.classId):Aa;return jM(t,n.stats)}const Rp=new Map(ro.filter(n=>Jr(n.id)).map(n=>[n.id,n])),Zw=new Map([...Rp].map(([n,t])=>[n,t.classId]));function Cd(n){return n<-1?-1:n>1?1:n}function Jw(n,t){n.name=t.name,n.lv=t.lv,n.xp=t.xp,n.need=qf(t.lv),n.gold=t.gold,n.sp=t.sp,n.classId=t.cls,n.skills={...t.skills},n.owned=new Set(t.owned),n.weaponId=n.owned.has(t.weapon)?t.weapon:"stick",Cs(n),n.hp=n.stats.maxHp,n.jumpsLeft=Pa(n)}const Qw=[{x:Gi.x,z:Gi.z,r:Gi.r},...iM.map(n=>({x:n.x,z:n.z,r:gl.min}))];function fs(n,t,e){const i=n-e.x,s=t-e.z;return i*i+s*s<=e.r*e.r}function t2(n,t){if(fs(n,t,{x:me.x,z:me.z,r:me.r}))return!fs(n,t,{x:me.x,z:me.z,r:me.island});if(fs(n,t,ve)){for(const e of Qw)if(fs(n,t,e))return!1;return!0}return!1}function e2(n,t){return fs(n,t,Gr)||fs(n,t,{x:Te.x,z:Te.z,r:0})}function n2(n,t){return fs(n,t,be)}function i2(n=[]){return{surfaceAt(t,e,i){const s=t2(t,e),r=e2(t,e),o=n2(t,e);return s?i?{groundY:wh.groundY,speedMul:wh.speedMul,water:!0,lava:r,ice:o}:{groundY:Eh.groundY,speedMul:Eh.speedMul,water:!0,lava:r,ice:o}:{groundY:0,speedMul:1,water:!1,lava:r,ice:o}},collide(t,e){let{x:i,z:s}=t;for(const r of n){const o=i-r.x,a=s-r.z,c=Math.hypot(o,a),l=r.r+e;if(c>=l||c===0)continue;const u=(l-c)/c;i+=o*u,s+=a*u}return{x:i,z:s}}}}const Pd=EM,Id=bM,Ec=.7;class s2{poison=new Map;curse=new Map;applyPoison(t,e,i){if(e<=0)return;const s=this.poison.get(t);if(s&&s.dps>=e){s.remaining=Pd,s.owner=i;return}this.poison.set(t,{dps:e,remaining:Pd,owner:i,tick:s?.tick??Ec})}applyCurse(t,e,i,s){if(!(e<=0&&i<=0)&&(this.setCurse(t,e,i),!(s===null||s.radius<=0)))for(const r of s.mobs)r.dead||r.id===t||je(s.from,r.pos)>s.radius||this.setCurse(r.id,e,i)}setCurse(t,e,i){const s=this.curse.get(t);if(s){s.damageTakenPct=Math.max(s.damageTakenPct,e),s.slowPct=Math.max(s.slowPct,i),s.remaining=Id;return}this.curse.set(t,{damageTakenPct:e,slowPct:i,remaining:Id})}damageTakenMul(t){return 1+(this.curse.get(t)?.damageTakenPct??0)}slowOf(t){return Math.min(1,this.curse.get(t)?.slowPct??0)}clear(t){this.poison.delete(t),this.curse.delete(t)}step(t){const e=[];for(const[i,s]of this.poison)s.remaining-=t,s.tick-=t,s.tick<=0&&(s.tick+=Ec,e.push({mobId:i,ownerId:s.owner,amount:s.dps*Ec})),s.remaining<=0&&this.poison.delete(i);for(const[i,s]of this.curse)s.remaining-=t,s.remaining<=0&&this.curse.delete(i);return e}get size(){return this.poison.size+this.curse.size}}const Ui={searchRadius:26,speed:6.4,engageRange:2.4,attackCd:.8,damageOfOwner:.5,followRange:4,summonRadius:3};class r2{list=[];get all(){return this.list}countOf(t){let e=0;for(const i of this.list)i.ownerId===t&&e++;return e}summon(t,e,i,s){const r=Jf(t.mods);let o=0;for(let a=0;a<i&&!(this.countOf(t.id)>=r);a++){const c=i>1?a/i*Math.PI*2:0,l=i>1?Ui.summonRadius:0;this.list.push({id:s(),ownerId:t.id,x:e.x+Math.cos(c)*l,z:e.z+Math.sin(c)*l,yaw:0,life:ma.life,cd:0}),o++}return o}removeOwner(t){for(let e=this.list.length-1;e>=0;e--)this.list[e]?.ownerId===t&&this.list.splice(e,1)}step(t,e,i){const s=[];for(let r=this.list.length-1;r>=0;r--){const o=this.list[r];if(!o)continue;const a=e.get(o.ownerId);if(!a){this.list.splice(r,1);continue}o.life-=t,o.cd-=t;let c=null,l=Ui.searchRadius;for(const u of i){if(u.dead)continue;const h=Math.hypot(u.pos.x-o.x,u.pos.z-o.z);h<l&&(l=h,c=u)}if(c)if(o.yaw=Math.atan2(c.pos.x-o.x,c.pos.z-o.z),l>Ui.engageRange){const u=Ui.speed*t;o.x+=(c.pos.x-o.x)/l*u,o.z+=(c.pos.z-o.z)/l*u}else o.cd<=0&&(o.cd=Ui.attackCd,c.invuln||s.push({ownerId:o.ownerId,mobId:c.id,amount:a.stats.dmg*Ui.damageOfOwner*(1+a.mods.minionDamagePct)}));else{const u=je({x:a.x,z:a.z},{x:o.x,z:o.z});if(u>Ui.followRange){const h=Ui.speed*t;o.x+=(a.x-o.x)/u*h,o.z+=(a.z-o.z)/u*h,o.yaw=Math.atan2(a.x-o.x,a.z-o.z)}}o.life<=0&&(a.mods.minionInstantRevive?o.life=ma.life:this.list.splice(r,1))}return s}}function o2(n,t){return{hp:n.hp,maxHp:n.stats.maxHp,sprinting:n.running,inWater:t.inWater,nearbyEnemyCount:t.nearbyEnemyCount,targetDistance:t.targetDistance,comboStep:n.comboStep}}function a2(n,t,e,i){return t.water!==!0||!$M(n,i)?1:1+(bs.WATER_MUL_BASE+ln(e,"cure")*bs.WATER_MUL_PER_CURE-1)*n.waterEffectMul}function c2(n,t,e){return VM(n.mods,e)*a2(n.mods,t,n.skills,e)}function l2(n,t){let e=0;for(const i of t)i.dead||je({x:n.x,z:n.z},i.pos)<=FM&&e++;return e}function u2(n,t){let e=0;for(const i of n){if(i.dead)continue;const s=i.mods.enemyAttackReductionAura;s!==null&&(je({x:i.x,z:i.z},t)>s.radius||s.pct>e&&(e=s.pct))}return Math.max(0,1-e)}function h2(n,t){if(!n.classId)return null;const e=Qf(n.classId,n.skills),i=n.specialCd>0&&n.specialCharged;n.specialCd=Ap(n),n.specialCharged=n.mods.specialCooldownReset&&!i;const s=n.mods.specialDamageMul,r={x:n.x,y:0,z:n.z};for(const o of e.effects)switch(o.kind){case"invulnerable":n.invul=Math.max(n.invul,o.duration);break;case"heal":n.hp=Math.min(n.stats.maxHp,n.hp+n.stats.maxHp*o.fractionOfMax+o.flat);break;case"speed-buff":n.buffT=Math.max(n.buffT,o.duration);break;case"aoe":t.aoeDamage(n,r,o.radius,n.stats.dmg*o.damageMul*s,o.color);break;case"arrow-fan":{const a=(o.count-1)/2;for(let c=-a;c<=a;c++){const l=n.yaw+c*o.spreadStep;t.spawnProjectile({x:n.x,y:1.2,z:n.z,dx:Math.sin(l),dz:Math.cos(l),speed:o.speed,life:o.life,damage:n.stats.dmg*o.damageMul*s,burn:!1,owner:n.id,pierceLeft:ny(n.skills),hit:new Set})}break}case"cone-pull":{t.showArea({x:n.x,z:n.z,radius:o.range,color:9429098,shape:"cone",yaw:n.yaw,halfAngle:Math.acos(o.facingDotMin)});const a={x:Math.sin(n.yaw),z:Math.cos(n.yaw)};for(const c of t.mobs){if(c.dead)continue;const l=c.pos.x-n.x,u=c.pos.z-n.z,h=Math.hypot(l,u);h>o.range||h===0||a.x*(l/h)+a.z*(u/h)<o.facingDotMin||t.damageMob(c,n.stats.dmg*o.damageMul*s,n)}break}case"summon":t.summon(n,{x:n.x,z:n.z},o.count);break;case"field":{const a=n.stats.dmg*o.damageMulPerTick*s;t.addField(n,{x:n.x,z:n.z,radius:o.radius,damagePerTick:a,tickInterval:o.tickInterval,duration:o.duration}),t.showArea({x:n.x,z:n.z,radius:o.radius,color:o.color,shape:"field",duration:o.duration});break}}return e.toast&&t.toast(e.toast),e}function d2(n,t){const e=n.players.get(t);if(!e)return null;const i={x:e.x,z:e.z},s=[];for(const o of n.players.values())o.id!==t&&!Ld(i,{x:o.x,z:o.z})||s.push({id:o.id,name:o.name,classId:o.classId,x:Gn(o.x),y:Gn(o.y),z:Gn(o.z),yaw:Dd(o.yaw),hp:Math.round(o.hp),maxHp:Math.round(o.stats.maxHp),level:o.lv,weaponId:o.weaponId,anim:f2(o)});const r=[];for(const o of n.mobs)o.dead||Ld(i,{x:o.pos.x,z:o.pos.z})&&r.push({id:p2(o.id),type:o.type,x:Gn(o.pos.x),y:Gn(o.pos.y),z:Gn(o.pos.z),yaw:Dd(o.yaw),hp:Math.round(o.hp),maxHp:Math.round(o.maxHp),invuln:o.boss?.invuln===!0});return{t:"snapshot",tick:n.tick,ackSeq:e.ackSeq,players:s,mobs:r,self:{gold:e.gold,xp:e.xp,xpNeed:e.need,sp:e.sp,skills:{...e.skills},owned:[...e.owned],specialCooldown:Gn(e.specialCd),burnT:Gn(e.burnT),slowT:Gn(e.slowT),invulnT:Gn(e.invul)},gates:My(n.gates)}}function Ld(n,t){return zf(pa(n),pa(t))?je({x:n.x,z:n.z},{x:t.x,z:t.z})<=Bf:!1}function f2(n){let t=0;return n.moving&&(t|=1),n.running&&(t|=2),n.grounded||(t|=4),n.attackCd>0&&(t|=8),n.specialCd>Ap(n)-.4&&(t|=16),n.dead&&(t|=32),n.invul>0&&(t|=64),t}function p2(n){return Number(n.slice(1))||0}function Gn(n){return Math.round(n*100)/100}function Dd(n){return Math.round(n*1e3)/1e3}function m2(n,t,e){for(let i=n.length-1;i>=0;i--){const s=n[i];if(!s)continue;const r=e.players.get(s.ownerId);if(!r){n.splice(i,1);continue}for(s.left-=t,s.nextTick-=t;s.nextTick<=0;){for(const o of e.mobs)o.dead||Math.hypot(o.pos.x-s.x,o.pos.z-s.z)>s.radius||e.damageMob(o,s.damagePerTick,r);s.nextTick+=s.tickInterval}s.left<=0&&n.splice(i,1)}}function g2(n,t,e){for(let i=n.length-1;i>=0;i--){const s=n[i];if(s){if(s.x+=s.dx*s.speed*t,s.z+=s.dz*s.speed*t,s.life-=t,s.owner<0){for(const r of e.players.values())if(!r.dead&&!(Math.hypot(r.x-s.x,r.z-s.z)>1.6)){e.hitPlayer(r,s.damage,!1,s.burn),s.life=0;break}}else{const r=e.players.get(s.owner);for(const o of e.mobs){if(o.dead||s.hit.has(o.id))continue;const a=Pe(o.type);if(!(Math.hypot(o.pos.x-s.x,o.pos.z-s.z)>1.5+a.scale)){if(o.boss?.invuln){e.onBlocked();continue}if(r&&(e.damageMob(o,s.damage,r),e.onArrowHit(o,r)),s.hit.add(o.id),s.pierceLeft<=0){s.life=0;break}s.pierceLeft--}}}s.life<=0&&n.splice(i,1)}}}function x2(n,t,e){for(let i=n.length-1;i>=0;i--){const s=n[i];if(!s)continue;s.life-=t;let r=!1;for(const o of e.values()){if(o.dead)continue;const a=Math.hypot(o.x-s.x,o.z-s.z);if(a<hi.MAGNET_RADIUS&&(s.x+=(o.x-s.x)*t*hi.MAGNET_SPEED,s.z+=(o.z-s.z)*t*hi.MAGNET_SPEED),a<hi.PICKUP_RADIUS){Ww(o,s.amount),r=!0;break}}(r||s.life<=0)&&n.splice(i,1)}}const _2=.6,v2=6e4,M2=.05,y2=1.55;class eu{code;seed;gates=my;tick=0;emptySince=null;players=new Map;mobs=[];coins=[];projectiles=[];fields=[];debuffs=new s2;minions=new r2;rng;terrain;archetypes=new Map;mobZone=new Map;mobMaxHp=new Map;mobIndex=new Map;contribution=new Map;nextEntityId=1;pending=[];constructor(t,e){this.code=t,this.seed=e,this.rng=b1(e),this.terrain=i2(),this.buildArchetypes(),this.spawnAll()}get minionList(){return this.minions.all}buildArchetypes(){for(const t of Object.keys(Ta)){const e=Pe(t);this.archetypes.set(t,{id:t,name:e.name,speed:e.speed,aggro:e.aggro??0,reach:e.reach,cd:e.cd,dmg:e.dmg,scale:e.scale,ranged:e.ranged===!0,ghost:e.ghost===!0,boss:e.boss===!0,world:e.world===!0,slow:e.slow===!0,burn:e.burn===!0,hop:e.hop===!0,fly:e.fly??0,regen:e.regen??0})}}spawnAll(){for(const t of Vf)for(const e of CM(t,this.rng))this.spawnMob(t,e.x,e.z)}spawnMob(t,e,i){const s=Pe(t.type),r=`m${this.nextEntityId++}`,o=this.scaledHp(t.type),a={id:r,type:t.type,pos:{x:e,y:s.fly??0,z:i},yaw:0,hp:o,maxHp:o,dead:!1,dieT:0,hitT:99,cd:0,walk:0,roll:0,atkT:0,atkD:0,home:{x:e,y:0,z:i},zone:{x:t.x,z:t.z,r:t.r,type:t.type},wander:this.rng()*Math.PI*2,wt:this.rng()*3,bob:this.rng()*Math.PI*2,boss:s.boss===!0?{phase:0,cast:0,skCd:9,pulse:0,invuln:!1}:null};return this.mobs.push(a),this.mobZone.set(r,t),this.mobMaxHp.set(r,o),this.mobIndex.set(r,a),a}scaledHp(t){const e=Pe(t);if(!e.boss)return e.hp;const i=Math.max(1,this.players.size);return Math.round(e.hp*(1+_2*(i-1)))}get full(){return this.players.size>=by}join(t){const e=this.nextEntityId++,i=Ow(e,t,Y1);return this.players.set(e,i),this.emptySince=null,this.emit({k:"joined",playerId:e,name:i.name}),i}leave(t){this.players.get(t)&&(this.players.delete(t),this.minions.removeOwner(t),this.emit({k:"left",playerId:t}),this.players.size===0&&(this.emptySince=Date.now()))}input(t,e){const i=this.players.get(t);i&&(i.lastInputAt=Date.now(),zw(i,e,_s,this.gates,this.terrain))}step(){this.tick++;const t=_s;this.stepPlayers(t),this.stepMobs(t),this.stepMinions(t),this.stepProjectiles(t),this.stepFields(t),this.stepDebuffs(t),this.stepCoins(t),this.stepGateState();const e=this.pending;return this.pending=[],e}stepPlayers(t){for(const e of this.players.values()){const i=e.dead,s=Bw(e,t,this.terrain);s.burned>0&&this.emit({k:"damage",targetId:e.id,amount:s.burned,crit:!1,isMob:!1}),!i&&e.dead&&this.emit({k:"playerDied",playerId:e.id}),!e.dead&&(s.landed>0&&this.landingAoe(e),e.wantsAttack&&e.attackCd<=0&&this.playerAttack(e),e.wantsSpecial&&e.classId&&(e.specialCd<=0||e.specialCharged)&&this.playerSpecial(e))}}playerAttack(t){t.comboStep=t.comboT>0?(t.comboStep+1)%Mn.LENGTH:0;const e=t.comboStep===Mn.FINISHER_INDEX;t.comboT=Mn.WINDOW,t.attackCd=(e?Mn.CD_FINISHER:Mn.CD_NORMAL)*t.stats.cdB,t.sinceAttack=0,this.autoAim(t);const i={x:Math.sin(t.yaw),z:Math.cos(t.yaw)},s=this.classOf(t),r=t.stats.dmg*s.dmgMul*(e?y2:1),o={x:t.x,z:t.z},a=l2(t,this.mobs),c=this.terrain.surfaceAt(t.x,t.z,t.classId==="fish").water;let l=null,u=1/0;for(const h of this.mobs){if(h.dead)continue;const d=Pe(h.type),f=KM(t.stats.reach+t.mods.attackRangeFlat,d.scale),g=je(o,h.pos);if(g>f||g===0)continue;const _=JM(i,{x:(h.pos.x-t.x)/g,z:(h.pos.z-t.z)/g}),m=_?1:t.mods.rearSplashPct;if(m<=0)continue;const p=o2(t,{targetDistance:g,nearbyEnemyCount:a,inWater:c});this.damageMob(h,r*c2(t,s,p)*m,t),_&&g<u&&(u=g,l=h.pos)}e&&t.mods.comboFinisherExplosion&&l&&this.comboExplosion(t,l)}autoAim(t){let e=null,i=1/0;for(const s of this.mobs){if(s.dead)continue;const r=Pe(s.type),o=ZM(t.stats.reach+t.mods.attackRangeFlat,r.scale),a=je({x:t.x,z:t.z},s.pos);a>o||a<1e-6||a<i&&(i=a,e=s)}e&&(t.yaw=Math.atan2(e.pos.x-t.x,e.pos.z-t.z))}comboExplosion(t,e){if(t.classId){for(const i of Qf(t.classId,t.skills).effects)if(i.kind==="aoe"){this.aoeDamage(t,e,i.radius,t.stats.dmg*i.damageMul);return}}}landingAoe(t){const e=t.mods.landingAoe;e!==null&&this.aoeDamage(t,{x:t.x,y:0,z:t.z},e.radius,e.damage)}static AOE_DEFAULT_COLOR=16765567;aoeDamage(t,e,i,s,r=eu.AOE_DEFAULT_COLOR){this.emit({k:"aoe",x:e.x,z:e.z,radius:i,color:r,shape:"burst"});for(const o of this.mobs)o.dead||je(e,o.pos)>i||this.damageMob(o,s,t)}playerSpecial(t){h2(t,{mobs:this.mobs,aoeDamage:(e,i,s,r,o)=>this.aoeDamage(e,i,s,r,o),damageMob:(e,i,s)=>this.damageMob(e,i,s),spawnProjectile:e=>this.projectiles.push({id:this.nextEntityId++,...e}),summon:(e,i,s)=>this.minions.summon(e,i,s,()=>this.nextEntityId++),addField:(e,i)=>{this.fields.push({id:this.nextEntityId++,x:i.x,z:i.z,radius:i.radius,damagePerTick:i.damagePerTick,tickInterval:i.tickInterval,ownerId:e.id,left:i.duration,nextTick:0})},showArea:e=>this.emit({k:"aoe",...e}),toast:e=>this.emit({k:"toast",text:e})})}stepFields(t){m2(this.fields,t,{players:this.players,mobs:this.mobs,damageMob:(e,i,s)=>this.damageMob(e,i,s)})}stepMobs(t){for(const e of this.mobs){const i=Pe(e.type),s=this.archetypes.get(e.type);if(!s)continue;if(e.dead){const u={...e,dieT:e.dieT+t};if(Object.assign(e,u),e.dieT>=SM(i)){const h=this.mobZone.get(e.id);if(h){const d=$f(h,this.rng),f=this.scaledHp(e.type);Object.assign(e,{pos:{x:d.x,y:i.fly??0,z:d.z},home:{x:d.x,y:0,z:d.z},hp:f,maxHp:f,dead:!1,dieT:0,roll:0,boss:i.boss?{phase:0,cast:0,skCd:9,pulse:0,invuln:!1}:null}),this.mobMaxHp.set(e.id,f),this.contribution.delete(e.id),this.debuffs.clear(e.id)}}continue}const r=this.nearestPlayer(e);if(!r)continue;const o=[...this.players.values()].find(u=>u.classId==="boss"&&!u.dead),a=e.pos.x,c=e.pos.z,l=fy(e,s,{target:{pos:{x:r.x,y:r.y,z:r.z},dead:r.dead},fear:o!==void 0&&!s.boss,dreadRank:o?.skills.dread??0,castles:Of.map(u=>({x:u.x,z:u.z,r:u.r})),rng:this.rng,elapsed:this.tick*_s},t);Object.assign(e,l.mob),this.applyCurseSlow(e,a,c);for(const u of l.events)this.handleMobEvent(e,u,r)}}applyCurseSlow(t,e,i){const s=this.debuffs.slowOf(t.id);s<=0||Object.assign(t,{pos:{x:e+(t.pos.x-e)*(1-s),y:t.pos.y,z:i+(t.pos.z-i)*(1-s)}})}handleMobEvent(t,e,i){const s=u2(this.players.values(),t.pos);switch(e.kind){case"melee":{this.hitPlayer(i,e.damage*s,e.slow,e.burn);break}case"projectile":{this.projectiles.push({id:this.nextEntityId++,x:e.origin.x,y:e.origin.y,z:e.origin.z,dx:e.dir.x,dz:e.dir.z,speed:e.speed,life:e.life,damage:e.damage*s,burn:e.burn,owner:-1,pierceLeft:0,hit:new Set});break}case"shockwave":{this.emit({k:"shockwave",x:e.x,z:e.z,radius:e.maxRadius,bossId:t.type});for(const r of this.players.values()){if(r.dead)continue;je({x:r.x,z:r.z},{x:e.x,z:e.z})<=e.maxRadius&&this.hitPlayer(r,e.damage*s,!1,!1)}break}case"boss-phase-start":{const o=tp(t.type).name??`${Pe(t.type).name} — 힘을 모은다`;this.emit({k:"toast",text:o});break}}}stepMinions(t){if(this.minions.all.length===0)return;const e=this.mobs.map(i=>({id:i.id,pos:i.pos,dead:i.dead,invuln:i.boss?.invuln===!0}));for(const i of this.minions.step(t,this.players,e)){const s=this.players.get(i.ownerId),r=this.mobIndex.get(i.mobId);!s||!r||r.dead||this.damageMob(r,i.amount,s,"indirect")}}stepDebuffs(t){for(const e of this.debuffs.step(t)){const i=this.mobIndex.get(e.mobId),s=this.players.get(e.ownerId);!i||i.dead||!s||this.damageMob(i,e.amount,s,"indirect")}}stepProjectiles(t){g2(this.projectiles,t,{players:this.players,mobs:this.mobs,hitPlayer:(e,i,s,r)=>this.hitPlayer(e,i,s,r),damageMob:(e,i,s)=>this.damageMob(e,i,s),onArrowHit:(e,i)=>{i.mods.poisonDps>0&&this.debuffs.applyPoison(e.id,i.mods.poisonDps,i.id)},onBlocked:()=>this.emit({k:"damage",targetId:0,amount:0,crit:!1,isMob:!0})})}stepCoins(t){x2(this.coins,t,this.players)}stepGateState(){const t=this.gates;this.gates=vy(this.gates,this.tick),!t.heavenOpen&&this.gates.heavenOpen&&this.emit({k:"gateOpened"}),t.cutscene.kind==="none"&&this.gates.cutscene.kind==="playing"&&this.emit({k:"cutsceneStart"})}classOf(t){return t.classId?Sr(t.classId):Aa}damageMob(t,e,i,s="direct"){if(t.boss?.invuln){this.emit({k:"damage",targetId:0,amount:0,crit:!1,isMob:!0});return}const r=e*this.debuffs.damageTakenMul(t.id),o=s==="direct"?ey(r,i.stats,this.rng):{damage:Math.max(1,Math.round(r)),crit:!1},a=Math.min(t.hp,o.damage);if(Object.assign(t,{hp:t.hp-o.damage,hitT:0}),this.emit({k:"damage",targetId:0,amount:o.damage,crit:o.crit,isMob:!0}),s==="direct"&&i.stats.vamp>0&&(i.hp=Math.min(i.stats.maxHp,i.hp+a*i.stats.vamp)),s==="direct"&&this.applyOnHitDebuffs(t,i),Pe(t.type).boss){let l=this.contribution.get(t.id);l||(l=new Map,this.contribution.set(t.id,l)),l.set(i.id,(l.get(i.id)??0)+a)}t.hp<=0&&this.killMob(t,i)}applyOnHitDebuffs(t,e){e.mods.enemyDefenseReductionPct<=0||this.debuffs.applyCurse(t.id,e.mods.enemyDefenseReductionPct,e.mods.enemySlowPct,e.mods.curseSpreadRadius>0?{radius:e.mods.curseSpreadRadius,from:t.pos,mobs:this.mobs}:null)}killMob(t,e){Object.assign(t,{hp:0,dead:!0,dieT:0}),this.debuffs.clear(t.id);const i=Pe(t.type),s=sy(i.gold,this.rng);let r=s.amount;e.mods.goldDoubleChanceOnKill>0&&this.rng()<e.mods.goldDoubleChanceOnKill&&(r*=2),this.coins.push({id:this.nextEntityId++,x:t.pos.x+s.offsetX,z:t.pos.z+s.offsetZ,amount:r,life:hi.LIFETIME}),this.emit({k:"mobDied",mobId:0,x:t.pos.x,z:t.pos.z,gold:r}),e.mods.healOnKillFlat>0&&!e.dead&&(e.hp=Math.min(e.stats.maxHp,e.hp+e.mods.healOnKillFlat)),this.rollKillSummons(t.pos,e);for(const d of this.players.values()){if(d.dead||je({x:d.x,z:d.z},t.pos)>Bf)continue;const f=Vw(d,i.xp);for(const g of f.leveled)this.emit({k:"levelUp",playerId:d.id,level:g})}if(!i.boss)return;const o=i.unlock,a=this.contribution.get(t.id),c=(this.mobMaxHp.get(t.id)??i.hp)*M2,l=[];for(const d of this.players.values())(a?.get(d.id)??0)<c&&d.id!==e.id||(l.push(d.id),o&&Kw(d,o));o&&this.emit({k:"loot",weaponId:o,to:l}),this.emit({k:"bossKilled",bossId:t.type,by:l});const u=t.type,h=this.gates;this.gates=_y(this.gates,u,this.tick),this.gates!==h&&(this.gates.lordsKilled.length!==h.lordsKilled.length&&this.emit({k:"runeLit",lordId:t.type,count:this.gates.lordsKilled.length}),!h.innerOpen&&this.gates.innerOpen&&this.emit({k:"sealBroken"}))}rollKillSummons(t,e){const i={x:t.x,z:t.z};ry(this.classOf(e),e.skills,this.rng)&&this.minions.summon(e,i,1,()=>this.nextEntityId++),e.mods.summonOnKillChancePct>0&&this.rng()<e.mods.summonOnKillChancePct&&this.minions.summon(e,i,1,()=>this.nextEntityId++)}hitPlayer(t,e,i,s){const r=t.dead,o=Hw(t,e,this.rng);o.applied>0&&(this.emit({k:"damage",targetId:t.id,amount:o.applied,crit:!1,isMob:!1}),i&&(t.slowT=Math.max(t.slowT,2.5)),s&&(t.burnT=Math.max(t.burnT,3))),!r&&o.died&&this.emit({k:"playerDied",playerId:t.id})}nearestPlayer(t){let e=null,i=1/0;for(const s of this.players.values()){if(s.dead||!zf(pa({x:s.x,z:s.z}),pa({x:t.pos.x,z:t.pos.z})))continue;const r=je({x:s.x,z:s.z},t.pos);r<i&&(i=r,e=s)}return e}respawn(t){const e=this.players.get(t);e?.dead&&Gw(e)}emit(t){this.pending.push(t)}snapshotFor(t){return d2(this,t)}restoreGates(t){this.gates=yy(t)}}const kd="ABCDEFGHJKMNPQRSTUVWXYZ23456789",S2=4;class b2{rooms=new Map;seedCounter=1;acquire(t){if(t){const e=t.toUpperCase(),i=this.rooms.get(e);if(i&&!i.full)return{room:i,created:!1};if(!i)return{room:this.create(e),created:!0}}return{room:this.create(this.freshCode()),created:!0}}get(t){return this.rooms.get(t.toUpperCase())}create(t){const e=new eu(t,this.nextSeed());return this.rooms.set(t,e),e}nextSeed(){return this.seedCounter++*2654435761>>>0}freshCode(){for(let t=0;t<64;t++){let e="";for(let i=0;i<S2;i++){const s=(this.seedCounter*31+t*7+i*13)%kd.length;e+=kd[s]??"A"}if(!this.rooms.has(e))return e;this.seedCounter++}return`R${Date.now().toString(36).slice(-3).toUpperCase()}`}stepAll(){const t=[];for(const e of this.rooms.values())t.push({room:e,events:e.step()});return t}sweep(t=Date.now()){const e=[];for(const[i,s]of this.rooms)if(!(s.players.size>0)){if(s.emptySince===null){s.emptySince=t;continue}t-s.emptySince>=v2&&(this.rooms.delete(i),e.push(i))}return e}get size(){return this.rooms.size}get stats(){let t=0;for(const e of this.rooms.values())t+=e.players.size;return{rooms:this.rooms.size,players:t}}}const Nd=2;class E2{constructor(t,e,i,s){this.rooms=t,this.send=e,this.broadcast=i,this.opts=s}room=null;playerId=-1;joined=!1;chatBudget=Nd;refill(){this.chatBudget=Nd}leave(){const t=this.room;!t||this.playerId<0||(t.leave(this.playerId),this.broadcast(t,{k:"left",playerId:this.playerId},this),this.room=null,this.playerId=-1,this.joined=!1)}handle(t){if(t.t==="join")return this.handleJoin(t);if(t.t==="ping")return this.send({t:"pong",clientTime:t.clientTime,serverTime:Date.now()}),!0;const e=this.room;if(!e||this.playerId<0)return!0;const i=e.players.get(this.playerId);if(!i)return!0;switch(t.t){case"input":e.input(this.playerId,t.frame);break;case"pickClass":$w(i,t.classId)&&this.broadcast(e,{k:"toast",text:`${i.name} → ${t.classId}`},this);break;case"learnSkill":Yw(i,t.nodeId);break;case"respec":qw(i);break;case"buyWeapon":jw(i,t.weaponId);break;case"equipWeapon":Tp(i,t.weaponId);break;case"respawn":e.respawn(this.playerId);break;case"chat":{if(this.chatBudget<=0)break;this.chatBudget--;const s=String(t.text).slice(0,120).trim();if(!s)break;this.broadcast(e,{k:"chat",playerId:i.id,name:i.name,text:s},this);break}case"debug":this.opts.allowDebug&&w2(e,i.id,t.action);break}return!0}handleJoin(t){if(this.joined)return!0;if(t.protocol!==Ml)return this.send({t:"reject",reason:"클라이언트 버전이 다릅니다. 새로고침 해주세요."}),!1;const{room:e,created:i}=this.rooms.acquire(t.roomCode),s=e.join(t.name);if(i&&t.save!==void 0){const r=rp(t.save);r&&(Jw(s,r),e.restoreGates(r.gates))}return this.room=e,this.playerId=s.id,this.joined=!0,this.send({t:"hello",protocol:Ml,playerId:s.id,roomCode:e.code,tickRate:Math.round(1/_s),worldSeed:e.seed,sharedHash:Ey}),this.broadcast(e,{k:"joined",playerId:s.id,name:s.name},this),!0}pushFrame(t){const e=this.room;if(!e||this.playerId<0)return;for(const s of t)this.send({t:"event",ev:s});const i=e.snapshotFor(this.playerId);i&&this.send(i)}}function w2(n,t,e){const i=n.players.get(t);if(i)switch(e.a){case"teleport":i.x=e.x,i.z=e.z;break;case"setLevel":i.lv=Math.max(1,Math.min(200,Math.round(e.level)));break;case"giveGold":i.gold+=Math.max(0,Math.round(e.amount));break;case"killBoss":for(const s of n.mobs)s.type===e.bossId&&!s.dead&&Object.assign(s,{hp:1});break}}class Ud{onMessage=null;onStateChange=null;rooms=new b2;session;timer=null;closed=!1;constructor(t=!1){this.session=new E2(this.rooms,e=>{this.closed||queueMicrotask(()=>this.onMessage?.(e))},()=>{},{allowDebug:t})}connect(){this.closed=!1,this.onStateChange?.("connecting"),queueMicrotask(()=>{this.closed||(this.onStateChange?.("open"),this.start())})}send(t){this.closed||this.session.handle(t)}close(){this.closed=!0,this.timer!==null&&clearInterval(this.timer),this.timer=null,this.session.leave(),this.onStateChange?.("closed")}start(){this.timer===null&&(this.timer=setInterval(()=>this.tick(),_s*1e3))}tick(){if(this.closed)return;const t=this.rooms.stepAll();this.session.refill();const e=this.session.room,i=e?t.find(s=>s.room===e)?.events??[]:[];this.session.pushFrame(i),this.rooms.sweep()}}const T2=.1,Od=120;class A2{pending=[];lastCorrection=0;corrections=0;state={x:0,z:0};reset(t,e){this.state.x=t,this.state.z=e,this.pending.length=0}apply(t,e,i){this.pending.push({frame:t,speed:e}),this.pending.length>Od&&this.pending.splice(0,this.pending.length-Od),Fd(this.state,t,e,i)}reconcile(t,e,i,s){for(;this.pending.length>0;){const o=this.pending[0];if(!o||o.frame.seq>i)break;this.pending.shift()}const r=Math.hypot(this.state.x-t,this.state.z-e);if(!(r<=T2)){this.lastCorrection=r,this.corrections++,this.state.x=t,this.state.z=e;for(const o of this.pending)Fd(this.state,o.frame,o.speed,s)}}get pendingCount(){return this.pending.length}}function Fd(n,t,e,i){const s=zd(t.moveX),r=zd(t.moveZ),o=Math.hypot(s,r);if(o<=dn.inputDeadzone)return;const a=Math.min(t.dt,.1),c=n.x+s/o*e*a,l=n.z+r/o*e*a,u=Ff({x:c,z:l},{isPlayer:!0,gates:i});n.x=u.x,n.z=u.z}function zd(n){return n<-1?-1:n>1?1:n}const R2=100,C2=12;class P2{buf=[];push(t,e){this.buf.push({t:e,value:t}),this.buf.length>C2&&this.buf.shift()}sample(t){const e=t-R2,i=this.buf;if(i.length===0)return null;const s=i[i.length-1];if(!s)return null;if(i.length===1||e>=s.t)return s.value;for(let r=i.length-1;r>0;r--){const o=i[r],a=i[r-1];if(!(!a||!o)&&a.t<=e&&e<=o.t){const c=o.t-a.t,l=c<=0?1:(e-a.t)/c;return I2(a.value,o.value,l)}}return i[0]?.value??null}clear(){this.buf.length=0}}function I2(n,t,e){return{...t,x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e,z:n.z+(t.z-n.z)*e,yaw:n.yaw+L2(n.yaw,t.yaw)*e}}function L2(n,t){let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class Bd{map=new Map;push(t,e,i){let s=this.map.get(t);s||(s=new P2,this.map.set(t,s)),s.push(e,i)}sample(t,e){return this.map.get(t)?.sample(e)??null}retain(t){for(const e of this.map.keys())t.has(e)||this.map.delete(e)}has(t){return this.map.has(t)}clear(){this.map.clear()}}const nu="blockquest.character",Cp="blockquest.name",Pp="blockquest.room";function D2(n){try{return localStorage.setItem(nu,JSON.stringify(n)),{ok:!0}}catch(t){return{ok:!1,reason:t instanceof Error?t.message:"저장할 수 없습니다"}}}function k2(){try{const n=localStorage.getItem(nu);return n?rp(JSON.parse(n)):null}catch{return null}}function N2(){try{localStorage.removeItem(nu)}catch{}}function U2(n){try{localStorage.setItem(Cp,n)}catch{}}function O2(){try{return localStorage.getItem(Cp)??""}catch{return""}}function F2(n){try{sessionStorage.setItem(Pp,n)}catch{}}function Ip(){try{return sessionStorage.getItem(Pp)}catch{return null}}function Lp(){const t=new URLSearchParams(location.search).get("room");return t&&/^[A-Za-z0-9]{2,8}$/.test(t)?t.toUpperCase():null}const Hd="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function z2(n=4){const t=new Uint32Array(n);crypto.getRandomValues(t);let e="";for(let i=0;i<n;i++)e+=Hd[(t[i]??0)%Hd.length];return e}function B2(n){const t=new URL(location.href);return t.searchParams.set("room",n),t.hash="",t.toString()}class H2{kit;fx;hud;panels;cutscene;audio=new gw;input;net;bossBar;minimap;refs;predictor=new A2;pad;detach=[];world=null;binder=null;cam={yaw:0,pitch:.34,distance:bl.cameraDistance};camPos=new L;camTarget=new L;myRig=null;myWeapon=null;myWeaponId="";walkPhase=0;swingT=0;swingDur=0;swingStep=0;comboT=0;attackCd=0;attackAnim=0;stance=0;hurtAnim=0;deadT=0;remoteRigs=new Map;mobObjects=new Map;plates=new Map;projectVec=new L;trailA=new L;trailB=new L;playerInterp=new Bd;mobInterp=new Bd;lastSnapshot=null;gates={slain:[],hv:!1,ig:!1,cc:!1};clampGates={heavenOpen:!1,innerOpen:!1};paused=!1;running=!1;lastFrame=0;playTime=0;bossVisible=null;builtSeed=-1;minimapTick=0;onSnapshot=null;onEvent=null;onReady=null;constructor(t,e){this.refs=t,this.kit=Ly(t.canvas),this.fx=new eb(this.kit,t.overlay),this.hud=new lw,this.panels=new dw(t.panels),this.cutscene=new pw(t.cutscene),this.bossBar=new ew(t.bossbar),this.minimap=new cw(t.minimap),this.input=new xw({...bl}),this.pad=new Pw(this.input),this.panels.onChange=r=>{this.paused=r};const i={onHello:(r,o,a)=>this.onHello(o,a),onSnapshot:r=>this.applySnapshot(r),onEvent:r=>this.handleEvent(r),onState:r=>this.showNetState(r)},s=e.serverUrl!=="";this.transport=s?new kw(e.serverUrl):new Ud,this.mode=s?"online":"solo",this.net=new Rd(this.transport,i),this.handlers=i,this.joinName=e.name,this.joinRoom=e.roomCode??Lp()??void 0,this.allowSolo=e.soloFallback!==!1,e.saveProvider&&(this.net.saveProvider=e.saveProvider),this.attachInput(),this.connectNow()}handlers;transport;joinName;joinRoom;mode;soloFallbackTimer=null;allowSolo=!0;connectNow(){this.transport.connect(),this.net.join(this.joinName,this.joinRoom),this.mode==="online"&&(this.soloFallbackTimer=setTimeout(()=>{this.world===null&&this.fallbackToSolo()},V2))}fallbackToSolo(){if(this.mode!=="solo"){if(!this.allowSolo){this.hud.toast("친구 방에 연결할 수 없습니다 — 계속 시도합니다");return}this.mode="solo",this.net.close(),this.transport=new Ud,this.net=new Rd(this.transport,this.handlers),this.connectNow(),this.hud.toast("혼자 하기로 시작합니다")}}showNetState(t){if(this.mode==="solo"){this.hud.setNet("혼자 하기");return}this.hud.setNet(t==="open"?"접속됨":t==="connecting"?"접속 중…":"연결 끊김",this.net.roomCode||void 0)}onHello(t,e){if(this.soloFallbackTimer!==null&&(clearTimeout(this.soloFallbackTimer),this.soloFallbackTimer=null),F2(t),this.world&&this.builtSeed===e){this.hud.toast("다시 연결됐다");return}this.world&&(this.kit.scene.remove(this.world.root),this.resetEntities()),this.world=kS(this.kit,e),this.builtSeed=e,this.binder=new NS(this.world),this.myRig||(this.myRig=Ma(yl),this.kit.scene.add(this.myRig.root)),this.onReady?.(),this.running||this.start()}resetEntities(){for(const[,t]of this.remoteRigs)this.kit.scene.remove(t.rig.root);this.remoteRigs.clear();for(const[,t]of this.mobObjects)this.kit.scene.remove(t),fd(t);this.mobObjects.clear();for(const[,t]of this.plates)t.root.remove();this.plates.clear(),this.playerInterp.clear(),this.mobInterp.clear()}attachInput(){this.detach.push(yw(this.input)),this.detach.push(Tw(this.input,{joyZone:this.refs.joyZone,joy:this.refs.joy,knob:this.refs.knob,surface:this.refs.canvas},this.cam)),this.detach.push(Cw(this.input,{attack:this.refs.btnAttack,jump:this.refs.btnJump,special:this.refs.btnSpecial})),this.detach.push(this.pad.attach());const t="ontouchstart"in window||navigator.maxTouchPoints>0;t&&this.refs.touch.classList.remove("hidden"),this.input.onDeviceChange=s=>{this.refs.touch.classList.toggle("hidden",s==="gamepad"),this.hud.setHelp(Vd(s))},this.hud.setHelp(Vd(t?"touch":"keyboard"));const e=()=>{Dy(this.kit,window.innerWidth,window.innerHeight,window.devicePixelRatio)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e),e(),this.detach.push(()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)});const i=()=>this.audio.unlock();window.addEventListener("pointerdown",i,{once:!0}),window.addEventListener("keydown",i,{once:!0})}start(){this.running||(this.running=!0,this.lastFrame=performance.now(),requestAnimationFrame(this.frame))}stop(){this.running=!1,this.soloFallbackTimer!==null&&clearTimeout(this.soloFallbackTimer);for(const t of this.detach)t();this.detach.length=0,this.net.close(),this.fx.dispose()}frame=t=>{if(!this.running)return;requestAnimationFrame(this.frame);const e=Math.min(.05,(t-this.lastFrame)/1e3);this.lastFrame=t,this.cutscene.update(e);const i=this.fx.update(e),s=this.input.consume();this.pad.poll(),this.handleUiCommands(s),!this.paused&&!this.cutscene.playing&&(this.playTime+=e,this.tickLocal(s,i)),this.binder?.update(e),this.updateRemote(t),this.updateCamera(i),(this.minimapTick=(this.minimapTick+1)%8)===0&&this.drawMinimap(),this.kit.renderer.render(this.kit.scene,this.kit.camera)};handleUiCommands(t){for(const e of t.ui)switch(e){case"menu":this.panels.closeTop()||this.openPause?.();break;case"tree":this.openTree?.();break;case"shop":this.openShop?.();break;case"map":"toggleFull"in this.minimap&&this.minimap.toggleFull();break;case"autoAttack":this.input.settings.autoAttack=!this.input.settings.autoAttack,this.hud.toast(`자동 공격 ${this.input.settings.autoAttack?"켬":"끔"}`);break;case"cameraReset":this.cam.pitch=.34;break}}openPause=null;openTree=null;openShop=null;tickLocal(t,e){Aw(this.cam,t.look.dx,t.look.dy),t.zoom!==0&&Rw(this.cam,t.zoom);const i=this.me;if(!i)return;const s=Iw(t.move,this.cam.yaw),r=s.x,o=s.z;let a=0;(t.attack||this.shouldAutoAttack())&&(a|=oi.ATTACK),t.jump&&(a|=oi.JUMP),t.special&&(a|=oi.SPECIAL),t.run&&(a|=oi.RUN);const c=Math.hypot(r,o)>dn.inputDeadzone,l=c?Lw(s):this.myRig?.root.rotation.y??0,u={dt:_s,moveX:r,moveZ:o,yaw:l,actions:a},h=this.net.sendInput(u);this.predictor.apply({...u,seq:h},this.currentSpeed(t),this.clampGates),this.walkPhase+=e*11*(c?1:0)*(t.run?1.65:1),this.attackCd>0&&(this.attackCd-=e),this.comboT>0&&(this.comboT-=e),this.swingT>0&&(this.swingT-=e);const d=this.swingT>0||this.enemyNear(W2)?1:0;this.stance+=(d-this.stance)*Math.min(1,e*$2),this.attackAnim>0&&(this.attackAnim-=e),this.hurtAnim>0&&(this.hurtAnim-=e),a&oi.ATTACK&&this.attackCd<=0&&!(i.anim&op.DEAD)&&this.startSwing(),this.deadT=i.hp<=0?this.deadT+e:0;const f=this.myRig;f&&(f.root.position.set(this.predictor.state.x,i.y,this.predictor.state.z),f.root.rotation.y=l,sd(f,{walkPhase:this.walkPhase,speed01:c?1:0,airborne:(i.anim&4)!==0,attackT:this.swingT>0?1-this.swingT/this.swingDur:0,comboStep:this.swingStep,hurtT:this.hurtAnim,dead:i.hp<=0,run01:t.run?1:0,stance:this.stance,time:this.playTime,vy:0,deadT:this.deadT}),this.syncWeapon(i.weaponId,i.classId),this.updateBladeTrail())}startSwing(){const t=this.comboT>0&&this.swingStep===Mn.FINISHER_INDEX;this.swingStep=this.comboT>0?(this.swingStep+1)%Mn.LENGTH:0,this.comboT=Mn.WINDOW,this.swingDur=t?Mn.SWING_FINISHER:Mn.SWING_NORMAL,this.swingT=this.swingDur,this.attackCd=t?Mn.CD_FINISHER:Mn.CD_NORMAL,Ys.swing(this.audio)}updateBladeTrail(){const t=this.myRig;if(!t||this.swingT<=0||this.swingDur<=0)return;const e=1-this.swingT/this.swingDur;if(!vb(e))return;const i=t.weaponSlot;i.updateWorldMatrix(!0,!1),this.trailA.setFromMatrixPosition(i.matrixWorld),this.trailB.set(0,X2,0).applyMatrix4(i.matrixWorld),this.fx.trail(this.trailA,this.trailB,q2)}enemyNear(t){const e=this.lastSnapshot,i=this.me;if(!e||!i)return!1;for(const s of e.mobs)if(je({x:i.x,z:i.z},{x:s.x,z:s.z})<=t)return!0;return!1}currentSpeed(t){const e=this.lastSnapshot?.self,i=this.me;if(!i)return dn.baseSpeed;const s=i.classId&&Gd(i.classId)?Sr(i.classId):null;let r=dn.baseSpeed*(s?.spdMul??1);return t.run&&(r*=dn.sprintMul),(e?.slowT??0)>0&&(r*=.45),r}shouldAutoAttack(){if(!this.input.settings.autoAttack)return!1;const t=this.me;if(!t||!this.lastSnapshot)return!1;const e=t.classId&&Gd(t.classId)?Xi[t.classId]:null;for(const i of this.lastSnapshot.mobs){const s=js(i.type)?Pe(i.type):null;if(!s)continue;const r=QM(e?.ranged===!0,0,s.scale);if(je({x:t.x,z:t.z},{x:i.x,z:i.z})<=r)return!0}return!1}syncWeapon(t,e){const i=this.myRig;if(!i||t===this.myWeaponId||(this.myWeaponId=t,this.myWeapon&&(i.weaponSlot.remove(this.myWeapon),this.myWeapon=null),!(e?Xi[e]?.showWeapon!==!1:!0)))return;const r=Nb(t,e?{classId:e}:{});i.weaponSlot.add(r),this.myWeapon=r}applySnapshot(t){this.lastSnapshot=t,this.gates=t.gates,this.clampGates={heavenOpen:t.gates.hv,innerOpen:t.gates.ig},this.binder?.apply(t.gates);const e=t.players.find(o=>o.id===this.net.playerId);e&&(this.predictor.reconcile(e.x,e.z,t.ackSeq,this.clampGates),this.hud.update(uw(t.self,e)),this.hud.setObjective(hw({lords:t.gates.slain.filter(o=>o!=="gabriel"&&o!=="creator").length,heavenOpen:t.gates.hv,gabrielKilled:t.gates.slain.includes("gabriel"),creatorKilled:t.gates.cc,level:e.level,hasClass:e.classId!==null})),e.classId==="boss"&&ky(this.kit));const i=performance.now(),s=new Set;for(const o of t.players)o.id!==this.net.playerId&&(s.add(o.id),this.playerInterp.push(o.id,{x:o.x,y:o.y,z:o.z,yaw:o.yaw,snap:o},i),this.ensureRemoteRig(o));this.playerInterp.retain(s);for(const[o,a]of this.remoteRigs)s.has(o)||(this.kit.scene.remove(a.rig.root),this.remoteRigs.delete(o));const r=new Set;for(const o of t.mobs)r.add(o.id),this.mobInterp.push(o.id,{x:o.x,y:o.y,z:o.z,yaw:o.yaw,snap:o},i);this.mobInterp.retain(r);for(const[o,a]of this.mobObjects)r.has(o)||(this.kit.scene.remove(a),fd(a),this.mobObjects.delete(o));this.updateBossBar(t),this.onSnapshot?.(t)}ensureRemoteRig(t){if(this.remoteRigs.has(t.id))return;const e=this.remoteRigs.size+1,i=Ma(Tb(e));this.kit.scene.add(i.root),this.remoteRigs.set(t.id,{rig:i,slot:e})}updateRemote(t){this.updateMobs(t);for(const[e,i]of this.remoteRigs){const s=this.playerInterp.sample(e,t);if(!s)continue;i.rig.root.position.set(s.x,s.y,s.z),i.rig.root.rotation.y=s.yaw;const r=(s.snap.anim&1)!==0;sd(i.rig,{walkPhase:t/90,speed01:r?1:0,airborne:(s.snap.anim&4)!==0,attackT:s.snap.anim&8?.5:0,comboStep:0,hurtT:0,dead:(s.snap.anim&32)!==0})}}updateMobs(t){const e=this.lastSnapshot;if(e){for(const i of e.mobs){let s=this.mobObjects.get(i.id);s||(s=TE(i.type,{external:zE}),this.kit.scene.add(s),this.mobObjects.set(i.id,s));const r=this.mobInterp.sample(i.id,t);r&&(s.position.set(r.x,r.y,r.z),s.rotation.y=r.yaw,CE(s,{walkPhase:t/120,attackT:0,time:t/1e3}))}this.updateNameplates(e)}}updateNameplates(t){const e=t.players.find(s=>s.id===this.net.playerId);if(!e)return;const i=new Set;for(const s of t.mobs){if(je({x:e.x,z:e.z},{x:s.x,z:s.z})>K2)continue;const o=js(s.type)?Pe(s.type):null;if(!o||o.boss)continue;i.add(s.id);let a=this.plates.get(s.id);a||(a=Z2(),this.refs.overlay.appendChild(a.root),this.plates.set(s.id,a));const c=this.projectPoint(s.x,s.y+o.scale*2.6,s.z);if(!c){a.root.style.display="none";continue}a.root.style.display="",a.root.style.transform=`translate(${c.x}px, ${c.y}px) translate(-50%, -100%)`,a.name!==o.name&&(a.label.textContent=`${o.name} Lv${o.lv}`,a.name=o.name),a.fill.style.transform=`scaleX(${Math.max(0,s.hp/s.maxHp)})`}for(const[s,r]of this.plates)i.has(s)||(r.root.remove(),this.plates.delete(s))}drawMinimap(){const t=this.lastSnapshot,e=this.me;!t||!e||this.minimap.render({self:{x:this.predictor.state.x,z:this.predictor.state.z,yaw:this.cam.yaw},others:t.players.filter(i=>i.id!==e.id).map(i=>({x:i.x,z:i.z})),mobs:t.mobs.map(i=>{const s=js(i.type)?Pe(i.type):null;return{x:i.x,z:i.z,boss:s?.boss===!0,world:s?.world===!0}}),gates:{heavenOpen:t.gates.hv}})}projectPoint(t,e,i){return this.projectVec.set(t,e,i).project(this.kit.camera),this.projectVec.z>1?null:{x:(this.projectVec.x*.5+.5)*window.innerWidth,y:(-this.projectVec.y*.5+.5)*window.innerHeight}}updateBossBar(t){const e=t.players.find(r=>r.id===this.net.playerId);if(!e)return;let i=null,s=60;for(const r of t.mobs){if(!js(r.type)||!Pe(r.type).boss)continue;const o=je({x:e.x,z:e.z},{x:r.x,z:r.z});o<s&&(s=o,i=r)}if(!i){this.bossVisible&&(this.bossBar.hide(),this.audio.stopBgm(),this.bossVisible=null);return}if(this.bossVisible!==i.type){this.bossVisible=i.type;const r=js(i.type)?Pe(i.type):null;this.bossBar.show(r?.name??"보스",BE[i.type]??"dark"),this.audio.playBgm(i.type==="creator"?"creator":"boss")}this.bossBar.setHp(i.hp,i.maxHp),this.bossBar.setInvulnerable(i.invuln)}handleEvent(t){switch(t.k){case"damage":t.isMob?(this.fx.hitstop(t.crit?.085:.05),this.fx.shake(t.crit?.3:.16),t.crit?Ys.crit(this.audio):Ys.hit(this.audio),t.crit&&this.input.vibrate(12)):t.targetId===this.net.playerId&&(this.hurtAnim=.3,this.fx.shake(.24),Ys.hurt(this.audio),this.input.vibrate(25));break;case"levelUp":t.playerId===this.net.playerId&&(Ys.levelUp(this.audio),this.hud.toast(`Lv ${t.level}`));break;case"runeLit":this.hud.toast(`자물쇠 ${t.count} / 3`),Ys.gate(this.audio);break;case"cutsceneStart":this.cutscene.play("gate");break;case"gateOpened":this.hud.toast("문이 열렸다");break;case"sealBroken":this.cutscene.play("seal");break;case"bossKilled":t.bossId==="creator"&&this.cutscene.play("ending",{force:!0});break;case"loot":t.to.includes(this.net.playerId)&&this.hud.toast("새 무기를 얻었다");break;case"toast":this.hud.toast(t.text);break;case"chat":this.hud.toast(`${t.name}: ${t.text}`,3500);break;case"joined":t.playerId!==this.net.playerId&&this.hud.toast(`${t.name} 님이 들어왔다`);break;case"left":this.hud.toast("한 명이 나갔다");break;case"aoe":this.fx.areaHit({x:t.x,z:t.z,radius:t.radius,color:t.color,shape:t.shape,yaw:t.yaw,halfAngle:t.halfAngle,duration:t.duration});break;case"shockwave":this.fx.ring(new L(t.x,.2,t.z),t.radius,8374015);break}this.onEvent?.(t)}updateCamera(t){const e=this.me,i=this.predictor.state.x,s=this.predictor.state.z,r=e?.y??0;this.camTarget.set(i,r+Y2,s);const o=this.input.settings.cameraDistance*G2(this.kit.camera.aspect);this.cam.distance+=(o-this.cam.distance)*Math.min(1,t*6);const a=Math.cos(this.cam.pitch);this.camPos.set(this.camTarget.x-Math.sin(this.cam.yaw)*a*this.cam.distance,Math.max(j2,this.camTarget.y+Math.sin(this.cam.pitch)*this.cam.distance),this.camTarget.z-Math.cos(this.cam.yaw)*a*this.cam.distance),this.kit.camera.position.lerp(this.camPos,Math.min(1,t*11)),this.kit.camera.lookAt(this.camTarget),this.kit.sun.position.set(i+30,55,s+20),this.kit.sun.target.position.set(i,0,s),this.kit.sun.target.updateMatrixWorld()}get me(){return this.lastSnapshot?.players.find(t=>t.id===this.net.playerId)}get selfState(){return this.lastSnapshot?.self}get elapsed(){return this.playTime}get gateState(){return this.gates}}function G2(n){return n>=1.5?1:Math.min(1.75,1.5/Math.max(.4,n))}const V2=2500,W2=10,$2=6,X2=1.7,q2=14674164,Y2=2.6,j2=1.4;function Gd(n){return n in Xi}function Vd(n){switch(n){case"touch":return["왼쪽 아래를 누른 채 움직여서 이동","오른쪽을 끌면 카메라 · 톡 치면 공격","공격 · 점프 · 특수기 버튼은 오른쪽 아래"];case"gamepad":return["왼쪽 스틱 이동 · 오른쪽 스틱 카메라","X 공격 · A 점프 · B 특수기 · Y 스킬","Start 메뉴"];default:return["WASD 이동 · Shift 달리기 · Space 점프","클릭 또는 F 공격 · Q 특수기 · T 스킬","E 상점 · M 지도 · Tab 자동공격 · ESC 메뉴"]}}const K2=60;function Z2(){const n=document.createElement("div");n.className="nameplate";const t=document.createElement("div"),e=document.createElement("div");e.className="mobbar";const i=document.createElement("i");return e.appendChild(i),n.append(t,e),{root:n,label:t,fill:i,name:""}}function J2(n,t,e){return{id:"class",title:e?"직업을 고르자":"직업 변경",modal:!0,render(i,s){const r=n(),o=Xf.map(a=>{const c=Xi[a];return Sp({title:`${c.icon} ${c.name}`,desc:c.desc,stats:c.stats,selected:r.classId===a,onClick:()=>{t.pickClass(a),s()}})});if(i.appendChild(bp(o)),r.classId){const a=document.createElement("p");a.style.cssText="margin-top:14px;font-size:12px;opacity:.7",a.textContent="직업을 바꾸면 이전 직업 전용 스킬 포인트는 전액 돌려받는다.",i.appendChild(a)}}}}const Ko=118,Zo=76,Wd=26,wc=46;function Q2(n,t){return{id:"tree",title:"스킬 트리",render(e){const i=()=>{const s=n();e.replaceChildren();const r=document.createElement("div");r.style.cssText="display:flex;gap:10px;align-items:center;margin-bottom:12px";const o=document.createElement("span");o.className="badge",o.textContent=`남은 SP ${s.sp}`,r.appendChild(o),r.appendChild(fi("전체 초기화",()=>{t.respec(),setTimeout(i,120)})),e.appendChild(r);const a=ro.filter(f=>f.classId===null||f.classId===s.classId),c=xc.map(f=>a.filter(g=>g.tier===f)),l=document.createElement("div");l.className="tree-wrap";const u=Math.max(...c.map(f=>f.length),1);l.style.width=`${u*(Ko+Wd)}px`,l.style.height=`${xc.length*(Zo+wc)+20}px`;const h=new Map;c.forEach((f,g)=>{f.forEach((_,m)=>{h.set(_.id,{x:m*(Ko+Wd),y:g*(Zo+wc)+20})})});const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width",String(l.style.width?parseInt(l.style.width):0)),d.setAttribute("height",String(parseInt(l.style.height)));for(const f of a){if(!f.req)continue;const g=h.get(f.req[0]),_=h.get(f.id);if(!g||!_)continue;const m=g.x+Ko/2,p=g.y+Zo,v=_.x+Ko/2,M=_.y,x=document.createElementNS("http://www.w3.org/2000/svg","path");x.setAttribute("d",`M${m},${p} C${m},${(p+M)/2} ${v},${(p+M)/2} ${v},${M}`);const C=(s.skills[f.req[0]]??0)>=f.req[1];x.setAttribute("stroke",C?"rgba(255,212,121,.6)":"rgba(150,200,255,.22)"),x.setAttribute("stroke-width","2"),x.setAttribute("fill","none"),d.appendChild(x)}l.appendChild(d);for(const f of a){const g=h.get(f.id);g&&l.appendChild(tT(f,s,g,t,i))}if(xc.forEach((f,g)=>{const _=document.createElement("div");_.className="tier-label",_.style.cssText=`position:absolute;left:-2px;top:${g*(Zo+wc)}px`,_.textContent=f,l.appendChild(_)}),e.appendChild(l),!s.classId){const f=document.createElement("p");f.style.cssText="margin-top:16px;font-size:12px;opacity:.7",f.textContent="직업을 고르면 전용 스킬 7개가 더 열린다.",e.appendChild(f)}};i()}}}function tT(n,t,e,i,s){const r=t.skills[n.id]??0,o=!n.req||(t.skills[n.req[0]]??0)>=n.req[1],a=n.classId===null&&!n.requiresAnyClass?!0:t.classId!==null,c=r>=n.max,l=o&&a&&!c&&t.sp>0,u=document.createElement("button");u.className="node"+(l?"":" locked")+(c?" maxed":"")+(n.cap?" cap":""),u.style.cssText=`left:${e.x}px;top:${e.y}px;position:absolute`,u.type="button",u.title=n.desc;const h=document.createElement("b");h.textContent=`${n.icon} ${n.name}`;const d=document.createElement("div");d.className="rank",d.textContent=`${r} / ${n.max}`;const f=document.createElement("div");return f.className="desc",f.textContent=eT(n,Math.max(1,r)),u.append(h,d,f),l&&u.addEventListener("click",()=>{i.learnSkill(n.id),setTimeout(s,120)}),u}function eT(n,t){const e=n.effect,i=s=>`${Math.round(s*t*1e3)/10}%`;switch(e.kind){case"maxHpFlat":return`최대 HP +${e.perRank*t}`;case"attackFlat":return`공격력 +${e.perRank*t}`;case"attackPct":case"allDamagePct":return`공격력 +${i(e.perRank)}`;case"moveSpeedPct":return`이동속도 +${i(e.perRank)}`;case"critChancePct":return`크리 확률 +${i(e.perRank)}`;case"critDamagePct":return`크리 피해 +${i(e.perRank)}`;case"attackSpeedPct":return`공격속도 +${i(e.perRank)}`;case"goldGainPct":return`골드 +${i(e.perRank)}`;case"xpGainPct":return`경험치 +${i(e.perRank)}`;case"damageReductionPct":return`받는 피해 −${i(e.perRank)}`;case"damageReductionBelowHpPct":return`HP ${Math.round(e.hpThreshold*100)}% 이하일 때 피해 −${i(e.perRank)}`;case"lifestealPct":return`준 피해의 ${i(e.perRank)} 회복`;case"hpRegenPerSec":return`초당 HP +${Math.round(e.perRank*t*10)/10}`;case"evadeChancePct":return`회피 +${i(e.perRank)}`;case"allStatsPct":return`모든 능력치 +${i(e.perRank)}`;default:return n.desc.replace(/\$\{([^}]*)\}/g,(s,r)=>nT(r,t)??"?")}}function nT(n,t){const e=n.trim(),i=/^\((.+)\)\.toFixed\((\d+)\)$/.exec(e);if(i){const r=$d(i[1]??"",t),o=Number(i[2]??0);return r===null?null:r.toFixed(o)}const s=$d(e,t);return s===null?null:String(s)}function $d(n,t){const e=n.replace(/\s+/g,"");if(e==="r")return t;const i=/^(-?[\d.]+)\*r$/.exec(e);if(i)return Number(i[1])*t;const s=/^(-?[\d.]+)\+r$/.exec(e);if(s)return Number(s[1])+t;const r=/^(-?[\d.]+)\+(-?[\d.]+)\*r$/.exec(e);if(r)return Number(r[1])+Number(r[2])*t;const o=Number(e);return Number.isFinite(o)?o:null}function iT(n,t){return{id:"shop",title:"🗡 무기점",render(e){const i=()=>{const s=n();e.replaceChildren();const r=document.createElement("div");r.style.cssText="margin-bottom:12px";const o=document.createElement("span");o.className="badge badge-gold",o.textContent=`${s.gold.toLocaleString("ko-KR")} G`,r.appendChild(o),e.appendChild(r);const a=_l.map(c=>{const l=Ss[c],u=s.owned.includes(c),h=s.weaponId===c,d=l.unlock.kind!=="shop"&&!u,f=!u&&!d&&s.gold<l.price;return Sp({title:l.name,desc:l.desc,stats:sT(c),price:d?"보스 처치로 해금":u?h?"장착 중":"보유 중 — 눌러서 장착":`${l.price.toLocaleString("ko-KR")} G`,selected:h,disabled:d||f,onClick:()=>{u?t.equipWeapon(c):t.buyWeapon(c),setTimeout(i,120)}})});e.appendChild(bp(a))};i()}}}function sT(n){const t=Ss[n],e=[];return t.dmg&&e.push(`공격 +${t.dmg}`),t.crit&&e.push(`크리 +${Math.round(t.crit*100)}%`),t.atkSpeed&&e.push(`공속 ${t.atkSpeed<0?"+":"−"}${Math.abs(Math.round(t.atkSpeed*100))}%`),t.reach&&e.push(`사거리 +${t.reach}`),t.gold&&e.push(`골드 +${Math.round(t.gold*100)}%`),t.flame&&e.push("화염"),e.join(" · ")}function rT(n,t,e,i){return{id:"settings",title:"⚙ 설정",render(s){const r=[Fr("카메라 감도",30,220,n.sensitivity,o=>{n.sensitivity=o}),Fr("카메라 거리",6,24,n.cameraDistance,o=>{n.cameraDistance=o}),Fr("조이스틱 데드존 (%)",5,30,Math.round(n.deadzone*100),o=>{n.deadzone=o/100}),Fr("UI 크기 (%)",80,130,Math.round(n.uiScale*100),o=>{n.uiScale=o/100,document.documentElement.style.setProperty("--ui-scale",String(n.uiScale))}),Fr("음량",0,100,t.volume,o=>{t.volume=o}),zr("세로 반전",n.invertY,o=>{n.invertY=o}),zr("자동 공격",n.autoAttack,o=>{n.autoAttack=o}),zr("왼손잡이 모드",n.leftHanded,o=>{n.leftHanded=o,document.body.classList.toggle("left-handed",o)}),zr("진동",n.haptics,o=>{n.haptics=o}),zr("보스 음악",t.bgmEnabled,o=>{t.bgmEnabled=o})];s.append(...r)},footer(s,r){s.appendChild(fi("전체화면",()=>i.toggleFullscreen())),s.appendChild(fi("닫기",r,"primary"))}}}function Dp(n){const t=document.createElement("label");t.style.cssText="display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 4px;border-bottom:1px solid rgba(150,200,255,.12);min-height:44px";const e=document.createElement("span");return e.textContent=n,t.appendChild(e),t}function Fr(n,t,e,i,s){const r=Dp(n),o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:10px";const a=document.createElement("input");a.type="range",a.min=String(t),a.max=String(e),a.value=String(i),a.style.width="160px";const c=document.createElement("b");return c.textContent=String(i),c.style.cssText="min-width:38px;text-align:right;font-variant-numeric:tabular-nums",a.addEventListener("input",()=>{const l=Number(a.value);c.textContent=String(l),s(l)}),o.append(a,c),r.appendChild(o),r}function zr(n,t,e){const i=Dp(n),s=document.createElement("input");return s.type="checkbox",s.checked=t,s.style.cssText="width:26px;height:26px",s.addEventListener("change",()=>e(s.checked)),i.appendChild(s),i}function oT(n,t){return{id:"dead",title:"쓰러졌다",modal:!0,render(e){const i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center;padding:24px 0";const s=document.createElement("p");s.style.cssText="margin:0;font-size:15px;color:var(--ink-dim)",s.textContent=n>0?`골드 일부를 잃었습니다 (−${n.toLocaleString("ko-KR")} G)`:"골드 일부를 잃었습니다",i.appendChild(s),e.appendChild(i)},footer(e,i){e.appendChild(fi("마을에서 부활",()=>{t.respawn(),i()},"primary"))}}}function aT(n,t,e){return{id:"pause",title:"일시정지",render(i){const s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;gap:12px;max-width:420px";const r=document.createElement("div");r.style.cssText="padding:16px;border-radius:14px;background:rgba(18,28,46,.8);border:1px solid rgba(150,200,255,.22)";const o=document.createElement("div");o.style.cssText="font-size:12px;opacity:.7;margin-bottom:6px",o.textContent="친구를 부르려면 이 코드를 알려주세요";const a=document.createElement("div");a.style.cssText="font-size:32px;font-weight:900;letter-spacing:.2em",a.textContent=n,r.append(o,a),r.appendChild(fi("코드 복사",()=>e.copyRoomCode())),s.appendChild(r),i.appendChild(s)},footer(i,s){i.appendChild(fi("설정",t)),i.appendChild(fi("방 나가기",()=>e.leaveRoom(),"danger")),i.appendChild(fi("계속하기",s,"primary"))}}}async function cT(n){if(!n)return[];const t=n.replace(/^ws/,"http").replace(/\/+$/,"");try{const e=await fetch(`${t}/rooms`,{cache:"no-store"});if(!e.ok)return[];const i=await e.json();return Array.isArray(i.rooms)?i.rooms:[]}catch{return[]}}function lT(n,t,e){if(n.replaceChildren(),t.length===0)return;const i=document.createElement("div");i.className="roomlist-title",i.textContent="지금 열린 방",n.appendChild(i);const s=document.createElement("div");s.className="roomlist";for(const r of t){const o=r.players>=r.capacity,a=document.createElement("button");a.type="button",a.className="roomcard"+(o?" full":""),a.disabled=o;const c=document.createElement("b");c.className="roomcard-code",c.textContent=r.code;const l=document.createElement("span");l.className="roomcard-who",l.textContent=r.names.length>0?r.names.join(", "):"모험가";const u=document.createElement("span");u.className="roomcard-meta",u.textContent=`${r.players}/${r.capacity}명 · Lv${r.topLevel} · 자물쇠 ${r.runes}/3`,a.append(c,l,u),o||a.addEventListener("click",()=>e.onPick(r.code)),s.appendChild(a)}n.appendChild(s)}function kp(){return"wss://block-rpg.changame.workers.dev".replace(/\/+$/,"")}function uT(n){const t=kp();return t?`${t}/room/${n}`:""}function Ce(n){const t=document.querySelector(n);if(!t)throw new Error(`요소를 찾을 수 없다: ${n}`);return t}function hT(){return{canvas:Ce("#view"),overlay:Ce("#worldOverlay"),panels:Ce("#panels"),cutscene:Ce("#cutscene"),bossbar:Ce("#bossbar"),minimap:Ce("#minimap"),touch:Ce("#touch"),joyZone:Ce("#joyZone"),joy:Ce("#joy"),knob:Ce("#joyKnob"),btnAttack:Ce("#btnAttack"),btnJump:Ce("#btnJump"),btnSpecial:Ce("#btnSpecial")}}function Xd(){document.documentElement.style.setProperty("--title-img",'url("/minchan_rpg/title.png")');const n=Ce("#boot"),t=Ce("#bootFill"),e=Ce("#bootMsg"),i=Lp(),s=O2(),r=document.createElement("div");r.className="boot-form",r.style.cssText="display:flex;flex-direction:column;gap:12px;align-items:center;width:min(320px,80vw)";const o=document.createElement("input");o.type="text",o.maxLength=16,o.placeholder="이름",o.value=s,o.style.cssText="width:100%;min-height:48px;padding:12px 16px;border-radius:12px;border:1px solid rgba(150,200,255,.3);background:rgba(18,28,46,.9);color:#eaf4ff;font-size:16px;text-align:center";const a=document.createElement("input");a.type="text",a.maxLength=8,a.placeholder="초대 코드 (없으면 비워두기)",a.value=i??"",a.style.cssText=o.style.cssText+";letter-spacing:.18em;text-transform:uppercase";const c=fi(i?"친구 방에 들어가기":"시작하기",()=>{const u=o.value.trim()||"모험가";U2(u);const h=a.value.trim().toUpperCase()||Ip()||void 0;r.remove(),e.textContent="세계를 짓는 중…",t.style.width="35%",dT(u,h,n,t,e)},"primary");c.style.width="100%",r.append(o,a,c),n.appendChild(r);const l=document.createElement("div");l.className="boot-rooms",n.appendChild(l),cT(kp()).then(u=>{lT(l,u,{onPick:h=>{a.value=h,c.click()}})}),e.textContent=i?"초대받은 방이 있다":"이름을 정하자",t.style.width="10%",o.focus(),o.addEventListener("keydown",u=>{u.key==="Enter"&&c.click()}),a.addEventListener("keydown",u=>{u.key==="Enter"&&c.click()})}function dT(n,t,e,i,s){const r=t??Ip()??z2(),o=k2();let a=null;const c=()=>(a?Np(a):o)??void 0,l=new H2(hT(),{serverUrl:uT(r),name:n,saveProvider:c,roomCode:r,soloFallback:t===void 0});a=l,o&&l.cutscene.seenIds.forEach(()=>{}),o?.seenCutscenes.forEach(u=>l.cutscene.markSeen(u)),l.onReady=()=>{i.style.width="100%",s.textContent="준비 완료",setTimeout(()=>e.classList.add("done"),240),o||l.cutscene.play("opening")},fT(l),mT(l),pT(l)}function fT(n){const t=()=>{const o=n.me,a=n.selfState;return{level:o?.level??1,gold:a?.gold??0,sp:a?.sp??0,classId:o?.classId??null,weaponId:o?.weaponId??"stick",owned:a?.owned??["stick"],skills:a?.skills??{}}},e={respawn:()=>n.net.send({t:"respawn"}),pickClass:o=>n.net.send({t:"pickClass",classId:o}),learnSkill:o=>n.net.send({t:"learnSkill",nodeId:o}),respec:()=>n.net.send({t:"respec"}),buyWeapon:o=>n.net.send({t:"buyWeapon",weaponId:o}),equipWeapon:o=>n.net.send({t:"equipWeapon",weaponId:o}),toggleFullscreen:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},leaveRoom:()=>{N2(),location.href=location.pathname},copyRoomCode:()=>{const o=B2(n.net.roomCode);navigator.clipboard?.writeText(o).then(()=>n.hud.toast("초대 링크를 복사했다"),()=>n.hud.toast(o,6e3))}},i=()=>n.panels.push(rT(n.input.settings,n.audio,()=>{},e));n.openTree=()=>n.panels.toggle(Q2(t,e)),n.openShop=()=>n.panels.toggle(iT(t,e)),n.openPause=()=>n.panels.toggle(aT(n.net.roomCode,i,e));let s=!1,r=0;n.onSnapshot=o=>{const a=o.players.find(l=>l.id===n.net.playerId);if(!a)return;!s&&a.level>=5&&a.classId===null&&(s=!0,n.panels.push(J2(t,e,!0))),a.classId!==null&&n.panels.resolveModal("class"),(a.anim&op.DEAD)!==0?n.panels.has("dead")||n.panels.push(oT(Math.max(0,r-o.self.gold),e)):(r=o.self.gold,n.panels.resolveModal("dead"))},Ce("#btnTree").addEventListener("click",()=>n.openTree?.()),Ce("#btnPause").addEventListener("click",()=>n.openPause?.()),Ce("#btnSettings").addEventListener("click",i)}function pT(n){const t=Ce("#btnShop");t.addEventListener("click",()=>n.openShop?.()),setInterval(()=>{const e=n.me;if(!e)return;const i=Math.hypot(e.x-17,e.z-14)<8;t.classList.toggle("hidden",!i)},250)}function Np(n){const t=n.me,e=n.selfState;return!t||!e?null:{v:vl,name:t.name,lv:t.level,xp:e.xp,gold:e.gold,sp:e.sp,cls:t.classId??null,weapon:t.weaponId,owned:e.owned,skills:e.skills,pt:Math.round(n.elapsed),gates:n.gateState,seenCutscenes:n.cutscene.seenIds}}function mT(n){let t=!1;const e=()=>{const i=Np(n);if(!i)return;!D2(i).ok&&!t&&(t=!0,n.hud.toast("저장할 수 없습니다 — 진행이 남지 않아요"))};setInterval(e,3e4),window.addEventListener("beforeunload",e),window.addEventListener("pagehide",e)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xd,{once:!0}):Xd();
//# sourceMappingURL=index-C9uuKoED.js.map
