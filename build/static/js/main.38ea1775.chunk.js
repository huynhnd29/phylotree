(this["webpackJsonpuet-Phylotree"]=this["webpackJsonpuet-Phylotree"]||[]).push([[0],{249:function(t,e,n){},370:function(t,e,n){},373:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(31),i=n.n(a),o=(n(249),n(85),n(5)),l=n(6),s=n(1);n(114);var u=n(8);function d(t){try{for(var e=1,n=[],c={},r=t.split(/\s*(;|\(|\)|,|:)\s*/),a=0;a<r.length;a++){var i=r[a],o={};switch(i){case"(":c.branchset=[o],n.push(c),c=o;break;case",":n[n.length-1].branchset.push(o),c=o;break;case")":c=n.pop();break;case":":break;default:var l=r[a-1];")"===l||"("===l||","===l?(c.name=i,c.id=e,c.color="#000",e++):":"===l&&(c.length=parseFloat(i))}}return c}catch(s){alert("ERROR INPUT")}}var h=n(46),b=n(47);n(111);function f(t){return function t(e){var n="";if(e.hasOwnProperty("branchset")){var c=[];e.branchset.forEach((function(e){var n=t(e);c.push(n)}));var r=c.join();e.hasOwnProperty("name")&&(n="("+r+")"+e.name),e.hasOwnProperty("length")&&(n=n+":"+e.length)}else{var a="";e.hasOwnProperty("name")&&(a=e.name),e.hasOwnProperty("length")&&(a=a+":"+e.length),n+=a}return n}(t)+";"}var j=n(24);n(45),n.p;function g(t){return t.branchset?t.branchset.map((function(t){return g(t)})).reduce((function(t,e){return t+e})):1}function m(t){return t.data.length+(t.children?o.g(t.children,m):0)}function x(t,e,n){t.radius=(e+=Math.max(t.data.length,0))*n,t.children&&t.children.forEach((function(t){x(t,e,n)}))}function O(t){var e,n=t.tree,a=t.setTree,i=t.clickName,l=void 0===i?function(){}:i,d=t.getConfig,O=void 0===d?function(){}:d,p=t.showBranchLength,v=t.layout,y=t.Horizontal,k=t.circularNumber,C=t.swap,N=t.selectNode,A=t.showBranchLengthNumber,E=Object(c.useRef)(),w=Object(c.useRef)("#1273dE"),I=g(n),S=3.77*I*k,L=S/4,B="circular"===v?2*L:20*I,P="circular"===v?2*L:30*I,R="circular"===v?S:20*I*2,M="circular"===v?L:I;function H(t,e){for(var n=0;n<t.length;++n){var c=t[n];if(c.id===e)return t.splice(n,1),!0;if(c.branchset&&H(c.branchset,e))return 0===c.branchset.length&&(delete c.branchset,t.splice(n,1)),!0}}function F(t,e){for(var n=0;n<t.length;++n){var c=t[n];if(c.id===e)return t[n].branchset.push(c.branchset[0]),t[n].branchset.shift(),!0;if(c.branchset)return!F(c.branchset,e)||(0===c.branchset.length&&(delete c.branchset,t.splice(n,1)),!0)}}function T(t){var e=t.target.__data__.data.id;F(n.branchset,e),a(n),_(n)}function D(t){var e=t.target.__data__.data.id;H(n.branchset,e),a(n),_(n)}function _(t){var e=o.d().size([R/2,M]).separation((function(t,e){return 1})),n=o.e(t,(function(t){return t.branchset})).sum((function(t){return t.branchset?0:1})).sort((function(t,e){return(t.value-e.value)*C||o.a(t.data.length,e.data.length)}));e(n),x(n,n.data.length=0,L/m(n)),E.current.innerHTML="";var c=o.j(E.current).attr("font-family","sans-serif").attr("font-size",10);"circular"===v&&c.attr("transform","translate(".concat(L+180,",").concat(L+180,")"));c.append("g").attr("fill","none").attr("stroke",(function(t){return"#ffff"})).attr("stroke-width","1.75").selectAll("path").data(n.links()).join("path").on("mouseover",(function(t){o.j(this).style("stroke-width","5")})).on("mouseout",(function(t){o.j(this).style("stroke-width","1.75")})).on("click",(function(t){o.j(this).style("stroke",null===w||void 0===w?void 0:w.current)})).attr("opacity",1).style("stroke",(function(t){return t.source.data.color})).attr("d",p?function(t){return r(t.source.x,t.source.radius,t.target.x,t.target.radius)}:function(t){return r(t.source.x,t.source.y,t.target.x,t.target.y)});function r(t,e,n,c){if("linear"===v)return"M".concat(5*e*y," ").concat(t,"V").concat(n,"H").concat(5*c*y);if("circular"===v){var r=Math.cos(t=(t-90)/180*Math.PI),a=Math.sin(t),i=Math.cos(n=(n-90)/180*Math.PI),o=Math.sin(n);return"M\n          ".concat(e*r*y,"\n          ,\n          ").concat(e*a*y,"\n          ").concat(n===t?"":"A\n              ".concat(e,"\n              ,\n              ").concat(e,"\n               0 0\n              ").concat(n>t?1:0,"\n              ").concat(e*i*y,"\n              ,\n              ").concat(e*o*y),"\n          L\n          ").concat(c*i*y,"\n          ,\n          ").concat(c*o*y)}}function a(t){return function(e){o.j(this).classed("label--active",t)}}c.append("g").attr("fill","none").attr("stroke","#000").attr("stroke-opacity","0.2").selectAll("path").data(n.links().filter((function(t){return!t.target.children}))).enter().append("path").attr("opacity",1).attr("d",p?function(t){return r(t.target.x,t.target.radius,t.target.x,t.target.y)}:function(t){return r(t.target.x,t.target.y,t.target.x,t.target.y)}),"linear"===v?(c.selectAll(".node").data(n.descendants()).join("circle").attr("class","node").attr("r",4).attr("fill","black").attr("cx",(function(t){return p?5*t.radius*y:5*t.y*y})).attr("cy",(function(t){return t.x})).on("mouseover",(function(t){o.j(this).attr("r",7)})).on("mouseout",(function(t){o.j(this).attr("r",4)})).on("click",(function(t){switch(N){case"delete":D(t);break;case"swap":T(t)}})).attr("opacity",0).attr("opacity",1),!0===A&&c.append("g").selectAll("text2").data(n.descendants()).join("text").attr("x",(function(t){return p?5*t.radius*y-50:5*t.y*y-50})).attr("y",(function(t){return t.x-4})).text((function(t){return(String(t.data.length)||"").replace(/_/g," ")})).on("click",(function(t){console.log(t)})),c.append("g").selectAll("text").data(n.leaves()).join("text").attr("x",(function(t){return 5*t.y*y+5})).attr("y",(function(t){return t.x+4})).text((function(t){return(t.data.name||"").replace(/_/g," ")})).on("mouseover",a(!0)).on("mouseout",a(!1)).on("click",(function(t){console.log(t)}))):"circular"===v&&c.append("g").selectAll("text").data(n.leaves()).join("text").attr("dy",".31em").attr("transform",(function(t){return"rotate(".concat(t.x-90,") translate(").concat(L*y+4*y,",0)").concat(t.x<180?"":" rotate(180)")})).attr("text-anchor",(function(t){return t.x<180?"start":"end"})).text((function(t){return(t.data.name||"").replace(/_/g," ")})).on("mouseover",a(!0)).on("mouseout",a(!1)).on("click",(function(t){l(t)})),function(t,e,n){var c={},r=[];t.leaves().forEach((function(t){r.push({name:t.data.name,x:t.x,y:t.y})})),c.leafloc=r,c.treeheight=e,n(c)}(n,20*I,O)}Object(c.useEffect)((function(){_(n)}),[l,O,p,M,I,n,v,R,L,k,C,N,A]);var G=r.a.forwardRef((function(t,e){return Object(s.jsx)("div",{ref:e,style:{width:P,height:B,display:"flex",flexDirection:"row",marginTop:"4em",marginLeft:"5em"},id:"widget",children:Object(s.jsxs)("svg",{width:P,height:B,id:"svg-chart",children:[Object(s.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .link--active {\n                stroke: #000 !important;\n                stroke-width: 1.5px;\n            }\n            .label--active {\n                font-weight: bold;\n            }"}}),Object(s.jsx)("g",{ref:E})]})})})),z=Object(c.useRef)();return Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{interactive:!0,content:Object(s.jsx)(h.a,{color:null===w||void 0===w?void 0:w.curent,onChangeComplete:function(t){return function(t){w.current=t.hex;for(var e=document.getElementsByClassName("ref-button"),n=0;n<e.length;n++)e[n].style.backgroundColor=t.hex}(t)}}),children:Object(s.jsx)("div",(e={className:"ref-button btn btn-primary",style:{backgroundColor:"#1273DE"}},Object(u.a)(e,"style",{position:"absolute",top:"1em",outline:"hidden",left:"3.5em"}),Object(u.a)(e,"children","Color Branch"),e))}),Object(s.jsx)("button",{onClick:function(t){f(n)},title:"export newick","data-toggle":"modal","data-target":"#myModal",style:{position:"absolute",top:"1em",outline:"hidden",left:"20em"},className:"btn btn-light ",children:"Export"}),Object(s.jsx)("div",{children:Object(s.jsx)(G,{ref:z})}),Object(s.jsx)("button",{onClick:function(){return Object(j.exportComponentAsJPEG)(z)},className:"btn btn-light",style:{position:"absolute",top:"1em",outline:"hidden",left:"28em"},children:"Export JPEG"}),Object(s.jsx)("button",{onClick:function(){return Object(j.exportComponentAsPNG)(z)},className:"btn btn-light",style:{position:"absolute",top:"1em",outline:"hidden",left:"36em"},children:"Export PNG"}),Object(s.jsx)("a",{href:"".concat(".","/option.html"),rel:"noopener noreferrer",className:"btn btn-light",style:{position:"absolute",top:"1em",outline:"hidden",left:"44em",border:"solid"},children:"Big Tree"}),Object(s.jsx)("div",{class:"modal fade",id:"myModal",role:"dialog",children:Object(s.jsx)("div",{class:"modal-dialog",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsxs)("div",{class:"modal-header",children:[Object(s.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"}),Object(s.jsx)("h4",{class:"modal-title",children:"Export Newick"})]}),Object(s.jsx)("div",{class:"modal-body",children:Object(s.jsx)("p",{children:f(n)})}),Object(s.jsx)("div",{class:"modal-footer",children:Object(s.jsx)("button",{type:"button",class:"btn btn-default","data-dismiss":"modal",children:"Close"})})]})})})]})}O.defaultProps={data:"",clickName:null,getChildLoc:null,ChangebranchLengthID:"notpossible",layout:"linear"};var p=n.p+"static/media/search.387f749f.svg",v=n.p+"static/media/icon.3c79d430.svg",y=n.p+"static/media/noBranch.02e126a4.svg",k=n.p+"static/media/horizontalIn.54e89cb4.svg",C=n.p+"static/media/plus.2c659a77.svg",N=n.p+"static/media/minus.f2fbd4fc.svg",A=n.p+"static/media/branchLength.634d1966.svg",E=n.p+"static/media/hidden.f79bcf37.svg",w=n.p+"static/media/arrows.90841d5e.svg",I=n.p+"static/media/arrow2.4e358f90.svg",S=n.p+"static/media/cricle.41810296.svg",L="(((EELA:0.150276,CONGERA:0.213019):0.230956,(EELB:0.263487,CONGERB:0.202633):0.246917):0.094785,((CAVEFISH:0.451027,(GOLDFISH:0.340495,ZEBRAFISH:0.390163):0.220565):0.067778,((((((NSAM:0.008113,NARG:0.014065):0.052991,SPUN:0.061003,(SMIC:0.027806,SDIA:0.015298,SXAN:0.046873):0.046977):0.009822,(NAUR:0.081298,(SSPI:0.023876,STIE:0.013652):0.058179):0.091775):0.073346,(MVIO:0.012271,MBER:0.039798):0.178835):0.147992,((BFNKILLIFISH:0.317455,(ONIL:0.029217,XCAU:0.084388):0.201166):0.055908,THORNYHEAD:0.252481):0.061905):0.157214,LAMPFISH:0.717196,((SCABBARDA:0.189684,SCABBARDB:0.362015):0.282263,((VIPERFISH:0.318217,BLACKDRAGON:0.109912):0.123642,LOOSEJAW:0.397100):0.287152):0.140663):0.206729):0.222485,(COELACANTH:0.558103,((CLAWEDFROG:0.441842,SALAMANDER:0.299607):0.135307,((CHAMELEON:0.771665,((PIGEON:0.150909,CHICKEN:0.172733):0.082163,ZEBRAFINCH:0.099172):0.272338):0.014055,((BOVINE:0.167569,DOLPHIN:0.157450):0.104783,ELEPHANT:0.166557):0.367205):0.050892):0.114731):0.295021)myroot";function B(){var t,e=Object(c.useState)(!0),n=Object(l.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),u=o[0],h=o[1],b=Object(c.useState)(1.1),f=Object(l.a)(b,2),j=f[0],g=f[1],m=Object(c.useState)(1),x=Object(l.a)(m,2),B=x[0],P=x[1],R=Object(c.useState)(!0),M=Object(l.a)(R,2),H=M[0],F=M[1],T=Object(c.useState)(d(L)),D=Object(l.a)(T,2),_=D[0],G=D[1],z=Object(c.useState)("linear"),J=Object(l.a)(z,2),K=J[0],V=J[1],W=Object(c.useState)(1),U=Object(l.a)(W,2),q=U[0],X=U[1],Z="",Y=function(t){var e=document.querySelectorAll("text");if(""!==t)for(var n=0;n<e.length;n++)e[n].textContent.includes(t)?(e[n].style.fill="red",e[n].style.fontWeight="bold"):(e[n].style.fill="#000",e[n].style.fontWeight="100");else for(var c=0;c<e.length;c++)e[c].style.fill="#000",e[c].style.fontWeight="";console.log(tt)},Q=Object(c.useState)(L),$=Object(l.a)(Q,2),tt=$[0],et=($[1],function(e){var n=t.result;G(d(n))});return Object(s.jsxs)("div",{style:{display:"flex",height:500,flexDirection:"column",width:"100%",marginTop:"4em"},children:[Object(s.jsxs)("div",{className:"btn-bar",children:[Object(s.jsxs)("div",{className:"btn-left-bar",children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(e){return n=e.target.files[0],(t=new FileReader).onloadend=et,void t.readAsText(n);var n}})}),Object(s.jsx)("button",{onClick:function(){return F(!H)},title:"BranchNumber",children:Object(s.jsx)("img",{src:A,alt:""})}),Object(s.jsx)("button",{onClick:function(){return a(!r)},title:"No Branch Length",children:Object(s.jsx)("img",{src:y,alt:""})}),Object(s.jsx)("button",{onClick:function(){return function(){for(var t=document.querySelectorAll("text"),e=0;e<t.length;e++)t[e].remove()}()},title:"hiddenLeaves",children:Object(s.jsx)("img",{src:E,alt:""})}),Object(s.jsx)("button",{onClick:function(){return g(j+.1)},title:"horizontal Out",children:Object(s.jsx)("img",{src:I,alt:""})}),Object(s.jsx)("button",{onClick:function(){return g(j-.1)},title:"horizontal In",children:Object(s.jsx)("img",{src:k,alt:""})}),Object(s.jsx)("button",{onClick:function(){return P(-1*B)},title:"swap",children:Object(s.jsx)("img",{src:w,alt:""})}),Object(s.jsx)("button",{onClick:function(){"linear"===K?V("circular"):(V("linear"),X(1))},title:"linear"===K?"linear":"circular",children:"linear"===K?Object(s.jsx)("img",{src:S,alt:""}):Object(s.jsx)("img",{src:v,alt:""})}),"circular"===K?Object(s.jsx)("button",{onClick:function(){return X(q+.5)},title:"fix cricle",children:Object(s.jsx)("img",{src:C,alt:""})}):null,"circular"===K?Object(s.jsx)("button",{onClick:function(){return X(q-.5)},title:"fix cricle",children:Object(s.jsx)("img",{src:N,alt:""})}):null]}),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"search-leaves",children:[Object(s.jsx)("input",{type:"text",placeholder:"search",onChange:function(t){return e=t.target.value,void(Z=e);var e},onKeyPress:function(t){"Enter"===t.key&&Y(t.target.value)}}),Object(s.jsx)("button",{onClick:function(){return Y(Z)},className:"btn-search",children:Object(s.jsx)("img",{src:p,alt:""})})]})})]}),Object(s.jsx)(O,{data:tt,tree:_,setTree:G,clickName:function(t){console.log(t)},getConfig:function(t){console.log(t.leafloc)},layout:K,showBranchLengthNumber:H,selectNode:"delete",showBranchLength:r,Horizontal:j,circularNumber:q,swap:B}),Object(s.jsx)("button",{title:"export newick","data-toggle":"modal","data-target":"#myModal2",style:{position:"absolute",top:"1em",outline:"hidden",left:"12em"},className:"btn btn-light ",children:"Input"}),Object(s.jsx)("div",{class:"modal fade",id:"myModal2",role:"dialog",children:Object(s.jsx)("div",{class:"modal-dialog",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsxs)("div",{class:"modal-header",children:[Object(s.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"}),Object(s.jsx)("h4",{class:"modal-title",children:"Input Newick"})]}),Object(s.jsx)("div",{class:"modal-body",children:Object(s.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",style:{width:"100%",height:400},type:"text",placeholder:"Input Newick",onChange:function(t){return h(t.target.value)}})}),Object(s.jsx)("div",{class:"modal-footer",children:Object(s.jsx)("button",{type:"button",class:"btn btn-default","data-dismiss":"modal",onClick:function(){return function(t){var e;0!==(null===t||void 0===t||null===(e=t.branchset)||void 0===e?void 0:e.length)&&(null===t||void 0===t?void 0:t.id)&&(null===t||void 0===t?void 0:t.color)?G(t):alert("ERROR Input")}(d(u))},children:"OK"})})]})})})]})}n(119);var P=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(B,{})})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,383)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};n(370);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root")),R()},85:function(t,e,n){}},[[373,1,2]]]);
//# sourceMappingURL=main.38ea1775.chunk.js.map