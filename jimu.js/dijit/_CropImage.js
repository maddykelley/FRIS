// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_CropImage.html":'\x3cdiv class\x3d"jimu-crop-image"\x3e\r\n\t\x3cdiv class\x3d"crop-section" data-dojo-attach-point\x3d"cropSection"\x3e\r\n\t\t\x3cdiv class\x3d"viewer-box hide-status" data-dojo-attach-point\x3d"viewerBox"\x3e\r\n\t\t\t\x3cdiv class\x3d"viewer-content" data-dojo-attach-point\x3d"viewerContent"\x3e\r\n\t\t\t\t\x3cimg class\x3d"viewer-image hide-status" data-dojo-attach-point\x3d"viewerImage" src\x3d""\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cimg class\x3d"base-image hide-status" data-dojo-attach-point\x3d"baseImage" data-dojo-attach-event\x3d"mousedown:_onViewerMouseDown,mouseup:_onViewerMouseUp"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cimg class\x3d"loading-image" data-dojo-attach-point\x3d"loadingImg" src\x3d""\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"controller hide-status" data-dojo-attach-point\x3d"zoomController"\x3e\r\n\t\t\x3cdiv class\x3d"zoom-out" data-dojo-attach-point\x3d"zoomOutBtn" data-dojo-attach-event\x3d"click:_onZoomOutClick"\x3e-\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"slider" data-dojo-attach-point\x3d"sliderNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"button" data-dojo-attach-point\x3d"sliderButton" data-dojo-attach-event\x3d"mousedown:_onSliderMouseDown,mouseup:_onSliderMouseUp"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"horizontal"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"zoom-in" data-dojo-attach-point\x3d"zoomInBtn" data-dojo-attach-event\x3d"click:_onZoomInClick"\x3e+\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/on dojo/query dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/_CropImage.html jimu/dijit/Message esri/lang dojo/NodeList-dom".split(" "),function(m,b,l,g,n,p,q,r,t,u){return m([p,q],{templateString:r,inDrag:!1,inSlider:!1,realWidth:30,realHeight:30,ratio:null,imageSrc:null,_currentX:null,_currentY:null,_currentTop:0,_currentLeft:0,postCreate:function(){this._dragingHandlers=[];this.setImageSrc(this.imageSrc);this.own(g(this.ownerDocument,
"mousemove",l.hitch(this,"_onMouseMove")));this.own(g(this.ownerDocument,"mouseup",l.hitch(this,"_onMouseUp")));this.loadingImg.src=require.toUrl("jimu")+"/images/loading.gif";this.own(g(this.baseImage,"load",l.hitch(this,function(){this._init();b.setStyle(this.loadingImg,"display","none")})))},setImageSrc:function(a){b.setAttr(this.viewerImage,"src",a);b.setAttr(this.baseImage,"src",a)},getImageSize:function(){return{w:this._currentImageWidth,h:this._currentImageHeight}},getCropSize:function(){return{l:-this._currentLeft,
t:-this._currentTop,w:this.idealWidth,h:this.idealHeight}},_init:function(){var a=this._getComputedStyle(this.cropSection),d=b.getContentBox(this.cropSection),c=this._getComputedStyle(this.baseImage),e=parseFloat(c.width)||this.baseImage.offsetWidth,c=parseFloat(c.height)||this.baseImage.offsetHeight,f=e/c;this._maxImageWidth=e;this._maxImageHeight=c;if(c<this.realHeight&&e<this.realWidth)a=u.substitute({width:this.realWidth,height:this.realHeight},this.nls.cropWaining),setTimeout(l.hitch(this,function(){this.popup.close()}),
50),new t({message:a});else{this.idealWidth=this.realWidth;this.idealHeight=this.realHeight;var h=this.ratio=this.ratio?this.ratio:this.realWidth/this.realHeight;1<=this.ratio?d.h*this.ratio<=d.w?(this.idealHeight=d.h,this.idealWidth=d.h*this.ratio):(this.idealHeight=this._findProperlyValue(0,d.h,d.w-5,function(a){return a*h}),this.idealWidth=this.idealHeight*this.ratio):d.w/this.ratio<=d.h?(this.idealWidth=d.w,this.idealHeight=d.w/this.ratio):(this.idealWidth=this._findProperlyValue(0,d.w,d.h-5,
function(a){return a/h}),this.idealHeight=this.idealWidth/this.ratio);b.setStyle(this.viewerBox,{width:this.idealWidth+"px",height:this.idealHeight+"px"});a=Math.abs((parseFloat(a.height)-this.idealHeight)/2);b.setStyle(this.cropSection,{paddingTop:a+"px",paddingBottom:a+"px"});1<=f?this.idealHeight*f>=this.idealWidth?(b.setStyle(this.viewerImage,"height",this.idealHeight+"px"),b.setStyle(this.baseImage,"height",this.idealHeight+"px")):(a=this._findProperlyValue(0,this.idealWidth,this.idealWidth,
function(a){return a*f}),b.setStyle(this.viewerImage,"height",a+"px"),b.setStyle(this.baseImage,"height",a+"px")):this.idealWidth/f>=this.idealHeight?(b.setStyle(this.viewerImage,"width",this.idealWidth+"px"),b.setStyle(this.baseImage,"width",this.idealWidth+"px")):(a=this._findProperlyValue(0,this.idealHeight,this.idealHeight,function(a){return a/f}),b.setStyle(this.viewerImage,"width",a+"px"),b.setStyle(this.baseImage,"width",a+"px"));n(".hide-status",this.domNode).removeClass("hide-status");c=
this._getComputedStyle(this.baseImage);e=parseFloat(c.width)||this.baseImage.offsetWidth;c=parseFloat(c.height)||this.baseImage.offsetHeight;this._minImageWidth=e;this._minImageHeight=c;this._currentImageWidth=e;this._currentImageHeight=c;this._currentTop=-(c-this.idealHeight)/2;this._currentLeft=-(e-this.idealWidth)/2;b.setStyle(this.baseImage,{top:this._currentTop+"px",left:this._currentLeft+"px"});b.setStyle(this.viewerImage,{top:this._currentTop+"px",left:this._currentLeft+"px"});this._zoomRatio=
this._maxImageWidth/this._minImageWidth;1>=this._zoomRatio&&b.addClass(this.zoomInBtn,"disable-zoom");b.addClass(this.zoomOutBtn,"disable-zoom");this._latestPercentage=window.isRTL?100:0}},_findProperlyValue:function(a,b,c,e,f){f=isFinite(f)?parseFloat(f):1;c=0>c-f||0>c+f?f:c;var d=(a+b)/2,k=e(d);if(k<=c+f&&k>=c-f)return d;if(k>c)return this._findProperlyValue(a,d,c,e);if(k<c)return this._findProperlyValue(d,b,c,e)},_getComputedStyle:function(a){a=b.getMarginBox(a);return{width:a.w,height:a.h,left:a.l,
top:a.t}},_onViewerMouseDown:function(a){var b=this._getComputedStyle(this.baseImage),c=this._getComputedStyle(this.viewerContent);this._maxOffsetLeft=parseFloat(c.width)-parseFloat(b.width);this._maxOffsetTop=parseFloat(c.height)-parseFloat(b.height);this._maxOffsetLeft=0<this._maxOffsetLeft?0:this._maxOffsetLeft;this._maxOffsetTop=0<this._maxOffsetTop?0:this._maxOffsetTop;this.inDrag=!0;this._currentX=a.clientX;this._currentY=a.clientY;this._stopSelect()},_stopSelect:function(){this._dragingHandlers=
this._dragingHandlers.concat([g(this.ownerDocument,"dragstart",function(a){a.stopPropagation();a.preventDefault()}),g(this.ownerDocumentBody,"selectstart",function(a){a.stopPropagation();a.preventDefault()})])},_removeStopSelect:function(){for(var a=this._dragingHandlers.pop();a;)a.remove(),a=this._dragingHandlers.pop()},_onViewerMouseUp:function(a){this.inDrag&&(this.inDrag=!1,this._resetImagePosition(a.clientX,a.clientY),this._removeStopSelect(),a.stopPropagation())},_onSliderMouseDown:function(a){if(!(1>=
this._zoomRatio)){this.inSlider=!0;this._currentX=a.clientX;this._currentY=a.clientY;var d=b.position(this.sliderNode);this._startSliderLeft=d.x;this._sliderWidth=d.w;this._stopSelect();a.stopPropagation()}},_onSliderMouseUp:function(a){if(!(1>=this._zoomRatio)&&this.inSlider){this.inSlider=!1;this._resetSliderButtonPosition(a.clientX);var b=this._getComputedStyle(this.baseImage);this._currentLeft=parseFloat(b.left);this._currentTop=parseFloat(b.top);this._latestPercentage=(a.clientX-this._startSliderLeft)/
this._sliderWidth*100;this._latestPercentage=this._normalizePercentage(this._latestPercentage);this._removeStopSelect();a.stopPropagation()}},_onMouseMove:function(a){this.inDrag&&this._resetImagePosition(a.clientX,a.clientY);!this.inSlider||1>=this._zoomRatio||this._resetSliderButtonPosition(a.clientX,a.clientY)},_onMouseUp:function(a){this.inDrag&&this._onViewerMouseUp(a);this.inSlider&&this._onSliderMouseUp(a)},_onZoomOutClick:function(){1>=this._zoomRatio||this._zoomImage("out")},_onZoomInClick:function(){1>=
this._zoomRatio||this._zoomImage("in")},_zoomImage:function(a){var b=0;this._latestPercentage=this._normalizePercentage(this._latestPercentage);"in"===a?b=window.isRTL?this._latestPercentage-20:this._latestPercentage+20:"out"===a&&(b=window.isRTL?this._latestPercentage+20:this._latestPercentage-20);a=this._normalizePercentage(b);this._moveSliderButton(a,this._latestPercentage);this._latestPercentage=a;a=this._getComputedStyle(this.baseImage);this._currentLeft=parseFloat(a.left);this._currentTop=parseFloat(a.top)},
_resetImagePosition:function(a,d){var c=a-this._currentX,e=d-this._currentY;0<=this._currentTop+e?(b.setStyle(this.baseImage,"top",0),b.setStyle(this.viewerImage,"top",0),this._currentY=d,this._currentTop=0):this._currentTop+e<=this._maxOffsetTop?(b.setStyle(this.baseImage,"top",this._maxOffsetTop+"px"),b.setStyle(this.viewerImage,"top",this._maxOffsetTop+"px"),this._currentY=d,this._currentTop=this._maxOffsetTop):(b.setStyle(this.baseImage,"top",this._currentTop+e+"px"),b.setStyle(this.viewerImage,
"top",this._currentTop+e+"px"),this._currentY=d,this._currentTop+=e);0<=this._currentLeft+c?(b.setStyle(this.baseImage,"left",0),b.setStyle(this.viewerImage,"left",0),this._currentX=a,this._currentLeft=0):this._currentLeft+c<=this._maxOffsetLeft?(b.setStyle(this.baseImage,"left",this._maxOffsetLeft+"px"),b.setStyle(this.viewerImage,"left",this._maxOffsetLeft+"px"),this._currentX=a,this._currentLeft=this._maxOffsetLeft):(b.setStyle(this.baseImage,"left",this._currentLeft+c+"px"),b.setStyle(this.viewerImage,
"left",this._currentLeft+c+"px"),this._currentX=a,this._currentLeft+=c)},_normalizePercentage:function(a){a=0>a?0:a;return 100<a?100:a},_resetSliderButtonPosition:function(a){a=(a-this._startSliderLeft)/this._sliderWidth*100;a=this._normalizePercentage(a);this._moveSliderButton(a,this._latestPercentage)},_moveSliderButton:function(a,d){0>=a?b.addClass(this.zoomOutBtn,"disable-zoom"):b.removeClass(this.zoomOutBtn,"disable-zoom");100<=a?b.addClass(this.zoomInBtn,"disable-zoom"):b.removeClass(this.zoomInBtn,
"disable-zoom");b.setStyle(this.sliderButton,"left",a+"%");window.isRTL&&(a=100-a,d=100-d);var c=this._minImageWidth*(this._zoomRatio-1)*a/100,e=this._minImageHeight*(this._zoomRatio-1)*a/100,f=this._getComputedStyle(this.baseImage);this._currentLeft=parseFloat(f.left);this._currentTop=parseFloat(f.top);var f=(Math.abs(this._currentLeft)+this.idealWidth/2)*((this._minImageWidth+c)/this._currentImageWidth-1),h=(Math.abs(this._currentTop)+this.idealHeight/2)*((this._minImageWidth+c)/this._currentImageWidth-
1);b.setStyle(this.baseImage,{width:this._minImageWidth+c+"px",height:this._minImageHeight+e+"px"});b.setStyle(this.viewerImage,{width:this._minImageWidth+c+"px",height:this._minImageHeight+e+"px"});this._currentImageWidth=this._minImageWidth+c;this._currentImageHeight=this._minImageHeight+e;if(0<=a-d)b.setStyle(this.baseImage,{top:this._currentTop-h+"px",left:this._currentLeft-f+"px"}),b.setStyle(this.viewerImage,{top:this._currentTop-h+"px",left:this._currentLeft-f+"px"});else{var k=0,g=0,k=0<=
this._currentTop-h?0:this._currentTop-h+this._minImageHeight+e<=this.idealHeight?this.idealHeight-this._minImageHeight-e:this._currentTop-h,g=0<=this._currentLeft-f?0:this._currentLeft-f+this._minImageWidth+c<=this.idealWidth?this.idealWidth-this._minImageWidth-c:this._currentLeft-f;b.setStyle(this.baseImage,{top:k+"px",left:g+"px"});b.setStyle(this.viewerImage,{top:k+"px",left:g+"px"})}this._latestPercentage=a}})});