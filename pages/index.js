import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import 'antd/dist/reset.css';
import Header from "@layouts/partials/Header";
import Footer from "@layouts/partials/Footer";
 

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper";
import { Row, Col } from "antd";
import { getListPage } from "../lib/contentParser";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      <Header />
     
     <section
            key={`service`}
            className={`section false banner_image`}
            style={{background:'url("image/banner_background.svg")'}}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel md:order-2`}>
                  <Image
                        className="ml-1"
                        src="/image/landing_banner1.svg"
                        width={600}
                        height={700}
                        alt="arrow"
                        style={{margin:"auto"}}
                      />
                </div>
                <div
                  className={`service-content mt-5 md:mt-0  md:order-1`}
                  >
                  <h1 className="font-bold leading-[70px] banner_title" >Welcome to StarRail, a Socially Driven Project For Citizen Airdrops.</h1>
                  <p className="mt-4 mb-2 banner_paragraph"> 
                    In StarRail, you will become a Master and explore this world full of mystery 
                    and adventure. Just follow and retweet our pinned tweet and you will get 1,000,000 base tokens instantly.
                     You can then increase your rewards by continuously checking in and tweeting.
                  </p>
                  <button className="btn btn-dapp banner_btn mt-5">
                  CLAIM $STAR TOKEN &nbsp;&nbsp;&nbsp;
                  <img src="image/arrow.svg" alt="arrow_img" style={{display:"inline"}} />
                  </button>
                   
                </div>
                 
                 
              </div>
            </div>
      </section>
      <section key="service" className="section false" style={{background:'#0F1828'}}>
        <div className="container">
          <Row justify="space-between" align="middle" >
            <Col lg={6} md={6} sm={12} xs={12}>
                <img src="image/banner_down1.svg"  alt="banner_image" style={{width:"180px",height:"70px"}} /> 
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
                <img src="image/banner_down2.svg" alt="banner_image" style={{width:"180px",height:"70px"}} />  
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
                <img src="image/banner_down3.svg" alt="banner_image" style={{width:"180px",height:"70px"}} />  
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
                <img src="image/banner_down4.svg" alt="banner_image" style={{width:"180px",height:"70px"}} />  
            </Col>
          </Row>
          <Row justify="center" style={{marginTop:"120px"}}>
            <Col >
              <p style={{color:"#92CEE6"}}>Activity </p> 
            </Col>
          </Row>
          <Row className="mt-5" justify="center">
            <Col>
              <p className="landing_token_title">Token Rain! Exclusive Airdrop </p>
            </Col>
          </Row>
          <Row className="mt-3" justify="center" align="middle">
            <Col>
              <p style={{display:"inline"}} className="hot_deal">Hot Deals</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Col>
            <Col>
              <img src="image/fire.svg" style={{display:"inline"}} alt="fire_image" />
            </Col>
          </Row>
          <Row gutter={[16,16]} className="landing_token_item mt-6" justify="center">
            <Col lg={8} md={8} sm={24} xs={24} >
              <Image src="/image/destination1.svg" width={400} height={400} alt="destination_image" className="landing_token_image" />
              <p className="landing_token_name">7 Day CHECK-IN </p>
              <p>Sign in for seven consecutive days  </p>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Image src="/image/destination2.svg" width={400} height={400} alt="destination_image2" className="landing_token_image" />
              <p className="landing_token_name">Follow and Retweet the Tweet </p>
              <p>send one tweet per day with specified keywords  </p>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <Image src="/image/destination3.svg" width={400} height={400} alt="destination_image3" className="landing_token_image" />
              <p className="landing_token_name">NFT Bonus !</p>
              <p>bonus for every purchase  </p>
            </Col>
          </Row>
          <div className="items-center gap-8 md:grid md:grid-cols-2" style={{marginTop:"150px"}} >
                <div className={`service-carousel md:order-2`}>
                  <Image
                        className="ml-1 chart_img"
                        src="/image/chart.svg"
                        width={420}
                        height={420}
                        alt="arrow"
                        
                      />
                </div>
                <div className={`service-content mt-5 md:mt-0  md:order-1`} >
                  <p style={{color:"#92CEE6"}}>TOKEN</p>                  
                  <Row align="middle">
                    <Col> 
                      <img src="image/star_token.svg" alt="start_token_image"  />
                    </Col>
                    <Col>
                      <h2 className="font-bold leading-[70px] banner_star_token"  >STAR Tokens</h2>
                    </Col>
                  </Row>
                  <p className="mt-4 mb-2 "> 
                  The STAR token is the native token of the StarRail ecosystem. It is designed  to explore the new expressions in Web3 through art, fashion and entertainment, and enable the community to engage in the StarRail ecosystem meaningfully.
                  </p>
                  <button className="btn btn-dapp mt-5"> About   </button>
                  <Row className="mt-3 mb-12" align="middle" >
                    <Col span={8}>
                      <h2 className="star_item_tag">100M</h2>
                      <p>Token Supply</p>
                    </Col>
                    <Col span={8}>
                      <h2 className="star_item_tag">90%</h2>
                      <p>Airdrop</p>
                    </Col>
                    <Col span={8}>
                      <h2 className="star_item_tag">544</h2>
                      <p>Years Experience</p>
                    </Col>
                  </Row>
                </div>
              </div>
        </div>
      </section>
      <section key="service" className="section false unique_role" style={{background:'url("image/unique_role.svg")'}}>
        <div className="container">
           <Row justify="center">
            <Col >
              <p className="hot_deal">NFT</p>
            </Col>
           </Row>
           <Row justify="center">
              <Col>
                <p className="landing_token_title">Unique Roles</p>
              </Col>
           </Row>
           <Row  justify="center">
            <Col span={12} style={{textAlign:"center"}}>
              <p className="p_color">There are three levels of NFT, which are builders, creators, and consensus builders, each of which enjoys a reward bonus</p>
            </Col>
           </Row>
           {/* <Swiper
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
               
              pagination={{
                clickable: true,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 1,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                activeIndex:2
              }}
              modules={[EffectCoverflow,Pagination]}
              effect={"coverflow"}
              className="mySwiper mb-12"
              
            > */}
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={30}
              slidesPerView={3}
              coverflowEffect={{
                // rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
         
            <SwiperSlide><img  src="/image/unique_role_1.svg" className="swiper_image"  alt="swiper_image" /> </SwiperSlide>
            <SwiperSlide> <img  src="/image/unique_role_2.svg" className="swiper_image"  alt="swiper_image" /></SwiperSlide>
            <SwiperSlide> <img  src="/image/unique_role_3.svg" className="swiper_image"  alt="swiper_image" /></SwiperSlide>
            
          </Swiper>
          
         
      
        </div>
      </section>
      <Footer />
      {/* <Cta cta={call_to_action} /> */}
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;