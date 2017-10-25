// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/impactSummaryReport/impactSummaryReport.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTImpactSummaryLayerContainer" data-dojo-attach-point\x3d"impactSummaryLayerContainer"\x3e\r\n    \x3c!--title \x26 field icon table--\x3e\r\n    \x3cdiv class\x3d"esriCTLayerTitleAndFieldParentContainer esriCTLayerSectionDisabled esriCTCursorPointer" data-dojo-attach-point\x3d"layerTitleAndFieldParentContainer"\x3e\r\n      \x3c!--title \x26 field icon row--\x3e\r\n      \x3cdiv class\x3d"esriCTLayerTitleAndFieldChildContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTLayerPanelIcon esriCTLayerPanelExpand" data-dojo-attach-point\x3d"layerSectionIcon"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--title--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerTitle" data-dojo-attach-point\x3d"impactSummaryLayerTitle"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--field icon--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerFieldIcon esriCTImpactSummaryLayerFieldIconDisabled" data-dojo-attach-point\x3d"impactSummaryLayerField"\r\n          title\x3d"${nls.reportsTab.attributeChooserTooltip}"\x3e\x3c/div\x3e\r\n        \x3c!--feature count--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerFeatureCount esriCTLoadingIcon" data-dojo-attach-point\x3d"impactSummaryLayerFeatureCount"\x3e\x3c/div\x3e\r\n        \x3c!-- Hint for count exceeding max record count --\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerMaxRecordHint esriCTHidden" title\x3d"${nls.reportsTab.unableToAnalyzeText}" data-dojo-attach-point\x3d"impactSummaryLayerMaxRecordHint"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--layer description--\x3e\r\n    \x3cdiv class\x3d"esriCTImpactSummaryLayerDetailContainer esriCTHidden" data-dojo-attach-point\x3d"impactSummaryLayerDetailContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"impactSummaryLayerDetailsMsg"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"impactSummaryLayerDetails"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"noFieldsSelectedContainer" class\x3d"esriCTNoFieldSelectedContainer esriCTHidden"\x3e\r\n        ${nls.reportsTab.noFieldsSelected}\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./impactSummaryReport.html dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/Evented jimu/BaseWidget dojo/on dojo/dom-class dojo/dom-attr esri/geometry/geometryEngine esri/geometry/Polyline esri/SpatialReference esri/graphic dojo/dom-construct esri/tasks/query esri/tasks/QueryTask dojo/Deferred ../geometryUtils ../conversionUtils ../fieldSelectorPopup/fieldSelectorPopup esri/lang jimu/utils dojo/query dojo/number dojo/promise/all".split(" "),
function(B,C,D,f,l,E,F,r,h,m,n,G,H,w,t,x,y,p,z,I,J,K,u,v,A,L){return B([F,D,E],{baseClass:"jimu-widget-screening-impactSummaryReport",templateString:C,_standardUnitData:[],_metricUnitData:[],_printCompleteData:{},_printData:{},_standardUnitInfo:[],_metricUnitInfo:[],_intersectFeatureCount:0,isExceedingMaxRecordCount:!1,intersectingFeatureIdsToTolerance:[],intersectingFeatureIds:[],constructor:function(b){this._standardUnitData=[];this._metricUnitData=[];this._printCompleteData={};this._printData=
{};this._standardUnitInfo=[];this._metricUnitInfo=[];this.intersectingFeatureIdsToTolerance=[];this.intersectingFeatureIds=[];this._intersectFeatureCount=0;f.mixin(this,b)},postCreate:function(){this.own(r(this.impactSummaryLayerMaxRecordHint,"click",f.hitch(this,function(b){b.stopPropagation();b.preventDefault();this.emit("showMessage",this.nls.reportsTab.unableToAnalyzeText)})))},generateReport:function(b,c,a){var d,e;this._assignSelectedUnitToConfigObject();d=new p;this._setAttributeToFeatureLayerContainer();
this._setFeatureLayerTitle();this._attachEventToLayerTitle();this._getIntersectingFeaturesCount(a).then(f.hitch(this,function(a){this._getIntersectingFeaturesCount(c).then(f.hitch(this,function(g){this.intersectingFeatureIdsToTolerance=this._getUniqueIds(a,g);this._getIntersectingFeaturesCount(b).then(f.hitch(this,function(a){var k;this.intersectingFeatureIds=f.clone(a);a=this._getUniqueIds(g,a);this.isExceedingMaxRecordCount?(this._setFeatureLayerIntersectFeatureCount(a.length),this._pushDataInPrintDataObj(this.configuredLayerLabel,
null,null),this._printData={},this._printData=f.clone(this._printCompleteData),this._showMessage(this.nls.reportsTab.unableToAnalyzeText),h.remove(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled"),this._showReport(),d.resolve(this._getReportLayerDetails([]))):(k=b||c,this._getFeatureByChunks(a,k).then(f.hitch(this,function(a){var c;c=[];l.forEach(a,f.hitch(this,function(a){b&&n.touches(a.geometry,b)||c.push(a)}));a=[];this._setFeatureLayerIntersectFeatureCount(c.length);0<c.length?
("esriGeometryPolyline"!==this.featureLayer.geometryType&&"esriGeometryPolygon"!==this.featureLayer.geometryType||!b?a=c:(e=this._polygonToPolyline(b),a=this._getCutOrWithInFeatures(e,c,b)),this._createLayerDetails(a,this.featureLayer.geometryType),this._filterPrintDataObjAccToConfiguredFields(this.configuredField),h.remove(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")):(this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null),this._printData={},this._printData=
f.clone(this._printCompleteData),this._showMessage(this.nls.reportsTab.noDetailsAvailableText));h.remove(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled");this._showReport();d.resolve(this._getReportLayerDetails(a))})))}))}))}));return d.promise},_getReportLayerDetails:function(b){var c={};c.id=this.id;c.featureLayerId=this.featureLayer.id;c.features=b;c.printInfo={};c.printInfo.isExceedingMaxRecordCount=this.isExceedingMaxRecordCount;c.printInfo.featureCount=this._intersectFeatureCount;
c.printInfo.info=this._printData;c.printInfo.standardUnitInfo=this._standardUnitInfo;c.printInfo.metricUnitInfo=this._metricUnitInfo;c.printInfo.geometryType=this.featureLayer.geometryType;return c},_assignSelectedUnitToConfigObject:function(){h.contains(v(".esriCTStandardUnitAreaContainer")[0],"esriCTHidden")?this.config.areaUnits="Metric":this.config.areaUnits="Standard"},_setAttributeToFeatureLayerContainer:function(){m.set(this.impactSummaryLayerContainer,"featureLayerID",this.featureLayer.id)},
_setFeatureLayerTitle:function(){this.configuredLayerLabel||(this.configuredLayerLabel=this.featureLayer.name);m.set(this.impactSummaryLayerTitle,"innerHTML",this.configuredLayerLabel);m.set(this.impactSummaryLayerTitle,"title",this.configuredLayerLabel)},_attachEventToLayerTitle:function(){this.own(r(this.layerTitleAndFieldParentContainer,"click",f.hitch(this,function(b){h.contains(b.target,"esriCTImpactSummaryLayerFieldIcon")?h.contains(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")||
this._createFieldSelectorPopupWidget():h.contains(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled")||this._showOrHideLayerDetailsContainer()})))},_createFieldSelectorPopupWidget:function(){if(this._fieldSelectorWidget)this._fieldSelectorWidget.onFieldsSelectorClick();else this._fieldSelectorWidget=new J({outFields:this.configuredField,popupTitle:this.configuredLayerLabel,fieldTitle:this.nls.reportsTab.selectReportFieldTitle,nls:this.nls,appConfig:this.appConfig}),r(this._fieldSelectorWidget,
"onFieldSelectComplete",f.hitch(this,function(b){this._filterFieldsForReport(b)})),this._fieldSelectorWidget.startup()},_filterFieldsForReport:function(b){var c=f.clone(this.configuredField),a;for(a in this.configuredField)-1>=b.indexOf(a)&&delete c[a];this._filterPrintDataObjAccToConfiguredFields(c);this._showReport();this.emit("printDataUpdated",{id:this.id,printData:this._printData})},_showOrHideLayerDetailsContainer:function(){h.toggle(this.layerTitleAndFieldParentContainer,"esriCTBoldFont");
h.toggle(this.impactSummaryLayerDetailContainer,"esriCTHidden");h.contains(this.layerSectionIcon,"esriCTLayerPanelExpand")?h.replace(this.layerSectionIcon,"esriCTLayerPanelCollapse","esriCTLayerPanelExpand"):h.replace(this.layerSectionIcon,"esriCTLayerPanelExpand","esriCTLayerPanelCollapse")},_getIntersectingFeaturesCount:function(b){var c,a,d,e;c=new p;if(b)if(this.isFeatureCollectionLayer){a=[];if(0<this.featureLayer.graphics.length)for(e=0;e<this.featureLayer.graphics.length;e++)(d=n.intersects(b,
this.featureLayer.graphics[e].geometry))&&a.push(e);c.resolve(a)}else{a=new x;d=new y(this.featureLayer.url);if(e=this.featureLayer.getDefinitionExpression())a.where=e;a.geometry=b;d.executeForIds(a,f.hitch(this,function(a){a&&0!==a.length?(a.length>this.maxFeaturesForAnalysis&&(h.remove(this.impactSummaryLayerMaxRecordHint,"esriCTHidden"),h.add(this.impactSummaryLayerTitle,"esriCTLayerTitleOverrideWidth"),this.isExceedingMaxRecordCount=!0,this.emit("exceedingMaxRecordCount")),c.resolve(a)):c.resolve([])}))}else c.resolve([]);
return c.promise},_getFeatureByChunks:function(b,c){var a,d,e;d=new p;a=[];e=this.featureLayer.maxRecordCount;if(this.isFeatureCollectionLayer)a.push(this._getIntersectFeature(b,c));else for(;0<b.length;)a.push(this._getIntersectFeature(b.splice(0,e),c));L(a).then(f.hitch(this,function(a){var b;b=[];l.forEach(a,f.hitch(this,function(a){b=b.concat(a)}));d.resolve(b)}));return d.promise},_getIntersectFeature:function(b,c){var a,d,e,g;a=new p;if(this.isFeatureCollectionLayer){d=[];if(0<this.featureLayer.graphics.length)for(e=
0;e<this.featureLayer.graphics.length;e++)(g=n.intersects(c,this.featureLayer.graphics[e].geometry))&&d.push(this.featureLayer.graphics[e]);a.resolve(d.splice(0,this.maxFeaturesForAnalysis))}else e=new x,e.outFields=["*"],e.returnGeometry=!0,e.objectIds=b,e.outSpatialReference=c.spatialReference,d=new y(this.featureLayer.url),d.execute(e,f.hitch(this,function(b){b.features?a.resolve(b.features):a.resolve([])}),f.hitch(this,function(){a.resolve([])}));return a.promise},_setFeatureLayerIntersectFeatureCount:function(b){this._intersectFeatureCount=
A.format(b);h.remove(this.impactSummaryLayerFeatureCount,"esriCTLoadingIcon");m.set(this.impactSummaryLayerFeatureCount,"innerHTML","("+this._intersectFeatureCount+")");m.set(this.impactSummaryLayerFeatureCount,"title","("+this._intersectFeatureCount+")")},_getCutOrWithInFeatures:function(b,c,a){var d,e;d=[];for(var g=0;g<b.length;g++)for(var k=0;k<c.length;k++){e=n.cut(c[k].geometry,b[g]);if(1<e.length){var f=1;n.within(a,c[k].geometry)&&(f=0);e=new w(e[f],null,c[k].attributes)}else n.within(c[k].geometry,
a),e=new w(c[k].geometry,null,c[k].attributes);d.push(e)}return d},_polygonToPolyline:function(b){var c,a,d,e,g;c=[];a=new G(new H({wkid:102100}));for(g=0;g<b.rings.length;g++){e=[];for(d=0;d<b.rings[g].length;d++)e.push(b.rings[g][d]);a.addPath(e)}c.push(a);return c},_updateFormattedAttribute:function(b){l.forEach(b,f.hitch(this,function(c,a){var d,e;-1===this.intersectingFeatureIds.indexOf(c.attributes[this.featureLayer.objectIdField])&&(e=!0);d=this._getFormatedAttrs(f.clone(c.attributes),this.featureLayer.fields,
this.featureLayer.typeIdField,this.featureLayer.types,null);b[a].setAttributes(d);l.forEach(this.featureLayer.fields,f.hitch(this,function(c){var d;b[a].attributes.hasOwnProperty(c.name)||(b[a].attributes[c.name]=this.nls.reportsTab.noDataText);b[a].attributes.hasOwnProperty(c.name)&&(d=b[a].attributes[c.name],void 0===d||""===d||null===d?b[a].attributes[c.name]=this.nls.reportsTab.noDataText:""===f.trim(d.toString())&&(b[a].attributes[c.name]=this.nls.reportsTab.noDataText))}));if(!e||"esriGeometryPolygon"!==
this.featureLayer.geometryType&&"esriGeometryPolyline"!==this.featureLayer.geometryType)switch(this.featureLayer.geometryType){case "esriGeometryPolygon":d=z.getAreaOfGeometry(c.geometry);this._standardUnitData.push(d.acres);this._metricUnitData.push(d.squareKilometer);break;case "esriGeometryPolyline":d=z.getLengthOfGeometry(c.geometry),this._standardUnitData.push(d.miles),this._metricUnitData.push(d.kilometers)}else this._standardUnitData.push(0),this._metricUnitData.push(0)}));return b},_getFieldText:function(b,
c){return b.label?b.label:b.alias?b.alias:c},_createLayerDetails:function(b,c){var a,d,e,g;g=Object.keys(this.configuredField).length;b=this._updateFormattedAttribute(b);this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null);for(e in this.configuredField)for(a=this.configuredField[e],a=this._getFieldText(a,e),this._printCompleteData.cols.push(a),a=0;a<b.length;a++)switch((d=b[a].attributes[e])||0===d?this._pushDataInPrintDataObj(null,a,d):this._pushDataInPrintDataObj(null,a,""),c){case "esriGeometryPolygon":case "esriGeometryPolyline":this._printCompleteData.cols.length===
g&&(this._standardUnitInfo.push(this._standardUnitData[a]),this._metricUnitInfo.push(this._metricUnitData[a]));break;case "esriGeometryPoint":this._printCompleteData.cols.length===g&&(this._standardUnitInfo.push(1),this._metricUnitInfo.push(1))}},_pushDataInPrintDataObj:function(b,c,a){b?(this._printCompleteData={},this._standardUnitInfo=[],this._metricUnitInfo=[],this._printCompleteData.title=b,this._printCompleteData.rows=[],this._printCompleteData.cols=[]):(a===this.nls.reportsTab.noDataText&&
(a="\x3ci\x3e"+a+"\x3c/i\x3e"),this._printCompleteData.rows[c]||this._printCompleteData.rows.push([]),this._printCompleteData.rows[c].push(a))},_filterPrintDataObjAccToConfiguredFields:function(b){var c,a,d;v(".esriCTStandardUnitAreaContainer");v(".esriCTMetricUnitAreaContainer");this._printData={};this._printData=f.clone(this._printCompleteData);for(c=this._printData.cols.length-1;0<=c;--c){a=!1;for(d in b)switch(this._printData.cols[c]){case b[d].label:a=!0;break;case b[d].alias:a=!0;break;case d:a=
!0}if(!a)for(this._printData.cols.splice(c,1),a=0;a<this._printData.rows.length;a++)this._printData.rows[a].splice(c,1)}},_getFormatedAttrs:function(b,c,a,d,e){function g(a){if(e&&K.isDefined(e.fieldInfos))for(var b=0,c=e.fieldInfos.length;b<c;b++){var d=e.fieldInfos[b];if(d.fieldName===a)return d.format}return null}var k={};l.forEach(c,f.hitch(this,function(e,f){if(b[e.name]){var h=!(!e.domain||"codedValue"!==e.domain.type),l="esriFieldTypeDate"===e.type,m=a&&e.name===a,q=e.name;if("esriFieldTypeDate"===
c[f].type)k[q]=u.fieldFormatter.getFormattedDate(b[e.name],g(e.name));else if("esriFieldTypeDouble"===c[f].type||"esriFieldTypeSingle"===c[f].type||"esriFieldTypeInteger"===c[f].type||"esriFieldTypeSmallInteger"===c[f].type)k[q]=this._getFormattedNumber(b[e.name],g(e.name));h?k[q]=u.fieldFormatter.getCodedValue(e.domain,b[e.name]):m?k[q]=u.fieldFormatter.getTypeName(b[e.name],d):h||l||m||(k[q]=q in k?k[q]:b[e.name],k[q]=this._getCodeValueFromTypes(e,a,d,b,k))}}));return k},_getFormattedNumber:function(b,
c){if("number"===typeof b){var a=(b.toString().split(".")[1]||"").length;return(b=u.localizeNumberByFieldInfo(b,{format:{places:c&&"number"===typeof c.places?parseInt(c.places,10):a,digitSeparator:c&&c.digitSeparator}}))||""}return b},_getCodeValueFromTypes:function(b,c,a,d,e){var g=null;c&&a&&0<a.length&&(a=(a=l.filter(a,f.hitch(this,function(a){return a.name===d[c]})))&&a[0]||null)&&a.domains&&a.domains[b.name]&&a.domains[b.name].codedValues&&(g=u.fieldFormatter.getCodedValue(a.domains[b.name],
d[b.name]));b=b.name;return(e=null!==g?g:e[b])||isFinite(e)?e:""},_getArrayIndex:function(b,c){var a,d,e,f=[];for(a=0;a<b.length;++a)if(c.length===b[a].length){e=b[a];for(d=0;d<c.length&&c[d]===e[d];)++d;d===c.length&&f.push(a)}return f},getSum:function(b,c){var a;a=(c&&0<c.length?l.filter(b,function(a,b){return-1<c.indexOf(b)}):b).reduce(function(a,b){return a+b},0);return.01<a?I.honourPopupRounding(2,a):a},_getAggregatedColTitle:function(b){var c;switch(b){case "esriGeometryPoint":c=this.nls.reportsTab.featureCountText;
break;case "esriGeometryPolyline":c=this.nls.reportsTab.featureLengthText;break;case "esriGeometryPolygon":c=this.nls.reportsTab.featureAreaText}return c},_getUnitsForGeometry:function(b,c){var a;switch(b){case "esriGeometryPoint":a="";break;case "esriGeometryPolyline":a=c?this.nls.units.kilometersAbbr:this.nls.units.milesAbbr;break;case "esriGeometryPolygon":a=c?this.nls.units.squareKilometerAbbr:this.nls.units.acresAbbr}return a},_showMessage:function(b){t.empty(this.impactSummaryLayerDetails);
m.set(this.impactSummaryLayerDetailsMsg,"innerHTML",b);h.add(this.impactSummaryLayerDetailsMsg,"esriCTLayerDetailCenterText")},_showReport:function(){var b,c,a,d,e;b=this._printData;t.empty(this.impactSummaryLayerDetails);if(!b.cols.length&&0<b.rows.length)this._showMessage(this.nls.reportsTab.noFieldsSelected);else if(this._assignSelectedUnitToConfigObject(),b.rows&&0<b.rows.length){m.set(this.impactSummaryLayerDetailsMsg,"innerHTML","");c=[];d={};for(var g=0;g<b.rows.length&&(0>c.indexOf(g)&&(a=
this._getArrayIndex(b.rows,b.rows[g]),d[g]=a,c=c.concat(a)),c.length!==b.rows.length);g++);c={rows:[],cols:f.clone(b.cols)};a=this._getAggregatedColTitle(this.featureLayer.geometryType);c.cols.push(a);c.cols.push(a);for(e in d)a=f.clone(b.rows[parseInt(e,10)]),a.push(this.getSum(this._metricUnitInfo,d[parseInt(e,10)])),a.push(this.getSum(this._standardUnitInfo,d[parseInt(e,10)])),c.rows.push(a);this._renderReport(c)}},_sortFeatureArray:function(b,c){var a=b.length-1;return b[a]<c[a]?1:b[a]>c[a]?-1:
0},_createTemplateNode:function(){var b;b=t.create("table",{"class":"esriCTAttrTable",cellpadding:"0px",cellspacing:"0px"},this.impactSummaryLayerDetails);t.create("div",{"class":"esriCTInfoDataSeparator"},this.impactSummaryLayerDetails);return b},_renderReport:function(b){b.rows&&0<b.rows.length&&(b.rows=b.rows.sort(this._sortFeatureArray),l.forEach(b.rows,f.hitch(this,function(c){var a,d;a=this._createTemplateNode();l.forEach(c,f.hitch(this,function(e,f){var g,l,n,p,r,v;d=t.create("tr",{valign:"top"},
a);v=t.create("td",{"class":"esriCTAttrName"},d);r=t.create("td",{"class":"esriCTAttrValue"},d);g=u.fieldFormatter.getFormattedUrl(e);l=b.cols[f]+": ";n=g;f>=c.length-2&&(f===c.length-2?(p=!0,h.add(d,"esriCTFieldDistinctMetricUnitData"),"Metric"!==this.config.areaUnits&&h.add(d,"esriCTHidden")):f===c.length-1&&(p=!1,h.add(d,"esriCTFieldDistinctStandardUnitData"),"Metric"===this.config.areaUnits&&h.add(d,"esriCTHidden")),n=.01<=g?l+A.format(g)+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,
p):.01>g&&0!==g?l+"  \x3c 0.01 "+this._getUnitsForGeometry(this.featureLayer.geometryType,p):l+" "+this.nls.reportsTab.notApplicableText,l="",h.add(r,"esriCTInfoDataMeasurement"));m.set(v,"innerHTML",l);m.set(r,"innerHTML",n)}))})))},_getUniqueIds:function(b,c){if(0===b.length)return c;if(0===c.length)return b;l.forEach(b,f.hitch(this,function(a){a=c.indexOf(a);-1!==a&&c.splice(a,1)}));return b.concat(c)}})});