import React from 'react';
import MaeveDropdown from 'maeve-dropdown';

export default class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      autocompleteSuggestions: null,
    };
  }

  filterResults = (item, query) => item.toLowerCase().includes(query.toLowerCase())

  updateValue = (newState) => {
    const valueId = this.props.multi === 'true' ? this.props.valueId : this.props.id;
    this.props.onValueUpdate(valueId, newState.value);
    this.setState(newState);
  }

  handleChange = (event) => {
    let updatedValue = event.target.value;
    let updatedAutocompleteSuggestions = [];

    if ( typeof this.props.autocomplete !== 'undefined' && updatedValue.length > 2 ) {
      updatedAutocompleteSuggestions = this.state.autocompleteSuggestions;
      const source = this.props.autocomplete.source;
      if ( source instanceof Array ) {
        updatedAutocompleteSuggestions = source
          .filter(
            item => this.filterResults(item, updatedValue)
          );
      } else if ( typeof source === 'function' ) {
        updatedAutocompleteSuggestions = source(updatedValue);
      }
    } else {
      updatedAutocompleteSuggestions = null;
    }
    this.updateValue({
      value: updatedValue,
      autocompleteSuggestions: updatedAutocompleteSuggestions,
    });
  }

  onItemSelect = (value) => {
    this.updateValue({
      value,
      autocompleteSuggestions: null,
    });
  }

  addNewItem = () => {
    this.props.autocomplete.options.addNewItem(this.state.value);
    this.setState({
      autocompleteSuggestions: null,
    });
  }

  render() {
    return (
      <div className="maeve-input">
        { typeof this.props.label !== undefined ?
          <label htmlFor={this.props.id}>{this.props.label}</label>
          :
          ''
        }
        <input
          id={this.props.id}
          type="text"
          name="maeve-input"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        { typeof this.props.autocomplete !== 'undefined' ?
        <MaeveDropdown
          items={this.state.autocompleteSuggestions}
          options={this.props.autocomplete.options}
          onSelect={this.onItemSelect}
          addNewItem={
              (
                this.props.autocomplete !== undefined &&
                this.props.autocomplete.options !== undefined &&
                this.props.autocomplete.options.addNewItem !== undefined
              ) ?
              this.addNewItem
              : undefined
            }
        />
        : ''
        }
      </div>
    );
  }
};