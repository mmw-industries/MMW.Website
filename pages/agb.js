import Layout from "../src/layout/Layout";
import React from "react";

const meta = {
    title: "Allgemeine Geschäftsbedingungen",
    description: "Aktuell gültigen Geschäftsbedingungen der MMW Analytics Solutions GmbH.",
    keywords: "MMW, Industries, MMW Industries",
    og_image: "https://mmw.industries/images/agbs.jpg",
    og_url: "https://mmw.industries/",
};

function Agb() {
    return (
        <Layout navHoverColor="nav-blue-hover"
                meta={meta}
        >
            <section id="1" className="bg-scroll hero-section division">
                <div className="container mt-100 pt-50 mb-100 col-7">
                    <h1>Allgemeine Geschäftsbedingungen</h1>
                    <p>Nachfolgend finden Sie die aktuell gültigen AGBs der MMW Analytics Solutions GmbH für
                        Unternehmergeschäfte.</p>
                    <a href="/files/AGB-Analytics-Solutions-GmbH.pdf" target="_href"
                       className="btn btn-blue tra-grey-hover mt-30">
                        AGB's lesen
                    </a>
                </div>
            </section>
            <div style={{height: 500}}>

            </div>
        </Layout>
    )
}

export default Agb;