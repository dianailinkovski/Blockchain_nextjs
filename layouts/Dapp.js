import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Header2 from "@partials/Header2";
import Footer2 from "@partials/Footer2";
import { Row, Col, Card} from "antd";
import { useState } from "react";
const Dapp = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  // const [opacity, setOpacity]=useState(1);
  // const [checkday,setCheckday]=useState(1);
  return (
    <>
      <Header2 />
       
        <div className="container">
          <section
              key={`service`}
              className={`section false banner_image mt-5 `}
              style={{background:'url("image/dapp/banner.svg")',height:"410px",borderRadius:"1rem"}}
            >
              <Row align="middle" className="mx-8 mt-3">
                    <Col> 
                      <img src="image/star_token.svg"  />
                    </Col>
                    <Col>
                      <h1 className="font-bold leading-[70px] banner_star_token"  >$STAR Airdrop</h1>
                    </Col>
              </Row>
              <Row className="mx-10">
                  <Col>
                    <h4 style={{color:'white'}}>Check-in for 7days. </h4>
                  </Col>
              </Row>
          </section>
          <Card style={{ width: '100%', borderRadius:"20px", borderTop:"20px solid #A9DAED" }} className="mt-5 mb-5">
              <Row>
                <Col>
                  <h3>Check-in for 7 DAY & Retweet</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p style={{color: "rgba(0, 0, 0, 0.7)"}}>The check-in reward is the basic reward, and can be retweeted after check in.</p>
                </Col>
              </Row>
              <Row className="mt-7" justify="space-between">
                <Col lg={3} className="mb-2">
                  <img src="image/dapp/check_day1.svg" style={{opacity:0.5}} />
                  <button disabled style={{opacity:0.5}} className="btn_check_in mt-5" >Check-in</button>
                </Col>
                <Col lg={3} className="mb-5">
                  <img src="image/dapp/check_day2.svg" style={{opacity:1}} />
                  <button className="btn_check_in mt-5" >Check-in</button>
                </Col>
                <Col lg={3} className="mb-5">
                  <img src="image/dapp/check_day3.svg" style={{opacity:0.5}} />
                  <button disabled style={{opacity:0.5}} className="btn_check_in mt-5" >Check-in</button>
                </Col>
                <Col lg={3} className="mb-5">
                  <img src="image/dapp/check_day4.svg" style={{opacity:0.5}} />
                  <button disabled style={{opacity:0.5}} className="btn_check_in mt-5" >Check-in</button>
                </Col>
                <Col lg={3} className="mb-5">
                  <img src="image/dapp/check_day5.svg" style={{opacity:0.5}} />
                  <button disabled style={{opacity:0.5}} className="btn_check_in mt-5" >Check-in</button>
                </Col>
                <Col lg={3} className="mb-5">
                  <img src="image/dapp/check_day6.svg" style={{opacity:0.5}} />
                  <button disabled style={{opacity:0.5}} className="btn_check_in mt-5" >Check-in</button>
                </Col>
                <Col lg={3} className="mb-5">
                  <img src="image/dapp/check_day7.svg" style={{opacity:0.5}} />
                  <button disabled style={{opacity:0.5}} className="btn_check_in mt-5" >Check-in</button>
                </Col>
              </Row>
          </Card>
          <Row gutter={[16,16]} className="mt-5 mb-3">
            <Col lg={14} md={14} sm={24} xs={24}>
                <Card style={{ width: '100%',height:"450px", borderRadius:"20px", borderTop:"20px solid #A9DAED" }} className="mt-5 ">
                  <Row>
                    <Col>
                      <h3>Leaderboard</h3>
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                        <img src="image/dapp/leader1.svg" className="mx-2" /> 
                        <p style={{fontWeight:"bold"}}>0F8X............2S12S</p> 
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold"}}>9,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                        <img src="image/dapp/leader2.svg" className="mx-2" /> 
                        <p style={{fontWeight:"bold"}}>0F8X............2S12S</p> 
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold"}}>9,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                        <img src="image/dapp/leader3.svg" className="mx-2" /> 
                        <p style={{fontWeight:"bold"}}>0F8X............2S12S</p> 
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold"}}>9,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                        <p className="mx-5" style={{fontWeight:"bold"}}>4</p>
                        <p style={{fontWeight:"bold"}}>0F8X............2S12S</p> 
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold"}}>9,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                        <p className="mx-5" style={{fontWeight:"bold"}}>5</p>
                        <p style={{fontWeight:"bold"}}>0F8X............2S12S</p> 
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold"}}>9,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                        <p className="mx-5" style={{fontWeight:"bold"}}>6</p>
                        <p style={{fontWeight:"bold"}}>0F8X............2S12S</p> 
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold"}}>9,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                </Card>
            </Col>
            <Col lg={10} md={10} sm={24} xs={24}>
                <Card style={{ width: '100%', height:"450px", borderRadius:"20px", borderTop:"20px solid #A9DAED" }} className="mt-5 mb-5 claim_card">
                  <Row>
                    <Col>
                      <h3>$SRAR to Claim</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p style={{color: "rgba(0, 0, 0, 0.7)"}}>Daily check-in includes retweet bonus, nft bonus.</p>
                    </Col>
                  </Row>
                  <Row justify="center" align="middle" className="mt-12">
                    <Col style={{display:"flex",alignItems:"center"}}>
                      <h1 style={{color:"#7E90E0",display:"inline",marginBottom:"unset !important"}} className="mx-2">7,500,000 </h1> 
                      <img src="image/dapp/leader_star.svg" style={{display:"inline"}} />
                    </Col>
                  </Row>
                  <Row align="middle" className="baby_position" justify="space-between" gutter={[16,16]} >
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <img src="image/dapp/baby.svg" />
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}  >
                      <button className="btn_claim" >Claim</button>
                    </Col>
                  </Row>
                </Card>
            </Col>
          </Row>
          <Card style={{ width: '100%',borderRadius:"20px", borderTop:"20px solid #A9DAED" }} className="mt-5 mb-5">
                  <Row>
                    <Col>
                      <h3>Notifications</h3>
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                    <p className="mx-5" style={{fontWeight:"bold",fontSize:"20px"}}>Check-in Day1</p>
                        <p style={{fontSize:"20px"}}>11 hours ago</p> 
                    </Col>
                    <Col >
                        <button className="btn_success">success</button>
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold",fontSize:"20px", marginRight:"10px"}}>10,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                    <p className="mx-5" style={{fontWeight:"bold",fontSize:"20px"}}>Retweet Day1</p>
                        <p style={{fontSize:"20px"}}>11 hours ago</p> 
                    </Col>
                    <Col >
                        <button className="btn_success">success</button>
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold",fontSize:"20px", marginRight:"10px"}}>20,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                    <p className="mx-5" style={{fontWeight:"bold",fontSize:"20px"}}>Check-in Day2</p>
                        <p style={{fontSize:"20px"}}>11 hours ago</p> 
                    </Col>
                    <Col >
                        <button className="btn_success">success</button>
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold",fontSize:"20px", marginRight:"10px"}}>15,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  <Row align="middle" justify="space-between" className="mt-3">
                    <Col style={{display:"flex",alignItems:"center"}}>
                    <p className="mx-5" style={{fontWeight:"bold",fontSize:"20px"}}>Retweet Day2</p>
                        <p style={{fontSize:"20px"}}>11 hours ago</p> 
                    </Col>
                    <Col >
                        <button className="btn_success">success</button>
                    </Col>
                    <Col style={{display:"flex",alignItems:"center"}} >
                        <p style={{fontWeight:"bold",fontSize:"20px", marginRight:"10px"}}>30,000,000</p> 
                        <img src="image/dapp/leader_star.svg" />
                    </Col>
                  </Row>
                  
                </Card>
          
          
        </div>
    
      <Footer2 />
    </>
  );
};

export default Dapp;
