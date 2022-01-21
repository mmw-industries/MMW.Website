import Layout from "../src/layout/Layout";
import React from "react";

const meta = {
    title: "Vision",
    description: "Vision der MMW Analytics Solutions GmbH.",
    keywords: "MMW, Industries, MMW Industries",
    og_image: "https://mmw.industries/images/data-protection.jpg",
    og_url: "https://mmw.industries/vision",
};

function Vision() {

    return (
        <Layout navHoverColor="nav-blue-hover tra-grey-hover"
                meta={meta}
                singlePage
        >
            <section
                id="mission"
                className="inner-page-hero "
            >
                <div className="terms-title text-center">
                    <h2 className="h2-md">Unsere Vision</h2>
                </div>
                <div className="">
                    <div className="row d-flex ">
                        <div className="col-lg-1 col-md-0"/>
                        <div className="col-12 col-md-12 col-lg-5">
                            <div className="txt-block left-column wow fadeInRight">
                                <div className="txt-box">
                                    <h3 className="h2-md">
                                        Unser Leitbild
                                    </h3>
                                    <p>
                                        Den Maßstab für diese Qualität setzt der Kunde, sein Urteil über unsere
                                        Leistungsfähigkeit ist maßgebend.
                                    </p>
                                    <p>
                                        Die Fehlervermeidung geht uns vor der Fehlerbeseitigung. Dies wird vorwiegend
                                        durch erfahrene, geschulte und einsatzbereite Mitarbeiter erreicht, deren Aus-
                                        und Weiterbildung sowie eine korrekte Behandlung der Grundstein dafür ist, sie
                                        als großes Kapital im Unternehmen zu halten, sowie mit ihnen bestmögliche
                                        Leistungen zu erzielen.
                                        Da wir höchste Ansprüche in unsere eigenen Leistungen, sowohl in
                                        Termingenauigkeit als auch in der Qualität setzen, verlangen wir dies auch von
                                        unseren Lieferanten und Parntern.
                                    </p>
                                    <p>
                                        Es werden vorzugsweise nur solche Professionisten beschäftigt, welche von sich
                                        aus ähnliche Ziele verfolgen, und den entsprechenden Anforderungen gerecht
                                        werden.
                                        Um am Markt bestehen zu können, sehen wir die Weiterentwicklung im Unternehmen,
                                        die Anpassung an sich ändernde Rahmenbedingungen, sowie die Umsetzung neuester
                                        Erkenntnisse und Techniken als unerlässlich.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 order-first order-md-first order-lg-first">
                            <div className="img-block right-column wow fadeInLeft">
                                <img
                                    className="img-fluid"
                                    style={{borderRadius: '0px 20px 20px 0px'}}
                                    src="/images/people-team-teamwork-group-support-together-unity-community-cooperation-hand-friendship-partnership_t20_Wg3XOg.jpg"
                                    alt="content-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='divider'/>
            <section
                id="goals"
                className="inner-page-hero division"
            >
                <div className="">
                    <div className="row d-flex ">
                        <div className="col-lg-1 col-md-0"/>
                        <div className="col-12 col-md-12 col-lg-5">
                            <div className="txt-block left-column wow fadeInRight">
                                <div className="txt-box">
                                    <h3 className="h2-md">
                                        Unser Ziel
                                    </h3>
                                    <p>
                                        Das oberste Ziel unseres Unternehmens ist es, Dienstleistungen und Produkte (von
                                        einfachen Ersatzteilen bis hin zu Inline-Dichtheitsprüfanlagen oder komplexen
                                        Individual Software-Lösungen) in einer Qualität herzustellen, welche
                                        uns erlaubt, mit den Besten der Branche in Konkurrenz zu treten. Dabei ist es
                                        uns ein besonderes Anliegen, nicht nur Produkte zu verkaufen sondern
                                        Gesamtlösungen welche Ihrem Unternehmen den entsprechenden Vorteil bringen.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 order-first order-md-first order-lg-first">
                            <div className="img-block right-column wow fadeInLeft">
                                <img
                                    className="img-fluid"
                                    style={{borderRadius: '0px 20px 20px 0px'}}
                                    src="/images/technical-support-operator-with-headset-working-at-laptop-and-computer-business-people-talking-on_t20_kR9op4.jpg"
                                    alt="content-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Vision;