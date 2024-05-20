import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{r as A}from"./index-BBkUAzwr.js";import{u as D}from"./styled-components.browser.esm-CoKU8m7y.js";import{c}from"./createLucideIcon-87iwSO1i.js";const P=D.div`
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
 */const _=c("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=c("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=c("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),C=({images:e,size:I})=>{const[a,p]=A.useState(0),$=()=>{const r=(a-1+e.length)%e.length;p(r)},N=()=>{const r=(a+1)%e.length;p(r)};return s.jsx(P,{"data-testid":"ImageSlider",size:I,children:s.jsxs("div",{className:"slider-container",children:[s.jsx("div",{className:"turn-horizontal",style:{width:`${100*e.length}%`,transform:`translateX(-${a*(100/e.length)}%)`},children:e.map((r,t)=>s.jsx("img",{src:r,alt:`Slide ${t}`,className:"slider-image",style:{width:`${100/e.length}%`}},t))}),s.jsx("button",{onClick:$,className:"slider-button",style:{left:0},children:s.jsx(L,{})}),s.jsx("button",{onClick:N,className:"slider-button",style:{right:0},children:s.jsx(_,{})}),s.jsx("div",{style:{position:"absolute",bottom:"1.5rem",left:"50%",translate:"-50%",display:"flex",gap:".25rem"},children:e.map((r,t)=>s.jsxs("button",{className:"slider-index-button",onClick:()=>p(t),children:[" ",t===a?s.jsx(B,{}):s.jsx(T,{})," "]},t))})]})})};C.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},size:{required:!0,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""}}};const d=["https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],M={title:"Components/ImageSlider",component:C},m={},g={parameters:{controls:{disable:!0},actions:{disable:!0}}},o={args:{...m,images:d,size:"large"},tags:["excludeFromSidebar"]},i={args:{...m,images:d,size:"large"},...g},l={args:{...m,images:d,size:"large"},...g},n={args:{...m,images:d,size:"small"},...g};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  tags: ['excludeFromSidebar']
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  ...disableControls
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,z,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  ...disableControls
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var j,k,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'small'
  },
  ...disableControls
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const V=["Demo","Default","Large","Small"];export{i as Default,o as Demo,l as Large,n as Small,V as __namedExportsOrder,M as default};
