import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@components/footer/footer';
import NewsComponent from './component/news';
import Product from './component/product';
import Componay from './component/componay';
import "./home.scss";

export interface NavType {
  title: string;
  icon: string;
  value?: string;
  link?: string;
};
export interface PropsType {

};

export default class Home extends React.Component<PropsType, any>{
  render() {
    return (
      <div id="home">
        <NewsComponent></NewsComponent>
        <Product ></Product>
        <Componay></Componay>
        <Footer></Footer>
      </div>
    )
  }
}
