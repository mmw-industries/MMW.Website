import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "DRC-2",
    description: "Datenlogger mit bis zu 35 Eingängen und bis zu 4 Ausgängen",
    keywords: "",
    og_image: "https://www.mmw.industries/images/products/drc27-2-png.webp",
    og_url: "https://mmw.industries/products/drc",
};

const data = {
    breadCrumb: "Startseite / Produkte / DRC-2",
    productTitle: "DRC-2",
    overviewHeader: "DRC-2 Datenlogger mit bis zu 35 Eingängen und bis zu 4 Ausgängen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "bis zu 32 IO Eingänge (jeder Eingang umschaltbar zwischen 0-10V, 0-20ma/4-20mA, Digital In (10-24V)",
                "3 RS232 Eingänge",
                "bis zu 4 potentialfreie Wechselkontakte (NO/NC)",
                "10\" Multitouchdisplay",
                "Ethernet-Schnittstelle",
                "Web-Interface",
                "integrierte Datenaufzeichnug bis zu 60 Tage (Ringspeicher)",
                "optionale Serversoftware mit Datenbankanbindung",
                "19\" Gehäuse mit 4HE oder Tischgehäuse"
            ]
        },
    ],
    productImages: [
        "drc27-2.png.webp"
    ],
    datasheetLink: "",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "",
    informationContent: [
        "Mit der neuen Generation des DRC Datenlogger, dem DRC-2 haben Sie alle Ihre Prozessdaten per Plug & Play stets aufgezeichnet.",
        "Durch die frei konfigurierbaren Eingänge ist die einfache, schnelle und effiziente Erfassung Ihrer Prozessdaten gewährleistet. Die interne Datenaufzeichnung macht denn DRC-2 auch offline einsetzbar, wodurch er sich auch für Serviceeinsätze bewährt hat.",
        "Der DRC-2 ist verfügbar im 19\" Rackgehäuse mit 4HE oder im praktischen und handlichen Tischgehäuse.",
        {
            type: 'list',
            header: "Art der Eingangssignale:",
            items: [
                "0-10V",
                "0-20mA",
                "4-20mA",
                "Digital In (10-24V)",
                "RS-232"
            ]
        },
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "bis zu 32 IO Eingänge (jeder Eingang umschaltbar zwischen 0-10V, 0-20ma/4-20mA, Digital In (10-24V)",
                "3 RS232 Eingänge",
                "bis zu 4 potentialfreie Wechselkontakte (NO/NC)",
                "10\" Multitouchdisplay",
                "Ethernet-Schnittstelle",
                "Web-Interface",
                "integrierte Datenaufzeichnug bis zu 60 Tage (Ringspeicher)",
                "optionale Serversoftware mit Datenbankanbindung",
                "19\" Gehäuse oder Tischgehäuse",
                "Einstellbares Logginginterval von 1 Sekunde bis 12 Stunden",
                "Grafische Echtzeitdarstellung direkt am 10\" Display"
            ]
        },
        "",
        "Mehr Eingänge auf Anfrage möglich.",
    ],
    downloads: []
};

function Patbox() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Patbox;