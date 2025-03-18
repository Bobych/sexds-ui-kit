import{j as l}from"./jsx-runtime-C6qLVRqm.js";import{v as ne}from"./v4-CtRu48qb.js";import{H as te,l as ae}from"./HandEye-MEWoADYO.js";import{R as k}from"./index-C2WPW1L7.js";import{b as se,I as _}from"./Icon-CCfR5l9S.js";const{addons:re}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:ie}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:R}=__STORYBOOK_MODULE_GLOBAL__;var le=Object.defineProperty,ce=(t,e)=>{for(var o in e)le(t,o,{get:e[o],enumerable:!0})},ue="storybook/actions",de=`${ue}/action-event`,pe={depth:10,clearOnStoryChange:!0,limit:50},ee=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:ee(o,e)},fe=t=>!!(typeof t=="object"&&t&&ee(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),me=t=>{if(fe(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),a=o==null?void 0:o.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(a.constructor.prototype)}),e}return t},Me=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ne():Date.now().toString(36)+Math.random().toString(36).substring(2);function n(t,e={}){let o={...pe,...e},a=function(...s){var v,f;if(e.implicit){let d=(v="__STORYBOOK_PREVIEW__"in R?R.__STORYBOOK_PREVIEW__:void 0)==null?void 0:v.storyRenders.find(m=>m.phase==="playing"||m.phase==="rendering");if(d){let m=!((f=globalThis==null?void 0:globalThis.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),M=new ie({phase:d.phase,name:t,deprecated:m});if(m)console.warn(M);else throw M}}let r=re.getChannel(),i=Me(),c=5,u=s.map(me),p=s.length>1?u:u[0],g={id:i,count:0,data:{name:t,args:p},options:{...o,maxDepth:c+(o.depth||3),allowFunction:o.allowFunction||!1}};r.emit(de,g)};return a.isAction=!0,a.implicit=e.implicit,a}const{definePreview:Ue}=__STORYBOOK_MODULE_PREVIEW_API__,{global:C}=__STORYBOOK_MODULE_GLOBAL__;var ge={};ce(ge,{argsEnhancers:()=>he,loaders:()=>xe});var oe=(t,e)=>typeof e[t]>"u"&&!(t in e),ve=t=>{let{initialArgs:e,argTypes:o,id:a,parameters:{actions:s}}=t;if(!s||s.disable||!s.argTypesRegex||!o)return{};let r=new RegExp(s.argTypesRegex);return Object.entries(o).filter(([i])=>!!r.test(i)).reduce((i,[c,u])=>(oe(c,e)&&(i[c]=n(c,{implicit:!0,id:a})),i),{})},_e=t=>{let{initialArgs:e,argTypes:o,parameters:{actions:a}}=t;return a!=null&&a.disable||!o?{}:Object.entries(o).filter(([s,r])=>!!r.action).reduce((s,[r,i])=>(oe(r,e)&&(s[r]=n(typeof i.action=="string"?i.action:r)),s),{})},he=[_e,ve],I=!1,be=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!I&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in C&&typeof C.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=C.__STORYBOOK_TEST_ON_MOCK_CALL__;o((a,s)=>{let r=a.getMockName();r!=="spy"&&(!/^next\/.*::/.test(r)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>r.startsWith(i)))&&n(r)(s)}),I=!0}},xe=[be];class Ee{constructor(e){this.subscriptions=[],this.componentPrefix=e}subscribe(e){this.subscriptions.push(e)}unsubscribe(e){const o=this.subscriptions.indexOf(e);o>-1&&this.subscriptions.splice(o,1)}publish({componentId:e,...o}){this.subscriptions.forEach(a=>a({...o,componentId:this.componentPrefix?`${this.componentPrefix}${e}`:e}))}withEventPublisher(e){return o=>{this.publish({...o,componentId:e})}}}const Oe=new Ee,D=se("button"),T=k.forwardRef(function(e,o){we(e);const{variant:a="default",view:s="default",size:r="m",loading:i=!1,disabled:c=!1,leftIcon:u,rightIcon:p,children:g,extraProps:v,onClickCapture:f,...d}=e,M={onClickCapture:k.useCallback(L=>{Oe.publish({componentId:"Button",eventId:"click",domEvent:L,meta:{content:L.currentTarget.textContent,view:s}}),f&&f(L)},[s,f]),className:D({variant:a,view:s,size:r,loading:i,disabled:c},d.className)};return e.href!==void 0?l.jsxs("a",{...d,...v,...M,ref:o,rel:e.target==="_blank"&&!d.rel?"noopener noreferrer":d.rel,"aria-disabled":c??void 0,children:[u&&l.jsx(_,{icon:u}),l.jsx("span",{className:D("content"),children:g}),p&&l.jsx(_,{icon:p})]}):l.jsxs("button",{...d,...M,ref:o,disabled:c,children:[u&&l.jsx(_,{icon:u}),l.jsx("span",{className:D("content"),children:g}),p&&l.jsx(_,{icon:p})]})});function we({children:t}){typeof t!="string"&&console.warn('Use element of type "string" as children in component.')}try{T.displayName="Button",T.__docgenInfo={description:"",displayName:"Button",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},extraProps:{defaultValue:null,description:"",name:"extraProps",required:!1,type:{name:"ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"invert"'},{value:'"accent"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"default"'},{value:'"tone"'},{value:'"outline"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const ye=["default","invert","accent","success","warning","error"],Te=["xs","s","m","l","xl"],Le=["default","tone","outline","text"],Ae={title:"Components/Inputs/Button",component:T,argTypes:{variant:{control:"select",options:ye},view:{control:"select",options:Le},size:{control:"select",options:Te},disabled:{control:"boolean"},children:{control:"text"},href:{control:"text"},target:{control:"select",options:["_blank","_self","_parent","_top"]}}},h={args:{children:"Text",onClick:n("onClick"),onMouseEnter:n("onMouseEnter"),onMouseLeave:n("onMouseLeave"),onMouseDown:n("onMouseDown"),onMouseUp:n("onMouseUp"),variant:"default",view:"default",size:"m",loading:!1,disabled:!1}},b={render:t=>l.jsx(T,{leftIcon:l.jsx(ae,{}),rightIcon:l.jsx(te,{}),...t,children:"Text"})},x={args:{children:"Text",onClick:n("onClick"),onMouseEnter:n("onMouseEnter"),onMouseLeave:n("onMouseLeave"),onMouseDown:n("onMouseDown"),onMouseUp:n("onMouseUp"),variant:"default",view:"default",size:"xl",loading:!1,disabled:!1}},E={args:{children:"Text",onClick:n("onClick"),onMouseEnter:n("onMouseEnter"),onMouseLeave:n("onMouseLeave"),onMouseDown:n("onMouseDown"),onMouseUp:n("onMouseUp"),variant:"accent",view:"default",size:"m",loading:!1,disabled:!1}},O={args:{children:"Text",onClick:n("onClick"),onMouseEnter:n("onMouseEnter"),onMouseLeave:n("onMouseLeave"),onMouseDown:n("onMouseDown"),onMouseUp:n("onMouseUp"),variant:"default",view:"default",size:"m",loading:!1,disabled:!1}},w={args:{children:"Text",onClick:n("onClick"),onMouseEnter:n("onMouseEnter"),onMouseLeave:n("onMouseLeave"),onMouseDown:n("onMouseDown"),onMouseUp:n("onMouseUp"),variant:"default",view:"default",size:"m",loading:!0,disabled:!1}},y={args:{children:"Text",onClick:n("onClick"),onMouseEnter:n("onMouseEnter"),onMouseLeave:n("onMouseLeave"),onMouseDown:n("onMouseDown"),onMouseUp:n("onMouseUp"),variant:"default",view:"default",size:"m",loading:!1,disabled:!0}};var U,A,S;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Text",
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onMouseDown: action('onMouseDown'),
    onMouseUp: action('onMouseUp'),
    variant: "default",
    view: "default",
    size: "m",
    loading: false,
    disabled: false
  }
}`,...(S=(A=h.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var B,j,P;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Button leftIcon={<HandEye />} rightIcon={<Hand />} {...args}>
            Text
        </Button>
}`,...(P=(j=b.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var V,z,N;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Text",
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onMouseDown: action('onMouseDown'),
    onMouseUp: action('onMouseUp'),
    variant: "default",
    view: "default",
    size: "xl",
    loading: false,
    disabled: false
  }
}`,...(N=(z=x.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var K,q,W;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: "Text",
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onMouseDown: action('onMouseDown'),
    onMouseUp: action('onMouseUp'),
    variant: "accent",
    view: "default",
    size: "m",
    loading: false,
    disabled: false
  }
}`,...(W=(q=E.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var Y,H,F;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: "Text",
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onMouseDown: action('onMouseDown'),
    onMouseUp: action('onMouseUp'),
    variant: "default",
    view: "default",
    size: "m",
    loading: false,
    disabled: false
  }
}`,...(F=(H=O.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var $,G,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "Text",
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onMouseDown: action('onMouseDown'),
    onMouseUp: action('onMouseUp'),
    variant: "default",
    view: "default",
    size: "m",
    loading: true,
    disabled: false
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: "Text",
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onMouseDown: action('onMouseDown'),
    onMouseUp: action('onMouseUp'),
    variant: "default",
    view: "default",
    size: "m",
    loading: false,
    disabled: true
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Se=["Default","WithIcon","ExtraLarge","Accent","Action","Loading","Disabled"];export{E as Accent,O as Action,h as Default,y as Disabled,x as ExtraLarge,w as Loading,b as WithIcon,Se as __namedExportsOrder,Ae as default};
