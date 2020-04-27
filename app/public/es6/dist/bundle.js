/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _obj2;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extra = __webpack_require__(/*! ./modules/extra */ \"./src/modules/extra.js\");\n\nvar extra = _interopRequireWildcard(_extra);\n\nvar _extra2 = __webpack_require__(/*! ./modules/extra2 */ \"./src/modules/extra2.js\");\n\nvar _extra3 = __webpack_require__(/*! ./modules/extra3 */ \"./src/modules/extra3.js\");\n\nvar extra3 = _interopRequireWildcard(_extra3);\n\nvar _func = __webpack_require__(/*! ./modules/func */ \"./src/modules/func.js\");\n\nvar _func2 = __webpack_require__(/*! ./modules/func2 */ \"./src/modules/func2.js\");\n\nvar _func3 = _interopRequireDefault(_func2);\n\nvar _boy = __webpack_require__(/*! ./modules/boy */ \"./src/modules/boy.js\");\n\nvar _boy2 = _interopRequireDefault(_boy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _loop = function _loop(i) {\n    setTimeout(function () {\n        console.log(i);\n    }, 3000);\n};\n\n//let вместо var\n//let ивдна только внутри скобок\n\nfor (var i = 0; i < 5; i++) {\n    _loop(i);\n}\n\nvar PI = 3.14;\nvar a = 1;\n\n//стрелочные функции\nvar arrow = function arrow() {\n    return 150;\n};\n\nvar arrow2 = function arrow2(num1, num2) {\n    return num1 + num2;\n};\nconsole.log(arrow());\nconsole.log(arrow2(10, 20));\n//вынуждены сохранять контекст, тат как внутри function this уже не этот this\nvar obj1 = {\n    name: 'WTR',\n    logName: function logName() {\n        var self = this;\n        setTimeout(function () {\n            console.log('name:', self.name);\n        }, 3000);\n    }\n};\n\n//стрелочные функции не создают контекста\nvar obj2 = {\n    name: 'WTR',\n    logName: function logName() {\n        var _this = this;\n\n        setTimeout(function () {\n            console.log('name:', _this.name);\n        }, 3000);\n    }\n};\n\nobj1.logName();\nobj2.logName();\n\n//параметры по умолчанию\n\nvar func = function func(a) {\n    a = a || 15;\n    return a;\n};\n\nvar func2 = function func2() {\n    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;\n    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;\n\n    return a + b;\n};\n\nconsole.log('func:', func());\nconsole.log('func2:', func2());\nconsole.log('func2:', func2(60));\nconsole.log('func2:', func2(undefined, 60));\n\nvar func3 = function func3() {\n    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;\n    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a + 10;\n\n    return a + b;\n};\n\nconsole.log('func3:', func3(60));\nconsole.log('func3:', func3(undefined, 60));\nvar c = 90;\nvar func4 = function func4() {\n    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;\n    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a + c;\n\n    return a + b;\n};\n\nconsole.log('func4:', func4(60));\nvar c2 = function c2() {\n    return 200;\n};\nvar func5 = function func5() {\n    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;\n    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a + c2();\n\n    return a + b;\n};\n\nconsole.log('func5:', func5(60));\n\n//объекты\n\nvar name = 'ERT';\nvar age = 23;\nvar obj3 = {\n    name: name,\n    age: age\n};\n\nconsole.log(obj3);\n\nvar createPerson = function createPerson(name, lastname) {\n    var field1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    var field2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n\n    var fullname = [name, lastname].join(' ');\n    return _defineProperty({\n        name: name, lastname: lastname, fullname: fullname,\n        getJob: function getJob() {\n            return 'frontend';\n        }\n    }, field1 + field2, 100);\n};\n\nvar person = createPerson('David', 'Norton');\nconsole.log(person, person.getJob());\n\nvar person2 = createPerson('David', 'Norton', 'bla', '-bla');\nconsole.log(person2);\n\n//Деструктуризация\n\nvar obj4 = {\n    title: 'ERT',\n    page: 45\n};\n\nvar title = obj4.title,\n    page = obj4.page; //извлечение полей из объекта в переменные\n\nvar t = obj4.title,\n    p = obj4.page; //извлечение полей из объекта в переменные с другими именами чем поля\n\nconsole.log(title, page);\nconsole.log(t, p);\n\nvar array = ['YRE', 12, 'red'];\n\n//для массивов\nvar x = array[0],\n    y = array[1],\n    z = array[2];\n\nconsole.log(x, y, z);\nvar x1 = array[0],\n    x3 = array[2];\n\nconsole.log(x1, x3);\n\n//Rest и Spread операторы\n\nfunction logStrings(num) {\n    var args = Array.prototype.slice.call(arguments);\n    console.log(num, args);\n}\n\n//Rest оператор (...) все аргументы как массив присваиваем переменной args (имя любое)\nfunction logStrings2(num) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n    }\n\n    console.log(num, args);\n}\n\nlogStrings(10, 'line1', 'line2', 'line3');\nlogStrings2(10, 'line1', 'line2', 'line3');\n\n//Spread оператор (...) массив будет развернут в список элементов\nvar spreadArray = ['line1', 'line2', 'line3', 'line4', 'line5'];\nlogStrings2.apply(undefined, [10].concat(spreadArray));\n\n//Строки\n\nvar name2 = 'ETY';\nvar str2 = 'Hello ' + name2 + ', glat to see you';\nvar str3 = 'Hello \\'' + name2 + '\\', glat to see you';\nconsole.log(str2);\nconsole.log(str3);\n\nvar html = '\\n    <div>\\n        <h1>Title</h1>\\n        <span>\\n            wuiwqwqw\\n            qwqwqwqw\\n            wqwqwqwq\\n        </span>\\n    </div>\\n';\n\nconsole.log(html);\n\n//Циклы\n\nvar arr = [1, 2, 3, 4, 5];\n\nfor (var i = 0; i < arr.length; i++) {\n    console.log(arr[i]);\n}\n\narr.forEach(function (item) {\n    console.log('item: ' + item);\n});\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var item = _step.value;\n\n        console.log('item: ' + item);\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n\n;\n\n//итерация строк\nvar _iteratorNormalCompletion2 = true;\nvar _didIteratorError2 = false;\nvar _iteratorError2 = undefined;\n\ntry {\n    for (var _iterator2 = 'QWERTY'[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var _item = _step2.value;\n\n        console.log('item: ' + _item);\n    }\n} catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n        }\n    } finally {\n        if (_didIteratorError2) {\n            throw _iteratorError2;\n        }\n    }\n}\n\n;\n\n//Классы\n/* старый синтаксис\r\nfunction Car(name){\r\n    this.name = name;\r\n}\r\n\r\nCar.prototype.logName = function () {\r\n    console.log(this.name);\r\n};\r\n*/\n\nvar Car = function () {\n    function Car(name) {\n        _classCallCheck(this, Car);\n\n        console.log('Car constructor');\n        this.name = name;\n    }\n\n    _createClass(Car, [{\n        key: 'logName',\n        value: function logName() {\n            console.log('Car name is: ', this.name);\n        }\n    }], [{\n        key: 'funcStat',\n        value: function funcStat() {\n            console.log('static func');\n        }\n    }]);\n\n    return Car;\n}();\n\n;\n\nvar BMW = function (_Car) {\n    _inherits(BMW, _Car);\n\n    function BMW(name) {\n        _classCallCheck(this, BMW);\n\n        var _this2 = _possibleConstructorReturn(this, (BMW.__proto__ || Object.getPrototypeOf(BMW)).call(this, name));\n\n        console.log('BMW constructor');\n        return _this2;\n    }\n\n    _createClass(BMW, [{\n        key: 'logName',\n        value: function logName() {\n            //super.logName();\n            console.log('BMW name is: ', this.name);\n        }\n    }]);\n\n    return BMW;\n}(Car);\n\nvar car = new Car('Toyota');\ncar.logName();\nCar.funcStat();\nvar bmw = new BMW('x6');\nbmw.logName();\n\n//Set и WeakSet\n\nvar set = new Set();\nset.add(10);\nset.add('line1');\nset.add({});\nset.add([]);\nset.add(10);\nconsole.log(set, set.size);\n\nvar set2 = new Set([1, 2, 3, 4, 5, 5, 5, 6, 7, 7]);\nconsole.log(set2, set2.size);\nvar set3 = new Set().add(2).add(4).add(6).add(0);\nconsole.log(set3, set3.size);\nconsole.log('set has: ', set3.has(2));\nset3.delete(2);\nconsole.log(set3, set3.size);\nconsole.log('set has: ', set3.has(2));\nset3.clear();\nconsole.log(set3, set3.size);\n\nvar set4 = new Set();\nvar key = {};\nset4.add(key);\nconsole.log(set4, set4.size);\nkey = null;\nconsole.log(set4, set4.size);\n\nvar set5 = new WeakSet();\nvar key2 = {};\nset5.add(key2);\nconsole.log(set5, set5.size);\nkey2 = null;\nconsole.log(set5, set5.size);\n\n//Map и WeakMap\n\nvar map = new Map();\nmap.set('key1', 123);\nmap.set('key2', 'line1');\nmap.set('key3', {});\nmap.set('key4', []);\nmap.set('key6', new Map());\n\nconsole.log(map);\nconsole.log(map.get('key1'));\nconsole.log(map.size);\n\nvar obj5 = {};\nvar obj6 = {};\nmap.set(obj5, 10);\nmap.set(obj6, 20);\nconsole.log(map.size, map, map.has(obj5));\nmap.delete(obj5);\nconsole.log(map.size, map, map.has(obj5));\nvar map2 = new Map([['key1', 'line1'], ['key2', 124]]);\nconsole.log(map2, map2.size);\n\nvar _iteratorNormalCompletion3 = true;\nvar _didIteratorError3 = false;\nvar _iteratorError3 = undefined;\n\ntry {\n    for (var _iterator3 = map2.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var val = _step3.value;\n\n        console.log('value: ', val);\n    }\n} catch (err) {\n    _didIteratorError3 = true;\n    _iteratorError3 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion3 && _iterator3.return) {\n            _iterator3.return();\n        }\n    } finally {\n        if (_didIteratorError3) {\n            throw _iteratorError3;\n        }\n    }\n}\n\nvar _iteratorNormalCompletion4 = true;\nvar _didIteratorError4 = false;\nvar _iteratorError4 = undefined;\n\ntry {\n    for (var _iterator4 = map2.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n        var _key2 = _step4.value;\n\n        console.log('value: ', _key2);\n    }\n} catch (err) {\n    _didIteratorError4 = true;\n    _iteratorError4 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion4 && _iterator4.return) {\n            _iterator4.return();\n        }\n    } finally {\n        if (_didIteratorError4) {\n            throw _iteratorError4;\n        }\n    }\n}\n\nvar _iteratorNormalCompletion5 = true;\nvar _didIteratorError5 = false;\nvar _iteratorError5 = undefined;\n\ntry {\n    for (var _iterator5 = map2.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n        var entr = _step5.value;\n\n        console.log('key: ' + entr[0] + ', value: ' + entr[1]);\n    }\n} catch (err) {\n    _didIteratorError5 = true;\n    _iteratorError5 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion5 && _iterator5.return) {\n            _iterator5.return();\n        }\n    } finally {\n        if (_didIteratorError5) {\n            throw _iteratorError5;\n        }\n    }\n}\n\nvar map3 = new Map();\nvar key7 = {};\nmap3.set(key7, 127);\nconsole.log(map3, map3.size);\nkey7 = null;\nconsole.log(map3, map3.size);\n\nvar map4 = new WeakMap();\nvar key8 = {};\nmap4.set(key8, 127);\nconsole.log(map4, map4.size);\nkey8 = null;\nconsole.log(map4, map4.size);\nconsole.log(map4, map4.size);\n\n//Модули\n\nconsole.log(extra);\n\nconsole.log(_extra2.header, _extra2.count);\n\nconsole.log(_extra.name);\n\nconsole.log(extra3);\n\n(0, _func.myfunc)();\n\n(0, _func3.default)();\n\nvar boy = new _boy2.default('Игорь');\nconsole.log(boy.getName());\n\n//Символы\n\nvar s = Symbol('RTYU');\nconsole.log(typeof s === 'undefined' ? 'undefined' : _typeof(s), s);\nvar s2 = Symbol('1');\nvar s3 = Symbol('1');\nconsole.log(s2 === s3);\n\nvar s4 = Symbol('field');\nvar s5 = Symbol('field');\n\nvar obj7 = _defineProperty({}, s4, 'RTYU');\nconsole.log(obj7);\nconsole.log(obj7['field']);\nconsole.log(obj7[s5]);\nconsole.log(obj7[s4]);\n\nvar obj8 = (_obj2 = {}, _defineProperty(_obj2, s4, 'RTYU'), _defineProperty(_obj2, 'age', 34), _obj2);\nconsole.log(Object.getOwnPropertyNames(obj8));\nconsole.log(Object.getOwnPropertySymbols(obj8));\n\nvar num = 1;\nvar str = 'RTYU';\nvar arr1 = [1, 3, 6, 7];\nvar obj = { 'eyr': 15632 };\n\nconsole.log('number: ', _typeof(num[Symbol.iterator]));\nconsole.log('string: ', _typeof(str[Symbol.iterator]));\nconsole.log('array: ', _typeof(arr1[Symbol.iterator]));\nconsole.log('object: ', _typeof(obj[Symbol.iterator]));\n//eсли не undefined то применим цикл for(let item of items)\n//создание итератора\n\nfunction createIterator(arr) {\n    var count = 0;\n    return {\n        next: function next() {\n            return count < arr.length ? { value: arr[count++], done: false } : { value: undefined, done: true };\n        }\n    };\n}\n\nvar iter = createIterator([1, 2, 3, 4, 5, 6]);\nconsole.log(iter.next());\nconsole.log(iter.next());\nconsole.log(iter.next());\nconsole.log(iter.next());\nconsole.log(iter.next());\nconsole.log(iter.next());\nconsole.log(iter.next());\nconsole.log(iter.next());\nconsole.log(iter.next());\n\n//генерация ряда Фиббоначи\nvar fib = _defineProperty({}, Symbol.iterator, function () {\n    var pre = 0,\n        cur = 1;\n    return {\n        next: function next() {\n            var _ref2 = [cur, pre + cur];\n            pre = _ref2[0];\n            cur = _ref2[1];\n\n            return { value: cur, done: false };\n        }\n    };\n});\n\nvar _iteratorNormalCompletion6 = true;\nvar _didIteratorError6 = false;\nvar _iteratorError6 = undefined;\n\ntry {\n    for (var _iterator6 = fib[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n        var n = _step6.value;\n\n        if (n > 1500) break;\n        console.log(n);\n    }\n} catch (err) {\n    _didIteratorError6 = true;\n    _iteratorError6 = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion6 && _iterator6.return) {\n            _iterator6.return();\n        }\n    } finally {\n        if (_didIteratorError6) {\n            throw _iteratorError6;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/boy.js":
/*!****************************!*\
  !*** ./src/modules/boy.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Boy = function () {\n    function Boy(name) {\n        _classCallCheck(this, Boy);\n\n        console.log('this is Boy consctructor');\n        this.name = name;\n    }\n\n    _createClass(Boy, [{\n        key: 'getName',\n        value: function getName() {\n            return this.name;\n        }\n    }]);\n\n    return Boy;\n}();\n\nexports.default = Boy;\n\n//# sourceURL=webpack:///./src/modules/boy.js?");

/***/ }),

