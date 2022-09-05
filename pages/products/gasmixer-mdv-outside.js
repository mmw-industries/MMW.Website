import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "MDV für außenmischende Brenner",
    description: "MDV Mengenventilsystem speziell für außenmischende Brenner",
    keywords: "MFC Mengenventilsystem, außenmischende Brenner",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_mdv_for_surface-mix_burners_73a36caa13.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-mfc-outside",
};

const data = {
    breadCrumb: "Startseite / Produkte / MDV für außenmischende Brenner",
    productTitle: "MDV für außenmischende Brenner",
    overviewHeader: "MDV Mengenventilsystem speziell für außenmischende Brenner",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualität-Gasmischer vom Weltmarktführer\n",
                "flexible Anordnung von 2-Gas und 3-Gas Mengenventilen\n",
                "modulare Ausführung ermöglicht nachträgliche Änderungen z.B. von Brennerleistungen oder Brenneranzahlen\n",
                "Veränderung der Einstellparameter in Sichtkontakt des Brenners möglich\n",
                "Senkung der Einfahr- und Rüstzeiten durch perfekte Reproduzierbarkeit der Einstellwerte\n",
                "integrierte WITT-Sicherheitstechnik zur Vermeidung von Flammenrückschlägen"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_mdv_for_surface-mix_burners_73a36caa13.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_md4_mdv_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "MDV Mengenventilsysteme für die flexible und leicht reproduzierbare Dosierung von Brenngasen mit Luft oder Sauerstoff; speziell entwickelt für außenmischende Brenner.",
    informationContent: [
        "",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "durch flexible Anordnung von 2-Gas und 3-Gas Mengenventilen sind vielfältige Kombinationen zur Versorgung unterschiedlichster Bearbeitungsmaschinen möglich\n",
                "nachträgliche Änderungen an der Maschine, wie Brennerleistungen oder Brenneranzahlen, können durch die modulare Ausführung leicht durchgeführt werden\n",
                "die direkte Anordnung der einstellbaren Mengenventile am Verbraucher ermöglicht eine Veränderung der Einstellparameter in Sichtkontakt des Brenners\n",
                "durch perfekte Reproduzierbarkeit der Einstellwerte kann die Grundeinstellung der Brenner im Stillstand erfolgen, was die Einfahr- und Rüstzeiten senkt und die Kosten durch Ausschuss in der Einfahrphase minimiert die sehr einfache Montage der Ventile, ohne zusätzliche Verrohrung, Halter oder Gehäuse reduziert die Montagekosten\n",
                "integrierte WITT-Sicherheitstechnik zur Vermeidung von gefährlichen Rückbränden und Flammenrückschlägen in die Gasversorgung schützt Mensch und Maschine"
            ]
        },
        "",
        "Bitte geben Sie bei Anfragen die gewünschte Anzahl und Größe der Brenner, sowie die Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um.\n" +
        "\n"
    ],
    downloads: [
        {
            image: "csm_gasmischer_md4_mdv_d_ba70a33d0c.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_md4_mdv_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Overview_thermische_prozesstechnik.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/thermische_prozesstechnik_md1_d.pdf",
            title: "Überblick Thermische Prozesstechnik",
            content: ""
        },
        {
            image: "Broschuere_Gasmischer.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
            content: ""
        },
    ]
};

function MdvOutside() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MdvOutside;