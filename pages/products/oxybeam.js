import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasanalysator OXYBEAM",
    description: "Laser-Gasanalysator (O2 oder CO2) für zerstörungsfreie Stichproben von Verpackungen",
    keywords: "Gasanalysator, Laser-Gasanalysator, O2, CO2, zerstörungsfreie Stichproben,  Restsauerstoff, Restsauerstoffmessung, Restsauerstoffanalyse",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/d/0/csm_witt_gas_analyser_oxybeam_f79fba7e87.png",
    og_url: "https://mmw.industries/products/oxybeam",
};

const data = {
    breadCrumb: "Startseite / Produkte / OXYBEAM",
    productTitle: "Gasanalysator OXYBEAM",
    overviewHeader: "Laser-Gasanalysator (O2 oder CO2) für zerstörungsfreie Stichproben von Verpackungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "hochmoderne Lasertechnologie zur Bestimmung des O2- oder CO2-Gehaltes\n",
                "zuverlässig, genau und schnell\n",
                "zerstörungsfreie Messung vermeidet Ausschuss-Kosten\n",
                "für Verpackungen mit transparentem Folienbereich und einer Kopfraumhöhe von 5-80 mm\n",
                "leichte Bedienbarkeit über Touch-Screen\n",
                "kein Augenschutz erforderlich\n",
                "USB- und Ethernet-Anschluss"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/d/0/csm_witt_gas_analyser_oxybeam_f79fba7e87.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybeam_d.pdf",
    youtubeVideo: "<iframe width=\"703\" height=\"396\" src=\"https://www.youtube.com/embed/9I9o_UBltso\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    informationHeader: "Der Gasanalysator OXYBEAM nutzt Laserlicht und ermittelt den O2- oder CO2-Gehalt in transparenten Verpackungen, ohne diese zu beschädigen. Die zerstörungsfreie Stichprobenprüfung für optimale Qualität und Wirtschaftlichkeit in der Produktion.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "zuverlässige O2- oder CO2-Analyse\n",
                "zerstörungsfreie Prüfung von schutzgasverpackten Lebensmitteln (MAP)\n",
                "auch geeignet für wiederholte Tests im Rahmen von Langzeitbeobachtungen\n",
                "leichte Bedienbarkeit über Touch-Screen\n",
                "USB Anschluss zur Datenübertragung\n",
                "Ethernet Anschluss zur Einbindung in Netzwerke\n",
                "wartungsarm und robust\n",
                "geringer Kalibrieraufwand\n",
                "kein Augenschutz erforderlich\n",
                "für O2-Messungen ab 5 mm Verpackungshöhe mittels zusätzlicher Auflageplatte mit magnetischer Fixierung (optional)"
            ]
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/2/csm_gasanalysator_oxybeam_d_cd3d427117.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybeam_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function Oxybeam() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Oxybeam;