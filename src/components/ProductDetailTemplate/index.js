import Layout from "../../layout/Layout";
import ProductDownloads from "./components/ProductDownloads";
import ProductInformations from "./components/ProductInformations";
import ProductVideo from "./components/ProductVideo";
import ProductOverview from "./components/ProductOverview";
import ProductAccessories from "./components/ProductAccessories";

function ProductDetailTemplate({meta, data}) {

    return (
        <>
            <Layout navHoverColor="nav-blue-hover tra-grey-hover"
                    meta={meta}
            >
                <ProductOverview
                    data={data}
                />
                <ProductVideo
                    data={data}
                />
                <ProductInformations
                    data={data}
                />
                <ProductDownloads
                    data={data}
                />

                <ProductAccessories
                    data={data}
                />
                <hr className="divider"/>
            </Layout>
        </>
    )
}

export default ProductDetailTemplate;