(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e1c99c8"],{"0a06":function(e,t,n){"use strict";var r=n("c532"),i=n("30b5"),o=n("f6b4"),a=n("5270"),s=n("4a7b");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},"0bb8":function(e,t,n){},"0bbc":function(e,t,n){},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),i=n("c8af"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var c={adapter:s(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n("4362"))},"27b7":function(e,t,n){"use strict";n("b230")},"2d2f":function(e,t,n){"use strict";n("f193")},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(o,u),r.forEach(a,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=i.concat(o).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),a=o("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5270:function(e,t,n){"use strict";var r=n("c532"),i=n("c401"),o=n("2e67"),a=n("2444");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){s(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return s(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"56ed":function(e,t,n){"use strict";n("0bb8")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),i=n("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"5f02":function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"60bc":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"expense-management expense"},[n("div",{staticClass:"expense__title"},[n("font-awesome-icon",{attrs:{icon:"search-dollar"}}),e._v(" Expense Tarcker ")],1),n("el-button",{staticClass:"expense__button",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.createRecipt}},[e._v(" New Expense ")]),n("div",{staticClass:"expense__content"},[e.isLoading?n("spinner",{attrs:{title:"Loading..."}}):e._l(e.receiptList,(function(t){return n("receipt-card",{key:t._id,attrs:{"receipt-info":t},on:{edit:e.editReceipt,delete:e.deleteReceipt}})}))],2),e.isShowReciptDialog?n("create-receipt-dialog",{attrs:{mode:e.operationMode,"edited-receipt-info":e.editedReceiptInfo},on:{done:e.actionSucceed,close:e.triggerReciptDialog}}):e._e()],1)},i=[],o=(n("d3b7"),n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-block"},[n("i",{staticClass:"el-icon-loading"}),n("span",[e._v(e._s(e.title))])])}),a=[],s={name:"Spinner",props:{title:{type:String,default:null}}},c=s,u=(n("f8b1"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,"3b64eff0",null),f=l.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("font-awesome-icon",{attrs:{icon:"phone-alt"}}),e._v(" "+e._s(e.receiptInfo.tel)),n("br")],1),n("span",[e._v(e._s(e.receiptInfo.store))])]),n("el-popconfirm",{attrs:{title:"Are you sure to delete this?","confirm-button-text":"Yes","cancel-button-text":"No"},on:{confirm:e.deleteReceipt}},[n("el-button",{staticClass:"icon",attrs:{slot:"reference",plain:"",type:"danger",icon:"el-icon-delete"},slot:"reference"})],1),n("el-button",{staticClass:"icon",attrs:{plain:"",type:"primary",icon:"el-icon-edit"},on:{click:e.editReceipt}})],1),n("div",{staticClass:"info-block"},[e._v(" "+e._s(e.datetimeFormat(e.receiptInfo.date))+" ")]),n("div",{staticClass:"info-block"},[e._v(" Receipt Id: "+e._s(e.receiptInfo.receiptId)+" ")]),n("div",{staticClass:"info-block"},[e._v(" GSTReg: "+e._s(e.receiptInfo.GSTReg)+" ")]),n("receipt-table",{attrs:{dataset:e.receiptInfo.descriptions}}),n("div",{staticClass:"info-block"},[e._v(" Total: "+e._s(e.receiptInfo.total)+" ")])],1)},d=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataset,border:""}},[n("el-table-column",{attrs:{type:"index",label:"ID",align:"center",width:"60"}}),n("el-table-column",{attrs:{label:"Item",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))])]}}])}),n("el-table-column",{attrs:{label:"Unit Price",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.unitPrice))])]}}])}),n("el-table-column",{attrs:{label:"Amount",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.amount))])]}}])})],1)],1)},m=[],v={name:"ReceiptTable",props:{dataset:{type:Array,default:function(){return[]}}},methods:{handleEdit:function(){},handleDelete:function(){}}},b=v,g=Object(u["a"])(b,h,m,!1,null,"732f602a",null),y=g.exports,x={name:"ReceiptCard",components:{ReceiptTable:y},props:{receiptInfo:{type:Object,default:function(){return{}}}},methods:{editReceipt:function(){this.$emit("edit",this.receiptInfo._id)},deleteReceipt:function(){this.$emit("delete",this.receiptInfo._id)}}},_=x,w=(n("27b7"),Object(u["a"])(_,p,d,!1,null,"599057f2",null)),C=w.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"full-page-dialog"},[n("div",{staticClass:"dialog-title"},[e._v(" New Expense "),n("a",{staticClass:"close-btn",attrs:{href:"javascript:void(0)"},on:{click:e.closeDialog}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)]),n("div",{staticClass:"dialog-container"},[n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" Date： ")]),n("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"Pick a day","default-value":new Date},model:{value:e.receiptInfo.date,callback:function(t){e.$set(e.receiptInfo,"date",t)},expression:"receiptInfo.date"}})],1),n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" Store： ")]),n("input-block",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input__field--input",attrs:{placeholder:"Store name",name:"store"},model:{value:e.receiptInfo.store,callback:function(t){e.$set(e.receiptInfo,"store","string"===typeof t?t.trim():t)},expression:"receiptInfo.store"}})],1),n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" Tel： ")]),n("input-block",{directives:[{name:"validate",rawName:"v-validate",value:"required|number",expression:"'required|number'"}],staticClass:"input__field--input",attrs:{placeholder:"Store Tel",name:"telephone"},model:{value:e.receiptInfo.tel,callback:function(t){e.$set(e.receiptInfo,"tel","string"===typeof t?t.trim():t)},expression:"receiptInfo.tel"}})],1),n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" GSTReg： ")]),n("input-block",{directives:[{name:"validate",rawName:"v-validate",value:"required|number",expression:"'required|number'"}],staticClass:"input__field--input",attrs:{placeholder:"GST Reg",name:"GSTReg"},model:{value:e.receiptInfo.GSTReg,callback:function(t){e.$set(e.receiptInfo,"GSTReg","string"===typeof t?t.trim():t)},expression:"receiptInfo.GSTReg"}})],1),n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" Receipt ID： ")]),n("input-block",{directives:[{name:"validate",rawName:"v-validate",value:"required|number",expression:"'required|number'"}],staticClass:"input__field--input",attrs:{placeholder:"Receipt ID",name:"GSTReg"},model:{value:e.receiptInfo.receiptId,callback:function(t){e.$set(e.receiptInfo,"receiptId","string"===typeof t?t.trim():t)},expression:"receiptInfo.receiptId"}})],1)]),n("div",{staticClass:"dialog-container"},[e._l(e.receiptInfo.descriptions,(function(t,r){return n("receipt-item-card",{key:r,attrs:{index:r,"item-info":t},on:{remove:e.removeItem}})})),n("el-button",{attrs:{plain:"",icon:"el-icon-plus"},on:{click:e.addNewItem}})],2),n("div",{staticClass:"dialog-footer"},[n("el-button",{staticClass:"button",attrs:{plain:"",icon:"el-icon-coin"},on:{click:function(t){e.isCreateMode?e.createNewReceipt():e.editReceipt()}}},[e._v(" "+e._s(e.isCreateMode?"Create":"Save")+" ")])],1)])},R=[],E=(n("a434"),n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-verify"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.inputValue,expression:"inputValue",modifiers:{trim:!0}}],staticClass:"input-verify-text",attrs:{type:e.type,name:e.name,placeholder:e.placeholder,disabled:e.isDisabled},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.validateScope?e.validateScope+"."+e.name:e.name),expression:"errors.has(validateScope ? `${validateScope}.${name}` : name)"}],staticClass:"input-error error-text"},[e._v(" "+e._s(e.errors.first(e.validateScope?e.validateScope+"."+e.name:e.name))+" ")]),e._t("action")],2)}),S=[],A={inject:["$validator"],name:"InputVerify",props:{name:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},value:{type:[Number,String],default:""},isDisabled:{type:Boolean,default:!1},validateScope:{type:String,default:""}},computed:{inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},N=A,k=(n("6bab"),Object(u["a"])(N,E,S,!1,null,"382c8a02",null)),T=k.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-card"},[n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" Item ")]),n("input-block",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input__field--input",attrs:{placeholder:"Name",name:"item-"+e.index},model:{value:e.itemInfo.name,callback:function(t){e.$set(e.itemInfo,"name","string"===typeof t?t.trim():t)},expression:"itemInfo.name"}})],1),n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" Unit Price ")]),n("input-block",{directives:[{name:"validate",rawName:"v-validate",value:"required|min_value:1",expression:"'required|min_value:1'"}],staticClass:"input__field--input",attrs:{type:"number",placeholder:"Price",name:"price-"+e.index},model:{value:e.itemInfo.unitPrice,callback:function(t){e.$set(e.itemInfo,"unitPrice","string"===typeof t?t.trim():t)},expression:"itemInfo.unitPrice"}})],1),n("div",{staticClass:"input__field"},[n("label",{staticClass:"input__field--label"},[e._v(" Amount ")]),n("input-block",{directives:[{name:"validate",rawName:"v-validate",value:"required|min_value:1",expression:"'required|min_value:1'"}],staticClass:"input__field--input",attrs:{type:"number",placeholder:"Amount",name:"amount-"+e.index},model:{value:e.itemInfo.amount,callback:function(t){e.$set(e.itemInfo,"amount","string"===typeof t?t.trim():t)},expression:"itemInfo.amount"}})],1),n("el-button",{staticClass:"icon",attrs:{plain:"",type:"warning",icon:"el-icon-delete"},on:{click:e.removeItem}})],1)},O=[],P={inject:["$validator"],name:"ReceiptItemCard",components:{InputBlock:T},props:{itemInfo:{type:Object,default:function(){return{}}},index:{type:Number,required:!0}},methods:{removeItem:function(){this.$emit("remove",this.index)}}},D=P,L=(n("79df"),Object(u["a"])(D,j,O,!1,null,"bbbf7302",null)),U=L.exports,q=n("bc3a"),$=n.n(q),B=n("5c96"),M="",F=$.a.create({baseURL:M});F.interceptors.response.use((function(e){var t=e.data;return t.message&&Object(B["Message"])({message:t.message,type:t.success?"success":"error",duration:3e3,showClose:!0}),t.data}),(function(e){return Promise.reject(e)}));var G=F;function V(){return G({url:"/receipt",method:"GET"})}function z(e){return G({url:"/receipt",method:"POST",data:e})}function H(e,t){return G({url:"/receipt/".concat(e),method:"PUT",data:t})}function J(e){return G({url:"/receipt/".concat(e),method:"DELETE"})}var X={inject:["$validator"],name:"CreateReciptDialog",components:{InputBlock:T,ReceiptItemCard:U},props:{mode:{type:String,default:"CREATE"},editedReceiptInfo:{type:Object,default:function(){return{}}}},data:function(){return{receiptInfo:{store:null,tel:null,GSTReg:null,date:null,descriptions:[{amount:1,name:"",unitPrice:1}],receiptId:null,total:0}}},computed:{isCreateMode:function(){return"CREATE"===this.mode}},mounted:function(){this.isCreateMode||(this.receiptInfo=JSON.parse(JSON.stringify(this.editedReceiptInfo)))},methods:{closeDialog:function(){this.$emit("close")},addNewItem:function(){this.receiptInfo.descriptions.push({amount:1,name:"",unitPrice:1})},removeItem:function(e){this.receiptInfo.descriptions.splice(e,1)},countTotalPrice:function(){return this.receiptInfo.descriptions.reduce((function(e,t){return Number(t.unitPrice)*Number(t.amount)}),0)},createNewReceipt:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.receiptInfo.total=e.countTotalPrice(),z(e.receiptInfo).then((function(){e.$emit("done")})))}))},editReceipt:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.receiptInfo.total=e.countTotalPrice(),H(e.receiptInfo._id,e.receiptInfo).then((function(){e.$emit("done")})))}))}}},Y=X,K=(n("56ed"),Object(u["a"])(Y,I,R,!1,null,"37f5e32f",null)),Q=K.exports,W={name:"Expense",components:{Spinner:f,ReceiptCard:C,CreateReceiptDialog:Q},data:function(){return{isLoading:!1,isShowReciptDialog:!1,operationMode:"CREATE",editedReceiptInfo:{},receiptList:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.isLoading=!0,V().then((function(t){e.receiptList=t})).finally((function(){e.isLoading=!1}))},triggerReciptDialog:function(){this.isShowReciptDialog=!this.isShowReciptDialog},createRecipt:function(){this.operationMode="CREATE",this.triggerReciptDialog()},editReceipt:function(e){this.operationMode="Edit",this.editedReceiptInfo=this.receiptList.filter((function(t){return t._id===e}))[0],this.triggerReciptDialog()},deleteReceipt:function(e){var t=this;J(e).then((function(){t.fetchData()}))},actionSucceed:function(){this.isShowReciptDialog=!1,this.fetchData()}}},Z=W,ee=(n("2d2f"),Object(u["a"])(Z,r,i,!1,null,"936fb3f6",null));t["default"]=ee.exports},"65f0":function(e,t,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");e.exports=function(e,t){var n;return i(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6bab":function(e,t,n){"use strict";n("0bbc")},7156:function(e,t,n){var r=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var o,a;return i&&"function"==typeof(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(e,a),e}},"79df":function(e,t,n){"use strict";n("9839")},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),i=n("e683");e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},8418:function(e,t,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},9839:function(e,t,n){},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),a=n("50c4"),s=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),f=l("splice"),p=Math.max,d=Math.min,h=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,r,l,f,v,b,g=s(this),y=a(g.length),x=i(e,y),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=y-x):(n=_-2,r=d(p(o(t),0),y-x)),y+n-r>h)throw TypeError(m);for(l=c(g,r),f=0;f<r;f++)v=x+f,v in g&&u(l,f,g[v]);if(l.length=r,n<r){for(f=x;f<y-r;f++)v=f+r,b=f+n,v in g?g[b]=g[v]:delete g[b];for(f=y;f>y-r+n;f--)delete g[f-1]}else if(n>r)for(f=y-r;f>x;f--)v=f+r-1,b=f+n-1,v in g?g[b]=g[v]:delete g[b];for(f=0;f<n;f++)g[f+x]=arguments[f+2];return g.length=y-r+n,l}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),a=n("6eeb"),s=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),p=n("7c73"),d=n("241c").f,h=n("06cf").f,m=n("9bf2").f,v=n("58a8").trim,b="Number",g=i[b],y=g.prototype,x=c(p(y))==b,_=function(e){var t,n,r,i,o,a,s,c,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),a=o.length,s=0;s<a;s++)if(c=o.charCodeAt(s),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,C=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof C&&(x?f((function(){y.valueOf.call(n)})):c(n)!=b)?u(new g(_(t)),n,C):_(t)},I=r?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;I.length>R;R++)s(g,w=I[R])&&!s(C,w)&&m(C,w,h(g,w));C.prototype=y,y.constructor=C,a(i,b,C)}},b230:function(e,t,n){},b50d:function(e,t,n){"use strict";var r=n("c532"),i=n("467f"),o=n("7aac"),a=n("30b5"),s=n("83b9"),c=n("c345"),u=n("3934"),l=n("2d83");e.exports=function(e){return new Promise((function(t,n){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:o,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};i(t,n,a),d=null}},d.onabort=function(){d&&(n(l("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(l("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(g){if("json"!==e.responseType)throw g}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),f||(f=null),d.send(f)}))}},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,f=6==e,p=7==e,d=5==e||f;return function(h,m,v,b){for(var g,y,x=o(h),_=i(x),w=r(m,v,3),C=a(_.length),I=0,R=b||s,E=t?R(h,C):n||p?R(h,0):void 0;C>I;I++)if((d||I in _)&&(g=_[I],y=w(g,I,x),e))if(t)E[I]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return I;case 2:c.call(E,g)}else switch(e){case 4:return!1;case 7:c.call(E,g)}return f?-1:u||l?l:E}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===i.call(e)}function v(e){return"[object File]"===i.call(e)}function b(e){return"[object Blob]"===i.call(e)}function g(e){return"[object Function]"===i.call(e)}function y(e){return d(e)&&g(e.pipe)}function x(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function _(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function I(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=I(e[n],t):h(t)?e[n]=I({},t):o(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)C(arguments[n],t);return e}function R(e,t,n){return C(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function E(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:o,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:l,isString:f,isNumber:p,isObject:d,isPlainObject:h,isUndefined:a,isDate:m,isFile:v,isBlob:b,isFunction:g,isStream:y,isURLSearchParams:x,isStandardBrowserEnv:w,forEach:C,merge:I,extend:R,trim:_,stripBOM:E}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),i=n("1d2b"),o=n("0a06"),a=n("4a7b"),s=n("2444");function c(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=c(s);u.Axios=o,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},db4d:function(e,t,n){},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var u=[];for(c=s;c<i.length;c++)u.push("..");return u=u.concat(o.slice(s)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47!==s)-1===r&&(i=!1,r=a+1),46===s?-1===t?t=a:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=a+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f193:function(e,t,n){},f6b4:function(e,t,n){"use strict";var r=n("c532");function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},f8b1:function(e,t,n){"use strict";n("db4d")}}]);
//# sourceMappingURL=chunk-0e1c99c8.24cd2931.js.map