import * as React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/footer/footer';
import { get, imgUrl } from 'js/api/api';
import { Toast } from 'antd-mobile'
import moment from 'moment';
import "./detail.scss";

export interface NewsDatailState {
  result: any;
};

export default class NewsDatail extends React.Component<any, NewsDatailState>{
  constructor(props) {
    super(props);
    this.state = {
      result: null
    }
  }
  componentDidMount() {
    const { params } = this.props.match;
    if (params && params.id) {
      get(`/news/${params.id}`).subscribe((res) => {
        this.setState({
          result: res.result,
        })
      })
    }
  }
  render() {
    const { result } = this.state;
    return (
      !!result && (
        <div id="news-one" className="body-box">
          <div className="detail-box">
            <div className="detail-head">
              <h3>{result.title}</h3>
              <p>{result.auth} • 发表于：{moment(result.create_at).format("YYYY-MM-DD HH:mm:ss")} </p>
              <p>更新于：{moment(result.update_at).format("YYYY-MM-DD HH:mm:ss")}</p>
            </div>
            <div dangerouslySetInnerHTML={{
              __html: result.content.replace(/\d+(\.\d+)?px/g, function (s, t) {
                s = s.replace('px', '');
                var value = Number(s) * 0.02;
                return value + 'rem ';
              })
            }} className="content" >
            </div>
          </div>
          <Footer></Footer>
        </div>
      )
    )
  }
}
