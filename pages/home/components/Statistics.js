import Counter from "../../../src/components/Counter";

function Statistics() {
    return (
        <section id="statistic-3" className="bg-02 statistic-section division">
            <div className="container">
                <div className="statistic-3-wrapper white-color text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col">
                            <div className="statistic-block mb-40 wow fadeInUp">
                                <div className="statistic-ico ico-65">
                                    <span className="flaticon-shuttle"/>
                                </div>
                                <h3 className="h3-md statistic-number">
                                    <Counter start={200} end={289}/>
                                </h3>
                                <p className="p-lg txt-400">Wartungen/Kalibrierungen</p>
                                <p className="p-lg txt-400">pro Jahr</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="statistic-block mb-40 wow fadeInUp">
                                <div className="statistic-ico ico-65">
                                    <span className="flaticon-speech-bubble-3"/>
                                </div>
                                <h3 className="h3-md statistic-number">
                                    2
                                    <Counter end={56}/>
                                </h3>
                                <p className="p-lg txt-400">Zufriedene Kunden</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="statistic-block mb-40 wow fadeInUp">
                                <div className="statistic-ico ico-65">
                                    <span className="flaticon-help"/>
                                </div>
                                <h3 className="h3-md statistic-number">
                                    <Counter end={24}/>
                                    /
                                    <Counter end={7}/>
                                </h3>
                                <p className="p-lg txt-400">Support*</p>
                                <p style={{fontSize: 10}} className="txt-300">*bei gültigen Wartungsverträgen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics;