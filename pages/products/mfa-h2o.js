import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Feuchtemessgerät HYDROBABY",
    description: "Stationärer Analysator zur Messung von Feuchte in Gasen",
    keywords: "stationär, Analysator, Feuchte, Gase",
    og_image: "https://www.mmw.industries/images/products/csm_witt_moisture_analyser_mfah2o_5b8d5abd2e.png.webp",
    og_url: "https://mmw.industries/products/hydrobaby",
};

const data = {
    breadCrumb: "Startseite / Produkte / Feuchtemessgerät MFA H2O",
    productTitle: "MFA H2O",
    overviewHeader: "Stationärer Analysator zur Messung von Feuchte in Gasen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "zuverlässig, schnell und exakt",
                "Taupunkt von -110 °C bis +20 °C\n",
                "für eine Vielzahl von technischen Anwendungen\n",
                "integrierter Messwertspeicher für Taupunkt, Temperatur und Druck",
                "optional: Überdruckausführung, Vakuumpumpe"
            ]
        },
    ],
    productImages: [
        "csm_witt_moisture_analyser_mfah2o_5b8d5abd2e.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/feuchtemessgeraet_hydrobaby_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Feuchtemessung/Taupunktanalyse",
    informationContent: [
        "Die neu entwickelten Analysatoren bieten ein breites Spektrum an Vorteilen gegenüber der bisherigen Technologie. Durch ihr verbessertes Ansprechverhalten, gerade bei geringen Wasserdampf-Konzentrationen, resultiert ein großer Messbereich mit einem Taupunkt von -110 °C bis +20 °C.",
        "Die technologisch führenden Geräte zeichnen sich durch schnelle Messgeschwindigkeit, verbesserte Reproduzierbarkeit, Umgebungstemperatur-Empfindlichkeit, hohe Verlässlichkeit und Genauigkeit sowie hohe Rentabilität aus. Der Einsatz der Analysatoren im Labor oder in der Prozesstechnik eignet sich für eine Vielzahl von technischen Anwendungen im Bereich der petrochemischen Industrie, Energieerzeugung, Medizin, Pharmazie, Biotechnologie, der nicht-fossilen Brennstoffe, der Industriegase und in der Umwelttechnik.",
        "Durch die verwendeten Sensoren erfolgt die Messung temperaturkompensiert. Über einen Drucksensor (optional) kann zusätzlich eine Druckkompensation erfolgen. Alle Analyatoren werden zum Nachweis mit einem Kalibrierprotokoll ausgeliefert.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "schnelle Ansprechzeit\n",
                "modernste Sensortechnologie\n",
                "Taupunkt von -110 bis +20 °C\n",
                "leichte Navigation, großes Grafikdisplay\n",
                "USB-Port für Datentransfer",
                "integrierter Messwertspeicher für Taupunkt, Temperatur und Druck\n",
                "großes, gut ablesbares, beleuchtetes Grafikdisplay\n",
                "Überdruckausführung mit Dosierventil und Durchflussmesser",
                "MFA H2O: Tischgerät"
            ]
        },
        {
            type: 'list',
            header: "Lieferumfang komplett inklusive:",
            items: [
                "USB-Kabel\n",
                "Netzstecker mit USB Anschluss\n",
                "CD-ROM mit Software, ausführliche Bedienungsanleitung"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "passiver 4-20 mA Analogausgang (Spannungsversorgung betreiberseitig max. 30 V DC)\n",
                "Datenkabel\n",
                "Software freigeschaltet zur Dokumentation Ihrer Messergebnisse\n",
                "Drucksensor mit automatischer Taupunktkorrektur",
                "eingebaute Vakuumpumpe mit Batterie und externem Ladegerät"
            ]
        },
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage."
    ],
    downloads: [
        {
            image: "csm_feuchtemessgeraet_hydrobaby_d_7a9d605c5a.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/feuchtemessgeraet_hydrobaby_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function MfaH2O() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MfaH2O;