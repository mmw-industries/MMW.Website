import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Vakuum-Set für LEAK-MASTER® EASY",
    description: "Dichtheitsprüfung für Verpackungen auf Wasserbasis",
    keywords: "",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/0/7/csm_Wuerstchen_597eaafec6.png",
    og_url: "https://mmw.industries/products/leak-master-easy-vakuum-set",
};

const data = {
    breadCrumb: "Startseite / Produkte / Vakuum-Set LEAK-MASTER® EASY",
    productTitle: "Vakuum-Set für LEAK-MASTER® EASY",
    overviewHeader: "Dichtheitsprüfung für Verpackungen auf Wasserbasis",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "ermöglicht das Prüfen von Vakuumpackungen mit dem LEAK-MASTER® EASY\n" ,
                "kostengünstig und unkompliziert\n" ,
                "Sichtprüfung ermöglicht Lokalisierung des Lecks"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/0/7/csm_Wuerstchen_597eaafec6.png"
    ],
    datasheetLink: "",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Adapterset zum Prüfen von vakuumverpackten Produkten und Produkten mit geringem Gasvolumen.",
    informationContent: [
        "Einfache Installation und Bedienung."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/a/csm_dichtheitspruefung_leak_master_easy_kpl_d_4754256506.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_easy_kpl_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/2/6/csm_MAP_Dichtheitspruefung_33cfa6b536.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Dichtheitspruefung.pdf",
            title: "Broschüre Dichtheitsprüfung",
            content: ""
        },
    ]
};

function LeakMasterEasyVakuumSet() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default LeakMasterEasyVakuumSet;