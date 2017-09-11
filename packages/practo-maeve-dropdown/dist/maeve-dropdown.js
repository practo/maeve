!function(global,factory){if("function"==typeof define&&define.amd)define(["exports","react","./maeve-dropdown-style.js"],factory);else if("undefined"!=typeof exports)factory(exports,require("react"),require("./maeve-dropdown-style.js"));else{var mod={exports:{}};factory(mod.exports,global.react,global.maeveDropdownStyle),global.maeveDropdown=mod.exports}}(this,function(exports,_react,_maeveDropdownStyle){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _react2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_react),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MaeveDropdown=function(_React$Component){function MaeveDropdown(props){_classCallCheck(this,MaeveDropdown);var _this=_possibleConstructorReturn(this,(MaeveDropdown.__proto__||Object.getPrototypeOf(MaeveDropdown)).call(this,props));return _this.getDropdownItems=function(items){var dropdownItems=[];return items instanceof Array&&(0===items.length?dropdownItems.push(_react2.default.createElement(_maeveDropdownStyle.MaeveDropdownListItem,null,"No result found")):dropdownItems=items.map(function(value,key){return _react2.default.createElement(_maeveDropdownStyle.MaeveDropdownListItem,{className:"dropdown-item",key:key,onClick:function(event){return _this.props.onSelect(value,event)}},value)})),null!==items&&void 0!==_this.props.addNewItem&&dropdownItems.push(_react2.default.createElement("li",{style:dropdownItemStyle,className:"dropdown-item",key:dropdownItems.length+1,onClick:_this.props.addNewItem},"Add New +")),dropdownItems},_this}return _inherits(MaeveDropdown,_React$Component),_createClass(MaeveDropdown,[{key:"render",value:function(){var items=this.props.items;return _react2.default.createElement(_maeveDropdownStyle.MaeveDropDown,null,_react2.default.createElement(_maeveDropdownStyle.MaeveDropdownList,null,this.getDropdownItems(items)))}}]),MaeveDropdown}(_react2.default.Component);MaeveDropdown.PropTypes={items:_react2.default.PropTypes.isRequired,onSelect:_react2.default.PropTypes.func.isRequired,addNewItem:_react2.default.PropTypes.func.isRequired},exports.default=MaeveDropdown}),function(global,factory){if("function"==typeof define&&define.amd)define(["exports","styled-components"],factory);else if("undefined"!=typeof exports)factory(exports,require("styled-components"));else{var mod={exports:{}};factory(mod.exports,global.styledComponents),global.maeveDropdownStyle=mod.exports}}(this,function(exports,_styledComponents){"use strict";function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.MaeveDropdownListItem=exports.MaeveDropdownList=exports.MaeveDropDown=void 0;var _styledComponents2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_styledComponents),_templateObject=_taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n"],["\n  position: absolute;\n  z-index: 10;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  list-style-type: none;\n  padding: 0;\n  width: 377px;\n  margin: 0;\n  background: #f2f2f2;\n  border: 1px solid #efefef;\n  border-top: 0px;\n"],["\n  list-style-type: none;\n  padding: 0;\n  width: 377px;\n  margin: 0;\n  background: #f2f2f2;\n  border: 1px solid #efefef;\n  border-top: 0px;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  padding: 4px 8px;\n  font-size: 14px;\n  color:  #424242;\n  padding: 7px;\n  border': 1px solid #ececec;\n  borderTop: 0px;\n  cursor: pointer;\n  &:hover {\n    background: #3fa9f5;\n    color: #fff;\n  }\n"],["\n  padding: 4px 8px;\n  font-size: 14px;\n  color:  #424242;\n  padding: 7px;\n  border': 1px solid #ececec;\n  borderTop: 0px;\n  cursor: pointer;\n  &:hover {\n    background: #3fa9f5;\n    color: #fff;\n  }\n"]);exports.MaeveDropDown=_styledComponents2.default.div(_templateObject),exports.MaeveDropdownList=_styledComponents2.default.ul(_templateObject2),exports.MaeveDropdownListItem=_styledComponents2.default.li(_templateObject3)});