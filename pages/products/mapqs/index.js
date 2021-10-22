import Layout from "../../../src/layout/Layout";
import Hero from "./components/Hero";
import Faqs from "./components/Faqs";
import LiveView from "./components/LiveView";
import Content1 from "./components/Content1";
import ThreeSteps from "./components/ThreeSteps";
import Devices from "./components/Devices";
import Content2 from "./components/Content2";

function Index() {
    return (
        <Layout navLight navHoverColor="nav-blue-hover">
            <Hero/>
            <Content1/>
            <hr className='divider'/>
            <Content2/>
            <hr className='divider'/>
            <ThreeSteps/>
            <LiveView/>
            <Devices/>
            <Faqs/>
        </Layout>
    )
}

export default Index;