(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//'\n    },\n    brackets: [['{', '}'], ['[', ']'], ['(', ')']],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n    ],\n    folding: {\n        offSide: true\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.pug',\n    ignoreCase: true,\n    brackets: [\n        { token: 'delimiter.curly', open: '{', close: '}' },\n        { token: 'delimiter.array', open: '[', close: ']' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' }\n    ],\n    keywords: ['append', 'block', 'case', 'default', 'doctype', 'each', 'else', 'extends',\n        'for', 'if', 'in', 'include', 'mixin', 'typeof', 'unless', 'var', 'when'],\n    tags: [\n        'a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio',\n        'b', 'base', 'basefont', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',\n        'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command',\n        'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt',\n        'em', 'embed',\n        'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset',\n        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',\n        'i', 'iframe', 'img', 'input', 'ins',\n        'keygen', 'kbd',\n        'label', 'li', 'link',\n        'map', 'mark', 'menu', 'meta', 'meter',\n        'nav', 'noframes', 'noscript',\n        'object', 'ol', 'optgroup', 'option', 'output',\n        'p', 'param', 'pre', 'progress',\n        'q',\n        'rp', 'rt', 'ruby',\n        's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup',\n        'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'tracks', 'tt',\n        'u', 'ul',\n        'video',\n        'wbr'\n    ],\n    // we include these common regular expressions\n    symbols: /[\\+\\-\\*\\%\\&\\|\\!\\=\\/\\.\\,\\:]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n        root: [\n            // Tag or a keyword at start\n            [/^(\\s*)([a-zA-Z_-][\\w-]*)/,\n                {\n                    cases: {\n                        '$2@tags': {\n                            cases: {\n                                '@eos': ['', 'tag'],\n                                '@default': ['', { token: 'tag', next: '@tag.$1' },]\n                            }\n                        },\n                        '$2@keywords': ['', { token: 'keyword.$2' },],\n                        '@default': ['', '',]\n                    }\n                }\n            ],\n            // id\n            [/^(\\s*)(#[a-zA-Z_-][\\w-]*)/, {\n                    cases: {\n                        '@eos': ['', 'tag.id'],\n                        '@default': ['', { token: 'tag.id', next: '@tag.$1' }]\n                    }\n                }],\n            // class\n            [/^(\\s*)(\\.[a-zA-Z_-][\\w-]*)/, {\n                    cases: {\n                        '@eos': ['', 'tag.class'],\n                        '@default': ['', { token: 'tag.class', next: '@tag.$1' }]\n                    }\n                }],\n            // plain text with pipe\n            [/^(\\s*)(\\|.*)$/, ''],\n            { include: '@whitespace' },\n            // keywords\n            [/[a-zA-Z_$][\\w$]*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': ''\n                    }\n                }],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/\\d+/, 'number'],\n            // strings:\n            [/\"/, 'string', '@string.\"'],\n            [/'/, 'string', '@string.\\''],\n        ],\n        tag: [\n            [/(\\.)(\\s*$)/, [{ token: 'delimiter', next: '@blockText.$S2.' }, '']],\n            [/\\s+/, { token: '', next: '@simpleText' }],\n            // id\n            [/#[a-zA-Z_-][\\w-]*/, {\n                    cases: {\n                        '@eos': { token: 'tag.id', next: '@pop' },\n                        '@default': 'tag.id'\n                    }\n                }],\n            // class\n            [/\\.[a-zA-Z_-][\\w-]*/, {\n                    cases: {\n                        '@eos': { token: 'tag.class', next: '@pop' },\n                        '@default': 'tag.class'\n                    }\n                }],\n            // attributes\n            [/\\(/, { token: 'delimiter.parenthesis', next: '@attributeList' }],\n        ],\n        simpleText: [\n            [/[^#]+$/, { token: '', next: '@popall' }],\n            [/[^#]+/, { token: '' }],\n            // interpolation\n            [/(#{)([^}]*)(})/, {\n                    cases: {\n                        '@eos': ['interpolation.delimiter', 'interpolation', { token: 'interpolation.delimiter', next: '@popall' }],\n                        '@default': ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']\n                    }\n                }],\n            [/#$/, { token: '', next: '@popall' }],\n            [/#/, '']\n        ],\n        attributeList: [\n            [/\\s+/, ''],\n            [/(\\w+)(\\s*=\\s*)(\"|')/, ['attribute.name', 'delimiter', { token: 'attribute.value', next: '@value.$3' }]],\n            [/\\w+/, 'attribute.name'],\n            [/,/, {\n                    cases: {\n                        '@eos': { token: 'attribute.delimiter', next: '@popall' },\n                        '@default': 'attribute.delimiter'\n                    }\n                }],\n            [/\\)$/, { token: 'delimiter.parenthesis', next: '@popall' }],\n            [/\\)/, { token: 'delimiter.parenthesis', next: '@pop' }],\n        ],\n        whitespace: [\n            [/^(\\s*)(\\/\\/.*)$/, { token: 'comment', next: '@blockText.$1.comment' }],\n            [/[ \\t\\r\\n]+/, ''],\n            [/<!--/, { token: 'comment', next: '@comment' }],\n        ],\n        blockText: [\n            [/^\\s+.*$/, {\n                    cases: {\n                        '($S2\\\\s+.*$)': { token: '$S3' },\n                        '@default': { token: '@rematch', next: '@popall' }\n                    }\n                }],\n            [/./, { token: '@rematch', next: '@popall' }]\n        ],\n        comment: [\n            [/[^<\\-]+/, 'comment.content'],\n            [/-->/, { token: 'comment', next: '@pop' }],\n            [/<!--/, 'comment.content.invalid'],\n            [/[<\\-]/, 'comment.content']\n        ],\n        string: [\n            [/[^\\\\\"'#]+/, {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }],\n            [/@escapes/, {\n                    cases: {\n                        '@eos': { token: 'string.escape', next: '@popall' },\n                        '@default': 'string.escape'\n                    }\n                }],\n            [/\\\\./, {\n                    cases: {\n                        '@eos': { token: 'string.escape.invalid', next: '@popall' },\n                        '@default': 'string.escape.invalid'\n                    }\n                }],\n            // interpolation\n            [/(#{)([^}]*)(})/, ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']],\n            [/#/, 'string'],\n            [/[\"']/, {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': { token: 'string' }\n                    }\n                }],\n        ],\n        // Almost identical to above, except for escapes and the output token\n        value: [\n            [/[^\\\\\"']+/, {\n                    cases: {\n                        '@eos': { token: 'attribute.value', next: '@popall' },\n                        '@default': 'attribute.value'\n                    }\n                }],\n            [/\\\\./, {\n                    cases: {\n                        '@eos': { token: 'attribute.value', next: '@popall' },\n                        '@default': 'attribute.value'\n                    }\n                }],\n            [/[\"']/, {\n                    cases: {\n                        '$#==$S2': { token: 'attribute.value', next: '@pop' },\n                        '@default': { token: 'attribute.value' }\n                    }\n                }],\n        ],\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3B1Zy9wdWcuanMuanMiLCJzb3VyY2VzIjpbIi9ob21lL3Ryb3kuZ2liYi9jb2RlL29wZW5fc291cmNlL3dlYnZpei9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3B1Zy9wdWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbWyd7JywgJ30nXSwgWydbJywgJ10nXSwgWycoJywgJyknXV0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBvZmZTaWRlOiB0cnVlXG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcucHVnJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hcnJheScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbJ2FwcGVuZCcsICdibG9jaycsICdjYXNlJywgJ2RlZmF1bHQnLCAnZG9jdHlwZScsICdlYWNoJywgJ2Vsc2UnLCAnZXh0ZW5kcycsXG4gICAgICAgICdmb3InLCAnaWYnLCAnaW4nLCAnaW5jbHVkZScsICdtaXhpbicsICd0eXBlb2YnLCAndW5sZXNzJywgJ3ZhcicsICd3aGVuJ10sXG4gICAgdGFnczogW1xuICAgICAgICAnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLFxuICAgICAgICAnYicsICdiYXNlJywgJ2Jhc2Vmb250JywgJ2JkaScsICdiZG8nLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsXG4gICAgICAgICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb21tYW5kJyxcbiAgICAgICAgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaXYnLCAnZGwnLCAnZHQnLFxuICAgICAgICAnZW0nLCAnZW1iZWQnLFxuICAgICAgICAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdmcmFtZScsICdmcmFtZXNldCcsXG4gICAgICAgICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsXG4gICAgICAgICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJyxcbiAgICAgICAgJ2tleWdlbicsICdrYmQnLFxuICAgICAgICAnbGFiZWwnLCAnbGknLCAnbGluaycsXG4gICAgICAgICdtYXAnLCAnbWFyaycsICdtZW51JywgJ21ldGEnLCAnbWV0ZXInLFxuICAgICAgICAnbmF2JywgJ25vZnJhbWVzJywgJ25vc2NyaXB0JyxcbiAgICAgICAgJ29iamVjdCcsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JyxcbiAgICAgICAgJ3AnLCAncGFyYW0nLCAncHJlJywgJ3Byb2dyZXNzJyxcbiAgICAgICAgJ3EnLFxuICAgICAgICAncnAnLCAncnQnLCAncnVieScsXG4gICAgICAgICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJyxcbiAgICAgICAgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2tzJywgJ3R0JyxcbiAgICAgICAgJ3UnLCAndWwnLFxuICAgICAgICAndmlkZW8nLFxuICAgICAgICAnd2JyJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bXFwrXFwtXFwqXFwlXFwmXFx8XFwhXFw9XFwvXFwuXFwsXFw6XSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIFRhZyBvciBhIGtleXdvcmQgYXQgc3RhcnRcbiAgICAgICAgICAgIFsvXihcXHMqKShbYS16QS1aXy1dW1xcdy1dKikvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMkB0YWdzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogWycnLCAndGFnJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnJywgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAdGFnLiQxJyB9LF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyQyQGtleXdvcmRzJzogWycnLCB7IHRva2VuOiAna2V5d29yZC4kMicgfSxdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogWycnLCAnJyxdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gaWRcbiAgICAgICAgICAgIFsvXihcXHMqKSgjW2EtekEtWl8tXVtcXHctXSopLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiBbJycsICd0YWcuaWQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnJywgeyB0b2tlbjogJ3RhZy5pZCcsIG5leHQ6ICdAdGFnLiQxJyB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvLyBjbGFzc1xuICAgICAgICAgICAgWy9eKFxccyopKFxcLlthLXpBLVpfLV1bXFx3LV0qKS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogWycnLCAndGFnLmNsYXNzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJycsIHsgdG9rZW46ICd0YWcuY2xhc3MnLCBuZXh0OiAnQHRhZy4kMScgfV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gcGxhaW4gdGV4dCB3aXRoIHBpcGVcbiAgICAgICAgICAgIFsvXihcXHMqKShcXHwuKikkLywgJyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBrZXl3b3Jkc1xuICAgICAgICAgICAgWy9bYS16QS1aXyRdW1xcdyRdKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQrXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3M6XG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nLlwiJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXFwnJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHRhZzogW1xuICAgICAgICAgICAgWy8oXFwuKShcXHMqJCkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAYmxvY2tUZXh0LiRTMi4nIH0sICcnXV0sXG4gICAgICAgICAgICBbL1xccysvLCB7IHRva2VuOiAnJywgbmV4dDogJ0BzaW1wbGVUZXh0JyB9XSxcbiAgICAgICAgICAgIC8vIGlkXG4gICAgICAgICAgICBbLyNbYS16QS1aXy1dW1xcdy1dKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3RhZy5pZCcsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3RhZy5pZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gY2xhc3NcbiAgICAgICAgICAgIFsvXFwuW2EtekEtWl8tXVtcXHctXSovLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICd0YWcuY2xhc3MnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd0YWcuY2xhc3MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIFsvXFwoLywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAYXR0cmlidXRlTGlzdCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHNpbXBsZVRleHQ6IFtcbiAgICAgICAgICAgIFsvW14jXSskLywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wYWxsJyB9XSxcbiAgICAgICAgICAgIFsvW14jXSsvLCB7IHRva2VuOiAnJyB9XSxcbiAgICAgICAgICAgIC8vIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIFsvKCN7KShbXn1dKikofSkvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IFsnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInLCAnaW50ZXJwb2xhdGlvbicsIHsgdG9rZW46ICdpbnRlcnBvbGF0aW9uLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wYWxsJyB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInLCAnaW50ZXJwb2xhdGlvbicsICdpbnRlcnBvbGF0aW9uLmRlbGltaXRlciddXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvIyQvLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxuICAgICAgICAgICAgWy8jLywgJyddXG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJpYnV0ZUxpc3Q6IFtcbiAgICAgICAgICAgIFsvXFxzKy8sICcnXSxcbiAgICAgICAgICAgIFsvKFxcdyspKFxccyo9XFxzKikoXCJ8JykvLCBbJ2F0dHJpYnV0ZS5uYW1lJywgJ2RlbGltaXRlcicsIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHZhbHVlLiQzJyB9XV0sXG4gICAgICAgICAgICBbL1xcdysvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvLC8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ2F0dHJpYnV0ZS5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUuZGVsaW1pdGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbL1xcKSQvLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxuICAgICAgICAgICAgWy9cXCkvLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL14oXFxzKikoXFwvXFwvLiopJC8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0BibG9ja1RleHQuJDEuY29tbWVudCcgfV0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAY29tbWVudCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGJsb2NrVGV4dDogW1xuICAgICAgICAgICAgWy9eXFxzKy4qJC8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJFMyXFxcXHMrLiokKSc6IHsgdG9rZW46ICckUzMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcGFsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbLy4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcGFsbCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcbiAgICAgICAgICAgIFsvLS0+LywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5jb250ZW50LmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIicjXSsvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLmVzY2FwZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9cXFxcLi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUuaW52YWxpZCcsIG5leHQ6ICdAcG9wYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy5lc2NhcGUuaW52YWxpZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgWy8oI3spKFtefV0qKSh9KS8sIFsnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInLCAnaW50ZXJwb2xhdGlvbicsICdpbnRlcnBvbGF0aW9uLmRlbGltaXRlciddXSxcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICBdLFxuICAgICAgICAvLyBBbG1vc3QgaWRlbnRpY2FsIHRvIGFib3ZlLCBleGNlcHQgZm9yIGVzY2FwZXMgYW5kIHRoZSBvdXRwdXQgdG9rZW5cbiAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCInXSsvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUudmFsdWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUudmFsdWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js\n");

/***/ })

}]);