import Link from "next/link";

function Faqs() {
    return (
        <section id="faqs-2" className="wide-60 bg-snow faqs-section division">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-title title-01 mb-80">
                            <h2 className="h2-md">Noch Fragen?</h2>
                            {/*<p className="p-xl">*/}
                            {/*    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor*/}
                            {/*    primis a libero tempus, blandit and cursus varius and magnis*/}
                            {/*    sapien*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
                {/* FAQs-2 QUESTIONS */}
                <div className="faqs-2-questions">
                    <div className="row row-cols-1 row-cols-lg-2">
                        {/* QUESTIONS HOLDER */}
                        <div className="col">
                            <div className="questions-holder pr-15">
                                {/* QUESTION #1 */}
                                <div className="question wow fadeInUp">
                                    {/* Question */}
                                    <h5 className="h5-md">
                                        Wie kann ich meine bestehenden Gerät verbinden?
                                    </h5>
                                    {/* Answer */}
                                    <p className="p-lg">
                                        Folgende Schnittstellen stehen Ihnen bei dem MapQS Interface zur Verfügung:
                                    </p>
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p className="p-lg">
                                                6x 4-20mA
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="p-lg">
                                                2x 0-10 V
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="p-lg">
                                                4x Digital Eingänge
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="p-lg">
                                                1x RS-232
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="p-lg">
                                                1x Ethernet
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                {/* QUESTION #2 */}
                                <div className="question wow fadeInUp">
                                    {/* Question */}
                                    <h5 className="h5-md">
                                        Wie kann ich mir die aktuellen Messwerte anschauen ?
                                    </h5>
                                    {/* Answer */}
                                    <p className="p-lg">
                                        Dank des integrierten Web-Interfaces, kann von jedem modernen
                                        Webbrowser auf das MapQS-Interface zugegriffen werden.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END QUESTIONS HOLDER */}
                        {/* QUESTIONS HOLDER */}
                        <div className="col">
                            <div className="questions-holder pl-15">
                                {/* QUESTION #4 */}
                                <div className="question wow fadeInUp">
                                    {/* Question */}
                                    <h5 className="h5-md">
                                        Können auch Grenzwerte definiert werden ?
                                    </h5>
                                    {/* Answer */}
                                    <p className="p-lg">
                                        Ja, pro Messkanal können Grenzwerte definiert werden.
                                        Das MapQS Interface verfügt auch über ein potential-freies Relai, welches im
                                        Alarmfall geschalten wird.
                                    </p>
                                </div>
                                {/* QUESTION #3 */}
                                <div className="question wow fadeInUp">
                                    {/* Question */}
                                    <h5 className="h5-md">
                                        In welchem Zeitinterval werden die Daten aufgezeichnet ?
                                    </h5>
                                    {/* Answer */}
                                    <p className="p-lg">
                                        Das MapQS-Interface fragt die Analogen sowie Digitalen Schnittstellen bis zu 200
                                        mal pro Sekunde ab.
                                        Anschlißend werden die gemittelten Messwerte pro Sekunde im Sekunden-Rythmus im
                                        internen Speicher gespeichert.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END QUESTIONS HOLDER */}
                    </div>
                    {/* End row */}
                </div>
                {/* END FAQs-2 QUESTIONS */}
                {/* MORE QUESTIONS BUTTON */}
                <div className="row">
                    <div className="col">
                        <div className="more-questions">
                            <h5 className="h5-sm">
                                Noch nicht alle Fragen beantwortet?
                                <Link href="/contacts">
                                    <a> Kontakt aufnehmen</a>
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    )
}

export default Faqs;