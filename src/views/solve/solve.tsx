import * as React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/footer/footer';
import "./solve.scss";

const lists = [
  {
    cls: "solve-one", title: "App软件测试解决方案", datas: [
      { title: "功能测试", url: "token02" },
      { title: "兼容测试", url: "token05" },
      { title: "性能测试", url: "token06" },
      { title: "压力测试", url: "token04" },
      { title: "安全测试", url: "token03" },
    ]
  },
  {
    cls: "solve-two", title: "智能硬件测试解决方案", datas: [
      { title: "硬件测试", url: "token07" },
      { title: "软件测试", url: "token08" },
      { title: "用户体验研究测试", url: "token09" },
    ]
  },
  {
    cls: "solve-three", title: "教育行业测试解决方案", datas: [
      { title: "UI自动化测试", url: "token10" },
      { title: "接口自动化测试", url: "token11" },
      { title: "自动化构建发布", url: "token12" },
    ]
  },
  {
    cls: "solve-fore", title: "运营商测试解决方案", datas: [
      { title: "技术实验室", url: "token13" },
      { title: "用户研究", url: "token14" },
      { title: "中移market测试中心", url: "token15" },
      { title: "ODC场内外支撑", url: "token16" },
    ]
  },
]

export default class SolveComponent extends React.Component<any, any>{
  componentDidMount() {
    this.loadScroll();
  }
  componentDidUpdate() {
    this.loadScroll();
  }
  componentWillReceiveProps(){
    this.loadScroll();
  }
  loadScroll = () => {
    const query = this.props.location!.search;
    if (query) {
      let page = Number(query.split("=")[1]);
      let node = null;
      switch (page) {
        case 0:
          node = "one";
          break;
        case 1:
          node = "two";
          break;
        case 2:
          node = "three";
          break;
        case 3:
          node = "fore";
          break;
      }
      setTimeout(() => {
        let anchorElement = document.querySelector(`#solve-${node}`);
        if(anchorElement) anchorElement.scrollIntoView(false);
      })
    }
  }
  render() {
    return (
      <div id="solve" className="body-box">
        {lists.map((item, idx) => (
          <div className={`solve-com ${item.cls}`} id={ item.cls } key={idx}>
            <h3>{item.title}</h3>
            <div className="flex wrap flex-hcenter">
              {item.datas.map((list, index) => (
                <div className="flex-col-4 flex-center solve-item" key={index}>
                  <div className="solve-cont">
                    <img src={require(`img/${list.url}.png`)} />
                    <p>{list.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="solve-width">
              <Link to={ `/solve-detail?type=${ idx }` }>
                <div className="btn btn-blur01">查看案例</div>
              </Link>
            </div>
          </div>
        ))}
        <Footer></Footer>
      </div>
    )
  }
}
