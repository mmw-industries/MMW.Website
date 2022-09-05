import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer Umschaltstation",
    description: "Schalt- und Überwachungseinheit für die automatische Umschaltung von Gasmischern zur kontinuierlichen Gasentnahme",
    keywords: "Gasmischer, Umschaltstation, Umschaltung",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_switch_unit_c34d12652e.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-switch-station",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer Umschaltstation",
    productTitle: "Gasmischer Umschaltstation",
    overviewHeader: "Schalt- und Überwachungseinheit für die automatische Umschaltung von Gasmischern zur kontinuierlichen Gasentnahme",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Umschaltung bei Fehler auf Standby-Mischer\n",
                "Umschaltung auf Notversorgung (Bündel)\n",
                "wöchentlicher Wechsel der Gasmischer (gleichmäßige Auslastung)\n",
                "bei Spitzenproduktion (hohem Gasverbrauch) werden beide Gasmischer aktiviert"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_switch_unit_c34d12652e.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/umschaltstation_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Schalt- und Überwachungseinheit (Umschalteinrichtung) für die automatische Umschaltung von Gasmischern. Sorgt für einen reibungslosen Arbeitsablauf und optimale Ergebnisse durch kontinuierlichen Gasfluss.\n" +
        "\n",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "intelligente Steuerung, - nach einem NOT-AUS wird die zuletzt angewählte Gasversorgung angesteuert\n",
                "kompatibel mit WITT-Gasmischern\n",
                "schnelle - und einfache Wandmontage\n",
                "optischer Alarm\n",
                "Statusanzeige über Leuchttasten und Display\n",
                "integrierte Notabschaltung\n",
                "steuert Ex-zugelassene Geräte an"
            ]
        },
        {
            type: 'list',
            header: "Verwendung:",
            items: [
                "für die automatische Umschaltung von Gasmischern zur kontinuierlichen Gasentnahme\n",
                "einsetzbar zur Schaltung einer Notversorgung zum Beispiel in Verbindung mit WITT-Gasmischanlagen"
            ]
        },
        {
            type: 'list',
            header: "Funktion:",
            items: [
                "Umschaltung arbeitet übergeordnet"
            ]
        },
        {
            type: 'html',
            content: function () {
                return (
                    <>
                        <p className="section-subTitle">
                            Funktion:
                        </p>
                        <ul className="list">
                            <li>
                                <div>
                                    <span>Umschaltung arbeitet übergeordnet</span>
                                    <span><br/>
                                        3 Zustände sind möglich:<br/>
                                        Aktiv - kein Fehler ⇨ Mischer aktiv<br/>
                                        Standby - kein Fehler ⇨ Mischer nicht aktiviert<br/>
                                        Fehler - Fehler liegt vor ⇨ Fehler beheben / quittieren
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Funktionsumfang:</span>
                                    <span><br/>
                                        - Umschaltung bei Fehler auf Standby-Mischer<br/>
                                        - Umschaltung auf Notversorgung (Bündel)<br/>
                                        - wöchentlicher Wechsel der Gasmischer (gleichmäßige Auslastung)<br/>
                                        - bei Spitzenproduktion (hohem Gasverbrauch) werden beide Gasmischer aktiviert (zusätzliche
                                          Drucktransmitter erforderlich)<br/>
                                        - Umschaltung wenn ein Mischer kalibriert wird (vollautomatische Kalibrierung vorausgesetzt)<br/>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </>
                )
            }
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "passende Magnetventile zur automatischen Umschaltung auf die Notversorgung\n",
                "potentialfreie Kontakte\n",
                "Alarmhupe\n",
                "Rundumleuchte"
            ]
        },
        {
            type: 'list',
            header: "Normen/Baubestimmungen::",
            items: [
                "Unternehmen zertifiziert nach ISO 9001\n",
                "CE-Kennzeichnung gemäß:\n",
                "EMV 2014/30/EU\n",
                "Niederspannungsrichtlinie 2014/35/EU\n",
                "ATEX 114 Richtlinie 2014/34/EU"
            ]
        },
        "",
        "Bei Spitzenproduktion (hohem Gasverbrauch) werden beide Gasmischer aktiviert (optional nach Absprache).\n",
        "Nachrüstung auf Anfrage."
    ],
    downloads: [
        {
            image: "csm_umschaltstation_d_2293a442f8.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/umschaltstation_d.pdf",
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

function GasmixerSwitchStation() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default GasmixerSwitchStation;