import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Verbrauchsmaterialien",
    description: "Ersatzplättchen, Nadeln, Sensoren, Akku etc. für OXYBABY®, PA, MAPY, MFA",
    keywords: "",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/8/5/csm_Oxybaby_Zubehoer_f11e591810.jpg",
    og_url: "https://mmw.industries/",
};

const data = {
    breadCrumb: "Startseite / Produkte / Verbrauchsmaterialien",
    productTitle: "Verbrauchsmaterialien",
    overviewHeader: "Ersatzplättchen, Nadeln, Sensoren, Akku etc. für OXYBABY®, PA, MAPY, MFA",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "original Ersatzmaterial vom Hersteller\n",
                "günstig, schnell und zuverlässig\n",
                "perfekt für Ihre WITT Gasanalysatoren"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/8/5/csm_Oxybaby_Zubehoer_f11e591810.jpg",
        "https://www.wittgas.com/fileadmin/_processed_/e/0/csm_tube_for_witt_gas_analyser_oxybaby_e64c0d6496.png",
        "https://www.wittgas.com/fileadmin/_processed_/f/d/csm_pads_for_witt_gas_analyser_oxybaby_1b2022b5f9.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_verbrauchsmaterial_oxybaby_mfa_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Ihr WITT-Gasanalysator ist aus robusten Materialien gefertigt und benötigt sehr wenig Wartungsaufwand.",
    informationContent: [
        "In der täglichen Arbeit gibt es aber auch hier einen natürlichen Verschleiß. Um sicher zu gehen, dass Ersatzmaterialien optimal mit Ihrem WITT-Gerät harmonieren, empfehlen wir die Verwendung von Original WITT-Ersatzteilen. Günstig, schnell und zuverlässig. Für alle OXYBABY®-, PA-, MAPY- und MFA- Modelle geeignet.",
        {
            type: 'list',
            header: "",
            items: [
                "O2 Sensor",
                "Filter",
                "Nadel",
                "Dichtungsplättchen zum Abdichten der Einstichstelle an der Packung (Packungen a 500 Stk)",
                "Schlauch mit Luer-Lok-Verbindung"
            ]
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/f/8/csm_gasanalysator_verbrauchsmaterial_oxybaby_mfa_d_27eaf94ddb.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_verbrauchsmaterial_oxybaby_mfa_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function Consumables() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Consumables;