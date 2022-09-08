import Link from "next/link";

function Faqs() {
    return (
        <section id="faqs-2" className="wide-60 bg-snow faqs-section division">
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title title-01">
                                <h2 className="h2-md text-center"><b>Interesse geweckt?</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="more-questions">
                            <h2 className="h5-sm">
                                Bewirb dich unter
                                <a href="mailto:recruting@mmw.industries?subject=Meine Bewerbung bei MMW&body=Erläutere uns kurz und knacking wer du bist und für welche Position du dich bewerben möchtest."
                                   style={{color: 'darkblue', marginLeft: 10}}
                                >
                                    <b>
                                        recruting@mmw.industries
                                    </b>
                                </a>
                            </h2>
                            <p style={{paddingTop: 10}}>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs;