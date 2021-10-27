import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Can-Piercer",
    description: "OXYBABY®-Zubehör zur Kopfraumanalyse von Flaschen und Dosen",
    keywords: "OXYBABY®, Kopfraumanalyse",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/1/1/csm_canpiercer_for_witt_gas_analyser_oxybaby_456158b162.png",
    og_url: "https://mmw.industries/products/can-piercer",
};

const data = {
    breadCrumb: "Startseite / Produkte / Can-Piercer",
    productTitle: "Can-Piercer",
    overviewHeader: "OXYBABY®-Zubehör zur Kopfraumanalyse von Flaschen und Dosen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "sichere Arretierung von Flaschen und Dosen bis zu einer Höhe von 390 mm\n",
                "für OXYBABY® M+ und 6.0 geeignet\n",
                "einfache Handhabung"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/1/1/csm_canpiercer_for_witt_gas_analyser_oxybaby_456158b162.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_canpiercer_aquacheck_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Unverzichtbar zur Kopfraumanalyse von Flaschen und Dosen ist der OXYBABY® Can-Piercer.",
    informationContent: [
        "Sichere Arretierung und einfache Handhabung garantieren optimale Qualitätskontrollen auch für Flaschen und Dosen mit Metall- oder Kunststoffverschlüssen.",
        "Der Can-Piercer kann bis zu einer maximalen Flaschen- bzw. Dosenhöhe von 390 mm angepasst werden. Der integrierte Nadelschutz und die stabilen Nadeln verhindern Nadelbruch.",
        {
            type: 'span',
            content: "Material: Stahl\n" +
                "Gewicht: 7,5 kg (ohne OXYBABY®)\n" +
                "Abmessungen (HxBxT): 585 x 155 x 235 mm (verpackt, ohne OXYBABY®)\n" +
                "Für OXYBABY® M+ und OXYBABY® 6.0 geeignet"
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/1/1/csm_canpiercer_for_witt_gas_analyser_oxybaby_456158b162.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_canpiercer_aquacheck_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function CanPiercer() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default CanPiercer;