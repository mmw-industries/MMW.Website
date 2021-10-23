import Layout from "../src/layout/Layout";
import Hero from "../src/pageComponents/home/Hero";
import InfoMapQS from "../src/pageComponents/home/InfoMapQS";
import InfoGasMischAnalyse from "../src/pageComponents/home/InfoGasMischAnalyse";
import InfoGasSafety from "../src/pageComponents/home/InfoGasSafety";
import InfoService from "../src/pageComponents/home/InfoService";
import InfoSoftwareDevelopment from "../src/pageComponents/home/InfoSoftwareDevelopment";
import LastContent from "../src/pageComponents/home/LastContent";

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
