<<<<<<<< HEAD:public/build/assets/cashier-1dSYe6CS.js
var a=Object.defineProperty;var h=(r,s,e)=>s in r?a(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var t=(r,s,e)=>(h(r,typeof s!="symbol"?s+"":s,e),e);import{b as i,B as p,d as n}from"./bootstrap-Dqimdg2y.js";import{_ as o}from"./currency-Dtag6qPd.js";import"./chart-D2s_fKm5.js";import"./runtime-core.esm-bundler-DYLTeUDs.js";class c{constructor(){t(this,"_mysales");t(this,"_reports",{mysales:i.get("/api/reports/cashier-report")});this._mysales=new p({});for(let s in this._reports)this.loadReport(s)}loadReport(s){return this._reports[s].subscribe(e=>{this[`_${s}`].next(e)})}refreshReport(){i.get("/api/reports/cashier-report?refresh=true").subscribe(s=>{this._mysales.next(s),n.success(o("The report has been refreshed."),o("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new c;
========
var a=Object.defineProperty;var h=(r,s,e)=>s in r?a(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var t=(r,s,e)=>(h(r,typeof s!="symbol"?s+"":s,e),e);import{b as i,B as p,d as n}from"./bootstrap-DbyJYEXV.js";import{_ as o}from"./currency-Dtag6qPd.js";import"./chart-D2s_fKm5.js";import"./runtime-core.esm-bundler-DzqFO6Tt.js";class c{constructor(){t(this,"_mysales");t(this,"_reports",{mysales:i.get("/api/reports/cashier-report")});this._mysales=new p({});for(let s in this._reports)this.loadReport(s)}loadReport(s){return this._reports[s].subscribe(e=>{this[`_${s}`].next(e)})}refreshReport(){i.get("/api/reports/cashier-report?refresh=true").subscribe(s=>{this._mysales.next(s),n.success(o("The report has been refreshed."),o("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new c;
>>>>>>>> 882a051a (Changelog:):public/build/assets/cashier-DtiftSZY.js
