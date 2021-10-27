import ContentFormatter from "./ContentFormatter";

function ProductInformations({data}) {
    return (
        <>
            <section
                id="information"
                className="wide-70"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-0 col-lg-10 offset-lg-1 ">
                            <h3 className="information-header">Informationen</h3>
                            <p>
                                <strong>
                                    {data.informationHeader}
                                </strong>
                            </p>
                            {data.informationContent && data.informationContent.length > 0 && (
                                <ContentFormatter
                                    data={data.informationContent}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductInformations;