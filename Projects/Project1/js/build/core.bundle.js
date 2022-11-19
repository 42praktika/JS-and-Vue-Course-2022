/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/catfacts.js":
/*!************************!*\
  !*** ./js/catfacts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catfacts": () => (/* binding */ catfacts)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./js/state.js");

const catfacts = () => {
  const modal = document.querySelector('.modal-content');
  const list = document.createElement('div');
  list.classList = 'facts-list';
  modal.append(list);
  const button = document.createElement('button');
  button.classList = 'btn';
  button.textContent = 'Get fact!';
  modal.append(button);
  button.addEventListener('click', () => {
    fetch('https://meowfacts.herokuapp.com/?lang=rus').then(response => response.json()).then(facts => _state_js__WEBPACK_IMPORTED_MODULE_0__.factState.facts = _state_js__WEBPACK_IMPORTED_MODULE_0__.factState.facts.concat(facts)).catch(err => console.error(err));
    factList(_state_js__WEBPACK_IMPORTED_MODULE_0__.factState.facts);
  });
};

const createFact = fact => '<div class="fact"><p>' + fact.data + '</p></div>';

const factList = facts => {
  const list = document.querySelector('.facts-list');
  list.innerHTML = ' ';

  if (facts.length) {
    facts.forEach(fact => list.innerHTML = createFact(fact));
  }
};

/***/ }),

/***/ "./js/const.js":
/*!*********************!*\
  !*** ./js/const.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUTTONS": () => (/* binding */ BUTTONS),
/* harmony export */   "MODALS": () => (/* binding */ MODALS),
/* harmony export */   "MODALS_TYPES": () => (/* binding */ MODALS_TYPES)
/* harmony export */ });
const MODALS_TYPES = {
  NONE: 'none',
  FIRST: 'CatFacts',
  SECOND: 'Holidays',
  THIRD: 'Currency'
};
const BUTTONS = [{
  text: 'Facts about cats',
  type: MODALS_TYPES.FIRST
}, {
  text: 'Holidays',
  type: MODALS_TYPES.SECOND
}, {
  text: 'Exchange rate',
  type: MODALS_TYPES.THIRD
}];
const MODALS = [{
  text: 'Interesting facts about cats',
  type: MODALS_TYPES.FIRST
}, {
  text: 'Information about holidays',
  type: MODALS_TYPES.SECOND
}, {
  text: 'Exchange rate on the selected date',
  type: MODALS_TYPES.THIRD
}];

/***/ }),

/***/ "./js/currency.js":
/*!************************!*\
  !*** ./js/currency.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currency": () => (/* binding */ currency)
/* harmony export */ });
const currency = () => {
  const content = document.querySelectorAll('.modal-content');
  const currencyAll = document.createElement('div');
  currencyAll.classList = 'currency-data';
  content[2].append(currencyAll);
  const dateSelect = document.createElement('input');
  dateSelect.type = 'date';
  dateSelect.classList = 'date';
  currencyAll.append(dateSelect);

  const getTodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };

  dateSelect.max = getTodayDate();
  const table = document.createElement('table');
  table.classList = 'table';
  dateSelect.addEventListener('input', () => {
    let dataSelected = dateSelect.value;
    const table = document.createElement('table');
    table.classList = 'table';
    fetch('https://api.currencyscoop.com/v1/historical?date=' + dataSelected + '?&base=RUB&api_key=22bc0fa553204ae1886329841e130441').then(response => response.json()).then(currency => {
      let obj = Object.entries(currency.response.rates);

      for (let i = 0; i < obj.length; i++) {
        const cell = document.createElement('th');
        cell.classList = 'cell2';
        const line = document.createElement('tr');
        line.classList = 'line';
        cell.textContent = 'Currency name , rate : ' + Object.values(obj[i]);
        line.append(cell);
        table.append(line);
        currencyAll.append(table);
      }
    }).catch(err => console.error(err));
    const th = document.querySelectorAll('.cell2');
    th.forEach(t => {
      t.remove();
    });
  });
};

/***/ }),

