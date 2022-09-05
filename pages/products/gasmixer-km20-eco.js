import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer KM20-ECO",
    description: "Kompakter Gasmischer, speziell für Schankanlagen mit SK-Zulassung",
    keywords: "Gasmischer Schankanlagen, CO2, N2",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_km20-eco_94b46d4ec3.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-km20-eco",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer KM20-ECO",
    productTitle: "Gasmischer KM20-ECO",
    overviewHeader: "Kompakter Gasmischer, speziell für Schankanlagen mit SK-Zulassung",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "zur Herstellung von 1 oder 2 voreingestellten Gemischen aus CO2 und N2\n",
                "Vermeidung von Aufkarbonisierung (reduziert Produktverlust, spart Geld und Zeit)\n",
                "optimale Anpassung des CO2-Gehaltes an das Getränk\n",
                "Kostenersparnis, da keine Vorratshaltung von verschiedenen Vorgemischen erforderlich\n",
                "einfache Handhabung durch voreingestellte Gemische (keine unbeabsichtigte Gemischverstellung)\n",
                "rein pneumatisches Funktionsprinzip, keine Spannungsversorgung notwendig"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_km20-eco_94b46d4ec3.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km20_2eco_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Speziell für den Einsatz in Getränkeschankanlagen konzipierter Mischer. Er dient zur Herstellung von 1 oder 2 voreingestellten Gemischen aus Kohlendioxid (CO2) und / oder Stickstoff (N2), die für den Getränkeausschank verwendet werden.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "Vermeidung von Aufkarbonisierung (reduziert Produktverlust, spart Geld und Zeit)\n",
                "optimale Anpassung des CO2-Gehaltes an das Getränk\n",
                "Kostenersparnis, da keine Vorratshaltung von verschiedenen Vorgemischen erforderlich\n",
                "einfache Handhabung durch voreingestellte Gemische (keine unbeabsichtigte Gemischverstellung)\n",
                "rein pneumatisches Funktionsprinzip, keine Spannungsversorgung notwendig\n",
                "Auto-Stop der Gemischproduktion bei Versorgungsausfall eines Gases\n",
                "robustes, kompaktes Design\n",
                "Montage kompatibel zu anderen marktüblichenSystemen\n"
            ]
        },
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "csm_gasmischer_km20_2eco_d_10e7eb1b0b.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km20_2eco_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Gasmischer.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
            content: ""
        },
    ]
};

function Km20Eco() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Km20Eco;