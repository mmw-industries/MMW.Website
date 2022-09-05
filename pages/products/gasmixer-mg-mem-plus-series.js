import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer MG MEM+ Serie",
    description: "Elektronischer Gasmischer für 2 oder 3 Gase mit motorgesteuerter Mischventiltechnik, für höhere Durchflüsse",
    keywords: "Elektronischer Gasmischer, 2 Gase, 3 Gase, motorgesteuert, MAP",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_mg50-mem__5a4ee388eb.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-mg-mem-plus-series",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer MG MEM+ Serie",
    productTitle: "Gasmischer MG MEM+ Serie",
    overviewHeader: "Elektronischer Gasmischer für 2 oder 3 Gase mit motorgesteuerter Mischventiltechnik, für höhere Durchflüsse",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "Ansteuerung über serielle Schnittstelle (z.B. PC, Pocket-PC, SPS, Maschinen) inkl. Fernbedienung\n",
                "auch diskontinuierliche Gasentnahme möglich\n",
                "einstellbares Mischventil\n",
                "für Betrieb mit Mischgasbehälter\n",
                "nur ein Bediengerät für unbegrenzt viele Gasmischer\n",
                "hohe und kleinste Entnahmen bei gleichbleibender Mischgenauigkeit möglich"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_mg50-mem__5a4ee388eb.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mg50_2_3mem_plus_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/WR-trKQ0Bc0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    informationHeader: "Elektronischer Gasmischer mit motorgesteuerter Mischventiltechnik für eine Vielzahl technischer Anwendungen. Eine weitere Innovation auf der Basis praxiserprobter WITT – Mischventiltechnologie.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "schnelle Gemischeinstellung < 3 Sek. durch gleichzeitiges Verstellen der Mischventile\n",
                "Bedienung über PC, Pocket-PC, SPS, Maschinensteuerung etc.\n",
                "Fernbedienung\n",
                "Parametereinstellung einfach dokumentierbar für Qualitätsüberwachung\n",
                "nur ein Bediengerät für unbegrenzt viele Mischsysteme\n",
                "Abfrage aller Parameter und Ventilpositionen jederzeit möglich\n",
                "aktuelle Position vom Display ablesbar",
                "Gemischeinstellung in 0,1% Schritten\n",
                "hohe Mischgenauigkeit\n",
                "leichte Bedienbarkeit über Touch-Screen (nach Freischaltung)\n",
                "Gasmischer sind vernetztbar mit PC oder Maschinensteuerung (z.B. CAN-Bus optional)\n",
                "bei Mischern mit 3-Gas-Gemisch ist es durch echten Nullabschluss möglich auch 2-Gas-Gemische zu erzeugen\n",
                "unabhängig von Druckschwankungen in der Gasversorgung\n",
                "unabhängig von Verpackungsgeschwindigkeiten und -größen (Verpackungsindustrie)\n",
                "integrierte Überwachung der Gasversorgung für erhöhte Prozesssicherheit. Zu niedrige Eingangsdrücke erzeugen einen Alarm und schalten einen potentialfreien Kontakt (z.B. zum automatischen Stopp Ihrer Maschine zur Vermeidung von Qualitätsproblemen)\n",
                "hygienefreundlich durch spritzwassergeschütztes Gehäuse mit glatten, leicht zu reinigenden Oberflächen aus gebürstetem Edelstahl\n",
                "Anzeige bei Eingangsdruck-Fehler"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "kontinuierliche Überwachung und Dokumentation der Gasgemischproduktion mittels Gasanalysator\n",
                "Aufbau des Mischsystems auf den Pufferbehälter für vereinfachte Vor-Ort-Montage\n",
                "bei Steuerung über Pocket-PC: abschließbare Sichtscheibe zum Schutz des Pocket-PC\n",
                "Signal-Hupe\n",
                "Alarmleuchte"
            ]
        },
        "",
        "Achtung: Gerät arbeitet nur mit ausreichendem Puffervolumen (je nach Mischgasleistung 100 bis 250 Liter)\n" +
        "Bitte geben Sie bei Anfragen die gewünschten Gasarten an.",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "csm_gasmischer_mg50_2_3mem_plus_d_af0af83237.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mg50_2_3mem_plus_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ],
    accessories: [
        {
            image: "csm_witt_gas_pressure_receiver_steel_250l_2_bf4515c6c8.png.webp",
            link: "https://www.mmw.industries/products/gas-tank",
            title: "Gasbehälter",
            content: "Druckbehälter für Mischgas aus Stahl oder Edelstahl"
        }
    ]
};

function MgMemPlus() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MgMemPlus;