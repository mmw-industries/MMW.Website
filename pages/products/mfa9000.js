import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasanalysator MFA 9000",
    description: "Kompakter Multigas-Analysator für 15 binäre Gasgemische",
    keywords: "MFA 9000, Gasanalysator, mobile, Service-Einsätze",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/1/8/csm_witt_gas_analyser_mfa9000_001f0b11bf.png",
    og_url: "https://mmw.industries/products/mfa9000",
};

const data = {
    breadCrumb: "Startseite / Produkte / MFA 9000",
    productTitle: "Gasanalysator MFA 9000",
    overviewHeader: "Kompakter Multigas-Analysator für 15 binäre Gasgemische",
    overviewContent: [
        {

            type: 'list',
            header: "",
            items: [
                "ideal für Service-Einsätze und zur mobilen Analyse\n" ,
                "Messprinzip der thermischen Leitfähigkeit\n" ,
                "lange Lebensdauer der Messzelle\n" ,
                "geringer Kalibrieraufwand\n" ,
                "kostengünstig und wartungsarm"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/1/8/csm_witt_gas_analyser_mfa9000_001f0b11bf.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mfa_9000_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Kompaktes, tragbares Gerät zur Messung von 15 verschiedenen binären Gasgemischen basierend auf dem Messprinzip der thermischen Leitfähigkeit. Das ideale Gerät für die mobile Analyse vor Ort und für Serviceeinsätze.",
    informationContent: [
        "",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "Vielseitigkeit durch 15 direkt ablesbare Messbereiche für binäre Gasgemische in einem Gerät\n" ,
                "Analyse von 3-Komponenten-Gemischen, sofern 2 Gase des Gemisches eine gleiche oder ähnliche thermische Leitfähigkeit aufweisen und das dritte Gas erheblich von dieser Leitfähigkeit abweicht\n" ,
                "mobile Analyse von Gasgemischen vor Ort\n" ,
                "kontinuierliche Überwachung von Gasgemischen bei Verwendung von Gasmischsystemen\n" ,
                "Alarmierung über min.- und max- Grenzwertgeber möglich\n" ,
                "einfache Bedienung durch selbsterklärende Funktionen und Einstellmöglichkeiten\n" ,
                "digitales Display\n" ,
                "geringer Kalibrieraufwand\n" ,
                "lange Lebensdauer der Messzelle\n" ,
                "wartungsarm, leicht und robust\n" ,
                "kostengünstig und praxisbewährt"
            ]
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/6/csm_gasanalysator_mfa_9000_d_567665eae2.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mfa_9000_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/0/csm_MAP_Gasanalyse_D_6af455217b.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Gasanalyse_D.pdf",
            title: "Broschüre WITT Gasanalysatoren",
            content: ""
        },
    ]
};

function Mfa9000() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Mfa9000;