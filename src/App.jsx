// 创建“外壳”组件App
import React, { Component } from 'react'
// ConfigProvider全局化配置
import {
  Button, DatePicker, version, ConfigProvider, message, Alert
} from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  state = {
    date: ''
  }

  handleChange = (value) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`)
    this.setState({ date: value })
  }

  render() {
    const { date } = this.state
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          antd version:
          {version}
        </h1>
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
        <ConfigProvider locale={zhCN}>
          <div style={{ margin: '20px auto' }}>
            <DatePicker onChange={this.handleChange} />
            <div style={{ width: 400, margin: '20px auto' }}>
              <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
            </div>
          </div>
        </ConfigProvider>
      </div>
    )
  }
}
