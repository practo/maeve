import React from 'react';
import { MaeveMultiStyle, MaeveMultiItem, AddRemoveButton, ChildComponent } from './maeve-multi-style';

class MaeveMulti extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childComponents: [],
      componentsCounter: 0,
    };
  }

  componentDidMount() {
    this.addInitialComponents(this.props);
  }

  addInitialComponents = (props) => {
    if(typeof props.componentProps !== 'undefined') {
      const newComponents = props.componentProps.map((props, key) => this.getNewComponent(true, props));
      const newCounter = Math.max(newComponents.length, this.state.componentsCounter);
      this.setState({
        childComponents: newComponents,
        componentsCounter: newCounter,
      });
    } else if (props.initWithZero !== true) {
      this.addNewComponent(true);
    }
  }

  componentWillReceiveProps(newProps) {
    this.addInitialComponents(newProps);
  }

  getNewComponent = (initialLoad, props = {}) => {
    const component = this.props.children;
    const newProps = {};
    const newAddCounter = this.state.componentsCounter + 1;
    if (initialLoad) {
      Object.assign(newProps, component.props, props, {
        multi: true,
      });
    } else {
      Object.assign(newProps, component.props, props, {
        multi: true,
        fieldValue: '',
      });
    }
    newProps.valueId = newProps.valueId || `${component.props.id}-${newAddCounter}`;
    newProps.id = newProps.valueId;
    console.log("NEW PROPS");
    console.log(newProps);
    const newComponent = React.cloneElement(component, newProps);
    console.log(newComponent);
    const newComponentObj = {
      componentId: newComponent.props.valueId || newComponent.props.id,
      component: newComponent,
    };
    console.log(newComponentObj);
    return newComponentObj;
  }

  getListComponent = (fieldVal, index) => {
    const component = this.props.children;
    const newProps = {};
    const newAddCounter = this.state.componentsCounter + 1;
    Object.assign(newProps, component.props, {
      multi: true,
      fieldValue: fieldVal,
    });
    newProps.valueId = `element-${index+1}`;
    const newComponent = React.cloneElement(component, newProps);
    const newComponentObj = {
      componentId: newComponent.props.valueId || newComponent.props.id,
      component: newComponent,
    };
    return newComponentObj;
  }

  addNewComponent = (initialLoad) => {
    let newAddCounter = this.state.componentsCounter + 1;
    if (this.props.children.props.fieldValue && this.props.children.props.fieldValue.length > 1 && !initialLoad && this.state.componentsCounter === 1) {
      console.log("HERE1");
      newAddCounter = this.props.children.props.fieldValue.length;
      this.state.componentsCounter = this.props.children.props.fieldValue.length;
    }
    if(typeof this.props.addCallback !== 'undefined') {
      console.log("HERE2");
      const component = this.props.children;
      this.props.addCallback(`${component.props.id}-${this.state.componentsCounter + 1}`);
    }
    let newComponents = [];
    if (this.props.children.props.fieldValue && this.props.children.props.fieldValue.length > 1 && initialLoad) {
      console.log("HERE3");
      this.props.children.props.fieldValue.map((fieldVal, index)=> {
        const newComponentObj = this.getListComponent(fieldVal, index);
        newComponents.push(newComponentObj);
      })
    } else {
      console.log("HERE4");
      const newComponentObj = this.getNewComponent(initialLoad);
      newComponents = [...this.state.childComponents, newComponentObj];
    }
    this.setState({
      childComponents: newComponents,
      componentsCounter: newAddCounter,
    });
  }

  addPropsToComponent = (component, newId) => {
    return React.cloneElement(
      component,
      {
        multi: true,
        valueId: newId
      }
    );
  }

  removeComponent = (componentId) => {
    const newComponents = this.state.childComponents.filter(item =>
      item.componentId !== componentId
    );
    if(typeof this.props.removeCallback !== 'undefined') {
      this.props.removeCallback(componentId);
    }
    this.setState({
      childComponents: newComponents,
    });
  }

  render() {
    const self = this;
    let removeButtonLimit = this.props.initWithZero === true ? 0 : 1;
    return (
      <MaeveMultiStyle className="maeve-multi">
        { this.state.childComponents.map((val, key) => (
          <MaeveMultiItem key={val.componentId} className="maeve-multi-item">
            <ChildComponent>
              { val.component }
            </ChildComponent>
            {
                this.state.childComponents.length > removeButtonLimit
              ?
                <AddRemoveButton
                  className="add-remove-button"
                  onClick={ this.removeComponent.bind(null, val.componentId) }
                > - </AddRemoveButton>
              : ''
            }
          </MaeveMultiItem>
        ))
        }
        <AddRemoveButton
          className="add-remove-button"
          onClick={ this.addNewComponent.bind(null, false) }> +
        </AddRemoveButton>
      </MaeveMultiStyle>
    );
  }
};

MaeveMulti.propTypes = {
  addCallback: React.PropTypes.func,
  removeCallback: React.PropTypes.func,
  componentProps: React.PropTypes.array,
};

export default MaeveMulti;
