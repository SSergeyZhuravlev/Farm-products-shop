export const TITLE_SIZE = {
    big: 'big',
    medium: 'medium',
    small: 'small',
}

export const Title = ( { children, priority, className } ) => {
    const CustomTag = `h${priority}`;

    return (
        <CustomTag className={`${className}`}>{children}</CustomTag>
    )
}