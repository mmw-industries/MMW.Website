import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Rückspülfilter",
    description: "Rückspüleinrichtung für Inline-Gasanalysatoren gegen verstopfte Filter im Gaseingang",
    keywords: "Rückspüleinrichtung, Inline, Gasanalyse, Filter",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/8/d/csm_WITT_back_purging_filter_front_e0ba5b116e.jpg",
    og_url: "https://mmw.industries/products/backwash-filter",
};

const data = {
    breadCrumb: "Startseite / Produkte / Rückspülfilter",
    productTitle: "Rückspülfilter",
    overviewHeader: "Rückspüleinrichtung für Inline-Gasanalysatoren gegen verstopfte Filter im Gaseingang",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "unkomplizierte Inline-Gasanalyse auch bei pulverhaltigen Produkten, z.B. Milchpulver, Kaffee oder Mehl\n",
                "spült automatisch oder auf Knopfdruck\n",
                "Verschmutzungen werden aufgefangen\n",
                "sorgt für einen reibungslosen Prozess"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/8/d/csm_WITT_back_purging_filter_front_e0ba5b116e.jpg",
        "https://www.wittgas.com/fileadmin/_processed_/8/8/csm_WITT_back_purging_filter_back_c634895d0f.png"
    ],
    datasheetLink: "",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Milchpulver, Kaffee oder Mehl – immer wieder führen diese Produkte zu verstopften Filtern bei Inline-Gasanalysatoren. Der neue Rückspülfilter von WITT verhindert effektiv und auf Wunsch selbsttätig das Verstopfen der Filter.",
    informationContent: [
        "Der Rückspülfilter kommt in einem separaten Gehäuse und dient als Analysegaseingangsfilter für Inline-Gasanalysatoren. Er wird vor allem dann eingesetzt, wenn das Analysegas verschmutzt bzw. mit Feststoffen versetzt ist, also z.B. beim Verpacken von pulverförmigen Produkten.",
        "Im Innern der Einrichtung wird das Analysegas durch ein Filterelement geleitet. Der Filter verfügt über Drucktransmitter, die über den Druckabfall den Verschmutzungsgrad ermitteln können. Bei Erreichen des Grenzwertes wird ein Signal aktiviert. Auf Knopfdruck kann der Spülvorgang aktiviert werden. Mittels mehrerer Druckstöße entgegen der Flussrichtung des Analysegases wird das Filterelement freigespült. Die gelösten Verschmutzungen werden in einem Auffangbeutel gesammelt.",
        "Statt der manuell ausgelösten Spülung ist auch ein Automatikmodus möglich. In diesem wird bei Erreichen des Grenzwertes der Spülvorgang ganz automatisch ohne Eingreifen des Anwenders durchgeführt. Bei beiden Varianten gelangt während des Spülvorgangs kein Gas zum Analysator. Im Workflow muss also individuell die Kommunikation zum Analysator bzw. zur Verpackungsmaschine berücksichtigt werden. Der Rückspülfilter verfügt über entsprechende Kontakte, um Signale an vor- oder nachgeschaltete Systeme zu senden. Es ist in jedem Fall notwendig, für den Spülvorgang ein zusätzliches, unter Druck stehendes Gas anzuschließen."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/c/csm_rueckspuelfilter_d_9b7f011c1f.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/rueckspuelfilter_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function BackWashFilter() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default BackWashFilter;