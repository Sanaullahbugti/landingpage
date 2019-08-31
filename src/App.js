import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './components/Home/Home';
import { Layout, Row, Col, Icon, Button } from 'antd';
import CenteralPart from './components/centeral/CenteralPart';
import BelowCanter from './components/belowcenter/BelowCenter';
import Footer from './components/footer/Footer';

const { Content, Header } = Layout;
function App() {
	return (
		<Layout style={{ backgroundColor: "rgb(255,247,243)" }}>
			<Content style={{ minHeight: "100vh" }} >
				<Home />
				<CenteralPart />
				<BelowCanter />
				<Footer/>
			</Content>
		</Layout>
	);
}

export default App;
