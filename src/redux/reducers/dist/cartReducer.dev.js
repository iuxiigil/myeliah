"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cartReducer;

var _uuid = require("uuid");

var _variables = require("../variables");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = [];

function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var cartItem = state.find(function (item) {
    return item.cartId === action.cartId;
  });
  var cartItemIndex = cartItem && state.indexOf(cartItem);

  switch (action.type) {
    case _variables.CART.ADD_TO_CART:
      if (!action.product.variation || action.product.variation.length === 0) {
        var addedCartItem = state.find(function (item) {
          return item.id === action.product.id;
        });
        var addedCartItemIndex = addedCartItem && state.indexOf(addedCartItem);

        if (!addedCartItem) {
          return [].concat(_toConsumableArray(state), [_objectSpread({}, action.product, {
            cartQuantity: action.quantity || 1,
            cartId: (0, _uuid.v4)()
          })]);
        } else {
          return [].concat(_toConsumableArray(state.slice(0, addedCartItemIndex)), [_objectSpread({}, addedCartItem, {
            cartQuantity: action.quantity ? addedCartItem.cartQuantity + action.quantity : addedCartItem.cartQuantity + 1
          })], _toConsumableArray(state.slice(addedCartItemIndex + 1)));
        }
      } else {
        if (!action.color || action.color === "") {
          var _addedCartItem = state.find(function (item) {
            return item.id === action.product.id;
          });

          var _addedCartItemIndex = _addedCartItem && state.indexOf(_addedCartItem);

          if (!_addedCartItem) {
            return [].concat(_toConsumableArray(state), [_objectSpread({}, action.product, {
              cartQuantity: action.quantity || 1,
              cartId: (0, _uuid.v4)()
            })]);
          } else {
            return [].concat(_toConsumableArray(state.slice(0, _addedCartItemIndex)), [_objectSpread({}, _addedCartItem, {
              cartQuantity: action.quantity ? _addedCartItem.cartQuantity + action.quantity : _addedCartItem.cartQuantity + 1
            })], _toConsumableArray(state.slice(_addedCartItemIndex + 1)));
          }
        } else {
          var _addedCartItem2 = state.find(function (item) {
            return item.id === action.product.id && item.selectedColor && item.selectedColor === action.color;
          });

          var _addedCartItemIndex2 = _addedCartItem2 && state.indexOf(_addedCartItem2);

          if (!_addedCartItem2) {
            return [].concat(_toConsumableArray(state), [_objectSpread({}, action.product, {
              cartQuantity: action.quantity || 1,
              selectedColor: action.color,
              cartId: (0, _uuid.v4)()
            })]);
          } else {
            return [].concat(_toConsumableArray(state.slice(0, _addedCartItemIndex2)), [_objectSpread({}, _addedCartItem2, {
              cartQuantity: action.quantity ? _addedCartItem2.cartQuantity + action.quantity : _addedCartItem2.cartQuantity + 1
            })], _toConsumableArray(state.slice(_addedCartItemIndex2 + 1)));
          }
        }
      }

    case _variables.CART.REMOVE_FROM_CART:
      return [].concat(_toConsumableArray(state.slice(0, cartItemIndex)), _toConsumableArray(state.slice(cartItemIndex + 1)));

    case _variables.CART.REMOVE_ALL_FROM_CART:
      return [];

    case _variables.CART.INCREASE_QUANTITY_CART:
      return [].concat(_toConsumableArray(state.slice(0, cartItemIndex)), [_objectSpread({}, cartItem, {
        cartQuantity: cartItem.cartQuantity + 1
      })], _toConsumableArray(state.slice(cartItemIndex + 1)));

    case _variables.CART.DECREASE_QUANTITY_CART:
      if (cartItem.cartQuantity < 2) {
        return;
      }

      return [].concat(_toConsumableArray(state.slice(0, cartItemIndex)), [_objectSpread({}, cartItem, {
        cartQuantity: cartItem.cartQuantity - 1
      })], _toConsumableArray(state.slice(cartItemIndex + 1)));

    default:
      return state;
  }
}