/***/ "./js/helpers/melanke-watchjs.js":
/*!***************************************!*\
  !*** ./js/helpers/melanke-watchjs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var WatchJS = {
  noMore: false,
  // use WatchJS.suspend(obj) instead
  useDirtyCheck: false,
  // use only dirty checking to track changes.
  preserveExistingSetters: false
},
    lengthsubjects = [];
var dirtyChecklist = [];
var pendingChanges = []; // used coalesce changes from defineProperty and __defineSetter__

var supportDefineProperty = false;

try {
  supportDefineProperty = Object.defineProperty && Object.defineProperty({}, 'x', {});
} catch (ex) {
  /* not supported */
}

var isFunction = function (functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
};

var isInt = function (x) {
  return x % 1 === 0;
};

var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var isObject = function (obj) {
  return {}.toString.apply(obj) === '[object Object]';
};

var getObjDiff = function (a, b) {
  var aplus = [],
      bplus = [];

  if (!(typeof a == "string") && !(typeof b == "string")) {
    if (isArray(a) && b) {
      for (var i = 0; i < a.length; i++) {
        if (b[i] === undefined) aplus.push(i);
      }
    } else {
      for (var i in a) {
        if (a.hasOwnProperty(i)) {
          if (b && !b.hasOwnProperty(i)) {
            aplus.push(i);
          }
        }
      }
    }

    if (isArray(b) && a) {
      for (var j = 0; j < b.length; j++) {
        if (a[j] === undefined) bplus.push(j);
      }
    } else {
      for (var j in b) {
        if (b.hasOwnProperty(j)) {
          if (a && !a.hasOwnProperty(j)) {
            bplus.push(j);
          }
        }
      }
    }
  }

  return {
    added: aplus,
    removed: bplus
  };
};

var clone = function (obj) {
  if (null == obj || "object" != typeof obj) {
    return obj;
  }

  var copy = obj.constructor();

  for (var attr in obj) {
    copy[attr] = obj[attr];
  }

  return copy;
};

var getExistingSetter = function (obj, propName) {
  if (WatchJS.preserveExistingSetters) {
    var existing = Object.getOwnPropertyDescriptor(obj, propName);
    return existing.set;
  }

  return undefined;
};

var defineGetAndSet = function (obj, propName, getter, setter) {
  try {
    var existingSetter = getExistingSetter(obj, propName);
    Object.defineProperty(obj, propName, {
      get: getter,
      set: function (value) {
        setter.call(this, value, true); // coalesce changes

        if (existingSetter) {
          existingSetter(value);
        }
      },
      enumerable: true,
      configurable: true
    });
  } catch (e1) {
    try {
      Object.prototype.__defineGetter__.call(obj, propName, getter);

      Object.prototype.__defineSetter__.call(obj, propName, function (value) {
        setter.call(this, value, true); // coalesce changes
      });
    } catch (e2) {
      observeDirtyChanges(obj, propName, setter); //throw new Error("watchJS error: browser not supported :/")
    }
  }
};

var defineProp = function (obj, propName, value) {
  try {
    Object.defineProperty(obj, propName, {
      enumerable: false,
      configurable: true,
      writable: false,
      value: value
    });
  } catch (error) {
    obj[propName] = value;
  }
};

var observeDirtyChanges = function (obj, propName, setter) {
  dirtyChecklist[dirtyChecklist.length] = {
    prop: propName,
    object: obj,
    orig: clone(obj[propName]),
    callback: setter
  };
};

var watch = function () {
  if (isFunction(arguments[1])) {
    watchAll.apply(this, arguments);
  } else if (isArray(arguments[1])) {
    watchMany.apply(this, arguments);
  } else {
    watchOne.apply(this, arguments);
  }
};

var watchAll = function (obj, watcher, level, addNRemove) {
  if (typeof obj == "string" || !(obj instanceof Object) && !isArray(obj)) {
    //accepts only objects and array (not string)
    return;
  }

  if (isArray(obj)) {
    defineWatcher(obj, "__watchall__", watcher, level); // watch all changes on the array

    if (level === undefined || level > 0) {
      for (var prop = 0; prop < obj.length; prop++) {
        // watch objects in array
        watchAll(obj[prop], watcher, level, addNRemove);
      }
    }
  } else {
    var prop,
        props = [];

    for (prop in obj) {
      //for each attribute if obj is an object
      if (prop == "$val" || !supportDefineProperty && prop === 'watchers') {
        continue;
      }

      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        props.push(prop); //put in the props
      }
    }

    watchMany(obj, props, watcher, level, addNRemove); //watch all items of the props
  }

  if (addNRemove) {
    pushToLengthSubjects(obj, "$$watchlengthsubjectroot", watcher, level);
  }
};

