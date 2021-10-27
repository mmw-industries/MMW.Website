function ProductDownloads({data}) {
    return (
        <>
            {data.downloads && data.downloads.length > 0 && (
                <>
                    <section
                        id="downloads"
                        className="wide-70"
                    >
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-12 offset-0 col-lg-10 offset-lg-1 ">
                                    <h3 className="information-header">Downloads</h3>
                                    <p>Hier finden Sie die wichtigsten Downloads zum Produkt.</p>
                                    <div className="row d-flex pt-20 gap-5">
                                        {data.downloads.map(item => {
                                            return (
                                                <div
                                                    className="download-item col-lg-5 d-flex"
                                                    onClick={() => window.open(item.link, "_blank")}
                                                >
                                                    <img
                                                        style={{objectFit: 'contain'}}
                                                        className="shadow-sm"
                                                        src={item.image}
                                                        width={100}
                                                        height={150}
                                                    />
                                                    <div
                                                        className="d-flex flex-column pl-15">
                                                        <p>
                                                            {item.title}
                                                        </p>
                                                        <span>
                                                            {item.content}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}</>
    )
}

export default ProductDownloads;