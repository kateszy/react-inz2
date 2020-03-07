import React, { Component } from 'react';
import './Auth.css';
import { Container } from 'react-bootstrap';

class Login extends Component {
  
  state = {
    email: '',
    password: '',
    message: '',
    errors: {
      email: false,
      password: false,
      server: false,
    }
  }
  componentWillMount(){
    const token = this.props.cookies.get("token")
    if(token){
      window.location = '/';
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
      fetch('http://localhost:9090/admin/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      }).then((response) => response.json())
      .then((responseJson) => {
        this.props.cookies.set("token", responseJson.token);
        console.log("Token obtained")
      }).catch((error) => {
        console.error(error);
        this.state.errors.server = true
        this.setState({
          message: error.message,
        });
      }).finally(() => {
        if (!this.state.errors.server) {
          this.setState({
            message: 'Udało się zalogować',
          })
          
        }
      });
  }

  render() {
    return (
      <div>
        <div className="all">
          <Container>
          <div className="formflex">
          <p className="txtform"> Logowanie </p>
                  <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="email"> 
                      <input placeholder="E-mail" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                      {this.state.errors.email &&
                        <span> {this.messages.email_incorrect} </span>}
                    </label>

                    <label htmlFor="password"> 
                      <input placeholder="Hasło" type="password" id="password" name="password" value={this.state.pass} onChange={this.handleChange} />
                      {this.state.errors.password &&
                        <span> {this.messages.password_incorrect} </span>}
                    </label>
                    <button> Zaloguj sie </button>
                  </form>
                  {this.state.message && <h3>{this.state.message}</h3>}
                </div>
          </Container>
        </div>  
      </div>

    );
  }

};
export default Login;