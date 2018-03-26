import * as React from 'react';
import './title.scss';

interface TitleProps{
  title:string;
}

export default class Title extends React.Component<TitleProps, any> {
  constructor(props?: any) {
    super(props);
  }
  render() {
    const { title } =  this.props; 
    return (
      <div id="title">
        <h3><span>{ title }</span></h3>
      </div>
    )
  }
}