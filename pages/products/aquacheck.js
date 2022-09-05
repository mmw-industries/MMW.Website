import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Auqacheck",
    description: "OXYBABY®-Zubehör zur Analyse von Kleinstverpackungen",
    keywords: "OXYBABY®, Analyse, Kleinstverpackungen, O2, CO2",
    og_image: "https://www.mmw.industries/images/products/csm_Aquacheck_ohne_Behaelter1_d996061906.png",
    og_url: "https://mmw.industries/products/aquacheck",
};

const data = {
    breadCrumb: "Startseite / Produkte / Auqacheck",
    productTitle: "Auqacheck",
    overviewHeader: "OXYBABY®-Zubehör zur Analyse von Kleinstverpackungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "zur Stichprobenanalyse von Kleinstverpackungen mit weniger als 2 ml Messgasvolumen, z.B. Kaffeekapseln\n" ,
                "mit oder ohne Wasserbadbehälter"
            ]
        },
    ],
    productImages: [
        "csm_Aquacheck_ohne_Behaelter1_d996061906.png.webp",
        "csm_12_Gas_analyser_Oxybaby_e54e28a9ad.jpg.webp",
        "csm_Analyser_Aquacheck_7f061a7c97.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_canpiercer_aquacheck_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Für Kleinstverpackungen mit weniger als 2 ml Messgasvolumen ist der OXYBABY® Aquacheck ideal.",
    informationContent: [
        "Hierbei wird im Wasserbad das Gasvolumen von zwei oder mehr Packungen aufgefangen und ist somit für das OXYBABY® analysierbar.",
        "Material: Edelstahl",
        "Den OXYBABY® Aquacheck gibt es mit oder ohne Wasserbadbehälter.",
        "Für OXYBABY® M+ und OXYBABY® 6.0 geeignet."
    ],
    downloads: [
        {
            image: "csm_gasanalysator_oxybaby_canpiercer_aquacheck_d_53981c2b84.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_canpiercer_aquacheck_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function Auqacheck() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Auqacheck;