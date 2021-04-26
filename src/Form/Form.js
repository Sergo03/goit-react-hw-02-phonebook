import React, { Component } from 'react';


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
    this.setState({ name: '' })
  }  
  
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        
        <label > Name
          <input
            type="text"
            name="name"
           
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleinput}
            value={this.state.name}
          />
        </label> Number
        <label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
             onChange={this.handleinput}
            value={this.state.number}
          />
        </label>

        <button type="submit">Add contact</button>

      </form>

    )
  }

}

export default Form;