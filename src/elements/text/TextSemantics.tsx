import React from 'react'
import { css } from 'goober'

import { ElementInterface } from '../../utils/types/types'

export interface ElementProps extends ElementInterface {
    tag: string
}

const R = ({ tag, children, style, ...props }: ElementProps) => {
    const className = css`
        margin: 0;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        ${style}
    `
    return React.createElement(tag, {
        children,
        className,
        ...(props || [])
    })
}

/**
 * Anchor tag
 * @param props
 */
export const A = (props: ElementInterface) => <R tag="a" {...props} />
export const Em = (props: ElementInterface) => <R tag="em" {...props} />
export const Strong = (props: ElementInterface) => <R tag="strong" {...props} />
export const Small = (props: ElementInterface) => <R tag="small" {...props} />
export const S = (props: ElementInterface) => <R tag="s" {...props} />
export const Cite = (props: ElementInterface) => <R tag="cite" {...props} />
export const Q = (props: ElementInterface) => <R tag="q" {...props} />
export const Dfn = (props: ElementInterface) => <R tag="dfn" {...props} />
export const Abbr = (props: ElementInterface) => <R tag="abbr" {...props} />
export const Ruby = (props: ElementInterface) => <R tag="Ruby" {...props} />
export const Rt = (props: ElementInterface) => <R tag="rt" {...props} />
export const Rp = (props: ElementInterface) => <R tag="rp" {...props} />
export const Data = (props: ElementInterface) => <R tag="data" {...props} />
export const Time = (props: ElementInterface) => <R tag="time" {...props} />
export const Code = (props: ElementInterface) => <R tag="code" {...props} />
export const Var = (props: ElementInterface) => <R tag="var" {...props} />
export const Samp = (props: ElementInterface) => <R tag="samp" {...props} />
export const Kbd = (props: ElementInterface) => <R tag="kbd" {...props} />
export const Sub = (props: ElementInterface) => <R tag="sub" {...props} />
export const Sup = (props: ElementInterface) => <R tag="sup" {...props} />
export const I = (props: ElementInterface) => <R tag="i" {...props} />
export const B = (props: ElementInterface) => <R tag="b" {...props} />
export const U = (props: ElementInterface) => <R tag="u" {...props} />
export const Mark = (props: ElementInterface) => <R tag="mark" {...props} />
export const Bdi = (props: ElementInterface) => <R tag="bdi" {...props} />
export const Bdo = (props: ElementInterface) => <R tag="bdo" {...props} />
export const Span = (props: ElementInterface) => <R tag="span" {...props} />
export const Br = (props: ElementInterface) => <R tag="br" {...props} />
export const Wbr = (props: ElementInterface) => <R tag="wbr" {...props} />
