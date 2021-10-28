import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Manometer AD100",
    description: "Kalibriertes Manometer für LEAK-MASTER® EASY",
    keywords: "Manometer, Kalibriert",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/7/8/csm_calibrated_manometer_AD100_e313a1a7e7.jpg",
    og_url: "https://mmw.industries/products/manometer-ad100",
};

const data = {
    breadCrumb: "Startseite / Produkte / Manometer AD100",
    productTitle: "Manometer AD100",
    overviewHeader: "Kalibriertes Manometer für LEAK-MASTER® EASY",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Druckmessgerät mit Rohrfeder, Flüssigkeitsfüllung\n" ,
                "Anzeigebereich: -1 bis 0 bar\n" ,
                "Genauigkeit: > CL 0,6\n" ,
                "mit DKD/DAkkS-Zertifikat"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/7/8/csm_calibrated_manometer_AD100_e313a1a7e7.jpg"
    ],
    datasheetLink: "",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Das kalibrierte Manomter AD100 mit DKD/DAkkS-Zertifikat gibt dem Kunden noch mehr Sicherheit bei der täglichen Nutzung seines LEAK-MASTER® EASY.",
    informationContent: [
        "Messsystem: Kupferlegierung\n" ,
        "Gehäuse: CrNi-Stahl 1.4301\n" ,
        "Gehäuse: CrNi-Stahl, Bördel-Ausführung\n" ,
        "Nenngröße: 100 mm\n" ,
        "Anzeigebereich: -1 bis 0 bar\n" ,
        "Prozessanschluss: G 1/4 B\n" ,
        "Anschlusslage: unten\n" ,
        "Genauigkeitsklasse: Klasse 1,0\n" ,
        "Füllmedium Gehäuse: Glyzerin 99,7 %\n" ,
        "Manometer-Standard: International (Europa)\n" ,
        "Art des Zertifikates: DKD/DAkkS-Zertifikat\n" ,
        "Genauigkeit: > 0,6 %\n" ,
        "Inkl. Verschraubung für LEAK-MASTER® EASY"
    ],
    downloads: [
    ]
};

function ManometerAd100() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default ManometerAd100;