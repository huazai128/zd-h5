import * as React from 'react';
import Heads from '@components/heads/head';
import Footer from '@components/footer/footer';
import Swiper from 'swiper';
import "./profile.scss";

export default class Profile extends React.Component<any, any>{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new Swiper('.profile', {
      slidesPerView: 1.2,
      spaceBetween: 30,
      pagination: '.profile .swiper-pagination',
    });
  }
  render() {
    return (
      <div id="profile">
        <div className="pro-img"><img src={require("img/bg09.jpg")} /></div>
        <p>广州掌动智能科技有限公司(AppsTest 掌测)，2006 年成立于华南理工大学科技园区，公司是经国家质检总局（国家认监委）认定的第三方APP和智能硬件技术检验检测机构，拥有国家认监委颁发的“CMA”资质认定证书。国内领先的智能应用质量云服务提供商、国家高新技术企业、国家软件企业、国家信息产品标准化评测中心广东分中心、广东省中小企业公共服务平台、广州市信息产品标准化评测公共服务平台。</p>
        <p>掌动公司打造智能硬件与移动互联网融合公共试验检测平台，为传统产品的物联网化、互联网化提供集功能测试、性能测试、兼容测试、软硬交互性测试、网络连通性测试等系列关键共性试验测试技术、工具的集成化服务平台，并通过云端动态的质量大数据托管、收集和分析，为企业传统产品的智能化转型设计、开发、制造、售后和升级全面的质量数据支撑服务，帮助企业提高智能产品的核心竞争力和产品服务质量。</p>
        <div className="pro-swiper">
          <div className="swiper-container profile">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={ require("img/intro_pic1.jpg") } alt=""/></div>
              <div className="swiper-slide"><img src={ require("img/intro_pic2.jpg") } alt=""/></div>
              <div className="swiper-slide"><img src={ require("img/intro_pic3.jpg") } alt=""/></div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <p>掌动公司服务超过50万用户，接入超过100万个智能硬件产品，服务90万个APP产品，沉淀超过200万个智能应用测试用例和500万质量大数据。
          掌动公司服务客户有：中国移动、科大讯飞、百度金融、陌陌 、TIM、汽车之家、手机百度、手机新浪、讯飞输入法、QQ、WPS Office、携程旅行、Faceu激萌、华为商城、天翼云盘、UC浏览器、爱奇艺、猫眼电影、珍爱网、大姨妈、百度外卖、美拍、豆瓣、网易云音乐等。</p>
      </div>
    )
  }
}