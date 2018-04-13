import React from 'react';
import Swiper from 'swiper';
import Title from '@components/title/title';
import "./componay.scss";

// 证书
const datas = [
  { swip: "compOne", title: "企业资质", items: [{ url: "j01" }, { url: "j02" }, { url: "j03" }, { url: "j05" }, { url: "j06" }, { url: "j07" }, { url: "j09" }, { url: "j10" }, { url: "j11" }, { url: "j12" }, { url: "j13" }] },
  { swip: "compTwo", title: "荣誉奖项", items: [{ url: "com01" }, { url: "com02" }, { url: "price4" }, { url: "price5" }] },
  { swip: "compThree", title: "专业证书", items: [{ url: "com03" }, { url: "com04" }, { url: 'price8' }, { url: 'price9' }] },
]

// 公司
const compDats = [
  [{ url: "com07" }, { url: "com08" }, { url: "com09" }, { url: "com10" }, { url: "com11" },],
  [{ url: "com12" }, { url: "com13" }, { url: "com14" }, { url: "com16" }, { url: "com17" },],
  [{ url: "com18" }, { url: "com19" }, { url: "com20" }, { url: "com21" }, { url: "com22" },],
  [{ url: "com23" }, { url: "com24" }, { url: "com25" }]
]

export default class Componay extends React.Component<any, any>{
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    new Swiper('.compOne', {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: '.compOne .swiper-pagination',
    });
    new Swiper('.compTwo', {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: '.compTwo .swiper-pagination',
    });
    new Swiper('.compThree', {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: '.compThree .swiper-pagination',
    });
    new Swiper('.compFore', {
      pagination: '.compFore .swiper-pagination',
    });
  }

  render() {
    return (
      <div id="componay">
        <div className="comp-one">
          <Title title="公司资质及奖项"></Title>
          {datas.map((item, index) => (
            <div className="comp-item" key={index}>
              <div className="comp-title"><span>{item.title}</span></div>
              <div className={`swiper-container ${item.swip}`}>
                <div className="swiper-wrapper">
                  {item.items.map((list, idx) => (
                    <div className="swiper-slide" key={idx}>
                      <img src={require(`img/${list.url}.png`)} />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="comp-two">
          <div className="swiper-container compFore">
            <div className="swiper-title">他们都选择掌测为产品保驾护航</div>
            <div className="swiper-wrapper">
              {compDats.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="lists">
                    {item.map((list, idx) => (
                      <div className="list flex-center" key={idx}><img src={require(`img/${list.url}.png`)} /></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    )
  }
}


