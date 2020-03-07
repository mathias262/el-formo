import React, { useState } from 'react'
import ReactDOM from 'react-dom'

type IconProps = {
    name: string
    [x: string]: any
}

const getIcon = async name => {
    const { default: icon } = await import(
        `../../../icon-builder-example/build/module-icons/${name}.js`
    )
    return icon
}

const CIcon = (props: IconProps) => {
    let {
        stroke = 'currentColor',
        fill = 'none',
        strokeLinecap = 'round',
        strokeLinejoin = 'round',
        strokeWidth = '2',
        width = '1em',
        height = '1em',
        viewBox = '0 0 24 24',
        role = 'img',
        cacheRoot = document.getElementById('svg-root'),
        cache = true
    } = props

    const [icon, setIcon] = useState({
        source: '',
        metadata: { width: '', height: '' }
    })

    getIcon(props.name)
        .then(icon => {
            setIcon(icon)
        })
        .catch(error => console.log(error))

    const ariaLabel = `Icon ${props.name}`
    const iconId = `#svg-${props.name}`
    const isCached = cacheRoot.querySelector(iconId)

    const defaultsSvgAttr = {
        ariaLabel,
        height,
        role,
        width,
        viewBox
    }

    const defaultsPathAttr = {
        fill,
        stroke,
        strokeLinecap,
        strokeLinejoin,
        strokeWidth
    }

    return (
        <>
            {!icon.source && <div>...</div>}
            {icon.source && cache && cacheRoot && (
                <>
                    <svg {...defaultsSvgAttr} {...props}>
                        <use href={iconId} xlinkHref={iconId}></use>
                    </svg>
                    {!isCached &&
                        ReactDOM.createPortal(
                            <g
                                dangerouslySetInnerHTML={{
                                    __html: icon.source
                                }}
                                id={iconId.slice(1, iconId.length)}
                                {...defaultsPathAttr}
                            ></g>,
                            cacheRoot
                        )}
                </>
            )}
            {icon.source && !cache && (
                <svg
                    aria-label={ariaLabel}
                    dangerouslySetInnerHTML={{ __html: icon.source }}
                    {...defaultsSvgAttr}
                    {...defaultsPathAttr}
                    {...props}
                ></svg>
            )}
        </>
    )
}

export default CIcon
