import * as React from 'react';
import { Link } from 'react-router-dom';
// import FormComponent from '@components/form/form';
import "./adv.scss";

interface AdvProps {
  title: string;
  cls: string;
  cont?: Array<string>;
  flag?: boolean;
  type?:number;

}
export default class AdvComponent extends React.Component<AdvProps, any>{
  constructor(props?: AdvProps) {
    super(props);
    this.state = {
      isForm: false
    }
  }
  // 显示表单
  change = () => {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    // this.setState({ isForm: true, type: 0 });
  }
  // 关闭
  close = () => {
    this.setState({ isForm:false });
  }
  render() {
    const { title, cont, flag = true, cls,type=0 } = this.props;
    const { isForm } = this.state;
    return (
      <div id="adv" className={`flex-center ${cls}`}>
        {/* {isForm && <FormComponent close={ this.close } type={type} />} */}
        <div className="cont ">
          <h3>{title}</h3>
          {!!cont && cont.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          {flag && (
            <div className="btn-wth">
              <div className="btn btn-blur01" onClick={() => { this.change() }}>立即申请</div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
