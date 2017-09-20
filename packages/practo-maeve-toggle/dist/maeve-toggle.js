!function(global,factory){if("function"==typeof define&&define.amd)define(["exports","react","./maeve-toggle-style.js"],factory);else if("undefined"!=typeof exports)factory(exports,require("react"),require("./maeve-toggle-style.js"));else{var mod={exports:{}};factory(mod.exports,global.react,global.maeveToggleStyle),global.maeveToggle=mod.exports}}(this,function(exports,_react,_maeveToggleStyle){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _react2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_react),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MaeveToggle=function(_React$Component){function MaeveToggle(){return _classCallCheck(this,MaeveToggle),_possibleConstructorReturn(this,(MaeveToggle.__proto__||Object.getPrototypeOf(MaeveToggle)).apply(this,arguments))}return _inherits(MaeveToggle,_React$Component),_createClass(MaeveToggle,[{key:"render",value:function(){var _this2=this;return _react2.default.createElement("div",{className:"maeve-toggle"},void 0!==_typeof(this.props.label)?_react2.default.createElement(_maeveToggleStyle.ToggleLabel,null,this.props.label):"",_react2.default.createElement(_maeveToggleStyle.OnOffSwitch,null,_react2.default.createElement(_maeveToggleStyle.OnOffSwitchCheckBox,{type:"checkbox",name:this.props.id,className:"onoffswitch-checkbox",id:this.props.id,defaultChecked:!0,onChange:function(event){return _this2.props.onValueUpdate(event.target.checked,_this2.props.id)}}),_react2.default.createElement(_maeveToggleStyle.OnOffswitchLabel,{className:"onoffswitch-label",htmlFor:this.props.id},_react2.default.createElement(_maeveToggleStyle.OnOffswitchInner,{className:"onoffswitch-inner"}),_react2.default.createElement(_maeveToggleStyle.OnOffswitchSwitch,{className:"onoffswitch-switch"}))))}}]),MaeveToggle}(_react2.default.Component);exports.default=MaeveToggle}),function(global,factory){if("function"==typeof define&&define.amd)define(["exports","styled-components"],factory);else if("undefined"!=typeof exports)factory(exports,require("styled-components"));else{var mod={exports:{}};factory(mod.exports,global.styledComponents),global.maeveToggleStyle=mod.exports}}(this,function(exports,_styledComponents){"use strict";function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.OnOffswitchSwitch=exports.OnOffswitchInner=exports.OnOffswitchLabel=exports.OnOffSwitchCheckBox=exports.ToggleLabel=exports.OnOffSwitch=void 0;var _styledComponents2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_styledComponents),_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  width: 76px;\n  display: inline-block;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n"],["\n  position: relative;\n  width: 76px;\n  display: inline-block;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n"],["\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  display: none;\n  &:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n  }\n  &:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n  }\n"],["\n  display: none;\n  &:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n  }\n  &:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n  }\n"]),_templateObject4=_taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n"],["\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n"]),_templateObject5=_taggedTemplateLiteral(['\n  display: block; width: 200%; margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n  &:before, &:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 30px;\n    padding: 0;\n    line-height: 30px;\n    font-size: 14px;\n    color: white;\n    font-weight: bold;\n    box-sizing: border-box;\n  }\n  &:before {\n    content: "YES";\n    padding-left: 10px;\n    background-color: #36B23C; color: #FFFFFF;\n  }\n  &:after {\n    content: "NO";\n    padding-right: 10px;\n    background-color: #E96C6C; color: #FFFFFF;\n    text-align: right;\n  }\n'],['\n  display: block; width: 200%; margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n  &:before, &:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 30px;\n    padding: 0;\n    line-height: 30px;\n    font-size: 14px;\n    color: white;\n    font-weight: bold;\n    box-sizing: border-box;\n  }\n  &:before {\n    content: "YES";\n    padding-left: 10px;\n    background-color: #36B23C; color: #FFFFFF;\n  }\n  &:after {\n    content: "NO";\n    padding-right: 10px;\n    background-color: #E96C6C; color: #FFFFFF;\n    text-align: right;\n  }\n']),_templateObject6=_taggedTemplateLiteral(["\n  display: block; width: 17px;\n  margin: 6.5px;\n  background: #FFFFFF;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 42px;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n"],["\n  display: block; width: 17px;\n  margin: 6.5px;\n  background: #FFFFFF;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 42px;\n  border: 2px solid #F0F0F0;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n"]);exports.OnOffSwitch=_styledComponents2.default.div(_templateObject),exports.ToggleLabel=_styledComponents2.default.label(_templateObject2),exports.OnOffSwitchCheckBox=_styledComponents2.default.input(_templateObject3),exports.OnOffswitchLabel=_styledComponents2.default.label(_templateObject4),exports.OnOffswitchInner=_styledComponents2.default.div(_templateObject5),exports.OnOffswitchSwitch=_styledComponents2.default.label(_templateObject6)});