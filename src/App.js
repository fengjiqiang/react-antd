// 创建“外壳”组件App
import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>hello antd</h2>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}
