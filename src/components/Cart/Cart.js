import React from 'react';
import { Card, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import EmptyCart from './EmptyCart';

import './Cart.css';

class Cart extends React.Component {

    state = {
        data: new Array(),
        name: '',
        street: '',
        city: '',
        zipcode: ''
    }

    goToSummary = this.goToSummary.bind(this);

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart != null) {
            cart.forEach(slug => this.loadData(slug))
        }
    }

    loadData(slug) {
        console.log(slug)
        fetch('http://localhost:9090/products/p/' + slug)
            .then(response => response.json())
            .then(data => {
                var localData = this.state.data;
                localData.push(data.message)
                this.setState({ data: localData });

            })
            .catch(err => console.error(this.props.url, err.toString()))
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

    goToSummary(event) {
        event.preventDefault();
        console.log(this.state)
        this.props.cookies.set("name", this.state.name);
        this.props.cookies.set("street", this.state.street);
        this.props.cookies.set("zipcode", this.state.zipcode);
        this.props.cookies.set("city", this.state.city);
        this.props.cookies.set("sumPrice", this.sumPrice())
        window.location = "/summary"
    }



    sumPrice() {
        var sum = 0;
        this.state.data.forEach(item => sum += item.price)
        return sum;
    }

    render() {
        var objects = this.state.data.map((data) => {
            return (
                <CartProduct data={data} />
            )
        })

        var cart = JSON.parse(localStorage.getItem('cart'));
        if (cart != null && cart.length > 0) {
            return (
                <div className="objects">
                    <Row>
                        <Col>
                            <div>
                                {objects}
                            </div>
                        </Col>
                        <Col>
                            <Form noValidate onSubmit={this.goToSummary}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Imie i nazwisko </Form.Label>
                                    <Form.Control type="text" placeholder="Wpisz imie i nazwisko"
                                        name="name" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formStreet">
                                    <Form.Label>Ulica i numer domu</Form.Label>
                                    <Form.Control type="text" placeholder="Wpisz ulice i numer domu"
                                        name="street" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formCity">
                                            <Form.Label>Miasto </Form.Label>
                                            <Form.Control type="text" placeholder="Wpisz miasto"
                                                name="city" onChange={this.handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formPostCode">
                                            <Form.Label>Kod pocztowy </Form.Label>
                                            <Form.Control type="text" placeholder="Wpisz kod pocztowy"
                                                name="zipcode" onChange={this.handleChange} />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <div className="sum">
                                            <p>Do zapłaty: {this.sumPrice()} zł</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <button type="submit">Dalej</button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            )
        }
        else {
            return (
                <EmptyCart />
            )
        }


    }
}

const CartProduct = props => {

    function deleteFromCart(slug) {
        var i = 0;
        var cart = JSON.parse(localStorage.getItem('cart'));
        for (i = 0; i < cart.length; i++) {
            if (slug != cart[i]) {
                i++;
            } else {
                break;
            }
        }
        cart.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location = "/cart"
        console.log('Usunieto z koszyka: ' + slug);
    }

    const data = props.data;
    return (
        <ListGroup horizontal>
            <ListGroup.Item>

                <div className="singleproductcart">

                    <Card.Body>
                        <Row>
                            <Col>
                                <div className="imgcontainercart">
                                    <Card.Img variant="top" src={data.productPic[0].img} />
                                </div>
                            </Col>
                            <Col>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>{data.price} zł</Card.Text>
                            </Col>
                            <Col><button onClick={() => deleteFromCart(data.slug)}>Usun</button></Col>
                        </Row>
                    </Card.Body>

                </div>

            </ListGroup.Item>
        </ListGroup>

    )
}


export default Cart;