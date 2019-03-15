import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Rts from './components/route/route'
import SliderNav from './components/slider/sliderNav'

const {
  Header, Content, Footer, Sider,
} = Layout;


class App extends Component {
  state = {
    collapsed: false
  }
  toggleSlide() {   // 是否收起左侧列表
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout style={{ minHeight:'100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={ this.state.collapsed }
        >
          <div className="logo">csdn qiphon</div>
          <SliderNav />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 0 0 20px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={ev =>this.toggleSlide()}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <Rts />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