/***/ "./src/modules/extra.js":
/*!******************************!*\
  !*** ./src/modules/extra.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar name = exports.name = 'ERTYU';\nvar age = exports.age = 34;\n\n//или так\n//export name;\n//export age;\n\n//# sourceURL=webpack:///./src/modules/extra.js?");

/***/ }),

/***/ "./src/modules/extra2.js":
/*!*******************************!*\
  !*** ./src/modules/extra2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar header = exports.header = 'HEADER';\nvar count = exports.count = 25235;\n\n//или так\n//export name;\n//export age;\n\n//# sourceURL=webpack:///./src/modules/extra2.js?");

/***/ }),

/***/ "./src/modules/extra3.js":
/*!*******************************!*\
  !*** ./src/modules/extra3.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar name = 'ERTYU';\nvar age = 34;\n\nexports.name = name;\nexports.age = age;\n\n//# sourceURL=webpack:///./src/modules/extra3.js?");

/***/ }),

/***/ "./src/modules/func.js":
/*!*****************************!*\
  !*** ./src/modules/func.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.myfunc = myfunc;\nfunction myfunc() {\n    console.log('I am func!');\n}\n\n//# sourceURL=webpack:///./src/modules/func.js?");

/***/ }),

/***/ "./src/modules/func2.js":
/*!******************************!*\
  !*** ./src/modules/func2.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = myfuncdef;\nfunction myfuncdef() {\n    console.log('I am funcdef!');\n}\n\n//# sourceURL=webpack:///./src/modules/func2.js?");

/***/ })

/******/ });