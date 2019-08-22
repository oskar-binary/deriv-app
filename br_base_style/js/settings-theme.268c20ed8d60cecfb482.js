(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-theme"],{

/***/ "./App/Containers/SettingsModal/settings-theme.jsx":
/*!*********************************************************!*\
  !*** ./App/Containers/SettingsModal/settings-theme.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/Components/Elements/localize.jsx */ \"./App/Components/Elements/localize.jsx\");\n/* harmony import */ var Assets_SvgComponents_settings_img_theme_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Assets/SvgComponents/settings/img-theme-dark.svg */ \"./Assets/SvgComponents/settings/img-theme-dark.svg\");\n/* harmony import */ var Assets_SvgComponents_settings_img_theme_light_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Assets/SvgComponents/settings/img-theme-light.svg */ \"./Assets/SvgComponents/settings/img-theme-light.svg\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n\n\n\n\n\n\n\nvar ThemeSelectSettings = function ThemeSelectSettings(_ref) {\n  var is_dark_mode = _ref.is_dark_mode,\n      toggleDarkMode = _ref.toggleDarkMode,\n      updateBarrierColor = _ref.updateBarrierColor,\n      pushDataLayer = _ref.pushDataLayer;\n\n  var darkOnClick = function darkOnClick() {\n    if (!is_dark_mode) {\n      var new_dark_mode = toggleDarkMode();\n      updateBarrierColor(new_dark_mode);\n      pushDataLayer({\n        event: 'switch theme'\n      });\n    }\n  };\n\n  var lightOnClick = function lightOnClick() {\n    if (is_dark_mode) {\n      var new_dark_mode = toggleDarkMode();\n      updateBarrierColor(new_dark_mode);\n      pushDataLayer({\n        event: 'switch theme'\n      });\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"theme-select-settings\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h4\", {\n    className: \"theme-select-settings__title\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    i18n_default_text: \"Select theme\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"theme-select-settings__content\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: \"dt_settings_dark_button\",\n    className: \"theme-select-settings__option\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Assets_SvgComponents_settings_img_theme_dark_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('theme-select-settings__option__icon', {\n      'theme-select-settings__option__icon--active': is_dark_mode\n    }),\n    onClick: darkOnClick\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('theme-select-settings__option__title', {\n      'theme-select-settings__option__title--selected': is_dark_mode\n    })\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    i18n_default_text: \"Dark\"\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: \"dt_settings_light_button\",\n    className: \"theme-select-settings__option\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Assets_SvgComponents_settings_img_theme_light_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('theme-select-settings__option__icon', {\n      'theme-select-settings__option__icon--active': !is_dark_mode\n    }),\n    onClick: lightOnClick\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('theme-select-settings__option__title', {\n      'theme-select-settings__option__title--selected': !is_dark_mode\n    })\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    i18n_default_text: \"Light\"\n  }))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(function (_ref2) {\n  var ui = _ref2.ui,\n      modules = _ref2.modules,\n      gtm = _ref2.gtm;\n  return {\n    is_dark_mode: ui.is_dark_mode_on,\n    toggleDarkMode: ui.toggleDarkMode,\n    updateBarrierColor: modules.smart_chart.updateBarrierColor,\n    pushDataLayer: gtm.pushDataLayer\n  };\n})(ThemeSelectSettings));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXR0aW5nc01vZGFsL3NldHRpbmdzLXRoZW1lLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldHRpbmdzTW9kYWwvc2V0dGluZ3MtdGhlbWUuanN4PzgwYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvY2FsaXplIGZyb20gJ0FwcC9Db21wb25lbnRzL0VsZW1lbnRzL2xvY2FsaXplLmpzeCc7XG5pbXBvcnQgRGFya01vZGVJY29uIGZyb20gJ0Fzc2V0cy9TdmdDb21wb25lbnRzL3NldHRpbmdzL2ltZy10aGVtZS1kYXJrLnN2Zyc7XG5pbXBvcnQgTGlnaHRNb2RlSWNvbiBmcm9tICdBc3NldHMvU3ZnQ29tcG9uZW50cy9zZXR0aW5ncy9pbWctdGhlbWUtbGlnaHQuc3ZnJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5cbnZhciBUaGVtZVNlbGVjdFNldHRpbmdzID0gZnVuY3Rpb24gVGhlbWVTZWxlY3RTZXR0aW5ncyhfcmVmKSB7XG4gIHZhciBpc19kYXJrX21vZGUgPSBfcmVmLmlzX2RhcmtfbW9kZSxcbiAgICAgIHRvZ2dsZURhcmtNb2RlID0gX3JlZi50b2dnbGVEYXJrTW9kZSxcbiAgICAgIHVwZGF0ZUJhcnJpZXJDb2xvciA9IF9yZWYudXBkYXRlQmFycmllckNvbG9yLFxuICAgICAgcHVzaERhdGFMYXllciA9IF9yZWYucHVzaERhdGFMYXllcjtcblxuICB2YXIgZGFya09uQ2xpY2sgPSBmdW5jdGlvbiBkYXJrT25DbGljaygpIHtcbiAgICBpZiAoIWlzX2RhcmtfbW9kZSkge1xuICAgICAgdmFyIG5ld19kYXJrX21vZGUgPSB0b2dnbGVEYXJrTW9kZSgpO1xuICAgICAgdXBkYXRlQmFycmllckNvbG9yKG5ld19kYXJrX21vZGUpO1xuICAgICAgcHVzaERhdGFMYXllcih7XG4gICAgICAgIGV2ZW50OiAnc3dpdGNoIHRoZW1lJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBsaWdodE9uQ2xpY2sgPSBmdW5jdGlvbiBsaWdodE9uQ2xpY2soKSB7XG4gICAgaWYgKGlzX2RhcmtfbW9kZSkge1xuICAgICAgdmFyIG5ld19kYXJrX21vZGUgPSB0b2dnbGVEYXJrTW9kZSgpO1xuICAgICAgdXBkYXRlQmFycmllckNvbG9yKG5ld19kYXJrX21vZGUpO1xuICAgICAgcHVzaERhdGFMYXllcih7XG4gICAgICAgIGV2ZW50OiAnc3dpdGNoIHRoZW1lJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwidGhlbWUtc2VsZWN0LXNldHRpbmdzXCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIHtcbiAgICBjbGFzc05hbWU6IFwidGhlbWUtc2VsZWN0LXNldHRpbmdzX190aXRsZVwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYWxpemUsIHtcbiAgICBpMThuX2RlZmF1bHRfdGV4dDogXCJTZWxlY3QgdGhlbWVcIlxuICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ0aGVtZS1zZWxlY3Qtc2V0dGluZ3NfX2NvbnRlbnRcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogXCJkdF9zZXR0aW5nc19kYXJrX2J1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogXCJ0aGVtZS1zZWxlY3Qtc2V0dGluZ3NfX29wdGlvblwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGFya01vZGVJY29uLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCd0aGVtZS1zZWxlY3Qtc2V0dGluZ3NfX29wdGlvbl9faWNvbicsIHtcbiAgICAgICd0aGVtZS1zZWxlY3Qtc2V0dGluZ3NfX29wdGlvbl9faWNvbi0tYWN0aXZlJzogaXNfZGFya19tb2RlXG4gICAgfSksXG4gICAgb25DbGljazogZGFya09uQ2xpY2tcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3RoZW1lLXNlbGVjdC1zZXR0aW5nc19fb3B0aW9uX190aXRsZScsIHtcbiAgICAgICd0aGVtZS1zZWxlY3Qtc2V0dGluZ3NfX29wdGlvbl9fdGl0bGUtLXNlbGVjdGVkJzogaXNfZGFya19tb2RlXG4gICAgfSlcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhbGl6ZSwge1xuICAgIGkxOG5fZGVmYXVsdF90ZXh0OiBcIkRhcmtcIlxuICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogXCJkdF9zZXR0aW5nc19saWdodF9idXR0b25cIixcbiAgICBjbGFzc05hbWU6IFwidGhlbWUtc2VsZWN0LXNldHRpbmdzX19vcHRpb25cIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpZ2h0TW9kZUljb24sIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3RoZW1lLXNlbGVjdC1zZXR0aW5nc19fb3B0aW9uX19pY29uJywge1xuICAgICAgJ3RoZW1lLXNlbGVjdC1zZXR0aW5nc19fb3B0aW9uX19pY29uLS1hY3RpdmUnOiAhaXNfZGFya19tb2RlXG4gICAgfSksXG4gICAgb25DbGljazogbGlnaHRPbkNsaWNrXG4gIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCd0aGVtZS1zZWxlY3Qtc2V0dGluZ3NfX29wdGlvbl9fdGl0bGUnLCB7XG4gICAgICAndGhlbWUtc2VsZWN0LXNldHRpbmdzX19vcHRpb25fX3RpdGxlLS1zZWxlY3RlZCc6ICFpc19kYXJrX21vZGVcbiAgICB9KVxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExvY2FsaXplLCB7XG4gICAgaTE4bl9kZWZhdWx0X3RleHQ6IFwiTGlnaHRcIlxuICB9KSkpKSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIHVpID0gX3JlZjIudWksXG4gICAgICBtb2R1bGVzID0gX3JlZjIubW9kdWxlcyxcbiAgICAgIGd0bSA9IF9yZWYyLmd0bTtcbiAgcmV0dXJuIHtcbiAgICBpc19kYXJrX21vZGU6IHVpLmlzX2RhcmtfbW9kZV9vbixcbiAgICB0b2dnbGVEYXJrTW9kZTogdWkudG9nZ2xlRGFya01vZGUsXG4gICAgdXBkYXRlQmFycmllckNvbG9yOiBtb2R1bGVzLnNtYXJ0X2NoYXJ0LnVwZGF0ZUJhcnJpZXJDb2xvcixcbiAgICBwdXNoRGF0YUxheWVyOiBndG0ucHVzaERhdGFMYXllclxuICB9O1xufSkoVGhlbWVTZWxlY3RTZXR0aW5ncyk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/SettingsModal/settings-theme.jsx\n");

