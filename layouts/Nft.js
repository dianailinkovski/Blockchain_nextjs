import Link from "next/link";
import Cta from "./components/Cta";
import Header3 from "@partials/Header3";
import { Row, Col } from "antd";
import $ from "jquery";

function Nft({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  const Qty = ( flag , id) =>{
    if(flag == "plus"){
      const set_val = Number($("#input" + id).val()) + 1;
      $("#input" + id).val(set_val);
    }
    else{
      if(Number($("#input" + id).val()) == 1){
        return ;
      }
      const set_val = Number($("#input" + id).val()) - 1;
      $("#input" + id).val(set_val);

    }
  }
  return (
    <>
      <Header3 />

      <section
        key={`service`}
        className={`section false  `}
        style={{ background: "#020919" }}
      >
        <div className="container banner_image"  style={{ background: 'url("image/nft/banner.svg") no-repeat', borderRadius:"30px", height:"300px", display:"flex",alignItems:"center" }}>
          <Row align="middle" >
            <Col>
              <h2 className="banner_star_token font-bold leading-[70px]">
                StarRail NFT
              </h2>
              <h6 style={{ color: "white" }}>
                Buy NFT to enjoy $STAR reward bonus <br/> and enable the re-signing
                function{" "}
              </h6>
            </Col>
          </Row>
        </div>
        <div className="container mt-8">
          <Row justify="center">
              <Col span={24}>
                <img src="image/nft/line.svg" alt="line" />
              </Col>
          </Row>
        </div>
        <div className="container mt-8">
          <Row >
            <Col lg={18} md={16} sm={24} xs={24}>
              <img src="image/nft/nft1.svg"  />
            </Col>
            <Col lg={6} md={8} sm={24} xs={24} style={{display:"flex",alignItems:"center"}} className="mt-3">
              <Row style={{alignItems:"center",width:"100%"}} gutter={[24,24]} justify="center">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Row gutter={[16,16]}>
                    <Col span={6}><button className="btn_change" id="minus1" onClick={()=>Qty("minus",1)}>-</button> </Col>
                    <Col span={12}><input type = "text" value = "1" className="btn_value" id="input1" style = {{textAlign : "center", height : "23px"}}/></Col>
                    <Col span={6}><button className="btn_change" id="plus1" style={{ marginBottom:"5px" }} onClick={()=>Qty("plus",1)}>+</button></Col>
                  </Row>
                  <Row>
                    <Col span={24}><button className="btn_mint">MIMT</button></Col>
                  </Row>
                </Col>
                <Col lg={12} md={12} sm={6} xs={6} style={{textAlign:"center"}} >
                  
                  <p style={{color:"white",fontSize:"18px"}}>1 &nbsp; USDT</p>
                  <p style={{color:"white",fontSize:"18px"}}>[&nbsp;0&nbsp;/&nbsp;4000&nbsp;]</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3" >
            <Col lg={18} md={16} sm={24} xs={24}>
              <img src="image/nft/nft2.svg"  />
            </Col>
            <Col lg={6} md={8} sm={24} xs={24} style={{display:"flex",alignItems:"center"}} className="mt-3">
              <Row style={{alignItems:"center",width:"100%"}} gutter={[24,24]} justify="center">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Row gutter={[16,16]}>
                    <Col span={6}><button className="btn_change" id="minus2" onClick={()=>Qty("minus",2)}>-</button> </Col>
                    <Col span={12}><input type = "text" value = "1" className="btn_value" id="input2" style = {{textAlign : "center", height : "23px"}}/></Col>
                    <Col span={6}><button className="btn_change" id="plus2" style={{ marginBottom:"5px" }} onClick={()=>Qty("plus",2)}>+</button></Col>
                  </Row>
                  <Row>
                    <Col span={24}><button className="btn_mint">MIMT</button></Col>
                  </Row>
                </Col>
                <Col lg={12} md={12} sm={6} xs={6} style={{textAlign:"center"}} >
                  
                  <p style={{color:"white",fontSize:"18px"}}>1 &nbsp; USDT</p>
                  <p style={{color:"white",fontSize:"18px"}}>[&nbsp;0&nbsp;/&nbsp;4000&nbsp;]</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3" >
            <Col lg={18} md={16} sm={24} xs={24}>
              <img src="image/nft/nft3.svg"  />
            </Col>
            <Col lg={6} md={8} sm={24} xs={24} style={{display:"flex",alignItems:"center"}} className="mt-3">
              <Row style={{alignItems:"center",width:"100%"}} gutter={[24,24]} justify="center">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Row gutter={[16,16]}>
                    <Col span={6}><button className="btn_change" id="minus3" onClick={()=>Qty("minus",3)}>-</button> </Col>
                    <Col span={12}><input type = "text" value = "1" className="btn_value" id="input3" style = {{textAlign : "center", height : "23px"}}/></Col>
                    <Col span={6}><button className="btn_change" id="plus3" style={{ marginBottom:"5px" }} onClick={()=>Qty("plus",3)}>+</button></Col>
                  </Row>
                  <Row>
                    <Col span={24}><button className="btn_mint">MIMT</button></Col>
                  </Row>
                </Col>
                <Col lg={12} md={12} sm={6} xs={6} style={{textAlign:"center"}} >
                  
                  <p style={{color:"white",fontSize:"18px"}}>1 &nbsp; USDT</p>
                  <p style={{color:"white",fontSize:"18px"}}>[&nbsp;0&nbsp;/&nbsp;4000&nbsp;]</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container mt-8">
          <Row justify="center">
              <Col span={24}>
                <img src="image/nft/line.svg" alt="line" />
              </Col>
          </Row>
          <Row className="mt-5" justify="center">
            <Col span={15} style={{textAlign:"center"}} >
              <p  className="nft_airdrop">NFT Airdrop bonus</p>
            </Col>
          </Row>
          <Row justify="space-around" className="mt-10">
            <Col lg={5} md={6} sm={6} style={{textAlign:"center"}} >
              <img src="image/nft/girl1.svg" />
              <h4 style={{ color:"white", marginTop:"30px" }} >x1</h4>
              <div className="bonus_purcharge">
                 <p  className="bonus_percent">10%</p>
                  <img src="image/nft/star.svg" style={{display:"inline"}} />
              </div>
            </Col>
            <Col lg={5} md={6} sm={6} style={{textAlign:"center"}} >
              <img src="image/nft/girl2.svg" />
              <h4 style={{ color:"white" ,marginTop:"30px" }} >x1</h4>
              <div className="bonus_purcharge">
                 <p  className="bonus_percent">25%</p>
                  <img src="image/nft/star.svg" style={{display:"inline"}} />
              </div>
            </Col>
            <Col lg={5} md={6} sm={6} style={{textAlign:"center"}} >
              <img src="image/nft/girl3.svg" />
              <h4 style={{ color:"white", marginTop:"30px" }} >x0</h4>
              <div  className="bonus_purcharge">
                 <p  className="bonus_percent">0%</p>
                  <img src="image/nft/star.svg" style={{display:"inline"}} />
              </div>
            </Col>
          </Row>
          <Row justify="center" className="mt-10">
              <Col span={24}>
                <img src="image/nft/line.svg" alt="line" />
              </Col>
          </Row>
        </div>
      </section>
     
        
     
      
      {/* <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col-recommended"
                }`}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4>{plan.title}</h4>
                  <div className="mt-5">
                    <span className="text-5xl text-dark">${plan.price}</span>
                    <span>/ {plan.type}</span>
                  </div>
                  <h5 className="mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn mt-5 ${
                      plan.recommended ? "btn-primary" : "btn-outline-primary"
                    }`}
                    href={plan.button.link}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} /> */}
    </>
  );
}

export default Nft;
