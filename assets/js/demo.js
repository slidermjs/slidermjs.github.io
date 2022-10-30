(()=>{var __webpack_modules__={"./js/demo.js":
/*!********************!*\
  !*** ./js/demo.js ***!
  \********************/function(){eval("var _this = this;\n/* eslint-disable no-undef */\nvar demo = function demo() {\n  if (!document.querySelector('.demo-wrapper')) {\n    return;\n  }\n  var debounce = function debounce(func, delay) {\n    var timer = null;\n    return function () {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      var self = _this;\n      clearTimeout(timer);\n      timer = setTimeout(function () {\n        func.apply(self, args);\n      }, delay);\n    };\n  };\n  var sliderm = null;\n  var intializeSlider = function intializeSlider() {\n    var pagination = document.querySelector('#option__pagination--value').innerHTML === 'true';\n    var arrow = document.querySelector('#option__arrow--value').innerHTML === 'true';\n    var align = document.querySelector('#option__align--value').innerHTML;\n    var previewEdge = Number(document.querySelector('#option__edge--value').innerHTML);\n    var preview = document.querySelector('#option__preview--value').innerHTML === 'true';\n    var grouping = document.querySelector('#option__grouping--value').innerHTML === 'true';\n    var spacing = Number(document.querySelector('#option__spacing--value').innerHTML);\n    var loop = document.querySelector('#option__loop--value').innerHTML === 'true';\n    var duration = Number(document.querySelector('#option__duration--value').innerHTML);\n    var columns = Number(document.querySelector('#option__columns--value').innerHTML);\n    var config = {\n      columns: columns,\n      duration: duration,\n      loop: loop,\n      spacing: spacing,\n      grouping: grouping,\n      preview: preview,\n      _preview: {\n        edge: previewEdge\n      },\n      align: align,\n      arrow: arrow,\n      pagination: pagination\n    };\n    if (sliderm) {\n      sliderm.destory();\n    }\n    sliderm = new Sliderm('#demo-slider', config);\n  };\n  var resetSlider = debounce(function () {\n    intializeSlider();\n  }, 2000);\n  var options = {\n    columns: function columns() {\n      var dom = document.querySelector('#option__columns');\n      noUiSlider.create(dom, {\n        start: [4],\n        connect: 'lower',\n        step: 1,\n        range: {\n          min: 1,\n          max: 4\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        document.querySelector('#option__columns--value').innerHTML = Number(values[handle]);\n        resetSlider();\n      });\n    },\n    duration: function duration() {\n      var dom = document.querySelector('#option__duration');\n      noUiSlider.create(dom, {\n        start: [1000],\n        connect: 'lower',\n        step: 100,\n        range: {\n          min: 1000,\n          max: 10000\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        document.querySelector('#option__duration--value').innerHTML = Number(values[handle]);\n        resetSlider();\n      });\n    },\n    loop: function loop() {\n      var dom = document.querySelector('#option__loop');\n      noUiSlider.create(dom, {\n        start: 1,\n        range: {\n          min: [0, 1],\n          max: 1\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        var value = Number(values[handle]);\n        if (value === 1) {\n          dom.classList.remove('off');\n          dom.classList.add('on');\n          document.querySelector('#option__loop--value').innerHTML = 'true';\n        } else {\n          dom.classList.remove('on');\n          dom.classList.add('off');\n          document.querySelector('#option__loop--value').innerHTML = 'false';\n        }\n        resetSlider();\n      });\n    },\n    spacing: function spacing() {\n      var dom = document.querySelector('#option__spacing');\n      noUiSlider.create(dom, {\n        start: [10],\n        connect: 'lower',\n        step: 10,\n        range: {\n          min: 0,\n          max: 100\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        document.querySelector('#option__spacing--value').innerHTML = Number(values[handle]);\n        resetSlider();\n      });\n    },\n    grouping: function grouping() {\n      var dom = document.querySelector('#option__grouping');\n      noUiSlider.create(dom, {\n        start: 0,\n        range: {\n          min: [0, 1],\n          max: 1\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        var value = Number(values[handle]);\n        if (value === 1) {\n          dom.classList.remove('off');\n          dom.classList.add('on');\n          document.querySelector('#option__grouping--value').innerHTML = 'true';\n        } else {\n          dom.classList.remove('on');\n          dom.classList.add('off');\n          document.querySelector('#option__grouping--value').innerHTML = 'false';\n        }\n        resetSlider();\n      });\n    },\n    preview: function preview() {\n      var dom = document.querySelector('#option__preview');\n      noUiSlider.create(dom, {\n        start: 0,\n        range: {\n          min: [0, 1],\n          max: 1\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        var value = Number(values[handle]);\n        if (value === 1) {\n          dom.classList.remove('off');\n          dom.classList.add('on');\n          document.querySelector('#option__preview--value').innerHTML = 'true';\n        } else {\n          dom.classList.remove('on');\n          dom.classList.add('off');\n          document.querySelector('#option__preview--value').innerHTML = 'false';\n        }\n        resetSlider();\n      });\n    },\n    edge: function edge() {\n      var dom = document.querySelector('#option__edge');\n      noUiSlider.create(dom, {\n        start: [10],\n        connect: 'lower',\n        step: 10,\n        range: {\n          min: 0,\n          max: 100\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        document.querySelector('#option__edge--value').innerHTML = Number(values[handle]);\n        resetSlider();\n      });\n    },\n    align: function align() {\n      document.querySelector('#option__align').addEventListener('change', function (e) {\n        document.querySelector('#option__align--value').innerHTML = e.target.value;\n        resetSlider();\n      });\n    },\n    previousNext: function previousNext() {\n      var dom = document.querySelector('#option__arrow');\n      noUiSlider.create(dom, {\n        start: 1,\n        range: {\n          min: [0, 1],\n          max: 1\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        var value = Number(values[handle]);\n        if (value === 1) {\n          dom.classList.remove('off');\n          dom.classList.add('on');\n          document.querySelector('#option__arrow--value').innerHTML = 'true';\n        } else {\n          dom.classList.remove('on');\n          dom.classList.add('off');\n          document.querySelector('#option__arrow--value').innerHTML = 'false';\n        }\n        resetSlider();\n      });\n    },\n    pagination: function pagination() {\n      var dom = document.querySelector('#option__pagination');\n      noUiSlider.create(dom, {\n        start: 1,\n        range: {\n          min: [0, 1],\n          max: 1\n        }\n      });\n      dom.noUiSlider.on('update', function (values, handle) {\n        var value = Number(values[handle]);\n        if (value === 1) {\n          dom.classList.remove('off');\n          dom.classList.add('on');\n          document.querySelector('#option__pagination--value').innerHTML = 'true';\n        } else {\n          dom.classList.remove('on');\n          dom.classList.add('off');\n          document.querySelector('#option__pagination--value').innerHTML = 'false';\n        }\n        resetSlider();\n      });\n    }\n  };\n  options.columns();\n  options.duration();\n  options.loop();\n  options.spacing();\n  options.grouping();\n  options.preview();\n  options.edge();\n  options.align();\n  options.previousNext();\n  options.pagination();\n  resetSlider();\n};\ndemo();\n\n//# sourceURL=webpack://@sliderm.js/doc/./js/demo.js?")}},__webpack_exports__={};__webpack_modules__["./js/demo.js"]()})();