/***/ }),

/***/ "./Assets/SvgComponents/settings/img-theme-dark.svg":
/*!**********************************************************!*\
  !*** ./Assets/SvgComponents/settings/img-theme-dark.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var _ref$styles = _ref.styles,\n      styles = _ref$styles === void 0 ? {} : _ref$styles,\n      props = _objectWithoutProperties(_ref, [\"styles\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", _extends({\n    width: \"236\",\n    height: \"180\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"defs\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    id: \"a\",\n    d: \"M0 0h236v180H0z\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n    x1: \"50%\",\n    y1: \"147.77%\",\n    x2: \"50%\",\n    y2: \"10.76%\",\n    id: \"c\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", {\n    stopColor: \"#101320\",\n    stopOpacity: \"0\",\n    offset: \"0%\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", {\n    stopColor: \"#FFF\",\n    stopOpacity: \".16\",\n    offset: \"100%\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n    fill: \"none\",\n    fillRule: \"evenodd\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"mask\", {\n    id: \"b\",\n    fill: \"#fff\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"use\", {\n    xlinkHref: \"#a\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"use\", {\n    fill: \"#101320\",\n    xlinkHref: \"#a\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M155.5 123H61v57h-1v-57H0v-1h60V32H0v-1h60V0h1v31h94.5V0h1v31H236v1h-79.5v90H236v1h-79.5v57h-1v-57zm0-1V32H61v90h94.5z\",\n    fill: \"#191C31\",\n    fillRule: \"nonzero\",\n    mask: \"url(#b)\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"url(#c)\",\n    mask: \"url(#b)\",\n    d: \"M156 96l-6.5 6.5-5 32-3-15-2-75-2-15-16-14-9 15-14 14h-11l-5 15-2-30-3 30h-4l-5 30-2-15-12-15-2-14-23 14-4 15-3-29-9 44H0V180h156z\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M149 102.42a.5.5 0 0 1 .15-.27l6.5-6.5a.5.5 0 1 1 .7.7l-6.38 6.39-4.98 31.84c-.08.55-.87.57-.98.02L141 119.5l-2-74.94-1.97-14.82-15.4-13.48-8.7 14.49-.08.1-14 14a.5.5 0 0 1-.35.14H87.86l-4.89 14.66c-.17.52-.93.42-.97-.13l-1.6-24L78 59.54a.5.5 0 0 1-.5.45h-3.58L69 89.58c-.1.57-.91.56-.99-.01L66.02 74.7 54.11 59.81a.5.5 0 0 1-.1-.24l-1.9-13.25-22.18 13.5-3.95 14.8c-.14.55-.92.48-.98-.07L22.34 48.8 13.99 89.6a.5.5 0 0 1-.49.4H0v-1h13.1L22 45.4c.11-.56.93-.52.99.05l2.72 26.3 3.3-12.38a.5.5 0 0 1 .22-.3l23-14a.5.5 0 0 1 .75.36l1.98 13.86L66.9 74.2a.5.5 0 0 1 .1.24l1.57 11.7L73 59.42a.5.5 0 0 1 .49-.42h3.55L80 29.45c.06-.61.96-.6 1 .02l1.83 27.46 4.2-12.59a.5.5 0 0 1 .47-.34h10.8l13.8-13.81 8.97-14.95a.5.5 0 0 1 .76-.12l16 14a.5.5 0 0 1 .17.31l2 15.06 1.99 74.91 2.45 12.25 4.57-29.23z\",\n    fill: \"#FFF\",\n    fillRule: \"nonzero\",\n    mask: \"url(#b)\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M158.96 95.5H163v1h-4.04a3 3 0 1 1 0-1zm36.46 1H191v-1h4.42L205 84h31v24h-31l-9.58-11.5zm-12.42-1h4v1h-4v-1zm-8 0h4v1h-4v-1zm-8 0h4v1h-4v-1z\",\n    fill: \"#F93\",\n    fillRule: \"nonzero\",\n    mask: \"url(#b)\"\n  })));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Bc3NldHMvU3ZnQ29tcG9uZW50cy9zZXR0aW5ncy9pbWctdGhlbWUtZGFyay5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvU3ZnQ29tcG9uZW50cy9zZXR0aW5ncy9pbWctdGhlbWUtZGFyay5zdmc/NjA2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKHtcbiAgc3R5bGVzID0ge30sXG4gIC4uLnByb3BzXG59KSA9PiA8c3ZnIHdpZHRoPVwiMjM2XCIgaGVpZ2h0PVwiMTgwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgey4uLnByb3BzfT48ZGVmcz48cGF0aCBpZD1cImFcIiBkPVwiTTAgMGgyMzZ2MTgwSDB6XCIgLz48bGluZWFyR3JhZGllbnQgeDE9XCI1MCVcIiB5MT1cIjE0Ny43NyVcIiB4Mj1cIjUwJVwiIHkyPVwiMTAuNzYlXCIgaWQ9XCJjXCI+PHN0b3Agc3RvcENvbG9yPVwiIzEwMTMyMFwiIHN0b3BPcGFjaXR5PVwiMFwiIG9mZnNldD1cIjAlXCIgLz48c3RvcCBzdG9wQ29sb3I9XCIjRkZGXCIgc3RvcE9wYWNpdHk9XCIuMTZcIiBvZmZzZXQ9XCIxMDAlXCIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPjxtYXNrIGlkPVwiYlwiIGZpbGw9XCIjZmZmXCI+PHVzZSB4bGlua0hyZWY9XCIjYVwiIC8+PC9tYXNrPjx1c2UgZmlsbD1cIiMxMDEzMjBcIiB4bGlua0hyZWY9XCIjYVwiIC8+PHBhdGggZD1cIk0xNTUuNSAxMjNINjF2NTdoLTF2LTU3SDB2LTFoNjBWMzJIMHYtMWg2MFYwaDF2MzFoOTQuNVYwaDF2MzFIMjM2djFoLTc5LjV2OTBIMjM2djFoLTc5LjV2NTdoLTF2LTU3em0wLTFWMzJINjF2OTBoOTQuNXpcIiBmaWxsPVwiIzE5MUMzMVwiIGZpbGxSdWxlPVwibm9uemVyb1wiIG1hc2s9XCJ1cmwoI2IpXCIgLz48cGF0aCBmaWxsPVwidXJsKCNjKVwiIG1hc2s9XCJ1cmwoI2IpXCIgZD1cIk0xNTYgOTZsLTYuNSA2LjUtNSAzMi0zLTE1LTItNzUtMi0xNS0xNi0xNC05IDE1LTE0IDE0aC0xMWwtNSAxNS0yLTMwLTMgMzBoLTRsLTUgMzAtMi0xNS0xMi0xNS0yLTE0LTIzIDE0LTQgMTUtMy0yOS05IDQ0SDBWMTgwaDE1NnpcIiAvPjxwYXRoIGQ9XCJNMTQ5IDEwMi40MmEuNS41IDAgMCAxIC4xNS0uMjdsNi41LTYuNWEuNS41IDAgMSAxIC43LjdsLTYuMzggNi4zOS00Ljk4IDMxLjg0Yy0uMDguNTUtLjg3LjU3LS45OC4wMkwxNDEgMTE5LjVsLTItNzQuOTQtMS45Ny0xNC44Mi0xNS40LTEzLjQ4LTguNyAxNC40OS0uMDguMS0xNCAxNGEuNS41IDAgMCAxLS4zNS4xNEg4Ny44NmwtNC44OSAxNC42NmMtLjE3LjUyLS45My40Mi0uOTctLjEzbC0xLjYtMjRMNzggNTkuNTRhLjUuNSAwIDAgMS0uNS40NWgtMy41OEw2OSA4OS41OGMtLjEuNTctLjkxLjU2LS45OS0uMDFMNjYuMDIgNzQuNyA1NC4xMSA1OS44MWEuNS41IDAgMCAxLS4xLS4yNGwtMS45LTEzLjI1LTIyLjE4IDEzLjUtMy45NSAxNC44Yy0uMTQuNTUtLjkyLjQ4LS45OC0uMDdMMjIuMzQgNDguOCAxMy45OSA4OS42YS41LjUgMCAwIDEtLjQ5LjRIMHYtMWgxMy4xTDIyIDQ1LjRjLjExLS41Ni45My0uNTIuOTkuMDVsMi43MiAyNi4zIDMuMy0xMi4zOGEuNS41IDAgMCAxIC4yMi0uM2wyMy0xNGEuNS41IDAgMCAxIC43NS4zNmwxLjk4IDEzLjg2TDY2LjkgNzQuMmEuNS41IDAgMCAxIC4xLjI0bDEuNTcgMTEuN0w3MyA1OS40MmEuNS41IDAgMCAxIC40OS0uNDJoMy41NUw4MCAyOS40NWMuMDYtLjYxLjk2LS42IDEgLjAybDEuODMgMjcuNDYgNC4yLTEyLjU5YS41LjUgMCAwIDEgLjQ3LS4zNGgxMC44bDEzLjgtMTMuODEgOC45Ny0xNC45NWEuNS41IDAgMCAxIC43Ni0uMTJsMTYgMTRhLjUuNSAwIDAgMSAuMTcuMzFsMiAxNS4wNiAxLjk5IDc0LjkxIDIuNDUgMTIuMjUgNC41Ny0yOS4yM3pcIiBmaWxsPVwiI0ZGRlwiIGZpbGxSdWxlPVwibm9uemVyb1wiIG1hc2s9XCJ1cmwoI2IpXCIgLz48cGF0aCBkPVwiTTE1OC45NiA5NS41SDE2M3YxaC00LjA0YTMgMyAwIDEgMSAwLTF6bTM2LjQ2IDFIMTkxdi0xaDQuNDJMMjA1IDg0aDMxdjI0aC0zMWwtOS41OC0xMS41em0tMTIuNDItMWg0djFoLTR2LTF6bS04IDBoNHYxaC00di0xem0tOCAwaDR2MWgtNHYtMXpcIiBmaWxsPVwiI0Y5M1wiIGZpbGxSdWxlPVwibm9uemVyb1wiIG1hc2s9XCJ1cmwoI2IpXCIgLz48L2c+PC9zdmc+KTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Assets/SvgComponents/settings/img-theme-dark.svg\n");

/***/ }),

