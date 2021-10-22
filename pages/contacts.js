import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const contacts = () => {
    return (
        <Layout
            btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
            singlePage
        >
            <section
                id="contacts-2"
                className="bg-snow wide-50 inner-page-hero contacts-section division"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title title-02 mb-80">
                                <h2 className="h2-xs">
                                    {`Have a question? Need help? Don't hesitate, drop us a line`}
                                </h2>
                                <p className="p-xl">
                                    Gerne beraten wir Sie bla bla bal
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="form-holder">
                                <form
                                    name="contactform"
                                    className="row contact-form"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="col-md-12 input-subject">
                                        <p className="p-lg">Diese Frage bezieht sich auf: </p>
                                        <select
                                            className="form-select subject"
                                            aria-label="Default select example"
                                        >
                                            <option selected>This question is about...</option>
                                            <option>Registering/Authorising</option>
                                            <option>Using Application</option>
                                            <option>Troubleshooting</option>
                                            <option>Backup/Restore</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    {/* Contact Form Input */}
                                    <div className="col-md-12">
                                        <p className="p-lg">Ihr Name: </p>
                                        <span>Bitte geben Sie Ihren richtigen Namen ein: </span>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control name"
                                            placeholder="Your Name*"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Ihre Email Address: </p>
                                        <span>
                                          Bitte überprüfen Sie Ihre E-Mail-Adresse sorgfältig auf ihre Richtigkeit
                                        </span>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control email"
                                            placeholder="Email Address*"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Erläutern Sie Ihre Frage im Detail: </p>
                                        <span>
                                          Your OS version, OLMO version &amp; build, steps you did.
                                          Be VERY precise!
                                        </span>
                                        <textarea
                                            className="form-control message"
                                            name="message"
                                            rows={6}
                                            placeholder="I have a problem with..."
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12 mt-15 form-btn text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-skyblue tra-grey-hover submit"
                                        >
                                           Anfrage senden
                                        </button>
                                    </div>
                                    <div className="col-lg-12 contact-form-msg">
                                        <span className="loading"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default contacts;
