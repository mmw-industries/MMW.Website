function ProductVideo({data}) {
    return (
        <>
            {data.youtubeVideo && data.youtubeVideo !== "" && (
                <div className="d-flex justify-content-center pt-50">
                    <div
                        dangerouslySetInnerHTML={{__html: `${data.youtubeVideo}`}}/>
                </div>
            )}
        </>
    )
}

export default ProductVideo;