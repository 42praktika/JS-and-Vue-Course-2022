/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/ModalCats.js":
/*!*************************!*\
  !*** ./js/ModalCats.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state.js */ "./js/state.js");


const addCatsListeners = () => {
  const radioPNG = document.getElementsByName('imageTypeRadio')[0];
  const imageTextInput = document.querySelector('.image-text-input');
  const filterSelector = document.querySelector('.filter-selector');
  const submitButton = document.querySelector('.btn-submit--CATS');
  imageTextInput.value = '';
  const imageFilters = ['', 'blur', 'mono', 'sepia', 'negative', 'paint', 'pixel'];
  submitButton.addEventListener('click', () => {
    _state_js__WEBPACK_IMPORTED_MODULE_1__.catsModalState.isLoading = true;
    let imageType = radioPNG.checked ? 'PNG' : 'GIF';
    let imageText = imageTextInput.value;
    let filter = imageFilters[filterSelector.selectedIndex];
    let imageRequest;
    let promises = [];
    if (imageText === '') {
      imageRequest = imageType === 'PNG' ? `https://cataas.com/cat?filter=${filter}&json=true` : `https://cataas.com/cat/gif?filter=${filter}&json=true`;
    } else {
      imageRequest = imageType === 'PNG' ? `https://cataas.com/cat/says/${imageText}?filter=${filter}&json=true` : `https://cataas.com/cat/gif/says/${imageText}?filter=${filter}&json=true`;
    }
    promises.push(axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://meowfacts.herokuapp.com/?lang=rus').then(response => _state_js__WEBPACK_IMPORTED_MODULE_1__.catsModalState.fact = response.data.data[0]));
    promises.push(axios__WEBPACK_IMPORTED_MODULE_0___default().get(imageRequest).then(response => _state_js__WEBPACK_IMPORTED_MODULE_1__.catsModalState.imageURL = 'https://cataas.com' + response.data.url));
    Promise.all(promises).then(() => _state_js__WEBPACK_IMPORTED_MODULE_1__.catsModalState.isLoading = false);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCatsListeners);

/***/ }),

/***/ "./js/ModalRickAndMorty.js":
/*!*********************************!*\
  !*** ./js/ModalRickAndMorty.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/state */ "./js/state.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts */ "./js/consts.js");


const addRickAndMortyListeners = () => {
  const statusSelector = document.querySelector('.status-selector');
  const genderSelector = document.querySelector('.gender-selector');
  statusSelector.addEventListener('change', () => {
    _state__WEBPACK_IMPORTED_MODULE_0__.charactersModalState.status = _consts__WEBPACK_IMPORTED_MODULE_1__.characterStatuses[statusSelector.selectedIndex];
    fetchToAPI();
  });
  genderSelector.addEventListener('change', () => {
    _state__WEBPACK_IMPORTED_MODULE_0__.charactersModalState.gender = _consts__WEBPACK_IMPORTED_MODULE_1__.characterGenders[genderSelector.selectedIndex];
    fetchToAPI();
  });
};
const fetchToAPI = () => {
  _state__WEBPACK_IMPORTED_MODULE_0__.charactersModalState.isLoading = true;
  const request = `https://rickandmortyapi.com/api/character/?gender=${_state__WEBPACK_IMPORTED_MODULE_0__.charactersModalState.gender}&status=${_state__WEBPACK_IMPORTED_MODULE_0__.charactersModalState.status}`;
  fetch(request).then(response => response.json()).then(data => {
    _state__WEBPACK_IMPORTED_MODULE_0__.charactersModalState.characters = data.results;
    _state__WEBPACK_IMPORTED_MODULE_0__.charactersModalState.isLoading = false;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addRickAndMortyListeners);

/***/ }),

/***/ "./js/ModalSunrise.js":
/*!****************************!*\
  !*** ./js/ModalSunrise.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/state */ "./js/state.js");

