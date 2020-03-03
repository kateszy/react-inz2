import React, { Component } from 'react';
import './Login.css';
import Footer from '../Footer/Footer';
import { Container, Col, Row } from 'react-bootstrap';


class Login extends Component {
    state = {
        username: '',
        email: '',
        pass: '',
        accept: false,

        errors: {
            username: false,
            email: false,
            pass: false,
            accept: false,

        }
    }

    messages = {
        username_incorrect: 'Nazwa nie moze miec spacji i musi miec min 9 znakow',
        email_incorrect: 'Brak @',
        password_incorrect: 'Haslo musi miec 8 znakow',
        accept_incorrect: 'Potwierdz zgode'
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

        else if (type === "checkbox") {
            const checked = e.targer.checked;
            this.setState({
                [name]: checked
            })
        }





    }


    handleSubmit = (e) => {

        e.preventDefault()

        const validation = this.formValidation()
        if (validation.correct) {
            this.setState({

                username: '',
                email: '',
                pass: '',
                accept: false,
                message: 'Rejestracja pomyslna, zaloguj sie',

                errors: {
                    username: false,
                    email: false,
                    pass: false,
                    accept: false,

                }
        })

    }
        else {
            this.setState({
                errors: {
                    username: !validation.username,
                    email: !validation.email,
                    pass: !validation.password,
                    accept: !validation.accept

                }

            })

        }


}

formValidation = () => {

    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if(this.state.username.lenght > 10 && 
        this.state.username.indexOf(' ') === -1){
            username=true;
        } 

    if(this.state.email.indexOf('@')!== -1){
        email=true;
    }    

    if(this.state.pass.length ===8){
        password=true;
    }

    if(this.state.accept){
        accept = true;
    }

    if(username && email && accept){
        correct = true;
    }

    return ({
        correct,
        username,
        email,
        password,
        accept
    })
}

componentDidUpdate(){

    if(this.state.message!==''){
        setTimeout(() => this.setState({
            message: ''
        }),3000)
    }
}
    

    render() {
        return (
            <div>
                <div className="all">
                <Container>
                    <Row>
                    <Col>
                <div className="left">
            <form onSubmit={this.handleSubmit} noValidate>
                <label htmlFor="user"> Login:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
                    {this.state.errors.username &&
                        <span> {this.messages.username_incorrect} </span>}

                </label>

                <label htmlFor="email"> E-mail:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    {this.state.errors.email &&
                        <span> {this.messages.email_incorrect} </span>}
                </label>

                <label htmlFor="password"> Haslo:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
                    {this.state.errors.pass &&
                        <span> {this.messages.password_incorrect} </span>}
                </label>

                <label htmlFor="accept">
                    <input type="checkbox" id="accept" checked={this.state.accept} onChange={this.handleChange} /> Wyrazam zgode

                 </label>
                {this.state.errors.accept &&
                    <span> {this.messages.accept_incorrect} </span>}
                <button> Zarejestruj sie </button>
            </form>
            {this.state.message && <h3>{this.state.message}</h3>}
            
            </div>
            </Col>
            <Col>
            <div className="right">
            <form onSubmit={this.handleSubmit} noValidate>
                <label htmlFor="user"> Login:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
                    {this.state.errors.username &&
                        <span> {this.messages.username_incorrect} </span>}
            </label>
            <label htmlFor="password"> Haslo:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
                    {this.state.errors.pass &&
                        <span> {this.messages.password_incorrect} </span>}
                </label>
               
                <button> Zaloguj się </button>               

            </form>


            </div>
            </Col>
            </Row>
            </Container>
            </div>
            <Footer/>
            </div>
            
        );
    }

};
export default Login;