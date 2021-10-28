import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer KM10-2 FLEX",
    description: "Kompakter Gasmischer für 2 Gase speziell für geringen Gasverbrauch, z.B. für Laboranwendungen",
    keywords: "",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/1/b/csm_witt_gas_mixer_km10-2_flex_d6dcf2443f.png",
    og_url: "https://mmw.industries/products/xxxx",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer KM10-2 FLEX",
    productTitle: "Gasmischer KM10-2 FLEX",
    overviewHeader: "Kompakter Gasmischer für 2 Gase speziell für geringen Gasverbrauch, z.B. für Laboranwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "auch für diskontinuierliche Gasentnahme\n",
                "variable, stufenlose Gemischeinstellung\n",
                "Leistungsbereiche bis ca. 28 Nl/min\n",
                "neuartige Mischtechnologie, Mischgasbehälter wird nicht benötigt\n",
                "unabhängig von Druckschwankungen in der Gasversorgung"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/1/b/csm_witt_gas_mixer_km10-2_flex_d6dcf2443f.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km10_flex_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Gasmischer für 2 definierte Gase und eine Vielzahl von technischen Anwendungen mit einem Standard-Zumischbereich von 5-92%. Andere Bereiche siehe Datenblatt. Speziell für Anwendungen mit geringem Gasverbrauch. Ideal geeignet zum Einsatz als portables Tischgerät, zum Beispiel für Laboranwendungen.\n" +
        "Aufgrund dieser neuartigen Mischtechnologie, wird kein Mischgasbehälter benötigt.",
    informationContent: [
        "Leistungsbereiche bis ca. 28 Nl/min.\n" +
        "Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte dem Datenblatt.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "hohe Mischgenauigkeit\n",
                "Kostenersparnis, da keine Vorratshaltung von verschiedenen Vorgemischen erforderlich\n",
                "ohne kostspieligen Speicherbehälter\n",
                "Gaseingangsfilter schützen das Gerät vor Verschmutzung\n",
                "rein pneumatisches Funktionsprinzip, keine Spannungsversorgung notwendig\n",
                "Mischgasentnahme von 1 l/min bis zur max. Leistung\n",
                "robustes, kompaktes Design\n",
                "wartungsarm\n",
                "einfache Bedienung\n",
                "Gemischeinstellung über Mischventil und %-Skala\n",
                "hohe Prozesssicherheit\n",
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n",
                "unabhängig von Entnahmemengenschwankungen (im zulässigen Bereich)\n",
                "Auto-Stop der Gemischproduktion bei Versorgungsausfall eines Gases\n",
                "Schloss zur Verriegelung der Gemischeinstellung"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "Alarmmodul NXT+: integrierte Eingangsdrucküberwachung mit digitalem Display für Druckanzeige (bei analogen Drucktransmittern) und optischen Alarm, einstellbare Alarmgrenzen, Quittierungspflicht, Sicherung der Alarme mit Zeitangabe, Schnittstellen z.B. zur Steuerung externer Alarme etc. Spannungsversorgung betreiberseitig erforderlich"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um.\n" +
        "\n"
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/7/csm_gasmischer_km10_flex_d_358b2ac114.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km10_flex_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/6/csm_Gasmischer_D_63720b3725.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
            content: ""
        },
    ]
};

function Km102Flex() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Km102Flex;