var watchMany = function (obj, props, watcher, level, addNRemove) {
  if (typeof obj == "string" || !(obj instanceof Object) && !isArray(obj)) {
    //accepts only objects and array (not string)
    return;
  }

  for (var i = 0; i < props.length; i++) {
    //watch each property
    var prop = props[i];
    watchOne(obj, prop, watcher, level, addNRemove);
  }
};

var watchOne = function (obj, prop, watcher, level, addNRemove) {
  if (typeof obj == "string" || !(obj instanceof Object) && !isArray(obj)) {
    //accepts only objects and array (not string)
    return;
  }

  if (isFunction(obj[prop])) {
    //dont watch if it is a function
    return;
  }

  if (obj[prop] != null && (level === undefined || level > 0)) {
    watchAll(obj[prop], watcher, level !== undefined ? level - 1 : level); //recursively
    // watch all
    // attributes of
    // this
  }

  defineWatcher(obj, prop, watcher, level);

  if (addNRemove && (level === undefined || level > 0)) {
    pushToLengthSubjects(obj, prop, watcher, level);
  }
};

var unwatch = function () {
  if (isFunction(arguments[1])) {
    unwatchAll.apply(this, arguments);
  } else if (isArray(arguments[1])) {
    unwatchMany.apply(this, arguments);
  } else {
    unwatchOne.apply(this, arguments);
  }
};

var unwatchAll = function (obj, watcher) {
  if (obj instanceof String || !(obj instanceof Object) && !isArray(obj)) {
    //accepts only objects and array (not string)
    return;
  }

  if (isArray(obj)) {
    var props = ['__watchall__'];

    for (var prop = 0; prop < obj.length; prop++) {
      //for each item if obj is an array
      props.push(prop); //put in the props
    }

    unwatchMany(obj, props, watcher); //watch all itens of the props
  } else {
    var unwatchPropsInObject = function (obj2) {
      var props = [];

      for (var prop2 in obj2) {
        //for each attribute if obj is an object
        if (obj2.hasOwnProperty(prop2)) {
          if (obj2[prop2] instanceof Object) {
            unwatchPropsInObject(obj2[prop2]); //recurs into object props
          } else {
            props.push(prop2); //put in the props
          }
        }
      }

      unwatchMany(obj2, props, watcher); //unwatch all of the props
    };

    unwatchPropsInObject(obj);
  }
};

var unwatchMany = function (obj, props, watcher) {
  for (var prop2 in props) {
    //watch each attribute of "props" if is an object
    if (props.hasOwnProperty(prop2)) {
      unwatchOne(obj, props[prop2], watcher);
    }
  }
};

var timeouts = [],
    timerID = null;

function clearTimerID() {
  timerID = null;

  for (var i = 0; i < timeouts.length; i++) {
    timeouts[i]();
  }

  timeouts.length = 0;
}

var getTimerID = function () {
  if (!timerID) {
    timerID = setTimeout(clearTimerID);
  }

  return timerID;
};

var registerTimeout = function (fn) {
  // register function to be called on timeout
  if (timerID == null) getTimerID();
  timeouts[timeouts.length] = fn;
}; // Track changes made to an array, object or an object's property
// and invoke callback with a single change object containing type, value, oldvalue and array
// splices Syntax:  trackChange(obj, callback, recursive, addNRemove) trackChange(obj, prop,
// callback, recursive, addNRemove)


var trackChange = function () {
  var fn = isFunction(arguments[2]) ? trackProperty : trackObject;
  fn.apply(this, arguments);
}; // track changes made to an object and invoke callback with a single change object containing
// type, value and array splices