const addSunriseListeners = () => {
  const submitButton = document.querySelector('.btn-submit--SUNRISE');
  const latitudeInput = document.querySelector('.latitude-input');
  const longitudeInput = document.querySelector('.longitude-input');
  const dateInput = document.querySelector('.date-input');
  submitButton.addEventListener('click', () => {
    _state__WEBPACK_IMPORTED_MODULE_0__.sunriseState.isLoading = true;
    let request = `https://api.sunrise-sunset.org/json?lat=${latitudeInput.value}&lng=
                        ${longitudeInput.value}&date=${dateInput.value}`;
    fetch(request).then(response => response.json()).then(data => {
      _state__WEBPACK_IMPORTED_MODULE_0__.sunriseState.sunrise = data.results.sunrise;
      _state__WEBPACK_IMPORTED_MODULE_0__.sunriseState.sunset = data.results.sunset;
      _state__WEBPACK_IMPORTED_MODULE_0__.sunriseState.isLoading = false;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addSunriseListeners);

/***/ }),

/***/ "./js/consts.js":
/*!**********************!*\
  !*** ./js/consts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODAL_WINDOWS": () => (/* binding */ MODAL_WINDOWS),
/* harmony export */   "characterGenders": () => (/* binding */ characterGenders),
/* harmony export */   "characterStatuses": () => (/* binding */ characterStatuses),
/* harmony export */   "navigationButtonsTypes": () => (/* binding */ navigationButtonsTypes)
/* harmony export */ });
const MODAL_WINDOWS = {
  'CATS': '.modal-cats',
  'RICKANDMORTY': '.modal-RickAndMorty',
  'SUNRISE': '.modal-sunrise'
};
const navigationButtonsTypes = {
  close: 'close',
  next: 'next',
  back: 'back'
};
const characterStatuses = ['', 'alive', 'dead', 'unknown'];
const characterGenders = ['', 'male', 'female', 'genderless', 'unknown'];

/***/ }),

/***/ "./js/state.js":
/*!*********************!*\
  !*** ./js/state.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appState": () => (/* binding */ appState),
/* harmony export */   "catsModalState": () => (/* binding */ catsModalState),
/* harmony export */   "charactersModalState": () => (/* binding */ charactersModalState),
/* harmony export */   "sunriseState": () => (/* binding */ sunriseState)
/* harmony export */ });
const appState = {
  openedModalIndex: -1
};
const catsModalState = {
  imageURL: '',
  fact: '',
  isLoading: false
};
const charactersModalState = {
  isLoading: false,
  characters: [],
  status: '',
  gender: ''
};
const sunriseState = {
  isLoading: false,
  sunrise: '',
  sunset: ''
};

/***/ }),

/***/ "./js/watchers.js":
/*!************************!*\
  !*** ./js/watchers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "watchAppState": () => (/* binding */ watchAppState),
/* harmony export */   "watchCatsState": () => (/* binding */ watchCatsState),
/* harmony export */   "watchCharactersState": () => (/* binding */ watchCharactersState),
/* harmony export */   "watchSunriseState": () => (/* binding */ watchSunriseState)
/* harmony export */ });
/* harmony import */ var melanke_watchjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! melanke-watchjs */ "../../node_modules/melanke-watchjs/src/watch.js");
/* harmony import */ var melanke_watchjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(melanke_watchjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts.js */ "./js/consts.js");


