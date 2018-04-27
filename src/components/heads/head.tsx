import * as React from 'react';
import { List, Accordion } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { empty } from 'rxjs/observable/empty';
import { map, filter, merge } from 'rxjs/operators';
import './head.scss';

export interface HeadType {
  title: string;
  children?: HeadType[];
  icon?: string;
  link?: string
}

export interface HeadState<T> {
  menus: HeadType[];
  flag: boolean;
}
interface HeadProps<T> {
  path: string;
  page: string;
}

export default class Heads<T> extends React.Component<HeadProps<T>, HeadState<T>> {
  constructor(props: HeadProps<T>) {
    super(props);
    this.state = {
      menus: [
        {
          title: "产品与服务", icon: 'icon01', children: [
            { title: "软件测试", link: '/product' },
            { title: "硬件测试", link: '/product' },
            { title: "认证", link: '/product' },
          ]
        },
        {
          title: "解决方案", icon: 'icon02', children: [
            { title: "APP软件测试解决方案", link: '/solve' },
            { title: "智能硬件测试解决方案", link: '/solve' },
            { title: "教育行业测试解决方案", link: '/solve' },
            { title: "运营商测试解决方案", link: '/solve' },
          ]
        },
        { title: "新闻动态", icon: 'icon03', link: '/news' },
        { title: "关于我们", icon: 'icon04', link: '/recruit' },
      ],
      flag: false
    }
  }
  componentDidMount() {
    let node = this.refs.navs as HTMLDivElement;
    let content = document.querySelector("#content") as HTMLDivElement;
    const touchEvent = fromEvent(content, 'touchstart');
    const scrollEvent = fromEvent(document, 'scroll');
    empty().pipe(
      merge(touchEvent, scrollEvent),
      filter(() => node.classList.contains("navs-box")),
    ).subscribe((res) => {
      node.classList.remove("navs-box");
    })
  }

  // 显示导航
  menuTabs = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let node = this.refs.navs as HTMLDivElement;
    node.classList.contains("navs-box") ? node.classList.remove("navs-box") : node.classList.add("navs-box");
  }
  render() {
    const { menus } = this.state;
    const { path, page } = this.props;
    return (
      <div id="heads">
        <div className="flex jc-between navs-head">
          <Link to="/">
            <div className="logo flex-center"><img src={require("img/logo.png")} /></div>
          </Link>
          <div className="navs" onClick={(e) => { this.menuTabs(e); }}></div>
        </div>
        <div className="navs-lists" ref="navs">
          {menus.map((item, index) => (
            !!item.children ? (<Accordion className="my-accordion">
              <Accordion.Panel header={<div className={`icon ${item.icon}`}>{item.title}</div>}>
                <List className="my-list">
                  {item!.children.map((child, idx) => (
                    <List.Item key={idx} className={(Object.is(child.link, path) && Object.is(Number(page), idx)) ? 'active' : ''} onClick={(e) => { this.menuTabs(e) }}><Link to={`${child.link}?page=${idx}`}>{child.title}</Link></List.Item>
                  ))}
                </List>
              </Accordion.Panel>
            </Accordion>) : (<div className={`icon head-link ${item.icon} ${item.link === path ? 'active' : ''}`} onClick={(e) => { this.menuTabs(e) }}><Link to={item.link}>{item.title}</Link></div>)
          ))}
          <div className="head-top">
            <div className="btn btn-blur">测试者社区</div>
          </div>
        </div>
      </div>
    );
  }
}