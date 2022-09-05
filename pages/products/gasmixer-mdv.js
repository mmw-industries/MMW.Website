import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "MDV für Vorgemischbrenner",
    description: "MDV Gasmischer und -dosierer für Brenngas-, Luft- oder Sauerstoff-Gemische, speziell für Brenner, die mit Vorgemischen arbeiten",
    keywords: "MDV Gasmischer, MDV Gasdosierer, Brenngas- Luft- oder Sauerstoff-Gemische",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_mdv_for_pre-mix_burners1_9a7b54645c.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-mdv",
};

const data = {
    breadCrumb: "Startseite / Produkte / MDV für Vorgemischbrenner",
    productTitle: "MFV für Vorgemischbrenner",
    overviewHeader: "MDV Gasmischer und -dosierer für Brenngas-, Luft- oder Sauerstoff-Gemische; speziell für Brenner, die mit Vorgemischen arbeiten",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "flexible Anordnung von Proportionalmischventilen oder Einzelmischventilen\n",
                "Veränderung der Einstellparameter in Sichtkontakt des Brenners möglich\n",
                "Senkung der Einfahr- und Rüstzeiten durch perfekte Reproduzierbarkeit der Einstellwerte\n",
                "integrierte WITT-Sicherheitstechnik zur Vermeidung von Flammenrückschlägen"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_mdv_for_pre-mix_burners1_9a7b54645c.png.webp",
        "csm_witt_gas_mixer_mdv_for_pre-mix_burners2_42a0402861.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_md3_mdv_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "MDV Gasmisch- und Dosiersystem für die flexible Erzeugung und Dosierung von Brenngas-, Luft- oder Sauerstoff-Gemischen; speziell entwickelt für Brenner, die mit Vorgemischen arbeiten.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "durch flexible Anordnung von Proportionalmischventilen (2 Gase) oder Einzelmischventilen (3 Gase) sind vielfältige Kombinationen zur Versorgung unterschiedlichster Bearbeitungsmaschinen möglich\n" +
                "nachträgliche Änderungen an der Maschine, wie Brennerleistungen oder Brenneranzahlen, können durch die modulare Ausführung leicht durchgeführt werden\n" +
                "die direkte Anordnung der einstellbaren Misch- und Mengenventile am Verbraucher ermöglicht eine Veränderung der Einstellparameter in Sichtkontakt des Brenners\n" +
                "durch perfekte Reproduzierbarkeit der Einstellwerte kann die Grundeinstellung des Brenners im Stillstand erfolgen, was die Einfahr- und Rüstzeiten senkt und die Kosten durch Ausschuss in der Einfahrphase minimiert\n" +
                "die sehr einfache Montage der Ventile, ohne zusätzliche Verrohrung, Halter oder Gehäuse reduziert die Montagekosten\n" +
                "integrierte WITT-Sicherheitstechnik zur Vermeidung von gefährlichen Rückbränden und Flammenrückschlägen in die Gasversorgung schützt Mensch und Maschine"
            ]
        },
        {
            type: 'span',
            content: ""
        }
    ],
    downloads: [
        {
            image: "csm_gasmischer_md3_mdv_d_535fa29ee7.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_md3_mdv_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/d/6/csm_thermische_prozesstechnik_md1_d_a3cc0154b6.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/thermische_prozesstechnik_md1_d.pdf",
            title: "Überblick Thermische Prozesstechnik",
            content: ""
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/6/csm_Gasmischer_D_63720b3725.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
            content: ""
        },
    ]
};

function GasMixerMdv() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default GasMixerMdv;