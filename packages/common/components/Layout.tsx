import { css } from '@emotion/css';
import { ConfigProvider, Layout, Menu } from '@yui/ui';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import zhCN from 'antd/lib/locale/zh_CN';
import { IRouteProps } from 'umi';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Layout2 = ({route, routes, children, ...others }: IRouteProps) => {

  console.log('########-----(others):', others);


  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={css({ width: '100%', height: '100%', overflow: 'hidden' })}>
        <Header className={css({ backgroundColor: '#ccc' })}>找供应商</Header>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className={css({ padding: 12 })}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Layout2;
