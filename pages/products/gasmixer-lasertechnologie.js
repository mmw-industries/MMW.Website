import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer in der Lasertechnologie",
    description: "Individuelle Lösungen für höchste Gasreinheit und Wirtschaftlichkeit",
    keywords: "Gasmischer, Lasertechnologie",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_km40_2d4a1d67cd.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-lasertechnologie",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer Lasertechnologie",
    productTitle: "Gasmischer in der Lasertechnologie",
    overviewHeader: "Individuelle Lösungen für höchste Gasreinheit und Wirtschaftlichkeit",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "perfekte Abstimmung auf Ihre Laseranlage\n",
                "Prozess- und Resonanzgase in höchster Reinheit\n",
                "immer die korrekte Gasmenge\n",
                "immer das exakte Mischverhältnis\n",
                "wirtschaftliche, flexible Lösung"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_km40_2d4a1d67cd.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Laseranlagen spielen heute beim Schweißen und Schneiden von Metallen eine große Rolle. Die Leistung und Qualität von Laseranlagen wird entscheidend von der Zusammensetzung der verwendeten Prozess- und Resonanzgase beeinflusst.",
    informationContent: [
        "Gasmischer von WITT garantieren nicht nur die zuverlässige Bereitstellung von Gasen in der benötigten Menge und dem exakten Mischverhältnis, sondern sind speziell für eine möglichst hohe Reinheit der Gase optimiert. Weitere Vorteile der Gasmischer sind die hohe Flexibilität im Mischverhältnis und nicht zuletzt Kostenreduzierung im Vergleich zu vorgemischten Betriebsgasen.",
        "Bei der Auslegung, Konstruktion und Fertigung von Gasmischern für Laseranwendungen verfügt WITT-GASETECHNIK über langjährige Erfahrung. In enger Zusammenarbeit mit führenden Herstellern von CO2-Lasern realisiert das Unternehmen seit Jahren erfolgreich spezielle Kundenlösungen."
    ],
    downloads: [
        {
            image: "Broschuere_Gasmischer.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmischer",
            content: ""
        },
        {
            image: "csm_Amada_Laserschneiden_Gasmischer_DE_f671297ee8.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Amada_Laserschneiden_Gasmischer_DE.pdf",
            title: "Praxisbeispiel: Gasmischer für Laserschneiden",
            content: ""
        }
    ]
};

function GasMixerLaserTechnologie() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default GasMixerLaserTechnologie;