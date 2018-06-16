global.webpackJsonp([7],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dfcbfe38_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(303);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(291)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dfcbfe38_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dfcbfe38", Component.options)
  } else {
    hotAPI.reload("data-v-dfcbfe38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(192);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
});

/***/ }),

/***/ 213:
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
  data: function data() {
    return {
      swiperMargin: '16rpx',
      displayMultipleItems: 3,
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 900,
      circular: false,
      selectedBase: '',
      loading: false,
      bases: [{
        url: '/static/images/rice.png',
        label: '米饭',
        key: 'rice'
      }, {
        url: '/static/images/noodles.png',
        label: '面类',
        key: 'noodle'
      }, {
        url: '/static/images/soup.png',
        label: '汤汤水水',
        key: 'soup'
      }, {
        url: '/static/images/flour.png',
        label: '面点',
        key: 'flour'
      }, {
        url: '/static/images/foreign.png',
        label: '外国菜',
        key: 'foreign'
      }]
    };
  },

  methods: {
    choose: function choose(selected) {
      this.selectedBase = selected;
    },
    submit: function submit() {
      this.loading = true;
      // 绑定添加书目的提交按钮点击事件，向服务器发送数据
      // let baseName = this.selectedBase // 缓存在 data 对象中的输入框输入的书名
      // let tableID = '34407' // 从知晓云后台的数据表中获取到的对应数据表的 ID
      // let Polls = new wx.BaaS.TableObject(tableID) // 实例化对应 tableID 的数据表对象
      // let poll = Polls.create() // 创建一条记录

      // 调用创建数据项接口，进行数据的持久化存储，详见：https://doc.minapp.com/js-sdk/schema/create-record.html
      // poll.set({base: baseName})
      //   .save()
      //   .then(() => {
      //     this.loading = false
      //     wx.navigateTo({ url: '../poll/main' })
      //   })
      //   .catch(() => {
      //     this.loading = false
      //   })
      this.loading = false;
      wx.navigateTo({ url: '../poll/main' });
    },
    swiperChange: function swiperChange(e) {
      // console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
    },
    animationfinish: function animationfinish(e) {
      // console.log('第' + e.mp.detail.current + '张轮播图滑动结束')
    }
  }
});

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('image', {
    staticClass: "logo",
    attrs: {
      "src": "/static/images/wechat-logo-no-bg.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "paper"
  }, [_c('div', {
    staticClass: "paper_title"
  }, [_vm._v("佛系青年想吃...")]), _vm._v(" "), _c('div', {
    staticClass: "paper_swiper"
  }, [_c('swiper', {
    attrs: {
      "display-multiple-items": _vm.displayMultipleItems,
      "next-margin": _vm.swiperMargin,
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "circular": _vm.circular,
      "eventid": '1'
    },
    on: {
      "change": _vm.swiperChange,
      "animationfinish": _vm.animationfinish
    }
  }, _vm._l((_vm.bases), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('div', {
      class: ['base', 'base-' + index, {
        active: item.key === _vm.selectedBase
      }],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.choose(item.key)
        }
      }
    }, [_c('image', {
      staticClass: "slide_image",
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "base_text"
    }, [_vm._v(_vm._s(item.label))])])])], 1)
  }))], 1)]), _vm._v(" "), _c('div', [_c('button', {
    class: ['zan-btn zan-btn--danger', {
      hide: _vm.selectedBase === '',
      'zan-btn--loading': _vm.loading
    }],
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("帮我选菜")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dfcbfe38", esExports)
  }
}

/***/ })

},[200]);
//# sourceMappingURL=main.js.map