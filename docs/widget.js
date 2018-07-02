"use strict";
var ErcDexTradeWidget;
(function (ErcDexTradeWidget) {
    var _params;
    var div;
    var getParams = function () {
        if (!_params) {
            throw new Error('ErcDexTradeWidget not initialized.');
        }
        return _params;
    };
    var getTokensUrl = function () {
        var params = getParams();
        var url = (params.baseUrl || 'https://app.ercdex.com') + "/tokens.html?iframe=1&theme=" + params.theme;
        if (params.baseTokens && params.baseTokens.length) {
            url += "&base_tokens=" + params.baseTokens.join(',');
        }
        if (params.quoteTokens && params.quoteTokens.length) {
            url += "&quote_tokens=" + params.quoteTokens.join(',');
        }
        return url;
    };
    ErcDexTradeWidget.initialize = function (params) {
        _params = params;
        if (!params.mode) {
            _params.mode = 'sidebar';
        }
        if (!_params.theme) {
            _params.theme = 'dark';
        }
    };
    ErcDexTradeWidget.launch = function () {
        var mode = getParams().mode;
        if (mode === 'sidebar') {
            ErcDexTradeWidget.launchWidget();
        }
    };
    ErcDexTradeWidget.launchWidget = function () {
        if (div) {
            return;
        }
        var params = getParams();
        div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '0';
        div.style.right = '0';
        div.style.bottom = '0';
        div.style.width = '100%';
        div.style.maxWidth = '400px';
        div.style.height = '100%';
        div.style.zIndex = '999';
        div.style.boxShadow = '-3px 0px 1px 1px #a4a4a4';
        var loaderContainer = document.createElement('div');
        loaderContainer.style.display = 'flex';
        loaderContainer.style.justifyContent = 'center';
        loaderContainer.style.alignItems = 'center';
        loaderContainer.style.zIndex = '-1';
        loaderContainer.style.position = 'absolute';
        loaderContainer.style.top = '0';
        loaderContainer.style.right = '0';
        loaderContainer.style.bottom = '0';
        loaderContainer.style.left = '0';
        var loader = document.createElement('div');
        loader.style.background = "url('data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMTM5ZGQyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMTgiPgogICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgdG89IjM2MCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICBkdXI9IjFzIgogICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=') no-repeat";
        loader.style.height = '38px';
        loader.style.width = '38px';
        loaderContainer.appendChild(loader);
        div.appendChild(loaderContainer);
        var closeButton = closeIcon(params.theme === 'dark' ? 'white' : 'black');
        div.appendChild(closeButton);
        closeButton.onclick = function () {
            if (div) {
                document.body.removeChild(div);
                div = undefined;
            }
        };
        var iframe = document.createElement('iframe');
        iframe.src = getTokensUrl();
        iframe.style.border = 'none';
        iframe.style.outline = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        div.appendChild(iframe);
        document.body.appendChild(div);
    };
})(ErcDexTradeWidget || (ErcDexTradeWidget = {}));
var closeIcon = function (hex) {
    var xlmns = 'http://www.w3.org/2000/svg';
    var svgElem = document.createElementNS(xlmns, 'svg');
    svgElem.style.position = 'absolute';
    svgElem.style.width = '12px';
    svgElem.style.height = '12px';
    svgElem.style.top = '7px';
    svgElem.style.right = '7px';
    svgElem.style.cursor = 'pointer';
    var set = function (el, name, value) {
        el.setAttributeNS(undefined, name, value);
        return { set: set };
    };
    set(svgElem, 'viewBox', '0 0 89 89');
    set(svgElem, 'enable-background', 'new 0 0 89 89');
    set(svgElem, 'x', '0px');
    set(svgElem, 'y', '0px');
    var gElem = document.createElementNS(xlmns, 'g');
    svgElem.appendChild(gElem);
    set(gElem, 'id', 'x');
    var lineOne = document.createElementNS(xlmns, 'line');
    set(lineOne, 'fill', 'none');
    set(lineOne, 'stroke', hex);
    set(lineOne, 'stroke-width', '5.1008');
    set(lineOne, 'stroke-miterlimit', '10');
    set(lineOne, 'x1', '2.3');
    set(lineOne, 'y1', '2.3');
    set(lineOne, 'x2', '86.7');
    set(lineOne, 'y2', '86.7');
    var lineTwo = document.createElementNS(xlmns, 'line');
    set(lineTwo, 'fill', 'none');
    set(lineTwo, 'stroke', hex);
    set(lineTwo, 'stroke-width', '5.1008');
    set(lineTwo, 'stroke-miterlimit', '10');
    set(lineTwo, 'x1', '86.7');
    set(lineTwo, 'y1', '2.3');
    set(lineTwo, 'x2', '2.3');
    set(lineTwo, 'y2', '86.7');
    gElem.appendChild(lineOne);
    gElem.appendChild(lineTwo);
    return svgElem;
};