const {
  watch
} = (melanke_watchjs__WEBPACK_IMPORTED_MODULE_0___default());
const modalsKeys = Object.keys(_consts_js__WEBPACK_IMPORTED_MODULE_1__.MODAL_WINDOWS);
const watchAppState = appState => {
  watch(appState, 'openedModalIndex', () => {
    if (appState.openedModalIndex !== -1) {
      modalsKeys.forEach(key => {
        const closedModal = document.querySelector(_consts_js__WEBPACK_IMPORTED_MODULE_1__.MODAL_WINDOWS[key]);
        closedModal.style.display = 'none';
      });
      const openedModalElement = document.querySelector(_consts_js__WEBPACK_IMPORTED_MODULE_1__.MODAL_WINDOWS[modalsKeys[appState.openedModalIndex]]);
      openedModalElement.style.display = 'block';
    } else {
      modalsKeys.forEach(key => {
        const closedModal = document.querySelector(_consts_js__WEBPACK_IMPORTED_MODULE_1__.MODAL_WINDOWS[key]);
        closedModal.style.display = 'none';
      });
    }
  });
};
const watchCatsState = catsState => {
  watch(catsState, 'isLoading', () => {
    const fact = document.querySelector('.cat-fact');
    const image = document.querySelector('.cat-image');
    const imageTextInput = document.querySelector('.image-text-input');
    const loadingSpinner = document.querySelector('.loading-spinner--CATS');
    if (catsState.isLoading) {
      loadingSpinner.style.display = 'block';
    } else {
      fact.textContent = catsState.fact;
      image.src = catsState.imageURL;
      fact.style.display = 'block';
      image.style.display = 'block';
      imageTextInput.value = '';
      loadingSpinner.style.display = 'none';
    }
  });
};
const watchCharactersState = charactersState => {
  watch(charactersState, 'isLoading', () => {
    const charactersElement = document.querySelector('.characters');
    const loadingSpinner = document.querySelector('.loading-spinner--RickAndMorty');
    const characterTags = ['status', 'gender', 'species'];
    if (charactersState.isLoading) {
      loadingSpinner.style.display = 'block';
    } else {
      charactersElement.innerHTML = '';
      charactersState.characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'character';
        const title = document.createElement('h4');
        title.textContent = character.name;
        characterElement.append(title);
        const image = document.createElement('img');
        image.className = "character__img";
        image.src = character.image;
        characterElement.append(image);
        characterTags.forEach(tag => {
          const tagElement = document.createElement('div');
          tagElement.className = `character__tag character__tag--${tag}`;
          const type = document.createElement('span');
          type.className = "character__tag__type";
          type.textContent = tag;
          tagElement.append(type);
          const value = document.createElement('span');
          value.className = "character__tag__value";
          value.textContent = character[tag];
          tagElement.append(value);
          characterElement.append(tagElement);
        });
        charactersElement.append(characterElement);
      });
      loadingSpinner.style.display = 'none';
    }
  });
};
const watchSunriseState = sunriseState => {
  watch(sunriseState, 'isLoading', () => {
    const loadingSpinner = document.querySelector('.loading-spinner--SUNRISE');
    const sunriseElement = document.querySelector('.SUNRISE-information__element__sunrise');
    const sunsetElement = document.querySelector('.SUNRISE-information__element__sunset');
    if (sunriseState.isLoading) {
      loadingSpinner.style.display = 'block';
    } else {
      sunriseElement.textContent = 'Sunrise: ' + sunriseState.sunrise;
      sunsetElement.textContent = 'Sunset: ' + sunriseState.sunset;
      loadingSpinner.style.display = 'none';
    }
  });
};


/***/ }),

/***/ "../../node_modules/axios/index.js":
/*!*****************************************!*\
  !*** ../../node_modules/axios/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "../../node_modules/axios/lib/axios.js");

/***/ }),

/***/ "../../node_modules/axios/lib/adapters/xhr.js":
/*!****************************************************!*\
  !*** ../../node_modules/axios/lib/adapters/xhr.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../../node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "../../node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../../node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "../../node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "../../node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "../../node_modules/axios/lib/helpers/isURLSameOrigin.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "../../node_modules/axios/lib/defaults/transitional.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "../../node_modules/axios/lib/core/AxiosError.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "../../node_modules/axios/lib/cancel/CanceledError.js");
var parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ "../../node_modules/axios/lib/helpers/parseProtocol.js");
module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }
    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function (cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    var protocol = parseProtocol(fullPath);
    if (protocol && ['http', 'https', 'file'].indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),

/***/ "../../node_modules/axios/lib/axios.js":
/*!*********************************************!*\
  !*** ../../node_modules/axios/lib/axios.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "../../node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "../../node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "../../node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/axios/lib/defaults/index.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ "../../node_modules/axios/lib/cancel/CanceledError.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "../../node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "../../node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "../../node_modules/axios/lib/env/data.js").version);
axios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ "../../node_modules/axios/lib/helpers/toFormData.js");

// Expose AxiosError class
axios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ "../../node_modules/axios/lib/core/AxiosError.js");

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "../../node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "../../node_modules/axios/lib/helpers/isAxiosError.js");
module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;

/***/ }),

