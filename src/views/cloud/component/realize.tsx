import * as React from 'react';
import { Link } from 'react-router-dom';
import IconComponent from './component';
import "./realize.scss";

const lists = [
  { cont: '质量数据挖掘、打通、流转', url: "idx14" },
  { cont: '深度学习', url: "idx10" },
  { cont: '边缘计算', url: "idx11" },
  { cont: '价值定向提升', url: "idx12" },
]

const datas = [
  { cont: '产品设计优化', url: "idx18" },
  { cont: '产品设计优化', url: "idx19" },
  { cont: '产品量产优化', url: "idx19" },
  { cont: '产品销售优化', url: "idx19" },
]

export default class Realize extends React.Component<any, any>{
  render() {
    return (
      <div id="realize">
        <div className="cloud-text">国家质量基础设施云平台NQI-Cloud质量认证，支撑智能应用管理交付能力</div>
        <IconComponent datas={lists} idx={3} />
        <div className="realize-box">
          <div className="realize-lists flex jc-between ">
            <div className="flex-col-4"><p className="flex-center">智能应用远程</p></div>
            <div className="flex-col-4"><p className="flex-center"><div><span>产品远程</span><span>故障检测</span></div></p></div>
            <div className="flex-col-4"><p className="flex-center"><div><span>远程诊断</span><span>优化升级</span></div></p></div>
          </div>
          <div className="realize-lists flex jc-between">
            <div className="flex-col-6"><p className="flex-center">智能应用上架检测</p></div>
            <div className="flex-col-6"><p className="flex-center">智能应用认证检测</p></div>
          </div>
          <div className="realize-item"><p className="flex-center">智能应用产品量产/生产线/出厂检测</p></div>
          <div className="realize-item"><p className="flex-center">智能应用产品研发定型检测</p></div>
        </div>
        <div className="res-img"><img src={ require('img/bg12.jpg') } alt=""/></div>
        <IconComponent datas={datas} idx={3} />
        <div className="res-moe">
          <div className="res-up">利润提升</div>
        </div>
      </div>
    )
  }
}