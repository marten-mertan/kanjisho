import{a as k,k as f,o as l,b as r,f as u,t as v,F as y,s as g,i as N,u as p,v as i,C as q,q as b,D as C,l as D,m as d,w as S}from"./entry.be09776e.js";import{_ as w,a as A}from"./catalog.aeec11db.js";import{u as B}from"./asyncData.b9614ae9.js";const K={class:"kanjilist-menu-list"},M={class:"kanjilist-menu-list__title"},V={class:"kanjilist-menu-list-content"},E={__name:"menulist",props:{title:{type:String,required:!0},name:{type:String,required:!0},startLevel:{type:Number,required:!0},endLevel:{type:Number,required:!0}},setup(t){const c=f();return(e,_)=>{const o=C;return l(),r("div",K,[u("div",M,v(t.title),1),u("ul",V,[(l(!0),r(y,null,g(t.endLevel-t.startLevel+1,n=>(l(),r("li",{key:`kanjilist-menu-list-content-item-${n+t.startLevel-1}`,class:N(["kanjilist-menu-list-content-item",{__current:p(c).params.slug===`${t.name}-${n+t.startLevel-1}`}])},[i(o,{class:"kanjilist-menu-list-content-item__link",href:`/kanjilists/${t.name}-${n+t.startLevel-1}/`},{default:q(()=>[b(" Grade level "+v(n+t.startLevel-1),1)]),_:2},1032,["href"])],2))),128))])])}}},F=k(E,[["__scopeId","data-v-cfab549c"]]),U={},z={class:"kanjilist-menu"};function G(t,c){const e=F;return l(),r("div",z,[i(e,{title:"Advanced Placement Exam",name:"ap",startLevel:1,endLevel:20}),i(e,{title:"Macquarie University",name:"mac",startLevel:12,endLevel:22})])}const I=k(U,[["render",G]]),P={class:"page container"},Q={class:"aside"},R=u("p",{class:"text"},"* the test contains the kanji of the selected grade level",-1),T={class:"content"},W={__name:"[slug]",async setup(t){let c,e;const _=f(),o=D(),n=d(()=>{var s,a;return((a=(s=o.data)==null?void 0:s.kanjilists)==null?void 0:a[m.value])||[]}),h=d(()=>_.params.slug.split("-")[0]||"ap"),j=d(()=>_.params.slug.split("-")[1]||"0"),m=d(()=>`${h.value}:c${j.value}`||"ap:c1");return[c,e]=S(()=>B("kanjilists",()=>{var s,a;(a=(s=o.data)==null?void 0:s.kanjilists)!=null&&a[m.value]||o.fetchDynamicData("kanjilists",m.value,{list:m.value})})),await c,e(),(s,a)=>{const x=I,$=w,L=A;return l(),r("div",P,[u("div",Q,[i(x),i($,{text:"Start test",link:`/test/kanjilists-${p(_).params.slug}/`},null,8,["link"]),R]),u("div",T,[i(L,{items:p(n)},null,8,["items"])])])}}};export{W as default};