import * as React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, List } from 'antd-mobile';
import Footer from '@components/footer/footer';
import AdvComponent from '@components/adv/adv';
// import FormComponent from '@components/form/form';
import "./detail.scss";

const lists = [
  {
    t: "APP软件解决方案",
    bg: "banner1",
    tabs: [
      { icon: "icon01", title: "测试手机端不足", content: "测试手机端的不足，一直是困扰着以APP软件企业的头大问题，而购买真机终端的巨大成本，往往使企业望而止步。" },
      { icon: "icon02", title: "专业测试人员不足", content: "很多软件项目的开发还停留在“作坊式”阶段，项目的成功往往靠个别程序员决定，但随着市场对软件质量的要求不断提高，软件测试将变得越来越重要" },
      { icon: "icon03", title: "测试深度和广度不足", content: "产品功能复杂，往往需要耗费众多的人员投入，大大增加企业成本负担，而功能、性能、兼容性、压打性、安全性等方面的深度和广度也无法得到满足" },
    ],
    title: '中金财视',
    content: [
      {
        cont: ['福建中金在线网络股份有限公司（互联网财经媒体）定位于做全国领先的投资服务平台和权威的网络财经媒体。', '财视APP是一个提供科技金融综合服务平台，汇集财经博主、投资理财达人，致力于为用户提供一站式金融服务，涵盖股票、基金、财经、证券、黄金、外汇、投资、理财、保险、期货等金融行业，包括基于个人兴趣、大数据、音视频、券商交易、理财产品及智能投顾等，是一个为投资者提供智能投资的平台'],
        imgs: ['zhong1.jpg', 'zhong2.jpg', 'zhong3.jpg', 'zhong4.jpg'],
        title: '案例介绍'
      },
      {
        cont: ['产品功能复杂，功能迭代快，产品测试人员无法满足测试深度和广度。'],
        title: '现状问题'
      },
      {
        cont: ['以手工测试为主，自动化测试为辅助相结合。结合手工测试对数据的准确性、业务流程的符合、人性判断的优点和自动化测试节省大流量重复性和回归测试的优势。基于产品功能全面的分析，深度覆盖产品功能路径。', '目前为止，财视产品已进行81次版本测试，累计用例数10万余条，发现缺陷数2千余个。掌测一直为中金产品APP保驾护航，专业的测试团队，每个版本尽可能的覆盖各种机型设备，海量用例库进行回归测试，确保每个模块达到测试验收标准使用户体验达到最佳。'],
        title: '解决方案'
      }
    ],
    pcont: [
      '钻研APP软件行业业务特性，搭建行业特色测试方案', '量身打造个性化APP软件行业解决方案'
    ]
  },
  {
    t: "智能硬件测试",
    bg: "banner2",
    tabs: [
      { icon: "icon01", title: "质量问题", content: "随着各种产品爆炸事故频发，消费者对智能硬件的质量问题越来越重视，而一个好的产品质量往往最能给消费者留下好印象，重视硬件产品质量，打造品牌形象的第一步。" },
      { icon: "icon02", title: "用户体验差", content: "智能硬件市场的成功很大取决于用户的积极体验。如果产品在用户想象中有大差距时，体验感差。那么这种状况将会对设备制造商承诺的高质量服务形成打击，影响后期的销路。" },
      { icon: "icon03", title: "APP与硬件结合使用问题多", content: "一款设计精良的产品仍不足以创建大规模的忠诚用户。消费者使用这些设备主要就是想看看相应的数据结果，而这些功能则需要通过APP来展现，APP与硬件结合的产生bug问题，往往影响着用户对产品的体验感。" },
    ],
    title: '格兰仕智能冰箱',
    content: [
      {
        cont: ['格兰仕冰箱定位于“全球最大空调专业化制造中心”，高起点快速切入市场，在第一个冷冻年度（2001年度）就实现产销50万台。2002年预计产销180万台，其中内销60万台，外销120万台。'],
        imgs: ['gelan5.png', 'gelan3.png', 'gelan4.png'],
        title: '案例介绍'
      },
      {
        cont: ['智能硬件产品与软件产品功能繁杂，专业测试人员不足，测试工作量巨大。'],
        title: '现状问题'
      },
      {
        cont: ['按照国家智能家电质量测试标准对硬件样品进行制定智能家电性能测试、互联测试、多手机用户测试、安全性测试、复杂测试场景、可靠性的测试。', '硬件测试是针对大型智能家电的测试需求进行分析评估，对大型智能冰箱提出具体测试方案。其目的是解决大型智能冰箱在使用过程中出现的异常和问题，并通过相关测试去发现潜在问题，消除可能的风险。 ', '针对各类家用和类似用途电器，依据相关标准及技术规范，从自学习、自适应、自协调、自诊断、自推理、自组织、自校正和安全易用八个方面对各类家电的智能功能进行系统、科学的评价。'],
        title: '解决方案'
      }
    ],
    pcont: ['针对智能硬件行业业务特性，搭建行业特色测试方案', '打造个性化智能硬件行业解决方案']
  },
  {
    t: "教育行业测试",
    bg: "banner3",
    tabs: [
      { icon: "icon01", title: "测试手机端不足", content: "测试手机端的不足，一直是困扰着以APP软件企业的头大问题，而购买真机终端的巨大成本，往往使企业望而止步。" },
      { icon: "icon02", title: "专业测试人员不足", content: "很多软件项目的开发还停留在“作坊式”阶段，项目的成功往往靠个别程序员决定，但随着市场对软件质量的要求不断提高，软件测试将变得越来越重要" },
      { icon: "icon03", title: "测试深度和广度不足", content: "产品功能复杂，往往需要耗费众多的人员投入，大大增加企业成本负担，而功能、性能、兼容性、压打性、安全性等方面的深度和广度也无法得到满足" },
    ],
    title: '云积百灵智能终端',
    content: [
      {
        cont: ['应用于教育领域的APP，结合移动终端与投影仪，植入云盘与批注功能，实现移动教学。具有丰富的接口，可以连接大部分教室设备。学校老师就不需要接入任何视频线便可将电脑信号一键投射到投影机，方便老师上课素材、PPT展示。'],
        imgs: ['edu1.png', 'edu2.png', 'edu3.png'],
        title: '案例介绍'
      },
      {
        cont: ['无专门的测试人员，缺少系统测试方法。'],
        title: '现状问题'
      },
      {
        cont: ['运用UI自动化测试技术，覆盖多款安卓系统与ios系统手机终端测试，实现了Android、iOS移动设备的无线镜像投屏技术，支持微信远程管控投影仪设备。', '搭建覆盖多种网络场景，接口测试，并提供意见进行优化。通过可用微信远程控制投影机工作，目前支持Wi-Fi Display、Miracast、AirPlay连接，轻松分享PC、iOS、Android等终端无线投屏。'],
        title: '解决方案'
      }
    ],
    pcont: ['针对教育行业行业业务特性，搭建行业特色测试方案', '打造个性化教育行业解决方案']
  },
  {
    t: "运营商测试建设",
    bg: "banner4",
    tabs: [
      { icon: "icon01", title: "测试手机端不足", content: "测试手机端的不足，一直是困扰着以APP软件企业的头大问题，而购买真机终端的巨大成本，往往使企业望而止步。" },
      { icon: "icon02", title: "专业测试人员不足", content: "很多软件项目的开发还停留在“作坊式”阶段，项目的成功往往靠个别程序员决定，但随着市场对软件质量的要求不断提高，软件测试将变得越来越重要" },
      { icon: "icon03", title: "测试深度和广度不足", content: "产品功能复杂，往往需要耗费众多的人员投入，大大增加企业成本负担，而功能、性能、兼容性、压打性、安全性等方面的深度和广度也无法得到满足" },
    ],
    title: '中国移动',
    content: [
      {
        cont: ['贯彻中国移动集团公司战略转型的要求，向用户提供优质的产品体验，由互联网基地承建面向全网的“移动互联网应用用户体验测评共享中心”，向全集团各产品线提供专业化、多样化的体验测评能力支撑。', '企业想建立一个专业的团队。'],
        imgs: ['yidong1.jpg', 'yidong2.png', 'yidong3.png'],
        title: '案例介绍'
      },
      {
        cont: ['产品功能复杂，功能迭代快，产品测试人员无法满足测试深度和广度。'],
        title: '现状问题'
      },
      {
        cont: ['梳理产品的核心功能，制定具体的假设任务，邀请目标人群针对产品进行操作体验；挖掘用户在产品操作中遇到的问题及操作失败的原因，并获取用户对产品的需求及接受度；总结分析用户的需求及建议，为产品优化迭代提供意见支持。', '帮助移动集团建立专业的团队。'],
        title: '解决方案'
      }
    ],
    pcont: ['针对运营商行业业务特性，搭建行业特色测试方案', '量身打造个性化运营商测试建设解决方案']
  },
]