/***/ "../../node_modules/axios/lib/cancel/CancelToken.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/cancel/CancelToken.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var CanceledError = __webpack_require__(/*! ./CanceledError */ "../../node_modules/axios/lib/cancel/CanceledError.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function (cancel) {
    if (!token._listeners) return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function (onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function (resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }
    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};
module.exports = CancelToken;

/***/ }),

/***/ "../../node_modules/axios/lib/cancel/CanceledError.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/cancel/CanceledError.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "../../node_modules/axios/lib/core/AxiosError.js");
var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  this.name = 'CanceledError';
}
utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
module.exports = CanceledError;

/***/ }),

/***/ "../../node_modules/axios/lib/cancel/isCancel.js":
/*!*******************************************************!*\
  !*** ../../node_modules/axios/lib/cancel/isCancel.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "../../node_modules/axios/lib/core/Axios.js":
/*!**************************************************!*\
  !*** ../../node_modules/axios/lib/core/Axios.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "../../node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "../../node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "../../node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "../../node_modules/axios/lib/core/mergeConfig.js");
var buildFullPath = __webpack_require__(/*! ./buildFullPath */ "../../node_modules/axios/lib/core/buildFullPath.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "../../node_modules/axios/lib/helpers/validator.js");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }
  var transitional = config.transitional;
  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
module.exports = Axios;

/***/ }),

/***/ "../../node_modules/axios/lib/core/AxiosError.js":
/*!*******************************************************!*\
  !*** ../../node_modules/axios/lib/core/AxiosError.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function (code) {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = function (error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);
  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
module.exports = AxiosError;

/***/ }),

/***/ "../../node_modules/axios/lib/core/InterceptorManager.js":
/*!***************************************************************!*\
  !*** ../../node_modules/axios/lib/core/InterceptorManager.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
module.exports = InterceptorManager;

/***/ }),

/***/ "../../node_modules/axios/lib/core/buildFullPath.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/core/buildFullPath.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "../../node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "../../node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

/***/ }),

/***/ "../../node_modules/axios/lib/core/dispatchRequest.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/core/dispatchRequest.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "../../node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "../../node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "../../node_modules/axios/lib/defaults/index.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "../../node_modules/axios/lib/cancel/CanceledError.js");

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(config, config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "../../node_modules/axios/lib/core/mergeConfig.js":
/*!********************************************************!*\
  !*** ../../node_modules/axios/lib/core/mergeConfig.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }
  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };
  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};

/***/ }),

/***/ "../../node_modules/axios/lib/core/settle.js":
/*!***************************************************!*\
  !*** ../../node_modules/axios/lib/core/settle.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ./AxiosError */ "../../node_modules/axios/lib/core/AxiosError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
};

/***/ }),

/***/ "../../node_modules/axios/lib/core/transformData.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/core/transformData.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "../../node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};

/***/ }),

/***/ "../../node_modules/axios/lib/defaults/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/axios/lib/defaults/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "../../node_modules/axios/lib/helpers/normalizeHeaderName.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "../../node_modules/axios/lib/core/AxiosError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "../../node_modules/axios/lib/defaults/transitional.js");
var toFormData = __webpack_require__(/*! ../helpers/toFormData */ "../../node_modules/axios/lib/helpers/toFormData.js");
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "../../node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "../../node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];
    var isFileList;
    if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === 'multipart/form-data') {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {
        'files[]': data
      } : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
    if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: __webpack_require__(/*! ./env/FormData */ "../../node_modules/axios/lib/helpers/null.js")
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

/***/ }),

/***/ "../../node_modules/axios/lib/defaults/transitional.js":
/*!*************************************************************!*\
  !*** ../../node_modules/axios/lib/defaults/transitional.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

/***/ }),

/***/ "../../node_modules/axios/lib/env/data.js":
/*!************************************************!*\
  !*** ../../node_modules/axios/lib/env/data.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.27.2"
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/bind.js":
/*!****************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/bind.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/buildURL.js":
/*!********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/buildURL.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }
      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }
      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/combineURLs.js":
/*!***********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/combineURLs.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/cookies.js":
/*!*******************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/cookies.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
module.exports = utils.isStandardBrowserEnv() ?
// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));
      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }
      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }
      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :
// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isAxiosError.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/isAxiosError.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
module.exports = utils.isStandardBrowserEnv() ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");
module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/null.js":
/*!****************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/null.js ***!
  \****************************************************/
