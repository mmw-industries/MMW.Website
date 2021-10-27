import Layout from "../src/layout/Layout";
import Hero from "../src/pageComponents/home/Hero";
import InfoMapQS from "../src/pageComponents/home/InfoMapQS";
import InfoGasMischAnalyse from "../src/pageComponents/home/InfoGasMischAnalyse";
import InfoGasSafety from "../src/pageComponents/home/InfoGasSafety";
import InfoService from "../src/pageComponents/home/InfoService";
import InfoSoftwareDevelopment from "../src/pageComponents/home/InfoSoftwareDevelopment";
import LastContent from "../src/pageComponents/home/LastContent";
import Brands from "../src/pageComponents/home/Brands";

const meta = {
    title: "MMW Analytics Solutions ihr Spezialist für ",
    description: "MapQS, Gasverfahrenstechnik - Prozessanalytik, Gassicherheitstechnik, Servicedienstleistungen, individuelle Softwareentwicklung",
    keywords: "MapQS, Gasverfahrenstechnik - Prozessanalytik, Gassicherheitstechnik, Servicedienstleistungen, individuelle Softwareentwicklung",
    og_image: "https://mmw.industries/images/factory-worker-service.jpg",
    og_url: "https://mmw.industries/",
};

const Index = () => {
    return (
        <Layout navLight navHoverColor="nav-blue-hover" meta={meta}>
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
            <LastContent/>
        </Layout>
    );
};

export default Index;
