import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer KM - MEM Serie",
    description: "Leistungsstarker Gasmischer für 2 oder 3 Gase, insbesondere für MAP- Verpackungsmaschinen und stark schwankende Mischgas-Entnahmemengen",
    keywords: "Leistungsstarker Gasmischer, MAP, Gasmischer, 2 Gase, 3 Gase",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/b/9/csm_witt_gas_mixer_km100-2mem_aaeb50cca3.png",
    og_url: "https://mmw.industries/products/Gasmischer KM - MEM Serie",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer KM - MEM Serie",
    productTitle: "Gasmischer KM - MEM Serie",
    overviewHeader: "Leistungsstarker Gasmischer für 2 oder 3 Gase, insbesondere für MAP- Verpackungsmaschinen und stark schwankende Mischgas-Entnahmemengen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "einstellbares Mischventil\n",
                "variable, stufenlose Gemischeinstellung\n",
                "hohe und kleinste Entnahmen bei gleichbleibender Mischgenauigkeit\n",
                "unabhängig von Druckschwankungen, Verpackungsgrößen und -geschwindigkeiten\n",
                "Überwachung der Gasversorgung\n",
                "integrierte Eingangsdrucküberwachung\n",
                "arbeitet nur mit ausreichendem Puffer"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/b/9/csm_witt_gas_mixer_km100-2mem_aaeb50cca3.png",
        "https://www.wittgas.com/fileadmin/_processed_/9/1/csm_witt_gas_mixer_km100-3mem_ef0f50b292.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km100_200_2_3mem_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 oder 3 Gase speziell für Vakuum-Verpackungsmaschinen in der Lebensmittelindustrie und für Anwendungen mit großen Schwankungen der Mischgas-Entnahmemengen.",
    informationContent: [
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über Drehknöpfe und %-Skala\n",
                "sowohl hohe Momentanverbräuche wie auch kleinste Entnahmen bei gleichbleibender Mischgenauigkeit möglich durch Verbindung mit Pufferbehälter (min. 10 l Volumen)"
            ]
        },
        {
            type: 'list',
            header: "Konstante Qualität:",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung\n",
                "unabhängig von Verpackungsgeschwindigkeiten\n",
                "unabhängig von Verpackungsgrößen"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit:",
            items: [
                "Alarmmodul NXT+: integrierte Eingangsdrucküberwachung mit digitalem Display für Druckanzeige (bei analogen Drucktransmittern) und optischen Alarm, einstellbare Alarmgrenzen, Quittierungspflicht, Sicherung der Alarme mit Zeitangabe, Schnittstellen z.B. zur Steuerung externer Alarme etc.\n",
                "Überwachung der Gasversorgung durch Druckschalter\n",
                "abschließbare Sichtscheibe zum Schutz der Geräteeinstellungen"
            ]
        },
        {
            type: 'list',
            header: "Hygienefreundlich:",
            items: [
                "spritzwassergeschütztes, unempfindliches Edelstahlgehäuse\n",
                "glatte und leicht zu reinigende Oberfläche für perfekte Hygiene"
            ]
        },
        "",
        "Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/6/csm_gasmischer_km100_200_2_3mem_d_a6f7cf92be.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km100_200_2_3mem_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/6/csm_Gasmischer_D_63720b3725.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
            content: ""
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/7/csm_MAP_Obst_Gemuese_D_def4e74d64.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Obst_Gemuese_D.pdf",
            title: "Broschüre MAP Obst & Gemüse",
            content: ""
        }
    ]
};

function KmMemSeries() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default KmMemSeries;