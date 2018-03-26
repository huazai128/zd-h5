import * as React from 'react';
import { Link } from 'react-router-dom';
import "./component.scss";

interface IconProps {
  datas:Array<any>;
  idx:number;
}

export default class IconComponent extends React.Component<IconProps, any>{
  constructor(props:IconProps) {
    super(props);
  }
  render() {
    const { datas,idx } = this.props;
    return (
      <div id="comp-box" >
        <div className="flex wrap flex-hcenter">
              {datas.map((list, index) => (
                <div className={ `flex-col-${ idx } solve-item` } key={index}>
                  <div className="solve-cont">
                    <img src={require(`img/${list.url}.png`)} />
                    <p key={ idx }>{list.cont}</p>
                  </div>
                </div>
              ))}
            </div>
      </div>
    )
  }
}