import React from 'react'
import ReactDOM from 'react-dom'

import FeatherIcons from 'feather-icons'

type IconProps = {
    name: string
    [x: string]: any
}

export const CIcon = (props: IconProps) => {
    let {
        stroke = 'currentColor',
        width = '1em',
        height = '1em',
        cacheRoot = document.getElementById('svg-root'),
        cache = true
    } = props

    const icon = FeatherIcons['icons'][props.name]
    const iconId = `#svg-${props.name}`
    const ariaLabel = `Icon ${props.name}`

    if (cache && cacheRoot) {
        const isCached = cacheRoot.querySelector(iconId)
        return (
            <>
                <svg
                    {...icon.attrs}
                    aria-label={ariaLabel}
                    className={false}
                    height={height}
                    role="img"
                    stroke={stroke}
                    width={width}
                    {...props}
                >
                    <use href={iconId} xlinkHref={iconId}></use>
                </svg>
                {!isCached &&
                    ReactDOM.createPortal(
                        <g
                            aria-label={ariaLabel}
                            id={iconId.slice(1, iconId.length)}
                            dangerouslySetInnerHTML={{
                                __html: icon.toString()
                            }}
                        ></g>,
                        cacheRoot
                    )}
            </>
        )
    } else {
        return (
            <svg
                {...icon.attrs}
                aria-label={ariaLabel}
                className={false}
                height={height}
                role="img"
                stroke={stroke}
                width={width}
                {...props}
                dangerouslySetInnerHTML={{ __html: icon.toString() }}
            ></svg>
        )
    }
}
