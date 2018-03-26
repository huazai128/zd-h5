import * as React from 'react';
import { Link } from 'react-router-dom';
import "./service.scss";

const imgDatas = [
  { url: "tu11" },
  { url: "tu12" },
  { url: "tu13" },
]
const lists = [
  {
    title: '软件测试', id: "one", text: ['根据产品的需求及原型文档，', '对APP进行系统全面的测试，为企业提供可靠的产品保障'],
    datas: [
      { icon: "tu01", idx: 1, title: "功能测试", text: ['专家分析走查+自动化功能测试', '专家分析走查+自动化功能测试', '进行功能测试服务'] },
      { icon: "tu02", idx: 2, title: "兼容测试", text: ['上千款测试真机设备供客户挑选，', '完善自动化测试系统，快速定位，解决问题'] },
      { icon: "tu03", idx: 3, title: "性能测试", text: ['基于业务场景与用户行为的全链路压力测试，发现并发瓶颈，优化容量规划'] },
    ]
  },
  {
    title: '硬件测试', id: "two", text: ['国家级智能硬件质量测试标准、', 'APP结合硬件使用场景测试、经验丰富的专家测试团队挖掘产品潜在缺陷'],
    datas: [
      { icon: "tu04", idx: 4, title: "可靠性测试", text: ['通过低温试验、高温试验、', '恒定湿热试验、N/A全方面对硬件进行测试'] },
      { icon: "tu05", idx: 5, title: "无线通信模组测试", text: ['通过无线通信模组测试产品的性能，', '包括发射性能、接收性能、', '电源适应性、传输性能等专业测试'] },
      { icon: "tu06", idx: 6, title: "连通性测试", text: ['测试产品网络状况、硬件跟手机节点之间打流，误码率、传输速率、延时等测试'] },
    ]
  },
  {
    title: '认证', id: "three", text: ['国家权威资质认定、', '为企业出具国家权威的第三方检测报告、提供一站式退税服务'],
    datas: [
      { icon: "tu07", idx: 7, title: "CMA", text: ['广东省第一个获得第三方软件测试CMA牌照为计量认证合格的检测机构出具的检测报告'] },
      { icon: "tu08", idx: 8, title: "CNAS", text: ['信息处理产品标准符合性检测中心', '为企业提供国家税收优惠政策的认证服务'] },
      { icon: "tu09", title: "ISO", text: ['ISO认证专业机构'] },
    ]
  }
]

export default class SeriverComponent extends React.Component<any, any>{
  componentDidMount() {
    const query = this.props.location!.search;
    let page = Number(query.split("=")[1]);
    this.loadScroll(page);
  }
  componentWillReceiveProps() {
    const id = window.location.href.split("=")[1].split("&")[0];
    this.loadScroll(Number(id));
  }
  loadScroll = (num: number) => {
    let node = null;
    switch (num) {
      case 0:
        node = "one";
        break;
      case 1:
        node = "two";
        break;
      case 2:
        node = "three";
        break;
    }
    setTimeout(() => {
      let anchorElement = document.getElementById(node);
      if (anchorElement) anchorElement.scrollIntoView(false)
    })
  }
  change = (index: number) => {
    this.loadScroll(index);
  }
  render() {
    return (
      <div id="seriver">
        <div className="ser-img flex wrap">
          {imgDatas.map((item, index) => (
            <div className="flex-col-4 flex-center" key={index}><img onClick={() => { this.change(index) }} src={require(`img/${item.url}.png`)} /></div>
          ))}
        </div>
        <div className="ser-one">
          {lists.map((item, index) => (
            <div className="ser-item" id={item.id} key={index}>
              <h3>{item.title}</h3>
              <div className="ser-detail">
                {item.text.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
              {item.datas.map((data, i) => (
                data.idx ? (
                  <Link to={`/product-detail?type=${data.idx}`} key={i}>
                    <div className="ser-list" >
                      <div>
                        <div className="img-box"><img src={require(`img/${data.icon}.jpg`)} /></div>
                        <div className="item-content">
                          <h4>{data.title}</h4>
                          <div className="ser-detail">
                            {data.text.map((text, idx) => (
                              <p key={idx}>{text}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                    <a href="javascript:void(0)" key={i}>
                      <div className="ser-list" >
                        <div>
                          <div className="img-box"><img src={require(`img/${data.icon}.jpg`)} /></div>
                          <div className="item-content">
                            <h4>{data.title}</h4>
                            <div className="ser-detail">
                              {data.text.map((text, idx) => (
                                <p key={idx}>{text}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
