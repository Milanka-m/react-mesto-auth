(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),i=a.n(s),o=a(8),r=(a(30),a(24)),l=a(2),u=c.a.createContext(),d=c.a.createContext(),p=a(3),j=a(0);var m=function(e){var t=e.email,a=e.handleLogout;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("a",{href:"#",className:"header__logo link",target:"_self",rel:"noopener"}),Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{exact:!0,path:"/",children:Object(j.jsxs)("ul",{className:"header__nav",children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"sign-in",className:"header__link link",children:t})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:a,className:"header__button link",children:"\u0412\u044b\u0439\u0442\u0438"})})]})}),Object(j.jsx)(p.b,{path:"/sign-up",children:Object(j.jsx)(o.b,{className:"header__link link",to:"sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(j.jsx)(p.b,{path:"/sign-in",children:Object(j.jsx)(o.b,{className:"header__link link",to:"sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})};var h=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,s=e.onCardDelete,i=c.a.useContext(u),o=t.owner._id===i._id,r="".concat(o&&"elements__icon-delete_active"),l=t.likes.some((function(e){return e._id===i._id})),d="".concat(l&&"elements__icon-favorite_active");return Object(j.jsxs)("article",{className:"elements__card",children:[Object(j.jsx)("div",{className:"elements__card-image",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){a(t)}}),Object(j.jsx)("button",{className:"elements__icon-delete ".concat(r," link"),type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){s(t)}}),Object(j.jsxs)("div",{className:"elements__label",children:[Object(j.jsx)("h2",{className:"elements__heading",children:t.name}),Object(j.jsxs)("ul",{className:"elements__like",children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"elements__icon-favorite ".concat(d," link"),type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){n(t)}})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{className:"elements__like-number",children:t.likes.length})})]})]})]})};var b=function(e){var t=e.cards,a=e.onCardLike,n=e.onCardDelete,s=e.onEditAvatar,i=e.onEditProfile,o=e.onAddPlace,r=e.onCardClick,l=c.a.useContext(u);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("button",{className:"profile__button-avatar",onClick:s,type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(j.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(l.avatar,")")}})}),Object(j.jsxs)("div",{className:"profile__description",children:[Object(j.jsx)("h1",{className:"profile__title",children:l.name}),Object(j.jsx)("button",{className:"profile__button-edit profile__icon-edit link",onClick:i,type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(j.jsx)("p",{className:"profile__subtitle",children:l.about})]})]}),Object(j.jsx)("button",{className:"profile__button-add profile__icon-add link",onClick:o,type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"})]}),Object(j.jsx)("section",{className:"elements",children:t.map((function(e){return Object(j.jsx)(h,{card:e,onCardLike:a,onCardDelete:n,onCardClick:r},e._id)}))})]})};var _=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," \u041c\u0438\u043b\u0430\u043d\u0430 \u0411\u0438\u0440\u0443\u043b\u044f"]})})};var f=function(e){var t=e.onSubmit,a=e.isOpen,n=e.name,c=e.title,s=e.onClose,i=e.children,o=e.nameButton,r="".concat(a&&"popup_opened");return Object(j.jsx)("div",{className:"popup ".concat(r),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:s}),Object(j.jsxs)("form",{className:"popup__form",name:n,onSubmit:t,children:[Object(j.jsxs)("div",{className:"popup__form-container",children:[Object(j.jsx)("h2",{className:"popup__form-title",children:c}),i]}),Object(j.jsx)("fieldset",{className:"popup__form-handlers",children:Object(j.jsx)("button",{type:"submit",className:"popup__form-button link",children:o})})]})]})})};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.link,c=e.name,s="".concat(t&&"popup_opened");return Object(j.jsx)("div",{className:"popup-image popup ".concat(s),children:Object(j.jsxs)("div",{className:"popup-image__container",children:[Object(j.jsx)("button",{className:"popup__close popup-image-close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:a}),Object(j.jsxs)("figure",{className:"popup-image__figure",children:[Object(j.jsx)("img",{className:"popup-image__illustration",src:n,alt:c}),Object(j.jsx)("figcaption",{children:Object(j.jsx)("p",{className:"popup-image__caption",children:c})})]})]})})};var x=function(e){var t=e.onUpdateUser,a=e.isOpen,n=e.onClose,s=c.a.useContext(u),i=c.a.useState(""),o=Object(l.a)(i,2),r=o[0],d=o[1],p=c.a.useState(""),m=Object(l.a)(p,2),h=m[0],b=m[1];return c.a.useEffect((function(){(Object.keys(s).length||a)&&(d(s.name),b(s.about))}),[s,a]),Object(j.jsx)(f,{onSubmit:function(e){e.preventDefault(),t({name:r,about:h})},isOpen:a,onClose:n,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",nameButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"profile",children:Object(j.jsxs)("fieldset",{className:"popup__form-input-container",children:[Object(j.jsxs)("section",{className:"popup__form-section",children:[Object(j.jsx)("input",{className:"popup__form-input",value:r,onChange:function(e){d(e.target.value)},type:"text",name:"name",id:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"name-error"})]}),Object(j.jsxs)("section",{className:"popup__form-section",children:[Object(j.jsx)("input",{className:"popup__form-input",value:h,onChange:function(e){b(e.target.value)},type:"text",name:"about",id:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"about-error"})]})]})})};var v=function(e){var t=e.onUpdateAvatar,a=e.isOpen,n=e.onClose,s=c.a.useRef();return c.a.useEffect((function(){a&&(s.current.value="")}),[a]),Object(j.jsx)(f,{onSubmit:function(e){e.preventDefault(),t({avatar:s.current.value})},isOpen:a,onClose:n,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",nameButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"avatar",children:Object(j.jsx)("fieldset",{className:"popup__form-input-container",children:Object(j.jsxs)("section",{className:"popup__form-section",children:[Object(j.jsx)("input",{ref:s,className:"popup__form-input",type:"url",name:"link",id:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"link-error"})]})})})};var g=function(e){var t=e.onAddPlace,a=e.isOpen,n=e.onClose,s=c.a.useState(""),i=Object(l.a)(s,2),o=i[0],r=i[1],u=c.a.useState(""),d=Object(l.a)(u,2),p=d[0],m=d[1];return c.a.useEffect((function(){a&&(r(""),m(""))}),[a]),Object(j.jsx)(f,{onSubmit:function(e){e.preventDefault(),t({name:o,link:p})},isOpen:a,onClose:n,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",nameButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",name:"card",children:Object(j.jsxs)("fieldset",{className:"popup__form-input-container",children:[Object(j.jsxs)("section",{className:"popup__form-section",children:[Object(j.jsx)("input",{className:"popup__form-input",type:"text",value:o,onChange:function(e){r(e.target.value)},name:"namecard",id:"namecard",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"namecard-error"})]}),Object(j.jsxs)("section",{className:"popup__form-section",children:[Object(j.jsx)("input",{className:"popup__form-input",type:"url",value:p,onChange:function(e){m(e.target.value)},name:"linkcard",id:"linkcard",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"linkcard-error"})]})]})})},k=a.p+"static/media/icon-auth-error.df8eddf6.svg",N=a.p+"static/media/icon-auth-login.1b6082f8.svg";var C=function(e){var t=e.error,a=e.isOpen,n=e.onClose,c="".concat(a&&"popup_opened");return Object(j.jsx)("div",{className:"popup ".concat(c),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{className:"popup__close link",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:n}),Object(j.jsx)("img",{className:"popup__info-icon",src:t?k:N,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(j.jsx)("p",{className:"popup__info-text",children:t?"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})})},y=a(9),S=a(25),w=["component"],D=function(e){var t=e.component,a=Object(S.a)(e,w);return Object(j.jsx)(p.b,{children:function(){return!0===a.loggedIn?Object(j.jsx)(t,Object(y.a)({},a)):Object(j.jsx)(p.a,{to:"./sign-in"})}})},L=a(11);var E=function(e){var t=e.handleLogin,a=c.a.useState({email:"",password:""}),n=Object(l.a)(a,2),s=n[0],i=n[1];function o(e){var t=e.target,a=t.name,n=t.value;i(Object(y.a)(Object(y.a)({},s),{},Object(L.a)({},a,n)))}return Object(j.jsx)("div",{className:"auth",children:Object(j.jsxs)("form",{className:"auth__form",onSubmit:function(e){if(e.preventDefault(),s.email&&s.password){var a=s.email,n=s.password;t({email:a,password:n})}},children:[Object(j.jsxs)("div",{className:"auth__form-container",children:[Object(j.jsx)("h2",{className:"auth__form-title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("fieldset",{className:"auth__form-input-container",children:[Object(j.jsxs)("section",{className:"auth__form-section",children:[Object(j.jsx)("input",{className:"auth__form-input",type:"email",value:s.email,onChange:o,name:"email",id:"email",placeholder:"Email",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"email-error"})]}),Object(j.jsxs)("section",{className:"auth__form-section",children:[Object(j.jsx)("input",{className:"auth__form-input",type:"password",value:s.password,onChange:o,name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"password-error"})]})]})]}),Object(j.jsx)("fieldset",{className:"popup__form-handlers",children:Object(j.jsx)("button",{type:"submit",className:"auth__form-button link",children:"\u0412\u043e\u0439\u0442\u0438"})})]})})};var I=function(e){var t=e.handleRegister,a=c.a.useState({email:"",password:"",message:""}),n=Object(l.a)(a,2),s=n[0],i=n[1];function r(e){var t=e.target,a=t.name,n=t.value;i(Object(y.a)(Object(y.a)({},s),{},Object(L.a)({},a,n)))}return Object(j.jsx)("div",{className:"auth",children:Object(j.jsxs)("form",{className:"auth__form",onSubmit:function(e){if(e.preventDefault(),s.email&&s.password){var a=s.email,n=s.password;t({email:a,password:n})}},children:[Object(j.jsxs)("div",{className:"auth__form-container",children:[Object(j.jsx)("h2",{className:"auth__form-title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("fieldset",{className:"auth__form-input-container",children:[Object(j.jsxs)("section",{className:"auth__form-section",children:[Object(j.jsx)("input",{className:"auth__form-input",type:"email",value:s.email,onChange:r,name:"email",id:"email",placeholder:"Email",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"email-error"})]}),Object(j.jsxs)("section",{className:"auth__form-section",children:[Object(j.jsx)("input",{className:"auth__form-input",type:"password",value:s.password,onChange:r,name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("span",{className:"popup__form-input-error",id:"password-error"})]})]})]}),Object(j.jsx)("fieldset",{className:"popup__form-handlers",children:Object(j.jsx)("button",{type:"submit",className:"auth__form-button link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})}),Object(j.jsxs)("fieldset",{className:"auth__signin",children:[Object(j.jsx)("p",{className:"auth__title-signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(j.jsx)(o.b,{to:"/sign-in",className:"auth__link-signin link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},P=a(22),T=a(23),A=new(function(){function e(t){var a=t.address,n=t.token,c=t.groupID;Object(P.a)(this,e),this._address=a,this._token=n,this._groupID=c}return Object(T.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUsers",value:function(){return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editUser",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"removeLikeCard",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._address,"/v1/").concat(this._groupID,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}]),e}())({address:"https://mesto.nomoreparties.co",token:"6db4154b-d992-4850-8211-1b620ba1fb44",groupID:"cohort-22"}),R="https://auth.nomoreparties.co",U=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var q=Object(p.h)((function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=c.a.useState(!1),i=Object(l.a)(s,2),o=i[0],h=i[1],k=c.a.useState(!1),N=Object(l.a)(k,2),y=N[0],S=N[1],w=c.a.useState(!1),L=Object(l.a)(w,2),P=L[0],T=L[1],q=c.a.useState(!1),z=Object(l.a)(q,2),B=z[0],J=z[1],F=c.a.useState({}),H=Object(l.a)(F,2),G=H[0],M=H[1],Y=c.a.useState({}),K=Object(l.a)(Y,2),Q=K[0],V=K[1],W=c.a.useState({}),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=c.a.useState([]),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ce=c.a.useState(!1),se=Object(l.a)(ce,2),ie=se[0],oe=se[1],re=c.a.useState(""),le=Object(l.a)(re,2),ue=le[0],de=le[1],pe=c.a.useState(!1),je=Object(l.a)(pe,2),me=je[0],he=je[1],be=Object(p.g)();function _e(e){console.log(e)}function fe(){n(!1),h(!1),S(!1),J(!1),T(!1)}return c.a.useEffect((function(){!function(){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(R,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(U)).then((function(e){var t=e.data.email;de(t),oe(!0)})).catch(_e);var t}()}),[]),c.a.useEffect((function(){ie&&be.push("/")}),[ie]),c.a.useEffect((function(){A.getCards().then((function(e){ne(e)})).catch(_e)}),[]),c.a.useEffect((function(){A.getUsers().then((function(e){V(e)})).catch(_e)}),[]),Object(j.jsx)(u.Provider,{value:Q,children:Object(j.jsx)(d.Provider,{value:Z,children:Object(j.jsx)("div",{className:"page",children:Object(j.jsxs)("div",{className:"root",children:[Object(j.jsx)(m,{email:ue,handleLogout:function(){de(""),oe(!1),localStorage.removeItem("jwt")}}),Object(j.jsxs)(p.d,{children:[Object(j.jsx)(D,{exact:!0,path:"/",loggedIn:ie,cards:ae,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Q._id}));t?A.removeLikeCard(e._id,t).then((function(t){ne((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))})).catch(_e):A.addLikeCard(e._id,!t).then((function(t){ne((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))})).catch(_e)},onCardDelete:function(e){A.removeCard(e._id).then((function(){ne((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch(_e)},onEditProfile:function(){n(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){S(!0)},onCardClick:function(e){M(e),J(!0)},component:b}),Object(j.jsx)(p.b,{exat:!0,path:"/sign-in",children:Object(j.jsx)(E,{handleLogin:function(e){var t=e.email,a=e.password;de(t),function(e,t){return fetch("".concat(R,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(U)}(t,a).then((function(e){var t=e.token;localStorage.setItem("jwt",t),oe(!0)})).catch(_e)}})}),Object(j.jsx)(p.b,{path:"/sign-up",children:Object(j.jsx)(I,{handleRegister:function(e){(function(e,t){return fetch("".concat(R,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(U)})(e.email,e.password).then((function(e){var t=e.jwt,a=e.data.email;localStorage.setItem("jwt",t),de(a),oe(!0),he(!1),T(!0)})).catch((function(e){console.log(e),he(!0),T(!0)}))}})}),Object(j.jsx)(p.b,{children:ie?Object(j.jsx)(p.a,{to:"/"}):Object(j.jsx)(p.a,{to:"/sign-in"})})]}),Object(j.jsx)(_,{}),Object(j.jsx)(C,{error:me,isOpen:P,onClose:fe}),Object(j.jsx)(x,{onUpdateUser:function(e){var t=e.name,a=e.about;A.editUser({name:t,about:a}).then((function(e){V(e),fe()})).catch(_e)},isOpen:a,onClose:fe}),Object(j.jsx)(v,{onUpdateAvatar:function(e){var t=e.avatar;A.editAvatar({avatar:t}).then((function(e){V(e),fe()})).catch(_e)},isOpen:y,onClose:fe}),Object(j.jsx)(g,{onAddPlace:function(e){var t=e.name,a=e.link;A.addCard({name:t,link:a}).then((function(e){$(e),ne([e].concat(Object(r.a)(ae))),fe()})).catch(_e)},isOpen:o,onClose:fe}),Object(j.jsx)(f,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b ?",name:"removecard",nameButton:"\u0414\u0430"}),Object(j.jsx)(O,{isOpen:B,card:G,onClose:fe,link:G.link,name:G.name})]})})})})})),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(q,{})})}),document.getElementById("root")),z()}},[[37,1,2]]]);
//# sourceMappingURL=main.3e2ce5d4.chunk.js.map