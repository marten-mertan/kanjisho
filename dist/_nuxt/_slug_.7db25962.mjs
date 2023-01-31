import{a as B,o as a,c as E,D,b as v,f as l,t as y,F as R,s as V,i as N,h as M,T as O,v as I,q as Y,E as G,p as H,j as J,w as K,k as X,l as Z,y as L,m as Q,r as T,B as ee,u as n,_ as te}from"./entry.9cab3503.mjs";import{u as se}from"./asyncData.9c91d0b9.mjs";const ne={key:0,class:"test-card"},ae={class:"test-card__info"},re={class:"test-card__kanji"},oe=["onClick"],ue={__name:"card",props:{kanjiArray:{type:Array,required:!0},questions:{type:Array,required:!0},currentQuestion:{type:Number,required:!0},show:{type:Boolean,default:!0}},emits:["selectAnswer"],setup(e,{emit:h}){const k=o=>{h("selectAnswer",o)};return(o,i)=>(a(),E(O,{name:"bottom-fade"},{default:D(()=>[e.show?(a(),v("div",ne,[l("div",ae," Question "+y(e.currentQuestion+1)+" / "+y(e.kanjiArray.length),1),l("div",re,y(e.questions[e.currentQuestion].kanji),1),l("div",{class:N(["test-card-variants",{"__not-answered":e.questions[e.currentQuestion].status==="notAnswered"}])},[(a(!0),v(R,null,V(e.questions[e.currentQuestion].variants,(r,d)=>(a(),v("div",{key:"test-card-variants-item-"+d,class:N(["test-card-variants__item",{__correct:e.questions[e.currentQuestion].userAnswerIndex===d&&e.questions[e.currentQuestion].status==="correct"},{__wrong:e.questions[e.currentQuestion].userAnswerIndex===d&&e.questions[e.currentQuestion].status==="wrong"}]),onClick:_=>k(d)},y(r),11,oe))),128))],2)])):M("",!0)]),_:1}))}},ce=B(ue,[["__scopeId","data-v-66c71138"]]),le={__name:"button",props:{text:{type:String,default:"text"},show:{type:Boolean,default:!0}},emits:["onClick"],setup(e,{emit:h}){const k=e,o=()=>{!k.show||h("onClick")};return(i,r)=>(a(),E(O,{name:"bottom-fade"},{default:D(()=>[e.show?(a(),v("button",{key:0,class:"ui-button",onClick:o},y(e.text),1)):M("",!0)]),_:1}))}},ie=B(le,[["__scopeId","data-v-60f1900e"]]),P=e=>(H("data-v-b473848c"),e=e(),J(),e),de={key:0,class:"results"},_e=P(()=>l("div",{class:"results__title"},"Results",-1)),ve={class:"results-table"},he=P(()=>l("div",{class:"results-row"},[l("div",{class:"results-kanji"}," Kanji "),l("div",{class:"results-user-answer"}," Your answer "),l("div",{class:"results-answers"}," Correct answers ")],-1)),fe={class:"results-kanji"},me={class:"results-user-answer"},we={class:"results-answers"},ke={__name:"results",props:{questions:{type:Array,default:[]},show:{type:Boolean,default:!0}},setup(e){return(h,k)=>{const o=G;return a(),E(O,{name:"results"},{default:D(()=>[e.show?(a(),v("div",de,[_e,l("div",ve,[he,(a(!0),v(R,null,V(e.questions,(i,r)=>(a(),v("div",{class:N(["results-row",{__correct:i.status==="correct"}]),key:"results-row-"+r},[l("div",fe,[I(o,{href:`/kanji/${i.kanji}/`,target:"_blank",class:N(["results-kanji__link"])},{default:D(()=>[Y(y(i.kanji),1)]),_:2},1032,["href"])]),l("div",me,y(i.variants[i.userAnswerIndex]),1),l("div",we,[(a(!0),v(R,null,V(i.meanings,(d,_)=>(a(),v("span",{key:"results-answers-"+_},y(d),1))),128))])],2))),128))])])):M("",!0)]),_:1})}}},ge=B(ke,[["__scopeId","data-v-b473848c"]]);const ye={class:"page container"},pe={class:"content"},Ae={key:0,class:"loading"},je={key:1,class:"test"},$e={__name:"[slug]",async setup(e){let h,k;const{words:o}=([h,k]=K(()=>te(()=>import("./words.da221be9.mjs"),[])),h=await h,k(),h),i=X(),r=Z(),{$filters:d}=L(),_=Q(()=>i.params.slug.split("-")[0]||"kanjigrades"),F=Q(()=>i.params.slug.split("-")[1]||"ap"),z=Q(()=>i.params.slug.split("-")[2]||"0"),g=Q(()=>_.value==="kanjigrades"?F.value:`${F.value}:c${z.value}`||"ap:c1");[h,k]=K(()=>se("kanjilists",()=>{var t,s,w,f;_.value==="kanjigrades"&&((s=(t=r.data)==null?void 0:t[_.value])!=null&&s[g.value]||r.fetchDynamicData(_.value,g.value,{grade:g.value})),_.value==="kanjilists"&&((f=(w=r.data)==null?void 0:w[_.value])!=null&&f[g.value]||r.fetchDynamicData(_.value,g.value,{list:g.value}))},"$sW30Kwws1x")),await h,k();const p=Q(()=>{var t,s,w,f;return(s=(t=r.data)==null?void 0:t[_.value])!=null&&s[g.value]?(console.log("shuffle"),d.shuffle((f=(w=r.data)==null?void 0:w[_.value])==null?void 0:f[g.value])):[]}),u=T([]),c=T(0),q=T(!1),C=(t,s)=>{var w,f,b,S;if(!u.value[t])if(!((f=(w=r.data)==null?void 0:w.kanji)!=null&&f[s[t].kanji.character]))r.fetchDynamicAdditionData("kanji",s[t].kanji.character).then(j=>{const $=d.shuffle(j.kanji.meaning.english.split(", "));let m=[$[0]];for(let A=0;A<7;A++){const x=Math.floor(Math.random()*o.length);if(m.includes(o[x])){A--;continue}m.push(o[x])}m=d.shuffle(m),u.value[t]={kanji:j.kanji.character,meanings:$,variants:m,status:"notAnswered",userAnswerIndex:-1}});else{const j=(S=(b=r.data)==null?void 0:b.kanji)==null?void 0:S[s[t].kanji.character],$=d.shuffle(j.kanji.meaning.english.split(", "));let m=[$[0]];for(let A=0;A<7;A++){const x=Math.floor(Math.random()*o.length);if(m.includes(o[x])){A--;continue}m.push(o[x])}m=d.shuffle(m),u.value[t]={kanji:j.kanji.character,meanings:$,variants:m,status:"notAnswered",userAnswerIndex:-1}}},U=()=>{c.value+=1};p.value.length&&(C(0,p.value),C(1,p.value)),ee([c,()=>p.value],([t,s])=>{console.log("asd",t,s[t].kanji.character),C(t,s),t+1<s.length&&C(t+1,s)});const W=t=>{u.value[c.value].userAnswerIndex=t,u.value[c.value].meanings.includes(u.value[c.value].variants[t])?u.value[c.value].status="correct":u.value[c.value].status="wrong"};return(t,s)=>{const w=ce,f=ie,b=ge;return a(),v("div",ye,[l("div",pe,[n(u)[n(c)]?(a(),v("div",je,[I(w,{kanjiArray:n(p),questions:n(u),currentQuestion:n(c),show:!n(q),onSelectAnswer:W},null,8,["kanjiArray","questions","currentQuestion","show"]),I(f,{show:n(u)[n(c)].status!=="notAnswered"&&n(c)+1<n(p).length,text:"Next",onOnClick:U},null,8,["show"]),I(f,{show:!n(q)&&n(u)[n(c)].status!=="notAnswered"&&n(c)+1===n(p).length,text:"Show results",onOnClick:s[0]||(s[0]=S=>q.value=!0)},null,8,["show"]),I(b,{show:n(q),questions:n(u)},null,8,["show","questions"])])):(a(),v("div",Ae))])])}}},Ie=B($e,[["__scopeId","data-v-063d3122"]]);export{Ie as default};