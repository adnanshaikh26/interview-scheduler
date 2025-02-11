import React, { useState } from "react";
import {
  CalendarOutlined,
  FormOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const RootElement = () => {
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);

  const [menuList] = useState([
    {
      key: "/",
      label: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      key: "/add-edit-interview",
      label: "Add Interview",
      icon: <FormOutlined />,
    },
    {
      key: "/calendar",
      label: "Calendar",
      icon: <CalendarOutlined />,
    },
  ]);

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
        theme="light"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Title level={5}>LOGO</Typography.Title>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["home"]}
          items={menuList}
          onClick={(e) => {
            if (e.disabled) {
              return; // Prevent navigation if the menu item is disabled
            }

            const { key } = e;
            console.log(`Key: ${key}`);
            navigate(`${key}`);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Typography.Title level={4} style={{ marginBottom: "25px" }}>
            Interview Scheduler
          </Typography.Title>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          <section className="mx-auto max-w-[1400px]">
            <Outlet />
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootElement;
