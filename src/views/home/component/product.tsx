import * as React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import Title from '@components/title/title';
// import FormComponent from '@components/form/form';
import "./product.scss";

const tabs = [
  { title: '软件测试' },
  { title: '智能硬件测试' },
  { title: '认证' },
];

// tab内容数据
const tadData = [
  [
    { title: "功能测试", id: 1, content: "结合探索性测试和模拟不同环境下的测试,检查产品是否达到用户要求的功能。" },
    { title: "兼容测试", id: 2, content: "上千款测试真机设备供客户挑选，完善自动化测试系统，快速定位，解决问题。" },
    { title: "性能测试", id: 3, content: "基于业务场景与用户行为的全链路压力测试,发现并发瓶颈，优化容量规划。" },
  ],
  [
    { title: "可靠性测试", id: 4, content: "通过低温试验、高温试验、恒定湿热试验、N/A全方面对硬件进行测试" },
    { title: "无线通信模组测试", id: 5, content: "通过无线通信模组测试产品的性能，包括发射性能、接收性能、电源适应性、传输性能等专业测试" },
    { title: "连通性测试", id: 6, content: "测试产品网络状况、硬件跟手机节点之间打流，误码率、传输速率、延时等测试" },
  ],
  [
    { title: "CMA", id: 7, content: "专业CMA认证机构，可用于申请政府扶持资金和质量仲裁" },
    { title: "CNAS", id: 8, content: "专业CNAS认证机构，确认其是否有能力开展相应的合格评定活动" },
    { title: "ISO", content: "ISO认证专业机构" },
  ]
]

//  解决方法数据
const swipeData = [
  {
    title: "APP软件测试", cls: "bg04", imgDatas: [
      { title: "功能测试" },
      { title: "兼容测试" },
      { title: "安全测试" },
      { title: "压力测试" },
      { title: "性能测试" },
    ]
  },
  {
    title: "智能硬件测试", cls: "bg02", imgDatas: [
      { title: "硬件测试" },
      { title: "软件测试" },
      { title: "用户体验测试" },
    ]
  },
  {
    title: "教育行业测试", cls: "bg03", imgDatas: [
      { title: "UI自动化测试" },
      { title: "接口自动化测试" },
      { title: "自动化构建发布" },
    ]
  },
  {
    title: "运营商测试建设", cls: "bg01", imgDatas: [
      { title: "技术实验室" },
      { title: "用户研究" },
      { title: "中移market测试中心" },
      { title: "odc场内外支撑" },
    ]
  },
]

// tab内容区域
const TabCont = ({ title, content, id, change }) => (
  <div className="tab-item">
    {!!id ? (
      <Link to={`/product-detail?type=${id}`}>
        <div className="tab-cont">
          <div className="flex jc-between">
            <h4 className="flex-vcenter">{title}</h4>
          </div>
          <p>{content}</p>
        </div>
      </Link>
    ) : (
        <a href="javascript:void(0)">
          <div className="tab-cont">
            <div className="flex jc-between">
              <h4 className="flex-vcenter">{title}</h4>
            </div>
            <p>{content}</p>
          </div>
        </a>
      )}
    <div className="btn-wth">
      <div className="btn btn-blur01" onClick={() => { change() }}>立即下单</div>
    </div>
  </div>
)

// 解决方案
const Plan = ({ title, imgDatas, idx }) => (
  <div className="plan-box" >
    <h4>{title}</h4>
    <div className="plan-items flex wrap">
      {imgDatas.map((item, index) => (
        <div className="item flex-col-4" key={index}>
          <div className="item-bg"></div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
    <div className="btn-more">
      <Link to={`/solve?page=${idx}`}>了解更多</Link>
    </div>
  </div>
)

interface ProductState {
  index: number;
  type: number;
  isForm: boolean;
}

export default class Product extends React.Component<any, ProductState>{
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isForm: false,
      type: 0
    }
  }
  componentDidMount() {
    let swiper = new Swiper('.proOne', {
      pagination: '.proOne .swiper-pagination',
    });
  }
  // 显示表单
  change = () => {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
  }
  // 关闭
  close = () => {
    this.setState({ isForm: false });
  }
  render() {
    let { index, isForm, type } = this.state;
    return (
      <div id="product">
        {/* {isForm && (<FormComponent close={this.close} type={type} />)} */}
        <div className="pro-one">
          <Title title="产品与服务"></Title>
          <div className="pro-text">卓越品质决定优质服务，优质服务决定产品质量</div>
          <div className="tab-box">
            <Tabs tabs={tabs}
              onChange={(item, index) => { this.setState({ index: index }) }}
              initalPage={index}>
              {tadData.map((item, idx) => (
                index === idx && (
                  <div key={idx}>
                    {item.map((tab, i) => (
                      <TabCont title={tab.title} key={index} content={tab.content} id={tab.id} change={this.change}></TabCont>
                    ))}
                  </div>
                )
              ))}
            </Tabs>
          </div>
        </div>
        <div className="pro-two">
          <div className="swiper-container proOne">
            <div className="swipe-top">
              <Title title="解决方案"></Title>
              <div className="pro-text">世界因智能而改变，掌测AppSTest让智能因品质而更美好</div>
            </div>
            <div className="swiper-wrapper">
              {swipeData.map((item, idx) => (
                <div className={`swiper-slide ${item.cls}`} key={idx}>
                  <Plan title={item.title} imgDatas={item.imgDatas} idx={idx}></Plan>
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
