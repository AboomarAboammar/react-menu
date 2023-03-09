import React from 'react'
import { Col, Row } from 'react-bootstrap'



const Category = ({filterBycategory ,allCategory}) => {
   const onfilter=(cat)=>{
        filterBycategory(cat) }
  return (
    <Row className='my-2 mb-5'>
    <Col sm="12" className='d-flex justify-content-center'>
        {allCategory.length >= 1 ?(allCategory.map((cat)=>{
            return(
              
              <div>
              <button onClick={()=>onfilter(cat)} className='btn mx-2'style={{border:"1px solid #b45b35" }}>{cat}</button>
              </div>
             
                )
               })):<h4 className='text-center'>لايوجد تصنيفات الان</h4>}
        
             </Col>
             </Row>
               )
               }

          export default Category

         