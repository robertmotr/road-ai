"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Dropzone.js":
/*!********************************!*\
  !*** ./components/Dropzone.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropzone; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dropzone() {\n    _s();\n    const baseStyle = {\n        flex: 1,\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        padding: \"20px\",\n        borderWidth: 2,\n        borderRadius: 2,\n        borderColor: \"#eeeeee\",\n        borderStyle: \"dashed\",\n        backgroundColor: \"#fafafa\",\n        color: \"#bdbdbd\",\n        outline: \"none\",\n        transition: \"border .24s ease-in-out\"\n    };\n    const focusedStyle = {\n        borderColor: \"#2196f3\"\n    };\n    const acceptStyle = {\n        borderColor: \"#00e676\"\n    };\n    const rejectStyle = {\n        borderColor: \"#ff1744\"\n    };\n    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{\n        // Do whatever you need to do with the files here\n        console.log(acceptedFiles[0]);\n        open(acceptedFiles[0].path);\n    }, []);\n    const { getRootProps , getInputProps , isFocused , isDragAccept , isDragReject  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)({\n        onDrop: onDrop,\n        accept: {\n            \"video/*\": [\n                \".mp4\"\n            ]\n        },\n        maxFiles: 1\n    });\n    const style = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            ...baseStyle,\n            ...isFocused ? focusedStyle : {},\n            ...isDragAccept ? acceptStyle : {},\n            ...isDragReject ? rejectStyle : {}\n        }), [\n        isFocused,\n        isDragAccept,\n        isDragReject\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...getRootProps({\n                style\n            }),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ...getInputProps()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arian\\\\OneDrive\\\\Desktop\\\\Projects\\\\road-ai\\\\road-ai-website\\\\components\\\\Dropzone.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Hello\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\arian\\\\OneDrive\\\\Desktop\\\\Projects\\\\road-ai\\\\road-ai-website\\\\components\\\\Dropzone.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\arian\\\\OneDrive\\\\Desktop\\\\Projects\\\\road-ai\\\\road-ai-website\\\\components\\\\Dropzone.js\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\arian\\\\OneDrive\\\\Desktop\\\\Projects\\\\road-ai\\\\road-ai-website\\\\components\\\\Dropzone.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(Dropzone, \"Q6wljsNcDhtvfP/9O0TjccUevlg=\", false, function() {\n    return [\n        react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone\n    ];\n});\n_c = Dropzone;\nvar _c;\n$RefreshReg$(_c, \"Dropzone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ryb3B6b25lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0w7QUFFOUIsU0FBU0ksV0FBVzs7SUFDL0IsTUFBTUMsWUFBWTtRQUNkQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsYUFBYTtRQUNiQyxjQUFjO1FBQ2RDLGFBQWE7UUFDYkMsYUFBYTtRQUNiQyxpQkFBaUI7UUFDakJDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxZQUFZO0lBQ2hCO0lBRUEsTUFBTUMsZUFBZTtRQUNyQk4sYUFBYTtJQUNiO0lBRUEsTUFBTU8sY0FBYztRQUNwQlAsYUFBYTtJQUNiO0lBRUEsTUFBTVEsY0FBYztRQUNwQlIsYUFBYTtJQUNiO0lBRUEsTUFBTVMsU0FBU3JCLGtEQUFXQSxDQUFDc0IsQ0FBQUEsZ0JBQWlCO1FBQ3hDLGlEQUFpRDtRQUNqREMsUUFBUUMsR0FBRyxDQUFDRixhQUFhLENBQUMsRUFBRTtRQUM1QkcsS0FBS0gsYUFBYSxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTtJQUM5QixHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQUNDLGFBQVksRUFBRUMsY0FBYSxFQUFFQyxVQUFTLEVBQUVDLGFBQVksRUFBRUMsYUFBWSxFQUFDLEdBQUc3QiwyREFBV0EsQ0FBQztRQUNyRm1CLFFBQVFBO1FBQ1JXLFFBQVE7WUFDSixXQUFXO2dCQUFDO2FBQU87UUFDdkI7UUFDQUMsVUFBVTtJQUNkO0lBRUEsTUFBTUMsUUFBUWpDLDhDQUFPQSxDQUFDLElBQU87WUFDekIsR0FBR0csU0FBUztZQUNaLEdBQUl5QixZQUFZWCxlQUFlLENBQUMsQ0FBQztZQUNqQyxHQUFJWSxlQUFlWCxjQUFjLENBQUMsQ0FBQztZQUNuQyxHQUFJWSxlQUFlWCxjQUFjLENBQUMsQ0FBQztRQUN2QyxJQUFJO1FBQ0FTO1FBQ0FDO1FBQ0FDO0tBQ0g7SUFFRCxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSyxHQUFHUixhQUFhO2dCQUFDTztZQUFLLEVBQUU7OzhCQUMxQiw4REFBQ0c7b0JBQU8sR0FBR1QsZUFBZTs7Ozs7OzhCQUMxQiw4REFBQ1U7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CLENBQUM7R0E5RHVCbkM7O1FBbUN5REQsdURBQVdBOzs7S0FuQ3BFQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Ryb3B6b25lLmpzPzIwOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoKSB7XHJcbiAgICBjb25zdCBiYXNlU3R5bGUgPSB7XHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICBib3JkZXJDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgIGJvcmRlclN0eWxlOiAnZGFzaGVkJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFmYWZhJyxcclxuICAgICAgICBjb2xvcjogJyNiZGJkYmQnLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYm9yZGVyIC4yNHMgZWFzZS1pbi1vdXQnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBmb2N1c2VkU3R5bGUgPSB7XHJcbiAgICBib3JkZXJDb2xvcjogJyMyMTk2ZjMnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBhY2NlcHRTdHlsZSA9IHtcclxuICAgIGJvcmRlckNvbG9yOiAnIzAwZTY3NidcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHJlamVjdFN0eWxlID0ge1xyXG4gICAgYm9yZGVyQ29sb3I6ICcjZmYxNzQ0J1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soYWNjZXB0ZWRGaWxlcyA9PiB7XHJcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IG5lZWQgdG8gZG8gd2l0aCB0aGUgZmlsZXMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjY2VwdGVkRmlsZXNbMF0pXHJcbiAgICAgICAgb3BlbihhY2NlcHRlZEZpbGVzWzBdLnBhdGgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qge2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNGb2N1c2VkLCBpc0RyYWdBY2NlcHQsIGlzRHJhZ1JlamVjdH0gPSB1c2VEcm9wem9uZSh7XHJcbiAgICAgICAgb25Ecm9wOiBvbkRyb3AsXHJcbiAgICAgICAgYWNjZXB0OiB7XHJcbiAgICAgICAgICAgICd2aWRlby8qJzogWycubXA0J11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heEZpbGVzOiAxXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICAuLi5iYXNlU3R5bGUsXHJcbiAgICAgICAgLi4uKGlzRm9jdXNlZCA/IGZvY3VzZWRTdHlsZSA6IHt9KSxcclxuICAgICAgICAuLi4oaXNEcmFnQWNjZXB0ID8gYWNjZXB0U3R5bGUgOiB7fSksXHJcbiAgICAgICAgLi4uKGlzRHJhZ1JlamVjdCA/IHJlamVjdFN0eWxlIDoge30pXHJcbiAgICB9KSwgW1xyXG4gICAgICAgIGlzRm9jdXNlZCxcclxuICAgICAgICBpc0RyYWdBY2NlcHQsXHJcbiAgICAgICAgaXNEcmFnUmVqZWN0XHJcbiAgICBdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoe3N0eWxlfSl9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8cD5IZWxsbzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlRHJvcHpvbmUiLCJEcm9wem9uZSIsImJhc2VTdHlsZSIsImZsZXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJvdXRsaW5lIiwidHJhbnNpdGlvbiIsImZvY3VzZWRTdHlsZSIsImFjY2VwdFN0eWxlIiwicmVqZWN0U3R5bGUiLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJwYXRoIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImlzRm9jdXNlZCIsImlzRHJhZ0FjY2VwdCIsImlzRHJhZ1JlamVjdCIsImFjY2VwdCIsIm1heEZpbGVzIiwic3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dropzone.js\n"));

/***/ })

});