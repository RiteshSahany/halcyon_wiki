"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[143],{40:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=i(4848),t=i(8453);const r={slug:"/devices/garnet",pagination_next:null,pagination_prev:null,title:"Redmi Note 13 Pro 5G / POCO X6 5G (garnet)"},l="Redmi Note 13 Pro 5G / POCO X6 5G (garnet)",s={id:"official_devices/xiaomi/garnet",title:"Redmi Note 13 Pro 5G / POCO X6 5G (garnet)",description:"Device Information",source:"@site/docs/official_devices/xiaomi/garnet.md",sourceDirName:"official_devices/xiaomi",slug:"/devices/garnet",permalink:"/devices/garnet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/devices/garnet",pagination_next:null,pagination_prev:null,title:"Redmi Note 13 Pro 5G / POCO X6 5G (garnet)"},sidebar:"defaultSidebar"},a={},c=[{value:"Device Information",id:"device-information",level:2},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Installing Recovery",id:"installing-recovery",level:3},{value:"Installing ROM",id:"installing-rom",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"redmi-note-13-pro-5g--poco-x6-5g-garnet",children:"Redmi Note 13 Pro 5G / POCO X6 5G (garnet)"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.h2,{id:"device-information",children:"Device Information"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Device:"})," Redmi Note 13 Pro 5G / POCO X6 5G"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Release Date:"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Chipset:"})," \tQualcomm SM7435 Snapdragon 7s Gen 2"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"RAM:"})," 8 GB / 12 GB / 16 GB"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Storage:"})," 128 GB / 256 GB / 512 GB"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Battery:"})," 5100 mAh"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Display:"})," 6.67 inches, AMOLED, HDR10+, 120Hz, 1220x2712 pixels"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Rear Camera:"})," Triple 200/64 MP (main) + 8 MP (ultrawide) + 2 MP (telephoto macro)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Front Camera:"})," 16 MP (wide)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Halcyon Version:"})," Ursinia"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Maintainer:"})," Soni Dharma"]}),"\n"]})]}),"\n",(0,o.jsx)("a",{href:"https://www.pling.com/p/2058150/",class:"button button--primary",children:"Get builds"}),"\n",(0,o.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Make sure to backup your data before proceeding."})}),"\n",(0,o.jsx)(n.h3,{id:"installing-recovery",children:"Installing Recovery"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Enter fastboot mode by using a key combination ",(0,o.jsx)(n.code,{children:"Power + Vol Down"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Connect your device to your PC via USB."}),"\n",(0,o.jsxs)(n.li,{children:["Verify that your PC detects the device with ",(0,o.jsx)(n.code,{children:"fastboot devices"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Flash the boot image onto your device using ",(0,o.jsx)(n.code,{children:"fastboot flash boot recovery.img"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Reboot into recovery mode by typing ",(0,o.jsx)(n.code,{children:"fastboot reboot recovery"})," in command line or by holding ",(0,o.jsx)(n.code,{children:"Power + Vol Up"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"installing-rom",children:"Installing ROM"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Download the latest release of Halcyon."}),"\n",(0,o.jsx)(n.li,{children:"Reboot into recovery mode."}),"\n",(0,o.jsx)(n.li,{children:"Perform a Format data."}),"\n",(0,o.jsx)(n.li,{children:"Return to the main menu."}),"\n",(0,o.jsx)(n.li,{children:"Select Apply update > Apply from ADB."}),"\n",(0,o.jsx)(n.li,{children:"Now you can start sideloading by this command:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"adb sideload halcyon_garnet-xxxxx.zip\n"})}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var o=i(6540);const t={},r=o.createContext(t);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);