(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(5),c=a.n(l),r=(a(15),a(2)),o=a(3),s=a(6),u=a(7),d=a(1),h=a(9),p=a(8),b=(a(16),a(17),function(e){return n.a.createElement("button",{onClick:function(t){return e.click&&e.click(e.label)},className:"\n            button\n            ".concat(e.operation?"operation":"","\n            ").concat(e.double?"double":"","\n            ").concat(e.triple?"triple":"","\n        ")},e.label)}),v=(a(18),function(e){return n.a.createElement("div",{className:"display"},e.value)}),f={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],currentValueIndex:0},k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state=Object(o.a)({},f),i.clearMemory=i.clearMemory.bind(Object(d.a)(i)),i.setOperation=i.setOperation.bind(Object(d.a)(i)),i.addDigit=i.addDigit.bind(Object(d.a)(i)),i.additiveInverse=i.additiveInverse.bind(Object(d.a)(i)),i}return Object(u.a)(a,[{key:"clearMemory",value:function(){this.setState(Object(o.a)({},f))}},{key:"additiveInverse",value:function(){console.log(this.state);var e=Object(r.a)(this.state.values),t=this.state.currentValueIndex;e[t]*=-1,this.setState({values:e,displayValue:e[t]})}},{key:"setOperation",value:function(e){if(0===this.state.currentValueIndex)this.setState({operation:e,currentValueIndex:1,clearDisplay:!0});else if(void 0!==this.state.values[1]){var t="="===e,a=!1,i=this.state.operation,n=Object(r.a)(this.state.values);switch(i){case"+":n[0]=n[0]+n[1],n[1]=0;break;case"-":n[0]=n[0]-n[1],n[1]=0;break;case"x":n[0]=n[0]*n[1],n[1]=0;break;case"/":0===n[1]?a=!0:(n[0]=n[0]/n[1],n[1]=0);break;case"%":n[0]=n[0]/100*n[1],n[1]=0}n[0]=n[0]%1!==0?n[0].toFixed(3):n[0],a?this.setState(Object(o.a)({},f,{displayValue:"ERROR"})):this.setState({displayValue:n[0],operation:t?null:e,currentValueIndex:t?0:1,clearDisplay:!t,values:n})}}},{key:"addDigit",value:function(e){if("."!==e||!this.state.displayValue.includes(".")){var t=("0"===this.state.displayValue&&"."!==e||"ERROR"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+e;if(this.setState({displayValue:t,clearDisplay:!1}),"."!==e){var a=this.state.currentValueIndex,i=parseFloat(t),n=Object(r.a)(this.state.values);n[a]=i,this.setState({values:n})}}}},{key:"render",value:function(){return n.a.createElement("div",{className:"calculator"},n.a.createElement(v,{value:this.state.displayValue}),n.a.createElement(b,{label:"AC",click:this.clearMemory}),n.a.createElement(b,{label:"+/-",click:this.additiveInverse}),n.a.createElement(b,{label:"%",click:this.setOperation}),n.a.createElement(b,{label:"/",operation:!0,click:this.setOperation}),n.a.createElement(b,{label:"7",click:this.addDigit}),n.a.createElement(b,{label:"8",click:this.addDigit}),n.a.createElement(b,{label:"9",click:this.addDigit}),n.a.createElement(b,{label:"x",operation:!0,click:this.setOperation}),n.a.createElement(b,{label:"4",click:this.addDigit}),n.a.createElement(b,{label:"5",click:this.addDigit}),n.a.createElement(b,{label:"6",click:this.addDigit}),n.a.createElement(b,{label:"-",operation:!0,click:this.setOperation}),n.a.createElement(b,{label:"1",click:this.addDigit}),n.a.createElement(b,{label:"2",click:this.addDigit}),n.a.createElement(b,{label:"3",click:this.addDigit}),n.a.createElement(b,{label:"+",operation:!0,click:this.setOperation}),n.a.createElement(b,{label:"0",click:this.addDigit,double:!0}),n.a.createElement(b,{label:".",click:this.addDigit}),n.a.createElement(b,{label:"=",operation:!0,click:this.setOperation}))}}]),a}(i.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(n.a.createElement("div",null,n.a.createElement("h1",null,"Calculator"),n.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactCalculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ReactCalculator","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var i=a.headers.get("content-type");404===a.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.7134b43f.chunk.js.map