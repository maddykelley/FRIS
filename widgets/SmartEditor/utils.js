// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/geometry/Extent jimu/utils esri/dijit/AttributeInspector".split(" "),function(l,k,g,m,n,p){var e={};e.ATI=l([p],{constructor:function(){this._aiConnects=[];this._selection=[];this._toolTips=[]}});e.checkIfFieldAliasAlreadyExists=function(a,b){return 0<=a.split(",").indexOf(b)};e.pointToExtent=function(a,b,c){var d=a.extent.getWidth()/a.width;c*=d;return new m(b.x-c,b.y-c,b.x+c,b.y+c,a.spatialReference)};e.filterOnlyUpdatedAttributes=
function(a,b,c){if(null===b||void 0===b)return a;var d={},f;for(f in a)a.hasOwnProperty(f)&&(f===c.objectIdField||f===c.globalIdField?d[f]=a[f]:null===a[f]&&""===b[f]||a[f]===b[f]||(d[f]=a[f]));return d};e.mergeFieldInfosWithConfiguration=function(a,b){var c=[],d=this.getDefaultEditableFieldInfos(a,!1);b&&b.fieldInfos?(g.forEach(b.fieldInfos,function(a){g.some(d,function(b){if(a.fieldName===b.fieldName)return c.push(this.mergeLastToFirst(b,a)),!0},this)},this),g.forEach(d,function(a){0===g.filter(c,
function(b){return b.fieldName===a.fieldName},this).length&&c.push(a)},this)):c=d;var f=[];a.layerObject.hasOwnProperty("globalIdField")&&void 0!==a.layerObject.globalIdField&&null!==a.layerObject.globalIdField&&f.push(a.layerObject.globalIdField);a.layerObject.hasOwnProperty("objectIdField")&&void 0!==a.layerObject.objectIdField&&null!==a.layerObject.objectIdField&&f.push(a.layerObject.objectIdField);if(a.layerObject.hasOwnProperty("editFieldsInfo")&&void 0!==a.layerObject.editFieldsInfo&&null!==
a.layerObject.editFieldsInfo)for(var e in a.layerObject.editFieldsInfo)a.layerObject.editFieldsInfo.hasOwnProperty(e)&&f.push(a.layerObject.editFieldsInfo[e]);return c=c.filter(function(a){return-1!==g.indexOf(f,a.fieldName)?!1:a.isEditableOnLayer})};e.getDefaultEditableFieldInfos=function(a,b){var c=[],d=this.getFieldInfosFromWebmap(a),f=this.getFieldInfosLayer(a);if(void 0===d||null===d)d=f;else{var e=[];g.forEach(f,function(a){0===g.filter(d,function(b){return b.name===a.fieldName}).length&&(a.isEditableOnLayer=
a.editable,e.push(a))});0<e.length&&(d=d.concat(e))}g.forEach(d,function(a){!1===a.hasOwnProperty("isEditableOnLayer")&&(a.isEditableOnLayer=a.editable);!1===a.editable&&(a.isEditable=a.editable);!1===a.isEditable&&(a.editable=a.isEditable);a.fieldName=a.name;a.canPresetValue=!1;!0===a.editable&&!0===b?c.push(k.clone(a)):!1===b&&c.push(k.clone(a))});return c};e.getFieldInfosFromWebmap=function(a){var b=null,c=a.getPopupInfo();c&&c.fieldInfos&&(b=[],g.forEach(c.fieldInfos,function(c){g.some(a.layerObject.fields,
function(a){if(a.name===c.fieldName)return a=this.mergeFirstToLast(c,a),a.format&&a.format.dateFormat&&a.format.dateFormat.toLowerCase()&&0<=a.format.dateFormat.toLowerCase().indexOf("time")&&(a.format.time=!0),b.push(a),!0},this)},this));return b};e.getFieldInfosLayer=function(a){var b=[];a&&a.layerObject&&g.forEach(a.layerObject.fields,function(a){var c=n.getDefaultPortalFieldInfo(a),c=this.mergeFirstToLast(c,a);c.format&&c.format.dateFormat&&c.format.dateFormat.toLowerCase()&&0<=c.format.dateFormat.toLowerCase().indexOf("time")&&
(c.format.time=!0);c.visible=!0;b.push(c)},this);return b};e.getConfigInfos=function(a,b,c,d){var f=[];g.forEach(a.getLayerInfoArrayOfWebmap(),function(a){var e=!1;"Feature Layer"===a.layerObject.type&&a.layerObject.url&&(a.layerObject.isEditable&&a.layerObject.isEditable()&&c?e=!0:c&&!1===c&&(e=!0));if(!0===e){var h=this.getConfigInfo(a,b);h.layerInfo=a;!0===h.featureLayer.layerAllowsDelete&&!1===h.featureLayer.layerAllowsCreate&&!1===h.featureLayer.layerAllowsUpdate?console.warn(h.layerInfo.title+
" delete only not supported"):d&&!0===d?!0===g.some(b,function(a){return a.featureLayer.id===h.featureLayer.id})&&f.push(h):f.push(h)}},this);return f};e.getConfigInfo=function(a,b){var c=null,d=this.createDefaultConfigInfo(a);!1===g.some(b,function(b){return b.featureLayer&&b.featureLayer.id===a.layerObject.id?(c=k.clone(b),c.fieldInfos=this.mergeFieldInfosWithConfiguration(a,c),c=this.mergeDefaultWithConfig(c,d),c._editFlag=!0):!1},this)&&(c=d);return c};e.mergeDefaultWithConfig=function(a,b){a.featureLayer=
b.featureLayer;!0===a.allowDelete&&!1===a.featureLayer.layerAllowsDelete&&(a.allowDelete=!1);!1===a.disableGeometryUpdate&&!1===a.featureLayer.layerAllowGeometryUpdates&&(a.disableGeometryUpdate=!0);!1===a.featureLayer.layerAllowsCreate&&!0===a.featureLayer.layerAllowsUpdate&&(a.allowUpdateOnly=!0);return a};e.createDefaultConfigInfo=function(a){var b=!1,c=!1,d=!1,f=!1;try{var e=a.layerObject.getEditCapabilities();e.canCreate&&(b=!0);e.canUpdate&&(f=c=!0);e.canDelete&&(d=!0)}catch(q){a.layerObject.hasOwnProperty("capabilities")&&
(-1===String(a.layerObject.capabilities).indexOf("Update")&&-1===String(a.layerObject.capabilities).indexOf("Delete")&&-1===String(a.layerObject.capabilities).indexOf("Create")&&-1!==String(a.layerObject.capabilities).indexOf("Editing")?b=d=c=!0:(-1!==String(a.layerObject.capabilities).indexOf("Update")&&(f=c=!0),-1!==String(a.layerObject.capabilities).indexOf("Delete")&&(d=!0),-1!==String(a.layerObject.capabilities).indexOf("Create")&&(b=!0)))}a.layerObject.hasOwnProperty("allowGeometryUpdates")&&
(f=a.layerObject.allowGeometryUpdates);return{featureLayer:{id:a.layerObject.id,layerAllowsCreate:b,layerAllowsUpdate:c,layerAllowsDelete:d,layerAllowGeometryUpdates:f},disableGeometryUpdate:!f,allowUpdateOnly:!b,allowDelete:!1,fieldInfos:this.mergeFieldInfosWithConfiguration(a,null),_editFlag:!1}};e.mergeLastToFirst=function(){for(var a={},b=0,c=arguments.length,d;b<c;b++)for(d in arguments[b])arguments[b].hasOwnProperty(d)&&(a[d]=arguments[b][d]);return a};e.mergeFirstToLast=function(){for(var a=
{},b=arguments.length-1,c;0<=b;b--)for(c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a};e.isObjectEmpty=function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0};e.addDateTimeFormat=function(a){a&&a.format&&null!==a.format&&a.format.dateFormat&&null!==a.format.dateFormat&&0<=a.format.dateFormat.toString().toUpperCase().indexOf("TIME")&&(a.format.time=!0)};return e});