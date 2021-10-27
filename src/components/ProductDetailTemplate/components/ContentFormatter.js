function ContentFormatter({data}) {
    return (
        <>
            {data && data.length > 0 && (
                data.map(item => {
                    if (typeof item === 'string') {
                        return (
                            <p>{item}</p>
                        )
                    }
                    if (typeof item === 'object' && item.type) {
                        if (item.type === 'span') {
                            return (
                                <div className="pt-5">
                                    {item.content.split("\n").map(item2 => {
                                            return (
                                                <span>
                                                    {item2}<br/>
                                                </span>
                                            )
                                        }
                                    )}
                                </div>
                            )
                        }
                        if (item.type === 'list') {
                            return (
                                <>
                                    {item.header && item.header !== "" && (
                                        <p className="section-subTitle">
                                            {item.header}
                                        </p>
                                    )}
                                    <ul className="list">
                                        {item.items.map(item => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </>
                            )
                        }
                    }
                })
            )}
        </>
    )
}

export default ContentFormatter;