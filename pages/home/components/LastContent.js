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
                                       Noch Fragen oder bla bla bla :D
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-end">
                                    <div className="cta-4-btn text-center">
                                        <Link href="/pricing">
                                            <a className="btn btn-blue tra-grey-hover">
                                                Kontakt aufnehmen
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