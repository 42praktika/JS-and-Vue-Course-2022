/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  }; // import a list of modules into the list

  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/melanke-watchjs/src/watch.js":
/*!***************************************************!*\
  !*** ./node_modules/melanke-watchjs/src/watch.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
/**
 * DEVELOPED BY
 * GIL LOPES BUENO
 * gilbueno.mail@gmail.com
 *
 * WORKS WITH:
 * IE8*, IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+, BESEN, Rhino 1.7+
 * For IE8 (and other legacy browsers) WatchJS will use dirty checking  
 *
 * FORK:
 * https://github.com/melanke/Watch.JS
 *
 * LICENSE: MIT
 */



(function (factory) {
  if (true) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {}
})(function () {
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
  } catch (ex) {/* not supported */}
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
        observeDirtyChanges(obj, propName, setter);
        //throw new Error("watchJS error: browser not supported :/")
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
      watchAll(obj[prop], watcher, level !== undefined ? level - 1 : level); //recursively watch all attributes of this
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
  };

  // Track changes made to an array, object or an object's property 
  // and invoke callback with a single change object containing type, value, oldvalue and array splices
  // Syntax: 
  //      trackChange(obj, callback, recursive, addNRemove)
  //      trackChange(obj, prop, callback, recursive, addNRemove)
  var trackChange = function () {
    var fn = isFunction(arguments[2]) ? trackProperty : trackObject;
    fn.apply(this, arguments);
  };

  // track changes made to an object and invoke callback with a single change object containing type, value and array splices
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
        }
        // create splices for array changes
        if (isArr && obj === this && change !== null) {
          if (action === 'pop' || action === 'shift') {
            newValue = [];
            oldValue = [oldValue];
          } else if (action === 'push' || action === 'unshift') {
            newValue = [newValue];
            oldValue = [];
          } else if (action !== 'splice') {
            return; // return here - for reverse and sort operations we don't need to return splices. a simple update will do
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
  };

  // track changes made to the property of an object and invoke callback with a single change object containing type, value, oldvalue and splices
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
        }

        //watchFunctions(obj, prop);

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
      var i, newValue, oldValue, response;
      // get values before splicing array 
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
  };

  // suspend watchers until next update cycle
  var suspend = function (obj, prop) {
    if (obj.watchers) {
      var name = '__wjs_suspend__' + (prop !== undefined ? prop : '');
      obj.watchers[name] = true;
    }
  };
  var isSuspended = function (obj, prop) {
    return obj.watchers && (obj.watchers['__wjs_suspend__'] || obj.watchers['__wjs_suspend__' + prop]);
  };

  // resumes preivously suspended watchers
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
    }

    // start dirty check
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
  WatchJS.onChange = trackChange; // track changes made to object or  it's property and return a single change object

  return WatchJS;
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _watchers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchers.js */ "./src/js/watchers.js");

