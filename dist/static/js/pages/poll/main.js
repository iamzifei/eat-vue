global.webpackJsonp([1],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_acd0e878_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(301);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(289)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_acd0e878_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/poll/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acd0e878", Component.options)
  } else {
    hotAPI.reload("data-v-acd0e878", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(196);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
});

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getComponentByTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractComponentId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__);




// 从事件对象中解析得到 componentId
// 需要在元素上声明 data-component-id
var getComponentByTag = function getComponentByTag(parent, tag) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(parent.$children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var c = _step.value;

      if (c.$options._componentTag === tag) {
        return c;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var extractComponentId = function extractComponentId() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = event.currentTarget || {},
      componentId = _ref.dataset.componentId;

  return componentId;
};

/*
  注：默认合并所有生命周期函数
  配置合并指定的生命周期 or 忽略指定字段
  const extend = extendCreator({
    life: ['onLoad', 'onPullDownRefresh'],
    exclude: ['binder']
  });
   Page(extend({}, {
    onLoad() {},
    ...
  }));
*/

var LIFE_CYCLE = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll'];

var extendCreator = function extendCreator() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$life = config.life,
      life = _config$life === undefined ? LIFE_CYCLE : _config$life,
      _config$exclude = config.exclude,
      exclude = _config$exclude === undefined ? [] : _config$exclude;


  var excludeList = exclude.concat(LIFE_CYCLE.map(getFuncArrayName));

  if (!Array.isArray(life) || !Array.isArray(exclude)) throw new Error('Invalid Extend Config');
  var lifeCycleList = life.filter(function (item) {
    return LIFE_CYCLE.indexOf(item) >= 0;
  });
  return function extend(target) {
    for (var _len = arguments.length, objList = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objList[_key - 1] = arguments[_key];
    }

    objList.forEach(function (source) {
      if (source) {
        var keys = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(source);
        keys.forEach(function (key) {
          var value = source[key];
          if (excludeList.indexOf(key) >= 0) return;
          if (lifeCycleList.indexOf(key) >= 0 && typeof value === 'function') {
            var funcArrayName = getFuncArrayName(key);
            if (!target[funcArrayName]) {
              target[funcArrayName] = [];
              if (target[key]) {
                target[funcArrayName].push(target[key]);
              }
              target[key] = function () {
                var _this = this;

                for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  rest[_key2] = arguments[_key2];
                }

                target[funcArrayName].forEach(function (func) {
                  return func.apply(_this, rest);
                });
              };
            }

            if (source[funcArrayName]) {
              var _target$funcArrayName;

              // 经过生命周期合并的组件直接整合函数列表
              (_target$funcArrayName = target[funcArrayName]).push.apply(_target$funcArrayName, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(source[funcArrayName]));
            } else {
              // 添加生命周期函数进入函数列表
              target[funcArrayName].push(value);
            }
          } else {
            target[key] = value;
          }
        });
      }
    });
    return target;
  };
};

var getFuncArrayName = function getFuncArrayName(name) {
  return '__$' + name;
};

