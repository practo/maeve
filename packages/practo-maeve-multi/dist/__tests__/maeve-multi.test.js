'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _maeveMulti = require('../maeve-multi.jsx');

var _maeveMulti2 = _interopRequireDefault(_maeveMulti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('render maeve multi', function () {
  var component = (0, _enzyme.shallow)(_react2.default.createElement(
    _maeveMulti2.default,
    null,
    'Hi'
  ));
  expect(component).toMatchSnapshot();
});