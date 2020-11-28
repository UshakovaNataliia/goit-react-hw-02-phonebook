import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component { 
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  addContactItem = e => {
    e.preventDefault();
    this.props.onSubmit(this.state); //add to this.state by submit
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.addContactItem}>
          <label>
            Name
            <br/>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.inputChange}
            />
          </label>
          <br/>
          <br/>
          <label>
            Number
            <br/>
            <input
              type="number"
              name="number"
              value={number}
              onChange={this.inputChange}
            />
          </label>
          <br/>
          <br/>
          <button type="submit">Add contact</button>
      </form>
      </>
    );
  }
}

Form.propTypes = {
  state: PropTypes.object,
};

export default Form;