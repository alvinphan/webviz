(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(#?-?\\d*\\.\\d\\w*%?)|([@$#!.:]?[\\w-?]+%?)|[@#!.]/g,\n    comments: {\n        blockComment: ['/*', '*/'],\n        lineComment: '//'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#region\\\\b\\\\s*(.*?)\\\\s*\\\\*\\\\/\"),\n            end: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#endregion\\\\b.*\\\\*\\\\/\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.scss',\n    ws: '[ \\t\\n\\r\\f]*',\n    identifier: '-?-?([a-zA-Z]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))([\\\\w\\\\-]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))*',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    tokenizer: {\n        root: [\n            { include: '@selector' },\n        ],\n        selector: [\n            { include: '@comments' },\n            { include: '@import' },\n            { include: '@variabledeclaration' },\n            { include: '@warndebug' },\n            ['[@](include)', { token: 'keyword', next: '@includedeclaration' }],\n            ['[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)', { token: 'keyword', next: '@keyframedeclaration' }],\n            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],\n            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],\n            ['[@](function)', { token: 'keyword', next: '@functiondeclaration' }],\n            ['[@](mixin)', { token: 'keyword', next: '@mixindeclaration' }],\n            ['url(\\\\-prefix)?\\\\(', { token: 'meta', next: '@urldeclaration' }],\n            { include: '@controlstatement' },\n            { include: '@selectorname' },\n            ['[&\\\\*]', 'tag'],\n            ['[>\\\\+,]', 'delimiter'],\n            ['\\\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],\n            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],\n        ],\n        selectorbody: [\n            ['[*_]?@identifier@ws:(?=(\\\\s|\\\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],\n            { include: '@selector' },\n            ['[@](extend)', { token: 'keyword', next: '@extendbody' }],\n            ['[@](return)', { token: 'keyword', next: '@declarationbody' }],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        selectorname: [\n            ['#{', { token: 'meta', next: '@variableinterpolation' }],\n            ['(\\\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'],\n        ],\n        selectorattribute: [\n            { include: '@term' },\n            [']', { token: 'delimiter.bracket', next: '@pop' }],\n        ],\n        term: [\n            { include: '@comments' },\n            ['url(\\\\-prefix)?\\\\(', { token: 'meta', next: '@urldeclaration' }],\n            { include: '@functioninvocation' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@variablereference' },\n            ['(and\\\\b|or\\\\b|not\\\\b)', 'operator'],\n            { include: '@name' },\n            ['([<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,])', 'operator'],\n            [',', 'delimiter'],\n            ['!default', 'literal'],\n            ['\\\\(', { token: 'delimiter.parenthesis', next: '@parenthizedterm' }],\n        ],\n        rulevalue: [\n            { include: '@term' },\n            ['!important', 'literal'],\n            [';', 'delimiter', '@pop'],\n            ['{', { token: 'delimiter.curly', switchTo: '@nestedproperty' }],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        nestedproperty: [\n            ['[*_]?@identifier@ws:', 'attribute.name', '@rulevalue'],\n            { include: '@comments' },\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        warndebug: [\n            ['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }],\n        ],\n        import: [\n            ['[@](import)', { token: 'keyword', next: '@declarationbody' }],\n        ],\n        variabledeclaration: [\n            ['\\\\$@identifier@ws:', 'variable.decl', '@declarationbody'],\n        ],\n        urldeclaration: [\n            { include: '@strings' },\n            ['[^)\\r\\n]+', 'string'],\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        parenthizedterm: [\n            { include: '@term' },\n            ['\\\\)', { token: 'delimiter.parenthesis', next: '@pop' }],\n        ],\n        declarationbody: [\n            { include: '@term' },\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        extendbody: [\n            { include: '@selectorname' },\n            ['!optional', 'literal'],\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        variablereference: [\n            ['\\\\$@identifier', 'variable.ref'],\n            ['\\\\.\\\\.\\\\.', 'operator'],\n            ['#{', { token: 'meta', next: '@variableinterpolation' }],\n        ],\n        variableinterpolation: [\n            { include: '@variablereference' },\n            ['}', { token: 'meta', next: '@pop' }],\n        ],\n        comments: [\n            ['\\\\/\\\\*', 'comment', '@comment'],\n            ['\\\\/\\\\/+.*', 'comment'],\n        ],\n        comment: [\n            ['\\\\*\\\\/', 'comment', '@pop'],\n            ['.', 'comment'],\n        ],\n        name: [\n            ['@identifier', 'attribute.value'],\n        ],\n        numbers: [\n            ['(\\\\d*\\\\.)?\\\\d+([eE][\\\\-+]?\\\\d+)?', { token: 'number', next: '@units' }],\n            ['#[0-9a-fA-F_]+(?!\\\\w)', 'number.hex'],\n        ],\n        units: [\n            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'number', '@pop']\n        ],\n        functiondeclaration: [\n            ['@identifier@ws\\\\(', { token: 'meta', next: '@parameterdeclaration' }],\n            ['{', { token: 'delimiter.curly', switchTo: '@functionbody' }],\n        ],\n        mixindeclaration: [\n            // mixin with parameters\n            ['@identifier@ws\\\\(', { token: 'meta', next: '@parameterdeclaration' }],\n            // mixin without parameters\n            ['@identifier', 'meta'],\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        parameterdeclaration: [\n            ['\\\\$@identifier@ws:', 'variable.decl'],\n            ['\\\\.\\\\.\\\\.', 'operator'],\n            [',', 'delimiter'],\n            { include: '@term' },\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        includedeclaration: [\n            { include: '@functioninvocation' },\n            ['@identifier', 'meta'],\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        keyframedeclaration: [\n            ['@identifier', 'meta'],\n            ['{', { token: 'delimiter.curly', switchTo: '@keyframebody' }],\n        ],\n        keyframebody: [\n            { include: '@term' },\n            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        controlstatement: [\n            ['[@](if|else|for|while|each|media)', { token: 'keyword.flow', next: '@controlstatementdeclaration' }],\n        ],\n        controlstatementdeclaration: [\n            ['(in|from|through|if|to)\\\\b', { token: 'keyword.flow' }],\n            { include: '@term' },\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        functionbody: [\n            ['[@](return)', { token: 'keyword' }],\n            { include: '@variabledeclaration' },\n            { include: '@term' },\n            { include: '@controlstatement' },\n            [';', 'delimiter'],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        functioninvocation: [\n            ['@identifier\\\\(', { token: 'meta', next: '@functionarguments' }],\n        ],\n        functionarguments: [\n            ['\\\\$@identifier@ws:', 'attribute.name'],\n            ['[,]', 'delimiter'],\n            { include: '@term' },\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        strings: [\n            ['~?\"', { token: 'string.delimiter', next: '@stringenddoublequote' }],\n            ['~?\\'', { token: 'string.delimiter', next: '@stringendquote' }]\n        ],\n        stringenddoublequote: [\n            ['\\\\\\\\.', 'string'],\n            ['\"', { token: 'string.delimiter', next: '@pop' }],\n            ['.', 'string']\n        ],\n        stringendquote: [\n            ['\\\\\\\\.', 'string'],\n            ['\\'', { token: 'string.delimiter', next: '@pop' }],\n            ['.', 'string']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Njc3Mvc2Nzcy5qcy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdHJveS5naWJiL2NvZGUvb3Blbl9zb3VyY2Uvd2Vidml6L25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2Nzcy9zY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKCM/LT9cXGQqXFwuXFxkXFx3KiU/KXwoW0AkIyEuOl0/W1xcdy0/XSslPyl8W0AjIS5dL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojcmVnaW9uXFxcXGJcXFxccyooLio/KVxcXFxzKlxcXFwqXFxcXC9cIiksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNlbmRyZWdpb25cXFxcYi4qXFxcXCpcXFxcL1wiKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuc2NzcycsXG4gICAgd3M6ICdbIFxcdFxcblxcclxcZl0qJyxcbiAgICBpZGVudGlmaWVyOiAnLT8tPyhbYS16QS1aXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC1dfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKSonLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9LFxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RvcjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGltcG9ydCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZWRlY2xhcmF0aW9uJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdhcm5kZWJ1ZycgfSxcbiAgICAgICAgICAgIFsnW0BdKGluY2x1ZGUpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGluY2x1ZGVkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICBbJ1tAXShrZXlmcmFtZXN8LXdlYmtpdC1rZXlmcmFtZXN8LW1vei1rZXlmcmFtZXN8LW8ta2V5ZnJhbWVzKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BrZXlmcmFtZWRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsnW0BdKHBhZ2V8Y29udGVudHxmb250LWZhY2V8LW1vei1kb2N1bWVudCknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXG4gICAgICAgICAgICBbJ1tAXShjaGFyc2V0fG5hbWVzcGFjZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcbiAgICAgICAgICAgIFsnW0BdKGZ1bmN0aW9uKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BmdW5jdGlvbmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsnW0BdKG1peGluKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BtaXhpbmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsndXJsKFxcXFwtcHJlZml4KT9cXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29udHJvbHN0YXRlbWVudCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3Rvcm5hbWUnIH0sXG4gICAgICAgICAgICBbJ1smXFxcXCpdJywgJ3RhZyddLFxuICAgICAgICAgICAgWydbPlxcXFwrLF0nLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJ1xcXFxbJywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0BzZWxlY3RvcmF0dHJpYnV0ZScgfV0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RvcmJvZHk6IFtcbiAgICAgICAgICAgIFsnWypfXT9AaWRlbnRpZmllckB3czooPz0oXFxcXHN8XFxcXGR8W157O31dKls7fV0pKScsICdhdHRyaWJ1dGUubmFtZScsICdAcnVsZXZhbHVlJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3InIH0sXG4gICAgICAgICAgICBbJ1tAXShleHRlbmQpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGV4dGVuZGJvZHknIH1dLFxuICAgICAgICAgICAgWydbQF0ocmV0dXJuKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3JuYW1lOiBbXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0sXG4gICAgICAgICAgICBbJyhcXFxcLnwjKD89W157XSl8JXwoQGlkZW50aWZpZXIpfDopKycsICd0YWcnXSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3JhdHRyaWJ1dGU6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWyddJywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICB0ZXJtOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZ1bmN0aW9uaW52b2NhdGlvbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVyZWZlcmVuY2UnIH0sXG4gICAgICAgICAgICBbJyhhbmRcXFxcYnxvclxcXFxifG5vdFxcXFxiKScsICdvcGVyYXRvciddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5hbWUnIH0sXG4gICAgICAgICAgICBbJyhbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH4sXSknLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsnLCcsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnIWRlZmF1bHQnLCAnbGl0ZXJhbCddLFxuICAgICAgICAgICAgWydcXFxcKCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBhcmVudGhpemVkdGVybScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHJ1bGV2YWx1ZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJyFpbXBvcnRhbnQnLCAnbGl0ZXJhbCddLFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAbmVzdGVkcHJvcGVydHknIH1dLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIG5lc3RlZHByb3BlcnR5OiBbXG4gICAgICAgICAgICBbJ1sqX10/QGlkZW50aWZpZXJAd3M6JywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BydWxldmFsdWUnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHdhcm5kZWJ1ZzogW1xuICAgICAgICAgICAgWydbQF0od2FybnxkZWJ1ZyknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgaW1wb3J0OiBbXG4gICAgICAgICAgICBbJ1tAXShpbXBvcnQpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHZhcmlhYmxlZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllckB3czonLCAndmFyaWFibGUuZGVjbCcsICdAZGVjbGFyYXRpb25ib2R5J10sXG4gICAgICAgIF0sXG4gICAgICAgIHVybGRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIFsnW14pXFxyXFxuXSsnLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmVudGhpemVkdGVybTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgZGVjbGFyYXRpb25ib2R5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGV4dGVuZGJvZHk6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3Rvcm5hbWUnIH0sXG4gICAgICAgICAgICBbJyFvcHRpb25hbCcsICdsaXRlcmFsJ10sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICB2YXJpYWJsZXJlZmVyZW5jZTogW1xuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyJywgJ3ZhcmlhYmxlLnJlZiddLFxuICAgICAgICAgICAgWydcXFxcLlxcXFwuXFxcXC4nLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsnI3snLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdmFyaWFibGVpbnRlcnBvbGF0aW9uJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFibGVpbnRlcnBvbGF0aW9uOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVyZWZlcmVuY2UnIH0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXC8rLionLCAnY29tbWVudCddLFxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXC8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbJy4nLCAnY29tbWVudCddLFxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICBdLFxuICAgICAgICBudW1iZXJzOiBbXG4gICAgICAgICAgICBbJyhcXFxcZCpcXFxcLik/XFxcXGQrKFtlRV1bXFxcXC0rXT9cXFxcZCspPycsIHsgdG9rZW46ICdudW1iZXInLCBuZXh0OiAnQHVuaXRzJyB9XSxcbiAgICAgICAgICAgIFsnI1swLTlhLWZBLUZfXSsoPyFcXFxcdyknLCAnbnVtYmVyLmhleCddLFxuICAgICAgICBdLFxuICAgICAgICB1bml0czogW1xuICAgICAgICAgICAgWycoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT8nLCAnbnVtYmVyJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBmdW5jdGlvbmRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyQHdzXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcGFyYW1ldGVyZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQGZ1bmN0aW9uYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIG1peGluZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIC8vIG1peGluIHdpdGggcGFyYW1ldGVyc1xuICAgICAgICAgICAgWydAaWRlbnRpZmllckB3c1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBhcmFtZXRlcmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIC8vIG1peGluIHdpdGhvdXQgcGFyYW1ldGVyc1xuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllckB3czonLCAndmFyaWFibGUuZGVjbCddLFxuICAgICAgICAgICAgWydcXFxcLlxcXFwuXFxcXC4nLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsnLCcsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBpbmNsdWRlZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAga2V5ZnJhbWVkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAa2V5ZnJhbWVib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAga2V5ZnJhbWVib2R5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBjb250cm9sc3RhdGVtZW50OiBbXG4gICAgICAgICAgICBbJ1tAXShpZnxlbHNlfGZvcnx3aGlsZXxlYWNofG1lZGlhKScsIHsgdG9rZW46ICdrZXl3b3JkLmZsb3cnLCBuZXh0OiAnQGNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWycoaW58ZnJvbXx0aHJvdWdofGlmfHRvKVxcXFxiJywgeyB0b2tlbjogJ2tleXdvcmQuZmxvdycgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICBmdW5jdGlvbmJvZHk6IFtcbiAgICAgICAgICAgIFsnW0BdKHJldHVybiknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVkZWNsYXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbnRyb2xzdGF0ZW1lbnQnIH0sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBmdW5jdGlvbmludm9jYXRpb246IFtcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXJcXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0BmdW5jdGlvbmFyZ3VtZW50cycgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uYXJndW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbJ1ssXScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbJ34/XCInLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAc3RyaW5nZW5kZG91YmxlcXVvdGUnIH1dLFxuICAgICAgICAgICAgWyd+P1xcJycsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdlbmRxdW90ZScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nZW5kZG91YmxlcXVvdGU6IFtcbiAgICAgICAgICAgIFsnXFxcXFxcXFwuJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ2VuZHF1b3RlOiBbXG4gICAgICAgICAgICBbJ1xcXFxcXFxcLicsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnXFwnJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js\n");

/***/ })

}]);