var trackObject = function (obj, callback, recursive, addNRemove) {
  var change = null,
      lastTimerID = -1;
  var isArr = isArray(obj);

  var level,
      fn = function (prop, action, newValue, oldValue) {
    var timerID = getTimerID();

    if (lastTimerID !== timerID) {
      // check if timer has changed since last update
      lastTimerID = timerID;
      change = {
        type: 'update'
      };
      change['value'] = obj;
      change['splices'] = null;
      registerTimeout(function () {
        callback.call(this, change);
        change = null;
      });
    } // create splices for array changes


    if (isArr && obj === this && change !== null) {
      if (action === 'pop' || action === 'shift') {
        newValue = [];
        oldValue = [oldValue];
      } else if (action === 'push' || action === 'unshift') {
        newValue = [newValue];
        oldValue = [];
      } else if (action !== 'splice') {
        return; // return here - for reverse and sort operations we don't need to
        // return splices. a simple update will do
      }

      if (!change.splices) change.splices = [];
      change.splices[change.splices.length] = {
        index: prop,
        deleteCount: oldValue ? oldValue.length : 0,
        addedCount: newValue ? newValue.length : 0,
        added: newValue,
        deleted: oldValue
      };
    }
  };

  level = recursive == true ? undefined : 0;
  watchAll(obj, fn, level, addNRemove);
}; // track changes made to the property of an object and invoke callback with a single change
// object containing type, value, oldvalue and splices


var trackProperty = function (obj, prop, callback, recursive, addNRemove) {
  if (obj && prop) {
    watchOne(obj, prop, function (prop, action, newvalue, oldvalue) {
      var change = {
        type: 'update'
      };
      change['value'] = newvalue;
      change['oldvalue'] = oldvalue;

      if (recursive && isObject(newvalue) || isArray(newvalue)) {
        trackObject(newvalue, callback, recursive, addNRemove);
      }

      callback.call(this, change);
    }, 0);

    if (recursive && isObject(obj[prop]) || isArray(obj[prop])) {
      trackObject(obj[prop], callback, recursive, addNRemove);
    }
  }
};

var defineWatcher = function (obj, prop, watcher, level) {
  var newWatcher = false;
  var isArr = isArray(obj);

  if (!obj.watchers) {
    defineProp(obj, "watchers", {});

    if (isArr) {
      // watch array functions
      watchFunctions(obj, function (index, action, newValue, oldValue) {
        addPendingChange(obj, index, action, newValue, oldValue);

        if (level !== 0 && newValue && (isObject(newValue) || isArray(newValue))) {
          var i,
              n,
              ln,
              wAll,
              watchList = obj.watchers[prop];

          if (wAll = obj.watchers['__watchall__']) {
            watchList = watchList ? watchList.concat(wAll) : wAll;
          }

          ln = watchList ? watchList.length : 0;

          for (i = 0; i < ln; i++) {
            if (action !== 'splice') {
              watchAll(newValue, watchList[i], level === undefined ? level : level - 1);
            } else {
              // watch spliced values
              for (n = 0; n < newValue.length; n++) {
                watchAll(newValue[n], watchList[i], level === undefined ? level : level - 1);
              }
            }
          }
        }
      });
    }
  }

  if (!obj.watchers[prop]) {
    obj.watchers[prop] = [];
    if (!isArr) newWatcher = true;
  }

  for (var i = 0; i < obj.watchers[prop].length; i++) {
    if (obj.watchers[prop][i] === watcher) {
      return;
    }
  }

  obj.watchers[prop].push(watcher); //add the new watcher to the watchers array

  if (newWatcher) {
    var val = obj[prop];

    var getter = function () {
      return val;
    };

    var setter = function (newval, delayWatcher) {
      var oldval = val;
      val = newval;

      if (level !== 0 && obj[prop] && (isObject(obj[prop]) || isArray(obj[prop])) && !obj[prop].watchers) {
        // watch sub properties
        var i,
            ln = obj.watchers[prop].length;

        for (i = 0; i < ln; i++) {
          watchAll(obj[prop], obj.watchers[prop][i], level === undefined ? level : level - 1);
        }
      } //watchFunctions(obj, prop);


      if (isSuspended(obj, prop)) {
        resume(obj, prop);
        return;
      }

      if (!WatchJS.noMore) {
        // this does not work with Object.observe
        //if (JSON.stringify(oldval) !== JSON.stringify(newval)) {
        if (obj[prop] instanceof Date && oldval && newval) {
          oldval = oldval.valueOf();
          newval = newval.valueOf();
        }

        if (oldval !== newval) {
          if (!delayWatcher) {
            callWatchers(obj, prop, "set", newval, oldval);
          } else {
            addPendingChange(obj, prop, "set", newval, oldval);
          }

          WatchJS.noMore = false;
        }
      }
    };

    if (WatchJS.useDirtyCheck) {
      observeDirtyChanges(obj, prop, setter);
    } else {
      defineGetAndSet(obj, prop, getter, setter);
    }
  }
};

