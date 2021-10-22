import Layout from "../src/layout/Layout";

function Impressum() {
    return (
        <Layout navHoverColor="nav-blue-hover">
            <section id="1" className="bg-scroll hero-section division">
                <div className='container'>
                    <div className="row d-flex align-items-center mt-100 pt-50">
                        <h2>Impressum</h2>
                        <p>
                            Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63
                            Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
                        </p>
                    </div>
                </div>
                <div className='container'>
                    <div className="row d-flex align-items-center pt-50">
                        <h1>MMW Analytics Solutions GmbH</h1>
                        <p>
                            Aredstraße 11/8<br/>
                            2544 Leobersdorf<br/>
                            Österreich<br/>
                            Firmenbuch: FN 541180d f Landesgericht Wiener Neustadt<br/>
                            UID: ATU76052968<br/>
                            Geschäftsführer: Markus Wenzl & Michael Wenzl<br/>
                        </p>
                        <p style={{paddingTop: 40}}>
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
                    </div>
                </div>
                <div className='container'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Tätigkeitsbereich</h2>
                        <p>
                            Handel und Dienstleistung mit Geräten der Prozessmesstechnik<br/>
                            Dienstleistung in der Automatischen Datenverarbeitung und Informationstechnik<br/>
                            Mechatroniker für Elektromaschinenbau und Automatisierung<br/>
                        </p>
                    </div>
                </div>
                <div className='container'>
                    <div className="row d-flex align-items-center pt-100">
                        <h2>Verleihungsstaat</h2>
                        <p>
                           Österreich
                        </p>
                    </div>
                </div>
                <div className='container'>
                    <div className="row d-flex align-items-center pt-100">
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