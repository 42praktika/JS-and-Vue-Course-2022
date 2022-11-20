/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/melanke-watchjs/src/watch.js":
/*!***************************************************!*\
  !*** ./node_modules/melanke-watchjs/src/watch.js ***!
  \***************************************************/
/***/ ((module) => {

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
}(function () {

    var WatchJS = {
        noMore: false,        // use WatchJS.suspend(obj) instead
        useDirtyCheck: false, // use only dirty checking to track changes.
        preserveExistingSetters: false
    },
    lengthsubjects = [];
    
    var dirtyChecklist = [];
    var pendingChanges = []; // used coalesce changes from defineProperty and __defineSetter__
    
    var supportDefineProperty = false;
    try {
        supportDefineProperty = Object.defineProperty && Object.defineProperty({},'x', {});
    } catch(ex) {  /* not supported */  }

    var isFunction = function (functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
    };

    var isInt = function (x) {
        return x % 1 === 0;
    };

    var isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    var isObject = function(obj) {
        return {}.toString.apply(obj) === '[object Object]';
    };
    
    var getObjDiff = function(a, b){
        var aplus = [],
        bplus = [];

        if(!(typeof a == "string") && !(typeof b == "string")){

            if (isArray(a) && b) {
                for (var i=0; i<a.length; i++) {
                    if (b[i] === undefined) aplus.push(i);
                }
            } else {
                for(var i in a){
                    if (a.hasOwnProperty(i)) {
                        if(b && !b.hasOwnProperty(i)) {
                            aplus.push(i);
                        }
                    }
                }
            }

            if (isArray(b) && a) {
                for (var j=0; j<b.length; j++) {
                    if (a[j] === undefined) bplus.push(j);
                }
            } else {
                for(var j in b){
                    if (b.hasOwnProperty(j)) {
                        if(a && !a.hasOwnProperty(j)) {
                            bplus.push(j);
                        }
                    }
                }
            }
        }

        return {
            added: aplus,
            removed: bplus
        }
    };

    var clone = function(obj){

        if (null == obj || "object" != typeof obj) {
            return obj;
        }

        var copy = obj.constructor();

        for (var attr in obj) {
            copy[attr] = obj[attr];
        }

        return copy;        

    }

    var getExistingSetter = function (obj, propName) {
        if (WatchJS.preserveExistingSetters) {
            var existing = Object.getOwnPropertyDescriptor(obj, propName);
            return existing.set;
        }

        return undefined;
    }

    var defineGetAndSet = function (obj, propName, getter, setter) {
        try {
            var existingSetter = getExistingSetter(obj, propName);
            Object.defineProperty(obj, propName, {
                get: getter,
                set: function(value) {
                    setter.call(this, value, true); // coalesce changes
                    if (existingSetter) {
                        existingSetter(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
        }
        catch(e1) {
            try{
                Object.prototype.__defineGetter__.call(obj, propName, getter);
                Object.prototype.__defineSetter__.call(obj, propName, function(value) {
                    setter.call(this,value,true); // coalesce changes
                });
            }
            catch(e2) {
                observeDirtyChanges(obj,propName,setter);
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
        } catch(error) {
            obj[propName] = value;
        }
    };

    var observeDirtyChanges = function(obj,propName,setter) {
        dirtyChecklist[dirtyChecklist.length] = {
            prop:       propName,
            object:     obj,
            orig:       clone(obj[propName]),
            callback:   setter
        }        
    }
    
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

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if(isArray(obj)) {
            defineWatcher(obj, "__watchall__", watcher, level); // watch all changes on the array
            if (level===undefined||level > 0) {
                for (var prop = 0; prop < obj.length; prop++) { // watch objects in array
                   watchAll(obj[prop],watcher,level, addNRemove);
                }
            }
        } 
        else {
            var prop,props = [];
            for (prop in obj) { //for each attribute if obj is an object
                if (prop == "$val" || (!supportDefineProperty && prop === 'watchers')) {
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

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        for (var i=0; i<props.length; i++) { //watch each property
            var prop = props[i];
            watchOne(obj, prop, watcher, level, addNRemove);
        }

    };

    var watchOne = function (obj, prop, watcher, level, addNRemove) {
        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if(isFunction(obj[prop])) { //dont watch if it is a function
            return;
        }
        if(obj[prop] != null && (level === undefined || level > 0)){
            watchAll(obj[prop], watcher, level!==undefined? level-1 : level); //recursively watch all attributes of this
        }

        defineWatcher(obj, prop, watcher, level);

        if(addNRemove && (level === undefined || level > 0)){
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

        if (obj instanceof String || (!(obj instanceof Object) && !isArray(obj))) { //accepts only objects and array (not string)
            return;
        }

        if (isArray(obj)) {
            var props = ['__watchall__'];
            for (var prop = 0; prop < obj.length; prop++) { //for each item if obj is an array
                props.push(prop); //put in the props
            }
            unwatchMany(obj, props, watcher); //watch all itens of the props
        } else {
            var unwatchPropsInObject = function (obj2) {
                var props = [];
                for (var prop2 in obj2) { //for each attribute if obj is an object
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

        for (var prop2 in props) { //watch each attribute of "props" if is an object
            if (props.hasOwnProperty(prop2)) {
                unwatchOne(obj, props[prop2], watcher);
            }
        }
    };

    var timeouts = [],
        timerID = null;
    function clearTimerID() {
        timerID = null;
        for(var i=0; i< timeouts.length; i++) {
            timeouts[i]();
        }
        timeouts.length = 0;
    }
    var getTimerID= function () {
        if (!timerID)  {
            timerID = setTimeout(clearTimerID);
        }
        return timerID;
    }
    var registerTimeout = function(fn) { // register function to be called on timeout
        if (timerID==null) getTimerID();
        timeouts[timeouts.length] = fn;
    }
    
    // Track changes made to an array, object or an object's property 
    // and invoke callback with a single change object containing type, value, oldvalue and array splices
    // Syntax: 
    //      trackChange(obj, callback, recursive, addNRemove)
    //      trackChange(obj, prop, callback, recursive, addNRemove)
    var trackChange = function() {
        var fn = (isFunction(arguments[2])) ? trackProperty : trackObject ;
        fn.apply(this,arguments);
    }

    // track changes made to an object and invoke callback with a single change object containing type, value and array splices
    var trackObject= function(obj, callback, recursive, addNRemove) {
        var change = null,lastTimerID = -1;
        var isArr = isArray(obj);
        var level,fn = function(prop, action, newValue, oldValue) {
            var timerID = getTimerID();
            if (lastTimerID!==timerID) { // check if timer has changed since last update
                lastTimerID = timerID;
                change = {
                    type: 'update'
                }
                change['value'] = obj;
                change['splices'] = null;
                registerTimeout(function() {
                    callback.call(this,change);
                    change = null;
                });
            }
            // create splices for array changes
            if (isArr && obj === this && change !== null)  {                
                if (action==='pop'||action==='shift') {
                    newValue = [];
                    oldValue = [oldValue];
                }
                else if (action==='push'||action==='unshift') {
                    newValue = [newValue];
                    oldValue = [];
                }
                else if (action!=='splice') { 
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

        }  
        level = (recursive==true) ? undefined : 0;        
        watchAll(obj,fn, level, addNRemove);
    }
    
    // track changes made to the property of an object and invoke callback with a single change object containing type, value, oldvalue and splices
    var trackProperty = function(obj,prop,callback,recursive, addNRemove) { 
        if (obj && prop) {
            watchOne(obj,prop,function(prop, action, newvalue, oldvalue) {
                var change = {
                    type: 'update'
                }
                change['value'] = newvalue;
                change['oldvalue'] = oldvalue;
                if (recursive && isObject(newvalue)||isArray(newvalue)) {
                    trackObject(newvalue,callback,recursive, addNRemove);
                }               
                callback.call(this,change);
            },0)
            
            if (recursive && isObject(obj[prop])||isArray(obj[prop])) {
                trackObject(obj[prop],callback,recursive, addNRemove);
            }                           
        }
    }
    
    
    var defineWatcher = function (obj, prop, watcher, level) {
        var newWatcher = false;
        var isArr = isArray(obj);
        
        if (!obj.watchers) {
            defineProp(obj, "watchers", {});
            if (isArr) {
                // watch array functions
                watchFunctions(obj, function(index,action,newValue, oldValue) {
                    addPendingChange(obj, index, action,newValue, oldValue);
                    if (level !== 0 && newValue && (isObject(newValue) || isArray(newValue))) {
                        var i,n, ln, wAll, watchList = obj.watchers[prop];
                        if ((wAll = obj.watchers['__watchall__'])) {
                            watchList = watchList ? watchList.concat(wAll) : wAll;
                        }
                        ln = watchList ?  watchList.length : 0;
                        for (i = 0; i<ln; i++) {
                            if (action!=='splice') {
                                watchAll(newValue, watchList[i], (level===undefined)?level:level-1);
                            }
                            else {
                                // watch spliced values
                                for(n=0; n < newValue.length; n++) {
                                    watchAll(newValue[n], watchList[i], (level===undefined)?level:level-1);
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

        for (var i=0; i<obj.watchers[prop].length; i++) {
            if(obj.watchers[prop][i] === watcher){
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
                if (level !== 0 
                    && obj[prop] && (isObject(obj[prop]) || isArray(obj[prop]))
                    && !obj[prop].watchers) {
                    // watch sub properties
                    var i,ln = obj.watchers[prop].length; 
                    for(i=0; i<ln; i++) {
                        watchAll(obj[prop], obj.watchers[prop][i], (level===undefined)?level:level-1);
                    }
                }

                //watchFunctions(obj, prop);
                
                if (isSuspended(obj, prop)) {
                    resume(obj, prop);
                    return;
                }

                if (!WatchJS.noMore){ // this does not work with Object.observe
                    //if (JSON.stringify(oldval) !== JSON.stringify(newval)) {
                    if (obj[prop] instanceof Date && oldval && newval) {
                        oldval = oldval.valueOf();
                        newval = newval.valueOf();
                    }	
                    if (oldval !== newval) {
                        if (!delayWatcher) {
                            callWatchers(obj, prop, "set", newval, oldval);
                        }
                        else {
                            addPendingChange(obj, prop, "set", newval, oldval);
                        }
                        WatchJS.noMore = false;
                    }
                }
            };

            if (WatchJS.useDirtyCheck) {
                observeDirtyChanges(obj,prop,setter);
            }
            else {
                defineGetAndSet(obj, prop, getter, setter);
            }
        }

    };

    var callWatchers = function (obj, prop, action, newval, oldval) {
        if (prop !== undefined) {
            var ln, wl, watchList = obj.watchers[prop];
            if ((wl = obj.watchers['__watchall__'])) {
                watchList = watchList ? watchList.concat(wl) : wl;
            }
            ln = watchList ? watchList.length : 0;
            for (var wr=0; wr< ln; wr++) {
                watchList[wr].call(obj, prop, action, newval, oldval);
            }
        } else {
            for (var prop in obj) {//call all
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
            var i,newValue, oldValue, response;                        
            // get values before splicing array 
            if (methodName === 'splice') {
               var start = arguments[0];
               var end = start + arguments[1];
               oldValue = obj.slice(start,end);
               newValue = [];
               for(i=2;i<arguments.length;i++) {
                   newValue[i-2] = arguments[i];
               }
               index = start;
            } 
            else {
                newValue = arguments.length > 0 ? arguments[0] : undefined;
            } 

            response = original.apply(obj, arguments);
            if (methodName !== 'slice') {
                if (methodName === 'pop') {
                    oldValue = response;
                    index = obj.length;
                }
                else if (methodName === 'push') {
                    index = obj.length-1;
                }
                else if (methodName === 'shift') {
                    oldValue = response;
                }
                else if (methodName !== 'unshift' && newValue===undefined) {
                    newValue = response;
                }
                callback.call(obj, index, methodName,newValue, oldValue)
            }
            return response;
        });
    };

    var watchFunctions = function(obj, callback) {

        if (!isFunction(callback) || !obj || (obj instanceof String) || (!isArray(obj))) {
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
                }
                else {
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
    var suspend = function(obj, prop) {
        if (obj.watchers) {
            var name = '__wjs_suspend__'+(prop!==undefined ? prop : '');
            obj.watchers[name] = true;
        }
    }
    
    var isSuspended = function(obj, prop) {
        return obj.watchers 
               && (obj.watchers['__wjs_suspend__'] || 
                   obj.watchers['__wjs_suspend__'+prop]);
    }
    
    // resumes preivously suspended watchers
    var resume = function(obj, prop) {
        registerTimeout(function() {
            delete obj.watchers['__wjs_suspend__'];
            delete obj.watchers['__wjs_suspend__'+prop];
        })
    }

    var pendingTimerID = null;
    var addPendingChange = function(obj,prop, mode, newval, oldval) {
        pendingChanges[pendingChanges.length] = {
            obj:obj,
            prop: prop,
            mode: mode,
            newval: newval,
            oldval: oldval
        };
        if (pendingTimerID===null) {
            pendingTimerID = setTimeout(applyPendingChanges);
        }
    };
    
    
    var applyPendingChanges = function()  {
        // apply pending changes
        var change = null;
        pendingTimerID = null;
        for(var i=0;i < pendingChanges.length;i++) {
            change = pendingChanges[i];
            callWatchers(change.obj, change.prop, change.mode, change.newval, change.oldval);
        }
        if (change) {
            pendingChanges = [];
            change = null;
        }        
    }

    var loop = function(){

        // check for new or deleted props
        for(var i=0; i<lengthsubjects.length; i++) {

            var subj = lengthsubjects[i];

            if (subj.prop === "$$watchlengthsubjectroot") {

                var difference = getObjDiff(subj.obj, subj.actual);

                if(difference.added.length || difference.removed.length){
                    if(difference.added.length){
                        watchMany(subj.obj, difference.added, subj.watcher, subj.level - 1, true);
                    }

                    subj.watcher.call(subj.obj, "root", "differentattr", difference, subj.actual);
                }
                subj.actual = clone(subj.obj);


            } else {

                var difference = getObjDiff(subj.obj[subj.prop], subj.actual);

                if(difference.added.length || difference.removed.length){
                    if(difference.added.length){
                        for (var j=0; j<subj.obj.watchers[subj.prop].length; j++) {
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

    var compareValues =  function(a,b) {
        var i, state = true;
        if (a!==b)  {
            if (isObject(a)) {
                for(i in a) {
                    if (!supportDefineProperty && i==='watchers') continue;
                    if (a[i]!==b[i]) {
                        state = false;
                        break;
                    };
                }
            }
            else {
                state = false;
            }
        }
        return state;
    }
    
    var pushToLengthSubjects = function(obj, prop, watcher, level){

        var actual;

        if (prop === "$$watchlengthsubjectroot") {
            actual =  clone(obj);
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

    var removeFromLengthSubjects = function(obj, prop, watcher){
        for (var i=0; i<lengthsubjects.length; i++) {
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
    
    var removeFromDirtyChecklist = function(obj, prop){
        var notInUse;
        for (var i=0; i<dirtyChecklist.length; i++) {
            var n = dirtyChecklist[i];
            var watchers = n.object.watchers;
            notInUse = (
                n.object == obj 
                && (!prop || n.prop == prop)
                && watchers
                && (!prop || !watchers[prop] || watchers[prop].length == 0 )
            );
            if (notInUse)  {
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
    WatchJS.onChange = trackChange;  // track changes made to object or  it's property and return a single change object

    return WatchJS;

}));


/***/ }),

/***/ "./js/const/modals.js":
/*!****************************!*\
  !*** ./js/const/modals.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUTTONS": () => (/* binding */ BUTTONS),
/* harmony export */   "MODALS": () => (/* binding */ MODALS),
/* harmony export */   "MODALS_TYPES": () => (/* binding */ MODALS_TYPES)
/* harmony export */ });
const MODALS_TYPES = {
  NONE: 'none',
  SHOWS: 'shows',
  DOGS: 'dogs',
  MAKEUP: 'makeup'
};
const BUTTONS = [{
  text: 'TV SHOWS',
  type: MODALS_TYPES.SHOWS
}, {
  text: 'GET A DOG',
  type: MODALS_TYPES.DOGS
}, {
  text: 'MAKEUP PRODUCTS',
  type: MODALS_TYPES.MAKEUP
}];
const MODALS = [{
  text: 'Enter the title of TV show ang get it!',
  type: MODALS_TYPES.SHOWS
}, {
  text: 'Select a breed of dog and get picture!',
  type: MODALS_TYPES.DOGS
}, {
  text: 'Select brand and type of product and get all products!',
  type: MODALS_TYPES.MAKEUP
}];

/***/ }),

/***/ "./js/state/state.js":
/*!***************************!*\
  !*** ./js/state/state.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/const/modals */ "./js/const/modals.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  openedModalType: _const_modals__WEBPACK_IMPORTED_MODULE_0__.MODALS_TYPES.NONE
});

/***/ }),

/***/ "./js/watchers/watcher.js":
/*!********************************!*\
  !*** ./js/watchers/watcher.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var melanke_watchjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! melanke-watchjs */ "./node_modules/melanke-watchjs/src/watch.js");
/* harmony import */ var melanke_watchjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(melanke_watchjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/state */ "./js/state/state.js");
/* harmony import */ var _const_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/const/modals */ "./js/const/modals.js");



const watch = (melanke_watchjs__WEBPACK_IMPORTED_MODULE_0___default().watch);
watch(_state_state__WEBPACK_IMPORTED_MODULE_1__["default"], 'openedModalType', () => {
  const allWidgets = document.querySelectorAll('.widget');
  allWidgets.forEach(item => {
    item.style.display = "none";
  });

  if (_state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType !== _const_modals__WEBPACK_IMPORTED_MODULE_2__.MODALS_TYPES.NONE) {
    const widget = document.querySelector(`.widget[data-type="${_state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType}"]`);
    widget.style.display = "block";
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const/modals */ "./js/const/modals.js");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/state */ "./js/state/state.js");
/* harmony import */ var _watchers_watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchers/watcher */ "./js/watchers/watcher.js");




const renderButtons = () => {
  const buttons = document.querySelector('.buttons');
  _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS.forEach(item => {
    const button = document.createElement('button');
    button.classList.add('btnWidget');
    const buttonText = document.createElement('p');
    buttonText.textContent = item.text;
    button.dataset.type = item.type;
    button.appendChild(buttonText);
    button.addEventListener('click', event => {
      _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = item.type;
      event.stopPropagation();
    });
    buttons.append(button);
  });
};

const renderModals = () => {
  const page = document.querySelector('.wholePage');
  _const_modals__WEBPACK_IMPORTED_MODULE_0__.MODALS.forEach(item => {
    const widget = document.createElement('div');
    widget.classList.add('widget');
    widget.dataset.type = item.type;
    const widgetText = document.createElement('p');
    widgetText.textContent = item.text;
    const exitButton = document.createElement('button');
    exitButton.classList.add("exitButton");
    const exitIcon = document.createElement('div');
    exitIcon.classList.add("iconButton");
    exitIcon.textContent = "X";
    exitButton.addEventListener("click", event => {
      _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_modals__WEBPACK_IMPORTED_MODULE_0__.MODALS_TYPES.NONE;
      event.stopPropagation();
    });
    const nextButton = document.createElement('button');
    nextButton.classList.add("nextButton");
    const nextIcon = document.createElement('div');
    nextIcon.classList.add("iconButton");
    nextIcon.textContent = ">";
    nextButton.addEventListener("click", event => {
      const currentWidgetIndex = _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS.findIndex(item => item.type === _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType);

      if (currentWidgetIndex === _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS.length - 1) {
        _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS[0].type;
      } else {
        _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS[currentWidgetIndex + 1].type;
      }

      event.stopPropagation();
    });
    const prevButton = document.createElement('button');
    prevButton.classList.add("prevButton");
    const prevIcon = document.createElement('div');
    prevIcon.classList.add("iconButton");
    prevIcon.textContent = "<";
    prevButton.addEventListener("click", event => {
      const currentWidgetIndex = _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS.findIndex(item => item.type === _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType);

      if (currentWidgetIndex === 0) {
        _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS[_const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS.length - 1].type;
      } else {
        _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].openedModalType = _const_modals__WEBPACK_IMPORTED_MODULE_0__.BUTTONS[currentWidgetIndex - 1].type;
      }

      event.stopPropagation();
    });
    prevButton.append(prevIcon);
    exitButton.append(exitIcon);
    nextButton.append(nextIcon);
    widget.append(nextButton);
    widget.append(exitButton);
    widget.append(prevButton);
    widget.append(widgetText);
    page.append(widget);

    switch (item.type) {
      case _const_modals__WEBPACK_IMPORTED_MODULE_0__.MODALS_TYPES.SHOWS:
        const input = document.createElement('input');
        const searchButton = document.createElement('button');
        searchButton.textContent = "Search";
        searchButton.classList.add("searchButton");
        const content = document.createElement('div');
        content.classList.add("widgetContent");
        searchButton.addEventListener('click', () => {
          document.querySelectorAll('.films').forEach(item => item.remove());
          fetch("https://api.tvmaze.com/search/shows?q=" + input.value).then(response => response.json()).then(data => data.forEach(item => {
            const film = document.createElement('div');
            film.classList.add("films");
            const site = document.createElement('div');
            site.classList.add("site");
            const siteURL = document.createElement('a');
            siteURL.classList.add("siteURL");
            siteURL.href = item.show.officialSite;
            siteURL.textContent = item.show.name;
            site.append(siteURL);
            film.append(site);
            const image = document.createElement("div");
            image.classList.add("images");
            const img = document.createElement('img');
            img.classList.add('image');
            img.src = item.show.image.original;
            image.append(img);
            film.append(image);
            content.append(film);
          }).catch(err => alert(err)));
          input.value = "";
          widget.append(content);
        });
        widget.append(input);
        widget.append(searchButton);
        break;

      case _const_modals__WEBPACK_IMPORTED_MODULE_0__.MODALS_TYPES.DOGS:
        const select = document.createElement("div");
        select.classList.add("selectDog");
        const selectBreed = document.createElement("select");
        select.append(selectBreed);
        const breeds = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "chihuahua", "chow", "clumber", "cockapoo", "coonhound", "cotondetulear", "dachshund", "dalmatian", "dhole", "dingo", "doberman", "entlebucher", "eskimo", "germanshepherd", "golden", "groenendael", "havanese", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mexicanhairless", "mix", "newfoundland", "otterhound", "papillon", "pekinese", "pembroke", "pitbull", "pomeranian", "pug", "puggle", "pyrenees", "whippet", "weimaraner", "vizsla", "tervuren", "stbernard", "shihtzu", "shiba", "sharpei", "saluki"];
        breeds.forEach(breed => {
          const option = document.createElement("option");
          option.textContent = breed;
          option.value = breed;
          selectBreed.add(option);
        });
        selectBreed.addEventListener('change', () => {
          let selectedBreed = document.querySelector('select').selectedIndex;
          let breed = selectBreed[selectedBreed].text;
          fetch("https://dog.ceo/api/breed/" + breed + "/images/random").then(response => response.json()).then(data => {
            const dogIMG = document.createElement("div");
            dogIMG.classList.add("dogImage");
            const img = document.createElement('img');
            img.classList.add("dogImg");
            img.src = data.message;
            dogIMG.append(img);
            widget.append(dogIMG);
          }).catch(err => alert(err));
          document.querySelector(".dogImage").remove();
        });
        widget.append(select);
        break;

      case _const_modals__WEBPACK_IMPORTED_MODULE_0__.MODALS_TYPES.MAKEUP:
        const selectors = document.createElement("div");
        selectors.classList.add("selectors");
        const selectBrand = document.createElement("select");
        selectBrand.classList.add("brand");
        const brands = ["almay", "alva", "annabelle", "benefit", "boosh", "clinique", "colourpop", "covergirl", "dalish", "deciem", "dior", "essie", "fenty", "glossier", "iman", "l'oreal", "marcelle", "marienatie", "maybelline", "milani", "misa", "mistura", "moov", "nudus", "nyx", "orly", "pacifica", "revlon", "sante", "stila", "smashbox", "suncoat", "zorah"];
        brands.forEach(brand => {
          const option = document.createElement("option");
          option.textContent = brand;
          option.value = brand;
          selectBrand.add(option);
        });
        const selectProduct = document.createElement("select");
        selectProduct.classList.add("product");
        const products = ["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lipstick", "mascara"];
        products.forEach(product => {
          const option = document.createElement("option");
          option.textContent = product;
          option.value = product;
          selectProduct.add(option);
        });
        selectProduct.addEventListener("change", () => {
          document.querySelectorAll('.productCard').forEach(item => item.remove());
          let selectedBrand = document.querySelector('.brand').selectedIndex;
          let selectedProduct = document.querySelector(".product").selectedIndex;
          let brand = selectBrand[selectedBrand].text;
          let product = selectProduct[selectedProduct].text;
          fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + brand + "&product_type=" + product).then(response => response.json()).then(data => data.forEach(item => {
            const productCard = document.createElement('div');
            productCard.classList.add("productCard");
            const site = document.createElement('div');
            site.classList.add("site");
            const productName = document.createElement("a");
            productName.classList.add("siteURL");
            productName.href = item.product_link;
            productName.textContent = item.name;
            const price = document.createElement("div");
            const priceText = document.createElement("p");
            priceText.textContent = item.price + " $";
            price.append(priceText);
            const image = document.createElement("div");
            image.classList.add("images");
            let img = document.createElement("img");
            img.classList.add("image");
            img.src = item.image_link;
            image.append(img);
            site.append(productName);
            productCard.append(site);
            productCard.append(image);
            productCard.append(price);
            widget.append(productCard);
          })).catch(err => alert(err));
        });
        selectors.append(selectBrand);
        selectors.append(selectProduct);
        widget.append(selectors);
    }
  });
};

renderButtons();
renderModals();
})();

/******/ })()
;
//# sourceMappingURL=core.bundle.js.map