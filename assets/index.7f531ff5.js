import{j as y,P as i,r as f,F as Y,a as G,b as T,c as v,d as K,e as V,R as J,f as W}from"./vendor.5b066367.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const x of a.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&h(x)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function h(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}};X();const e=y.exports.jsx,s=y.exports.jsxs,Z=y.exports.Fragment,g=({children:t})=>e("div",{id:"home",className:"w-full bg-center bg-cover h-3/4 bg-sanFrancisco lg:bg-sanFranciscoDesktop",children:e("div",{className:"absolute flex flex-col items-center w-full h-full py-4 space-y-96 lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start",children:t})});g.propTypes={children:i.node.isRequired};const k=({name:t,placeholder:r})=>e("input",{type:"search",name:t,className:"p-3 transition duration-300 rounded-full shadow-sm outline-none focus-within:shadow-sm focus:right-2 focus:w-11/12 lg:hidden",placeholder:r});k.propTypes={name:i.string.isRequired,placeholder:i.string.isRequired};const R=({title:t})=>e("button",{className:"w-48 p-4 text-lg font-semibold transition-all duration-500 ease-in-out transform bg-white rounded-full shadow-sm lg:ml-16 text-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110",children:t});R.propTypes={title:i.string.isRequired};const q=({content:t})=>e("div",{className:"hidden h-auto pb-6 lg:w-2/5 lg:flex",children:e("p",{className:"ml-16 text-4xl font-bold text-gray-700",children:t})});q.propTypes={content:i.string.isRequired};g.Search=k;g.ButtonExplore=R;g.Paragraph=q;const c=({children:t,className:r})=>e("div",{className:r!=null?r:"card",children:t});c.propTypes={children:i.node.isRequired,className:i.string};const b=({className:t,backgroundImage:r})=>e("div",{className:`${t!=null?t:"bg-cover bg-center h-3/5 rounded-t-lg w-full"} ${r}`});b.propTypes={backgroundImage:i.string,className:i.string};b.defaultProps={backgroundImage:""};const C=({children:t,className:r})=>e("div",{className:`${r!=null?r:"cardBody"}`,children:t});C.propTypes={children:i.node.isRequired,className:i.string};const N=({title:t,className:r})=>e("p",{className:r!=null?r:"font-bold pt-2 text-xl",children:t});N.propTypes={title:i.string,className:i.string};const S=({description:t,className:r})=>e("p",{className:r!=null?r:"text-sm",children:t});S.propTypes={description:i.string,className:i.string};c.Title=N;c.HeaderImage=b;c.Description=S;c.Body=C;const p=({children:t})=>e("footer",{id:"about",className:"w-full h-auto mb-16 bg-gray-50 lg:mb-0 dark:bg-gray-800",children:t});p.propTypes={children:i.node.isRequired};const F=({children:t,title:r})=>s("div",{className:"p-6 space-y-2",children:[e("p",{className:"text-lg dark:text-gray-300",children:r}),e("div",{className:"space-y-2",children:t})]});F.propTypes={children:i.node.isRequired,title:i.string.isRequired};const L=({paragraph:t})=>e("p",{className:"text-sm text-gray-300",children:t});L.propTypes={paragraph:i.string.isRequired};p.About=F;p.About.Info=L;const u=({children:t})=>e("div",{id:"faqs",className:"w-full h-full pb-8",children:s("div",{className:"flex flex-col w-full h-full px-6 space-y-4",children:[e("p",{className:"mt-6 text-3xl font-semibold text-primary dark:text-gray-300",children:"FAQS"}),t]})});u.propTypes={children:i.node.isRequired};const A=({title:t,description:r})=>s("div",{children:[e("p",{className:"text-xl font-semibold text-primary dark:text-gray-300",children:t}),e("p",{className:"pt-2 text-md dark:text-gray-300",children:r})]});A.propTypes={title:i.string.isRequired,description:i.string.isRequired};u.FQA=A;const d=({children:t})=>e("nav",{className:"fixed justify-between hidden w-full h-16 p-4 text-xl bg-white lg:flex lg:z-10 dark:bg-gray-800",children:t});d.propTypes={children:i.node.isRequired};const E=({children:t,className:r})=>e("div",{className:`${r!=null?r:"flex space-x-4"}`,children:t});E.propTypes={children:i.node.isRequired,className:i.string};const I=({children:t,href:r,onClick:l})=>e("a",{className:"font-bold text-primary dark:text-gray-300 dark:hover:text-primary",href:r,onClick:l,children:t});I.propTypes={children:i.node.isRequired,href:i.string.isRequired,onClick:i.func};d.Section=E;d.Link=I;const m=({children:t})=>e("div",{id:"tab_bar",className:"fixed bottom-0 left-0 flex items-center justify-center w-full h-16 space-x-8 bg-gray-100 shadow-md dark:bg-gray-700 lg:hidden",children:t});m.propTypes={children:i.node.isRequired};const B=({href:t,children:r,onClick:l})=>e("a",{href:t,onClick:l,children:r});B.propTypes={children:i.node.isRequired,href:i.string.isRequired,onClick:i.func};m.Link=B;var ee=[{title:"Yosemite",description:"Un respiro del mundo",bg:"bg-yosemite"},{title:"New York",description:"Gran ciudad, explora ahora!",bg:"bg-new_york"},{title:"Norway",description:"Conoce nuevos lugares",bg:"bg-norway"},{title:"Seattle",description:"Una ciudad para disfrutar al m\xE1ximo",bg:"bg-seattle"},{title:"Switzerland",description:"El mejor chocolate caliente que probar\xE1s",bg:"bg-switzerland"},{title:"Sydney",description:"Conoce la famos\xEDsima Opera",bg:"bg-sydney"},{title:"Edinburgh",description:"Castillos y tiempos medievales",bg:"bg-europe"},{title:"Iceland",description:"Espectaculares paisajes con volcanes, g\xE9iseres, termas y campos de lava.",bg:"bg-iceland"}];const te=t=>{if(typeof window!="undefined"&&window.localStorage){const r=window.localStorage.getItem("color-theme");if(typeof r=="string")return r;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"dark"},D=f.exports.createContext(),P=({initialTheme:t,children:r})=>{const[l,h]=f.exports.useState(te),o=a=>{const x=window.document.documentElement,U=a==="dark";x.classList.remove(U?"light":"dark"),x.classList.add(a),localStorage.setItem("travel-color-theme",a)};return t&&o(t),f.exports.useEffect(a=>{o(l)},[l]),e(D.Provider,{value:{theme:l,setTheme:h},children:r})};P.propTypes={initialTheme:i.string,children:i.node.isRequired};const w=({width:t,height:r})=>{const{theme:l,setTheme:h}=f.exports.useContext(D),o=l==="dark",a=()=>h(o?"light":"dark");return o?e(Y,{width:t,height:r,className:"text-yellow-400 cursor-pointer fill-current",onClick:a}):e(G,{width:t,height:r,className:"text-gray-800 cursor-pointer fill-current",onClick:a})};w.propTypes={width:i.number.isRequired,height:i.number.isRequired};const n=({children:t,id:r,title:l})=>s("section",{id:r,className:"h-full px-6 lg:px-14",children:[e("p",{className:"pb-6 text-3xl font-semibold text-primary dark:text-gray-300",children:l}),t]});n.propTypes={children:i.node.isRequired,id:i.string.isRequired,title:i.string.isRequired};const $=({children:t})=>e("div",{className:"w-full mb-8 h-96 lg:flex-none",children:t});$.propTypes={children:i.node.isRequired};const j=({children:t})=>e("div",{className:"lg:flex lg:h-1/3 lg:w-full lg:flex-none",children:t});j.propTypes={children:i.node.isRequired};const M=({children:t})=>e("div",{className:"w-full mb-8 h-96 lg:w-3/5 lg:h-auto",children:t});M.propTypes={children:i.node.isRequired};const Q=({children:t})=>e("div",{className:"lg:flex lg:flex-col lg:w-full lg:pl-8",children:t});Q.propTypes={children:i.node.isRequired};const H=({children:t,className:r})=>e("div",{className:r,children:t});H.propTypes={children:i.node.isRequired,className:i.string};const O=({title:t,className:r})=>e("p",{className:`${r!=null?r:"cardTitle lg:text-gray-200"}`,children:t});O.propTypes={title:i.string.isRequired,className:i.string};const _=({description:t,className:r})=>e("p",{className:`${r!=null?r:"pl-8 mr-24 text-base font-extrabold text-white lg:text-xl lg:text-gray-300"}`,children:t});_.propTypes={description:i.string.isRequired,className:i.string};n.Top=$;n.Bottom=j;n.BottomLeft=M;n.BottomRight=Q;n.Card=H;n.Card.Title=O;n.Card.Description=_;const z=({children:t,title:r,id:l})=>s("section",{id:l,className:"w-full h-auto",children:[e("p",{className:"pt-6 pl-6 text-3xl font-semibold text-primary dark:text-gray-300",children:r}),e("div",{className:"flex items-center w-auto px-6 mt-6 space-x-4 overflow-x-auto h-96 overscroll-x-contain lg:space-x-6 scrollbar",children:t})]});z.propTypes={children:i.node.isRequired,id:i.string.isRequired,title:i.string.isRequired};const re=()=>{const[t,r]=f.exports.useState("home");return s(Z,{children:[s(d,{children:[e(d.Section,{children:e("p",{className:"font-black text-primary dark:text-gray-300",children:"Travel"})}),s(d.Section,{className:"flex space-x-10",children:[e(d.Link,{href:"#home",children:"Inicio"}),e(d.Link,{href:"#recommended",children:"Recomendados"}),e(d.Link,{href:"#trendingStays",children:"Rentas Destacadas"}),e(d.Link,{href:"#about",children:"Sobre Mi"}),e(d.Link,{href:"#faqs",children:"FAQs"})]}),s(d.Section,{children:[e(d.Link,{href:"#recommended",onClick:()=>r("recommended"),children:e(T,{width:22,height:22,className:`fill-current ${t==="recommended"?"text-primary":"text-gray-300"}`})}),e(d.Link,{href:"#home",onClick:()=>r("user"),children:e(v,{width:22,height:22,className:`fill-current ${t==="user"?"text-primary":"text-gray-300"}`})}),e(w,{width:22,height:22})]})]}),s(g,{children:[e(g.Search,{name:"search",placeholder:"San Francisco"}),e(g.Paragraph,{content:"\xA1Encuentra m\xE1s ubicaciones como esta!"}),e(g.ButtonExplore,{title:"Explorar"})]}),s("div",{className:"w-full h-auto",children:[e(z,{id:"recommended",title:"Recomendados",children:ee.map(({title:l,description:h,bg:o},a)=>s(c,{children:[e(c.HeaderImage,{backgroundImage:o}),s(c.Body,{children:[e(c.Title,{title:l}),e(c.Description,{description:h})]})]},a))}),s(n,{id:"trendingStays",title:"Rentas destacadas",children:[e(n.Top,{children:s(n.Card,{className:"w-full h-full bg-cover rounded-2xl lg:bg-center bg-chicago",children:[e(n.Card.Title,{title:"Chicago",className:"cardTitle lg:text-gray-700"}),e(n.Card.Description,{description:"2 habitaciones, 1 ba\xF1o y cocina.",className:"pl-8 mr-24 text-base font-extrabold text-white lg:text-xl lg:text-gray-700"})]})}),s(n.Bottom,{children:[e(n.BottomLeft,{children:s(n.Card,{className:"w-full bg-cover h-96 bg-LA rounded-2xl lg:w-full lg:h-full",children:[e(n.Card.Title,{title:"Chicago"}),e(n.Card.Description,{description:"2 habitaciones, 1 ba\xF1o y cocina."})]})}),s(n.BottomRight,{children:[s(n.Card,{className:"w-full mb-8 bg-cover h-96 bg-miami rounded-xl",children:[e(n.Card.Title,{title:"Chicago"}),e(n.Card.Description,{description:"2 habitaciones, 1 ba\xF1o y cocina."})]}),s(n.Card,{className:"w-full mb-8 bg-cover h-96 bg-bali rounded-xl",children:[e(n.Card.Title,{title:"Chicago"}),e(n.Card.Description,{description:"2 habitaciones, 1 ba\xF1o y cocina."})]})]})]})]}),s(u,{children:[e(u.FQA,{title:"Pol\xEDtica de Cancelaci\xF3n",description:"Para estancias menores a una semana es importante avisar con 3 d\xEDas de anticipaci\xF3n, de caso contrar\xEDo ser\xE1 sancionado."}),e(u.FQA,{title:"M\xE9todos de pago",description:"Aceptamos distintos m\xE9todos de pago: VISA, MasterCard, American Express, Paypal y Binance"}),e(u.FQA,{title:"Mascotas",description:"El tema de las mascotas depender\xE1 directamente del anfitri\xF3n."}),e(u.FQA,{title:"Informaci\xF3n de Seguridad",description:"Todas nuestras estancias cuentan con seguro en caso de accidentes"}),e(u.FQA,{title:"Estancias Largas",description:"Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con un monto del 50% del valor de la renta"})]}),e(p,{children:s(p.About,{title:"Acerca De",children:[e(p.About.Info,{className:"text-sm text-gray-300",paragraph:"Inversionistas"}),e(p.About.Info,{className:"text-sm text-gray-300",paragraph:"Empleos"}),e(p.About.Info,{className:"text-sm text-gray-300",paragraph:"T\xE9rminos y condiciones"}),e(p.About.Info,{className:"text-sm text-gray-300",paragraph:"Travel, Inc."})]})})]}),s(m,{children:[e(m.Link,{href:"#home",onClick:()=>r("home"),children:e(K,{width:30,height:30,className:`fill-current ${t==="home"?"text-primary":"text-gray-300"}`})}),e(m.Link,{href:"#recommended",onClick:()=>r("recommended"),children:e(T,{width:30,height:30,className:`fill-current ${t==="recommended"?"text-primary":"text-gray-300"}`})}),e(m.Link,{href:"#trendingStays",onClick:()=>r("trendingStays"),children:e(V,{width:30,height:30,className:`fill-current ${t==="trendingStays"?"text-primary":"text-gray-300"}`})}),e(m.Link,{href:"#",onClick:()=>r("user"),children:e(v,{width:30,height:30,className:`fill-current ${t==="user"?"text-primary":"text-gray-300"}`})}),e(w,{width:22,height:22})]})]})};function ie(){return e(P,{children:e(re,{})})}J.render(e(W.StrictMode,{children:e(ie,{})}),document.getElementById("root"));