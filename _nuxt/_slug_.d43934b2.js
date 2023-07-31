import{a as es,r as ss,o as n,b as i,f as s,u as e,h,i as is,p as ts,j as as,k as cs,l as _s,m as ds,w as rs,t as o,q as l,F as ls,s as us,v as ps}from"./entry.be09776e.js";import{u as hs}from"./asyncData.b9614ae9.js";const os=a=>(ts("data-v-551393ba"),a=a(),as(),a),ks=["poster"],vs=["src"],ms=["src"],ys={class:"ui-video-controls"},gs=os(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("path",{d:"M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496 C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"}),s("polygon",{points:"189.776,141.328 189.776,370.992 388.672,256.16 "})],-1)),fs=[gs],js=os(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},[s("path",{"stroke-width":"2","stroke-miterlimit":"10",d:"M53.92,10.081 c12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838 C22.186-2.027,41.813-2.027,53.92,10.081z"}),s("line",{"stroke-width":"2","stroke-miterlimit":"10",x1:"25",y1:"23",x2:"25",y2:"41"}),s("line",{"stroke-width":"2","stroke-miterlimit":"10",x1:"38",y1:"23",x2:"38",y2:"41"})],-1)),ws=[js],bs={__name:"video",props:{srcMp4:{type:String,default:null},srcWebm:{type:String,default:null},srcPoster:{type:String,default:null}},setup(a){const c=ss(!1),d=ss(null),u=()=>{d.value.play(),c.value=!0},p=()=>{d.value.pause(),c.value=!1};return(t,_)=>a.srcMp4||a.srcWebm?(n(),i("div",{key:0,class:is(["ui-video",{__playing:e(c)}])},[s("video",{ref_key:"video",ref:d,class:"ui-video-content",muted:"muted",loop:"",poster:a.srcPoster},[s("source",{src:a.srcMp4,type:"video/mp4"},null,8,vs),s("source",{src:a.srcWebm,type:"video/webm"},null,8,ms)],8,ks),s("div",ys,[e(c)?h("",!0):(n(),i("div",{key:0,class:"ui-video-controls__play",onClick:u},fs)),e(c)?(n(),i("div",{key:1,class:"ui-video-controls__pause",onClick:p},ws)):h("",!0)])],2)):h("",!0)}},xs=es(bs,[["__scopeId","data-v-551393ba"]]);const k=a=>(ts("data-v-4b45674b"),a=a(),as(),a),$s={key:0,class:"loading"},Ss={key:1,class:"page container"},Ms={class:"aside"},Cs={class:"kanji-aside-wrap"},Bs={class:"kanji__image"},Ds={class:"kanji__info"},Is={class:"w-700"},Vs={key:0,class:"kanji__info"},Ns={class:"w-700"},Ps={key:1,class:"kanji__info"},Ws={class:"w-700"},zs={class:"content"},As={class:"content-table"},Es={class:"content-table-col"},Fs=k(()=>s("div",{class:"kanji__title"},"Meaning",-1)),Ks={class:"kanji__info"},Rs=k(()=>s("div",{class:"kanji__title"},"Examples",-1)),qs={class:"kanji__info"},Gs={class:"content-table-col"},Js=k(()=>s("div",{class:"kanji__title"},"References",-1)),Ls={class:"kanji__info"},Os={class:"w-700"},Ts={class:"kanji__info"},Us={class:"w-700"},Hs={class:"kanji__info"},Qs={class:"w-700"},Xs=k(()=>s("div",{class:"kanji__title"},"Video",-1)),Ys={__name:"[slug]",async setup(a){let c,d;const u=cs(),p=_s(),t=ds(()=>{var _,r;return((r=(_=p.data)==null?void 0:_.kanji)==null?void 0:r[u.params.slug])||[]});return[c,d]=rs(()=>hs("kanji",()=>{var _,r;(r=(_=p.data)==null?void 0:_.kanji)!=null&&r[u.params.slug]||p.fetchDynamicAdditionData("kanji",u.params.slug)})),await c,d(),(_,r)=>{var v,m,y,g,f,j,w,b,x,$,S,M,C,B,D,I,V,N,P,W,z,A,E,F,K,R,q,G,J,L,O,T,U,H,Q,X,Y;const ns=xs;return(v=e(t))!=null&&v.kanji?(n(),i("div",Ss,[s("div",Ms,[s("div",Cs,[s("div",Bs,o((y=(m=e(t))==null?void 0:m.kanji)==null?void 0:y.character),1),s("div",Ds,[s("span",Is,o((j=(f=(g=e(t))==null?void 0:g.kanji)==null?void 0:f.strokes)==null?void 0:j.count),1),l(" strokes")]),(x=(b=(w=e(t))==null?void 0:w.kanji)==null?void 0:b.kunyomi)!=null&&x.hiragana?(n(),i("div",Vs,[l("Kun: "),s("span",Ns,o((M=(S=($=e(t))==null?void 0:$.kanji)==null?void 0:S.kunyomi)==null?void 0:M.hiragana),1)])):h("",!0),(D=(B=(C=e(t))==null?void 0:C.kanji)==null?void 0:B.onyomi)!=null&&D.katakana?(n(),i("div",Ps,[l("On: "),s("span",Ws,o((N=(V=(I=e(t))==null?void 0:I.kanji)==null?void 0:V.onyomi)==null?void 0:N.katakana),1)])):h("",!0)])]),s("div",zs,[s("div",As,[s("div",Es,[Fs,s("div",Ks,o((z=(W=(P=e(t))==null?void 0:P.kanji)==null?void 0:W.meaning)==null?void 0:z.english),1),Rs,(n(!0),i(ls,null,us((A=e(t))==null?void 0:A.examples,Z=>(n(),i("div",qs,o(`${_.$filters.crescentBrackets(Z.japanese)}${Z.meaning.english}`),1))),256))]),s("div",Gs,[Js,s("div",Ls,[l("Grade: "),s("span",Os,o((F=(E=e(t))==null?void 0:E.references)==null?void 0:F.grade),1)]),s("div",Ts,[l("Kodansha Dictionary: "),s("span",Us,o((R=(K=e(t))==null?void 0:K.references)==null?void 0:R.kodansha),1)]),s("div",Hs,[l("Nelson Japanese-English Dictionary: "),s("span",Qs,o((G=(q=e(t))==null?void 0:q.references)==null?void 0:G.classic_nelson),1)]),Xs,ps(ns,{srcMp4:(O=(L=(J=e(t))==null?void 0:J.kanji)==null?void 0:L.video)==null?void 0:O.mp4,srcWebm:(H=(U=(T=e(t))==null?void 0:T.kanji)==null?void 0:U.video)==null?void 0:H.webm,srcPoster:(Y=(X=(Q=e(t))==null?void 0:Q.kanji)==null?void 0:X.video)==null?void 0:Y.poster},null,8,["srcMp4","srcWebm","srcPoster"])])])])])):(n(),i("div",$s))}}},ee=es(Ys,[["__scopeId","data-v-4b45674b"]]);export{ee as default};