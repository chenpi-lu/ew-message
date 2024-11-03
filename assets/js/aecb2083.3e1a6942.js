"use strict";(self.webpackChunkew_message=self.webpackChunkew_message||[]).push([[815],{393:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var c=s(6070),t=s(5658);const a={sidebar_position:1},o="\u53c2\u6570\u63a5\u53e3",i={id:"core-api/api",title:"\u53c2\u6570\u63a5\u53e3",description:"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u3002",source:"@site/docs/core-api/api.md",sourceDirName:"core-api",slug:"/core-api/api",permalink:"/ew-message/docs/core-api/api",draft:!1,unlisted:!1,editUrl:"https://github.com/eveningwater/ewMessage/tree/main/docs/core-api/api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"log",permalink:"/ew-message/docs/log"},next:{title:"\u5b9e\u4f8b\u65b9\u6cd5\u63a5\u53e3",permalink:"/ew-message/docs/core-api/instance"}},l={},r=[{value:"\u5b57\u7b26\u4e32\u53c2\u6570",id:"\u5b57\u7b26\u4e32\u53c2\u6570",level:2},{value:"\u914d\u7f6e\u5bf9\u8c61",id:"\u914d\u7f6e\u5bf9\u8c61",level:2},{value:"1. content",id:"1-content",level:3},{value:"2. center",id:"2-center",level:3},{value:"3. type",id:"3-type",level:3},{value:"4. duration",id:"4-duration",level:3},{value:"5. showClose",id:"5-showclose",level:3},{value:"6. showTypeIcon (0.0.8)\u65b0\u589e",id:"6-showtypeicon-008\u65b0\u589e",level:3},{value:"7. typeIcon(0.0.8 \u65b0\u589e)",id:"7-typeicon008-\u65b0\u589e",level:3},{value:"8. closeIcon(0.0.8 \u65b0\u589e)",id:"8-closeicon008-\u65b0\u589e",level:3},{value:"9. container(0.0.9 \u65b0\u589e)",id:"9-container009-\u65b0\u589e",level:3},{value:"10. removeClassName(0.0.9 \u65b0\u589e\uff0c0.1.5\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4)",id:"10-removeclassname009-\u65b0\u589e015\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4",level:3},{value:"11. top(0.1.1 \u65b0\u589e)",id:"11-top011-\u65b0\u589e",level:3},{value:"12. startClassName(0.1.1 \u65b0\u589e,0.1.5\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4)",id:"12-startclassname011-\u65b0\u589e015\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u53c2\u6570\u63a5\u53e3",children:"\u53c2\u6570\u63a5\u53e3"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5b57\u7b26\u4e32\u53c2\u6570",children:"\u5b57\u7b26\u4e32\u53c2\u6570"}),"\n",(0,c.jsx)(n.p,{children:"\u9ed8\u8ba4\u53c2\u6570\u53ef\u4ee5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4f5c\u6d88\u606f\u63d0\u793a\u6846\u7684\u5185\u5bb9\uff0c\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage("\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846");\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u914d\u7f6e\u5bf9\u8c61",children:"\u914d\u7f6e\u5bf9\u8c61"}),"\n",(0,c.jsx)(n.p,{children:"\u914d\u7f6e\u5bf9\u8c61\u4e3b\u8981\u6709 6 \u4e2a\u5c5e\u6027\uff0c\u5206\u522b\u5982\u4e0b:"}),"\n",(0,c.jsx)(n.h3,{id:"1-content",children:"1. content"}),"\n",(0,c.jsx)(n.p,{children:"content \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4f5c\u6d88\u606f\u63d0\u793a\u6846\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u5982\u679c\u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff08\u5373\u5bfc\u5165\u7684\u662f\u975e\u751f\u4ea7\u6a21\u5f0f\u7684\u6587\u4ef6 ewMessage.js\uff09\uff0c\u5219\u4f1a\u5728\u63a7\u5236\u53f0\u7ed9\u51fa\u8b66\u544a\uff0c\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({ content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846" });\n'})}),"\n",(0,c.jsx)(n.h3,{id:"2-center",children:"2. center"}),"\n",(0,c.jsx)(n.p,{children:"center \u5c5e\u6027\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u8ba9\u6d88\u606f\u63d0\u793a\u6846\u7684\u5185\u5bb9\u5267\u4e2d\uff0c\u9ed8\u8ba4\u662f false\u3002\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'// \u6d88\u606f\u63d0\u793a\u6846\u5185\u5bb9\u5c45\u4e2d\nconst msg = ewMessage({ content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846", center: true });\n'})}),"\n",(0,c.jsx)(n.h3,{id:"3-type",children:"3. type"}),"\n",(0,c.jsx)(n.p,{children:'type \u7684\u503c\u867d\u7136\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f46\u53ea\u652f\u6301"info" | "success" | "warning" | "error"\uff0c\u8868\u793a\u6d88\u606f\u63d0\u793a\u6846\u7684\u7c7b\u578b\uff0c\u9ed8\u8ba4\u662f\u503c\u662f"info"\u3002\u5982:'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u6210\u529f\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  center: true,\n  type: "success", // \u6210\u529f\u6d88\u606f\u63d0\u793a\u6846\n});\n'})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u8bf4\u660e: 0.1.6\u65b0\u589e\u4e86type\u4e3aloading\u7684\u52a0\u8f7d\u6d88\u606f\u63d0\u793a\u6846\u3002\u8c03\u7528\u65b9\u5f0f\u5982\u4e0b:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u52a0\u8f7d\u4e2d\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  center: true,\n  type: "loading",\n});\n// \u6216\u8005\nconst msg = ewMessage.loading({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u52a0\u8f7d\u4e2d\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  center: true\n})\n'})}),"\n",(0,c.jsx)(n.h3,{id:"4-duration",children:"4. duration"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u5b57\u6bb5\u7684\u503c\u662f\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6d88\u606f\u63d0\u793a\u6846\u5173\u95ed\u7684\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u662f 2s\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4fee\u6539\u3002\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  center: true,\n  type: "success",\n  duration: 3000, // \u6d88\u606f\u63d0\u793a\u6846\u5c06\u57282s\u540e\u5173\u95ed\n});\n'})}),"\n",(0,c.jsx)(n.h3,{id:"5-showclose",children:"5. showClose"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u5b57\u6bb5\u7684\u503c\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u663e\u793a\u6d88\u606f\u63d0\u793a\u6846\u7684\u5173\u95ed\u6309\u94ae\uff0c\u9ed8\u8ba4\u503c\u662f true\uff0c\u53ef\u4ee5\u5c06\u503c\u8bbe\u7f6e\u4e3a false\u3002\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  showClose: false,\n});\n'})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"ps: \u9700\u8981\u6ce8\u610f\u7684\u662f\u5982\u679c\u5c06 duration \u7684\u503c\u8bbe\u7f6e\u4e3a 0,showClose \u8bbe\u7f6e\u4e3a false,\u5219\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u4f1a\u63d0\u4f9b\u8b66\u544a\uff0c\u7136\u540e\u81ea\u52a8\u5f00\u542f\u6d88\u606f\u63d0\u793a\u6846\u7684\u5173\u95ed\u6309\u94ae\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"6-showtypeicon-008\u65b0\u589e",children:"6. showTypeIcon (0.0.8)\u65b0\u589e"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u663e\u793a\u56fe\u6807\uff0c\u4f1a\u6839\u636e\u76f8\u5173\u7684\u7c7b\u578b\u6765\u5339\u914d\u76f8\u5e94\u7684\u56fe\u6807\uff0c\u6bd4\u5982 info \u7c7b\u578b\u5c31\u662f info \u7c7b\u578b\u7684\u56fe\u6807,\u9ed8\u8ba4\u503c\u662f true\u3002\u5982\u4e0b\u6240\u793a:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  showTypeIcon: true,\n});\n'})}),"\n",(0,c.jsx)(n.h3,{id:"7-typeicon008-\u65b0\u589e",children:"7. typeIcon(0.0.8 \u65b0\u589e)"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u5c5e\u6027\u7528\u4e8e\u81ea\u5b9a\u4e49\u56fe\u6807\uff0c\u9700\u8981\u5c06 showTypeIcon \u8bbe\u7f6e\u4e3a true \u624d\u884c\uff0c\u5982\u679c\u9ed8\u8ba4\u7684\u56fe\u6807\u4e0d\u7b26\u5408\u9700\u6c42\uff0c\u53ef\u4ee5\u81ea\u5df1\u4f20\u5165\u4e00\u4e2a img \u6807\u7b7e\u6216\u8005 svg \u6807\u7b7e\u81ea\u5b9a\u4e49\u4e00\u4e2a\u56fe\u6807\uff0c\u6216\u8005\u662f\u4efb\u610f\u5143\u7d20\uff0c\u4e0d\u8fc7\u9700\u8981\u81ea\u5df1\u8c03\u6574\u56fe\u6807\u6837\u5f0f\uff0c\u53ef\u4ee5\u5b9a\u4e49",(0,c.jsx)(n.code,{children:"${prefix}-message-${type}-icon"}),"\u76f8\u5173\u7684\u7c7b\u540d\u6765\u4f7f\u7528\u9ed8\u8ba4\u7684\u6837\u5f0f,\u5176\u4e2d prefix \u7684\u503c\u4e3a\u524d\u7f00\u540d\u9ed8\u8ba4\u662f ew,type \u4e3a\u6d88\u606f\u63d0\u793a\u6846\u7c7b\u578b\uff0c\u5982 info\u3002\u5982\u4e0b\u6240\u793a:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  showTypeIcon: true,\n  typeIcon:\n    \'<svg t="1695191942528" class="ew-message-icon ew-message-info-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>\',\n});\n'})}),"\n",(0,c.jsx)(n.h3,{id:"8-closeicon008-\u65b0\u589e",children:"8. closeIcon(0.0.8 \u65b0\u589e)"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u5c5e\u6027\u7528\u4e8e\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u7684\u56fe\u6807\uff0c\u9700\u8981\u5c06 showClose \u8bbe\u7f6e\u4e3a true \u624d\u884c\uff0c\u5982\u679c\u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae\u56fe\u6807\u4e0d\u7b26\u5408\u9700\u6c42\uff0c\u53ef\u4ee5\u81ea\u5df1\u4f20\u5165\u4e00\u4e2a img \u6807\u7b7e\u6216\u8005 svg \u6807\u7b7e\u81ea\u5b9a\u4e49\u4e00\u4e2a\u56fe\u6807\uff0c\u6216\u8005\u662f\u4efb\u610f\u5143\u7d20\uff0c\u4e0d\u8fc7\u9700\u8981\u81ea\u5df1\u8c03\u6574\u56fe\u6807\u6837\u5f0f\uff0c\u53ef\u4ee5\u5b9a\u4e49",(0,c.jsx)(n.code,{children:"${prefix}-message-close-icon"}),"\u76f8\u5173\u7684\u7c7b\u540d\u6765\u4f7f\u7528\u9ed8\u8ba4\u7684\u6837\u5f0f,\u5176\u4e2d prefix \u7684\u503c\u4e3a\u524d\u7f00\u540d\uff0c\u9ed8\u8ba4\u662f ew\u3002\u5982:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'// \u4e0d\u63a8\u8350\u66ff\u6362\u9ed8\u8ba4\u7684\u56fe\u6807\nconst msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  showTypeIcon: true,\n  closeIcon:\n    \'<svg t="1695191942528" class="ew-message-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7731" id="mx_n_1695191942529"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 448v384h128V448H448z m0-256v128h128V192H448z" fill="#1677ff" p-id="7732"></path></svg>\',\n});\n'})}),"\n",(0,c.jsx)(n.h3,{id:"9-container009-\u65b0\u589e",children:"9. container(0.0.9 \u65b0\u589e)"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u6d88\u606f\u63d0\u793a\u6846\u6302\u8f7d\u7684\u5143\u7d20\uff0c\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a dom \u5143\u7d20\u5b57\u7b26\u4e32\u6216\u8005\u662f dom \u5143\u7d20\uff0c\u4e0d\u6ee1\u8db3\u5219\u4f1a\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7ed9\u51fa\u8b66\u544a\u63d0\u793a\uff0c\u9ed8\u8ba4\u503c\u662f body \u5143\u7d20\u3002\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  container: "#test",\n});\n// \u5c06\u6d88\u606f\u63d0\u793a\u6846\u6302\u8f7d\u5230\u9875\u9762\u5f53\u4e2did\u4e3atest\u7684\u5143\u7d20\u4e2d\n'})}),"\n",(0,c.jsx)(n.h3,{id:"10-removeclassname009-\u65b0\u589e015\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4",children:"10. removeClassName(0.0.9 \u65b0\u589e\uff0c0.1.5\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4)"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u5c5e\u6027\u7528\u4e8e\u5378\u8f7d\u6d88\u606f\u63d0\u793a\u6846\u65f6\u6dfb\u52a0\u7684\u52a8\u753b\u7c7b\u540d\uff0c\u76ee\u524d\u5185\u7f6e\u6709 fadeOut \u548c scaleDown \u52a8\u753b\u6548\u679c\uff0c\u5982\u6307\u5b9a\u4e86\u6b63\u786e\u7684\u52a8\u753b\u7c7b\u540d\u503c\uff0c\u5f53\u70b9\u51fb\u5173\u95ed\u6216\u8005\u662f\u81ea\u52a8\u5173\u95ed\u6d88\u606f\u63d0\u793a\u6846\u7684\u65f6\u5019\uff0c\u4f1a\u6709\u76f8\u5e94\u7684\u52a8\u753b\u6548\u679c,\u9ed8\u8ba4\u503c\u662f\u7a7a\u6570\u7ec4\uff0c\u5373\u6ca1\u6709\u52a8\u753b\u6548\u679c\u3002\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  removeClassName: ["fadeOut"], // \u6216\u8005\u4e5f\u53ef\u4ee5\u4f20\u5165ew-message-fadeOut\n});\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u7ed3\u5408",(0,c.jsx)(n.a,{href:"https://animate.style/",children:"animate.css"}),"\u6765\u4e3a\u79fb\u9664\u6d88\u606f\u63d0\u793a\u6846\u6dfb\u52a0\u5bf9\u5e94\u7684\u52a8\u753b\u6548\u679c\uff0c\u5982\u679c\u9875\u9762\u5f53\u4e2d\u5f15\u5165\u4e86\u8be5\u6837\u5f0f\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u4f20\u5165\u76f8\u5e94\u7684\u7c7b\u540d\uff0c\u5982:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'// \u5047\u8bbe\u9875\u9762\u5f15\u5165\u4e86animate.css\u6587\u4ef6\nconst msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  removeClassName: ["animate__animated","animate__bounce"],\n});\n'})}),"\n",(0,c.jsx)(n.h3,{id:"11-top011-\u65b0\u589e",children:"11. top(0.1.1 \u65b0\u589e)"}),"\n",(0,c.jsx)(n.p,{children:"\u7528\u4e8e\u81ea\u5b9a\u4e49\u6d88\u606f\u63d0\u793a\u6846\u7684 top \u504f\u79fb\u91cf\uff0c\u662f\u4e00\u4e2a number \u503c\u6216\u8005\u5b57\u7b26\u4e32\u503c\uff0c\u5982\u793a\u4f8b:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  top: 20,\n});\nconst msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  top: "15px",\n});\n'})}),"\n",(0,c.jsx)(n.h3,{id:"12-startclassname011-\u65b0\u589e015\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4",children:"12. startClassName(0.1.1 \u65b0\u589e,0.1.5\u8c03\u6574\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4)"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u5c5e\u6027\u7528\u4e8e\u6dfb\u52a0\u6d88\u606f\u63d0\u793a\u6846\u65f6\u6dfb\u52a0\u7684\u52a8\u753b\u7c7b\u540d\uff0c\u76ee\u524d\u5185\u7f6e\u6709 fadeIn \u548c scaleUp \u52a8\u753b\u6548\u679c\uff0c\u5982\u6307\u5b9a\u4e86\u6b63\u786e\u7684\u52a8\u753b\u7c7b\u540d\u503c\uff0c\u5f53\u6d88\u606f\u6846\u51fa\u73b0\u65f6\uff0c\u4f1a\u6709\u76f8\u5e94\u7684\u52a8\u753b\u6548\u679c,\u5ef6\u8fdf 1s \u4e4b\u540e\uff0c\u4f1a\u79fb\u9664\u52a8\u753b\u6548\u679c\u7c7b\u540d\u3002\u9ed8\u8ba4\u503c\u662f\u7a7a\u6570\u7ec4\uff0c\u5373\u6ca1\u6709\u52a8\u753b\u6548\u679c\u3002\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'const msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  removeClassName: ["fadeIn"], // \u6216\u8005\u4e5f\u53ef\u4ee5\u4f20\u5165ew-message-fadeIn\n});\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u7ed3\u5408",(0,c.jsx)(n.a,{href:"https://animate.style/",children:"animate.css"}),"\u6765\u4e3a\u79fb\u9664\u6d88\u606f\u63d0\u793a\u6846\u6dfb\u52a0\u5bf9\u5e94\u7684\u52a8\u753b\u6548\u679c\uff0c\u5982\u679c\u9875\u9762\u5f53\u4e2d\u5f15\u5165\u4e86\u8be5\u6837\u5f0f\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u4f20\u5165\u76f8\u5e94\u7684\u7c7b\u540d\uff0c\u5982:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:'// \u5047\u8bbe\u9875\u9762\u5f15\u5165\u4e86animate.css\u6587\u4ef6\nconst msg = ewMessage({\n  content: "\u8fd9\u662f\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d88\u606f\u63d0\u793a\u6846",\n  startClassName: ["animate__animated","animate__bounceIn"],\n});\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},5658:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var c=s(758);const t={},a=c.createContext(t);function o(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);