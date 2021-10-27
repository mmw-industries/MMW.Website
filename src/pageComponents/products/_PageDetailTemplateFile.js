import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "",
    description: "",
    keywords: "",
    og_image: "",
    og_url: "https://mmw.industries/",
};

const data = {
    breadCrumb: "Startseite / Produkte / xxxxxx",
    productTitle: "",
    overviewHeader: "",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                ""
            ]
        },
    ],
    productImages: [
        ""
    ],
    datasheetLink: "",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "",
    informationContent: [
        "",
        {
            type: 'list',
            header: "",
            items: [
                ""
            ]
        },
        {
            type: 'span',
            content: ""
        }
    ],
    downloads: [
        {
            image: "",
            link: "",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function _PageDetailTemplateFile() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default _PageDetailTemplateFile;