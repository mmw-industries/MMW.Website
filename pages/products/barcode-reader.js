import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Barcode-Reader",
    description: "Zur Auswahl von Produktnamen und Benutzern via Barcode für MAPY, LEAK-MASTER® EASY PLUS, PRO und MAPMAX",
    keywords: "Barcode-Reader, MAPY, LEAK-MASTER®, LEAK-MASTER® EASY PLUS, LEAK-MASTER® PRO , LEAK-MASTER® MAPMAX",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/7/f/csm_barcode_reader_IP65_d8061035a0.jpg",
    og_url: "https://mmw.industries/",
};

const data = {
    breadCrumb: "Startseite / Produkte / Barcode-Reader",
    productTitle: "Barcode-Reader",
    overviewHeader: "Zur Auswahl von Produktnamen und Benutzern via Barcode für MAPY, LEAK-MASTER® EASY PLUS, PRO und MAPMAX",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "erleichtert Standardisierung des Prozesses\n" ,
                "schnelle und sichere Erfassung aller Produkt- und Userdaten\n" ,
                "für eine Vielzahl von Barcode-Typen"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/7/f/csm_barcode_reader_IP65_d8061035a0.jpg"
    ],
    datasheetLink: "",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Scannen Sie mit dem Barcode-Reader alle relevanten Produkt- und Userdaten über einen Barcode ein, bevor Sie Ihr Produkt prüfen. So wird Ihr Prozess noch schneller und reibungsloser. Für eine optimale Qualitätsprüfung.",
    informationContent: [
    ],
    downloads: [

    ]
};

function BarcodeReader() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default BarcodeReader;