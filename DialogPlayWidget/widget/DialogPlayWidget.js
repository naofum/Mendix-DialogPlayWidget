define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "dojo/_base/lang"


], function (declare, _WidgetBase, lang) {
    "use strict";

    return declare("DialogPlayWidget.widget.DialogPlayWidget", [ _WidgetBase ], {


        // Internal variables.
        _handles: null,
        _contextObj: null,

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");
        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");
            this._insertAdebis();

            this._contextObj = obj;
            callback();
        },

        _insertAdebis: function () {
            logger.debug(this.id + "._insertAdebis");

//            var script = document.createTextNode('<!-- DialogPlay chatbot script -->' +
//            '<script type="text/javascript" id="dialogplay-embedded-script"\n' +
//            'src="https://dialogplay.jp/js/embedded.js"\n' +
//            'data-token="689285be-7467-40a9-aced-a727788ec517"\n' +
//            'data-title="webtest"\n' +
//            'data-position="position-right"\n' +
//            'data-chat-call-button="title-header"\n' +
//            'data-closer-type="header"\n' +
//            'data-theme="theme-blue"\n' +
//            'data-font-size="0"\n' +
//            'data-fit-height="false"\n' +
//            '><\/script>\n' +
//            '<!-- End DialogPlay chatbot script -->\n');

            var script = document.createElement('script');
            script.type="text/javascript";
            script.id="dialogplay-embedded-script";
            script.src="https://dialogplay.jp/js/embedded.js";
            script.setAttribute("data-token", this.token);
            script.setAttribute("data-title", this.title);
            script.setAttribute("data-position", this.position);
            script.setAttribute("data-chat-call-button", this.launcher);
            if (this.launcher == 'custom-image') {
                script.setAttribute("data-chat-call-button-image", this.launcherimage);
            }
            script.setAttribute("data-closer-type", this.closer);
            script.setAttribute("data-theme", this.theme);
            if (this.theme == 'custom') {
                script.setAttribute("data-color", this.themecolor);
            }
            script.setAttribute("data-font-size", this.font);
            script.setAttribute("data-fit-height", this.fit);

            var head = document.getElementsByTagName('head')[0];
            head.appendChild(script);

        },

    });
});

require(["DialogPlayWidget/widget/DialogPlayWidget"]);
