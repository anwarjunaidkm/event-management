import React from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { CardBody, CardHeader, CardText, Container,Card,CardTitle } from 'reactstrap'


function TeamBanner() {
  return (
    <TeamLayout>
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

         </div>

    </TeamLayout>
  )
}

export default TeamBanner