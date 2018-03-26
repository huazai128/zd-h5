import * as React from 'react';
import './icon.scss';

export interface IconProps {
  imgUrl: string;
  title: string;
  ext?: string;
  cls?: string
}

export default class Icon<T> extends React.Component<IconProps, any> {
  constructor(props?: IconProps) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { imgUrl, title, ext = 'png', cls = "default" } = this.props;
    return (
      <div id="icon" className={cls}>
        <div className="flex-center img-box">
          <img src={require(`img/${imgUrl}.${ext}`)} />
        </div>
        <p>{title}</p>
      </div>
    )
  }
}