import * as React from 'react';
import IconComponent from './component';
import "./attest.scss";

const lists = [
  {
    title: "半强制性认证", datas: [
      { cont: '第三方产品验收测试', url: "idx01" },
      { cont: '政府科技项目验收测试', url: "idx02" },
      { cont: '高企/软企资质认证测试', url: "idx03" },
      { cont: '第三方司法仲裁测试', url: "idx04" },
    ]
  },
  {
    title: "自愿性认证", datas: [
      { cont: '掌测和企业共同推出APP及智能硬件自愿性认证测试', url: "idx05" },
      { cont: '获得APP及智能硬件供应商的采信', url: "idx06" },
      { cont: '形成企业生态链成员的刚性测试需求开展强制检测', url: "idx07" },
      { cont: '“掌测认证”成为行业的APP及智能硬件产品的“出生证”', url: "idx08" },
    ]
  }
]

export default class Attest extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id="attest" >
        <div className="cloud-text">国家质量基础设施云平台NQI-Cloud质量认证，支撑智能应用管理交付能力</div>
        {lists.map((item,index) => (
          <div className="attest-item" key={ index }>
            <h3>{ item.title }</h3>
            <IconComponent datas={item.datas} idx={ 3 } />
          </div>
        ))}
      </div>
    )
  }
}