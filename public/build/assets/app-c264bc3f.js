import{_ as t}from"./preload-helper-41c905a7.js";import"./time-c9c2480a.js";import{b as w,n as I,a as L}from"./components-df77eb29.js";import{c as m,n as y}from"./bootstrap-7153a776.js";import{N as V}from"./ns-hotpress-fbaed768.js";import{d as e}from"./runtime-core.esm-bundler-414a078a.js";import"./ns-prompt-popup-0191f190.js";import"./currency-feccde3d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ns-avatar-image-1a727bdf.js";import"./index.es-25aa42ee.js";import"./chart-2ccf8ff7.js";function O(o,_){_.forEach(a=>{let r=o.document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",a),o.document.getElementsByTagName("head")[0].appendChild(r)})}const S={install(o,_={}){o.config.globalProperties.$htmlToPaper=(a,r,D=()=>!0)=>{let P="_blank",R=["fullscreen=yes","titlebar=yes","scrollbars=yes"],v=!0,T=[],{name:u=P,specs:i=R,replace:A=v,styles:p=T}=_;r&&(r.name&&(u=r.name),r.specs&&(i=r.specs),r.replace&&(A=r.replace),r.styles&&(p=r.styles)),i=i.length?i.join(","):"";const l=window.document.getElementById(a);if(!l){alert(`Element to print #${a} not found!`);return}const f="",s=window.open(f,u,i);return s.document.write(`
          <html>
            <head>
              <title>${window.document.title}</title>
            </head>
            <body>
              ${l.innerHTML}
            </body>
          </html>
        `),O(s,p),setTimeout(()=>{s.document.close(),s.focus(),s.print(),s.close(),D()},1e3),!0}}},g=e(()=>t(()=>import("./rewards-system-8114d1df.js"),["./rewards-system-8114d1df.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),C=e(()=>t(()=>import("./create-coupons-636702c9.js"),["./create-coupons-636702c9.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),k=e(()=>t(()=>import("./ns-settings-a89b2807.js"),["./ns-settings-a89b2807.js","./currency-feccde3d.js","./bootstrap-7153a776.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js"],import.meta.url)),H=e(()=>t(()=>import("./reset-5db6e9b9.js"),["./reset-5db6e9b9.js","./currency-feccde3d.js","./bootstrap-7153a776.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),M=e(()=>t(()=>import("./modules-ce33a33c.js"),["./modules-ce33a33c.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./index.es-25aa42ee.js"],import.meta.url)),j=e(()=>t(()=>import("./ns-permissions-4762dfbb.js"),["./ns-permissions-4762dfbb.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),N=e(()=>t(()=>import("./ns-procurement-a6b5f359.js"),["./ns-procurement-a6b5f359.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./manage-products-b85e8c0c.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./select-api-entities-2793a7f3.js","./join-array-28744963.js","./index.es-25aa42ee.js"],import.meta.url)),q=e(()=>t(()=>import("./manage-products-b85e8c0c.js"),["./manage-products-b85e8c0c.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),x=e(()=>t(()=>import("./ns-procurement-invoice-b9a1ca34.js"),[],import.meta.url)),$=e(()=>t(()=>import("./ns-notifications-9c95acf8.js"),["./ns-notifications-9c95acf8.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./components-df77eb29.js","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js"],import.meta.url)),B=e(()=>t(()=>import("./components-df77eb29.js").then(o=>o.j),["./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./currency-feccde3d.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-414a078a.js","./bootstrap-7153a776.js","./chart-2ccf8ff7.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js"],import.meta.url)),F=e(()=>t(()=>import("./ns-transaction-efd2d8cd.js"),["./ns-transaction-efd2d8cd.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./index.es-25aa42ee.js"],import.meta.url)),Y=e(()=>t(()=>import("./ns-dashboard-1b6b26ed.js"),["./ns-dashboard-1b6b26ed.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),z=e(()=>t(()=>import("./ns-low-stock-report-cc1e4e19.js"),["./ns-low-stock-report-cc1e4e19.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js","./join-array-28744963.js"],import.meta.url)),G=e(()=>t(()=>import("./ns-sale-report-f703f378.js"),["./ns-sale-report-f703f378.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js","./join-array-28744963.js"],import.meta.url)),J=e(()=>t(()=>import("./ns-sold-stock-report-f646de6c.js"),["./ns-sold-stock-report-f646de6c.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js","./select-api-entities-2793a7f3.js","./join-array-28744963.js"],import.meta.url)),K=e(()=>t(()=>import("./ns-profit-report-9b88d8d7.js"),["./ns-profit-report-9b88d8d7.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js","./select-api-entities-2793a7f3.js","./join-array-28744963.js"],import.meta.url)),Q=e(()=>t(()=>import("./ns-stock-combined-report-44b1cc70.js"),["./ns-stock-combined-report-44b1cc70.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./select-api-entities-2793a7f3.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./join-array-28744963.js"],import.meta.url)),U=e(()=>t(()=>import("./ns-cash-flow-report-9cd769ee.js"),["./ns-cash-flow-report-9cd769ee.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js"],import.meta.url)),W=e(()=>t(()=>import("./ns-yearly-report-da1260b1.js"),["./ns-yearly-report-da1260b1.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js"],import.meta.url)),X=e(()=>t(()=>import("./ns-best-products-report-f311b363.js"),["./ns-best-products-report-f311b363.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js"],import.meta.url)),Z=e(()=>t(()=>import("./ns-payment-types-report-c6e47607.js"),["./ns-payment-types-report-c6e47607.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./components-df77eb29.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./ns-avatar-image-1a727bdf.js","./index.es-25aa42ee.js"],import.meta.url)),tt=e(()=>t(()=>import("./ns-customers-statement-report-b8e1dc49.js"),["./ns-customers-statement-report-b8e1dc49.js","./currency-feccde3d.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-414a078a.js"],import.meta.url)),et=e(()=>t(()=>import("./ns-stock-adjustment-d835be21.js"),["./ns-stock-adjustment-d835be21.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./ns-procurement-quantity-7a004e99.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-0191f190.js","./ns-prompt-popup-6013118d.css"],import.meta.url)),ot=e(()=>t(()=>import("./ns-order-invoice-0167d283.js"),["./ns-order-invoice-0167d283.js","./currency-feccde3d.js","./_plugin-vue_export-helper-c27b6911.js","./runtime-core.esm-bundler-414a078a.js"],import.meta.url)),rt=e(()=>t(()=>import("./ns-print-label-9a528c36.js"),["./ns-print-label-9a528c36.js","./currency-feccde3d.js","./runtime-core.esm-bundler-414a078a.js","./bootstrap-7153a776.js","./chart-2ccf8ff7.js","./_plugin-vue_export-helper-c27b6911.js"],import.meta.url)),st=e(()=>t(()=>import("./ns-transactions-rules-e9e44503.js"),["./ns-transactions-rules-e9e44503.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./index.es-25aa42ee.js","./ns-prompt-popup-0191f190.js","./_plugin-vue_export-helper-c27b6911.js","./ns-prompt-popup-6013118d.css","./components-df77eb29.js","./ns-avatar-image-1a727bdf.js"],import.meta.url)),n=window.nsState,nt=window.nsScreen;nsExtraComponents.nsToken=e(()=>t(()=>import("./ns-token-4b2f7d9a.js"),["./ns-token-4b2f7d9a.js","./bootstrap-7153a776.js","./currency-feccde3d.js","./chart-2ccf8ff7.js","./runtime-core.esm-bundler-414a078a.js","./_plugin-vue_export-helper-c27b6911.js","./index.es-25aa42ee.js","./ns-prompt-popup-0191f190.js","./ns-prompt-popup-6013118d.css"],import.meta.url));window.nsHotPress=new V;const d=Object.assign({nsModules:M,nsRewardsSystem:g,nsCreateCoupons:C,nsManageProducts:q,nsSettings:k,nsReset:H,nsPermissions:j,nsProcurement:N,nsProcurementInvoice:x,nsMedia:B,nsTransaction:F,nsDashboard:Y,nsPrintLabel:rt,nsNotifications:$,nsSaleReport:G,nsSoldStockReport:J,nsProfitReport:K,nsStockCombinedReport:Q,nsCashFlowReport:U,nsYearlyReport:W,nsPaymentTypesReport:Z,nsBestProductsReport:X,nsLowStockReport:z,nsCustomersStatementReport:tt,nsTransactionsRules:st,nsStockAdjustment:et,nsOrderInvoice:ot,...w},nsExtraComponents);window.nsDashboardAside=m({data(){return{sidebar:"visible",popups:[]}},components:{nsMenu:I,nsSubmenu:L},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardOverlay=m({data(){return{sidebar:null,popups:[]}},components:d,mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})},methods:{closeMenu(){n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}}});window.nsDashboardHeader=m({data(){return{menuToggled:!1,sidebar:null}},components:d,methods:{toggleMenu(){this.menuToggled=!this.menuToggled},toggleSideMenu(){["lg","xl"].includes(nt.breakpoint)?n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"}):n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardContent=m({});for(let o in d)window.nsDashboardContent.component(o,d[o]);window.nsDashboardContent.use(S,{styles:Object.values(window.ns.cssFiles)});window.nsComponents=Object.assign(d,w);y.doAction("ns-before-mount");const c=document.querySelector("#dashboard-aside");window.nsDashboardAside&&c&&window.nsDashboardAside.mount(c);const b=document.querySelector("#dashboard-overlay");window.nsDashboardOverlay&&b&&window.nsDashboardOverlay.mount(b);const E=document.querySelector("#dashboard-header");window.nsDashboardHeader&&E&&window.nsDashboardHeader.mount(E);const h=document.querySelector("#dashboard-content");window.nsDashboardContent&&h&&window.nsDashboardContent.mount(h);
