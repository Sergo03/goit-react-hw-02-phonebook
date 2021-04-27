import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import style from './Style.module.css'

class Form extends Component{
    state = {
      name: '',
      number: ''
    }
    
  handleinput = (e) => {
   
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  };
      
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
 
    this.reset();
   
  }
  
  reset = () => {
    this.setState({ name: '', number: '' })
  }
  
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        
        <label className={style.label}> Name
          <input
            className={style.input_name}
            type="text"
            name="name"
           
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleinput}
            value={this.state.name}
          />
        </label> 
        <label className={style.label}>Number
          <input
            className={style.input_tel}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
             onChange={this.handleinput}
            value={this.state.number}
          />
        </label>

        <button type="submit" className={style.btn_add}>Add contact</button>

      </form>

    )
  }

}

Form.propTypes = {
  onSubmit: PropsTypes.func.isRequired,
}

export default Form;