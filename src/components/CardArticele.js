import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"

function CardArticele({article}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={article.image} />
    <Card.Body>
      <Card.Title>{article.name}</Card.Title>
      <Link to={`/products/${article.id}`}>
      <Button variant="primary">See details</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default CardArticele