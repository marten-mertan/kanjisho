import{a as j,k as p,o as c,b as l,f as r,t as d,F as v,s as f,i as x,u as m,v as _,C as L,q as y,D as $,l as N,w as C,m as D}from"./entry.be09776e.js";import{_ as b,a as q}from"./catalog.aeec11db.js";import{u as w}from"./asyncData.b9614ae9.js";const B={class:"kanjilist-menu-list"},S={class:"kanjilist-menu-list__title"},A={class:"kanjilist-menu-list-content"},K={__name:"menu",props:{title:{type:String,required:!0},startLevel:{type:Number,required:!0},endLevel:{type:Number,required:!0}},setup(t){const o=p();return(u,e)=>{const i=$;return c(),l("div",B,[r("div",S,d(t.title),1),r("ul",A,[(c(!0),l(v,null,f(t.endLevel-t.startLevel+1,s=>(c(),l("li",{key:`kanjilist-menu-list-content-item-${s+t.startLevel-1}`,class:x(["kanjilist-menu-list-content-item",{__current:m(o).params.slug===`${s+t.startLevel-1}`}])},[_(i,{class:"kanjilist-menu-list-content-item__link",href:`/kanjigrades/${s+t.startLevel-1}/`},{default:L(()=>[y(" Grade level "+d(s+t.startLevel-1),1)]),_:2},1032,["href"])],2))),128))])])}}},V=j(K,[["__scopeId","data-v-e00d6b80"]]),F={class:"page container"},G={class:"aside"},z=r("p",{class:"text"},"* the test contains the kanji of the selected grade level",-1),E={class:"content"},T={__name:"[slug]",async setup(t){let o,u;const e=p(),i=N();[o,u]=C(()=>w("kanjigrades",()=>{var a,n;(n=(a=i.data)==null?void 0:a.kanjigrades)!=null&&n[e.params.slug]||i.fetchDynamicData("kanjigrades",e.params.slug,{grade:e.params.slug})})),await o,u();const s=D(()=>{var a,n;return((n=(a=i.data)==null?void 0:a.kanjigrades)==null?void 0:n[e.params.slug])||[]});return(a,n)=>{const k=V,g=b,h=q;return c(),l("div",F,[r("div",G,[_(k,{title:"Kanji Grade levels",name:"ap",startLevel:1,endLevel:6}),_(g,{text:"Start test",link:`/test/kanjigrades-${m(e).params.slug}/`},null,8,["link"]),z]),r("div",E,[_(h,{items:m(s)},null,8,["items"])])])}}};export{T as default};
