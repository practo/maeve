import React from 'react';
import {
  OnOffSwitch,
  OnOffSwitchCheckBox,
  OnOffswitchLabel,
  OnOffswitchInner,
  OnOffswitchSwitch,
  ToggleLabel,
} from './maeve-toggle-style.js';

export default class MaeveToggle extends React.Component {

  componentDidMount() {
    this.props.onValueUpdate(false, this.props.id);
  }

  shouldComponentUpdate(nextProps) {
    if(!this.props.value === nextProps.value) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="maeve-toggle">
        { typeof this.props.label !== undefined && !this.props.required ?
          <ToggleLabel>{ this.props.label }</ToggleLabel>
          :
          ''
        }
        { typeof this.props.label !== undefined && this.props.required ?
          <ToggleLabel>{ this.props.label }<span className="star">*</span><style>{'.star{padding-left: 3px;color: orangered;}'}</style>
          </ToggleLabel>
          :
          ''
        }
        <OnOffSwitch>
          <OnOffSwitchCheckBox
            type="checkbox"
            name={this.props.id}
            className="onoffswitch-checkbox"
            id={this.props.id}
            checked={this.props.value}
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
