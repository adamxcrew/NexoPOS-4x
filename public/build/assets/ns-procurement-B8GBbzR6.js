import{F as S,d as b,b as y,B as O,f as E,T as q,I as N,P as w,v as F,i as j}from"./bootstrap-BXL5x0lI.js";import R from"./manage-products-BPy0yI1_.js";import{_ as c,n as B}from"./currency-Dtag6qPd.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as T,o as l,c as u,a as r,t as d,F as v,b as g,g as D,f as L,w as I,i as k,e as h,n as P,B as C,A as U}from"./runtime-core.esm-bundler-Bzup5G8m.js";import{_ as K}from"./components-D_il-EOi.js";import{b as M,N as V}from"./ns-prompt-popup-76DeRno7.js";import{s as G}from"./select-api-entities-D8Jzj57e.js";import"./chart-C9SIUyYU.js";import"./ns-avatar-image--GgTfTV1.js";import"./join-array-NDqpMoMN.js";const J={name:"ns-procurement-product-options",props:["popup"],data(){return{validation:new S,fields:[],rawFields:[{label:c("Expiration Date"),name:"expiration_date",description:c("Define when that specific product should expire."),type:"datetimepicker"},{label:c("Barcode"),name:"barcode",description:c("Renders the automatically generated barcode."),type:"text",disabled:!0},{label:c("Tax Type"),name:"tax_type",description:c("Adjust how tax is calculated on the item."),type:"select",options:[{label:c("Inclusive"),value:"inclusive"},{label:c("Exclusive"),value:"exclusive"}]}]}},methods:{__:c,applyChanges(){if(this.validation.validateFields(this.fields)){const e=this.validation.extractFields(this.fields);return this.popup.params.resolve(e),this.popup.close()}return b.error(c("Unable to proceed. The form is not valid.")).subscribe()}},mounted(){const t=this.rawFields.map(e=>(e.name==="expiration_date"&&(e.value=this.popup.params.product.procurement.expiration_date),e.name==="tax_type"&&(e.value=this.popup.params.product.procurement.tax_type),e.name==="barcode"&&(e.value=this.popup.params.product.procurement.barcode),e));this.fields=this.validation.createFields(t)}},z={class:"ns-box shadow-lg w-6/7-screen md:w-5/7-screen lg:w-3/7-screen"},H={class:"p-2 border-b ns-box-header"},Q={class:"font-semibold"},W={class:"p-2 border-b ns-box-body"},X={class:"p-2 flex justify-end ns-box-body"};function Y(t,e,o,n,s,i){const x=T("ns-field"),a=T("ns-button");return l(),u("div",z,[r("div",H,[r("h5",Q,d(i.__("Options")),1)]),r("div",W,[(l(!0),u(v,null,g(s.fields,(p,f)=>(l(),D(x,{class:"w-full",field:p,key:f},null,8,["field"]))),128))]),r("div",X,[L(a,{onClick:e[0]||(e[0]=p=>i.applyChanges()),type:"info"},{default:I(()=>[k(d(i.__("Save")),1)]),_:1})])])}const Z=A(J,[["render",Y]]),$={name:"ns-procurement",mounted(){this.reloadEntities(),this.shouldPreventAccidentlRefreshSubscriber=this.shouldPreventAccidentalRefresh.subscribe({next:o=>{o?window.addEventListener("beforeunload",this.addAccidentalCloseListener):window.removeEventListener("beforeunload",this.addAccidentalCloseListener)}});const e=new URLSearchParams(window.location.search).get("preload");e&&y.get(`/api/procurements/preload/${e}`).subscribe({next:o=>{o.items!==void 0&&o.items.forEach(n=>{this.addProductList(n)})},error:o=>{b.error(o.message||c("An error occured while preloading the procurement.")).subscribe()}})},computed:{activeTab(){return this.validTabs.filter(t=>t.active).length>0?this.validTabs.filter(t=>t.active)[0]:!1}},data(){return{totalTaxValues:0,totalPurchasePrice:0,formValidation:new S,form:{},nsSnackBar:b,fields:[],searchResult:[],searchValue:"",debounceSearch:null,nsHttpClient:y,taxes:[],validTabs:[{label:c("Details"),identifier:"details",active:!0},{label:c("Products"),identifier:"products",active:!1}],reloading:!1,shouldPreventAccidentalRefresh:new O(!1),shouldPreventAccidentlRefreshSubscriber:null,showInfo:!1}},watch:{form:{handler(){this.formValidation.isFormUntouched(this.form)?this.shouldPreventAccidentalRefresh.next(!1):this.shouldPreventAccidentalRefresh.next(!0)},deep:!0},searchValue(t){t&&(clearTimeout(this.debounceSearch),this.debounceSearch=setTimeout(()=>{this.doSearch(t)},500))}},components:{nsManageProducts:R},props:["submitMethod","submitUrl","returnUrl","src","rules"],methods:{__:c,nsCurrency:B,addAccidentalCloseListener(t){return t.preventDefault(),!0},async defineConversionOption(t){try{const e=this.form.products[t];if(e.procurement.unit_id===void 0)return E.error(c("An error has occured"),c("Select the procured unit first before selecting the conversion unit."),{actions:{learnMore:{label:c("Learn More"),onClick:n=>{console.log(n)}},close:{label:c("Close"),onClick:n=>{n.close()}}},duration:5e3});const o=await G(`/api/units/${e.procurement.unit_id}/siblings`,c("Convert to unit"),e.procurement.convert_unit_id||null,"select");e.procurement.convert_unit_id=o.values[0],e.procurement.convert_unit_label=o.labels[0]}catch(e){if(e!==!1)return b.error(e.message||c("An unexpected error has occured")).subscribe()}},computeTotal(){this.totalTaxValues=0,this.form.products.length>0&&(this.totalTaxValues=this.form.products.map(t=>t.procurement.tax_value).reduce((t,e)=>t+e)),this.totalPurchasePrice=0,this.form.products.length>0&&(this.totalPurchasePrice=this.form.products.map(t=>parseFloat(t.procurement.total_purchase_price)).reduce((t,e)=>t+e))},updateLine(t){const e=this.form.products[t],o=this.taxes.filter(n=>n.id===e.procurement.tax_group_id);if(parseFloat(e.procurement.purchase_price_edit)>0&&parseFloat(e.procurement.quantity)>0){if(o.length>0){const n=o[0].taxes.map(s=>q.getTaxValue(e.procurement.tax_type,e.procurement.purchase_price_edit,parseFloat(s.rate)));e.procurement.tax_value=n.reduce((s,i)=>s+i),e.procurement.tax_type==="inclusive"?(e.procurement.net_purchase_price=parseFloat(e.procurement.purchase_price_edit)-e.procurement.tax_value,e.procurement.gross_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.purchase_price=parseFloat(e.procurement.gross_purchase_price)):(e.procurement.gross_purchase_price=parseFloat(e.procurement.purchase_price_edit)+e.procurement.tax_value,e.procurement.net_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.purchase_price=parseFloat(e.procurement.gross_purchase_price))}else e.procurement.gross_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.net_purchase_price=parseFloat(e.procurement.purchase_price_edit),e.procurement.tax_value=0;e.procurement.tax_value=e.procurement.tax_value*parseFloat(e.procurement.quantity),e.procurement.total_purchase_price=e.procurement.purchase_price*parseFloat(e.procurement.quantity)}this.computeTotal(),this.$forceUpdate()},fetchLastPurchasePrice(t){const e=this.form.products[t],o=e.unit_quantities.filter(n=>e.procurement.unit_id===n.unit_id);o.length>0&&(e.procurement.purchase_price_edit=o[0].last_purchase_price||0),this.updateLine(t)},switchTaxType(t,e){t.procurement.tax_type=t.procurement.tax_type==="inclusive"?"exclusive":"inclusive",this.updateLine(e)},doSearch(t){y.post("/api/procurements/products/search-product",{search:t}).subscribe(e=>{e.length===1?this.addProductList(e[0]):e.length>1?this.searchResult=e:b.error(c("No result match your query.")).subscribe()})},reloadEntities(){this.reloading=!0,N([y.get("/api/categories"),y.get("/api/products"),y.get(this.src),y.get("/api/taxes/groups")]).subscribe(t=>{this.reloading=!1,this.categories=t[0],this.products=t[1],this.taxes=t[3],this.form.general&&t[2].tabs.general.fieds.forEach((e,o)=>{e.value=this.form.tabs.general.fields[o].value||""}),this.form=Object.assign(JSON.parse(JSON.stringify(t[2])),this.form),this.form=this.formValidation.createForm(this.form),this.form.tabs&&this.form.tabs.general.fields.forEach((e,o)=>{e.options&&(e.options=t[2].tabs.general.fields[o].options)}),this.form.products.length===0&&(this.form.products=this.form.products.map(e=>(["gross_purchase_price","purchase_price_edit","tax_value","net_purchase_price","purchase_price","total_price","total_purchase_price","quantity","tax_group_id"].forEach(o=>{e[o]===void 0&&(e[o]=e[o]===void 0?0:e[o])}),e.$invalid=e.$invalid||!1,e.purchase_price_edit=e.purchase_price,{name:e.name,purchase_units:e.purchase_units,procurement:e,unit_quantities:e.unit_quantities||[]}))),this.$forceUpdate()})},setTabActive(t){this.validTabs.forEach(e=>e.active=!1),this.$forceUpdate(),this.$nextTick().then(()=>{t.active=!0})},addProductList(t){if(t.unit_quantities===void 0)return b.error(c("Unable to add product which doesn't unit quantities defined.")).subscribe();t.procurement===void 0&&(t.procurement={});const e={gross_purchase_price:0,purchase_price_edit:0,tax_value:0,net_purchase_price:0,purchase_price:0,total_price:0,total_purchase_price:0,quantity:1,expiration_date:null,tax_group_id:t.tax_group_id,tax_type:t.tax_type||"inclusive",unit_id:t.unit_quantities[0].unit_id,product_id:t.id,convert_unit_id:t.unit_quantities[0].convert_unit_id,procurement_id:null,$invalid:!1};t.procurement=Object.assign(e,t.procurement),this.searchResult=[],this.searchValue="",this.form.products.push(t);const o=this.form.products.length-1;this.fetchLastPurchasePrice(o)},submit(){if(this.form.products.length===0)return b.error(c("Unable to proceed, no product were provided."),c("OK")).subscribe();if(this.form.products.forEach(n=>{parseFloat(n.procurement.quantity)>=1?n.procurement.unit_id===0?n.procurement.$invalid=!0:n.procurement.$invalid=!1:n.procurement.$invalid=!0}),this.form.products.filter(n=>n.procurement.$invalid).length>0)return b.error(c("Unable to proceed, one or more product has incorrect values."),c("OK")).subscribe();if(this.formValidation.validateForm(this.form).length>0)return this.setTabActive(this.activeTab),b.error(c("Unable to proceed, the procurement form is not valid."),c("OK")).subscribe();if(this.submitUrl===void 0)return b.error(c("Unable to submit, no valid submit URL were provided."),c("OK")).subscribe();this.formValidation.disableForm(this.form);const e={...this.formValidation.extractForm(this.form),products:this.form.products.map(n=>n.procurement)},o=w.show(M);y[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe({next:n=>{if(n.status==="success")return this.shouldPreventAccidentalRefresh.next(!1),document.location=this.returnUrl;o.close(),this.formValidation.enableForm(this.form)},error:n=>{o.close(),b.error(n.message,void 0,{duration:5e3}).subscribe(),this.formValidation.enableForm(this.form),n.errors&&this.formValidation.triggerError(this.form,n.errors)}})},deleteProduct(t){this.form.products.splice(t,1),this.$forceUpdate()},handleGlobalChange(t){this.globallyChecked=t,this.rows.forEach(e=>e.$checked=t)},setProductOptions(t){new Promise((o,n)=>{w.show(Z,{product:this.form.products[t],resolve:o,reject:n})}).then(o=>{for(let n in o)this.form.products[t].procurement[n]=o[n];this.updateLine(t)})},async selectUnitForProduct(t){try{const e=this.form.products[t],o=await new Promise((s,i)=>{w.show(V,{label:c("{product}: Purchase Unit").replace("{product}",e.name),description:c("The product will be procured on that unit."),value:e.unit_id,resolve:s,reject:i,options:e.unit_quantities.map(x=>({label:x.unit.name,value:x.unit.id}))})});e.procurement.unit_id=o;const n=e.unit_quantities.filter(s=>parseInt(s.unit_id)===+o);e.procurement.convert_unit_id=n[0].convert_unit_id||void 0,e.procurement.convert_unit_label=await new Promise((s,i)=>{e.procurement.convert_unit_id!==void 0?y.get(`/api/units/${e.procurement.convert_unit_id}`).subscribe({next:x=>{s(x.name)},error:x=>{s(c("Unkown Unit"))}}):s(c("N/A"))}),this.fetchLastPurchasePrice(t)}catch(e){console.log(e)}},async selectTax(t){try{const e=this.form.products[t],o=await new Promise((n,s)=>{w.show(V,{label:c("Choose Tax"),description:c("The tax will be assigned to the procured product."),resolve:n,reject:s,options:this.taxes.map(i=>({label:i.name,value:i.id}))})});e.procurement.tax_group_id=o,this.updateLine(t)}catch{}},async triggerKeyboard(t,e,o){try{const n=await new Promise((s,i)=>{w.show(K,{value:t[e],resolve:s,reject:i})});t[e]=n,this.updateLine(o)}catch(n){console.log({exception:n})}},getSelectedTax(t){const e=this.form.products[t],o=this.taxes.filter(n=>!!(e.procurement.tax_group_id&&e.procurement.tax_group_id===n.id));return o.length===1?o[0].name:c("N/A")},getSelectedUnit(t){const e=this.form.products[t],n=e.unit_quantities.map(s=>s.unit).filter(s=>e.procurement.unit_id!==void 0?s.id===e.procurement.unit_id:!1);return n.length===1?n[0].name:c("N/A")},handleSavedEvent(t,e){t.data&&(e.options.push({label:t.data.entry.first_name,value:t.data.entry.id}),e.value=t.data.entry.id)}}},ee={class:"form flex-auto flex flex-col",id:"crud-form"},te={class:"flex flex-col"},re={class:"flex justify-between items-center"},se={for:"title",class:"font-bold my-2 text-primary"},ie={for:"title",class:"text-sm my-2 -mx-1 flex text-primary"},oe={key:0,class:"cursor-pointer rounded-full ns-inset-button border px-2 py-1"},ne={key:1,class:"cursor-pointer rounded-full ns-inset-button border px-2 py-1"},ae={class:"px-1"},ce=["href"],le=["disabled"],ue=["disabled"],de={key:0,class:"text-xs text-primary py-1"},pe={key:0,class:"rounded border-2 bg-info-primary border-info-tertiary flex"},he={class:"text flex-auto py-4"},me={class:"font-bold text-lg"},_e={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},fe={class:"px-4 w-full"},be={id:"tabbed-card",class:"ns-tab"},ve={id:"card-header",class:"flex flex-wrap"},xe=["onClick"],ye={key:0,class:"ml-2 rounded-full bg-info-tertiary text-primary h-6 min-w-6 flex items-center justify-center"},ge={key:0,class:"ns-tab-item"},we={class:"card-body rounded-br-lg rounded-bl-lg shadow p-2"},Pe={key:0,class:"-mx-4 flex flex-wrap"},ke={key:1,class:"ns-tab-item"},Ce={class:"card-body rounded-br-lg rounded-bl-lg shadow p-2"},Te={class:"mb-2"},Fe={class:"input-group info flex border-2 rounded overflow-hidden"},Ue=["placeholder"],Ve={class:"h-0"},Se={class:"shadow bg-floating-menu relative z-10"},Ae=["onClick"],Le={class:"block font-bold text-primary"},Oe={class:"block text-sm text-priamry"},Ee={class:"block text-sm text-primary"},qe={class:"overflow-x-auto"},Ne={class:"w-full ns-table"},je={class:""},Re={class:"flex"},Be={class:"flex md:flex-row flex-col md:-mx-1"},De={class:"md:px-1"},Ie=["onClick"],Ke={class:"md:px-1"},Me=["onClick"],Ge={class:"md:px-1"},Je=["onClick"],ze={class:"md:px-1"},He=["onClick"],Qe={class:"md:px-1"},We=["onClick"],Xe=["onClick"],Ye={class:"flex justify-center"},Ze={key:0,class:"outline-none border-dashed py-1 border-b border-info-primary text-sm"},$e={key:1,class:"outline-none border-dashed py-1 border-b border-info-primary text-sm"},et={class:"flex items-start"},tt={class:"input-group rounded border-2"},rt=["onChange","onUpdate:modelValue"],st=["value"],it={class:"flex items-start flex-col justify-end"},ot={class:"text-sm text-primary"},nt={class:"text-primary"},at=["colspan"],ct={class:"p-2 border"},lt=["colspan"],ut={class:"p-2 border"};function dt(t,e,o,n,s,i){const x=T("ns-field");return l(),u("div",ee,[s.form.main?(l(),u(v,{key:0},[r("div",te,[r("div",re,[r("label",se,d(s.form.main.label||i.__("No title is provided")),1),r("div",ie,[r("div",{class:"px-1",onClick:e[0]||(e[0]=a=>s.showInfo=!s.showInfo)},[s.showInfo?h("",!0):(l(),u("span",oe,d(i.__("Show Details")),1)),s.showInfo?(l(),u("span",ne,d(i.__("Hide Details")),1)):h("",!0)]),r("div",ae,[o.returnUrl?(l(),u("a",{key:0,href:o.returnUrl,class:"rounded-full ns-inset-button border px-2 py-1"},d(i.__("Go Back")),9,ce)):h("",!0)])])]),r("div",{class:P([s.form.main.disabled?"disabled":s.form.main.errors.length>0?"error":"","flex border-2 rounded input-group info overflow-hidden"])},[C(r("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.form.main.value=a),onKeypress:e[2]||(e[2]=a=>s.formValidation.checkField(s.form.main)),onBlur:e[3]||(e[3]=a=>s.formValidation.checkField(s.form.main)),onChange:e[4]||(e[4]=a=>s.formValidation.checkField(s.form.main)),disabled:s.form.main.disabled,type:"text",class:P([(s.form.main.disabled,""),"flex-auto outline-none h-10 px-2"])},null,42,le),[[F,s.form.main.value]]),r("button",{disabled:s.form.main.disabled,onClick:e[5]||(e[5]=a=>i.submit()),class:"outline-none px-4 h-10 border-l"},[U(t.$slots,"save",{},()=>[k(d(i.__("Save")),1)])],8,ue),r("button",{onClick:e[6]||(e[6]=a=>i.reloadEntities()),class:"outline-none px-4 h-10"},[r("i",{class:P([s.reloading?"animate animate-spin":"","las la-sync"])},null,2)])],2),s.form.main.description&&s.form.main.errors.length===0?(l(),u("p",de,d(s.form.main.description),1)):h("",!0),(l(!0),u(v,null,g(s.form.main.errors,(a,p)=>(l(),u("p",{class:"text-xs py-1 text-error-primary",key:p},[r("span",null,[U(t.$slots,"error-required",{},()=>[k(d(a.identifier),1)])])]))),128))]),s.showInfo?(l(),u("div",pe,[e[10]||(e[10]=r("div",{class:"icon w-16 flex py-4 justify-center"},[r("i",{class:"las la-info-circle text-4xl"})],-1)),r("div",he,[r("h3",me,d(i.__("Important Notes")),1),r("ul",null,[r("li",null,[e[8]||(e[8]=r("i",{class:"las la-hand-point-right"}," ",-1)),r("span",null,d(i.__("Stock Management Products.")),1)]),r("li",null,[e[9]||(e[9]=r("i",{class:"las la-hand-point-right"}," ",-1)),r("span",null,d(i.__("Doesn't work with Grouped Product.")),1)])])])])):h("",!0),r("div",_e,[r("div",fe,[r("div",be,[r("div",ve,[(l(!0),u(v,null,g(s.validTabs,(a,p)=>(l(),u("div",{onClick:f=>i.setTabActive(a),class:P([a.active?"active":"inactive","tab cursor-pointer px-4 py-2 rounded-tl-lg flex rounded-tr-lg text-primary"]),key:p},[k(d(a.label)+" ",1),a.identifier==="products"?(l(),u("div",ye,d(s.form.products.length),1)):h("",!0)],10,xe))),128))]),i.activeTab.identifier==="details"?(l(),u("div",ge,[r("div",we,[s.form.tabs?(l(),u("div",Pe,[(l(!0),u(v,null,g(s.form.tabs.general.fields,(a,p)=>(l(),u("div",{class:"flex px-4 w-full md:w-1/2 lg:w-1/3",key:p},[L(x,{onSaved:f=>i.handleSavedEvent(f,a),field:a},null,8,["onSaved","field"])]))),128))])):h("",!0)])])):h("",!0),i.activeTab.identifier==="products"?(l(),u("div",ke,[r("div",Ce,[r("div",Te,[r("div",Fe,[C(r("input",{"onUpdate:modelValue":e[7]||(e[7]=a=>s.searchValue=a),type:"text",placeholder:i.__("SKU, Barcode, Name"),class:"flex-auto text-primary outline-none h-10 px-2"},null,8,Ue),[[F,s.searchValue]])]),r("div",Ve,[r("div",Se,[(l(!0),u(v,null,g(s.searchResult,(a,p)=>(l(),u("div",{onClick:f=>i.addProductList(a),key:p,class:"cursor-pointer border border-b hover:bg-floating-menu-hover border-floating-menu-edge p-2 text-primary"},[r("span",Le,d(a.name),1),r("span",Oe,d(i.__("SKU"))+" : "+d(a.sku),1),r("span",Ee,d(i.__("Barcode"))+" : "+d(a.barcode),1)],8,Ae))),128))])])]),r("div",qe,[r("table",Ne,[r("thead",null,[r("tr",null,[(l(!0),u(v,null,g(s.form.columns,(a,p)=>(l(),u("td",{width:"200",key:p,class:"text-primary p-2 border"},d(a.label),1))),128))])]),r("tbody",null,[(l(!0),u(v,null,g(s.form.products,(a,p)=>(l(),u("tr",{key:p,class:P(a.procurement.$invalid?"error border-2 border-error-primary":"")},[(l(!0),u(v,null,g(s.form.columns,(f,m)=>(l(),u(v,null,[f.type==="name"?(l(),u("td",{key:m,width:"500",class:"p-2 text-primary border"},[r("span",je,d(a.name),1),r("div",Re,[r("div",Be,[r("div",De,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:_=>i.deleteProduct(p)},d(i.__("Delete")),9,Ie)]),r("div",Ke,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:_=>i.setProductOptions(p)},d(i.__("Options")),9,Me)]),r("div",Ge,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:_=>i.selectUnitForProduct(p)},d(i.__("Unit"))+": "+d(i.getSelectedUnit(p)),9,Je)]),r("div",ze,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:_=>i.selectTax(p)},d(i.__("Tax"))+": "+d(i.getSelectedTax(p)),9,He)]),r("div",Qe,[r("span",{class:"text-xs text-info-tertiary cursor-pointer underline",onClick:_=>i.defineConversionOption(p)},d(i.__("Convert"))+": "+d(a.procurement.convert_unit_id?a.procurement.convert_unit_label:i.__("N/A")),9,We)])])])])):h("",!0),f.type==="text"?(l(),u("td",{key:m,onClick:_=>i.triggerKeyboard(a.procurement,m,p),class:"text-primary border cursor-pointer"},[r("div",Ye,[["purchase_price_edit"].includes(m)?(l(),u("span",Ze,d(i.nsCurrency(a.procurement[m])),1)):h("",!0),["purchase_price_edit"].includes(m)?h("",!0):(l(),u("span",$e,d(a.procurement[m]),1))])],8,Xe)):h("",!0),f.type==="custom_select"?(l(),u("td",{key:m,class:"p-2 text-primary border"},[r("div",et,[r("div",tt,[C(r("select",{onChange:_=>i.updateLine(p),"onUpdate:modelValue":_=>a.procurement[m]=_,class:"p-2"},[(l(!0),u(v,null,g(f.options,_=>(l(),u("option",{key:_.value,value:_.value},d(_.label),9,st))),128))],40,rt),[[j,a.procurement[m]]])])])])):h("",!0),f.type==="currency"?(l(),u("td",{key:m,class:"p-2 text-primary border"},[r("div",it,[r("span",ot,d(i.nsCurrency(a.procurement[m])),1)])])):h("",!0)],64))),256))],2))),128)),r("tr",nt,[r("td",{class:"p-2 border",colspan:Object.keys(s.form.columns).indexOf("tax_value")},null,8,at),r("td",ct,d(i.nsCurrency(s.totalTaxValues)),1),r("td",{class:"p-2 border",colspan:Object.keys(s.form.columns).indexOf("total_purchase_price")-(Object.keys(s.form.columns).indexOf("tax_value")+1)},null,8,lt),r("td",ut,d(i.nsCurrency(s.totalPurchasePrice)),1)])])])])])])):h("",!0)])])])],64)):h("",!0)])}const Pt=A($,[["render",dt]]);export{Pt as default};