var callWatchers = function (obj, prop, action, newval, oldval) {
  if (prop !== undefined) {
    var ln,
        wl,
        watchList = obj.watchers[prop];

    if (wl = obj.watchers['__watchall__']) {
      watchList = watchList ? watchList.concat(wl) : wl;
    }

    ln = watchList ? watchList.length : 0;

    for (var wr = 0; wr < ln; wr++) {
      watchList[wr].call(obj, prop, action, newval, oldval);
    }
  } else {
    for (var prop in obj) {
      //call all
      if (obj.hasOwnProperty(prop)) {
        callWatchers(obj, prop, action, newval, oldval);
      }
    }
  }
};

var methodNames = ['pop', 'push', 'reverse', 'shift', 'sort', 'slice', 'unshift', 'splice'];

var defineArrayMethodWatcher = function (obj, original, methodName, callback) {
  defineProp(obj, methodName, function () {
    var index = 0;
    var i, newValue, oldValue, response; // get values before splicing array

    if (methodName === 'splice') {
      var start = arguments[0];
      var end = start + arguments[1];
      oldValue = obj.slice(start, end);
      newValue = [];

      for (i = 2; i < arguments.length; i++) {
        newValue[i - 2] = arguments[i];
      }

      index = start;
    } else {
      newValue = arguments.length > 0 ? arguments[0] : undefined;
    }

    response = original.apply(obj, arguments);

    if (methodName !== 'slice') {
      if (methodName === 'pop') {
        oldValue = response;
        index = obj.length;
      } else if (methodName === 'push') {
        index = obj.length - 1;
      } else if (methodName === 'shift') {
        oldValue = response;
      } else if (methodName !== 'unshift' && newValue === undefined) {
        newValue = response;
      }

      callback.call(obj, index, methodName, newValue, oldValue);
    }

    return response;
  });
};

var watchFunctions = function (obj, callback) {
  if (!isFunction(callback) || !obj || obj instanceof String || !isArray(obj)) {
    return;
  }

  for (var i = methodNames.length, methodName; i--;) {
    methodName = methodNames[i];
    defineArrayMethodWatcher(obj, obj[methodName], methodName, callback);
  }
};

var unwatchOne = function (obj, prop, watcher) {
  if (prop) {
    if (obj.watchers && obj.watchers[prop]) {
      if (watcher === undefined) {
        delete obj.watchers[prop]; // remove all property watchers
      } else {
        for (var i = 0; i < obj.watchers[prop].length; i++) {
          var w = obj.watchers[prop][i];

          if (w == watcher) {
            obj.watchers[prop].splice(i, 1);
          }
        }
      }
    }
  } else {
    delete obj.watchers;
  }

  removeFromLengthSubjects(obj, prop, watcher);
  removeFromDirtyChecklist(obj, prop);
}; // suspend watchers until next update cycle


var suspend = function (obj, prop) {
  if (obj.watchers) {
    var name = '__wjs_suspend__' + (prop !== undefined ? prop : '');
    obj.watchers[name] = true;
  }
};

var isSuspended = function (obj, prop) {
  return obj.watchers && (obj.watchers['__wjs_suspend__'] || obj.watchers['__wjs_suspend__' + prop]);
}; // resumes preivously suspended watchers


var resume = function (obj, prop) {
  registerTimeout(function () {
    delete obj.watchers['__wjs_suspend__'];
    delete obj.watchers['__wjs_suspend__' + prop];
  });
};

var pendingTimerID = null;

var addPendingChange = function (obj, prop, mode, newval, oldval) {
  pendingChanges[pendingChanges.length] = {
    obj: obj,
    prop: prop,
    mode: mode,
    newval: newval,
    oldval: oldval
  };

  if (pendingTimerID === null) {
    pendingTimerID = setTimeout(applyPendingChanges);
  }
};

