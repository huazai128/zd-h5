import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import Heads from './components/heads/head';

const Home = asyncComponent({
  resolve: () => System.import('views/home/home'),
})
const ProdectComponent = asyncComponent({
  resolve: () => System.import('views/product/product'),
})
const ProDetailComponent = asyncComponent({
  resolve: () => System.import('views/proDetail/detail'),
})
const SolveComponent = asyncComponent({
  resolve: () => System.import('views/solve/solve'),
})
const SolveDetailComponent = asyncComponent({
  resolve: () => System.import('views/solve-detail/detail'),
})
const News = asyncComponent({
  resolve: () => System.import('views/news/news'),
})
const NewsDatail = asyncComponent({
  resolve: () => System.import('views/news-detail/detail'),
})
const NewsLists = asyncComponent({
  resolve: () => System.import('views/news-lists/lists'),
})
const Recruit = asyncComponent({
  resolve: () => System.import('views/recruit/recruit'),
})
const Cloud = asyncComponent({
  resolve: () => System.import('views/cloud/cloud'),
})

class Routes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      path: ""
    }
  }
  componentDidMount() {
    this.eventRouter();
  }
  componentWillReceiveProps(nextProps) {
    this.eventRouter();
  }
  eventRouter = () => {
    const { pathname, search } = this.props.history.location;
    this.setState({
      path: pathname,
      page: search.split('=')[1]
    })
  }
  render() {
    const { path, page } = this.state;
    return (
      <div>
        <Heads path={path} page={page}></Heads>
        <div id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={ProdectComponent} />
            <Route exact path="/product-detail" component={ProDetailComponent} />
            <Route exact path="/solve" component={SolveComponent} />
            <Route exact path="/solve-detail" component={SolveDetailComponent} />
            <Route exact path="/news-detail/:id" component={NewsDatail} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news-lists/:id" component={NewsLists} />
            <Route exact path="/recruit" component={Recruit} />
            <Route exact path="/cloud" component={Cloud} />
          </Switch>
        </div>
      </div>
    );
  }
}
// 传递props 用于监听路由的变化
const Wrap = withRouter(props => <Routes {...props} />)
let browserRedirect = () => {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = String(sUserAgent.match(/ipad/i)) == "ipad";
  var bIsIphoneOs = String(sUserAgent.match(/IPHONE os/i)) == "iphone os";
  var bIsMidp = String(sUserAgent.match(/midp/i)) == "midp";
  var bIsUc7 = String(sUserAgent.match(/rv:1.2.3.4/i)) == "rv:1.2.3.4";
  var bIsUc = String(sUserAgent.match(/ucweb/i)) == "ucweb";
  var bIsAndroid = String(sUserAgent.match(/android/i)) == "android";
  var bIsCE = String(sUserAgent.match(/windows ce/i)) == "windows ce";
  var bIsWM = String(sUserAgent.match(/windows mobile/i)) == "windows mobile";
  if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
    window.location.href = "http://www.appstest.cn/";
  } else {
    ReactDOM.render(
      <Router>
        <Wrap />
      </Router>,
      document.getElementById('root') as HTMLDivElement
    );
  }
}
browserRedirect();
