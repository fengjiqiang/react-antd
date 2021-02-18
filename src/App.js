// 创建“外壳”组件App
import React, { Component } from 'react'
import { Button, DatePicker, version } from 'antd'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          antd version:
          {version}
        </h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    )
  }
}
