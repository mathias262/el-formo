import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// https://www.w3.org/TR/SVG11/

export interface ElIconI18n {
    ariaLabel: string
}

export interface ElIconProps {
    name: string
    i18n: ElIconI18n
    [x: string]: any
}

const getSvg = async name => {
    const { default: svg } = await import(
        `../../../icon-builder-example/build/module-icons/${name}.js`
    )
    return svg
}

const ElIcon = ({ i18n, ...props }: ElIconProps) => {
    const {
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

    const [svg, setSvg] = useState({
        source: '',
        metadata: { width: '', height: '' }
    })

    getSvg(props.name)
        .then(svg => {
            setSvg(svg)
        })
        .catch(error => console.log(error))

    const svgId = `#svg-${props.name}`
    const isCached = cacheRoot.querySelector(svgId)

    const defaultsSvgAttr = {
        'aria-label': i18n.ariaLabel,
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
            {!svg.source && <div>...</div>}
            {svg.source && cache && cacheRoot && (
                <>
                    <svg {...defaultsSvgAttr} {...props}>
                        <use href={svgId} xlinkHref={svgId}></use>
                    </svg>
                    {!isCached &&
                        ReactDOM.createPortal(
                            <g
                                dangerouslySetInnerHTML={{
                                    __html: svg.source
                                }}
                                id={svgId.slice(1, svgId.length)}
                                {...defaultsPathAttr}
                            ></g>,
                            cacheRoot
                        )}
                </>
            )}
            {svg.source && !cache && (
                <svg
                    dangerouslySetInnerHTML={{ __html: svg.source }}
                    {...defaultsSvgAttr}
                    {...defaultsPathAttr}
                    {...props}
                ></svg>
            )}
        </>
    )
}

export default ElIcon