var applyPendingChanges = function () {
  // apply pending changes
  var change = null;
  pendingTimerID = null;

  for (var i = 0; i < pendingChanges.length; i++) {
    change = pendingChanges[i];
    callWatchers(change.obj, change.prop, change.mode, change.newval, change.oldval);
  }

  if (change) {
    pendingChanges = [];
    change = null;
  }
};

var loop = function () {
  // check for new or deleted props
  for (var i = 0; i < lengthsubjects.length; i++) {
    var subj = lengthsubjects[i];

    if (subj.prop === "$$watchlengthsubjectroot") {
      var difference = getObjDiff(subj.obj, subj.actual);

      if (difference.added.length || difference.removed.length) {
        if (difference.added.length) {
          watchMany(subj.obj, difference.added, subj.watcher, subj.level - 1, true);
        }

        subj.watcher.call(subj.obj, "root", "differentattr", difference, subj.actual);
      }

      subj.actual = clone(subj.obj);
    } else {
      var difference = getObjDiff(subj.obj[subj.prop], subj.actual);

      if (difference.added.length || difference.removed.length) {
        if (difference.added.length) {
          for (var j = 0; j < subj.obj.watchers[subj.prop].length; j++) {
            watchMany(subj.obj[subj.prop], difference.added, subj.obj.watchers[subj.prop][j], subj.level - 1, true);
          }
        }

        callWatchers(subj.obj, subj.prop, "differentattr", difference, subj.actual);
      }

      subj.actual = clone(subj.obj[subj.prop]);
    }
  } // start dirty check


  var n, value;

  if (dirtyChecklist.length > 0) {
    for (var i = 0; i < dirtyChecklist.length; i++) {
      n = dirtyChecklist[i];
      value = n.object[n.prop];

      if (!compareValues(n.orig, value)) {
        n.orig = clone(value);
        n.callback(value);
      }
    }
  }
};

var compareValues = function (a, b) {
  var i,
      state = true;

  if (a !== b) {
    if (isObject(a)) {
      for (i in a) {
        if (!supportDefineProperty && i === 'watchers') continue;

        if (a[i] !== b[i]) {
          state = false;
          break;
        }

        ;
      }
    } else {
      state = false;
    }
  }

  return state;
};

var pushToLengthSubjects = function (obj, prop, watcher, level) {
  var actual;

  if (prop === "$$watchlengthsubjectroot") {
    actual = clone(obj);
  } else {
    actual = clone(obj[prop]);
  }

  lengthsubjects.push({
    obj: obj,
    prop: prop,
    actual: actual,
    watcher: watcher,
    level: level
  });
};

var removeFromLengthSubjects = function (obj, prop, watcher) {
  for (var i = 0; i < lengthsubjects.length; i++) {
    var subj = lengthsubjects[i];

    if (subj.obj == obj) {
      if (!prop || subj.prop == prop) {
        if (!watcher || subj.watcher == watcher) {
          // if we splice off one item at position i
          // we need to decrement i as the array is one item shorter
          // so when we increment i in the loop statement we
          // will land at the correct index.
          // if it's not decremented, you won't delete all length subjects
          lengthsubjects.splice(i--, 1);
        }
      }
    }
  }
};

var removeFromDirtyChecklist = function (obj, prop) {
  var notInUse;

  for (var i = 0; i < dirtyChecklist.length; i++) {
    var n = dirtyChecklist[i];
    var watchers = n.object.watchers;
    notInUse = n.object == obj && (!prop || n.prop == prop) && watchers && (!prop || !watchers[prop] || watchers[prop].length == 0);

    if (notInUse) {
      // we use the same syntax as in removeFromLengthSubjects
      dirtyChecklist.splice(i--, 1);
    }
  }
};

setInterval(loop, 50);
WatchJS.watch = watch;
WatchJS.unwatch = unwatch;
WatchJS.callWatchers = callWatchers;
WatchJS.suspend = suspend; // suspend watchers

WatchJS.onChange = trackChange; // track changes made to object or  it's property and return a
// single change object

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchJS);

/***/ }),

/***/ "./js/holidays.js":
/*!************************!*\
  !*** ./js/holidays.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "holidays": () => (/* binding */ holidays)
