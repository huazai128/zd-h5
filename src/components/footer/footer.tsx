import * as React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export default class Footer extends React.Component<any, any> {
  constructor(props?: any) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div id="footer">
        <div className="flex">
          <a href="tel:020-38555340">020-38555340</a>
          <a href="tel:020-89289423">020-89289423</a>
        </div>
        <div className="flex">
          <p>QQ：2146594489</p>
          <p>微信：AppTest_CS</p>
        </div>
        <div className="flex">
          <p>邮箱：business@appstest.cn</p>
          <p>cs@appstest.cn</p>
        </div>
        <p>地址：广州市中山大道西8号天河商贸大厦14楼</p>
        <div className="logo">
          <Link to="/">
            <img src={require("img/logo.png")} alt="" />
          </Link>
        </div>
      </div>
    )
  }
}