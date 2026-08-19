(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="170",N0=0,qu=1,O0=2,Gf=1,Vf=2,_i=3,ts=0,fn=1,Be=2,Ki=0,Es=1,Ts=2,Yu=3,ju=4,U0=5,vs=100,F0=101,z0=102,B0=103,H0=104,G0=200,V0=201,W0=202,$0=203,nl=204,il=205,X0=206,q0=207,Y0=208,j0=209,K0=210,Z0=211,J0=212,Q0=213,tm=214,sl=0,ol=1,rl=2,vo=3,al=4,cl=5,ll=6,ul=7,iu=0,em=1,nm=2,Zi=0,im=1,sm=2,om=3,Wf=4,rm=5,am=6,cm=7,$f=300,Mo=301,yo=302,Pa=303,hl=304,$a=306,So=1e3,ys=1001,dl=1002,bn=1003,lm=1004,Pr=1005,si=1006,ic=1007,Ss=1008,Ci=1009,Xf=1010,qf=1011,lr=1012,su=1013,Ps=1014,oi=1015,xr=1016,ou=1017,ru=1018,bo=1020,Yf=35902,jf=1021,Kf=1022,$n=1023,Zf=1024,Jf=1025,po=1026,wo=1027,au=1028,cu=1029,Qf=1030,lu=1031,uu=1033,ba=33776,wa=33777,Ea=33778,Ta=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,vl=37496,Ml=37808,yl=37809,Sl=37810,bl=37811,wl=37812,El=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,Aa=36492,kl=36494,Nl=36495,tp=36283,Ol=36284,Ul=36285,Fl=36286,um=3200,hm=3201,hu=0,dm=1,Yi="",un="srgb",Ro="srgb-linear",Xa="linear",le="srgb",Vs=7680,Ku=519,fm=512,pm=513,mm=514,ep=515,gm=516,xm=517,_m=518,vm=519,Zu=35044,Ju="300 es",yi=2e3,Ia=2001;class Co{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=Math.PI/180,zl=180/Math.PI;function Po(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function Mm(n,t){return(n%t+t)%t}function oc(n,t,e){return(1-e)*n+e*t}function Ho(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,s,o,r,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],v=s[7],E=s[2],b=s[5],T=s[8];return o[0]=r*x+a*_+c*E,o[3]=r*m+a*M+c*b,o[6]=r*p+a*v+c*T,o[1]=l*x+u*_+h*E,o[4]=l*m+u*M+h*b,o[7]=l*p+u*v+h*T,o[2]=f*x+d*_+g*E,o[5]=f*m+d*M+g*b,o[8]=f*p+d*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-i*o*u+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,f=a*c-u*o,d=l*o-r*c,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*i)*x,t[2]=(a*i-s*r)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new qt;function np(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ym(){const n=La("canvas");return n.style.display="block",n}const Qu={};function ir(n){n in Qu||(Qu[n]=!0,console.warn(n))}function Sm(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function bm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(n.r=Ti(n.r),n.g=Ti(n.g),n.b=Ti(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(n.r=mo(n.r),n.g=mo(n.g),n.b=mo(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yi?Xa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const th=[.64,.33,.3,.6,.15,.06],eh=[.2126,.7152,.0722],nh=[.3127,.329],ih=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ro]:{primaries:th,whitePoint:nh,transfer:Xa,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:eh,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:th,whitePoint:nh,transfer:le,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:eh,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});let Ws;class Em{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ws===void 0&&(Ws=La("canvas")),Ws.width=t.width,Ws.height=t.height;const i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=La("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ti(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ti(e[i]/255)*255):e[i]=Ti(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tm=0;class ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Po(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ac(s[r].image)):o.push(ac(s[r]))}else o=ac(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Em.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Am=0;class qe extends Co{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=ys,s=ys,o=si,r=Ss,a=$n,c=Ci,l=qe.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Po(),this.name="",this.source=new ip(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$f)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case So:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case So:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=$f;qe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(d+1)/2,E=(p+1)/2,b=(u+f)/4,T=(h+x)/4,R=(g+m)/4;return M>v&&M>E?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=b/i,o=T/i):v>E?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=b/s,o=R/s):E<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(E),i=T/o,s=R/o),this.set(i,s,o,e),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rm extends Co{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ip(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends Rm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class sp extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cm extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*x,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const E=Math.sqrt(M),b=Math.atan2(E,p*_);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const v=a*_;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+x*v,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(o/2),f=c(i/2),d=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(o-l)*d,this._z=(r-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(o-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(r-s)/d,this._x=(o+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-i*l,this._z=o*u+r*l+i*c-s*a,this._w=r*u-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=r*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),u=2*(a*e-o*s),h=2*(o*i-r*e);return this.x=e+c*l+r*h-a*u,this.y=i+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cc=new L,oh=new _r;class Os{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Fn):Fn.fromBufferAttribute(o,r),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),Lr.subVectors(this.max,Go),$s.subVectors(t.a,Go),Xs.subVectors(t.b,Go),qs.subVectors(t.c,Go),Oi.subVectors(Xs,$s),Ui.subVectors(qs,Xs),as.subVectors($s,qs);let e=[0,-Oi.z,Oi.y,0,-Ui.z,Ui.y,0,-as.z,as.y,Oi.z,0,-Oi.x,Ui.z,0,-Ui.x,as.z,0,-as.x,-Oi.y,Oi.x,0,-Ui.y,Ui.x,0,-as.y,as.x,0];return!lc(e,$s,Xs,qs,Lr)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,$s,Xs,qs,Lr))?!1:(Dr.crossVectors(Oi,Ui),e=[Dr.x,Dr.y,Dr.z],lc(e,$s,Xs,qs,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,Ir=new Os,$s=new L,Xs=new L,qs=new L,Oi=new L,Ui=new L,as=new L,Go=new L,Lr=new L,Dr=new L,cs=new L;function lc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){cs.fromArray(n,o);const a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=t.dot(cs),l=e.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Pm=new Os,Vo=new L,uc=new L;class vr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pm.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const e=Vo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(uc)),this.expandByPoint(Vo.copy(t.center).sub(uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new L,hc=new L,kr=new L,Fi=new L,dc=new L,Nr=new L,fc=new L;class Im{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hc.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(hc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(kr),a=Fi.dot(this.direction),c=-Fi.dot(kr),l=Fi.lengthSq(),u=Math.abs(1-r*r);let h,f,d,g;if(u>0)if(h=r*c-a,f=r*a-c,g=o*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+r*f+2*a)+f*(r*h+f+2*c)+l}else f=o,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*c)+l;else f=-o,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-r*o+a)),f=h>0?-o:Math.min(Math.max(-o,-c),o),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+l):(h=Math.max(0,-(r*o+a)),f=h>0?o:Math.min(Math.max(-o,-c),o),d=-h*h+f*(f+2*c)+l);else f=r>0?-o:o,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hc).addScaledVector(kr,f),d}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const i=ui.dot(this.direction),s=ui.dot(ui)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(o=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(o=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,s,o){dc.subVectors(e,t),Nr.subVectors(i,t),fc.crossVectors(dc,Nr);let r=this.direction.dot(fc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fi.subVectors(this.origin,t);const c=a*this.direction.dot(Nr.crossVectors(Fi,Nr));if(c<0)return null;const l=a*this.direction.dot(dc.cross(Fi));if(l<0||c+l>r)return null;const u=-a*Fi.dot(fc);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,o,r,a,c,l,u,h,f,d,g,x,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,u,h,f,d,g,x,m)}set(t,e,i,s,o,r,a,c,l,u,h,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),o=1/Ys.setFromMatrixColumn(t,1).length(),r=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const f=r*u,d=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f+x*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f-x*a,e[4]=-r*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*u,e[9]=x-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*u,d=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,d=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=r*c,d=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=r*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Dm)}lookAt(t,e,i){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),zi.crossVectors(i,mn),zi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),zi.crossVectors(i,mn)),zi.normalize(),Or.crossVectors(mn,zi),s[0]=zi.x,s[4]=Or.x,s[8]=mn.x,s[1]=zi.y,s[5]=Or.y,s[9]=mn.y,s[2]=zi.z,s[6]=Or.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],M=i[7],v=i[11],E=i[15],b=s[0],T=s[4],R=s[8],S=s[12],y=s[1],C=s[5],O=s[9],k=s[13],D=s[2],N=s[6],U=s[10],W=s[14],F=s[3],K=s[7],et=s[11],ct=s[15];return o[0]=r*b+a*y+c*D+l*F,o[4]=r*T+a*C+c*N+l*K,o[8]=r*R+a*O+c*U+l*et,o[12]=r*S+a*k+c*W+l*ct,o[1]=u*b+h*y+f*D+d*F,o[5]=u*T+h*C+f*N+d*K,o[9]=u*R+h*O+f*U+d*et,o[13]=u*S+h*k+f*W+d*ct,o[2]=g*b+x*y+m*D+p*F,o[6]=g*T+x*C+m*N+p*K,o[10]=g*R+x*O+m*U+p*et,o[14]=g*S+x*k+m*W+p*ct,o[3]=_*b+M*y+v*D+E*F,o[7]=_*T+M*C+v*N+E*K,o[11]=_*R+M*O+v*U+E*et,o[15]=_*S+M*k+v*W+E*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*c*h-s*l*h-o*a*f+i*l*f+s*a*d-i*c*d)+x*(+e*c*d-e*l*f+o*r*f-s*r*d+s*l*u-o*c*u)+m*(+e*l*h-e*a*d-o*r*h+i*r*d+o*a*u-i*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*r*h-i*r*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=h*m*l-x*f*l+x*c*d-a*m*d-h*c*p+a*f*p,M=g*f*l-u*m*l-g*c*d+r*m*d+u*c*p-r*f*p,v=u*x*l-g*h*l+g*a*d-r*x*d-u*a*p+r*h*p,E=g*h*c-u*x*c-g*a*f+r*x*f+u*a*m-r*h*m,b=e*_+i*M+s*v+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(x*f*o-h*m*o-x*s*d+i*m*d+h*s*p-i*f*p)*T,t[2]=(a*m*o-x*c*o+x*s*l-i*m*l-a*s*p+i*c*p)*T,t[3]=(h*c*o-a*f*o-h*s*l+i*f*l+a*s*d-i*c*d)*T,t[4]=M*T,t[5]=(u*m*o-g*f*o+g*s*d-e*m*d-u*s*p+e*f*p)*T,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*p-e*c*p)*T,t[7]=(r*f*o-u*c*o+u*s*l-e*f*l-r*s*d+e*c*d)*T,t[8]=v*T,t[9]=(g*h*o-u*x*o-g*i*d+e*x*d+u*i*p-e*h*p)*T,t[10]=(r*x*o-g*a*o+g*i*l-e*x*l-r*i*p+e*a*p)*T,t[11]=(u*a*o-r*h*o-u*i*l+e*h*l+r*i*d-e*a*d)*T,t[12]=E*T,t[13]=(u*x*s-g*h*s+g*i*f-e*x*f-u*i*m+e*h*m)*T,t[14]=(g*a*s-r*x*s-g*i*c+e*x*c+r*i*m-e*a*m)*T,t[15]=(r*h*s-u*a*s+u*i*c-e*h*c-r*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,f=o*l,d=o*u,g=o*h,x=r*u,m=r*h,p=a*h,_=c*l,M=c*u,v=c*h,E=i.x,b=i.y,T=i.z;return s[0]=(1-(x+p))*E,s[1]=(d+v)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+p))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+M)*T,s[9]=(m-_)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Ys.set(s[0],s[1],s[2]).length();const r=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);const l=1/o,u=1/r,h=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,e.setFromRotationMatrix(zn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=yi){const c=this.elements,l=2*o/(e-t),u=2*o/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===yi)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ia)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=yi){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(r-o),f=(e+t)*l,d=(i+s)*u;let g,x;if(a===yi)g=(r+o)*h,x=-2*h;else if(a===Ia)g=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ys=new L,zn=new fe,Lm=new L(0,0,0),Dm=new L(1,1,1),zi=new L,Or=new L,mn=new L,rh=new fe,ah=new _r;class Kn{constructor(t=0,e=0,i=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let km=0;const ch=new L,js=new _r,hi=new fe,Ur=new L,Wo=new L,Nm=new L,Om=new _r,lh=new L(1,0,0),uh=new L(0,1,0),hh=new L(0,0,1),dh={type:"added"},Um={type:"removed"},Ks={type:"childadded",child:null},pc={type:"childremoved",child:null};class Oe extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new L,e=new Kn,i=new _r,s=new L(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Wo,Ur,this.up):hi.lookAt(Ur,Wo,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(hi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Um),pc.child=t,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,Nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new L(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new L,di=new L,mc=new L,fi=new L,Zs=new L,Js=new L,fh=new L,gc=new L,xc=new L,_c=new L,vc=new he,Mc=new he,yc=new he;class Wn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bn.subVectors(t,e),s.cross(Bn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Bn.subVectors(s,e),di.subVectors(i,e),mc.subVectors(t,e);const r=Bn.dot(Bn),a=Bn.dot(di),c=Bn.dot(mc),l=di.dot(di),u=di.dot(mc),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(r*u-a*c)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,fi.x),c.addScaledVector(r,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return vc.setScalar(0),Mc.setScalar(0),yc.setScalar(0),vc.fromBufferAttribute(t,e),Mc.fromBufferAttribute(t,i),yc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(vc,o.x),r.addScaledVector(Mc,o.y),r.addScaledVector(yc,o.z),r}static isFrontFacing(t,e,i,s){return Bn.subVectors(i,e),di.subVectors(t,e),Bn.cross(di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Bn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Zs.subVectors(s,i),Js.subVectors(o,i),gc.subVectors(t,i);const c=Zs.dot(gc),l=Js.dot(gc);if(c<=0&&l<=0)return e.copy(i);xc.subVectors(t,s);const u=Zs.dot(xc),h=Js.dot(xc);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(i).addScaledVector(Zs,r);_c.subVectors(t,o);const d=Zs.dot(_c),g=Js.dot(_c);if(g>=0&&d<=g)return e.copy(o);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Js,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return fh.subVectors(o,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(fh,a);const p=1/(m+x+f);return r=x*p,a=f*p,e.copy(i).addScaledVector(Zs,r).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Sc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Mm(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Sc(r,o,t+1/3),this.g=Sc(r,o,t),this.b=Sc(r,o,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=un){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const i=rp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return te.fromWorkingColorSpace(Ze.copy(this),t),Math.round(We(Ze.r*255,0,255))*65536+Math.round(We(Ze.g*255,0,255))*256+Math.round(We(Ze.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ze.copy(this),e);const i=Ze.r,s=Ze.g,o=Ze.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case i:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-i)/h+2;break;case o:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=un){te.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,s=Ze.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Fr);const i=oc(Bi.h,Fr.h,e),s=oc(Bi.s,Fr.s,e),o=oc(Bi.l,Fr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Wt;Wt.NAMES=rp;let Fm=0;class Io extends Co{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Po(),this.name="",this.blending=Es,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xn extends Io{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new L,zr=new lt;class wn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=an(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ho(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ho(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ho(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ho(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array),o=an(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zu&&(t.usage=this.usage),t}}class ap extends wn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class cp extends wn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Jt extends wn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zm=0;const Rn=new fe,bc=new Oe,Qs=new L,gn=new Os,$o=new Os,ze=new L;class He extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(np(t)?cp:ap)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new qt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,i){return Rn.makeTranslation(t,e,i),this.applyMatrix4(Rn),this}scale(t,e,i){return Rn.makeScale(t,e,i),this.applyMatrix4(Rn),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Jt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];gn.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(gn.min,$o.min),gn.expandByPoint(ze),ze.addVectors(gn.max,$o.max),gn.expandByPoint(ze)):(gn.expandByPoint($o.min),gn.expandByPoint($o.max))}gn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)ze.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(Qs.fromBufferAttribute(t,l),ze.add(Qs)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new L,c[R]=new L;const l=new L,u=new L,h=new L,f=new lt,d=new lt,g=new lt,x=new L,m=new L;function p(R,S,y){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,y),f.fromBufferAttribute(o,R),d.fromBufferAttribute(o,S),g.fromBufferAttribute(o,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(x),a[S].add(x),a[y].add(x),c[R].add(m),c[S].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,S=_.length;R<S;++R){const y=_[R],C=y.start,O=y.count;for(let k=C,D=C+O;k<D;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new L,v=new L,E=new L,b=new L;function T(R){E.fromBufferAttribute(s,R),b.copy(E);const S=a[R];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(b,S);const C=v.dot(c[R])<0?-1:1;r.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,S=_.length;R<S;++R){const y=_[R],C=y.start,O=y.count;for(let k=C,D=C+O;k<D;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new L,o=new L,r=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new wn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new fe,ls=new Im,Br=new vr,mh=new L,Hr=new L,Gr=new L,Vr=new L,wc=new L,Wr=new L,gh=new L,$r=new L;class V extends Oe{constructor(t=new He,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(wc.fromBufferAttribute(h,t),r?Wr.addScaledVector(wc,u):Wr.addScaledVector(wc.sub(e),u))}e.add(Wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(o),ls.copy(t.ray).recast(t.near),!(Br.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Br,mh)===null||ls.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(o).invert(),ls.copy(t.ray).applyMatrix4(ph),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,E=M;v<E;v+=3){const b=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);s=Xr(this,p,t,i,l,u,h,b,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Xr(this,r,t,i,l,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,E=M;v<E;v+=3){const b=v,T=v+1,R=v+2;s=Xr(this,p,t,i,l,u,h,b,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=m,M=m+1,v=m+2;s=Xr(this,r,t,i,l,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Bm(n,t,e,i,s,o,r,a){let c;if(t.side===fn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===ts,a),c===null)return null;$r.copy(a),$r.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo($r);return l<e.near||l>e.far?null:{distance:l,point:$r.clone(),object:n}}function Xr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Hr),n.getVertexPosition(c,Gr),n.getVertexPosition(l,Vr);const u=Bm(n,t,e,i,Hr,Gr,Vr,gh);if(u){const h=new L;Wn.getBarycoord(gh,Hr,Gr,Vr,h),s&&(u.uv=Wn.getInterpolatedAttribute(s,a,c,l,h,new lt)),o&&(u.uv1=Wn.getInterpolatedAttribute(o,a,c,l,h,new lt)),r&&(u.normal=Wn.getInterpolatedAttribute(r,a,c,l,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};Wn.getNormal(Hr,Gr,Vr,f.normal),u.face=f,u.barycoord=h}return u}class kn extends He{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function g(x,m,p,_,M,v,E,b,T,R,S){const y=v/T,C=E/R,O=v/2,k=E/2,D=b/2,N=T+1,U=R+1;let W=0,F=0;const K=new L;for(let et=0;et<U;et++){const ct=et*C-k;for(let _t=0;_t<N;_t++){const ut=_t*y-O;K[x]=ut*_,K[m]=ct*M,K[p]=D,l.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=b>0?1:-1,u.push(K.x,K.y,K.z),h.push(_t/T),h.push(1-et/R),W+=1}}for(let et=0;et<R;et++)for(let ct=0;ct<T;ct++){const _t=f+ct+N*et,ut=f+ct+N*(et+1),G=f+(ct+1)+N*(et+1),Y=f+(ct+1)+N*et;c.push(_t,ut,Y),c.push(ut,G,Y),F+=6}a.addGroup(d,F,S),d+=F,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=Eo(n[e]);for(const s in i)t[s]=i[s]}return t}function Hm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Gm={clone:Eo,merge:nn};var Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends Io{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=Hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class up extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new L,xh=new lt,_h=new lt;class vn extends up{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,xh,_h),e.subVectors(_h,xh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const to=-90,eo=1;class $m extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(to,eo,t,e);s.layers=this.layers,this.add(s);const o=new vn(to,eo,t,e);o.layers=this.layers,this.add(o);const r=new vn(to,eo,t,e);r.layers=this.layers,this.add(r);const a=new vn(to,eo,t,e);a.layers=this.layers,this.add(a);const c=new vn(to,eo,t,e);c.layers=this.layers,this.add(c);const l=new vn(to,eo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hp extends qe{constructor(t,e,i,s,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Mo,super(t,e,i,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xm extends Is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),o=new es({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ki});o.uniforms.tEquirect.value=e;const r=new V(s,o),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=si),new $m(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Ec=new L,qm=new L,Ym=new qt;class xs{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ec.subVectors(i,e).cross(qm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ec),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ym.getNormalMatrix(t),s=this.coplanarPoint(Ec).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new vr,qr=new L;class du{constructor(t=new xs,e=new xs,i=new xs,s=new xs,o=new xs,r=new xs){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],M=s[14],v=s[15];if(i[0].setComponents(c-o,f-l,m-d,v-p).normalize(),i[1].setComponents(c+o,f+l,m+d,v+p).normalize(),i[2].setComponents(c+r,f+u,m+g,v+_).normalize(),i[3].setComponents(c-r,f-u,m-g,v-_).normalize(),i[4].setComponents(c-a,f-h,m-x,v-M).normalize(),e===yi)i[5].setComponents(c+a,f+h,m+x,v+M).normalize();else if(e===Ia)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function jm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Us extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const _=p*f-r;for(let M=0;M<l;M++){const v=M*h-o;g.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const M=_+l*p,v=_+l*(p+1),E=_+1+l*(p+1),b=_+1+l*p;d.push(M,v,b),d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.width,t.height,t.widthSegments,t.heightSegments)}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
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
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
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
#endif`,Yg=`struct PhysicalMaterial {
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
}`,jg=`
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o1=`#if defined( USE_POINTS_UV )
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
#endif`,r1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h1=`#ifdef USE_MORPHTARGETS
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
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k1=`float getShadowMask() {
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,ux=`uniform vec3 diffuse;
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
}`,hx=`#define LAMBERT
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define MATCAP
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
}`,px=`#define MATCAP
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
}`,mx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,vx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,Sx=`#define TOON
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
}`,bx=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Km,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:Qm,alphatest_fragment:tg,alphatest_pars_fragment:eg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:og,begin_vertex:rg,beginnormal_vertex:ag,bsdfs:cg,iridescence_fragment:lg,bumpmap_pars_fragment:ug,clipping_planes_fragment:hg,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:xg,color_vertex:_g,common:vg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Sg,displacementmap_vertex:bg,emissivemap_fragment:wg,emissivemap_pars_fragment:Eg,colorspace_fragment:Tg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Gg,envmap_vertex:Lg,fog_vertex:Dg,fog_pars_vertex:kg,fog_fragment:Ng,fog_pars_fragment:Og,gradientmap_pars_fragment:Ug,lightmap_pars_fragment:Fg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:Bg,lights_pars_begin:Hg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Wg,lights_phong_fragment:$g,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:jg,lights_fragment_maps:Kg,lights_fragment_end:Zg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:e1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:s1,map_particle_pars_fragment:o1,metalnessmap_fragment:r1,metalnessmap_pars_fragment:a1,morphinstance_vertex:c1,morphcolor_vertex:l1,morphnormal_vertex:u1,morphtarget_pars_vertex:h1,morphtarget_vertex:d1,normal_fragment_begin:f1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:g1,normal_vertex:x1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:M1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:S1,opaque_fragment:b1,packing:w1,premultiplied_alpha_fragment:E1,project_vertex:T1,dithering_fragment:A1,dithering_pars_fragment:R1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:L1,shadowmap_vertex:D1,shadowmask_pars_fragment:k1,skinbase_vertex:N1,skinning_pars_vertex:O1,skinning_vertex:U1,skinnormal_vertex:F1,specularmap_fragment:z1,specularmap_pars_fragment:B1,tonemapping_fragment:H1,tonemapping_pars_fragment:G1,transmission_fragment:V1,transmission_pars_fragment:W1,uv_pars_fragment:$1,uv_pars_vertex:X1,uv_vertex:q1,worldpos_vertex:Y1,background_vert:j1,background_frag:K1,backgroundCube_vert:Z1,backgroundCube_frag:J1,cube_vert:Q1,cube_frag:tx,depth_vert:ex,depth_frag:nx,distanceRGBA_vert:ix,distanceRGBA_frag:sx,equirect_vert:ox,equirect_frag:rx,linedashed_vert:ax,linedashed_frag:cx,meshbasic_vert:lx,meshbasic_frag:ux,meshlambert_vert:hx,meshlambert_frag:dx,meshmatcap_vert:fx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:xx,meshphong_frag:_x,meshphysical_vert:vx,meshphysical_frag:Mx,meshtoon_vert:yx,meshtoon_frag:Sx,points_vert:bx,points_frag:wx,shadow_vert:Ex,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:Rx},gt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},ni={basic:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:nn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:nn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:nn([gt.points,gt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:nn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:nn([gt.common,gt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:nn([gt.sprite,gt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:nn([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:nn([gt.lights,gt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};ni.physical={uniforms:nn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Yr={r:0,b:0,g:0},hs=new Kn,Cx=new fe;function Px(n,t,e,i,s,o,r){const a=new Wt(0);let c=o===!0?0:1,l,u,h=null,f=0,d=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1;const v=g(_);v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===$a)?(u===void 0&&(u=new V(new kn(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:Eo(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hs.copy(M.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(hs)),u.material.toneMapped=te.getTransfer(v.colorSpace)!==le,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new V(new Us(2,2),new es({name:"BackgroundMaterial",uniforms:Eo(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(Yr,lp(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:m}}function Ix(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let o=s,r=!1;function a(y,C,O,k,D){let N=!1;const U=h(k,O,C);o!==U&&(o=U,l(o.object)),N=d(y,k,O,D),N&&g(y,k,O,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,v(y,C,O,k),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,C,O){const k=O.wireframe===!0;let D=i[y.id];D===void 0&&(D={},i[y.id]=D);let N=D[C.id];N===void 0&&(N={},D[C.id]=N);let U=N[k];return U===void 0&&(U=f(c()),N[k]=U),U}function f(y){const C=[],O=[],k=[];for(let D=0;D<e;D++)C[D]=0,O[D]=0,k[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,C,O,k){const D=o.attributes,N=C.attributes;let U=0;const W=O.getAttributes();for(const F in W)if(W[F].location>=0){const et=D[F];let ct=N[F];if(ct===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;U++}return o.attributesNum!==U||o.index!==k}function g(y,C,O,k){const D={},N=C.attributes;let U=0;const W=O.getAttributes();for(const F in W)if(W[F].location>=0){let et=N[F];et===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(et=y.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),D[F]=ct,U++}o.attributes=D,o.attributesNum=U,o.index=k}function x(){const y=o.newAttributes;for(let C=0,O=y.length;C<O;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const O=o.newAttributes,k=o.enabledAttributes,D=o.attributeDivisors;O[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),D[y]!==C&&(n.vertexAttribDivisor(y,C),D[y]=C)}function _(){const y=o.newAttributes,C=o.enabledAttributes;for(let O=0,k=C.length;O<k;O++)C[O]!==y[O]&&(n.disableVertexAttribArray(O),C[O]=0)}function M(y,C,O,k,D,N,U){U===!0?n.vertexAttribIPointer(y,C,O,D,N):n.vertexAttribPointer(y,C,O,k,D,N)}function v(y,C,O,k){x();const D=k.attributes,N=O.getAttributes(),U=C.defaultAttributeValues;for(const W in N){const F=N[W];if(F.location>=0){let K=D[W];if(K===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const et=K.normalized,ct=K.itemSize,_t=t.get(K);if(_t===void 0)continue;const ut=_t.buffer,G=_t.type,Y=_t.bytesPerElement,ot=G===n.INT||G===n.UNSIGNED_INT||K.gpuType===su;if(K.isInterleavedBufferAttribute){const tt=K.data,mt=tt.stride,Tt=K.offset;if(tt.isInstancedInterleavedBuffer){for(let At=0;At<F.locationSize;At++)p(F.location+At,tt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let At=0;At<F.locationSize;At++)m(F.location+At);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let At=0;At<F.locationSize;At++)M(F.location+At,ct/F.locationSize,G,et,mt*Y,(Tt+ct/F.locationSize*At)*Y,ot)}else{if(K.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)p(F.location+tt,K.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let tt=0;tt<F.locationSize;tt++)m(F.location+tt);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let tt=0;tt<F.locationSize;tt++)M(F.location+tt,ct/F.locationSize,G,et,ct*Y,ct/F.locationSize*tt*Y,ot)}}else if(U!==void 0){const et=U[W];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(F.location,et);break;case 3:n.vertexAttrib3fv(F.location,et);break;case 4:n.vertexAttrib4fv(F.location,et);break;default:n.vertexAttrib1fv(F.location,et)}}}}_()}function E(){R();for(const y in i){const C=i[y];for(const O in C){const k=C[O];for(const D in k)u(k[D].object),delete k[D];delete C[O]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const O in C){const k=C[O];for(const D in k)u(k[D].object),delete k[D];delete C[O]}delete i[y.id]}function T(y){for(const C in i){const O=i[C];if(O[y.id]===void 0)continue;const k=O[y.id];for(const D in k)u(k[D].object),delete k[D];delete O[y.id]}}function R(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Lx(n,t,e){let i;function s(l){i=l}function o(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function r(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dx(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==$n&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ci&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==oi&&!R)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:E,maxSamples:b}}function kx(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new xs,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||o&&!m)o?u(null):l();else{const _=o?0:i,M=_*4;let v=p.clippingState||null;c.value=v,v=u(g,f,M,d);for(let E=0;E!==M;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==x;++M,v+=4)r.copy(h[M]).applyMatrix4(_,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Nx(n){let t=new WeakMap;function e(r,a){return a===Pa?r.mapping=Mo:a===hl&&(r.mapping=yo),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pa||a===hl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Xm(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class fp extends up{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const uo=4,vh=[.125,.215,.35,.446,.526,.582],Ms=20,Tc=new fp,Mh=new Wt;let Ac=null,Rc=0,Cc=0,Pc=!1;const _s=(1+Math.sqrt(5))/2,no=1/_s,yh=[new L(-_s,no,0),new L(_s,no,0),new L(-no,0,_s),new L(no,0,_s),new L(0,_s,-no),new L(0,_s,no),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Rc,Cc),this._renderer.xr.enabled=Pc,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mo||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:xr,format:$n,colorSpace:Ro,depthBuffer:!1},s=Sh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ox(o)),this._blurMaterial=Ux(o,t,e)}return s}_compileMaterial(t){const e=new V(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,i,s){const a=new vn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mh),u.toneMapping=Zi,u.autoClear=!1;const d=new Xn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new V(new kn,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Mh),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;jr(s,_*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Mo||t.mapping===yo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new V(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;jr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Tc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=yh[(s-o-1)%yh.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new V(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ms-1),x=o/g,m=isFinite(o)?1+Math.floor(u*x):Ms;m>Ms&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const p=[];let _=0;for(let T=0;T<Ms;++T){const R=T/x,S=Math.exp(-R*R/2);p.push(S),T===0?_+=S:T<m&&(_+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const v=this._sizeLods[s],E=3*v*(s>M-uo?s-M+uo:0),b=4*(this._cubeSize-v);jr(e,E,b,3*v,2*v),c.setRenderTarget(e),c.render(h,Tc)}}function Ox(n){const t=[],e=[],i=[];let s=n;const o=n-uo+1+vh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-uo?c=vh[r-n+uo-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let b=0;b<d;b++){const T=b%3*2/3-1,R=b>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(S,x*g*b),M.set(f,m*g*b);const y=[b,b,b,b,b,b];v.set(y,p*g*b)}const E=new He;E.setAttribute("position",new wn(_,x)),E.setAttribute("uv",new wn(M,m)),E.setAttribute("faceIndex",new wn(v,p)),t.push(E),s>uo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sh(n,t,e){const i=new Is(n,t,e);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ux(n,t,e){const i=new Float32Array(Ms),s=new L(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function bh(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function wh(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function Fx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pa||c===hl,u=c===Mo||c===yo;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Bl(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Bl(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function zx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ir("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bx(n,t,e,i){const s={},o=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let M=0,v=_.length;M<v;M+=3){const E=_[M+0],b=_[M+1],T=_[M+2];f.push(E,b,b,T,T,E)}}else if(g!==void 0){const _=g.array;x=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){const E=M+0,b=M+1,T=M+2;f.push(E,b,b,T,T,E)}}else return;const m=new(np(f)?cp:ap)(f,1);m.version=x;const p=o.get(h);p&&t.remove(p),o.set(h,m)}function u(h){const f=o.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Hx(n,t,e){let i;function s(f){i=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,d){n.drawElements(i,d,o,f*r),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,o,f*r,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/r,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,o,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Gx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Vx(n,t,e){const i=new WeakMap,s=new he;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let E=a.attributes.position.count*v,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const T=new Float32Array(E*b*4*h),R=new sp(T,E,b,h);R.type=oi,R.needsUpdate=!0;const S=v*4;for(let C=0;C<h;C++){const O=p[C],k=_[C],D=M[C],N=E*b*4*C;for(let U=0;U<O.count;U++){const W=U*S;g===!0&&(s.fromBufferAttribute(O,U),T[N+W+0]=s.x,T[N+W+1]=s.y,T[N+W+2]=s.z,T[N+W+3]=0),x===!0&&(s.fromBufferAttribute(k,U),T[N+W+4]=s.x,T[N+W+5]=s.y,T[N+W+6]=s.z,T[N+W+7]=0),m===!0&&(s.fromBufferAttribute(D,U),T[N+W+8]=s.x,T[N+W+9]=s.y,T[N+W+10]=s.z,T[N+W+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new lt(E,b)},i.set(a,f),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function Wx(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class pp extends qe{constructor(t,e,i,s,o,r,a,c,l,u=po){if(u!==po&&u!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===po&&(i=Ps),i===void 0&&u===wo&&(i=bo),super(null,s,o,r,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mp=new qe,Eh=new pp(1,1),gp=new sp,xp=new Cm,_p=new hp,Th=[],Ah=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function Lo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Th[s];if(o===void 0&&(o=new Float32Array(s),Th[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=Ah[t];e===void 0&&(e=new Int32Array(t),Ah[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $x(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function jx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;Ph.set(i),n.uniformMatrix2fv(this.addr,!1,Ph),Fe(e,i)}}function Kx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),Fe(e,i)}}function Zx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),Fe(e,i)}}function Jx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function t_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function e_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function n_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function i_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function s_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function o_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function r_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Eh.compareFunction=ep,o=Eh):o=mp,e.setTexture2D(t||o,s)}function a_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xp,s)}function c_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_p,s)}function l_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gp,s)}function u_(n){switch(n){case 5126:return $x;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return jx;case 35675:return Kx;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return Qx;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}function h_(n,t){n.uniform1fv(this.addr,t)}function d_(n,t){const e=Lo(t,this.size,2);n.uniform2fv(this.addr,e)}function f_(n,t){const e=Lo(t,this.size,3);n.uniform3fv(this.addr,e)}function p_(n,t){const e=Lo(t,this.size,4);n.uniform4fv(this.addr,e)}function m_(n,t){const e=Lo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g_(n,t){const e=Lo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function x_(n,t){const e=Lo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function __(n,t){n.uniform1iv(this.addr,t)}function v_(n,t){n.uniform2iv(this.addr,t)}function M_(n,t){n.uniform3iv(this.addr,t)}function y_(n,t){n.uniform4iv(this.addr,t)}function S_(n,t){n.uniform1uiv(this.addr,t)}function b_(n,t){n.uniform2uiv(this.addr,t)}function w_(n,t){n.uniform3uiv(this.addr,t)}function E_(n,t){n.uniform4uiv(this.addr,t)}function T_(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);Ue(i,o)||(n.uniform1iv(this.addr,o),Fe(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||mp,o[r])}function A_(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);Ue(i,o)||(n.uniform1iv(this.addr,o),Fe(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||xp,o[r])}function R_(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);Ue(i,o)||(n.uniform1iv(this.addr,o),Fe(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||_p,o[r])}function C_(n,t,e){const i=this.cache,s=t.length,o=qa(e,s);Ue(i,o)||(n.uniform1iv(this.addr,o),Fe(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||gp,o[r])}function P_(n){switch(n){case 5126:return h_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return v_;case 35668:case 35672:return M_;case 35669:case 35673:return y_;case 5125:return S_;case 36294:return b_;case 36295:return w_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}class I_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=u_(e.type)}}class L_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}}class D_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Ih(n,t){n.seq.push(t),n.map[t.id]=t}function k_(n,t,e){const i=n.name,s=i.length;for(Ic.lastIndex=0;;){const o=Ic.exec(i),r=Ic.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Ih(e,l===void 0?new I_(a,n,t):new L_(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new D_(a),Ih(e,h)),e=h}}}class Ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);k_(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Lh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const N_=37297;let O_=0;function U_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const Dh=new qt;function F_(n){te._getMatrix(Dh,te.workingColorSpace,n);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Xa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+U_(n.getShaderSource(t),r)}else return s}function z_(n,t){const e=F_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B_(n,t){let e;switch(t){case im:e="Linear";break;case sm:e="Reinhard";break;case om:e="Cineon";break;case Wf:e="ACESFilmic";break;case am:e="AgX";break;case cm:e="Neutral";break;case rm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new L;function H_(){te.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function V_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function W_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function sr(n){return n!==""}function Nh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace($_,q_)}const X_=new Map;function q_(n,t){let e=Kt[t];if(e===void 0){const i=X_.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(Y_,j_)}function j_(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Fh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function K_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function Z_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mo:case yo:t="ENVMAP_TYPE_CUBE";break;case $a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function Q_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case iu:t="ENVMAP_BLENDING_MULTIPLY";break;case em:t="ENVMAP_BLENDING_MIX";break;case nm:t="ENVMAP_BLENDING_ADD";break}return t}function tv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ev(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=K_(e),l=Z_(e),u=J_(e),h=Q_(e),f=tv(e),d=G_(e),g=V_(o),x=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?B_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),r=Hl(r),r=Nh(r,e),r=Oh(r,e),a=Hl(a),a=Nh(a,e),a=Oh(a,e),r=Uh(r),a=Uh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+m+r,v=_+p+a,E=Lh(s,s.VERTEX_SHADER,M),b=Lh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(C){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(E).trim(),D=s.getShaderInfoLog(b).trim();let N=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,b);else{const W=kh(s,E,"vertex"),F=kh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+W+`
`+F)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||D==="")&&(U=!1);U&&(C.diagnostics={runnable:N,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:D,prefix:p}})}s.deleteShader(E),s.deleteShader(b),R=new Ra(s,x),S=W_(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,N_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new sv(t),e.set(t,i)),i}}class sv{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}}function ov(n,t,e,i,s,o,r){const a=new op,c=new iv,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,O,k){const D=O.fog,N=k.geometry,U=S.isMeshStandardMaterial?O.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),F=W&&W.mapping===$a?W.image.height:null,K=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ct=et!==void 0?et.length:0;let _t=0;N.morphAttributes.position!==void 0&&(_t=1),N.morphAttributes.normal!==void 0&&(_t=2),N.morphAttributes.color!==void 0&&(_t=3);let ut,G,Y,ot;if(K){const ae=ni[K];ut=ae.vertexShader,G=ae.fragmentShader}else ut=S.vertexShader,G=S.fragmentShader,c.update(S),Y=c.getVertexShaderID(S),ot=c.getFragmentShaderID(S);const tt=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),Tt=k.isInstancedMesh===!0,At=k.isBatchedMesh===!0,zt=!!S.map,Q=!!S.matcap,ht=!!W,I=!!S.aoMap,Nt=!!S.lightMap,rt=!!S.bumpMap,Et=!!S.normalMap,pt=!!S.displacementMap,Bt=!!S.emissiveMap,bt=!!S.metalnessMap,P=!!S.roughnessMap,w=S.anisotropy>0,$=S.clearcoat>0,Z=S.dispersion>0,it=S.iridescence>0,J=S.sheen>0,It=S.transmission>0,xt=w&&!!S.anisotropyMap,wt=$&&!!S.clearcoatMap,Zt=$&&!!S.clearcoatNormalMap,at=$&&!!S.clearcoatRoughnessMap,Rt=it&&!!S.iridescenceMap,Ht=it&&!!S.iridescenceThicknessMap,Gt=J&&!!S.sheenColorMap,Ct=J&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,jt=!!S.specularColorMap,pe=!!S.specularIntensityMap,z=It&&!!S.transmissionMap,vt=It&&!!S.thicknessMap,j=!!S.gradientMap,nt=!!S.alphaMap,St=S.alphaTest>0,Mt=!!S.alphaHash,$t=!!S.extensions;let we=Zi;S.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(we=n.toneMapping);const je={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ut,fragmentShader:G,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:At,batchingColor:At&&k._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&k.instanceColor!==null,instancingMorph:Tt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ro,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:Q,envMap:ht,envMapMode:ht&&W.mapping,envMapCubeUVHeight:F,aoMap:I,lightMap:Nt,bumpMap:rt,normalMap:Et,displacementMap:f&&pt,emissiveMap:Bt,normalMapObjectSpace:Et&&S.normalMapType===dm,normalMapTangentSpace:Et&&S.normalMapType===hu,metalnessMap:bt,roughnessMap:P,anisotropy:w,anisotropyMap:xt,clearcoat:$,clearcoatMap:wt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:at,dispersion:Z,iridescence:it,iridescenceMap:Rt,iridescenceThicknessMap:Ht,sheen:J,sheenColorMap:Gt,sheenRoughnessMap:Ct,specularMap:Qt,specularColorMap:jt,specularIntensityMap:pe,transmission:It,transmissionMap:z,thicknessMap:vt,gradientMap:j,opaque:S.transparent===!1&&S.blending===Es&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:St,alphaHash:Mt,combine:S.combine,mapUv:zt&&x(S.map.channel),aoMapUv:I&&x(S.aoMap.channel),lightMapUv:Nt&&x(S.lightMap.channel),bumpMapUv:rt&&x(S.bumpMap.channel),normalMapUv:Et&&x(S.normalMap.channel),displacementMapUv:pt&&x(S.displacementMap.channel),emissiveMapUv:Bt&&x(S.emissiveMap.channel),metalnessMapUv:bt&&x(S.metalnessMap.channel),roughnessMapUv:P&&x(S.roughnessMap.channel),anisotropyMapUv:xt&&x(S.anisotropyMap.channel),clearcoatMapUv:wt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(S.sheenRoughnessMap.channel),specularMapUv:Qt&&x(S.specularMap.channel),specularColorMapUv:jt&&x(S.specularColorMap.channel),specularIntensityMapUv:pe&&x(S.specularIntensityMap.channel),transmissionMapUv:z&&x(S.transmissionMap.channel),thicknessMapUv:vt&&x(S.thicknessMap.channel),alphaMapUv:nt&&x(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Et||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(zt||nt),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:mt,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:_t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Be,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$t&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&S.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(_(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function _(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let C;if(y){const O=ni[y];C=Gm.clone(O.uniforms)}else C=S.uniforms;return C}function E(S,y){let C;for(let O=0,k=u.length;O<k;O++){const D=u[O];if(D.cacheKey===y){C=D,++C.usedTimes;break}}return C===void 0&&(C=new ev(n,y,S,o),u.push(C)),C}function b(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:R}}function rv(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function av(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bh(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(h,f,d,g,x,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,f,d,g,x,m){const p=r(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,x,m){const p=r(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||av),i.length>1&&i.sort(f||zh),s.length>1&&s.sort(f||zh)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function cv(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new Bh,n.set(i,[r])):s>=o.length?(r=new Bh,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function lv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Wt};break;case"SpotLight":e={position:new L,direction:new L,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function uv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let hv=0;function dv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fv(n){const t=new lv,e=uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,o=new fe,r=new fe;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,M=0,v=0,E=0,b=0,T=0;l.sort(dv);for(let S=0,y=l.length;S<y;S++){const C=l[S],O=C.color,k=C.intensity,D=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=O.r*k,h+=O.g*k,f+=O.b*k;else if(C.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(C.sh.coefficients[U],k);T++}else if(C.isDirectionalLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,F=e.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.directionalShadow[d]=F,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=C.shadow.matrix,_++}i.directional[d]=U,d++}else if(C.isSpotLight){const U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(O).multiplyScalar(k),U.distance=D,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,i.spot[x]=U;const W=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,W.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[x]=W.matrix,C.castShadow){const F=e.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=N,v++}x++}else if(C.isRectAreaLight){const U=t.get(C);U.color.copy(O).multiplyScalar(k),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=U,m++}else if(C.isPointLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const W=C.shadow,F=e.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=U,g++}else if(C.isHemisphereLight){const U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(k),U.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=T,i.version=hv++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const M=l[p];if(M.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Hh(n){const t=new fv(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function o(u){e.push(u)}function r(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function pv(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Hh(n),t.set(s,[a])):o>=r.length?(a=new Hh(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class mv extends Io{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gv extends Io{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function vv(n,t,e){let i=new du;const s=new lt,o=new lt,r=new he,a=new mv({depthPacking:hm}),c=new gv,l={},u=e.maxTextureSize,h={[ts]:fn,[fn]:ts,[Be]:Be},f=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:xv,fragmentShader:_v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new V(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let p=this.type;this.render=function(b,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ki),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==_i&&this.type===_i,D=p===_i&&this.type!==_i;for(let N=0,U=b.length;N<U;N++){const W=b[N],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();if(s.multiply(K),o.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/K.x),s.x=o.x*K.x,F.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/K.y),s.y=o.y*K.y,F.mapSize.y=o.y)),F.map===null||k===!0||D===!0){const ct=this.type!==_i?{minFilter:bn,magFilter:bn}:{};F.map!==null&&F.map.dispose(),F.map=new Is(s.x,s.y,ct),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const et=F.getViewportCount();for(let ct=0;ct<et;ct++){const _t=F.getViewport(ct);r.set(o.x*_t.x,o.y*_t.y,o.x*_t.z,o.y*_t.w),O.viewport(r),F.updateMatrices(W,ct),i=F.getFrustum(),v(T,R,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===_i&&_(F,R),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,C)};function _(b,T){const R=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Is(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,R,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,R,d,x,null)}function M(b,T,R,S){let y=null;const C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=y.uuid,k=T.uuid;let D=l[O];D===void 0&&(D={},l[O]=D);let N=D[k];N===void 0&&(N=y.clone(),D[k]=N,T.addEventListener("dispose",E)),y=N}if(y.visible=T.visible,y.wireframe=T.wireframe,S===_i?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=R}return y}function v(b,T,R,S,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===_i)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const k=t.update(b),D=b.material;if(Array.isArray(D)){const N=k.groups;for(let U=0,W=N.length;U<W;U++){const F=N[U],K=D[F.materialIndex];if(K&&K.visible){const et=M(b,K,S,y);b.onBeforeShadow(n,b,T,R,k,et,F),n.renderBufferDirect(R,null,k,et,b,F),b.onAfterShadow(n,b,T,R,k,et,F)}}}else if(D.visible){const N=M(b,D,S,y);b.onBeforeShadow(n,b,T,R,k,N,null),n.renderBufferDirect(R,null,k,N,b,null),b.onAfterShadow(n,b,T,R,k,N,null)}}const O=b.children;for(let k=0,D=O.length;k<D;k++)v(O[k],T,R,S,y)}function E(b){b.target.removeEventListener("dispose",E);for(const R in l){const S=l[R],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Mv={[sl]:ol,[rl]:ll,[al]:ul,[vo]:cl,[ol]:sl,[ll]:rl,[ul]:al,[cl]:vo};function yv(n,t){function e(){let z=!1;const vt=new he;let j=null;const nt=new he(0,0,0,0);return{setMask:function(St){j!==St&&!z&&(n.colorMask(St,St,St,St),j=St)},setLocked:function(St){z=St},setClear:function(St,Mt,$t,we,je){je===!0&&(St*=we,Mt*=we,$t*=we),vt.set(St,Mt,$t,we),nt.equals(vt)===!1&&(n.clearColor(St,Mt,$t,we),nt.copy(vt))},reset:function(){z=!1,j=null,nt.set(-1,0,0,0)}}}function i(){let z=!1,vt=!1,j=null,nt=null,St=null;return{setReversed:function(Mt){if(vt!==Mt){const $t=t.get("EXT_clip_control");vt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const we=St;St=null,this.setClear(we)}vt=Mt},getReversed:function(){return vt},setTest:function(Mt){Mt?tt(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(Mt){j!==Mt&&!z&&(n.depthMask(Mt),j=Mt)},setFunc:function(Mt){if(vt&&(Mt=Mv[Mt]),nt!==Mt){switch(Mt){case sl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case vo:n.depthFunc(n.LEQUAL);break;case al:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case ll:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=Mt}},setLocked:function(Mt){z=Mt},setClear:function(Mt){St!==Mt&&(vt&&(Mt=1-Mt),n.clearDepth(Mt),St=Mt)},reset:function(){z=!1,j=null,nt=null,St=null,vt=!1}}}function s(){let z=!1,vt=null,j=null,nt=null,St=null,Mt=null,$t=null,we=null,je=null;return{setTest:function(ae){z||(ae?tt(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(ae){vt!==ae&&!z&&(n.stencilMask(ae),vt=ae)},setFunc:function(ae,On,ai){(j!==ae||nt!==On||St!==ai)&&(n.stencilFunc(ae,On,ai),j=ae,nt=On,St=ai)},setOp:function(ae,On,ai){(Mt!==ae||$t!==On||we!==ai)&&(n.stencilOp(ae,On,ai),Mt=ae,$t=On,we=ai)},setLocked:function(ae){z=ae},setClear:function(ae){je!==ae&&(n.clearStencil(ae),je=ae)},reset:function(){z=!1,vt=null,j=null,nt=null,St=null,Mt=null,$t=null,we=null,je=null}}}const o=new e,r=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,M=null,v=null,E=null,b=null,T=new Wt(0,0,0),R=0,S=!1,y=null,C=null,O=null,k=null,D=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=W>=2);let K=null,et={};const ct=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),ut=new he().fromArray(ct),G=new he().fromArray(_t);function Y(z,vt,j,nt){const St=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(z,Mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<j;$t++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(vt+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Mt}const ot={};ot[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),tt(n.DEPTH_TEST),r.setFunc(vo),rt(!1),Et(qu),tt(n.CULL_FACE),I(Ki);function tt(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function mt(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Tt(z,vt){return h[z]!==vt?(n.bindFramebuffer(z,vt),h[z]=vt,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function At(z,vt){let j=d,nt=!1;if(z){j=f.get(vt),j===void 0&&(j=[],f.set(vt,j));const St=z.textures;if(j.length!==St.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,$t=St.length;Mt<$t;Mt++)j[Mt]=n.COLOR_ATTACHMENT0+Mt;j.length=St.length,nt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,nt=!0);nt&&n.drawBuffers(j)}function zt(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const Q={[vs]:n.FUNC_ADD,[F0]:n.FUNC_SUBTRACT,[z0]:n.FUNC_REVERSE_SUBTRACT};Q[B0]=n.MIN,Q[H0]=n.MAX;const ht={[G0]:n.ZERO,[V0]:n.ONE,[W0]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[K0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[X0]:n.DST_ALPHA,[$0]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[j0]:n.ONE_MINUS_DST_COLOR,[q0]:n.ONE_MINUS_DST_ALPHA,[Z0]:n.CONSTANT_COLOR,[J0]:n.ONE_MINUS_CONSTANT_COLOR,[Q0]:n.CONSTANT_ALPHA,[tm]:n.ONE_MINUS_CONSTANT_ALPHA};function I(z,vt,j,nt,St,Mt,$t,we,je,ae){if(z===Ki){x===!0&&(mt(n.BLEND),x=!1);return}if(x===!1&&(tt(n.BLEND),x=!0),z!==U0){if(z!==m||ae!==S){if((p!==vs||v!==vs)&&(n.blendEquation(n.FUNC_ADD),p=vs,v=vs),ae)switch(z){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ts:n.blendFunc(n.ONE,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ts:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,M=null,E=null,b=null,T.set(0,0,0),R=0,m=z,S=ae}return}St=St||vt,Mt=Mt||j,$t=$t||nt,(vt!==p||St!==v)&&(n.blendEquationSeparate(Q[vt],Q[St]),p=vt,v=St),(j!==_||nt!==M||Mt!==E||$t!==b)&&(n.blendFuncSeparate(ht[j],ht[nt],ht[Mt],ht[$t]),_=j,M=nt,E=Mt,b=$t),(we.equals(T)===!1||je!==R)&&(n.blendColor(we.r,we.g,we.b,je),T.copy(we),R=je),m=z,S=!1}function Nt(z,vt){z.side===Be?mt(n.CULL_FACE):tt(n.CULL_FACE);let j=z.side===fn;vt&&(j=!j),rt(j),z.blending===Es&&z.transparent===!1?I(Ki):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const nt=z.stencilWrite;a.setTest(nt),nt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Bt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(z){y!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),y=z)}function Et(z){z!==N0?(tt(n.CULL_FACE),z!==C&&(z===qu?n.cullFace(n.BACK):z===O0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),C=z}function pt(z){z!==O&&(U&&n.lineWidth(z),O=z)}function Bt(z,vt,j){z?(tt(n.POLYGON_OFFSET_FILL),(k!==vt||D!==j)&&(n.polygonOffset(vt,j),k=vt,D=j)):mt(n.POLYGON_OFFSET_FILL)}function bt(z){z?tt(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function P(z){z===void 0&&(z=n.TEXTURE0+N-1),K!==z&&(n.activeTexture(z),K=z)}function w(z,vt,j){j===void 0&&(K===null?j=n.TEXTURE0+N-1:j=K);let nt=et[j];nt===void 0&&(nt={type:void 0,texture:void 0},et[j]=nt),(nt.type!==z||nt.texture!==vt)&&(K!==j&&(n.activeTexture(j),K=j),n.bindTexture(z,vt||ot[z]),nt.type=z,nt.texture=vt)}function $(){const z=et[K];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Gt(z){ut.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ut.copy(z))}function Ct(z){G.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),G.copy(z))}function Qt(z,vt){let j=l.get(vt);j===void 0&&(j=new WeakMap,l.set(vt,j));let nt=j.get(z);nt===void 0&&(nt=n.getUniformBlockIndex(vt,z.name),j.set(z,nt))}function jt(z,vt){const nt=l.get(vt).get(z);c.get(vt)!==nt&&(n.uniformBlockBinding(vt,nt,z.__bindingPointIndex),c.set(vt,nt))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,et={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,M=null,v=null,E=null,b=null,T=new Wt(0,0,0),R=0,S=!1,y=null,C=null,O=null,k=null,D=null,ut.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:tt,disable:mt,bindFramebuffer:Tt,drawBuffers:At,useProgram:zt,setBlending:I,setMaterial:Nt,setFlipSided:rt,setCullFace:Et,setLineWidth:pt,setPolygonOffset:Bt,setScissorTest:bt,activeTexture:P,bindTexture:w,unbindTexture:$,compressedTexImage2D:Z,compressedTexImage3D:it,texImage2D:Rt,texImage3D:Ht,updateUBOMapping:Qt,uniformBlockBinding:jt,texStorage2D:Zt,texStorage3D:at,texSubImage2D:J,texSubImage3D:It,compressedTexSubImage2D:xt,compressedTexSubImage3D:wt,scissor:Gt,viewport:Ct,reset:pe}}function Gh(n,t,e,i){const s=Sv(i);switch(e){case jf:return n*t;case Zf:return n*t;case Jf:return n*t*2;case au:return n*t/s.components*s.byteLength;case cu:return n*t/s.components*s.byteLength;case Qf:return n*t*2/s.components*s.byteLength;case lu:return n*t*2/s.components*s.byteLength;case Kf:return n*t*3/s.components*s.byteLength;case $n:return n*t*4/s.components*s.byteLength;case uu:return n*t*4/s.components*s.byteLength;case ba:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(n,8)*Math.max(t,8)/2;case xl:case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Aa:case kl:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tp:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sv(n){switch(n){case Ci:case Xf:return{byteLength:1,components:1};case lr:case qf:case xr:return{byteLength:2,components:1};case ou:case ru:return{byteLength:2,components:4};case Ps:case su:case oi:return{byteLength:4,components:1};case Yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bv(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):La("canvas")}function x(P,w,$){let Z=1;const it=bt(P);if((it.width>$||it.height>$)&&(Z=$/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(Z*it.width),It=Math.floor(Z*it.height);h===void 0&&(h=g(J,It));const xt=w?g(J,It):h;return xt.width=J,xt.height=It,xt.getContext("2d").drawImage(P,0,0,J,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+It+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,w,$,Z,it=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===n.RED&&($===n.FLOAT&&(J=n.R32F),$===n.HALF_FLOAT&&(J=n.R16F),$===n.UNSIGNED_BYTE&&(J=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.R8UI),$===n.UNSIGNED_SHORT&&(J=n.R16UI),$===n.UNSIGNED_INT&&(J=n.R32UI),$===n.BYTE&&(J=n.R8I),$===n.SHORT&&(J=n.R16I),$===n.INT&&(J=n.R32I)),w===n.RG&&($===n.FLOAT&&(J=n.RG32F),$===n.HALF_FLOAT&&(J=n.RG16F),$===n.UNSIGNED_BYTE&&(J=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RG8UI),$===n.UNSIGNED_SHORT&&(J=n.RG16UI),$===n.UNSIGNED_INT&&(J=n.RG32UI),$===n.BYTE&&(J=n.RG8I),$===n.SHORT&&(J=n.RG16I),$===n.INT&&(J=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGB8UI),$===n.UNSIGNED_SHORT&&(J=n.RGB16UI),$===n.UNSIGNED_INT&&(J=n.RGB32UI),$===n.BYTE&&(J=n.RGB8I),$===n.SHORT&&(J=n.RGB16I),$===n.INT&&(J=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),$===n.UNSIGNED_INT&&(J=n.RGBA32UI),$===n.BYTE&&(J=n.RGBA8I),$===n.SHORT&&(J=n.RGBA16I),$===n.INT&&(J=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),w===n.RGBA){const It=it?Xa:te.getTransfer(Z);$===n.FLOAT&&(J=n.RGBA32F),$===n.HALF_FLOAT&&(J=n.RGBA16F),$===n.UNSIGNED_BYTE&&(J=It===le?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(P,w){let $;return P?w===null||w===Ps||w===bo?$=n.DEPTH24_STENCIL8:w===oi?$=n.DEPTH32F_STENCIL8:w===lr&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ps||w===bo?$=n.DEPTH_COMPONENT24:w===oi?$=n.DEPTH_COMPONENT32F:w===lr&&($=n.DEPTH_COMPONENT16),$}function E(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==bn&&P.minFilter!==si?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function b(P){const w=P.target;w.removeEventListener("dispose",b),R(w),w.isVideoTexture&&u.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),y(w)}function R(P){const w=i.get(P);if(w.__webglInit===void 0)return;const $=P.source,Z=f.get($);if(Z){const it=Z[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(P),Object.keys(Z).length===0&&f.delete($)}i.remove(P)}function S(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const $=P.source,Z=f.get($);delete Z[w.__cacheKey],r.memory.textures--}function y(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let it=0;it<w.__webglFramebuffer[Z].length;it++)n.deleteFramebuffer(w.__webglFramebuffer[Z][it]);else n.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)n.deleteFramebuffer(w.__webglFramebuffer[Z]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=P.textures;for(let Z=0,it=$.length;Z<it;Z++){const J=i.get($[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),r.memory.textures--),i.remove($[Z])}i.remove(P)}let C=0;function O(){C=0}function k(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function D(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function N(P,w){const $=i.get(P);if(P.isVideoTexture&&pt(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G($,P,w);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function U(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){G($,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function W(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){G($,P,w);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function F(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Y($,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const K={[So]:n.REPEAT,[ys]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},et={[bn]:n.NEAREST,[lm]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[si]:n.LINEAR,[ic]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},ct={[fm]:n.NEVER,[vm]:n.ALWAYS,[pm]:n.LESS,[ep]:n.LEQUAL,[mm]:n.EQUAL,[_m]:n.GEQUAL,[gm]:n.GREATER,[xm]:n.NOTEQUAL};function _t(P,w){if(w.type===oi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===si||w.magFilter===ic||w.magFilter===Pr||w.magFilter===Ss||w.minFilter===si||w.minFilter===ic||w.minFilter===Pr||w.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,K[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,et[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,et[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ct[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bn||w.minFilter!==Pr&&w.minFilter!==Ss||w.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ut(P,w){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",b));const Z=w.source;let it=f.get(Z);it===void 0&&(it={},f.set(Z,it));const J=D(w);if(J!==P.__cacheKey){it[J]===void 0&&(it[J]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,$=!0),it[J].usedTimes++;const It=it[P.__cacheKey];It!==void 0&&(it[P.__cacheKey].usedTimes--,It.usedTimes===0&&S(w)),P.__cacheKey=J,P.__webglTexture=it[J].texture}return $}function G(P,w,$){let Z=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=n.TEXTURE_3D);const it=ut(P,w),J=w.source;e.bindTexture(Z,P.__webglTexture,n.TEXTURE0+$);const It=i.get(J);if(J.version!==It.__version||it===!0){e.activeTexture(n.TEXTURE0+$);const xt=te.getPrimaries(te.workingColorSpace),wt=w.colorSpace===Yi?null:te.getPrimaries(w.colorSpace),Zt=w.colorSpace===Yi||xt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let at=x(w.image,!1,s.maxTextureSize);at=Bt(w,at);const Rt=o.convert(w.format,w.colorSpace),Ht=o.convert(w.type);let Gt=M(w.internalFormat,Rt,Ht,w.colorSpace,w.isVideoTexture);_t(Z,w);let Ct;const Qt=w.mipmaps,jt=w.isVideoTexture!==!0,pe=It.__version===void 0||it===!0,z=J.dataReady,vt=E(w,at);if(w.isDepthTexture)Gt=v(w.format===wo,w.type),pe&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Gt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Gt,at.width,at.height,0,Rt,Ht,null));else if(w.isDataTexture)if(Qt.length>0){jt&&pe&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,Qt[0].width,Qt[0].height);for(let j=0,nt=Qt.length;j<nt;j++)Ct=Qt[j],jt?z&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,Ct.width,Ct.height,Rt,Ht,Ct.data):e.texImage2D(n.TEXTURE_2D,j,Gt,Ct.width,Ct.height,0,Rt,Ht,Ct.data);w.generateMipmaps=!1}else jt?(pe&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,at.width,at.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,Rt,Ht,at.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,at.width,at.height,0,Rt,Ht,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){jt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,Qt[0].width,Qt[0].height,at.depth);for(let j=0,nt=Qt.length;j<nt;j++)if(Ct=Qt[j],w.format!==$n)if(Rt!==null)if(jt){if(z)if(w.layerUpdates.size>0){const St=Gh(Ct.width,Ct.height,w.format,w.type);for(const Mt of w.layerUpdates){const $t=Ct.data.subarray(Mt*St/Ct.data.BYTES_PER_ELEMENT,(Mt+1)*St/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Mt,Ct.width,Ct.height,1,Rt,$t)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ct.width,Ct.height,at.depth,Rt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Gt,Ct.width,Ct.height,at.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ct.width,Ct.height,at.depth,Rt,Ht,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,Gt,Ct.width,Ct.height,at.depth,0,Rt,Ht,Ct.data)}else{jt&&pe&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,Qt[0].width,Qt[0].height);for(let j=0,nt=Qt.length;j<nt;j++)Ct=Qt[j],w.format!==$n?Rt!==null?jt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,j,Gt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?z&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,Ct.width,Ct.height,Rt,Ht,Ct.data):e.texImage2D(n.TEXTURE_2D,j,Gt,Ct.width,Ct.height,0,Rt,Ht,Ct.data)}else if(w.isDataArrayTexture)if(jt){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,at.width,at.height,at.depth),z)if(w.layerUpdates.size>0){const j=Gh(at.width,at.height,w.format,w.type);for(const nt of w.layerUpdates){const St=at.data.subarray(nt*j/at.data.BYTES_PER_ELEMENT,(nt+1)*j/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,Rt,Ht,St)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Rt,Ht,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,at.width,at.height,at.depth,0,Rt,Ht,at.data);else if(w.isData3DTexture)jt?(pe&&e.texStorage3D(n.TEXTURE_3D,vt,Gt,at.width,at.height,at.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Rt,Ht,at.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,at.width,at.height,at.depth,0,Rt,Ht,at.data);else if(w.isFramebufferTexture){if(pe)if(jt)e.texStorage2D(n.TEXTURE_2D,vt,Gt,at.width,at.height);else{let j=at.width,nt=at.height;for(let St=0;St<vt;St++)e.texImage2D(n.TEXTURE_2D,St,Gt,j,nt,0,Rt,Ht,null),j>>=1,nt>>=1}}else if(Qt.length>0){if(jt&&pe){const j=bt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Gt,j.width,j.height)}for(let j=0,nt=Qt.length;j<nt;j++)Ct=Qt[j],jt?z&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,Rt,Ht,Ct):e.texImage2D(n.TEXTURE_2D,j,Gt,Rt,Ht,Ct);w.generateMipmaps=!1}else if(jt){if(pe){const j=bt(at);e.texStorage2D(n.TEXTURE_2D,vt,Gt,j.width,j.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt,Ht,at)}else e.texImage2D(n.TEXTURE_2D,0,Gt,Rt,Ht,at);m(w)&&p(Z),It.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Y(P,w,$){if(w.image.length!==6)return;const Z=ut(P,w),it=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);const J=i.get(it);if(it.version!==J.__version||Z===!0){e.activeTexture(n.TEXTURE0+$);const It=te.getPrimaries(te.workingColorSpace),xt=w.colorSpace===Yi?null:te.getPrimaries(w.colorSpace),wt=w.colorSpace===Yi||It===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Zt=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,Rt=[];for(let nt=0;nt<6;nt++)!Zt&&!at?Rt[nt]=x(w.image[nt],!0,s.maxCubemapSize):Rt[nt]=at?w.image[nt].image:w.image[nt],Rt[nt]=Bt(w,Rt[nt]);const Ht=Rt[0],Gt=o.convert(w.format,w.colorSpace),Ct=o.convert(w.type),Qt=M(w.internalFormat,Gt,Ct,w.colorSpace),jt=w.isVideoTexture!==!0,pe=J.__version===void 0||Z===!0,z=it.dataReady;let vt=E(w,Ht);_t(n.TEXTURE_CUBE_MAP,w);let j;if(Zt){jt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Qt,Ht.width,Ht.height);for(let nt=0;nt<6;nt++){j=Rt[nt].mipmaps;for(let St=0;St<j.length;St++){const Mt=j[St];w.format!==$n?Gt!==null?jt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,0,0,Mt.width,Mt.height,Gt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,Qt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,0,0,Mt.width,Mt.height,Gt,Ct,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,Qt,Mt.width,Mt.height,0,Gt,Ct,Mt.data)}}}else{if(j=w.mipmaps,jt&&pe){j.length>0&&vt++;const nt=bt(Rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt[nt].width,Rt[nt].height,Gt,Ct,Rt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,Rt[nt].width,Rt[nt].height,0,Gt,Ct,Rt[nt].data);for(let St=0;St<j.length;St++){const $t=j[St].image[nt].image;jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,0,0,$t.width,$t.height,Gt,Ct,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,Qt,$t.width,$t.height,0,Gt,Ct,$t.data)}}else{jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Gt,Ct,Rt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,Gt,Ct,Rt[nt]);for(let St=0;St<j.length;St++){const Mt=j[St];jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,0,0,Gt,Ct,Mt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,Qt,Gt,Ct,Mt.image[nt])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),J.__version=it.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ot(P,w,$,Z,it,J){const It=o.convert($.format,$.colorSpace),xt=o.convert($.type),wt=M($.internalFormat,It,xt,$.colorSpace),Zt=i.get(w),at=i.get($);if(at.__renderTarget=w,!Zt.__hasExternalTextures){const Rt=Math.max(1,w.width>>J),Ht=Math.max(1,w.height>>J);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,J,wt,Rt,Ht,w.depth,0,It,xt,null):e.texImage2D(it,J,wt,Rt,Ht,0,It,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,it,at.__webglTexture,0,rt(w)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,it,at.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(P,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const Z=w.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,J=v(w.stencilBuffer,it),It=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=rt(w);Et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,J,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,J,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,J,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,P)}else{const Z=w.textures;for(let it=0;it<Z.length;it++){const J=Z[it],It=o.convert(J.format,J.colorSpace),xt=o.convert(J.type),wt=M(J.internalFormat,It,xt,J.colorSpace),Zt=rt(w);$&&Et(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,wt,w.width,w.height):Et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,wt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,wt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const it=Z.__webglTexture,J=rt(w);if(w.depthTexture.format===po)Et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(w.depthTexture.format===wo)Et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Tt(P){const w=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=Z}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");mt(w.__webglFramebuffer,P)}else if($){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=n.createRenderbuffer(),tt(w.__webglDepthbuffer[Z],P,!1);else{const it=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),tt(w.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(P,w,$){const Z=i.get(P);w!==void 0&&ot(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Tt(P)}function zt(P){const w=P.texture,$=i.get(P),Z=i.get(w);P.addEventListener("dispose",T);const it=P.textures,J=P.isWebGLCubeRenderTarget===!0,It=it.length>1;if(It||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=w.version,r.memory.textures++),J){$.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[xt]=[];for(let wt=0;wt<w.mipmaps.length;wt++)$.__webglFramebuffer[xt][wt]=n.createFramebuffer()}else $.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)$.__webglFramebuffer[xt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(It)for(let xt=0,wt=it.length;xt<wt;xt++){const Zt=i.get(it[xt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&Et(P)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let xt=0;xt<it.length;xt++){const wt=it[xt];$.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[xt]);const Zt=o.convert(wt.format,wt.colorSpace),at=o.convert(wt.type),Rt=M(wt.internalFormat,Zt,at,wt.colorSpace,P.isXRRenderTarget===!0),Ht=rt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,Rt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,$.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),tt($.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),_t(n.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)ot($.__webglFramebuffer[xt][wt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt);else ot($.__webglFramebuffer[xt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(w)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let xt=0,wt=it.length;xt<wt;xt++){const Zt=it[xt],at=i.get(Zt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),_t(n.TEXTURE_2D,Zt),ot($.__webglFramebuffer,P,Zt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),m(Zt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,Z.__webglTexture),_t(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)ot($.__webglFramebuffer[wt],P,w,n.COLOR_ATTACHMENT0,xt,wt);else ot($.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,xt,0);m(w)&&p(xt),e.unbindTexture()}P.depthBuffer&&Tt(P)}function Q(P){const w=P.textures;for(let $=0,Z=w.length;$<Z;$++){const it=w[$];if(m(it)){const J=_(P),It=i.get(it).__webglTexture;e.bindTexture(J,It),p(J),e.unbindTexture()}}}const ht=[],I=[];function Nt(P){if(P.samples>0){if(Et(P)===!1){const w=P.textures,$=P.width,Z=P.height;let it=n.COLOR_BUFFER_BIT;const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(P),xt=w.length>1;if(xt)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[wt]);const Zt=i.get(w[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,$,Z,0,0,$,Z,it,n.NEAREST),c===!0&&(ht.length=0,I.length=0,ht.push(n.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ht.push(J),I.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,It.__webglColorRenderbuffer[wt]);const Zt=i.get(w[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function rt(P){return Math.min(s.maxSamples,P.samples)}function Et(P){const w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function pt(P){const w=r.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Bt(P,w){const $=P.colorSpace,Z=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Ro&&$!==Yi&&(te.getTransfer($)===le?(Z!==$n||it!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=At,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Et}function wv(n,t){function e(i,s=Yi){let o;const r=te.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return n.BYTE;if(i===qf)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===su)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===jf)return n.ALPHA;if(i===Kf)return n.RGB;if(i===$n)return n.RGBA;if(i===Zf)return n.LUMINANCE;if(i===Jf)return n.LUMINANCE_ALPHA;if(i===po)return n.DEPTH_COMPONENT;if(i===wo)return n.DEPTH_STENCIL;if(i===au)return n.RED;if(i===cu)return n.RED_INTEGER;if(i===Qf)return n.RG;if(i===lu)return n.RG_INTEGER;if(i===uu)return n.RGBA_INTEGER;if(i===ba||i===wa||i===Ea||i===Ta)if(r===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===fl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===_l||i===vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xl||i===_l)return r===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===vl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===yl||i===Sl||i===bl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ml)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Aa||i===kl||i===Nl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Aa)return r===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===Ol||i===Ul||i===Fl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Aa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Ev extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class st extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tv={type:"move"};class Lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new st;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new es({vertexShader:Av,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new V(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pv extends Co{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const x=new Cv,m=e.getContextAttributes();let p=null,_=null;const M=[],v=[],E=new lt;let b=null;const T=new vn;T.viewport=new he;const R=new vn;R.viewport=new he;const S=[T,R],y=new Ev;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=M[G];return Y===void 0&&(Y=new Lc,M[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=M[G];return Y===void 0&&(Y=new Lc,M[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=M[G];return Y===void 0&&(Y=new Lc,M[G]=Y),Y.getHandSpace()};function k(G){const Y=v.indexOf(G.inputSource);if(Y===-1)return;const ot=M[Y];ot!==void 0&&(ot.update(G.inputSource,G.frame,l||r),ot.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",N);for(let G=0;G<M.length;G++){const Y=v[G];Y!==null&&(v[G]=null,M[G].disconnect(Y))}C=null,O=null,x.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,_=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",D),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Is(d.framebufferWidth,d.framebufferHeight,{format:$n,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ot=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?wo:po,ot=m.stencil?bo:Ps);const mt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:o};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Is(f.textureWidth,f.textureHeight,{format:$n,type:Ci,depthTexture:new pp(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(G){for(let Y=0;Y<G.removed.length;Y++){const ot=G.removed[Y],tt=v.indexOf(ot);tt>=0&&(v[tt]=null,M[tt].disconnect(ot))}for(let Y=0;Y<G.added.length;Y++){const ot=G.added[Y];let tt=v.indexOf(ot);if(tt===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=v.length){v.push(ot),tt=Tt;break}else if(v[Tt]===null){v[Tt]=ot,tt=Tt;break}if(tt===-1)break}const mt=M[tt];mt&&mt.connect(ot)}}const U=new L,W=new L;function F(G,Y,ot){U.setFromMatrixPosition(Y.matrixWorld),W.setFromMatrixPosition(ot.matrixWorld);const tt=U.distanceTo(W),mt=Y.projectionMatrix.elements,Tt=ot.projectionMatrix.elements,At=mt[14]/(mt[10]-1),zt=mt[14]/(mt[10]+1),Q=(mt[9]+1)/mt[5],ht=(mt[9]-1)/mt[5],I=(mt[8]-1)/mt[0],Nt=(Tt[8]+1)/Tt[0],rt=At*I,Et=At*Nt,pt=tt/(-I+Nt),Bt=pt*-I;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Bt),G.translateZ(pt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),mt[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const bt=At+pt,P=zt+pt,w=rt-Bt,$=Et+(tt-Bt),Z=Q*zt/P*bt,it=ht*zt/P*bt;G.projectionMatrix.makePerspective(w,$,Z,it,bt,P),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function K(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Y=G.near,ot=G.far;x.texture!==null&&(x.depthNear>0&&(Y=x.depthNear),x.depthFar>0&&(ot=x.depthFar)),y.near=R.near=T.near=Y,y.far=R.far=T.far=ot,(C!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,O=y.far),T.layers.mask=G.layers.mask|2,R.layers.mask=G.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const tt=G.parent,mt=y.cameras;K(y,tt);for(let Tt=0;Tt<mt.length;Tt++)K(mt[Tt],tt);mt.length===2?F(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),et(G,y,tt)};function et(G,Y,ot){ot===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(ot.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zl*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ct=null;function _t(G,Y){if(u=Y.getViewerPose(l||r),g=Y,u!==null){const ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let tt=!1;ot.length!==y.cameras.length&&(y.cameras.length=0,tt=!0);for(let Tt=0;Tt<ot.length;Tt++){const At=ot[Tt];let zt=null;if(d!==null)zt=d.getViewport(At);else{const ht=h.getViewSubImage(f,At);zt=ht.viewport,Tt===0&&(t.setRenderTargetTextures(_,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(_))}let Q=S[Tt];Q===void 0&&(Q=new vn,Q.layers.enable(Tt),Q.viewport=new he,S[Tt]=Q),Q.matrix.fromArray(At.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(At.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(zt.x,zt.y,zt.width,zt.height),Tt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),tt===!0&&y.cameras.push(Q)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Tt=h.getDepthInformation(ot[0]);Tt&&Tt.isValid&&Tt.texture&&x.init(t,Tt,s.renderState)}}for(let ot=0;ot<M.length;ot++){const tt=v[ot],mt=M[ot];tt!==null&&mt!==void 0&&mt.update(tt,Y,l||r)}ct&&ct(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ut=new dp;ut.setAnimationLoop(_t),this.setAnimationLoop=function(G){ct=G},this.dispose=function(){}}}const ds=new Kn,Iv=new fe;function Lv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,lp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),h(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,ds.copy(v),ds.x*=-1,ds.y*=-1,ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(ds)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dv(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){const v=M.program;i.uniformBlockBinding(_,v)}function l(_,M){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",m));const E=M.program;i.updateUBOMapping(_,E);const b=t.render.frame;o[_.id]!==b&&(f(_),o[_.id]=b)}function u(_){const M=h();_.__bindingPointIndex=M;const v=n.createBuffer(),E=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function h(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const M=s[_.id],v=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let b=0,T=v.length;b<T;b++){const R=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,y=R.length;S<y;S++){const C=R[S];if(d(C,b,S,E)===!0){const O=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let N=0;N<k.length;N++){const U=k[N],W=x(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,O+D,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,M,v,E){const b=_.value,T=M+"_"+v;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:E[T]=b.clone(),!0;{const R=E[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return E[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(_){const M=_.uniforms;let v=0;const E=16;for(let T=0,R=M.length;T<R;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,C=S.length;y<C;y++){const O=S[y],k=Array.isArray(O.value)?O.value:[O.value];for(let D=0,N=k.length;D<N;D++){const U=k[D],W=x(U),F=v%E,K=F%W.boundary,et=F+K;v+=K,et!==0&&E-et<W.storage&&(v+=E-et),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=W.storage}}}const b=v%E;return b>0&&(v+=E-b),_.__size=v,_.__cache={},this}function x(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class kv{constructor(t={}){const{canvas:e=ym(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const _=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Zi,this.toneMappingExposure=1;const v=this;let E=!1,b=0,T=0,R=null,S=-1,y=null;const C=new he,O=new he;let k=null;const D=new Wt(0);let N=0,U=e.width,W=e.height,F=1,K=null,et=null;const ct=new he(0,0,U,W),_t=new he(0,0,U,W);let ut=!1;const G=new du;let Y=!1,ot=!1;const tt=new fe,mt=new fe,Tt=new L,At=new he,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ht(){return R===null?F:1}let I=i;function Nt(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nu}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const B="webgl2";if(I=Nt(B,A),I===null)throw Nt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,Et,pt,Bt,bt,P,w,$,Z,it,J,It,xt,wt,Zt,at,Rt,Ht,Gt,Ct,Qt,jt,pe,z;function vt(){rt=new zx(I),rt.init(),jt=new wv(I,rt),Et=new Dx(I,rt,t,jt),pt=new yv(I,rt),Et.reverseDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),Bt=new Gx(I),bt=new rv,P=new bv(I,rt,pt,bt,Et,jt,Bt),w=new Nx(v),$=new Fx(v),Z=new jm(I),pe=new Ix(I,Z),it=new Bx(I,Z,Bt,pe),J=new Wx(I,it,Z,Bt),Gt=new Vx(I,Et,P),at=new kx(bt),It=new ov(v,w,$,rt,Et,pe,at),xt=new Lv(v,bt),wt=new cv,Zt=new pv(rt),Ht=new Px(v,w,$,pt,J,d,c),Rt=new vv(v,J,Et),z=new Dv(I,Bt,Et,pt),Ct=new Lx(I,rt,Bt),Qt=new Hx(I,rt,Bt),Bt.programs=It.programs,v.capabilities=Et,v.extensions=rt,v.properties=bt,v.renderLists=wt,v.shadowMap=Rt,v.state=pt,v.info=Bt}vt();const j=new Pv(v,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(U,W,!1))},this.getSize=function(A){return A.set(U,W)},this.setSize=function(A,B,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,W=B,e.width=Math.floor(A*F),e.height=Math.floor(B*F),X===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(U*F,W*F).floor()},this.setDrawingBufferSize=function(A,B,X){U=A,W=B,F=X,e.width=Math.floor(A*X),e.height=Math.floor(B*X),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(ct)},this.setViewport=function(A,B,X,q){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,B,X,q),pt.viewport(C.copy(ct).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,B,X,q){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,B,X,q),pt.scissor(O.copy(_t).multiplyScalar(F).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){pt.setScissorTest(ut=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,B=!0,X=!0){let q=0;if(A){let H=!1;if(R!==null){const dt=R.texture.format;H=dt===uu||dt===lu||dt===cu}if(H){const dt=R.texture.type,yt=dt===Ci||dt===Ps||dt===lr||dt===bo||dt===ou||dt===ru,Lt=Ht.getClearColor(),Dt=Ht.getClearAlpha(),Vt=Lt.r,Xt=Lt.g,kt=Lt.b;yt?(g[0]=Vt,g[1]=Xt,g[2]=kt,g[3]=Dt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Vt,x[1]=Xt,x[2]=kt,x[3]=Dt,I.clearBufferiv(I.COLOR,0,x))}else q|=I.COLOR_BUFFER_BIT}B&&(q|=I.DEPTH_BUFFER_BIT),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),wt.dispose(),Zt.dispose(),bt.dispose(),w.dispose(),$.dispose(),J.dispose(),pe.dispose(),z.dispose(),It.dispose(),j.dispose(),j.removeEventListener("sessionstart",zu),j.removeEventListener("sessionend",Bu),rs.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Bt.autoReset,B=Rt.enabled,X=Rt.autoUpdate,q=Rt.needsUpdate,H=Rt.type;vt(),Bt.autoReset=A,Rt.enabled=B,Rt.autoUpdate=X,Rt.needsUpdate=q,Rt.type=H}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const B=A.target;B.removeEventListener("dispose",$t),we(B)}function we(A){je(A),bt.remove(A)}function je(A){const B=bt.get(A).programs;B!==void 0&&(B.forEach(function(X){It.releaseProgram(X)}),A.isShaderMaterial&&It.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,X,q,H,dt){B===null&&(B=zt);const yt=H.isMesh&&H.matrixWorld.determinant()<0,Lt=L0(A,B,X,q,H);pt.setMaterial(q,yt);let Dt=X.index,Vt=1;if(q.wireframe===!0){if(Dt=it.getWireframeAttribute(X),Dt===void 0)return;Vt=2}const Xt=X.drawRange,kt=X.attributes.position;let ee=Xt.start*Vt,me=(Xt.start+Xt.count)*Vt;dt!==null&&(ee=Math.max(ee,dt.start*Vt),me=Math.min(me,(dt.start+dt.count)*Vt)),Dt!==null?(ee=Math.max(ee,0),me=Math.min(me,Dt.count)):kt!=null&&(ee=Math.max(ee,0),me=Math.min(me,kt.count));const _e=me-ee;if(_e<0||_e===1/0)return;pe.setup(H,q,Lt,X,Dt);let rn,ie=Ct;if(Dt!==null&&(rn=Z.get(Dt),ie=Qt,ie.setIndex(rn)),H.isMesh)q.wireframe===!0?(pt.setLineWidth(q.wireframeLinewidth*ht()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(H.isLine){let Ot=q.linewidth;Ot===void 0&&(Ot=1),pt.setLineWidth(Ot*ht()),H.isLineSegments?ie.setMode(I.LINES):H.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else H.isPoints?ie.setMode(I.POINTS):H.isSprite&&ie.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ie.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ie.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,ci=H._multiDrawCounts,se=H._multiDrawCount,Un=Dt?Z.get(Dt).bytesPerElement:1,Gs=bt.get(q).currentProgram.getUniforms();for(let pn=0;pn<se;pn++)Gs.setValue(I,"_gl_DrawID",pn),ie.render(Ot[pn]/Un,ci[pn])}else if(H.isInstancedMesh)ie.renderInstances(ee,_e,H.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ci=Math.min(X.instanceCount,Ot);ie.renderInstances(ee,_e,ci)}else ie.render(ee,_e)};function ae(A,B,X){A.transparent===!0&&A.side===Be&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,Cr(A,B,X),A.side=ts,A.needsUpdate=!0,Cr(A,B,X),A.side=Be):Cr(A,B,X)}this.compile=function(A,B,X=null){X===null&&(X=A),p=Zt.get(X),p.init(B),M.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==X&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const dt=H.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const Lt=dt[yt];ae(Lt,X,H),q.add(Lt)}else ae(dt,X,H),q.add(dt)}),M.pop(),p=null,q},this.compileAsync=function(A,B,X=null){const q=this.compile(A,B,X);return new Promise(H=>{function dt(){if(q.forEach(function(yt){bt.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){H(A);return}setTimeout(dt,10)}rt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let On=null;function ai(A){On&&On(A)}function zu(){rs.stop()}function Bu(){rs.start()}const rs=new dp;rs.setAnimationLoop(ai),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(A){On=A,j.setAnimationLoop(A),A===null?rs.stop():rs.start()},j.addEventListener("sessionstart",zu),j.addEventListener("sessionend",Bu),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,R),p=Zt.get(A,M.length),p.init(B),M.push(p),mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G.setFromProjectionMatrix(mt),ot=this.localClippingEnabled,Y=at.init(this.clippingPlanes,ot),m=wt.get(A,_.length),m.init(),_.push(m),j.enabled===!0&&j.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&nc(dt,B,-1/0,v.sortObjects)}nc(A,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,et),Q=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Q&&Ht.addToRenderList(m,A),this.info.render.frame++,Y===!0&&at.beginShadows();const X=p.state.shadowsArray;Rt.render(X,A,B),Y===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,H=m.transmissive;if(p.setupLights(),B.isArrayCamera){const dt=B.cameras;if(H.length>0)for(let yt=0,Lt=dt.length;yt<Lt;yt++){const Dt=dt[yt];Gu(q,H,A,Dt)}Q&&Ht.render(A);for(let yt=0,Lt=dt.length;yt<Lt;yt++){const Dt=dt[yt];Hu(m,A,Dt,Dt.viewport)}}else H.length>0&&Gu(q,H,A,B),Q&&Ht.render(A),Hu(m,A,B);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,B),pe.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],Y===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function nc(A,B,X,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){q&&At.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const yt=J.update(A),Lt=A.material;Lt.visible&&m.push(A,yt,Lt,X,At.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const yt=J.update(A),Lt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),At.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),At.copy(yt.boundingSphere.center)),At.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(Lt)){const Dt=yt.groups;for(let Vt=0,Xt=Dt.length;Vt<Xt;Vt++){const kt=Dt[Vt],ee=Lt[kt.materialIndex];ee&&ee.visible&&m.push(A,yt,ee,X,At.z,kt)}}else Lt.visible&&m.push(A,yt,Lt,X,At.z,null)}}const dt=A.children;for(let yt=0,Lt=dt.length;yt<Lt;yt++)nc(dt[yt],B,X,q)}function Hu(A,B,X,q){const H=A.opaque,dt=A.transmissive,yt=A.transparent;p.setupLightsView(X),Y===!0&&at.setGlobalState(v.clippingPlanes,X),q&&pt.viewport(C.copy(q)),H.length>0&&Rr(H,B,X),dt.length>0&&Rr(dt,B,X),yt.length>0&&Rr(yt,B,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Gu(A,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Is(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?xr:Ci,minFilter:Ss,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const dt=p.state.transmissionRenderTarget[q.id],yt=q.viewport||C;dt.setSize(yt.z,yt.w);const Lt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(D),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ht.render(X);const Dt=v.toneMapping;v.toneMapping=Zi;const Vt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Y===!0&&at.setGlobalState(v.clippingPlanes,q),Rr(A,X,q),P.updateMultisampleRenderTarget(dt),P.updateRenderTargetMipmap(dt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let kt=0,ee=B.length;kt<ee;kt++){const me=B[kt],_e=me.object,rn=me.geometry,ie=me.material,Ot=me.group;if(ie.side===Be&&_e.layers.test(q.layers)){const ci=ie.side;ie.side=fn,ie.needsUpdate=!0,Vu(_e,X,q,rn,ie,Ot),ie.side=ci,ie.needsUpdate=!0,Xt=!0}}Xt===!0&&(P.updateMultisampleRenderTarget(dt),P.updateRenderTargetMipmap(dt))}v.setRenderTarget(Lt),v.setClearColor(D,N),Vt!==void 0&&(q.viewport=Vt),v.toneMapping=Dt}function Rr(A,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,dt=A.length;H<dt;H++){const yt=A[H],Lt=yt.object,Dt=yt.geometry,Vt=q===null?yt.material:q,Xt=yt.group;Lt.layers.test(X.layers)&&Vu(Lt,B,X,Dt,Vt,Xt)}}function Vu(A,B,X,q,H,dt){A.onBeforeRender(v,B,X,q,H,dt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,B,X,q,A,dt),H.transparent===!0&&H.side===Be&&H.forceSinglePass===!1?(H.side=fn,H.needsUpdate=!0,v.renderBufferDirect(X,B,q,H,A,dt),H.side=ts,H.needsUpdate=!0,v.renderBufferDirect(X,B,q,H,A,dt),H.side=Be):v.renderBufferDirect(X,B,q,H,A,dt),A.onAfterRender(v,B,X,q,H,dt)}function Cr(A,B,X){B.isScene!==!0&&(B=zt);const q=bt.get(A),H=p.state.lights,dt=p.state.shadowsArray,yt=H.state.version,Lt=It.getParameters(A,H.state,dt,B,X),Dt=It.getProgramCacheKey(Lt);let Vt=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",$t),Vt=new Map,q.programs=Vt);let Xt=Vt.get(Dt);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===yt)return $u(A,Lt),Xt}else Lt.uniforms=It.getUniforms(A),A.onBeforeCompile(Lt,v),Xt=It.acquireProgram(Lt,Dt),Vt.set(Dt,Xt),q.uniforms=Lt.uniforms;const kt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=at.uniform),$u(A,Lt),q.needsLights=k0(A),q.lightsStateVersion=yt,q.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function Wu(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Ra.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function $u(A,B){const X=bt.get(A);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function L0(A,B,X,q,H){B.isScene!==!0&&(B=zt),P.resetTextureUnits();const dt=B.fog,yt=q.isMeshStandardMaterial?B.environment:null,Lt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ro,Dt=(q.isMeshStandardMaterial?$:w).get(q.envMap||yt),Vt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,me=!!X.morphAttributes.color;let _e=Zi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=v.toneMapping);const rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=rn!==void 0?rn.length:0,Ot=bt.get(q),ci=p.state.lights;if(Y===!0&&(ot===!0||A!==y)){const An=A===y&&q.id===S;at.setState(q,A,An)}let se=!1;q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ci.state.version||Ot.outputColorSpace!==Lt||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==Dt||q.fog===!0&&Ot.fog!==dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==at.numPlanes||Ot.numIntersection!==at.numIntersection)||Ot.vertexAlphas!==Vt||Ot.vertexTangents!==Xt||Ot.morphTargets!==kt||Ot.morphNormals!==ee||Ot.morphColors!==me||Ot.toneMapping!==_e||Ot.morphTargetsCount!==ie)&&(se=!0):(se=!0,Ot.__version=q.version);let Un=Ot.currentProgram;se===!0&&(Un=Cr(q,B,H));let Gs=!1,pn=!1,zo=!1;const ve=Un.getUniforms(),ti=Ot.uniforms;if(pt.useProgram(Un.program)&&(Gs=!0,pn=!0,zo=!0),q.id!==S&&(S=q.id,pn=!0),Gs||y!==A){pt.buffers.depth.getReversed()?(tt.copy(A.projectionMatrix),bm(tt),wm(tt),ve.setValue(I,"projectionMatrix",tt)):ve.setValue(I,"projectionMatrix",A.projectionMatrix),ve.setValue(I,"viewMatrix",A.matrixWorldInverse);const ki=ve.map.cameraPosition;ki!==void 0&&ki.setValue(I,Tt.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ve.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,pn=!0,zo=!0)}if(H.isSkinnedMesh){ve.setOptional(I,H,"bindMatrix"),ve.setOptional(I,H,"bindMatrixInverse");const An=H.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),ve.setValue(I,"boneTexture",An.boneTexture,P))}H.isBatchedMesh&&(ve.setOptional(I,H,"batchingTexture"),ve.setValue(I,"batchingTexture",H._matricesTexture,P),ve.setOptional(I,H,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",H._indirectTexture,P),ve.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",H._colorsTexture,P));const Bo=X.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0)&&Gt.update(H,X,Un),(pn||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,ve.setValue(I,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ti.envMap.value=Dt,ti.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(ti.envMapIntensity.value=B.environmentIntensity),pn&&(ve.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&D0(ti,zo),dt&&q.fog===!0&&xt.refreshFogUniforms(ti,dt),xt.refreshMaterialUniforms(ti,q,F,W,p.state.transmissionRenderTarget[A.id]),Ra.upload(I,Wu(Ot),ti,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ra.upload(I,Wu(Ot),ti,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ve.setValue(I,"center",H.center),ve.setValue(I,"modelViewMatrix",H.modelViewMatrix),ve.setValue(I,"normalMatrix",H.normalMatrix),ve.setValue(I,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const An=q.uniformsGroups;for(let ki=0,Ni=An.length;ki<Ni;ki++){const Xu=An[ki];z.update(Xu,Un),z.bind(Xu,Un)}}return Un}function D0(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function k0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,B,X){bt.get(A.texture).__webglTexture=B,bt.get(A.depthTexture).__webglTexture=X;const q=bt.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const X=bt.get(A);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,X=0){R=A,b=B,T=X;let q=!0,H=null,dt=!1,yt=!1;if(A){const Dt=bt.get(A);if(Dt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Dt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Dt.__hasExternalTextures)P.rebindTextures(A,bt.get(A.texture).__webglTexture,bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(Dt.__boundDepthTexture!==kt){if(kt!==null&&bt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);const Xt=bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?H=Xt[B][X]:H=Xt[B],dt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?H=bt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?H=Xt[X]:H=Xt,C.copy(A.viewport),O.copy(A.scissor),k=A.scissorTest}else C.copy(ct).multiplyScalar(F).floor(),O.copy(_t).multiplyScalar(F).floor(),k=ut;if(pt.bindFramebuffer(I.FRAMEBUFFER,H)&&q&&pt.drawBuffers(A,H),pt.viewport(C),pt.scissor(O),pt.setScissorTest(k),dt){const Dt=bt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,X)}else if(yt){const Dt=bt.get(A.texture),Vt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Vt)}S=-1},this.readRenderTargetPixels=function(A,B,X,q,H,dt,yt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(Lt=Lt[yt]),Lt){pt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{const Dt=A.texture,Vt=Dt.format,Xt=Dt.type;if(!Et.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&X>=0&&X<=A.height-H&&I.readPixels(B,X,q,H,jt.convert(Vt),jt.convert(Xt),dt)}finally{const Dt=R!==null?bt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,B,X,q,H,dt,yt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(Lt=Lt[yt]),Lt){const Dt=A.texture,Vt=Dt.format,Xt=Dt.type;if(!Et.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-q&&X>=0&&X<=A.height-H){pt.bindFramebuffer(I.FRAMEBUFFER,Lt);const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,dt.byteLength,I.STREAM_READ),I.readPixels(B,X,q,H,jt.convert(Vt),jt.convert(Xt),0);const ee=R!==null?bt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,ee);const me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sm(I,me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,dt),I.deleteBuffer(kt),I.deleteSync(me),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,X=0){A.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-X),H=Math.floor(A.image.width*q),dt=Math.floor(A.image.height*q),yt=B!==null?B.x:0,Lt=B!==null?B.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,yt,Lt,H,dt),pt.unbindTexture()},this.copyTextureToTexture=function(A,B,X=null,q=null,H=0){A.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],B=arguments[2],H=arguments[3]||0,X=null);let dt,yt,Lt,Dt,Vt,Xt,kt,ee,me;const _e=A.isCompressedTexture?A.mipmaps[H]:A.image;X!==null?(dt=X.max.x-X.min.x,yt=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Vt=X.min.y,Xt=X.isBox3?X.min.z:0):(dt=_e.width,yt=_e.height,Lt=_e.depth||1,Dt=0,Vt=0,Xt=0),q!==null?(kt=q.x,ee=q.y,me=q.z):(kt=0,ee=0,me=0);const rn=jt.convert(B.format),ie=jt.convert(B.type);let Ot;B.isData3DTexture?(P.setTexture3D(B,0),Ot=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Ot=I.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Ot=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ci=I.getParameter(I.UNPACK_ROW_LENGTH),se=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Un=I.getParameter(I.UNPACK_SKIP_PIXELS),Gs=I.getParameter(I.UNPACK_SKIP_ROWS),pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const zo=A.isDataArrayTexture||A.isData3DTexture,ve=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const ti=bt.get(A),Bo=bt.get(B),An=bt.get(ti.__renderTarget),ki=bt.get(Bo.__renderTarget);pt.bindFramebuffer(I.READ_FRAMEBUFFER,An.__webglFramebuffer),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ni=0;Ni<Lt;Ni++)zo&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(A).__webglTexture,H,Xt+Ni),A.isDepthTexture?(ve&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(B).__webglTexture,H,me+Ni),I.blitFramebuffer(Dt,Vt,dt,yt,kt,ee,dt,yt,I.DEPTH_BUFFER_BIT,I.NEAREST)):ve?I.copyTexSubImage3D(Ot,H,kt,ee,me+Ni,Dt,Vt,dt,yt):I.copyTexSubImage2D(Ot,H,kt,ee,me+Ni,Dt,Vt,dt,yt);pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ve?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ot,H,kt,ee,me,dt,yt,Lt,rn,ie,_e.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Ot,H,kt,ee,me,dt,yt,Lt,rn,_e.data):I.texSubImage3D(Ot,H,kt,ee,me,dt,yt,Lt,rn,ie,_e):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,kt,ee,dt,yt,rn,ie,_e.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,kt,ee,_e.width,_e.height,rn,_e.data):I.texSubImage2D(I.TEXTURE_2D,H,kt,ee,dt,yt,rn,ie,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,ci),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,se),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Un),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),H===0&&B.generateMipmaps&&I.generateMipmap(Ot),pt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,X=null,q=null,H=0){return A.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,A=arguments[2],B=arguments[3],H=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,X,q,H)},this.initRenderTarget=function(A){bt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),pt.unbindTexture()},this.resetState=function(){b=0,T=0,R=null,pt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class pu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new pu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nv extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ov extends qe{constructor(t=null,e=1,i=1,s,o,r,a,c,l=bn,u=bn,h,f){super(null,r,a,c,l,u,s,o,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vh extends wn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const io=new fe,Wh=new fe,Zr=[],$h=new Os,Uv=new fe,Xo=new V,qo=new vr;class Fv extends V{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Uv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Os),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,io),$h.copy(t.boundingBox).applyMatrix4(io),this.boundingBox.union($h)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,io),qo.copy(t.boundingSphere).applyMatrix4(io),this.boundingSphere.union(qo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(i),t.ray.intersectsSphere(qo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,io),Wh.multiplyMatrices(i,io),Xo.matrixWorld=Wh,Xo.raycast(t,Zr);for(let r=0,a=Zr.length;r<a;r++){const c=Zr[r];c.instanceId=o,c.object=this,e.push(c)}Zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ov(new Float32Array(s*this.count),s,this.count,au,oi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class mu extends qe{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const u=i[s],f=i[s+1]-u,d=(r-u)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new lt:new L);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],o=[],r=[],a=new L,c=new fe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}o[0]=new L,r[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(We(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(We(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gu extends Zn{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zv extends gu{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function xu(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let f=(r-o)/l-(a-o)/(l+u)+(a-r)/u,d=(a-r)/u-(c-r)/(u+h)+(c-a)/h;f*=u,d*=u,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Jr=new L,Dc=new xu,kc=new xu,Nc=new xu;class Bv extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(Jr.subVectors(s[0],s[1]).add(s[0]),l=Jr);const h=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Jr.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Dc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,m),kc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,m),Nc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),kc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Nc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Dc.calc(c),kc.calc(c),Nc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xh(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function Hv(n,t){const e=1-n;return e*e*t}function Gv(n,t){return 2*(1-n)*n*t}function Vv(n,t){return n*n*t}function rr(n,t,e,i){return Hv(n,t)+Gv(n,e)+Vv(n,i)}function Wv(n,t){const e=1-n;return e*e*e*t}function $v(n,t){const e=1-n;return 3*e*e*n*t}function Xv(n,t){return 3*(1-n)*n*n*t}function qv(n,t){return n*n*n*t}function ar(n,t,e,i,s){return Wv(n,t)+$v(n,e)+Xv(n,i)+qv(n,s)}class vp extends Zn{constructor(t=new lt,e=new lt,i=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new lt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ar(t,s.x,o.x,r.x,a.x),ar(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yv extends Zn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ar(t,s.x,o.x,r.x,a.x),ar(t,s.y,o.y,r.y,a.y),ar(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mp extends Zn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jv extends Zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yp extends Zn{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(rr(t,s.x,o.x,r.x),rr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sp extends Zn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(rr(t,s.x,o.x,r.x),rr(t,s.y,o.y,r.y),rr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return i.set(Xh(a,c.x,l.x,u.x,h.x),Xh(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:zv,CatmullRomCurve3:Bv,CubicBezierCurve:vp,CubicBezierCurve3:Yv,EllipseCurve:gu,LineCurve:Mp,LineCurve3:jv,QuadraticBezierCurve:yp,QuadraticBezierCurve3:Sp,SplineCurve:bp});class Kv extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Da[s.type]().fromJSON(s))}return this}}class qh extends Kv{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Mp(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new yp(this.currentPoint.clone(),new lt(t,e),new lt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new vp(this.currentPoint.clone(),new lt(t,e),new lt(i,s),new lt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new bp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new gu(t,e,i,s,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _u extends He{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],u=1/e,h=new L,f=new lt,d=new L,g=new L,x=new L;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){const M=i+_*u*s,v=Math.sin(M),E=Math.cos(M);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*v,h.y=t[b].y,h.z=t[b].x*E,r.push(h.x,h.y,h.z),f.x=_/e,f.y=b/(t.length-1),a.push(f.x,f.y);const T=c[3*b+0]*v,R=c[3*b+1],S=c[3*b+0]*E;l.push(T,R,S)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){const v=M+_*t.length,E=v,b=v+t.length,T=v+t.length+1,R=v+1;o.push(E,b,R),o.push(T,R,b)}this.setIndex(o),this.setAttribute("position",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.points,t.segments,t.phiStart,t.phiLength)}}class Do extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new L,u=new lt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[f]/t+1)/2,u.y=(r[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ne extends He{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=i/2;let p=0;_(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function _(){const v=new L,E=new L;let b=0;const T=(e-t)/i;for(let R=0;R<=o;R++){const S=[],y=R/o,C=y*(e-t)+t;for(let O=0;O<=s;O++){const k=O/s,D=k*c+a,N=Math.sin(D),U=Math.cos(D);E.x=C*N,E.y=-y*i+m,E.z=C*U,h.push(E.x,E.y,E.z),v.set(N,T,U).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-y),S.push(g++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<o;S++){const y=x[S][R],C=x[S+1][R],O=x[S+1][R+1],k=x[S][R+1];(t>0||S!==0)&&(u.push(y,C,k),b+=3),(e>0||S!==o-1)&&(u.push(C,O,k),b+=3)}l.addGroup(p,b,0),p+=b}function M(v){const E=g,b=new lt,T=new L;let R=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const C=g;for(let O=0;O<=s;O++){const D=O/s*c+a,N=Math.cos(D),U=Math.sin(D);T.x=S*U,T.y=m*y,T.z=S*N,h.push(T.x,T.y,T.z),f.push(0,y,0),b.x=N*.5+.5,b.y=U*.5*y+.5,d.push(b.x,b.y),g++}for(let O=0;O<s;O++){const k=E+O,D=C+O;v===!0?u.push(D,D+1,k):u.push(D+1,D,k),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dn extends Ne{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mr extends He{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),l(i),u(),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(o.slice(),3)),this.setAttribute("uv",new Jt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const M=new L,v=new L,E=new L;for(let b=0;b<e.length;b+=3)d(e[b+0],M),d(e[b+1],v),d(e[b+2],E),c(M,v,E,_)}function c(_,M,v,E){const b=E+1,T=[];for(let R=0;R<=b;R++){T[R]=[];const S=_.clone().lerp(v,R/b),y=M.clone().lerp(v,R/b),C=b-R;for(let O=0;O<=C;O++)O===0&&R===b?T[R][O]=S:T[R][O]=S.clone().lerp(y,O/C)}for(let R=0;R<b;R++)for(let S=0;S<2*(b-R)-1;S++){const y=Math.floor(S/2);S%2===0?(f(T[R][y+1]),f(T[R+1][y]),f(T[R][y])):(f(T[R][y+1]),f(T[R+1][y+1]),f(T[R+1][y]))}}function l(_){const M=new L;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(_),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function u(){const _=new L;for(let M=0;M<o.length;M+=3){_.x=o[M+0],_.y=o[M+1],_.z=o[M+2];const v=m(_)/2/Math.PI+.5,E=p(_)/Math.PI+.5;r.push(v,1-E)}g(),h()}function h(){for(let _=0;_<r.length;_+=6){const M=r[_+0],v=r[_+2],E=r[_+4],b=Math.max(M,v,E),T=Math.min(M,v,E);b>.9&&T<.1&&(M<.2&&(r[_+0]+=1),v<.2&&(r[_+2]+=1),E<.2&&(r[_+4]+=1))}}function f(_){o.push(_.x,_.y,_.z)}function d(_,M){const v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const _=new L,M=new L,v=new L,E=new L,b=new lt,T=new lt,R=new lt;for(let S=0,y=0;S<o.length;S+=9,y+=6){_.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),b.set(r[y+0],r[y+1]),T.set(r[y+2],r[y+3]),R.set(r[y+4],r[y+5]),E.copy(_).add(M).add(v).divideScalar(3);const C=m(E);x(b,y+0,_,C),x(T,y+2,M,C),x(R,y+4,v,C)}}function x(_,M,v,E){E<0&&_.x===1&&(r[M]=_.x-1),v.x===0&&v.z===0&&(r[M]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.vertices,t.indices,t.radius,t.details)}}class vu extends Mr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vu(t.radius,t.detail)}}class Fs extends qh{constructor(t){super(t),this.uuid=Po(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new qh().fromJSON(s))}return this}}const Zv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=wp(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,f,d;if(i&&(o=nM(n,t,o,e)),n.length>80*e){a=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return ur(o,r,e,a,c,d,0),r}};function wp(n,t,e,i,s){let o,r;if(s===fM(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Yh(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Yh(o,n[o],n[o+1],r);return r&&Ya(r,r.next)&&(dr(r),r=r.next),r}function Ls(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ya(e,e.next)||be(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ur(n,t,e,i,s,o,r){if(!n)return;!r&&o&&aM(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?Qv(n,i,s,o):Jv(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),dr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=tM(Ls(n),t,e),ur(n,t,e,i,s,o,2)):r===2&&eM(n,t,e,i,s,o):ur(Ls(n),t,e,i,s,o,1);break}}}function Jv(n){const t=n.prev,e=n,i=n.next;if(be(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,u=s<o?s<r?s:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ho(s,a,o,c,r,l,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qv(n,t,e,i){const s=n.prev,o=n,r=n.next;if(be(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,h=o.y,f=r.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=Gl(d,g,t,e,i),_=Gl(x,m,t,e,i);let M=n.prevZ,v=n.nextZ;for(;M&&M.z>=p&&v&&v.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&ho(a,u,c,h,l,f,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&ho(a,u,c,h,l,f,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&ho(a,u,c,h,l,f,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&ho(a,u,c,h,l,f,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tM(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ya(s,o)&&Ep(s,i,i.next,o)&&hr(s,o)&&hr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),dr(i),dr(i.next),i=n=o),i=i.next}while(i!==n);return Ls(i)}function eM(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&uM(r,a)){let c=Tp(r,a);r=Ls(r,r.next),c=Ls(c,c.next),ur(r,t,e,i,s,o,0),ur(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function nM(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=wp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(lM(l));for(s.sort(iM),o=0;o<s.length;o++)e=sM(s[o],e);return e}function iM(n,t){return n.x-t.x}function sM(n,t){const e=oM(n,t);if(!e)return t;const i=Tp(e,n);return Ls(i,i.next),Ls(e,e.next)}function oM(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&ho(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),hr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&rM(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function rM(n,t){return be(n.prev,n,t.prev)<0&&be(t.next,n,n.next)<0}function aM(n,t,e,i){let s=n;do s.z===0&&(s.z=Gl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,cM(s)}function cM(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function Gl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function lM(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ho(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function uM(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!hM(n,t)&&(hr(n,t)&&hr(t,n)&&dM(n,t)&&(be(n.prev,n,t.prev)||be(n,t.prev,t))||Ya(n,t)&&be(n.prev,n,n.next)>0&&be(t.prev,t,t.next)>0)}function be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ya(n,t){return n.x===t.x&&n.y===t.y}function Ep(n,t,e,i){const s=ta(be(n,t,e)),o=ta(be(n,t,i)),r=ta(be(e,i,n)),a=ta(be(e,i,t));return!!(s!==o&&r!==a||s===0&&Qr(n,e,t)||o===0&&Qr(n,i,t)||r===0&&Qr(e,n,i)||a===0&&Qr(e,t,i))}function Qr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ta(n){return n>0?1:n<0?-1:0}function hM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ep(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function hr(n,t){return be(n.prev,n,n.next)<0?be(n,t,n.next)>=0&&be(n,n.prev,t)>=0:be(n,t,n.prev)<0||be(n,n.next,t)<0}function dM(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Tp(n,t){const e=new Vl(n.i,n.x,n.y),i=new Vl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Yh(n,t,e,i){const s=new Vl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fM(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class Ji{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return Ji.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];jh(t),Kh(i,t);let r=t.length;e.forEach(jh);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Kh(i,e[c]);const a=Zv.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function jh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Kh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class yr extends He{constructor(t=new Fs([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:pM;let M,v=!1,E,b,T,R;p&&(M=p.getSpacedPoints(u),v=!0,f=!1,E=p.computeFrenetFrames(u,!1),b=new L,T=new L,R=new L),f||(m=0,d=0,g=0,x=0);const S=a.extractPoints(l);let y=S.shape;const C=S.holes;if(!Ji.isClockWise(y)){y=y.reverse();for(let Q=0,ht=C.length;Q<ht;Q++){const I=C[Q];Ji.isClockWise(I)&&(C[Q]=I.reverse())}}const k=Ji.triangulateShape(y,C),D=y;for(let Q=0,ht=C.length;Q<ht;Q++){const I=C[Q];y=y.concat(I)}function N(Q,ht,I){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ht,I)}const U=y.length,W=k.length;function F(Q,ht,I){let Nt,rt,Et;const pt=Q.x-ht.x,Bt=Q.y-ht.y,bt=I.x-Q.x,P=I.y-Q.y,w=pt*pt+Bt*Bt,$=pt*P-Bt*bt;if(Math.abs($)>Number.EPSILON){const Z=Math.sqrt(w),it=Math.sqrt(bt*bt+P*P),J=ht.x-Bt/Z,It=ht.y+pt/Z,xt=I.x-P/it,wt=I.y+bt/it,Zt=((xt-J)*P-(wt-It)*bt)/(pt*P-Bt*bt);Nt=J+pt*Zt-Q.x,rt=It+Bt*Zt-Q.y;const at=Nt*Nt+rt*rt;if(at<=2)return new lt(Nt,rt);Et=Math.sqrt(at/2)}else{let Z=!1;pt>Number.EPSILON?bt>Number.EPSILON&&(Z=!0):pt<-Number.EPSILON?bt<-Number.EPSILON&&(Z=!0):Math.sign(Bt)===Math.sign(P)&&(Z=!0),Z?(Nt=-Bt,rt=pt,Et=Math.sqrt(w)):(Nt=pt,rt=Bt,Et=Math.sqrt(w/2))}return new lt(Nt/Et,rt/Et)}const K=[];for(let Q=0,ht=D.length,I=ht-1,Nt=Q+1;Q<ht;Q++,I++,Nt++)I===ht&&(I=0),Nt===ht&&(Nt=0),K[Q]=F(D[Q],D[I],D[Nt]);const et=[];let ct,_t=K.concat();for(let Q=0,ht=C.length;Q<ht;Q++){const I=C[Q];ct=[];for(let Nt=0,rt=I.length,Et=rt-1,pt=Nt+1;Nt<rt;Nt++,Et++,pt++)Et===rt&&(Et=0),pt===rt&&(pt=0),ct[Nt]=F(I[Nt],I[Et],I[pt]);et.push(ct),_t=_t.concat(ct)}for(let Q=0;Q<m;Q++){const ht=Q/m,I=d*Math.cos(ht*Math.PI/2),Nt=g*Math.sin(ht*Math.PI/2)+x;for(let rt=0,Et=D.length;rt<Et;rt++){const pt=N(D[rt],K[rt],Nt);tt(pt.x,pt.y,-I)}for(let rt=0,Et=C.length;rt<Et;rt++){const pt=C[rt];ct=et[rt];for(let Bt=0,bt=pt.length;Bt<bt;Bt++){const P=N(pt[Bt],ct[Bt],Nt);tt(P.x,P.y,-I)}}}const ut=g+x;for(let Q=0;Q<U;Q++){const ht=f?N(y[Q],_t[Q],ut):y[Q];v?(T.copy(E.normals[0]).multiplyScalar(ht.x),b.copy(E.binormals[0]).multiplyScalar(ht.y),R.copy(M[0]).add(T).add(b),tt(R.x,R.y,R.z)):tt(ht.x,ht.y,0)}for(let Q=1;Q<=u;Q++)for(let ht=0;ht<U;ht++){const I=f?N(y[ht],_t[ht],ut):y[ht];v?(T.copy(E.normals[Q]).multiplyScalar(I.x),b.copy(E.binormals[Q]).multiplyScalar(I.y),R.copy(M[Q]).add(T).add(b),tt(R.x,R.y,R.z)):tt(I.x,I.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const ht=Q/m,I=d*Math.cos(ht*Math.PI/2),Nt=g*Math.sin(ht*Math.PI/2)+x;for(let rt=0,Et=D.length;rt<Et;rt++){const pt=N(D[rt],K[rt],Nt);tt(pt.x,pt.y,h+I)}for(let rt=0,Et=C.length;rt<Et;rt++){const pt=C[rt];ct=et[rt];for(let Bt=0,bt=pt.length;Bt<bt;Bt++){const P=N(pt[Bt],ct[Bt],Nt);v?tt(P.x,P.y+M[u-1].y,M[u-1].x+I):tt(P.x,P.y,h+I)}}}G(),Y();function G(){const Q=s.length/3;if(f){let ht=0,I=U*ht;for(let Nt=0;Nt<W;Nt++){const rt=k[Nt];mt(rt[2]+I,rt[1]+I,rt[0]+I)}ht=u+m*2,I=U*ht;for(let Nt=0;Nt<W;Nt++){const rt=k[Nt];mt(rt[0]+I,rt[1]+I,rt[2]+I)}}else{for(let ht=0;ht<W;ht++){const I=k[ht];mt(I[2],I[1],I[0])}for(let ht=0;ht<W;ht++){const I=k[ht];mt(I[0]+U*u,I[1]+U*u,I[2]+U*u)}}i.addGroup(Q,s.length/3-Q,0)}function Y(){const Q=s.length/3;let ht=0;ot(D,ht),ht+=D.length;for(let I=0,Nt=C.length;I<Nt;I++){const rt=C[I];ot(rt,ht),ht+=rt.length}i.addGroup(Q,s.length/3-Q,1)}function ot(Q,ht){let I=Q.length;for(;--I>=0;){const Nt=I;let rt=I-1;rt<0&&(rt=Q.length-1);for(let Et=0,pt=u+m*2;Et<pt;Et++){const Bt=U*Et,bt=U*(Et+1),P=ht+Nt+Bt,w=ht+rt+Bt,$=ht+rt+bt,Z=ht+Nt+bt;Tt(P,w,$,Z)}}}function tt(Q,ht,I){c.push(Q),c.push(ht),c.push(I)}function mt(Q,ht,I){At(Q),At(ht),At(I);const Nt=s.length/3,rt=_.generateTopUV(i,s,Nt-3,Nt-2,Nt-1);zt(rt[0]),zt(rt[1]),zt(rt[2])}function Tt(Q,ht,I,Nt){At(Q),At(ht),At(Nt),At(ht),At(I),At(Nt);const rt=s.length/3,Et=_.generateSideWallUV(i,s,rt-6,rt-3,rt-2,rt-1);zt(Et[0]),zt(Et[1]),zt(Et[3]),zt(Et[1]),zt(Et[2]),zt(Et[3])}function At(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function zt(Q){o.push(Q.x),o.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return mM(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Da[s.type]().fromJSON(s)),new yr(i,t.options)}}const pM={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new lt(o,r),new lt(a,c),new lt(l,u)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new lt(r,1-c),new lt(l,1-h),new lt(f,1-g),new lt(x,1-p)]:[new lt(a,1-c),new lt(u,1-h),new lt(d,1-g),new lt(m,1-p)]}};function mM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ka extends Mr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ka(t.radius,t.detail)}}class ko extends Mr{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class No extends He{constructor(t=.5,e=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new L,g=new lt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=o+m/i*r;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const _=p+m,M=_,v=_+i+1,E=_+i+2,b=_+1;a.push(M,v,b),a.push(v,E,b)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mu extends He{constructor(t=new Fs([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(r,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Ji.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];Ji.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=Ji.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){const _=d[m];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){const _=x[m],M=_[0]+h,v=_[1]+h,E=_[2]+h;i.push(M,v,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return gM(e,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];i.push(r)}return new Mu(i,t.curveSegments)}}function gM(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Me extends He{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new L,f=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const _=[],M=p/i;let v=0;p===0&&r===0?v=.5/e:p===i&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const b=E/e;h.x=-t*Math.cos(s+b*o)*Math.sin(r+M*a),h.y=t*Math.cos(r+M*a),h.z=t*Math.sin(s+b*o)*Math.sin(r+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(b+v,1-M),_.push(l++)}u.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const M=u[p][_+1],v=u[p][_],E=u[p+1][_],b=u[p+1][_+1];(p!==0||r>0)&&d.push(M,v,b),(p!==i-1||c<Math.PI)&&d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yn extends He{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new L,h=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const x=g/s*o,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,_=(s+1)*d+g;r.push(x,m,_),r.push(m,p,_)}this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yu extends He{constructor(t=new Sp(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new L,c=new L,l=new lt;let u=new L;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function x(){for(let M=0;M<e;M++)m(M);m(o===!1?e:0),_(),p()}function m(M){u=t.getPointAt(M/e,u);const v=r.normals[M],E=r.binormals[M];for(let b=0;b<=s;b++){const T=b/s*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);c.x=S*v.x+R*E.x,c.y=S*v.y+R*E.y,c.z=S*v.z+R*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const E=(s+1)*(M-1)+(v-1),b=(s+1)*M+(v-1),T=(s+1)*M+v,R=(s+1)*(M-1)+v;g.push(E,b,R),g.push(b,T,R)}}function _(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)l.x=M/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new yu(new Da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jn extends Io{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ln extends Io{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Su extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xM extends Su{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oc=new fe,Zh=new L,Jh=new L;class Ap{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),Oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qh=new fe,Yo=new L,Uc=new L;class _M extends Ap{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Yo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yo),Uc.copy(i.position),Uc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Uc),i.updateMatrixWorld(),s.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class ja extends Su{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _M}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vM extends Ap{constructor(){super(new fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MM extends Su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new vM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);function Qe(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function yM(n,t){let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function ss(n=1337){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function SM(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Na(n,t,e){return t+n()*(e-t)}const Vn=252,As=-Vn,bM=Vn,fr=8.5,pr=-302,qn=112,Oa=-422,Si={x:0,z:-400},wM=6,EM=qn+wM,Gi={...Si},TM=4,Ie={x:0,z:As+TM},bu=26,AM=44,RM=6.2,CM=bu/2+1,td=3,PM=9,IM=30,LM=4.6,DM=Ie.z,bs=34,Fc=Vn,kM=22,ea=8,ed=3.6,NM=bs+26,OM=60,UM=5.2,FM=bs-4,zM=5,BM=As+2,HM=pr-6,GM=30,VM=22,na=fr+1,WM=5,$M=Oa,nd=7.4,Wl=38;function XM(n){const t=n-Si.z;return Math.sqrt(Math.max(1,qn*qn-t*t))}const id=520,go={x:0,z:0,r:14},qM={x:0,z:6},ns={x:17,z:9},YM=5.4,sd={x:ns.x-1.5,z:ns.z+6.2},jM=[{x:-16,z:-6,rot:.35},{x:15,z:-9,rot:-.4},{x:-4,z:-19,rot:.1}],KM=4.6,ZM=[{x:0,z:-40,w:6,d:80},{x:40,z:0,w:80,d:6}],xe={x:-48,z:26,r:26,island:8},JM=1.5,Se={x:-178,z:162,r:80},Ce={x:176,z:-178,r:76},Te={x:186,z:130,r:76},tn={sea:{x:-214,z:206},volc:{x:212,z:-220},ice:{x:224,z:170}},Qi={...tn.sea,r:13},Rp=9,od=11,QM=2.1,ty=1.7;function ey(n){const t=(n+1)/(Rp+1);return{x:Se.x+(Qi.x-Se.x)*t+Math.sin(n*QM)*od,z:Se.z+(Qi.z-Se.z)*t+Math.cos(n*ty)*od}}const ny=[{x:-181.6,z:177.4},{x:-175.704697,z:169.382711},{x:-198.387333,z:164.56522},{x:-192.215047,z:183.757755},{x:-186.599412,z:193.563372},{x:-209.276653,z:181.777869},{x:-202.830146,z:184.943078},{x:-197.496785,z:205.846773},{x:-220.163237,z:207.228744}],$l={min:4.6,max:6.8},iy={count:9,center:Ce,radialFactor:.85,radiusMin:4,radiusMax:10},or={...tn.volc,r:9},Ua=17,sy=10,oy=8,Rs={seaBrokenColumns:{count:5,ringR:9,colliderR:1.3},volcSpires:{count:40,colliderR:1.2},volcArenaSpires:{count:sy,ringR:Ua,colliderR:2},iceSpikes:{count:44,colliderR:1},iceTrees:{count:22,rFactorMin:.3,rFactorMax:1,colliderR:1.3},iceArenaSpires:{count:oy,ringR:Ua,colliderR:1.8},seaReeds:{count:70,rFactorMin:.82,rFactorMax:1.02}},zc={edgeClouds:{count:140,rMin:qn+2,rSpan:24},floatingIslands:{count:16,rMin:34,rSpan:qn-52,yMin:12,ySpan:26},colonnade:{count:28,rFactor:.8,colliderR:1.9}},Ca=34,ry={sea:14,volc:15,ice:15},Bc=48,ay=.3,cy=2.4,ly=4.6,uy=2.9,rd=6,hy=.52,ad=.55;function dy(n,t){return Math.atan2(t.z-n.z,t.x-n.x)}const Cp=[{id:"sea",x:tn.sea.x,z:tn.sea.z,r:Ca,biome:Se},{id:"volc",x:tn.volc.x,z:tn.volc.z,r:Ca,biome:Ce},{id:"ice",x:tn.ice.x,z:tn.ice.z,r:Ca,biome:Te}],Cn=.55,so=.94,fy=34,cd=4.2,py=.4,my=3.4,Xl=[{ax:6,az:4,bx:Se.x*Cn,bz:Se.z*Cn,w:5.5},{ax:Se.x*Cn,az:Se.z*Cn,bx:tn.sea.x*so,bz:tn.sea.z*so,w:5},{ax:6,az:-4,bx:Ce.x*Cn,bz:Ce.z*Cn,w:5.5},{ax:Ce.x*Cn,az:Ce.z*Cn,bx:tn.volc.x*so,bz:tn.volc.z*so,w:5},{ax:10,az:2,bx:Te.x*Cn,bz:Te.z*Cn,w:5.5},{ax:Te.x*Cn,az:Te.z*Cn,bx:tn.ice.x*so,bz:tn.ice.z*so,w:5}],hn={count:430,rMin:20,rSpan:228,wildStart:120,wildSpan:110,treeChanceBase:.74,treeChanceWildPenalty:.62,roadClearHalf:9,lakePad:3,biomePad:6,castlePad:12,pathPad:7},gy=1.3,xy=1.5,Sn={baseSpeed:7.2,sprintMul:1.65,jumpSpeed:9.2,gravity:26,playerRadius:.9,inputDeadzone:.12,landImpactVy:-6,landImpactNorm:22},ld={groundY:-1.1,speedMul:.42},ud={groundY:.45,speedMul:1.6},_y=.001;function Pp(n,t){if(n.z>=As){const l=vy(n.x,-Vn,Vn),u=Math.min(n.z,bM);return l===n.x&&u===n.z?n:{x:l,z:u}}if(t.isPlayer&&!t.gates.heavenOpen)return{x:n.x,z:As};let e=n.x,i=n.z;const s=e-Si.x,o=i-Si.z,r=Math.hypot(s,o),a=Math.abs(e)<=fr&&i>=pr,c=r<=qn;return!a&&!c&&(i>=pr?i=As:r>_y&&(e=Si.x+s/r*qn,i=Si.z+o/r*qn)),t.isPlayer&&!t.gates.innerOpen&&i<Oa&&(i=Oa),e===n.x&&i===n.z?n:{x:e,z:i}}function vy(n,t,e){return n<t?t:n>e?e:n}function Fa(n){return n.z>=As?"mainland":n.z<Oa?"inner":n.z>=pr&&Math.abs(n.x)<=fr?"bridge":"heaven"}function Ip(n,t){return n===t?!0:n==="bridge"||t==="bridge"||n==="heaven"&&t==="inner"||n==="inner"&&t==="heaven"}const Lp=150,Ka={slime:{name:"슬라임",lv:1,hp:34,dmg:6,xp:16,gold:4,color:6474058,scale:.62,speed:3.4,aggro:11,reach:2.2,cd:1.3,hop:!0,model:"buildSlime",ph:2.6},bat:{name:"핏빛 박쥐",lv:3,hp:30,dmg:9,xp:26,gold:8,color:6965888,scale:.9,speed:7.6,aggro:17,reach:2.2,cd:.9,fly:2.6,model:"buildBat",ph:4},goblin:{name:"고블린",lv:4,hp:70,dmg:11,xp:38,gold:11,color:9395913,scale:.85,speed:4.6,aggro:15,reach:2.6,cd:1.1},wolf:{name:"서리 늑대",lv:6,hp:98,dmg:16,xp:62,gold:21,color:6975616,scale:.95,speed:7,aggro:20,reach:2.8,cd:1,model:"buildWolf",ph:3.4},spider:{name:"거대 거미",lv:7,hp:135,dmg:18,xp:78,gold:27,color:3813440,scale:1.1,speed:5.2,aggro:16,reach:2.9,cd:1.2,slow:!0,model:"buildSpider",ph:3.2},golem:{name:"돌 골렘",lv:8,hp:180,dmg:23,xp:112,gold:40,color:9146261,scale:1.45,speed:2.9,aggro:14,reach:3.6,cd:1.7},ghost:{name:"원혼",lv:9,hp:125,dmg:21,xp:98,gold:36,color:12572904,scale:1,speed:4.4,aggro:19,reach:2.6,cd:1.2,fly:1.6,ghost:!0,model:"buildGhost",ph:4.2},skel:{name:"해골 병사",lv:11,hp:270,dmg:29,xp:175,gold:64,color:14209728,scale:1.05,speed:4.4,aggro:16,reach:3,cd:1.1},mage:{name:"다크 메이지",lv:13,hp:215,dmg:35,xp:245,gold:95,color:5909120,scale:1,speed:3.6,aggro:26,reach:20,cd:1.9,ranged:!0},gslime:{name:"황금 슬라임",lv:15,hp:230,dmg:30,xp:330,gold:230,color:16765514,scale:1,speed:5.6,aggro:18,reach:2.6,cd:1,hop:!0},troll:{name:"동굴 트롤",lv:16,hp:650,dmg:44,xp:440,gold:175,color:5929541,scale:1.75,speed:3.4,aggro:16,reach:4,cd:1.6,regen:7},lava:{name:"용암 정령",lv:19,hp:820,dmg:57,xp:660,gold:290,color:16742970,scale:1.3,speed:4.2,aggro:18,reach:3.4,cd:1.3,burn:!0,fly:.8,model:"buildLava",ph:4.4},jelly:{name:"가시 해파리",lv:21,hp:340,dmg:38,xp:520,gold:150,color:9427184,scale:1.15,speed:4,aggro:18,reach:3,cd:1.2,fly:1.4,slow:!0,model:"buildJelly",ph:4.6},crab:{name:"심해 게",lv:23,hp:780,dmg:46,xp:700,gold:210,color:12079162,scale:1.25,speed:4.4,aggro:17,reach:3.4,cd:1.3},hound:{name:"마그마 하운드",lv:25,hp:640,dmg:52,xp:820,gold:250,color:12862490,scale:1.05,speed:8.2,aggro:22,reach:3,cd:.9,burn:!0,model:"buildWolf",ph:3.4},ash:{name:"재의 정령",lv:27,hp:980,dmg:60,xp:1e3,gold:320,color:16742970,scale:1.55,speed:4.4,aggro:19,reach:3.6,cd:1.3,burn:!0,fly:1,model:"buildLava",ph:4.6},icee:{name:"얼음 정령",lv:26,hp:900,dmg:55,xp:900,gold:290,color:11066608,scale:1.35,speed:4.6,aggro:19,reach:3.4,cd:1.2,slow:!0,fly:.9,model:"buildIceElem",ph:4.4},wraith:{name:"눈보라 망령",lv:28,hp:820,dmg:64,xp:1100,gold:360,color:13625590,scale:1.3,speed:5.6,aggro:24,reach:20,cd:1.6,ranged:!0,slow:!0,ghost:!0,fly:2,model:"buildGhost",ph:4.4},levi:{name:"심연의 리바이어던",lv:45,hp:14e3,dmg:130,xp:16e3,gold:9e3,color:1924206,scale:1.5,speed:5.4,aggro:44,reach:26,cd:1.4,ranged:!0,slow:!0,boss:!0,world:!0,rank:"world",unlock:"trident",model:"buildLeviathan",ph:11},magma:{name:"용암의 군주",lv:52,hp:19e3,dmg:165,xp:24e3,gold:14e3,color:16738842,scale:1.35,speed:4.2,aggro:40,reach:6.5,cd:1.6,burn:!0,boss:!0,world:!0,rank:"world",unlock:"magmablade",model:"buildMagmaLord",ph:13},angel:{name:"천사",lv:62,hp:1500,dmg:150,xp:5200,gold:1800,color:15791098,scale:1.25,speed:5,reach:3.4,cd:1.5,model:"buildAngel",kind:"angel",ph:5.6},wangel:{name:"전투천사",lv:68,hp:2600,dmg:200,xp:9e3,gold:3200,color:13620964,scale:1.4,speed:5.4,reach:4.6,cd:1.4,model:"buildWarAngel",kind:"angel",ph:6.4},gabriel:{name:"대천사 가브리엘",lv:78,hp:42e3,dmg:280,xp:7e4,gold:45e3,color:16769162,scale:1.9,speed:5.2,aggro:40,reach:6.5,cd:1.5,boss:!0,world:!0,rank:"world",unlock:"judgement",model:"buildGabriel",kind:"angel",ph:9.5},creator:{name:"조물주",lv:90,hp:9e4,dmg:360,xp:2e5,gold:15e4,color:16774872,scale:1.6,speed:3.4,aggro:46,reach:9,cd:1.8,boss:!0,world:!0,rank:"final",model:"buildCreator",kind:"creator",ph:20},frost:{name:"빙하의 군주",lv:58,hp:24e3,dmg:195,xp:34e3,gold:2e4,color:10474732,scale:1.4,speed:4.6,aggro:42,reach:24,cd:1.5,ranged:!0,slow:!0,boss:!0,world:!0,rank:"world",unlock:"frostspear",model:"buildFrostLord",ph:14},dragon:{name:"고대 드래곤",lv:30,hp:4600,dmg:98,xp:4200,gold:3200,color:6961792,scale:2,speed:5,aggro:34,reach:22,cd:1.5,ranged:!0,burn:!0,boss:!0,rank:"normal",model:"buildDragon",ph:8.5}},My=Ka;function ke(n){return My[n]}function lo(n){return Object.prototype.hasOwnProperty.call(Ka,n)}const Dp=7,kp=24;function yy(n){return n.boss?kp:Dp}const Sy=2.5,by=3,Hc={levi:{name:"해일",color:5232872,ring:6283504},magma:{name:"분화",color:16742954,ring:16751162},frost:{name:"절대영도",color:10479871,ring:12578815}},hd=[.7,.4],wy=4.2,dd=[{x:-214,z:206,r:34},{x:212,z:-220,r:34},{x:224,z:170,r:34}],Ey=3,fd=7,Np=[{type:"slime",x:0,z:-42,r:20,count:7,region:"mainland"},{type:"bat",x:34,z:-58,r:18,count:8,region:"mainland"},{type:"goblin",x:-48,z:-52,r:20,count:6,region:"mainland"},{type:"wolf",x:-18,z:-80,r:20,count:7,region:"mainland"},{type:"spider",x:72,z:-52,r:18,count:6,region:"mainland"},{type:"golem",x:52,z:-14,r:18,count:3,region:"mainland"},{type:"ghost",x:-82,z:-12,r:18,count:6,region:"mainland"},{type:"skel",x:76,z:24,r:20,count:7,region:"mainland"},{type:"mage",x:22,z:-92,r:16,count:5,region:"mainland"},{type:"gslime",x:-48,z:26,r:6,count:3,region:"mainland"},{type:"troll",x:-76,z:-84,r:18,count:4,region:"mainland"},{type:"lava",x:86,z:-86,r:16,count:4,region:"mainland"},{type:"dragon",x:-84,z:78,r:8,count:1,region:"mainland"},{type:"jelly",x:-184,z:158,r:30,count:8,region:"sea"},{type:"crab",x:-164,z:178,r:24,count:6,region:"sea"},{type:"levi",x:-214,z:206,r:3,count:1,region:"sea"},{type:"hound",x:168,z:-172,r:28,count:7,region:"volcano"},{type:"ash",x:188,z:-190,r:24,count:5,region:"volcano"},{type:"magma",x:212,z:-220,r:3,count:1,region:"volcano"},{type:"icee",x:178,z:124,r:28,count:7,region:"ice"},{type:"wraith",x:198,z:142,r:24,count:5,region:"ice"},{type:"frost",x:224,z:170,r:3,count:1,region:"ice"},{type:"wolf",x:-96,z:150,r:34,count:3,region:"mainland"},{type:"spider",x:-150,z:96,r:30,count:2,region:"sea"},{type:"jelly",x:-144,z:120,r:26,count:2,region:"sea"},{type:"crab",x:-196,z:150,r:22,count:2,region:"sea"},{type:"hound",x:132,z:-104,r:32,count:3,region:"mainland"},{type:"golem",x:186,z:-118,r:28,count:2,region:"volcano"},{type:"ash",x:198,z:-186,r:24,count:2,region:"volcano"},{type:"lava",x:150,z:-208,r:22,count:2,region:"volcano"},{type:"icee",x:118,z:158,r:30,count:3,region:"ice"},{type:"wraith",x:196,z:104,r:26,count:2,region:"ice"},{type:"skel",x:214,z:196,r:24,count:2,region:"ice"},{type:"troll",x:-140,z:-140,r:34,count:2,region:"mainland"},{type:"ghost",x:-206,z:-96,r:28,count:2,region:"mainland"},{type:"mage",x:-96,z:-196,r:26,count:2,region:"mainland"},{type:"gslime",x:-186,z:-186,r:22,count:2,region:"mainland"},{type:"dragon",x:206,z:36,r:12,count:2,region:"mainland"},{type:"angel",x:0,z:-344,r:40,count:7,region:"heaven"},{type:"angel",x:-58,z:-400,r:34,count:6,region:"heaven"},{type:"angel",x:58,z:-400,r:34,count:6,region:"heaven"},{type:"wangel",x:0,z:-384,r:30,count:5,region:"heaven"},{type:"wangel",x:-34,z:-446,r:26,count:4,region:"heaven"},{type:"wangel",x:34,z:-446,r:26,count:4,region:"heaven"},{type:"gabriel",x:0,z:-372,r:3,count:1,region:"heaven"},{type:"creator",x:0,z:-472,r:3,count:1,region:"heaven"}];function Op(n,t,e=0){for(let i=0;i<dd.length;i++){const s=dd[i];if(s!==void 0&&Math.hypot(n-s.x,t-s.z)<s.r+e)return s}return null}function Ty(n){return ke(n).world===!0}function Up(n,t){const e=t()*Math.PI*2,i=t()*n.r;return{x:n.x+Math.cos(e)*i,z:n.z+Math.sin(e)*i}}function Ay(n,t=Ey){const e=Op(n.x,n.z,t);if(!e)return n;const i=Math.atan2(n.z-e.z,n.x-e.x)||0;return{x:e.x+Math.cos(i)*(e.r+fd),z:e.z+Math.sin(i)*(e.r+fd)}}function Ry(n,t){const e=Ty(n.type),i=[];for(let s=0;s<n.count;s++){const o=Up(n,t);i.push(e?o:Ay(o))}return i}const Pi={kiwi:{id:"kiwi",name:"키위새",icon:"🥝",desc:"끝내 날지 못했다. 대신 다리가 미쳤다.",stats:"이속 +70% · 공속 2배 · 데미지 55%",skill:"땅파기 — 잠깐 무적, HP 35% 회복",dmgMul:.55,cdMul:.45,spdMul:1.7,jumpMul:.62,goldMul:1,xpMul:1,hpBonus:0,spCd:9,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"creature",showWeapon:!1,col:{shirt:10121800,pants:7033139,skin:11569749}},sword:{id:"sword",name:"검사",icon:"⚔️",desc:"특별한 거 없다. 그래서 강하다.",stats:"데미지 +40% · 최대 HP +50",skill:"회전 베기 — 주변 전체에 2.4배",dmgMul:1.4,cdMul:1,spdMul:1,jumpMul:1,goldMul:1,xpMul:1,hpBonus:50,spCd:8,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!0,col:{shirt:10134706,pants:3818064,skin:15909002}},archer:{id:"archer",name:"궁수",icon:"🏹",desc:"맞기 전에 쏘면 안 맞는다.",stats:"원거리 공격 · 사거리 34",skill:"다중 사격 — 부채꼴 7발",dmgMul:1,cdMul:.8,spdMul:1.1,jumpMul:1,goldMul:1,xpMul:1,hpBonus:-5,spCd:7,ranged:!0,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!1,col:{shirt:4160826,pants:5982766,skin:15909002}},necro:{id:"necro",name:"네크로맨서",icon:"💀",desc:"죽인 걸 다시 부려먹는 게 효율적이다.",stats:"처치 시 45% 확률로 해골 소환 (최대 5)",skill:"망자 소집 — 해골 4체 즉시 소환",dmgMul:.85,cdMul:1,spdMul:1,jumpMul:1,goldMul:1,xpMul:1,hpBonus:-10,spCd:14,ranged:!1,water:!1,raise:.45,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!1,col:{shirt:4926064,pants:2759232,skin:14209728}},fish:{id:"fish",name:"간고등어",icon:"🐟",desc:"물 위를 걷는다. 자반이라 안 젖는다.",stats:"물 위 보행 · 물에서 데미지·이속 +60%, HP 재생",skill:"소금 뿌리기 — 장판 지속 피해",dmgMul:1,cdMul:.9,spdMul:1,jumpMul:1.1,goldMul:1,xpMul:1,hpBonus:20,spCd:8,ranged:!1,water:!0,raise:0,tripleJump:!1,fear:!1,rig:"creature",showWeapon:!1,col:{shirt:9414845,pants:6058887,skin:13228260}},parsley:{id:"parsley",name:"파슬리",icon:"🐸",desc:"부클레 니트로 뜬 개구리 인형. 손바느질 박음선까지 그대로다.",stats:"3단 점프 · 점프력 2.2배",skill:"혀 낚아채기 — 전방 적 전부 끌어당겨 강타",dmgMul:1.15,cdMul:.85,spdMul:1.15,jumpMul:2.2,goldMul:1,xpMul:1,hpBonus:10,spCd:6,ranged:!1,water:!1,raise:0,tripleJump:!0,fear:!1,rig:"creature",showWeapon:!0,col:{shirt:2768762,pants:2768762,skin:6080842}},boss:{id:"boss",name:"최종보스",icon:"👑",desc:"몹이 도망간다. 경험치는 거의 안 준다. 알아서 하세요.",stats:"데미지 2.6배 · 최대 HP +200 · 획득 XP 25%",skill:"멸망 — 반경 15 초토화",dmgMul:2.6,cdMul:1.15,spdMul:.95,jumpMul:1,goldMul:1,xpMul:.25,hpBonus:200,spCd:16,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!0,rig:"hero",showWeapon:!0,col:{shirt:1709600,pants:986388,skin:9117471}},alba:{id:"alba",name:"알바",icon:"🧹",desc:"주 15시간. 4대보험 없음. 골드는 잘 번다.",stats:"골드 3배 · 데미지 70%",skill:"퇴근 — 3초간 무적 + 이속 3배",dmgMul:.7,cdMul:.95,spdMul:1.05,jumpMul:1,goldMul:3,xpMul:1,hpBonus:0,spCd:12,ranged:!1,water:!1,raise:0,tripleJump:!1,fear:!1,rig:"hero",showWeapon:!1,col:{shirt:15262940,pants:3093824,skin:15909002}}},Fp=["kiwi","sword","archer","necro","fish","parsley","boss","alba"],ii={hp:100,level:1,need:60,sp:1,gold:0,xpCoef:60,xpExp:1.42,spPerLevel:1,spBonusEvery:5,spBonusPoints:2};function zp(n){return Math.round(ii.xpCoef*Math.pow(n,ii.xpExp))}function Cy(n){return Pi[n]}function Py(n){return Object.prototype.hasOwnProperty.call(Pi,n)}function Iy(n){return n.skill.split(" —")[0]??n.skill}function Ly(n){return{dmgMul:n.dmgMul,cdMul:n.cdMul,spdMul:n.spdMul,jumpMul:n.jumpMul,goldMul:n.goldMul,xpMul:n.xpMul,hp:n.hpBonus,spCd:n.spCd,...n.ranged?{ranged:!0}:{},...n.water?{water:!0}:{},...n.raise?{raise:n.raise}:{}}}function Oo(n){return Ly(Pi[n])}const ql=["stick","mop","iron","dagger","great","spear","flame","baguette","trident","magmablade","judgement","frostspear"],pd=Object.freeze({radius:4.5,dmgRatio:.45,skipsPrimaryTarget:!0}),ia=-1,Vi={kind:"shop"},Ds={stick:{id:"stick",name:"나무 몽둥이",desc:"마을에서 그냥 주는 것. 없는 것보단 낫다.",price:0,dmg:0,unlock:Vi},mop:{id:"mop",name:"물걸레",desc:"골드 획득 +30%. 알바는 이걸로도 잘 싸운다.",price:200,dmg:4,gold:.3,unlock:Vi},iron:{id:"iron",name:"강철 검",desc:"평범하다. 평범한 게 제일 좋을 때가 있다.",price:600,dmg:14,unlock:Vi},dagger:{id:"dagger",name:"단검",desc:"공격속도 +30% · 크리티컬 +6%",price:1400,dmg:10,atkSpeed:-.3,crit:.06,unlock:Vi},great:{id:"great",name:"대검",desc:"공격속도 -22% · 사거리 +1",price:2600,dmg:38,atkSpeed:.22,reach:1,unlock:Vi},spear:{id:"spear",name:"미스릴 창",desc:"사거리 +2.4. 맞기 전에 찌른다.",price:5200,dmg:52,reach:2.4,unlock:Vi},flame:{id:"flame",name:"화염검",desc:"적중 시 주변에 화염이 번진다.",price:9e3,dmg:82,flame:pd,unlock:Vi},baguette:{id:"baguette",name:"전설의 바게트",desc:"누가 흘리고 간 건지는 모른다. 아직 바삭하다.",price:2e4,dmg:150,atkSpeed:-.1,crit:.15,unlock:Vi},trident:{id:"trident",name:"심연의 삼지창",desc:"바다 밑바닥에서 건져 올린 것. 아직 젖어 있다.",price:ia,dmg:190,reach:3.2,unlock:{kind:"boss",bossId:"levi",bossName:"심연의 리바이어던"}},magmablade:{id:"magmablade",name:"용암의 대검",desc:"식지 않는다. 쥐고 있으면 손이 뜨겁다.",price:ia,dmg:300,atkSpeed:.18,flame:pd,unlock:{kind:"boss",bossId:"magma",bossName:"용암의 군주"}},judgement:{id:"judgement",name:"심판의 대검",desc:"대천사의 검. 빛이 검신을 타고 흐른다.",price:ia,dmg:520,crit:.15,reach:2.4,unlock:{kind:"boss",bossId:"gabriel",bossName:"대천사 가브리엘"}},frostspear:{id:"frostspear",name:"서리의 창",desc:"닿은 자리가 하얗게 언다.",price:ia,dmg:400,crit:.22,reach:2.6,unlock:{kind:"boss",bossId:"frost",bossName:"빙하의 군주"}}},Dy=[{id:"hp",name:"튼튼함",icon:"❤",desc:"최대 HP +${25*r}",max:5,tier:"기초",tierIndex:0,classId:null,effect:{kind:"maxHpFlat",perRank:25},implementedInOriginal:!0},{id:"str",name:"힘",icon:"💪",desc:"공격력 +${6*r}",max:5,tier:"기초",tierIndex:0,classId:null,effect:{kind:"attackFlat",perRank:6},implementedInOriginal:!0},{id:"spd",name:"신속",icon:"💨",desc:"이동속도 +${6*r}%",max:4,tier:"기초",tierIndex:0,classId:null,effect:{kind:"moveSpeedPct",perRank:.06},implementedInOriginal:!0},{id:"luck",name:"행운",icon:"🍀",desc:"골드 획득 +${20*r}%",max:3,tier:"기초",tierIndex:0,classId:null,effect:{kind:"goldGainPct",perRank:.2},implementedInOriginal:!0},{id:"crit",name:"예리함",icon:"🗡",desc:"크리티컬 확률 +${5*r}%",max:4,tier:"숙련",tierIndex:1,req:["str",2],classId:null,effect:{kind:"critChancePct",perRank:.05},implementedInOriginal:!0},{id:"regen",name:"재생",icon:"✚",desc:"초당 HP ${(1.2*r).toFixed(1)} 회복",max:3,tier:"숙련",tierIndex:1,req:["hp",2],classId:null,effect:{kind:"hpRegenPerSec",perRank:1.2},implementedInOriginal:!0},{id:"guard",name:"철벽",icon:"🛡",desc:"받는 피해 -${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["hp",3],classId:null,effect:{kind:"damageReductionPct",perRank:.08},implementedInOriginal:!0},{id:"evade",name:"회피",icon:"🌀",desc:"피격 회피 ${6*r}%",max:3,tier:"숙련",tierIndex:1,req:["spd",2],classId:null,effect:{kind:"evadeChancePct",perRank:.06,cap:.5},implementedInOriginal:!0,implNote:"원본은 Math.min(0.5, …) 상한을 건다. max 3랭크(18%)로는 닿지 않는다."},{id:"greed",name:"탐욕",icon:"💰",desc:"골드 획득 +${18*r}% · 경험치 +${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["luck",2],classId:null,effect:{kind:"composite",parts:[{kind:"goldGainPct",perRank:.18},{kind:"xpGainPct",perRank:.08}]},implementedInOriginal:!0},{id:"vamp",name:"흡혈",icon:"🩸",desc:"준 피해의 ${8*r}% 회복",max:3,tier:"통달",tierIndex:2,req:["crit",1],classId:null,effect:{kind:"lifestealPct",perRank:.08},implementedInOriginal:!0},{id:"brutal",name:"잔혹",icon:"💥",desc:"크리티컬 피해 +${25*r}%",max:4,tier:"통달",tierIndex:2,req:["crit",2],classId:null,effect:{kind:"critDamagePct",perRank:.25},implementedInOriginal:!0},{id:"bulwark",name:"불굴",icon:"🗿",desc:"HP 30% 이하일 때 받는 피해 -${15*r}%",max:3,tier:"통달",tierIndex:2,req:["guard",2],classId:null,effect:{kind:"damageReductionBelowHpPct",perRank:.15,hpThreshold:.3},implementedInOriginal:!1,implNote:'D-2. 원본 전체에서 rk("bulwark") 호출이 0회 — 공용 노드 중 유일한 미구현.'},{id:"swift",name:"질풍",icon:"⚡",desc:"공격속도 +${7*r}%",max:3,tier:"통달",tierIndex:2,req:["evade",2],classId:null,effect:{kind:"attackSpeedPct",perRank:.07},implementedInOriginal:!0},{id:"scholar",name:"현자",icon:"📖",desc:"경험치 획득 +${15*r}%",max:3,tier:"통달",tierIndex:2,req:["greed",1],classId:null,effect:{kind:"xpGainPct",perRank:.15},implementedInOriginal:!0},{id:"awake",name:"각성",icon:"✨",desc:"특수기 쿨타임 -${12*r}%",max:3,tier:"통달",tierIndex:2,classId:null,requiresAnyClass:!0,effect:{kind:"specialCooldownPct",perRank:.12},implementedInOriginal:!0,implNote:"원본 cReq:true — 직업 미선택 시 잠김(skState 2363)."},{id:"apex",name:"정점",icon:"👑",desc:"모든 능력치 +8% · 특수기 쿨타임 -15%",max:1,tier:"궁극",tierIndex:3,req:["awake",2],classId:null,cap:!0,effect:{kind:"composite",parts:[{kind:"allStatsPct",perRank:.08},{kind:"specialCooldownPct",perRank:.15}]},implementedInOriginal:!0,implNote:"AX(=1+0.08) 는 maxHp·dmg·spdB 에만 곱해진다. crit/guard/cdB 등에는 안 들어간다."}],ky=[{id:"dash",name:"질주",icon:"🏃",desc:"이동속도 +${12*r}%",max:3,tier:"기초",tierIndex:0,classId:"kiwi",effect:{kind:"moveSpeedPct",perRank:.12},implementedInOriginal:!0},{id:"peck",name:"부리 연타",icon:"🐦",desc:"공격속도 +${10*r}%",max:3,tier:"기초",tierIndex:0,classId:"kiwi",effect:{kind:"attackSpeedPct",perRank:.1},implementedInOriginal:!0},{id:"dig",name:"굴 파기",icon:"⛏",desc:"땅파기 회복 +${15*r}%p · 무적 +${(0.4*r).toFixed(1)}초",max:3,tier:"숙련",tierIndex:1,req:["dash",1],classId:"kiwi",effect:{kind:"composite",parts:[{kind:"specialHealPctBonus",perRank:.15},{kind:"specialInvulBonusSec",perRank:.4}]},implementedInOriginal:!0},{id:"glide",name:"활공",icon:"🪶",desc:"점프 높이 +${12*r}% · 낙하 속도 -${10*r}%",max:3,tier:"숙련",tierIndex:1,req:["dash",2],classId:"kiwi",effect:{kind:"composite",parts:[{kind:"jumpHeightPct",perRank:.12},{kind:"fallSpeedReductionPct",perRank:.1}]},implementedInOriginal:!0,implNote:"점프 높이만 구현. 낙하 속도 감소는 원본 물리에 없다."},{id:"flock",name:"무리 본능",icon:"🐤",desc:"주변 적 ${r}명당 공격력 +${5*r}%",max:3,tier:"통달",tierIndex:2,req:["peck",2],classId:"kiwi",effect:{kind:"attackPctPerNearbyEnemy",perRank:.05,enemyCountPerRank:1},implementedInOriginal:!1,implNote:"D-2. 설명상 묶음 크기(r명)와 배율(5r%)이 둘 다 랭크에 비례한다 — 구현 전 원저작자 확인 필요."},{id:"sprint",name:"폭주",icon:"🌪",desc:"달리기 중 공격력 +${15*r}%",max:3,tier:"통달",tierIndex:2,req:["glide",1],classId:"kiwi",effect:{kind:"attackPctWhileSprinting",perRank:.15},implementedInOriginal:!1,implNote:"D-2. 원본에 달리기 판정(tick 5724 sprint)은 있으나 이 노드와 연결되지 않았다."},{id:"kiwiX",name:"거대 키위",icon:"🥝",desc:"모든 이동 관련 효과 2배 · 이단 점프 해금",max:1,tier:"궁극",tierIndex:3,req:["sprint",2],classId:"kiwi",cap:!0,effect:{kind:"composite",parts:[{kind:"movementEffectMultiplier",value:2},{kind:"extraJumpFlat",perRank:1}]},implementedInOriginal:!0,implNote:"2배가 적용되는 것은 dash 뿐이다. spd·curr 은 그대로다. 이단 점프는 구현됨."},{id:"rage",name:"광폭화",icon:"😡",desc:"HP 50% 이하일 때 공격력 +${20*r}%",max:3,tier:"기초",tierIndex:0,classId:"sword",effect:{kind:"attackPctBelowHp",perRank:.2,hpThreshold:.5},implementedInOriginal:!0},{id:"plate",name:"중갑",icon:"🛡",desc:"최대 HP +${35*r}",max:3,tier:"기초",tierIndex:0,classId:"sword",effect:{kind:"maxHpFlat",perRank:35},implementedInOriginal:!0},{id:"whirl",name:"대회전",icon:"🌀",desc:"회전 베기 반경 +${1.5*r} · 피해 +${30*r}%",max:3,tier:"숙련",tierIndex:1,req:["rage",1],classId:"sword",effect:{kind:"composite",parts:[{kind:"specialRadiusFlat",perRank:1.5},{kind:"specialDamagePct",perRank:.3}]},implementedInOriginal:!0},{id:"parry",name:"받아넘기기",icon:"⚔",desc:"받는 피해 -${7*r}% · 반사 ${10*r}%",max:3,tier:"숙련",tierIndex:1,req:["plate",2],classId:"sword",effect:{kind:"composite",parts:[{kind:"damageReductionPct",perRank:.07},{kind:"reflectPct",perRank:.1}]},implementedInOriginal:!0,implNote:"반쪽 구현. P.reflect(2333)는 대입만 되고 어디서도 읽히지 않아 반사 효과는 무효다."},{id:"cleave",name:"참격",icon:"🩸",desc:"공격이 뒤쪽 적에게 ${25*r}% 피해",max:3,tier:"통달",tierIndex:2,req:["whirl",2],classId:"sword",effect:{kind:"rearSplashPct",perRank:.25},implementedInOriginal:!1,implNote:"D-2. doAttack 은 전방 판정(fwd.dot ≥ 0.15)만 한다."},{id:"temper",name:"단련",icon:"🔨",desc:"무기 공격력 +${12*r}%",max:3,tier:"통달",tierIndex:2,req:["parry",1],classId:"sword",effect:{kind:"weaponAttackPct",perRank:.12},implementedInOriginal:!0,implNote:"원본은 무기 데미지가 아니라 총 공격력 배수로 적용한다(맨손에도 붙는다)."},{id:"swordX",name:"검성",icon:"🗡",desc:"3연타 마무리가 광역 폭발 · 콤보 피해 +40%",max:1,tier:"궁극",tierIndex:3,req:["cleave",2],classId:"sword",cap:!0,effect:{kind:"composite",parts:[{kind:"comboFinisherExplosion"},{kind:"comboDamagePct",perRank:.4}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나. 콤보 시스템(P.combo)은 존재한다."},{id:"pierce",name:"관통",icon:"➶",desc:"화살이 적 ${r}명 더 관통",max:3,tier:"기초",tierIndex:0,classId:"archer",effect:{kind:"pierceCountFlat",perRank:1},implementedInOriginal:!0},{id:"rapid",name:"속사",icon:"⚡",desc:"공격속도 +${12*r}%",max:3,tier:"기초",tierIndex:0,classId:"archer",effect:{kind:"attackSpeedPct",perRank:.12},implementedInOriginal:!0},{id:"volley",name:"화살비",icon:"🌧",desc:"다중 사격 +${2*r}발",max:3,tier:"숙련",tierIndex:1,req:["rapid",1],classId:"archer",effect:{kind:"specialProjectileFlat",perRank:2},implementedInOriginal:!0},{id:"snipe",name:"저격",icon:"🎯",desc:"먼 적일수록 피해 +최대 ${20*r}%",max:3,tier:"숙련",tierIndex:1,req:["pierce",2],classId:"archer",effect:{kind:"attackPctByDistance",perRank:.2},implementedInOriginal:!1,implNote:"D-2."},{id:"venom",name:"맹독시",icon:"🧪",desc:"화살에 초당 ${4*r} 중독 피해",max:3,tier:"통달",tierIndex:2,req:["snipe",1],classId:"archer",effect:{kind:"poisonDps",perRank:4},implementedInOriginal:!1,implNote:"D-2. 몹 지속 피해 틀(burnT)은 플레이어 쪽에만 있고 몹에는 없다."},{id:"kite",name:"견제",icon:"🪁",desc:"공격 후 이동속도 +${14*r}% (2초)",max:3,tier:"통달",tierIndex:2,req:["volley",2],classId:"archer",effect:{kind:"moveSpeedAfterAttackPct",perRank:.14,durationSec:2},implementedInOriginal:!1,implNote:"D-2."},{id:"archX",name:"폭풍의 궁",icon:"🏹",desc:"화살이 모두 관통 · 사격 속도 +50%",max:1,tier:"궁극",tierIndex:3,req:["venom",2],classId:"archer",cap:!0,effect:{kind:"composite",parts:[{kind:"pierceAll"},{kind:"attackSpeedPct",perRank:.5}]},implementedInOriginal:!0,implNote:'반쪽 구현. 관통은 미적용(4439 는 rk("pierce")만 본다). 속도는 P.cdB ×0.5 라 설명(+50%)보다 큰 실질 +100%.'},{id:"legion",name:"군단",icon:"💀",desc:"해골 최대치 +${2*r}",max:3,tier:"기초",tierIndex:0,classId:"necro",effect:{kind:"minionCapFlat",perRank:2},implementedInOriginal:!0},{id:"bone",name:"백골 강화",icon:"🦴",desc:"해골 공격력 +${25*r}%",max:3,tier:"기초",tierIndex:0,classId:"necro",effect:{kind:"minionDamagePct",perRank:.25},implementedInOriginal:!0},{id:"rite",name:"강령술",icon:"🕯",desc:"소환 확률 +${15*r}%p",max:3,tier:"숙련",tierIndex:1,req:["legion",1],classId:"necro",effect:{kind:"summonChancePct",perRank:.15},implementedInOriginal:!0},{id:"curse",name:"저주",icon:"🌑",desc:"적 방어 -${12*r}% · 이동속도 -${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["bone",2],classId:"necro",effect:{kind:"composite",parts:[{kind:"enemyDefenseReductionPct",perRank:.12},{kind:"enemySlowPct",perRank:.08}]},implementedInOriginal:!1,implNote:"D-2. 몹에 방어력 개념 자체가 없다(MOBTYPES 에 def 필드 없음)."},{id:"harvest",name:"영혼 수확",icon:"👻",desc:"처치 시 HP +${8*r} · 해골 즉시 소환 ${10*r}%",max:3,tier:"통달",tierIndex:2,req:["rite",2],classId:"necro",effect:{kind:"composite",parts:[{kind:"healOnKillFlat",perRank:8},{kind:"summonOnKillChancePct",perRank:.1}]},implementedInOriginal:!1,implNote:"D-2. 같은 killMob 안에 feast/rite 는 있는데 harvest 만 빠졌다."},{id:"plague",name:"역병",icon:"☠",desc:"저주가 주변 ${(1.5*r).toFixed(1)}칸 적에게 전염",max:3,tier:"통달",tierIndex:2,req:["curse",1],classId:"necro",effect:{kind:"curseSpreadRadius",perRank:1.5},implementedInOriginal:!1,implNote:"D-2. 선행 노드 curse 자체가 미구현이라 연쇄로 무효다."},{id:"necroX",name:"사령왕",icon:"👑",desc:"해골이 죽으면 즉시 재소환 · 군단 +4",max:1,tier:"궁극",tierIndex:3,req:["harvest",2],classId:"necro",cap:!0,effect:{kind:"composite",parts:[{kind:"minionInstantRevive"},{kind:"minionCapFlat",perRank:4}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나."},{id:"brine",name:"염장",icon:"🧂",desc:"소금 장판 지속 +${2*r}초 · 피해 +${25*r}%",max:3,tier:"기초",tierIndex:0,classId:"fish",effect:{kind:"composite",parts:[{kind:"specialDurationSec",perRank:2},{kind:"specialDamagePct",perRank:.25}]},implementedInOriginal:!0},{id:"curr",name:"회유",icon:"🌊",desc:"뭍에서 이동속도 +${10*r}%",max:3,tier:"기초",tierIndex:0,classId:"fish",effect:{kind:"moveSpeedOnLandPct",perRank:.1},implementedInOriginal:!0,implNote:'이중 적용. recalc 의 P.spdB 에 들어간 뒤 tick 5727 에서 한 번 더 곱해진다. 또 원본은 "뭍에서"가 아니라 항상 적용된다.'},{id:"cure",name:"자반 숙성",icon:"🐟",desc:"물속 데미지 보너스 +${20*r}%p",max:3,tier:"숙련",tierIndex:1,req:["brine",1],classId:"fish",effect:{kind:"waterDamageBonusPct",perRank:.2},implementedInOriginal:!0},{id:"scale",name:"비늘 갑주",icon:"🛡",desc:"받는 피해 -${9*r}% · 물속에서 2배",max:3,tier:"숙련",tierIndex:1,req:["curr",2],classId:"fish",effect:{kind:"damageReductionPct",perRank:.09,doubledInWater:!0},implementedInOriginal:!0,implNote:"반쪽 구현. 물속 2배 조건이 없어 항상 -9%/랭크로만 동작한다."},{id:"tide",name:"밀물",icon:"💧",desc:"물 밖에서도 초당 HP ${(0.8*r).toFixed(1)} 회복",max:3,tier:"통달",tierIndex:2,req:["cure",2],classId:"fish",effect:{kind:"hpRegenPerSec",perRank:.8},implementedInOriginal:!0},{id:"splash",name:"파도치기",icon:"🌀",desc:"착지 시 주변 ${(2+r).toFixed(0)}칸에 ${20*r} 피해",max:3,tier:"통달",tierIndex:2,req:["scale",1],classId:"fish",effect:{kind:"landingAoeDamage",damagePerRank:20,radiusBase:2,radiusPerRank:1},implementedInOriginal:!1,implNote:"D-2. 착지 판정(P.landT)은 있으나 피해가 붙지 않는다."},{id:"fishX",name:"심해의 왕",icon:"🔱",desc:"항상 물속 판정 · 모든 물 효과 2배",max:1,tier:"궁극",tierIndex:3,req:["tide",2],classId:"fish",cap:!0,effect:{kind:"composite",parts:[{kind:"alwaysConsideredInWater"},{kind:"waterEffectMultiplier",value:2}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나. inWater() 판정에 손대지 않는다."},{id:"hop",name:"개구리 다리",icon:"🐸",desc:"점프 ${r}단 추가",max:3,tier:"기초",tierIndex:0,classId:"parsley",effect:{kind:"extraJumpFlat",perRank:1},implementedInOriginal:!0},{id:"tong",name:"긴 혀",icon:"👅",desc:"혀 사거리 +${6*r} · 피해 +${30*r}%",max:3,tier:"기초",tierIndex:0,classId:"parsley",effect:{kind:"composite",parts:[{kind:"specialRangeFlat",perRank:6},{kind:"specialDamagePct",perRank:.3}]},implementedInOriginal:!0},{id:"bag",name:"바게트 숙성",icon:"🥖",desc:"근접 공격력 +${12*r}%",max:3,tier:"숙련",tierIndex:1,req:["tong",1],classId:"parsley",effect:{kind:"meleeAttackPct",perRank:.12},implementedInOriginal:!0,implNote:"이중 적용. recalc 과 doAttack 양쪽에서 곱해져 표기의 약 2배로 동작한다."},{id:"plush",name:"솜뭉치",icon:"🧸",desc:"최대 HP +${30*r} · 낙하 피해 무효",max:3,tier:"숙련",tierIndex:1,req:["hop",2],classId:"parsley",effect:{kind:"composite",parts:[{kind:"maxHpFlat",perRank:30},{kind:"fallDamageImmune"}]},implementedInOriginal:!0,implNote:"원본에는 낙하 피해 자체가 없어 두 번째 효과는 공허하다."},{id:"herb",name:"허브 향",icon:"🌿",desc:"주변 ${(3+r).toFixed(0)}칸 적 공격력 -${10*r}%",max:3,tier:"통달",tierIndex:2,req:["bag",2],classId:"parsley",effect:{kind:"enemyAttackReductionAura",perRank:.1,radiusBase:3,radiusPerRank:1},implementedInOriginal:!1,implNote:"D-2."},{id:"bounce",name:"통통",icon:"🎈",desc:"점프 착지 시 ${25*r} 광역 피해",max:3,tier:"통달",tierIndex:2,req:["plush",1],classId:"parsley",effect:{kind:"landingAoeDamage",damagePerRank:25},implementedInOriginal:!1,implNote:"D-2. 원본이 반경을 명시하지 않았다 — splash(2+r칸)를 참고해 정해야 한다."},{id:"parsX",name:"전설의 파슬리",icon:"👑",desc:"혀가 적을 끌어당김 · 모든 피해 +30%",max:1,tier:"궁극",tierIndex:3,req:["herb",2],classId:"parsley",cap:!0,effect:{kind:"composite",parts:[{kind:"specialPullsEnemies"},{kind:"allDamagePct",perRank:.3}]},implementedInOriginal:!0,implNote:"끌어당김은 파슬리 특수기의 기본 동작(4536)이라 이 노드가 추가하는 것은 피해 +30% 뿐이다."},{id:"dread",name:"공포",icon:"😱",desc:"적 이동속도 -${12*r}%",max:3,tier:"기초",tierIndex:0,classId:"boss",effect:{kind:"enemySlowPct",perRank:.12},implementedInOriginal:!0},{id:"feast",name:"포식",icon:"🍖",desc:"처치 시 HP +${12*r}",max:3,tier:"기초",tierIndex:0,classId:"boss",effect:{kind:"healOnKillFlat",perRank:12},implementedInOriginal:!0},{id:"doom",name:"대멸망",icon:"💀",desc:"멸망 반경 +${4*r} · 피해 +${30*r}%",max:3,tier:"숙련",tierIndex:1,req:["dread",1],classId:"boss",effect:{kind:"composite",parts:[{kind:"specialRadiusFlat",perRank:4},{kind:"specialDamagePct",perRank:.3}]},implementedInOriginal:!0},{id:"tyrant",name:"폭군",icon:"👑",desc:"최대 HP +${45*r} · 공격력 +${8*r}%",max:3,tier:"숙련",tierIndex:1,req:["feast",2],classId:"boss",effect:{kind:"composite",parts:[{kind:"maxHpFlat",perRank:45},{kind:"attackPct",perRank:.08}]},implementedInOriginal:!0},{id:"abyss",name:"심연",icon:"🌑",desc:"받는 피해 -${10*r}% · 처치 시 무적 ${(0.3*r).toFixed(1)}초",max:3,tier:"통달",tierIndex:2,req:["doom",2],classId:"boss",effect:{kind:"composite",parts:[{kind:"damageReductionPct",perRank:.1},{kind:"invulOnKillSec",perRank:.3}]},implementedInOriginal:!0,implNote:"반쪽 구현. 처치 시 무적은 killMob 어디에도 없다."},{id:"wrath",name:"진노",icon:"🔥",desc:"HP가 낮을수록 공격력 최대 +${25*r}%",max:3,tier:"통달",tierIndex:2,req:["tyrant",1],classId:"boss",effect:{kind:"attackPctByMissingHp",perRank:.25},implementedInOriginal:!1,implNote:"D-2. 검사 rage 와 달리 연속 스케일링이라 별도 구현이 필요하다."},{id:"bossX",name:"종말",icon:"☄",desc:"멸망이 즉시 재사용 가능 · 피해 2배",max:1,tier:"궁극",tierIndex:3,req:["abyss",2],classId:"boss",cap:!0,effect:{kind:"composite",parts:[{kind:"specialCooldownReset"},{kind:"specialDamageMultiplier",value:2}]},implementedInOriginal:!1,implNote:"D-2. 궁극 노드 미구현 4종 중 하나."},{id:"wage",name:"시급 인상",icon:"💵",desc:"골드 획득 +${25*r}%",max:3,tier:"기초",tierIndex:0,classId:"alba",effect:{kind:"goldGainPct",perRank:.25},implementedInOriginal:!0},{id:"grit",name:"짬",icon:"😤",desc:"공격력 +${10*r}%",max:3,tier:"기초",tierIndex:0,classId:"alba",effect:{kind:"attackPct",perRank:.1},implementedInOriginal:!0,implNote:"이중 적용. recalc 과 doAttack 양쪽에서 곱해져 표기의 약 2배로 동작한다."},{id:"shift",name:"주휴수당",icon:"📅",desc:"퇴근 지속 +${r}초 · 종료 시 HP +${15*r}",max:3,tier:"숙련",tierIndex:1,req:["wage",1],classId:"alba",effect:{kind:"composite",parts:[{kind:"specialDurationSec",perRank:1},{kind:"healOnSpecialEndFlat",perRank:15}]},implementedInOriginal:!0,implNote:'원본은 "종료 시"가 아니라 특수기 발동 즉시 회복시킨다(4558).'},{id:"mop",name:"물걸레질",icon:"🧹",desc:"공격이 ${(1+0.5*r).toFixed(1)}칸 범위로 확장",max:3,tier:"숙련",tierIndex:1,req:["grit",2],classId:"alba",effect:{kind:"attackRangeFlat",base:1,perRank:.5},implementedInOriginal:!1,implNote:'D-2. 같은 이름의 무기 "물걸레"(WEAPONS 4568)와 혼동하지 말 것. 스킬 쪽은 무효다.'},{id:"bonus",name:"성과급",icon:"🎁",desc:"처치 시 ${8*r}% 확률로 골드 2배",max:3,tier:"통달",tierIndex:2,req:["shift",2],classId:"alba",effect:{kind:"goldDoubleChanceOnKill",perRank:.08},implementedInOriginal:!1,implNote:"D-2."},{id:"union",name:"노조",icon:"✊",desc:"받는 피해 -${8*r}% · HP 회복 +${15*r}%",max:3,tier:"통달",tierIndex:2,req:["mop",1],classId:"alba",effect:{kind:"composite",parts:[{kind:"damageReductionPct",perRank:.08},{kind:"healingReceivedPct",perRank:.15}]},implementedInOriginal:!0,implNote:"반쪽 구현. HP 회복량 증가는 코드에 없다."},{id:"albaX",name:"점장 승진",icon:"👔",desc:"골드 획득 3배 · 퇴근 쿨타임 절반",max:1,tier:"궁극",tierIndex:3,req:["bonus",2],classId:"alba",cap:!0,effect:{kind:"composite",parts:[{kind:"goldGainMultiplier",value:3},{kind:"specialCooldownMultiplier",value:.5}]},implementedInOriginal:!0}],Gc=["기초","숙련","통달","궁극"],Bp=["hp","str","spd","luck","crit","regen","guard","evade","greed","vamp","brutal","bulwark","swift","scholar","awake","apex","dash","peck","dig","glide","flock","sprint","kiwiX","rage","plate","whirl","parry","cleave","temper","swordX","pierce","rapid","volley","snipe","venom","kite","archX","legion","bone","rite","curse","harvest","plague","necroX","brine","curr","cure","scale","tide","splash","fishX","hop","tong","bag","plush","herb","bounce","parsX","dread","feast","doom","tyrant","abyss","wrath","bossX","wage","grit","shift","mop","bonus","union","albaX"];function mr(n){return Bp.includes(n)}const Sr=[...Dy,...ky];new Map(Sr.map(n=>[n.id,n]));Sr.filter(n=>!n.implementedInOriginal).map(n=>n.id);function Ny(n){throw new Error(`미처리 스킬 효과: ${JSON.stringify(n)}`)}const Oy=2,Uy=4.4,Fy=73.6,zy=new Set(["archX"]),By=new Set(["dash"]);function Hy(){return{maxHpFlat:0,attackFlat:0,attackGeneralPct:0,attackMeleePct:0,attackWeaponPct:0,attackAllDamagePct:0,allStatsPct:0,critChance:0,critDamage:0,lifesteal:0,hpRegenPerSec:0,goldGainPct:0,goldGainMul:1,xpGainPct:0,evadeSum:0,evadeCap:Number.POSITIVE_INFINITY,moveSpeedPct:0,moveSpeedOnLandPct:0,moveSpeedDoubledPortion:0,movementEffectMul:1,damageReductionPct:0,damageReductionPctWaterExtra:0,reflectPct:0,attackSpeedPct:0,attackCooldownMul:1,specialCooldownPct:0,specialCooldownMul:1,jumpHeightPct:0,extraJumps:0,belowHpGuardPct:0,belowHpGuardThreshold:0,belowHpAtkPct:0,belowHpAtkThreshold:0,attackPctByMissingHp:0,attackPctByDistance:0,attackPctWhileSprinting:0,nearbyEnemyPct:0,nearbyEnemyPer:0,comboDamagePct:0,rearSplashPct:0,attackRangeFlat:0,moveSpeedAfterAttackPct:0,moveSpeedAfterAttackSec:0,alwaysInWater:!1,waterDamageBonusPct:0,waterEffectMul:1,fallSpeedReductionPct:0,fallDamageImmune:!1,healingReceivedPct:0,healOnKillFlat:0,invulOnKillSec:0,summonChancePct:0,summonOnKillChancePct:0,goldDoubleChanceOnKill:0,landingAoeDamage:0,landingAoeRadius:0,poisonDps:0,enemySlowPct:0,enemyDefenseReductionPct:0,enemyAuraPct:0,enemyAuraRadius:0,curseSpreadRadius:0,minionCapFlat:0,minionDamagePct:0,minionInstantRevive:!1,pierceCount:0,pierceAll:!1,specialDamagePct:0,specialDamageMul:1,specialCooldownReset:!1,specialRadiusFlat:0,specialRangeFlat:0,specialDurationSec:0,specialInvulBonusSec:0,specialHealPctBonus:0,specialProjectileFlat:0,specialPullsEnemies:!1,healOnSpecialEndFlat:0,comboFinisherExplosion:!1}}function Hp(n,t,e,i){switch(t.kind){case"maxHpFlat":n.maxHpFlat+=t.perRank*e;break;case"attackFlat":n.attackFlat+=t.perRank*e;break;case"attackPct":n.attackGeneralPct+=t.perRank*e;break;case"meleeAttackPct":n.attackMeleePct+=t.perRank*e;break;case"weaponAttackPct":n.attackWeaponPct+=t.perRank*e;break;case"allDamagePct":n.attackAllDamagePct+=t.perRank*e;break;case"allStatsPct":n.allStatsPct+=t.perRank*e;break;case"critChancePct":n.critChance+=t.perRank*e;break;case"critDamagePct":n.critDamage+=t.perRank*e;break;case"attackSpeedPct":zy.has(i)?n.attackCooldownMul*=1-t.perRank*e:n.attackSpeedPct+=t.perRank*e;break;case"moveSpeedPct":n.moveSpeedPct+=t.perRank*e,By.has(i)&&(n.moveSpeedDoubledPortion+=t.perRank*e);break;case"moveSpeedOnLandPct":n.moveSpeedOnLandPct+=t.perRank*e;break;case"moveSpeedAfterAttackPct":n.moveSpeedAfterAttackPct+=t.perRank*e,n.moveSpeedAfterAttackSec=Math.max(n.moveSpeedAfterAttackSec,t.durationSec);break;case"jumpHeightPct":n.jumpHeightPct+=t.perRank*e;break;case"fallSpeedReductionPct":n.fallSpeedReductionPct+=t.perRank*e;break;case"extraJumpFlat":n.extraJumps+=t.perRank*e;break;case"hpRegenPerSec":n.hpRegenPerSec+=t.perRank*e;break;case"lifestealPct":n.lifesteal+=t.perRank*e;break;case"damageReductionPct":n.damageReductionPct+=t.perRank*e,t.doubledInWater===!0&&(n.damageReductionPctWaterExtra+=t.perRank*e);break;case"damageReductionBelowHpPct":n.belowHpGuardPct+=t.perRank*e,n.belowHpGuardThreshold=Math.max(n.belowHpGuardThreshold,t.hpThreshold);break;case"reflectPct":n.reflectPct+=t.perRank*e;break;case"evadeChancePct":n.evadeSum+=t.perRank*e,n.evadeCap=Math.min(n.evadeCap,t.cap);break;case"healingReceivedPct":n.healingReceivedPct+=t.perRank*e;break;case"invulOnKillSec":n.invulOnKillSec+=t.perRank*e;break;case"fallDamageImmune":n.fallDamageImmune=!0;break;case"attackPctBelowHp":n.belowHpAtkPct+=t.perRank*e,n.belowHpAtkThreshold=Math.max(n.belowHpAtkThreshold,t.hpThreshold);break;case"attackPctByMissingHp":n.attackPctByMissingHp+=t.perRank*e;break;case"attackPctByDistance":n.attackPctByDistance+=t.perRank*e;break;case"attackPctWhileSprinting":n.attackPctWhileSprinting+=t.perRank*e;break;case"attackPctPerNearbyEnemy":n.nearbyEnemyPct+=t.perRank*e,n.nearbyEnemyPer=Math.max(n.nearbyEnemyPer,t.enemyCountPerRank*e);break;case"rearSplashPct":n.rearSplashPct+=t.perRank*e;break;case"attackRangeFlat":n.attackRangeFlat+=t.base+t.perRank*e;break;case"goldGainPct":n.goldGainPct+=t.perRank*e;break;case"goldGainMultiplier":n.goldGainMul*=t.value;break;case"goldDoubleChanceOnKill":n.goldDoubleChanceOnKill+=t.perRank*e;break;case"xpGainPct":n.xpGainPct+=t.perRank*e;break;case"healOnKillFlat":n.healOnKillFlat+=t.perRank*e;break;case"enemySlowPct":n.enemySlowPct+=t.perRank*e;break;case"enemyDefenseReductionPct":n.enemyDefenseReductionPct+=t.perRank*e;break;case"enemyAttackReductionAura":n.enemyAuraPct+=t.perRank*e,n.enemyAuraRadius=Math.max(n.enemyAuraRadius,t.radiusBase+t.radiusPerRank*e);break;case"poisonDps":n.poisonDps+=t.perRank*e;break;case"curseSpreadRadius":n.curseSpreadRadius+=t.perRank*e;break;case"waterDamageBonusPct":n.waterDamageBonusPct+=t.perRank*e;break;case"waterEffectMultiplier":n.waterEffectMul*=t.value;break;case"alwaysConsideredInWater":n.alwaysInWater=!0;break;case"landingAoeDamage":{n.landingAoeDamage+=t.damagePerRank*e;const s=t.radiusBase===void 0?Oy:t.radiusBase+(t.radiusPerRank??0)*e;n.landingAoeRadius=Math.max(n.landingAoeRadius,s);break}case"pierceCountFlat":n.pierceCount+=t.perRank*e;break;case"pierceAll":n.pierceAll=!0;break;case"minionCapFlat":n.minionCapFlat+=t.perRank*e;break;case"minionDamagePct":n.minionDamagePct+=t.perRank*e;break;case"minionInstantRevive":n.minionInstantRevive=!0;break;case"summonChancePct":n.summonChancePct+=t.perRank*e;break;case"summonOnKillChancePct":n.summonOnKillChancePct+=t.perRank*e;break;case"specialCooldownPct":n.specialCooldownPct+=t.perRank*e;break;case"specialCooldownMultiplier":n.specialCooldownMul*=t.value;break;case"specialCooldownReset":n.specialCooldownReset=!0;break;case"specialDamagePct":n.specialDamagePct+=t.perRank*e;break;case"specialDamageMultiplier":n.specialDamageMul*=t.value;break;case"specialRadiusFlat":n.specialRadiusFlat+=t.perRank*e;break;case"specialRangeFlat":n.specialRangeFlat+=t.perRank*e;break;case"specialDurationSec":n.specialDurationSec+=t.perRank*e;break;case"specialInvulBonusSec":n.specialInvulBonusSec+=t.perRank*e;break;case"specialHealPctBonus":n.specialHealPctBonus+=t.perRank*e;break;case"specialProjectileFlat":n.specialProjectileFlat+=t.perRank*e;break;case"specialPullsEnemies":n.specialPullsEnemies=!0;break;case"healOnSpecialEndFlat":n.healOnSpecialEndFlat+=t.perRank*e;break;case"comboFinisherExplosion":n.comboFinisherExplosion=!0;break;case"comboDamagePct":n.comboDamagePct+=t.perRank*e;break;case"movementEffectMultiplier":n.movementEffectMul*=t.value;break;case"composite":for(const s of t.parts)Hp(n,s,e,i);break;default:Ny(t)}}function br(n){const t=Hy();for(const e of Sr){if(!mr(e.id))continue;const i=n[e.id]??0;i<=0||Hp(t,e.effect,i,e.id)}return{maxHpFlat:t.maxHpFlat,attackFlat:t.attackFlat,attackPctSum:t.attackGeneralPct+t.attackMeleePct+t.attackWeaponPct+t.attackAllDamagePct,attackPctBreakdown:{general:t.attackGeneralPct,melee:t.attackMeleePct,weapon:t.attackWeaponPct,allDamage:t.attackAllDamagePct},allStatsPct:t.allStatsPct,critChance:t.critChance,critDamage:t.critDamage,lifesteal:t.lifesteal,hpRegenPerSec:t.hpRegenPerSec,goldGainPct:t.goldGainPct,goldGainMul:t.goldGainMul,xpGainPct:t.xpGainPct,evadeChance:Math.min(t.evadeCap,t.evadeSum),moveSpeedPct:t.moveSpeedPct,moveSpeedOnLandPct:t.moveSpeedOnLandPct,moveSpeedDoubledPortion:t.moveSpeedDoubledPortion,movementEffectMul:t.movementEffectMul,damageReductionPct:t.damageReductionPct,damageReductionPctWaterExtra:t.damageReductionPctWaterExtra,reflectPct:t.reflectPct,attackSpeedPct:t.attackSpeedPct,attackCooldownMul:t.attackCooldownMul,specialCooldownPct:t.specialCooldownPct,specialCooldownMul:t.specialCooldownMul,jumpHeightPct:t.jumpHeightPct,extraJumps:t.extraJumps,damageReductionBelowHp:t.belowHpGuardPct>0?{threshold:t.belowHpGuardThreshold,pct:t.belowHpGuardPct}:null,attackPctBelowHp:t.belowHpAtkPct>0?{threshold:t.belowHpAtkThreshold,pct:t.belowHpAtkPct}:null,attackPctByMissingHp:t.attackPctByMissingHp,attackPctByDistance:t.attackPctByDistance,attackPctWhileSprinting:t.attackPctWhileSprinting,attackPctPerNearbyEnemy:t.nearbyEnemyPct>0&&t.nearbyEnemyPer>0?{pct:t.nearbyEnemyPct,per:t.nearbyEnemyPer}:null,comboDamagePct:t.comboDamagePct,rearSplashPct:t.rearSplashPct,attackRangeFlat:t.attackRangeFlat,moveSpeedAfterAttack:t.moveSpeedAfterAttackPct>0?{pct:t.moveSpeedAfterAttackPct,durationSec:t.moveSpeedAfterAttackSec}:null,alwaysInWater:t.alwaysInWater,waterDamageBonusPct:t.waterDamageBonusPct,waterEffectMul:t.waterEffectMul,fallSpeedReductionPct:t.fallSpeedReductionPct,fallDamageImmune:t.fallDamageImmune,healingReceivedPct:t.healingReceivedPct,healOnKillFlat:t.healOnKillFlat,invulOnKillSec:t.invulOnKillSec,summonChancePct:t.summonChancePct,summonOnKillChancePct:t.summonOnKillChancePct,goldDoubleChanceOnKill:t.goldDoubleChanceOnKill,landingAoe:t.landingAoeDamage>0?{damage:t.landingAoeDamage,radius:t.landingAoeRadius}:null,poisonDps:t.poisonDps,enemySlowPct:t.enemySlowPct,enemyDefenseReductionPct:t.enemyDefenseReductionPct,enemyAttackReductionAura:t.enemyAuraPct>0?{pct:t.enemyAuraPct,radius:t.enemyAuraRadius}:null,curseSpreadRadius:t.curseSpreadRadius,minionCapFlat:t.minionCapFlat,minionDamagePct:t.minionDamagePct,minionInstantRevive:t.minionInstantRevive,pierceCount:t.pierceCount,pierceAll:t.pierceAll,specialDamagePct:t.specialDamagePct,specialDamageMul:t.specialDamageMul,specialCooldownReset:t.specialCooldownReset,specialRadiusFlat:t.specialRadiusFlat,specialRangeFlat:t.specialRangeFlat,specialDurationSec:t.specialDurationSec,specialInvulBonusSec:t.specialInvulBonusSec,specialHealPctBonus:t.specialHealPctBonus,specialProjectileFlat:t.specialProjectileFlat,specialPullsEnemies:t.specialPullsEnemies,healOnSpecialEndFlat:t.healOnSpecialEndFlat,comboFinisherExplosion:t.comboFinisherExplosion}}br({});function Gp(n){return n<0?0:n>1?1:n}function Vp(n){return n.maxHp>0?Gp(n.hp/n.maxHp):0}function Gy(n,t){let e=1;const i=Vp(t),s=n.attackPctBelowHp;s!==null&&i<=s.threshold&&(e*=1+s.pct),n.attackPctByMissingHp>0&&(e*=1+n.attackPctByMissingHp*(1-i)),n.attackPctByDistance>0&&(e*=1+n.attackPctByDistance*Gp(t.targetDistance/Fy)),n.attackPctWhileSprinting>0&&t.sprinting&&(e*=1+n.attackPctWhileSprinting);const o=n.attackPctPerNearbyEnemy;if(o!==null&&o.per>0){const r=Math.floor(t.nearbyEnemyCount/o.per);r>0&&(e*=1+o.pct*r)}return n.comboDamagePct>0&&t.comboStep>=1&&(e*=1+n.comboDamagePct),e}function Vy(n,t,e){const i=t.damageReductionBelowHp;return i===null||Vp(e)>i.threshold?n:n*Math.max(0,1-i.pct)}function Wy(n,t){return t.inWater||n.alwaysInWater}function $y(n,t){const e=n.moveSpeedAfterAttack;return e===null||t<0||t>e.durationSec?1:1+e.pct}const Za={dmgMul:1,cdMul:1,spdMul:1,jumpMul:1,goldMul:1,xpMul:1,hp:0,spCd:0},oo={HP_AT_LV1:100,HP_PER_LV:18,DMG_AT_LV1:14,DMG_PER_LV:5,CRIT:.18,CRIT_DMG:1.9},ks={REACH_BASE:3.6,AIM_BASE:4.4,FORWARD_DOT_MIN:.15,ROLL_MIN:.88,ROLL_SPAN:.24,WATER_MUL_BASE:1.6,WATER_MUL_PER_CURE:.2},Dn={WINDOW:.9,LENGTH:3,FINISHER_INDEX:2,SWING_FINISHER:.62,SWING_NORMAL:.42,CD_FINISHER:.62,CD_NORMAL:.4},xo={EVADE_INVUL:.25,HIT_INVUL:.5,DEATH_GOLD_KEEP:.8,RESPAWN_INVUL:1.5,RESPAWN_X:0,RESPAWN_Z:6},bi={ROLL_MIN:.7,ROLL_SPAN:.7,SCATTER:1.6,MAGNET_RADIUS:3.2,MAGNET_SPEED:7,PICKUP_RADIUS:1.1,LIFETIME:40};function _n(n,t){return n[t]??0}function Xy(n,t){const{cls:e,weapon:i}=t,s=br(t.skills),o=1+s.allStatsPct,r=(oo.HP_AT_LV1+oo.HP_PER_LV*(n.lv-1)+e.hp+s.maxHpFlat)*o;let a=(oo.DMG_AT_LV1+oo.DMG_PER_LV*(n.lv-1)+s.attackFlat)*o*(1+s.attackPctSum),c=oo.CRIT+s.critChance;const l=oo.CRIT_DMG+s.critDamage,u=s.lifesteal,h=s.hpRegenPerSec;let f=(1+s.goldGainPct)*s.goldGainMul;const d=1+s.xpGainPct,g=s.evadeChance,x=(1+s.moveSpeedPct+s.moveSpeedOnLandPct+s.moveSpeedDoubledPortion*(s.movementEffectMul-1))*o,m=1-s.damageReductionPct;let p=(1-s.attackSpeedPct)*s.attackCooldownMul;const _=(1-s.specialCooldownPct)*s.specialCooldownMul,M=1+s.jumpHeightPct,v=s.reflectPct;return a+=i.dmg??0,c+=i.crit??0,p*=1+(i.cd??0),f+=i.gold??0,{maxHp:r,dmg:a,crit:c,critDmg:l,vamp:u,hpReg:h,goldB:f,xpB:d,evade:g,spdB:x,guard:m,cdB:p,spCdB:_,jumpB:M,reflect:v,reach:i.reach??0,fire:i.fire===!0,apexMul:o}}function qy(n,t,e){return Math.min(n+Math.max(0,e-t),e)}function Yy(n,t){return n.spCd*t.spCdB}function jy(n,t){return ks.REACH_BASE+n+t}function Ky(n,t){return ks.AIM_BASE+n+t}function Zy(n,t){return n.x*t.x+n.z*t.z>=ks.FORWARD_DOT_MIN}const md={MELEE_BASE:4,RANGED:26};function Jy(n,t,e){return n?md.RANGED:md.MELEE_BASE+t+e}function Qy(n,t){return(n?3:1)+_n(t,"hop")+(_n(t,"kiwiX")?1:0)}function t2(n,t,e){const i=e()<t.crit,s=ks.ROLL_MIN+e()*ks.ROLL_SPAN;return{damage:Math.round(n*(i?t.critDmg:1)*s),crit:i}}const gd={SPEED:46,LIFE:1.6};function e2(n){return _n(n,"pierce")}function n2(n,t,e,i){if(n.dead||n.invul>0)return{player:n,ignored:!0,evaded:!1,damage:0,died:!1};if(e.evade>0&&i()<e.evade)return{player:{...n,invul:xo.EVADE_INVUL},ignored:!1,evaded:!0,damage:0,died:!1};const s=Math.max(1,Math.round(t*e.guard)),o=n.hp-s,r=o<=0;return{player:{...n,hp:r?0:o,invul:xo.HIT_INVUL,dead:r,gold:r?Math.floor(n.gold*xo.DEATH_GOLD_KEEP):n.gold},ignored:!1,evaded:!1,damage:s,died:r}}function i2(n,t){const e=Math.round(n*(bi.ROLL_MIN+t()*bi.ROLL_SPAN)),i=(t()-.5)*bi.SCATTER,s=(t()-.5)*bi.SCATTER;return{amount:e,offsetX:i,offsetZ:s}}function s2(n,t,e){const i=n.raise??0;return i<=0?!1:e()<i+_n(t,"rite")*.15}const gr={baseCap:5,life:70};function Wp(n){return gr.baseCap+n.minionCapFlat}function $p(n,t){const e=Cy(n),i={cls:n,name:Iy(e),cooldown:e.spCd};switch(n){case"kiwi":{const s=_n(t,"dig");return{...i,toast:"땅파기",conditionalToast:null,effects:[{kind:"invulnerable",duration:1.6+s*.4},{kind:"heal",fractionOfMax:.35+s*.15,flat:0},{kind:"aoe",radius:6,damageMul:.8,color:10121800}]}}case"sword":{const s=_n(t,"whirl");return{...i,toast:null,conditionalToast:null,effects:[{kind:"aoe",radius:6.5+s*1.5,damageMul:2.4*(1+s*.3),color:14673646},{kind:"swing",duration:.5}]}}case"archer":{const s=3+_n(t,"volley");return{...i,toast:null,conditionalToast:null,effects:[{kind:"arrow-fan",count:s*2+1,damageMul:.85,spreadStep:.14,speed:gd.SPEED,life:gd.LIFE,pierce:_n(t,"pierce")}]}}case"necro":return{...i,toast:"망자 소집",conditionalToast:null,effects:[{kind:"summon",unit:"skeleton",count:4,radius:3,cap:Wp(br(t)),life:gr.life}]};case"fish":{const s=_n(t,"brine"),o=.9*(1+s*.25);return{...i,toast:"소금 뿌리기",conditionalToast:null,effects:[{kind:"field",radius:7,duration:5+s*2,tickInterval:.5,damageMulPerSecond:o,damageMulPerTick:o*.5,color:16777215}]}}case"parsley":{const s=_n(t,"tong");return{...i,toast:null,conditionalToast:{onHit:"혀 낚아채기",onMiss:"허공을 핥았다"},effects:[{kind:"cone-pull",range:18+s*6,facingDotMin:.35,damageMul:1.8*(1+s*.3),pullDistance:2.5,pullLerp:.85}]}}case"boss":{const s=_n(t,"doom");return{...i,toast:"멸 망",conditionalToast:null,effects:[{kind:"aoe",radius:15+s*4,damageMul:3.2*(1+s*.3),color:9117471},{kind:"heal",fractionOfMax:0,flat:40}]}}case"alba":{const s=_n(t,"shift");return{...i,toast:"퇴근합니다",conditionalToast:null,effects:[{kind:"invulnerable",duration:3+s},{kind:"speed-buff",multiplier:3,duration:3+s},{kind:"heal",fractionOfMax:0,flat:s*15}]}}}}const Ee={gate1:hd[0],gate2:hd[1],castDuration:wy,pulseInterval:.9,pulseRadius:30,pulseDamageMul:.55,pulseDuration:1.2,pulseSwingDur:.8,finaleRadius:34,finaleDamageMul:.9,finaleDuration:1,idleCdMin:9,idleCdSpan:4,idleRange:46,idleRadius:24,idleDamageMul:.6,idleDuration:1,idleSwingDur:.95,initialCd:8},o2={levi:{...Hc.levi,provisional:!1},magma:{...Hc.magma,provisional:!1},frost:{...Hc.frost,provisional:!1},gabriel:{name:"심판의 나팔",color:16769162,ring:16773832,provisional:!0},creator:{name:"창세",color:16774872,ring:16777215,provisional:!0}},r2={name:null,color:5232872,ring:6283504,provisional:!0};function za(n){return o2[n]??r2}function a2(){return{phase:0,cast:0,skCd:Ee.initialCd,pulse:0,invuln:!1}}function c2(n,t,e,i,s){const o=za(n.zone.type),r=n.boss??a2(),a=[],c=n.hp/n.maxHp,l=r.phase===0&&c<=Ee.gate1?1:r.phase===1&&c<=Ee.gate2?2:0;let u=r.phase,h=r.cast,f=r.invuln,d=r.pulse,g=r.skCd,x=n.atkT,m=n.atkD;return l&&(u=l,h=Ee.castDuration,f=!0,a.push({kind:"boss-phase-start",mobId:n.id,phase:l,duration:Ee.castDuration,skillName:o.name,color:o.color})),h>0?(h-=e,d-=e,d<=0&&(d=Ee.pulseInterval,a.push({kind:"shockwave",mobId:n.id,x:n.pos.x,z:n.pos.z,maxRadius:Ee.pulseRadius,damage:Math.round(t.dmg*Ee.pulseDamageMul),duration:Ee.pulseDuration,color:o.ring}),x=m=Ee.pulseSwingDur,a.push({kind:"swing",mobId:n.id,duration:Ee.pulseSwingDur})),h<=0&&(f=!1,a.push({kind:"boss-phase-end",mobId:n.id}),a.push({kind:"shockwave",mobId:n.id,x:n.pos.x,z:n.pos.z,maxRadius:Ee.finaleRadius,damage:Math.round(t.dmg*Ee.finaleDamageMul),duration:Ee.finaleDuration,color:o.ring})),{mob:{...n,atkT:x,atkD:m,boss:{phase:u,cast:h,skCd:g,pulse:d,invuln:f}},events:a}):(g-=e,g<=0&&i<Ee.idleRange&&(g=Ee.idleCdMin+s()*Ee.idleCdSpan,x=m=Ee.idleSwingDur,a.push({kind:"swing",mobId:n.id,duration:Ee.idleSwingDur}),a.push({kind:"shockwave",mobId:n.id,x:n.pos.x,z:n.pos.z,maxRadius:Ee.idleRadius,damage:Math.round(t.dmg*Ee.idleDamageMul),duration:Ee.idleDuration,color:o.ring})),{mob:{...n,atkT:x,atkD:m,boss:{phase:u,cast:h,skCd:g,pulse:d,invuln:f}},events:a})}const ne={wanderMinT:1.5,wanderSpanT:2.5,wanderMoveAboveT:1.2,wanderSpeedMul:.32,fearSpeedMul:1.15,dreadSlowPerRank:.12,meleeRangePad:.9,rangedRangeMul:.6,faceTurnRate:8,wanderTurnRate:4,fearWalkRate:14,walkRate:10,walkSpeedRef:4.5,collideRadiusMul:.8,castlePushMul:1.5,meleeSwingDur:.62,worldSwingDur:.95,rangedSwingDur:.7,damageVarianceMin:.85,damageVarianceSpan:.3,regenAfterHitT:3,respawnDelayMob:Dp,respawnDelayBoss:kp,deathSinkFly:2.2,deathSinkGround:.6,deathSinkMin:-3.5,deathRollRate:6,projectileSpeedBoss:26,projectileSpeedMob:20,projectileLife:3.2},l2=-252,Vc=34,u2=5,h2=6;function xd(n,t,e,i=0){for(const s of n)if(Math.hypot(t-s.x,e-s.z)<s.r+i)return s;return null}function d2(n,t,e,i){const s=t.fly;if(n.dead){const R=n.dieT+i,S=Math.min(Math.PI/2,n.roll+i*ne.deathRollRate),y=s?ne.deathSinkFly:ne.deathSinkGround,C=Math.max(ne.deathSinkMin,n.pos.y-i*y),O=t.boss?ne.respawnDelayBoss:ne.respawnDelayMob;if(R>O){const k=e.rng()*Math.PI*2,D=e.rng()*n.zone.r,N={x:n.zone.x+Math.cos(k)*D,y:s,z:n.zone.z+Math.sin(k)*D};return{mob:{...n,pos:N,yaw:0,roll:0,hp:n.maxHp,dead:!1,dieT:0,cd:0,boss:n.boss},events:[{kind:"respawn",mobId:n.id,pos:N}]}}return{mob:{...n,dieT:R,roll:S,pos:{...n.pos,y:C}},events:[]}}const o=[];let r=n.cd-i;const a=n.hitT+i;let c=n.hp;t.regen&&a>ne.regenAfterHitT&&(c=Math.min(n.maxHp,c+t.regen*i));let l=n.pos.x,u=n.pos.z,h=n.yaw,f=n.atkT,d=n.atkD,g=n.wander,x=n.wt,m=0;const p=e.target.pos.x-l,_=e.target.pos.z-u,M=Math.hypot(p,_),v=(R,S,y)=>{if(t.ghost||!e.collide)return{x:R,z:S};const C=e.collide({x:R,y,z:S},ne.collideRadiusMul*t.scale);return{x:C.x,z:C.z}};if(!e.target.dead&&M<t.aggro){if(e.fear&&!t.boss){const S=t.speed*ne.fearSpeedMul*i,y=l-p/M*S,C=u-_/M*S,O=v(y,C,n.pos.y);l=O.x,u=O.z,h=Math.atan2(-p,-_);const k=n.walk+i*ne.fearWalkRate,D=s+(t.hop?Math.abs(Math.sin(e.elapsed*4+k))*.18:s?Math.sin(e.elapsed*2+n.bob)*.25:0);return{mob:{...n,pos:{x:l,y:D,z:u},yaw:h,hp:c,hitT:a,cd:r,walk:k,atkT:f>0?f-i:f},events:o}}h=h+yM(h,Math.atan2(p,_))*Math.min(1,i*ne.faceTurnRate);const R=t.ranged?t.reach*ne.rangedRangeMul:t.reach+ne.meleeRangePad;if(M>R){const S=t.speed*(1-e.dreadRank*ne.dreadSlowPerRank)*i,y=v(l+p/M*S,u+_/M*S,n.pos.y);l=y.x,u=y.z,m=1}else if(t.ranged&&M<t.reach&&r<=0)r=t.cd,f=d=ne.rangedSwingDur,o.push({kind:"swing",mobId:n.id,duration:ne.rangedSwingDur}),o.push({kind:"projectile",mobId:n.id,origin:{x:l,y:(t.boss?5.4:3.4)*t.scale+s,z:u},dir:{x:p/M,y:0,z:_/M},damage:t.dmg,burn:t.burn,speed:t.boss?ne.projectileSpeedBoss:ne.projectileSpeedMob,life:ne.projectileLife});else if(!t.ranged&&r<=0){r=t.cd;const S=t.world?ne.worldSwingDur:ne.meleeSwingDur;f=d=S,o.push({kind:"swing",mobId:n.id,duration:S});const y=ne.damageVarianceMin+e.rng()*ne.damageVarianceSpan;o.push({kind:"melee",mobId:n.id,damage:Math.round(t.dmg*y),slow:t.slow,burn:t.burn})}}else{x-=i,x<=0&&(x=ne.wanderMinT+e.rng()*ne.wanderSpanT,g=e.rng()*Math.PI*2);const R=n.home.x-l,S=n.home.z-u;if(Math.hypot(R,S)>n.zone.r&&(g=Math.atan2(R,S)),x>ne.wanderMoveAboveT){const y=t.speed*ne.wanderSpeedMul*i,C=v(l+Math.sin(g)*y,u+Math.cos(g)*y,n.pos.y);l=C.x,u=C.z,h=h+(g-h)*Math.min(1,i*ne.wanderTurnRate),m=.6}}if(t.world){if(n.home.z<l2){const S=l-n.home.x,y=u-n.home.z,C=Math.hypot(S,y);C>Vc&&(l=n.home.x+S/C*Vc,u=n.home.z+y/C*Vc)}const R=xd(e.castles,n.home.x,n.home.z,h2);if(R){const S=Math.hypot(l-R.x,u-R.z),y=R.r-u2;if(S>y){const C=Math.atan2(u-R.z,l-R.x);l=R.x+Math.cos(C)*y,u=R.z+Math.sin(C)*y}}}else{const R=ne.castlePushMul*t.scale,S=xd(e.castles,l,u,R);if(S){const y=Math.atan2(u-S.z,l-S.x);l=S.x+Math.cos(y)*(S.r+R),u=S.z+Math.sin(y)*(S.r+R)}}const E=n.walk+i*ne.walkRate*m*(t.speed/ne.walkSpeedRef);f>0&&(f-=i);let b=n.pos.y;t.hop&&f<=0?b=Math.abs(Math.sin(e.elapsed*4+E))*.18*(m||.3):s&&f<=0&&(b=s+Math.sin(e.elapsed*1.8+n.bob)*.3);const T={...n,pos:{x:l,y:b,z:u},yaw:h,hp:c,hitT:a,cd:r,walk:E,atkT:f,atkD:d,wander:g,wt:x};if(t.world){const R=Math.hypot(l-e.target.pos.x,u-e.target.pos.z),S=c2(T,t,i,R,e.rng);return{mob:S.mob,events:[...o,...S.events]}}return{mob:T,events:o}}const f2=["levi","magma","frost"];function Xp(n){return f2.includes(n)}const p2=Object.freeze({lordsKilled:Object.freeze([]),cutscene:Object.freeze({kind:"none"}),heavenOpen:!1,gabrielKilled:!1,innerOpen:!1,creatorKilled:!1}),m2=1.4,qp=8,Yp=3,jp=20,Cs=1/jp;function g2(n){return Math.round(n*jp)}function x2(n,t,e){if(Xp(t)){if(n.lordsKilled.includes(t))return n;const i=[...n.lordsKilled,t],s=i.length===3&&n.cutscene.kind==="none"&&!n.heavenOpen;return{...n,lordsKilled:i,cutscene:s?{kind:"playing",startedAtTick:e+g2(m2)}:n.cutscene}}return t==="gabriel"?n.gabrielKilled?n:{...n,gabrielKilled:!0,innerOpen:!0}:n.creatorKilled?n:{...n,creatorKilled:!0}}function _2(n,t){if(n.cutscene.kind!=="playing")return n;const e=(t-n.cutscene.startedAtTick)*Cs;if(e<Yp)return n;const i=e>=qp;return{...n,heavenOpen:!0,cutscene:i?{kind:"none"}:n.cutscene}}function v2(n){const t=[...n.lordsKilled];return n.gabrielKilled&&t.push("gabriel"),n.creatorKilled&&t.push("creator"),{slain:t,hv:n.heavenOpen,ig:n.innerOpen,cc:n.creatorKilled}}function M2(n){return{lordsKilled:n.slain.filter(Xp),cutscene:{kind:"none"},heavenOpen:n.hv,gabrielKilled:n.slain.includes("gabriel"),innerOpen:n.ig,creatorKilled:n.cc||n.slain.includes("creator")}}const Yl=2;function Kp(n){if(typeof n!="object"||n===null)return null;const t=n;if(t.v!==Yl)return null;const e=typeof t.cls=="string"&&Fp.includes(t.cls)?t.cls:null,i=typeof t.weapon=="string"&&ql.includes(t.weapon)?t.weapon:"stick",s=Array.isArray(t.owned)?t.owned.filter(a=>typeof a=="string"&&ql.includes(a)):[];s.includes("stick")||s.push("stick");const o={},r=t.skills;if(typeof r=="object"&&r!==null)for(const[a,c]of Object.entries(r)){if(!Bp.includes(a))continue;const l=Math.floor(Number(c));Number.isFinite(l)&&l>0&&(o[a]=Math.min(9,l))}return{v:Yl,name:typeof t.name=="string"?t.name.slice(0,16):"모험가",lv:jo(t.lv,1,200,1),xp:jo(t.xp,0,Number.MAX_SAFE_INTEGER,0),gold:jo(t.gold,0,Number.MAX_SAFE_INTEGER,0),sp:jo(t.sp,0,999,1),cls:e,weapon:i,owned:s,skills:o,pt:jo(t.pt,0,Number.MAX_SAFE_INTEGER,0),gates:y2(t.gates),seenCutscenes:Array.isArray(t.seenCutscenes)?t.seenCutscenes.filter(a=>typeof a=="string").slice(0,16):[]}}function y2(n){const t={slain:[],hv:!1,ig:!1,cc:!1};if(typeof n!="object"||n===null)return t;const e=n;return{slain:Array.isArray(e.slain)?e.slain.filter(i=>typeof i=="string").slice(0,8):[],hv:e.hv===!0,ig:e.ig===!0,cc:e.cc===!0}}function jo(n,t,e,i){const s=Math.floor(Number(n));return Number.isFinite(s)?s<t?t:s>e?e:s:i}const jl=1,S2=8,vi={ATTACK:1,JUMP:2,SPECIAL:4,RUN:8},Zp={DEAD:32},b2="dev",cn=(()=>{const n=ss(1337),t=new Uint8Array(256);for(let i=0;i<256;i++)t[i]=i;for(let i=255;i>0;i--){const s=n()*(i+1)|0,o=t[i];t[i]=t[s],t[s]=o}const e=new Uint8Array(512);for(let i=0;i<512;i++)e[i]=t[i&255];return e})(),Wc=n=>n*n*n*(n*(n*6-15)+10),fs=(n,t,e)=>n+e*(t-n);function Wi(n,t,e,i){n&=15;const s=n<8?t:e,o=n<4?e:n===12||n===14?t:i;return(n&1?-s:s)+(n&2?-o:o)}function Ba(n,t,e){const i=Math.floor(n)&255,s=Math.floor(t)&255,o=Math.floor(e)&255;n-=Math.floor(n),t-=Math.floor(t),e-=Math.floor(e);const r=Wc(n),a=Wc(t),c=Wc(e),l=cn[i]+s,u=cn[l]+o,h=cn[l+1]+o,f=cn[i+1]+s,d=cn[f]+o,g=cn[f+1]+o;return fs(fs(fs(Wi(cn[u],n,t,e),Wi(cn[d],n-1,t,e),r),fs(Wi(cn[h],n,t-1,e),Wi(cn[g],n-1,t-1,e),r),a),fs(fs(Wi(cn[u+1],n,t,e-1),Wi(cn[d+1],n-1,t,e-1),r),fs(Wi(cn[h+1],n,t-1,e-1),Wi(cn[g+1],n-1,t-1,e-1),r),a),c)}function w2(n,t,e,i=3){let s=0,o=.5,r=1;for(let a=0;a<i;a++)s+=o*Math.abs(Ba(n*r,t*r,e*r)),r*=2.07,o*=.5;return s-.34}function E2(n,t,e){const i=n.clone(),s=i.getAttribute("position"),o=i.getAttribute("normal");if(!s||!o)return i;const r=new L,a=new L;for(let c=0;c<s.count;c++){r.fromBufferAttribute(s,c),a.fromBufferAttribute(o,c).normalize();const l=w2(r.x*e,r.y*e,r.z*e,3)*t+Ba(r.x*1.8,r.y*1.8,r.z*1.8)*t*.7;s.setXYZ(c,r.x+a.x*l,r.y+a.y*l,r.z+a.z*l)}return s.needsUpdate=!0,i.computeVertexNormals(),i}function wr(n,t=n){const e=document.createElement("canvas");e.width=n,e.height=t;const i=e.getContext("2d");if(!i)throw new Error("2D 캔버스 컨텍스트를 만들 수 없다 — 절차 텍스처 생성 불가");return i}const wu=(n,t)=>t[n()*t.length|0];function Ko(n,t,e,i,s,o,r,a,c){const l=wr(t);l.fillStyle=e,l.fillRect(0,0,t,t),l.lineCap="round",l.lineWidth=r;for(let u=0;u<s;u++){const h=n()*t,f=n()*t,d=a===void 0?n()*6.283:a+(n()-.5)*.6,g=o*(.45+n()),x=Math.cos(d+1.57)*g*c*(n()-.5),m=Math.sin(d+1.57)*g*c*(n()-.5);l.strokeStyle=wu(n,i);for(let p=-1;p<=1;p++)for(let _=-1;_<=1;_++){const M=h+p*t,v=f+_*t;l.beginPath(),l.moveTo(M,v),l.quadraticCurveTo(M+Math.cos(d)*g*.5+x,v+Math.sin(d)*g*.5+m,M+Math.cos(d)*g,v+Math.sin(d)*g),l.stroke()}}return l.canvas}function sa(n,t,e,i,s,o){const r=wr(t);r.fillStyle=e,r.fillRect(0,0,t,t);for(let a=0;a<s;a++){const c=n()*t,l=n()*t,u=o*(.45+n());r.fillStyle=wu(n,i);for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)r.beginPath(),r.arc(c+h*t,l+f*t,u,0,6.283),r.fill()}return r.canvas}function T2(n,t,e,i,s){const o=wr(t);o.fillStyle=e,o.fillRect(0,0,t,t),o.lineWidth=Math.max(1,s*.09);for(let r=0;r*s*.62<t+s;r++)for(let a=-1;a*s<t+s;a++){const c=a*s+(r%2?s*.5:0),l=r*s*.62;o.fillStyle=wu(n,i),o.beginPath(),o.arc(c,l,s*.52,Math.PI,0,!1),o.fill(),o.strokeStyle="rgba(0,0,0,.22)",o.stroke()}return o.canvas}function A2(n){const t=wr(n),e=t.createImageData(n,n);for(let i=0;i<n;i++)for(let s=0;s<n;s++){const o=Ba(s*.019,i*.3,.5)*.5+.5,a=.56+(Math.sin(o*24+Ba(s*.055,i*.055,2)*4)*.5+.5)*.44,c=(i*n+s)*4;e.data[c]=178*a,e.data[c+1]=128*a,e.data[c+2]=80*a,e.data[c+3]=255}return t.putImageData(e,0,0),t.canvas}const R2={cloth:{seed:1337,repeat:2,draw:n=>Ko(n,256,"#8a8a8a",["#a6a6a6","#6e6e6e","#9a9a9a"],1500,9,1.6,0,.2)},denim:{seed:9257,repeat:2,draw:n=>Ko(n,256,"#7e7e7e",["#9e9e9e","#5e5e5e"],1600,11,1.4,.72,.1)},skin:{seed:17177,repeat:2,draw:n=>sa(n,256,"#9a9a9a",["#a8a8a8","#8e8e8e"],1400,1.5)},fuzz:{seed:25097,repeat:2,draw:n=>Ko(n,256,"#8a8a8a",["#c0c0c0","#5a5a5a"],2e3,13,1.5,void 0,.7)},knit:{seed:33017,repeat:3,draw:n=>sa(n,256,"#8a8a8a",["#d8d8d8","#4a4a4a","#b0b0b0"],2200,3.4)},fur:{seed:40937,repeat:3,draw:n=>Ko(n,256,"#8a8a8a",["#b8b8b8","#5c5c5c"],2600,10,1.3,void 0,.5)},scale:{seed:48857,repeat:2,draw:n=>T2(n,256,"#8a8a8a",["#a4a4a4","#767676","#9a9a9a"],22)},bone:{seed:56777,repeat:2,draw:n=>sa(n,256,"#a2a2a2",["#b6b6b6","#8a8a8a","#6e6e6e"],900,2.2)},metal:{seed:64697,repeat:1,draw:n=>Ko(n,256,"#9a9a9a",["#b4b4b4","#828282"],1800,26,1,0,0)},wood:{seed:72617,repeat:1,draw:()=>A2(256)},rock:{seed:80537,repeat:2,draw:n=>sa(n,256,"#8e8e8e",["#a8a8a8","#6c6c6c","#bcbcbc"],1300,3)}},_d=new Map;function Eu(n){const t=_d.get(n);if(t)return t;const e=R2[n],i=new mu(e.draw(ss(e.seed)));return i.wrapS=i.wrapT=So,i.repeat.set(e.repeat,e.repeat),i.anisotropy=4,i.colorSpace=un,i.name=n,_d.set(n,i),i}const Ha=new Map;function Ft(n,t,e,i,s=1){const o=s?1:0,r=`${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)},${i.toFixed(3)},${o}`,a=Ha.get(r);if(a)return a;const c=Math.max(.004,Math.min(i,n/2-.004,t/2-.004,e/2-.004)),l=n/2-c,u=t/2-c,h=new Fs;h.moveTo(-l,-t/2),h.lineTo(l,-t/2),h.absarc(l,-u,c,-Math.PI/2,0,!1),h.lineTo(n/2,u),h.absarc(l,u,c,0,Math.PI/2,!1),h.lineTo(-l,t/2),h.absarc(-l,u,c,Math.PI/2,Math.PI,!1),h.lineTo(-n/2,-u),h.absarc(-l,-u,c,Math.PI,Math.PI*1.5,!1);const f=new yr(h,{depth:Math.max(.01,e-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:o?2:1,curveSegments:o?3:1});return f.translate(0,0,-(e-c*2)/2),f.computeVertexNormals(),Ha.set(r,f),f}function Jp(n,t,e,i=26){const s=`b${n.toFixed(3)},${t.toFixed(4)},${e.toFixed(2)},${i}`,o=Ha.get(s);if(o)return o;const r=new Me(n,i,i*.7|0),a=E2(r,t,e);return r.dispose(),Ha.set(s,a),a}function De(n,t,e,i,s=26){const o=new V(Jp(n,e,i,s),t);return o.castShadow=!0,o.receiveShadow=!0,o}const Ga=new Map;function ft(n,t,e=.9,i=0,s=0){const o=t==null?null:t instanceof qe?t:Eu(t),r=i||.02,a=o?o.name||o.uuid:"-",c=`t${n}|${a}|${e}|${r}|${s}`,l=Ga.get(c);if(l)return l;const u=new Jn({color:n,map:o,bumpMap:o,bumpScale:o?.035:0,emissive:s,roughness:e,metalness:r,envMapIntensity:.6});return Ga.set(c,u),u}function ue(n,t=2.2){const e=`g${n}|${t}`,i=Ga.get(e);if(i)return i;const s=new Jn({color:n,emissive:n,emissiveIntensity:t,roughness:.3,metalness:0});return Ga.set(e,s),s}const Kl=9426167,C2=2761264,_o={x:30,y:55,z:20},oa=70;function P2(n,t,e){n.sun.position.set(t+_o.x,_o.y,e+_o.z),n.sun.target.position.set(t,0,e),n.sun.target.updateMatrixWorld()}function I2(n,t){try{const e=wr(256,128),i=e.createLinearGradient(0,0,0,128);i.addColorStop(0,"#cfe6ff"),i.addColorStop(.45,"#8fc0e4"),i.addColorStop(.62,"#6d8f5c"),i.addColorStop(1,"#2e3a24"),e.fillStyle=i,e.fillRect(0,0,256,128);const s=e.createRadialGradient(70,26,0,70,26,46);s.addColorStop(0,"rgba(255,250,224,1)"),s.addColorStop(1,"rgba(255,250,224,0)"),e.fillStyle=s,e.beginPath(),e.arc(70,26,46,0,6.283),e.fill();const o=new mu(e.canvas);o.mapping=Pa;const r=new Bl(t);r.compileEquirectangularShader(),n.environment=r.fromEquirectangular(o).texture,o.dispose(),r.dispose()}catch(e){console.warn("환경맵 생성 실패, 조명만으로 렌더링합니다",e)}}function L2(n){const t=new Nv;t.background=new Wt(Kl);const e=new pu(Kl,55,130);t.fog=e;const i=n.clientWidth||n.width||1,s=n.clientHeight||n.height||1,o=new vn(58,i/s,.1,400),r=new kv({canvas:n,antialias:!0});r.setPixelRatio(Math.min(globalThis.devicePixelRatio??1,2)),r.setSize(i,s,!1),r.shadowMap.enabled=!0,r.shadowMap.type=Vf,r.outputColorSpace=un,r.toneMapping=Wf,r.toneMappingExposure=1,I2(t,r);const a=new xM(12576511,4877114,.52);t.add(a);const c=new MM(16774102,1.9);return c.position.set(_o.x,_o.y,_o.z),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-oa,c.shadow.camera.right=oa,c.shadow.camera.top=oa,c.shadow.camera.bottom=-oa,c.shadow.camera.far=160,c.shadow.camera.updateProjectionMatrix(),t.add(c),t.add(c.target),{scene:t,camera:o,renderer:r,sun:c,hemi:a,fog:e}}function D2(n,t,e,i){const s=Math.max(1,Math.floor(t)),o=Math.max(1,Math.floor(e));n.camera.aspect=s/o,n.camera.updateProjectionMatrix(),n.renderer.setPixelRatio(Math.min(i,2)),n.renderer.setSize(s,o,!1)}function k2(n,t){const e=t==="boss"?C2:Kl;n.fog.color.setHex(e);const i=n.scene.background;i instanceof Wt?i.setHex(e):n.scene.background=new Wt(e)}const vd=new Map;function zs(n,t){const e=vd.get(n);if(e)return e;const i=t();return vd.set(n,i),i}function N2(){return zs("box",()=>new kn(1,1,1))}function O2(n){return zs(`circle${n}`,()=>new Do(1,n))}function U2(n){return zs(`cone${n}`,()=>new dn(1,1,n))}function F2(n,t){return zs(`sphere${n}_${t}`,()=>new Me(1,n,t))}function Tu(n,t,e,i){const s=`cyl${n.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)},${i}`;return zs(s,()=>new Ne(n,t,e,i))}function z2(n,t,e){const i=`ring${n.toFixed(3)},${t.toFixed(3)},${e}`;return zs(i,()=>new No(n,t,e))}function Qp(n,t){const e=`plane${n.toFixed(3)},${t.toFixed(3)}`;return zs(e,()=>new Us(n,t))}const Md=new Map;function Au(n,t){const e=Md.get(n);if(e)return e;const i=t();return Md.set(n,i),i}function is(n,t=1){return Au(`L${n}|${t}`,()=>t<1?new ln({color:n,transparent:!0,opacity:t}):new ln({color:n}))}function $c(n,t=1){return Au(`B${n}|${t}`,()=>t<1?new Xn({color:n,transparent:!0,opacity:t}):new Xn({color:n}))}function B2(){return Au("ICE",()=>new Jn({color:10473704,transparent:!0,opacity:.78,roughness:.12,metalness:.05,envMapIntensity:1.6}))}function ri(n,t,e,i){const s=new V(N2(),is(i));return s.scale.set(n,t,e),s}function cr(n,t,e,i,s,o){const r=new V(O2(o),i);return r.rotation.x=-Math.PI/2,r.scale.set(e,e,1),r.position.set(n,s,t),r}function Ai(n,t,e,i,s=.03,o=48){const r=cr(n,t,e,is(i),s,o);return r.receiveShadow=!0,r}function Va(n,t,e,i){const s=new V(U2(e),i);return s.scale.set(n,t,n),s}function H2(n,t,e){const i=new st,s=ri(1.1*e,3.4*e,1.1*e,8016432);s.position.y=1.7*e;const o=ri(4.4*e,2.4*e,4.4*e,4165434);o.position.y=4.2*e;const r=ri(3*e,2*e,3*e,5088069);r.position.y=5.9*e;for(const a of[s,o,r])a.castShadow=!0,a.receiveShadow=!0,i.add(a);return i.position.set(n,0,t),{object:i,collider:{x:n,z:t,r:gy*e}}}function G2(n,t,e,i){const s=ri(2.4*e,1.8*e,2.2*e,9146261);return s.position.set(n,.9*e,t),s.rotation.y=i()*3,s.castShadow=!0,s.receiveShadow=!0,{object:s,collider:{x:n,z:t,r:xy*e}}}const pi={sandbarMargin:3,sandbar:12562050,bigIslet:6979418,smallIslet:9077857,isletRock:8223338,water:2060200,waterOpacity:.76,reed:6257212,column:10133644},V2=10,Pn={ashMargin:4,ash:3024418,sootFactor:.55,soot:2366489,lava:16738850,lavaGlow:16726528,lavaGlowOpacity:.28,lavaGlowScale:1.35,spire:2365974,calderaFloor:1708560,calderaSpire:2759960,bossLava:16742954},ji={snowMargin:4,snow:14674674,glazeFactor:.7,glaze:12376296,treeTrunk:5919048,treeLeafLow:14477810,treeLeafHigh:15660795,throneFloor:9422044};function W2(n){const t=new st;t.name="sea";const e=[];t.add(Ai(Se.x,Se.z,Se.r+pi.sandbarMargin,pi.sandbar));const i=[Qi];for(let a=0;a<Rp;a++){const c=ey(a);i.push({x:c.x,z:c.z,r:Na(n,$l.min,$l.max)})}for(const a of i){const c=a.r>V2,l=new V(Tu(a.r,a.r+1.4,1.6,22),is(c?pi.bigIslet:pi.smallIslet));if(l.position.set(a.x,-.78,a.z),l.receiveShadow=!0,l.castShadow=!0,t.add(l),!c)for(let u=0;u<3;u++){const h=n()*6.28,f=n()*a.r*.6,d=ri(1.2,.9,1.1,pi.isletRock);d.position.set(a.x+Math.cos(h)*f,.4,a.z+Math.sin(h)*f),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}}const s=cr(Se.x,Se.z,Se.r,is(pi.water,pi.waterOpacity),.35,64);s.name="seaWater",t.add(s);const o=Rs.seaReeds;for(let a=0;a<o.count;a++){const c=n()*6.283,l=Se.r*Na(n,o.rFactorMin,o.rFactorMax),u=ri(.14,2.4+n()*1.6,.14,pi.reed);u.position.set(Se.x+Math.cos(c)*l,1.4,Se.z+Math.sin(c)*l),u.rotation.z=(n()-.5)*.4,u.castShadow=!0,t.add(u)}const r=Rs.seaBrokenColumns;for(let a=0;a<r.count;a++){const c=a/r.count*6.283,l=ri(1.6,4+n()*3,1.6,pi.column);l.position.set(Qi.x+Math.cos(c)*r.ringR,2.2,Qi.z+Math.sin(c)*r.ringR),l.rotation.y=n(),l.castShadow=!0,l.receiveShadow=!0,t.add(l),e.push({x:l.position.x,z:l.position.z,r:r.colliderR})}return{group:t,colliders:e,islets:i}}function $2(n,t,e){for(const i of e)if(Math.hypot(n-i.x,t-i.z)<i.r)return!0;return!1}function X2(n){const t=new st;t.name="volcano";const e=[],i=[];t.add(Ai(Ce.x,Ce.z,Ce.r+Pn.ashMargin,Pn.ash)),t.add(Ai(Ce.x,Ce.z,Ce.r*Pn.sootFactor,Pn.soot,.04));const s=iy;for(let u=0;u<s.count;u++){const h=n()*6.283,f=n()*s.center.r*s.radialFactor,d=s.center.x+Math.cos(h)*f,g=s.center.z+Math.sin(h)*f,x=Na(n,s.radiusMin,s.radiusMax);i.push({x:d,z:g,r:x}),t.add(cr(d,g,x,$c(Pn.lava),.06,20)),t.add(cr(d,g,x*Pn.lavaGlowScale,$c(Pn.lavaGlow,Pn.lavaGlowOpacity),.05,20))}const o=Rs.volcSpires,r=ft(Pn.spire,"rock",.96);for(let u=0;u<o.count;u++){const h=n()*6.283,f=n()*Ce.r,d=Ce.x+Math.cos(h)*f,g=Ce.z+Math.sin(h)*f;if($2(d,g,i))continue;const x=3+n()*9,m=Va(1.2+n()*1.4,x,5,r);m.position.set(d,x/2,g),m.rotation.y=n()*3,m.castShadow=!0,m.receiveShadow=!0,t.add(m),e.push({x:d,z:g,r:o.colliderR})}const a=tn.volc;t.add(Ai(a.x,a.z,Ua,Pn.calderaFloor,.05,32));const c=Rs.volcArenaSpires,l=ft(Pn.calderaSpire,"rock",.95);for(let u=0;u<c.count;u++){const h=u/c.count*6.283,f=Va(2.2,8+n()*5,5,l);f.position.set(a.x+Math.cos(h)*c.ringR,4.5,a.z+Math.sin(h)*c.ringR),f.castShadow=!0,t.add(f),e.push({x:f.position.x,z:f.position.z,r:c.colliderR})}return i.push(or),t.add(cr(or.x,or.z,or.r,$c(Pn.bossLava),.07,24)),{group:t,colliders:e,lavaPools:i}}function q2(n,t){const e=new st,i=ri(1,4,1,ji.treeTrunk);i.position.y=2;const s=ri(4,2,4,ji.treeLeafLow);s.position.y=4.6;const o=ri(2.6,1.6,2.6,ji.treeLeafHigh);o.position.y=6;for(const r of[i,s,o])r.castShadow=!0,r.receiveShadow=!0,e.add(r);return e.position.set(n,0,t),e}function Y2(n){const t=new st;t.name="icefield";const e=[],i=B2();t.add(Ai(Te.x,Te.z,Te.r+ji.snowMargin,ji.snow)),t.add(Ai(Te.x,Te.z,Te.r*ji.glazeFactor,ji.glaze,.04));const s=Rs.iceSpikes;for(let c=0;c<s.count;c++){const l=n()*6.283,u=n()*Te.r,h=Te.x+Math.cos(l)*u,f=Te.z+Math.sin(l)*u,d=3+n()*10,g=Va(.9+n()*1.3,d,5,i);g.position.set(h,d/2-.4,f),g.rotation.set((n()-.5)*.3,n()*3,(n()-.5)*.3),g.castShadow=!0,t.add(g),e.push({x:h,z:f,r:s.colliderR})}const o=Rs.iceTrees;for(let c=0;c<o.count;c++){const l=n()*6.283,u=Te.r*Na(n,o.rFactorMin,o.rFactorMax),h=Te.x+Math.cos(l)*u,f=Te.z+Math.sin(l)*u;t.add(q2(h,f)),e.push({x:h,z:f,r:o.colliderR})}const r=tn.ice;t.add(Ai(r.x,r.z,Ua,ji.throneFloor,.05,32));const a=Rs.iceArenaSpires;for(let c=0;c<a.count;c++){const l=c/a.count*6.283,u=Va(2,11+n()*6,5,i);u.position.set(r.x+Math.cos(l)*a.ringR,5.5,r.z+Math.sin(l)*a.ringR),u.castShadow=!0,t.add(u),e.push({x:u.position.x,z:u.position.z,r:a.colliderR})}return{group:t,colliders:e}}const En={ground:5941317,plaza:12891025,road:12167300,lakeBed:13220237,lakeIsle:7125070,lakeWater:3117014,pathDefault:9274743,lampPost:4864554,lampGlow:16762730},mi={bedSegments:48,isleFlare:1.2,isleHeight:1.4,isleSegments:32,isleY:-.68,waterInnerInset:.5,waterSegments:56,waterY:.35,waterOpacity:.72},j2=[En.pathDefault,8358544,En.pathDefault,9071192,En.pathDefault,11058379],Ae={slabJitter:1.8,slabSizeMin:2.6,slabSizeSpan:1.6,slabThickness:.18,slabCornerR:.3,slabY:.09,slabSnap:.4,postRTop:.22,postRBottom:.3,postH:4.4,postSegments:10,postY:2.2,lampR:.62,lampY:4.7,lightIntensity:.8,lightDistance:20,lightY:5},ra={nsZMin:-80,nsZMax:12,ewXMin:-12,ewXMax:80},Zo={treeMin:.7,treeSpan:.7,rockMin:.6,rockSpanBase:.8,rockSpanWild:1.5};function K2(){const n=new st;n.name="ground";const t=new V(Qp(id,id),is(En.ground));return t.rotation.x=-Math.PI/2,t.receiveShadow=!0,n.add(t),n}function Z2(){const n=new st;n.name="village";const t=Ai(go.x,go.z,go.r,En.plaza,.02,32);n.add(t);for(const e of ZM){const i=new V(Qp(e.w,e.d),is(En.road));i.rotation.x=-Math.PI/2,i.position.set(e.x,.015,e.z),i.receiveShadow=!0,n.add(i)}return n}function J2(){const n=new st;n.name="lake",n.add(Ai(xe.x,xe.z,xe.r+JM,En.lakeBed,.03,mi.bedSegments));const t=new V(Tu(xe.island,xe.island+mi.isleFlare,mi.isleHeight,mi.isleSegments),is(En.lakeIsle));t.position.set(xe.x,mi.isleY,xe.z),t.receiveShadow=!0,t.castShadow=!0,n.add(t);const e=new V(z2(xe.island-mi.waterInnerInset,xe.r,mi.waterSegments),is(En.lakeWater,mi.waterOpacity));return e.name="lakeWater",e.rotation.x=-Math.PI/2,e.position.set(xe.x,mi.waterY,xe.z),n.add(e),n}function Q2(n,t,e){for(const i of Xl){const s=i.bx-i.ax,o=i.bz-i.az,r=s*s+o*o;if(r<1)continue;const a=Math.max(0,Math.min(1,((n-i.ax)*s+(t-i.az)*o)/r)),c=i.ax+s*a,l=i.az+o*a;if(Math.hypot(n-c,t-l)<e)return!0}return!1}function yd(n,t){return Math.round(n/t)*t}function tS(n,t,e,i){const s=new st,{ax:o,az:r,bx:a,bz:c}=n,l=Math.hypot(a-o,c-r),u=Math.max(2,Math.round(l/my)),h=ft(t,"rock",.95);for(let m=0;m<=u;m++){const p=m/u,_=o+(a-o)*p+(e()-.5)*Ae.slabJitter,M=r+(c-r)*p+(e()-.5)*Ae.slabJitter,v=yd(Ae.slabSizeMin+e()*Ae.slabSizeSpan,Ae.slabSnap),E=yd(Ae.slabSizeMin+e()*Ae.slabSizeSpan,Ae.slabSnap),b=new V(Ft(v,Ae.slabThickness,E,Ae.slabCornerR,0),h);b.position.set(_,Ae.slabY,M),b.rotation.y=e()*3.14,b.receiveShadow=!0,s.add(b)}const f=Math.floor(l/fy),d=ft(En.lampPost,"wood",.92),g=ue(En.lampGlow,2.2),x=Math.atan2(c-r,a-o)+Math.PI/2;for(let m=1;m<=f;m++){const p=m/(f+1),_=o+(a-o)*p+Math.cos(x)*cd,M=r+(c-r)*p+Math.sin(x)*cd,v=new V(Tu(Ae.postRTop,Ae.postRBottom,Ae.postH,Ae.postSegments),d);v.position.set(_,Ae.postY,M),v.castShadow=!0,s.add(v);const E=new V(F2(12,10),g);E.scale.setScalar(Ae.lampR),E.position.set(_,Ae.lampY,M),s.add(E);const b=new ja(En.lampGlow,Ae.lightIntensity,Ae.lightDistance);b.position.set(_,Ae.lightY,M),s.add(b),i.push({x:_,z:M,r:py})}return s}function eS(n,t){const e=new st;e.name="paths";for(let i=0;i<Xl.length;i++){const s=Xl[i];s!==void 0&&e.add(tS(s,j2[i]??En.pathDefault,n,t))}return e}function nS(n,t){const e=hn.roadClearHalf;return!!(Math.abs(n)<e&&t>ra.nsZMin&&t<ra.nsZMax||Math.abs(t)<e&&n>ra.ewXMin&&n<ra.ewXMax||Math.hypot(n-xe.x,t-xe.z)<xe.r+hn.lakePad||Math.hypot(n-Se.x,t-Se.z)<Se.r+hn.biomePad||Math.hypot(n-Ce.x,t-Ce.z)<Ce.r+hn.biomePad||Math.hypot(n-Te.x,t-Te.z)<Te.r+hn.biomePad||Op(n,t,hn.castlePad)||Q2(n,t,hn.pathPad))}function iS(n,t){const e=new st;e.name="scatter";for(let i=0;i<hn.count;i++){const s=n()*Math.PI*2,o=hn.rMin+Math.sqrt(n())*hn.rSpan,r=Math.cos(s)*o,a=Math.sin(s)*o;if(nS(r,a))continue;const c=Math.min(1,Math.max(0,(o-hn.wildStart)/hn.wildSpan)),l=n()<hn.treeChanceBase-c*hn.treeChanceWildPenalty?H2(r,a,Zo.treeMin+n()*Zo.treeSpan):G2(r,a,Zo.rockMin+n()*(Zo.rockSpanBase+c*Zo.rockSpanWild),n);e.add(l.object),t.push(l.collider)}return e}function sS(n){const t=ss(n),e=new st;e.name="terrain";const i=[];e.add(K2()),e.add(Z2()),e.add(J2());const s=W2(t);e.add(s.group),i.push(...s.colliders);const o=X2(t);e.add(o.group),i.push(...o.colliders);const r=Y2(t);return e.add(r.group),i.push(...r.colliders),e.add(eS(t,i)),e.add(iS(t,i)),{group:e,colliders:i,lavaPools:o.lavaPools,seaIslets:s.islets}}const oS="gate-door",rS="gate-pillar",Gn=6.283;function t0(n){return n<0?0:n>1?1:n}const Sd=new Map;function Li(n,t){const e=Sd.get(n);if(e)return e;const i=t();return Sd.set(n,i),i}const Mn=(n,t,e,i)=>Li(`cy${n},${t},${e},${i}`,()=>new Ne(n,t,e,i)),Ns=(n,t,e)=>Li(`co${n},${t},${e}`,()=>new dn(n,t,e)),To=(n,t,e)=>Li(`sp${n},${t},${e}`,()=>new Me(n,t,e)),bd=(n,t,e,i)=>Li(`to${n},${t},${e},${i}`,()=>new yn(n,t,e,i)),e0=(n,t)=>Li(`ci${n},${t}`,()=>new Do(n,t)),aS=(n,t,e)=>Li(`ri${n},${t},${e}`,()=>new No(n,t,e)),cS=(n,t)=>Li(`pl${n},${t}`,()=>new Us(n,t)),lS=(n,t)=>Li(`oc${n},${t}`,()=>new ko(n,t)),uS=(n,t,e)=>Li(`bx${n},${t},${e}`,()=>new kn(n,t,e)),wd=new Map;function Er(n){const t=wd.get(n);if(t)return t;const e=new ln({color:n});return wd.set(n,e),e}function Ln(n,t,e,i){return new V(uS(n,t,e),Er(i))}function Ut(n,t,e=!1,i=!1){e&&(t.castShadow=!0),i&&(t.receiveShadow=!0),n.add(t)}const hS=3818064,dS=.15,fS=16771496,pS=3;function mS(){const n=new st,t=[],e=ft(7498334,"rock",.92),i=ft(4867132,"rock",.95),s=ft(14266442,"metal",.3,.85),o=ue(16771496,2.4),r=bu,a=AM;for(const d of[-1,1]){const g=Ie.x+d*r,x=new V(Mn(5.2,6.6,a,18),e);x.position.set(g,a/2,Ie.z),Ut(n,x,!0);for(let _=0;_<6;_++){const M=new V(bd(5.6-_*.1,.42,8,20),s);M.rotation.x=Math.PI/2,M.position.set(g,5+_*6.6,Ie.z),Ut(n,M)}const m=new V(Ns(6.4,9,18),i);m.position.set(g,a+4.5,Ie.z),Ut(n,m,!0);const p=new V(To(1.5,14,12),o);p.position.set(g,a+11,Ie.z),Ut(n,p),t.push({x:g,z:Ie.z,r:RM,id:rS})}const c=new V(Ft(r*2+13,7,8,.6,0),e);c.position.set(Ie.x,a+3.5,Ie.z),Ut(n,c,!0);const l=new V(Ns(r+7,11,4),i);l.rotation.y=Math.PI/4,l.position.set(Ie.x,a+12,Ie.z),Ut(n,l);const u=[],h=ue(hS,dS);for(let d=0;d<td;d++){const g=Ie.x+(d-(td-1)/2)*PM,x=new V(bd(2.9,.5,10,26),h);x.position.set(g,IM,Ie.z+LM);const m=new V(lS(1.5,0),h);x.add(m),x.userData.core=m,x.userData.on=!1,Ut(n,x),u.push(x)}const f=[];for(const d of[-1,1]){const g=new st,x=new V(Ft(r-1.5,a-2,2.6,.4,0),i);x.position.set(d*(r/2-.5),(a-2)/2,0),Ut(g,x,!0);for(let m=0;m<7;m++){const p=new V(Ft(r-3,.7,3.2,.15,0),s);p.position.set(d*(r/2-.5),3.5+m*5.6,0),g.add(p)}g.position.set(Ie.x,0,Ie.z),g.userData.sd=d,n.add(g),f.push(g),t.push({x:Ie.x+d*(r/2),z:Ie.z,r:CM,id:oS})}return{meshes:{group:n,runes:u,doors:f},colliders:t}}function gS(n,t){const e=n.runes[t];if(!e||e.userData.on===!0)return;const i=ue(fS,pS);e.userData.on=!0,e.material=i;const s=e.userData.core;s instanceof V&&(s.material=i)}function Ed(n,t){const e=t0(t);n.doors.forEach((i,s)=>{const o=i.userData.sd,r=typeof o=="number"?o:s===0?-1:1;i.position.x=Ie.x+r*e*(bu-1)})}function xS(n,t){for(const e of n.runes){if(e.userData.on!==!0)continue;const i=e.userData.core;i instanceof V&&(i.rotation.y+=t*1.3,i.rotation.x+=t*.8)}}const _S=.6,vS=.3;function MS(){const n=new st,t=[],e=ft(7235161,"rock",.93),i=ft(5590595,"rock",.95),s=ft(9077106,"rock",.86),o=ft(14266442,"metal",.32,.85),r=ue(16762730,2),a=DM,c=kM;for(const l of[-1,1]){for(let d=bs;d<Fc;d+=ea){const g=Math.min(ea,Fc-d)+_S,x=l*(d+g/2-vS),m=new V(Ft(g,c,5,.3,0),e);m.position.set(x,c/2,a),Ut(n,m,!0,!0);const p=new V(Ft(g+1.4,2.6,6.6,.3,0),i);if(p.position.set(x,1.3,a),Ut(n,p,!1,!0),Math.round(d/ea)%2===0){const M=new V(Ft(g*.52,2.6,5.4,.2,0),s);M.position.set(x,c+1.3,a),Ut(n,M,!0)}const _=new V(Ft(g,.6,2.2,.2,0),s);_.position.set(x,c+.3,a+3.2),Ut(n,_),t.push({x:x-g*.25,z:a,r:ed}),t.push({x:x+g*.25,z:a,r:ed})}for(let d=NM;d<Fc-ea;d+=OM){const g=l*d,x=new V(Mn(4.6,5.6,c+9,16),i);x.position.set(g,(c+9)/2,a),Ut(n,x,!0,!0);const m=new V(Mn(5.6,5,1.8,16),s);m.position.set(g,c+9.6,a),Ut(n,m,!0);for(let v=0;v<9;v++){const E=v/9*Gn,b=new V(Ft(1.7,2.1,1.3,.15,0),s);b.position.set(g+Math.cos(E)*5,c+11.4,a+Math.sin(E)*5),b.rotation.y=-E,Ut(n,b)}const p=new V(Ns(5.9,8.5,16),e);p.position.set(g,c+16.6,a),Ut(n,p,!0);const _=new V(To(.8,12,10),r);_.position.set(g,c+21.4,a),Ut(n,_);const M=new ja(16762730,.9,30);M.position.set(g,c+21,a),n.add(M),t.push({x:g,z:a,r:UM})}const u=l*FM,h=new V(Ft(12,c+7,6.2,.4,0),i);h.position.set(u,(c+7)/2,a),Ut(n,h,!0);const f=new V(Ft(13.4,2.2,7.4,.3,0),o);f.position.set(u,c+8.2,a),Ut(n,f),t.push({x:u,z:a,r:zM})}return{group:n,colliders:t}}const yS=1337;function SS(n=ss(yS)){const t=new st,e=[],i=ft(15922943,null,.95,0),s=ft(15265012,"rock",.42,.08),o=ft(14728284,"metal",.28,.88),r=ue(16773832,1.1),a=new V(e0(EM,72),Er(14673909));a.rotation.x=-Math.PI/2,a.position.set(Gi.x,.05,Gi.z),Ut(t,a,!1,!0);const c=zc.edgeClouds;for(let x=0;x<c.count;x++){const m=n()*Gn,p=c.rMin+n()*c.rSpan,_=De(4+n()*7,i,.5,2.2,12);_.scale.set(1.5,.55,1.5),_.position.set(Gi.x+Math.cos(m)*p,-1+n()*2.5,Gi.z+Math.sin(m)*p),t.add(_)}const l=BM,u=HM,h=GM,f=(l-u)/h+1.2;for(let x=0;x<=h;x++){const m=l+(u-l)*(x/h),p=new V(Ft(VM,.8,f,.3,0),s);p.position.set(0,.4,m),Ut(t,p,!1,!0);for(const _ of[-1,1]){const M=new V(Ft(1,1.5,f,.2,0),s);M.position.set(_*na,1.2,m),Ut(t,M,!0)}if(x%WM===0)for(const _ of[-1,1]){const M=new V(Mn(.55,.7,5.2,10),s);M.position.set(_*na,2.6,m),Ut(t,M,!0);const v=new V(To(.78,10,8),r);v.position.set(_*na,5.6,m),Ut(t,v);const E=new ja(16773832,.7,22);E.position.set(_*na,6,m),t.add(E)}}const d=zc.floatingIslands;for(let x=0;x<d.count;x++){const m=n()*Gn,p=d.rMin+n()*d.rSpan,_=Gi.x+Math.cos(m)*p,M=Gi.z+Math.sin(m)*p,v=d.yMin+n()*d.ySpan,E=De(5+n()*5,i,.6,2.6,14);E.scale.set(1.3,.5,1.3),E.position.set(_,v,M),t.add(E);const b=new V(Mn(.9,1.4,7,10),s);b.position.set(_,v+4,M),Ut(t,b);const T=new V(To(1.3,12,10),r);T.position.set(_,v+8.4,M),Ut(t,T)}const g=zc.colonnade;for(let x=0;x<g.count;x++){const m=x/g.count*Gn,p=qn*g.rFactor,_=Gi.x+Math.cos(m)*p,M=Gi.z+Math.sin(m)*p,v=16+n()*8,E=new V(Mn(1.5,1.9,v,14),s);E.position.set(_,v/2,M),Ut(t,E,!0);const b=new V(Ft(4.6,1.2,4.6,.2,0),o);b.position.set(_,v+.6,M),Ut(t,b),e.push({x:_,z:M,r:g.colliderR})}return{group:t,colliders:e}}const Td=40,bS=8,n0=.3,wS=46;function ES(){const n=new st,t=$M,e=ft(14728284,"metal",.26,.9),i=new Xn({color:16773832,transparent:!0,opacity:n0,side:Be,depthWrite:!1,blending:Ts}),s=XM(t),o=new V(cS(s*2+bS,Td),i);o.position.set(0,Td/2,t),n.add(o);const r=[],a=Math.ceil(s/nd),c=Wl/2;for(let l=-a;l<=a;l++){const u=new V(Mn(.5,.5,Wl,10),e);u.position.set(l*nd,c,t),Ut(n,u,!0),r.push(u)}return{group:n,bars:r,veil:o}}function Ad(n,t,e){const i=t0(t),s=Wl/2+i*wS;for(const o of n)o.position.y=s;if(e){const o=e.material;!Array.isArray(o)&&"opacity"in o&&(o.opacity=n0*(1-i))}}const TS={sea:{stone:5071984,stone2:3952988,trim:7178132,floor:3491663,accent:5232872},volc:{stone:4863792,stone2:3680031,trim:7031354,floor:3810848,accent:16742954},ice:{stone:9414843,stone2:7440800,trim:11980768,floor:7177624,accent:10479871}},AS=1.1;function RS(n){const t=Cp.find(e=>e.id===n);if(!t)throw new Error(`알 수 없는 성 id: ${n}`);return t}function CS(n){const t=RS(n),e=TS[n],i=new st,s=[],o=t.x,r=t.z,a=Ca,c=ry[n],l=dy(t,t.biome),u=ay,h=ft(e.stone,"rock",.92),f=ft(e.stone2,"rock",.94),d=ft(e.trim,"rock",.85),g=ue(e.accent,1.6),x=new V(e0(a-1.5,56),Er(e.floor));x.rotation.x=-Math.PI/2,x.position.set(o,.06,r),Ut(i,x,!1,!0);for(let M=0;M<3;M++){const v=new V(Mn(9-M*2.2,9.6-M*2.2,.5,40),f);v.position.set(o,.25+M*.5,r),Ut(i,v,!1,!0)}const m=new V(aS(3.4,4.4,40),g);m.rotation.x=-Math.PI/2,m.position.set(o,1.82,r),Ut(i,m);const p=Gn/Bc*a*1.16;for(let M=0;M<Bc;M++){const v=M/Bc*Gn;let E=v-l;for(;E>Math.PI;)E-=Gn;for(;E<-Math.PI;)E+=Gn;if(Math.abs(E)<u)continue;const b=o+Math.cos(v)*a,T=r+Math.sin(v)*a,R=new V(Ft(p,c,3.2,.25,0),h);if(R.position.set(b,c/2,T),R.rotation.y=-v,Ut(i,R,!0,!0),M%2===0){const S=new V(Ft(p*.55,2.2,3.4,.2,0),d);S.position.set(b,c+1.1,T),S.rotation.y=-v,Ut(i,S,!0)}s.push({x:b,z:T,r:cy})}for(let M=0;M<rd;M++){const v=M/rd*Gn+hy,E=o+Math.cos(v)*a,b=r+Math.sin(v)*a,T=new V(Mn(4.2,5,c+7,16),f);T.position.set(E,(c+7)/2,b),Ut(i,T,!0,!0);const R=new V(Mn(5,4.6,1.6,16),d);R.position.set(E,c+7.4,b),Ut(i,R,!0);for(let C=0;C<8;C++){const O=C/8*Gn,k=new V(Ft(1.5,1.9,1.2,.15,0),d);k.position.set(E+Math.cos(O)*4.5,c+9,b+Math.sin(O)*4.5),k.rotation.y=-O,Ut(i,k)}const S=new V(Ns(5.2,8.5,16),h);S.position.set(E,c+13.6,b),Ut(i,S,!0);const y=new V(To(.85,12,10),g);y.position.set(E,c+18.4,b),Ut(i,y),s.push({x:E,z:b,r:ly})}for(const M of[-1,1]){const v=l+M*u*1.05,E=o+Math.cos(v)*a,b=r+Math.sin(v)*a,T=new V(Mn(2.6,3.1,c+5,14),d);T.position.set(E,(c+5)/2,b),Ut(i,T,!0);const R=new V(Ns(3,5,14),h);R.position.set(E,c+7.5,b),Ut(i,R,!0),s.push({x:E,z:b,r:uy})}const _=new V(Ft(a*u*2.6,3,4,.3,0),h);_.position.set(o+Math.cos(l)*a,c+1.5,r+Math.sin(l)*a),_.rotation.y=-l,Ut(i,_,!0);for(let M=0;M<4;M++){const v=M/4*Gn+.78,E=o+Math.cos(v)*(a*ad),b=r+Math.sin(v)*(a*ad),T=new V(Mn(.7,1,4.2,10),f);T.position.set(E,2.1,b),Ut(i,T,!0);const R=new V(Mn(1.5,.8,1.1,12),d);R.position.set(E,4.6,b),Ut(i,R,!0);const S=new V(To(1.05,10,8),g);S.position.set(E,5.3,b),Ut(i,S);const y=new ja(e.accent,1.1,26);y.position.set(E,6,b),i.add(y),s.push({x:E,z:b,r:AS})}return{group:i,colliders:s}}const PS=[{wall:14272936,roof:12604719},{wall:13359584,roof:4157096},{wall:14734264,roof:8014496}];function IS(n,t,e,i,s){const o=new st,r=Ln(7,4.5,6,i);r.position.y=2.25;const a=new V(Ns(6,3,4),Er(s));a.position.y=6,a.rotation.y=Math.PI/4;const c=Ln(1.6,2.6,.3,5979426);c.position.set(0,1.3,3.05);for(const l of[r,a,c])Ut(o,l,!0,!0);return o.position.set(n,0,t),o.rotation.y=e,o}function LS(){const n=new st,t=Ln(9,5,7,14207400);t.position.y=2.5;const e=new V(Ns(7.4,3.2,4),Er(8011562));e.position.y=6.6,e.rotation.y=Math.PI/4;const i=Ln(2.2,3.2,.3,5979426);i.position.set(0,1.6,3.55);for(const u of[t,e,i])Ut(n,u,!0,!0);for(let u=-4;u<=4;u++){const h=Ln(.9,.25,2.4,u%2?15262422:12600366);h.position.set(u*.95,4.5,4.4),h.rotation.x=-.25,Ut(n,h,!0)}const s=Ln(5,1.5,.3,3811868);s.position.set(0,5.5,3.7),Ut(n,s,!0);const o=Ln(.25,1,.12,14673646);o.position.set(-1.2,5.55,3.9),n.add(o);const r=Ln(.8,.16,.14,9071157);r.position.set(-1.2,5.05,3.9),n.add(r);const a=Ln(.9,.3,.12,14673646);a.position.set(1.2,5.85,3.9),n.add(a);const c=Ln(.16,1.1,.12,9071157);c.position.set(1.2,5.4,3.9),n.add(c);const l=Ln(3.4,.3,1.2,7030054);l.position.set(-5.2,1.6,3.2),Ut(n,l,!0);for(const u of[-1,0,1]){const h=Ln(.16,2,.1,13226716);h.position.set(-5.2+u*1.1,2.6,3.2),Ut(n,h,!0)}return n.position.set(ns.x,0,ns.z),n}function DS(){const n=new st,t=[];n.add(LS()),t.push({x:ns.x,z:ns.z,r:YM}),jM.forEach((i,s)=>{const o=PS[s];o&&(n.add(IS(i.x,i.z,i.rot,o.wall,o.roof)),t.push({x:i.x,z:i.z,r:KM}))});const e=new Oe;return e.name="shopKeeperAnchor",e.position.set(sd.x,0,sd.z),e.rotation.y=Math.PI,n.add(e),{group:n,colliders:t,keeperAnchor:e}}function kS(n,t){const e=new st;e.name="world";const i=sS(t),s=mS(),o=MS(),r=SS(),a=ES(),c=DS(),l=["sea","volc","ice"].map(h=>CS(h));e.add(i.group,s.meshes.group,o.group,r.group,a.group,c.group,...l.map(h=>h.group)),n.scene.add(e);const u=[...i.colliders.map(h=>({x:h.x,z:h.z,r:h.r})),...s.colliders,...o.colliders,...c.colliders,...l.flatMap(h=>h.colliders)];return{root:e,terrain:i,gate:s.meshes,innerGate:a,village:c,colliders:u,lavaPools:i.lavaPools,seaIslets:i.seaIslets}}class NS{constructor(t){this.world=t}litRunes=0;gateOpen01=0;innerOpen01=0;apply(t){const e=t.slain.filter(i=>i==="levi"||i==="magma"||i==="frost").length;for(;this.litRunes<e;)gS(this.world.gate,this.litRunes),this.litRunes++;t.hv&&(this.targetGateOpen=1),t.ig&&(this.targetInnerOpen=1)}targetGateOpen=0;targetInnerOpen=0;update(t){this.gateOpen01<this.targetGateOpen&&(this.gateOpen01=Math.min(1,this.gateOpen01+t/OS),Ed(this.world.gate,this.gateOpen01)),this.innerOpen01<this.targetInnerOpen&&(this.innerOpen01=Math.min(1,this.innerOpen01+t/US),Ad(this.world.innerGate.bars,this.innerOpen01,this.world.innerGate.veil)),xS(this.world.gate,t)}snapTo(t){this.apply(t),t.hv&&(this.gateOpen01=1,Ed(this.world.gate,1)),t.ig&&(this.innerOpen01=1,Ad(this.world.innerGate.bars,1,this.world.innerGate.veil))}}const OS=qp-Yp,US=1/.45,oe={hitstopTimeScale:.04,shakeDefaultDuration:.25,shakeGain:3.2,fovDecayRate:7,fovFollowRate:12,fovEpsilon:.01,particleOpacity:.95,particleElevation:1.2,particleShrink:1.6,particleAdditiveGravityMax:.5,trailSegments:16,trailColor:14676223,trailLife:.22,trailOpacity:.55,trailMinPoints:2,ringDefaultDuration:1.1,ringDefaultMaxRadius:26,ringOpacity:.85,ringY:.5,damageNumberLife:.8},Hn={shakeAmp:.1,shakeDuration:.18,fovPunch:1.4,countBase:5,countScale:8,speedBase:4,speedScale:4,size:.16,gravity:9,life:.4,color:13616812},Rd={hit:{count:7,color:16773312,speed:6,size:.09,gravity:6,life:.32},hitCrit:{count:12,color:16765514,speed:9,size:.13,gravity:6,life:.32},blocked:{count:5,color:10474732,speed:5,size:.09,gravity:4,life:.25},taken:{count:6,color:16734794,speed:5,size:.1,gravity:7,life:.28},coin:{count:8,color:16765514,speed:5,size:.09,gravity:4,life:.25},death:{count:14,color:13616812,speed:6,size:.12,gravity:6,life:.4}},aa=new L;function FS(n,t,e,i,s){const o={x:0,y:0,visible:!1};return aa.copy(n).project(t),o.x=(aa.x*.5+.5)*e,o.y=(-aa.y*.5+.5)*i,o.visible=aa.z<=1,o}const zS=.14,BS=.16,HS=16,GS=.5,VS=.42,Xc=.5,Cd={burst:.42,field:.26,cone:.4},Pd={burst:.85,field:.5,cone:.7},WS=.055,$S=4.2,XS=.05,Id=new Map;function qS(n){const t=Math.round(n*100),e=Id.get(t);if(e)return e;const i=Math.max(6,Math.round(n*2/.09)),s=new Do(1,i,-n,n*2);return Id.set(t,s),s}let Ld=null,Dd=null;function kd(){return Ld??=new Do(1,48),Ld}function YS(){return Dd??=new No(1-WS,1,56),Dd}class jS{scene;slots=[];pulseT=0;reducedMotion=!1;constructor(t){this.scene=t;for(let e=0;e<HS;e++)this.slots.push(this.makeSlot())}setReducedMotion(t){this.reducedMotion=t}makeSlot(){const t=new Xn({color:16777215,transparent:!0,opacity:0,side:Be,depthWrite:!1}),e=new V(kd(),t);e.rotation.x=-Math.PI/2,e.visible=!1,e.renderOrder=2;const i=new Xn({color:16777215,transparent:!0,opacity:0,side:Be,depthWrite:!1,blending:Ts}),s=new V(YS(),i);return s.rotation.x=-Math.PI/2,s.visible=!1,s.renderOrder=3,this.scene.add(e,s),{fill:e,fillMat:t,edge:s,edgeMat:i,t:0,duration:0,shape:"burst",active:!1}}show(t){const e=this.takeSlot();e.active=!0,e.t=0,e.shape=t.shape,e.duration=t.shape==="field"?Math.max(Xc,t.duration??1):t.shape==="cone"?VS:GS;const i=t.shape==="cone";e.fill.geometry=i?qS(t.halfAngle??Math.PI/4):kd(),e.edge.visible=!i,e.fill.rotation.z=i?(t.yaw??0)-Math.PI/2:0,e.fillMat.color.setHex(t.color),e.edgeMat.color.setHex(t.color),e.fillMat.opacity=Cd[t.shape],e.edgeMat.opacity=Pd[t.shape],e.fill.position.set(t.x,zS,t.z),e.edge.position.set(t.x,BS,t.z),e.fill.scale.setScalar(t.radius),e.edge.scale.setScalar(t.radius),e.fill.visible=!0}takeSlot(){const t=this.slots.find(i=>!i.active);if(t)return t;let e=this.slots[0];for(const i of this.slots)i.t>e.t&&(e=i);return e}update(t){this.pulseT+=t;for(const e of this.slots){if(!e.active)continue;e.t+=t;const i=e.t/e.duration;if(i>=1){e.active=!1,e.fill.visible=!1,e.edge.visible=!1;continue}const s=Cd[e.shape],o=Pd[e.shape];if(e.shape==="field"){const r=e.duration-e.t,a=r<Xc?r/Xc:1,c=this.reducedMotion?0:Math.sin(this.pulseT*$S)*XS;e.fillMat.opacity=(s+c)*a,e.edgeMat.opacity=o*a}else{const r=(1-i)*(1-i);e.fillMat.opacity=s*r,e.edgeMat.opacity=o*r}}}get activeCount(){return this.slots.reduce((t,e)=>t+(e.active?1:0),0)}dispose(){for(const t of this.slots)this.scene.remove(t.fill,t.edge),t.fillMat.dispose(),t.edgeMat.dispose();this.slots.length=0}}let Nd=null,Od=null;function KS(){return Nd??=new Me(1,6,4),Nd}function ZS(){return Od??=new No(1,1.8,48),Od}const JS=220,QS=12,tb=48;function Ud(n){const t=1-n;return 1-t*t}class eb{scene;camera;overlay;baseFov;stopT=0;shakeT=0;shakeAmp=0;fov=0;particles=[];particleCursor=0;rings=[];numbers=[];trailGeo;trailMat;trailMesh;trailPts=[];trailHead=0;trailCount=0;trailLife=0;area;reducedMotion=!1;motionQuery;onMotionChange;disposed=!1;constructor(t,e){this.scene=t.scene,this.camera=t.camera,this.overlay=e,this.baseFov=t.camera.fov,this.motionQuery=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")??null,this.reducedMotion=this.motionQuery?.matches??!1,this.area=new jS(t.scene),this.area.setReducedMotion(this.reducedMotion),this.onMotionChange=s=>{this.reducedMotion=s.matches,this.area.setReducedMotion(s.matches),s.matches&&(this.shakeT=0,this.shakeAmp=0,this.fov=0)},this.motionQuery?.addEventListener("change",this.onMotionChange),this.initParticles(),this.initRings(),this.initNumbers();const i=this.buildTrail();this.trailGeo=i.geo,this.trailMat=i.mat,this.trailMesh=i.mesh}initParticles(){const t=KS();for(let e=0;e<JS;e++){const i=new Xn({color:16777215,transparent:!0,opacity:oe.particleOpacity,depthWrite:!1}),s=new V(t,i);s.visible=!1,s.frustumCulled=!1,this.scene.add(s),this.particles.push({mesh:s,mat:i,vx:0,vy:0,vz:0,g:0,t:0,life:1,active:!1})}}initRings(){const t=ZS();for(let e=0;e<QS;e++){const i=new Xn({color:16777215,transparent:!0,opacity:oe.ringOpacity,side:Be,depthWrite:!1,blending:Ts}),s=new V(t,i);s.rotation.x=-Math.PI/2,s.visible=!1,this.scene.add(s),this.rings.push({mesh:s,mat:i,t:0,duration:oe.ringDefaultDuration,maxRadius:oe.ringDefaultMaxRadius,onSweep:null,active:!1})}}initNumbers(){for(let t=0;t<tb;t++){const e=document.createElement("div");e.className="dmgnum",e.style.display="none",this.overlay.appendChild(e),this.numbers.push({el:e,x:0,y:0,t:0,active:!1})}}buildTrail(){const t=oe.trailSegments,e=new He;e.setAttribute("position",new wn(new Float32Array(t*2*3),3));const i=new Float32Array(t*2*4);for(let a=0;a<t;a++){const c=1-a/(t-1),l=c*c;for(let u=0;u<2;u++){const h=a*2+u;i[h*4+0]=1,i[h*4+1]=1,i[h*4+2]=1,i[h*4+3]=l}}e.setAttribute("color",new wn(i,4));const s=[];for(let a=0;a<t-1;a++){const c=a*2,l=a*2+1,u=(a+1)*2,h=(a+1)*2+1;s.push(c,l,u,l,h,u)}e.setIndex(s);const o=new Xn({color:oe.trailColor,vertexColors:!0,transparent:!0,opacity:oe.trailOpacity,side:Be,depthWrite:!1,blending:Ts}),r=new V(e,o);r.frustumCulled=!1,r.renderOrder=20,r.visible=!1,this.scene.add(r);for(let a=0;a<t;a++)this.trailPts.push({a:new L,b:new L});return{geo:e,mat:o,mesh:r}}hitstop(t){this.stopT=Math.max(this.stopT,t)}shake(t,e=oe.shakeDefaultDuration){this.reducedMotion||(this.shakeAmp=Math.max(this.shakeAmp,t),this.shakeT=Math.max(this.shakeT,e))}fovPunch(t){this.reducedMotion||(this.fov=Math.max(this.fov,t))}burst(t,e,i,s){const o=Rd.hit;this.emit(t,{count:i,color:e,speed:s?.speed??o.speed,size:s?.size??o.size,gravity:s?.gravity??o.gravity,life:s?.life??o.life})}burstPreset(t,e){this.emit(t,Rd[e])}land(t,e){const i=Math.max(0,Math.min(1,e));this.shake(Hn.shakeAmp*i,Hn.shakeDuration),this.fovPunch(Hn.fovPunch*i),this.emit(t,{count:Math.round(Hn.countBase+Hn.countScale*i),color:Hn.color,speed:Hn.speedBase+Hn.speedScale*i,size:Hn.size,gravity:Hn.gravity,life:Hn.life})}areaHit(t){this.area.show(t)}ring(t,e,i,s){const o=this.rings.find(r=>!r.active);o&&(o.active=!0,o.t=0,o.duration=s?.duration??oe.ringDefaultDuration,o.maxRadius=e,o.onSweep=s?.onSweep??null,o.mat.color.setHex(i),o.mat.opacity=oe.ringOpacity,o.mesh.position.set(t.x,oe.ringY,t.z),o.mesh.scale.setScalar(1),o.mesh.visible=!0)}trail(t,e,i){const s=oe.trailSegments;this.trailHead=(this.trailHead+1)%s;const o=this.trailPts[this.trailHead];o&&(o.a.copy(t),o.b.copy(e),this.trailCount<s&&this.trailCount++,this.trailLife=oe.trailLife,i!==void 0&&this.trailMat.color.setHex(i))}damageNumber(t,e,i){const s=this.overlay.clientWidth||window.innerWidth,o=this.overlay.clientHeight||window.innerHeight,r=FS(t,this.camera,s,o);if(!r.visible)return;const a=this.numbers.find(c=>!c.active)??this.oldestNumber();a&&(a.active=!0,a.t=0,a.x=r.x,a.y=r.y,a.el.className=i==="normal"?"dmgnum":`dmgnum ${i}`,a.el.textContent=e,a.el.style.left=`${r.x}px`,a.el.style.top=`${r.y}px`,a.el.style.display="",this.applyNumberFrame(a))}update(t){let e=t;return this.stopT>0&&(this.stopT-=t,e=t*oe.hitstopTimeScale),this.updateTrail(t),this.updateParticles(t),this.updateRings(e),this.area.update(e),this.updateNumbers(t),e}applyCamera(t){if(this.shakeT>0?this.shakeT-=t:this.shakeAmp=0,this.fov+=(0-this.fov)*Math.min(1,t*oe.fovDecayRate),this.shakeT>0){const i=this.shakeAmp*this.shakeT*oe.shakeGain;this.camera.position.x+=(Math.random()-.5)*i,this.camera.position.y+=(Math.random()-.5)*i,this.camera.position.z+=(Math.random()-.5)*i}const e=this.baseFov+this.fov;Math.abs(this.camera.fov-e)>oe.fovEpsilon&&(this.camera.fov+=(e-this.camera.fov)*Math.min(1,t*oe.fovFollowRate),this.camera.updateProjectionMatrix())}get motionReduced(){return this.reducedMotion}stats(){return{particles:this.particles.reduce((t,e)=>t+(e.active?1:0),0),rings:this.rings.reduce((t,e)=>t+(e.active?1:0),0),numbers:this.numbers.reduce((t,e)=>t+(e.active?1:0),0)}}emit(t,e){const i=e.gravity<oe.particleAdditiveGravityMax;for(let s=0;s<e.count;s++){const o=this.takeParticle();if(!o)return;const r=Math.random()*6.283,a=Math.random()*oe.particleElevation,c=e.speed*(.5+Math.random());o.vx=Math.cos(r)*Math.cos(a)*c,o.vy=Math.sin(a)*c,o.vz=Math.sin(r)*Math.cos(a)*c,o.g=e.gravity,o.t=0,o.life=e.life,o.active=!0,o.mat.color.setHex(e.color),o.mat.opacity=oe.particleOpacity,o.mat.blending=i?Ts:Es,o.mesh.position.copy(t),o.mesh.scale.setScalar(e.size*(.5+Math.random())),o.mesh.visible=!0}}takeParticle(){const t=this.particles.length;if(t===0)return null;for(let i=0;i<t;i++){const s=(this.particleCursor+i)%t,o=this.particles[s];if(o&&!o.active)return this.particleCursor=(s+1)%t,o}const e=this.particles[this.particleCursor];return this.particleCursor=(this.particleCursor+1)%t,e??null}updateParticles(t){for(const e of this.particles){if(!e.active)continue;e.t+=t,e.vy-=e.g*t,e.mesh.position.x+=e.vx*t,e.mesh.position.y+=e.vy*t,e.mesh.position.z+=e.vz*t;const i=1-e.t/e.life;e.mat.opacity=Math.max(0,i)*oe.particleOpacity,e.mesh.scale.multiplyScalar(1-t*oe.particleShrink),e.t>e.life&&(e.active=!1,e.mesh.visible=!1)}}updateRings(t){for(const e of this.rings){if(!e.active)continue;e.t+=t;const i=e.t/e.duration,s=1+i*e.maxRadius;e.mesh.scale.setScalar(s),e.mat.opacity=oe.ringOpacity*(1-i),e.onSweep?.(s),e.t>=e.duration&&(e.active=!1,e.onSweep=null,e.mesh.visible=!1)}}updateTrail(t){const e=oe.trailSegments;if(this.trailLife>0){this.trailLife-=t;const i=this.trailGeo.attributes.position;if(!i)return;const s=i.array;for(let o=0;o<e;o++){const r=Math.min(o,Math.max(0,this.trailCount-1)),a=this.trailPts[(this.trailHead-r+e*2)%e];if(!a)break;s[o*6+0]=a.a.x,s[o*6+1]=a.a.y,s[o*6+2]=a.a.z,s[o*6+3]=a.b.x,s[o*6+4]=a.b.y,s[o*6+5]=a.b.z}i.needsUpdate=!0,this.trailMesh.visible=this.trailCount>oe.trailMinPoints,this.trailMat.opacity=oe.trailOpacity*Math.max(0,this.trailLife/oe.trailLife)}else this.trailMesh.visible&&(this.trailMesh.visible=!1,this.trailCount=0)}oldestNumber(){let t=null;for(const e of this.numbers)(!t||e.t>t.t)&&(t=e);return t}applyNumberFrame(t){const e=Math.min(1,t.t/oe.damageNumberLife);let i,s;if(e<.25){const o=Ud(e/.25);i=-50+-40*o,s=.6+(1.15-.6)*o}else{const o=Ud((e-.25)/.75);i=-90+-70*o,s=1.15+(1-1.15)*o}t.el.style.transform=`translate(-50%, ${i.toFixed(2)}%) scale(${s.toFixed(3)})`,t.el.style.opacity=String(Math.max(0,1-e))}updateNumbers(t){for(const e of this.numbers)if(e.active){if(e.t+=t,e.t>=oe.damageNumberLife){e.active=!1,e.el.style.display="none";continue}this.applyNumberFrame(e)}}dispose(){if(!this.disposed){this.disposed=!0,this.motionQuery?.removeEventListener("change",this.onMotionChange);for(const t of this.particles)this.scene.remove(t.mesh),t.mat.dispose();this.particles.length=0;for(const t of this.rings)this.scene.remove(t.mesh),t.onSweep=null,t.mat.dispose();this.rings.length=0;for(const t of this.numbers)t.el.remove();this.numbers.length=0,this.area.dispose(),this.scene.remove(this.trailMesh),this.trailGeo.dispose(),this.trailMat.dispose(),this.trailPts.length=0}}}new L;const fo={x:0,y:-.16,z:.12,rotX:.25};function i0(n){const t=new st;return t.position.set(fo.x,fo.y,fo.z),t.rotation.x=fo.rotX,n.add(t),t}const Fd=new Map;function Tr(n,t){const e=Fd.get(n);if(e)return e;const i=t();return Fd.set(n,i),i}function Zl(n,t=16,e=12){return Tr(`s${n.toFixed(4)},${t},${e}`,()=>new Me(n,t,e))}function ca(n,t,e,i){return Tr(`h${n.toFixed(4)},${t},${e},${i.toFixed(4)}`,()=>new Me(n,t,e,0,Math.PI*2,0,i))}function ps(n,t,e=4){return Tr(`c${n.toFixed(4)},${t.toFixed(4)},${e}`,()=>new dn(n,t,e))}function qc(n,t,e,i,s){return Tr(`o${n.toFixed(4)},${t.toFixed(4)},${e},${i},${s.toFixed(4)}`,()=>new yn(n,t,e,i,s))}function nb(n,t){return Tr(n,t)}const zd=new Map;function la(n,t,e=.9,i=.02){const s=`${n}|${t??"-"}|${e}|${i}`,o=zd.get(s);if(o)return o;const r=t===null?null:Eu(t),a=new Jn({color:n,map:r,bumpMap:r,bumpScale:.035,roughness:e,metalness:i,envMapIntensity:.55});return zd.set(s,a),a}function ye(n,t,e=.86,i=.04,s=0){return ft(n,t,e,i||.04,s)}const Bd=new Map;function s0(n,t,e,i){const s=`${n}|${t}|${e}|${i}`,o=Bd.get(s);if(o)return o;const r=Eu("cloth"),a=new Jn({color:n,map:r,bumpMap:r,bumpScale:.06,roughness:t,metalness:e,side:Be,envMapIntensity:i});return Bd.set(s,a),a}const ge={pelY:-.2,pelYaw:-.38,pelRoll:.05,spYaw:.5,spPitch:.15,spRoll:-.05,legB:-.32,legF:.24,kneeB:.44,kneeF:.32,ankB:.12,ankF:-.15,armRX:-1.95,armRZ:.42,elbR:-.72,armLX:-.62,armLZ:-.52,elbL:-1.05},ib=2.9,sb=1.6,ob=.55,rb=.34,ab=.95,cb=.3,lb=.5,ub=4,hb=.3,Hd=.16,db=.22,Gd=.55,fb=7,pb=.35,mb=.18,gb=-.18,xb=.12,Mi=n=>n<0?0:n>1?1:n;function _b(n){const t=Mi(n);return t<.28?-.42*Math.sin(t/.28*1.5708):t<.55?-.42+1.42*Math.pow((t-.28)/.27,.55):1-Math.pow((t-.55)/.45,1.4)}function vb(n){return n>.24&&n<.72}function Ru(n,t){return Math.max(Mi(n),Mi(Math.abs(t)))}function Mb(n,t,e){const i=ge.armRX*Ru(e,n);return t===0?i+1.85*n:t===1?i+1.05*n:i+2.3*n}function yb(n,t){return ge.elbR*Ru(t,n)+.6*n+ob*Math.max(0,n)}function Sb(n,t){const e=Mi(n);return fo.rotX+ib*Ru(t,n)*(1-e)+sb*e}function bb(n,t,e,i,s,o,r){const a=i,c=Math.sin(t);for(const{i:h,leg:f,kn:d,ank:g}of[{i:0,leg:n.legL,kn:n.kneeL,ank:n.ankleL},{i:1,leg:n.legR,kn:n.kneeR,ank:n.ankleR}]){const x=t+(h?Math.PI:0),m=Math.sin(x),p=Math.cos(x);f.rotation.x=m*(.55+a*.35)*e,f.rotation.z=(h?-1:1)*e*.05;const _=Math.max(0,Math.sin(x-.9));d.rotation.x=(_*(.85+a*.75)+.06)*e+.06,g.rotation.x=(-m*.3+Math.max(0,-p)*.25)*e-.04}n.pelvis.position.y=n.pelvisY+Math.abs(c)*(.1+a*.1)*e,n.pelvis.rotation.z=-c*(.05+a*.05)*e,n.pelvis.rotation.y=c*(.1+a*.08)*e,n.spine.rotation.x=a*.22*e+s,n.spine.rotation.y=-c*(.09+a*.07)*e,n.spine.rotation.z=c*.03*e+o;const l=(.55+a*.45)*e;n.armL.rotation.x=-c*l,n.armL.rotation.z=.06*e,r||(n.armR.rotation.x=c*l,n.armR.rotation.z=-.06*e);const u=-.22-a*.65*e;n.elbL.rotation.x=u-Math.max(0,c)*.5*e,r||(n.elbR.rotation.x=u-Math.max(0,-c)*.5*e)}function wb(n,t,e,i){if(t<=.002)return;const s=Math.sin(e*2.7)*.5+.5;n.pelvis.position.y+=ge.pelY*t,n.pelvis.rotation.y+=ge.pelYaw*t,n.pelvis.rotation.z+=ge.pelRoll*t,n.spine.rotation.y+=ge.spYaw*t,n.spine.rotation.x+=(ge.spPitch+s*.025)*t,n.spine.rotation.z+=ge.spRoll*t,n.legL.rotation.x+=ge.legB*t,n.legR.rotation.x+=ge.legF*t,n.legL.rotation.z+=-.1*t,n.legR.rotation.z+=.1*t,n.kneeL.rotation.x+=ge.kneeB*t,n.kneeR.rotation.x+=ge.kneeF*t,n.ankleL.rotation.x+=ge.ankB*t,n.ankleR.rotation.x+=ge.ankF*t,i||(n.armR.rotation.x+=(ge.armRX-s*.05)*t,n.armR.rotation.z+=ge.armRZ*t,n.elbR.rotation.x+=ge.elbR*t),n.armL.rotation.x+=ge.armLX*t,n.armL.rotation.z+=ge.armLZ*t,n.elbL.rotation.x+=ge.elbL*t}function Eb(n,t,e,i){const s=ge.armRZ*i,o=ge.spYaw*i,r=ge.spPitch*i,a=n.pelvisY+ge.pelY*i;n.armR.rotation.x=Mb(t,e,i),e===0?(n.armR.rotation.z=s+.28*t,n.spine.rotation.y=o-.85*t,n.spine.rotation.x=r+.1*t,n.pelvis.rotation.y=ge.pelYaw*i+.3*t):e===1?(n.armR.rotation.z=s-1.7*t,n.spine.rotation.y=o+.72*t,n.spine.rotation.x=r+.06*t,n.pelvis.rotation.y=ge.pelYaw*i-.34*t):(n.armR.rotation.z=s-.18*t,n.spine.rotation.y=o-.22*t,n.spine.rotation.x=r+.42*t,n.pelvis.position.y=a-.26*Math.max(0,t));const c=Math.max(0,t);n.elbR.rotation.x=yb(t,i),n.weaponSlot.position.z=fo.z+rb*c,n.legR.rotation.x+=c*.3,n.legL.rotation.x-=c*.22,n.kneeR.rotation.x+=c*.18}function o0(n,t){const e=Mi(t.stance??0),i=Mi(t.run01??0),s=t.time??0,o=Mi(t.attackT),r=o>0,a=Mi(t.speed01)*(ab-e*cb);if(bb(n,t.walkPhase,a,i*(1-e*lb),t.leanX??0,t.leanZ??0,r),wb(n,e,s,r),t.airborne&&Gd>0){const u=Math.min(1,Math.abs(t.vy??0)/fb+pb)*Gd;n.legL.rotation.x=-.75*u,n.legR.rotation.x=-.75*u,n.kneeL.rotation.x=1.5*u,n.kneeR.rotation.x=1.5*u,n.ankleL.rotation.x=-.6*u,n.ankleR.rotation.x=-.6*u,n.armL.rotation.x-=.35*u,r||(n.armR.rotation.x-=.35*u)}const c=r?_b(o):0;if(r&&Eb(n,c,t.comboStep,e),n.head.rotation.y=t.headYaw??0,t.hurtT>0){const u=Mi(t.hurtT/mb);n.spine.rotation.x+=gb*u,n.head.rotation.x=xb*u}else n.head.rotation.x=0;n.weaponSlot.rotation.x=Sb(c,e),n.root.rotation.z=t.dead?Math.min(Math.PI/2,(t.deadT??0)*ub):0;const l=t.landT??0;if(l>0&&!t.dead){const u=l/hb;n.root.scale.set(1+u*Hd,1-u*db,1+u*Hd)}else n.root.scale.set(1,1,1)}function Tb(n){return s0(n,.95,.02,.7)}function Ab(){return s0(10130052,.97,0,.6)}function ro(n,t,e,i,s=5){const o=`drape${n.toFixed(3)},${t.toFixed(3)},${i.toFixed(3)},${s}`,r=nb(o,()=>{const c=new Us(n,t,10,14),l=c.attributes.position,u=new L;for(let h=0;h<l.count;h++){u.fromBufferAttribute(l,h);const f=u.x/(n/2),d=(t/2-u.y)/t,g=.72+d*.62,x=-Math.abs(f)*i*(.35+d*.95)+Math.sin(f*s)*.07*(.2+d)-d*d*.28;l.setXYZ(h,u.x*g,u.y-d*d*.18,x)}return l.needsUpdate=!0,c.computeVertexNormals(),c}),a=new V(r,e);return a.castShadow=!0,a.receiveShadow=!0,a}function ua(n,t,e,i,s,o){const r=new st,a=ss(o);for(let c=0;c<e;c++){const l=(c/(e-1)-.5)*n,u=s*(.55+a()*.8),h=new V(Ft(n/e*.9,u,.05,.02),i);h.position.set(l,t-u/2,-Math.abs(l)*.5-.1),h.rotation.set(.08+a()*.1,0,(a()-.5)*.18),h.castShadow=!0,r.add(h)}return r}const Rb={sword:1101,archer:1202,necro:1303,boss:1404,alba:1505};function Cb(n,t){const e=n.pal,i=n.mat,s=new st;s.position.y=-2.2800000000000002*n.scale,n.spine.add(s);const o=[];let r=null,a=null;const c=(d,g,x,m,p)=>{const _=new V(Ft(d,g,x,m),p);return _.castShadow=!0,_.receiveShadow=!0,_},l=(d,g=0,x=0,m=0)=>(d.position.set(g,x,m),s.add(d),d),u=(d,g,x,m)=>{o.push({object:d,axis:"x",stiffness:g,damping:x,limit:m})},h=Tb(e.cloth),f=Rb[t];if(t==="sword"){l(c(1.56,.9,.94,.3,i.METAL),0,2.98,.02),l(c(1.2,.24,.9,.1,i.IRON),0,3.44,0),l(c(.5,.5,.32,.12,i.TRIM),0,3.02,.5);for(const d of[-1,1]){const g=d<0?n.armL:n.armR,x=new V(ca(.36,16,10,Math.PI*.55),i.METAL);x.scale.set(1.2,1,1.1),x.rotation.z=d*.24,x.position.set(d*.14,.06,0),x.castShadow=!0,g.add(x);const m=new V(ps(.09,.34,6),i.IRON);m.position.set(d*.3,.24,0),m.rotation.z=d*.4,g.add(m)}l(c(.72,.68,.72,.16,i.METAL),0,4.02,.02),l(c(.78,.12,.78,.05,i.IRON),0,4.34,.02),l(c(.46,.07,.12,.02,ye(329482,null,.4)),0,4.02,.38),l(new V(Ft(.4,.045,.06,.015),ue(e.glow,3)),0,4.02,.4),l(c(.1,.3,.9,.04,i.TRIM),0,4.5,-.06);for(let d=0;d<7;d++)l(c(.16,.26-d*.02,.1,.03,i.TRIM),0,4.6,-.4+d*.1);u(l(ro(1.9,2.9,h,.55,4),0,2.55,-.55),70,9,.5),u(l(ua(1.8,-.05,7,h,.4,f),0,1.15,-.86),55,8,.6);for(const d of n.eyes)d.visible=!1}else if(t==="archer"){const d=new V(ca(.68,18,12,Math.PI*.62),h);d.scale.set(1.05,1.15,1.1),d.castShadow=!0,l(d,0,4.06,-.04);const g=new V(ps(.34,.7,7),h);g.rotation.x=1.5,l(g,0,4.12,.34),l(c(.62,.42,.2,.08,ye(329482,null,.5)),0,3.98,.44),l(c(.5,.28,.3,.1,i.LEATH),0,3.76,.42),u(l(ro(1.7,2.3,h,.5,5),0,2.85,-.5),75,9,.5),u(l(ua(1.6,-.05,6,h,.34,f),0,1.7,-.8),60,8,.6),l(c(.34,1.1,.34,.14,i.LEATH),-.62,2.86,-.5).rotation.z=.3;for(let _=0;_<5;_++)l(c(.045,.8,.045,.02,ye(3813154,"wood",.9)),-.78+_*.07,3.6,-.5),l(c(.1,.22,.03,.01,i.TRIM),-.78+_*.07,3.92,-.5);const x=new st,m=new V(qc(.95,.055,8,22,Math.PI*1.25),ye(2760726,"wood",.82));m.rotation.y=Math.PI/2,m.castShadow=!0,x.add(m);const p=new V(Ft(.014,1.76,.014,.006),ye(11049080,null,.7));p.position.z=.42,x.add(p),x.position.set(0,-.24,.16),n.handL.add(x);for(const _ of[-1,1]){const M=c(.44,.34,.44,.14,i.IRON);M.position.y=-.44,(_<0?n.elbL:n.elbR).add(M)}}else if(t==="necro"){u(l(ro(2,2.6,h,.32,6),0,2.7,-.42),60,8,.55),l(ro(1.5,2.4,h,-.3,5),0,2.66,.44),u(l(ua(1.9,-.05,9,h,.42,f),0,1.4,-.7),50,7,.7);const d=new V(ps(.72,1.5,9),h);d.castShadow=!0,l(d,0,4.3,-.06),l(c(.64,.5,.22,.08,ye(263434,null,.5)),0,4,.4);const g=ye(11050890,"bone",.66,.05),x=ye(329482,null,.4);l(c(.5,.52,.18,.14,g),0,4,.46),l(c(.12,.14,.08,.03,x),-.13,4.06,.55),l(c(.12,.14,.08,.03,x),.13,4.06,.55);for(let E=0;E<4;E++)l(c(.05,.14,.06,.02,x),-.12+E*.08,3.82,.54);for(const E of[-1,1]){const b=De(.19,g,.015,9,12);b.position.set(E*.16,.1,.02),(E<0?n.armL:n.armR).add(b);for(let T=0;T<3;T++){const R=new V(qc(.16+T*.05,.026,6,12,Math.PI),g);R.rotation.set(Math.PI/2,0,E*.3),l(R,E*(.62+T*.02),2.9-T*.24,0)}}const m=new st;l(m,0,3,0);for(let E=0;E<5;E++){const b=new V(Ft(.14,.14,.03,.02),ue(e.glow,2.4)),T=E/5*6.283;b.position.set(Math.cos(T)*1.15,Math.sin(T*1.7)*.4,Math.sin(T)*1.15),m.add(b)}r=m;const p=new st,_=c(.09,3,.09,.03,ye(1709072,"wood",.92));_.position.y=1.05,p.add(_);for(let E=0;E<4;E++){const b=c(.055,.52,.055,.02,g);b.position.set(Math.cos(E*1.57)*.2,2.6,Math.sin(E*1.57)*.2),b.rotation.x=Math.sin(E*1.57)*.45,b.rotation.z=-Math.cos(E*1.57)*.45,p.add(b)}const M=new V(Zl(.2,16,12),ue(e.glow,2.8));M.position.y=2.62,p.add(M);const v=De(.2,g,.02,9,12);v.position.y=2.05,p.add(v),p.position.set(0,-.24,.16),n.handR.add(p)}else if(t==="boss"){l(c(1.62,.98,.98,.3,i.METAL),0,2.98,.02);const d=new V(Zl(.19,16,12),ue(e.glow,3.4));l(d,0,3,.52),a=d;for(let g=0;g<6;g++){const x=g/6*6.283;l(c(.07,.36,.05,.02,ue(e.glow,1.6)),Math.cos(x)*.34,3+Math.sin(x)*.3,.5).rotation.z=-x}l(c(.74,.72,.74,.18,i.METAL),0,4.04,.02),l(c(.5,.06,.12,.02,ue(e.glow,3.2)),0,4.02,.4);for(const g of[-1,1]){const x=g<0?n.armL:n.armR,m=new V(ps(.15,1.5,7),i.IRON);m.rotation.set(-.45,0,g*.75),m.castShadow=!0,l(m,g*.44,4.5,-.06);const p=new V(ps(.09,.8,6),i.IRON);p.rotation.set(-.2,0,g*1.25),l(p,g*.5,4.16,-.2);const _=new V(ca(.4,16,10,Math.PI*.55),i.METAL);_.scale.set(1.25,1,1.15),_.rotation.z=g*.22,_.position.set(g*.16,.08,0),_.castShadow=!0,x.add(_);for(let M=0;M<3;M++){const v=new V(ps(.08,.42,5),i.IRON);v.position.set(g*(.16+M*.1),.26-M*.06,-.22+M*.22),v.rotation.set(-.3,0,g*.5),x.add(v)}}for(let g=0;g<5;g++){const x=new V(ps(.11,.5+g*.06,5),i.IRON);x.rotation.x=-.7,l(x,0,3.34-g*.22,-.5-g*.02)}u(l(ro(2.4,3.4,h,.7,4),0,2.75,-.62),55,8,.55),u(l(ua(2.3,-.05,9,h,.6,f),0,.9,-1),45,7,.7);for(const g of n.eyes)g.material=ue(e.glow,3.4),g.scale.setScalar(1.3)}else{const d=Ab();u(l(ro(1.3,1.9,d,-.24,4),0,2.5,.5),80,10,.35),l(c(.14,.7,.05,.02,d),-.4,3.24,.44).rotation.z=.3,l(c(.14,.7,.05,.02,d),.4,3.24,.44).rotation.z=-.3,l(c(.34,.3,.07,.03,ye(7629916,"cloth",.95)),.26,2.36,.62);const g=ye(2764856,"cloth",.92),x=new V(ca(.56,18,10,Math.PI*.5),g);x.scale.set(1.02,.86,1.02),x.castShadow=!0,l(x,0,4.06,0),l(c(.72,.09,.5,.04,g),0,4.02,.42),l(c(.34,.16,.05,.02,ye(12433060,null,.6)),.38,3.06,.5),l(c(.24,.05,.03,.01,ue(e.glow,1.2)),.38,3.06,.53);const m=new st,p=c(.075,2.7,.075,.03,ye(4865328,"wood",.92));p.position.y=.9,m.add(p);const _=new V(qc(.12,.028,6,14,Math.PI*2),ye(6969914,null,.85));_.rotation.x=Math.PI/2,_.position.y=-.34,m.add(_);const M=ye(8022600,"fuzz",.98),v=ss(f);for(let E=0;E<14;E++){const b=E/14*6.283,T=.06+v()*.13,R=c(.045,.62+v()*.2,.045,.02,M);R.position.set(Math.cos(b)*T,-.72,Math.sin(b)*T),R.rotation.set(Math.sin(b)*.22,0,Math.cos(b)*.22),m.add(R)}m.position.set(0,-.24,.16),n.handR.add(m),n.armL.rotation.z=.1,n.armR.rotation.z=-.06}return{accessories:s,springs:o,runes:r,core:a}}const Wa={shirt:3108816,pants:3752271,skin:15909002,hair:3811868},Vd=[3108816,13650479,4173402,13676591,9063120,3127488,13660072,9080730];function Pb(n){const t=Vd.length,e=Vd[(n%t+t)%t]??Wa.shirt;return{...Wa,shirt:e}}const Ib={sword:{cloth:2830393,leather:3418656,metal:6910847,trim:9382445,skin:11570280,glow:16742970},archer:{cloth:2371624,leather:3483680,metal:4673111,trim:5930822,skin:11045478,glow:10149482},necro:{cloth:2038316,leather:2891833,metal:5787751,trim:9392096,skin:9411232,glow:10640639},boss:{cloth:1315099,leather:2168864,metal:4270900,trim:10692134,skin:6965840,glow:16722462},alba:{cloth:3488322,leather:3945513,metal:6055022,trim:10127974,skin:11044970,glow:16762458}},Lb=1.22;function Cu(n,t={}){const e=new st,i=t.scale??1,s=!(t.simple??!1),o=[],r=la(n.shirt,"cloth"),a=la(n.skin,"skin",.78),c=la(n.pants,"denim"),l=la(n.hair,"fuzz",.97),u={shirt:[r],skin:[a],pants:[c],hair:[l]},h=ft(2436150,"cloth",.72),f=ft(16185594,null,.32),d=ft(1316894,null,.18,.12),g=ft(14201418,"metal",.32,.7),x=ft(10115658,null,.6),m=ft(4864556,"cloth",.86),p=s?1:0,_=(G,Y,ot,tt,mt)=>{const Tt=new V(Ft(G*i,Y*i,ot*i,tt*i,p),mt);return Tt.castShadow=!0,Tt.receiveShadow=!0,Tt},M=(G,Y,ot)=>{const tt=new st;return tt.position.set(G*i,Y*i,0),ot.add(tt),tt},v=1.58,E=new st;E.position.y=v*i,e.add(E);const b=new st;b.position.y=.84*i,E.add(b);const T=(G,Y,ot,tt,mt=b)=>(G.position.set(Y*i,ot*i,tt*i),mt.add(G),o.push(G),G);s&&(T(_(1.63,.28,.99,.09,h),0,.06,0,E),T(_(.32,.32,.14,.05,g),0,.06,.5,E),T(_(.34,.4,.26,.1,m),.62,-.04,.24,E));const R=T(_(1.55,1.8,.92,.26,r),0,0,0);s&&(T(_(1.6,.22,.98,.08,h),0,.8,0),T(_(.16,1.5,.06,.03,h),0,.02,.47),T(_(.3,.3,.1,.06,h),-.42,.34,.48)),T(_(.78,.26,.8,.11,r),-.72,.66,0),T(_(.78,.26,.8,.11,r),.72,.66,0),s||(T(_(1.63,.24,.99,.08,h),0,.06,0,E),T(_(1.6,.2,.98,.07,h),0,.8,0),T(_(.5,.3,.48,.15,a),0,.98,0));const S=new st;S.position.set(0,1.58*i,0),b.add(S);const y=(G,Y,ot,tt)=>T(G,Y,ot,tt,S);if(s&&y(_(.52,.34,.5,.16,a),0,-.78,0),y(_(1.32,1.3,1.3,.3,a),0,0,0),y(_(1.42,.42,1.42,.17,l),0,.62,0),s){y(_(1.44,.34,.28,.11,l),0,.32,-.58);for(let G=0;G<5;G++){const Y=(G-2)*.26;y(_(.2,.3+Math.abs(Y)*.3,.12,.05,l),Y,.4,.6)}y(_(.16,.3,.3,.08,a),-.68,.02,0),y(_(.16,.3,.3,.08,a),.68,.02,0)}const C=[];C.push(y(_(.3,.34,.1,.06,f),-.31,.1,.66)),C.push(y(_(.3,.34,.1,.06,f),.31,.1,.66)),y(_(.15,.2,.08,.035,d),-.31,.07,.71),y(_(.15,.2,.08,.035,d),.31,.07,.71),s&&(y(_(.06,.07,.05,.02,f),-.27,.13,.75),y(_(.06,.07,.05,.02,f),.35,.13,.75),y(_(.34,.09,.1,.03,l),-.31,.34,.68),y(_(.34,.09,.1,.03,l),.31,.34,.68),y(_(.2,.22,.22,.08,a),0,-.12,.7),y(_(.44,.09,.08,.03,x),0,-.38,.68));const O=M(-1.04,.74,b),k=M(1.04,.74,b),D=M(0,-.78,O),N=M(0,-.78,k),U=M(0,-.72,D),W=M(0,-.72,N);for(const{a2:G,e2:Y,h2:ot,sd:tt}of[{a2:O,e2:D,h2:U,sd:-1},{a2:k,e2:N,h2:W,sd:1}]){const mt=_(.56,.88,.64,.2,r);mt.position.y=-.42*i,G.add(mt),o.push(mt);const Tt=_(.5,.82,.58,.19,r);if(Tt.position.y=-.38*i,Y.add(Tt),o.push(Tt),s){const zt=_(.6,.15,.68,.05,h);zt.position.y=-.74*i,Y.add(zt),o.push(zt);const Q=_(.18,.3,.2,.08,a);Q.position.set(tt*.24*i,-.16*i,.14*i),Q.rotation.z=-tt*.5,ot.add(Q),o.push(Q)}const At=_(.52,.48,.6,.19,a);At.position.y=-.17*i,ot.add(At),o.push(At)}D.rotation.x=-.25,N.rotation.x=-.25;const F=M(-.42,0,E),K=M(.42,0,E),et=M(0,-.72,F),ct=M(0,-.72,K),_t=M(0,-.66,et),ut=M(0,-.66,ct);for(const{l:G,k:Y,an:ot}of[{l:F,k:et,an:_t},{l:K,k:ct,an:ut}]){const tt=_(.68,.8,.74,.21,c);tt.position.y=-.4*i,G.add(tt),o.push(tt);const mt=_(.64,.74,.7,.2,c);if(mt.position.y=-.37*i,Y.add(mt),o.push(mt),s){const At=_(.7,.18,.76,.07,c);At.position.set(0,-.02*i,.03*i),Y.add(At),o.push(At);const zt=_(.5,.07,.1,.03,f);zt.position.set(0,-.1*i,.5*i),ot.add(zt),o.push(zt);const Q=_(.8,.1,.98,.04,d);Q.position.set(0,-.33*i,.1*i),ot.add(Q),o.push(Q)}const Tt=_(.78,.36,.96,.13,h);Tt.position.set(0,-.18*i,.1*i),ot.add(Tt),o.push(Tt)}return{root:e,head:S,torso:R,armL:O,armR:k,legL:F,legR:K,weaponSlot:i0(W),elbL:D,elbR:N,kneeL:et,kneeR:ct,handL:U,handR:W,ankleL:_t,ankleR:ut,pelvis:E,spine:b,pelvisY:v*i,scale:i,eyes:C,parts:o,mats:u}}function Db(n,t={}){const e=new st,i=t.scale??1,s=[],o=ye(n.cloth,"cloth",.94),r=ye(n.leather,"skin",.72,.06),a=ye(n.metal,"metal",.36,.85),c=ye(n.trim,"cloth",.7,.1),l=ye(n.skin,"skin",.74),u=ye(1185312,"cloth",.9),h=ye(3818061,"metal",.44,.7),f={CLOTH:o,LEATH:r,METAL:a,TRIM:c,SKIN:l,NIGHT:u,IRON:h},d={shirt:[o],skin:[l],pants:[r],hair:[u]},g=(ut,G,Y,ot,tt)=>{const mt=new V(Ft(ut*i,G*i,Y*i,ot*i),tt);return mt.castShadow=!0,mt.receiveShadow=!0,mt},x=(ut,G,Y)=>{const ot=new st;return ot.position.set(ut*i,G*i,0),Y.add(ot),ot},m=1.72,p=new st;p.position.y=m*i,e.add(p);const _=new st;_.position.y=.56*i,p.add(_);const M=(ut,G,Y,ot,tt=_)=>(ut.position.set(G*i,Y*i,ot*i),tt.add(ut),s.push(ut),ut);M(g(1.06,.52,.72,.2,r),0,.02,0,p),M(g(1.2,.2,.78,.07,h),0,.26,0,p),M(g(.26,.24,.1,.05,c),0,.26,.42,p),M(g(.3,.34,.24,.09,r),.46,.14,.3,p),M(g(.24,.28,.2,.08,r),-.5,.16,.22,p),M(g(1.14,.78,.7,.24,o),0,0,0);const v=M(g(1.46,.92,.86,.28,o),0,.7,0);M(g(1.5,.2,.9,.08,r),0,1.14,0),M(g(.2,1.35,.06,.03,r),-.18,.42,.46).rotation.z=.42,M(g(.16,1.1,.06,.03,r),.3,.34,.44).rotation.z=-.3,M(g(.42,.3,.42,.14,u),0,1.28,0);const E=new st;E.position.set(0,1.7*i,0),_.add(E);const b=De(.52*i,l,.02*i,7,20);b.scale.set(1,1.14,.98),E.add(b),s.push(b);const T=new V(Ft(.44*i,.3*i,.42*i,.12*i),l);T.position.set(0,-.28*i,.06*i),T.castShadow=!0,E.add(T),s.push(T);const R=new V(Ft(.62*i,.16*i,.2*i,.06*i),u);R.position.set(0,.12*i,.4*i),E.add(R),s.push(R);const S=[],y=ye(329482,null,.5);for(const ut of[-1,1]){const G=new V(Ft(.2*i,.14*i,.1*i,.04*i),y);G.position.set(ut*.19*i,-.02*i,.47*i),E.add(G),s.push(G);const Y=new V(Zl(.055*i,10,8),ue(n.glow,2.6));Y.position.set(ut*.19*i,-.02*i,.5*i),E.add(Y),S.push(Y)}const C=x(-.82,1.02,_),O=x(.82,1.02,_),k=x(0,-.72,C),D=x(0,-.72,O),N=x(0,-.66,k),U=x(0,-.66,D);for(const{a2:ut,e2:G,h2:Y}of[{a2:C,e2:k,h2:N},{a2:O,e2:D,h2:U}]){const ot=new V(Ft(.5*i,.36*i,.52*i,.16*i),o);ot.position.y=-.06*i,ot.castShadow=!0,ut.add(ot),s.push(ot);const tt=g(.42,.68,.44,.17,o);tt.position.y=-.42*i,ut.add(tt),s.push(tt);const mt=g(.4,.62,.42,.17,r);mt.position.y=-.34*i,G.add(mt),s.push(mt);const Tt=g(.46,.14,.48,.06,h);Tt.position.y=-.62*i,G.add(Tt),s.push(Tt);const At=De(.23*i,r,.02*i,10,12);At.scale.set(1,1.1,.9),At.position.y=-.18*i,Y.add(At),s.push(At);const zt=g(.26,.1,.24,.04,h);zt.position.set(0,-.14*i,.14*i),Y.add(zt),s.push(zt)}k.rotation.x=-.22,D.rotation.x=-.22;const W=x(-.34,0,p),F=x(.34,0,p),K=x(0,-.85,W),et=x(0,-.85,F),ct=x(0,-.78,K),_t=x(0,-.78,et);for(const{l:ut,k:G,an:Y}of[{l:W,k:K,an:ct},{l:F,k:et,an:_t}]){const ot=g(.5,.84,.56,.2,o);ot.position.y=-.42*i,ut.add(ot),s.push(ot);const tt=g(.5,.22,.5,.1,h);tt.position.set(0,-.8*i,.06*i),ut.add(tt),s.push(tt);const mt=g(.44,.76,.5,.19,r);mt.position.y=-.36*i,G.add(mt),s.push(mt);const Tt=g(.54,.2,.58,.08,r);Tt.position.y=-.68*i,G.add(Tt),s.push(Tt);const At=g(.5,.26,.82,.11,u);At.position.set(0,-.06*i,.14*i),Y.add(At),s.push(At);const zt=g(.52,.09,.86,.04,h);zt.position.set(0,-.16*i,.14*i),Y.add(zt),s.push(zt)}return{root:e,head:E,torso:v,armL:C,armR:O,legL:W,legR:F,weaponSlot:i0(U),elbL:k,elbR:D,kneeL:K,kneeR:et,handL:N,handR:U,ankleL:ct,ankleR:_t,pelvis:p,spine:_,pelvisY:m*i,scale:i,eyes:S,parts:s,mats:d,pal:n,mat:f}}function r0(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function a0(n){const t=n<0?0:n>1?1:n;return t<.28?-.42*Math.sin(t/.28*1.5708):t<.55?-.42+1.42*Math.pow((t-.28)/.27,.55):1-Math.pow((t-.55)/.45,1.4)}function kb(n,t){t.root.parent?.remove(t.root),n.remove(t.root),t.root.traverse(e=>{const i=e;if(!i.isMesh)return;i.geometry.dispose();const s=i.material;if(Array.isArray(s))for(const o of s)o.dispose();else s.dispose()})}const Nb=37335;function Ob(){const n=r0(Nb),t=new st,e=ft(8018488,"fur",.98),i=ft(9399365,"fur",.98),s=ft(6506283,"fur",.99),o=ft(10846810,"fur",.98),r=ft(14206106,"bone",.7),a=ft(11901550,"bone",.55),c=De(1.3,e,.1,3,40);c.scale.set(1,.92,1.35),c.position.set(0,1.95,-.1),t.add(c);const l=De(1.34,s,.14,3.4,34);l.scale.set(1,.92,1.35),l.position.set(0,1.94,-.12),t.add(l);const u=[i,s,o,i];for(let D=0;D<4;D++){const N=14-D*2,U=.96+D*.1;for(let W=0;W<N;W++){const F=W/N*6.283+D*.4,K=De(.28+D*.03,u[D],.05,7,12);K.scale.set(1,.46,1.7),K.position.set(Math.cos(F)*U,1.95+Math.sin(F)*(.7+D*.06),-.1+Math.sin(F*1.7)*.72-D*.12),K.rotation.set(n()*.5,F,n()*.4),t.add(K)}}for(let D=0;D<6;D++){const N=De(.24,s,.05,7,9);N.scale.set(.8,.4,2.1),N.position.set((D-2.5)*.22,2.05+n()*.3,-1.9),N.rotation.set(-.3+n()*.3,(D-2.5)*.16,0),t.add(N)}const h=De(.85,e,.07,4,26);h.scale.set(1,.95,.9),h.position.set(0,2,-1.35),t.add(h);const f=De(.62,i,.06,6,26);f.position.set(0,2.82,.72),t.add(f);for(let D=0;D<7;D++){const N=De(.16,o,.04,7,8);N.scale.set(1,.5,1.5);const U=D/7*3.14-1.57;N.position.set(Math.sin(U)*.34,3.24+Math.cos(U)*.1,.62+Math.cos(U)*.14),N.rotation.set(-.7,U*.5,0),t.add(N)}const d=new V(new Ne(.42,.55,.6,18),i);d.position.set(0,2.5,.5),d.rotation.x=.4,d.castShadow=!0,t.add(d);for(let D=0;D<8;D++){const N=D/8*6.283,U=De(.19,s,.04,7,8);U.scale.set(1,.42,1.3),U.position.set(Math.cos(N)*.5,2.42+Math.sin(N)*.16,.44+Math.sin(N)*.2),U.rotation.set(.5,N,0),t.add(U)}const g=new st;g.position.set(0,2.52,.62),g.rotation.x=.3,t.add(g);const x=[[.155,.135,.5,.25],[.135,.105,.7,.85],[.105,.072,.7,1.55],[.072,.04,.62,2.16]];for(const[D,N,U,W]of x){const F=new V(new Ne(N,D,U,14),r);F.rotation.x=Math.PI/2,F.position.z=W,F.castShadow=!0,g.add(F)}const m=new V(new kn(.035,.05,2.2),a);m.position.set(0,.1,1.2),g.add(m);const p=ft(3811868,null,.5);for(const D of[-1,1]){const N=new V(new Me(.042,8,6),p);N.position.set(D*.03,.02,2.4),g.add(N)}const _=ft(1314828,null,.12,.15),M=ft(16777215,null,.1);for(const D of[-1,1]){const N=new V(new Me(.115,16,12),_);N.position.set(D*.42,2.95,1.02),t.add(N);const U=De(.15,i,.03,7,8);U.scale.set(1,.5,1),U.position.set(D*.42,3.06,.98),t.add(U);const W=new V(new Me(.035,8,6),M);W.position.set(D*.46,3.02,1.12),t.add(W);const F=De(.3,i,.05,8,12);F.scale.set(.4,.9,1.1),F.position.set(D*1.12,2,.05),t.add(F);for(let K=0;K<5;K++){const et=De(.15,s,.04,7,8);et.scale.set(.3,.5,1.6),et.position.set(D*1.2,2.24-K*.2,-.1-K*.06),et.rotation.set(.2,0,D*.2),t.add(et)}}const v=new st,E=new st,b=new st,T=new st,R=new st,S=new st,y=ft(13208122,"skin",.75),C=ft(2761498,null,.4),O=ft(11564590,"scale",.6),k=[[v,b,R,-1],[E,T,S,1]];for(const[D,N,U,W]of k){D.position.set(W*.46,1.05,.05);const F=new V(new Ne(.165,.185,.56,14),y);F.position.y=-.27,F.castShadow=!0,D.add(F),N.position.y=-.54,D.add(N);const K=new V(new Me(.155,12,10),y);K.castShadow=!0,N.add(K);const et=new V(new Ne(.135,.165,.56,14),y);et.position.y=-.28,et.castShadow=!0,N.add(et);for(let _t=0;_t<3;_t++){const ut=new V(Ft(.2,.06,.14,.02,0),O);ut.position.set(0,-.14-_t*.16,.12),N.add(ut)}U.position.y=-.52,N.add(U);for(const _t of[-.34,0,.34]){const ut=new V(new Ne(.07,.05,.62,10),y);ut.rotation.x=Math.PI/2,ut.rotation.y=_t,ut.position.set(Math.sin(_t)*.24,.03,.28),ut.castShadow=!0,U.add(ut);const G=new V(new dn(.045,.2,8),C);G.rotation.x=Math.PI/2+.2,G.rotation.y=_t,G.position.set(Math.sin(_t)*.42,-.02,.62),U.add(G)}const ct=new V(new Ne(.06,.04,.3,8),y);ct.rotation.x=Math.PI/2,ct.position.set(0,.03,-.16),U.add(ct),t.add(D)}return{root:t,type:"kiwi",legL:v,legR:E,kneeL:b,kneeR:T,footL:R,footR:S,head:f,body:c,grip:null}}const Ub=23063;function Fb(){const n=r0(Ub),t=new st,e=ft(14673900,"scale",.35,.25),i=ft(3104122,"scale",.3,.35),s=ft(7313068,"scale",.32,.3),o=ft(1916759,"scale",.28,.4),r=De(1,e,.06,3.5,28);r.scale.set(.62,1,2),r.position.set(0,2,.1),r.rotation.x=-.12,t.add(r);const a=De(.99,s,.05,4,24);a.scale.set(.58,.86,1.96),a.position.set(0,2.18,.09),a.rotation.x=-.12,t.add(a);const c=De(.98,i,.05,4,26);c.scale.set(.52,.62,1.92),c.position.set(0,2.42,.08),c.rotation.x=-.12,t.add(c);const l=ft(10469586,"scale",.24,.5);for(const C of[-1,1])for(let O=0;O<5;O++)for(let k=0;k<11;k++){const D=1.55-k*.3,N=1.62+O*.3+k%2*.06,U=new V(Ft(.06,.22,.24,.06,0),l),W=1-Math.abs(D)*.17;U.scale.setScalar(Math.max(.35,W)),U.position.set(C*(.52*W),N,D),U.rotation.set(.1,0,C*.25),t.add(U)}const u=ft(1321274,null,.35,.3);for(let C=0;C<11;C++){const O=new V(Ft(.64,.07,.18,.03,0),u);O.position.set(0,2.8-Math.abs(C-5)*.035,1.5-C*.3),O.rotation.z=(C%2?1:-1)*.16,t.add(O)}const h=ft(16777215,null,.25,0,2763306);for(let C=0;C<26;C++){const O=new V(new ko(.04+n()*.035,0),h),k=n()*6.283;O.position.set(Math.cos(k)*.58,1.5+n()*1.5,-1.6+n()*3.2),O.rotation.set(n()*3,n()*3,n()*3),t.add(O)}for(const C of[-1,1])for(let O=0;O<3;O++){const k=new V(Ft(.05,.44,.1,.03,0),o);k.position.set(C*.5,2.18,1.02-O*.13),k.rotation.z=C*.14,t.add(k)}const f=new V(Ft(.68,.52,.08,.04),ft(1917528,"scale",.4,.3));f.position.set(0,2.15,1.12),t.add(f);const d=new V(Ft(.36,.14,.26,.06),ft(9067098,null,.6));d.position.set(0,1.82,1.92),t.add(d);const g=new V(new yn(.17,.045,8,16),ft(10513002,null,.55));g.position.set(0,1.82,1.98),t.add(g);const x=new Jn({color:4882332,roughness:.4,metalness:.15,side:Be,transparent:!0,opacity:.92}),m=ft(2841202,null,.35,.2),p=(C,O,k,D,N,U,W=0)=>{for(let F=0;F<O;F++){const K=new V(new Ne(.018,.012,k,6),m);K.position.set(0,N,U),K.rotation.set(W,0,(F/(O-1)-.5)*D),K.translateY(k*.42),C.add(K)}},_=ft(16053488,null,.15),M=ft(1053720,null,.1,.15),v=ft(16777215,null,.1);for(const C of[-1,1]){const O=new V(new Me(.2,16,12),_);O.position.set(C*.4,2.28,1.5),t.add(O);const k=new V(new Me(.115,12,10),M);k.position.set(C*.46,2.28,1.62),t.add(k);const D=new V(new Me(.035,8,6),v);D.position.set(C*.5,2.36,1.68),t.add(D);const N=new st;N.position.set(C*.52,1.5,.5),N.rotation.set(.3,0,C*.75),t.add(N),N.add(new V(new dn(.34,.95,3),x)),p(N,4,.8,.5,-.4,0)}const E=new st;E.position.set(0,3.2,.35),t.add(E),E.add(new V(new dn(.42,.95,3),x)),p(E,5,.85,.55,-.45,0);const b=new V(new dn(.26,.55,3),x);b.position.set(0,3.05,-.85),t.add(b);const T=new V(new dn(.28,.6,3),x);T.position.set(0,1.28,-.5),T.rotation.x=Math.PI,t.add(T);const R=new st;R.position.set(0,2.1,-1.85),t.add(R);for(const C of[1,-1]){const O=new V(new dn(.5,1.25,3),x);O.position.set(0,C*.5,-.45),O.rotation.x=C*.55+(C>0?0:Math.PI),O.scale.set(.34,1,1),R.add(O);for(let k=0;k<5;k++){const D=new V(new Ne(.02,.013,1.1,6),m);D.position.set(0,C*(.28+k*.14),-.5-k*.06),D.rotation.x=Math.PI/2-C*.35,R.add(D)}}const S=new st,y=new st;for(const[C,O]of[[S,-1],[y,1]]){C.position.set(O*.34,1.15,0);const k=new V(new dn(.26,.85,3),x);k.position.y=-.42,k.rotation.x=Math.PI,k.scale.set(1,1,.5),C.add(k),p(C,3,.7,.4,-.75,0,Math.PI),t.add(C)}return{root:t,type:"fish",body:r,legL:S,legR:y,tail:R,grip:null}}let Yc=20260813;function $e(){return Yc=(Yc*1664525+1013904223)%4294967296,Yc/4294967296}let Ge=null;function Ja(n,t,e){if(!Ge){Ge=new Uint8Array(512);const E=new Uint8Array(256);for(let b=0;b<256;b++)E[b]=b;for(let b=255;b>0;b--){const T=$e()*(b+1)|0,R=E[b];E[b]=E[T],E[T]=R}for(let b=0;b<512;b++)Ge[b]=E[b&255]}const i=E=>E*E*E*(E*(E*6-15)+10),s=(E,b,T)=>E+T*(b-E),o=(E,b,T,R)=>{const S=E&15,y=S<8?b:T,C=S<4?T:S===12||S===14?b:R;return(S&1?-y:y)+(S&2?-C:C)},r=Math.floor(n)&255,a=Math.floor(t)&255,c=Math.floor(e)&255,l=n-Math.floor(n),u=t-Math.floor(t),h=e-Math.floor(e),f=i(l),d=i(u),g=i(h),x=Ge[r]+a,m=Ge[x]+c,p=Ge[x+1]+c,_=Ge[r+1]+a,M=Ge[_]+c,v=Ge[_+1]+c;return s(s(s(o(Ge[m],l,u,h),o(Ge[M],l-1,u,h),f),s(o(Ge[p],l,u-1,h),o(Ge[v],l-1,u-1,h),f),d),s(s(o(Ge[m+1],l,u,h-1),o(Ge[M+1],l-1,u,h-1),f),s(o(Ge[p+1],l,u-1,h-1),o(Ge[v+1],l-1,u-1,h-1),f),d),g)}function zb(n,t,e){let i=0,s=.5,o=1;for(let r=0;r<3;r++)i+=s*Math.abs(Ja(n*o,t*o,e*o)),o*=2.07,s*=.5;return i-.34}let ha=null;function Pu(n,t){const e=document.createElement("canvas");return e.width=n,e.height=n,e}function da(n,t,e){const i=new mu(n);return i.wrapS=So,i.wrapT=So,i.anisotropy=4,t&&i.repeat.set(t,e??t),i}function Bb(n,t,e,i){const s=Pu(n),o=s.getContext("2d");o.fillStyle=t[0],o.fillRect(0,0,n,n),o.lineCap="round",o.lineWidth=i;for(let r=0;r<e;r++){const a=$e()*n,c=$e()*n,l=n*(.008+$e()*.016),u=$e()*6.2832,h=Math.PI*(1.1+$e()*1.2);o.strokeStyle=t[1+($e()*(t.length-1)|0)];for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++)o.beginPath(),o.arc(a+f*n,c+d*n,l,u,u+h),o.stroke()}return s}function Hb(n){const t=Pu(n),e=t.getContext("2d"),i=24,s=n/i;for(let o=0;o<i;o++){const r=e.createLinearGradient(o*s,0,(o+1)*s,0);r.addColorStop(0,"#0c1120"),r.addColorStop(.28,"#26314a"),r.addColorStop(.52,"#3d4c6a"),r.addColorStop(.72,"#212c42"),r.addColorStop(1,"#090d18"),e.fillStyle=r,e.fillRect(o*s,0,s+1,n)}e.globalAlpha=.12;for(let o=0;o<2200;o++){const r=$e()*n,a=$e()*n;e.strokeStyle=$e()>.5?"#67799e":"#05080f",e.lineWidth=1,e.beginPath(),e.moveTo(r,a),e.lineTo(r+($e()-.5)*3,a+($e()-.5)*14),e.stroke()}return e.globalAlpha=1,t}function Wd(n,t,e,i){const s=Pu(n),o=s.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,n,n),o.fillStyle="#fff";for(let r=0;r<t;r++){const a=$e()*n,c=$e()*n,l=i*3.4;for(let u=0;u<e;u++)o.beginPath(),o.arc(a+($e()-.5)*l,c+($e()-.5)*l,i*(.45+$e()*.8),0,6.2832),o.fill()}return s}function Gb(){return ha||(ha={skin:da(Bb(512,["#5b8e3e","#7cb455","#4a7431","#8fc767","#3d6428"],1500,3.4),3,2),cord:da(Hb(512),2.4,2),fuzz:[da(Wd(128,260,5,1.5),9,6),da(Wd(128,150,4,1.2),9,6)]},ha)}function In(n,t,e,i,s,o,r){const a=new Me(1,i,s);a.scale(n,t,e);const c=a.attributes.position,l=a.attributes.normal,u=new L,h=new L;for(let f=0;f<c.count;f++){u.fromBufferAttribute(c,f),h.fromBufferAttribute(l,f).normalize();const d=zb(u.x*r,u.y*r,u.z*r)*o+Ja(u.x*1.9,u.y*1.9,u.z*1.9)*o*.72;c.setXYZ(f,u.x+h.x*d,u.y+h.y*d,u.z+h.z*d)}return c.needsUpdate=!0,a.computeVertexNormals(),a}function fa(n,t,e){const i=n.attributes.position,s=n.attributes.normal,o=new L,r=new L;for(let a=0;a<i.count;a++){o.fromBufferAttribute(i,a),r.fromBufferAttribute(s,a).normalize();const c=Math.atan2(o.z,o.x),l=Math.sin(c*t)*e+Ja(o.x*6,o.y*6,o.z*6)*e*.34;i.setXYZ(a,o.x+r.x*l,o.y+r.y*l,o.z+r.z*l)}return i.needsUpdate=!0,n.computeVertexNormals(),n}function Vb(n,t,e){const i=n.clone(),s=i.attributes.position,o=i.attributes.normal,r=new L,a=new L;for(let c=0;c<s.count;c++){r.fromBufferAttribute(s,c),a.fromBufferAttribute(o,c).normalize();const l=1+Ja(r.x*5.5,r.y*5.5,r.z*5.5)*.45;s.setXYZ(c,r.x+a.x*t*l,r.y+a.y*t*l-e*(1-Math.max(0,a.y)*.7),r.z+a.z*t*l)}return s.needsUpdate=!0,i.computeVertexNormals(),i}const Jo=new Oe,jc=-.28,c0=1.05,$d=2.36*c0;function Wb(){const n=Gb(),t=new ln({map:n.skin}),e=new ln({color:12439718,map:n.skin}),i=new ln({color:10468992,map:n.skin}),s=new ln({map:n.cord}),o=new ln({color:856608}),r=new ln({color:15525845}),a=new ln({color:4021390}),c=new ln({color:788999}),l=new ln({color:2234639}),u=new ln({color:14213304}),h=[0,1].map(D=>new ln({color:[9225315,10802296][D],alphaMap:n.fuzz[D],transparent:!0,depthWrite:!1,opacity:[.55,.32][D]})),f=new st,d=(D,N,U=0,W=0,F=0,K=f)=>{const et=new V(D,N);return et.position.set(U,W,F),et.castShadow=!0,et.receiveShadow=!0,K.add(et),et},g=(D,N,U,W,F,K=f,et=1)=>{const ct=new st;ct.position.set(N,U,W);const _t=new V(D,t);_t.castShadow=!0,_t.receiveShadow=!0,ct.add(_t);for(let ut=0;ut<F;ut++){const G=new V(Vb(D,(ut+1)*.018*et,(ut+1)*.007*et),h[ut]);G.renderOrder=2+ut,ct.add(G)}return K.add(ct),ct},x=(D,N,U,W)=>{const F=new st;return F.position.set(N,U,W),D.add(F),F},m=(D,N,U,W,F=0,K=0,et=Math.PI*2)=>{const ct=et>=Math.PI*1.99,_t=new V(new yn(1,W,6,ct?56:36,et),i);_t.scale.set(N,U,1),_t.position.y=F,_t.rotation.z=K,D.add(_t);const ut=Math.max(8,Math.round((N+U)*16*(et/6.2832))),G=new Fv(new kn(.055,.018,.018),u,ut);for(let Y=0;Y<ut;Y++){const ot=K+(Y+.5)/ut*et;Jo.position.set(Math.cos(ot)*N,Math.sin(ot)*U+F,0),Jo.rotation.set(0,0,ot+Math.PI/2+(Y%2?.55:-.55)),Jo.scale.setScalar(1),Jo.updateMatrix(),G.setMatrixAt(Y,Jo.matrix)}G.instanceMatrix.needsUpdate=!0,D.add(G)},p=x(f,0,0,0),_=x(p,0,0,0);g(In(.94,.87,.79,32,22,.03,6.2),0,jc,0,2,_),m(_,.985,.915,.019,jc,.6,Math.PI*.63);const M=x(_,0,.94,.02);g(In(.9,.77,.81,32,22,.03,6.6),0,0,0,2,M),m(M,.925,.795,.018,0,0,Math.PI*2),g(In(.76,.45,.55,22,15,.026,8),0,-.16,.34,1,M,1.25);{const D={x:.798,y:.4725,z:.5775,cy:-.16,cz:.34},N=15;for(let U=0;U<N;U++){const W=(U/(N-1)-.5)*1.6,F=Math.sin(W)*.47,K=-.05+W*W*.15,et=K-D.cy,ct=1-(F/D.x)**2-(et/D.y)**2,_t=D.z*Math.sqrt(Math.max(.04,ct))+D.cz+.012,ut=d(new Me(.024,8,6),l,F,K,_t,M);ut.scale.set(2,.75,.9),ut.rotation.z=-W*.85,ut.rotation.y=-F*.9}for(const U of[-1,1])d(new Me(.032,8,6),e,.15*U,.1,.83,M).scale.set(1,.7,.5)}const v=[];{const D={x:.3604,y:.2756,z:.3392,cx:.44,cy:.53,cz:.24};for(const U of[-1,1]){g(In(.34,.26,.32,16,11,.024,9),.44*U,.53,.24,1,M,1.9);const W=.4*U,F=.47,K=Math.abs(W)-D.cx,et=F-D.cy,ct=1-(K/D.x)**2-(et/D.y)**2,_t=D.z*Math.sqrt(Math.max(.06,ct))+D.cz+.015,ut=new st;ut.position.set(W,F,_t),ut.lookAt(W*1.9,F*1.35,_t*2),M.add(ut),d(new yn(.108,.024,8,18),e,0,0,-.012,ut).scale.set(1,.94,1),d(new Me(.098,16,12),c,0,0,.012,ut).scale.set(1,1.08,.84),v.push(ut)}const N=d(new yn(.115,.038,8,18,Math.PI),t,0,.79,0,M);N.rotation.y=Math.PI/2,N.scale.set(.68,1.3,1)}const E=D=>{const N=x(_,.78*D,.24,.02);g(In(.225,.255,.225,18,13,.024,9.5),0,-.15,0,1,N,2.2);const U=x(N,0,-.33,0);g(In(.205,.235,.205,18,13,.024,10),0,-.15,0,1,U,2.2);const W=x(U,0,-.34,0);return g(In(.235,.215,.225,16,12,.026,10),0,-.03,0,1,W,2.4),d(In(.088,.13,.095,12,9,.02,14),t,.17*D,.02,.09,W),{sh:N,el:U,wr:W}},b=E(-1),T=E(1),R=D=>{const N=x(_,.34*D,-.86,0);g(In(.3,.4,.32,18,13,.024,9),0,-.3,0,1,N,2);const U=x(N,0,-.64,.02);g(In(.255,.34,.27,18,13,.024,10),0,-.26,0,1,U,2.2);const W=x(U,0,-.56,0);g(In(.32,.185,.4,16,12,.026,9),0,-.06,.1,1,W,2);for(const ct of[-1,0,1])d(In(.088,.075,.13,10,8,.018,14),t,ct*.16,-.1,.4,W);const F=new Ne(.385,.35,.78,20,3);fa(F,30,.011);const K=d(F,s,0,-.34,0,N);K.rotation.z=-.03*D;const et=d(new yn(.352,.05,8,20),o,0,-.7,0,N);return et.rotation.x=Math.PI/2,{hip:N,knee:U,ankle:W}},S=R(-1),y=R(1);{const D=new Me(1,28,18,0,6.2832,Math.PI*.3,Math.PI*.7);D.scale(.968,.898,.818),fa(D,34,.012),d(D,s,0,jc,0,_);const N=new Me(1,24,16);N.scale(.5,.4,.42),fa(N,22,.011),d(N,s,0,.2,.52,_).scale.set(1,1,.85);const W=new Me(1,24,16);W.scale(.76,.45,.56),fa(W,26,.011),d(W,s,0,-.92,0,_);for(const F of[-1,1]){d(new kn(.165,.54,.085),s,.3*F,.62,.6,_).rotation.set(-.17,0,.1*F),d(new kn(.175,.085,.68),s,.38*F,.79,.24,_).rotation.set(.42,0,.12*F),d(new kn(.165,.62,.085),s,.34*F,.38,-.58,_).rotation.set(.2,0,.08*F),d(new Ne(.098,.098,.038,14),r,.3*F,.4,.715,_).rotation.set(Math.PI/2-.14,0,0);for(let ut=0;ut<4;ut++){const G=ut%2?.032:-.032,Y=ut<2?.032:-.032;d(new Ne(.014,.014,.05,6),a,.3*F+G,.4+Y,.72,_).rotation.set(Math.PI/2-.14,0,0)}}}const C=new st;C.position.set(.02,-.1,.06),C.rotation.set(2.318,.749,-.66),T.wr.add(C);const O=d(new yn(.108,.052,8,18),t,0,-.01,0,C);O.rotation.x=Math.PI/2,O.scale.set(1,1,.82),T.sh.rotation.set(-.14,0,.44),T.el.rotation.set(-1.42,0,.14),b.sh.rotation.set(0,0,-.2),b.el.rotation.set(-.3,0,0);const k=new st;return k.scale.setScalar(c0),k.position.y=$d,k.add(f),{root:k,type:"parsley",body:p,torso:_,head:M,grip:C,eyes:v,aL:b,aR:T,lL:S,lR:y,legL:S.hip,legR:y.hip,baseY:$d}}const $b=1.95;function Xb(n,t){const e=Math.sin(t.walkPhase),i=t.moving?1:0,s=t.stance;n.legL.rotation.x=e*.85*i,n.legR.rotation.x=-e*.85*i,n.kneeL.rotation.x=Math.max(0,-e)*.95*i+.08,n.kneeR.rotation.x=Math.max(0,e)*.95*i+.08,n.footL.rotation.x=-Math.max(0,-e)*.4*i,n.footR.rotation.x=-Math.max(0,e)*.4*i,n.legL.rotation.z=0,n.legR.rotation.z=0;const o=t.moving?Math.abs(e)*.14:Math.sin(t.time*1.8)*.04;n.root.rotation.z=t.moving?e*.07:0,n.root.rotation.x=0,n.root.rotation.y=0,n.head.rotation.set(0,0,0);let r=0,a=0;if(s>.002&&(r+=.3*s,a+=.22*s,n.legL.rotation.x+=-.34*s,n.legR.rotation.x+=.3*s,n.kneeL.rotation.x+=.55*s,n.kneeR.rotation.x+=.45*s,n.footR.rotation.x+=-.3*s,n.head.rotation.x+=-.26*s),t.attackT>0){const c=a0(t.attackT),l=Math.max(0,c);if(t.comboStep===0){n.legR.rotation.x=.3*s-1.55*c;const u=Math.max(0,-c/.42);n.kneeR.rotation.x=.45*s+Math.max(u*1.25,.9-l*1),n.footR.rotation.x=-.3*s-l*.5,n.legL.rotation.x=-.34*s+.3*l,n.kneeL.rotation.x=.55*s+.3*l,r+=-.3*c,a+=.1*l,n.root.rotation.y=-.14*c}else if(t.comboStep===1)n.legL.rotation.x=-.34*s-.95*c,n.legL.rotation.z=-1.35*l,n.kneeL.rotation.x=.55*s+Math.max(0,1.2-l*1.4),n.footL.rotation.x=-l*.45,n.legR.rotation.x=.3*s+.24*l,n.kneeR.rotation.x=.45*s+.42*l,n.root.rotation.y=.85*c,n.root.rotation.z=-.3*l,r+=.16*l,n.head.rotation.y=-.5*c;else{const u=Math.sin(Math.min(1,t.attackT/.5)*Math.PI),h=.55*Math.max(0,-c*2);n.legL.rotation.x=-1.45*l+h,n.legR.rotation.x=-1.45*l+h;const f=Math.max(0,1.7-l*1.9)+.08;n.kneeL.rotation.x=f,n.kneeR.rotation.x=f,n.footL.rotation.x=-l*.6,n.footR.rotation.x=-l*.6,a+=-u*1.15+Math.max(0,(t.attackT-.5)/.5)*.7,r+=.55*c,n.head.rotation.x=.4*l}}n.body.position.y=$b+o,n.root.rotation.x=r,n.root.position.y=-a}function qb(n,t){return t===1?n.footL:n.footR}function Yb(n,t){const e=t.time,i=t.moving?10:3;n.root.rotation.y=Math.sin(e*i)*(t.moving?.2:.07),n.tail.rotation.y=Math.sin(e*(t.moving?12:4)+1.1)*.55,n.root.position.y=t.moving?Math.abs(Math.sin(t.walkPhase*.9))*.16:Math.sin(e*2.2)*.09;const s=t.moving?.6:0;n.legL.rotation.x=Math.sin(t.walkPhase)*s,n.legR.rotation.x=-Math.sin(t.walkPhase)*s,n.root.rotation.x=t.attackT>0?-.5*Math.sin(t.attackT*Math.PI):0}const Xd={from:new L(0,.1,-.1),to:new L(0,.05,.85)};function jb(n,t){const e=t.moving?1:0,i=Math.sin(t.walkPhase*.9),s=t.stance,o=t.time;if(n.lL.hip.rotation.x=i*.62*e,n.lR.hip.rotation.x=-i*.62*e,n.lL.knee.rotation.x=Math.max(0,-i)*.95*e+.06,n.lR.knee.rotation.x=Math.max(0,i)*.95*e+.06,n.lL.ankle.rotation.x=-i*.22*e-.04,n.lR.ankle.rotation.x=i*.22*e-.04,t.airborne){const h=Math.min(1,Math.abs(t.vy??0)/7+.35);n.lL.hip.rotation.x=-.75*h,n.lR.hip.rotation.x=-.75*h,n.lL.knee.rotation.x=1.5*h,n.lR.knee.rotation.x=1.5*h,n.lL.ankle.rotation.x=-.6*h,n.lR.ankle.rotation.x=-.6*h}n.aL.sh.rotation.x=-i*.45*e-(t.airborne?.9:0),n.aL.sh.rotation.z=-.2,n.aL.el.rotation.x=-.3-Math.max(0,-i)*.25*e;let r=0,a=0;if(s>.002){const h=Math.sin(o*2.7)*.5+.5;r=.16*s,n.lL.hip.rotation.x+=-.3*s,n.lR.hip.rotation.x+=.24*s,n.lL.knee.rotation.x+=.5*s,n.lR.knee.rotation.x+=.38*s,n.lL.ankle.rotation.x+=.14*s,n.lR.ankle.rotation.x+=-.16*s,n.torso.rotation.y+=.34*s,n.torso.rotation.x+=(.13+h*.025)*s,n.aL.sh.rotation.x+=-.55*s,n.aL.sh.rotation.z+=-.45*s,n.aL.el.rotation.x+=-.85*s}const c=-.14-1.55*s,l=.44+.16*s,u=-1.42+.55*s;if(n.aR.sh.rotation.set(c,0,l),n.aR.el.rotation.set(u,0,.14),t.attackT>0){const h=a0(t.attackT);t.comboStep===0?(n.aR.sh.rotation.x=c+1.95*h,n.aR.sh.rotation.z=l+.34*h,n.torso.rotation.y=.34*s-.72*h,n.head.rotation.x=.2*h):t.comboStep===1?(n.aR.sh.rotation.x=c+1.1*h,n.aR.sh.rotation.z=l-1.75*h,n.torso.rotation.y=.34*s+.7*h,n.head.rotation.x=.12*h,a=.25*h):(n.aR.sh.rotation.x=c+2.45*h,n.aR.sh.rotation.z=l-.22*h,n.torso.rotation.y=.34*s-.18*h,n.torso.rotation.x=.13*s+.45*h,n.head.rotation.x=.34*h,r+=.22*Math.max(0,h)),n.aR.el.rotation.x=u+.75*h,n.aL.sh.rotation.x+=-.55*h,n.aL.sh.rotation.z+=.3*h;const f=Math.max(0,h);n.lR.hip.rotation.x+=f*.34,n.lL.hip.rotation.x-=f*.26,n.lR.knee.rotation.x+=f*.2}n.head.rotation.y=a,n.root.position.y=n.baseY-r,n.body.position.y=Math.sin(o*1.6)*(t.moving?.01:.03)}function Kb(n,t){switch(n.type){case"kiwi":Xb(n,t);return;case"fish":Yb(n,t);return;case"parsley":jb(n,t);return}}const Zb=["sword","archer","necro","boss","alba"];function Jb(n){return n!=null&&Zb.includes(n)}const Qb=.9,tw=3.2,ew=.09;function qd(n,t={}){if(Jb(n))return sw(n);const e=nw(n);return e?ow(n,e):rw(n,t)}function nw(n){return n==="kiwi"?Ob():n==="fish"?Fb():n==="parsley"?Wb():null}const iw={sword:{x:1.1,y:1,z:1.06},archer:{x:.9,y:1.02,z:.92},necro:{x:.89,y:1.08,z:.9},boss:{x:1.06,y:1,z:1.06},alba:{x:1,y:.98,z:1}};function sw(n){const t=n==="boss"?Lb:1,e=Db(Ib[n],{scale:t}),i=Cb(e,n),s=iw[n],o=new st;o.scale.set(s.x,s.y,s.z),o.add(e.root);const r=i.runes,a=i.core;return{root:o,rig:e,creature:null,classId:n,weaponSlot:e.weaponSlot,pose(c){o0(e,c)},update(c){r&&(r.rotation.y=c*Qb),a&&a.scale.setScalar(1+Math.sin(c*tw)*ew)},dispose(c){c.remove(o),l0(c,e)}}}function ow(n,t){const e=new st;return e.add(t.root),{root:e,rig:null,creature:t,classId:n,weaponSlot:t.grip,pose(i){Kb(t,{walkPhase:i.walkPhase,moving:i.moving,stance:i.stance??0,attackT:i.attackT,comboStep:i.comboStep,airborne:i.airborne,dead:i.dead,vy:i.vy??0,time:i.time??0})},update(){},dispose(i){i.remove(e),kb(i,t)}}}function rw(n,t){const e=Cu(aw(n,t.coopSlot));return{root:e.root,rig:e,creature:null,classId:n,weaponSlot:e.weaponSlot,pose(i){o0(e,i)},update(){},dispose(i){l0(i,e)}}}function aw(n,t){if(n!==null){const e=Pi[n].col;return{shirt:e.shirt,pants:e.pants,skin:e.skin,hair:Wa.hair}}return t===void 0?Wa:Pb(t)}function l0(n,t){t.root.parent?.remove(t.root),n.remove(t.root),t.root.traverse(e=>{const i=e;if(!i.isMesh)return;i.geometry.dispose();const s=i.material;if(Array.isArray(s))for(const o of s)o.dispose();else s.dispose()})}const Yd=new Map,jd=new Map,Iu=new WeakSet;function Di(n,t){const e=Yd.get(n);if(e)return e;const i=t();return Yd.set(n,i),Iu.add(i),i}function cw(n,t){const e=jd.get(n);if(e)return e;const i=t();return jd.set(n,i),Iu.add(i),i}function Yt(n){return Iu.add(n),n}class lw extends Zn{constructor(t,e,i,s){super(),this.radius=t,this.height=e,this.turns=i,this.y0=s}getPoint(t,e=new L){const i=t*Math.PI*2*this.turns,s=this.radius+Math.sin(t*Math.PI)*this.radius*.09;return e.set(Math.cos(i)*s,this.y0+t*this.height,Math.sin(i)*s)}}function Qn(n,t,e,i){return Di(`bl${n},${t},${e},${i}`,()=>{const s=new Fs;s.moveTo(-t,0),s.lineTo(-t*.97,n*.58),s.lineTo(-t*.74,n*.87),s.quadraticCurveTo(-t*.46,n*(1-i*.02),0,n),s.quadraticCurveTo(t*.46,n*(1-i*.02),t*.74,n*.87),s.lineTo(t*.97,n*.58),s.lineTo(t,0),s.closePath();const o=new yr(s,{depth:e,bevelEnabled:!0,bevelThickness:e*.36,bevelSize:e*.32,bevelSegments:2,curveSegments:8,steps:10});o.translate(0,0,-e/2);const r=o.getAttribute("position"),a=new L;for(let c=0;c<r.count;c++){a.fromBufferAttribute(r,c);const l=Math.min(1,Math.max(0,a.y/n));r.setXYZ(c,a.x*(1-l*.07),a.y,a.z*(1-l*.45))}return r.needsUpdate=!0,o.computeVertexNormals(),o})}const Re=(n,t)=>new lt(n,t);function Jl(n,t,e=20){return Di(`la${n},${e}`,()=>new _u([...t],e))}function Lu(n,t,e,i,s,o,r){return Di(`hx${n},${t},${e},${i},${s},${o},${r}`,()=>new yu(new lw(n,t,e,i),s,o,r,!1))}function uw(n){return Di(`gd${n}`,()=>{const e=new Fs;e.moveTo(-n+.055,-.055),e.lineTo(n-.055,-.055),e.absarc(n-.055,0,.055,-Math.PI/2,Math.PI/2,!1),e.lineTo(-n+.055,.055),e.absarc(-n+.055,0,.055,Math.PI/2,Math.PI*1.5,!1);const i=new yr(e,{depth:.13,bevelEnabled:!0,bevelThickness:.02,bevelSize:.018,bevelSegments:2,curveSegments:6});i.translate(0,0,-.065);const s=i.getAttribute("position"),o=new L;for(let r=0;r<s.count;r++)o.fromBufferAttribute(s,r),s.setXYZ(r,o.x,o.y+o.x*o.x*.45,o.z*(1+Math.max(0,1-Math.abs(o.x)*5)*.25));return s.needsUpdate=!0,i.computeVertexNormals(),i})}const os=(n,t,e)=>Di(`sp${n},${t},${e}`,()=>new Me(n,t,e)),Qa=(n,t,e,i)=>Di(`cy${n},${t},${e},${i}`,()=>new Ne(n,t,e,i)),hw=(n,t,e)=>Di(`co${n},${t},${e}`,()=>new dn(n,t,e)),Du=(n,t,e,i)=>Di(`to${n},${t},${e},${i}`,()=>new yn(n,t,e,i)),Kd=(n,t)=>Di(`oc${n},${t}`,()=>new ko(n,t));function dw(){return{WOOD:Yt(ft(10251071,"wood",.8)),WOODD:Yt(ft(7161382,"wood",.84)),CORD:Yt(ft(11901544,"cloth",.92)),STEEL:Yt(ft(14673646,"metal",.22,.88)),BRASS:Yt(ft(14201418,"metal",.28,.8)),LEATH:Yt(ft(4861724,"cloth",.85)),BREAD:Yt(ft(14659175,"rock",.9)),CRUST:Yt(ft(11040314,"rock",.88))}}function fw(){return cw("ice",()=>new Jn({color:11068664,transparent:!0,opacity:.88,roughness:.08,metalness:.12,envMapIntensity:2.4}))}function pw(n){return(t,e,i=0,s=0,o=0,r=0,a=0,c=0)=>{Yt(t),Yt(e);const l=new V(t,e);return l.position.set(i,s,o),l.rotation.set(r,a,c),l.castShadow=!0,n.add(l),l}}function Tn(n,t,e,i){const s=i??t.WOODD;n(Jl(`grip${e}`,[Re(0,-e*.55),Re(.055,-e*.52),Re(.07,-e*.42),Re(.062,-e*.1),Re(.058,e*.18),Re(.07,e*.44),Re(.062,e*.52),Re(0,e*.55)]),s),n(Lu(.064,e*.86,5.5,-e*.44,110,.017,6),t.CORD),n(Jl(`butt${e}`,[Re(0,-e*.86),Re(.05,-e*.84),Re(.088,-e*.74),Re(.098,-e*.66),Re(.082,-e*.6),Re(0,-e*.57)]),s)}function Uo(n,t,e,i,s=.22){n(uw(e),i??t.WOODD,0,s,0)}const mw=1337;function gw(n,t){const e=new st;e.name=`weapon:${n}`;const i=pw(e),s=dw(),o=t?.classId??null,r=ss(mw);switch(n){case"stick":o==="parsley"?_w(i,s):xw(i,s);break;case"mop":vw(i,s,r);break;case"dagger":Mw(i,s);break;case"spear":yw(i,s);break;case"great":Sw(i,s);break;case"flame":bw(i,s);break;case"baguette":ww(i,s);break;case"trident":Ew(i,s);break;case"magmablade":Tw(i,s,r);break;case"frostspear":Aw(i,s,r);break;case"judgement":Rw(i,s);break;default:Cw(i,s,o);break}return e}function xw(n,t){n(Jl("stick",[Re(0,-.2),Re(.09,-.15),Re(.1,.9),Re(.16,1.5),Re(.19,1.72),Re(.1,1.86),Re(0,1.9)]),t.WOOD,0,.1,0);for(let e=0;e<6;e++){const i=e*1.9;n(os(.06,8,6),t.WOODD,Math.cos(i)*.15,1.35+Math.sin(i*1.7)*.28,Math.sin(i)*.15)}Tn(n,t,.42)}function _w(n,t){n(Qn(2.2,.19,.3,.4),t.BREAD,0,.3,0).rotation.z=.05;for(let e=0;e<5;e++)n(Ft(.42,.055,.4,.02),t.CRUST,0,.6+e*.36,0,0,0,.28);Tn(n,t,.5,t.CRUST)}function vw(n,t,e){n(Qa(.062,.07,2.4,14),Yt(ft(11055288,"metal",.35,.7)),0,1.25,0),n(Ft(.74,.26,.42,.07),Yt(ft(4165321,"cloth",.8)),0,2.42,0);const i=Yt(ft(14542572,"fuzz",.96));for(let s=-3;s<=3;s++)n(Ft(.1,.62,.34,.04),i,s*.11,2.78,0,0,0,(e()-.5)*.2);Tn(n,t,.44,Yt(ft(2764856,"cloth",.9)))}function Mw(n,t){n(Qn(.95,.11,.07,1),t.STEEL,0,.28,0),Uo(n,t,.26,t.BRASS,.24),Tn(n,t,.4)}function yw(n,t){n(Qa(.055,.065,3.2,12),t.WOOD,0,1.35,0),n(Qn(.85,.13,.1,1),t.STEEL,0,2.9,0),n(Du(.075,.02,8,16),t.BRASS,0,2.82,0,Math.PI/2,0,0);for(let e=0;e<3;e++)n(Lu(.062,.2,1.5,.6+e*.5,30,.014,5),t.CORD);Tn(n,t,.5)}function Sw(n,t){n(Qn(2.9,.24,.15,1),t.STEEL,0,.42,0),n(Ft(.09,2.5,.055,.02),Yt(ft(11056320,"metal",.3,.85)),0,1.6,0),Uo(n,t,.62,t.BRASS,.34),Tn(n,t,.72,t.LEATH),n(os(.14,14,10),t.BRASS,0,-.66,0)}function bw(n,t){n(Qn(2.35,.19,.12,1),Yt(ft(16742970,"metal",.34,.5,9054720)),0,.34,0),n(Ft(.07,2,.05,.02),Yt(ft(16765514,null,.3,.4,9067008)),0,1.3,0),Uo(n,t,.46,Yt(ft(5909010,"metal",.5,.4)),.28),Tn(n,t,.56,Yt(ft(3807756,"cloth",.9))),n(os(.16,16,12),Yt(ft(16765514,null,.2,.3,16738816)),0,-.56,0)}function ww(n,t){n(Qn(2.75,.26,.42,.3),t.BREAD,0,.36,0).rotation.z=.04;for(let e=0;e<6;e++)n(Ft(.5,.07,.46,.025),t.CRUST,0,.72+e*.38,0,0,0,.3);n(os(.2,16,12),Yt(ft(16765514,null,.3,.4,6965760)),0,3.2,0),Tn(n,t,.54,t.CRUST)}function Ew(n,t){const e=Yt(ft(7330016,"metal",.18,.9)),i=Yt(ft(1924206,"metal",.3,.75));n(Qa(.06,.075,3,12),i,0,1.25,0);for(const s of[-1,0,1])n(Qn(1.05,.09,.07,1),e,s*.32,2.55,0,0,0,s*.1);n(Ft(.86,.14,.14,.05),i,0,2.5,0);for(let s=0;s<4;s++)n(Lu(.07,.22,1.6,.35+s*.45,24,.014,5),t.CORD);n(os(.16,14,10),Yt(ue(9437168,2.4)),0,-.56,0),Tn(n,t,.52,i)}function Tw(n,t,e){n(Qn(3.2,.3,.2,1),Yt(ft(2757906,"rock",.9,.1)),0,.5,0);const i=Yt(ue(16738842,2.6));for(let s=0;s<7;s++)n(Ft(.1,.34,.06,.03),i,s%2?.07:-.07,.95+s*.36,.055,0,0,(e()-.5)*.4);n(Ft(.06,2.6,.04,.02),Yt(ue(16761402,3)),0,1.7,0),Uo(n,t,.7,Yt(ft(3808532,"rock",.9)),.36),Tn(n,t,.78,Yt(ft(2364176,"cloth",.92))),n(os(.19,16,12),Yt(ue(16747050,3)),0,-.72,0)}function Aw(n,t,e){const i=fw();n(Qa(.055,.07,3.4,12),Yt(ft(4878212,"metal",.3,.7)),0,1.4,0),n(Qn(1.5,.16,.11,1),i,0,2.9,0);for(let s=0;s<5;s++){const o=s/5*6.283;n(hw(.11,.7,5),i,Math.cos(o)*.24,2.65,Math.sin(o)*.24,(e()-.5)*.5,0,(e()-.5)*.5)}n(Kd(.2,0),Yt(ue(10479871,2.8)),0,2.5,0),n(Du(.085,.022,8,16),i,0,2.3,0,Math.PI/2,0,0),Tn(n,t,.56,Yt(ft(3032662,"cloth",.9))),n(Kd(.17,0),Yt(ue(14677247,2.6)),0,-.6,0)}function Rw(n,t){const e=Yt(ue(16769162,2.2)),i=Yt(ft(15779930,"metal",.2,.95));n(Qn(2.9,.24,.15,1),Yt(ft(16184036,"metal",.16,.94)),0,.42,0),n(Ft(.06,2.6,.04,.02),Yt(ue(16769162,2.8)),0,1.62,0),Uo(n,t,.7,i,.34);for(const s of[-1,1])n(Ft(.34,.075,.11,.035),i,s*.7,.4,0,0,0,-s*.55);n(Du(.26,.028,8,24),e,0,.3,0,Math.PI/2,0,0),Tn(n,t,.72,Yt(ft(5917228,"cloth",.88))),n(os(.15,16,12),Yt(ue(16769162,2.4)),0,-.66,0)}function Cw(n,t,e){const i=e==="boss"?Yt(ft(9117471,"metal",.28,.8)):t.STEEL;n(Qn(2.15,.16,.1,1),i,0,.3,0),Uo(n,t,.42,t.BRASS,.26),Tn(n,t,.5,t.LEATH),n(os(.11,14,10),t.BRASS,0,-.52,0)}function re(){return new st}const u0=new WeakSet,h0=new WeakSet;function Ar(n){return u0.add(n),n}function tc(n){return h0.add(n),n}function Pw(n){return u0.has(n)}function d0(n){return h0.has(n)}const Zd=new Map,Jd=new Map,Yn=n=>n.toFixed(4);function Bs(n,t){const e=Zd.get(n);if(e)return e;const i=Ar(t());return Zd.set(n,i),i}function Iw(n,t){const e=Jd.get(n);if(e)return e;const i=tc(t());return Jd.set(n,i),i}const Lw=(n,t,e)=>Bs(`sph|${Yn(n)}|${t}|${e}`,()=>new Me(n,t,e)),Dw=(n,t,e,i)=>Bs(`dom|${Yn(n)}|${t}|${e}|${Yn(i)}`,()=>new Me(n,t,e,0,6.283,0,i)),sn=(n,t,e)=>Bs(`con|${Yn(n)}|${Yn(t)}|${e}`,()=>new dn(n,t,e)),Qd=(n,t,e,i)=>Bs(`cyl|${Yn(n)}|${Yn(t)}|${Yn(e)}|${i}`,()=>new Ne(n,t,e,i)),kw=n=>Bs(`ddc|${Yn(n)}`,()=>new vu(n,0)),f0=n=>Bs(`oct|${Yn(n)}`,()=>new ko(n,0)),p0=(n,t,e)=>Bs(`shp|${n}|${e}`,()=>new Mu(t(),e));function ce(n,t,e=.9,i=0,s=0){return tc(ft(n,t??null,e,i,s))}function on(n,t=2.2){return tc(ue(n,t))}function Nw(n,t=0){return ce(n,null,.88,.02,t)}function Ii(n){const t=`std|${n.color}|${Yn(n.roughness)}|${n.metalness??0}|${n.opacity??1}|${n.emissive??0}|${n.envMapIntensity??1}|${n.doubleSide?1:0}|${n.depthWrite===!1?0:1}`;return Iw(t,()=>{const e=new Jn({color:n.color,roughness:n.roughness,metalness:n.metalness??0,emissive:n.emissive??0,envMapIntensity:n.envMapIntensity??1});return n.opacity!==void 0&&n.opacity<1&&(e.transparent=!0,e.opacity=n.opacity),n.doubleSide&&(e.side=Be),n.depthWrite===!1&&(e.depthWrite=!1),e})}function Xe(n,t){return new V(n,t)}function Ri(n,t){const e=new V(n,t);return e.castShadow=!0,e}function m0(n,t){const e=new V(n,t);return e.castShadow=!0,e.receiveShadow=!0,e}function jn(n,t,e,i,s,o=0){return Xe(Ar(Ft(n,t,e,i,o)),s)}function ku(n,t,e,i,s,o=0){return Ri(Ar(Ft(n,t,e,i,o)),s)}function Ve(n,t,e,i,s,o=0){return m0(Ar(Ft(n,t,e,i,o)),s)}function Ao(n,t,e,i,s=0){return Ri(sn(n,t,e||4),Nw(i,s))}function Ye(n,t,e=12,i=9){return Xe(Lw(n,e,i),t)}function de(n,t,e,i,s){return m0(Ar(Jp(n,e,i,s)),t)}function Pt(n,t,e,i,s){return t.position.set(e,i,s),n.add(t),t}function wi(n,t,e){const i=new st;return i.position.set(t,e,0),n.add(i),i}const Nn=[-1,1];function Fo(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return ss(t||1)}function Ow(){const n=new st,t=Fo("slime"),e=Ii({color:6474058,roughness:.12,metalness:.05,opacity:.82,envMapIntensity:2}),i=de(1.5,e,.16,2.4,22);i.scale.set(1,.78,1),i.position.y=1.2,n.add(i);const s=de(.55,ce(3111460,null,.5,0,993800),.1,4,12);s.position.y=1,n.add(s);for(const r of Nn)Pt(n,Ye(.24,ce(16185594,null,.2),12,9),r*.42,1.55,1.12),Pt(n,Ye(.12,ce(1185812,null,.15,.1),10,8),r*.45,1.53,1.28);for(let r=0;r<4;r++){const a=Ye(.1+t()*.1,e,8,6),c=t()*6.28;Pt(n,a,Math.cos(c)*1.2,.4+t()*1.4,Math.sin(c)*1.2)}const o={kind:"slime",armL:re(),armR:re(),legL:re(),legR:re(),body:i,baseScale:1,bob:0};return n.userData=o,n.add(o.armR),n}function Uw(){const n=new st,t=4862808,e=3153983,i=ce(t,"fur",.95),s=de(.52,i,.05,6,16);s.scale.set(1,1.1,1.25),s.position.y=2.3,n.add(s),Pt(n,de(.38,i,.04,8,14),0,2.85,.3);const o=Ao(.07,.24,4,16777215);o.rotation.x=Math.PI,Pt(n,o,0,2.6,.58);const r=new st,a=new st,c=Ii({color:e,roughness:.72,opacity:.94,doubleSide:!0}),l=ce(t,null,.8),u=[[r,-1],[a,1]];for(const[f,d]of u){Pt(n,f,d*.4,2.45,0);const g=Ri(p0("batWing",()=>{const x=new Fs;return x.moveTo(0,0),x.bezierCurveTo(.9,.7,2,.5,2.5,-.1),x.bezierCurveTo(1.9,-.35,1.6,-.75,1.2,-.5),x.bezierCurveTo(.9,-.9,.5,-.6,0,0),x},12),c);g.rotation.set(-Math.PI/2,0,d<0?Math.PI:0),f.add(g);for(let x=0;x<3;x++){const m=jn(2.2,.06,.06,.02,l);m.position.set(d*1.1,0,-.35+x*.35),m.rotation.y=d*(.1-x*.16),f.add(m)}}for(const f of Nn)Pt(n,Ao(.15,.55,5,e),f*.21,3.24,.24),Pt(n,Ye(.09,on(14699322,2.6),10,8),f*.16,2.9,.6),Pt(n,jn(.1,.4,.1,.04,ce(e,null,.85),1),f*.2,1.75,-.1);const h={kind:"bat",armL:re(),armR:re(),legL:re(),legR:re(),wingL:r,wingR:a,baseScale:1,bob:0};return n.userData=h,n.add(h.armR),n}function Fw(){const n=new st,t=6975612,e=4672856,i=14213866,s=ce(t,"fur",.97),o=ce(e,"fur",.97),r=ce(i,"fur",.97),a=ce(2764342,null,.8),c=(_,M,v,E)=>Ve(_,M,v,Math.min(_,M,v)*.3,E),l=de(1,s,.07,4.5,18);l.scale.set(1.02,1,2.3),Pt(n,l,0,1.55,-.1),Pt(n,c(.9,.5,2,r),0,1.14,-.1),Pt(n,c(.85,.85,.8,s),0,1.95,1.25);const u=de(.5,o,.05,7,14);u.scale.set(1,.92,1.15),Pt(n,u,0,2.1,1.85),Pt(n,c(.5,.44,.78,s),0,1.9,2.45),Pt(n,Ye(.14,ce(1316894,null,.2,.1),10,8),0,1.98,2.9);const h=de(.3,o,.05,8,12);h.scale.set(1,1,3.4),Pt(n,h,0,1.85,-1.7).rotation.x=-.55;for(const _ of Nn){Pt(n,Ao(.22,.55,5,e),_*.3,2.68,1.7),Pt(n,Ye(.1,on(9429247,2.4),10,8),_*.28,2.22,2.3);for(let M=0;M<3;M++)Pt(n,Ao(.1,.3,4,i),_*.1,2.2+M*.02,.6-M*.6)}const f=(_,M)=>{const v=new st;v.position.set(_,1.35,M),n.add(v);const E=c(.32,1.3,.36,o);E.position.y=-.66,v.add(E);const b=c(.38,.22,.52,a);return b.position.set(0,-1.35,.1),v.add(b),v},d=f(-.44,.95),g=f(.44,.95),x=f(-.44,-1),m=f(.44,-1),p={kind:"quad",armL:d,armR:g,legL:x,legR:m,fl:d,fr:g,bl:x,br:m,baseScale:1,bob:0};return n.userData=p,n}function zw(){const n=new st,t=ce(3024438,"fur",.9),e=ce(1643296,"fur",.9),i=de(1,t,.09,3.6,18);i.scale.set(1,.85,1.2),Pt(n,i,0,1.5,-1),Pt(n,jn(.5,.1,1,.04,ce(12600366,null,.6)),0,2.26,-1),Pt(n,de(.62,e,.06,6,14),0,1.45,.35);const s=on(14699322,2.8);for(let a=0;a<4;a++){const c=a<2?-1:1;Pt(n,Ye(.1,s,8,6),c*(.16+a%2*.22),1.68-a%2*.16,.82)}for(const a of Nn){const c=Ao(.1,.45,5,14209728);c.rotation.x=Math.PI*.85,Pt(n,c,a*.2,1.05,.78)}const o=[];for(let a=0;a<8;a++){const c=a<4?-1:1,l=a%4,u=new st;u.position.set(c*.45,1.5,.7-l*.42),u.rotation.y=c*(.5-l*.32),n.add(u);const h=ku(1.15,.14,.14,.06,t);h.position.set(c*.55,.3,0),h.rotation.z=-c*.5,u.add(h);const f=jn(1.25,.11,.11,.05,e);f.position.set(c*1.5,-.35,0),f.rotation.z=c*.85,u.add(f),o.push(u)}const r={kind:"spider",armL:re(),armR:re(),legL:re(),legR:re(),legs:o,baseScale:1,bob:0};return n.userData=r,n.add(r.armR),n}function Bw(){const n=new st,t=Ii({color:12572904,roughness:.1,opacity:.5,emissive:1847360,envMapIntensity:2.2,depthWrite:!1}),e=ce(790550,null,.3),i=de(.92,t,.08,3.2,18);i.scale.set(1,1.2,1),i.position.y=2.5,n.add(i);for(let c=0;c<5;c++){const l=Xe(sn(.3,1.1,8),t);l.rotation.x=Math.PI,Pt(n,l,(c-2)*.38,1.35,0)}for(const c of Nn)Pt(n,jn(.24,.34,.1,.06,e),c*.3,2.7,.8);Pt(n,jn(.3,.4,.1,.08,e),0,2.2,.82);const s=new st,o=new st,r=[[s,-1],[o,1]];for(const[c,l]of r){Pt(n,c,l*.86,2.6,0);const u=Ye(.24,t,10,8);u.scale.set(1,2.4,1),u.position.y=-.55,c.add(u)}const a={kind:"ghost",armL:s,armR:o,legL:re(),legR:re(),baseScale:1,bob:0};return n.userData=a,n}function Hw(){const n=new st,t=Fo("lava"),e=de(.75,ce(16747066,null,.35,.1,16730624),.09,4,16);e.position.y=2.3,n.add(e);const i=ce(3809304,"rock",.96),s=[];for(let r=0;r<11;r++){const a=.4+t()*.55,c=Ri(kw(a*.7),i),l=r/11*Math.PI*2,u=1+t()*.45,h=1.1+t()*2.4;Pt(n,c,Math.cos(l)*u,h,Math.sin(l)*u),s.push({m:c,a:l,r:u,y:h})}for(const r of Nn)Pt(n,Ye(.15,on(16765514,3),10,8),r*.26,2.7,.62);const o={kind:"lava",armL:re(),armR:re(),legL:re(),legR:re(),chunks:s,core:e,baseScale:1,bob:0};return n.userData=o,n.add(o.armR),n}function Gw(){const n=new st,t=Ii({color:9427184,roughness:.1,opacity:.5,emissive:1722982,envMapIntensity:2.2,depthWrite:!1}),e=Ri(Dw(1.15,18,12,Math.PI*.62),t);e.scale.set(1,.95,1),e.position.y=2.9,n.add(e),Pt(n,de(.55,on(16743120,1.6),.06,5,12),0,2.7,0);const i=[];for(let o=0;o<10;o++){const r=o/10*6.283,a=new st;a.position.set(Math.cos(r)*.85,2.75,Math.sin(r)*.85),n.add(a);const c=jn(.11,1.5,.11,.05,t);c.position.y=-.75,a.add(c);const l=jn(.08,1.2,.08,.035,t);l.position.y=-2,a.add(l),i.push(a)}const s={kind:"jelly",armL:re(),armR:re(),legL:re(),legR:re(),tent:i,dome:e,baseScale:1,bob:0};return n.userData=s,n.add(s.armR),n}function Vw(){const n=new st,t=Fo("iceElem"),e=Ii({color:11066608,roughness:.1,metalness:.06,opacity:.82,envMapIntensity:2}),i=de(.7,on(10479871,2),.08,4,14);i.position.y=2.3,n.add(i);const s=[];for(let r=0;r<10;r++){const a=.45+t()*.6,c=Ri(f0(a*.8),e),l=r/10*6.283,u=1+t()*.5,h=1.1+t()*2.4;Pt(n,c,Math.cos(l)*u,h,Math.sin(l)*u),s.push({m:c,a:l,r:u,y:h})}for(const r of Nn)Pt(n,Ye(.14,on(14677247,3),10,8),r*.26,2.66,.6);const o={kind:"lava",armL:re(),armR:re(),legL:re(),legR:re(),chunks:s,core:i,baseScale:1,bob:0};return n.userData=o,n.add(o.armR),n}function Ww(){const n=new st,t=5909098,e=3414080,i=ce(t,"scale",.68,.12),s=ce(e,"scale",.68,.12),o=ce(11569738,"scale",.8),r=ce(14207400,"bone",.6,.1),a=de(1.7,i,.1,2.2,24);a.scale.set(1,.92,1.6),a.position.y=3.3,n.add(a);const c=de(1.25,o,.07,3,16);c.scale.set(.82,.55,1.45),Pt(n,c,0,2.65,.1);for(let v=0;v<4;v++)Pt(n,de(.8-v*.11,i,.05,6,12),0,3.8+v*.5,1.7+v*.8);const l=de(.9,s,.06,5,18);l.scale.set(1,.85,1.35),Pt(n,l,0,5.7,5),Pt(n,jn(.95,.3,1.5,.12,s),0,5.2,5.35);for(let v=0;v<5;v++)Pt(n,Ao(.09,.32,4,16777215),(v-2)*.19,5.3,5.85).rotation.x=Math.PI;for(const v of Nn){const E=Ri(sn(.18,1.3,6),r);E.rotation.x=-.7,Pt(n,E,v*.48,6.5,4.6),Pt(n,Ye(.18,on(16765514,3),12,9),v*.54,5.9,5.6);const b=Xe(sn(.1,.5,5),r);b.rotation.x=Math.PI*.6,Pt(n,b,v*.6,5.2,4.9)}const u=new st,h=new st,f=Ii({color:e,roughness:.6,metalness:.05,opacity:.95,doubleSide:!0}),d=[[u,-1],[h,1]];for(const[v,E]of d){Pt(n,v,E*1.3,4.4,0);const b=Ri(p0("dragonWing",()=>{const T=new Fs;return T.moveTo(0,0),T.bezierCurveTo(2,1.6,4.6,1.1,5.6,-.4),T.bezierCurveTo(4.4,-1,3.6,-2.2,2.6,-1.4),T.bezierCurveTo(1.8,-2.4,1,-1.4,0,0),T},14),f);b.rotation.set(-Math.PI/2,0,E<0?Math.PI:0),v.add(b);for(let T=0;T<3;T++){const R=jn(4.6,.11,.13,.05,r);R.position.set(E*2.3,.05,-1.2+T*1),R.rotation.y=E*(.12-T*.18),v.add(R)}}for(let v=0;v<7;v++)Pt(n,de(.75-v*.09,i,.04,7,10),0,3-v*.14,-2.3-v*.9),Pt(n,Xe(sn(.15,.45,5),r),0,3.7-v*.16,-2.3-v*.9);for(let v=0;v<5;v++)Pt(n,Ri(sn(.22,.8,5),r),0,4.85-Math.abs(v-2)*.12,1.4-v*.75);const g=(v,E)=>{const b=wi(n,v,2.7);b.position.z=E;const T=ku(.66,2,.76,.26,s);T.position.y=-1,b.add(T);const R=jn(.9,.32,1.1,.14,r);return R.position.set(0,-2.05,.24),b.add(R),b},x=g(-1.05,1.2),m=g(1.05,1.2),p=g(-1.15,-1.4),_=g(1.15,-1.4),M={kind:"dragon",armL:x,armR:m,legL:p,legR:_,fl:x,fr:m,bl:p,br:_,wingL:u,wingR:h,baseScale:1,bob:0};return n.userData=M,n}const tf=3.6;function $w(){const n=new st,t=ce(1924206,"scale",.42,.35),e=ce(997960,"scale",.42,.35),i=ce(11060400,"scale",.55,.2),s=Ii({color:3514552,roughness:.3,metalness:.2,opacity:.9,doubleSide:!0}),o=[];for(let h=0;h<14;h++){const f=h/13,d=2-Math.abs(f-.25)*1.5,g=new st;g.position.set(0,0,-h*2.5);const x=de(Math.max(.5,d),h<3?e:t,.08,3,16);x.scale.set(1,.88,1.15),g.add(x);const m=de(Math.max(.3,d*.6),i,.05,4,12);if(m.scale.set(.9,.4,1.1),m.position.y=-d*.55,g.add(m),h%2===0&&h<12){const p=Xe(sn(d*.5,d*1.5,3),s);p.position.y=d*.9,g.add(p)}if(h===5||h===8)for(const p of Nn){const _=Xe(sn(d*.5,d*2,3),s);_.position.set(p*d*.9,-d*.2,0),_.rotation.z=p*1.25,_.scale.set(1,1,.4),g.add(_)}n.add(g),o.push(g)}const r=new st;r.position.set(0,0,tf),n.add(r);const a=de(2,e,.1,3.5,20);a.scale.set(.95,.85,1.5),r.add(a);const c=ku(2.2,.7,3.4,.3,e);c.position.set(0,-1.15,.9),r.add(c);const l=ce(15791344,null,.35);for(let h=0;h<8;h++){const f=Xe(sn(.16,.6,4),l);f.position.set((h%4-1.5)*.55,-.72,h<4?2.2:1.3),f.rotation.x=Math.PI,r.add(f)}for(const h of Nn){Pt(r,Ye(.34,on(9437168,3.2),14,10),h*1,.55,1.7);const f=Xe(sn(.3,2.2,5),s);f.rotation.set(-.5,0,h*.5),Pt(r,f,h*1,1.5,-.3)}Pt(r,Xe(sn(1,3,3),s),0,1.9,-.6);const u={kind:"serpent",armL:re(),armR:re(),legL:re(),legR:re(),segs:o,head:r,headZ:tf,baseScale:1,bob:0};return n.userData=u,n.add(u.armR),n}function Xw(){const n=new st,t=Fo("magmaLord"),e=ce(1774096,"rock",.92,.08),i=ce(2891032,"rock",.94),s=on(16738842,2.6),o=on(16761402,3),r=de(2.4,e,.16,2.6,22);r.scale.set(1.15,1,.9),r.position.y=6.4,n.add(r),Pt(n,Ve(3,1.2,2.2,.4,i),0,4.6,0);for(let m=0;m<12;m++){const p=t()*6.283,_=5.2+t()*2.6,M=Ve(.2,.9+t()*.9,.2,.06,s);M.rotation.z=(t()-.5)*1.4,Pt(n,M,Math.cos(p)*2.2,_,Math.sin(p)*1.7)}const a=Ye(.85,o,18,14);Pt(n,a,0,6.6,1.9);const c=de(1.15,i,.1,4,18);c.position.y=8.8,n.add(c);for(const m of Nn){Pt(n,Ye(.24,o,12,9),m*.42,8.9,1);const p=Xe(sn(.34,2.4,6),i);p.rotation.set(-.4,0,m*.7),Pt(n,p,m*.85,9.9,-.2)}Pt(n,Ve(1.3,.4,1,.14,s),0,8.2,.85);for(let m=0;m<6;m++){const p=m/6*3.14-1.57,_=Math.sin(p)*1.7;Pt(n,Xe(Qd(.4,.62,1.3,7),i),_,8-Math.abs(p)*.6,-1.9),Pt(n,Xe(Qd(.34,.34,.14,7),o),_,8.66-Math.abs(p)*.6,-1.9)}const l=wi(n,-2.9,7.6),u=wi(n,2.9,7.6),h=[];for(const m of[l,u]){const p=Ve(1.5,2.6,1.5,.5,e);p.position.y=-1.3,m.add(p);const _=new st;_.position.y=-2.6,m.add(_);const M=Ve(1.35,2.5,1.35,.45,i);M.position.y=-1.25,_.add(M);const v=de(1.15,e,.1,4,14);v.position.y=-2.9,_.add(v);const E=Ve(1.4,.4,1.2,.14,s);E.position.set(0,-2.9,.9),_.add(E),h.push(_)}const f=wi(n,-1.35,4.3),d=wi(n,1.35,4.3),g=[];for(const m of[f,d]){const p=Ve(1.5,2.4,1.6,.5,e);p.position.y=-1.2,m.add(p);const _=new st;_.position.y=-2.4,m.add(_);const M=Ve(1.35,2.1,1.5,.45,i);M.position.y=-1.05,_.add(M);const v=Ve(1.7,.7,2.4,.24,e);v.position.set(0,-2.2,.4),_.add(v),g.push(_)}const x={kind:"titan",armL:l,armR:u,legL:f,legR:d,core:a,head:c,baseScale:1,bob:0,...g0(h,g)};return n.userData=x,n}const qw=Ka.frost.scale;function Yw(){const n=new st,t=Fo("frostLord"),e=Ii({color:10474732,roughness:.1,metalness:.08,opacity:.8,envMapIntensity:2.4}),i=Ii({color:7317704,roughness:.16,metalness:.06,opacity:.88,envMapIntensity:2}),s=ce(15398652,"bone",.5),o=de(2.3,e,.14,2.8,22);o.scale.set(1.1,1.05,.85),o.position.y=6.6,n.add(o),Pt(n,Ve(3.1,1.1,2.1,.38,i),0,4.8,0);const r=Xe(f0(.8),on(10479871,2.8));Pt(n,r,0,6.8,1.7);for(let m=0;m<9;m++){const p=t()*6.283,_=1.6+t()*3.4,M=Xe(sn(.4,_,5),e);M.rotation.set((t()-.5)*.7,t()*3,(t()-.5)*.7),Pt(n,M,Math.cos(p)*2,7.4+t()*1.6,Math.sin(p)*1.5-.6)}const a=de(1.1,i,.09,4,18);a.position.y=9,n.add(a);for(let m=0;m<7;m++){const p=m/7*6.283,_=Xe(sn(.22,(1.5+m%2*.8)/qw,5),e);Pt(n,_,Math.cos(p)*.85,10.1,Math.sin(p)*.85)}for(const m of Nn)Pt(n,Ye(.22,on(14677759,3.4),12,9),m*.4,9.1,.95);Pt(n,Ve(1.2,.35,.9,.12,s),0,8.45,.8);const c=wi(n,-2.95,7.8),l=wi(n,2.95,7.8),u=[],h=[[c,-1],[l,1]];for(const[m,p]of h){const _=Ve(1.4,2.6,1.4,.48,e);_.position.y=-1.3,m.add(_);const M=new st;M.position.y=-2.6,m.add(M);const v=Ve(1.25,2.4,1.25,.44,i);v.position.y=-1.2,M.add(v);const E=de(1.05,e,.09,4,14);E.position.y=-2.8,M.add(E);for(let b=0;b<3;b++){const T=Xe(sn(.2,1.1,5),e);T.position.set(p*.7,-1.2-b*.7,-.7),T.rotation.z=p*1.1,M.add(T)}u.push(M)}const f=wi(n,-1.35,4.5),d=wi(n,1.35,4.5),g=[];for(const m of[f,d]){const p=Ve(1.45,2.5,1.5,.48,e);p.position.y=-1.25,m.add(p);const _=new st;_.position.y=-2.5,m.add(_);const M=Ve(1.3,2.2,1.4,.44,i);M.position.y=-1.1,_.add(M);const v=Ve(1.6,.7,2.3,.22,s);v.position.set(0,-2.3,.4),_.add(v),g.push(_)}const x={kind:"titan",armL:c,armR:l,legL:f,legR:d,core:r,head:a,baseScale:1,bob:0,...g0(u,g)};return n.userData=x,n}function g0(n,t){const e={},[i,s]=n,[o,r]=t;return i&&(e.elbowL=i),s&&(e.elbowR=s),o&&(e.kneeL=o),r&&(e.kneeR=r),e}const jw={slime:"slime",bat:"bat",wolf:"wolf",hound:"wolf",spider:"spider",ghost:"ghost",wraith:"ghost",lava:"lava",ash:"lava",jelly:"jelly",icee:"iceElem",dragon:"dragon",levi:"leviathan",magma:"magmaLord",frost:"frostLord",angel:"angel",wangel:"warAngel",gabriel:"gabriel",creator:"creator",goblin:"humanoid",golem:"humanoid",skel:"humanoid",mage:"humanoid",gslime:"humanoid",troll:"humanoid",crab:"humanoid"},Kw={slime:Ow,bat:Uw,wolf:Fw,spider:zw,ghost:Bw,lava:Hw,jelly:Gw,iceElem:Vw,dragon:Ww,leviathan:$w,magmaLord:Xw,frostLord:Yw},Zw=.72,Jw=.46,Qw={hound:{color:6957592},wraith:{color:13625590,emissive:2771558}};function tE(n,t,e,i){const s=n.get(t);if(s)return s;const o=e.clone();o instanceof Jn&&i(o);const r=tc(o);return n.set(t,r),r}function x0(n,t,e,i){n.traverse(s=>{if(!(s instanceof V))return;const o=s.material;Array.isArray(o)||(s.material=tE(i,t(o),o,e))})}const eE=new Map;function nE(n,t){x0(n,e=>`${e.uuid}|${t.color}|${t.emissive??-1}`,e=>{e.color.setHex(t.color),t.emissive!==void 0&&e.emissive.setHex(t.emissive)},eE)}const iE=new Map;function sE(n,t){x0(n,e=>`${e.uuid}|${t}`,e=>{e.color.multiplyScalar(t),e.roughness=Math.min(1,e.roughness*.9+.14),e.metalness=Math.min(1,e.metalness+.06),e.emissive.getHex()!==0&&e.emissive.multiplyScalar(1.7),e.envMapIntensity=.7},iE)}const Qo=(n,t,e,i,s)=>[{color:n,r:t,x:-e,y:i,z:s},{color:n,r:t,x:e,y:i,z:s}],oE={goblin:{eyes:Qo(16756794,.07,.31,4.07,.74)},golem:{eyes:Qo(5038186,.09,.3,4.05,.72),ember:{color:5038186,n:3,rad:1.2,h:3.4}},skel:{eyes:Qo(10147071,.075,.31,4.07,.73)},mage:{eyes:Qo(16726634,.085,.31,4.07,.75),ember:{color:10640639,n:4,rad:1.3,h:4.2}},troll:{eyes:Qo(16765514,.09,.24,3.9,.86)},gslime:{ember:{color:16765514,n:4,rad:1.5,h:2.8}},lava:{ember:{color:16747066,n:6,rad:1.5,h:3.4}},dragon:{ember:{color:16738858,n:8,rad:3,h:6}},slime:{ember:{color:8191898,n:3,rad:1.6,h:2.6}}};function rE(n,t){const e=oE[t];if(!e)return;for(const r of e.eyes??[])Pt(n,Ye(r.r,on(r.color,3),8,6),r.x,r.y,r.z);const i=e.ember;if(!i)return;const s=Fo(`ember:${t}`),o=new st;for(let r=0;r<i.n;r++){const a=Ye(.055*(.6+s()),on(i.color,2.6),5,4),c=s()*6.283,l=i.rad*(.4+s());a.position.set(Math.cos(c)*l,i.h*s(),Math.sin(c)*l),o.add(a)}n.add(o),n.userData.embers=o}function ef(n,t={}){if(!lo(n))throw new Error(`알 수 없는 몹 id: ${n}`);const e=ke(n),i=jw[n],s=Kw[i],o=t.external?.[i];let r;if(s)r=s();else if(o)r=o(n);else throw new Error(`모델 '${i}' (몹 '${n}') 는 creatures.ts 소관이 아니다. BuildCreatureOptions.external 로 빌더를 넘겨라 — humanoid 는 makeChar+dressMob, angel/warAngel/gabriel/creator 는 천국 모듈이 만든다.`);const a=Qw[n];a&&nE(r,a),sE(r,e.world?Zw:Jw),e.world||rE(r,n),r.scale.setScalar(e.scale);const c=r.userData;return c.baseScale=e.scale,c.bob=t.bob??0,r}const Ql=.62,aE=.7;function cE(n,t=Ql){if(!(n>0))return 0;const i=1-n/(t||Ql);return i<.42?-.4*Math.sin(i/.42*1.5708):i<.62?-.4+1.4*Math.pow((i-.42)/.2,.5):1-Math.pow((i-.62)/.38,1.5)}function nf(n,t){const e=n.userData;if(!e.kind)return;const i=t.time??performance.now()/1e3,s=t.walkPhase,o=t.amplitude??(t.moving?aE:0),r=e.bob??0,a=e.baseScale??1,c=1/a,l=cE(t.attackT,t.attackD??Ql),u=Math.max(0,l),h=Math.max(0,-l);switch(lE(e,h),e.kind){case"slime":{if(!e.body)break;const f=Math.sin(i*4+r),d=h*.34-u*.3;e.body.scale.set(1+f*.09+d,.78-f*.1-d*1.5,1+f*.09+d),t.groundY!==void 0&&(n.position.y=t.groundY+u*.9);break}case"bat":{if(!e.wingL||!e.wingR)break;const d=(.5+Math.sin(i*17+r)*.95)*(1-h*.75)+u*1.5;e.wingL.rotation.z=d,e.wingR.rotation.z=-d,n.rotation.x=-h*.4+u*.7;break}case"quad":{const{fl:f,fr:d,bl:g,br:x}=e;if(!f||!d||!g||!x)break;const m=Math.sin(s);f.rotation.x=m*o-u*1.5-h*.3,d.rotation.x=-m*o-u*1.5-h*.3,x.rotation.x=m*o+h*.4,g.rotation.x=-m*o+h*.4,n.rotation.x=h*.35-u*.55,e.head&&(e.head.rotation.x=-h*.3+u*.6);break}case"spider":{if(!e.legs)break;e.legs.forEach((f,d)=>{const g=d<3;f.rotation.x=Math.sin(s*1.6+d*1.1)*o*.55+(g?-h*.9-u*1.2:h*.3+u*.25)}),n.rotation.x=-h*.42+u*.5;break}case"ghost":{if(!e.armL||!e.armR)break;e.armL.rotation.x=Math.sin(i*2.2)*.4-.3-h*.9-u*1.9,e.armR.rotation.x=Math.sin(i*2.2+1)*.4-.3-h*.9-u*1.9;const f=1+h*.22-u*.12;n.scale.setScalar(a*f);break}case"lava":{if(!e.chunks||!e.core)break;e.chunks.forEach((f,d)=>{const g=f.a+i*(.6+d%3*.25);f.m.position.set(Math.cos(g)*f.r,f.y+Math.sin(i*2+d)*.18*c,Math.sin(g)*f.r),f.m.rotation.y=g*1.5,f.m.rotation.x=i*.6+d}),e.core.scale.setScalar(1+Math.sin(i*5)*.08+u*.8-h*.25);for(const f of e.chunks)f.m.position.multiplyScalar(1-h*.35+u*.55);break}case"jelly":{if(!e.dome||!e.tent)break;const f=Math.sin(i*2.2+r);e.dome.scale.set(1+f*.1,.95-f*.12,1+f*.1),e.dome.scale.multiplyScalar(1-u*.22+h*.15),e.tent.forEach((d,g)=>{d.rotation.x=Math.sin(i*2+g*.7)*.28+u*.9,d.rotation.z=Math.cos(i*1.7+g*.5)*.24});break}case"serpent":{if(!e.segs||!e.head)break;e.segs.forEach((d,g)=>{const x=i*1.5-g*.42;d.position.x=Math.sin(x)*2.6*c,d.position.y=Math.sin(x*.8+1)*1.8*c,d.rotation.z=Math.cos(x)*.22});const f=e.head;f.position.x=Math.sin(i*1.5+.42)*2.6*(1-u*.7)*c,f.position.y=(Math.sin(i*1.2+1.4)*1.2+1.2+h*2.4-u*1)*c,f.position.z=(e.headZ??0)+(-h*3+u*6.5)*c,f.rotation.y=-Math.cos(i*1.5)*.3*(1-u),f.rotation.x=h*.5-u*.7;break}case"titan":{const{armL:f,armR:d,legL:g,legR:x,core:m,head:p}=e;if(!f||!d||!g||!x)break;const _=Math.sin(s);g.rotation.x=_*o*.7,x.rotation.x=-_*o*.7,e.kneeL&&(e.kneeL.rotation.x=Math.max(0,-_)*o*.8),e.kneeR&&(e.kneeR.rotation.x=Math.max(0,_)*o*.8),d.rotation.x=_*o*.55-h*2.4+u*1.6,f.rotation.x=-_*o*.55-h*2.4+u*1.6,n.rotation.x=-h*.28+u*.42,m&&m.scale.setScalar(1+Math.sin(i*2.6)*.1),p&&(p.rotation.y=Math.sin(i*.5)*.14);break}case"dragon":{const{wingL:f,wingR:d,fl:g,fr:x}=e;if(!f||!d||!g||!x)break;const m=Math.sin(i*3.2)*.55;f.rotation.z=m+.15+h*1.1,d.rotation.z=-m-.15-h*1.1,g.rotation.x=Math.sin(s*.6)*o*.5-u*1.1,x.rotation.x=-Math.sin(s*.6)*o*.5-u*1.1,e.head&&(e.head.rotation.x=h*.55-u*.85),n.rotation.x=h*.3-u*.45;break}}}function lE(n,t){const e=n.eyes;if(!e||e.length===0||t<=.01&&!n.glowing)return;const i=t*2.6;for(const s of e){const o=s.material;if(Array.isArray(o))continue;let r=o;d0(r)&&(r=r.clone(),s.material=r),r instanceof Jn&&(n.eyeBase===void 0&&(n.eyeBase=r.emissiveIntensity),r.emissiveIntensity=n.eyeBase+i)}n.glowing=t>.01}function Kc(n){n.removeFromParent(),n.traverse(t=>{const e=t,i=e.geometry;i&&!Pw(i)&&i.dispose();const s=e.material;if(s)for(const o of Array.isArray(s)?s:[s])d0(o)||o.dispose()}),n.clear()}function uE(n){const t=new Wt(n),e={h:0,s:0,l:0};t.getHSL(e);const i=new Wt().setHSL(e.h,e.s*.8,Math.max(.08,e.l*.55)),s=new Wt().setHSL(e.h,e.s*.45,Math.min(.82,e.l*1.35+.12)),o=new Wt().setHSL(e.h,e.s*.6,Math.max(.05,e.l*.35));return{shirt:n,pants:i.getHex(),skin:s.getHex(),hair:o.getHex()}}function Nu(n,t){return Object.assign(n.userData,t,{baseScale:1,bob:0}),n}const hE=n=>{const t=ke(n),e=Cu(uE(t.color));return Nu(e.root,{kind:"humanoid",armL:e.armL,armR:e.armR,legL:e.legL,legR:e.legR,head:e.head,...e.eyes.length>0?{eyes:e.eyes}:{}})},dE={angel:{robe:15791098,trim:16771496,glow:16774872,feathers:5,wingSpan:1.5,haloR:.46},warAngel:{robe:13620964,trim:14201946,glow:16773312,feathers:6,wingSpan:1.8,haloR:.5},gabriel:{robe:16769162,trim:16774872,glow:16776168,feathers:9,wingSpan:2.9,haloR:.78}};function sf(n,t){const e=new st,i=ft(n.robe,"cloth",.5,0);for(let s=0;s<n.feathers;s++){const o=s/Math.max(1,n.feathers-1),r=n.wingSpan*(1-o*.45),a=new V(Ft(r,.1,.34,.05),i);a.castShadow=!0,a.position.set(t*(.28+r/2),.42-o*.62,-.12-o*.05),a.rotation.z=t*(.24-o*.5),a.rotation.y=t*o*.22,e.add(a)}return e.position.set(t*.34,1.5,-.24),e}function fE(n){const t=new V(new yn(n.haloR,.055,8,24),ue(n.glow,2.4));return t.rotation.x=Math.PI/2,t.position.y=2.42,t}function Ou(n,t){const e=dE[t],i=Cu({shirt:e.robe,pants:e.robe,skin:16180943,hair:e.trim}),s=sf(e,-1),o=sf(e,1),r=fE(e);if(i.root.add(s,o,r),t==="gabriel"){const a=ft(e.trim,"metal",.28,.85);for(const c of[-1,1]){const l=new V(Ft(.62,.3,.62,.12),a);l.castShadow=!0,l.position.set(c*.62,1.62,0),i.root.add(l)}}return Nu(i.root,{kind:"humanoid",armL:i.armL,armR:i.armR,legL:i.legL,legR:i.legR,head:i.head,wingL:s,wingR:o,core:r,...i.eyes.length>0?{eyes:i.eyes}:{}})}const pE=n=>Ou(n,"angel"),mE=n=>Ou(n,"warAngel"),gE=n=>Ou(n,"gabriel"),xE=()=>{const n=new st,t=new V(new ka(1.35,1),ue(16774872,3.2));t.position.y=2.6,n.add(t);const e=new V(new ka(2.05,1),new Jn({color:16774872,emissive:16773312,emissiveIntensity:.35,transparent:!0,opacity:.22,roughness:.2,metalness:0}));e.position.y=2.6,n.add(e);const i=ft(16771496,"metal",.25,.9),s=[];for(let a=0;a<3;a++){const c=new V(new yn(2.5+a*.5,.09,8,40),i);c.position.y=2.6,c.rotation.set(a*Math.PI/3,a*Math.PI/5,0),n.add(c),s.push(c)}const o=new V(new Ne(.5,1.1,2.6,12,1,!0),new Xn({color:16774872,transparent:!0,opacity:.16,side:Be,depthWrite:!1}));o.position.y=1.3,n.add(o);const r=()=>{const a=new st;return n.add(a),a};return Nu(n,{kind:"creator",armL:r(),armR:r(),legL:r(),legR:r(),core:t,chunks:s.map((a,c)=>({m:a,a:c*2.1,r:2.5+c*.5,y:2.6}))})},of={humanoid:hE,angel:pE,warAngel:mE,gabriel:gE,creator:xE},rf={ice:{g1:"#eafaff",g2:"#5fc4ee",g3:"#12507e",flow:"#ffffff",glow:"#8fe6ff",eye:"#9ff0ff"},lava:{g1:"#ffd45e",g2:"#ff6a1a",g3:"#7d1606",flow:"#2e0c04",glow:"#ff9a3a",eye:"#ffb347"},abyss:{g1:"#79e8ff",g2:"#2b4fd6",g3:"#2e0d48",flow:"#070d2c",glow:"#8fb8ff",eye:"#7fe4ff"},dark:{g1:"#ff9a86",g2:"#c0342a",g3:"#3e0a08",flow:"#1f0605",glow:"#ff7a6a",eye:"#ff8a6a"},holy:{g1:"#fffbe8",g2:"#ffd24a",g3:"#8a6410",flow:"#fff6d8",glow:"#ffe9a8",eye:"#fff2c8"},divine:{g1:"#ffffff",g2:"#ffe9a8",g3:"#2a2438",flow:"#fff8e0",glow:"#fff2c8",eye:"#ffffff"}},af="dark",_E={levi:"abyss",magma:"lava",frost:"ice",gabriel:"holy",creator:"divine"},cf=1e3,vE=250,$i=212,Xi=104,ei=576,ms=58,ME=29,pa=200,ma=133,tr=54,yE=9,SE=-125,bE=30,wE=.42,lf=["M0,0 L0,14 M0,7 L8,0","M0,14 L5,0 L10,14","M0,0 L0,14 M0,1 L8,5 L0,9","M0,0 L8,7 L0,14","M0,0 L0,14 M8,0 L8,14 M0,7 L8,7","M0,14 L0,0 L8,0 M0,7 L6,7","M0,0 L8,14 M8,0 L0,14","M4,0 L4,14 M0,3 L8,3"],EE=[["M172,96 C138,80 96,84 68,104 C42,122 40,152 62,170 C88,191 142,190 176,172 C160,148 158,120 172,96 Z","gold",3],["M68,104 C42,100 16,104 4,118 C22,124 40,128 56,132 L74,124 Z","gold2",3],["M62,170 C36,172 14,166 6,152 C28,150 50,150 68,152 Z","gold2",3],["M22,124 L30,150 L36,126 Z","bone",1.6],["M46,130 L52,152 L58,132 Z","bone",1.6],["M18,152 L26,132 L32,154 Z","bone",1.6],["M150,90 C154,52 132,22 92,8 C118,32 128,58 124,90 Z","gold",3],["M176,104 C198,80 232,70 254,78 C230,88 208,102 194,124 Z","gold",3],["M182,150 C206,146 228,154 238,168 C216,166 196,170 182,180 Z","gold2",3],["M112,102 C126,96 146,98 158,108 C142,110 124,112 112,118 Z","gold2",2]];let TE=0;const uf="#241a08";function AE(n,t){const e=[];e.push(`<circle cx="${pa}" cy="${ma}" r="${tr}" fill="none" stroke="${n}" stroke-width="11"/>`),e.push(`<circle cx="${pa}" cy="${ma}" r="${tr}" fill="none" stroke="${uf}" stroke-width="2" stroke-opacity=".75"/>`),e.push(`<circle cx="${pa}" cy="${ma}" r="${tr-9}" fill="none" stroke="#f0dfa8" stroke-width="1.2" stroke-opacity=".5"/>`);const i=[];for(let o=0;o<yE;o++){const r=lf[o%lf.length];if(r===void 0)continue;const a=(SE+o*bE)*Math.PI/180,c=pa+Math.cos(a)*tr,l=ma+Math.sin(a)*tr,u=a*180/Math.PI+90,h=`translate(${c.toFixed(1)},${l.toFixed(1)}) rotate(${u.toFixed(1)}) translate(-4,-7) scale(0.62)`;i.push(`<path d="${r}" transform="${h}"/>`)}e.push(`<g fill="none" stroke="#f3e6b8" stroke-width="2.1" stroke-linecap="round" stroke-opacity=".92">${i.join("")}</g>`);const s=[];for(const[o,r,a]of EE){const c=r==="gold"?n:r==="gold2"?t:"#f4ecd2";s.push(`<path d="${o}" fill="${c}" stroke="${uf}" stroke-width="${a}" stroke-linejoin="round"/>`)}s.push('<ellipse class="bb-eye" cx="112" cy="126" rx="15" ry="10"/>'),s.push('<ellipse cx="112" cy="126" rx="5" ry="9" fill="#0b1016" fill-opacity=".7"/>');for(let o=0;o<4;o++)s.push(`<path d="M${176+o*10},118 q10,26 -4,54" fill="none" stroke="${t}" stroke-width="4" stroke-opacity=".85"/>`);return e.push(`<g>${s.join("")}</g>`),e.join("")}function RE(){const n=[];for(let e=0;e<9;e++){const i=118+e%3*14,s=44+e%4*16,o=13+e%3*5;n.push(`<ellipse cx="${212+e*95}" cy="${i}" rx="${s}" ry="${o}"/>`),n.push(`<ellipse cx="${212+e*95+260}" cy="${i}" rx="${s}" ry="${o}"/>`)}const t=[];for(let e=0;e<11;e++){const i=9+e%3*7;t.push(`<rect x="${212+e*78}" y="104" width="${i}" height="58" rx="4"/>`),t.push(`<rect x="${212+e*78+260}" y="104" width="${i}" height="58" rx="4"/>`)}return{a:n.join(""),b:t.join("")}}function CE(n){const t=`url(#bbGold${n})`,e=`url(#bbGold2${n})`,i=AE(t,e),s=RE();return`
<div class="bb-head">
  <div class="bb-name">—</div>
  <div class="bb-sub"><span class="bb-sub-label">BOSS HEALTH</span> <span class="bb-lv"></span></div>
</div>
<svg class="bb-svg" viewBox="0 0 ${cf} ${vE}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
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
    <clipPath id="bbTrack${n}"><rect x="${$i}" y="${Xi}" width="${ei}" height="${ms}" rx="${ME}"/></clipPath>
    <clipPath id="bbFillClip${n}"><rect class="bb-fill-r" x="${$i}" y="${Xi}" width="${ei}" height="${ms}"/></clipPath>
    <clipPath id="bbChipClip${n}"><rect class="bb-chip-r" x="${$i}" y="${Xi}" width="${ei}" height="${ms}"/></clipPath>
  </defs>

  <!-- 용머리 · 룬 고리. 오른쪽은 미러 변환 -->
  <g>${i}</g>
  <g transform="translate(${cf},0) scale(-1,1)">${i}</g>

  <!-- 게이지 -->
  <g clip-path="url(#bbTrack${n})">
    <rect x="${$i}" y="${Xi}" width="${ei}" height="${ms}" fill="url(#bbEmpty${n})"/>
    <g clip-path="url(#bbChipClip${n})">
      <rect x="${$i}" y="${Xi}" width="${ei}" height="${ms}" fill="#efe6cf" opacity="0.55"/>
    </g>
    <g clip-path="url(#bbFillClip${n})">
      <rect x="${$i}" y="${Xi}" width="${ei}" height="${ms}" fill="url(#bbFill${n})"/>
      <g class="bb-flow bb-flow-a" opacity="0.42">${s.a}</g>
      <g class="bb-flow bb-flow-b" opacity="0.3">${s.b}</g>
      <rect class="bb-sheen" x="${$i}" y="${Xi}" width="${ei}" height="20" fill="#ffffff" opacity="0.3"/>
    </g>
    <rect x="${$i}" y="${Xi}" width="${ei}" height="${ms}" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="3"/>
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
</svg>`}const hf="data-bq-bossbar";function PE(){return Object.keys(rf).map(n=>{const t=rf[n];return`.bossbar.bb-t-${n}{--bb-g1:${t.g1};--bb-g2:${t.g2};--bb-g3:${t.g3};--bb-flow:${t.flow};--bb-glow:${t.glow};--bb-eye:${t.eye}}`}).join(`
`)}const IE=`
/* 보스 체력바 (V4) — 원본 190–216 이관. 컨테이너 위치/폭은 styles.css 소관 */
.bossbar.bb-ready{ opacity:0; transition:opacity .4s ease; }
.bossbar.bb-ready.bb-on{ opacity:1; }

${PE()}

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
`;function LE(n){if(n.querySelector(`style[${hf}]`))return;const t=n.createElement("style");t.setAttribute(hf,""),t.textContent=IE,n.head.appendChild(t)}function ao(n,t){const e=n.querySelector(t);if(!e)throw new Error(`bossbar: 요소를 찾지 못했다 — ${t}`);return e}class DE{host;nameEl;subEl;lvEl;numEl;fillR;chipR;ratio=1;chip=1;theme=af;visible=!1;rafId=0;lastT=0;wroteFill=-1;wroteChip=-1;wroteNum="";constructor(t){this.host=t,LE(t.ownerDocument);const e=`-${++TE}`;t.innerHTML=CE(e),t.classList.remove("hidden"),t.classList.add("bb-ready",`bb-t-${af}`),t.setAttribute("aria-hidden","true"),this.nameEl=ao(t,".bb-name"),this.subEl=ao(t,".bb-sub-label"),this.lvEl=ao(t,".bb-lv"),this.numEl=ao(t,".bb-num"),this.fillR=ao(t,".bb-fill-r"),this.chipR=ao(t,".bb-chip-r")}show(t,e,i){this.nameEl.textContent!==t&&(this.chip=this.ratio,this.wroteChip=-1),this.nameEl.textContent=t,this.lvEl.textContent=i===void 0?"":`· Lv ${i}`,this.setTheme(e),this.host.classList.remove("bb-dead"),this.host.classList.add("bb-on"),this.host.setAttribute("aria-hidden","false"),this.visible=!0,this.startLoop()}setHp(t,e){const i=e>0?e:1;this.ratio=Math.min(1,Math.max(0,t)/i),this.chip<this.ratio&&(this.chip=this.ratio);const s=`${Math.max(0,Math.ceil(t)).toLocaleString()} / ${i.toLocaleString()}`;s!==this.wroteNum&&(this.wroteNum=s,this.numEl.textContent=s),this.host.classList.toggle("bb-dead",t<=0),this.paint(),this.startLoop()}setInvulnerable(t){this.host.classList.toggle("bb-invuln",t),this.subEl.textContent=t?"무적 · 방벽":"BOSS HEALTH"}hide(){this.visible=!1,this.host.classList.remove("bb-on","bb-invuln"),this.host.setAttribute("aria-hidden","true"),this.subEl.textContent="BOSS HEALTH",this.stopLoop()}step(t){this.stopLoop(),this.advance(t)}dispose(){this.stopLoop()}setTheme(t){t!==this.theme&&(this.host.classList.remove(`bb-t-${this.theme}`),this.host.classList.add(`bb-t-${t}`),this.theme=t)}advance(t){this.chip>this.ratio?this.chip=Math.max(this.ratio,this.chip-t*wE):this.chip=this.ratio,this.paint()}paint(){const t=+(ei*this.ratio).toFixed(1);t!==this.wroteFill&&(this.wroteFill=t,this.fillR.setAttribute("width",String(t)));const e=+(ei*this.chip).toFixed(1);e!==this.wroteChip&&(this.wroteChip=e,this.chipR.setAttribute("width",String(e)))}startLoop(){if(this.rafId||!this.visible||this.chip<=this.ratio||typeof requestAnimationFrame!="function")return;this.lastT=0;const t=e=>{this.rafId=0;const i=this.lastT?Math.min(.1,(e-this.lastT)/1e3):0;this.lastT=e,this.advance(i),this.visible&&this.chip>this.ratio&&(this.rafId=requestAnimationFrame(t))};this.rafId=requestAnimationFrame(t)}stopLoop(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=0)}}const kE=116,NE=512,OE=8,UE=2*(Math.abs(Si.z)+qn),ga=Math.PI*2,Je={ground:"#3f7a35",lakeWater:"#2f8fd6",lakeIsland:"#6cb84e",sea:"#1f6fa8",volc:"#3a221c",ice:"#dfeaf2",bossRing:"#fff",worldBossRing:"#ff4a4a",worldBossDot:"#ff4a4a",village:"#c4b391",shop:"#ffd24a",self:"#fff"},gs={void:"#141a20",rampart:"#9a927f",gateLocked:Je.worldBossDot,bridge:"#cfd8e4",heaven:"#e9f2ff",peer:"#48d6ff",outline:"#101820"},Zc={biome:.85,zone:.55},gi={worldBossDot:2.6,bossRingWidth:1.5,worldBossRingWidth:2,shopHalf:2.5,selfWingX:3.6,selfTail:4,peer:3,liveBoss:4};function FE(n){return"#"+n.toString(16).padStart(6,"0")}function zE(n,t,e){return n<t?t:n>e?e:n}class BE{canvas;ctx;span=NE;frame=0;constructor(t){const e=t.getContext("2d");if(!e)throw new Error("미니맵 캔버스에서 2D 컨텍스트를 얻지 못했다");this.canvas=t,this.ctx=e}setScale(t){this.span=Math.max(1,t)}getScale(){return this.span}tick(t){return this.frame=(this.frame+1)%OE,this.frame!==0?!1:(this.render(t),!0)}render(t){const{ctx:e,canvas:i}=this,s=i.width,o=i.height,r=Math.min(s,o),a=(s-r)/2,c=(o-r)/2,l=this.span,u=l/2,h=p=>a+(p+u)/l*r,f=p=>c+(p+u)/l*r,d=p=>p/l*r,g=zE(r/kE,1,2.2),x=l>=UE,m=x&&t.gates.heavenOpen;e.clearRect(0,0,s,o),this.drawGround(h,f,d,r,a,c,x),this.drawZones(h,f,d,g,x,m),this.drawVillage(h,f,d,g),x&&this.drawNorthGate(h,f,d,g,t.gates.heavenOpen,m),this.drawBosses(h,f,g,t.mobs),this.drawPeers(h,f,g,t.others),this.drawSelf(h,f,g,t.self)}drawGround(t,e,i,s,o,r,a){const c=this.ctx;if(a){c.fillStyle=gs.void,c.fillRect(o,r,s,s),c.fillStyle=Je.ground;const u=t(-Vn),h=e(-Vn);c.fillRect(u,h,t(Vn)-u,e(Vn)-h)}else c.fillStyle=Je.ground,c.fillRect(o,r,s,s);this.disc(t(xe.x),e(xe.z),i(xe.r),Je.lakeWater),this.disc(t(xe.x),e(xe.z),i(xe.island),Je.lakeIsland);const l=(u,h)=>{c.globalAlpha=Zc.biome,this.disc(t(u.x),e(u.z),i(u.r),h),c.globalAlpha=1};l(Se,Je.sea),l(Ce,Je.volc),l(Te,Je.ice)}drawZones(t,e,i,s,o,r){const a=this.ctx;for(const c of Np){if(o&&!r&&c.region==="heaven")continue;const l=ke(c.type),u=t(c.x),h=e(c.z),f=i(c.r);a.globalAlpha=Zc.zone,a.fillStyle=FE(l.color),a.beginPath(),a.arc(u,h,f,0,ga),a.fill(),a.globalAlpha=1,l.boss===!0&&(a.strokeStyle=l.world===!0?Je.worldBossRing:Je.bossRing,a.lineWidth=(l.world===!0?gi.worldBossRingWidth:gi.bossRingWidth)*s,a.stroke()),l.world===!0&&this.disc(u,h,gi.worldBossDot*s,Je.worldBossDot)}}drawVillage(t,e,i,s){this.disc(t(go.x),e(go.z),i(go.r),Je.village),this.ctx.fillStyle=Je.shop;const o=gi.shopHalf*s;this.ctx.fillRect(t(ns.x)-o,e(ns.z)-o,o*2,o*2)}drawNorthGate(t,e,i,s,o,r){const a=this.ctx,c=e(As);if(a.lineWidth=2*s,a.strokeStyle=gs.rampart,a.beginPath(),a.moveTo(t(-Vn),c),a.lineTo(t(-bs),c),a.moveTo(t(bs),c),a.lineTo(t(Vn),c),a.stroke(),!o){a.strokeStyle=gs.gateLocked,a.lineWidth=2.4*s,a.beginPath(),a.moveTo(t(-bs),e(Ie.z)),a.lineTo(t(bs),e(Ie.z)),a.stroke();return}if(!r)return;a.fillStyle=gs.bridge;const l=t(-fr),u=e(pr);a.fillRect(l,u,t(fr)-l,c-u),a.globalAlpha=Zc.biome,this.disc(t(Si.x),e(Si.z),i(qn),gs.heaven),a.globalAlpha=1}drawBosses(t,e,i,s){const o=this.ctx;let r=!1;for(const a of s)a.boss&&(r||(o.lineWidth=1.6*i,r=!0),o.strokeStyle=a.world===!0?Je.worldBossRing:Je.bossRing,o.beginPath(),o.arc(t(a.x),e(a.z),gi.liveBoss*i,0,ga),o.stroke())}drawPeers(t,e,i,s){if(s.length===0)return;const o=this.ctx;o.lineWidth=1*i,o.strokeStyle=gs.outline;for(const r of s)o.fillStyle=gs.peer,o.beginPath(),o.arc(t(r.x),e(r.z),gi.peer*i,0,ga),o.fill(),o.stroke()}drawSelf(t,e,i,s){const o=this.ctx;o.save(),o.translate(t(s.x),e(s.z)),o.rotate(-s.yaw),o.fillStyle=Je.self,o.beginPath(),o.moveTo(0,-5*i),o.lineTo(gi.selfWingX*i,gi.selfTail*i),o.lineTo(-3.6*i,gi.selfTail*i),o.closePath(),o.fill(),o.restore()}disc(t,e,i,s){const o=this.ctx;o.fillStyle=s,o.beginPath(),o.arc(t,e,i,0,ga),o.fill()}}const df=[{key:"burnT",icon:"🔥",label:"화상"},{key:"slowT",icon:"🕸",label:"둔화"},{key:"invulnT",icon:"✨",label:"무적"},{key:"buffT",icon:"💨",label:"가속"}];class HE{lv;cls;hpFill;hpText;xpFill;xpText;gold;spDot;status;objective;toasts;help;net;prev={};prevStatus="";constructor(t=document){this.lv=xn(t,"#lvBadge"),this.cls=xn(t,"#clsBadge"),this.hpFill=xn(t,"#hpFill"),this.hpText=xn(t,"#hpText"),this.xpFill=xn(t,"#xpFill"),this.xpText=xn(t,"#xpText"),this.gold=xn(t,"#goldBadge"),this.spDot=xn(t,"#spDot"),this.status=xn(t,"#statusIcons"),this.objective=xn(t,"#objective"),this.toasts=xn(t,"#toasts"),this.help=xn(t,"#help"),this.net=xn(t,"#netBadge")}update(t){if(t.level!==this.prev.level&&(this.lv.textContent=`Lv ${t.level}`),t.hp!==this.prev.hp||t.maxHp!==this.prev.maxHp){const i=t.maxHp>0?Math.max(0,Math.min(1,t.hp/t.maxHp)):0;this.hpFill.style.transform=`scaleX(${i})`,this.hpText.textContent=`${Math.max(0,Math.ceil(t.hp))} / ${Math.round(t.maxHp)}`}if(t.xp!==this.prev.xp||t.xpNeed!==this.prev.xpNeed){const i=t.xpNeed>0?Math.max(0,Math.min(1,t.xp/t.xpNeed)):0;this.xpFill.style.transform=`scaleX(${i})`,this.xpText.textContent=`${Math.floor(t.xp)} / ${t.xpNeed}`}if(t.gold!==this.prev.gold&&(this.gold.textContent=`${t.gold.toLocaleString("ko-KR")} G`),t.classId!==this.prev.classId)if(t.classId){const i=Pi[t.classId];this.cls.textContent=`${i.icon} ${i.name}`,this.cls.classList.remove("hidden")}else this.cls.classList.add("hidden");t.sp!==this.prev.sp&&this.spDot.classList.toggle("hidden",t.sp<=0);const e=df.map(i=>Number(t[i.key])>0?"1":"0").join("");e!==this.prevStatus&&(this.prevStatus=e,this.status.replaceChildren(...df.filter(i=>Number(t[i.key])>0).map(i=>{const s=document.createElement("span");return s.textContent=i.icon,s.title=i.label,s}))),this.prev=t}setObjective(t){this.objective.textContent!==t&&(this.objective.textContent=t)}setHelp(t){this.help.replaceChildren(...t.map(e=>{const i=document.createElement("div");return i.textContent=e,i}))}setNet(t,e){if(this.net.replaceChildren(),this.net.append(document.createTextNode(t)),e){const i=document.createElement("b");i.textContent=` ${e}`,this.net.appendChild(i)}}toast(t,e=2200){const i=document.createElement("div");i.className="toast",i.textContent=t,this.toasts.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity .3s",setTimeout(()=>i.remove(),320)},e)}}function GE(n,t,e=0){return{level:t.level,hp:t.hp,maxHp:t.maxHp,xp:n.xp,xpNeed:n.xpNeed,gold:n.gold,classId:t.classId??null,sp:n.sp,burnT:n.burnT,slowT:n.slowT,invulnT:n.invulnT,buffT:e}}function VE(n){return n.creatorKilled?"🏆 조물주를 쓰러뜨렸다":n.gabrielKilled?"조물주에게 간다 — 봉인 너머 북쪽 끝":n.heavenOpen?"천국으로 — 대천사 가브리엘을 찾아라":n.lords>=3?"문이 열린다…":!n.hasClass&&n.level>=5?"직업을 고르자":n.level<5?`Lv 5 까지 사냥하기 (${n.level}/5)`:`세 군주를 무찌르고 문을 열자 (${n.lords}/3)`}function xn(n,t){const e=n.querySelector(t);if(!e)throw new Error(`HUD 요소를 찾을 수 없다: ${t}`);return e}class WE{constructor(t){this.host=t,window.addEventListener("popstate",()=>{this.historyDepth>0&&this.historyDepth--,this.closeTop({fromHistory:!0})})}stack=[];historyDepth=0;onChange=null;get open(){return this.stack.length>0}get topId(){return this.stack[this.stack.length-1]?.spec.id??null}has(t){return this.stack.some(e=>e.spec.id===t)}toggle(t){this.topId===t.id?this.closeTop():this.push(t)}push(t){if(this.has(t.id))return;const e=document.createElement("div");e.className="panel",e.dataset.panel=t.id,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",t.title);const i=document.createElement("div");i.className="panel-head";const s=document.createElement("div");s.className="panel-title",s.textContent=t.title,i.appendChild(s);const o=()=>this.close(t.id);if(!t.modal){const l=document.createElement("button");l.className="icon-btn",l.textContent="✕",l.setAttribute("aria-label","닫기"),l.addEventListener("click",o),i.appendChild(l)}const r=document.createElement("div");r.className="panel-body";const a=document.createElement("div");a.className="panel-foot",e.append(i,r,a),this.host.appendChild(e);const c=t.render(r,o);t.footer?.(a,o),this.stack.push({spec:t,el:e,cleanup:c}),history.pushState({panel:t.id},""),this.historyDepth++,this.onChange?.(!0)}closeTop(t={}){const e=this.stack[this.stack.length-1];return!e||e.spec.modal?!1:(this.remove(this.stack.length-1,t.fromHistory===!0),!0)}close(t){const e=this.stack.findIndex(i=>i.spec.id===t);e<0||this.remove(e,!1)}closeAll(){for(;this.stack.length>0;)this.remove(this.stack.length-1,!1)}resolveModal(t){const e=this.stack.findIndex(i=>i.spec.id===t);e<0||this.remove(e,!1)}remove(t,e){const i=this.stack[t];i&&(this.stack.splice(t,1),i.cleanup?.(),i.el.remove(),!e&&this.historyDepth>0&&(this.historyDepth--,history.back()),this.onChange?.(this.stack.length>0))}}function Ei(n,t,e="default"){const i=document.createElement("button");return i.className=e==="default"?"btn":`btn btn-${e}`,i.textContent=n,i.addEventListener("click",t),i}function _0(n){const t=document.createElement("button");t.className="card"+(n.selected?" selected":""),t.type="button",n.disabled&&(t.disabled=!0);const e=document.createElement("h4");if(e.textContent=n.title,t.appendChild(e),n.desc){const i=document.createElement("p");i.textContent=n.desc,t.appendChild(i)}if(n.stats){const i=document.createElement("div");i.className="stats",i.textContent=n.stats,t.appendChild(i)}if(n.price){const i=document.createElement("div");i.className="price",i.textContent=n.price,t.appendChild(i)}return n.onClick&&t.addEventListener("click",n.onClick),t}function v0(n){const t=document.createElement("div");return t.className="card-grid",t.append(...n),t}const $E={opening:{id:"opening",duration:10,lines:[{at:0,text:"세상의 북쪽 끝에 문이 있다."},{at:3,text:"자물쇠는 셋. 열쇠는 없다."},{at:6,text:"세 군주를 쓰러뜨리는 수밖에."},{at:8.5,text:"아무도 시키지 않았다."}]},gate:{id:"gate",duration:8,blocking:!0,lines:[{at:0,text:"세 개의 룬이 모두 켜졌다."},{at:2.6,text:"문이 열린다."},{at:5,text:"다리 너머는 구름이다."}]},seal:{id:"seal",duration:4,lines:[{at:0,text:"가브리엘이 무릎을 꿇는다."},{at:2,text:"안쪽 봉인이 풀렸다."}]},ending:{id:"ending",duration:15,lines:[{at:0,text:"조물주가 조용해졌다."},{at:3.5,text:"문 너머에 있던 것은 구원이 아니었다."},{at:7,text:"그냥 다음 방이었다."},{at:11,text:"집에 갈 시간이다."}]}};class XE{root;caption;skipBtn;current=null;t=0;lineIdx=-1;resolve=null;seen=new Set;constructor(t){this.root=t,this.caption=ff(t,"#cutCaption"),this.skipBtn=ff(t,"#btnSkip"),this.skipBtn.addEventListener("click",()=>this.skip())}get playing(){return this.current!==null}markSeen(t){this.seen.add(t)}get seenIds(){return[...this.seen]}play(t,e={}){const i=$E[t];return!i||this.seen.has(t)&&!e.force?Promise.resolve():(this.seen.add(t),this.current=i,this.t=0,this.lineIdx=-1,this.caption.textContent="",this.root.classList.remove("hidden"),new Promise(s=>{this.resolve=s}))}update(t){const e=this.current;if(!e)return;this.t+=t;let i=-1;for(let s=0;s<e.lines.length;s++){const o=e.lines[s];o&&o.at<=this.t&&(i=s)}i!==this.lineIdx&&(this.lineIdx=i,this.caption.textContent=i>=0?e.lines[i]?.text??"":""),this.t>=e.duration&&this.finish()}skip(){this.current&&this.finish()}finish(){this.current=null,this.root.classList.add("hidden"),this.caption.textContent="";const t=this.resolve;this.resolve=null,t?.()}}function ff(n,t){const e=n.querySelector(t);if(!e)throw new Error(`컷신 요소를 찾을 수 없다: ${t}`);return e}const pf="/minchan_rpg/",qE={boss:`${pf}audio/bgm-boss.mp3`,creator:`${pf}audio/bgm-creator.mp3`};class YE{ctx=null;master=null;bgmGain=null;source=null;buffers=new Map;loading=new Map;current=null;bgmEnabled=!0;volume=55;unlock(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=this.volume/100,this.bgmGain.connect(this.master))}setVolume(t){this.volume=Math.max(0,Math.min(100,t)),this.bgmGain&&(this.bgmGain.gain.value=this.volume/100)}blip(t,e=.08,i="square",s=.25){const o=this.ctx,r=this.master;if(!o||!r||o.state!=="running")return;const a=o.createOscillator(),c=o.createGain();a.type=i,a.frequency.value=t,c.gain.setValueAtTime(s,o.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e),a.connect(c),c.connect(r),a.start(),a.stop(o.currentTime+e)}async preload(t){const e=this.buffers.get(t);if(e)return e;const i=this.loading.get(t);if(i)return i;const s=(async()=>{try{const o=await fetch(qE[t]);if(!o.ok)return null;const r=await o.arrayBuffer();this.unlock();const a=this.ctx;if(!a)return null;const c=await a.decodeAudioData(r);return this.buffers.set(t,c),c}catch{return null}})();return this.loading.set(t,s),s}async playBgm(t){if(!this.bgmEnabled||this.current===t)return;const e=await this.preload(t),i=this.ctx,s=this.bgmGain;if(!e||!i||!s)return;this.stopBgm();const o=i.createBufferSource();o.buffer=e,o.loop=!0,o.connect(s),o.start(),this.source=o,this.current=t}stopBgm(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}this.current=null}get playing(){return this.current}}const co={hit:n=>n.blip(220,.07,"square",.22),crit:n=>n.blip(520,.11,"sawtooth",.28),hurt:n=>n.blip(120,.14,"sawtooth",.3),coin:n=>n.blip(880,.06,"triangle",.18),levelUp:n=>{n.blip(523,.09,"triangle",.24),setTimeout(()=>n.blip(784,.14,"triangle",.24),90)},swing:n=>n.blip(300,.06,"triangle",.12),jump:n=>n.blip(420,.05,"sine",.15),special:n=>n.blip(180,.22,"sawtooth",.3),ui:n=>n.blip(660,.04,"sine",.14),gate:n=>n.blip(90,.6,"sawtooth",.32)},tu={sensitivity:100,cameraDistance:13,invertY:!1,autoAttack:!1,deadzone:.12,leftHanded:!1,haptics:!0,uiScale:1};class jE{settings;lastDevice="keyboard";raw={keyMove:{x:0,z:0},padMove:{x:0,z:0},joyMove:{x:0,z:0},look:{dx:0,dy:0},zoom:0,attackHeld:!1,jumpEdge:!1,specialEdge:!1,runHeld:!1,ui:[]};constructor(t={...tu}){this.settings=t}markDevice(t){this.lastDevice!==t&&(this.lastDevice=t,this.onDeviceChange?.(t))}onDeviceChange;pushUi(t){this.raw.ui.includes(t)||this.raw.ui.push(t)}consume(){const t=this.raw,e=t.keyMove.x+t.joyMove.x+t.padMove.x,i=t.keyMove.z+t.joyMove.z+t.padMove.z;let s=mf(e),o=mf(i);const r=Math.hypot(s,o);r<this.settings.deadzone?(s=0,o=0):r>1&&(s/=r,o/=r);const a=this.settings.sensitivity/100,c={move:{x:s,z:o},look:{dx:t.look.dx*a,dy:t.look.dy*a*(this.settings.invertY?-1:1)},attack:t.attackHeld,jump:t.jumpEdge,special:t.specialEdge,run:t.runHeld,ui:t.ui.slice(),zoom:t.zoom};return t.look.dx=0,t.look.dy=0,t.zoom=0,t.jumpEdge=!1,t.specialEdge=!1,t.ui.length=0,c}vibrate(t){this.settings.haptics&&navigator.vibrate?.(t)}}function mf(n){return n<-1?-1:n>1?1:n}const Jc={KeyW:{move:{z:-1}},ArrowUp:{move:{z:-1}},KeyS:{move:{z:1}},ArrowDown:{move:{z:1}},KeyA:{move:{x:-1}},ArrowLeft:{move:{x:-1}},KeyD:{move:{x:1}},ArrowRight:{move:{x:1}},KeyT:{ui:"tree"},KeyE:{ui:"shop"},KeyM:{ui:"map"},KeyC:{ui:"cameraReset"},Tab:{ui:"autoAttack"},Escape:{ui:"menu"}},gf=new Set(["KeyF","KeyJ"]),KE=new Set(["KeyQ","KeyR"]),ZE=new Set(["Space"]),xf=new Set(["ShiftLeft","ShiftRight"]),JE=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"]);function QE(n,t=window){const e=new Set,i=()=>{let a=0,c=0;for(const l of e){const u=Jc[l];u?.move&&(a+=u.move.x??0,c+=u.move.z??0)}n.raw.keyMove.x=a,n.raw.keyMove.z=c},s=a=>{if(a.repeat)return;n.markDevice("keyboard"),JE.has(a.code)&&a.preventDefault(),e.add(a.code),gf.has(a.code)&&(n.raw.attackHeld=!0),KE.has(a.code)&&(n.raw.specialEdge=!0),ZE.has(a.code)&&(n.raw.jumpEdge=!0),xf.has(a.code)&&(n.raw.runHeld=!0);const c=Jc[a.code];c?.ui&&n.pushUi(c.ui),c?.move&&i()},o=a=>{e.delete(a.code),gf.has(a.code)&&(n.raw.attackHeld=!1),xf.has(a.code)&&(n.raw.runHeld=!1),Jc[a.code]?.move&&i()},r=()=>{e.clear(),n.raw.keyMove.x=0,n.raw.keyMove.z=0,n.raw.attackHeld=!1,n.raw.runHeld=!1};return t.addEventListener("keydown",s),t.addEventListener("keyup",o),t.addEventListener("blur",r),()=>{t.removeEventListener("keydown",s),t.removeEventListener("keyup",o),t.removeEventListener("blur",r)}}const tT=12,eT=320,xa=44,nT=-.1,iT=.95;function sT(n,t,e){let i=-1,s=0,o=0,r=-1,a=0,c=0,l=0,u=0,h=0,f=0;const d=y=>y.pointerType!=="mouse",g=y=>{i=y.pointerId,s=y.clientX,o=y.clientY,t.joy.style.left=`${s}px`,t.joy.style.top=`${o}px`,t.joy.classList.remove("hidden"),t.knob.style.transform="translate(0px, 0px)"},x=y=>{const C=y.clientX-s,O=y.clientY-o,k=Math.hypot(C,O),D=k>xa?xa/k:1;t.knob.style.transform=`translate(${C*D}px, ${O*D}px)`,n.raw.joyMove.x=C*D/xa,n.raw.joyMove.z=O*D/xa},m=()=>{i=-1,n.raw.joyMove.x=0,n.raw.joyMove.z=0,t.joy.classList.add("hidden")},p=y=>{n.markDevice("touch"),!(i>=0)&&(y.preventDefault(),g(y),t.joyZone.setPointerCapture(y.pointerId))},_=y=>{y.pointerId===i&&(y.preventDefault(),x(y))},M=y=>{y.pointerId===i&&m()},v=y=>{n.markDevice(d(y)?"touch":"keyboard"),!(r>=0)&&(r=y.pointerId,a=y.clientX,c=y.clientY,l=y.clientX,u=y.clientY,h=performance.now(),f=0,t.surface.setPointerCapture?.(y.pointerId))},E=y=>{if(y.pointerId!==r)return;const C=y.clientX-a,O=y.clientY-c;a=y.clientX,c=y.clientY,f=Math.max(f,Math.hypot(y.clientX-l,y.clientY-u)),n.raw.look.dx+=C,n.raw.look.dy+=O},b=y=>{if(y.pointerId!==r)return;const C=performance.now()-h;f<tT&&C<eT&&(n.raw.attackHeld=!0,setTimeout(()=>{n.raw.attackHeld=!1},60)),r=-1},T=y=>{y.preventDefault(),n.raw.zoom+=Math.sign(y.deltaY)},R=t.surface;R.addEventListener("pointerdown",v),R.addEventListener("pointermove",E),R.addEventListener("pointerup",b),R.addEventListener("pointercancel",b),R.addEventListener("wheel",T,{passive:!1});const S=t.joyZone;return S.addEventListener("pointerdown",p),S.addEventListener("pointermove",_),S.addEventListener("pointerup",M),S.addEventListener("pointercancel",M),()=>{R.removeEventListener("pointerdown",v),R.removeEventListener("pointermove",E),R.removeEventListener("pointerup",b),R.removeEventListener("pointercancel",b),R.removeEventListener("wheel",T),S.removeEventListener("pointerdown",p),S.removeEventListener("pointermove",_),S.removeEventListener("pointerup",M),S.removeEventListener("pointercancel",M)}}function oT(n,t,e){n.yaw-=t*.0055,n.pitch=Math.max(nT,Math.min(iT,n.pitch+e*.0042))}function rT(n,t){n.distance=Math.max(6,Math.min(24,n.distance+t))}function aT(n,t){const e=(s,o,r)=>{const a=l=>{l.preventDefault(),n.markDevice("touch"),o()},c=()=>r?.();return s.addEventListener("pointerdown",a),s.addEventListener("pointerup",c),s.addEventListener("pointercancel",c),s.addEventListener("pointerleave",c),()=>{s.removeEventListener("pointerdown",a),s.removeEventListener("pointerup",c),s.removeEventListener("pointercancel",c),s.removeEventListener("pointerleave",c)}},i=[e(t.attack,()=>{n.raw.attackHeld=!0},()=>{n.raw.attackHeld=!1}),e(t.jump,()=>{n.raw.jumpEdge=!0}),e(t.special,()=>{n.raw.specialEdge=!0})];return()=>i.forEach(s=>s())}const xi={A:0,B:1,X:2,Y:3,LB:4,LT:6,RT:7,START:9,L3:10};class cT{constructor(t,e=.18){this.hub=t,this.deadzone=e}prev=new Map;connected=!1;attach(){const t=()=>{this.connected=!0,this.hub.markDevice("gamepad")},e=()=>{this.connected=navigator.getGamepads().some(i=>i!==null)};return window.addEventListener("gamepadconnected",t),window.addEventListener("gamepaddisconnected",e),()=>{window.removeEventListener("gamepadconnected",t),window.removeEventListener("gamepaddisconnected",e)}}poll(){const e=(navigator.getGamepads?.()??[]).find(l=>l!==null);if(!e){this.hub.raw.padMove.x=0,this.hub.raw.padMove.z=0;return}const i=va(e.axes[0]??0,this.deadzone),s=va(e.axes[1]??0,this.deadzone),o=va(e.axes[2]??0,this.deadzone),r=va(e.axes[3]??0,this.deadzone);(i!==0||s!==0||o!==0||r!==0)&&this.hub.markDevice("gamepad"),this.hub.raw.padMove.x=i,this.hub.raw.padMove.z=s,this.hub.raw.look.dx+=o*14,this.hub.raw.look.dy+=r*14,this.hub.raw.attackHeld=_a(e,xi.X),this.hub.raw.runHeld=_a(e,xi.LB)||_a(e,xi.L3),this.edge(e,xi.A)&&(this.hub.raw.jumpEdge=!0),this.edge(e,xi.B)&&(this.hub.raw.specialEdge=!0),this.edge(e,xi.Y)&&this.hub.pushUi("tree"),this.edge(e,xi.START)&&this.hub.pushUi("menu");const a=e.buttons[xi.LT]?.value??0,c=e.buttons[xi.RT]?.value??0;a>.3&&(this.hub.raw.zoom-=a*.4),c>.3&&(this.hub.raw.zoom+=c*.4)}edge(t,e){const i=_a(t,e),s=this.prev.get(e)??!1;return this.prev.set(e,i),i&&!s}}function _a(n,t){return n.buttons[t]?.pressed??!1}function va(n,t){return Math.abs(n)<t?0:n}function lT(n,t){const e=Math.cos(t),i=Math.sin(t);return{x:-(n.x*e+n.z*i),z:-(n.z*e-n.x*i)}}function uT(n){return Math.atan2(n.x,n.z)}let _f=!1;function hT(n){_f||(_f=!0,console.warn(`[net] 서버가 스냅샷에 ${n} 를 보내지 않는다 — 서버가 클라이언트보다 낡았다.
      게임은 그대로 돌아가지만 해당 연출은 빠진다. \`npm run deploy:cf --workspace @bq/server\` 로 서버를 올릴 것.`))}function dT(n){const t=Array.isArray(n.minions),e=n.mobs.every(i=>typeof i.atk=="number"&&typeof i.atkD=="number");return t&&e?n:(hT([t?null:"minions",e?null:"mobs.atk"].filter(Boolean).join(" · ")),{...n,minions:t?n.minions:[],mobs:e?n.mobs:n.mobs.map(i=>({...i,atk:i.atk??0,atkD:i.atkD??0}))})}const vf=600,fT=5e3;class pT{constructor(t){this.url=t}ws=null;outbox=[];retryTimer=null;retryDelay=vf;closedByUs=!1;onMessage=null;onStateChange=null;onReconnect=null;get endpoint(){return this.url}connect(){this.closedByUs=!1,this.onStateChange?.("connecting");const t=new WebSocket(this.url);this.ws=t,t.onopen=()=>{this.retryDelay=vf;const e=this.onReconnect?.(),i=this.outbox;this.outbox=[],e&&t.send(JSON.stringify(e));for(const s of i)t.send(JSON.stringify(s));this.onStateChange?.("open")},t.onclose=()=>{this.onStateChange?.("closed"),this.scheduleRetry()},t.onerror=()=>{this.onStateChange?.("closed"),this.scheduleRetry()},t.onmessage=e=>{let i;try{i=JSON.parse(String(e.data))}catch{return}this.onMessage?.(i)}}send(t){const e=this.ws;if(e?.readyState===WebSocket.OPEN){e.send(JSON.stringify(t));return}t.t!=="input"&&this.outbox.push(t)}close(){this.closedByUs=!0,this.retryTimer!==null&&clearTimeout(this.retryTimer),this.retryTimer=null,this.outbox.length=0,this.ws?.close(),this.ws=null}scheduleRetry(){if(this.closedByUs||this.retryTimer!==null)return;const t=this.retryDelay;this.retryDelay=Math.min(fT,Math.round(this.retryDelay*1.8)),this.retryTimer=setTimeout(()=>{this.retryTimer=null,this.closedByUs||this.connect()},t)}}class Mf{constructor(t,e={}){this.transport=t,this.handlers=e,t.onMessage=i=>this.handle(i),"onReconnect"in t&&(t.onReconnect=()=>this.joinName?this.joinMessage():null),t.onStateChange=i=>{this.state=i,this.handlers.onState?.(i),i==="open"?this.startPing():this.stopPing()}}playerId=-1;roomCode="";worldSeed=0;state="closed";rtt=0;seq=0;joinName="모험가";joinRoom="";pingTimer=null;join(t,e){this.joinName=t,e&&(this.joinRoom=e),this.transport.send(this.joinMessage())}joinMessage(){const t=this.roomCode||this.joinRoom,e=this.saveProvider?.();return{...{t:"join",protocol:jl,name:this.joinName},...t?{roomCode:t}:{},...e!=null?{save:e}:{}}}saveProvider=null;sendInput(t){const e=++this.seq;return this.transport.send({t:"input",frame:{...t,seq:e}}),e}send(t){this.transport.send(t)}close(){this.stopPing(),this.transport.close()}startPing(){this.stopPing(),this.pingTimer=setInterval(()=>{this.transport.send({t:"ping",clientTime:performance.now()})},2e3)}stopPing(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}handle(t){switch(t.t){case"hello":this.playerId=t.playerId,this.roomCode=t.roomCode,this.worldSeed=t.worldSeed,this.handlers.onHello?.(t.playerId,t.roomCode,t.worldSeed);break;case"reject":this.state="rejected",this.handlers.onReject?.(t.reason);break;case"snapshot":this.handlers.onSnapshot?.(dT(t));break;case"event":this.handlers.onEvent?.(t.ev);break;case"pong":this.rtt=performance.now()-t.clientTime;break}}}const mT=.1,gT=6,M0=9999;function y0(n){return Xy({lv:n.lv},{skills:n.skills,cls:n.classId?Oo(n.classId):Za,weapon:Ds[n.weaponId]})}function Hs(n){const t=n.stats.maxHp;n.stats=y0(n),n.mods=br(n.skills),n.hp=qy(n.hp,t,n.stats.maxHp)}function xT(n,t,e){const i={id:n,name:t.slice(0,16)||`모험가${n}`,x:e.x,y:0,z:e.z,yaw:0,vy:0,grounded:!0,jumpsLeft:1,lv:ii.level,xp:0,need:ii.need,sp:ii.sp,gold:ii.gold,classId:null,weaponId:"stick",owned:new Set(["stick"]),skills:{},hp:ii.hp,dead:!1,invul:0,burnT:0,burnTick:0,slowT:0,buffT:0,attackCd:0,comboStep:0,comboT:0,specialCd:0,sinceAttack:M0,specialCharged:!1,wantsAttack:!1,wantsSpecial:!1,moving:!1,running:!1,ackSeq:0,lastInputAt:0,stats:{},mods:br({})};return i.stats=y0(i),i.hp=i.stats.maxHp,i}function _T(n){return{hp:n.hp,maxHp:n.stats.maxHp,sprinting:n.running,inWater:!1,nearbyEnemyCount:0,targetDistance:0,comboStep:n.comboStep}}function ec(n){return Qy(n.classId==="parsley",n.skills)}function vT(n,t,e,i,s){if(t.seq<=n.ackSeq)return;n.ackSeq=t.seq;const o=Math.min(e,Math.min(Math.abs(t.dt),mT));n.yaw=t.yaw;const r=t.actions|0;if(n.wantsAttack=(r&vi.ATTACK)!==0,n.wantsSpecial=(r&vi.SPECIAL)!==0,n.running=(r&vi.RUN)!==0,n.dead){n.moving=!1;return}const a=yf(t.moveX),c=yf(t.moveZ),l=Math.hypot(a,c);n.moving=l>Sn.inputDeadzone;const u=s.surfaceAt(n.x,n.z,n.classId==="fish");if(n.moving){let h=Sn.baseSpeed*n.stats.spdB*u.speedMul;n.running&&(h*=Sn.sprintMul),n.slowT>0&&(h*=.45),n.buffT>0&&(h*=3),h*=$y(n.mods,n.sinceAttack);const f=n.x+a/l*h*o,d=n.z+c/l*h*o,g=s.collide({x:f,z:d},Sn.playerRadius),x=Pp(g,{isPlayer:!0,gates:i});n.x=x.x,n.z=x.z}if(r&vi.JUMP&&n.jumpsLeft>0){const h=n.classId?Oo(n.classId).jumpMul:1;n.vy=Sn.jumpSpeed*h*n.stats.jumpB,n.jumpsLeft--,n.grounded=!1}}function MT(n,t,e){const i={drowned:0,burned:0,landed:0};if(n.dead)return i;const s=e.surfaceAt(n.x,n.z,n.classId==="fish");return n.vy-=Sn.gravity*t,n.y+=n.vy*t,n.y<=s.groundY?(!n.grounded&&n.vy<Sn.landImpactVy&&(i.landed=Math.min(1,-n.vy/Sn.landImpactNorm)),n.y=s.groundY,n.vy=0,n.grounded||(n.jumpsLeft=ec(n)),n.grounded=!0):n.grounded=!1,s.lava&&n.y<.6&&(n.burnT=Math.max(n.burnT,1.4)),n.burnT>0&&(n.burnT-=t,n.burnTick+=t,n.burnTick>=.7&&(n.burnTick=0,n.hp-=6,i.burned=6)),n.slowT>0&&(n.slowT-=t),n.buffT>0&&(n.buffT-=t),n.invul>0&&(n.invul-=t),n.attackCd>0&&(n.attackCd-=t),n.comboT>0&&(n.comboT-=t),n.specialCd>0&&(n.specialCd-=t),n.sinceAttack<M0&&(n.sinceAttack+=t),s.water&&n.classId!=="fish"&&(n.burnTick+=0),n.stats.hpReg>0&&n.hp>0&&(n.hp=Math.min(n.stats.maxHp,n.hp+n.stats.hpReg*t)),n.classId==="fish"&&(s.water||n.mods.alwaysInWater)&&(n.hp=Math.min(n.stats.maxHp,n.hp+gT*n.mods.waterEffectMul*t)),n.hp<=0&&(n.dead=!0),i}function yT(n,t,e){const i={...n.stats,guard:Vy(n.stats.guard,n.mods,_T(n))},s=n2({lv:n.lv,hp:n.hp,xp:n.xp,need:n.need,sp:n.sp,gold:n.gold,dead:n.dead,invul:n.invul},t,i,e);return n.hp=s.player.hp,n.invul=s.player.invul,n.gold=s.player.gold,n.dead=s.player.dead,{applied:s.damage,died:s.died}}function ST(n){n.hp=n.stats.maxHp,n.dead=!1,n.invul=xo.RESPAWN_INVUL,n.x=xo.RESPAWN_X,n.z=xo.RESPAWN_Z,n.y=0,n.vy=0,n.burnT=0,n.burnTick=0,n.slowT=0,n.jumpsLeft=ec(n)}function bT(n,t){const e=n.classId?Oo(n.classId):Za,i=Math.round(t*n.stats.xpB*e.xpMul);n.xp+=i;const s=[];for(;n.xp>=n.need;)n.xp-=n.need,n.lv++,n.sp+=n.lv%ii.spBonusEvery===0?ii.spBonusPoints:ii.spPerLevel,n.need=zp(n.lv),Hs(n),n.hp=n.stats.maxHp,s.push(n.lv);return{leveled:s}}function wT(n,t){const e=Math.max(0,Math.round(t*n.stats.goldB));return n.gold+=e,e}function ET(n,t){return!Py(t)||n.classId===t?!1:(TT(n),n.classId=t,Hs(n),n.specialCd=0,n.jumpsLeft=ec(n),!0)}function TT(n){if(!n.classId)return;const t=n.classId;for(const[e,i]of Object.entries(n.skills)){if(!mr(e))continue;const s=IT.get(e);s&&s===t&&(n.sp+=i??0,delete n.skills[e])}Hs(n)}function AT(n){let t=0;for(const e of Object.values(n.skills))t+=e??0;n.skills={},n.sp+=t,Hs(n)}function RT(n,t){if(!mr(t)||n.sp<=0)return!1;const e=w0.get(t);if(!e||e.classId!==null&&e.classId!==n.classId||e.requiresAnyClass&&n.classId===null)return!1;const i=n.skills[t]??0;if(i>=e.max)return!1;if(e.req){const[s,o]=e.req;if(!mr(s)||(n.skills[s]??0)<o)return!1}return n.skills[t]=i+1,n.sp--,Hs(n),!0}function CT(n,t){if(!(t in Ds))return!1;const e=t,i=Ds[e];return n.owned.has(e)||i.unlock.kind!=="shop"||n.gold<i.price?!1:(n.gold-=i.price,n.owned.add(e),S0(n,e),!0)}function S0(n,t){if(!(t in Ds))return!1;const e=t;return n.owned.has(e)?(n.weaponId=e,Hs(n),!0):!1}function PT(n,t){if(!(t in Ds))return!1;const e=t;return n.owned.has(e)?!1:(n.owned.add(e),!0)}function b0(n){const t=n.classId?Oo(n.classId):Za;return Yy(t,n.stats)}const w0=new Map(Sr.filter(n=>mr(n.id)).map(n=>[n.id,n])),IT=new Map([...w0].map(([n,t])=>[n,t.classId]));function yf(n){return n<-1?-1:n>1?1:n}function LT(n,t){n.name=t.name,n.lv=t.lv,n.xp=t.xp,n.need=zp(t.lv),n.gold=t.gold,n.sp=t.sp,n.classId=t.cls,n.skills={...t.skills},n.owned=new Set(t.owned),n.weaponId=n.owned.has(t.weapon)?t.weapon:"stick",Hs(n),n.hp=n.stats.maxHp,n.jumpsLeft=ec(n)}const DT=[{x:Qi.x,z:Qi.z,r:Qi.r},...ny.map(n=>({x:n.x,z:n.z,r:$l.min}))];function ws(n,t,e){const i=n-e.x,s=t-e.z;return i*i+s*s<=e.r*e.r}function kT(n,t){if(ws(n,t,{x:xe.x,z:xe.z,r:xe.r}))return!ws(n,t,{x:xe.x,z:xe.z,r:xe.island});if(ws(n,t,Se)){for(const e of DT)if(ws(n,t,e))return!1;return!0}return!1}function NT(n,t){return ws(n,t,or)||ws(n,t,{x:Ce.x,z:Ce.z,r:0})}function OT(n,t){return ws(n,t,Te)}function UT(n=[]){return{surfaceAt(t,e,i){const s=kT(t,e),o=NT(t,e),r=OT(t,e);return s?i?{groundY:ud.groundY,speedMul:ud.speedMul,water:!0,lava:o,ice:r}:{groundY:ld.groundY,speedMul:ld.speedMul,water:!0,lava:o,ice:r}:{groundY:0,speedMul:1,water:!1,lava:o,ice:r}},collide(t,e){let{x:i,z:s}=t;for(const o of n){const r=i-o.x,a=s-o.z,c=Math.hypot(r,a),l=o.r+e;if(c>=l||c===0)continue;const u=(l-c)/c;i+=r*u,s+=a*u}return{x:i,z:s}}}}const Sf=by,bf=Sy,Qc=.7;class FT{poison=new Map;curse=new Map;applyPoison(t,e,i){if(e<=0)return;const s=this.poison.get(t);if(s&&s.dps>=e){s.remaining=Sf,s.owner=i;return}this.poison.set(t,{dps:e,remaining:Sf,owner:i,tick:s?.tick??Qc})}applyCurse(t,e,i,s){if(!(e<=0&&i<=0)&&(this.setCurse(t,e,i),!(s===null||s.radius<=0)))for(const o of s.mobs)o.dead||o.id===t||Qe(s.from,o.pos)>s.radius||this.setCurse(o.id,e,i)}setCurse(t,e,i){const s=this.curse.get(t);if(s){s.damageTakenPct=Math.max(s.damageTakenPct,e),s.slowPct=Math.max(s.slowPct,i),s.remaining=bf;return}this.curse.set(t,{damageTakenPct:e,slowPct:i,remaining:bf})}damageTakenMul(t){return 1+(this.curse.get(t)?.damageTakenPct??0)}slowOf(t){return Math.min(1,this.curse.get(t)?.slowPct??0)}clear(t){this.poison.delete(t),this.curse.delete(t)}step(t){const e=[];for(const[i,s]of this.poison)s.remaining-=t,s.tick-=t,s.tick<=0&&(s.tick+=Qc,e.push({mobId:i,ownerId:s.owner,amount:s.dps*Qc})),s.remaining<=0&&this.poison.delete(i);for(const[i,s]of this.curse)s.remaining-=t,s.remaining<=0&&this.curse.delete(i);return e}get size(){return this.poison.size+this.curse.size}}const qi={searchRadius:26,speed:6.4,engageRange:2.4,attackCd:.8,damageOfOwner:.5,followRange:4,summonRadius:3};class zT{list=[];get all(){return this.list}countOf(t){let e=0;for(const i of this.list)i.ownerId===t&&e++;return e}summon(t,e,i,s){const o=Wp(t.mods);let r=0;for(let a=0;a<i&&!(this.countOf(t.id)>=o);a++){const c=i>1?a/i*Math.PI*2:0,l=i>1?qi.summonRadius:0;this.list.push({id:s(),ownerId:t.id,x:e.x+Math.cos(c)*l,z:e.z+Math.sin(c)*l,yaw:0,life:gr.life,cd:0}),r++}return r}removeOwner(t){for(let e=this.list.length-1;e>=0;e--)this.list[e]?.ownerId===t&&this.list.splice(e,1)}step(t,e,i){const s=[];for(let o=this.list.length-1;o>=0;o--){const r=this.list[o];if(!r)continue;const a=e.get(r.ownerId);if(!a){this.list.splice(o,1);continue}r.life-=t,r.cd-=t;let c=null,l=qi.searchRadius;for(const u of i){if(u.dead)continue;const h=Math.hypot(u.pos.x-r.x,u.pos.z-r.z);h<l&&(l=h,c=u)}if(c)if(r.yaw=Math.atan2(c.pos.x-r.x,c.pos.z-r.z),l>qi.engageRange){const u=qi.speed*t;r.x+=(c.pos.x-r.x)/l*u,r.z+=(c.pos.z-r.z)/l*u}else r.cd<=0&&(r.cd=qi.attackCd,c.invuln||s.push({ownerId:r.ownerId,mobId:c.id,amount:a.stats.dmg*qi.damageOfOwner*(1+a.mods.minionDamagePct)}));else{const u=Qe({x:a.x,z:a.z},{x:r.x,z:r.z});if(u>qi.followRange){const h=qi.speed*t;r.x+=(a.x-r.x)/u*h,r.z+=(a.z-r.z)/u*h,r.yaw=Math.atan2(a.x-r.x,a.z-r.z)}}r.life<=0&&(a.mods.minionInstantRevive?r.life=gr.life:this.list.splice(o,1))}return s}}function BT(n,t){return{hp:n.hp,maxHp:n.stats.maxHp,sprinting:n.running,inWater:t.inWater,nearbyEnemyCount:t.nearbyEnemyCount,targetDistance:t.targetDistance,comboStep:n.comboStep}}function HT(n,t,e,i){return t.water!==!0||!Wy(n,i)?1:1+(ks.WATER_MUL_BASE+_n(e,"cure")*ks.WATER_MUL_PER_CURE-1)*n.waterEffectMul}function GT(n,t,e){return Gy(n.mods,e)*HT(n.mods,t,n.skills,e)}function VT(n,t){let e=0;for(const i of t)i.dead||Qe({x:n.x,z:n.z},i.pos)<=Uy&&e++;return e}function WT(n,t){let e=0;for(const i of n){if(i.dead)continue;const s=i.mods.enemyAttackReductionAura;s!==null&&(Qe({x:i.x,z:i.z},t)>s.radius||s.pct>e&&(e=s.pct))}return Math.max(0,1-e)}function $T(n,t){if(!n.classId)return null;const e=$p(n.classId,n.skills),i=n.specialCd>0&&n.specialCharged;n.specialCd=b0(n),n.specialCharged=n.mods.specialCooldownReset&&!i;const s=n.mods.specialDamageMul,o={x:n.x,y:0,z:n.z};for(const r of e.effects)switch(r.kind){case"invulnerable":n.invul=Math.max(n.invul,r.duration);break;case"heal":n.hp=Math.min(n.stats.maxHp,n.hp+n.stats.maxHp*r.fractionOfMax+r.flat);break;case"speed-buff":n.buffT=Math.max(n.buffT,r.duration);break;case"aoe":t.aoeDamage(n,o,r.radius,n.stats.dmg*r.damageMul*s,r.color);break;case"arrow-fan":{const a=(r.count-1)/2;for(let c=-a;c<=a;c++){const l=n.yaw+c*r.spreadStep;t.spawnProjectile({x:n.x,y:1.2,z:n.z,dx:Math.sin(l),dz:Math.cos(l),speed:r.speed,life:r.life,damage:n.stats.dmg*r.damageMul*s,burn:!1,owner:n.id,pierceLeft:e2(n.skills),hit:new Set})}break}case"cone-pull":{t.showArea({x:n.x,z:n.z,radius:r.range,color:9429098,shape:"cone",yaw:n.yaw,halfAngle:Math.acos(r.facingDotMin)});const a={x:Math.sin(n.yaw),z:Math.cos(n.yaw)};for(const c of t.mobs){if(c.dead)continue;const l=c.pos.x-n.x,u=c.pos.z-n.z,h=Math.hypot(l,u);h>r.range||h===0||a.x*(l/h)+a.z*(u/h)<r.facingDotMin||t.damageMob(c,n.stats.dmg*r.damageMul*s,n)}break}case"summon":t.summon(n,{x:n.x,z:n.z},r.count);break;case"field":{const a=n.stats.dmg*r.damageMulPerTick*s;t.addField(n,{x:n.x,z:n.z,radius:r.radius,damagePerTick:a,tickInterval:r.tickInterval,duration:r.duration}),t.showArea({x:n.x,z:n.z,radius:r.radius,color:r.color,shape:"field",duration:r.duration});break}}return e.toast&&t.toast(e.toast),e}function XT(n,t){const e=n.players.get(t);if(!e)return null;const i={x:e.x,z:e.z},s=[];for(const a of n.players.values())a.id!==t&&!eu(i,{x:a.x,z:a.z})||s.push({id:a.id,name:a.name,classId:a.classId,x:en(a.x),y:en(a.y),z:en(a.z),yaw:tl(a.yaw),hp:Math.round(a.hp),maxHp:Math.round(a.stats.maxHp),level:a.lv,weaponId:a.weaponId,anim:YT(a)});const o=[];for(const a of n.mobs)a.dead||eu(i,{x:a.pos.x,z:a.pos.z})&&o.push({id:jT(a.id),type:a.type,x:en(a.pos.x),y:en(a.pos.y),z:en(a.pos.z),yaw:tl(a.yaw),hp:Math.round(a.hp),maxHp:Math.round(a.maxHp),invuln:a.boss?.invuln===!0,atk:en(a.atkT),atkD:en(a.atkD)});const r=qT(n,t).map(a=>({id:a.id,ownerId:a.ownerId,x:en(a.x),z:en(a.z),yaw:tl(a.yaw),life01:en(Math.max(0,Math.min(1,a.life/gr.life)))}));return{t:"snapshot",tick:n.tick,ackSeq:e.ackSeq,players:s,mobs:o,minions:r,self:{gold:e.gold,xp:e.xp,xpNeed:e.need,sp:e.sp,skills:{...e.skills},owned:[...e.owned],specialCooldown:en(e.specialCd),burnT:en(e.burnT),slowT:en(e.slowT),invulnT:en(e.invul)},gates:v2(n.gates)}}function qT(n,t){const e=n.players.get(t);return e?n.minionList.filter(i=>eu({x:e.x,z:e.z},{x:i.x,z:i.z})):[]}function eu(n,t){return Ip(Fa(n),Fa(t))?Qe({x:n.x,z:n.z},{x:t.x,z:t.z})<=Lp:!1}function YT(n){let t=0;return n.moving&&(t|=1),n.running&&(t|=2),n.grounded||(t|=4),n.attackCd>0&&(t|=8),n.specialCd>b0(n)-.4&&(t|=16),n.dead&&(t|=32),n.invul>0&&(t|=64),t}function jT(n){return Number(n.slice(1))||0}function en(n){return Math.round(n*100)/100}function tl(n){return Math.round(n*1e3)/1e3}function KT(n,t,e){for(let i=n.length-1;i>=0;i--){const s=n[i];if(!s)continue;const o=e.players.get(s.ownerId);if(!o){n.splice(i,1);continue}for(s.left-=t,s.nextTick-=t;s.nextTick<=0;){for(const r of e.mobs)r.dead||Math.hypot(r.pos.x-s.x,r.pos.z-s.z)>s.radius||e.damageMob(r,s.damagePerTick,o);s.nextTick+=s.tickInterval}s.left<=0&&n.splice(i,1)}}function ZT(n,t,e){for(let i=n.length-1;i>=0;i--){const s=n[i];if(s){if(s.x+=s.dx*s.speed*t,s.z+=s.dz*s.speed*t,s.life-=t,s.owner<0){for(const o of e.players.values())if(!o.dead&&!(Math.hypot(o.x-s.x,o.z-s.z)>1.6)){e.hitPlayer(o,s.damage,!1,s.burn),s.life=0;break}}else{const o=e.players.get(s.owner);for(const r of e.mobs){if(r.dead||s.hit.has(r.id))continue;const a=ke(r.type);if(!(Math.hypot(r.pos.x-s.x,r.pos.z-s.z)>1.5+a.scale)){if(r.boss?.invuln){e.onBlocked();continue}if(o&&(e.damageMob(r,s.damage,o),e.onArrowHit(r,o)),s.hit.add(r.id),s.pierceLeft<=0){s.life=0;break}s.pierceLeft--}}}s.life<=0&&n.splice(i,1)}}}function JT(n,t,e){for(let i=n.length-1;i>=0;i--){const s=n[i];if(!s)continue;s.life-=t;let o=!1;for(const r of e.values()){if(r.dead)continue;const a=Math.hypot(r.x-s.x,r.z-s.z);if(a<bi.MAGNET_RADIUS&&(s.x+=(r.x-s.x)*t*bi.MAGNET_SPEED,s.z+=(r.z-s.z)*t*bi.MAGNET_SPEED),a<bi.PICKUP_RADIUS){wT(r,s.amount),o=!0;break}}(o||s.life<=0)&&n.splice(i,1)}}const QT=.6,tA=6e4,eA=.05,nA=1.55;class Uu{code;seed;gates=p2;tick=0;emptySince=null;players=new Map;mobs=[];coins=[];projectiles=[];fields=[];debuffs=new FT;minions=new zT;rng;terrain;archetypes=new Map;mobZone=new Map;mobMaxHp=new Map;mobIndex=new Map;contribution=new Map;nextEntityId=1;pending=[];constructor(t,e){this.code=t,this.seed=e,this.rng=SM(e),this.terrain=UT(),this.buildArchetypes(),this.spawnAll()}get minionList(){return this.minions.all}buildArchetypes(){for(const t of Object.keys(Ka)){const e=ke(t);this.archetypes.set(t,{id:t,name:e.name,speed:e.speed,aggro:e.aggro??0,reach:e.reach,cd:e.cd,dmg:e.dmg,scale:e.scale,ranged:e.ranged===!0,ghost:e.ghost===!0,boss:e.boss===!0,world:e.world===!0,slow:e.slow===!0,burn:e.burn===!0,hop:e.hop===!0,fly:e.fly??0,regen:e.regen??0})}}spawnAll(){for(const t of Np)for(const e of Ry(t,this.rng))this.spawnMob(t,e.x,e.z)}spawnMob(t,e,i){const s=ke(t.type),o=`m${this.nextEntityId++}`,r=this.scaledHp(t.type),a={id:o,type:t.type,pos:{x:e,y:s.fly??0,z:i},yaw:0,hp:r,maxHp:r,dead:!1,dieT:0,hitT:99,cd:0,walk:0,roll:0,atkT:0,atkD:0,home:{x:e,y:0,z:i},zone:{x:t.x,z:t.z,r:t.r,type:t.type},wander:this.rng()*Math.PI*2,wt:this.rng()*3,bob:this.rng()*Math.PI*2,boss:s.boss===!0?{phase:0,cast:0,skCd:9,pulse:0,invuln:!1}:null};return this.mobs.push(a),this.mobZone.set(o,t),this.mobMaxHp.set(o,r),this.mobIndex.set(o,a),a}scaledHp(t){const e=ke(t);if(!e.boss)return e.hp;const i=Math.max(1,this.players.size);return Math.round(e.hp*(1+QT*(i-1)))}get full(){return this.players.size>=S2}join(t){const e=this.nextEntityId++,i=xT(e,t,qM);return this.players.set(e,i),this.emptySince=null,this.emit({k:"joined",playerId:e,name:i.name}),i}leave(t){this.players.get(t)&&(this.players.delete(t),this.minions.removeOwner(t),this.emit({k:"left",playerId:t}),this.players.size===0&&(this.emptySince=Date.now()))}input(t,e){const i=this.players.get(t);i&&(i.lastInputAt=Date.now(),vT(i,e,Cs,this.gates,this.terrain))}step(){this.tick++;const t=Cs;this.stepPlayers(t),this.stepMobs(t),this.stepMinions(t),this.stepProjectiles(t),this.stepFields(t),this.stepDebuffs(t),this.stepCoins(t),this.stepGateState();const e=this.pending;return this.pending=[],e}stepPlayers(t){for(const e of this.players.values()){const i=e.dead,s=MT(e,t,this.terrain);s.burned>0&&this.emit({k:"damage",targetId:e.id,amount:s.burned,crit:!1,isMob:!1}),!i&&e.dead&&this.emit({k:"playerDied",playerId:e.id}),!e.dead&&(s.landed>0&&this.landingAoe(e),e.wantsAttack&&e.attackCd<=0&&this.playerAttack(e),e.wantsSpecial&&e.classId&&(e.specialCd<=0||e.specialCharged)&&this.playerSpecial(e))}}playerAttack(t){t.comboStep=t.comboT>0?(t.comboStep+1)%Dn.LENGTH:0;const e=t.comboStep===Dn.FINISHER_INDEX;t.comboT=Dn.WINDOW,t.attackCd=(e?Dn.CD_FINISHER:Dn.CD_NORMAL)*t.stats.cdB,t.sinceAttack=0,this.autoAim(t);const i={x:Math.sin(t.yaw),z:Math.cos(t.yaw)},s=this.classOf(t),o=t.stats.dmg*s.dmgMul*(e?nA:1),r={x:t.x,z:t.z},a=VT(t,this.mobs),c=this.terrain.surfaceAt(t.x,t.z,t.classId==="fish").water;let l=null,u=1/0;for(const h of this.mobs){if(h.dead)continue;const f=ke(h.type),d=jy(t.stats.reach+t.mods.attackRangeFlat,f.scale),g=Qe(r,h.pos);if(g>d||g===0)continue;const x=Zy(i,{x:(h.pos.x-t.x)/g,z:(h.pos.z-t.z)/g}),m=x?1:t.mods.rearSplashPct;if(m<=0)continue;const p=BT(t,{targetDistance:g,nearbyEnemyCount:a,inWater:c});this.damageMob(h,o*GT(t,s,p)*m,t),x&&g<u&&(u=g,l=h.pos)}e&&t.mods.comboFinisherExplosion&&l&&this.comboExplosion(t,l)}autoAim(t){let e=null,i=1/0;for(const s of this.mobs){if(s.dead)continue;const o=ke(s.type),r=Ky(t.stats.reach+t.mods.attackRangeFlat,o.scale),a=Qe({x:t.x,z:t.z},s.pos);a>r||a<1e-6||a<i&&(i=a,e=s)}e&&(t.yaw=Math.atan2(e.pos.x-t.x,e.pos.z-t.z))}comboExplosion(t,e){if(t.classId){for(const i of $p(t.classId,t.skills).effects)if(i.kind==="aoe"){this.aoeDamage(t,e,i.radius,t.stats.dmg*i.damageMul);return}}}landingAoe(t){const e=t.mods.landingAoe;e!==null&&this.aoeDamage(t,{x:t.x,y:0,z:t.z},e.radius,e.damage)}static AOE_DEFAULT_COLOR=16765567;aoeDamage(t,e,i,s,o=Uu.AOE_DEFAULT_COLOR){this.emit({k:"aoe",x:e.x,z:e.z,radius:i,color:o,shape:"burst"});for(const r of this.mobs)r.dead||Qe(e,r.pos)>i||this.damageMob(r,s,t)}playerSpecial(t){$T(t,{mobs:this.mobs,aoeDamage:(e,i,s,o,r)=>this.aoeDamage(e,i,s,o,r),damageMob:(e,i,s)=>this.damageMob(e,i,s),spawnProjectile:e=>this.projectiles.push({id:this.nextEntityId++,...e}),summon:(e,i,s)=>this.minions.summon(e,i,s,()=>this.nextEntityId++),addField:(e,i)=>{this.fields.push({id:this.nextEntityId++,x:i.x,z:i.z,radius:i.radius,damagePerTick:i.damagePerTick,tickInterval:i.tickInterval,ownerId:e.id,left:i.duration,nextTick:0})},showArea:e=>this.emit({k:"aoe",...e}),toast:e=>this.emit({k:"toast",text:e})})}stepFields(t){KT(this.fields,t,{players:this.players,mobs:this.mobs,damageMob:(e,i,s)=>this.damageMob(e,i,s)})}stepMobs(t){for(const e of this.mobs){const i=ke(e.type),s=this.archetypes.get(e.type);if(!s)continue;if(e.dead){const u={...e,dieT:e.dieT+t};if(Object.assign(e,u),e.dieT>=yy(i)){const h=this.mobZone.get(e.id);if(h){const f=Up(h,this.rng),d=this.scaledHp(e.type);Object.assign(e,{pos:{x:f.x,y:i.fly??0,z:f.z},home:{x:f.x,y:0,z:f.z},hp:d,maxHp:d,dead:!1,dieT:0,roll:0,boss:i.boss?{phase:0,cast:0,skCd:9,pulse:0,invuln:!1}:null}),this.mobMaxHp.set(e.id,d),this.contribution.delete(e.id),this.debuffs.clear(e.id)}}continue}const o=this.nearestPlayer(e);if(!o)continue;const r=[...this.players.values()].find(u=>u.classId==="boss"&&!u.dead),a=e.pos.x,c=e.pos.z,l=d2(e,s,{target:{pos:{x:o.x,y:o.y,z:o.z},dead:o.dead},fear:r!==void 0&&!s.boss,dreadRank:r?.skills.dread??0,castles:Cp.map(u=>({x:u.x,z:u.z,r:u.r})),rng:this.rng,elapsed:this.tick*Cs},t);Object.assign(e,l.mob),this.applyCurseSlow(e,a,c);for(const u of l.events)this.handleMobEvent(e,u,o)}}applyCurseSlow(t,e,i){const s=this.debuffs.slowOf(t.id);s<=0||Object.assign(t,{pos:{x:e+(t.pos.x-e)*(1-s),y:t.pos.y,z:i+(t.pos.z-i)*(1-s)}})}handleMobEvent(t,e,i){const s=WT(this.players.values(),t.pos);switch(e.kind){case"melee":{this.hitPlayer(i,e.damage*s,e.slow,e.burn);break}case"projectile":{this.projectiles.push({id:this.nextEntityId++,x:e.origin.x,y:e.origin.y,z:e.origin.z,dx:e.dir.x,dz:e.dir.z,speed:e.speed,life:e.life,damage:e.damage*s,burn:e.burn,owner:-1,pierceLeft:0,hit:new Set});break}case"shockwave":{this.emit({k:"shockwave",x:e.x,z:e.z,radius:e.maxRadius,bossId:t.type});for(const o of this.players.values()){if(o.dead)continue;Qe({x:o.x,z:o.z},{x:e.x,z:e.z})<=e.maxRadius&&this.hitPlayer(o,e.damage*s,!1,!1)}break}case"boss-phase-start":{const r=za(t.type).name??`${ke(t.type).name} — 힘을 모은다`;this.emit({k:"toast",text:r});break}}}stepMinions(t){if(this.minions.all.length===0)return;const e=this.mobs.map(i=>({id:i.id,pos:i.pos,dead:i.dead,invuln:i.boss?.invuln===!0}));for(const i of this.minions.step(t,this.players,e)){const s=this.players.get(i.ownerId),o=this.mobIndex.get(i.mobId);!s||!o||o.dead||this.damageMob(o,i.amount,s,"indirect")}}stepDebuffs(t){for(const e of this.debuffs.step(t)){const i=this.mobIndex.get(e.mobId),s=this.players.get(e.ownerId);!i||i.dead||!s||this.damageMob(i,e.amount,s,"indirect")}}stepProjectiles(t){ZT(this.projectiles,t,{players:this.players,mobs:this.mobs,hitPlayer:(e,i,s,o)=>this.hitPlayer(e,i,s,o),damageMob:(e,i,s)=>this.damageMob(e,i,s),onArrowHit:(e,i)=>{i.mods.poisonDps>0&&this.debuffs.applyPoison(e.id,i.mods.poisonDps,i.id)},onBlocked:()=>this.emit({k:"damage",targetId:0,amount:0,crit:!1,isMob:!0})})}stepCoins(t){JT(this.coins,t,this.players)}stepGateState(){const t=this.gates;this.gates=_2(this.gates,this.tick),!t.heavenOpen&&this.gates.heavenOpen&&this.emit({k:"gateOpened"}),t.cutscene.kind==="none"&&this.gates.cutscene.kind==="playing"&&this.emit({k:"cutsceneStart"})}classOf(t){return t.classId?Oo(t.classId):Za}damageMob(t,e,i,s="direct"){if(t.boss?.invuln){this.emit({k:"damage",targetId:0,amount:0,crit:!1,isMob:!0});return}const o=e*this.debuffs.damageTakenMul(t.id),r=s==="direct"?t2(o,i.stats,this.rng):{damage:Math.max(1,Math.round(o)),crit:!1},a=Math.min(t.hp,r.damage);if(Object.assign(t,{hp:t.hp-r.damage,hitT:0}),this.emit({k:"damage",targetId:0,amount:r.damage,crit:r.crit,isMob:!0}),s==="direct"&&i.stats.vamp>0&&(i.hp=Math.min(i.stats.maxHp,i.hp+a*i.stats.vamp)),s==="direct"&&this.applyOnHitDebuffs(t,i),ke(t.type).boss){let l=this.contribution.get(t.id);l||(l=new Map,this.contribution.set(t.id,l)),l.set(i.id,(l.get(i.id)??0)+a)}t.hp<=0&&this.killMob(t,i)}applyOnHitDebuffs(t,e){e.mods.enemyDefenseReductionPct<=0||this.debuffs.applyCurse(t.id,e.mods.enemyDefenseReductionPct,e.mods.enemySlowPct,e.mods.curseSpreadRadius>0?{radius:e.mods.curseSpreadRadius,from:t.pos,mobs:this.mobs}:null)}killMob(t,e){Object.assign(t,{hp:0,dead:!0,dieT:0}),this.debuffs.clear(t.id);const i=ke(t.type),s=i2(i.gold,this.rng);let o=s.amount;e.mods.goldDoubleChanceOnKill>0&&this.rng()<e.mods.goldDoubleChanceOnKill&&(o*=2),this.coins.push({id:this.nextEntityId++,x:t.pos.x+s.offsetX,z:t.pos.z+s.offsetZ,amount:o,life:bi.LIFETIME}),this.emit({k:"mobDied",mobId:0,x:t.pos.x,z:t.pos.z,gold:o}),e.mods.healOnKillFlat>0&&!e.dead&&(e.hp=Math.min(e.stats.maxHp,e.hp+e.mods.healOnKillFlat)),this.rollKillSummons(t.pos,e);for(const f of this.players.values()){if(f.dead||Qe({x:f.x,z:f.z},t.pos)>Lp)continue;const d=bT(f,i.xp);for(const g of d.leveled)this.emit({k:"levelUp",playerId:f.id,level:g})}if(!i.boss)return;const r=i.unlock,a=this.contribution.get(t.id),c=(this.mobMaxHp.get(t.id)??i.hp)*eA,l=[];for(const f of this.players.values())(a?.get(f.id)??0)<c&&f.id!==e.id||(l.push(f.id),r&&PT(f,r));r&&this.emit({k:"loot",weaponId:r,to:l}),this.emit({k:"bossKilled",bossId:t.type,by:l});const u=t.type,h=this.gates;this.gates=x2(this.gates,u,this.tick),this.gates!==h&&(this.gates.lordsKilled.length!==h.lordsKilled.length&&this.emit({k:"runeLit",lordId:t.type,count:this.gates.lordsKilled.length}),!h.innerOpen&&this.gates.innerOpen&&this.emit({k:"sealBroken"}))}rollKillSummons(t,e){const i={x:t.x,z:t.z};s2(this.classOf(e),e.skills,this.rng)&&this.minions.summon(e,i,1,()=>this.nextEntityId++),e.mods.summonOnKillChancePct>0&&this.rng()<e.mods.summonOnKillChancePct&&this.minions.summon(e,i,1,()=>this.nextEntityId++)}hitPlayer(t,e,i,s){const o=t.dead,r=yT(t,e,this.rng);r.applied>0&&(this.emit({k:"damage",targetId:t.id,amount:r.applied,crit:!1,isMob:!1}),i&&(t.slowT=Math.max(t.slowT,2.5)),s&&(t.burnT=Math.max(t.burnT,3))),!o&&r.died&&this.emit({k:"playerDied",playerId:t.id})}nearestPlayer(t){let e=null,i=1/0;for(const s of this.players.values()){if(s.dead||!Ip(Fa({x:s.x,z:s.z}),Fa({x:t.pos.x,z:t.pos.z})))continue;const o=Qe({x:s.x,z:s.z},t.pos);o<i&&(i=o,e=s)}return e}respawn(t){const e=this.players.get(t);e?.dead&&ST(e)}emit(t){this.pending.push(t)}snapshotFor(t){return XT(this,t)}restoreGates(t){this.gates=M2(t)}}const wf="ABCDEFGHJKMNPQRSTUVWXYZ23456789",iA=4;class sA{rooms=new Map;seedCounter=1;acquire(t){if(t){const e=t.toUpperCase(),i=this.rooms.get(e);if(i&&!i.full)return{room:i,created:!1};if(!i)return{room:this.create(e),created:!0}}return{room:this.create(this.freshCode()),created:!0}}get(t){return this.rooms.get(t.toUpperCase())}create(t){const e=new Uu(t,this.nextSeed());return this.rooms.set(t,e),e}nextSeed(){return this.seedCounter++*2654435761>>>0}freshCode(){for(let t=0;t<64;t++){let e="";for(let i=0;i<iA;i++){const s=(this.seedCounter*31+t*7+i*13)%wf.length;e+=wf[s]??"A"}if(!this.rooms.has(e))return e;this.seedCounter++}return`R${Date.now().toString(36).slice(-3).toUpperCase()}`}stepAll(){const t=[];for(const e of this.rooms.values())t.push({room:e,events:e.step()});return t}sweep(t=Date.now()){const e=[];for(const[i,s]of this.rooms)if(!(s.players.size>0)){if(s.emptySince===null){s.emptySince=t;continue}t-s.emptySince>=tA&&(this.rooms.delete(i),e.push(i))}return e}get size(){return this.rooms.size}list(){return[...this.rooms.values()]}get stats(){let t=0;for(const e of this.rooms.values())t+=e.players.size;return{rooms:this.rooms.size,players:t}}}const Ef=2;class oA{constructor(t,e,i,s){this.rooms=t,this.send=e,this.broadcast=i,this.opts=s}room=null;playerId=-1;joined=!1;chatBudget=Ef;refill(){this.chatBudget=Ef}leave(){const t=this.room;!t||this.playerId<0||(t.leave(this.playerId),this.broadcast(t,{k:"left",playerId:this.playerId},this),this.room=null,this.playerId=-1,this.joined=!1)}handle(t){if(t.t==="join")return this.handleJoin(t);if(t.t==="ping")return this.send({t:"pong",clientTime:t.clientTime,serverTime:Date.now()}),!0;const e=this.room;if(!e||this.playerId<0)return!0;const i=e.players.get(this.playerId);if(!i)return!0;switch(t.t){case"input":e.input(this.playerId,t.frame);break;case"pickClass":ET(i,t.classId)&&this.broadcast(e,{k:"toast",text:`${i.name} → ${t.classId}`},this);break;case"learnSkill":RT(i,t.nodeId);break;case"respec":AT(i);break;case"buyWeapon":CT(i,t.weaponId);break;case"equipWeapon":S0(i,t.weaponId);break;case"respawn":e.respawn(this.playerId);break;case"chat":{if(this.chatBudget<=0)break;this.chatBudget--;const s=String(t.text).slice(0,120).trim();if(!s)break;this.broadcast(e,{k:"chat",playerId:i.id,name:i.name,text:s},this);break}case"debug":this.opts.allowDebug&&rA(e,i.id,t.action);break}return!0}handleJoin(t){if(this.joined)return!0;if(t.protocol!==jl)return this.send({t:"reject",reason:"클라이언트 버전이 다릅니다. 새로고침 해주세요."}),!1;const{room:e,created:i}=this.rooms.acquire(t.roomCode),s=e.join(t.name);if(i&&t.save!==void 0){const o=Kp(t.save);o&&(LT(s,o),e.restoreGates(o.gates))}return this.room=e,this.playerId=s.id,this.joined=!0,this.send({t:"hello",protocol:jl,playerId:s.id,roomCode:e.code,tickRate:Math.round(1/Cs),worldSeed:e.seed,sharedHash:b2}),this.broadcast(e,{k:"joined",playerId:s.id,name:s.name},this),!0}pushFrame(t){const e=this.room;if(!e||this.playerId<0)return;for(const s of t)this.send({t:"event",ev:s});const i=e.snapshotFor(this.playerId);i&&this.send(i)}}function rA(n,t,e){const i=n.players.get(t);if(i)switch(e.a){case"teleport":i.x=e.x,i.z=e.z;break;case"setLevel":i.lv=Math.max(1,Math.min(200,Math.round(e.level)));break;case"giveGold":i.gold+=Math.max(0,Math.round(e.amount));break;case"killBoss":for(const s of n.mobs)s.type===e.bossId&&!s.dead&&Object.assign(s,{hp:1});break}}class Tf{onMessage=null;onStateChange=null;rooms=new sA;session;timer=null;closed=!1;constructor(t=!1){this.session=new oA(this.rooms,e=>{this.closed||queueMicrotask(()=>this.onMessage?.(e))},()=>{},{allowDebug:t})}connect(){this.closed=!1,this.onStateChange?.("connecting"),queueMicrotask(()=>{this.closed||(this.onStateChange?.("open"),this.start())})}send(t){this.closed||this.session.handle(t)}close(){this.closed=!0,this.timer!==null&&clearInterval(this.timer),this.timer=null,this.session.leave(),this.onStateChange?.("closed")}start(){this.timer===null&&(this.timer=setInterval(()=>this.tick(),Cs*1e3))}tick(){if(this.closed)return;const t=this.rooms.stepAll();this.session.refill();const e=this.session.room,i=e?t.find(s=>s.room===e)?.events??[]:[];this.session.pushFrame(i),this.rooms.sweep()}}const aA=.1,Af=120;class cA{pending=[];lastCorrection=0;corrections=0;state={x:0,z:0};reset(t,e){this.state.x=t,this.state.z=e,this.pending.length=0}apply(t,e,i){this.pending.push({frame:t,speed:e}),this.pending.length>Af&&this.pending.splice(0,this.pending.length-Af),Rf(this.state,t,e,i)}reconcile(t,e,i,s){for(;this.pending.length>0;){const r=this.pending[0];if(!r||r.frame.seq>i)break;this.pending.shift()}const o=Math.hypot(this.state.x-t,this.state.z-e);if(!(o<=aA)){this.lastCorrection=o,this.corrections++,this.state.x=t,this.state.z=e;for(const r of this.pending)Rf(this.state,r.frame,r.speed,s)}}get pendingCount(){return this.pending.length}}function Rf(n,t,e,i){const s=Cf(t.moveX),o=Cf(t.moveZ),r=Math.hypot(s,o);if(r<=Sn.inputDeadzone)return;const a=Math.min(t.dt,.1),c=n.x+s/r*e*a,l=n.z+o/r*e*a,u=Pp({x:c,z:l},{isPlayer:!0,gates:i});n.x=u.x,n.z=u.z}function Cf(n){return n<-1?-1:n>1?1:n}const lA=100,uA=12;class hA{buf=[];push(t,e){this.buf.push({t:e,value:t}),this.buf.length>uA&&this.buf.shift()}sample(t){const e=t-lA,i=this.buf;if(i.length===0)return null;const s=i[i.length-1];if(!s)return null;if(i.length===1||e>=s.t)return s.value;for(let o=i.length-1;o>0;o--){const r=i[o],a=i[o-1];if(!(!a||!r)&&a.t<=e&&e<=r.t){const c=r.t-a.t,l=c<=0?1:(e-a.t)/c;return dA(a.value,r.value,l)}}return i[0]?.value??null}clear(){this.buf.length=0}}function dA(n,t,e){return{...t,x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e,z:n.z+(t.z-n.z)*e,yaw:n.yaw+fA(n.yaw,t.yaw)*e}}function fA(n,t){let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}class Pf{map=new Map;push(t,e,i){let s=this.map.get(t);s||(s=new hA,this.map.set(t,s)),s.push(e,i)}sample(t,e){return this.map.get(t)?.sample(e)??null}retain(t){for(const e of this.map.keys())t.has(e)||this.map.delete(e)}has(t){return this.map.has(t)}clear(){this.map.clear()}}const Fu="blockquest.character",E0="blockquest.name",T0="blockquest.room";function pA(n){try{return localStorage.setItem(Fu,JSON.stringify(n)),{ok:!0}}catch(t){return{ok:!1,reason:t instanceof Error?t.message:"저장할 수 없습니다"}}}function mA(){try{const n=localStorage.getItem(Fu);return n?Kp(JSON.parse(n)):null}catch{return null}}function gA(){try{localStorage.removeItem(Fu)}catch{}}function xA(n){try{localStorage.setItem(E0,n)}catch{}}function _A(){try{return localStorage.getItem(E0)??""}catch{return""}}function vA(n){try{sessionStorage.setItem(T0,n)}catch{}}function A0(){try{return sessionStorage.getItem(T0)}catch{return null}}function R0(){const t=new URLSearchParams(location.search).get("room");return t&&/^[A-Za-z0-9]{2,8}$/.test(t)?t.toUpperCase():null}const If="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function MA(n=4){const t=new Uint32Array(n);crypto.getRandomValues(t);let e="";for(let i=0;i<n;i++)e+=If[(t[i]??0)%If.length];return e}function yA(n){const t=new URL(location.href);return t.searchParams.set("room",n),t.hash="",t.toString()}class SA{kit;fx;hud;panels;cutscene;audio=new YE;input;net;bossBar;minimap;refs;predictor=new cA;pad;detach=[];world=null;binder=null;cam={yaw:0,pitch:.34,distance:tu.cameraDistance};camPos=new L;camTarget=new L;myAvatar=null;myClassId=null;myWeapon=null;myWeaponId="";walkPhase=0;swingT=0;swingDur=0;swingStep=0;comboT=0;attackCd=0;attackAnim=0;stance=0;hurtAnim=0;deadT=0;remoteRigs=new Map;mobObjects=new Map;minionObjects=new Map;castWarnAt=new Map;plates=new Map;projectVec=new L;trailA=new L;trailB=new L;playerInterp=new Pf;mobInterp=new Pf;lastSnapshot=null;gates={slain:[],hv:!1,ig:!1,cc:!1};clampGates={heavenOpen:!1,innerOpen:!1};paused=!1;running=!1;lastFrame=0;playTime=0;bossVisible=null;builtSeed=-1;minimapTick=0;onSnapshot=null;onEvent=null;onReady=null;constructor(t,e){this.refs=t,this.kit=L2(t.canvas),this.fx=new eb(this.kit,t.overlay),this.hud=new HE,this.panels=new WE(t.panels),this.cutscene=new XE(t.cutscene),this.bossBar=new DE(t.bossbar),this.minimap=new BE(t.minimap),this.input=new jE({...tu}),this.pad=new cT(this.input),this.panels.onChange=o=>{this.paused=o};const i={onHello:(o,r,a)=>this.onHello(r,a),onSnapshot:o=>this.applySnapshot(o),onEvent:o=>this.handleEvent(o),onState:o=>this.showNetState(o)},s=e.serverUrl!=="";this.transport=s?new pT(e.serverUrl):new Tf,this.mode=s?"online":"solo",this.net=new Mf(this.transport,i),this.handlers=i,this.joinName=e.name,this.joinRoom=e.roomCode??R0()??void 0,this.allowSolo=e.soloFallback!==!1,e.saveProvider&&(this.net.saveProvider=e.saveProvider),this.attachInput(),this.connectNow()}handlers;transport;joinName;joinRoom;mode;soloFallbackTimer=null;allowSolo=!0;connectNow(){this.transport.connect(),this.net.join(this.joinName,this.joinRoom),this.mode==="online"&&(this.soloFallbackTimer=setTimeout(()=>{this.world===null&&this.fallbackToSolo()},wA))}fallbackToSolo(){if(this.mode!=="solo"){if(!this.allowSolo){this.hud.toast("친구 방에 연결할 수 없습니다 — 계속 시도합니다");return}this.mode="solo",this.net.close(),this.transport=new Tf,this.net=new Mf(this.transport,this.handlers),this.connectNow(),this.hud.toast("혼자 하기로 시작합니다")}}showNetState(t){if(this.mode==="solo"){this.hud.setNet("혼자 하기");return}this.hud.setNet(t==="open"?"접속됨":t==="connecting"?"접속 중…":"연결 끊김",this.net.roomCode||void 0)}onHello(t,e){if(this.soloFallbackTimer!==null&&(clearTimeout(this.soloFallbackTimer),this.soloFallbackTimer=null),vA(t),this.world&&this.builtSeed===e){this.hud.toast("다시 연결됐다");return}this.world&&(this.kit.scene.remove(this.world.root),this.resetEntities()),this.world=kS(this.kit,e),this.builtSeed=e,this.binder=new NS(this.world),this.myAvatar||this.setMyClass(null),this.onReady?.(),this.running||this.start()}setMyClass(t){if(this.myAvatar&&this.myClassId===t)return;const e=this.myAvatar,i=e?.root.position.clone(),s=e?.root.rotation.y??0;e?.dispose(this.kit.scene);const o=qd(t);this.myAvatar=o,this.myClassId=t,this.kit.scene.add(o.root),i&&o.root.position.copy(i),o.root.rotation.y=s,this.myWeaponId=""}resetEntities(){for(const[,t]of this.remoteRigs)t.avatar.dispose(this.kit.scene);this.remoteRigs.clear();for(const[,t]of this.mobObjects)this.kit.scene.remove(t),Kc(t);this.mobObjects.clear();for(const[,t]of this.plates)t.root.remove();this.plates.clear(),this.playerInterp.clear(),this.mobInterp.clear()}attachInput(){this.detach.push(QE(this.input)),this.detach.push(sT(this.input,{joyZone:this.refs.joyZone,joy:this.refs.joy,knob:this.refs.knob,surface:this.refs.canvas},this.cam)),this.detach.push(aT(this.input,{attack:this.refs.btnAttack,jump:this.refs.btnJump,special:this.refs.btnSpecial})),this.detach.push(this.pad.attach());const t="ontouchstart"in window||navigator.maxTouchPoints>0;t&&this.refs.touch.classList.remove("hidden"),this.input.onDeviceChange=s=>{this.refs.touch.classList.toggle("hidden",s==="gamepad"),this.hud.setHelp(Ff(s))},this.hud.setHelp(Ff(t?"touch":"keyboard"));const e=()=>{D2(this.kit,window.innerWidth,window.innerHeight,window.devicePixelRatio)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e),e(),this.detach.push(()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)});const i=()=>this.audio.unlock();window.addEventListener("pointerdown",i,{once:!0}),window.addEventListener("keydown",i,{once:!0})}start(){this.running||(this.running=!0,this.lastFrame=performance.now(),requestAnimationFrame(this.frame))}stop(){this.running=!1,this.soloFallbackTimer!==null&&clearTimeout(this.soloFallbackTimer);for(const t of this.detach)t();this.detach.length=0,this.net.close(),this.fx.dispose()}frame=t=>{if(!this.running)return;requestAnimationFrame(this.frame);const e=Math.min(.05,(t-this.lastFrame)/1e3);this.lastFrame=t,this.cutscene.update(e);const i=this.fx.update(e),s=this.input.consume();this.pad.poll(),this.handleUiCommands(s),!this.paused&&!this.cutscene.playing&&(this.playTime+=e,this.tickLocal(s,i)),this.binder?.update(e),this.updateRemote(t),this.updateCamera(i),P2(this.kit,this.predictor.state.x,this.predictor.state.z),(this.minimapTick=(this.minimapTick+1)%8)===0&&this.drawMinimap(),this.kit.renderer.render(this.kit.scene,this.kit.camera)};handleUiCommands(t){for(const e of t.ui)switch(e){case"menu":this.panels.closeTop()||this.openPause?.();break;case"tree":this.openTree?.();break;case"shop":this.openShop?.();break;case"map":"toggleFull"in this.minimap&&this.minimap.toggleFull();break;case"autoAttack":this.input.settings.autoAttack=!this.input.settings.autoAttack,this.hud.toast(`자동 공격 ${this.input.settings.autoAttack?"켬":"끔"}`);break;case"cameraReset":this.cam.pitch=.34;break}}openPause=null;openTree=null;openShop=null;tickLocal(t,e){oT(this.cam,t.look.dx,t.look.dy),t.zoom!==0&&rT(this.cam,t.zoom);const i=this.me;if(!i)return;const s=lT(t.move,this.cam.yaw),o=s.x,r=s.z;let a=0;(t.attack||this.shouldAutoAttack())&&(a|=vi.ATTACK),t.jump&&(a|=vi.JUMP),t.special&&(a|=vi.SPECIAL),t.run&&(a|=vi.RUN);const c=Math.hypot(o,r)>Sn.inputDeadzone,l=c?uT(s):this.myAvatar?.root.rotation.y??0,u={dt:Cs,moveX:o,moveZ:r,yaw:l,actions:a},h=this.net.sendInput(u);this.predictor.apply({...u,seq:h},this.currentSpeed(t),this.clampGates),this.walkPhase+=e*11*(c?1:0)*(t.run?1.65:1),this.attackCd>0&&(this.attackCd-=e),this.comboT>0&&(this.comboT-=e),this.swingT>0&&(this.swingT-=e);const f=this.swingT>0||this.enemyNear(EA)?1:0;this.stance+=(f-this.stance)*Math.min(1,e*TA),this.attackAnim>0&&(this.attackAnim-=e),this.hurtAnim>0&&(this.hurtAnim-=e),a&vi.ATTACK&&this.attackCd<=0&&!(i.anim&Zp.DEAD)&&this.startSwing(),this.deadT=i.hp<=0?this.deadT+e:0,this.setMyClass(i.classId!==null&&Ma(i.classId)?i.classId:null);const d=this.myAvatar;d&&(d.root.position.set(this.predictor.state.x,i.y,this.predictor.state.z),d.root.rotation.y=l,d.update(this.playTime),d.pose({walkPhase:this.walkPhase,moving:c,speed01:c?1:0,airborne:(i.anim&4)!==0,attackT:this.swingT>0?1-this.swingT/this.swingDur:0,comboStep:this.swingStep,hurtT:this.hurtAnim,dead:i.hp<=0,run01:t.run?1:0,stance:this.stance,time:this.playTime,vy:0,deadT:this.deadT}),this.syncWeapon(i.weaponId,i.classId),this.updateBladeTrail())}startSwing(){const t=this.comboT>0&&this.swingStep===Dn.FINISHER_INDEX;this.swingStep=this.comboT>0?(this.swingStep+1)%Dn.LENGTH:0,this.comboT=Dn.WINDOW,this.swingDur=t?Dn.SWING_FINISHER:Dn.SWING_NORMAL,this.swingT=this.swingDur,this.attackCd=t?Dn.CD_FINISHER:Dn.CD_NORMAL,co.swing(this.audio)}updateBladeTrail(){const t=this.myAvatar;if(!t||this.swingT<=0||this.swingDur<=0)return;const e=1-this.swingT/this.swingDur;if(!vb(e))return;const i=t.creature;if(i){if(i.type!=="kiwi")return;const o=qb(i,this.swingStep);o.updateWorldMatrix(!0,!1),this.trailA.copy(Xd.from).applyMatrix4(o.matrixWorld),this.trailB.copy(Xd.to).applyMatrix4(o.matrixWorld),this.fx.trail(this.trailA,this.trailB,Uf);return}const s=t.weaponSlot;s&&(s.updateWorldMatrix(!0,!1),this.trailA.setFromMatrixPosition(s.matrixWorld),this.trailB.set(0,OA,0).applyMatrix4(s.matrixWorld),this.fx.trail(this.trailA,this.trailB,Uf))}enemyNear(t){const e=this.lastSnapshot,i=this.me;if(!e||!i)return!1;for(const s of e.mobs)if(Qe({x:i.x,z:i.z},{x:s.x,z:s.z})<=t)return!0;return!1}currentSpeed(t){const e=this.lastSnapshot?.self,i=this.me;if(!i)return Sn.baseSpeed;const s=i.classId&&Ma(i.classId)?Oo(i.classId):null;let o=Sn.baseSpeed*(s?.spdMul??1);return t.run&&(o*=Sn.sprintMul),(e?.slowT??0)>0&&(o*=.45),o}shouldAutoAttack(){if(!this.input.settings.autoAttack)return!1;const t=this.me;if(!t||!this.lastSnapshot)return!1;const e=t.classId&&Ma(t.classId)?Pi[t.classId]:null;for(const i of this.lastSnapshot.mobs){const s=lo(i.type)?ke(i.type):null;if(!s)continue;const o=Jy(e?.ranged===!0,0,s.scale);if(Qe({x:t.x,z:t.z},{x:i.x,z:i.z})<=o)return!0}return!1}syncWeapon(t,e){const i=this.myAvatar;if(!i||t===this.myWeaponId)return;this.myWeaponId=t,this.myWeapon&&(this.myWeapon.parent?.remove(this.myWeapon),this.myWeapon=null);const s=i.weaponSlot;if(!s||!(e?Pi[e]?.showWeapon!==!1:!0))return;const r=gw(t,e?{classId:e}:{});s.add(r),this.myWeapon=r}applySnapshot(t){this.lastSnapshot=t,this.gates=t.gates,this.clampGates={heavenOpen:t.gates.hv,innerOpen:t.gates.ig},this.binder?.apply(t.gates);const e=t.players.find(r=>r.id===this.net.playerId);e&&(this.predictor.reconcile(e.x,e.z,t.ackSeq,this.clampGates),this.hud.update(GE(t.self,e)),this.hud.setObjective(VE({lords:t.gates.slain.filter(r=>r!=="gabriel"&&r!=="creator").length,heavenOpen:t.gates.hv,gabrielKilled:t.gates.slain.includes("gabriel"),creatorKilled:t.gates.cc,level:e.level,hasClass:e.classId!==null})),k2(this.kit,e.classId==="boss"?"boss":"day"));const i=performance.now(),s=new Set;for(const r of t.players)r.id!==this.net.playerId&&(s.add(r.id),this.playerInterp.push(r.id,{x:r.x,y:r.y,z:r.z,yaw:r.yaw,snap:r},i),this.ensureRemoteRig(r));this.playerInterp.retain(s);for(const[r,a]of this.remoteRigs)s.has(r)||(a.avatar.dispose(this.kit.scene),this.remoteRigs.delete(r));const o=new Set;for(const r of t.mobs)o.add(r.id),this.mobInterp.push(r.id,{x:r.x,y:r.y,z:r.z,yaw:r.yaw,snap:r},i);this.mobInterp.retain(o);for(const[r,a]of this.mobObjects)o.has(r)||(this.kit.scene.remove(a),Kc(a),this.mobObjects.delete(r));this.updateBossBar(t),this.onSnapshot?.(t)}ensureRemoteRig(t){const e=t.classId!==null&&Ma(t.classId)?t.classId:null,i=this.remoteRigs.get(t.id);if(i&&i.avatar.classId===e)return;const s=i?.slot??this.remoteRigs.size+1,o=i?.avatar.root.position.clone();i?.avatar.dispose(this.kit.scene);const r=qd(e,{coopSlot:s});this.kit.scene.add(r.root),o&&r.root.position.copy(o),this.remoteRigs.set(t.id,{avatar:r,slot:s})}updateRemote(t){this.updateMobs(t);for(const[e,i]of this.remoteRigs){const s=this.playerInterp.sample(e,t);if(!s)continue;i.avatar.root.position.set(s.x,s.y,s.z),i.avatar.root.rotation.y=s.yaw;const o=(s.snap.anim&1)!==0;i.avatar.pose({walkPhase:t/90,moving:o,speed01:o?1:0,airborne:(s.snap.anim&4)!==0,attackT:s.snap.anim&8?.5:0,comboStep:0,hurtT:0,dead:(s.snap.anim&32)!==0})}}updateMobs(t){const e=this.lastSnapshot;if(e){for(const i of e.mobs){let s=this.mobObjects.get(i.id);s||(s=ef(i.type,{external:of}),this.kit.scene.add(s),this.mobObjects.set(i.id,s));const o=this.mobInterp.sample(i.id,t);o&&(s.position.set(o.x,o.y,o.z),s.rotation.y=o.yaw,nf(s,{walkPhase:t/120,moving:!0,attackT:i.atk,attackD:i.atkD,time:t/1e3}),i.invuln&&this.warnBossCast(i,t))}this.updateMinions(e,t),this.updateNameplates(e)}}warnBossCast(t,e){const i=this.castWarnAt.get(t.id)??0;if(e-i<LA)return;this.castWarnAt.set(t.id,e);const s=za(t.type),o=this.mobInterp.sample(t.id,e),r=new L(o?.x??t.x,Lf,o?.z??t.z),a=e%kf/kf;this.fx.ring(r,DA*(1-a*.55),s.ring)}updateMinions(t,e){const i=new Set;for(const s of t.minions){i.add(s.id);let o=this.minionObjects.get(s.id);o||(o=ef("skel",{external:of}),o.scale.setScalar(kA),this.kit.scene.add(o),this.minionObjects.set(s.id,o),o.position.set(s.x,0,s.z));const r=Math.min(1,NA*(1/60));o.position.x+=(s.x-o.position.x)*r,o.position.z+=(s.z-o.position.z)*r,o.rotation.y=s.yaw,zA(o,s.life01),nf(o,{walkPhase:e/110,moving:!0,attackT:0,time:e/1e3})}for(const[s,o]of this.minionObjects)i.has(s)||(this.kit.scene.remove(o),Kc(o),this.minionObjects.delete(s))}updateNameplates(t){const e=t.players.find(s=>s.id===this.net.playerId);if(!e)return;const i=new Set;for(const s of t.mobs){if(Qe({x:e.x,z:e.z},{x:s.x,z:s.z})>BA)continue;const r=lo(s.type)?ke(s.type):null;if(!r||r.boss)continue;i.add(s.id);let a=this.plates.get(s.id);a||(a=HA(),this.refs.overlay.appendChild(a.root),this.plates.set(s.id,a));const c=this.projectPoint(s.x,s.y+r.scale*2.6,s.z);if(!c){a.root.style.display="none";continue}a.root.style.display="",a.root.style.transform=`translate(${c.x}px, ${c.y}px) translate(-50%, -100%)`,a.name!==r.name&&(a.label.textContent=`${r.name} Lv${r.lv}`,a.name=r.name),a.fill.style.transform=`scaleX(${Math.max(0,s.hp/s.maxHp)})`}for(const[s,o]of this.plates)i.has(s)||(o.root.remove(),this.plates.delete(s))}drawMinimap(){const t=this.lastSnapshot,e=this.me;!t||!e||this.minimap.render({self:{x:this.predictor.state.x,z:this.predictor.state.z,yaw:this.cam.yaw},others:t.players.filter(i=>i.id!==e.id).map(i=>({x:i.x,z:i.z})),mobs:t.mobs.map(i=>{const s=lo(i.type)?ke(i.type):null;return{x:i.x,z:i.z,boss:s?.boss===!0,world:s?.world===!0}}),gates:{heavenOpen:t.gates.hv}})}projectPoint(t,e,i){return this.projectVec.set(t,e,i).project(this.kit.camera),this.projectVec.z>1?null:{x:(this.projectVec.x*.5+.5)*window.innerWidth,y:(-this.projectVec.y*.5+.5)*window.innerHeight}}updateBossBar(t){const e=t.players.find(o=>o.id===this.net.playerId);if(!e)return;let i=null,s=60;for(const o of t.mobs){if(!lo(o.type)||!ke(o.type).boss)continue;const r=Qe({x:e.x,z:e.z},{x:o.x,z:o.z});r<s&&(s=r,i=o)}if(!i){this.bossVisible&&(this.bossBar.hide(),this.audio.stopBgm(),this.bossVisible=null);return}if(this.bossVisible!==i.type){this.bossVisible=i.type;const o=lo(i.type)?ke(i.type):null;this.bossBar.show(o?.name??"보스",_E[i.type]??"dark"),this.audio.playBgm(i.type==="creator"?"creator":"boss")}this.bossBar.setHp(i.hp,i.maxHp),this.bossBar.setInvulnerable(i.invuln)}handleEvent(t){switch(t.k){case"damage":t.isMob?(this.fx.hitstop(t.crit?.085:.05),this.fx.shake(t.crit?.3:.16),t.crit?co.crit(this.audio):co.hit(this.audio),t.crit&&this.input.vibrate(12)):t.targetId===this.net.playerId&&(this.hurtAnim=.3,this.fx.shake(.24),co.hurt(this.audio),this.input.vibrate(25));break;case"levelUp":t.playerId===this.net.playerId&&(co.levelUp(this.audio),this.hud.toast(`Lv ${t.level}`));break;case"runeLit":this.hud.toast(`자물쇠 ${t.count} / 3`),co.gate(this.audio);break;case"cutsceneStart":this.cutscene.play("gate");break;case"gateOpened":this.hud.toast("문이 열렸다");break;case"sealBroken":this.cutscene.play("seal");break;case"bossKilled":t.bossId==="creator"&&this.cutscene.play("ending",{force:!0});break;case"loot":t.to.includes(this.net.playerId)&&this.hud.toast("새 무기를 얻었다");break;case"toast":this.hud.toast(t.text);break;case"chat":this.hud.toast(`${t.name}: ${t.text}`,3500);break;case"joined":t.playerId!==this.net.playerId&&this.hud.toast(`${t.name} 님이 들어왔다`);break;case"left":this.hud.toast("한 명이 나갔다");break;case"aoe":this.fx.areaHit({x:t.x,z:t.z,radius:t.radius,color:t.color,shape:t.shape,yaw:t.yaw,halfAngle:t.halfAngle,duration:t.duration});break;case"shockwave":this.playShockwave(t.x,t.z,t.radius,t.bossId);break}this.onEvent?.(t)}playShockwave(t,e,i,s){const o=za(s),r=new L(t,Lf,e),a=Nf((i-Df)/(AA-Df)),c=1+Math.round(a*2);for(let u=0;u<c;u++){const h=u*RA,f=i*(1-u*.16),d=u===0?o.ring:o.color;h===0?this.fx.ring(r,f,d):setTimeout(()=>this.fx.ring(r,f,d),h)}const l=this.me;if(l){const u=Qe({x:l.x,z:l.z},{x:t,z:e}),h=Nf(1-u/(i+CA));h>0&&(this.fx.shake(PA*(.4+a*.6)*h),h>.75&&a>.5&&this.fx.hitstop(IA))}this.fx.burst(r,o.color,Math.round(18+a*26))}updateCamera(t){const e=this.me,i=this.predictor.state.x,s=this.predictor.state.z,o=e?.y??0;this.camTarget.set(i,o+UA,s);const r=this.input.settings.cameraDistance*bA(this.kit.camera.aspect);this.cam.distance+=(r-this.cam.distance)*Math.min(1,t*6);const a=Math.cos(this.cam.pitch);this.camPos.set(this.camTarget.x-Math.sin(this.cam.yaw)*a*this.cam.distance,Math.max(FA,this.camTarget.y+Math.sin(this.cam.pitch)*this.cam.distance),this.camTarget.z-Math.cos(this.cam.yaw)*a*this.cam.distance),this.kit.camera.position.lerp(this.camPos,Math.min(1,t*11)),this.kit.camera.lookAt(this.camTarget),this.kit.sun.position.set(i+30,55,s+20),this.kit.sun.target.position.set(i,0,s),this.kit.sun.target.updateMatrixWorld()}get me(){return this.lastSnapshot?.players.find(t=>t.id===this.net.playerId)}get selfState(){return this.lastSnapshot?.self}get elapsed(){return this.playTime}get gateState(){return this.gates}}function bA(n){return n>=1.5?1:Math.min(1.75,1.5/Math.max(.4,n))}const wA=2500,EA=10,TA=6,Lf=.2,Df=24,AA=34,RA=70,CA=18,PA=.55,IA=.06,LA=260,kf=1200,DA=26,Nf=n=>n<0?0:n>1?1:n,kA=.82,NA=14,Of=.25,OA=1.7,Uf=14674164,UA=2.6,FA=1.4;function zA(n,t){const e=t>=Of?1:Math.max(.15,t/Of),i=n.userData.minionFade;if(i!==void 0&&Math.abs(i-e)<.02)return;n.userData.minionFade=e;const s=o=>{const r=o,a=r.__minionClone===!0?r:o.clone();return a.__minionClone=!0,a.transparent=e<1,a.opacity=e,a.depthWrite=e>=1,a};n.traverse(o=>{const r=o;r.isMesh&&(r.material=Array.isArray(r.material)?r.material.map(s):s(r.material))})}function Ma(n){return n in Pi}function Ff(n){switch(n){case"touch":return["왼쪽 아래를 누른 채 움직여서 이동","오른쪽을 끌면 카메라 · 톡 치면 공격","공격 · 점프 · 특수기 버튼은 오른쪽 아래"];case"gamepad":return["왼쪽 스틱 이동 · 오른쪽 스틱 카메라","X 공격 · A 점프 · B 특수기 · Y 스킬","Start 메뉴"];default:return["WASD 이동 · Shift 달리기 · Space 점프","클릭 또는 F 공격 · Q 특수기 · T 스킬","E 상점 · M 지도 · Tab 자동공격 · ESC 메뉴"]}}const BA=60;function HA(){const n=document.createElement("div");n.className="nameplate";const t=document.createElement("div"),e=document.createElement("div");e.className="mobbar";const i=document.createElement("i");return e.appendChild(i),n.append(t,e),{root:n,label:t,fill:i,name:""}}function GA(n,t,e){return{id:"class",title:e?"직업을 고르자":"직업 변경",modal:!0,render(i,s){const o=n(),r=Fp.map(a=>{const c=Pi[a];return _0({title:`${c.icon} ${c.name}`,desc:c.desc,stats:c.stats,selected:o.classId===a,onClick:()=>{t.pickClass(a),s()}})});if(i.appendChild(v0(r)),o.classId){const a=document.createElement("p");a.style.cssText="margin-top:14px;font-size:12px;opacity:.7",a.textContent="직업을 바꾸면 이전 직업 전용 스킬 포인트는 전액 돌려받는다.",i.appendChild(a)}}}}const ya=118,Sa=76,zf=26,el=46;function VA(n,t){return{id:"tree",title:"스킬 트리",render(e){const i=()=>{const s=n();e.replaceChildren();const o=document.createElement("div");o.style.cssText="display:flex;gap:10px;align-items:center;margin-bottom:12px";const r=document.createElement("span");r.className="badge",r.textContent=`남은 SP ${s.sp}`,o.appendChild(r),o.appendChild(Ei("전체 초기화",()=>{t.respec(),setTimeout(i,120)})),e.appendChild(o);const a=Sr.filter(d=>d.classId===null||d.classId===s.classId),c=Gc.map(d=>a.filter(g=>g.tier===d)),l=document.createElement("div");l.className="tree-wrap";const u=Math.max(...c.map(d=>d.length),1);l.style.width=`${u*(ya+zf)}px`,l.style.height=`${Gc.length*(Sa+el)+20}px`;const h=new Map;c.forEach((d,g)=>{d.forEach((x,m)=>{h.set(x.id,{x:m*(ya+zf),y:g*(Sa+el)+20})})});const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",String(l.style.width?parseInt(l.style.width):0)),f.setAttribute("height",String(parseInt(l.style.height)));for(const d of a){if(!d.req)continue;const g=h.get(d.req[0]),x=h.get(d.id);if(!g||!x)continue;const m=g.x+ya/2,p=g.y+Sa,_=x.x+ya/2,M=x.y,v=document.createElementNS("http://www.w3.org/2000/svg","path");v.setAttribute("d",`M${m},${p} C${m},${(p+M)/2} ${_},${(p+M)/2} ${_},${M}`);const E=(s.skills[d.req[0]]??0)>=d.req[1];v.setAttribute("stroke",E?"rgba(255,212,121,.6)":"rgba(150,200,255,.22)"),v.setAttribute("stroke-width","2"),v.setAttribute("fill","none"),f.appendChild(v)}l.appendChild(f);for(const d of a){const g=h.get(d.id);g&&l.appendChild(WA(d,s,g,t,i))}if(Gc.forEach((d,g)=>{const x=document.createElement("div");x.className="tier-label",x.style.cssText=`position:absolute;left:-2px;top:${g*(Sa+el)}px`,x.textContent=d,l.appendChild(x)}),e.appendChild(l),!s.classId){const d=document.createElement("p");d.style.cssText="margin-top:16px;font-size:12px;opacity:.7",d.textContent="직업을 고르면 전용 스킬 7개가 더 열린다.",e.appendChild(d)}};i()}}}function WA(n,t,e,i,s){const o=t.skills[n.id]??0,r=!n.req||(t.skills[n.req[0]]??0)>=n.req[1],a=n.classId===null&&!n.requiresAnyClass?!0:t.classId!==null,c=o>=n.max,l=r&&a&&!c&&t.sp>0,u=document.createElement("button");u.className="node"+(l?"":" locked")+(c?" maxed":"")+(n.cap?" cap":""),u.style.cssText=`left:${e.x}px;top:${e.y}px;position:absolute`,u.type="button",u.title=n.desc;const h=document.createElement("b");h.textContent=`${n.icon} ${n.name}`;const f=document.createElement("div");f.className="rank",f.textContent=`${o} / ${n.max}`;const d=document.createElement("div");return d.className="desc",d.textContent=$A(n,Math.max(1,o)),u.append(h,f,d),l&&u.addEventListener("click",()=>{i.learnSkill(n.id),setTimeout(s,120)}),u}function $A(n,t){const e=n.effect,i=s=>`${Math.round(s*t*1e3)/10}%`;switch(e.kind){case"maxHpFlat":return`최대 HP +${e.perRank*t}`;case"attackFlat":return`공격력 +${e.perRank*t}`;case"attackPct":case"allDamagePct":return`공격력 +${i(e.perRank)}`;case"moveSpeedPct":return`이동속도 +${i(e.perRank)}`;case"critChancePct":return`크리 확률 +${i(e.perRank)}`;case"critDamagePct":return`크리 피해 +${i(e.perRank)}`;case"attackSpeedPct":return`공격속도 +${i(e.perRank)}`;case"goldGainPct":return`골드 +${i(e.perRank)}`;case"xpGainPct":return`경험치 +${i(e.perRank)}`;case"damageReductionPct":return`받는 피해 −${i(e.perRank)}`;case"damageReductionBelowHpPct":return`HP ${Math.round(e.hpThreshold*100)}% 이하일 때 피해 −${i(e.perRank)}`;case"lifestealPct":return`준 피해의 ${i(e.perRank)} 회복`;case"hpRegenPerSec":return`초당 HP +${Math.round(e.perRank*t*10)/10}`;case"evadeChancePct":return`회피 +${i(e.perRank)}`;case"allStatsPct":return`모든 능력치 +${i(e.perRank)}`;default:return n.desc.replace(/\$\{([^}]*)\}/g,(s,o)=>XA(o,t)??"?")}}function XA(n,t){const e=n.trim(),i=/^\((.+)\)\.toFixed\((\d+)\)$/.exec(e);if(i){const o=Bf(i[1]??"",t),r=Number(i[2]??0);return o===null?null:o.toFixed(r)}const s=Bf(e,t);return s===null?null:String(s)}function Bf(n,t){const e=n.replace(/\s+/g,"");if(e==="r")return t;const i=/^(-?[\d.]+)\*r$/.exec(e);if(i)return Number(i[1])*t;const s=/^(-?[\d.]+)\+r$/.exec(e);if(s)return Number(s[1])+t;const o=/^(-?[\d.]+)\+(-?[\d.]+)\*r$/.exec(e);if(o)return Number(o[1])+Number(o[2])*t;const r=Number(e);return Number.isFinite(r)?r:null}function qA(n,t){return{id:"shop",title:"🗡 무기점",render(e){const i=()=>{const s=n();e.replaceChildren();const o=document.createElement("div");o.style.cssText="margin-bottom:12px";const r=document.createElement("span");r.className="badge badge-gold",r.textContent=`${s.gold.toLocaleString("ko-KR")} G`,o.appendChild(r),e.appendChild(o);const a=ql.map(c=>{const l=Ds[c],u=s.owned.includes(c),h=s.weaponId===c,f=l.unlock.kind!=="shop"&&!u,d=!u&&!f&&s.gold<l.price;return _0({title:l.name,desc:l.desc,stats:YA(c),price:f?"보스 처치로 해금":u?h?"장착 중":"보유 중 — 눌러서 장착":`${l.price.toLocaleString("ko-KR")} G`,selected:h,disabled:f||d,onClick:()=>{u?t.equipWeapon(c):t.buyWeapon(c),setTimeout(i,120)}})});e.appendChild(v0(a))};i()}}}function YA(n){const t=Ds[n],e=[];return t.dmg&&e.push(`공격 +${t.dmg}`),t.crit&&e.push(`크리 +${Math.round(t.crit*100)}%`),t.atkSpeed&&e.push(`공속 ${t.atkSpeed<0?"+":"−"}${Math.abs(Math.round(t.atkSpeed*100))}%`),t.reach&&e.push(`사거리 +${t.reach}`),t.gold&&e.push(`골드 +${Math.round(t.gold*100)}%`),t.flame&&e.push("화염"),e.join(" · ")}function jA(n,t,e,i){return{id:"settings",title:"⚙ 설정",render(s){const o=[er("카메라 감도",30,220,n.sensitivity,r=>{n.sensitivity=r}),er("카메라 거리",6,24,n.cameraDistance,r=>{n.cameraDistance=r}),er("조이스틱 데드존 (%)",5,30,Math.round(n.deadzone*100),r=>{n.deadzone=r/100}),er("UI 크기 (%)",80,130,Math.round(n.uiScale*100),r=>{n.uiScale=r/100,document.documentElement.style.setProperty("--ui-scale",String(n.uiScale))}),er("음량",0,100,t.volume,r=>{t.volume=r}),nr("세로 반전",n.invertY,r=>{n.invertY=r}),nr("자동 공격",n.autoAttack,r=>{n.autoAttack=r}),nr("왼손잡이 모드",n.leftHanded,r=>{n.leftHanded=r,document.body.classList.toggle("left-handed",r)}),nr("진동",n.haptics,r=>{n.haptics=r}),nr("보스 음악",t.bgmEnabled,r=>{t.bgmEnabled=r})];s.append(...o)},footer(s,o){s.appendChild(Ei("전체화면",()=>i.toggleFullscreen())),s.appendChild(Ei("닫기",o,"primary"))}}}function C0(n){const t=document.createElement("label");t.style.cssText="display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 4px;border-bottom:1px solid rgba(150,200,255,.12);min-height:44px";const e=document.createElement("span");return e.textContent=n,t.appendChild(e),t}function er(n,t,e,i,s){const o=C0(n),r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:10px";const a=document.createElement("input");a.type="range",a.min=String(t),a.max=String(e),a.value=String(i),a.style.width="160px";const c=document.createElement("b");return c.textContent=String(i),c.style.cssText="min-width:38px;text-align:right;font-variant-numeric:tabular-nums",a.addEventListener("input",()=>{const l=Number(a.value);c.textContent=String(l),s(l)}),r.append(a,c),o.appendChild(r),o}function nr(n,t,e){const i=C0(n),s=document.createElement("input");return s.type="checkbox",s.checked=t,s.style.cssText="width:26px;height:26px",s.addEventListener("change",()=>e(s.checked)),i.appendChild(s),i}function KA(n,t){return{id:"dead",title:"쓰러졌다",modal:!0,render(e){const i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center;padding:24px 0";const s=document.createElement("p");s.style.cssText="margin:0;font-size:15px;color:var(--ink-dim)",s.textContent=n>0?`골드 일부를 잃었습니다 (−${n.toLocaleString("ko-KR")} G)`:"골드 일부를 잃었습니다",i.appendChild(s),e.appendChild(i)},footer(e,i){e.appendChild(Ei("마을에서 부활",()=>{t.respawn(),i()},"primary"))}}}function ZA(n,t,e){return{id:"pause",title:"일시정지",render(i){const s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;gap:12px;max-width:420px";const o=document.createElement("div");o.style.cssText="padding:16px;border-radius:14px;background:rgba(18,28,46,.8);border:1px solid rgba(150,200,255,.22)";const r=document.createElement("div");r.style.cssText="font-size:12px;opacity:.7;margin-bottom:6px",r.textContent="친구를 부르려면 이 코드를 알려주세요";const a=document.createElement("div");a.style.cssText="font-size:32px;font-weight:900;letter-spacing:.2em",a.textContent=n,o.append(r,a),o.appendChild(Ei("코드 복사",()=>e.copyRoomCode())),s.appendChild(o),i.appendChild(s)},footer(i,s){i.appendChild(Ei("설정",t)),i.appendChild(Ei("방 나가기",()=>e.leaveRoom(),"danger")),i.appendChild(Ei("계속하기",s,"primary"))}}}async function JA(n){if(!n)return[];const t=n.replace(/^ws/,"http").replace(/\/+$/,"");try{const e=await fetch(`${t}/rooms`,{cache:"no-store"});if(!e.ok)return[];const i=await e.json();return Array.isArray(i.rooms)?i.rooms:[]}catch{return[]}}function QA(n,t,e){if(n.replaceChildren(),t.length===0)return;const i=document.createElement("div");i.className="roomlist-title",i.textContent="지금 열린 방",n.appendChild(i);const s=document.createElement("div");s.className="roomlist";for(const o of t){const r=o.players>=o.capacity,a=document.createElement("button");a.type="button",a.className="roomcard"+(r?" full":""),a.disabled=r;const c=document.createElement("b");c.className="roomcard-code",c.textContent=o.code;const l=document.createElement("span");l.className="roomcard-who",l.textContent=o.names.length>0?o.names.join(", "):"모험가";const u=document.createElement("span");u.className="roomcard-meta",u.textContent=`${o.players}/${o.capacity}명 · Lv${o.topLevel} · 자물쇠 ${o.runes}/3`,a.append(c,l,u),r||a.addEventListener("click",()=>e.onPick(o.code)),s.appendChild(a)}n.appendChild(s)}function P0(){return"wss://block-rpg.changame.workers.dev".replace(/\/+$/,"")}function tR(n){const t=P0();return t?`${t}/room/${n}`:""}function Le(n){const t=document.querySelector(n);if(!t)throw new Error(`요소를 찾을 수 없다: ${n}`);return t}function eR(){return{canvas:Le("#view"),overlay:Le("#worldOverlay"),panels:Le("#panels"),cutscene:Le("#cutscene"),bossbar:Le("#bossbar"),minimap:Le("#minimap"),touch:Le("#touch"),joyZone:Le("#joyZone"),joy:Le("#joy"),knob:Le("#joyKnob"),btnAttack:Le("#btnAttack"),btnJump:Le("#btnJump"),btnSpecial:Le("#btnSpecial")}}function Hf(){document.documentElement.style.setProperty("--title-img",'url("/minchan_rpg/title.png")');const n=Le("#boot"),t=Le("#bootFill"),e=Le("#bootMsg"),i=R0(),s=_A(),o=document.createElement("div");o.className="boot-form",o.style.cssText="display:flex;flex-direction:column;gap:12px;align-items:center;width:min(320px,80vw)";const r=document.createElement("input");r.type="text",r.maxLength=16,r.placeholder="이름",r.value=s,r.style.cssText="width:100%;min-height:48px;padding:12px 16px;border-radius:12px;border:1px solid rgba(150,200,255,.3);background:rgba(18,28,46,.9);color:#eaf4ff;font-size:16px;text-align:center";const a=document.createElement("input");a.type="text",a.maxLength=8,a.placeholder="초대 코드 (없으면 비워두기)",a.value=i??"",a.style.cssText=r.style.cssText+";letter-spacing:.18em;text-transform:uppercase";const c=Ei(i?"친구 방에 들어가기":"시작하기",()=>{const u=r.value.trim()||"모험가";xA(u);const h=a.value.trim().toUpperCase()||A0()||void 0;o.remove(),e.textContent="세계를 짓는 중…",t.style.width="35%",nR(u,h,n,t,e)},"primary");c.style.width="100%",o.append(r,a,c),n.appendChild(o);const l=document.createElement("div");l.className="boot-rooms",n.appendChild(l),JA(P0()).then(u=>{QA(l,u,{onPick:h=>{a.value=h,c.click()}})}),e.textContent=i?"초대받은 방이 있다":"이름을 정하자",t.style.width="10%",r.focus(),r.addEventListener("keydown",u=>{u.key==="Enter"&&c.click()}),a.addEventListener("keydown",u=>{u.key==="Enter"&&c.click()})}function nR(n,t,e,i,s){const o=t??A0()??MA(),r=mA();let a=null;const c=()=>(a?I0(a):r)??void 0,l=new SA(eR(),{serverUrl:tR(o),name:n,saveProvider:c,roomCode:o,soloFallback:t===void 0});a=l,r&&l.cutscene.seenIds.forEach(()=>{}),r?.seenCutscenes.forEach(u=>l.cutscene.markSeen(u)),l.onReady=()=>{i.style.width="100%",s.textContent="준비 완료",setTimeout(()=>e.classList.add("done"),240),r||l.cutscene.play("opening")},iR(l),oR(l),sR(l)}function iR(n){const t=()=>{const r=n.me,a=n.selfState;return{level:r?.level??1,gold:a?.gold??0,sp:a?.sp??0,classId:r?.classId??null,weaponId:r?.weaponId??"stick",owned:a?.owned??["stick"],skills:a?.skills??{}}},e={respawn:()=>n.net.send({t:"respawn"}),pickClass:r=>n.net.send({t:"pickClass",classId:r}),learnSkill:r=>n.net.send({t:"learnSkill",nodeId:r}),respec:()=>n.net.send({t:"respec"}),buyWeapon:r=>n.net.send({t:"buyWeapon",weaponId:r}),equipWeapon:r=>n.net.send({t:"equipWeapon",weaponId:r}),toggleFullscreen:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},leaveRoom:()=>{gA(),location.href=location.pathname},copyRoomCode:()=>{const r=yA(n.net.roomCode);navigator.clipboard?.writeText(r).then(()=>n.hud.toast("초대 링크를 복사했다"),()=>n.hud.toast(r,6e3))}},i=()=>n.panels.push(jA(n.input.settings,n.audio,()=>{},e));n.openTree=()=>n.panels.toggle(VA(t,e)),n.openShop=()=>n.panels.toggle(qA(t,e)),n.openPause=()=>n.panels.toggle(ZA(n.net.roomCode,i,e));let s=!1,o=0;n.onSnapshot=r=>{const a=r.players.find(l=>l.id===n.net.playerId);if(!a)return;!s&&a.level>=5&&a.classId===null&&(s=!0,n.panels.push(GA(t,e,!0))),a.classId!==null&&n.panels.resolveModal("class"),(a.anim&Zp.DEAD)!==0?n.panels.has("dead")||n.panels.push(KA(Math.max(0,o-r.self.gold),e)):(o=r.self.gold,n.panels.resolveModal("dead"))},Le("#btnTree").addEventListener("click",()=>n.openTree?.()),Le("#btnPause").addEventListener("click",()=>n.openPause?.()),Le("#btnSettings").addEventListener("click",i)}function sR(n){const t=Le("#btnShop");t.addEventListener("click",()=>n.openShop?.()),setInterval(()=>{const e=n.me;if(!e)return;const i=Math.hypot(e.x-17,e.z-14)<8;t.classList.toggle("hidden",!i)},250)}function I0(n){const t=n.me,e=n.selfState;return!t||!e?null:{v:Yl,name:t.name,lv:t.level,xp:e.xp,gold:e.gold,sp:e.sp,cls:t.classId??null,weapon:t.weaponId,owned:e.owned,skills:e.skills,pt:Math.round(n.elapsed),gates:n.gateState,seenCutscenes:n.cutscene.seenIds}}function oR(n){let t=!1;const e=()=>{const i=I0(n);if(!i)return;!pA(i).ok&&!t&&(t=!0,n.hud.toast("저장할 수 없습니다 — 진행이 남지 않아요"))};setInterval(e,3e4),window.addEventListener("beforeunload",e),window.addEventListener("pagehide",e)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Hf,{once:!0}):Hf();
//# sourceMappingURL=index-x-j-BsRI.js.map
