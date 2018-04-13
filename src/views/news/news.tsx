import * as React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/footer/footer';
import { combineLatest } from 'rxjs/observable/combineLatest';
import AdvComponent from '@components/adv/adv';
import { get, imgUrl } from 'js/api/api';
import moment from 'moment';
import "./news.scss";

const NewsItem = ({ title, column, datas }) => (
  (!!datas.length) && (
    <div className="news-com">
      <div className="flex flex-vcenter jc-between news-title">
        <h3>{title}</h3>
        <Link to={`/news-lists/${column}`}><span>查看更多 >></span></Link>
      </div>
      {datas.map((item, index) => (
        <Link to={`/news-detail/${item.id}`}>
          <div className="news-item" key={index}>
            <img src={`${imgUrl}${item.murl}`} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.auth} • 发表于：{moment(item.create_at).format("YYYY-MM-DD HH:mm:ss")} • {item.origin}</p>
              <p>{moment(item.update_at).format("YYYY-MM-DD HH:mm:ss")}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
)
const lists = [
  { title: "公司动态", column: 1 },
  { title: "行业新闻", column: 2 },
  { title: "科技资讯", column: 3 },
]
export default class News extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }
  componentDidMount() {
    const params = {
      pre_page: 2, public: 1
    }
    combineLatest(
      get("/news", { column: 1, ...params }),
      get("/news", { column: 2, ...params }),
      get("/news", { column: 3, ...params }))
      .subscribe((res) => {
        this.setState({
          result: res
        })
      })
  }
  render() {
    const { result } = this.state;
    return (
      <div id="news" className="body-box">
        <AdvComponent cls="news_bg" title="让世界因品质而美好为移动互联网产业保驾护航" flag={false}></AdvComponent>
        <div className="news-cont">
          {lists.map((item, index) => (
            <NewsItem title={item.title} column={item.column} key={index} datas={result.length > 0 ? result[index].result.data : []}></NewsItem>
          ))}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
