(this["webpackJsonpprice-beater.fluenty.co.za"]=this["webpackJsonpprice-beater.fluenty.co.za"]||[]).push([[0],{19:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/logo.7f594ed9.png"},48:function(e,a,t){e.exports=t(85)},53:function(e,a,t){},72:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),s=(t(53),t(9)),o=t(7),i=(t(21),t(18),t(19),t(22),t(1)),m=t(12),u=t.n(m),d=(t(70),t(72),function(e){return r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30"},e.children)))}),p=function(e){return{type:"STORE_AUTH",payload:e}},f=function(e){return{type:"STORE_PAGE_NUMBER",payload:e}},E=function(e){return{type:"SET_REGISTERED",payload:e}},h=t(5);var g=Object(h.b)(null,(function(e){return{storeAuth:function(a){return e(p(a))}}}))((function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),p=m[0],f=m[1],E=Object(n.useState)(!1),h=Object(i.a)(E,2),g=h[0],b=h[1],v=function(e,a){var t=document.getElementById(e);t&&(t.innerHTML=a)},x=function(){b(!0),u.a.post("https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev/users/login",{email:c,password:p},{headers:{"x-api-key":"A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A"}}).then((function(a){e.storeAuth({authenticated:!0,guid:a.data.guid})})).catch((function(e){console.log(e),e.response.data.message&&v("showError",'<div class="error-wrapper"><h4>'+e.response.data.message+"</h4></div>"),b(!1)}))};return r.a.createElement(d,null,r.a.createElement("form",{className:"login100-form validate-form"},r.a.createElement("span",{className:"login100-form-title p-b-55"},"Sign In"),r.a.createElement("div",{id:"showError"}),r.a.createElement("div",{className:"wrap-input100 m-b-16"},r.a.createElement("input",{className:"input100",type:"text",name:"email",id:"email",placeholder:"Email",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("small",{className:"err-msg",id:"emailError"}),r.a.createElement("span",{className:"focus-input100"}),r.a.createElement("span",{className:"symbol-input100"},r.a.createElement("span",{className:"lnr lnr-envelope"}))),r.a.createElement("div",{className:"wrap-input100 m-b-16"},r.a.createElement("input",{className:"input100",type:"password",name:"pass",id:"pass",placeholder:"Password",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement("small",{className:"err-msg",id:"passError"}),r.a.createElement("span",{className:"focus-input100"}),r.a.createElement("span",{className:"symbol-input100"},r.a.createElement("span",{className:"lnr lnr-lock"}))),r.a.createElement("div",{className:"contact100-form-checkbox m-l-4"},r.a.createElement("input",{className:"input-checkbox100",id:"ckb1",type:"checkbox",name:"remember-me"}),r.a.createElement("label",{className:"label-checkbox100",htmlFor:"ckb1"},"Remember me")),r.a.createElement("div",{className:"container-login100-form-btn p-t-25"},r.a.createElement("button",{className:"login100-form-btn",onClick:function(e){return e.preventDefault(),v("emailError",""),v("passError",""),v("showError",""),!!function(){var e=!0,a=new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/g),t=new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);return c.length<1?(v("emailError","Email Address is required"),e=!1):t.test(c)||(v("emailError","Please provide a valid email address"),e=!1),p.length<1?(v("passError","Password is required"),e=!1):a.test(p)||(v("passError","Please provide a valid password"),e=!1),e}()&&x()}},"Login",g?r.a.createElement("span",{id:"loaderSpinner"},r.a.createElement("i",{class:"fa fa-spinner fa-spin"})):null)),r.a.createElement("div",{className:"text-center w-full p-t-50"},r.a.createElement("span",{className:"txt1"},"Not a member?"),r.a.createElement(s.b,{className:"txt1 bo1 hov1",to:"/register"},"Sign up now"))),r.a.createElement("p",{style:{fontSize:8,color:"#c5c5c5"}},"v1"))}));t(78);var b=Object(h.b)(null,(function(e){return{storeAuth:function(a){return e(p(a))},setRegistered:function(a){return e(E(a))}}}))((function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),p=m[0],f=m[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),g=h[0],b=h[1],v=Object(n.useState)(""),x=Object(i.a)(v,2),N=x[0],y=x[1],w=Object(n.useState)(""),O=Object(i.a)(w,2),j=O[0],k=O[1],S=Object(n.useState)(!1),P=Object(i.a)(S,2),C=P[0],I=P[1],z=function(e,a){document.getElementById(e).innerHTML=a},L=function(){I(!0),u.a.post("https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev/users/signup",{firstName:c,lastName:p,email:g,password:N,apiKey:j},{headers:{"x-api-key":"A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A"}}).then((function(a){e.setRegistered({registered:1,showModal:1}),e.storeAuth({authenticated:!0,guid:a.data.guid})})).catch((function(e){e.response.data.message&&z("showError",'<div class="error-wrapper"><h4>'+e.response.data.message+"</h4></div>"),I(!1)}))};return r.a.createElement(d,null,r.a.createElement("form",{className:"login100-form validate-form"},r.a.createElement("span",{className:"login100-form-title p-b-55"},"Create Account"),r.a.createElement("div",{id:"showError"}),r.a.createElement("div",{className:"wrap-input100 m-b-16"},r.a.createElement("input",{className:"input100",type:"text",name:"first_name",id:"first_name",placeholder:"Firstname",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("small",{className:"err-msg",id:"nameError"}),r.a.createElement("span",{className:"focus-input100"}),r.a.createElement("span",{className:"symbol-input100"},r.a.createElement("span",{className:"lnr lnr-user"}))),r.a.createElement("div",{className:"wrap-input100 m-b-16"},r.a.createElement("input",{className:"input100",type:"text",name:"last_name",id:"last_name",placeholder:"Surname",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement("small",{className:"err-msg",id:"surnameError"}),r.a.createElement("span",{className:"focus-input100"}),r.a.createElement("span",{className:"symbol-input100"},r.a.createElement("span",{className:"lnr lnr-user"}))),r.a.createElement("div",{className:"wrap-input100 m-b-16"},r.a.createElement("input",{className:"input100",type:"text",name:"email",id:"email",placeholder:"Email",value:g,onChange:function(e){return b(e.target.value)}}),r.a.createElement("small",{className:"err-msg",id:"emailError"}),r.a.createElement("span",{className:"focus-input100"}),r.a.createElement("span",{className:"symbol-input100"},r.a.createElement("span",{className:"lnr lnr-envelope"}))),r.a.createElement("div",{className:"wrap-input100 m-b-16"},r.a.createElement("input",{className:"input100",type:"text",name:"apikey",id:"apikey",placeholder:"Api Key",value:j,onChange:function(e){return k(e.target.value)}}),r.a.createElement("small",{className:"err-msg",id:"apiError"}),r.a.createElement("span",{className:"focus-input100"}),r.a.createElement("span",{className:"symbol-input100"},r.a.createElement("span",{className:"lnr lnr-envelope"}))),r.a.createElement("div",{className:"wrap-input100 m-b-16"},r.a.createElement("input",{className:"input100",type:"password",name:"pass",id:"pass",placeholder:"Password",value:N,onChange:function(e){return y(e.target.value)}}),r.a.createElement("small",{className:"err-msg",id:"passError"}),r.a.createElement("span",{className:"focus-input100"}),r.a.createElement("span",{className:"symbol-input100"},r.a.createElement("span",{className:"lnr lnr-lock"}))),r.a.createElement("div",{className:"contact100-form-checkbox m-l-4"},r.a.createElement("input",{className:"input-checkbox100",id:"ckb1",type:"checkbox",name:"remember-me"}),r.a.createElement("label",{className:"label-checkbox100",htmlFor:"ckb1"},"Remember me")),r.a.createElement("div",{className:"container-login100-form-btn p-t-25"},r.a.createElement("button",{className:"login100-form-btn",onClick:function(e){return e.preventDefault(),z("nameError",""),z("surnameError",""),z("emailError",""),z("passError",""),z("showError",""),!!function(){var e=!0,a=new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/g),t=new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);return c.length<1&&z("nameError","Firstname is required"),p.length<1&&z("surnameError","Surname is required."),g.length<1?(z("emailError","Email Address is required"),e=!1):t.test(g)||(z("emailError","Please provide a valid email address"),e=!1),N.length<1?(z("passError","Password is required"),e=!1):a.test(N)||(z("passError","Please provide a valid password"),e=!1),j.length<1&&z("apiError","Api Key is required."),e}()&&L()}},"Sign Up",C?r.a.createElement("span",{id:"loaderSpinner"},r.a.createElement("i",{class:"fa fa-spinner fa-spin"})):null)),r.a.createElement("div",{className:"text-center w-full p-t-50"},r.a.createElement("span",{className:"txt1"},"Already have an account?"),r.a.createElement(s.b,{className:"txt1 bo1 hov1",to:"/"},"Sign in now"))))})),v=t(13),x=t.n(v),N=t(46),y=t.n(N);var w=Object(o.g)(Object(h.b)(null,(function(e){return{storeAuth:function(a){return e(p(a))},storePageNumber:function(a){return e(f(a))}}}))((function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(window.location.pathname.substring(1)),f=Object(i.a)(p,1)[0],E=function(e){window.location.pathname!==e&&(d(e),l(!0))};return c?r.a.createElement(o.a,{to:u,push:!0}):r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{style:{position:"fixed"}},r.a.createElement(v.Toggle,null),r.a.createElement(v.Nav,{defaultSelected:f},r.a.createElement(v.NavItem,{eventKey:"dashboard",onClick:function(){return E("/dashboard")}},r.a.createElement(v.NavIcon,null,r.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.25em"}})),r.a.createElement(v.NavText,null,"Dashboard")),r.a.createElement(v.NavItem,{eventKey:"products",onClick:function(){return E("/products")}},r.a.createElement(v.NavIcon,null,r.a.createElement("i",{className:"fas fa-shopping-cart",style:{fontSize:"1.25em"}})),r.a.createElement(v.NavText,null,"Products")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-left"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"col-4 collapse navbar-collapse"},r.a.createElement("button",{className:"navbar-brand",href:"#",style:{marginLeft:"2.5em"}},r.a.createElement("img",{src:y.a,height:"30",className:"d-inline-block align-top",alt:""}),"Pricebeater")),r.a.createElement("span",{className:"col-4 text-center navbar-brand",id:"navTitle"}),r.a.createElement("div",{className:"col-4 nav-item navbar-nav dropdown justify-content-end"},r.a.createElement("button",{className:"nav-link dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Profile"),r.a.createElement("div",{className:"dropdown-menu  dropdown-menu-right","aria-labelledby":"navbarDropdown"},r.a.createElement("button",{className:"dropdown-item"},"Your details"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("button",{className:"dropdown-item",onClick:function(){e.storePageNumber(1),e.storeAuth({authenticated:!1,guid:""})}},"Logout")))))),e.children,r.a.createElement("footer",{className:"py-2 bg-secondary text-white"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("small",null,"Copyright \xa9 pricebeater | Version 1.0.1"))))}))),O=function(e){var a=e.handleClose,t=e.show,n=e.children;return r.a.createElement("div",{className:1==t?"modal display-block":"modal display-none"},r.a.createElement("section",{className:"modal-main"},r.a.createElement("div",{className:"container"},n,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{className:"btn btn-success",onClick:a},"Close")))))},j=t(25),k={authenticated:!1,guid:"",pageNumber:1,registered:0,showModal:0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;return"STORE_AUTH"===a.type?Object.assign({},e,{authenticated:a.payload.authenticated,guid:a.payload.guid}):"STORE_PAGE_NUMBER"===a.type?Object.assign({},e,{pageNumber:a.payload}):"SET_REGISTERED"===a.type?Object.assign({},e,{registered:a.payload.registered,showModal:a.payload.showModal}):e},P=k;try{null===(P=window.localStorage.getItem("price.beater"))&&(P=k),P=JSON.parse(P)}catch(te){P=k}var C=Object(j.b)(S,P),I=t(15),z=t.n(I),L=t(26),A=t(47),T=function e(a){Object(A.a)(this,e),this.title=a.title,this.currentPrice=a.currentPrice,this.priceToBeat=a.rrp,this.offerId=a.offerId,this.gtin=a.gtin,this.url=a.productTakealotURL,this.status=a.status,this.barCode=a.mpBarcode,this.minPrice=a.minPrice,this.preferredSalePrice=a.maxPrice,this.increment=a.increment,this.brand=a.brand,this.buybox=a.buyBox},B="https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev",R="A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A";function M(e){return _.apply(this,arguments)}function _(){return(_=Object(L.a)(z.a.mark((function e(a){var t,n,r,c,l,s,o=arguments;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:10,n=o.length>2&&void 0!==o[2]?o[2]:1,r=o.length>3&&void 0!==o[3]?o[3]:"",c=o.length>4&&void 0!==o[4]?o[4]:"",e.prev=4,e.next=7,u.a.get(B+"/offers/all/"+a+"?items="+t+"&page="+n+r+c,{headers:{"x-api-key":R}});case 7:return l=e.sent,s=[],l.data.offers.map((function(e,a){s.push(new T(e))})),e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(4),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}function F(e){return D.apply(this,arguments)}function D(){return(D=Object(L.a)(z.a.mark((function e(a){var t,n,r,c,l,s,o=arguments;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:10,n=o.length>2&&void 0!==o[2]?o[2]:1,r=o.length>3&&void 0!==o[3]?o[3]:"",c=o.length>4&&void 0!==o[4]?o[4]:"",e.prev=4,e.next=7,u.a.get(B+"/offers/fetch/"+a+"?items="+t+"&page="+n+r+c,{headers:{"x-api-key":R}});case 7:return l=e.sent,s=[],l.data.offers.map((function(e,a){s.push(new T(e))})),e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(4),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}function J(e){return $.apply(this,arguments)}function $(){return($=Object(L.a)(z.a.mark((function e(a){var t,n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!=(t=JSON.parse(window.localStorage.getItem("price.beater")).guid)&&null!=a){e.next=4;break}return e.abrupt("return",null);case 4:return e.next=6,u.a.get(B+"/offers/buyboxstatus?guid="+t+"&status="+a,{headers:{"x-api-key":R}});case 6:return n=e.sent,r=[],n.data.map((function(e,a){r.push(new T(e))})),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var q=function(){var e=Object(n.useState)("--"),a=Object(i.a)(e,2),t=a[0],c=a[1];return J("winning").then((function(e){c(e.length)})).catch((function(e){return e})),r.a.createElement("a",{class:"card bg-light mb-3 stretched-link"},r.a.createElement("div",{class:"card-header"},"Winning"),r.a.createElement("div",{class:"card-body text-success"},r.a.createElement("h5",{class:"card-title counter-total"},t)))},G=function(){var e=Object(n.useState)("--"),a=Object(i.a)(e,2),t=a[0],c=a[1];return J("losing").then((function(e){c(e.length)})).catch((function(e){return e})),r.a.createElement("a",{class:"card bg-light mb-3 stretched-link"},r.a.createElement("div",{class:"card-header"},"Losing"),r.a.createElement("div",{class:"card-body text-danger"},r.a.createElement("h5",{class:"card-title counter-total"},t)))};var H=Object(h.b)((function(e){return{registered:e.registered,showModal:e.showModal}}),(function(e){return{setRegistered:function(a){return e(E(a))}}}))((function(e){var a=Object(n.useState)(e.showModal),t=Object(i.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){1==e.showModal&&e.setRegistered({registered:e.registered,showModal:0})}),[]);return r.a.createElement(w,null,r.a.createElement("div",{className:"row justify-content-center",style:{paddingTop:"30px"}},r.a.createElement("div",{className:"col-10 text-left"},r.a.createElement("div",{className:"container py-4"},r.a.createElement("div",{class:"card-deck"},r.a.createElement("div",{class:"card border-0"},r.a.createElement(q,null)),r.a.createElement("div",{class:"card border-0"},r.a.createElement(G,null)))))),r.a.createElement(O,{show:c,handleClose:function(){l(0)}},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-10"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Please note that on registration the offers are syncing up with our database. This might take up to 30 minutes..."))))))}));var U=Object(o.g)(Object(h.b)((function(e){return{guid:e.guid,pageNumber:e.pageNumber,registered:e.registered,showModal:e.showModal}}),(function(e){return{storePageNumber:function(a){return e(f(a))},setRegistered:function(a){return e(E(a))}}}))((function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!0),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(e.pageNumber),f=Object(i.a)(p,2),E=f[0],h=f[1],g=Object(n.useState)(10),b=Object(i.a)(g,2),v=b[0],x=b[1],N=Object(n.useState)(""),y=Object(i.a)(N,2),O=y[0],j=y[1],k=Object(n.useState)("title"),S=Object(i.a)(k,2),P=S[0],C=S[1],I=Object(n.useState)(""),z=Object(i.a)(I,2),L=z[0],A=z[1],T=Object(n.useState)("asc"),B=Object(i.a)(T,2),R=B[0],_=B[1],D=Object(n.useState)(""),J=Object(i.a)(D,2),$=J[0],H=J[1],U=Object(n.useState)(""),W=Object(i.a)(U,2),K=W[0],Q=W[1],V=Object(n.useState)(!1),Z=Object(i.a)(V,2),Y=Z[0],X=Z[1],ee=Object(n.useState)(""),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],re=Object(n.useState)(""),ce=Object(i.a)(re,2),le=(ce[0],ce[1],Object(n.useState)("")),se=Object(i.a)(le,2),oe=(se[0],se[1],function(a){var t="";""==R&&(_("asc"),t="&orderBy="+a+"&sortBy=asc"),"asc"==R&&(_("desc"),t="&orderBy="+a+"&sortBy=desc"),"desc"==R&&(_(""),t+=""),Q(t),A(a),console.log(t),d(!0),M(e.guid,v,E,$,t).then((function(e){l(e),d(!1)})).catch((function(e){console.log(e)}))});Object(n.useEffect)((function(){var a;1===e.registered?(a=F(e.guid,v,E),e.setRegistered({registered:0,showModal:e.showModal})):a=M(e.guid,v,E),a.then((function(e){l(e),d(!1)})).catch((function(e){console.log(e)}))}),[]);var ie=function(a){d(!0);var t="&orderBy=buyBox&sortBy="+("winning"==a?"desc":"asc");Q(t),A("buyBox"),M(e.guid,v,E,$,t).then((function(e){l(e),d(!1)})).catch((function(e){console.log(e)}))},me=function(e){window.location.pathname!==e&&(ne(e),X(!0))};return Y?r.a.createElement(o.a,{to:te,push:!0}):r.a.createElement(w,null,r.a.createElement("div",{className:"row justify-content-center",style:{paddingTop:"30px"}},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"container py-4"},r.a.createElement("div",{class:"card-deck"},r.a.createElement("a",{class:"card border-0",onClick:function(){ie("winning")}},r.a.createElement(q,null)),r.a.createElement("a",{class:"card border-0",onClick:function(){ie("losing")}},r.a.createElement(G,null)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Search:"),r.a.createElement("input",{className:"form-control",value:O,onChange:function(e){return j(e.target.value)}}))),r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Search by:"),r.a.createElement("select",{class:"form-control",id:"exampleFormControlSelect1",onChange:function(e){return C(e.target.value)}},r.a.createElement("option",{value:"title"},"Title"),r.a.createElement("option",{value:"barCode"},"Bar Code"),r.a.createElement("option",{value:"gtin"},"GTIN"),r.a.createElement("option",{value:"minPrice"},"Min Price"),r.a.createElement("option",{value:"maxPrice"},"Max Price"),r.a.createElement("option",{value:"price"},"Price")))),r.a.createElement("div",{className:"col-1"},r.a.createElement("a",{className:"btn btn-secondary",style:{color:"#fff",marginTop:"30px",float:"right"},onClick:function(){var a=function(){var e="";return O.length>0&&(e+="&search="+O+"&searchBy="+P),H(e),e}();d(!0),M(e.guid,v,E,a,K).then((function(e){l(e),d(!1)})).catch((function(e){console.log(e)}))}},"Search")),r.a.createElement("div",{className:"col-2"},O.length>0?r.a.createElement("a",{className:"btn btn-outline-secondary",style:{marginTop:"30px"},onClick:function(){H(""),j(""),d(!0),M(e.guid,v,E,"",K).then((function(e){l(e),d(!1)})).catch((function(e){console.log(e)}))}},"Clear Search"):null),r.a.createElement("div",{className:"col-2"},r.a.createElement("a",{className:"btn btn-secondary",onClick:function(){d(!0),F(e.guid,v,E,$,K).then((function(e){l(e),d(!1)})).catch((function(e){console.log(e)}))},style:{color:"#fff",marginTop:"30px",float:"right"}},"Refresh Results")),r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Results per page"),r.a.createElement("select",{class:"form-control",id:"exampleFormControlSelect1",onChange:function(a){return function(a){d(!0),x(a.target.value),M(e.guid,a.target.value,E,$,K).then((function(e){l(e),d(!1)})).catch((function(e){console.log(e)}))}(a)}},r.a.createElement("option",null,"10"),r.a.createElement("option",null,"20"),r.a.createElement("option",null,"30"),r.a.createElement("option",null,"50"),r.a.createElement("option",null,"100"))))),r.a.createElement("table",{className:"table table-striped table-bordered table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",onClick:function(){return oe("title")}},"Title","title"==L?"asc"==R?r.a.createElement("i",{className:"fa fa-chevron-up",style:{marginLeft:"5px"}}):"desc"==R?r.a.createElement("i",{className:"fa fa-chevron-down",style:{marginLeft:"5px"}}):null:null),r.a.createElement("th",{scope:"col",onClick:function(){return oe("mpBarcode")}},"Bar Code","mpBarcode"==L?"asc"==R?r.a.createElement("i",{className:"fa fa-chevron-up",style:{marginLeft:"5px"}}):"desc"==R?r.a.createElement("i",{className:"fa fa-chevron-down",style:{marginLeft:"5px"}}):null:null),r.a.createElement("th",{scope:"col",onClick:function(){return oe("gtin")}},"GTIN","gtin"==L?"asc"==R?r.a.createElement("i",{className:"fa fa-chevron-up",style:{marginLeft:"5px"}}):"desc"==R?r.a.createElement("i",{className:"fa fa-chevron-down",style:{marginLeft:"5px"}}):null:null),r.a.createElement("th",{scope:"col",onClick:function(){return oe("minPrice")}},"Minimum Price","minPrice"==L?"asc"==R?r.a.createElement("i",{className:"fa fa-chevron-up",style:{marginLeft:"5px"}}):"desc"==R?r.a.createElement("i",{className:"fa fa-chevron-down",style:{marginLeft:"5px"}}):null:null),r.a.createElement("th",{scope:"col",onClick:function(){return oe("maxPrice")}},"Preferred Price","maxPrice"==L?"asc"==R?r.a.createElement("i",{className:"fa fa-chevron-up",style:{marginLeft:"5px"}}):"desc"==R?r.a.createElement("i",{className:"fa fa-chevron-down",style:{marginLeft:"5px"}}):null:null),r.a.createElement("th",{scope:"col",onClick:function(){return oe("currentPrice")}},"Current Price","currentPrice"==L?"asc"==R?r.a.createElement("i",{className:"fa fa-chevron-up",style:{marginLeft:"5px"}}):"desc"==R?r.a.createElement("i",{className:"fa fa-chevron-down",style:{marginLeft:"5px"}}):null:null),r.a.createElement("th",{scope:"col",onClick:function(){return oe("buyBox")}},"Buybox","buyBox"==L?"asc"==R?r.a.createElement("i",{className:"fa fa-chevron-up",style:{marginLeft:"5px"}}):"desc"==R?r.a.createElement("i",{className:"fa fa-chevron-down",style:{marginLeft:"5px"}}):null:null),r.a.createElement("th",null,"Takealot Link"))),r.a.createElement("tbody",null,u?r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center",colSpan:"8"},r.a.createElement("i",{className:"fa fa-spinner fa-spin fa-2x"}))):c.length>0?c.map((function(e){return r.a.createElement("tr",{style:{color:"Active"==e.status?"black":"darkgrey"}},r.a.createElement("td",{onClick:function(){return me("/product/".concat(e.offerId))}},e.title),r.a.createElement("td",{onClick:function(){return me("/product/".concat(e.offerId))}},e.barCode),r.a.createElement("td",{onClick:function(){return me("/product/".concat(e.offerId))}},e.gtin),r.a.createElement("td",{onClick:function(){return me("/product/".concat(e.offerId))}},"R ",e.minPrice?e.minPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0.00"),r.a.createElement("td",{onClick:function(){return me("/product/".concat(e.offerId))}},"R"," ",e.preferredSalePrice?e.preferredSalePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"0.00"),r.a.createElement("td",{onClick:function(){return me("/product/".concat(e.offerId))}},e.currentPrice?"R "+e.currentPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):"Disabled"),r.a.createElement("td",{onClick:function(){return me("/product/".concat(e.offerId))}},r.a.createElement("span",{style:"Active"==e.status?"Winning"==e.buybox?{color:"#009900"}:{color:"#ff0000"}:{}},"Active"==e.status?e.buybox:"Disabled")),r.a.createElement("td",null,r.a.createElement("a",{href:e.url,target:"_blank"},"View Offer")))})):r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center",colSpan:"8"},r.a.createElement("label",null,"No offers to display. Please refresh results"))))),r.a.createElement("div",{className:"row",style:{marginBottom:"30px"}},r.a.createElement("div",{className:"col-5"},E<2?null:r.a.createElement("button",{className:"btn btn-default",onClick:function(){d(!0);var a=E-1;M(e.guid,v,a,$,K).then((function(t){d(!1),h(a),e.storePageNumber(a),l(t)})).catch((function(e){console.log(e)}))}},"<<"," Previous")),r.a.createElement("div",{className:"col-2 text-center",style:{paddingTop:"10px"}},r.a.createElement("span",{className:"count-container",style:{padding:"3px 10px"}},"Page ",E)),r.a.createElement("div",{className:"col-5 text-right"},r.a.createElement("button",{className:"btn btn-default",onClick:function(){d(!0);var a=E+1;M(e.guid,v,a,$,K).then((function(t){d(!1),h(a),e.storePageNumber(a),l(t)}))}},"Next ",">>"))))),r.a.createElement("div",{style:{height:"50px"}}))}))),W=t(16),K=function(e){var a=Object(n.useState)(),t=Object(i.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),m=o[0],d=o[1],p=Object(n.useState)([]),f=Object(i.a)(p,2),E=f[0],h=f[1],g=Object(n.useState)(0),b=Object(i.a)(g,2),v=b[0],x=b[1],N=Object(n.useState)(0),y=Object(i.a)(N,2),O=y[0],j=y[1],k=Object(n.useState)(1),S=Object(i.a)(k,2),P=S[0],C=S[1],I=Object(n.useState)(!1),z=Object(i.a)(I,2),L=z[0],A=z[1],T=Object(n.useState)(!1),B=Object(i.a)(T,2),R=B[0],M=B[1],_=Object(n.useState)({min:{error:!1,message:""},max:{error:!1,message:""},increment:{error:!1,message:""}}),F=Object(i.a)(_,1)[0],D=Object(n.useState)(F),J=Object(i.a)(D,2),$=J[0],q=J[1];Object(n.useEffect)((function(){u.a.get("https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev/offers/"+e.match.params.id,{headers:{"x-api-key":"A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A"}}).then((function(e){"Active"==e.data.status?l(!0):l(!1),d(!1);var a=e.data.image;null!==e.data.minPrice&&x(e.data.minPrice),null!==e.data.maxPrice&&j(e.data.maxPrice),null!==e.data.increment&&C(e.data.increment),h({title:e.data.offerTitle,price:e.data.currentPrice,description:e.data.description,image:e.data.image?a.replace("{size}","full"):"",brand:e.data.brand,offerId:e.data.offerId,id:e.data.productLineId,url:e.data.url}),G("description",e.data.description)})).catch((function(e){console.log(e)}))}),[]);for(var G=function(e,a){var t=document.getElementById(e);t&&(t.innerHTML=a)},H=function(){return G("incrementError",""),G("maxError",""),G("minError",""),!!function(){var e=F,a=!0;return console.log(e),console.log(v,O),parseInt(v)<1?(G("minError","Please provide a valid minimum value"),a=!1):parseInt(v)>parseInt(O)&&(G("minError","The minimum value can not be more than the maximum value"),a=!1),parseInt(O)<1?(G("maxError","Please provide a valid maximum value"),a=!1):parseInt(v)>parseInt(O)&&(G("maxError","The maximum value can not be less than the minimum value"),a=!1),parseInt(P)<1&&(G("incrementError","Please provide a valid increment value"),a=!1),q(e),console.log($),a}()&&U()},U=function(){M(!0),A(!1);u.a.post("https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev/offers/thresholds/update",{offerId:E.offerId,max:parseFloat(O),min:parseFloat(v),increment:parseInt(P),productId:E.id},{headers:{"x-api-key":"A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A"}}).then((function(e){console.log(e),A(!0)})).catch((function(e){console.log(e)})).finally((function(){M(!1)}))},K=[],Q=0;Q<4;Q++)K.push({id:Q,datetime:"15 minutes ago",reviewer:"Maniruzzaman Akash",message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),K.push({id:Q,datetime:"2 hours ago",reviewer:"Vincent van Wyk",message:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."});K.map((function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("img",{src:"https://image.ibb.co/jw55Ex/def_face.jpg",className:"img img-rounded img-fluid"}),r.a.createElement("p",{className:"text-secondary text-center"},e.datetime)),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("p",null,r.a.createElement("a",{className:"float-left",href:"https://maniruzzaman-akash.blogspot.com/p/contact.html"},r.a.createElement("strong",null,e.reviewer)),r.a.createElement("span",{className:"float-right"},r.a.createElement("i",{className:"text-warning fa fa-star"})),r.a.createElement("span",{className:"float-right"},r.a.createElement("i",{className:"text-warning fa fa-star"})),r.a.createElement("span",{className:"float-right"},r.a.createElement("i",{className:"text-warning fa fa-star"})),r.a.createElement("span",{className:"float-right"},r.a.createElement("i",{className:"text-warning fa fa-star"}))),r.a.createElement("div",{className:"clearfix"}),r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:"0.8em"}},e.message)))}));return r.a.createElement(w,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-left"},r.a.createElement("div",{className:"container py-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:m?"col-12 text-center":"col-12"},m?r.a.createElement("i",{className:"fa fa-spinner fa-spin fa-3x",style:{marginTop:"100px"}}):c?r.a.createElement(W.d,{style:{marginBottom:"150px"}},r.a.createElement(W.b,null,r.a.createElement(W.a,null,"Details"),r.a.createElement(W.a,null,r.a.createElement("i",{className:"fa fa-cogg"}),"Settings")),r.a.createElement(W.c,{style:{padding:"10px"}},r.a.createElement("div",{className:"row",style:{marginBottom:"30px"}},r.a.createElement("div",{className:"col-12"},r.a.createElement("h5",null,"Offer Details:"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:E.image,className:"img-fluid",style:{width:"400px",marginBottom:"10px",border:"1px solid #d2d1d1"}}),r.a.createElement("h6",null,r.a.createElement("b",null,"Price: R ",E.price,".00")),r.a.createElement("a",{className:"btn btn-success",style:{color:"#fff",marginTop:"10px"},href:E.url,target:"_blank"},"View Offer on Takealot")),r.a.createElement("div",{className:"col-8"},r.a.createElement("h5",null,r.a.createElement("b",null,E.title)),r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("b",null,"Brand: ",E.brand)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,r.a.createElement("b",null,"Description:")),r.a.createElement("br",null),r.a.createElement("div",{className:"post__content",dangerouslySetInnerHTML:{__html:E.description}})))),r.a.createElement(W.c,{style:{padding:"10px"}},r.a.createElement("div",{className:"row",style:{marginBottom:"30px"}},r.a.createElement("div",{className:"col-12"},r.a.createElement("h5",null,"Offer Settings:"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},L?r.a.createElement("div",{className:"row justify-content-center offer-message"},r.a.createElement("div",{className:"col-8"},"Offer updated successfully")):null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("label",{className:"form-label"},"Minimum Value"),r.a.createElement("input",{type:"number",className:"form-control",value:v,onChange:function(e){return x(e.target.value)}}),r.a.createElement("small",{style:{color:"#ff0000"},id:"minError"}))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("label",{className:"form-label"},"Maximum value"),r.a.createElement("input",{type:"number",className:"form-control",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("small",{style:{color:"#ff0000"},id:"maxError"}))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("a",{className:"btn btn-success",style:{color:"#fff",marginTop:"30px"},onClick:function(){return H()}},"Save",R?r.a.createElement("i",{className:"fa fa-spinner fa-spin",style:{marginLeft:"5px"}}):null))))))):r.a.createElement("h3",null,"Offer is no longer valid")))))))},Q=function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-left"},r.a.createElement("div",{className:"container py-4"},r.a.createElement("h4",null,"Whoops, the page you are looking for does not exist!")))))},V=t(33),Z=function(e){var a=e.component,t=e.authenticated,n=Object(V.a)(e,["component","authenticated"]);return r.a.createElement(o.b,Object.assign({render:function(e){return t?r.a.createElement(o.a,{to:"/dashboard",push:!0}):r.a.createElement(a,e)}},n))},Y=function(e){var a=e.component,t=e.authenticated,n=Object(V.a)(e,["component","authenticated"]);return r.a.createElement(o.b,Object.assign({render:function(e){return t?r.a.createElement(a,e):r.a.createElement(o.a,{to:"/",push:!0})}},n))};var X=Object(h.b)((function(e){return{authenticated:e.authenticated}}))((function(e){return r.a.createElement(s.a,null,r.a.createElement(o.d,null,r.a.createElement(Y,{exact:!0,path:"/products",component:U,authenticated:e.authenticated}),r.a.createElement(Y,{exact:!0,path:"/product/:id",component:K,authenticated:e.authenticated}),r.a.createElement(Y,{exact:!0,path:"/dashboard",component:H,authenticated:e.authenticated}),r.a.createElement(Z,{exact:!0,path:"/",component:g,authenticated:e.authenticated}),r.a.createElement(Z,{exact:!0,path:"/register",component:b,authenticated:e.authenticated}),r.a.createElement(o.b,{path:"*",component:Q})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.store=C;var ee=window.localStorage;window.store.subscribe((function(){ae(C.getState())}));var ae=function(e){try{var a=JSON.stringify(e);ee.setItem("price.beater",a)}catch(te){console.log(te)}};l.a.render(r.a.createElement(h.a,{store:C},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.296cf4b3.chunk.js.map