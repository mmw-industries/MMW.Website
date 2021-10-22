import Layout from "../../src/layout/Layout";
import Hero from "./components/Hero";
import LastContent from "./components/LastContent";
import InfoSoftwareDevelopment from "./components/InfoSoftwareDevelopment";
import InfoGasMischAnalyse from "./components/InfoGasMischAnalyse";
import InfoGasSafety from "./components/InfoGasSafety";
import InfoMapQS from "./components/InfoMapQS";
import InfoService from "./components/InfoService";

const Index = () => {
    return (
        <Layout navLight navHoverColor="nav-blue-hover">
            <Hero/>
            {/*<Brands/>*/}
            <InfoMapQS/>
            <hr className='divider'/>
            <InfoGasMischAnalyse/>
            <hr className='divider'/>
            <InfoGasSafety/>
            <hr className='divider'/>
            <InfoService/>
            <InfoSoftwareDevelopment/>
            {/*<Devices/>*/}
            {/*<Statistics/>*/}
            <LastContent/>
        </Layout>
    );
};

export default Index;
