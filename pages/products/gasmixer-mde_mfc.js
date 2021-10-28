import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "MDE_MFC zur Brenner-Versorgung",
    description: "Mischsystem zur Versorgung eines Brenners oder anderen Verbrauchers mit Gasgemischen aus 2 oder mehr Gasen\n" +
        "\n",
    keywords: "Mischsystem, Brennerversorgung",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/0/4/csm_witt_gas_mixer_mfc1_e00d8a3f11.png",
    og_url: "https://mmw.industries/products/gasmixer-mde_mfc",
};

const data = {
    breadCrumb: "Startseite / Produkte / MDE_MFC zur Brenner-Versorgung",
    productTitle: "MDE_MFC zur Brenner-Versorgung",
    overviewHeader: "Mischsystem zur Versorgung eines Brenners oder anderen Verbrauchers mit Gasgemischen aus 2 oder mehr Gasen\n" +
        "\n",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "Inline Messung direkt im Gasstrom und neuartige CMOS-Sensortechnologie ermöglichen schnellstes Ausregeln von Störgrößen\n",
                "Senkung der Einfahr- und Rüstzeiten durch perfekte Reproduzierbarkeit der Einstellwerte\n",
                "integrierte WITT-Sicherheitstechnik zur Vermeidung von Flammenrückschlägen\n",
                "fernbedienbar über SPS, PC oder WITT-Auswertesysteme AWE, AWS\n",
                "Profibus Schnittstelle zur leichten Integration in Steuerungssysteme"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/0/4/csm_witt_gas_mixer_mfc1_e00d8a3f11.png",
        "https://www.wittgas.com/fileadmin/_processed_/4/d/csm_witt_gas_mixer_mfc2_35d52bc754.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_md5_mde_mfc_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Zur Versorgung eines Brenners oder anderen Verbrauchers mit Gasgemischen aus 2 oder mehr Gasen. Für die Glasbearbeitung, thermische und weitere Prozesse, bei denen Gasgemische benötigt werden.",
    informationContent: [
        "",
        {
            type: 'list',
            header: "",
            items: [
                "schnellstes Ausregeln von Störgrößen und Sollwertänderungen durch Inline Messung direkt im Gasstrom und neuartige CMOS-Sensortechnologie\n",
                "sichere Reproduzierbarkeit der Prozessparameter zur Verringerung von Ausschuss während der Einfahrphase\n",
                "hohe Langzeitstabilität durch Kompensation von Störgrößen, wie Druck-, Temperatur- und Brennerveränderungen etc.\n",
                "integrierte WITT-Sicherheitstechnik verhindert Flammenrückschläge\n",
                "Fernbedienbarkeit über SPS, PC oder WITT-Auswertesystem AWS oder GC50\n",
                "minimale Rüstzeiten bei Produktumstellung durch Hinterlegung von produktspezifischen Durchflussparametern\n",
                "veränderbare Flammeneinstellung im Prozessverlauf\n",
                "Qualitäts- und Kostenkontrolle durch exakte Erfassung der Durchflüsse der Einzelgase\n",
                "leichte Integration in moderne Steuerungssysteme durch optionale Profibus Schnittstelle\n",
                "Autokalibrierfunktion für noch schnellere und genauere Durchflussregelung\n",
                "einfaches Zusammenschalten mehrerer MFC mit allen notwendigen Komponenten für betriebsfertige Mischeinrichtungen",
                "keine Montagearbeiten\n",
                "erheblich reduzierte Baukosten\n",
                "geringerer Platzbedarf"
            ]
        },
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/0/1/csm_gasmischer_md5_mde_mfc_d_ff455a7d29.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_md5_mde_mfc_d.pdf",
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

function _PageDetailTemplateFile() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default _PageDetailTemplateFile;