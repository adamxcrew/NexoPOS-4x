<<<<<<<< HEAD:public/build/assets/ns-payment-types-report-B3ww4d8P.js
import{h as l,d,b as h}from"./bootstrap-Dqimdg2y.js";import{c as f,e as x}from"./components-DpAywcwP.js";import{_ as i,n as y}from"./currency-Dtag6qPd.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as D,o as c,c as _,a as e,f as u,t as s,F as g,b as k}from"./runtime-core.esm-bundler-DYLTeUDs.js";import"./chart-D2s_fKm5.js";import"./ns-prompt-popup-B8C9prFY.js";import"./ns-avatar-image-CE0FTvGu.js";import"./index.es-ua9LYOjR.js";const w={name:"ns-payment-types-report",props:["storeName","storeLogo"],data(){return{startDateField:{type:"datetimepicker",value:l(ns.date.current).startOf("day").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:l(ns.date.current).endOf("day").format("YYYY-MM-DD HH:mm:ss")},report:[],ns:window.ns,field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:f,nsDateTimePicker:x},computed:{},mounted(){},methods:{__:i,nsCurrency:y,printSaleReport(){this.$htmlToPaper("sale-report")},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(i("Unable to proceed. Select a correct time range.")).subscribe();const p=l(this.startDateField.value);if(l(this.endDateField.value).isBefore(p))return d.error(i("Unable to proceed. The current time range is not valid.")).subscribe();h.post("/api/reports/payment-types",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:r=>{this.report=r},error:r=>{d.error(r.message).subscribe()}})}}},F={id:"report-section",class:"px-4"},Y={class:"flex -mx-2"},C={class:"px-2"},M={class:"px-2"},T={class:"px-2"},B=e("i",{class:"las la-sync-alt text-xl"},null,-1),S={class:"pl-2"},H={class:"px-2"},P=e("i",{class:"las la-print text-xl"},null,-1),R={class:"pl-2"},L={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},N={class:"flex w-full"},j={class:"my-4 flex justify-between w-full"},O={class:"text-secondary"},U={class:"pb-1 border-b border-dashed"},V={class:"pb-1 border-b border-dashed"},E={class:"pb-1 border-b border-dashed"},q=["src","alt"],z={class:"bg-box-background shadow rounded my-4"},A={class:"border-b border-box-edge"},G={class:"table ns-table w-full"},I={class:"text-primary"},J={class:"text-primary border p-2 text-left"},K={width:"150",class:"text-primary border p-2 text-right"},Q={class:"text-primary"},W={class:"p-2 border border-box-edge"},X={class:"p-2 border text-right"},Z={class:"text-primary font-semibold"},$={class:"p-2 border border-box-edge text-primary"},ee={class:"p-2 border text-right"};function te(p,a,r,se,o,t){const m=D("ns-field");return c(),_("div",F,[e("div",Y,[e("div",C,[u(m,{field:o.startDateField},null,8,["field"])]),e("div",M,[u(m,{field:o.endDateField},null,8,["field"])]),e("div",T,[e("button",{onClick:a[0]||(a[0]=n=>t.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[B,e("span",S,s(t.__("Load")),1)])]),e("div",H,[e("button",{onClick:a[1]||(a[1]=n=>t.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[P,e("span",R,s(t.__("Print")),1)])])]),e("div",L,[e("div",N,[e("div",j,[e("div",O,[e("ul",null,[e("li",U,s(t.__("Date : {date}").replace("{date}",o.ns.date.current)),1),e("li",V,s(t.__("Document : Payment Type")),1),e("li",E,s(t.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:r.storeLogo,alt:r.storeName},null,8,q)])])]),e("div",z,[e("div",A,[e("table",G,[e("thead",I,[e("tr",null,[e("th",J,s(t.__("Summary")),1),e("th",K,s(t.__("Total")),1)])]),e("tbody",Q,[(c(!0),_(g,null,k(o.report.summary,(n,b)=>(c(),_("tr",{key:b,class:"font-semibold"},[e("td",W,s(n.label),1),e("td",X,s(t.nsCurrency(n.total)),1)]))),128))]),e("tfoot",Z,[e("tr",null,[e("td",$,s(t.__("Total")),1),e("td",ee,s(t.nsCurrency(o.report.total)),1)])])])])])])])}const pe=v(w,[["render",te]]);export{pe as default};
========
import{h as l,d,b as h}from"./bootstrap-DbyJYEXV.js";import{c as f,e as x}from"./components-C1ZaJ_TG.js";import{_ as i,n as y}from"./currency-Dtag6qPd.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as D,o as c,c as _,a as e,f as u,t as s,F as g,b as k}from"./runtime-core.esm-bundler-DzqFO6Tt.js";import"./chart-D2s_fKm5.js";import"./ns-prompt-popup-WYgvScdg.js";import"./ns-avatar-image-CIpC3xeh.js";import"./index.es-ua9LYOjR.js";const w={name:"ns-payment-types-report",props:["storeName","storeLogo"],data(){return{startDateField:{type:"datetimepicker",value:l(ns.date.current).startOf("day").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:l(ns.date.current).endOf("day").format("YYYY-MM-DD HH:mm:ss")},report:[],ns:window.ns,field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:f,nsDateTimePicker:x},computed:{},mounted(){},methods:{__:i,nsCurrency:y,printSaleReport(){this.$htmlToPaper("sale-report")},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(i("Unable to proceed. Select a correct time range.")).subscribe();const p=l(this.startDateField.value);if(l(this.endDateField.value).isBefore(p))return d.error(i("Unable to proceed. The current time range is not valid.")).subscribe();h.post("/api/reports/payment-types",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:r=>{this.report=r},error:r=>{d.error(r.message).subscribe()}})}}},F={id:"report-section",class:"px-4"},Y={class:"flex -mx-2"},C={class:"px-2"},M={class:"px-2"},T={class:"px-2"},B=e("i",{class:"las la-sync-alt text-xl"},null,-1),S={class:"pl-2"},H={class:"px-2"},P=e("i",{class:"las la-print text-xl"},null,-1),R={class:"pl-2"},L={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},N={class:"flex w-full"},j={class:"my-4 flex justify-between w-full"},O={class:"text-secondary"},U={class:"pb-1 border-b border-dashed"},V={class:"pb-1 border-b border-dashed"},E={class:"pb-1 border-b border-dashed"},q=["src","alt"],z={class:"bg-box-background shadow rounded my-4"},A={class:"border-b border-box-edge"},G={class:"table ns-table w-full"},I={class:"text-primary"},J={class:"text-primary border p-2 text-left"},K={width:"150",class:"text-primary border p-2 text-right"},Q={class:"text-primary"},W={class:"p-2 border border-box-edge"},X={class:"p-2 border text-right"},Z={class:"text-primary font-semibold"},$={class:"p-2 border border-box-edge text-primary"},ee={class:"p-2 border text-right"};function te(p,a,r,se,o,t){const m=D("ns-field");return c(),_("div",F,[e("div",Y,[e("div",C,[u(m,{field:o.startDateField},null,8,["field"])]),e("div",M,[u(m,{field:o.endDateField},null,8,["field"])]),e("div",T,[e("button",{onClick:a[0]||(a[0]=n=>t.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[B,e("span",S,s(t.__("Load")),1)])]),e("div",H,[e("button",{onClick:a[1]||(a[1]=n=>t.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[P,e("span",R,s(t.__("Print")),1)])])]),e("div",L,[e("div",N,[e("div",j,[e("div",O,[e("ul",null,[e("li",U,s(t.__("Date : {date}").replace("{date}",o.ns.date.current)),1),e("li",V,s(t.__("Document : Payment Type")),1),e("li",E,s(t.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:r.storeLogo,alt:r.storeName},null,8,q)])])]),e("div",z,[e("div",A,[e("table",G,[e("thead",I,[e("tr",null,[e("th",J,s(t.__("Summary")),1),e("th",K,s(t.__("Total")),1)])]),e("tbody",Q,[(c(!0),_(g,null,k(o.report.summary,(n,b)=>(c(),_("tr",{key:b,class:"font-semibold"},[e("td",W,s(n.label),1),e("td",X,s(t.nsCurrency(n.total)),1)]))),128))]),e("tfoot",Z,[e("tr",null,[e("td",$,s(t.__("Total")),1),e("td",ee,s(t.nsCurrency(o.report.total)),1)])])])])])])])}const pe=v(w,[["render",te]]);export{pe as default};
>>>>>>>> 882a051a (Changelog:):public/build/assets/ns-payment-types-report-Ct28kURZ.js
