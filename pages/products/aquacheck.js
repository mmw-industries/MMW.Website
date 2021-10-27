import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Auqacheck",
    description: "OXYBABY®-Zubehör zur Analyse von Kleinstverpackungen",
    keywords: "OXYBABY®, Analyse, Kleinstverpackungen, O2, CO2",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/c/b/csm_Aquacheck_ohne_Behaelter1_72134bcac3.png",
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
        "https://www.wittgas.com/fileadmin/_processed_/c/b/csm_Aquacheck_ohne_Behaelter1_72134bcac3.png",
        "https://www.wittgas.com/fileadmin/_processed_/8/c/csm_12_Gas_analyser_Oxybaby_6bed4ff8dd.jpg",
        "https://www.wittgas.com/fileadmin/_processed_/6/0/csm_Analyser_Aquacheck_cab70b98fc.png"
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
            image: "https://www.wittgas.com/fileadmin/_processed_/e/8/csm_gasanalysator_oxybaby_canpiercer_aquacheck_d_a6224572e9.png",
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