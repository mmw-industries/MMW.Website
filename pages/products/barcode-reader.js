import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Barcode-Reader",
    description: "Zur Auswahl von Produktnamen und Benutzern via Barcode für MAPY, LEAK-MASTER® EASY PLUS, PRO und MAPMAX",
    keywords: "Barcode-Reader, MAPY, LEAK-MASTER®, LEAK-MASTER® EASY PLUS, LEAK-MASTER® PRO , LEAK-MASTER® MAPMAX",
    og_image: "https://www.mmw.industries/images/products/csm_barcode_reader_IP65_a517c9b1b6.jpg.webp",
    og_url: "https://mmw.industries/products/barcode-reader",
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
        "csm_barcode_reader_IP65_a517c9b1b6.jpg.webp"
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