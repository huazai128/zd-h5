import * as React from 'react';
import Heads from '@components/heads/head';
import Footer from '@components/footer/footer';
import "./child.scss";

const lists = [
  { text: "全部", value: "all" },
  { text: "产品", value: "1" },
  { text: "项目", value: "2" },
  { text: "设计", value: "3" },
  { text: "市场", value: "4" },
  { text: "销售", value: "5" },
  { text: "推广", value: "6" },
  { text: "运营", value: "7" },
  { text: "实习", value: "8" },
  { text: "开发", value: "9" },
  { text: "测试", value: "10" },
  { text: "财务", value: "11" },
  { text: "会计", value: "12" },
]
const datas = [
  {
    value: "9",
    title: '软件测试工程师',
    lists: ['岗位职责：', '1、根据需求编写方案，分析测试数据、测试结果，撰写报告；', '2、搭建测试环境，编写测试脚本，执行自动化测试；', '3、根据项目需要，研究新的测试工具或测试框架；', '4、对移动端产品进行性能、功能测试；', '5、对测试任务进行统筹安排。'],
    items: ['任职要求：', '1.至少一年黑盒子测试经验或一年自动化测试经验；', '2.有Android/iOS开发或移动端产品测试经验优先；', '3.能熟练黑盒测试方法，熟练使用不同的测试方法设计用例、执行测试；', '4.熟悉黑盒测试方法，熟练使用不同的测试方法设计用例、执行测试；', '5.熟悉一款自动化功能/性能测试的工具，能熟练的根据需求和被测试产品编写测试脚本；', '6.能对测试结果进行研究分析，并最终生成报告。']
  },
  {
    value: "9",
    title: '高级测试工程师',
    lists: ['岗位职责：', '1.精通测试理论、流程与方法，能够熟悉使用主流的功能及性能测试工具（selenium、jenkins等）；', '2.熟悉软件功能、性能及安全方面的测试方法；', '3.对测试中发现的问题进行详细分析和准确定位，并能对产品提出优化的方案提高产品的性能；','4.通过对产品的测试、保证产品质量达到制定质量目标、能提出对产品质量目标的进一步改进的要求并依照执行；','5.参与制定软件测试标准，编写相应的软件测试文档；','6.负责部门内部员工的测试知识和测试工具的培训工作。'],
    items: ['任职要求：', '1.本科以上学历，3年以上的工作经验，有互联网企业工作经验优先考虑；', '2.精通软件测试理论、软件测试流程及其各项规范；', '3.熟悉linux系统，有基本的脚本编写能力，如shell、python、perl等，会使用脚本做的一些自动化工作；', '4.熟悉常用的自动化测试工具、性能测试工具，如Seleniu、Autolt、SoapUI、LoadRunner等，并精通一款测试工具；', '5.熟悉网络协议（HTTP、TCP/IP等）优先；', '6.熟悉wireshark,tcpdump网络抓包，数据分析工具。']
  },
  {
    value: "7",
    title: '用户研究员',
    lists: ['岗位职责：', '1.与需求方、项目经理沟通，并设计相应的测试的方案；', '2.确保评测方案的顺利实施，把控数据搜集和分析质量；', '3.完成报告撰写，能有效的向需求方传递调研结果。'],
    items: ['任职要求：', '1.大专或以上学历，心理学、设计学、统计学/社会学等市场研究相关专业优先；', '2.工作年限：1年或以上；有交互设计或工业设计背景优先；', '3.熟练掌握常用的用户研究方法，能独立负责用户观察、深度访谈、定量问卷调研等工作；能独立进行科学、严禁的实验并实施；掌握专家走查方法；', '4.熟练使用SPAA、Excel等工具进行数据库管理和基础分析；熟练使用常用办公工具；了解常用APP的体验评测流程；', '5.热爱用户研究工作，有敏锐的数据洞察和分析能力，能承受较高程度的工作压力；', '6.主动性强、善于学习各种知识；积极完成项目经理安排的工作']
  },
  {
    value: "5",
    title: '销售经理',
    lists: ['岗位职责：', '1.销售文件准备及商务报价等工作，挖掘客户做大的消费潜力；', '2.负责制定客户经营计划，积极有效推进客户经营，承担销售目标、完成销售业绩目标；', '3.负责资源整合，形成整体测试解决方案，包装销售；', '4.合作方关系的维护和拓展对客户做软件测试工具、方案和服务介绍演示。'],
    items: ['任职要求：', '1.有智能家居，家电，商用设备等行业资源和行业销售的经验者优先考虑；', '2.反应敏捷，具备良好的沟通、表达、商务谈判能力；', '3.具备一定的市场分析及判断能力，良好的客户服务意识；', '4.积极主动，喜欢有挑战性工作，对工作有激情，能承受较大工作压力；', '5.具有团队的合作意识，具备努力开拓市场的精神，有个人奋斗目标和信心。']
  }
]

interface ChildState {
  value: string;
}

export default class Child extends React.Component<any, ChildState>{
  constructor(props) {
    super(props);
    this.state = {
      value: "all"
    }
  }
  select = (value: string) => {
    this.setState({
      value: value
    })
  }
  render() {
    const { value } = this.state;
     return (
      <div id="child">
        <div className="btn-pad"><div className="btn btn-blur01">简历请投递至：mwei@appstest.cn</div></div>
        <div className="flex wrap cls-box">
          <div className="cls-coms">职位类别：</div>
          {lists.map((item, index) => (
            <div className={`cls-coms ${Object.is(value, item.value) ? 'active' : ''}`} onClick={() => { this.select(item.value) }}>{item.text}</div>
          ))}
        </div>
        <div className="child-lists">
          {Object.is(value, "all") && (
            datas.map((item, index) => (
              <div className="child-item">
                <h4>{item.title}</h4>
                <div>
                  {item.lists.map((list) => (
                    <p>{list}</p>
                  ))}
                </div>
                <div>
                  {item.items.map((text) => (
                    <p>{text}</p>
                  ))}
                </div>
              </div>
            ))
          )}
          {datas.map((item, index) => (
            Object.is(item.value, value) && (
              <div className="child-item">
                <h4>{item.title}</h4>
                <div>
                  {item.lists.map((list) => (
                    <p>{list}</p>
                  ))}
                </div>
                <div>
                  {item.items.map((text) => (
                    <p>{text}</p>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    )
  }
}