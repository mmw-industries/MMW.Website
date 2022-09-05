import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Datenlogger für Druck und Temperatur PATBOX",
    description: "Kompakter Datenlogger für Druck und Temperatur",
    keywords: "",
    og_image: "https://www.mmw.industries/images/products/csm_Data_logger_pressure_temperature_PATBOX_8b588412b9.jpg.webp",
    og_url: "https://mmw.industries/products/patbox",
};

const data = {
    breadCrumb: "Startseite / Produkte / PATBOX",
    productTitle: "Datenlogger für Druck und Temperatur PATBOX",
    overviewHeader: "Kompakter Datenlogger für Druck und Temperatur",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Druckbereich: 1 bis 2.000 mbar\n",
                "Temperaturbereich: -20 bis 60°C\n",
                "Intervall zwischen 100 ms und 12 Stunden\n",
                "Flash-Speicher für bis zu 600.000 Einträge\n",
                "Bedienung per Android App\n",
                "drahtlose NFC Kommunikation\n",
                "kabelloses Laden"
            ]
        },
    ],
    productImages: [
        "csm_Data_logger_pressure_temperature_PATBOX_8b588412b9.jpg.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/datenlogger_patbox_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Eine hoch mobile Lösung für die schnelle und präzise Datenerfassung von Druck und Temperatur überall in der Produktion.\n" +
        "Der kompakte Datenlogger eignet sich zur Messung und Aufzeichnung von Druck und Temperatur in der Umgebung.",
    informationContent: [
        "Mit dem PATBOX Datenlogger für Druck und Temperatur können beispielsweise Maschinen, die mit einem Vakuum arbeiten, eingestellt oder der Druck innerhalb von Schutzgasverpackungen kontrolliert werden.",
        "Die Handhabung des kleinen Helfers mit OLED Display ist denkbar einfach. Die PATBOX muss nicht angeschlossen werden, sondern ermittelt über eingebaute Sensoren Druck und Temperatur in ihrer Umgebung:\n" +
        "\n",
        "Gemessen wird in einem weiten Bereich von 1 bis 2.000 mbar bzw. -20 bis 60 °C. Nach dem Start über Taste oder Timer speichert die Box ihre Messungen in Intervallen von 100ms, 1s, 10s oder 1min. Der interne Flash-Chip nimmt 600.000 Einträge auf: bei zehn Messungen pro Sekunde ist also auch ein extrem genaues Verlaufs-Monitoring bis 16 Stunden ergänzend zur reinen Stichprobe möglich.",
        "Im Vergleich zu anderen Geräten erfolgt die Kommunikation nicht per USB-Kabel, sondern per NFC Funkübertragung. Per Smartphone- oder Tablet-App für Android sind die Daten auslesbar.",
        "Weitere Besonderheit: Geladen wird der Akku drahtlos auf einer Ladeschale.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "hochmobile und präzise Messung und Aufzeichnung von Druck und Temperatur\n",
                "extrem kleine Baugröße\n",
                "erhöhte Prozesssicherheit\n",
                "modernste Sensortechnologie\n",
                "komfortable Konfiguration und Software-Update per Android App\n",
                "einfache Übertragung der Daten per NFC\n",
                "großer Druckbereich von 1 bis 2.000 mbar\n",
                "weiter Temperaturbereich von -20 bis 60 °C\n",
                "brilliante OLED-Grafikanzeige\n",
                "Ladeschale für drahtlose Aufladung des Akkus"
            ]
        },
        {
            type: 'list',
            header: "Lieferumfang komplett inklusive:",
            items: [
                "Ladeschale\n",
                "PATBOX Control App für Android zum Auslesen der Daten (das Android Gerät ist nicht im Lieferumfang enthalten)\n",
                "ausführliche Bedienungsanleitung"
            ]
        },
    ],
    downloads: [
        {
            image: "csm_datenlogger_patbox_d_20329650b3.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/datenlogger_patbox_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
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