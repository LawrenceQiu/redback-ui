import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{r as D}from"./index-BBkUAzwr.js";import{u as P}from"./styled-components.browser.esm-CoKU8m7y.js";import{c}from"./createLucideIcon-87iwSO1i.js";const L=P.div`
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
 */const _=c("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=c("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=c("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=c("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),T=({images:e,altTexts:I,size:A})=>{const[a,g]=D.useState(0),$=()=>{const r=(a-1+e.length)%e.length;g(r)},N=()=>{const r=(a+1)%e.length;g(r)};return s.jsx(L,{"data-testid":"ImageSlider",size:A,children:s.jsxs("div",{className:"slider-container",children:[s.jsx("div",{className:"turn-horizontal",style:{width:`${100*e.length}%`,transform:`translateX(-${a*(100/e.length)}%)`},children:e.map((r,t)=>s.jsx("img",{src:r,alt:I[t]||`Slide ${t}`,className:"slider-image",style:{width:`${100/e.length}%`}},t))}),s.jsx("button",{onClick:$,className:"slider-button",style:{left:0},children:s.jsx(_,{})}),s.jsx("button",{onClick:N,className:"slider-button",style:{right:0},children:s.jsx(B,{})}),s.jsx("div",{style:{position:"absolute",bottom:"1.5rem",left:"50%",translate:"-50%",display:"flex",gap:".25rem"},children:e.map((r,t)=>s.jsxs("button",{className:"slider-index-button",onClick:()=>g(t),children:[" ",t===a?s.jsx(q,{}):s.jsx(E,{})," "]},t))})]})})};T.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},altTexts:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},size:{required:!0,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""}}};const d=["https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],m=["Cyclists racing with high intensity","A Cyclist riding fast on a track","A cyclist overlooking scenic view"],H={title:"Components/ImageSlider",component:T},p={},u={parameters:{controls:{disable:!0},actions:{disable:!0}}},o={args:{...p,images:d,altTexts:m,size:"large"},tags:["excludeFromSidebar"]},i={args:{...p,images:d,altTexts:m,size:"large"},...u},l={args:{...p,images:d,altTexts:m,size:"large"},...u},n={args:{...p,images:d,altTexts:m,size:"small"},...u};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'large'
  },
  tags: ['excludeFromSidebar']
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,f,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'large'
  },
  ...disableControls
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,z,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'large'
  },
  ...disableControls
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var v,j,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    altTexts: altTexts,
    size: 'small'
  },
  ...disableControls
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const O=["Demo","Default","Large","Small"];export{i as Default,o as Demo,l as Large,n as Small,O as __namedExportsOrder,H as default};
