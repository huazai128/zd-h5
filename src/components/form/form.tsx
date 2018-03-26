import * as React from 'react';
import { createForm } from 'rc-form';
import { List, InputItem, Picker } from 'antd-mobile';
import { options } from './data';
import './form.scss';

export interface FormProps {
  form?: any;
  close:Function;
  type:number;
}

@createForm()
export default class FormComponent extends React.Component<FormProps, any> {
  constructor(props: FormProps) {
    super(props);
  }
  // 提交申请
  apply = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    const { close } = this.props;
    return (
      <div id="form">
        <div className="form-box flex-center">
          <div className="form-cont">
            <h3></h3>
            <List>
              <div className="form-group">
                <InputItem
                  {...getFieldProps('c_name'), {
                    rules: [
                      { required: true, message: '请输入公司名称' },
                    ]
                  }}
                  placeholder="请输入公司名称"
                  moneyKeyboardAlign="left"
                >公司名称</InputItem>
              </div>
              <div className="form-group">
                <Picker extra="请选择(可选)"
                  data={options}
                  {...getFieldProps('district', {
                    initialValue: ['北京市', '东城区', '']
                  })}>
                  <List.Item arrow="horizontal">公司所在省份</List.Item>
                </Picker>
              </div>
              <div className="form-group">
                <InputItem
                  {...getFieldProps('industry', {
                    rules: [
                      { required: true, message: '请输入行业' },
                    ]
                  })}
                  placeholder="请输入行业"
                  moneyKeyboardAlign="left"
                >行业</InputItem>
              </div>
              <div className="form-group">
                <InputItem
                  {...getFieldProps('name', {
                    rules: [
                      { required: true, message: '请输入您的真实姓名' },
                    ]
                  })}
                  placeholder="请输入您的真实姓名 "
                  moneyKeyboardAlign="left"
                >申请人姓名</InputItem>
              </div>
              <div className="form-group">
                <InputItem
                  {...getFieldProps('phone'), {
                    rules: [
                      { required: true, message: '请输入您的手机号码' },
                      { pattern: /^((1[3-8][0-9])+\d{8})$/, message: '请填写正确的手机号码' },
                      {
                        validator: (rule, value, callback) => {
                          if (/^((1[3-8][0-9])+\d{8})$/.test(value)) {
                          }
                          callback();
                        }
                      }
                    ]
                  }}
                  placeholder="请输入您的电话"
                  moneyKeyboardAlign="left"
                >申请人电话</InputItem>
              </div>
              <div className="form-group">
                <InputItem
                  {...getFieldProps('email'), {
                    rules: [
                      { required: true, message: '请输入您的邮箱' },
                      { pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, message: '请填写正确的邮箱' },
                      {
                        validator: (rule, value, callback) => {
                          if (/^((1[3-8][0-9])+\d{8})$/.test(value)) {

                          }
                          callback();
                        }
                      }
                    ]
                  }}
                  placeholder="请输入您的邮箱"
                  moneyKeyboardAlign="left"
                >申请人邮箱</InputItem>
              </div>
            </List>
            <div className="flex form-width">
              <div className="btn btn-blur01" onClick={(e) => { this.apply(e) }}>确认申请</div>
              <div className="btn btn-default" onClick={(e) => { close() }}>关闭</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}