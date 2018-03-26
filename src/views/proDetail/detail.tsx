import * as React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, List } from 'antd-mobile';
import Footer from '@components/footer/footer';
import AdvComponent from '@components/adv/adv';
// import FormComponent from '@components/form/form';
import { lists } from './data';
import "./detail.scss";

const AccItem = ({ icon, title }) => (
  <div className={`acc-icon ${icon}`}>{title}</div>
)

interface contentType {
  cont: Array<string>;
  imgs?: Array<string>;
  title: string;
}

interface ListsType {
  tabs: any;
  title: string;
  content: contentType[];
  t: string;
  pcont: Array<string>;
}

interface DetailState {
  isForm: boolean;
  type: number;
  data: ListsType;
}

export default class ProDetailComponent<T> extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      isForm: false,
      type: 0,
      data: null
    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
    let num = Number(this.props.location.search.split("=")[1]);
    this.setState({
      data: lists[num-1]
    })
  }
  onChange = () => {
  }
  // 显示表单
  change = () => {
    // this.setState({ isForm: true, type: 0 });
    window.open('http://wpa.qq.com/msgrd?v=3&uin=2146594489&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
  }
  // 关闭
  close = () => {
    this.setState({ isForm: false });
  }
  render() {
    const { isForm, type, data } = this.state;
    return (
      <div id="detail" className="body-box">
        {/* {isForm && <FormComponent close={this.close} type={type} />} */}
        {!!data && (<AdvComponent cls="solveDetail" title={data.t} cont={data.pcont} ></AdvComponent>)}
        <div className="sup-box">
          <div className="sup-one">
            <h3>我们将面临的挑战</h3>
            <Accordion defaultActiveKey="0" className="acc-box" onChange={this.onChange}>
              {!!data && data.tabs.map((item, idx) => (
                <Accordion.Panel key={idx} header={<AccItem title={item.title} icon={item.icon} />}> <p> {item.content}</p> </Accordion.Panel>
              ))}
            </Accordion>
          </div>
          <div className="sup-two">
            <h3>{!!data && data.title}</h3>
            {!!data && data.content.map((item, idx) => (
              <div className="two-box" key={idx}>
                <div className="two-title">{item.title}</div>
                {item.cont.map((cont, index) => (
                  <p>{cont}</p>
                ))}
                {!!item.imgs && (
                  <div className="two-imgs flex-center wrap">
                    {item.imgs.map((img, i) => (
                      <div className="flex-col-6"><p><img src={require(`img/${img}`)} alt="" /></p></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="two-wth"><div className="btn btn-blur01" onClick={() => { this.change() }}>立即申请</div></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
