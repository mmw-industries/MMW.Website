import Layout from "../src/layout/Layout";
import Hero from "../src/pageComponents/jobs/Hero";
import Content1 from "../src/pageComponents/jobs/Content1";
import Faqs from "../src/pageComponents/jobs/Faqs";

const meta = {
    title: "MMW Stellenanzeigen",
    description: "Werde Teil unseres einzigartigen Teams und entwickle mit uns neuartige Technologien und Produkte.",
    keywords: "MMW, jobs, C#, .net core, react.js, vue.js, angular, AvaloniaUI, Cross Plattform",
    og_image: "https://mmw.industries/images/people-coding-meeting.jpg",
    og_url: "https://mmw.industries/jobs",
};

function Jobs() {
    return (
        <Layout navLight
                navHoverColor="nav-blue-hover"
                meta={meta}
        >
            <Hero/>
            <Content1/>
            <Faqs/>
        </Layout>
    )
}

export default Jobs;