/* unused harmony default export */ var _unused_webpack_default_export = ({
  extractComponentId: extractComponentId,
  extend: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default.a,
  extendCreator: extendCreator
});

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['content', 'meta']
});

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(205);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var _maohao = ':';
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: {
      type: String,
      default: ''
    },
    componentId: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: []
    },
    checkedValue: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: '#ff4444'
    }
  },

  data: function data() {
    return {};
  },

  computed: {
    maohao: function maohao() {
      return _maohao;
    },
    getColor: function getColor() {
      return this.activeColor || '#ff4444';
    }
  },
  methods: {
    _handleZanSelectChange: function _handleZanSelectChange(e) {
      this.handle(e);
    },
    handle: function handle(e) {
      var componentId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* extractComponentId */])(e);
      var value = e.target.value;
      this.callback(componentId, value);
    },
    callback: function callback(componentId, value) {
      var e = { componentId: componentId, value: value };
      console.info('[zan:Select:change]', e);
      this.$emit('handleZanSelectChange', e);
    }
  }
});

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_select__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_poll__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_int__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_random_int__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    poll: __WEBPACK_IMPORTED_MODULE_1__components_poll__["a" /* default */],
    ZanSelect: __WEBPACK_IMPORTED_MODULE_0__components_select__["a" /* default */]
  },

  data: function data() {
    return {
      loading: false,
      polls: [],
      checked: -1,
      dishes: [{
        padding: 0,
        image: '/static/images/rice.png',
        name: '天同生煎',
        value: 'rice',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/noodles.png',
        name: '小笼包',
        value: 'noodle',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/soup.png',
        name: '水煮鱼',
        value: 'soup',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/flour.png',
        name: '糖醋小排',
        value: 'flour',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/foreign.png',
        name: '口水鸡',
        value: 'foreign',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/foreign.png',
        name: '红油抄手',
        value: ' sdjadkjksad',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/foreign.png',
        name: '红烧肉',
        value: 'fdaklklklasd',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/foreign.png',
        name: '咸蛋黄肉蟹',
        value: 'aklklaskdlkal',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/foreign.png',
        name: '干煸四季豆',
        value: 'alklklasd',
        url: ''
      }, {
        padding: 0,
        image: '/static/images/foreign.png',
        name: '锅贴',
        value: 'asjkjkaskjdkajk',
        url: ''
      }]
    };
  },
  created: function created() {
    this.loading = true;
    // generate 5 random number and put in polls
    var dishesCount = this.dishes.length - 1;
    while (this.polls.length < 5) {
      var randomnumber = __WEBPACK_IMPORTED_MODULE_2_random_int___default()(dishesCount);
      if (this.polls.indexOf(this.dishes[randomnumber]) > -1) continue;
      this.polls[this.polls.length] = this.dishes[randomnumber];
    }
    console.log(this.polls);
  },


  methods: {
    handleZanSelectChange: function handleZanSelectChange(_ref) {
      var componentId = _ref.componentId,
          value = _ref.value;

      this.checked = value;
      console.log(value);
    },
    formSubmit: function formSubmit(event) {
      console.log('[zan:field:submit]', event.target.value);
    }
  }
});

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_poll_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05302fd1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_poll_vue__ = __webpack_require__(295);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(282)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_poll_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05302fd1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_poll_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/poll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] poll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05302fd1", Component.options)
  } else {
    hotAPI.reload("data-v-05302fd1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73fc900e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(299);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(287)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73fc900e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_select_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73fc900e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73fc900e", Component.options)
  } else {
    hotAPI.reload("data-v-73fc900e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-cell"
  }, [_c('div', {
    staticClass: "zan-cell__icon zan-icon zan-icon-checked",
    staticStyle: {
      "color": "#38f"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "zan-cell__bd"
  }, [_vm._v(_vm._s(_vm.content))]), _vm._v(" "), _c('div', {
    staticClass: "zan-cell__ft"
  }, [_vm._v(_vm._s(_vm.meta))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05302fd1", esExports)
  }
}

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('radio-group', {
    staticClass: "zan-select__list",
    attrs: {
      "name": _vm.name || _vm.componentId || '',
      "data-component-id": _vm.componentId,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm._handleZanSelectChange
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('label', {
      key: index
    }, [_c('div', {
      staticClass: "zan-cell"
    }, [_c('radio', {
      staticClass: "zan-select__radio",
      attrs: {
        "value": item.value,
        "checked": item.value === _vm.checkedValue
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "zan-cell__bd",
      style: ('padding-left' + _vm.maohao + item.padding + 'px;' +
        'color' + _vm.maohao + ((item.value === _vm.checkedValue) && (_vm.activeColor || '#ff4444')) + ';')
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), (item.value === _vm.checkedValue) ? _c('div', {
      staticClass: "zan-cell__ft"
    }, [_c('icon', {
      attrs: {
        "type": "success_no_circle",
        "color": _vm.getColor,
        "size": "14"
      }
    })], 1) : _vm._e()], 1)])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73fc900e", esExports)
  }
}

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("请推荐一个菜...")]), _vm._v(" "), _c('form', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('zan-select', _vm._b({
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "handleZanSelectChange": _vm.handleZanSelectChange
    }
  }, 'zan-select', {
    items: _vm.polls,
    checkedValue: _vm.checked,
    name: 'formtest',
    componentId: 'form'
  }, false)), _vm._v(" "), _c('div', {
    staticClass: "button_section"
  }, [_c('button', {
    staticClass: "zan-btn zan-btn--danger",
    attrs: {
      "disabled": _vm.checked === -1,
      "formType": "submit"
    }
  }, [_vm._v("选好了")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-acd0e878", esExports)
  }
}

/***/ })

},[204]);
//# sourceMappingURL=main.js.map