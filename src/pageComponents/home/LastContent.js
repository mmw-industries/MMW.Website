import Link from "next/dist/client/link";

function LastContent() {
    return (
        <section id="cta-4" className="cta-section division">
            <div className="cta-4-holder bg-whitesmoke">
                <div className="container pt-100">
                    <div className="bg-white cta-4-wrapper">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-7 col-lg-8">
                                <div className="cta-4-txt">
                                    <h4 className="h4-lg">
                                       Wir freuen uns über Ihre Konktaktaufnahme
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-end">
                                    <div className="cta-4-btn text-center">
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
                                        <p>oder über das</p>
                                        <Link href="/contacts">
                                            <a className="btn btn-blue tra-grey-hover mt-10">
                                                Kontaktformular
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LastContent;