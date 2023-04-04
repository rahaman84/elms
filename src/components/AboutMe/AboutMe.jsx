import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArifPic from '../../asset/image/arif.png';
import { init } from 'ityped';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

let isLoading = true;

class AboutMe extends Component {


  constructor(){

    super();
    this.state={
        
        about:"..."
    }
}

componentDidMount(){
    
     RestClient.GetRequest(AppUrl.Information).then(result=>{
         this.setState({about:result[0]['about']});

         const myElement = document.querySelector('#arif')
         init(myElement, { showCursor: false, strings: ['Web Developer', 'Instructor!'] })
    }) 
}

    // componentDidMount() {
    //     const myElement = document.querySelector('#arif')
    //     init(myElement, { showCursor: false, strings: ['Web Developer', 'Instructor!'] })
    // }


  render() {
    return (
      <Fragment>
        <Container className="text-center">

<h1 className="serviceMainTitle">About Me</h1>
    <div className="bottom"></div>
            <Row>
            
                <Col lg={6} md={6} sm={12}>
                <div className="aboutMeImage">
                    <img src={ArifPic} alt="mypic"/>
                    </div>

                </Col>
                

                <Col lg={6} md={6} sm={12}>
                <div className="aboutMeBody">
               <h2 className="aboutMeDetails">HI There, I'm</h2>
               <h2 className="aboutMeTitle">{this.state.about}</h2>
               <h3 className="aboutMeDetails">Work as <span id="arif"> </span> </h3>
            </div>

                </Col>

                

            </Row>

        </Container>

      </Fragment>
    )
  }
}

export default AboutMe
