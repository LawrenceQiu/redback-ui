import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{r as c}from"./index-BBkUAzwr.js";import{u as k}from"./styled-components.browser.esm-CoKU8m7y.js";import{c as v}from"./createLucideIcon-87iwSO1i.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=v("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]),S=k.div`
	
    .chatbox-container {
        display: flex;
        flex-direction: column;
        width: 400px; 
        height: 500px; 
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
    }
	
    .chatbox-header {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: ${e=>e.theme.colors.primary};
        color: ${e=>e.theme.colors.light};
    }

    .chatbox-header img {
        width: 40px;
        height: 40px;
		margin: 0.6rem;
		padding: 0.4rem;
		border-radius: 50%;
		background-color: ${e=>e.theme.colors.subtle};
        border: 1px solid ${e=>e.theme.colors.info};
    }

    .chatbox-header h3 {
        margin: 0px;
    }

    .chatbox-header p {
        margin: 0px;
        font-size: ${e=>e.theme.fontSizes.sm};
        
    }
	
    .chatbox-body {
        flex: 1;
        padding: 10px;
        background-color: ${e=>e.theme.colors.light};
        overflow-y: auto;
    }

    .message {
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
        max-width: 75%;
        word-wrap: break-word;
        margin-bottom: 20px; 
        position: relative; /* Make the container position relative */
    }

    .my-message {
        align-self: flex-start;
        background-color: ${e=>e.theme.colors.subtle};
        margin-left: 70px;
    }

    .other-message {
        align-self: flex-end;
        background-color: #e3e3e3;
		color: ${e=>e.theme.colors.dark};;        
    }

    .message-meta {
        position: absolute; /* Make the meta information absolute */
        bottom: -18px; /* Position it below the message */
        color: #888; /* Color for meta information */
        font-size: ${e=>e.theme.fontSizes.sm};
    }

	
    .chatbox-footer {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: ${e=>e.theme.colors.light};
    }

    .chatbox-footer input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
        background-color: #e3e3e3;
    }

    .chatbox-footer button {
        background-color: ${e=>e.theme.colors.subtle};
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
		height: 38px;
    }

    .chatbox-footer button:hover {
        background-color: ${e=>e.theme.colors.secondary};
    }
`,u=()=>{const[e,a]=c.useState(""),[n,b]=c.useState([{text:"Hi, how can I assist you today?",sender:"other",timestamp:new Date().toLocaleTimeString()}]),f=t=>{a(t.target.value)},i=()=>{if(e.trim()){const t={text:e,sender:"me",timestamp:new Date().toLocaleTimeString()};b([...n,t]),a("")}},y=t=>{t.key==="Enter"&&i()};return o.jsx(S,{"data-testid":"SupportChatbox",children:o.jsxs("div",{className:"chatbox-container",children:[o.jsxs("div",{className:"chatbox-header",children:[o.jsx("img",{src:"https://redback-operations.github.io/redback-ui/icon.svg",alt:"Redback logo"}),o.jsxs("div",{children:[o.jsx("h3",{children:"Need help?"}),o.jsx("p",{children:"Our team will assist you shortly"})]})]}),o.jsx("div",{className:"chatbox-body",children:n.map((t,j)=>o.jsxs("div",{className:`message ${t.sender==="me"?"my-message":"other-message"}`,children:[o.jsx("div",{className:"message-content",children:t.text}),o.jsxs("div",{className:"message-meta",children:[o.jsx("span",{children:t.sender==="me"?"You:":"Redback Support:"})," ",o.jsx("span",{children:t.timestamp})," "]})]},j))}),o.jsxs("div",{className:"chatbox-footer",children:[o.jsx("input",{type:"text",value:e,placeholder:"Type your message here...",onChange:f,onKeyPress:y}),o.jsx("button",{onClick:i,children:o.jsx(w,{})})]})]})})};u.__docgenInfo={description:"",methods:[],displayName:"SupportChatbox"};const P={title:"Components/SupportChatbox",component:u},g={},C={parameters:{controls:{disable:!0},actions:{disable:!0}}},r={args:{...g},tags:["excludeFromSidebar"]},s={args:{...g},...C};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  tags: ['excludeFromSidebar']
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  ...disableControls
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const L=["Demo","Default"];export{s as Default,r as Demo,L as __namedExportsOrder,P as default};