/***/ "./Assets/SvgComponents/settings/img-theme-light.svg":
/*!***********************************************************!*\
  !*** ./Assets/SvgComponents/settings/img-theme-light.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var _ref$styles = _ref.styles,\n      styles = _ref$styles === void 0 ? {} : _ref$styles,\n      props = _objectWithoutProperties(_ref, [\"styles\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", _extends({\n    width: \"236\",\n    height: \"180\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"defs\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    id: \"a\",\n    d: \"M0 0h236v180H0z\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n    x1: \"50%\",\n    y1: \"126.02%\",\n    x2: \"50%\",\n    y2: \"32.91%\",\n    id: \"c\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", {\n    stopColor: \"#FFF\",\n    stopOpacity: \"0\",\n    offset: \"0%\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", {\n    stopColor: \"#999CAC\",\n    stopOpacity: \".16\",\n    offset: \"100%\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n    fill: \"none\",\n    fillRule: \"evenodd\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"mask\", {\n    id: \"b\",\n    fill: \"#fff\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"use\", {\n    xlinkHref: \"#a\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"use\", {\n    fill: \"#FFF\",\n    xlinkHref: \"#a\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M155.5 123H61v57h-1v-57H0v-1h60V32H0v-1h60V0h1v31h94.5V0h1v31H236v1h-79.5v90H236v1h-79.5v57h-1v-57zm0-1V32H61v90h94.5z\",\n    fill: \"#F4F4F6\",\n    fillRule: \"nonzero\",\n    mask: \"url(#b)\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"url(#c)\",\n    mask: \"url(#b)\",\n    d: \"M156 96l-6.5 6.5-5 32-3-15-2-75-2-15-16-14-9 15-14 14h-11l-5 15-2-30-3 30h-4l-5 30-2-15-12-15-2-14-23 14-4 15-3-29-9 44H0V180h156z\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M149 102.42a.5.5 0 0 1 .15-.27l6.5-6.5a.5.5 0 1 1 .7.7l-6.38 6.39-4.98 31.84c-.08.55-.87.57-.98.02L141 119.5l-2-74.94-1.97-14.82-15.4-13.48-8.7 14.49-.08.1-14 14a.5.5 0 0 1-.35.14H87.86l-4.89 14.66c-.17.52-.93.42-.97-.13l-1.6-24L78 59.54a.5.5 0 0 1-.5.45h-3.58L69 89.58c-.1.57-.91.56-.99-.01L66.02 74.7 54.11 59.81a.5.5 0 0 1-.1-.24l-1.9-13.25-22.18 13.5-3.95 14.8c-.14.55-.92.48-.98-.07L22.34 48.8 13.99 89.6a.5.5 0 0 1-.49.4H0v-1h13.1L22 45.4c.11-.56.93-.52.99.05l2.72 26.3 3.3-12.38a.5.5 0 0 1 .22-.3l23-14a.5.5 0 0 1 .75.36l1.98 13.86L66.9 74.2a.5.5 0 0 1 .1.24l1.57 11.7L73 59.42a.5.5 0 0 1 .49-.42h3.55L80 29.45c.06-.61.96-.6 1 .02l1.83 27.46 4.2-12.59a.5.5 0 0 1 .47-.34h10.8l13.8-13.81 8.97-14.95a.5.5 0 0 1 .76-.12l16 14a.5.5 0 0 1 .17.31l2 15.06 1.99 74.91 2.45 12.25 4.57-29.23z\",\n    fill: \"#999CAC\",\n    fillRule: \"nonzero\",\n    mask: \"url(#b)\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M158.96 95.5H163v1h-4.04a3 3 0 1 1 0-1zm36.46 1H191v-1h4.42L205 84h31v24h-31l-9.58-11.5zm-12.42-1h4v1h-4v-1zm-8 0h4v1h-4v-1zm-8 0h4v1h-4v-1z\",\n    fill: \"#F93\",\n    fillRule: \"nonzero\",\n    mask: \"url(#b)\"\n  })));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Bc3NldHMvU3ZnQ29tcG9uZW50cy9zZXR0aW5ncy9pbWctdGhlbWUtbGlnaHQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXNzZXRzL1N2Z0NvbXBvbmVudHMvc2V0dGluZ3MvaW1nLXRoZW1lLWxpZ2h0LnN2Zz84NTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0ICgoe1xuICBzdHlsZXMgPSB7fSxcbiAgLi4ucHJvcHNcbn0pID0+IDxzdmcgd2lkdGg9XCIyMzZcIiBoZWlnaHQ9XCIxODBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB7Li4ucHJvcHN9PjxkZWZzPjxwYXRoIGlkPVwiYVwiIGQ9XCJNMCAwaDIzNnYxODBIMHpcIiAvPjxsaW5lYXJHcmFkaWVudCB4MT1cIjUwJVwiIHkxPVwiMTI2LjAyJVwiIHgyPVwiNTAlXCIgeTI9XCIzMi45MSVcIiBpZD1cImNcIj48c3RvcCBzdG9wQ29sb3I9XCIjRkZGXCIgc3RvcE9wYWNpdHk9XCIwXCIgb2Zmc2V0PVwiMCVcIiAvPjxzdG9wIHN0b3BDb2xvcj1cIiM5OTlDQUNcIiBzdG9wT3BhY2l0eT1cIi4xNlwiIG9mZnNldD1cIjEwMCVcIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+PG1hc2sgaWQ9XCJiXCIgZmlsbD1cIiNmZmZcIj48dXNlIHhsaW5rSHJlZj1cIiNhXCIgLz48L21hc2s+PHVzZSBmaWxsPVwiI0ZGRlwiIHhsaW5rSHJlZj1cIiNhXCIgLz48cGF0aCBkPVwiTTE1NS41IDEyM0g2MXY1N2gtMXYtNTdIMHYtMWg2MFYzMkgwdi0xaDYwVjBoMXYzMWg5NC41VjBoMXYzMUgyMzZ2MWgtNzkuNXY5MEgyMzZ2MWgtNzkuNXY1N2gtMXYtNTd6bTAtMVYzMkg2MXY5MGg5NC41elwiIGZpbGw9XCIjRjRGNEY2XCIgZmlsbFJ1bGU9XCJub256ZXJvXCIgbWFzaz1cInVybCgjYilcIiAvPjxwYXRoIGZpbGw9XCJ1cmwoI2MpXCIgbWFzaz1cInVybCgjYilcIiBkPVwiTTE1NiA5NmwtNi41IDYuNS01IDMyLTMtMTUtMi03NS0yLTE1LTE2LTE0LTkgMTUtMTQgMTRoLTExbC01IDE1LTItMzAtMyAzMGgtNGwtNSAzMC0yLTE1LTEyLTE1LTItMTQtMjMgMTQtNCAxNS0zLTI5LTkgNDRIMFYxODBoMTU2elwiIC8+PHBhdGggZD1cIk0xNDkgMTAyLjQyYS41LjUgMCAwIDEgLjE1LS4yN2w2LjUtNi41YS41LjUgMCAxIDEgLjcuN2wtNi4zOCA2LjM5LTQuOTggMzEuODRjLS4wOC41NS0uODcuNTctLjk4LjAyTDE0MSAxMTkuNWwtMi03NC45NC0xLjk3LTE0LjgyLTE1LjQtMTMuNDgtOC43IDE0LjQ5LS4wOC4xLTE0IDE0YS41LjUgMCAwIDEtLjM1LjE0SDg3Ljg2bC00Ljg5IDE0LjY2Yy0uMTcuNTItLjkzLjQyLS45Ny0uMTNsLTEuNi0yNEw3OCA1OS41NGEuNS41IDAgMCAxLS41LjQ1aC0zLjU4TDY5IDg5LjU4Yy0uMS41Ny0uOTEuNTYtLjk5LS4wMUw2Ni4wMiA3NC43IDU0LjExIDU5LjgxYS41LjUgMCAwIDEtLjEtLjI0bC0xLjktMTMuMjUtMjIuMTggMTMuNS0zLjk1IDE0LjhjLS4xNC41NS0uOTIuNDgtLjk4LS4wN0wyMi4zNCA0OC44IDEzLjk5IDg5LjZhLjUuNSAwIDAgMS0uNDkuNEgwdi0xaDEzLjFMMjIgNDUuNGMuMTEtLjU2LjkzLS41Mi45OS4wNWwyLjcyIDI2LjMgMy4zLTEyLjM4YS41LjUgMCAwIDEgLjIyLS4zbDIzLTE0YS41LjUgMCAwIDEgLjc1LjM2bDEuOTggMTMuODZMNjYuOSA3NC4yYS41LjUgMCAwIDEgLjEuMjRsMS41NyAxMS43TDczIDU5LjQyYS41LjUgMCAwIDEgLjQ5LS40MmgzLjU1TDgwIDI5LjQ1Yy4wNi0uNjEuOTYtLjYgMSAuMDJsMS44MyAyNy40NiA0LjItMTIuNTlhLjUuNSAwIDAgMSAuNDctLjM0aDEwLjhsMTMuOC0xMy44MSA4Ljk3LTE0Ljk1YS41LjUgMCAwIDEgLjc2LS4xMmwxNiAxNGEuNS41IDAgMCAxIC4xNy4zMWwyIDE1LjA2IDEuOTkgNzQuOTEgMi40NSAxMi4yNSA0LjU3LTI5LjIzelwiIGZpbGw9XCIjOTk5Q0FDXCIgZmlsbFJ1bGU9XCJub256ZXJvXCIgbWFzaz1cInVybCgjYilcIiAvPjxwYXRoIGQ9XCJNMTU4Ljk2IDk1LjVIMTYzdjFoLTQuMDRhMyAzIDAgMSAxIDAtMXptMzYuNDYgMUgxOTF2LTFoNC40MkwyMDUgODRoMzF2MjRoLTMxbC05LjU4LTExLjV6bS0xMi40Mi0xaDR2MWgtNHYtMXptLTggMGg0djFoLTR2LTF6bS04IDBoNHYxaC00di0xelwiIGZpbGw9XCIjRjkzXCIgZmlsbFJ1bGU9XCJub256ZXJvXCIgbWFzaz1cInVybCgjYilcIiAvPjwvZz48L3N2Zz4pOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Assets/SvgComponents/settings/img-theme-light.svg\n");

/***/ })

}]);