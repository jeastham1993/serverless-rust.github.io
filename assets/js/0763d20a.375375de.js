"use strict";(self.webpackChunkinteractive_docs=self.webpackChunkinteractive_docs||[]).push([[406],{1042:(o,t,e)=>{e.r(t),e.d(t,{CH:()=>a,assets:()=>i,chCodeConfig:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>D});e(6540);var n=e(4848),s=e(8453),r=e(4754);const l={sidebar_position:1,title:"CORS Origin Allow List",description:"Cross-Origin Resource Sharing origin allow list",keywords:["rust","lambda","api gateway","cors"]},c=void 0,p={id:"patterns/api-patterns/cors-domain-allow-list",title:"CORS Origin Allow List",description:"Cross-Origin Resource Sharing origin allow list",source:"@site/docs/patterns/api-patterns/cors-domain-allow-list.md",sourceDirName:"patterns/api-patterns",slug:"/patterns/api-patterns/cors-domain-allow-list",permalink:"/serverless-rust.github.io/docs/patterns/api-patterns/cors-domain-allow-list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"CORS Origin Allow List",description:"Cross-Origin Resource Sharing origin allow list",keywords:["rust","lambda","api gateway","cors"]},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/serverless-rust.github.io/docs/category/api"},next:{title:"Lambda Function per Verb",permalink:"/serverless-rust.github.io/docs/patterns/api-patterns/cdk-cargo-lambda-lambda-per-verb-ddb"}},i={},D=[{value:"Sample Solution",id:"sample-solution",level:2},{value:"Main Function",id:"main-function",level:3},{value:"Handler Function",id:"handler-function",level:3},{value:"Check the Allow List",id:"check-the-allow-list",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2},{value:"Congrats",id:"congrats",level:2}],a={annotations:r.hk,Section:r.wn,SectionLink:r.W_,SectionCode:r.bx},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:void 0,themeName:"dark-plus"};function y(o){const t=Object.assign({p:"p",h2:"h2",a:"a",img:"img",ol:"ol",li:"li",h3:"h3",code:"code"},(0,s.R)(),o.components);return a||C("CH",!1),a.Section||C("CH.Section",!0),a.SectionCode||C("CH.SectionCode",!0),a.SectionLink||C("CH.SectionLink",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dark-plus"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #D4D4D4;--ch-t-background: #1E1E1E;--ch-t-lighter-inlineBackground: #1e1e1ee6;--ch-t-editor-background: #1E1E1E;--ch-t-editor-foreground: #D4D4D4;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #007FD4;--ch-t-tab-activeBackground: #1E1E1E;--ch-t-tab-activeForeground: #ffffff;--ch-t-tab-inactiveBackground: #2D2D2D;--ch-t-tab-inactiveForeground: #ffffff80;--ch-t-tab-border: #252526;--ch-t-tab-activeBorder: #1E1E1E;--ch-t-editorGroup-border: #444444;--ch-t-editorGroupHeader-tabsBackground: #252526;--ch-t-editorLineNumber-foreground: #858585;--ch-t-input-background: #3C3C3C;--ch-t-input-foreground: #D4D4D4;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #252526;--ch-t-sideBar-foreground: #D4D4D4;--ch-t-sideBar-border: #252526;--ch-t-list-activeSelectionBackground: #094771;--ch-t-list-activeSelectionForeground: #fffffe;--ch-t-list-hoverBackground: #2A2D2E; }'}}),"\n",(0,n.jsx)(t.p,{children:"Working with Cross-Origin Resource Sharing (CORS) is not something many developers look forward to doing.  Add in the fact that when building a private API there are requirements to respond correctly and safely with the proper Origin.  AWS' API Gateway thankfully allows a builder to response to OPTIONS requests with a custom implementation."}),"\n",(0,n.jsx)(t.p,{children:"In this article we are going to look at using a Lambda Function to respond to an OPTIONS request that validates the Origin header against a list of allowed origins.  Also known as an allow list."}),"\n",(0,n.jsx)(t.h2,{id:"sample-solution",children:"Sample Solution"}),"\n",(0,n.jsxs)(t.p,{children:["A template for this pattern can be found under the ",(0,n.jsx)(t.a,{href:"https://github.com/jeastham1993/serverless-rust.github.io/tree/main/templates/patterns/api-patterns/cors-allow-list/",children:"./templates"})," directory in the GitHub repo. You can use the template to get started building an API Gateway CORS allow list with a Lambda Function."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:e(4265).A+"",loading:"lazy",alt:"API Gateway CORS",width:"1313",height:"476"})}),"\n",(0,n.jsxs)(t.p,{children:["A nice thing about using a Lambda Function for handling CORS is that API Gateway can send a standard Proxy Request payload into the function just like other endpoints.  That pattern of handling a proxy request can be further explored in the ",(0,n.jsx)(t.a,{href:"/serverless-rust.github.io/docs/patterns/api-patterns/cdk-cargo-lambda-lambda-per-verb-ddb",children:"Lambda Function per Verb"})," article."]}),"\n",(0,n.jsx)(t.p,{children:"Below are three aspects of this sample solution."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Main function"}),"\n",(0,n.jsx)(t.li,{children:"Lambda handler code"}),"\n",(0,n.jsx)(t.li,{children:"Checking the origin against the allow list"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Let's dive in and look at the code!"}),"\n",(0,n.jsx)(t.h3,{id:"main-function",children:"Main Function"}),"\n",(0,n.jsxs)(a.Section,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"#[tokio::main]",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"async fn ",props:{style:{color:"#569CD6"}}},{content:"main",props:{style:{color:"#DCDCAA"}}},{content:"() -> ",props:{style:{color:"#D4D4D4"}}},{content:"Result",props:{style:{color:"#4EC9B0"}}},{content:"<(), ",props:{style:{color:"#D4D4D4"}}},{content:"Error",props:{style:{color:"#4EC9B0"}}},{content:"> {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    tracing_subscriber",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"fmt",props:{style:{color:"#DCDCAA"}}},{content:"()",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"with_max_level",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"tracing",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"Level",props:{style:{color:"#4EC9B0"}}},{content:"::INFO)",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"with_target",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"false",props:{style:{color:"#569CD6"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"json",props:{style:{color:"#DCDCAA"}}},{content:"()",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"init",props:{style:{color:"#DCDCAA"}}},{content:"();",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    let ",props:{style:{color:"#569CD6"}}},{content:"origins",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:"env",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"var",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"ALLOWED_ORIGINS"',props:{style:{color:"#CE9178"}}},{content:").",props:{style:{color:"#D4D4D4"}}},{content:"expect",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"ALLOWED_ORIGINS must be set"',props:{style:{color:"#CE9178"}}},{content:");",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    let ",props:{style:{color:"#569CD6"}}},{content:"allowed_origins",props:{style:{color:"#9CDCFE"}}},{content:" = &",props:{style:{color:"#D4D4D4"}}},{content:"origins",props:{style:{color:"#9CDCFE"}}},{content:";",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    run",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"service_fn",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"move",props:{style:{color:"#569CD6"}}},{content:" |",props:{style:{color:"#D4D4D4"}}},{content:"payload",props:{style:{color:"#9CDCFE"}}},{content:": ",props:{style:{color:"#D4D4D4"}}},{content:"Request",props:{style:{color:"#4EC9B0"}}},{content:"| ",props:{style:{color:"#D4D4D4"}}},{content:"async move",props:{style:{color:"#569CD6"}}},{content:" {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        function_handler",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"allowed_origins",props:{style:{color:"#9CDCFE"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:"payload",props:{style:{color:"#9CDCFE"}}},{content:").",props:{style:{color:"#D4D4D4"}}},{content:"await",props:{style:{color:"#C586C0"}}}]},{tokens:[{content:"    })).",props:{style:{color:"#D4D4D4"}}},{content:"await",props:{style:{color:"#C586C0"}}}]},{tokens:[{content:"}",props:{style:{color:"#D4D4D4"}}}]}],lang:"rust"},annotations:[]}],children:[(0,n.jsxs)(t.p,{children:["All Lambda Functions in Rust have a ",(0,n.jsx)(a.SectionLink,{focus:"2",id:"focus://2",children:(0,n.jsx)(t.code,{children:"main"})})," function entry point.  It's the first function that is called and helps initialize defaults or items that'll be used throughout the lifecycle of the request. The main function in this sample includes the ",(0,n.jsx)(a.SectionLink,{focus:"1",id:"focus://1",children:(0,n.jsx)(t.code,{children:"Tokio"})})," macro so that this main can run asynchronous code."]}),(0,n.jsxs)(t.p,{children:["The key thing to note is that I'm requiring a variable called ",(0,n.jsx)(a.SectionLink,{focus:"9[29:43]",id:"focus://9[29:43]",children:(0,n.jsx)(t.code,{children:"ALLOWED_ORIGINS"})})," which is a comma-separated list of acceptable domains and allowed by this CORS function.  Imagine though that you have a larger list of allowed domains?  This could be pivoted to a DynamoDB table or a cache."]}),(0,n.jsx)(a.SectionCode,{})]}),"\n",(0,n.jsx)(t.h3,{id:"handler-function",children:"Handler Function"}),"\n",(0,n.jsxs)(a.Section,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"async fn ",props:{style:{color:"#569CD6"}}},{content:"function_handler",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    allowed_origins",props:{style:{color:"#9CDCFE"}}},{content:": &",props:{style:{color:"#D4D4D4"}}},{content:"str",props:{style:{color:"#4EC9B0"}}},{content:",",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    event",props:{style:{color:"#9CDCFE"}}},{content:": ",props:{style:{color:"#D4D4D4"}}},{content:"Request",props:{style:{color:"#4EC9B0"}}},{content:",",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:") -> ",props:{style:{color:"#D4D4D4"}}},{content:"Result",props:{style:{color:"#4EC9B0"}}},{content:"<",props:{style:{color:"#D4D4D4"}}},{content:"impl ",props:{style:{color:"#569CD6"}}},{content:"IntoResponse",props:{style:{color:"#4EC9B0"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:"Error",props:{style:{color:"#4EC9B0"}}},{content:"> {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    match ",props:{style:{color:"#C586C0"}}},{content:"get_origin",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"event",props:{style:{color:"#9CDCFE"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"headers",props:{style:{color:"#DCDCAA"}}},{content:"(), ",props:{style:{color:"#D4D4D4"}}},{content:"allowed_origins",props:{style:{color:"#9CDCFE"}}},{content:") {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        Some",props:{style:{color:"#4EC9B0"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"origin",props:{style:{color:"#9CDCFE"}}},{content:") => {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            let ",props:{style:{color:"#569CD6"}}},{content:"response",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:"Response",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"builder",props:{style:{color:"#DCDCAA"}}},{content:"()",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"status",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"StatusCode",props:{style:{color:"#4EC9B0"}}},{content:"::OK)",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"header",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"Access-Control-Allow-Origin"',props:{style:{color:"#CE9178"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:"origin",props:{style:{color:"#9CDCFE"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"header",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"Access-Control-Allow-Headers"',props:{style:{color:"#CE9178"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:'"Content-Type"',props:{style:{color:"#CE9178"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"header",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"Access-Control-Allow-Methods"',props:{style:{color:"#CE9178"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:'"GET, PUT, DELETE, POST, OPTIONS, PATCH"',props:{style:{color:"#CE9178"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"body",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'""',props:{style:{color:"#CE9178"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"to_string",props:{style:{color:"#DCDCAA"}}},{content:"())",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"map_err",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"Box",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"new",props:{style:{color:"#9CDCFE"}}},{content:")?;",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            Ok",props:{style:{color:"#4EC9B0"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"response",props:{style:{color:"#9CDCFE"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        }",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        None",props:{style:{color:"#4EC9B0"}}},{content:" => {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            let ",props:{style:{color:"#569CD6"}}},{content:"response",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:"Response",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"builder",props:{style:{color:"#DCDCAA"}}},{content:"()",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"status",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"StatusCode",props:{style:{color:"#4EC9B0"}}},{content:"::BAD_REQUEST)",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"body",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'""',props:{style:{color:"#CE9178"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"to_string",props:{style:{color:"#DCDCAA"}}},{content:"())",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                .",props:{style:{color:"#D4D4D4"}}},{content:"map_err",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"Box",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"new",props:{style:{color:"#9CDCFE"}}},{content:")?;",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            Ok",props:{style:{color:"#4EC9B0"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"response",props:{style:{color:"#9CDCFE"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        }",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    }",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"}",props:{style:{color:"#D4D4D4"}}}]}],lang:"rust"},annotations:[]}],children:[(0,n.jsxs)(t.p,{children:["The handler takes a pointer to the ",(0,n.jsx)(a.SectionLink,{focus:"2",id:"focus://2",children:(0,n.jsx)(t.code,{children:"allow list"})})," string and the incoming request that will have a header HeaderMap.  I then pair it with a ",(0,n.jsx)(a.SectionLink,{focus:"5[10:20]",id:"focus://5[10:20]",children:(0,n.jsx)(t.code,{children:"get_origin"})})," function that checks the allow list for the value in the Origin header."]}),(0,n.jsx)(t.p,{children:"We'll have a look at that function next, but let's explore the results of it first."}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(a.SectionLink,{focus:"5",id:"focus://5",children:(0,n.jsx)(t.code,{children:"match"})})," line highlights that I'm returning an Option from that function which helps drive the response back to the caller.  In the case of ",(0,n.jsx)(a.SectionLink,{focus:"6",id:"focus://6",children:(0,n.jsx)(t.code,{children:"Some"})}),", I'm building a successful response with the single domain returned in the origin.  You cannot return a list of domains back.  And be careful, you don't want to just \"mirror\" the incoming domain, which is why I have the allow list."]}),(0,n.jsxs)(t.p,{children:["In the case of ",(0,n.jsx)(a.SectionLink,{focus:"16",id:"focus://16",children:(0,n.jsx)(t.code,{children:"None"})}),", I'm returning a 400 BAD_REQUEST."]}),(0,n.jsx)(a.SectionCode,{})]}),"\n",(0,n.jsx)(t.h3,{id:"check-the-allow-list",children:"Check the Allow List"}),"\n",(0,n.jsxs)(a.Section,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"fn ",props:{style:{color:"#569CD6"}}},{content:"get_origin",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"headers",props:{style:{color:"#9CDCFE"}}},{content:": &",props:{style:{color:"#D4D4D4"}}},{content:"HeaderMap",props:{style:{color:"#4EC9B0"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:"allowed_origins",props:{style:{color:"#9CDCFE"}}},{content:": &",props:{style:{color:"#D4D4D4"}}},{content:"str",props:{style:{color:"#4EC9B0"}}},{content:") -> ",props:{style:{color:"#D4D4D4"}}},{content:"Option",props:{style:{color:"#4EC9B0"}}},{content:"<",props:{style:{color:"#D4D4D4"}}},{content:"String",props:{style:{color:"#4EC9B0"}}},{content:"> {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    return match ",props:{style:{color:"#C586C0"}}},{content:"headers",props:{style:{color:"#9CDCFE"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"get",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"origin"',props:{style:{color:"#CE9178"}}},{content:") {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        Some",props:{style:{color:"#4EC9B0"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"origin",props:{style:{color:"#9CDCFE"}}},{content:") => {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            let ",props:{style:{color:"#569CD6"}}},{content:"s",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:"allowed_origins",props:{style:{color:"#9CDCFE"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"split",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"','",props:{style:{color:"#CE9178"}}},{content:");",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            for ",props:{style:{color:"#C586C0"}}},{content:"o ",props:{style:{color:"#9CDCFE"}}},{content:"in ",props:{style:{color:"#569CD6"}}},{content:"s",props:{style:{color:"#9CDCFE"}}},{content:" {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                if ",props:{style:{color:"#C586C0"}}},{content:"o",props:{style:{color:"#9CDCFE"}}},{content:" == ",props:{style:{color:"#D4D4D4"}}},{content:"origin",props:{style:{color:"#9CDCFE"}}},{content:" {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                    return ",props:{style:{color:"#C586C0"}}},{content:"Some",props:{style:{color:"#4EC9B0"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"o",props:{style:{color:"#9CDCFE"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"to_string",props:{style:{color:"#DCDCAA"}}},{content:"());",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"                }",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            }",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            None",props:{style:{color:"#4EC9B0"}}}]},{tokens:[{content:"        }",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        None",props:{style:{color:"#4EC9B0"}}},{content:" => {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"            None",props:{style:{color:"#4EC9B0"}}}]},{tokens:[{content:"        }",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    };",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"}",props:{style:{color:"#D4D4D4"}}}]}],lang:"rust"},annotations:[]}],children:[(0,n.jsxs)(t.p,{children:["Now let's explore the ",(0,n.jsx)(a.SectionLink,{focus:"1",id:"focus://1",children:(0,n.jsx)(t.code,{children:"get_origin"})})," function and its simple purpose.  It will inspect the HeaderMap, verify that the Origin key exists and then compares it against the allow list."]}),(0,n.jsxs)(t.p,{children:["If any of those checks fail, it will return ",(0,n.jsx)(t.code,{children:"None"})," back to the handler code so it can then return the 400 BAD_REQUEST as seen above."]}),(0,n.jsxs)(t.p,{children:["But if things go well, the origin is returned back in a ",(0,n.jsx)(a.SectionLink,{focus:"7",id:"focus://7",children:(0,n.jsx)(t.code,{children:"Some"})})," statement."]}),(0,n.jsx)(a.SectionCode,{})]}),"\n",(0,n.jsx)(t.h2,{id:"wrapping-up",children:"Wrapping Up"}),"\n",(0,n.jsx)(t.p,{children:"CORS can be tricky sometimes.  It can also add overhead if you are doing checks when building an allow list when you need to be able to return success for a specific origin.  By using Lambda Functions with Rust you gain the flexibility to check the allow list that meets your needs but also do it in a highly-performant way because it's coded in Rust.  There are places to take this further but this example should be a great starting point for those explorations."}),"\n",(0,n.jsx)(t.h2,{id:"congrats",children:"Congrats"}),"\n",(0,n.jsx)(t.p,{children:"Congratulations, you know have a starting point to build a Lambda Function coded in Rust to handle a custom allow list with API Gateway and CORS,"})]})}const h=function(o={}){const{wrapper:t}=Object.assign({},(0,s.R)(),o.components);return t?(0,n.jsx)(t,Object.assign({},o,{children:(0,n.jsx)(y,o)})):y(o)};function C(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},4265:(o,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/CORS-9798579a34f66f2210f5f01b52184374.png"}}]);