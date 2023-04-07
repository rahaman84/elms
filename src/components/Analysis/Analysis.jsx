import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';


 class Analysis extends Component {

            constructor(){

                super();
                this.state={
                    data:[],
                    techdesc:"..."
                }
            }

            componentDidMount(){
                RestClient.GetRequest(AppUrl.ChartData).then(result=>{
                     this.setState({data:result});
                }) 
                 RestClient.GetRequest(AppUrl.HomeTechDesc).then(result=>{
                     this.setState({techdesc:result[0]['tech_description']});
                }) 
           }



  render() {

    var blue = "#051b35";


    const MyList = this.state.data;
    const MyView = MyList.map(MyList=>{

        return   

    });

    return (
            <Fragment>

                <Container className="text-center">

                <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col style={{widh:'100%', height:'410px' }} lg={6} md={12} sm={12}>
                            

                        <ResponsiveContainer>

                            <BarChart width={300} height={410} data={this.state.data}>

                            <XAxis dataKey={'x_data'}/>
                            <Tooltip />
                                
                            <Bar dataKey={'y_data'} fill={blue}>


                            </Bar>

                            </BarChart>

                            </ResponsiveContainer>
                        
                        </Col>
                            

                        <Col lg={6} md={12} sm={12}>

                        <p style={{textAlign:'justify'}}>{this.state.techdesc }
                            
                            </p>
                        
                        </Col>



                    </Row>
                </Container>

            </Fragment>
    )
  }
}

export default Analysis
