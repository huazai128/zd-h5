import * as React from 'react';
import { Link } from 'react-router-dom';
import IconComponent from './component';
import "./operations.scss";

const lists =  [
  { cont: 'API软件植入', url: "idx09" },
  { cont: '可拔插IC嵌入', url: "idx10" },
  { cont: '产品数据采集', url: "idx11" },
  { cont: '远程诊断', url: "idx12" },
  { cont: 'OTA升级', url: "idx13" },
]


export default class Operations extends React.Component<any, any>{
  render(){
    return(
      <div id="ope">
        <div className="cloud-text">国家质量基础设施云平台NQI-Cloud质量认证，支撑智能应用管理交付能力</div>
        <IconComponent datas={lists} idx={ 4 } />
        <div className="ope-bg"><img src={ require("img/bg11.jpg") }/></div>

      </div>
    )
  }
}