/* harmony export */ });
const holidays = () => {
  const content = document.querySelectorAll('.modal-content');
  const country = document.createElement('div');
  country.classList = 'country-holidays';
  const countrySelect = document.createElement('select');
  countrySelect.classList = 'country-select';
  countrySelect.textContent = 'Choose country : ';
  const countryName = ['Andorra', 'Albania', 'Argentina', 'Austria', 'Australia', '?land Islands', 'Bosnia and Herzegovina', 'Barbados', 'Belgium', 'Bulgaria', 'Benin', 'Bolivia', 'Brazil', 'Bahamas', 'Botswana', 'Belarus', 'Belize', 'Canada', 'Switzerland', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Cuba', 'Cyprus', 'Czechia', 'Germany', 'Denmark', 'Dominican Republic', 'Ecuador', 'Estonia', 'Egypt', 'Spain', 'Finland', 'Faroe Islands', 'France', 'Gabon', 'United Kingdom', 'Grenada', 'Guernsey', 'Gibraltar', 'Greenland', 'Gambia', 'Greece', 'Guatemala', 'Guyana', 'Honduras', 'Croatia', 'Haiti', 'Hungary', 'Indonesia', 'Ireland', 'Isle of Man', 'Iceland', 'Italy', 'Jersey', 'Jamaica', 'Japan', 'South Korea', 'Liechtenstein', 'Lesotho', 'Lithuania', 'Luxembourg', 'Latvia', 'Morocco', 'Monaco', 'Moldova', 'Montenegro', 'Madagascar', 'North Macedonia', 'Mongolia', 'Montserrat', 'Malta', 'Mexico', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Nicaragua', 'Netherlands', 'Norway', 'New Zealand', 'Panama', 'Peru', 'Papua New Guinea', 'Poland', 'Puerto Rico', 'Portugal', 'Paraguay', 'Romania', 'Serbia', 'Russia', 'Sweden', 'Singapore', 'Slovenia', 'Svalbard and Jan Mayen', 'Slovakia', 'San Marino', 'Suriname', 'El Salvador', 'Tunisia', 'Turkey', 'Ukraine', 'United States', 'Uruguay', 'Vatican City', 'Venezuela', 'Vietnam', 'South Africa', 'Zimbabwe'];
  const countryCode = ['AD', 'AL', 'AR', 'AT', 'AU', 'AX', 'BA', 'BB', 'BE', 'BG', 'BJ', 'BO', 'BR', 'BS', 'BW', 'BY', 'BZ', 'CA', 'CH', 'CL', 'CN', 'CO', 'CR', 'CU', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'EG', 'ES', 'FI', 'FO', 'FR', 'GA', 'GB', 'GD', 'GG', 'GI', 'GL', 'GM', 'GR', 'GT', 'GY', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IM', 'IS', 'IT', 'JE', 'JM', 'JP', 'KR', 'LI', 'LS', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MG', 'MK', 'MN', 'MS', 'MT', 'MX', 'MZ', 'NA', 'NE', 'NG', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PG', 'PL', 'PR', 'PT', 'PY', 'RO', 'RS', 'RU', 'SE', 'SG', 'SI', 'SJ', 'SK', 'SM', 'SR', 'SV', 'TN', 'TR', 'UA', 'US', 'UY', 'VA', 'VE', 'VN', 'ZA', 'ZW'];
  let i = 0;
  countryCode.forEach(code => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = countryName[i];
    countrySelect.append(option);
    i++;
  });
  country.append(countrySelect);
  content[1].prepend(country);
  const info = document.createElement('div');
  info.classList = 'info-holidays';
  countrySelect.addEventListener('change', () => {
    const table = document.createElement('table');
    table.classList = 'table';
    let index = countrySelect.selectedIndex;
    let countrySelected = countrySelect[index].value;
    fetch('https://date.nager.at/api/v3/publicholidays/2017/' + countrySelected).then(response => response.json()).then(data => {
      data.forEach(d => {
        const cell = document.createElement('th');
        cell.classList = 'cell';
        const line = document.createElement('tr');
        line.classList = 'line';
        cell.append("Date: " + d.date + ". Local name :  " + d.localName + ". Name : " + d.name);
        line.append(cell);
        table.append(line);
        info.append(table);
        country.append(info);
      });
    }).catch(err => console.error(err));
    const th = document.querySelectorAll('.cell');
    th.forEach(t => {
      t.remove();
    });
  });
};

