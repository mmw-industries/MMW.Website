import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Tischdrucker",
    description: "Bluetooth-Tischdrucker für OXYBABY® 6.0",
    keywords: "Bluetooth-Tischdrucker, OXYBABY®",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/4/6/csm_drucker_frei_c34dda61b4.jpg",
    og_url: "https://mmw.industries/products/table-printer",
};

const data = {
    breadCrumb: "Startseite / Produkte / Tischdrucker",
    productTitle: "Tischdrucker",
    overviewHeader: "Bluetooth-Tischdrucker für OXYBABY® 6.0",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "direkte Dokumentation der Messergebnisse auf Knopfdruck\n" ,
                "kabellos, klein und handlich"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/4/6/csm_drucker_frei_c34dda61b4.jpg"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_zubehoer_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Wählen Sie für Ihr OXYBABY® 6.0 die Bluetooth-Ausstattung, und drucken Sie kabellos direkt vor Ort Ihre Messergebnisse mit dem kleinen, handlichen Tischdrucker aus.",
    informationContent: [
        "Praktisch, schnell und unkompliziert."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/6/csm_drucker_frei_c34dda61b4.jpg",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_zubehoer_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function _PageDetailTemplateFile() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default _PageDetailTemplateFile;