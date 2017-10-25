// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Miles",acronym:"mi"},kilometers:{displayText:"Kilometers",acronym:"km"},feet:{displayText:"Feet",acronym:"ft"},meters:{displayText:"Meters",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Search Source Settings",searchSourceSettingTitle:"Search Source Settings",searchSourceSettingTitleHintText:"Add and configure geocode services or feature layers as search sources. These specified sources determine what is searchable within the search box",
addSearchSourceLabel:"Add Search Source",featureLayerLabel:"Feature Layer",geocoderLabel:"Geocoder",nameTitle:"Name",generalSettingLabel:"General Setting",allPlaceholderLabel:"Placeholder text for searching all:",allPlaceholderHintText:"Hint: Enter text to be shown as placeholder while searching all layers and geocoder",generalSettingCheckboxLabel:"Show pop-up for the found feature or location",countryCode:"Country or Region Code(s)",countryCodeEg:"e.g. ",countryCodeHint:"Leaving this value blank will search all countries and regions",
questionMark:"?",searchInCurrentMapExtent:"Only search in current map extent",zoomScale:"Zoom Scale",locatorUrl:"Geocoder URL",locatorName:"Geocoder Name",locatorExample:"Example",locatorWarning:"This version of geocoding service is not supported. The widget supports geocoding service 10.0 and above.",locatorTips:"Suggestions are not available because the geocoding service doesn't support suggest capability.",layerSource:"Layer Source",setLayerSource:"Set Layer Source",setGeocoderURL:"Set Geocoder URL",
searchLayerTips:"Suggestions are not available because the feature service doesn't support pagination capability.",placeholder:"Placeholder Text",searchFields:"Search Fields",displayField:"Display Field",exactMatch:"Exact Match",maxSuggestions:"Maximum Suggestions",maxResults:"Maximum Results",enableLocalSearch:"Enable local search",minScale:"Min Scale",minScaleHint:"When the map scale is larger than this scale, local search will be applied",radius:"Radius",radiusHint:"Specifies the radius of an area around current map center that is used to boost the rank of geocoding candidates so that candidates closest to the location are returned first",
meters:"Meters",setSearchFields:"Set Search Fields",set:"Set",fieldName:"Name",invalidUrlTip:"The URL ${URL} is invalid or inaccessible."},searchSetting:{searchSettingTabTitle:"Search Settings",defaultBufferDistanceLabel:"Set default buffer distance",maxResultCountLabel:"Limit number of results",maxResultCountHintLabel:"Hint: Set the maximum number of visible results. The value of 1 will return the nearest feature",maxBufferDistanceLabel:"Set maximum buffer distance",bufferDistanceUnitLabel:"Buffer distance units",
defaultBufferHintLabel:"Hint: Set default value for the buffer slider",maxBufferHintLabel:"Hint: Set maximum value for the buffer slider",bufferUnitLabel:"Hint: Define unit for creating buffer",selectGraphicLocationSymbol:"Address or location symbol",graphicLocationSymbolHintText:"Hint: Symbol for searched address or clicked location",addressLocationPolygonHintText:"Hint: Symbol for searched polygon layer",popupTitleForPolygon:"Select polygon for selected address location",popupTitleForPolyline:"Select line for address location",
addressLocationPolylineHintText:"Hint: Symbol for searched polyline layer",fontColorLabel:"Select font color for search results",fontColorHintText:"Hint: Font color of search results",zoomToSelectedFeature:"Zoom to the selected feature",zoomToSelectedFeatureHintText:"Hint: Zoom to the selected feature instead of the buffer",intersectSearchLocation:"Return intersecting polygon(s)",intersectSearchLocationHintText:"Hint: Return polygon(s) containing the searched location rather than polygons within the buffer",
enableProximitySearch:"Enable proximity search",enableProximitySearchHintText:"Hint: Enable ability to search for locations near a selected result",bufferVisibilityLabel:"Set buffer visibility",bufferVisibilityHintText:"Hint: The buffer will be displayed on the map",bufferColorLabel:"Set buffer symbol",bufferColorHintText:"Hint: Select color and transparency of buffer",searchLayerResultLabel:"Only draw selected layer results",searchLayerResultHint:"Hint: Only the selected layer in the search results will draw on map",
showToolToSelectLabel:"Set location button",showToolToSelectHintText:"Hint: Provides a button to set location on map instead of always setting the location when the map is clicked",geoDesicParamLabel:"Use geodesic buffer",geoDesicParamHintText:"Hint: Use geodesic buffer instead of Euclidean buffer (planar)"},layerSelector:{selectLayerLabel:"Select search layer(s)",layerSelectionHint:"Hint: Use the set button to select layer(s)",addLayerButton:"Set"},routeSetting:{routeSettingTabTitle:"Directions Settings",
routeServiceUrl:"Routing Service",buttonSet:"Set",routeServiceUrlHintText:"Hint: Click \u2018Set\u2019 to browse and select a routing service",directionLengthUnit:"Direction length units",unitsForRouteHintText:"Hint: Used to display units for route",selectRouteSymbol:"Select symbol to display route",routeSymbolHintText:"Hint: Used to display line symbol of the route",routingDisabledMsg:"To enable directions ensure that routing is enabled in the ArcGIS Online item."},symbologySetting:{symbologySettingTabTitle:"Symbology settings",
addSymbologyBtnLabel:"Add New Symbols",layerNameTitle:"Layer Name",fieldTitle:"Field",valuesTitle:"Values",symbolTitle:"Symbol",actionsTitle:"Actions",invalidConfigMsg:"Duplicate field : ${fieldName} for layer : ${layerName}"},networkServiceChooser:{arcgislabel:"Add from ArcGIS Online",serviceURLabel:"Add Service URL",routeURL:"Route URL",validateRouteURL:"Validate",exampleText:"Example",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
invalidRouteServiceURL:"Please specify a valid Route service.",rateLimitExceeded:"Rate limit exceeded. Please try again later.",errorInvokingService:"Username or password is incorrect."},errorStrings:{bufferErrorString:"Please enter valid numeric value.",selectLayerErrorString:"Please select layer(s) to search.",invalidDefaultValue:"Default  buffer distance cannot be blank. Please specify the buffer distance",invalidMaximumValue:"Maximum buffer distance cannot be blank. Please specify the buffer distance",
defaultValueLessThanMax:"Please specify the default buffer distance within the maximum limit",defaultBufferValueGreaterThanOne:"Default buffer distance cannot be less than 0",maximumBufferValueGreaterThanOne:"Please specify the maximum buffer distance greater than 0",invalidMaximumResultCountValue:"Please specify valid value for the maximum result count",invalidSearchSources:"Invalid search source settings"},symbolPickerPreviewText:"Preview:",_localized:{}}});