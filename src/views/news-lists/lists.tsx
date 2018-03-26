import * as React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/footer/footer';
import { get, imgUrl } from 'js/api/api';
import { Toast } from 'antd-mobile'
import moment from 'moment';
import "./lists.scss";

interface NewsListsState {
  title: string;
  result: any;
  column: number;
  flag: boolean;
  page: number;
  data: Array<any>;
}

export default class NewsLists extends React.Component<any, NewsListsState>{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      result: [],
      column: 1,
      flag: false,
      page: 1,
      data: []
    }
  }
  componentDidMount() {
    const { params } = this.props.match;
    if (params && params.id) {
      let title = "";
      switch (Number(params.id)) {
        case 1:
          title = "公司动态"
          break;
        case 2:
          title = '行业新闻'
          break;
        case 3:
          title = '科技资讯'
          break;
      }
      this.setState({
        title: title,
        column: Number(params.id)
      })
      this.getNews(1, params.id);
    }
  }
  // 加载更多
  loadMore = () => {
    const { flag, page, result, column } = this.state;
    if (flag) return false;
    if (page >= result.pagination.total_page) {
      Toast.info("没有更多数据加载");
      return false;
    }
    this.setState({
      flag: true,
    })
    this.getNews(page, column);
  }
  // 获取数据
  getNews = (page: number = 1, column: number) => {
    const params = {
      column: column,
      page: page,
      public: 1
    }
    get("/news", params).subscribe((res) => {
      this.setState({
        result: res.result,
        flag: false,
        page: (page + 1),
        data: [...this.state.data, ...res.result.data]
      })
    })
  }
  render() {
    const { title, result, data } = this.state;
    return (
      <div id="lists" className="body-box">
        <div className="news-cont">
          <div className="news-com">
            <div className="flex flex-vcenter news-title">
              <h3>{title}</h3>
            </div>
            {data.map((item, index) => (
              <Link to={`/news-detail/${item.id}`}>
                <div className="news-item">
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
          <div className="btn btn-more" onClick={() => { this.loadMore() }}>加载更多</div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
