import * as React from 'react';
import { Link } from 'react-router-dom';
import IconComponent from './component';
import "./test.scss";

const lists = [
  { cont: '基于公有云/私有云的工具集市与知识库集市的联网共享、在线测试', url: "idx20" },
  { cont: '36种先进测试工具', url: "idx21" },
  { cont: '58种主流测试方法', url: "idx22" },
  { cont: '万余种行业应用沉淀数据仓库', url: "idx23" },
]

export default class Test extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id="test" >
        <div className="cloud-text">国家质量基础设施云平台NQI-Cloud质量认证，支撑智能应用管理交付能力</div>
        <IconComponent datas={lists} idx={6} />
        <div className="test-bg"><img src={ require("img/bg13.jpg") } alt=""/></div>
      </div>
    )
  }
}