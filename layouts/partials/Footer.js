import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd";
const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0" style={{background:"black"}}>
      <div className="container">
         
        {/* footer menu */}
        <div className="row">
          <Row>
            <Col lg={12} md={12} sm={24} xs={24}>
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
              <h6 style={{color:"white"}}>Follow Us</h6>
              <a href="https://telegram.org/">
                <img src="image/telegram_icon.svg"  style={{display:"inline"}} className="mr-3" /> 
              </a>
              <a href="https://twitter.com/">
                <img src="image/twitter_icon.svg" style={{display:"inline"}} /> 
              </a>
            </Col>
          </Row>
           {/* social icons */}
           {/* <div className="md-12 sm:col-6 lg:col-6">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div> */}
          {/* <div className="mb-12 sm:col-6 lg:col-3" >
            <h4>Home</h4>
            <h4>Check-in</h4>
            <h4>NFT</h4>
            <h4>Follow us</h4>
          </div>
          <div className="mb-12 sm:col-6 lg:col-3" >
            <h4>Home</h4>
          </div>
          <div className="mb-12 sm:col-6 lg:col-3" >
            <h4>Home</h4>
          </div>
          <div className="mb-12 sm:col-6 lg:col-3" >
            <h4>Home</h4>
          </div> */}
                {/* {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul> */}
             
          {/* {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })} */}
         
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6" style={{marginTop:"120px"}}>
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
