import Layout from "../src/layout/Layout";
import {useState} from "react";
import axios from "axios";

const meta = {
    title: "Kontakformular",
    description: "Nehmen Sie mit einem unserer Spezialisten von MMW Analytics Solutions GmbH Kontakt auf.",
    keywords: "MMW, Industries, MMW Industries, Contact",
    og_image: "https://mmw.industries/images/contact.jpg",
    og_url: "https://mmw.industries/contacts",
};

const Contacts = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [thema, setThema] = useState('MapQS');
    const [content, setContent] = useState('');
    const [isBusy, setIsBusy] = useState(false);

    function reset() {
        setFullName('');
        setEmail('');
        setThema('');
        setContent('');
        setIsBusy(false);
    }

    function sendContactRequest() {
        setIsBusy(true);
        if (fullName === '' ||
            email === '' ||
            thema === '' ||
            content === '')
            return;
        axios.post("https://api.mmw.industries/api/v1/contact", {
            categorie: thema,
            fullName: fullName,
            email: email,
            content: content
        })
        .then(res => {
            window.alert("Ihre Anfrage wurde erfolgreich gesendet.");
            reset();
        })
        .catch(err => {
            window.alert("Fehler beim Senden der Anfrage, bitte probieren Sie es erneut oder kontaktieren Sie uns unter office@mmw.industries bzw. telefonisch unter +43 (0)2256 20442!");
            setIsBusy(false);
        })
    }

    return (
        <Layout
            btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
            singlePage
            meta={meta}
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
                                    {`Haben Sie Fragen oder benötigen Sie Hilfe bei einem bestehenden Produkt?`}
                                </h2>
                                <p className="p-xl">
                                    Unsere Spezialisten beraten Sie gerne
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
                                            value={thema}
                                            onChange={e => setThema(e.target.value)}
                                            disabled={isBusy}
                                        >
                                            <option>MapQS</option>
                                            <option>Gasmischer</option>
                                            <option>Gasanalysegeräte</option>
                                            <option>Dichtheitsprüfgeräte</option>
                                            <option>Sicherheitseinrichtungen</option>
                                            <option>Wartungen / Kalibrierungen</option>
                                            <option>Softwareentwicklung</option>
                                            <option>Ich habe eine Frage zu einem bestehenden Gerät</option>
                                            <option>Sonstige</option>
                                        </select>
                                    </div>
                                    {/* Contact Form Input */}
                                    <div className="col-md-12">
                                        <p className="p-lg">Ihr Name: </p>
                                        <span>Bitte geben Sie Ihren vollständigen Namen ein: </span>
                                        <input
                                            disabled={isBusy}
                                            type="text"
                                            name="name"
                                            value={fullName}
                                            onChange={e => setFullName(e.target.value)}
                                            className="form-control name"
                                            placeholder="Ihr vollständiger Name*"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Ihre Email Address: </p>
                                        <span>
                                          Bitte überprüfen Sie Ihre E-Mail-Adresse sorgfältig auf ihre Richtigkeit
                                        </span>
                                        <input
                                            disabled={isBusy}
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className="form-control email"
                                            placeholder="Email-Addresse*"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Ihr Anliegen etc.: </p>
                                        <span>
                                            Bitte beschreiben Sie ihr Anliegen.<br/>
                                            Bei Problemen mit bestehnden Anlagen geben Sie bitte die Seriennummer Ihres Geräts an.
                                        </span>
                                        <textarea
                                            disabled={isBusy}
                                            className="form-control message"
                                            name="message"
                                            rows={6}
                                            value={content}
                                            onChange={e => setContent(e.target.value)}
                                            placeholder=""
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12 mt-15 form-btn text-right">
                                        <button
                                            disabled={isBusy}
                                            type="submit"
                                            onClick={sendContactRequest}
                                            className="btn btn-skyblue tra-grey-hover"
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

export default Contacts;