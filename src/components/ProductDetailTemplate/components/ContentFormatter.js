import uuid from 'react-uuid'

function ContentFormatter({data}) {
    return (
        <>
            {data && data.length > 0 && (
                data.map(item => {
                    if (typeof item === 'string') {
                        return (
                            <p key={uuid()}>{item}</p>
                        )
                    }
                    if (typeof item === 'object' && item.type) {
                        if (item.type === 'span') {
                            return (
                                <div key={uuid()} className="pt-5">
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
                                <div key={uuid()}>
                                    {item.header && item.header !== "" && (
                                        <p className="section-subTitle">
                                            {item.header}
                                        </p>
                                    )}
                                    <ul className="list">
                                        {item.items.map(item => {
                                            return (
                                                <li key={uuid()}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                        if(item.type === 'html') {
                            return item.content();
                        }
                    }
                })
            )}
        </>
    )
}

export default ContentFormatter;