import React from 'react';
import {
  OnOffSwitch,
  OnOffSwitchCheckBox,
  OnOffswitchLabel,
  OnOffswitchInner,
  OnOffswitchSwitch,
} from './maeve-toggle.style.js';

export default class MaeveToggle extends React.Component {
  render() {
    return (
      <div className="maeve-toggle">
        { typeof this.props.label !== undefined ?
          <div className="toggle-label">{ this.props.label }</div>
          :
          ''
        }
        <OnOffSwitch>
          <OnOffSwitchCheckBox
            type="checkbox"
            name={this.props.id}
            className="onoffswitch-checkbox"
            id={this.props.id}
            defaultChecked
            onChange={event => this.props.onValueUpdate(event.target.checked, this.props.id)}
          />
          <OnOffswitchLabel className="onoffswitch-label" htmlFor={this.props.id}>
            <OnOffswitchInner className="onoffswitch-inner" />
            <OnOffswitchSwitch className="onoffswitch-switch" />
          </OnOffswitchLabel>
        </OnOffSwitch>
      </div>
    );
  }
};