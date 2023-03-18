import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

 class Analysis extends Component {

            constructor(){

                super();
                this.state={
                    data:[
                        
                        {Technolgy:'PHP', Projects:100},
                        {Technolgy:'Mysql', Projects:90},
                        {Technolgy:'Laravel', Projects:80},
                        {Technolgy:'React', Projects:95},
                        {Technolgy:'JavaScript', Projects:70},
                        {Technolgy:'HTML', Projects:40},
                        {Technolgy:'CSS', Projects:50}
                    
                    ]
                }
            }



  render() {

    var blue = "#051b35";
    return (
            <Fragment>

                <Container className="text-center">

                <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col style={{widh:'100%', height:'410px' }} lg={6} md={12} sm={12}>
                            

                        <ResponsiveContainer>

                            <BarChart width={300} height={410} data={this.state.data}>

                            <XAxis dataKey={'Technolgy'}/>
                            <Tooltip />
                                
                            <Bar dataKey={'Projects'} fill={blue}>


                            </Bar>

                            </BarChart>

                            </ResponsiveContainer>
                        
                        </Col>
                            

                        <Col lg={6} md={12} sm={12}>

                        <p style={{textAlign:'justify'}}> React is a free and open-source front-end JavaScript library for building user 
                            interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
                            React is a free and open-source front-end JavaScript library for building user 
                            interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
                            React is a free and open-source front-end JavaScript library for building user 
                            interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
                            React is a free and open-source front-end JavaScript library for building user 
                            interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
                            </p>

                            <p style={{textAlign:'justify'}}> React is a free and open-source front-end JavaScript library for building user 
                            interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
                            React is a free and open-source front-end JavaScript library for building user 
                            interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
                            React is a free and open-source front-end JavaScript library for building user 
                            interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
                            
                            </p>
                        
                        </Col>



                    </Row>
                </Container>

            </Fragment>
    )
  }
}

export default Analysis
