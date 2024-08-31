import{j as s}from"./jsx-runtime-Bxcv0yjW.js";import{r as A}from"./index-mfbfsM12.js";import{u as D}from"./styled-components.browser.esm-DnUtS8XV.js";import{c}from"./createLucideIcon-BoDXIzg3.js";import"./_commonjsHelpers-BosuxZz1.js";const P=D.div`
    .slider-container {
        position: relative;
        width: 100%;
        max-width: ${e=>e.size==="small"?"400px":"800px"};
        height: ${e=>e.size==="small"?"250px":"500px"};
        margin: 0 auto;
        overflow: hidden;
    }

    .slider-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        aspect-ratio: 10/6;
        display: block;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .slider-button {
        all: unset;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        padding: 0.8rem;
        cursor: pointer;
        transition: background-color 100ms ease-in-out, transform 100ms ease; /* Added transform transition */
    }

    .slider-button:hover {
        background-color: rgba(0, 0, 0, 0.09);
    }

    .slider-button > * {
        stroke: white;
        width: 2rem;
        height: 2rem;
        transform: scale(${e=>e.size==="small"?"0.8":"1"}); /* Scale based on size prop */
    }

    .slider-index-button {
        all: unset;
        display: block;
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        transition: scale 100ms ease-in-out;
        transform: scale(${e=>e.size==="small"?"0.8":"1"}); /* Scale based on size prop */
    }

    .slider-index-button:hover {
        scale: 1.2;
    }

    .slider-index-button > * {
        stroke: white;
        height: 100%;
        width: 100%;
    }

    .turn-horizontal {
        height: ${e=>e.size==="small"?"250px":"500px"};
        transition: transform 0.5s ease;
        display: flex;
    }
`;/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=c("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=c("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=c("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=c("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),u=({images:e,altTexts:T,size:_})=>{const[a,g]=A.useState(0),N=()=>{const r=(a-1+e.length)%e.length;g(r)},$=()=>{const r=(a+1)%e.length;g(r)};return s.jsx(P,{"data-testid":"ImageSlider",size:_,children:s.jsxs("div",{className:"slider-container",children:[s.jsx("div",{className:"turn-horizontal",style:{width:`${100*e.length}%`,transform:`translateX(-${a*(100/e.length)}%)`},children:e.map((r,t)=>s.jsx("img",{src:r,alt:T[t]||`Slide ${t}`,className:"slider-image",style:{width:`${100/e.length}%`}},t))}),s.jsx("button",{onClick:N,className:"slider-button",style:{left:0},children:s.jsx(L,{})}),s.jsx("button",{onClick:$,className:"slider-button",style:{right:0},children:s.jsx(V,{})}),s.jsx("div",{style:{position:"absolute",bottom:"1.5rem",left:"50%",translate:"-50%",display:"flex",gap:".25rem"},children:e.map((r,t)=>s.jsxs("button",{className:"slider-index-button",onClick:()=>g(t),children:[" ",t===a?s.jsx(B,{}):s.jsx(q,{})," "]},t))})]})})};try{u.displayName="ImageSlider",u.__docgenInfo={description:"",displayName:"ImageSlider",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string[]"}},altTexts:{defaultValue:null,description:"",name:"altTexts",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const d=["https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],m=["Cyclists racing with high intensity","A Cyclist riding fast on a track","A cyclist overlooking scenic view"],O={title:"Components/ImageSlider",component:u},p={},h={parameters:{controls:{disable:!0},actions:{disable:!0}}},o={args:{...p,images:d,altTexts:m,size:"large"},tags:["excludeFromSidebar"]},l={args:{...p,images:d,altTexts:m,size:"large"},...h},i={args:{...p,images:d,altTexts:m,size:"large"},...h},n={args:{...p,images:d,altTexts:m,size:"small"},...h};var x,b,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'large'
  },
  tags: ['excludeFromSidebar']
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,w,z;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'large'
  },
  ...disableControls
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var S,k,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'large'
  },
  ...disableControls
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var j,C,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'small'
  },
  ...disableControls
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const X=["Demo","Default","Large","Small"];export{l as Default,o as Demo,i as Large,n as Small,X as __namedExportsOrder,O as default};
