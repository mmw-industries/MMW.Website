import Layout from "../../src/layout/Layout";
import {MenuProductsList} from "../../src/pageComponents/products/MenuProductsList";
import Link from "next/link";

const meta = {
    title: "Produktüberischt",
    description: "Überischt aller Produkte",
    keywords: "MapQS, Gasverfahrenstechnik - Prozessanalytik, Gassicherheitstechnik, Servicedienstleistungen, individuelle Softwareentwicklung",
    og_image: "https://mmw.industries/images/factory-worker-service.jpg",
    og_url: "https://mmw.industries/products",
};

const Products = () => {
    return (
        <Layout navHoverColor="nav-blue-hover"
                meta={meta}
                singlePage>
            <section
                id="terms-page"
                className="header wide-70 inner-page-hero terms-section division"
            >
                <div className="terms-title text-center">
                    <h1 className="h2-md">Produktübersicht</h1>
                    <p>Hier finden Sie eine Auflistung aller unserer Produkte.</p>
                </div>
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
                        <path
                            fill="#ffffff"
                            fillOpacity={1}
                            d="M0,192L1440,96L1440,320L0,320Z"
                        />
                    </svg>
                </div>
            </section>
            <div className="d-flex flex-column"
            >
                {MenuProductsList.map((group, index) => {
                    return (
                        <div className={`pt-40 ${index % 2 == 1 ? 'bg-snow' : ''}`}>
                            <div className="container col-12 col-sm-9 col-xl-7 pb-40">
                                <h3 style={{marginTop: 20, marginBottom: 20}}>{group.header}</h3>
                                <div
                                    className="container d-flex flex-wrap"
                                    style={{rowGap: 40}}
                                >
                                    {group.items.map(itemsGroup => {
                                        return (
                                            <ul key={itemsGroup.header}
                                                className="col-12 col-sm-6 col-lg-6 col-xl-4"
                                                style={{textAlign: 'left'}}
                                            >
                                                <h6>
                                                    {itemsGroup.header}
                                                </h6>
                                                {itemsGroup.items.map(item => {
                                                    return (
                                                        <li key={item.title}
                                                            style={{paddingLeft: 5}}
                                                        >
                                                            <a
                                                                target={item.externalLink ? '_blank' : ''}
                                                                href={ item.link ||item.externalLink}
                                                            >
                                                                {item.title}
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr className="divider"/>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
};

export default Products;