import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Tischständer",
    description: "Edelstahl-Tischständer für OXYBABY®",
    keywords: "Edelstahl-Tischständer, OXYBABY®",
    og_image: "https://www.mmw.industries/images/products/",
    og_url: "https://mmw.industries/products/table-stand",
};

const data = {
    breadCrumb: "Startseite / Produkte / Tischständer",
    productTitle: "Tischständer",
    overviewHeader: "Edelstahl-Tischständer für OXYBABY®",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "stabil und standsicher\n" ,
                "auch zur Verwendung des OXYBABY® als Tischgerät\n" ,
                "einfaches Abnehmen und Auflegen dank magnetischer Befestigung\n" ,
                "inkl. Nadelablage"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_analyser_oxybaby_6_on_table_stand_d074b8f3a6.png.webp",
        "csm_witt_gas_analyser_oxybaby_6_table_top_0d0f06f074.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_zubehoer_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Dieser stabile und standsichere Tischständer aus Edelstahl eignet sich ideal zur Nutzung des OXYBABY® als Tischgerät.",
    informationContent: [
        "Zur Verbindung mit dem OXYBABY® ist ein Anschlussschlauch mit Luer-Lok-Verbindung erhältlich.",
        "Der höhenverstellbare Tischständer verfügt zum leichten Handling über eine magnetische Aufnahme und eine Nadelablage.",
        "Er passt zu allen OXYBABY® Modellen und kann ebenfalls als Halterung genutzt werden."
    ],
    downloads: [
        {
            image: "csm_gasanalysator_oxybaby_zubehoer_d_dd8d8ac072.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_zubehoer_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function TableStand() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default TableStand;