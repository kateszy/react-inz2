import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap'

class Cart extends React.Component {

    state = {
        data: new Array()
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach(slug => this.loadData(slug))
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

    render() {
        var objects = this.state.data.map((data) => {
            return (
                <CartProduct data={data} />
            )
        })
        return (<div>
            {objects}
        </div>
        )
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
        cart.splice(i, i + 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location = "/cart"
        console.log('Usunieto z koszyka: ' + slug);
    }

    const data = props.data;
    return (
        <CardGroup>
            <Card>
                <Card.Body>
                    <div className="imgcontainer">
                        <Card.Img variant="top" src={data.productPic[0].img} />
                    </div>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.price} zł</Card.Text>
                    <button onClick={() => deleteFromCart(data.slug)}>Usun</button>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}


export default Cart;