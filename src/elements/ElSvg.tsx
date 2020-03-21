import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { css } from 'goober'

// https://www.w3.org/TR/SVG11/

import { ElInterface } from '../utils/types/types'

export interface ElSvgProps extends ElInterface {
    cache?: boolean
    cacheRoot?: HTMLElement
    height?: string
    name: string
    viewBox?: string
    width?: string
}

const getSvg = async name => {
    const { default: svg } = await import(`@advisa/icons/src/${name}.js`)
    return svg
}

export const ElSvg = ({ i18n, style, ...props }: ElSvgProps) => {
    const {
        width = '1em',
        height = '1em',
        viewBox = '0 0 24 24',
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
        'aria-label': i18n?.ariaLabel ?? '',
        height,
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
        stroke-width: var(--stroke-width-2);
        user-select: none;
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