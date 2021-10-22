import Layout from "../../src/layout/Layout";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Statistics from "./components/Statistics";
import LastContent from "./components/LastContent";
import ContentXYZ from "./components/ContentXYZ";
import InfoGasMischAnalyse from "./components/InfoGasMischAnalyse";
import InfoGasSafety from "./components/InfoGasSafety";
import Devices from "./components/Devices";

const Index = () => {
    return (
        <Layout navLight navHoverColor="nav-blue-hover">
            <Hero/>
            <Brands/>
            <hr className='divider'/>
            <InfoGasMischAnalyse/>
            <hr className='divider'/>
            <InfoGasSafety/>
            <ContentXYZ/>
            <Devices/>
            <Statistics/>
            <LastContent/>
        </Layout>
    );
};

export default Index;
