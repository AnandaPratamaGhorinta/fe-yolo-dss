import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Button, Layout } from "antd";
import Sidebar from "./uiComponent/Sidebar";
import DataKos from "./menu/dataKos/DataKos";
import Kriteria from "./menu/kriteria/Kriteria";
import Penilaian from "./menu/penilaian/Penilaian";
import ProcessXGBOOST from "./menu/processXGBOOST/ProcessXGBOOST";
import Login from "./public/login/Login";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { appStyles } from "./app.style";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Dashboard from "./menu/dashboard/Dashboard";

const useStyles = createUseStyles(appStyles);

const { Content, Header } = Layout;

const App = () => {
  const classes = useStyles();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      {!isLoginPage && (
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar collapsed={collapsed} />
          <Layout>
            <Header className={classes.header}>
              {/* Replace with your logo path */}
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={handleCollapseToggle}
              />
              <div className={classes.userDetailContainer}>
                <h1>USER 01</h1>
                <img
                  src="/user.png"
                  alt="User Icon"
                  className={classes.userIcon}
                />
              </div>
            </Header>
            <Content className={classes.content}>
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                <Routes>
                  <Route path="/" element={<></>} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/data-kos" element={<DataKos />} />
                  <Route path="/kriteria" element={<Kriteria />} />
                  <Route path="/penilaian" element={<Penilaian />} />
                  <Route path="/process-xgboost" element={<ProcessXGBOOST />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