/***/ }),

/***/ "./js/state.js":
/*!*********************!*\
  !*** ./js/state.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "factState": () => (/* binding */ factState)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./js/const.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  openedModalType: _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS_TYPES.NONE
});
const factState = {
  facts: []
};

/***/ }),

/***/ "./js/watchers.js":
/*!************************!*\
  !*** ./js/watchers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_melanke_watchjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/melanke-watchjs.js */ "./js/helpers/melanke-watchjs.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./js/state.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ "./js/const.js");



const watch = _helpers_melanke_watchjs_js__WEBPACK_IMPORTED_MODULE_0__["default"].watch;
watch(_state_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'openedModalType', () => {
  const allModals = document.querySelectorAll('.modal');
  allModals.forEach(item => {
    item.style.display = 'none';
  });

  if (_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType !== _const_js__WEBPACK_IMPORTED_MODULE_2__.MODALS_TYPES.NONE) {
    const modal = document.querySelector(`.modal[data-type="${_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType}"]`);
    modal.style.display = 'block';
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./js/const.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./js/state.js");
/* harmony import */ var _watchers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchers.js */ "./js/watchers.js");
/* harmony import */ var _catfacts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catfacts.js */ "./js/catfacts.js");
/* harmony import */ var _holidays_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./holidays.js */ "./js/holidays.js");
/* harmony import */ var _currency_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency.js */ "./js/currency.js");







const closeModal = () => {
  _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS_TYPES.NONE;
};

const renderButtons = () => {
  const buttonsContainer = document.querySelector('.buttons');
  _const_js__WEBPACK_IMPORTED_MODULE_0__.BUTTONS.forEach(item => {
    const button = document.createElement('button');
    button.textContent = item.text;
    button.dataset.type = item.type;
    button.classList = 'btn';
    button.addEventListener('click', event => {
      _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = item.type;
      event.stopPropagation();
    });
    buttonsContainer.append(button);
  });
};

const renderModals = () => {
  const app = document.querySelector('.app');
  _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS.forEach(item => {
    const modal = document.createElement('div');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    const closeButton = document.createElement('button');
    const content = document.createElement('div');
    content.classList = 'modal-content';
    prevButton.textContent = 'Prev';
    prevButton.classList = 'prev';
    prevButton.addEventListener('click', event => {
      const currentOpenedModalIndex = _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS.findIndex(item => item.type === _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType);

      if (currentOpenedModalIndex === 0) {
        _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS[_const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS.length - 1].type;
      } else {
        _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS[currentOpenedModalIndex - 1].type;
      }

      event.stopPropagation();
    });
    nextButton.textContent = 'Next';
    nextButton.classList = 'next';
    nextButton.addEventListener('click', event => {
      const currentOpenedModalIndex = _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS.findIndex(item => item.type === _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType);

      if (currentOpenedModalIndex === _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS.length - 1) {
        _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS[0].type;
      } else {
        _state_js__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_js__WEBPACK_IMPORTED_MODULE_0__.MODALS[currentOpenedModalIndex + 1].type;
      }

      event.stopPropagation();
    });
    closeButton.textContent = 'Close';
    closeButton.classList = 'close';
    closeButton.addEventListener('click', event => {
      closeModal();
      event.stopPropagation();
    });
    modal.dataset.type = item.type;
    modal.classList.add('modal');
    const header = document.createElement('div');
    header.classList = 'header';
    header.textContent = item.text;
    modal.append(header);
    modal.append(prevButton);
    modal.append(nextButton);
    modal.append(closeButton);
    modal.append(content);
    app.append(modal);
  });
};

renderModals();
renderButtons();
(0,_catfacts_js__WEBPACK_IMPORTED_MODULE_3__.catfacts)();
(0,_holidays_js__WEBPACK_IMPORTED_MODULE_4__.holidays)();
(0,_currency_js__WEBPACK_IMPORTED_MODULE_5__.currency)();
})();

/******/ })()
;
//# sourceMappingURL=core.bundle.js.map