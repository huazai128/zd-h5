import * as React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/footer/footer';
import AdvComponent from '@components/adv/adv';
import Profile from './component/profile';
import Child from './component/child';
import "./recruit.scss";

interface RecruitState {
  idx: number
}
const tabs = [
  { title: "公司简介", icon: "icon01" },
  { title: "招贤纳士", icon: "icon02" },
]
export default class Recruit extends React.Component<any, RecruitState>{
  constructor(props) {
    super(props);
    this.state = {
      idx: 0
    }
  }
  change = (index) => {
    if (this.state.idx === index) return false;
    this.setState({
      idx: index
    })
  }
  render() {
    const { idx } = this.state;
    return (
      <div id="recruit" className="body-box">
        <AdvComponent cls="recruit_bg" title="让世界因品质而美好为移动互联网产业保驾护航" flag={false}></AdvComponent>
        <div className="rec-box">
          <div className="rec-tabs flex">
            {tabs.map((item, index) => (
              <div className="flex-col-6">
                <div className={`tab-item ${item.icon} ${idx === index ? 'active' : ''}`} onClick={() => { this.change(index); }}>{item.title}</div>
              </div>
            ))}
          </div>
          {idx === 0 && (<Profile />)}
          {idx === 1 && (<Child />)}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}