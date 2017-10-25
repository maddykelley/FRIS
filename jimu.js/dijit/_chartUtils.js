// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/utils","esri/lang","dojo/_base/config"],function(e,g){return{tryLocaleNumber:function(a){var c=a;if(g.isDefined(a)&&isFinite(a))try{var d=e.localizeNumber(a);"string"===typeof d&&(c=d)}catch(b){console.error(b)}return c+""},isAxisChart:function(a){return"column"===a.type||"bar"===a.type||"line"===a.type},getAxisZeroPosition:function(a){if(!this.chart)return!1;var c={},d=0,b=0;if((e.isNotEmptyObject(a.dataZoom,!0)||a.scale)&&a.series&&a.series[0]&&a.series[0].data){var f=a.series[0].data;
e.isNotEmptyObject(f,!0)&&("bar"!==a.type?b=e.getMinOfArray(f):d=e.getMinOfArray(f))}if(a=this.chart.convertToPixel({xAxisIndex:0,yAxisIndex:0},[d,b]))d=a[1]-5,c.left=a[0]-5,c.top=d;return e.isNotEmptyObject(c)?c:!1},generateToolTip:function(a,c,d){var b="",b=d?'\x3cdiv class\x3d"tooltip-tr reverse"\x3e':'\x3cdiv class\x3d"tooltip-tr"\x3e';d='\x3cdiv class\x3d"colorEl marginRight5" style\x3d"background-color:'+e.encodeHTML(a.color)+'"\x3e\x3c/div\x3e';b+=d;this._isVaildValue(a.seriesName)&&(b+="\x3cdiv\x3e"+
a.seriesName+"\x3c/div\x3e\x3cdiv\x3e : \x3c/div\x3e");b=this._isNotZeroBoolean(c)?b+("\x3cdiv\x3e"+this.tryLocaleNumber(c)+"\x3c/div\x3e"):this._isVaildValue(a.value)?b+("\x3cdiv\x3e"+this.tryLocaleNumber(a.value)+"\x3c/div\x3e"):b+"\x3cdiv\x3enull\x3c/div\x3e";"pie"===a.seriesType&&(b+="\x3cdiv\x3e("+a.percent+"%)\x3c/div\x3e");return b+"\x3c/div\x3e"},handleToolTip:function(a,c,d){var b='\x3cdiv class\x3d"tooltip-div"\x3e';Array.isArray(a)?(this._isVaildValue(a[0].name)&&(b+='\x3cdiv class\x3d"tr"\x3e'+
a[0].name+"\x3c/div\x3e"),a.forEach(function(a){b+=this.generateToolTip(a,c,d)}.bind(this))):(this._isVaildValue(a.name)&&(b+='\x3cdiv class\x3d"tr"\x3e'+a.name+"\x3c/div\x3e"),b+=this.generateToolTip(a,c,d));return b+="\x3c/div\x3e"},_isVaildValue:function(a){var c=!0;"%00-"===encodeURI(a)?c=!1:a||"number"===typeof a||(c=!1);return c},_isNotZeroBoolean:function(a){return 0===a?!0:!!a}}});