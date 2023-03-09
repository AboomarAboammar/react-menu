import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'



const ItemesList = ({itemsData}) => {
  return (

   <Row>
 {itemsData.length >= 1 ?(itemsData.map((item)=>{
    return (
    
        <Col key={item.id} sm="12" className='mb-3'>
            <Card className='d-flex flex-row' style={{backgroundColor: "#F8F8F8"}}>
                    <Card.Img style={{width:"250px"}} className='img-item' variant="top" src={item.imgUrl} />
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between '>
                        
                      <div className='item-title'>{item.title}</div>
                      <div className='item-price'>{item.price}</div>
                        </Card.Title>
                      <Card.Text className='py-2'>
                      <div className='item-description'>
                        {item.description}        
                      </div>
        
                      </Card.Text>
                    </Card.Body>
                  </Card>
            </Col>
           
    )
 })):<h3 className='text-center'>لاتوجد اصناف</h3>}
   
   </Row>
  )
}

export default ItemesList