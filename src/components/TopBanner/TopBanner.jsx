import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css'

 class TopBanner extends Component {
  render() {
    return (
      
     <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
            <div className='topFixedBannerOverlay'>

              <Container className='topContent'>
                <Row>
                  <Col className='text-center'>
                  <h1 className='topTitle'>E-Learning Platform</h1>
                  <h4 className='topSubTitle'>Learn Professionally </h4>               
                   <Button variant="danger">Learn more.</Button>{' '}
                  </Col>
                </Row>
              </Container>

            </div>
        </Container>
     </Fragment>
    )
  }
}

export default TopBanner
