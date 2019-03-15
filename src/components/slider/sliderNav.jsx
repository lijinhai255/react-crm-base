import React from 'react'
import CustomMenu from "../menus/menu";
import { inject, observer} from 'mobx-react'

@inject("Store") @observer
class SliderNav extends React.Component {
  render() {
    const menus = [
      {
        title: '任务管理',
        icon: 'dashboard',
        key: '/',
      },
      //  {
      //   title: '任务详情',
      //   icon: 'dashboard',
      //   key: '/taskslist'
      // },
      {
        title: "用户管理",
        icon: 'database',
        subs: [
          {
            title: '用户列表',
            icon: 'database',
            key: '/userlist',
          },
          // {
          //   title: '我的用户',
          //   icon: 'contacts',
          //   key: '/personal',
          // }
        ]
      }
    ]
    return (
      <React.Fragment>12315
        <CustomMenu menus={menus} />
      </React.Fragment>
    )
  }
}

export default SliderNav