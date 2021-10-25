import Layout from "../../../src/layout/Layout";
import Hero from "../../../src/pageComponents/products/mapqs/Hero";
import Faqs from "../../../src/pageComponents/products/mapqs/Faqs";
import LiveView from "../../../src/pageComponents/products/mapqs/LiveView";
import Content1 from "../../../src/pageComponents/products/mapqs/Content1";
import ThreeSteps from "../../../src/pageComponents/products/mapqs/ThreeSteps";
import Devices from "../../../src/pageComponents/products/mapqs/Devices";
import Content2 from "../../../src/pageComponents/products/mapqs/Content2";

const meta = {
    title: "MapQS - Die neue Dimension in der Qualitätssicherung",
    description: "MapQS - Noch nie war die digitale Dokumentation in der Qualitätssicherung so einfach und effizient wie mit dem MapQS-System von MMW Analytics Solutions.",
    keywords: "MapQS, digitale, Dokumentation, Qualitätssicherung",
    og_image: "https://mmw.industries/images/tablet-01.png",
    og_url: "https://mmw.industries/products/mapqs",
};

function Index() {
    return (
        <Layout navLight
                navHoverColor="nav-blue-hover"
                meta={meta}
        >
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