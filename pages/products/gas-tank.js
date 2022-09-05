import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasbehälter",
    description: "Druckbehälter für Mischgas aus Stahl oder Edelstahl",
    keywords: "",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_pressure_receiver_steel_250l_2_8aac93b3de.png.webp",
    og_url: "https://mmw.industries/products/gas-tank",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasbehälter",
    productTitle: "Gasbehälter",
    overviewHeader: "Druckbehälter für Mischgas aus Stahl oder Edelstahl",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "einzeln oder zum Einsatz mit WITT-Gasmischern\n",
                "Ausführung je nach Durchflussmenge und Anwendung\n",
                "außen lackiert oder pulverbeschichtet\n",
                "inklusive WITT-Sicherheitsventil und Manometer\n",
                "CE-Konformitätserklärung nach PED für Behälter- bzw. Behälter-Mischerbaugruppen"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_pressure_receiver_steel_250l_2_8aac93b3de.png.webp",
        "csm_witt_gas_pressure_receiver_steel_250l_3_565e2de280.png.webp",
        "csm_witt_gas_pressure_receiver_stainless_steel_250l_60cd2f4fa9.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/druckbehaelter_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Einzeln oder zum Einsatz mit WITT-Gasmischgeräten; abgestimmt auf die Durchflussmenge und den Bedarf des Anwenders.",
    informationContent: [
        {
            type: 'list',
            header: "Für Stahl- und Edelstahlbehälter gilt:",
            items: [
                "innen öl- und fettfrei\n",
                "außen lackiert oder pulverbeschichtet (auf Wunsch unbehandelt)\n",
                "inklusive Sicherheitsventil\n",
                "inklusive Manometer\n",
                "CE-Konformitätserklärung nach PED für Behälter- bzw. Behälter-Mischerbaugruppen\n",
                "Stahlbehälter können bei Einsatz mit feuchten Gasen oder durch Einwirkung von Sauerstoff korrodieren\n",
                "Beim Einsatz von hohen Sauerstoffgemischen sowie niedrigen Temperaturen (<-15 °C) müssen Edelstahlbehälter verwendet werden"
            ]
        },
        "Größen und Druckbereiche entnehmen Sie bitte der Tabelle. Andere Größen auf Anfrage."
    ],
    downloads: [
        {
            image: "csm_druckbehaelter_d_a5dda6ad83.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/druckbehaelter_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Gasmischer.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Amada_Laserschneiden_Gasmischer_DE.pdf",
            title: "Broschüre Gasmischer",
            content: ""
        }
    ]
};

function GasTank() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default GasTank;