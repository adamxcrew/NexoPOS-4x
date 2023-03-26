import{F,n as c,b as T}from"./bootstrap.1adf5f09.js";import{_ as l}from"./lang.2d0006f0.js";import{n as V}from"./currency.ec2e3443.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as u,aB as h,aC as s,ap as i,z as f,aA as g,M as C,b6 as k,br as x,b8 as _,az as I,aG as v}from"./runtime-core.esm-bundler.db039fbe.js";import"./runtime-dom.esm-bundler.febf7d20.js";const O={name:"ns-pos-layaway-popup",data(){return{fields:[],instalments:[],formValidation:new F,subscription:null,totalPayments:0}},mounted(){this.loadFields(),this.subscription=this.$popup.event.subscribe(e=>{["click-overlay","press-esc"].includes(e.event)&&this.close()})},updated(){setTimeout(()=>{document.querySelector(".is-popup #total_instalments").addEventListener("change",()=>{const e=this.formValidation.extractFields(this.fields).total_instalments;this.generatePaymentFields(e)}),document.querySelector(".is-popup #total_instalments").addEventListener("focus",()=>{document.querySelector(".is-popup #total_instalments").select()})},200)},computed:{expectedPayment(){const e=this.order.customer.group.minimal_credit_payment;return nsRawCurrency(this.order.total*e/100)},order(){return this.$popupParams.order.instalments=this.$popupParams.order.instalments.map(e=>{for(let t in e)if(typeof e[t]!="object"){if(t==="date"){const r={type:"date",name:t,label:l("Date"),disabled:e.paid===1,value:moment(e.date).format("YYYY-MM-DD")};e[t]=r}else if(t==="amount"){const r={type:"number",name:t,label:l("Amount"),disabled:e.paid===1,value:e.amount};e[t]=r}else if(!["paid","id"].includes(t)){const r={type:"hidden",name:t,value:e[t]};e[t]=r}}return e}),this.$popupParams.order}},destroyed(){this.subscription.unsubscribe()},methods:{__:l,nsCurrency:V,refreshTotalPayments(){if(this.order.instalments.length>0){const e=nsRawCurrency(this.order.instalments.map(t=>parseFloat(t.amount.value)||0).reduce((t,r)=>parseFloat(t)+parseFloat(r)));this.totalPayments=this.order.total-e}else this.totalPayments=0},removeInstalment(e){const t=this.order.instalments.indexOf(e);this.order.instalments.splice(t,1),this.$forceUpdate()},generatePaymentFields(e){this.order.instalments=new Array(parseInt(e)).fill("").map((t,r)=>({date:{type:"date",name:"date",label:"Date",value:r===0?ns.date.moment.format("YYYY-MM-DD"):""},amount:{type:"number",name:"amount",label:"Amount",value:r===0?this.expectedPayment:0},readonly:{type:"hidden",name:"readonly",value:this.expectedPayment>0&&r===0}})),this.$forceUpdate(),this.refreshTotalPayments()},close(){this.$popupParams.reject({status:"failed",message:l("You must define layaway settings before proceeding.")}),this.$popup.close()},skipInstalments(){this.expectedPayment>0?(this.order.instalments=[{amount:this.expectedPayment,date:ns.date.current}],this.order.final_payment_date=this.order.instalments.reverse()[0].date,this.order.total_instalments=this.order.instalments.length,this.order.support_instalments=!1):(this.order.final_payment_date=ns.date.current,this.order.total_instalments=0,this.order.support_instalments=!1),this.$popup.close(),POS.order.next(this.order);const{resolve:e,reject:t}=this.$popupParams;return e({order:this.order,skip_layaway:!0})},updateOrder(){if(this.order.instalments.length===0)return c.error(l("Please provide instalments before proceeding.")).subscribe();if(this.fields.forEach(n=>this.formValidation.validateField(n)),!this.formValidation.fieldsValid(this.fields))return c.error(l("Unable to process, the form is not valid")).subscribe();this.$forceUpdate();const e=this.order.instalments.map(n=>({amount:parseFloat(n.amount.value),date:n.date.value})),t=nsRawCurrency(e.map(n=>n.amount).reduce((n,m)=>parseFloat(n)+parseFloat(m)));if(e.filter(n=>n.date===void 0||n.date==="").length>0)return c.error(l("One or more instalments has an invalid date.")).subscribe();if(e.filter(n=>!(n.amount>0)).length>0)return c.error(l("One or more instalments has an invalid amount.")).subscribe();if(e.filter(n=>moment(n.date).isBefore(ns.date.moment.startOf("day"))).length>0)return c.error(l("One or more instalments has a date prior to the current date.")).subscribe();const r=e.filter(n=>moment(n.date).isSame(ns.date.moment.startOf("day"),"day"));let y=0;if(r.forEach(n=>{y+=parseFloat(n.amount)}),y<this.expectedPayment)return c.error(l("The payment to be made today is less than what is expected.")).subscribe();if(t<nsRawCurrency(this.order.total))return c.error(l("Total instalments must be equal to the order total.")).subscribe();e.sort((n,m)=>{const o=moment(n.date),p=moment(m.date);return o.isBefore(p)?-1:o.isAfter(p)?1:0});const d=this.formValidation.extractFields(this.fields);d.final_payment_date=e.reverse()[0].date,d.total_instalments=e.length;const a={...this.$popupParams.order,...d,instalments:e},{resolve:b,reject:w}=this.$popupParams;return this.$popup.close(),POS.order.next(a),b({order:a,skip_layaway:!1})},loadFields(){T.get("/api/fields/ns.layaway").subscribe(e=>{this.fields=this.formValidation.createFields(e),this.fields.forEach(t=>{t.name==="total_instalments"&&(t.value=this.order.total_instalments||0)})})}}},S={class:"shadow-lg h-95vh md:h-5/6-screen lg:h-5/6-screen w-95vw md:w-4/6-screen lg:w-3/6-screen ns-box flex flex-col"},Y={class:"p-2 border-b ns-box-header flex justify-between items-center"},B={class:"font-semibold"},M={class:"p-2 flex-auto flex flex-col relative overflow-y-auto"},D={key:0,class:"absolute h-full w-full flex items-center justify-center"},E={class:"p-2 elevation-surface info mb-2 text-center text-2xl font-bold flex justify-between"},A={class:"flex flex-col flex-auto overflow-hidden"},L={class:"border-b ns-box-body"},q={class:"text-2xl flex justify-between py-2 text-primary"},N={class:"text-sm"},R={class:"p-2 mb-2 text-center bg-green-200 text-green-700"},U={class:"flex-auto overflow-y-auto"},z={class:"flex flex-auto"},G={class:"px-1 w-full md:w-1/2"},H={class:"px-1 w-full md:w-1/2"},$={class:"flex items-center"},J=["onClick"],K=s("i",{class:"las la-times"},null,-1),Q=[K],W={key:0,class:"my-2"},X={class:"p-2 elevation-surface border text-primary text-center"},Z={class:"p-2 flex border-t ns-box-footer justify-between flex-shrink-0"},ee={class:"md:-mx-1 flex flex-col md:flex-row"},te={class:"md:px-1"},se={class:"md:-mx-1 flex flex-col md:flex-row"},ne={class:"md:px-1"},ae={class:"md:px-1"};function re(e,t,r,y,d,a){const b=_("ns-close-button"),w=_("ns-spinner"),n=_("ns-field"),m=_("ns-button");return u(),h("div",S,[s("div",Y,[s("h3",B,i(a.__("Layaway Parameters")),1),s("div",null,[f(b,{onClick:t[0]||(t[0]=o=>a.close())})])]),s("div",M,[d.fields.length===0?(u(),h("div",D,[f(w)])):g("",!0),s("div",E,[s("span",null,i(a.__("Minimum Payment")),1),s("span",null,i(a.nsCurrency(a.expectedPayment)),1)]),s("div",null,[(u(!0),h(C,null,k(d.fields,(o,p)=>(u(),I(n,{field:o,key:p},null,8,["field"]))),128))]),s("div",A,[s("div",L,[s("h3",q,[s("span",null,i(a.__("Instalments & Payments")),1),s("p",null,[s("span",N,"("+i(a.nsCurrency(d.totalPayments))+")",1),s("span",null,i(a.nsCurrency(e.total)),1)])]),s("p",R,i(a.__("The final payment date must be the last within the instalments.")),1)]),s("div",U,[(u(!0),h(C,null,k(a.order.instalments,(o,p)=>(u(),h("div",{class:"flex w-full -mx-1 py-2",key:p},[s("div",z,[s("div",G,[f(n,{onChange:t[1]||(t[1]=P=>a.refreshTotalPayments()),field:o.date},null,8,["field"])]),s("div",H,[f(n,{onChange:t[2]||(t[2]=P=>a.refreshTotalPayments()),field:o.amount},null,8,["field"])])]),s("div",$,[s("button",{onClick:P=>a.removeInstalment(o),class:"items-center flex justify-center h-8 w-8 rounded border text-primary ns-inset-button error"},Q,8,J)])]))),128)),a.order.instalments.length===0?(u(),h("div",W,[s("p",X,i(a.__("There is no instalment defined. Please set how many instalments are allowed for this order")),1)])):g("",!0)])])]),s("div",Z,[s("div",ee,[s("div",te,[f(m,{onClick:t[3]||(t[3]=o=>a.skipInstalments()),type:"info"},{default:x(()=>[v(i(a.__("Skip Instalments")),1)]),_:1})])]),s("div",se,[s("div",ne,[f(m,{onClick:t[4]||(t[4]=o=>a.close()),type:"error"},{default:x(()=>[v(i(a.__("Cancel")),1)]),_:1})]),s("div",ae,[f(m,{onClick:t[5]||(t[5]=o=>a.updateOrder()),type:"info"},{default:x(()=>[v(i(a.__("Proceed")),1)]),_:1})])])])])}var ue=j(O,[["render",re]]);export{ue as default};
