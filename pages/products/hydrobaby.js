import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Feuchtemessgerät HYDROBABY",
    description: "Mobiler Analysator zur Messung von Feuchte in Gasen",
    keywords: "mobile, Analysator, Feuchte, Gase",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/4/a/csm_witt_moisture_analyser_hydrobaby_5aee5a917d.png",
    og_url: "https://mmw.industries/products/hydrobaby",
};

const data = {
    breadCrumb: "Startseite / Produkte / Feuchtemessgerät HYDROBABY",
    productTitle: "Feuchtemessgerät HYDROBABY",
    overviewHeader: "Mobiler Analysator zur Messung von Feuchte in Gasen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "zuverlässig, schnell und exakt\n",
                "Taupunkt von -110 °C bis +20 °C\n",
                "für eine Vielzahl von technischen Anwendungen\n",
                "mobil durch Akkubetrieb\n",
                "integrierter Messwertspeicher für Taupunkt, Temperatur und Druck"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/4/a/csm_witt_moisture_analyser_hydrobaby_5aee5a917d.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/feuchtemessgeraet_hydrobaby_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Das kleine, leichte und preiswerte HYDROBABY ist als Ein-Hand-Analysator, zur Zeit, das leistungsfähigste Gerät für die Messung der Feuchte in Gasen.",
    informationContent: [
        "Die neu entwickelten Analysatoren bieten ein breites Spektrum an Vorteilen gegenüber der bisherigen Technologie. Durch ihr verbessertes Ansprechverhalten, gerade bei geringen Wasserdampf-Konzentrationen, resultiert ein großer Messbereich mit einem Taupunkt von -110 °C bis +20 °C.",
        "Die technologisch führenden Geräte zeichnen sich durch schnelle Messgeschwindigkeit, verbesserte Reproduzierbarkeit, Umgebungstemperaturempfindlichkeit, hohe Verlässlichkeit und Genauigkeit sowie hohe Rentabilität aus. Der Einsatz der Analysatoren im Labor oder in der Prozesstechnik eignet sich für eine Vielzahl von technischen Anwendungen im Bereich der petrochemischen Industrie, Energieerzeugung, Medizin, Pharmazie, Biotechnologie, der nicht-fossilen Brennstoffe, der Industriegase und in der Umwelttechnik.",
        "Durch die verwendeten Sensoren erfolgt die Messung temperaturkompensiert. Über einen Drucksensor (optional) kann zusätzlich eine Druckkompensation erfolgen. Alle Analyatoren werden zum Nachweis mit einem Kalibrierprotokoll ausgeliefert.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "schnelle Ansprechzeit\n",
                "modernste Sensortechnologie\n",
                "Taupunkt von -110 bis +20 °C\n",
                "leichte Navigation, großes Grafikdisplay\n",
                "schnurlos mobil durch Akkubetrieb\n",
                "USB-Port für Datentransfer und Akkuladung\n",
                "integrierter Messwertspeicher für Taupunkt, Temperatur und Druck\n",
                "großes, gut ablesbares, beleuchtetes Grafikdisplay\n",
                "HYDROBABY: für die mobile Messung"
            ]
        },
        {
            type: 'list',
            header: "Lieferumfang komplett inklusive:",
            items: [
                "USB-Kabel\n",
                "Netzstecker mit USB Anschluss\n",
                "Wandhaken und Magnet\n",
                "verlängerter Ausgang\n",
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
                "Drucksensor mit automatischer Taupunktkorrektur"
            ]
        },
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/2/2/csm_feuchtemessgeraet_hydrobaby_d_b57a4f5bdc.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/feuchtemessgeraet_hydrobaby_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function Hydrobaby() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Hydrobaby;