import ProductImageSlider from "./ProductImageSlider";
import {Button} from "react-bootstrap";
import {AiOutlineFilePdf, AiOutlineMail} from "react-icons/ai";
import ContentFormatter from "./ContentFormatter";

function ProductOverview({data}) {
    return (
        <>
            <section
                className="header wide-70 her-section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-0 col-lg-10 offset-lg-1 ">
                            <div>
                                {data.breadCrumb}
                            </div>
                            <h1>
                                {data.productTitle}
                            </h1>
                            <div className="row d-flex pt-40">
                                <div className="col-md-12 col-lg-6">
                                    <ProductImageSlider
                                        data={data}
                                    />
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <h4>
                                        {data.overviewHeader}
                                    </h4>
                                    <ContentFormatter
                                        data={data.overviewContent}
                                    />
                                    <div className="row">
                                        {data.datasheetLink && data.datasheetLink !== "" && (
                                            <div className="col-sm-12 col-xl-6">
                                                <Button
                                                    className="btn-datasheet d-flex flex-row align-items-center gap-3"
                                                    onClick={() => window.open(data.datasheetLink, "_blank")}
                                                >
                                                    <AiOutlineFilePdf size={25}/>
                                                    Datenblatt
                                                </Button>
                                            </div>
                                        )}
                                        <div className="col-sm-12 col-xl-6">
                                            <Button
                                                className="btn-contact d-flex flex-row align-items-center gap-3"
                                                onClick={() => window.open("/contacts", "_blank")}
                                            >
                                                <AiOutlineMail/>
                                                Angebotsanfrage
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </>
    )
}

export default ProductOverview;