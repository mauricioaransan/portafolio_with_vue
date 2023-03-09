(function(){"use strict";var t={3344:function(t,e,a){var o=a(144),n=a(998),i=a(3059),r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(n.Z,[e(i.Z,[e("router-view")],1)],1)},s=[],l=o.ZP.extend({name:"App",data:()=>({})}),c=l,u=a(1001),d=(0,u.Z)(c,r,s,!1,null,null,null),p=d.exports,m=a(8345),f=a(266),v=a(1713),_=a(7423),h=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(v.Z,[e(f.Z,{attrs:{sm:"12",xs:"12",md:"12",lg:"12",xl:"12"}},[e(_.Z,{staticClass:"d-none d-sm-none d-md-flex btn_drawer",attrs:{color:"transparent"}},[e("NavigationBarLeft")],1),e(_.Z,{staticClass:"d-sm-flex d-md-none btn_drawer",attrs:{color:"transparent"}},[e("NavigationBarHidden")],1),e("about-me")],1)],1)},g=[],b=a(3423),y=a(8107),C=a(1338),x=a(4324),Z=a(5808),w=a(4525),S=a(4611),A=a(2177),H=a(4920),T=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(C.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:a}){return[e(y.Z,{staticClass:"navigation_bar_fixed",attrs:{color:"#040b14",height:"100vh"}},[e(H.Z,{attrs:{permanent:"","expand-on-hover":"",color:"#040b14"}},[a?e(v.Z,{staticClass:"ma-0 my-5",attrs:{justify:"center"}},[e(b.Z,{staticClass:"avatar_img",attrs:{size:"135px"}},[e("img",{attrs:{alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"}})])],1):e(_.Z,{staticClass:"d-flex align-center",attrs:{height:"258",color:"transparent"}},[e(v.Z,{staticClass:"ma-0 my-5",attrs:{justify:"center"}},[e(b.Z,{class:a?"avatar_img":"avatar_img_hover",attrs:{size:"45px"}},[e("img",{attrs:{alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"}})])],1)],1),a?e(A.V9,{staticClass:"principal_title mb-12"},[t._v("Mauricio Arancibia ")]):t._e(),e(Z.Z,{attrs:{nav:"",dense:""}},t._l(t.items,(function(a,o){return e(w.Z,{key:o,staticClass:"nav_item",staticStyle:{"margin-bottom":"20px"},attrs:{link:""},on:{click:function(e){return t.$vuetify.goTo(`#${a.goto}`)}}},[e(S.Z,[e(x.Z,{staticClass:"mr-8 nav_item_icon",attrs:{color:"white"}},[t._v(" "+t._s(a.icon)+" ")])],1),e(A.V9,{staticClass:"nav_item_title"},[t._v(" "+t._s(a.title)+" ")])],1)})),1)],1)],1)]}}])})},k=[],P=(0,o.aZ)({setup(){const t=(0,o.iH)([{icon:"mdi-home",title:"inicio",goto:"home"},{icon:"mdi-account",title:"acerca de mi",goto:"about"},{icon:"mdi-file-document-outline",title:"portafolio",goto:"portfolio"},{icon:"mdi-tray-arrow-up",title:"skills",goto:"skills"},{icon:"mdi-server",title:"contacteme",goto:"contactme"}]);return{items:t}}}),E=P,M=(0,u.Z)(E,T,k,!1,null,null,null),D=M.exports,L=a(5550),j=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(_.Z,{attrs:{color:"black",width:t.drawer?"300":"0",height:"100vh"}},[e(L.Z,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(H.Z,{staticClass:"hover_side_bar",attrs:{absolute:"",top:"",temporary:"",color:"#040b14"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(v.Z,{staticClass:"ma-0 my-5",attrs:{justify:"center"}},[e(b.Z,{staticClass:"avatar_img",attrs:{size:"135px"}},[e("img",{attrs:{alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"}})])],1),e("h2",{staticClass:"white-color mb-12"},[t._v("Mauricio Arancibia Sanchez")]),t._l(t.items,(function(a,o){return e(_.Z,{key:o,staticClass:"nav_card mb-10 pl-4",attrs:{color:"transparent"},on:{click:function(e){return t.$vuetify.goTo(`#${a.goto}`)}}},[e(v.Z,{staticClass:"ma-0 nav_item",staticStyle:{color:"white"}},[e(x.Z,{staticClass:"mr-8 nav_item_icon",attrs:{color:"white"}},[t._v(" "+t._s(a.icon)+" ")]),e("span",{staticClass:"nav_item_title"},[t._v(" "+t._s(a.title)+" ")])],1)],1)}))],2)],1)},B=[],I=(0,o.aZ)({setup(){const t=(0,o.iH)(!1),e=(0,o.iH)([{icon:"mdi-home",title:"inicio",goto:"home"},{icon:"mdi-account",title:"acerca de mi",goto:"about"},{icon:"mdi-file-document-outline",title:"portafolio",goto:"portfolio"},{icon:"mdi-tray-arrow-up",title:"skills",goto:"skills"},{icon:"mdi-server",title:"contacteme",goto:"contactme"}]);return{items:e,drawer:t}}}),F=I,O=(0,u.Z)(F,j,B,!1,null,null,null),V=O.exports,q=a(6190),N=a(7394),$=a(8520),R=a(9159),G=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(_.Z,{style:t.$vuetify.breakpoint.mdAndUp?"padding-left: 50px":"padding-left: 0",attrs:{color:"#F8F9F9"}},[e(y.Z,{staticClass:"d-flex align-center",attrs:{height:"100vh",id:"home",elevation:"0",color:"transparent",img:"https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"}},[e(f.Z,{staticClass:"justify-center",attrs:{cols:"12"}},[e("div",[e("p",{staticClass:"personal_name pa-0 mt-16"},[t._v("Mauricio Arancibia Sánchez")])]),e("div",{staticClass:"container_animation"},[e("span",{staticClass:"text first_text"},[t._v(" Desarrollador ")]),e("typewriter",{attrs:{replace:t.replace,"type-interval":200,"replace-interval":1e3}},[e("span",{staticClass:"text typed-text"},[t._v(" "+t._s(t.text_typed))])])],1)])],1),e(_.Z,{staticClass:"mt-10 pl-5 pr-5",attrs:{id:"about",color:"transparent"}},[e("h1",{staticClass:"port_title"},[t._v("Acerca de mí")]),e("div",{staticClass:"under_line_title"}),e(v.Z,[e(f.Z,{staticClass:"about_text_principal",attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"6",xl:"6"}},[e(_.Z,{staticClass:"pa-5 personal_info_card",staticStyle:{margin:"0 auto"},attrs:{width:"85%",elevation:"5"}},[e("span",{staticClass:"about_text_develop"},[t._v("Desarrollador WEB ")]),e("span",[t._v(" con conocimientos en Vue, JS, HTML y CSS, además de otros lenguajes como TypeScript y Java. ")]),e("p",[t._v(" Me considero una persona con una gran prioridad por la responsabilidad y el compromiso por el trabajo, además de tener aptitudes para poder desarrollar bajo presión. ")])])],1),e(f.Z,{attrs:{cols:"12",xs:"12",sm:"12",md:"8",lg:"6",xl:"6"}},[e("h3",{staticClass:"port_subtitle"},[t._v("Personal Info")]),e(v.Z,[e(f.Z,{attrs:{cols:"12",xs:"6",sm:"6",md:"6",lg:"6",xl:"6"}},[e(_.Z,{staticClass:"pa-5 personal_info_card",staticStyle:{"min-width":"150px !important"},attrs:{elevation:"5"}},[e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" Nombre: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" Mauricio Arancibia")])]),e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" Edad: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" 26 años")])]),e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" Email: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" mauricioaransan@gmail.com")])]),e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" Dirección: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" Villa el Salvador - Lima ")])])])],1),e(f.Z,{attrs:{cols:"12",xs:"6",sm:"6",md:"6",lg:"6",xl:"6"}},[e(_.Z,{staticClass:"pa-5 personal_info_card",attrs:{elevation:"5"}},[e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" Habilidad: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" Front-End")])]),e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" Experiencia: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" 1 año")])]),e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" Lenguajes: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" Español / Ingles (escrito)")])]),e("div",[e("span",{staticClass:"personal_info_header"},[t._v(" FreeLance: ")]),t._v(" "),e("span",{staticClass:"personal_info_info"},[t._v(" Disponible ")])])])],1)],1),e(v.Z,{staticClass:"ma-0 mt-5",class:t.$vuetify.breakpoint.mdAndDown?"justify-center":"justify-start"},[e("botonHover",{attrs:{colorHover:"#2196f3",title:"Descargar cv",isDownload:"true"}})],1)],1)],1),e(_.Z,{staticClass:"ma-0 mt-8",attrs:{color:"transparent",id:"experiencie"}},[e($.ZP,{staticClass:"pa-4",attrs:{mandatory:"","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.items,(function(a,o){return e(R.Z,{key:o,staticClass:"my-5",scopedSlots:t._u([{key:"default",fn:function({active:o,toggle:n}){return[e(q.Z,{class:o?" btn_slide_group_activated":"btn_slide_group",on:{click:n}},[t._v(" "+t._s(a.title)+" ")])]}}],null,!0)})})),1),e(N.T0,[0===t.model?e(_.Z,{attrs:{tile:"",color:"transparent"}},[e("TimeLineExperience")],1):t._e()],1),e(N.T0,[1===t.model?e(_.Z,{attrs:{tile:"",color:"transparent"}},[e("TimeLineEducational")],1):t._e()],1),e(N.T0,[2===t.model?e(_.Z,{attrs:{tile:"",color:"transparent"}},[e("TimeLineAdditional")],1):t._e()],1)],1)],1),e("Portafolio"),e(_.Z,{attrs:{id:"skills"}},[e("Skills")],1),e(_.Z,{attrs:{id:"contactme"}},[e("ContactMe")],1)],1)},U=[],z=a(8893),J=a(2082),W=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(z.Z,{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(a,o){return e(J.Z,{key:o,attrs:{color:a.color,"fill-dot":"",icon:a.icon,left:0===o||2===o,right:1===o}},[e(y.Z,{staticClass:"mx-4 time_line_card"},[e(f.Z,{staticClass:"pa-4"},[e("div",{staticClass:"card_timelapse"},[t._v(t._s(a.timelapse))]),e("div",{staticClass:"card_title"},[t._v(t._s(a.title))]),e("div",{staticClass:"card_place"},[t._v(t._s(a.place))]),e("div",{staticClass:"card_content"},[t._v(" "+t._s(a.content)+" ")])])],1)],1)})),1)},Y=[],K=(0,o.aZ)({name:"timelineaditional",setup(){const t=(0,o.iH)([{color:"#003785",icon:"mdi-star-box-outline",timelapse:"Sep, 2015 - Feb, 2021",title:"Ingenieria de Sistemas",place:"UNTELS, Peru",content:"Egresado de la carrera Profesional de Ingenieria de Sistemas. (tramitando el Bachiller)."},{color:"#81c9fa",icon:"mdi-file-document-outline",timelapse:"Mar, 2008 - Dic, 2012",title:"SECUNDARIA - CONTABILIDAD",place:"Heroes del Alto Cenepa, Peru",content:"Secundaria completa con cursos de especializacion en contabilidad, ocupando el segundo lugar de la promocion."},{color:"#81c9fa",icon:"mdi-file-document-outline",timelapse:"Mar, 2002 - Dic, 2007",title:"PRIMARIA",place:"Heroes del Alto Cenepa, Peru",content:"Primaria completa."}]);return{items:t}}}),X=K,Q=(0,u.Z)(X,W,Y,!1,null,"7a2c1f56",null),tt=Q.exports,et=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(z.Z,{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(a,o){return e(J.Z,{key:o,attrs:{color:a.color,"fill-dot":"",icon:a.icon}},[e(y.Z,{staticClass:"mr-4 time_line_card"},[e(f.Z,{staticClass:"pa-4"},[e("div",{staticClass:"card_timelapse"},[t._v(t._s(a.timelapse))]),e("div",{staticClass:"card_title"},[t._v(t._s(a.title))]),e("div",{staticClass:"card_place"},[t._v(t._s(a.place))]),e("div",{staticClass:"card_content"},[t._v(" "+t._s(a.content)+" ")])])],1)],1)})),1)},at=[],ot=(0,o.aZ)({name:"timelineaditional",setup(){const t=(0,o.iH)([{color:"#003785",icon:"mdi-star-box-outline",timelapse:"abr, 2022 - oct, 2022",title:"Vue2 - Vue3",place:"UDEMY",content:"Curso en el que vi los fundamentos de Vue 2 & Vue 3, usando Composition API y Option API & VueX"},{color:"#81c9fa",icon:"mdi-file-document-outline",timelapse:"feb, 2022 - Feb, 2022",title:"macros y VBA",place:"UDEMY",content:"Curso para potenciar mis conocimientos en Excel VBA."},{color:"#003785",icon:"mdi-star-box-outline",timelapse:"nov, 2021 - ene, 2022",title:"universidad JAVA",place:"UDEMY",content:"Curso que llevé virtualmente, donde pude ver programación web en lenguaje JAVA, además de ver Springboot y Angular."},{color:"#81c9fa",icon:"mdi-star-box-outline",timelapse:"set, 2021 - oct, 2021",title:"HTML, CSS & JavaScript",place:"UDEMY",content:"Curso dedicado a saber los conceptos necesarios acerca de HTML, CSS & JS."},{color:"#81c9fa",icon:"mdi-file-document-outline",timelapse:"ago, 2021 - set, 2021",title:"microsoft office",place:"UDEMY",content:"Curso donde se vio hasta un nivel intermedio Microsoft Office Word, Excel y Power Point."},{color:"#81c9fa",icon:"mdi-file-document-outline",timelapse:"set, 2020 - feb, 2021",title:"flutter & dart",place:"UDEMY & youtube",content:"Curso en el que aprendí un lenguaje de programación para el desarrollo de aplicaciones móviles para Android y IOs."}]);return{items:t}}}),nt=ot,it=(0,u.Z)(nt,et,at,!1,null,"dfa8d220",null),rt=it.exports,st=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(z.Z,{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(a,o){return e(J.Z,{key:o,attrs:{color:a.color,"fill-dot":"",icon:a.icon}},[e(y.Z,{staticClass:"mx-4 time_line_card"},[e(f.Z,{staticClass:"pa-4"},[e("div",{staticClass:"card_timelapse"},[t._v(t._s(a.timelapse))]),e("div",{staticClass:"card_title"},[t._v(t._s(a.title))]),e("div",{staticClass:"card_place"},[t._v(t._s(a.place))]),e("div",{staticClass:"card_content"},[t._v(" "+t._s(a.content)+" ")])])],1)],1)})),1)},lt=[],ct=(0,o.aZ)({name:"timelineaditional",setup(){const t=(0,o.iH)([{color:"#003785",icon:"mdi-star-box-outline",timelapse:"mar, 2022 - ene, 2023",title:"desarrollador frontend junior",place:"DEISTER SOFTWARE PERU",content:"Encargado del diseño y desarrollo de sitios y aplicaciones web usando lenguajes de programación como HTML, CSS, JavaScript, Vue, etc. Participé en varios proyectos donde se brindan soporte."},{color:"#81c9fa",icon:"mdi-briefcase-outline",timelapse:"nov, 2022 - ene, 2023",title:"ayudante de programacion",place:"encode solutions, peru",content:"Ayudé en el programado de los equipos BMS para el proyecto LAP el cual se encarga de la supervisión y monitoreo de varios sistemas dentro de una edificación"},{color:"#81c9fa",icon:"mdi-briefcase-outline",timelapse:"may, 2021 - mar, 2022",title:"tecnico instalador",place:"encode solutions, peru",content:"Técnico encargado en el canalizado, cableado, instalación y monitoreo de los distintos dispositivos en el Sistema de Alarma contra Incendios.\n            También encargado del mantenmiento e instalación de los dispositivos de CCTV."},{color:"#81c9fa",icon:"mdi-briefcase-outline",timelapse:"feb, 2018 - feb, 2020",title:"asesor de ventas",place:"SODIMAC",content:"Responsable de brindar la correcta asesoría a los clientes en el área de iluminación y electricidad.\n            También encargado de la instalación de las exhibiciones y equipos.\n            Además, veía el control y seguimiento de los productos mediante kardex"}]);return{items:t}}}),ut=ct,dt=(0,u.Z)(ut,st,lt,!1,null,"b1324a80",null),pt=dt.exports,mt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(_.Z,{staticClass:"mt-10 pl-5 pr-5",attrs:{id:"skills"}},[e("h1",{staticClass:"port_title"},[t._v("Habilidades")]),e(v.Z,{staticClass:"ma-4"},[e(f.Z,{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},t._l(t.itemsleft,(function(t,a){return e("BarComponent",{key:a,attrs:{title:t.title,value:t.value,color:t.color}})})),1),e(f.Z,{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},t._l(t.itemsright,(function(t,a){return e("BarComponent",{key:a,attrs:{title:t.title,value:t.value,color:t.color}})})),1)],1)],1)},ft=[],vt=a(9592),_t=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(f.Z,[e("div",{staticClass:"progress_title"},[t._v(" "+t._s(t.title)+" ")]),e(vt.Z,{attrs:{color:t.color,value:t.value,height:"25",striped:""},scopedSlots:t._u([{key:"default",fn:function({value:a}){return[e("strong",[t._v(t._s(a)+"%")])]}}])})],1)},ht=[],gt=(0,o.aZ)({name:"barComponent",props:{title:{type:String},value:{type:String},color:{type:String}}}),bt=gt,yt=(0,u.Z)(bt,_t,ht,!1,null,null,null),Ct=yt.exports,xt=(0,o.aZ)({name:"skills",components:{BarComponent:Ct},setup(){const t=(0,o.iH)([{title:"HTML",value:"90",color:"#0D47A1"},{title:"CSS",value:"75",color:"#1565C0"},{title:"VUE",value:"65",color:"#1976D2"},{title:"Informix",value:"60",color:"#1976D2"},{title:"JavaScript",value:"50",color:"#1E88E5"}]),e=(0,o.iH)([{title:"TypeScript",value:"50",color:"#1E88E5"},{title:"Flutter",value:"50",color:"#1E88E5"},{title:"GIT",value:"40",color:"#42A5F5"},{title:"Java Web",value:"40",color:"#42A5F5"}]);return{itemsleft:t,itemsright:e}}}),Zt=xt,wt=(0,u.Z)(Zt,mt,ft,!1,null,"33da6ba3",null),St=wt.exports,At=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(_.Z,{staticClass:"mt-10 pl-5 pr-5",attrs:{color:"transparent"}},[e("h1",{staticClass:"mt-6 mb-3 port_title"},[t._v("Contacteme")]),e(v.Z,[e(f.Z,{attrs:{cols:"6"}},[e(v.Z,{staticClass:"ma-0 d-flex justify-center pt-3"},t._l(t.items,(function(t,a){return e("BtnIcon",{key:a,attrs:{title:t.title,icon:t.icon,color:t.color,"color-hover":t.colorhover,href:t.href}})})),1)],1),e(f.Z,{staticClass:"mb-10",attrs:{cols:"6"}},[e("div",[e("span",{staticClass:"contact_title"},[t._v("Numero:")]),e("span",{staticClass:"contact_content"},[t._v("+51 934830545")])]),e("div",[e("span",{staticClass:"contact_title"},[t._v("email:")]),e("span",{staticClass:"contact_content"},[t._v("mauricioaransan@gmail.com")])]),e("div",[e("span",{staticClass:"contact_title"},[t._v("direccion:")]),e("span",{staticClass:"contact_content"},[t._v("Villa el Salvador - Lima - Peru")])])])],1)],1)},Ht=[],Tt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("a",{attrs:{href:t.href,target:"_blank"}},[e("div",{staticClass:"btn_icon",style:t.colors},[e(x.Z,{staticClass:"icon",attrs:{large:""}},[t._v(" "+t._s(t.icon)+" ")]),e("span",[t._v(t._s(t.title)+" ")])],1)])},kt=[],Pt=(0,o.aZ)({name:"BtnIcon",props:{icon:{type:String,required:!0},title:{type:String,required:!0},color:{type:String,required:!0},colorHover:{type:String,required:!0},href:{type:String,required:!0}},setup(t){const e=(0,o.Fl)((()=>({"--color":t.color,"--colorHover":t.colorHover})));return{colors:e}}}),Et=Pt,Mt=(0,u.Z)(Et,Tt,kt,!1,null,"33811761",null),Dt=Mt.exports,Lt=(0,o.aZ)({name:"contactme",components:{BtnIcon:Dt},setup(){const t=(0,o.iH)([{icon:"mdi-linkedin",title:"LinkedIn",color:"#0077B5",colorhover:"#0077B5",href:"https://www.linkedin.com/in/mauricio-aransan/"},{icon:"mdi-instagram",title:"Instagram",color:"#e23670",colorhover:"#e23670",href:"https://www.instagram.com/mauricio_arasan/"},{icon:"mdi-whatsapp",title:"WhatsApp",color:"#0cc243",colorhover:"#0cc243",href:"https://wa.me/934830545?text=Hola,%20Buen%20Dia%20"},{icon:"mdi-github",title:"Github",color:"#000000",colorhover:"#000000",href:"https://github.com/mauricioaransan"}]);return{items:t}}}),jt=Lt,Bt=(0,u.Z)(jt,At,Ht,!1,null,"743af439",null),It=Bt.exports,Ft=a(5495),Ot=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(_.Z,{staticClass:"mt-10 pl-5 pr-5",attrs:{id:"portfolio"}},[e("h1",{staticClass:"mt-5 port_title"},[t._v("PORTAFOLIO")]),e(v.Z,{staticClass:"px-10 mt-10",attrs:{justify:"center"}},t._l(t.items,(function(a){return e(f.Z,{attrs:{cols:"12",sm:"6",md:"4",lg:"4",xl:"4"}},[e(C.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:o}){return[e(Ft.Z,{attrs:{src:a.image,height:"350",width:"100%"}},[e(N.Fx,[o?e(_.Z,{staticClass:"d-flex transition-fast-in-fast-out",staticStyle:{height:"100%"},attrs:{outlined:"",elevation:"10"}},[e(f.Z,{attrs:{"align-self":"center"}},[e("div",{staticClass:"px-4 port_info_title"},[t._v(t._s(a.title))]),e("div",{staticClass:"px-4 port_info_content"},[t._v(" "+t._s(a.content))]),e(v.Z,{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[e("botonHover",{attrs:{colorHover:a.color,title:"Mas info",redirect:a.url,isDownload:"false"}})],1)],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)],1)},Vt=[],qt=function(){var t=this,e=t._self._c;t._self._setupProxy;return"false"===t.isDownload?e("router-link",{style:t.colors,attrs:{to:"/projects?id="+t.redirect}},[t._v(" "+t._s(t.title)+" "),e("span"),e("span"),e("span"),e("span"),e("span"),e("span")]):e("a",{style:t.colors,attrs:{href:"https://drive.google.com/file/d/1vfNTxnazqZpDgKhTU1O8wZlmi0SGCDLV/view?usp=sharing",download:"cv_mauricio.pdf",target:"_blank"}},[t._v(" "+t._s(t.title)+" "),e("span"),e("span"),e("span"),e("span"),e("span"),e("span")])},Nt=[],$t=(0,o.aZ)({name:"BotonHover",props:{colorHover:{type:String,required:!0},title:{type:String,required:!0},redirect:{type:String},isDownload:{type:String,required:!0}},setup(t){const e=(0,o.Fl)((()=>({"--color":t.colorHover})));return{colors:e}}}),Rt=$t,Gt=(0,u.Z)(Rt,qt,Nt,!1,null,"b9eec0e2",null),Ut=Gt.exports,zt=(0,o.aZ)({name:"Portafolio",components:{botonHover:Ut},setup(){const t=(0,o.iH)([{image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",title:"Ficha Postulantes",content:"Creación de una Página Web utilizando Vue/TypeScript en la que se registren los postulantes a los puestos de trabajos generados por la organización y queden registrados en su ERP.",url:"ficha",color:"#00eeff"},{image:"https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",title:"SynLab",content:"Soporte y mantenimiento a varias páginas pertenecientes al grupo Synlab, donde usando Java/FTL/JS y Vue/TypeScript solucionábamos los errores y realizábamos los nuevos requerimientos de los usuarios.",url:"labco",color:"#16FA1D"},{image:"https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",title:"Portafolio",content:"Creación de una LandingPage donde mostrar mi información personal y demás características.",url:"portfolio",color:"#FA16A8"},{image:"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",title:"App Altillos",content:"Aplicativo Móvil creado en Flutter/DART como parte del curso de Tesis de la carrera universitaria.",url:"appAltillos",color:"#1D16FA"}]);return{items:t}}}),Jt=zt,Wt=(0,u.Z)(Jt,Ot,Vt,!1,null,"15bca957",null),Yt=Wt.exports,Kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._t("default")],2)},Xt=[];const Qt=(t,e)=>{if(!t)throw new Error(e||"Assertion failed")};var te={name:"Typewriter",props:{startDelay:{type:Number,default:0},typeInterval:{type:Number,default:75},replace:{type:Array,default:()=>[]},replaceInterval:{type:Number,default:2e3}},mounted(){this.init()},methods:{async init(){const{innerHTML:t,innerText:e}=this.$el;this.$el.innerHTML=t.trim()===e?`<span>${t}</span>`:t,await this.typewriter(this.$el.innerHTML),this.replace.length&&setTimeout((()=>{this.startReplacing()}),this.replaceInterval)},typewriter(t){return new Promise((e=>{this.$el.innerHTML="";const a=o=>{const n=t[o];o="<"===n?t.indexOf(">",o)+1:++o,this.$el.innerHTML=t.substr(0,o),o<t.length-1?setTimeout(a,this.typeInterval,o):e()};a(0)}))},removeString(t,e){return new Promise((a=>{const o=this.$el,n=e=>{o.innerHTML=o.innerHTML.slice(0,e),e--,t<=e?setTimeout(n,this.typeInterval,e):a()};n(e-1)}))},addString(t,e){return new Promise((a=>{const o=this.$el,n=(t,i)=>{o.innerHTML=this.insert(o.innerHTML,i,e[t]),t<e.length-1?setTimeout(n,this.typeInterval,++t,++i):a()};n(0,t)}))},insert(t,e,a){return t.substring(0,e)+a+t.substr(e)},async replaceText(t){Qt(t,"Changed parameter is needed");const{from:e,to:a}=t,o=this.$el.innerHTML,n=new RegExp("\\b"+e+"\\b"),i=o.match(n);Qt(i,`Substring '${e}' not found in component\` current innerHTML`);const{index:r}=i;await this.removeString(r,r+e.length),await this.addString(r,a)},startReplacing(t=this.replace,e=this.replaceInterval){if(!t)throw new Error("Replace parameter is needed");if(!t)throw new Error("Replace parameter has 0 length");return new Promise((a=>{const o=async n=>{2===n?(n=0,await this.replaceText(t[0])):await this.replaceText(t[n]),n<t.length-1?setTimeout(o,e,++n):(await o(0),a())};o(0)}))}}},ee=te,ae=(0,u.Z)(ee,Kt,Xt,!1,null,null,null),oe=ae.exports,ne=(0,o.aZ)({name:"aboutme",components:{Portafolio:Yt,TimeLineEducational:tt,TimeLineAdditional:rt,TimeLineExperience:pt,Skills:St,ContactMe:It,Typewriter:oe,botonHover:Ut},setup(){const t=(0,o.iH)("#000"),e=(0,o.iH)(0),a=(0,o.iH)([{title:"Experiencia"},{title:"Educacion"},{title:"Adicional"}]),n=(0,o.iH)(2),i=(0,o.iH)("Front-End"),r=(0,o.iH)([{from:"Front-End",to:"Back-End"},{from:"Back-End",to:"Front-End"},{from:"Front-End",to:"Back-End"}]);return(0,o.bv)((()=>{setInterval((()=>{if(2===n.value&&(i.value="Back-End"),1===n.value)return i.value="Front-End",n.value=2;n.value-=1}),4e3)})),{model:e,items:a,text_typed:i,time:n,replace:r,colorFromScript:t}}}),ie=ne,re=(0,u.Z)(ie,G,U,!1,null,"4f211d9e",null),se=re.exports,le=(0,o.aZ)({name:"Home",components:{NavigationBarLeft:D,NavigationBarHidden:V,AboutMe:se},setup(){return{}}}),ce=le,ue=(0,u.Z)(ce,h,g,!1,null,null,null),de=ue.exports;o.ZP.use(m.ZP);const pe=[{path:"/",name:"home",component:de},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,6897))},{path:"/projects",name:"project",component:()=>a.e(443).then(a.bind(a,1628))}],me=new m.ZP({mode:"history",base:"/",routes:pe});var fe=me,ve=a(629);o.ZP.use(ve.ZP);var _e=new ve.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),he=a(1705);o.ZP.use(he.Z);var ge=new he.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:fe,store:_e,vuetify:ge,render:t=>t(p)}).$mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,i){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.7cfff292.js"}}(),function(){a.miniCssF=function(t){return"css/about.f80732e0.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portafolio_with_vue:";a.l=function(o,n,i,r){if(t[o])t[o].push(n);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[n];var p=function(e,a){s.onerror=s.onload=null,clearTimeout(m);var n=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)a();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=i,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var n=a[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===t||i===e))return n}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){n=r[o],i=n.getAttribute("data-href");if(i===t||i===e)return n}},o=function(o){return new Promise((function(n,i){var r=a.miniCssF(o),s=a.p+r;if(e(r,s))return n();t(o,s,n,i)}))},n={143:0};a.f.miniCss=function(t,e){var a={443:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=o(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,o){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(a,o){n=t[e]=[a,o]}));o.push(n[2]=i);var r=a.p+a.u(e),s=new Error,l=function(o){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,n[1](s)}};a.l(r,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var u=l(a)}for(e&&e(o);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},o=self["webpackChunkportafolio_with_vue"]=self["webpackChunkportafolio_with_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(3344)}));o=a.O(o)})();
//# sourceMappingURL=app.b1b1ad31.js.map