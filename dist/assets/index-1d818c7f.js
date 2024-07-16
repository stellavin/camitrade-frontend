import{r as A,c as j}from"./index-3139f6c3.js";var ot={},Y={},m={},B={};(function(o){function i(a,r,l){var u=r.slidesToShow,h=r.currentSlide;return l.length>2*u?a+2*u:h>=l.length?l.length+a:a}function t(a,r){if(r.length>2*a){for(var l={},u=r.length-2*a,h=r.length-u,c=u,d=0;d<h;d++)l[d]=c,c++;var p=r.length+h,f=p+r.slice(0,2*a).length,v=0;for(d=p;d<=f;d++)l[d]=v,v++;var w=p,b=0;for(d=h;d<w;d++)l[d]=b,b++;return l}l={};var C=3*r.length,g=0;for(d=0;d<C;d++)l[d]=g,++g===r.length&&(g=0);return l}function e(a,r){return r.length<a?r:r.length>2*a?r.slice(r.length-2*a,r.length).concat(r,r.slice(0,2*a)):r.concat(r,r)}function n(a,r){return r.length>2*a?2*a:r.length}function s(a,r,l){var u,h=a.currentSlide,c=a.slidesToShow,d=a.itemWidth,p=a.totalItems,f=0,v=0,w=h===0,b=r.length-(r.length-2*c);return r.length<c?(v=f=0,w=u=!1):r.length>2*c?((u=h>=b+r.length)&&(v=-d*(f=h-r.length)),w&&(v=-d*(f=b+(r.length-2*c)))):((u=h>=2*r.length)&&(v=-d*(f=h-r.length)),w&&(v=l.showDots?-d*(f=r.length):-d*(f=p/3))),{isReachingTheEnd:u,isReachingTheStart:w,nextSlide:f,nextPosition:v}}Object.defineProperty(o,"__esModule",{value:!0}),o.getOriginalCounterPart=i,o.getOriginalIndexLookupTableByClones=t,o.getClones=e,o.getInitialSlideInInfiniteMode=n,o.checkClonesPosition=s})(B);var O={};Object.defineProperty(O,"__esModule",{value:!0});function ht(o,i,t,e){var n=0,s=e||t;return i&&s&&(n=o[s].partialVisibilityGutter||o[s].paritialVisibilityGutter),n}function dt(o,i){var t;return i[o]&&(t=(100/i[o].items).toFixed(1)),t}function ct(o,i,t){return Math.round(t/(i+(o.centerMode?1:0)))}O.getPartialVisibilityGutter=ht,O.getWidthFromDeviceType=dt,O.getItemClientSideWidth=ct;var y={};Object.defineProperty(y,"__esModule",{value:!0});var U=O;function z(o){var i=o.slidesToShow;return o.totalItems<i}function pt(o,i){var t,e=o.domLoaded,n=o.slidesToShow,s=o.containerWidth,a=o.itemWidth,r=i.deviceType,l=i.responsive,u=i.ssr,h=i.partialVisbile,c=i.partialVisible,d=!!(e&&n&&s&&a);u&&r&&!d&&(t=U.getWidthFromDeviceType(r,l));var p=!!(u&&r&&!d&&t);return{shouldRenderOnSSR:p,flexBisis:t,domFullyLoaded:d,partialVisibilityGutter:U.getPartialVisibilityGutter(l,h||c,r,o.deviceType),shouldRenderAtAll:p||d}}function ft(o,i){var t=i.currentSlide,e=i.slidesToShow;return t<=o&&o<t+e}function nt(o,i,t){var e=t||o.transform;return!i.infinite&&o.currentSlide===0||z(o)?e:e+o.itemWidth/2}function mt(o){return!(0<o.currentSlide)}function rt(o){var i=o.currentSlide,t=o.totalItems;return!(i+o.slidesToShow<t)}function st(o,i,t,e){i===void 0&&(i=0);var n=o.currentSlide,s=o.slidesToShow,a=rt(o),r=!t.infinite&&a,l=e||o.transform;if(z(o))return l;var u=l+n*i;return r?u+(o.containerWidth-(o.itemWidth-i)*s):u}function at(o,i){return o.rtl?-1*i:i}function vt(o,i,t){var e=i.partialVisbile,n=i.partialVisible,s=i.responsive,a=i.deviceType,r=i.centerMode,l=t||o.transform,u=U.getPartialVisibilityGutter(s,e||n,a,o.deviceType);return at(i,n||e?st(o,u,i,t):r?nt(o,i,t):l)}function gt(o,i){var t=o.domLoaded,e=o.slidesToShow,n=o.containerWidth,s=o.itemWidth,a=i.deviceType,r=i.responsive,l=i.slidesToSlide||1,u=!!(t&&e&&n&&s);return i.ssr&&i.deviceType&&!u&&Object.keys(r).forEach(function(h){var c=r[h].slidesToSlide;a===h&&c&&(l=c)}),u&&Object.keys(r).forEach(function(h){var c=r[h],d=c.breakpoint,p=c.slidesToSlide,f=d.max,v=d.min;p&&window.innerWidth>=v&&window.innerWidth<=f&&(l=p)}),l}y.notEnoughChildren=z,y.getInitialState=pt,y.getIfSlideIsVisbile=ft,y.getTransformForCenterMode=nt,y.isInLeftEnd=mt,y.isInRightEnd=rt,y.getTransformForPartialVsibile=st,y.parsePosition=at,y.getTransform=vt,y.getSlidesToSlide=gt;var K={};Object.defineProperty(K,"__esModule",{value:!0});var St=function(o,i,t){var e;return function(){var n=arguments;e||(o.apply(this,n),e=!0,typeof t=="function"&&t(!0),setTimeout(function(){e=!1,typeof t=="function"&&t(!1)},i))}};K.default=St;var lt={};(function(o){function i(t,e){var n=e.partialVisbile,s=e.partialVisible,a=e.centerMode,r=e.ssr,l=e.responsive;if((n||s)&&a)throw new Error("center mode can not be used at the same time with partialVisible");if(!l)throw r?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(l&&typeof l!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(o,"__esModule",{value:!0}),o.default=i})(lt);var q={};Object.defineProperty(q,"__esModule",{value:!0});var yt=y;function Tt(o,i,t){t===void 0&&(t=0);var e,n,s=o.slidesToShow,a=o.currentSlide,r=o.itemWidth,l=o.totalItems,u=yt.getSlidesToSlide(o,i),h=a+1+t+s+(0<t?0:u);return n=h<=l?-r*(e=a+t+(0<t?0:u)):l<h&&a!==l-s?-r*(e=l-s):e=void 0,{nextSlides:e,nextPosition:n}}q.populateNextSlides=Tt;var J={};Object.defineProperty(J,"__esModule",{value:!0});var wt=A,bt=y,Ct=y;function It(o,i,t){t===void 0&&(t=0);var e,n,s=o.currentSlide,a=o.itemWidth,r=o.slidesToShow,l=i.children,u=i.showDots,h=i.infinite,c=bt.getSlidesToSlide(o,i),d=s-t-(0<t?0:c),p=(wt.Children.toArray(l).length-r)%c;return n=0<=d?(e=d,u&&!h&&0<p&&Ct.isInRightEnd(o)&&(e=s-p),-a*e):e=d<0&&s!==0?0:void 0,{nextSlides:e,nextPosition:n}}J.populatePreviousSlides=It;var ut={};(function(o){function i(t,e,n,s,a,r){var l,u,h=t.itemWidth,c=t.slidesToShow,d=t.totalItems,p=t.currentSlide,f=e.infinite,v=!1,w=Math.round((n-s)/h),b=Math.round((s-n)/h),C=n<a;if(a<n&&w<=c){l="right";var g=Math.abs(-h*(d-c)),M=r-(s-a),I=p===d-c;(Math.abs(M)<=g||I&&f)&&(u=M,v=!0)}return C&&b<=c&&(l="left",((M=r+(a-s))<=0||p===0&&f)&&(v=!0,u=M)),{direction:l,nextPosition:u,canContinue:v}}Object.defineProperty(o,"__esModule",{value:!0}),o.populateSlidesOnMouseTouchMove=i})(ut);Object.defineProperty(m,"__esModule",{value:!0});var x=B;m.getOriginalCounterPart=x.getOriginalCounterPart,m.getClones=x.getClones,m.checkClonesPosition=x.checkClonesPosition,m.getInitialSlideInInfiniteMode=x.getInitialSlideInInfiniteMode;var $=O;m.getWidthFromDeviceType=$.getWidthFromDeviceType,m.getPartialVisibilityGutter=$.getPartialVisibilityGutter,m.getItemClientSideWidth=$.getItemClientSideWidth;var R=y;m.getInitialState=R.getInitialState,m.getIfSlideIsVisbile=R.getIfSlideIsVisbile,m.getTransformForCenterMode=R.getTransformForCenterMode,m.getTransformForPartialVsibile=R.getTransformForPartialVsibile,m.isInLeftEnd=R.isInLeftEnd,m.isInRightEnd=R.isInRightEnd,m.notEnoughChildren=R.notEnoughChildren,m.getSlidesToSlide=R.getSlidesToSlide;var Mt=K;m.throttle=Mt.default;var Pt=lt;m.throwError=Pt.default;var Rt=q;m.populateNextSlides=Rt.populateNextSlides;var Et=J;m.populatePreviousSlides=Et.populatePreviousSlides;var _t=ut;m.populateSlidesOnMouseTouchMove=_t.populateSlidesOnMouseTouchMove;var G={},Ot=j&&j.__extends||function(){var o=function(i,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])})(i,t)};return function(i,t){function e(){this.constructor=i}o(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(G,"__esModule",{value:!0});var At=A;function Wt(o){return"clientY"in o}G.isMouseMoveEvent=Wt;var Lt=function(o){function i(){return o!==null&&o.apply(this,arguments)||this}return Ot(i,o),i}(At.Component);G.default=Lt;var Q={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});var Dt=B,xt=y;function Vt(o,i,t,e){var n={},s=xt.getSlidesToSlide(i,t);return Array(o).fill(0).forEach(function(a,r){var l=Dt.getOriginalCounterPart(r,i,e);if(r===0)n[0]=l;else{var u=n[r-1]+s;n[r]=u}}),n}Z.getLookupTableForNextSlides=Vt;Object.defineProperty(Q,"__esModule",{value:!0});var L=A,kt=B,jt=Z,tt=y,Ft=function(o){var i=o.props,t=o.state,e=o.goToSlide,n=o.getState,s=i.showDots,a=i.customDot,r=i.dotListClass,l=i.infinite,u=i.children;if(!s||tt.notEnoughChildren(t))return null;var h,c=t.currentSlide,d=t.slidesToShow,p=tt.getSlidesToSlide(t,i),f=L.Children.toArray(u);h=l?Math.ceil(f.length/p):Math.ceil((f.length-d)/p)+1;var v=jt.getLookupTableForNextSlides(h,t,i,f),w=kt.getOriginalIndexLookupTableByClones(d,f),b=w[c];return L.createElement("ul",{className:"react-multi-carousel-dot-list "+r},Array(h).fill(0).map(function(C,g){var M,I;if(l){I=v[g];var _=w[I];M=b===_||_<=b&&b<_+p}else{var W=f.length-d,D=g*p;M=(I=W<D?W:D)===c||I<c&&c<I+p&&c<f.length-d}return a?L.cloneElement(a,{index:g,active:M,key:g,onClick:function(){return e(I)},carouselState:n()}):L.createElement("li",{"data-index":g,key:g,className:"react-multi-carousel-dot "+(M?"react-multi-carousel-dot--active":"")},L.createElement("button",{"aria-label":"Go to slide "+(g+1),onClick:function(){return e(I)}}))}))};Q.default=Ft;var N={};Object.defineProperty(N,"__esModule",{value:!0});var F=A,Bt=function(o){var i=o.customLeftArrow,t=o.getState,e=o.previous,n=o.disabled,s=o.rtl;if(i)return F.cloneElement(i,{onClick:function(){return e()},carouselState:t(),disabled:n,rtl:s});var a=s?"rtl":"";return F.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+a,onClick:function(){return e()},type:"button",disabled:n})};N.LeftArrow=Bt;var Gt=function(o){var i=o.customRightArrow,t=o.getState,e=o.next,n=o.disabled,s=o.rtl;if(i)return F.cloneElement(i,{onClick:function(){return e()},carouselState:t(),disabled:n,rtl:s});var a=s?"rtl":"";return F.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+a,onClick:function(){return e()},type:"button",disabled:n})};N.RightArrow=Gt;var H={};Object.defineProperty(H,"__esModule",{value:!0});var V=A,X=m,Nt=function(o){var i=o.props,t=o.state,e=o.goToSlide,n=o.clones,s=o.notEnoughChildren,a=t.itemWidth,r=i.children,l=i.infinite,u=i.itemClass,h=i.itemAriaLabel,c=i.partialVisbile,d=i.partialVisible,p=X.getInitialState(t,i),f=p.flexBisis,v=p.shouldRenderOnSSR,w=p.domFullyLoaded,b=p.partialVisibilityGutter;return p.shouldRenderAtAll?(c&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),V.createElement(V.Fragment,null,(l?n:V.Children.toArray(r)).map(function(C,g){return V.createElement("li",{key:g,"data-index":g,onClick:function(){i.focusOnSelect&&e(g)},"aria-hidden":X.getIfSlideIsVisbile(g,t)?"false":"true","aria-label":h||(C.props.ariaLabel?C.props.ariaLabel:null),style:{flex:v?"1 0 "+f+"%":"auto",position:"relative",width:w?((c||d)&&b&&!s?a-b:a)+"px":"auto"},className:"react-multi-carousel-item "+(X.getIfSlideIsVisbile(g,t)?"react-multi-carousel-item--active":"")+" "+u},C)}))):null};H.default=Nt;var $t=j&&j.__extends||function(){var o=function(i,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])})(i,t)};return function(i,t){function e(){this.constructor=i}o(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(Y,"__esModule",{value:!0});var T=A,S=m,E=G,Xt=Q,et=N,Ut=H,k=y,P=400,it="transform 400ms ease-in-out",Yt=function(o){function i(t){var e=o.call(this,t)||this;return e.containerRef=T.createRef(),e.listRef=T.createRef(),e.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:T.Children.count(t.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},e.onResize=e.onResize.bind(e),e.handleDown=e.handleDown.bind(e),e.handleMove=e.handleMove.bind(e),e.handleOut=e.handleOut.bind(e),e.onKeyUp=e.onKeyUp.bind(e),e.handleEnter=e.handleEnter.bind(e),e.setIsInThrottle=e.setIsInThrottle.bind(e),e.next=S.throttle(e.next.bind(e),t.transitionDuration||P,e.setIsInThrottle),e.previous=S.throttle(e.previous.bind(e),t.transitionDuration||P,e.setIsInThrottle),e.goToSlide=S.throttle(e.goToSlide.bind(e),t.transitionDuration||P,e.setIsInThrottle),e.onMove=!1,e.initialX=0,e.lastX=0,e.isAnimationAllowed=!1,e.direction="",e.initialY=0,e.isInThrottle=!1,e.transformPlaceHolder=0,e}return $t(i,o),i.prototype.resetTotalItems=function(){var t=this,e=T.Children.count(this.props.children),n=S.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,e));this.setState({totalItems:e,currentSlide:n},function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)})},i.prototype.setIsInThrottle=function(t){t===void 0&&(t=!1),this.isInThrottle=t},i.prototype.setTransformDirectly=function(t,e){var n=this.props.additionalTransfrom;this.transformPlaceHolder=t;var s=k.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(e),this.listRef.current.style.transform="translate3d("+(s+n)+"px,0,0)")},i.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||it:"none")},i.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.setClones=function(t,e,n,s){var a=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var r=T.Children.toArray(this.props.children),l=S.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,r),u=S.getClones(this.state.slidesToShow,r),h=r.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:n&&!s?h:l},function(){a.correctItemsPosition(e||a.state.itemWidth)})},i.prototype.setItemsToShow=function(t,e){var n=this,s=this.props.responsive;Object.keys(s).forEach(function(a){var r=s[a],l=r.breakpoint,u=r.items,h=l.max,c=l.min,d=[window.innerWidth];window.screen&&window.screen.width&&d.push(window.screen.width);var p=Math.min.apply(Math,d);c<=p&&p<=h&&(n.setState({slidesToShow:u,deviceType:a}),n.setContainerAndItemWidth(u,t,e))})},i.prototype.setContainerAndItemWidth=function(t,e,n){var s=this;if(this.containerRef&&this.containerRef.current){var a=this.containerRef.current.offsetWidth,r=S.getItemClientSideWidth(this.props,t,a);this.setState({containerWidth:a,itemWidth:r},function(){s.props.infinite&&s.setClones(t,r,e,n)}),e&&this.correctItemsPosition(r)}},i.prototype.correctItemsPosition=function(t,e,n){e&&(this.isAnimationAllowed=!0),!e&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;n&&this.setTransformDirectly(s,!0),this.setState({transform:s})},i.prototype.onResize=function(t){var e;e=!!this.props.infinite&&(typeof t!="boolean"||!t),this.setItemsToShow(e)},i.prototype.componentDidUpdate=function(t,e){var n=this,s=t.keyBoardControl,a=t.autoPlay,r=t.children,l=e.containerWidth,u=e.domLoaded,h=e.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){n.setItemsToShow(!0)},this.props.transitionDuration||P)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),a&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),a||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),r.length!==this.props.children.length?i.clonesTimeout=setTimeout(function(){n.props.infinite?n.setClones(n.state.slidesToShow,n.state.itemWidth,!0,!0):n.resetTotalItems()},this.props.transitionDuration||P):this.props.infinite&&this.state.currentSlide!==h&&this.correctClonesPosition({domLoaded:u}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&S.isInRightEnd(this.state)){var c=this.props.transitionDuration||P;i.isInThrottleTimeout=setTimeout(function(){n.setIsInThrottle(!1),n.resetAutoplayInterval(),n.goToSlide(0,void 0,!!n.props.rewindWithAnimation)},c+this.props.autoPlaySpeed)}},i.prototype.correctClonesPosition=function(t){var e=this,n=t.domLoaded,s=T.Children.toArray(this.props.children),a=S.checkClonesPosition(this.state,s,this.props),r=a.isReachingTheEnd,l=a.isReachingTheStart,u=a.nextSlide,h=a.nextPosition;this.state.domLoaded&&n&&(r||l)&&(this.isAnimationAllowed=!1,i.transformTimeout=setTimeout(function(){e.setState({transform:h,currentSlide:u})},this.props.transitionDuration||P))},i.prototype.next=function(t){var e=this;t===void 0&&(t=0);var n=this.props,s=n.afterChange,a=n.beforeChange;if(!S.notEnoughChildren(this.state)){var r=S.populateNextSlides(this.state,this.props,t),l=r.nextSlides,u=r.nextPosition,h=this.state.currentSlide;l!==void 0&&u!==void 0&&(typeof a=="function"&&a(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof s=="function"&&(i.afterChangeTimeout=setTimeout(function(){s(h,e.getState())},e.props.transitionDuration||P))}))}},i.prototype.previous=function(t){var e=this;t===void 0&&(t=0);var n=this.props,s=n.afterChange,a=n.beforeChange;if(!S.notEnoughChildren(this.state)){var r=S.populatePreviousSlides(this.state,this.props,t),l=r.nextSlides,u=r.nextPosition;if(l!==void 0&&u!==void 0){var h=this.state.currentSlide;typeof a=="function"&&a(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){typeof s=="function"&&(i.afterChangeTimeout2=setTimeout(function(){s(h,e.getState())},e.props.transitionDuration||P))})}}},i.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),i.clonesTimeout&&clearTimeout(i.clonesTimeout),i.isInThrottleTimeout&&clearTimeout(i.isInThrottleTimeout),i.transformTimeout&&clearTimeout(i.transformTimeout),i.afterChangeTimeout&&clearTimeout(i.afterChangeTimeout),i.afterChangeTimeout2&&clearTimeout(i.afterChangeTimeout2),i.afterChangeTimeout3&&clearTimeout(i.afterChangeTimeout3)},i.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},i.prototype.getCords=function(t){var e=t.clientX,n=t.clientY;return{clientX:k.parsePosition(this.props,e),clientY:k.parsePosition(this.props,n)}},i.prototype.handleDown=function(t){if(!(!E.isMouseMoveEvent(t)&&!this.props.swipeable||E.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var e=this.getCords(E.isMouseMoveEvent(t)?t:t.touches[0]),n=e.clientX,s=e.clientY;this.onMove=!0,this.initialX=n,this.initialY=s,this.lastX=n,this.isAnimationAllowed=!1}},i.prototype.handleMove=function(t){if(!(!E.isMouseMoveEvent(t)&&!this.props.swipeable||E.isMouseMoveEvent(t)&&!this.props.draggable||S.notEnoughChildren(this.state))){var e=this.getCords(E.isMouseMoveEvent(t)?t:t.touches[0]),n=e.clientX,s=e.clientY,a=this.initialX-n,r=this.initialY-s;if(this.onMove){if(!(Math.abs(a)>Math.abs(r)))return;var l=S.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,n,this.transformPlaceHolder),u=l.direction,h=l.nextPosition,c=l.canContinue;u&&(this.direction=u,c&&h!==void 0&&this.setTransformDirectly(h)),this.lastX=n}}},i.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var e=t.type==="touchend"&&!this.props.swipeable,n=(t.type==="mouseleave"||t.type==="mouseup")&&!this.props.draggable;if(!e&&!n&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},i.prototype.isInViewport=function(t){var e=t.getBoundingClientRect(),n=e.top,s=n===void 0?0:n,a=e.left,r=a===void 0?0:a,l=e.bottom,u=l===void 0?0:l,h=e.right,c=h===void 0?0:h;return 0<=s&&0<=r&&u<=(window.innerHeight||document.documentElement.clientHeight)&&c<=(window.innerWidth||document.documentElement.clientWidth)},i.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},i.prototype.onKeyUp=function(t){var e=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(e))return this.previous();break;case 39:if(this.isChildOfCarousel(e))return this.next();break;case 9:if(this.isChildOfCarousel(e)&&e instanceof HTMLInputElement&&this.isInViewport(e))return this.next()}},i.prototype.handleEnter=function(t){E.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},i.prototype.goToSlide=function(t,e,n){var s=this;if(n===void 0&&(n=!0),!this.isInThrottle){var a=this.state.itemWidth,r=this.props,l=r.afterChange,u=r.beforeChange,h=this.state.currentSlide;typeof u!="function"||e&&(typeof e!="object"||e.skipBeforeChange)||u(t,this.getState()),this.isAnimationAllowed=n,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:t,transform:-a*t},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof l!="function"||e&&(typeof e!="object"||e.skipAfterChange)||(i.afterChangeTimeout3=setTimeout(function(){l(h,s.getState())},s.props.transitionDuration||P))})}},i.prototype.getState=function(){return this.state},i.prototype.renderLeftArrow=function(t){var e=this,n=this.props,s=n.customLeftArrow,a=n.rtl;return T.createElement(et.LeftArrow,{customLeftArrow:s,getState:function(){return e.getState()},previous:this.previous,disabled:t,rtl:a})},i.prototype.renderRightArrow=function(t){var e=this,n=this.props,s=n.customRightArrow,a=n.rtl;return T.createElement(et.RightArrow,{customRightArrow:s,getState:function(){return e.getState()},next:this.next,disabled:t,rtl:a})},i.prototype.renderButtonGroups=function(){var t=this,e=this.props.customButtonGroup;return e?T.cloneElement(e,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(n,s){return t.goToSlide(n,s)},carouselState:this.getState()}):null},i.prototype.renderDotsList=function(){var t=this;return T.createElement(Xt.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},i.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var e=T.Children.toArray(this.props.children);t=S.getClones(this.state.slidesToShow,e)}return T.createElement(Ut.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:S.notEnoughChildren(this.state),props:this.props})},i.prototype.render=function(){var t=this.props,e=t.deviceType,n=t.arrows,s=t.renderArrowsWhenDisabled,a=t.removeArrowOnDeviceType,r=t.infinite,l=t.containerClass,u=t.sliderClass,h=t.customTransition,c=t.additionalTransfrom,d=t.renderDotsOutside,p=t.renderButtonGroupOutside,f=t.className,v=t.rtl,w=S.getInitialState(this.state,this.props),b=w.shouldRenderOnSSR,C=w.shouldRenderAtAll,g=S.isInLeftEnd(this.state),M=S.isInRightEnd(this.state),I=n&&!(a&&(e&&-1<a.indexOf(e)||this.state.deviceType&&-1<a.indexOf(this.state.deviceType)))&&!S.notEnoughChildren(this.state)&&C,_=!r&&g,W=!r&&M,D=k.getTransform(this.state,this.props);return T.createElement(T.Fragment,null,T.createElement("div",{className:"react-multi-carousel-list "+l+" "+f,dir:v?"rtl":"ltr",ref:this.containerRef},T.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+u,style:{transition:this.isAnimationAllowed?h||it:"none",overflow:b?"hidden":"unset",transform:"translate3d("+(D+c)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),I&&(!_||s)&&this.renderLeftArrow(_),I&&(!W||s)&&this.renderRightArrow(W),C&&!p&&this.renderButtonGroups(),C&&!d&&this.renderDotsList()),C&&d&&this.renderDotsList(),C&&p&&this.renderButtonGroups())},i.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},i}(T.Component);Y.default=Yt;Object.defineProperty(ot,"__esModule",{value:!0});var zt=Y;ot.default=zt.default;export{ot as l};
