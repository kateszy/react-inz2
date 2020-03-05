import React from 'react'
import {Button,Card, CardGroup} from 'react-bootstrap'

class Products extends React.Component {

    state = {
        data: []
    }

    loadData() {
        console.log("loading data");
        const {pathname} = this.props.location;
        fetch('http://localhost:9090'+pathname)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.message });
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        this.loadData()
        const objects = this.state.data.map( (data) =>{
            return(
                <CardGroup>
                <Card key = {data._id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={data.productPic[0].img}  />
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>{data.price} zł</Card.Text>
                        
                    </Card.Body>
                </Card>
                </CardGroup>
            )
        }
        )
        return (<div>
            {objects}
        </div>)
    }
}

export default Products