const AccItem = ({ icon, title }) => (
  <div className={`acc-icon ${icon}`}>{title}</div>
)

interface contentType {
  cont: Array<string>;
  imgs?: Array<string>;
  title: string;
}

interface ListsType {
  tabs: any;
  title: string;
  content: contentType[];
  t: string;
  pcont: Array<string>;
  bg:string;
}

interface DetailState {
  isForm: boolean;
  type: number;
  data: ListsType;
}

export default class SolveDetailComponent<T> extends React.Component<any, DetailState>{
  constructor(props) {
    super(props);
    this.state = {
      isForm: false,
      type: 0,
      data: null
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    let num = Number(this.props.location.search.split("=")[1]);
    this.setState({
      data: lists[num]
    })
  }
  onChange = () => {
  }
  // 显示表单
  change = () => {
    // this.setState({ isForm: true, type: 0 });
    window.open('http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
  }
  // 关闭
  close = () => {
    this.setState({ isForm: false });
  }
  render() {
    const { isForm, type, data } = this.state;
    return (
      <div id="solveDetail" className="body-box">
        {/* {isForm && <FormComponent close={this.close} type={type} />} */}
        {!!data && (<AdvComponent cls={data.bg} title={data.t} cont={data.pcont} ></AdvComponent>)}
        <div className="sup-box">
          <div className="sup-one">
            <h3>我们将面临的挑战</h3>
            <Accordion defaultActiveKey="0" className="acc-box" onChange={this.onChange}>
              {!!data && data.tabs.map((item, idx) => (
                <Accordion.Panel key={idx} header={<AccItem title={item.title} icon={item.icon} />}> <p> {item.content}</p> </Accordion.Panel>
              ))}
            </Accordion>
          </div>
          <div className="sup-two">
            <h3>{!!data && data.title}</h3>
            {!!data && data.content.map((item, idx) => (
              <div className="two-box" key={idx}>
                <div className="two-title">{item.title}</div>
                {item.cont.map((cont, index) => (
                  <p>{cont}</p>
                ))}
                {!!item.imgs && (
                  <div className="two-imgs flex wrap">
                    {item.imgs.map((img, i) => (
                      <div className="flex-col-6"><p><img src={require(`img/${img}`)} alt="" /></p></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="two-wth"><div className="btn btn-blur01" onClick={() => { this.change() }}>立即申请</div></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
