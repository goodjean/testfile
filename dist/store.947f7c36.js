// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data.js":[function(require,module,exports) {
module.exports = {
  간식: [{
    이름: '육포',
    유통기한: 10,
    수량: 4,
    재료: '소고기',
    제조사: '농심',
    가격: 11000
  }, {
    이름: '연어',
    유통기한: 3,
    수량: 0,
    재료: '물고기',
    제조사: '롯데',
    가격: 20000
  }, {
    이름: '오리',
    유통기한: 15,
    수량: 6,
    재료: '조류',
    제조사: '오뚜기',
    가격: 15000
  }],
  장난감: {
    터그: [{
      이름: '악어터그',
      수량: 4,
      가격: 14000,
      소재: '가죽',
      판매처: '터그세상'
    }, {
      이름: '여우터그',
      수량: 2,
      가격: 10000,
      소재: '털',
      판매처: '터그세상'
    }],
    공: [{
      이름: '축구공',
      수량: 5,
      가격: 20000,
      소재: '가죽',
      판매처: '운동플레이'
    }, {
      이름: '농구공',
      수량: 5,
      가격: 20000,
      소재: '가죽',
      판매처: '운동플레이'
    }],
    인형: [{
      이름: '춘식이',
      수량: 1,
      가격: 25000,
      소재: '면',
      판매처: '카카오프렌즈'
    }]
  }
};
},{}],"store.js":[function(require,module,exports) {
var DataApp = require('./data.js');

var ALL_SNACK_DATA = DataApp.간식;
var ALL_TOY_DATA = DataApp.장난감; // constructor(dataApp) {
//   this.dadta = dataApp.getDaatA()
// }

function findSnackBySnackName(snackName) {
  return ALL_SNACK_DATA.find(function (snack) {
    return snack.이름 === snackName;
  });
}

function findSnackDataBySnackName(snackName) {
  ALL_SNACK_DATA.find(function (snack) {
    return snack.이름 === snackName;
  });
} // 과제: 리펙토링, 이름도 영어로, class로 바꿔오기, 강의보기 markdown은 대충보기


function findToyByToyName(toyName) {
  var toySubCategoryList = Object.keys(ALL_TOY_DATA);
  var foundToy = null;

  for (var i = 0; i < toySubCategoryList.length; i++) {
    var toySubCategory = toySubCategoryList[i];
    var toyListFromSubCategory = ALL_TOY_DATA[toySubCategory];
    foundToy = toyListFromSubCategory.find(function (toy) {
      return toy.이름 === toyName;
    });

    if (foundToy !== null) {
      return foundToy;
    }
  }

  return foundToy;
}

function findToyByToyNameWithSubCategory(toyName, subCategory) {
  return ALL_TOY_DATA[subCategory].find(function (toy) {
    return toy.이름 === toyName;
  });
} //간식먹기


function eatSnack(snackName, Quantity) {
  var foundSnack = findSnackBySnackName(snackName);

  if (foundSnack !== undefined) {
    foundSnack.수량 -= Quantity;
  } else {
    console.log("없는거야 이년아");
  }
} // console.log(DataApp)
// eatSnack('장어', 1)
//간식추가


function addSnack(snackName, shelfLife, Quantity, ingredient, SnackFactory) {
  var foundSnack = findSnackBySnackName(snackName);

  if (foundSnack !== undefined) {
    foundSnack.수량 += additionalQuantity;
  } else {
    ALL_SNACK_DATA.push({
      snackName: snackName,
      shelfLife: shelfLife,
      Quantity: Quantity,
      ingredient: ingredient,
      SnackFactory: SnackFactory
    });
  }
} // console.log(DataApp)
// addSnack('메기', 15, 12, '조류', '오뚜기')
// 모든간식출력


function printAllSnack() {
  console.log(ALL_SNACK_DATA);
} // printAllSnack()
// 모든장난감출력


function printAllToy() {
  console.log(ALL_TOY_DATA);
} // printAllToy()
// 특정서브카테고리의 장난감출력


function 특정서브카테고리의장난감출력하기(장난감서브카테고리이름) {
  var subCategoryList = Object.keys(ALL_TOY_DATA);

  for (var i = 0; i < subCategoryList.length; i++) {
    var subCategory = subCategoryList[i];
    var subCategoryData = ALL_TOY_DATA[subCategory];

    if (subCategory === 장난감서브카테고리이름) {
      console.log(subCategoryData);
    }
  }
}

특정서브카테고리의장난감출력하기('터그'); // 1111장난감추가하기 

function 장난감추가하기(이름, 수량, 가격, 소재, 판매처) {
  var subCategoryList = Object.keys(강아지용품데이터.장난감);

  for (var i = 0; i < subCategoryList.length; i++) {
    var subCategory = subCategoryList[i];
    var toyDataList = 강아지용품데이터.장난감[subCategory];

    for (var j = 0; j < toyDataList.length; j++) {
      var toyData = toyDataList[j];

      if (toyData.이름 === 이름) {
        return toyData.수량 = toyData.수량 + 수량;
      } else {
        toyDataList = toyDataList.push({
          이름: 이름,
          수량: 수량,
          가격: 가격,
          소재: 소재,
          판매처: 판매처
        });
      }
    }
  }
} // console.log(강아지용품데이터.장난감)
// 장난감추가하기('고양이터그', 8, 10000, '실크', '고먐미나라')
// 2222장난감의 서브카테고리 추가하기


function 장난감서브카테고리추가하기(추가카테고리, 이름, 수량, 가격) {
  강아지용품데이터.장난감[추가카테고리] = [{
    이름: 이름,
    수량: 수량,
    가격: 가격
  }];
} // console.log(강아지용품데이터.장난감)
// 장난감서브카테고리추가하기('집게', '오리집게', 3, 1000)
// 장난감삭제하기


function 장난감삭제하기(이름, 빼는수량) {
  var subCategoryList = Object.keys(강아지용품데이터.장난감);
  console.log(subCategoryList);

  for (var i = 0; i < subCategoryList.length; i++) {
    var subCategory = subCategoryList[i];
    var toyDataList = 강아지용품데이터.장난감[subCategory];
    console.log(subCategory);

    for (var j = 0; j < toyDataList.length; j++) {
      var toyData = toyDataList[j];

      if (toyData.이름 === 이름) {
        toyData.수량 = toyData.수량 - 빼는수량;
      }
    }
  }
} // console.log(강아지용품데이터.장난감)
// 장난감삭제하기('악어터그', 3)
// 3333모든 간식의 이름과 수량 출력


function 모든간식이름과수량출력하기() {
  var 모든간식데이터 = 강아지용품데이터.간식;

  for (var i = 0; i < 모든간식데이터.length; i++) {
    var 각간식데이터 = 모든간식데이터[i];
    console.log('이름 :', 각간식데이터.이름, '/ 수량 :', 각간식데이터.수량);
  }
} // 모든간식이름과수량출력하기()
// 4444모든 간식찾기


function 모든간식찾기() {
  var 모든간식데이터 = 강아지용품데이터.간식;

  for (var i = 0; i < 모든간식데이터.length; i++) {
    var 각간식데이터 = 모든간식데이터[i];
    console.log(각간식데이터.이름, 각간식데이터);
  }
} // 모든간식찾기()
// 5555찾은 간식의 이름과 수량 출력


function 찾은간식이름과수량출력하기(찾고싶은간식이름) {
  var 모든간식데이터 = 강아지용품데이터.간식;

  for (var i = 0; i < 모든간식데이터.length; i++) {
    var 각간식데이터 = 모든간식데이터[i];

    if (각간식데이터.이름 === 찾고싶은간식이름) {
      console.log('이름 :', 각간식데이터.이름, '/ 수량 :', 각간식데이터.수량);
    }
  }
} // 찾은간식이름과수량출력하기('연어')


module.exports = {
  eatSnack: function eatSnack(이름, 빼는수량) {
    return 간식먹기(이름, 빼는수량);
  },
  addSnack: function addSnack(이름, 유통기한, 추가수량, 추가재료, 제조사) {
    return 간식추가(이름, 유통기한, 추가수량, 추가재료, 제조사);
  },
  printAllSnack: function printAllSnack() {
    return 모든간식출력하기();
  },
  printAllToy: function printAllToy() {
    return 모든장난감출력하기();
  },
  printToyDataBySubCategory: function printToyDataBySubCategory(장난감서브카테고리이름) {
    return 특정서브카테고리의장난감출력하기(장난감서브카테고리이름);
  },
  addToy: function addToy(이름, 수량, 가격, 소재, 판매처) {
    return 장난감추가하기(이름, 수량, 가격, 소재, 판매처);
  },
  addToySubCategory: function addToySubCategory(추가카테고리, 이름, 수량, 가격) {
    return 장난감서브카테고리추가하기(추가카테고리, 이름, 수량, 가격);
  },
  deleteToy: function deleteToy(이름, 빼는수량) {
    return 장난감삭제하기(이름, 빼는수량);
  },
  printAllSnackNameQuantity: function printAllSnackNameQuantity() {
    return 모든간식이름과수량출력하기();
  },
  printNameQuantityBySnackName: function printNameQuantityBySnackName(찾고싶은간식이름) {
    return 찾은간식이름과수량출력하기(찾고싶은간식이름);
  },
  printMenu: function (_printMenu) {
    function printMenu() {
      return _printMenu.apply(this, arguments);
    }

    printMenu.toString = function () {
      return _printMenu.toString();
    };

    return printMenu;
  }(function () {
    return printMenu();
  })
};
},{"./data.js":"data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59169" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","store.js"], null)
//# sourceMappingURL=/store.947f7c36.js.map