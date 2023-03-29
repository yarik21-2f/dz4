import React, { Component } from 'react'

export default class Regist extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       number:"",
       date:""
       
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
};

handleSubmit(event) {
  alert("Пользователь: " + this.state.name)
  console.log(this.state.name);
  console.log(this.state.number);
  console.log(this.state.date);
  event.preventDefault();
}

  
  render() {
    return (
      <div className='inputForm'>
        <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Ф.И.О"
        />
        <input
          type="mail"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Номер"
        />
        <input
          type="date"
          name="date"
          value={this.state.mail}
          onChange={this.handleChange}
        />
        <input type="submit" value="Отправить" />
        </form>
        
      </div>
    )
  }
}
