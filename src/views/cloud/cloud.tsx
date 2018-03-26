import * as React from 'react';
import Footer from '@components/footer/footer';
import AdvComponent from '@components/adv/adv';
import Attest from "./component/attest";
import Operations from "./component/operations";
import Realize from "./component/realize";
import Test from "./component/test";
import "./cloud.scss";

interface RecruitState {
  idx: number
}
const tabs = [
  { title: "质量认证", icon: "icon01" },
  { title: "质量运营", icon: "icon02" },
  { title: "质量变现", icon: "icon03" },
  { title: "质量测试", icon: "icon04" },
]
export default class Cloud extends React.Component<any, RecruitState>{
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
      <div id="cloud" className="body-box">
        <AdvComponent cls="cloud_bg" cont={ ['提供国内领先的集质量测试、质量认证、','质量运营、质量变现四位一体的质量云平台'] } title="质量云平台" ></AdvComponent>
        <div className="rec-box">
          <div className="rec-tabs flex">
            {tabs.map((item, index) => (
              <div className="flex-col-3">
                <div className={`tab-item ${item.icon} ${idx === index ? 'active' : ''}`} onClick={() => { this.change(index); }}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        { idx === 0 && (<Attest />) }
        { idx === 1 && (<Operations />) }
        { idx === 2 && (<Realize />) }
        { idx === 3 && (<Test />) }
        <Footer></Footer>
      </div>
    )
  }
}