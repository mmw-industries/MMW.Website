import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer MG Flex Serie",
    description: "Gasmischer für 2 oder 3 flexibel einstellbare Gase und eine Vielzahl von technischen Anwendungen",
    keywords: "",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_mg-fix_7bee310982.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-mg-flex-serie",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer MG Flex Serie",
    productTitle: "Gasmischer MG Flex Serie",
    overviewHeader: "Gasmischer für 2 oder 3 flexibel einstellbare Gase und eine Vielzahl von technischen Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "für 2-Komponenten-Gasgemische oder 3-Komponenten-Gasgemische im Zumischbereich 2-85%\n",
                "hohe Mischgenauigkeit\n",
                "Kostenersparnis, da keine Vorratshaltung von verschiedenen Vorgemischen erforderlich\n",
                "ohne kostspieligen Speicherbehälter\n",
                "wartungsarm"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_mg-fix_7bee310982.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mg_fix_flex_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 oder 3 definierte Gase und eine Vielzahl von technischen Anwendungen mit einem Standard-Zumischbereich von 5-92%. Andere Bereiche siehe Datenblatt.",
    informationContent: [
        "FLEX: flexibel einstellbar für 2-Komponenten-Gasgemische oder 3-Komponenten-Gasgemische.",
        "Aufgrund dieser neuartigen Mischtechnologie, wird kein Mischgasbehälter benötigt.",
        {
            type: 'span',
            content: "MG 25 Leistungsbereiche bis ca. 22 Nm3/h.\n" +
                "MG 45 Leistungsbereiche bis ca. 46 Nm3/h.\n" +
                "MG 75 Leistungsbereiche bis ca. 68 Nm3/h.\n" +
                "MG 95 Leistungsbereiche bis ca. 90 Nm3/h.\n" +
                "MG 125 Leistungsbereiche bis ca. 135 Nm3/h."
        },
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
                "Mischgasentnahme von 8 l/min bis zur max. Leistung\n",
                "robustes, kompaktes Design\n",
                "Paneel für Wandmontage\n",
                "wartungsarm"
            ]
        },
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "Gemischeinstellung über Mischventil und %-Skala (FLEX)"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit:",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n",
                "unabhängig von Entnahmemengenschwankungen (im zulässigen Bereich)\n",
                "Auto-Stop der Gemischproduktion bei Versorgungsausfall eines Gases\n",
                "Schloss zur Verriegelung der Gemischeinstellung\n"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "Alarmmodul AM3: integrierte Eingangsdrucküberwachung mit digitalem Display für Druckanzeige (bei analogen Drucktransmittern) und optischen Alarm, einstellbare Alarmgrenzen, Quittierungspflicht, Sicherung der Alarme mit Zeitangabe, Schnittstellen z.B. zur Steuerung externer Alarme etc.- Spannungsversorgung betreiberseitig erforderlichh"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehörauf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "csm_gasmischer_mg_fix_flex_d_d1a5387d70.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mg_fix_flex_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Gasmischer.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmischer",
            content: ""
        }
    ]
};

function MgFlexSeries() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MgFlexSeries;