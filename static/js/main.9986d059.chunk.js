(this["webpackJsonpreact-hw-01-components-transaction-history"]=this["webpackJsonpreact-hw-01-components-transaction-history"]||[]).push([[0],{13:function(e,t,a){e.exports={overlay:"Modal_overlay__1P2CI",modal:"Modal_modal__17m-J",img:"Modal_img__2oWaA"}},14:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__3Gj9Y",searchInput:"SearchForm_searchInput__3UNyE"}},15:function(e,t,a){e.exports={gallery:"Gallery_gallery__12-ha",button:"Gallery_button__2Vivf"}},29:function(e,t,a){e.exports={app:"App_app__3GFJD"}},3:function(e,t,a){e.exports={"photo\u0421ard":"PhotoCard_photo\u0421ard__2gB9M","photo\u0421ardImg":"PhotoCard_photo\u0421ardImg__2yxuA",stats:"PhotoCard_stats__1BM3e",statsItem:"PhotoCard_statsItem__1xVX3",fullscreenButton:"PhotoCard_fullscreenButton__2907h"}},32:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(10),c=a.n(o),s=a(16),l=a(4),i=a.n(l),m=a(11),u=a(5),p=a(6),h=a(8),d=a(7),f=a(9),g=a(17),v=a(14),b=a.n(v),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchInputValue:""},a.handleInputChange=function(e){var t=e.target;a.setState({searchInputValue:t.value})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.searchInputValue;a.props.onSubmit(t),a.setState({searchInputValue:""})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.searchInputValue;return r.a.createElement("form",{className:b.a.searchForm,onSubmit:this.handleFormSubmit},r.a.createElement("input",{className:b.a.searchInput,value:e,onChange:this.handleInputChange,type:"text",autoComplete:"off",placeholder:"Search images..."}))}}]),t}(n.Component),k=a(15),_=a.n(k),w=a(3),E=a.n(w),I=function(e){var t=e.imgLink,a=e.largeImgLink,n=e.likes,o=e.views,c=e.comments,s=e.downloads,l=e.tags,i=e.onClick;return r.a.createElement("div",{className:E.a.photo\u0421ard},r.a.createElement("img",{src:t,alt:l,className:E.a.photo\u0421ardImg}),r.a.createElement("div",{className:E.a.stats},r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),n),r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),o),r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),c),r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),s)),r.a.createElement("button",{type:"button","data-link":a,className:E.a.fullscreenButton,onClick:i},r.a.createElement("i",{className:"material-icons","data-link":a},"zoom_out_map")))};I.defaultProps={likes:0,views:0,comments:0,downloads:0,tags:"photo"};var C=I,O=function(e){var t=e.images,a=e.onFullScreenclick,n=e.onLoadMoreClick;return r.a.createElement("ul",{className:_.a.gallery},t.map((function(e){return r.a.createElement(C,Object.assign({key:e.imgLink},e,{onClick:a}))})),r.a.createElement("button",{className:_.a.button,onClick:n,type:"button"},"Load more"))},S=a(13),j=a.n(S),N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).overlayRef=Object(n.createRef)(),a.state={isModalOpen:!0},a.componentDidMount=function(){window.addEventListener("keydown",a.handleKeyPress)},a.componentWillUnmount=function(){window.removeEventListener("keydown",a.handleKeyPress)},a.handleKeyPress=function(e){"Escape"===e.code&&a.toggleModal()},a.toggleModal=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}})),a.props.onClose()},a.handleOverlayClick=function(e){var t=a.overlayRef.current;t&&e.target!==t||a.toggleModal()},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.link,t=this.state.isModalOpen;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:j.a.overlay,onClick:this.handleOverlayClick,ref:this.overlayRef,role:"presentation"},r.a.createElement("div",{className:j.a.modal},r.a.createElement("img",{src:e,alt:"",className:j.a.img}))))}}]),t}(n.Component);N.defaultProps={};var M=N,x=a(28),L=a.n(x),F=function(){var e=Object(m.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(t,"&page=").concat(a,"&per_page=12&key=13831608-fc33c401179d692a5e1a3e905"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),P=function(e){return e.map((function(e){return{id:e.id,imgLink:e.webformatURL,largeImgLink:e.largeImageURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads,tags:e.tags}}))},V=(a(55),a(29)),A=a.n(V),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",page:1,images:[],modalImgLink:""},a.handleSearchFormSubmit=function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({query:t,page:1}),e.prev=1,e.next=4,F(t,1);case 4:n=e.sent,a.setState({images:P(n.data.hits)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g.a.error("Error while fetching: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleLoadMoreClick=function(){a.setState((function(e){return{page:++e.page}}),Object(m.a)(i.a.mark((function e(){var t,n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.query,r=t.page,e.prev=1,e.next=4,F(n,r);case 4:o=e.sent,a.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(P(o.data.hits)))}})),window.scrollTo({top:990*(r-1),behavior:"smooth"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g.a.error("Error while fetching: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))))},a.handleShowFullScreenImg=function(e){var t=e.target.dataset.link;a.setState({modalImgLink:t})},a.handleModalClose=function(){a.setState({modalImgLink:""})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.images,n=e.modalImgLink;return r.a.createElement("div",{className:A.a.app},r.a.createElement(y,{value:t,onSubmit:this.handleSearchFormSubmit}),a.length>0&&r.a.createElement(O,{images:a,onFullScreenclick:this.handleShowFullScreenImg,onLoadMoreClick:this.handleLoadMoreClick}),n.length>0&&r.a.createElement(M,{link:n,onClose:this.handleModalClose}))}}]),t}(n.Component);c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9986d059.chunk.js.map