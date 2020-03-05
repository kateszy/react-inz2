import React, { Component } from 'react';
import './Auth.css';
import { Container } from 'react-bootstrap';


class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    message: '',
    errors: {
      email: false,
      password: false,
      server: false,
    }
  }

  messages = {
    email_incorrect: 'Brak @',
    password_incorrect: 'Haslo musi miec przynajmniej 8 znakow',
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
    const validation = this.formValidation()
    if (validation.correct) {
      fetch('http://localhost:9090/admin/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        })
      }).catch((error) => {
        console.error(error);
        this.state.errors.server = true
        this.setState({
          message: 'Wystąpił błąd po stronie serwera',
        });
      }).finally(() => {
        if (!this.state.errors.server) {
          this.setState({
            message: 'Rejestracja pomyslna, zaloguj sie',
            errors: {
              email: false,
              password: false,
            }
          })
        }
      });
    }
    else {
      this.setState({
        errors: {
          email: !validation.email,
          password: !validation.password,
        }

      })

    }


  }

  formValidation = () => {
    let email = false;
    let password = false;
    let correct = false;

    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }

    if (this.state.password.length >= 8) {
      password = true;
    }

    if (password && email) {
      correct = true;
    }

    return ({
      correct,
      email,
      password,
    })
  }

  render() {
    return (
      <div>
        <div className="all">
          <Container>
                <div className="left">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="firstName"> Imien:
                      <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="lastName"> Nazwizgo:
                      <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="email"> E-mail:
                      <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                      {this.state.errors.email &&
                        <span> {this.messages.email_incorrect} </span>}
                    </label>

                    <label htmlFor="password"> Haslo:
                      <input type="password" id="password" name="password" value={this.state.pass} onChange={this.handleChange} />
                      {this.state.errors.password &&
                        <span> {this.messages.password_incorrect} </span>}
                    </label>
                    <button> Zarejestruj sie </button>
                  </form>
                  {this.state.message && <h3>{this.state.message}</h3>}

                </div>
          </Container>
        </div>

      </div>

    );
  }

};
export default SignUp;