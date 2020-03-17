import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { css } from 'goober'

// https://www.w3.org/TR/SVG11/

export interface IconText {
    ariaLabel: string
}

export interface IconProps {
    name: string
    text: IconText
    [x: string]: any
}

const getSvg = async name => {
    const { default: svg } = await import(`@advisa/icons/src/${name}.js`)
    return svg
}

const Icon = ({ text, style, ...props }: IconProps) => {
    const {
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
        'aria-label': text.ariaLabel,
        height,
        role,
        width,
        viewBox
    }

    const className = css`
        min-width: ${width};
        min-height: ${height};
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
        ${style}
    `

    return (
        <>
            {!svg.source && <div>...</div>}
            {svg.source && cache && cacheRoot && (
                <>
                    <svg className={className} {...defaultsSvgAttr} {...props}>
                        <use href={svgId} xlinkHref={svgId}></use>
                    </svg>
                    {!isCached &&
                        ReactDOM.createPortal(
                            <g
                                dangerouslySetInnerHTML={{
                                    __html: svg.source
                                }}
                                id={svgId.slice(1, svgId.length)}
                            ></g>,
                            cacheRoot
                        )}
                </>
            )}
            {svg.source && !cache && (
                <svg
                    className={className}
                    dangerouslySetInnerHTML={{ __html: svg.source }}
                    {...defaultsSvgAttr}
                    {...props}
                ></svg>
            )}
        </>
    )
}

export default Icon
