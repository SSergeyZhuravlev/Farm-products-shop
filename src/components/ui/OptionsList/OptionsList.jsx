export const OptionsList = ( { content } ) => {
    return (
        <ul>
            {
                content.map((item, index) => {
                    return (<li key={index * 10}>
                        <span>{`${item.property}: `}</span>
                        <span>{item.value}</span>
                    </li>)
                })
            }
        </ul>
    )
}