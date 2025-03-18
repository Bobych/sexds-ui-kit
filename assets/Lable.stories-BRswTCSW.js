import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{l as N,H as T}from"./HandEye-MEWoADYO.js";import{L as l}from"./Lable-OAgae102.js";import"./index-C2WPW1L7.js";import"./Icon-CCfR5l9S.js";const _=["s","m","l","xl"],C=["default","misc","danger","warning","success","info","announce","invert"],J={title:"Components/Data Display/Lable",component:l,argTypes:{size:{control:"select",options:_},type:{control:"select",options:C},children:{control:"text"}}},s={args:{children:"Default",size:"s",type:"default"}},n={args:{children:"Misc",size:"s",type:"misc"}},a={args:{children:"Info",size:"s",type:"info"}},o={args:{children:"Announce",size:"s",type:"announce"}},t={render:r=>e.jsx(l,{type:"warning",leftIcon:e.jsx(N,{}),...r,children:"Left icon"})},c={render:r=>e.jsx(l,{type:"success",rightIcon:e.jsx(T,{}),...r,children:"Right icon"})},i={render:r=>e.jsx(l,{type:"invert",leftIcon:e.jsx(N,{}),rightIcon:e.jsx(T,{}),...r,children:"Both icons"})},p={args:{children:"Extra large",size:"xl",type:"danger"}};var d,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Default",
    size: "s",
    type: "default"
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Misc",
    size: "s",
    type: "misc"
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,x,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Info",
    size: "s",
    type: "info"
  }
}`,...(I=(x=a.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var L,z,b;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Announce",
    size: "s",
    type: "announce"
  }
}`,...(b=(z=o.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var j,S,E;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Lable type='warning' leftIcon={<HandEye />} {...args}>
            Left icon
        </Lable>
}`,...(E=(S=t.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var D,W,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Lable type='success' rightIcon={<Hand />} {...args}>
            Right icon
        </Lable>
}`,...(H=(W=c.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var R,A,B;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Lable type='invert' leftIcon={<HandEye />} rightIcon={<Hand />} {...args}>
            Both icons
        </Lable>
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var M,v,w;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: "Extra large",
    size: "xl",
    type: "danger"
  }
}`,...(w=(v=p.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const K=["Default","Misc","Info","Announce","WithLeftIcon","WithRightIcon","WithBothIcons","ExtraLarge"];export{o as Announce,s as Default,p as ExtraLarge,a as Info,n as Misc,i as WithBothIcons,t as WithLeftIcon,c as WithRightIcon,K as __namedExportsOrder,J as default};
