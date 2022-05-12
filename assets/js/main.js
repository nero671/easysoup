/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "../node_modules/swiper/swiper-bundle.esm.js");
  /* harmony import */ var _utils_DOMReady__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DOMReady */ "./scripts/utils/DOMReady.js");
  /* harmony import */ var _modules_slider_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider-banner */ "./scripts/modules/slider-banner.js");
  /* harmony import */ var _modules_slider_soup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider-soup */ "./scripts/modules/slider-soup.js");
  /* harmony import */ var _modules_slider_fit1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider-fit1 */ "./scripts/modules/slider-fit1.js");
  /* harmony import */ var _modules_slider_fit2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider-fit2 */ "./scripts/modules/slider-fit2.js");
  /* harmony import */ var _modules_slider_fit3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider-fit3 */ "./scripts/modules/slider-fit3.js");
  /* harmony import */ var _modules_slider_detox_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider-detox-banner */ "./scripts/modules/slider-detox-banner.js");
  /* harmony import */ var _modules_field_num__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/field-num */ "./scripts/modules/field-num.js");
  /* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/modal */ "./scripts/modules/modal.js");
  /* harmony import */ var _modules_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/order */ "./scripts/modules/order.js");
  /* harmony import */ var _modules_phones__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/phones */ "./scripts/modules/phones.js");
  /* harmony import */ var _modules_basket_open__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/basket-open */ "./scripts/modules/basket-open.js");
  /* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/burger */ "./scripts/modules/burger.js");
  /* harmony import */ var _modules_to_top__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/to-top */ "./scripts/modules/to-top.js");
  /* harmony import */ var _modules_elements_modalChangeAddress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/elements/modalChangeAddress */ "./scripts/modules/elements/modalChangeAddress.js");
  /* harmony import */ var _modules_modal_sing_in__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/modal-sing-in */ "./scripts/modules/modal-sing-in.js");
  /* harmony import */ var _modules_basketActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/basketActions */ "./scripts/modules/basketActions.js");
  /* harmony import */ var _modules_detox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/detox */ "./scripts/modules/detox.js");



















  (0,_utils_DOMReady__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    console.log('init app');

    (function fixedHeader(params) {
      if (document.querySelector('.js-header')) {
        var header = document.querySelector('.js-header');
        window.addEventListener('scroll', function () {
          header.classList.toggle('is-fixed', window.scrollY > 150);
        });
      } else {
        return false;
      }
    })();

    var SliderBanner = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-slider-banner', _modules_slider_banner__WEBPACK_IMPORTED_MODULE_2__["default"]);
    var SliderSoup = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-slider-soup', _modules_slider_soup__WEBPACK_IMPORTED_MODULE_3__["default"]);
    var SliderFit1 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-slider-fit1', _modules_slider_fit1__WEBPACK_IMPORTED_MODULE_4__["default"]);
    var SliderFit2 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-slider-fit2', _modules_slider_fit2__WEBPACK_IMPORTED_MODULE_5__["default"]);
    var SliderFit3 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-slider-fit3', _modules_slider_fit3__WEBPACK_IMPORTED_MODULE_6__["default"]);
    var SliderDetoxBanner = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-slider-detox-banner', _modules_slider_detox_banner__WEBPACK_IMPORTED_MODULE_7__["default"]); // Открытие корзины

    (0,_modules_basket_open__WEBPACK_IMPORTED_MODULE_12__["default"])(); // Счетчик количества

    (0,_modules_field_num__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Открытие модальных окон

    window.MODAL = (0,_modules_modal__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Открытие мобильного меню

    (0,_modules_burger__WEBPACK_IMPORTED_MODULE_13__["default"])(); // Кнопка вверх

    (0,_modules_to_top__WEBPACK_IMPORTED_MODULE_14__["default"])();
    var mca = document.querySelector('.js-modal-change-address');

    if (mca) {
      window.ModalChangeAddress = new _modules_elements_modalChangeAddress__WEBPACK_IMPORTED_MODULE_15__["default"](mca);
      window.ModalChangeAddress.init();
    }

    (0,_modules_phones__WEBPACK_IMPORTED_MODULE_11__["default"])();
    (0,_modules_order__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_modules_modal_sing_in__WEBPACK_IMPORTED_MODULE_16__["default"])();
    var basketActions = new _modules_basketActions__WEBPACK_IMPORTED_MODULE_17__["default"]();
    basketActions.init();
    (0,_modules_detox__WEBPACK_IMPORTED_MODULE_18__["default"])();
  });

  /***/ }),

  /***/ "./scripts/modules/basket-open.js":
  /*!****************************************!*\
    !*** ./scripts/modules/basket-open.js ***!
    \****************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var basketOpen = function basketOpen() {
    if (document.querySelector('.js-cart')) {
      var cart = document.querySelector('.js-cart');
      var basket = document.querySelector('.js-basket');
      cart.addEventListener('click', function () {
        cart.classList.toggle('is-action');
        basket.classList.toggle('is-show');
      });
      document.addEventListener('keydown', function (event) {
        if (basket && cart) {
          if (event.key === 'Escape') {
            cart.classList.remove('is-action');
            basket.classList.remove('is-show');
          }
        }
      });
    } else {
      return false;
    }
  };

  /* harmony default export */ __webpack_exports__["default"] = (basketOpen);

  /***/ }),

  /***/ "./scripts/modules/basketActions.js":
  /*!******************************************!*\
    !*** ./scripts/modules/basketActions.js ***!
    \******************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ basketActions; }
  /* harmony export */ });
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var basketActions = /*#__PURE__*/function () {
    function basketActions() {
      var parentNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

      _classCallCheck(this, basketActions);

      this.parentNode = parentNode;
      this.basket = [];
      this.buttonJsClass = '.js-btn-cart';
    }

    _createClass(basketActions, [{
      key: "init",
      value: function init() {
        var _this = this;

        this._getCurrentBasket().then(function (resp) {
          if (resp && resp.length) _this.basket = _toConsumableArray(resp);

          _this._initProductButtons();
        });

        return this;
      }
    }, {
      key: "options",
      value: function options(_ref) {
        var buttonJsClass = _ref.buttonJsClass,
            cb = _ref.cb;
        if (cb) this.cb = cb;
        if (buttonJsClass) this.buttonJsClass = buttonJsClass;
        return this;
      }
    }, {
      key: "_initProductButtons",
      value: function _initProductButtons() {
        var _this2 = this;

        this.productButtons = Array.prototype.slice.call(this.parentNode.querySelectorAll(this.buttonJsClass));
        this.productButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            if (!_this2.basket.length) {
              var actions = [{
                name: 'title',
                status: true
              }, {
                name: 'info',
                status: false
              } // показать предупреждение: "при изменении адреса или типа доставки ..."
              ]; // если вход не выполнен - добавить переход на модалку входа или регистрации

              var authStatus = false;

              if (!authStatus) {
                actions.push({
                  name: 'enter',
                  status: true
                });
              }

              window.ModalChangeAddress.options({
                cb: null
              }).setActions({
                actions: actions,
                buttonText: 'Сохранить адрес'
              });
              window.MODAL.showModal(document.querySelector('#changeAddress'));
            }
          });
        });
      }
    }, {
      key: "_getCurrentBasket",
      value: function _getCurrentBasket() {
        return new Promise(function (resolve, reject) {
          // тут запрос на бек за корзиной если авторизован
          var timerId = setTimeout(function () {
            var fakeBasket = [// {
              //   productId: 2517,
              //   name: 'Итальянский минестроне',
              //   image: 'assets/images/content/soup/soup1.jpg',
              //   weight: '300ml',
              //   price: 5.90,
              //   count: 1,
              // }
            ];
            resolve(fakeBasket);
            clearTimeout(timerId);
          }, 300);
        });
      }
    }, {
      key: "_postCurrentBasket",
      value: function _postCurrentBasket() {
        return new Promise(function (resolve, reject) {
          // тут запрос на бек добавить / изменить корзину
          var timerId = setTimeout(function () {
            var fakeBasket = [{
              productId: 2517,
              name: 'Итальянский минестроне',
              image: 'assets/images/content/soup/soup1.jpg',
              weight: '300ml',
              price: 5.90,
              count: 1
            }];
            resolve(fakeBasket);
            clearTimeout(timerId);
          }, 300);
        });
      }
    }]);

    return basketActions;
  }();



  /***/ }),

  /***/ "./scripts/modules/burger.js":
  /*!***********************************!*\
    !*** ./scripts/modules/burger.js ***!
    \***********************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var initBurger = function initBurger() {
    var burgers = document.querySelectorAll('.burger');

    if (burgers) {
      var showBurgerTarget = function showBurgerTarget() {
        var targetId = this.getAttribute('data-target-id');
        var targetClassToggle = this.getAttribute('data-target-class-toggle');
        var basket = document.querySelector('.js-basket');

        if (basket) {
          if (basket.classList.contains('is-show')) {
            basket.classList.remove('is-show');
          }
        }

        if (targetId && targetClassToggle) {
          this.classList.toggle('burger--close');
          document.querySelector(".".concat(targetId)).classList.toggle(targetClassToggle);
        }
      };

      for (var i = 0; i < burgers.length; i++) {
        var burger = burgers[i];
        burger.addEventListener('click', showBurgerTarget);
      }
    }
  };

  /* harmony default export */ __webpack_exports__["default"] = (initBurger);

  /***/ }),

  /***/ "./scripts/modules/detox-catalog-slider.js":
  /*!*************************************************!*\
    !*** ./scripts/modules/detox-catalog-slider.js ***!
    \*************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var detoxCatalogSlider = {
    slidesPerView: 7.5,
    spaceBetween: 10,
    slideToClickedSlide: true,
    loop: false,
    observer: true,
    observerParent: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 1300
    },
    breakpoints: {
      1550: {
        slidesPerView: 7.5,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 5.5,
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 800
        }
      },
      900: {
        slidesPerView: 4.5,
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 500
        }
      },
      650: {
        slidesPerView: 3.5,
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 400
        }
      },
      455: {
        slidesPerView: 2.5,
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 200
        }
      },
      315: {
        slidesPerView: 1.7,
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 100
        }
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (detoxCatalogSlider);

  /***/ }),

  /***/ "./scripts/modules/detox.js":
  /*!**********************************!*\
    !*** ./scripts/modules/detox.js ***!
    \**********************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "../node_modules/swiper/swiper-bundle.esm.js");
  /* harmony import */ var _slider_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-reviews */ "./scripts/modules/slider-reviews.js");
  /* harmony import */ var _elements_accordionsGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/accordionsGroup */ "./scripts/modules/elements/accordionsGroup.js");
  /* harmony import */ var _elements_detoxOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/detoxOrder */ "./scripts/modules/elements/detoxOrder.js");
  /* harmony import */ var _elements_promocode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/promocode */ "./scripts/modules/elements/promocode.js");
  /* harmony import */ var _elements_recipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/recipe */ "./scripts/modules/elements/recipe.js");
  /* harmony import */ var _detox_catalog_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detox-catalog-slider */ "./scripts/modules/detox-catalog-slider.js");
  /* harmony import */ var _slider_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider-tab */ "./scripts/modules/slider-tab.js");









  var detox = function detox() {
    var detox = document.querySelector('.js-detox');
    if (!detox) return; // order

    var detoxOrder = new _elements_detoxOrder__WEBPACK_IMPORTED_MODULE_3__["default"]('.js-detox-order');
    detoxOrder.init(); // section details - tabs

    var detailTabs = detox.querySelector('.js-detail-tabs');
    var detailTabsButtons = Array.prototype.slice.call(detailTabs.querySelectorAll('[data-tabs="button"]'));
    var detailBody = detailTabs.querySelector('[data-tabs="body"]');
    var detailBodyTabs = Array.prototype.slice.call(detailBody.querySelectorAll('[data-tabs="tab"]'));
    var active;

    var setActive = function setActive(a) {
      detailTabsButtons[a].classList.add('active');
      detailBodyTabs[a].classList.add('active');
      active = a;
    };

    detailTabsButtons.forEach(function (button, i) {
      if (button.classList.contains('active')) setActive(i);
      button.addEventListener('click', function () {
        detailTabsButtons[active].classList.remove('active');
        detailBodyTabs[active].classList.remove('active');
        setActive(i);
      });
    }); // // линк "подробнее"
    // const linkDetail4 = detox.querySelector('.js-go-detox-detail-4');
    // linkDetail4.addEventListener('click', e => {
    //   e.preventDefault();
    //   detailTabsButtons[3].click();
    //   window.location = '#detox-detail';
    // })
    // accordions

    var accordionsGroup = new _elements_accordionsGroup__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-detox-accordions-group');
    accordionsGroup.init(); // slider

    var SliderReviews = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-slider-banner', _slider_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]);
    var SliderTab = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.detox__detail-buttons', _slider_tab__WEBPACK_IMPORTED_MODULE_7__["default"]);
    var reviewForm = document.querySelector('.js-modal-detox-review');
    reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var data = new FormData(reviewForm); // console.log(data.get('detox-modal-name'));
      // console.log(data.get('detox-modal-phone'));

      console.log(data.get('detox-modal-text'));
      var modal = document.querySelector('#detoxSendReview .modal__content');
      modal.classList.add('text-center');
      modal.style.width = '460px';
      modal.innerHTML = "<div class=\"modal__header\">\n      <h2 class=\"title modal__title\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E!</h2>\n      <p>\u0412\u0430\u0448\xA0\u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D.</p>\n    </div>";
      var timerId = setTimeout(function () {
        window.MODAL.closeAllModals();
        clearTimeout(timerId);
      }, 3000);
    }); // PROMOCODE

    var cbPromocode = function cbPromocode(discount) {

      sessionStorage.setItem('discount', discount);
      console.log('discount', discount);
    }; // init promocode

    // const reCounterSum = () => {
    //   cbPromocode(discount);
    //   const orderCardResultLast = document.querySelector('.order__card-result_last').textContent.slice(0, -3);

    //   if (discount > 0) {
    //     const discauntCount = Number(orderCardResultLast) * (1 - (Number(discount) / 100));
    //     orderCardResultLast = discauntCount + 'Byn';
    //   }
    // }

    // reCounterSum();

    var promocode = new _elements_promocode__WEBPACK_IMPORTED_MODULE_4__["default"]('.js-detox-input-promocode');
    promocode.options({
      cb: cbPromocode
    }).init(); // Resipe block open

    (0,_elements_recipe__WEBPACK_IMPORTED_MODULE_5__["default"])(); //DetoxCatalog
    // const detoxCatalogSlider = document.querySelector('.detox__catalog-slider');

    var detoxCatalogSliderInner = document.querySelector('.detox__catalog-slider_inner');
    var detoxCatalogSliderItem = document.querySelectorAll('.detox__catalog-slider_item');
    var detoxCatalogCard = document.querySelectorAll('.detox__catalog-card');

    var toggleDetox = function toggleDetox(index) {
      for (var i = 0; i < detoxCatalogCard.length; i++) {
        if (index === i) {
          detoxCatalogCard[i].classList.remove('is-hide');
          detoxCatalogSliderItem[i].classList.add('is-active');
        } else {
          detoxCatalogCard[i].classList.add('is-hide');
          detoxCatalogSliderItem[i].classList.remove('is-active');
        }
      }
    };

    detoxCatalogSliderInner.addEventListener('click', function (e) {
      var target = e.target.closest('.detox__catalog-slider_item');
      detoxCatalogSliderItem.forEach(function (item, i) {
        if (item === target) {
          toggleDetox(i);
        }
      });
    });
    var DetoxCatalogSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.detox__catalog-slider', _detox_catalog_slider__WEBPACK_IMPORTED_MODULE_6__["default"]); //detox-modal-tab

    var modalDetoxList = document.querySelectorAll('.modal__detox-list');
    var modalDetoxSet = document.querySelectorAll('.modalDetoxSet');
    var detoxSetDetailPro = document.querySelector('#detoxSetDetailPro');
    var modalDetoxListTooltip = document.querySelectorAll('.modal__detox-list_tooltip');
    var modalDetoxListPopup = document.querySelectorAll('.modal__detox-list_popup');

    var toggleDetoxSoup = function toggleDetoxSoup(index) {
      var _loop = function _loop(i) {
        if (index === i) {
          modalDetoxListPopup[i].classList.add('active');
        } else {
          modalDetoxListPopup[i].classList.remove('active');
        }

        detoxSetDetail.addEventListener('click', function (e) {
          if (e.target.closest('.modal__detox-list_popup-cross') || e.target.matches('.modal__detox-list_popup') || e.target.matches('.modal') || e.target.closest('.modal__close')) {
            modalDetoxListPopup[i].classList.remove('active');
          }
        });

        detoxSetDetailPro.addEventListener('click', function (e) {
          if (e.target.closest('.modal__detox-list_popup-cross') || e.target.matches('.modal__detox-list_popup') || e.target.matches('.modal') || e.target.closest('.modal__close')) {
            modalDetoxListPopup[i].classList.remove('active');
          }
        });
      };

      for (var i = 0; i < modalDetoxListPopup.length; i++) {
        _loop(i);
      }
    };

    modalDetoxList.forEach((item) => {
      item.addEventListener('click', function (e) {
        if (e.target.closest('.modal__detox-list_tooltip')) {
          modalDetoxListTooltip.forEach(function (item, i) {
            if (item === e.target) {
              toggleDetoxSoup(i);
            }
          });
        }
      });
    })


  };

  /* harmony default export */ __webpack_exports__["default"] = (detox);

  /***/ }),

  /***/ "./scripts/modules/elements/accordionsGroup.js":
  /*!*****************************************************!*\
    !*** ./scripts/modules/elements/accordionsGroup.js ***!
    \*****************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ AccordionsGroup; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var AccordionsGroup = /*#__PURE__*/function () {
    function AccordionsGroup(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, AccordionsGroup);

      this.wrapper = parentNode.querySelector(currentTag);
      this.active = null;
    }

    _createClass(AccordionsGroup, [{
      key: "init",
      value: function init() {
        if (this.wrapper) this._wrapperInit();
        return this;
      }
    }, {
      key: "options",
      value: function options(_ref) {
        var _ref$counts = _ref.counts,
            counts = _ref$counts === void 0 ? 6 : _ref$counts;
        this.counts = counts;
      }
    }, {
      key: "_wrapperInit",
      value: function _wrapperInit() {
        var _this = this;

        this.accordions = Array.prototype.slice.call(this.wrapper.querySelectorAll('[data-accordion="accordion"]'));
        this.accordionsCols = Array.prototype.slice.call(this.wrapper.querySelectorAll('[data-accordions-col]'));
        this.buttonUploadMore = document.querySelector('[data-accordions="upload-more"]');
        this.accordions.forEach(function (accordion, i) {
          var button = accordion.querySelector('[data-accordion="button"]');
          button.addEventListener('click', function () {
            if (_this.active !== i) {
              if (_this.active !== null) _this.accordions[_this.active].classList.remove('is-open');
              _this.active = i;
              accordion.classList.add('is-open');
            } else {
              _this.accordions[_this.active].classList.remove('is-open');

              _this.active = null;
            }
          });
        });
        this.buttonUploadMore.addEventListener('click', function () {
          _this.accordionsCols[1].style.display = 'block';
          _this.buttonUploadMore.parentElement.style.display = 'none';
        });
      }
    }]);

    return AccordionsGroup;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/detoxOrder.js":
  /*!************************************************!*\
    !*** ./scripts/modules/elements/detoxOrder.js ***!
    \************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ DetoxOrder; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var DetoxOrder = /*#__PURE__*/function () {
    function DetoxOrder(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, DetoxOrder);

      this.wrapper = parentNode.querySelector(currentTag);
      this.active = [];
    }

    _createClass(DetoxOrder, [{
      key: "init",
      value: function init() {
        if (this.wrapper) this._wrapperInit();
        return this;
      }
    }, {
      key: "_wrapperInit",
      value: function _wrapperInit() {
        var _this = this;

        this.sets = Array.prototype.slice.call(this.wrapper.querySelectorAll('[data-set]'));

        this._initSets();

        this.form = this.wrapper.querySelector('[data-detox-order="form"]');
        this.buttonSubmit = this.form.querySelector('[data-detox-order="button-submit"]');

        const postData = body => fetch('/local/ajax/detoxAdd.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });

        this.form.addEventListener('submit', function (e) {
          e.preventDefault();
          let body = {};
          const detoxResultInfoNameSmall = document.querySelector('.detox__result-info_name-small').textContent;
          const detoxResultInfoCount = document.querySelector('.detox__result-info_count').textContent;
          const detoxResultInfoNameBig = document.querySelector('.detox__result-info_name-big').textContent;
          const detoxResultInfoCountBig = document.querySelector('.detox__result-info_count-big').textContent;
          const result = document.querySelector('.order__card-result_last').textContent;
          const sum = 'Итого';
          const data = new FormData(this);

          body[detoxResultInfoNameSmall] = detoxResultInfoCount;
          body[detoxResultInfoNameBig] = detoxResultInfoCountBig;
          body[sum] = result;

          data.forEach((val, key) => {
            body[key] = val;
          });
          console.log('data', data);
          postData(body).then(response => {
            if (response.status !== 200) {
              throw new Error('status network not 200');
            }
            window.MODAL.showModal(document.querySelector('#detoxOrderThanks'));
          }).catch(error => {
            console.error(error);
          });
        });
      }
    }, {
      key: "_initButtonSubmit",
      value: function _initButtonSubmit() {
        if (this.active.length) this.buttonSubmit.removeAttribute('disabled');else this.buttonSubmit.setAttribute('disabled', true);
      }
    }, {
      key: "_changeActive",
      value: function _changeActive(i) {
        var res;
        var ind = this.active.findIndex(function (el) {
          return el === i;
        });

        if (ind >= 0) {
          this.active.splice(ind, 1);
          res = false;
        } else {
          this.active.push(i);
          res = true;
        }

        this._initButtonSubmit();

        return res;
      }
    }, {
      key: "_initSets",
      value: function _initSets() {
        var _this2 = this;
        var modalDetail = document.querySelector('#detoxSetDetail');
        var modalDetailPro = document.querySelector('#detoxSetDetailPro');
        var buttonCheckPro = modalDetailPro.querySelector('[data-detox-modal="button"]');
        var fieldNumPro = modalDetailPro.querySelector('.field-num');
        var fieldNumInputModalPro = modalDetailPro.querySelector('.field-num__input');
        var buttonCheck = modalDetail.querySelector('[data-detox-modal="button"]');
        var fieldNum = modalDetail.querySelector('.field-num');
        var fieldNumInputModal = modalDetail.querySelector('.field-num__input');
        var detoxBoxes = document.querySelector('.detox-boxes');
        var detoxBox = document.querySelector('.detox-box');
        var detoxResultInfoCount = document.querySelector('.detox__result-info_count');
        var detoxResultInfoCountBig = document.querySelector('.detox__result-info_count-big');
        var orderCardResultValue = document.querySelector('.order__card-result_value');
        var detoxSetCostCountSmall = document.querySelector('.detox-set__cost-count_small');
        var detoxSetCostCountBig = document.querySelector('.detox-set__cost-count_big');
        var orderCardResultLast = document.querySelector('.order__card-result_last');
        var jsDetoxInputPromocode = document.querySelector('.js-detox-input-promocode');
        var jsDetoxInputPromocodeInput = document.querySelector('.input-rounded__input > input[type="text"]');
        console.log(jsDetoxInputPromocodeInput);

        const cartResult = () => {
          detoxResultInfoCount.textContent = detoxBox.value + 'шт';
          detoxResultInfoCountBig.textContent = detoxBoxes.value + 'шт';
          const totalCount = Math.round((Number(detoxBox.value) * Number(detoxSetCostCountSmall.textContent) + Number(detoxBoxes.value) * Number(detoxSetCostCountBig.textContent)) * 100) / 100;
          orderCardResultValue.textContent = totalCount + 'Byn';
          orderCardResultLast.textContent = orderCardResultValue.textContent;
          if (jsDetoxInputPromocode.classList.contains('is-success')) {
            jsDetoxInputPromocode.classList.remove('is-success');
            jsDetoxInputPromocodeInput.value = '';
          }
        }

        var detoxResultList = document.querySelector('.detox__result-list');
        detoxResultList.addEventListener('click', function (e) {
          console.log(e.target);
          if (e.target.closest('.small-box')) {
            detoxResultInfoCount.textContent = 0 + 'шт';
            detoxBox.value = 0;
            cartResult();

          } else if (e.target.closest('.big-box')) {
            detoxResultInfoCountBig.textContent = 0 + 'шт';
            detoxBoxes.value = 0;
            cartResult();
          }
        });
        var currentSet;

        modalDetail.addEventListener('click', function () {
          var fieldNumInput = _this2.sets[currentSet].querySelector('.field-num__input');

          var detoxSet = _this2.sets[currentSet];
          fieldNumInput.value = fieldNumInputModal.value;
          cartResult();

          if (fieldNumInput.value == 0) {
            detoxSet.classList.remove('active');
          }
        });

        modalDetailPro.addEventListener('click', function () {
          var fieldNumInput = _this2.sets[currentSet].querySelector('.field-num__input');

          var detoxSet = _this2.sets[currentSet];
          fieldNumInput.value = fieldNumInputModalPro.value;
          cartResult();


          if (fieldNumInput.value == 0) {
            detoxSet.classList.remove('active');
          }
        });

        buttonCheck.addEventListener('click', function () {
          _this2.sets[currentSet].classList[_this2._changeActive(currentSet) ? 'add' : 'remove']('active');
          var fieldNumInput = _this2.sets[currentSet].querySelector('.field-num__input');
          fieldNumInput.value = fieldNumInputModal.value;
          window.MODAL.closeAllModals();
        });

        buttonCheckPro.addEventListener('click', function () {
          _this2.sets[currentSet].classList[_this2._changeActive(currentSet) ? 'add' : 'remove']('active');
          var fieldNumInput = _this2.sets[currentSet].querySelector('.field-num__input');

          fieldNumInput.value = fieldNumInputModalPro.value;
          window.MODAL.closeAllModals();
        });

        fieldNum.addEventListener('click', function () {
          if (fieldNumInputModal.value == 0) {
            var detoxSet = modalDetail.querySelector('.js-detox-button-help');
            detoxSet.classList.remove('checked');
          }
        });

        fieldNumPro.addEventListener('click', function () {
          if (fieldNumInputModalPro.value == 0) {
            var detoxSet = modalDetailPro.querySelector('.js-detox-button-help_pro');
            detoxSet.classList.remove('checked');
          }
        });

        this.sets.forEach(function (set, i) {
          // var button = set.querySelector('.js-data-set-button');
          var fieldNumInput = set.querySelector('.field-num__input');
          var detoxSetAction = set.querySelector('.field-num');
          // console.log(detoxSetAction);
          // button.addEventListener('click', function () {
          //   set.classList[_this2._changeActive(i) ? 'add' : 'remove']('active');

          //   fieldNumInputModal.value = fieldNumInput.value;
          //   fieldNumInputModalPro.value = fieldNumInput.value;
          // });

          detoxSetAction.addEventListener('click', function () {
            var detoxSet = set;
            cartResult();

            if (fieldNumInput.value == 0) {
              detoxSet.classList.remove('active');
            }
          });
          set.addEventListener('click', function (e) {
            if (e.target.closest('.detox-set__head') || e.target.closest('.detox-set__image_start')) {
              currentSet = i;
              modalDetail.querySelector('[data-detox-modal="name"]').innerText = set.querySelector('.detox-set__title').innerText;
              // if (_this2.active.includes(i)) buttonCheck.classList.add('checked');else buttonCheck.classList.remove('checked');
              fieldNumInputModal.value = fieldNumInput.value;
              window.MODAL.showModal(modalDetail);
            } else if (e.target.closest('.detox-set__image_pro')) {
              currentSet = i;
              modalDetailPro.querySelector('[data-detox-modal="name"]').innerText = set.querySelector('.detox-set__title').innerText;
              // if (_this2.active.includes(i)) buttonCheckPro.classList.add('checked');else buttonCheckPro.classList.remove('checked');
              fieldNumInputModalPro.value = fieldNumInput.value;
              window.MODAL.showModal(modalDetailPro);
            }
          });
        });
      }
    }, {
      key: "getActives",
      value: function getActives() {
        var _this3 = this;

        return this.active.map(function (i) {
          return _this3.sets[i].getAttribute('data-set');
        });
      }
    }]);

    return DetoxOrder;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/fixedElement.js":
  /*!**************************************************!*\
    !*** ./scripts/modules/elements/fixedElement.js ***!
    \**************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ FixedElement; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var FixedElement = /*#__PURE__*/function () {
    function FixedElement(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, FixedElement);

      this.wrapper = parentNode.querySelector(currentTag);
    }

    _createClass(FixedElement, [{
      key: "init",
      value: function init() {
        if (this.wrapper) this._wrapperInit();
        return this;
      }
    }, {
      key: "_wrapperInit",
      value: function _wrapperInit() {
        var _this = this;

        this.wrapperHeight = this.wrapper.clientHeight;
        this.element = this.wrapper.querySelector('[data-fixed="element"]');
        this.elementHeight = this.element.clientHeight;

        this._setElementTop();

        window.addEventListener('scroll', function () {
          if (window.outerWidth > 768) _this._setElementTop();
        });
        var mediaQuery = window.matchMedia('(max-width: 768px)');
        mediaQuery.addEventListener('change', this._handleTabletChange.bind(this));

        this._handleTabletChange();
      }
    }, {
      key: "_handleTabletChange",
      value: function _handleTabletChange(e) {
        if (e && e.matches) {
          this.element.removeAttribute('style');
        }
      }
    }, {
      key: "_setElementTop",
      value: function _setElementTop() {
        if (window.pageYOffset < this.wrapperHeight - this.elementHeight + 250) this.element.style.top = window.pageYOffset + 'px';
      }
    }]);

    return FixedElement;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/getModalOrderHtml.js":
  /*!*******************************************************!*\
    !*** ./scripts/modules/elements/getModalOrderHtml.js ***!
    \*******************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = (function (order) {
    var basket = '';

    if (order.basket && order.basket.length) {
      order.basket.forEach(function (_ref) {
        var status = _ref.status,
            name = _ref.name,
            weight = _ref.weight,
            count = _ref.count,
            price = _ref.price;
        if (!status) return;
        basket += "<tr class=\"modal__order-item\">\n        <td class=\"modal__order-name\">".concat(name, "</td>\n        <td class=\"modal__order-weight\">").concat(weight, "</td>\n        <td class=\"modal__order-count\">").concat(count, "</td>\n        <td class=\"modal__order-price\">").concat(price.toFixed(2), " Byn</td>\n      </tr>");
      });
      basket += "<tr class=\"modal__order-item delivery-row\">\n      <td class=\"modal__order-name\">\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</td>\n      <td class=\"modal__order-weight\"></td>\n      <td class=\"modal__order-count\"></td>\n      <td class=\"modal__order-price\">".concat(order.deliveryCost, " Byn</td>\n    </tr>");
    }

    var comments = '';

    if (order.comments) {
      comments = "<tr>\n      <td>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438</td>\n      <td>".concat(order.comments, "</td>\n    </tr>");
    }

    var delivery = '';

    if (order.deliveryMethod === 'Доставка') {
      delivery = "<tr>\n      <td>\u0410\u0434\u0440\u0435\u0441</td>\n      <td>".concat(order.address, "</td>\n    </tr>\n    <tr>\n      <td>\u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</td>\n      <td>").concat(order.time, "</td>\n    </tr>\n    <tr>\n      <td>\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</td>\n      <td>").concat(order.paymethod, "</td>\n    </tr>");
    }

    var html = "<div class=\"modal__order\">\n    <div class=\"modal__order-title\">\u0417\u0430\u043A\u0430\u0437 \u2116 ".concat(order.number, "</div>\n    <div class=\"modal__order-table\">\n      <table>\n        <tbody>\n          <tr>\n            <td>\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0430\u0437\u0430</td>\n            <td>").concat(order.date, "</td>\n          </tr>\n          <tr>\n            <td>\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</td>\n            <td>").concat(order.deliveryMethod, "</td>\n          </tr>\n          ").concat(delivery, "\n          <tr>\n            <td>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</td>\n            <td>").concat(order.phone, "</td>\n          </tr>\n          ").concat(comments, "\n        </tbody>\n      </table>\n    </div>\n    <div class=\"modal__order-title\">\u0421\u043E\u0441\u0442\u0430\u0432 \u0437\u0430\u043A\u0430\u0437\u0430</div>\n    <div class=\"modal__order-basket\">\n      <table>\n        <tbody>\n          ").concat(basket, "\n        </tbody>\n      </table>\n    </div>\n    <div class=\"modal__order-title\">\u0418\u0422\u041E\u0413\u041E: ").concat((order.price * (100 - order.discount) / 100).toFixed(2), " Byn</div>\n    <div class=\"modal__order-footer\">\n      <button class=\"btn btn--icon js-modal-order-submit\" type=\"button\">\n        <span class=\"btn__name\">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C</span>\n        <span class=\"svg-icon svg-icon--arrow-right\">\n          <svg class=\"svg-icon__symbol\" width=\"9\" height=\"14\">\n            <use xlink:href=\"#icon-arrow-right\"></use>\n          </svg>\n        </span>\n      </button>\n      <div class=\"modal__order-note\">\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u043B\u0430\u0442\u0435\xBB \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 <a href=\"#\" target=\"_blank\">\u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u043E\u0444\u0435\u0440\u0442\u044B</a></div>\n    </div>\n  </div>");
    return html;
  });

  /***/ }),

  /***/ "./scripts/modules/elements/inputRange.js":
  /*!************************************************!*\
    !*** ./scripts/modules/elements/inputRange.js ***!
    \************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ inputRange; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var inputRange = /*#__PURE__*/function () {
    function inputRange(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, inputRange);

      this.currentTag = currentTag;
      this.inputRange = parentNode.querySelector(this.currentTag);
    }

    _createClass(inputRange, [{
      key: "init",
      value: function init() {
        if (this.inputRange) this._inputRangeInit();
        return this;
      }
    }, {
      key: "_inputRangeInit",
      value: function _inputRangeInit() {
        var _this = this;

        this.input = this.inputRange.querySelector('[data-input-range="input"]');
        this.value = this.inputRange.querySelector('[data-input-range="value"]');
        var min = this.input.getAttribute('min') || 0;
        var max = this.input.getAttribute('max') || 100;
        this.input.addEventListener('change', function (e) {
          _this.value.innerText = e.target.value;
        });
        this.value.addEventListener('keypress', function (e) {
          if (isNaN(String.fromCharCode(e.which))) e.preventDefault();
        });
        this.value.addEventListener('input', function (e) {
          var res = parseInt(_this.value.innerText) || 0;
          if (res > max) res = max;
          if (res < min) res = min;
          _this.input.value = res;
          _this.value.innerText = res;

          _this.setCaretToEnd(_this.value);
        });
      }
    }, {
      key: "setCaretToEnd",
      value: function setCaretToEnd(target) {
        var range = document.createRange();
        var sel = window.getSelection();
        range.selectNodeContents(target);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        target.focus();
        range.detach();
      }
    }]);

    return inputRange;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/modalChangeAddress.js":
  /*!********************************************************!*\
    !*** ./scripts/modules/elements/modalChangeAddress.js ***!
    \********************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ modalChangeAddress; }
  /* harmony export */ });
  /* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./scripts/modules/elements/tabs.js");
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



  var modalChangeAddress = /*#__PURE__*/function () {
    function modalChangeAddress(currentNode) {
      _classCallCheck(this, modalChangeAddress);

      this.modal = currentNode;
      this.deliveryMethod = 'Доставка';
      this.actions = null;
    }

    _createClass(modalChangeAddress, [{
      key: "init",
      value: function init() {
        if (this.modal) this._modalInit();
        return this;
      }
    }, {
      key: "options",
      value: function options(_ref) {
        var cb = _ref.cb,
            deliveryCb = _ref.deliveryCb;
        if (cb) this.cb = cb;
        if (deliveryCb) this.deliveryCb = deliveryCb;
        return this;
      }
    }, {
      key: "_modalInit",
      value: function _modalInit() {
        var _this = this;

        // modal tabs init
        this.modalDeliveryTabs = new _tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-modal-delivery');
        this.modalDeliveryTabs.options({
          cb: this._modalDeliveryCb.bind(this)
        }).init();

        this._getDeliveryMethod();

        this.form = this.modal.querySelector('[ data-modal="form"]');
        this.form.addEventListener('submit', function (e) {
          e.preventDefault();
        });
        this.buttonSubmit = this.modal.querySelector('button[data-modal="address-submit"]');
        this.buttonSubmit.addEventListener('click', function () {
          _this._getDeliveryMethod();

          var data = new FormData(_this.form);
          var payload = {
            deliveryMethod: _this.deliveryMethod,
            data: data
          };

          if (_this._validateForm()) {
            _this._checkDelivery(data.get('street'), data.get('house')).then(function () {
              if (_this.cb) _this.cb(payload);
              window.MODAL.closeAllModals();

              _this.setDefaultActions();
            }).catch(function () {
              // если на этот адрес нет доставки
              var notDeliveryModal = document.querySelector('#notDelivery');
              notDeliveryModal.querySelector('[data-modal="cb"]').addEventListener('click', function () {
                window.MODAL.closeAllModals();
                window.MODAL.showModal(document.querySelector('#changeAddress'));
              });
              window.MODAL.closeAllModals();
              window.MODAL.showModal(notDeliveryModal);
            });
          }
        });
        this['address-title'] = this.modal.querySelector('[ data-modal="address-title"]');
        this['address-error'] = this.modal.querySelector('[ data-modal="address-error"]');
        this['address-info'] = this.modal.querySelector('[ data-modal="address-info"]');
        this['address-enter'] = this.modal.querySelector('[ data-modal="address-enter"]');
        this.requiredInputs = Array.prototype.slice.call(this.form.querySelectorAll('input[required]'));
        this.requiredInputs.forEach(function (input) {
          input.addEventListener('input', function () {
            if (input.value) {
              input.parentNode.classList.remove('order__card-input--error');

              _this['address-error'].classList.add('is-hide');
            }
          });
        });
        this['address-enter'].addEventListener('click', function () {
          window.MODAL.closeAllModals();
          window.MODAL.showModal(document.querySelector('#singIn'));
        });
      }
    }, {
      key: "_checkDelivery",
      value: function _checkDelivery(street, house) {
        // проверить возможность доставки, х.з. как
        return new Promise(function (res, rej) {
          // console.log('street, house', street, house);
          var timerId = setTimeout(function () {
            street.toLowerCase() === 'шабаны' ? rej() : res();
            clearTimeout(timerId);
          }, 500);
        });
      }
    }, {
      key: "_validateForm",
      value: function _validateForm() {
        var _this2 = this;

        var result = true;

        if (this.modalDeliveryTabs.getActive() === 0) {
          Array.prototype.slice.call(this.form.querySelectorAll('input[required]')).forEach(function (input) {
            if (!input.value) {
              _this2['address-error'].classList.remove('is-hide');

              input.parentNode.classList.add('order__card-input--error');
              result = false;
            }
          });
        }

        return result;
      }
    }, {
      key: "setActions",
      value: function setActions(_ref2) {
        var _this3 = this;

        var actions = _ref2.actions,
            buttonText = _ref2.buttonText;

        if (actions) {
          actions.forEach(function (_ref3) {
            var name = _ref3.name,
                status = _ref3.status;
            if (status) _this3["address-".concat(name)].classList.remove('is-hide');else _this3["address-".concat(name)].classList.add('is-hide');
          });
        }

        if (buttonText) this.buttonSubmit.innerText = buttonText;
        return this;
      }
    }, {
      key: "setDefaultActions",
      value: function setDefaultActions() {
        var actions = [{
          name: 'title',
          status: true
        }, {
          name: 'error',
          status: false
        }, {
          name: 'info',
          status: true
        }, {
          name: 'enter',
          status: false
        }];
        this.setActions({
          actions: actions,
          buttonText: 'Продолжить выбор еды'
        });
        return this;
      }
    }, {
      key: "_modalDeliveryCb",
      value: function _modalDeliveryCb(event) {
        if (this.deliveryCb) this.deliveryCb(event);

        this._getDeliveryMethod();
      }
    }, {
      key: "_getDeliveryMethod",
      value: function _getDeliveryMethod() {
        this.deliveryMethod = this.modalDeliveryTabs.getActive() === 0 ? 'Доставка' : 'Самовывоз';
        return this.deliveryMethod;
      }
    }]);

    return modalChangeAddress;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/price.js":
  /*!*******************************************!*\
    !*** ./scripts/modules/elements/price.js ***!
    \*******************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ price; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var price = /*#__PURE__*/function () {
    function price(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, price);

      this.price = parentNode.querySelector(currentTag);
      this.discount = 0;
    }

    _createClass(price, [{
      key: "init",
      value: function init() {
        if (this.price) this._priceInit();
        return this;
      }
    }, {
      key: "options",
      value: function options(_ref) {
        var cb = _ref.cb;
        if (cb) this.cb = cb;
        return this;
      }
    }, {
      key: "_priceInit",
      value: function _priceInit() {
        this.costWrapper = this.price.querySelector('[data-price="cost"]');
        this.deliveryCost = this.price.querySelector('[data-price="delivery-cost"]');
        this.finallyCost = this.price.querySelector('[data-price="finally-cost"]');
        this.cost = parseFloat(this.costWrapper.innerText.split(' ')[0].replace(',', '.'));
        this.dCost = parseFloat(this.deliveryCost.innerText.split(' ')[0].replace(',', '.'));
        this.change(this.cost);
      }
    }, {
      key: "_getCost",
      value: function _getCost(cost) {
        this.cost = cost;
        this.dCost = cost < 25 ? 3 : 0;
        return (cost * (100 - this.discount) / 100).toFixed(2);
      }
    }, {
      key: "change",
      value: function change(cost) {
        if (isNaN(cost)) return;
        this.costWrapper.innerText = "".concat(this._getCost(cost).replace('.', ','), " Byn");
        this.deliveryCost.innerText = "".concat(this.dCost, " Byn");
        var fin = parseFloat(+this._getCost(cost) + +this.dCost).toFixed(2);
        this.finallyCost.innerText = "".concat(fin.toString().replace('.', ','), " Byn");
        if (this.cb) this.cb();
      }
    }, {
      key: "setDiscount",
      value: function setDiscount(discount) {
        if (isNaN(discount)) return;
        this.discount = discount;
        this.change(this.cost);
      }
    }]);

    return price;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/promocode.js":
  /*!***********************************************!*\
    !*** ./scripts/modules/elements/promocode.js ***!
    \***********************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ promocode; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var promocode = /*#__PURE__*/function () {
    function promocode(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, promocode);

      this.promocode = parentNode.querySelector(currentTag);
    }

    _createClass(promocode, [{
      key: "init",
      value: function init() {
        if (this.promocode) this._promocodeInit();
        return this;
      }
    }, {
      key: "options",
      value: function options(_ref) {
        var cb = _ref.cb;
        if (cb) this.cb = cb;
        return this;
      }
    }, {
      key: "_promocodeInit",
      value: function _promocodeInit() {
        var _this = this;

        this.input = this.promocode.querySelector('[data-promocode="input"]');
        this.buttonSubmit = this.promocode.querySelector('[data-promocode="button"]');
        this.buttonClear = this.promocode.querySelector('[data-promocode="clear"]');

        if (this.buttonSubmit) {
          this.buttonSubmit.addEventListener('click', function () {
            var code = _this.input.value;
            if (code) {
              _this.promocode.classList.add('is-loading');

              console.log( _this._fetchData());


              _this._fetchData(code).then(function (resp) {
                _this.promocode.classList.add('is-success');
                _this.cb(resp.discount);
                const orderCardResultLast = document.querySelector('.order__card-result_last');
                const orderCardResultValue = document.querySelector('.order__card-result_value');
                const orderCardResultLastValue = document.querySelector('.order__card-result_last').textContent.slice(0, -3);
                orderCardResultLast.textContent = orderCardResultLastValue - resp.discount + 'Byn';
                orderCardResultValue.textContent = orderCardResultLast.textContent;
              }).catch(function () {
                return _this.promocode.classList.add('is-error');
              }).finally(function () {
                return _this.promocode.classList.remove('is-loading');
              });
            }
          });
        }

        if (this.buttonClear) {
          this.buttonClear.addEventListener('click', function () {
            _this.input.value = '';

            if (_this.promocode.classList.contains('is-success')) {
              _this.promocode.classList.remove('is-success');
              const orderCardResultLast = document.querySelector('.order__card-result_last');
              const orderCardResultValue = document.querySelector('.order__card-result_value');
              const orderCardResultLastValue = document.querySelector('.order__card-result_last').textContent.slice(0, -3);
              orderCardResultLast.textContent = (Number(orderCardResultLastValue) + Number(sessionStorage.discount)) + 'Byn';
              orderCardResultValue.textContent = orderCardResultLast.textContent;
              _this.cb(0);

            } else _this.promocode.classList.remove('is-error');
          });
        }
      }
    }, {
      key: "_fetchData",
      value: function _fetchData(code) {
        let response = null;
        // тут запрос на бек
        const request = new XMLHttpRequest();

        request.open('GET', 'https://easysoup.imediasolutions.ru/local/ajax/detoxCoupon.php?coupon_all=Y');
        request.addEventListener('readystatechange', () => {
          if (request.readyState !== 4) {
            return
          }
          if (request.status === 200) {
            response = JSON.parse(request.responseText);
          } else {
            console.log('gg');
          }
        });
        request.send();

        return new Promise(function (resolve, reject) {
          const value = document.querySelector('.order__card-result_last').textContent.slice(0, -3);
          var timerId = setTimeout(function () {
            if (response[code]) {
              if (response[code].type_coupon == 'percent') {
                resolve({
                  discount: value * response[code].sum / 100
                })
              } else {
                resolve({
                  discount: response[code].sum
                })
              }

            } else {
              reject({
                message: 'Неверный код'
              });
            }


            clearTimeout(timerId);
          }, 1500);
        });
      }
    }]);

    return promocode;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/radioGroup.js":
  /*!************************************************!*\
    !*** ./scripts/modules/elements/radioGroup.js ***!
    \************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ radioGroup; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var radioGroup = /*#__PURE__*/function () {
    function radioGroup(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, radioGroup);

      this.radioGroup = parentNode.querySelector(currentTag);
    }

    _createClass(radioGroup, [{
      key: "init",
      value: function init() {
        if (this.radioGroup) this._radioGroupInit();
        return this;
      }
    }, {
      key: "_radioGroupInit",
      value: function _radioGroupInit() {
        var _this = this;

        this.radioButtons = Array.prototype.slice.call(this.radioGroup.querySelectorAll('input[type="radio"]'));
        this.tiedData = Array.prototype.slice.call(this.radioGroup.querySelectorAll('[data-radiogroup]'));

        var setHideData = function setHideData(current) {
          _this.tiedData.forEach(function (el) {
            if (el.getAttribute('data-radiogroup') !== current) {
              el.classList.add('is-hide');
            } else if (el.classList.contains('is-hide')) {
              el.classList.remove('is-hide');
            }
          });
        };

        setHideData(this.radioButtons.find(function (btn) {
          return btn.checked;
        }).getAttribute('id'));
        this.radioButtons.forEach(function (btn) {
          btn.addEventListener('change', function (e) {
            setHideData(btn.getAttribute('id'));
          });
        });
      }
    }]);

    return radioGroup;
  }();



  /***/ }),

  /***/ "./scripts/modules/elements/recipe.js":
  /*!********************************************!*\
    !*** ./scripts/modules/elements/recipe.js ***!
    \********************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var recipe = function recipe() {
    if (document.querySelector('.js-detox-catalog-card')) {
      var block = document.querySelector('.js-detox-catalog-card');
      var btn = document.querySelector('.detox__catalog-short_btn'); // btn.addEventListener('click', (event) => {
      //   event.stopPropagation();
      //   block.classList.add('is-open');
      // });
    } else {
      return false;
    }
  };

  /* harmony default export */ __webpack_exports__["default"] = (recipe);

  /***/ }),

  /***/ "./scripts/modules/elements/tabs.js":
  /*!******************************************!*\
    !*** ./scripts/modules/elements/tabs.js ***!
    \******************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": function() { return /* binding */ Tabs; }
  /* harmony export */ });
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Tabs = /*#__PURE__*/function () {
    function Tabs(currentTag) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

      _classCallCheck(this, Tabs);

      this.currentTag = currentTag;
      this.tabs = parentNode.querySelector(this.currentTag);
    }

    _createClass(Tabs, [{
      key: "init",
      value: function init() {
        if (this.tabs) this._tabsInit();
        return this;
      }
    }, {
      key: "options",
      value: function options(_ref) {
        var cb = _ref.cb;
        if (cb) this.cb = cb;
        return this;
      }
    }, {
      key: "_tabsInit",
      value: function _tabsInit() {
        var _this = this;

        this.tabLink = Array.prototype.slice.call(this.tabs.querySelectorAll('[data-tabs="link"]'));
        this.content = this.tabs.querySelector('[data-tabs="content"]');
        this.active = this.tabLink.findIndex(function (el) {
          return el.classList.contains('active');
        }); // default settings

        this.content.style.width = "".concat(this.tabLink.length * 100, "%");
        this.toggleTabs();
        this.tabLink.forEach(function (link, i) {
          link.addEventListener('click', function () {
            _this.tabLink.find(function (el) {
              return el.classList.contains('active');
            }).classList.remove('active');

            link.classList.add('active');
            _this.active = i;
            if (_this.cb) _this.cb(_this.active);

            _this.toggleTabs();
          });
        });
      }
    }, {
      key: "toggleTabs",
      value: function toggleTabs() {
        var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active;
        if (active !== this.active) this.active = active;
        this.content.style.transform = "translate3d(-".concat(100 / this.tabLink.length * active, "%, 0, 0)");
      }
    }, {
      key: "getActive",
      value: function getActive() {
        return this.active;
      }
    }]);

    return Tabs;
  }();



  /***/ }),

  /***/ "./scripts/modules/field-num.js":
  /*!**************************************!*\
    !*** ./scripts/modules/field-num.js ***!
    \**************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var fieldNum = function fieldNum() {
    var fields = document.querySelectorAll('.field-num');

    if (fields.length) {
      Array.prototype.forEach.call(fields, function (field) {
        var input = field.querySelector('.field-num__input');
        var valueMin = input.getAttribute('min') ? +input.getAttribute('min') : -Infinity;
        var valueMax = input.getAttribute('max') ? +input.getAttribute('max') : Infinity;
        var valueStep = input.getAttribute('step') ? +input.getAttribute('step') : 1;
        field.addEventListener('click', function (event) {
          if (event.target.classList.contains('field-num__btn') && !input.getAttribute('disabled')) {
            var num = parseInt(input.value);
            if (isNaN(num)) num = 0;

            if (event.target.classList.contains('field-num__btn--plus')) {
              if (num < valueMax) input.value = num + valueStep;
            }

            if (event.target.classList.contains('field-num__btn--minus')) {
              if (num > valueMin) input.value = num - valueStep;
            }
          }
        });
      });
    }
  };

  /* harmony default export */ __webpack_exports__["default"] = (fieldNum);

  /***/ }),

  /***/ "./scripts/modules/modal-sing-in.js":
  /*!******************************************!*\
    !*** ./scripts/modules/modal-sing-in.js ***!
    \******************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var initSingIn = function initSingIn() {
    var singIn = document.getElementById('singIn');
    var input = singIn.querySelector('.modal__phone-input');
    var code = singIn.querySelector('.modal__code-input');
    var btnChange = singIn.querySelector('.modal__phone-change');
    var btn = singIn.querySelector('.modal__btn');
    var countRange = code.getAttribute('data-count-range');
    var countTime = code.getAttribute('data-count-time');
    var btnAction = 'get';
    var phone = '';

    function changeBtn(action) {
      btnAction = action;
      btn.setAttribute("data-code-action", btnAction);
      btn.innerText = btn.getAttribute("data-code-".concat(btnAction));
    }

    function getCode(event) {
      singIn.classList.add('is-code');
      changeBtn('repeat');
      event.target.classList.add('btn--disabled');
    }

    function changeStateInput(disabled) {
      input.classList.toggle('is-disabled');
      input.disabled = disabled;
    } // Init Sing-in


    changeBtn(btnAction);
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      phone = input.value;

      if (btnAction === 'enter') {
        btn.setAttribute('data-modal', 'close');
        singIn.classList.remove('is-enter');
      } else {
        btn.setAttribute('data-modal', '');
      }

      if (phone) {
        changeStateInput(true);
        changeBtn('repeat');
        getCode(event);
        tik();
      } else {
        input.classList.add('field-text__input--err');
      }
    });
    btnChange.addEventListener('click', function (event) {
      btn.classList.remove('btn--disabled');
      changeStateInput(false);
    });
    code.addEventListener('input', function (event) {
      var numCode = event.target.value;

      if (numCode.length === +countRange) {
        if (code.classList.contains('is-arror')) {
          code.classList.remove('is-arror');
          code.classList.add('is-success', 'is-disabled');
          code.disabled = true;
          input.classList.add('is-disabled');
          input.disabled = true;
          responseCode(true);
        }

        // console.log('Fetch Code');
      } else {
        if (code.classList.contains('is-success')) {
          code.classList.remove('is-success');
        }

        code.classList.add('is-arror');
      }
    }); // Тестовый таймоут

    function tik() {
      var timeField = singIn.querySelector('.modal__time-count');
      var timer = setInterval(getTime, 1000);
      var time = countTime;

      function getTime() {
        timeField.innerText = --time;

        if (time <= 0) {
          changeStateInput(false);
          clearInterval(timer);
          btn.classList.remove('btn--disabled');
        }
      }
    } // Имитация запроса
    // Сделать запрос к серверу


    function responseCode(response) {
      // Тестовые данные
      if (response) {
        setTimeout(function () {
          singIn.classList.remove('is-code');
          singIn.classList.add('is-enter');
          btn.classList.toggle('btn--disabled');
          changeBtn('enter');
          console.log('Test function - Entered Correct Code');
        }, 2000);
      } else {
        setTimeout(function () {
          code.classList.remove('is-success');
          code.classList.remove('is-disabled');
          code.disabled = false;
          code.value = '';
          input.classList.remove('is-disabled');
          input.disabled = false;
          btn.classList.remove('btn--disabled');
          console.log('Test function - Entered Invalid Code');
        }, 2000);
      }
    }
  };

  /* harmony default export */ __webpack_exports__["default"] = (initSingIn);

  /***/ }),

  /***/ "./scripts/modules/modal.js":
  /*!**********************************!*\
    !*** ./scripts/modules/modal.js ***!
    \**********************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var modal = function modal() {
    var bodyPaddingRightOriginal = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right'));
    var backdrop = document.createElement('div');

    var getScrollSize = function getScrollSize() {
      var outer = document.createElement('div');
      var inner = document.createElement('div');
      outer.style.overflow = 'scroll';
      outer.classList.add('scrollbar');
      document.body.appendChild(outer);
      outer.appendChild(inner);
      var scrollbarSize = outer.offsetWidth - inner.offsetWidth;
      document.body.removeChild(outer);
      return scrollbarSize;
    };

    document.addEventListener('click', function (event) {
      var target = event.target.closest('a[data-modal], button[data-modal]');

      if (target && target.dataset.modal === 'open') {
        showModal(document.getElementById((target.hash || target.dataset.modalTarget).slice(1)));
      }

      if (target && target.dataset.modal === 'close' || event.target.matches('[aria-modal]')) {
        closeAllModals();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeAllModals();
      }
    });

    function showModal(targetModalNode) {
      if (document.body.clientHeight - document.documentElement.clientHeight > 0) {
        document.body.style.paddingRight = bodyPaddingRightOriginal + getScrollSize() + 'px';
      }

      document.body.classList.add('modal-open');
      targetModalNode.classList.add('modal--show');
      targetModalNode.style.display = 'block';
      targetModalNode.ariaModal = true;
      targetModalNode.ariaHidden = null;
      targetModalNode.setAttribute('role', 'dialog');
      backdrop.className = 'modal-backdrop';
      document.body.append(backdrop);
    }

    function closeAllModals() {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
      document.querySelectorAll('.modal').forEach(function (modal) {
        modal.classList.remove('modal--show');
        modal.style.display = 'none';
        modal.ariaModal = null;
        modal.ariaHidden = true;
        modal.removeAttribute('role');
      });
      backdrop.remove();
    }

    return {
      getScrollSize: getScrollSize,
      showModal: showModal,
      closeAllModals: closeAllModals
    };
  };

  /* harmony default export */ __webpack_exports__["default"] = (modal);

  /***/ }),

  /***/ "./scripts/modules/order.js":
  /*!**********************************!*\
    !*** ./scripts/modules/order.js ***!
    \**********************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _elements_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/tabs */ "./scripts/modules/elements/tabs.js");
  /* harmony import */ var _elements_inputRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/inputRange */ "./scripts/modules/elements/inputRange.js");
  /* harmony import */ var _elements_radioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/radioGroup */ "./scripts/modules/elements/radioGroup.js");
  /* harmony import */ var _elements_promocode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/promocode */ "./scripts/modules/elements/promocode.js");
  /* harmony import */ var _elements_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/price */ "./scripts/modules/elements/price.js");
  /* harmony import */ var _elements_getModalOrderHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/getModalOrderHtml */ "./scripts/modules/elements/getModalOrderHtml.js");
  /* harmony import */ var _elements_fixedElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/fixedElement */ "./scripts/modules/elements/fixedElement.js");
  var _this = undefined;









  var order = function order() {
    var addZero = function addZero(num) {
      return num <= 9 ? '0' + num : num;
    };

    var form = document.querySelector('.detox__order-form');
    var orderInput = document.querySelector('.order__input[type="date"]');
    var orderInputTel = document.querySelector('.order__input[type="tel"]');
    var orderInputStreet = document.querySelector('.order__input[name="street"]');
    var orderInputAppart = document.querySelector('.order__input[name="apartment"]');
    var detoxOrderForm = document.querySelector('.detox__order-form');
    var formBtn = form.querySelector('.btn[type="submit"]');
    var date = new Date();
    var fullDate = "".concat(addZero(date.getDate() + 1), ".").concat(addZero(date.getMonth() + 1), ".").concat(date.getFullYear());
    var changeDataTtype = fullDate.split('.');
    var reverseData = changeDataTtype.reverse();
    var trueDataType = reverseData.join('-');
    orderInput.min = trueDataType;
    detoxOrderForm.addEventListener('input', function (e) {
      if (orderInputTel.value != 0 && orderInputStreet.value != 0 && orderInputAppart.value != 0) {
        formBtn.disabled = false;
      }
    });
    var order = document.querySelector('.js-order');
    if (!order) return; // Общая стоимость без скидки

    var cost = 0;
    var currentOrder = {
      deliveryMethod: 'Доставка',
      basket: [],
      discount: 0
    };
    var modalOrder = document.querySelector('#currentOrder');
    order.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    var buttonSubmit = order.querySelector('.js-order-submit');
    buttonSubmit.addEventListener('click', function (e) {
      console.log('currentOrder.deliveryMethod', currentOrder.deliveryMethod);

      var checkInput = function checkInput(input) {
        var result = true;

        if (currentOrder.deliveryMethod === 'Доставка') {
          result = input.value !== '' && input.value.length >= 3;
          if (input.getAttribute('name') === 'phone') result = input.value !== '+375 ';
        } else if (!['street', 'house'].includes(input.getAttribute('name'))) result = input.value !== '';

        return result;
      };

      var valid = true;
      requiredInputs.forEach(function (input) {
        if (!checkInput(input)) {
          valid = false;
          input.parentNode.classList.add('order__card-input--error');
        }
      });

      if (!valid) {
        errorMessageBlock.classList.remove('is-hide');
        return;
      }

      var data = new FormData(order);
      var date = new Date();
      var hour = data.get('hour');
      var minutes = data.get('minutes');
      currentOrder.number = 21324, currentOrder.date = "".concat(addZero(date.getDate()), ".").concat(addZero(date.getMonth() + 1), ".").concat(date.getFullYear());
      currentOrder.deliveryCost = cost < 12 ? 3 : 0;
      currentOrder.address = "".concat(data.get('street'), ", ").concat(data.get('house'), ", ").concat(data.get('apartment'));
      currentOrder.time = "".concat(hour, ":").concat(minutes, " - ").concat(minutes == '30' ? +hour + 1 : hour, ":").concat(minutes == '30' ? '00' : '30');
      currentOrder.paymethod = data.get('pay-method');
      currentOrder.phone = data.get('phone');
      currentOrder.comments = data.get('comments');
      currentOrder.price = cost;
      modalOrder.querySelector('.modal__body').innerHTML = (0,_elements_getModalOrderHtml__WEBPACK_IMPORTED_MODULE_5__["default"])(currentOrder);
      modalOrder.querySelector('.js-modal-order-submit').addEventListener('click', function () {
        // тут отправить данные на сервер
        console.log('submit', data, currentOrder);
      });
      window.MODAL.showModal(document.querySelector('#currentOrder'));
    });
    var errorMessageBlock = order.querySelector('.js-oder-error-message'); // required inputs

    var requiredInputs = Array.prototype.slice.call(order.querySelectorAll('input[required]'));
    requiredInputs.forEach(function (input) {
      input.addEventListener('input', function () {
        if (input.value) {
          input.parentNode.classList.remove('order__card-input--error');
          errorMessageBlock.classList.add('is-hide');
        }
      });
    }); // init price

    var price = new _elements_price__WEBPACK_IMPORTED_MODULE_4__["default"]('.js-order-price');
    price.options({
      cb: validateForm.bind(_this)
    }).init(); // Basket

    var basketList = Array.prototype.slice.call(order.querySelectorAll('.js-order-basket-item')); // const basketListCount = order.querySelector('.js-order-basket-count');
    // basketListCount.innerText = basketList.length;
    // const decreaseBasketListCount = () => {
    //   const count = parseInt(basketListCount.innerText);
    //   count > 0 ? basketListCount.innerText = count - 1 : null;
    // }

    var basketListClear = order.querySelector('.js-order-basket-clear');
    basketListClear.addEventListener('click', function () {
      if (basketList && basketList.length) {
        basketList.forEach(function (item) {
          item.querySelector('.field-num__input').value = 0;
          item.classList.add('is-hide'); // decreaseBasketListCount();
        });
        price.change(0);
      }
    });
    basketList.forEach(function (item, i) {
      // const inputFieldNum = item.querySelector('.js-order-basket-field-num');
      var inputFieldNum = item.querySelector('.field-num__input');
      var itemPrice = item.querySelector('[data-basket="cost"]');
      var value = inputFieldNum.value;
      var onePrice = parseFloat(itemPrice.innerText.replace(',', '.')) / value;
      cost += onePrice * value;

      var setPrice = function setPrice(newValue) {
        if (newValue === value) return;
        cost -= onePrice * value;
        value = newValue;
        itemPrice.innerText = (onePrice * value).toFixed(2);
        cost += onePrice * value;
        currentOrder.basket[i].count = value;
        currentOrder.basket[i].price = onePrice * value;
        price.change(cost);
      };

      item.addEventListener('click', function (e) {
        if (e.target.closest('[data-basket="remove"]')) {
          item.classList.add('is-hide'); // item.parentNode.remove(item);
          // decreaseBasketListCount();

          cost -= onePrice * value;
          value = inputFieldNum.value = 0;
          price.change(cost);
          currentOrder.basket[i].status = false;
        }

        if (e.target.closest('[data-basket="actions"]')) {
          setPrice(inputFieldNum.value);
        }
      });
      currentOrder.basket.push({
        status: true,
        name: item.querySelector('[data-basket="name"]').innerText || '',
        weight: item.querySelector('[data-basket="weight"]').innerText || '',
        count: value,
        price: onePrice * value
      });
    });
    price.change(cost);
    var deliveryBlock = order.querySelector('.js-order-delivery');

    var deliveryCb = function deliveryCb(active) {
      currentOrder.deliveryMethod = ['Доставка', 'Самовывоз'][active];
      console.log('deliveryCb', active, currentOrder.deliveryMethod);
      if (active === 1) deliveryBlock.classList.add('is-hide');else deliveryBlock.classList.remove('is-hide');
    }; // tabs init


    var deliveryTabs = new _elements_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-delivery');
    deliveryTabs.options({
      cb: deliveryCb
    }).init();

    var modalChangeAddressCb = function modalChangeAddressCb(response) {
      // тут данные из модалки
      if (response.deliveryMethod === 'Доставка') {
        ['street', 'house', 'apartment', 'entrance', 'frame', 'floor'].forEach(function (name) {
          order.querySelector("input[name=\"".concat(name, "\"]")).value = response.data.get(name);
        });
        setTimeout(function () {
          deliveryTabs.toggleTabs(0);
        }, 200);
      } else {
        var oldAddress = order.querySelector('input[name="address"]:checked');
        oldAddress.removeAttribute('checked');
        oldAddress.parentNode.parentNode.classList.add('is-hide');
        var newAddress = order.querySelector("input[value=\"".concat(response.data.get('modal-address'), "\"]"));
        newAddress.setAttribute('checked', 'checked');
        newAddress.parentNode.parentNode.classList.remove('is-hide');
      }

      window.ModalChangeAddress.options({
        cb: null
      });
    };

    var warningDidShow = false;

    var showModalChangeAddress = function showModalChangeAddress() {
      var actions = [{
        name: 'title',
        status: false
      }, {
        name: 'info',
        status: false
      }];
      window.ModalChangeAddress.options({
        cb: modalChangeAddressCb
      }).setActions({
        actions: actions,
        buttonText: 'Изменить адрес'
      });
      window.MODAL.showModal(document.querySelector('#changeAddress'));
    };

    var linkChangeAddress = order.querySelector('.js-order-change-address');
    linkChangeAddress.addEventListener('click', function () {
      if (!warningDidShow) {
        var modalWarning = document.querySelector('#warningChangeOrder');
        var buttonCb = modalWarning.querySelector('[data-modal="cb"]');
        buttonCb.addEventListener('click', function () {
          window.MODAL.closeAllModals();
          showModalChangeAddress();
        }); // скрываем предупреждение после первого показа (может и не надо)

        warningDidShow = true;
        window.MODAL.showModal(modalWarning);
      } else showModalChangeAddress();
    });
    var deliveryTimeTabs = new _elements_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-delivery-time');
    deliveryTimeTabs.options({}).init(); // init InputRange

    var inputRange = new _elements_inputRange__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-order-input-range');
    inputRange.init(); // init radio-groupe

    var radioGroup = new _elements_radioGroup__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-order-pay-method-radiogroup');
    radioGroup.init(); // PROMOCODE

    var cbPromocode = function cbPromocode(discount) {
      price.setDiscount(discount);
      currentOrder.discount = discount;
    }; // init promocode


    var promocode = new _elements_promocode__WEBPACK_IMPORTED_MODULE_3__["default"]('.js-order-input-promocode');
    promocode.options({
      cb: cbPromocode
    }).init();

    function validateForm() {
      if (cost > 12) {
        buttonSubmit.classList.remove('btn--disabled');
      } else {
        buttonSubmit.classList.add('btn--disabled');
      }
    }

    var sidebar = new _elements_fixedElement__WEBPACK_IMPORTED_MODULE_6__["default"]('.js-order-sidebar');
    sidebar.init();
  };

  /* harmony default export */ __webpack_exports__["default"] = (order);

  /***/ }),

  /***/ "./scripts/modules/phones.js":
  /*!***********************************!*\
    !*** ./scripts/modules/phones.js ***!
    \***********************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "../node_modules/inputmask/dist/inputmask.js");
  /* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);


  var phones = function phones() {
    var phones = document.querySelectorAll('input[name="phone"]');
    if (!phones || !phones.length) return;
    var im = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())("");
    phones.forEach(function (selector) {
      return im.mask(selector);
    });
  };

  /* harmony default export */ __webpack_exports__["default"] = (phones);

  /***/ }),

  /***/ "./scripts/modules/slider-banner.js":
  /*!******************************************!*\
    !*** ./scripts/modules/slider-banner.js ***!
    \******************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderBanner = {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        centeredSlides: false
      },
      640: {
        spaceBetween: 25
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderBanner);

  /***/ }),

  /***/ "./scripts/modules/slider-detox-banner.js":
  /*!************************************************!*\
    !*** ./scripts/modules/slider-detox-banner.js ***!
    \************************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderDetoxBanner = {
    loop: true,
    observer: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        navigation: false
      },
      640: {
        spaceBetween: 25
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderDetoxBanner);

  /***/ }),

  /***/ "./scripts/modules/slider-fit1.js":
  /*!****************************************!*\
    !*** ./scripts/modules/slider-fit1.js ***!
    \****************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderFit1 = {
    observer: true,
    observerParent: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    slideToClickedSlide: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderFit1);

  /***/ }),

  /***/ "./scripts/modules/slider-fit2.js":
  /*!****************************************!*\
    !*** ./scripts/modules/slider-fit2.js ***!
    \****************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderFit2 = {
    observer: true,
    observerParent: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    slideToClickedSlide: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderFit2);

  /***/ }),

  /***/ "./scripts/modules/slider-fit3.js":
  /*!****************************************!*\
    !*** ./scripts/modules/slider-fit3.js ***!
    \****************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderFit3 = {
    observer: true,
    observerParent: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    slideToClickedSlide: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderFit3);

  /***/ }),

  /***/ "./scripts/modules/slider-reviews.js":
  /*!*******************************************!*\
    !*** ./scripts/modules/slider-reviews.js ***!
    \*******************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderReviews = {
    slidesPerView: 2,
    spaceBetween: 30,
    slideToClickedSlide: true,
    // loop: true,
    // observer: true,
    // observerParent: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      899: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10 // loop: true,

      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderReviews);

  /***/ }),

  /***/ "./scripts/modules/slider-soup.js":
  /*!****************************************!*\
    !*** ./scripts/modules/slider-soup.js ***!
    \****************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderSoup = {
    slidesPerView: 4,
    spaceBetween: 20,
    slideToClickedSlide: false,
    observer: true,
    observerParent: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1440: {
        slidesPerView: 3
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderSoup);

  /***/ }),

  /***/ "./scripts/modules/slider-tab.js":
  /*!***************************************!*\
    !*** ./scripts/modules/slider-tab.js ***!
    \***************************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var sliderTab = {
    slidesPerView: 3,
    slideToClickedSlide: true,
    loop: false,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev'
    },
    breakpoints: {
      620: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 1.5
      }
    }
  };
  /* harmony default export */ __webpack_exports__["default"] = (sliderTab);

  /***/ }),

  /***/ "./scripts/modules/to-top.js":
  /*!***********************************!*\
    !*** ./scripts/modules/to-top.js ***!
    \***********************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var toTop = function toTop() {
    var toTop = document.querySelector('.to-top');

    if (toTop) {
      toTop.addEventListener('click', function (e) {
        e.preventDefault();
        var scroll = window.pageYOffset;
        var targetTop = 0;
        var scrollDiff = (scroll - targetTop) * -1;
        animate({
          duration: 500,
          timing: function timing(timeFraction) {
            return Math.pow(timeFraction, 4);
          },
          draw: function draw(progress) {
            var scrollNow = scroll + progress * scrollDiff;
            window.scrollTo(0, scrollNow);
          }
        });
      }, false);
      window.addEventListener('scroll', visibilityToggle);
      visibilityToggle();
    }

    function visibilityToggle() {
      if (window.pageYOffset >= 500) {
        toTop.classList.add('to-top--visible');
      } else {
        toTop.classList.remove('to-top--visible');
      }
    }

    function animate(_ref) {
      var timing = _ref.timing,
          draw = _ref.draw,
          duration = _ref.duration;
      var start = performance.now();
      requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        var progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    }
  };

  /* harmony default export */ __webpack_exports__["default"] = (toTop);

  /***/ }),

  /***/ "./scripts/utils/DOMReady.js":
  /*!***********************************!*\
    !*** ./scripts/utils/DOMReady.js ***!
    \***********************************/
  /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  var DOMReady = function DOMReady(callback) {
    document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
  };

  /* harmony default export */ __webpack_exports__["default"] = (DOMReady);

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
  /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/chunk loaded */
  /******/ 	!function() {
  /******/ 		var deferred = [];
  /******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
  /******/ 			if(chunkIds) {
  /******/ 				priority = priority || 0;
  /******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
  /******/ 				deferred[i] = [chunkIds, fn, priority];
  /******/ 				return;
  /******/ 			}
  /******/ 			var notFulfilled = Infinity;
  /******/ 			for (var i = 0; i < deferred.length; i++) {
  /******/ 				var chunkIds = deferred[i][0];
  /******/ 				var fn = deferred[i][1];
  /******/ 				var priority = deferred[i][2];
  /******/ 				var fulfilled = true;
  /******/ 				for (var j = 0; j < chunkIds.length; j++) {
  /******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
  /******/ 						chunkIds.splice(j--, 1);
  /******/ 					} else {
  /******/ 						fulfilled = false;
  /******/ 						if(priority < notFulfilled) notFulfilled = priority;
  /******/ 					}
  /******/ 				}
  /******/ 				if(fulfilled) {
  /******/ 					deferred.splice(i--, 1)
  /******/ 					var r = fn();
  /******/ 					if (r !== undefined) result = r;
  /******/ 				}
  /******/ 			}
  /******/ 			return result;
  /******/ 		};
  /******/ 	}();
  /******/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	!function() {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = function(module) {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				function() { return module['default']; } :
  /******/ 				function() { return module; };
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	}();
  /******/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	!function() {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = function(exports, definition) {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	}();
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	!function() {
  /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
  /******/ 	}();
  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	!function() {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = function(exports) {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	}();
  /******/
  /******/ 	/* webpack/runtime/jsonp chunk loading */
  /******/ 	!function() {
  /******/ 		// no baseURI
  /******/
  /******/ 		// object to store loaded and loading chunks
  /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
  /******/ 		var installedChunks = {
  /******/ 			"main": 0
  /******/ 		};
  /******/
  /******/ 		// no chunk on demand loading
  /******/
  /******/ 		// no prefetching
  /******/
  /******/ 		// no preloaded
  /******/
  /******/ 		// no HMR
  /******/
  /******/ 		// no HMR manifest
  /******/
  /******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
  /******/
  /******/ 		// install a JSONP callback for chunk loading
  /******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
  /******/ 			var chunkIds = data[0];
  /******/ 			var moreModules = data[1];
  /******/ 			var runtime = data[2];
  /******/ 			// add "moreModules" to the modules object,
  /******/ 			// then flag all "chunkIds" as loaded and fire callback
  /******/ 			var moduleId, chunkId, i = 0;
  /******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
  /******/ 				for(moduleId in moreModules) {
  /******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
  /******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
  /******/ 					}
  /******/ 				}
  /******/ 				if(runtime) var result = runtime(__webpack_require__);
  /******/ 			}
  /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
  /******/ 			for(;i < chunkIds.length; i++) {
  /******/ 				chunkId = chunkIds[i];
  /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
  /******/ 					installedChunks[chunkId][0]();
  /******/ 				}
  /******/ 				installedChunks[chunkIds[i]] = 0;
  /******/ 			}
  /******/ 			return __webpack_require__.O(result);
  /******/ 		}
  /******/
  /******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
  /******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
  /******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
  /******/ 	}();
  /******/
  /************************************************************************/
  /******/
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
  /******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./scripts/index.js"); })
  /******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/ })()
  ;
  //# sourceMappingURL=main.js.map
