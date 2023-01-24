import React from 'react'
import { CardBody, CardHeader, CardText, Container,Card,CardTitle } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'

function AdminBanner() {
  return (
   <AdminLayout>
    <div className='d-flex '>
    <Card
    className="my-2"
    color="primary"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="secondary"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="success"
    outline
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
    </div>
   

       
   </AdminLayout>
  )
}

export default AdminBanner