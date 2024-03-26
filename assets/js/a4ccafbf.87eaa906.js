"use strict";(self.webpackChunkinteractive_docs=self.webpackChunkinteractive_docs||[]).push([[831],{1029:(o,e,t)=>{t.r(e),t.d(e,{CH:()=>d,assets:()=>a,chCodeConfig:()=>D,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});t(6540);var n=t(4848),s=t(8453),r=t(4754);const c={sidebar_position:2,title:"Your First Rust Lambda",description:"Build your first Rust Lambda",keywords:["rust","lambda"]},l="Your First Lambda with Rust",i={id:"getting-started/your-first-lambda",title:"Your First Rust Lambda",description:"Build your first Rust Lambda",source:"@site/docs/getting-started/your-first-lambda.md",sourceDirName:"getting-started",slug:"/getting-started/your-first-lambda",permalink:"/serverless-rust.github.io/docs/getting-started/your-first-lambda",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Your First Rust Lambda",description:"Build your first Rust Lambda",keywords:["rust","lambda"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/serverless-rust.github.io/docs/category/getting-started"},next:{title:"Common Patterns",permalink:"/serverless-rust.github.io/docs/category/common-patterns"}},a={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Creating a Project",id:"creating-a-project",level:2},{value:"Exploring the Files",id:"exploring-the-files",level:2},{value:"Cargo.toml File",id:"cargotoml-file",level:3},{value:"Single source file",id:"single-source-file",level:3},{value:"Main Function",id:"main-function",level:4},{value:"Handler Function",id:"handler-function",level:4},{value:"Running the Lambda Locally",id:"running-the-lambda-locally",level:2},{value:"Congrats!",id:"congrats",level:2}],d={annotations:r.hk,Code:r.Cy,Section:r.wn,SectionLink:r.W_,SectionCode:r.bx},D={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:void 0,themeName:"dark-plus"};function h(o){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",img:"img",code:"code",h3:"h3",ul:"ul",li:"li",h4:"h4"},(0,s.R)(),o.components);return d||y("CH",!1),d.Code||y("CH.Code",!0),d.Section||y("CH.Section",!0),d.SectionCode||y("CH.SectionCode",!0),d.SectionLink||y("CH.SectionLink",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="dark-plus"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #D4D4D4;--ch-t-background: #1E1E1E;--ch-t-lighter-inlineBackground: #1e1e1ee6;--ch-t-editor-background: #1E1E1E;--ch-t-editor-foreground: #D4D4D4;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #007FD4;--ch-t-tab-activeBackground: #1E1E1E;--ch-t-tab-activeForeground: #ffffff;--ch-t-tab-inactiveBackground: #2D2D2D;--ch-t-tab-inactiveForeground: #ffffff80;--ch-t-tab-border: #252526;--ch-t-tab-activeBorder: #1E1E1E;--ch-t-editorGroup-border: #444444;--ch-t-editorGroupHeader-tabsBackground: #252526;--ch-t-editorLineNumber-foreground: #858585;--ch-t-input-background: #3C3C3C;--ch-t-input-foreground: #D4D4D4;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #252526;--ch-t-sideBar-foreground: #D4D4D4;--ch-t-sideBar-border: #252526;--ch-t-list-activeSelectionBackground: #094771;--ch-t-list-activeSelectionForeground: #fffffe;--ch-t-list-hoverBackground: #2A2D2E; }'}}),"\n",(0,n.jsx)(e.h1,{id:"your-first-lambda-with-rust",children:"Your First Lambda with Rust"}),"\n",(0,n.jsx)(e.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(e.p,{children:["Congratulations!  You've decided to build your first Lambda with Rust.  If you've never built a Lambda before, ",(0,n.jsx)(e.a,{href:"/serverless-rust.github.io/docs/fundamentals/how-lambda-works",children:"head over here"})," first and then come back.  This content will still be here."]}),"\n",(0,n.jsx)(e.h2,{id:"creating-a-project",children:"Creating a Project"}),"\n",(0,n.jsxs)(e.p,{children:["So many options to choose from, but for this first Lambda, we are going to use ",(0,n.jsx)(e.a,{href:"../fundamentals/ci-cd/cargo-lambda",children:"Cargo Lambda"})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(4575).A+"",loading:"lazy",alt:"Cargo Lambda New",width:"1614",height:"150"})}),"\n",(0,n.jsxs)(e.p,{children:["After running ",(0,n.jsx)(e.code,{children:"cargo lambda new your-first-project"}),", you'll see that Cargo Lambda creates the following project structure."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(5225).A+"",loading:"lazy",alt:"Cargo Lambda Project Structure",width:"920",height:"562"})}),"\n",(0,n.jsx)(e.h2,{id:"exploring-the-files",children:"Exploring the Files"}),"\n",(0,n.jsx)(e.h3,{id:"cargotoml-file",children:"Cargo.toml File"}),"\n",(0,n.jsxs)(e.p,{children:["If this is your first experience with Rust, you might not be familiar with the ",(0,n.jsx)(e.code,{children:"Cargo.toml"})," file and what's its purpose is.  Luckily, ",(0,n.jsx)(e.a,{href:"../fundamentals/cargo-toml",children:"there's a page"})," dedicated to that.  Head on over there first and then come back here.  And if you want some more detail on TOML or Tom's Obvious Minimal Lanuage, ",(0,n.jsx)(e.a,{href:"https://toml.io/en/",children:"this link"})," has you covered."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:D,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"[package]",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"name",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:'"your-first-lambda"',props:{style:{color:"#CE9178"}}}]},{tokens:[{content:"version",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:'"0.1.0"',props:{style:{color:"#CE9178"}}}]},{tokens:[{content:"edition",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:'"2021"',props:{style:{color:"#CE9178"}}}]},{tokens:[{content:"authors",props:{style:{color:"#9CDCFE"}}},{content:" = [",props:{style:{color:"#D4D4D4"}}},{content:'"Your Name Here"',props:{style:{color:"#CE9178"}}},{content:"]",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"[dependencies]",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"lambda_http",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:'"0.10.0"',props:{style:{color:"#CE9178"}}}]},{tokens:[{content:"",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"tokio",props:{style:{color:"#9CDCFE"}}},{content:" = { ",props:{style:{color:"#D4D4D4"}}},{content:"version",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:'"1"',props:{style:{color:"#CE9178"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:"features",props:{style:{color:"#9CDCFE"}}},{content:" = [",props:{style:{color:"#D4D4D4"}}},{content:'"macros"',props:{style:{color:"#CE9178"}}},{content:"] }",props:{style:{color:"#D4D4D4"}}}]}],lang:"toml"},annotations:[]}]}),"\n",(0,n.jsx)(e.p,{children:"A Rust Cargo.toml file allows you to define a great number of details about the way your crate or binary is represented in addition to the dependencies required."}),"\n",(0,n.jsxs)(e.p,{children:["In the ",(0,n.jsx)(e.code,{children:"[package]"})," section, you can define things like:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Name"}),"\n",(0,n.jsx)(e.li,{children:"Version"}),"\n",(0,n.jsx)(e.li,{children:"Authors"}),"\n",(0,n.jsx)(e.li,{children:"License."}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"[dependencies]"})," section is where the crates your function needs are defined.  A Rust dependency may look a little different than what you are used to."]}),"\n",(0,n.jsxs)(e.p,{children:["For instance, the ",(0,n.jsx)(e.code,{children:"lambda_http"})," dependency just includes a version after the ",(0,n.jsx)(e.code,{children:"="})," sign.  However, the tokio dependency is declaring a version and the features it wants to utilize.  Feature enablement in the dependencies section allows you to only include what you need.  This will further reduce binary size and build time."]}),"\n",(0,n.jsx)(e.h3,{id:"single-source-file",children:"Single source file"}),"\n",(0,n.jsxs)(d.Section,{codeConfig:D,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"#[tokio::main]",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"async fn ",props:{style:{color:"#569CD6"}}},{content:"main",props:{style:{color:"#DCDCAA"}}},{content:"() -> ",props:{style:{color:"#D4D4D4"}}},{content:"Result",props:{style:{color:"#4EC9B0"}}},{content:"<(), ",props:{style:{color:"#D4D4D4"}}},{content:"Error",props:{style:{color:"#4EC9B0"}}},{content:"> {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    tracing",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"init_default_subscriber",props:{style:{color:"#DCDCAA"}}},{content:"();",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    run",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"service_fn",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"function_handler",props:{style:{color:"#9CDCFE"}}},{content:")).",props:{style:{color:"#D4D4D4"}}},{content:"await",props:{style:{color:"#C586C0"}}}]},{tokens:[{content:"}",props:{style:{color:"#D4D4D4"}}}]}],lang:"rust"},annotations:[]}],children:[(0,n.jsx)(e.h4,{id:"main-function",children:"Main Function"}),(0,n.jsxs)(e.p,{children:["Rust is like a lot of languages that require a ",(0,n.jsx)(d.SectionLink,{focus:"1",id:"focus://1",children:(0,n.jsx)(e.code,{children:"main"})})," function as the entry point into your application.  A Rust Lambda looks just like a normal Rust console program."]}),(0,n.jsxs)(e.p,{children:["One thing to note is the ",(0,n.jsx)(d.SectionLink,{focus:"1[3:13]",id:"focus://1[3:13]",children:(0,n.jsx)(e.code,{children:"tokio macro"})})," macro.  Macros in Rust are signals to the compiler to generate some code based upon the macros' definition."]}),(0,n.jsxs)(e.p,{children:["The tokio macro allows the ",(0,n.jsx)(d.SectionLink,{focus:"2[10:14]",id:"focus://2[10:14]",children:(0,n.jsx)(e.code,{children:"main"})})," function to run asynchronous, which is what the Lambda handler function requires."]}),(0,n.jsx)(d.SectionCode,{}),(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"run"})," and ",(0,n.jsx)(e.code,{children:"service_fn"})," are a part of the ",(0,n.jsx)(e.code,{children:"lambda_http"})," crate that we saw in the Cargo.toml file.  The run function handles polling of the Lambda Runtime APIs."]})]}),"\n",(0,n.jsx)(e.h4,{id:"handler-function",children:"Handler Function"}),"\n",(0,n.jsxs)(d.Section,{codeConfig:D,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"async fn ",props:{style:{color:"#569CD6"}}},{content:"function_handler",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"event",props:{style:{color:"#9CDCFE"}}},{content:": ",props:{style:{color:"#D4D4D4"}}},{content:"Request",props:{style:{color:"#4EC9B0"}}},{content:") -> ",props:{style:{color:"#D4D4D4"}}},{content:"Result",props:{style:{color:"#4EC9B0"}}},{content:"<",props:{style:{color:"#D4D4D4"}}},{content:"Response",props:{style:{color:"#4EC9B0"}}},{content:"<",props:{style:{color:"#D4D4D4"}}},{content:"Body",props:{style:{color:"#4EC9B0"}}},{content:">, ",props:{style:{color:"#D4D4D4"}}},{content:"Error",props:{style:{color:"#4EC9B0"}}},{content:"> {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"// Extract some useful information from the request",props:{style:{color:"#6A9955"}}}]},{tokens:[{content:"    let ",props:{style:{color:"#569CD6"}}},{content:"who",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:"event",props:{style:{color:"#9CDCFE"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"query_string_parameters_ref",props:{style:{color:"#DCDCAA"}}},{content:"()",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"and_then",props:{style:{color:"#DCDCAA"}}},{content:"(|",props:{style:{color:"#D4D4D4"}}},{content:"params",props:{style:{color:"#9CDCFE"}}},{content:"| ",props:{style:{color:"#D4D4D4"}}},{content:"params",props:{style:{color:"#9CDCFE"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"first",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"name"',props:{style:{color:"#CE9178"}}},{content:"))",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"unwrap_or",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"world"',props:{style:{color:"#CE9178"}}},{content:");",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    let ",props:{style:{color:"#569CD6"}}},{content:"message",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:"format!",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"Hello {who}, this is an AWS Lambda HTTP request"',props:{style:{color:"#CE9178"}}},{content:");",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    // Return something that implements IntoResponse.",props:{style:{color:"#6A9955"}}}]},{tokens:[{content:"    // It will be serialized to the right response event automatically by the runtime",props:{style:{color:"#6A9955"}}}]},{tokens:[{content:"    let ",props:{style:{color:"#569CD6"}}},{content:"resp",props:{style:{color:"#9CDCFE"}}},{content:" = ",props:{style:{color:"#D4D4D4"}}},{content:"Response",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"builder",props:{style:{color:"#DCDCAA"}}},{content:"()",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"status",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"200",props:{style:{color:"#B5CEA8"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"header",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:'"content-type"',props:{style:{color:"#CE9178"}}},{content:", ",props:{style:{color:"#D4D4D4"}}},{content:'"application/json"',props:{style:{color:"#CE9178"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"body",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"message",props:{style:{color:"#9CDCFE"}}},{content:".",props:{style:{color:"#D4D4D4"}}},{content:"into",props:{style:{color:"#DCDCAA"}}},{content:"())",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"        .",props:{style:{color:"#D4D4D4"}}},{content:"map_err",props:{style:{color:"#DCDCAA"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"Box",props:{style:{color:"#4EC9B0"}}},{content:"::",props:{style:{color:"#D4D4D4"}}},{content:"new",props:{style:{color:"#9CDCFE"}}},{content:")?;",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    Ok",props:{style:{color:"#4EC9B0"}}},{content:"(",props:{style:{color:"#D4D4D4"}}},{content:"resp",props:{style:{color:"#9CDCFE"}}},{content:")",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"}",props:{style:{color:"#D4D4D4"}}}]}],lang:"rust"},annotations:[]}],children:[(0,n.jsxs)(e.p,{children:["Let's take a look through this handler that was created when running ",(0,n.jsx)(e.code,{children:"cargo new"}),"."]}),(0,n.jsx)(d.SectionCode,{}),(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(d.SectionLink,{focus:"3:7",id:"focus://3:7",children:"first part of this handler"}),' is extracting name from the query string parameters.  If the there are no parameters, then when the parameter is unwrapped, if empty it will return "world".']}),(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(d.SectionLink,{focus:"11:15",id:"focus://11:15",children:"second half of the function"})," is to build the Response object, set the status to 200, and then set the content type to ",(0,n.jsx)(e.code,{children:"application/json"}),"."]}),(0,n.jsxs)(e.p,{children:["One thing that might look a touch odd if you are new to Rust is this ",(0,n.jsx)(d.SectionLink,{focus:"16[5:13]",id:"focus://16[5:13]",children:(0,n.jsx)(e.code,{children:"Ok(resp)"})}),".  Rust makes use of a Enums quite a bit.  Enums in Rust are a bit different than other languages.  For now, just know that the ",(0,n.jsx)(e.code,{children:"Result"})," enum can either be a value or an Error.  ",(0,n.jsx)(e.code,{children:"Ok()"})," returns the value portion of the Result enum.  In this case, the response."]})]}),"\n",(0,n.jsx)(e.h2,{id:"running-the-lambda-locally",children:"Running the Lambda Locally"}),"\n",(0,n.jsx)(e.p,{children:"Cargo Lambda does more than generate a project structure.  It also provides a local testing engine.  In order to test your new Lambda function first do the following."}),"\n",(0,n.jsx)(e.p,{children:"In a separate terminal window run the following command in the project directory."}),"\n",(0,n.jsx)(d.Code,{codeConfig:D,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"cargo ",props:{style:{color:"#D4D4D4"}}},{content:"lambda watch",props:{style:{color:"#CE9178"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(e.p,{children:"What you'll see is your Lambda code will first be compiled and then Cargo Lambda will be \"watching\" for changes.  What's nice about this approach is that it's quick and responsive so that as you change code in your handler, it'll be ready to execute."}),"\n",(0,n.jsx)(e.p,{children:"Now in the opposite terminal, you need to send a test event to your Lambda in order to exercise the functionality."}),"\n",(0,n.jsx)(d.Code,{codeConfig:D,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"cargo ",props:{style:{color:"#D4D4D4"}}},{content:"lambda invoke --data-example apigw-request",props:{style:{color:"#CE9178"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsxs)(e.p,{children:["Running invoke with ",(0,n.jsx)(e.code,{children:"--data-example"})," will pull example requests from the Cargo Lambda GitHub repository.  For this first Lambda, a sample request is just fine."]}),"\n",(0,n.jsx)(e.p,{children:"The output for running the above will look like the below."}),"\n",(0,n.jsx)(d.Code,{codeConfig:D,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'    "statusCode"',props:{style:{color:"#9CDCFE"}}},{content:": ",props:{style:{color:"#D4D4D4"}}},{content:"200",props:{style:{color:"#B5CEA8"}}},{content:",",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'    "headers"',props:{style:{color:"#9CDCFE"}}},{content:": {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'        "content-type"',props:{style:{color:"#9CDCFE"}}},{content:": ",props:{style:{color:"#D4D4D4"}}},{content:'"application/json"',props:{style:{color:"#CE9178"}}}]},{tokens:[{content:"    },",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'    "multiValueHeaders"',props:{style:{color:"#9CDCFE"}}},{content:": {",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'        "content-type"',props:{style:{color:"#9CDCFE"}}},{content:": [",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'            "application/json"',props:{style:{color:"#CE9178"}}}]},{tokens:[{content:"        ]",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:"    },",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'    "body"',props:{style:{color:"#9CDCFE"}}},{content:": ",props:{style:{color:"#D4D4D4"}}},{content:'"Hello me, this is an AWS Lambda HTTP request"',props:{style:{color:"#CE9178"}}},{content:",",props:{style:{color:"#D4D4D4"}}}]},{tokens:[{content:'    "isBase64Encoded"',props:{style:{color:"#9CDCFE"}}},{content:": ",props:{style:{color:"#D4D4D4"}}},{content:"false",props:{style:{color:"#569CD6"}}}]},{tokens:[{content:"}",props:{style:{color:"#D4D4D4"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsx)(e.h2,{id:"congrats",children:"Congrats!"}),"\n",(0,n.jsx)(e.p,{children:"You have now built and tested your first Lambda and Rust function!"})]})}const u=function(o={}){const{wrapper:e}=Object.assign({},(0,s.R)(),o.components);return e?(0,n.jsx)(e,Object.assign({},o,{children:(0,n.jsx)(h,o)})):h(o)};function y(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},4575:(o,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/cargo_lambda_new-20018602c527af8ac201735e44f31905.png"},5225:(o,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/cargo_lambda_new_project_files-fb374e1a57f070b8adbb8506ee613717.png"}}]);