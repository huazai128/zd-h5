import * as React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/footer/footer';
import AdvComponent from '@components/adv/adv';
import SeriverComponent from './component/service';
import "./product.scss";

export default class ProdectComponent extends React.Component<any, any>{
  render() {
    return (
      <div id="prod">
        <AdvComponent cls="prod" title="产品与服务" cont={ ['全方位为客户定制服务、以最合理的价格，提供最优质的产品','以客户为本，想客户所想，为客户带来更为全面的解决方案'] } ></AdvComponent>
        <SeriverComponent {...this.props}></SeriverComponent>
        <Footer></Footer>
      </div>
    )
  }
}
