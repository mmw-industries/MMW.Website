import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "ASTM Set für LEAK-MASTER® EASY",
    description: "für Blasentest nach ASTM F2096",
    keywords: "Blasentest, ASTM F2096",
    og_image: "https://www.mmw.industries/images/products/csm_witt_astm_set_for_EASY_2d0c3027e0.png.webp",
    og_url: "https://mmw.industries/products/leak-master-easy-astm-set",
};

const data = {
    breadCrumb: "Startseite / Produkte / ASTM Set für LEAK-MASTER® EASY",
    productTitle: "ASTM Set für LEAK-MASTER® EASY",
    overviewHeader: "für Blasentest nach ASTM F2096",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Nutzung mit LEAK-MASTER® EASY\n" ,
                "Standardisierte Qualitätskontrolle zur Erkennung von Groblecks\n" ,
                "Einfach, schnell und sicher\n" ,
                "Offiziell anerkannt"
            ]
        },
    ],
    productImages: [
        "csm_witt_astm_set_for_EASY_2d0c3027e0.png.webp",
        "csm_witt_leak_detector_leak_master_easy_with_astm_set_9dab102dbb.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_easy_kpl_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Ergänzungsset zum Standardprüfverfahren nach ASTM F2096, zur Erkennung von groben Leckagen in Verpackungen durch Innendruckbeaufschlagung (Blasentest).",
    informationContent: [
        "Bitte bestellen Sie das Ergänzungsset immer in Kombination mit Ihrem neuen LEAK-MASTER® EASY Modell. Keine Nachrüstung!",
    ],
    downloads: [
        {
            image: "csm_dichtheitspruefung_leak_master_easy_kpl_d_3208476e42.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_easy_kpl_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function LeakMasterEasyASTMSet() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default LeakMasterEasyASTMSet;