const canClose = (parent, child) => {
  if (child === parent) {
    return false;
  }
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return false;
    }
    node = node.parentNode;
  }
  return true;
};
const app = () => {
  const state = {
    status: 'closed',
    currentWindow: null
  };
  const modalWindow = document.querySelector('.modal');
  const buttons = Array.from(document.querySelectorAll('.button-widget'));
  const closeButton = document.querySelector('.close-button');
  const nextButton = document.querySelector('.next-button');
  document.body.addEventListener('click', event => {
    if (buttons.includes(event.target)) {
      state.status = 'loading';
      state.currentWindow = document.querySelector(`.modal-container[data-type=${event.target.dataset.type}]`);
    } else if (event.target === nextButton) {
      state.currentWindow = state.currentWindow.nextSibling;
      if (state.currentWindow === null) {
        state.currentWindow = document.querySelector('.modal-container');
      }
    } else if (event.target === closeButton || canClose(modalWindow, event.target)) {
      state.status = 'closed';
    }
  });
  (0,_watchers_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initDOM = () => {
  const app = document.querySelector('.app');
  const buttonContainer = document.querySelector('.buttons');
  const button1 = document.createElement('button');
  button1.textContent = 'Кнопка 1';
  button1.dataset.type = 'button1';
  const button2 = document.createElement('button');
  button2.textContent = 'Кнопка 2';
  button2.dataset.type = 'button2';
  const button3 = document.createElement('button');
  button3.textContent = 'Кнопка 3';
  button3.dataset.type = 'button3';
  const buttons = [button1, button2, button3];
  buttons.forEach(element => {
    element.className = 'button-widget';
    buttonContainer.append(element);
  });
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal';
  modalWindow.style.display = 'none';
  app.append(modalWindow);
  const nextButton = document.createElement('button');
  nextButton.className = 'next-button';
  modalWindow.append(nextButton);
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  modalWindow.append(closeButton);
  const modalContainer1 = document.createElement('div');
  modalContainer1.className = 'modal-container';
  modalContainer1.dataset.type = 'button1';
  modalContainer1.textContent = 'Hello world 1';
  modalWindow.append(modalContainer1);
  const modalContainer2 = document.createElement('div');
  modalContainer2.className = 'modal-container';
  modalContainer2.dataset.type = 'button2';
  modalContainer2.textContent = 'Hello world 2';
  modalWindow.append(modalContainer2);
  const modalContainer3 = document.createElement('div');
  modalContainer3.className = 'modal-container';
  modalContainer3.dataset.type = 'button3';
  modalContainer3.textContent = 'Hello world 3';
  modalWindow.append(modalContainer3);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDOM);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/js/init.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/js/app.js");


const startApp = () => {
  (0,_init__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
startApp();

/***/ }),

/***/ "./src/js/watchers.js":
/*!****************************!*\
  !*** ./src/js/watchers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var melanke_watchjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! melanke-watchjs */ "./node_modules/melanke-watchjs/src/watch.js");
/* harmony import */ var melanke_watchjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(melanke_watchjs__WEBPACK_IMPORTED_MODULE_0__);

const {
  watch
} = (melanke_watchjs__WEBPACK_IMPORTED_MODULE_0___default());
const watchState = state => {
  const modalWindow = document.querySelector('.modal');
  const modalContainers = document.querySelectorAll('.modal-container');
  watch(state, 'status', () => {
    switch (state.status) {
      case 'loading':
        modalWindow.style.display = 'block';
        break;
      case 'closed':
        modalWindow.style.display = 'none';
        break;
    }
  });
  watch(state, 'currentWindow', () => {
    state.currentWindow.style.display = 'block';
    for (let i = 0; i < modalContainers.length; i++) {
      if (modalContainers[i] !== state.currentWindow) {
        modalContainers[i].style.display = 'none';
      }
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (watchState);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n}\r\n\r\n.app {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-image: url('https://wallpapersmug.com/download/2880x1800/f0932e/landscape-minimal-stars-cold-5k.jpg');\r\n    background-size: 100%;\r\n    background-position: 0 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.button-widget {\r\n    font-family: 'Arial', sans-serif;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    border-radius: 20px;\r\n    padding: 16px 24px;\r\n    cursor: pointer;\r\n    border: 2px solid #c4c4c4;\r\n    outline: none;\r\n}\r\n\r\n.button-widget:not(:last-child) {\r\n    margin-right: 16px;\r\n}\r\n\r\n.button-widget:hover {\r\n    background: #e3e3e3;\r\n}\r\n\r\n.modal {\r\n    width: 70vw;\r\n    height: 70vh;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    padding: 20px;\r\n}\r\n\r\n.close-button {\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: rgba(0,0,0,0);\r\n    position: relative;\r\n    opacity: 0.3;\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-right: 20px;\r\n}\r\n\r\n.close-button:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.close-button::before, .close-button::after {\r\n    content: '';\r\n    background-color: #000;\r\n    width: 40px;\r\n    height: 2px;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.close-button::before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.close-button::after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.next-button {\r\n    width: 20px;\r\n    height: 40px;\r\n    background-color: rgba(0,0,0,0);\r\n    position: relative;\r\n    opacity: 0.3;\r\n    cursor: pointer;\r\n    float: right;\r\n}\r\n\r\n.next-button:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.next-button::before, .next-button::after {\r\n    content: '';\r\n    background-color: #000;\r\n    width: 20px;\r\n    height: 2px;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.next-button::before {\r\n    transform: rotate(45deg);\r\n    top: 13px;\r\n}\r\n\r\n.next-button::after {\r\n    transform: rotate(-45deg);\r\n    bottom: 12px;\r\n}\r\n\r\n.modal-container {\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
__webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
})();

/******/ })()
;