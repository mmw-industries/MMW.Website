import Layout from "../src/layout/Layout";

const meta = {
    title: "Impressum",
    description: "Impressum der MMW Analytics Solutions GmbH.",
    keywords: "MMW, Industries, MMW Industries",
    og_image: "https://mmw.industries/impressum.jpg",
    og_url: "https://mmw.industries/",
};

function Impressum() {
    return (
        <Layout navHoverColor="nav-blue-hover"
                meta={meta}
        >
            <section id="1" className="bg-scroll hero-section division">
                <div className='container col-7'>
                    <div className="row d-flex align-items-center mt-100 pt-50">
                        <h2>Impressum</h2>
                        <p>
                            Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63
                            Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-50">
                        <h1>MMW Analytics Solutions GmbH</h1>
                        <p>
                            Aredstraße 11/8<br/>
                            2544 Leobersdorf<br/>
                            Österreich<br/>
                        </p>
                        <p>
                            Geschäftsführer: Markus Wenzl & Michael Wenzl<br/>
                            FN 541180d f Landesgericht Wiener Neustadt<br/>
                            UID: ATU76052968<br/>
                            EORI: ATEOS1000116313<br/>
                            GLN: 9110029198075<br/>
                        </p>
                        <p style={{paddingTop: 10}}>
                            <b>
                                Tel.:
                            </b>
                            <a href="tel:+43225620442"
                               style={{color: 'darkblue', marginLeft: 10}}
                            >
                                <b>
                                    +43 (0)2256 20442
                                </b>
                            </a>
                        </p>
                        <p>
                            <b>
                                E-Mail:
                            </b>
                            <a href="mailto:office@mmw.industries"
                               style={{color: 'darkblue', marginLeft: 10}}
                            >
                                <b>
                                    office@mmw.industries
                                </b>
                            </a>
                        </p>
                        <h6 style={{marginTop: 20}}>
                            Bankverbindung:
                        </h6>
                        <p>
                            Bank: Sparkasse Wiener Neustadt<br/>
                            IBAN: AT05 2026 7020 0014 5405<br/>
                            BIC: WINSATWNXXX
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-50">
                        <h2>Tätigkeitsbereich</h2>
                        <p>
                            GISA: 31594738 | Mechatroniker für Elektromaschinenbau und Automatisierung<br/>
                            GISA: 31567527 | Dienstleistung in der Automatischen Datenverarbeitung und
                            Informationstechnik<br/>
                            GISA: 31567695 | Handelsgewerbe mit Ausnahme der reglementierten Handelsgewerbe<br/>
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-50">
                        <h2>Verleihungsstaat</h2>
                        <p>
                            Österreich
                        </p>
                    </div>
                </div>
                <div className='container col-7'>
                    <div className="row d-flex align-items-center pt-50">
                        <h2>Datenschutzerklärung</h2>
                        <p>
                            <a href="/privacy"
                               style={{color: 'darkblue'}}>
                                Hier gelangen Sie zu den Datenschutzerklärungen.
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Impressum;