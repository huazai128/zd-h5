import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconProps } from '@components/icon/icon';
import { get, imgUrl } from 'js/api/api';
import { timer } from 'rxjs/observable/timer';
import { map, concatAll, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs/observable/of'
import 'js/lib/countUp.js';
import "./news.scss";

let data = [
  { imgUrl: "tu01", title: "自助下单" },
  { imgUrl: "tu02", title: "测试中心" },
  { imgUrl: "tu03", title: "CMA" },
  { imgUrl: "tu04", title: "定制化服务" },
]

interface NewsState {
  advs: Array<any>;
}

export default class NewsComponent extends React.Component<any, NewsState>{
  constructor(props?: any) {
    super(props);
    this.state = {
      advs: [],
    }
  }
  componentDidMount() {
    get("/adv").subscribe((res) => {
      if (res.code) {
        this.setState({
          advs: res.result.data
        })
        this.onInit();
      }
    })
    this.getDelay();
  }
  // 
  getDelay = () => {
    let options = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };
    let demo = null;
    timer(200, 1000 * 60 * 60).pipe(
      map(() => (Math.random() * 5 + 1).toFixed(0)),
      map((num) => {
        return get("/views", { amount: num }).pipe(
          withLatestFrom(num, (res: any, num) => {
            return {
              amount: res.result!.amount || 180000,
              num: Number(num)
            }
          })
        )
      }),
      concatAll()
    ).subscribe((res) => {
      console.log(res);
      // if (demo && res) {
      //   res!.amount += res!.num;
      //   demo.update(res!.amount);
      // } else {
      //   demo = new CountUp('count', (res!.amount - 1000), res!.amount, 0, 5, options);
      //   demo.start();
      // }
    })
  }
  // 初始化数据
  onInit = () => {
    new Swiper('.newsOne', {
      autoplay: 3000,
      pagination: '.newsOne .swiper-pagination',
      prevButton: '.newsOne .swiper-button-prev',
      nextButton: '.newsOne .swiper-button-next',
    });
  }
  render() {
    const { advs } = this.state;
    return (
      <div id="news">
        <div className="swiper-container newsOne">
          <div className="swiper-wrapper">
            {advs.map((item, index) => (
              <div className="swiper-slide">
                <a href={item.yurl}>
                  <div className="swiper-img">
                    <img src={`${imgUrl}${item.murl}`} />
                  </div>
                </a>
                {Object.is(index, 0) && (
                  <div className="news-cont flex-center">
                    <div>
                      <h3>覆盖移动终端</h3>
                      <div id="count"></div>
                      <h3>掌动智能质量云平台NQI-Cloud</h3>
                      <div>
                        <p>国内领先的质量测试、质量认证、</p>
                        <p>质量运营、质量变现四位一体的质量云平台</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className="home-one">
          <div className="flex wrap">
            {!!data && data.map((item, index) => (
              <div key="index" className="flex-col-6 flex-center">
                <Icon imgUrl={item.imgUrl} title={item.title}></Icon>
              </div>
            ))}
          </div>
        </div>
        <div className="home-two">
          <h3><span>质量云人工智能</span></h3>
          <div className="two-text">
            <p>NQI-Cloud提供Paas+Saas的完备质量云服务，</p>
            <p>实现智能应用全生命周期质量托管</p>
          </div>
          <div className="two-box">
            <div className="two-btm">
              <div className="two-link flex jc-between">
                <div className="icon01 icon-com">
                  <p>质量运营</p>
                </div>
                <div className="icon02 icon-com">
                  <p>质量变现</p>
                </div>
              </div>
              <div className="two-pos flex jc-between">
                <p>持续运营能力</p>
                <p>持续运营能力</p>
              </div>
            </div>
            <div>
              <div className="two-pos two-btm flex jc-between">
                <p>管理交付能力</p>
                <p>基础测试能力</p>
              </div>
              <div className="two-link flex jc-between">
                <div className="icon03 icon-com">
                  <p>质量认证</p>
                </div>
                <div className="icon04 icon-com">
                  <p>质量测试</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-center btn-width">
            <Link to="/cloud">
              <div className="btn btn-blur01">了解更多</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
