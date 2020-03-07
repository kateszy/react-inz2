import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './Products.css';

class Products extends React.Component {

    state = {
        data: []
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
        this.loadData()
        var objects = null
        if (this.state.data instanceof Array) {
            objects = this.state.data.map((data) => {
                return (
                    <CardGroup>
                        <Link to={'/products/p/' + data.slug}>
                            <Card hoverable>
                                <Card.Body>
                                    <div className="imgcontainer">
                                        <Card.Img variant="top" src={data.productPic[0].img} />  </div>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>{data.price} zł</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </CardGroup>
                )
            }
            )

            return (<div className="product">
                {objects}
            </div>)

        } else {
            const data = this.state.data
            // to jest pojedynczy produkt
            return (
                <Card hoverable>
                    <Card.Body>
                        <div className="imgcontainer">
                        <Card.Img variant="top" src={data.productPic[0].img} />  </div>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                        <Card.Text>Stan magazynowy {data.stock} sztuk</Card.Text>
                        <Card.Text>{data.price} zł</Card.Text>
                    </Card.Body>
                </Card>
            )
        }

    }
    open(id) {
        console.log(id);
    }
}


export default Products