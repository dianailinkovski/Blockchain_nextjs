import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd";
const Footer2 = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0" style={{background:"#7EC5E1"}}>
      <div className="container">
         
        {/* footer menu */}
        <div className="row">
          <Row>
            <Col lg={12} md={12} sm={24} xs={24} style={{color:"white"}}>
              <Link href="/" aria-label="Bigspring">
                <Image
                  src={config.site.logo}
                  width={config.site.logo_width}
                  height={config.site.logo_height}
                  alt=""
                />
              </Link>
              {markdownify(footer_content, "p", "mt-3 mb-6")}
            </Col>
            <Col lg={3} md={3} sm={6} xs={6}>
              <h6 style={{color:"white"}}>Home</h6>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6}>
              <h6 style={{color:"white"}}>Check-in</h6>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6}>
              <h6 style={{color:"white"}}>NFT</h6>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6}>
              <h6 style={{color:"white"}} className="mb-3">Follow Us</h6>
              <a href="https://telegram.org/">
                <img src="image/earth_icon.svg"  style={{display:"inline"}} className="mr-3" /> 
              </a>
              <a href="https://instagram.com/">
                <img src="image/instagram_icon.svg" style={{display:"inline"}} className="mr-3" /> 
              </a>
              <a href="https://linkedin.com/">
                <img src="image/in_icon.svg" style={{display:"inline"}} /> 
              </a>
            </Col>
          </Row>
        
         
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6" style={{marginTop:"120px",color:"white"}}>
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
     
    </footer>
  );
};

export default Footer2;
