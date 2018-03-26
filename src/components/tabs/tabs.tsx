import * as React from 'react';
import './tabs.scss';

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
      <div id="tabs">
        <h3><span>{ title }</span></h3>
      </div>
    )
  }
}