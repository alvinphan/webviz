(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js ***!
  \****************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: ';',\n        blockComment: ['#|', '|#'],\n    },\n    brackets: [['(', ')'], ['{', '}'], ['[', ']']],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n    ],\n};\nvar language = {\n    defaultToken: '',\n    ignoreCase: true,\n    tokenPostfix: '.scheme',\n    brackets: [\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n    ],\n    keywords: [\n        'case',\n        'do',\n        'let',\n        'loop',\n        'if',\n        'else',\n        'when',\n        'cons',\n        'car',\n        'cdr',\n        'cond',\n        'lambda',\n        'lambda*',\n        'syntax-rules',\n        'format',\n        'set!',\n        'quote',\n        'eval',\n        'append',\n        'list',\n        'list?',\n        'member?',\n        'load',\n    ],\n    constants: ['#t', '#f'],\n    operators: ['eq?', 'eqv?', 'equal?', 'and', 'or', 'not', 'null?'],\n    tokenizer: {\n        root: [\n            [/#[xXoObB][0-9a-fA-F]+/, 'number.hex'],\n            [/[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?/, 'number.float'],\n            [\n                /(?:\\b(?:(define|define-syntax|define-macro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)/,\n                ['keyword', 'white', 'variable'],\n            ],\n            { include: '@whitespace' },\n            { include: '@strings' },\n            [\n                /[a-zA-Z_#][a-zA-Z0-9_\\-\\?\\!\\*]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@constants': 'constant',\n                        '@operators': 'operators',\n                        '@default': 'identifier',\n                    },\n                },\n            ],\n        ],\n        comment: [\n            [/[^\\|#]+/, 'comment'],\n            [/#\\|/, 'comment', '@push'],\n            [/\\|#/, 'comment', '@pop'],\n            [/[\\|#]/, 'comment'],\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, 'white'],\n            [/#\\|/, 'comment', '@comment'],\n            [/;.*$/, 'comment'],\n        ],\n        strings: [\n            [/\"$/, 'string', '@popall'],\n            [/\"(?=.)/, 'string', '@multiLineString'],\n        ],\n        multiLineString: [\n            [/[^\\\\\"]+$/, 'string', '@popall'],\n            [/[^\\\\\"]+/, 'string'],\n            [/\\\\./, 'string.escape'],\n            [/\"/, 'string', '@popall'],\n            [/\\\\$/, 'string']\n        ],\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NjaGVtZS9zY2hlbWUuanMuanMiLCJzb3VyY2VzIjpbIi9ob21lL3Ryb3kuZ2liYi9jb2RlL29wZW5fc291cmNlL3dlYnZpei9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NjaGVtZS9zY2hlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICc7JyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJyN8JywgJ3wjJ10sXG4gICAgfSxcbiAgICBicmFja2V0czogW1snKCcsICcpJ10sIFsneycsICd9J10sIFsnWycsICddJ11dLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgXSxcbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICB0b2tlblBvc3RmaXg6ICcuc2NoZW1lJyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICdsb29wJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnd2hlbicsXG4gICAgICAgICdjb25zJyxcbiAgICAgICAgJ2NhcicsXG4gICAgICAgICdjZHInLFxuICAgICAgICAnY29uZCcsXG4gICAgICAgICdsYW1iZGEnLFxuICAgICAgICAnbGFtYmRhKicsXG4gICAgICAgICdzeW50YXgtcnVsZXMnLFxuICAgICAgICAnZm9ybWF0JyxcbiAgICAgICAgJ3NldCEnLFxuICAgICAgICAncXVvdGUnLFxuICAgICAgICAnZXZhbCcsXG4gICAgICAgICdhcHBlbmQnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdsaXN0PycsXG4gICAgICAgICdtZW1iZXI/JyxcbiAgICAgICAgJ2xvYWQnLFxuICAgIF0sXG4gICAgY29uc3RhbnRzOiBbJyN0JywgJyNmJ10sXG4gICAgb3BlcmF0b3JzOiBbJ2VxPycsICdlcXY/JywgJ2VxdWFsPycsICdhbmQnLCAnb3InLCAnbm90JywgJ251bGw/J10sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvI1t4WG9PYkJdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvWystXT9cXGQrKD86KD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg/OlxcYig/OihkZWZpbmV8ZGVmaW5lLXN5bnRheHxkZWZpbmUtbWFjcm8pKVxcYikoXFxzKykoKD86XFx3fFxcLXxcXCF8XFw/KSopLyxcbiAgICAgICAgICAgICAgICBbJ2tleXdvcmQnLCAnd2hpdGUnLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aXyNdW2EtekEtWjAtOV9cXC1cXD9cXCFcXCpdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAY29uc3RhbnRzJzogJ2NvbnN0YW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9ycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXHwjXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy8jXFx8LywgJ2NvbW1lbnQnLCAnQHB1c2gnXSxcbiAgICAgICAgICAgIFsvXFx8Iy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcfCNdLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbLyNcXHwvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy87LiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWy9cIiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXCIoPz0uKS8sICdzdHJpbmcnLCAnQG11bHRpTGluZVN0cmluZyddLFxuICAgICAgICBdLFxuICAgICAgICBtdWx0aUxpbmVTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js\n");

/***/ })

}]);