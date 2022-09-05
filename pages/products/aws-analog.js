import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Auswertesystem AWS-Analog",
    description: "Analoges Auswertesystem zur Ansteuerung der WITT MFC-Mischgeräte",
    keywords: "Analoges Auswertesystem, MFC Mischgeräte",
    og_image: "https://www.mmw.industries/images/products/csm_aws_analog_8e22f605ed.png",
    og_url: "https://mmw.industries/products/aws-analog",
};

const data = {
    breadCrumb: "Startseite / Produkte / Auswertesystem AWS-Analog",
    productTitle: "Auswertesystem AWS-Analog",
    overviewHeader: "Analoges Auswertesystem zur Ansteuerung der WITT MFC-Mischgeräte",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "einfache Flammenoptimierung durch individuelle oder proportionale Verstellung der MFC’s (Master-Slave-Modus)\n",
                "Fern-Übertragung der Soll- und Ist-Werte für die Integration in übergeordnete Steuerungen möglich\n",
                "Sollwertvorgabe mittels Präzisionspotentiometer\n",
                "nur 1 AWE je 2-Komponenten-MFC-Gasmischer nötig\n",
                "integrierte Stromversorgung – kein zusätzliches Netzteil notwendig"
            ]
        },
    ],
    productImages: [
        "csm_aws_analog_8e22f605ed.png"
    ],
    datasheetLink: "",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "exakt auf WITT MFC-Mischgeräte abgestimmtes, analoges Auswertesystem\n",
                "nur 1 AWE je 2-Komponenten-MFC-Gasmischer nötig\n",
                "integrierte Stromversorgung – kein zusätzliches Netzteil zur Versorgung der MFC notwendig\n",
                "Ist-Wertanzeige frei skalierbar – ermöglicht einfache Anpassung an unterschiedliche Messbereiche\n",
                "Soll-Wertvorgabe mittels Präzisionspotentiometer\n",
                "Fern-Übertragung der Soll- und Ist-Werte für die Integration in übergeordnete Steuerungen möglich\n",
                "einfache Flammenoptimierung durch individuelle oder proportionale Verstellung der MFC’s (Master-Slave-Modus)\n",
                "leichte Integrierbarkeit durch 19“ Kassettentechnik\n",
                "Tischgehäuse mit bis zu 4 eingebauten Kassetten erhältlich"
            ]
        },
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "csm_auswertesystem_md7_aws_analogue_d_3932646317.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/auswertesystem_md7_aws_analogue_d.pdf",
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

function AwsAnalog() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default AwsAnalog;