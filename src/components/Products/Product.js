import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'

class Product extends React.Component {

    state = {
        data: undefined
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        console.log("loading data");
        const { pathname } = this.props.location;
        fetch('http://localhost:9090' + pathname)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.message });
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        return (
            <SingleProduct data={this.state.data} />
        )
    }
}

class SingleProduct extends React.Component {

    addToCart(slug) {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify(new Array(slug)));
        } else {
            var cart = JSON.parse(localStorage.getItem('cart'));
            cart.push(slug)
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        console.log('Dodano do koszyka: '+ slug);
        window.location.reload()
    }

    render() {
        const data = this.props.data;
        if (data) {
            return (
                <Container>
                    <Row>
                        <Col>

                            <Card hoverable>
                                <Card.Body>
                                    <div className="imgcontainer">
                                        <Card.Img variant="top" src={data.productPic[0].img} />
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>{data.description}</Card.Text>
                                <Card.Text>Stan magazynowy {data.stock} sztuk</Card.Text>
                                <Card.Text>{data.price} zł</Card.Text>
                                <button onClick={() => this.addToCart(data.slug)}>Dodaj do koszyka</button>

                            </Card>

                        </Col>
                    </Row>

                </Container>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}


export default Product;