/***/ ((module) => {

// eslint-disable-next-line strict
module.exports = null;

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/parseHeaders.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/parseHeaders.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/parseProtocol.js":
/*!*************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/spread.js":
/*!******************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/spread.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/toFormData.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/toFormData.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();
  var stack = [];
  function convertValue(value) {
    if (value === null) return '';
    if (utils.isDate(value)) {
      return value.toISOString();
    }
    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }
      stack.push(data);
      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;
        if (value && !parentKey && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function (el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }
        build(value, fullKey);
      });
      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }
  build(obj);
  return formData;
}
module.exports = toFormData;

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/validator.js":
/*!*********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/validator.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "../../node_modules/axios/lib/env/data.js").version);
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "../../node_modules/axios/lib/core/AxiosError.js");
var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
module.exports = {
  assertOptions: assertOptions,
  validators: validators
};

/***/ }),

/***/ "../../node_modules/axios/lib/utils.js":
/*!*********************************************!*\
  !*** ../../node_modules/axios/lib/utils.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "../../node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = function (cache) {
  // eslint-disable-next-line func-names
  return function (thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(Object.create(null));
function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (typeof FormData === 'function' && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}

/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = function (TypedArray) {
  // eslint-disable-next-line func-names
  return function (thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));
module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};

/***/ }),

/***/ "../../node_modules/melanke-watchjs/src/watch.js":
/*!*******************************************************!*\
  !*** ../../node_modules/melanke-watchjs/src/watch.js ***!
  \*******************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts.js */ "./js/consts.js");
/* harmony import */ var _watchers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchers.js */ "./js/watchers.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state */ "./js/state.js");
/* harmony import */ var _ModalCats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ModalCats */ "./js/ModalCats.js");
/* harmony import */ var _ModalRickAndMorty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ModalRickAndMorty */ "./js/ModalRickAndMorty.js");
/* harmony import */ var _ModalSunrise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/ModalSunrise */ "./js/ModalSunrise.js");







const startApp = () => {
  // Обработчик на кнопки открытия окон
  const modalsKeys = Object.keys(_consts_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_WINDOWS);
  const buttonsContainer = document.querySelector('div.buttons');
  buttonsContainer.addEventListener('click', event => {
    _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex = modalsKeys.indexOf(event.target.dataset.type);
  });

  // Обработчик на кнопки навигации
  const navigationButtons = document.querySelectorAll('.navigation__element');
  navigationButtons.forEach(button => {
    button.addEventListener('click', event => {
      switch (event.target.dataset.type) {
        case _consts_js__WEBPACK_IMPORTED_MODULE_0__.navigationButtonsTypes.close:
          _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex = -1;
          break;
        case _consts_js__WEBPACK_IMPORTED_MODULE_0__.navigationButtonsTypes.next:
          _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex = _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex + 1 === modalsKeys.length ? 0 : _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex + 1;
          break;
        case _consts_js__WEBPACK_IMPORTED_MODULE_0__.navigationButtonsTypes.back:
          _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex = _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex === 0 ? modalsKeys.length - 1 : _state__WEBPACK_IMPORTED_MODULE_2__.appState.openedModalIndex - 1;
          break;
      }
    });
  });
  (0,_ModalSunrise__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_ModalRickAndMorty__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_ModalCats__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_watchers_js__WEBPACK_IMPORTED_MODULE_1__.watchAppState)(_state__WEBPACK_IMPORTED_MODULE_2__.appState);
  (0,_watchers_js__WEBPACK_IMPORTED_MODULE_1__.watchCharactersState)(_state__WEBPACK_IMPORTED_MODULE_2__.charactersModalState);
  (0,_watchers_js__WEBPACK_IMPORTED_MODULE_1__.watchCatsState)(_state__WEBPACK_IMPORTED_MODULE_2__.catsModalState);
  (0,_watchers_js__WEBPACK_IMPORTED_MODULE_1__.watchSunriseState)(_state__WEBPACK_IMPORTED_MODULE_2__.sunriseState);
};
startApp();
})();

/******/ })()
;
//# sourceMappingURL=core.bundle.js.map