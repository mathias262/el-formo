import React from 'react'
import { css } from 'goober'

import { ElementInterface as EI } from '../../utils/types/types'

export interface ElementProps extends EI {
    tag: string
}

const Root = ({ tag, children, style, ...props }: ElementProps) => {
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

export const A = (props: EI) => <Root tag="a" {...props} />
export const Em = (props: EI) => <Root tag="em" {...props} />
export const Strong = (props: EI) => <Root tag="strong" {...props} />
export const Small = (props: EI) => <Root tag="small" {...props} />
export const S = (props: EI) => <Root tag="s" {...props} />
export const Cite = (props: EI) => <Root tag="cite" {...props} />
export const Q = (props: EI) => <Root tag="q" {...props} />
export const Dfn = (props: EI) => <Root tag="dfn" {...props} />
export const Abbr = (props: EI) => <Root tag="abbr" {...props} />
export const Ruby = (props: EI) => <Root tag="Ruby" {...props} />
export const Rt = (props: EI) => <Root tag="rt" {...props} />
export const Rp = (props: EI) => <Root tag="rp" {...props} />
export const Data = (props: EI) => <Root tag="data" {...props} />
export const Time = (props: EI) => <Root tag="time" {...props} />
export const Code = (props: EI) => <Root tag="code" {...props} />
export const Var = (props: EI) => <Root tag="var" {...props} />
export const Samp = (props: EI) => <Root tag="samp" {...props} />
export const Kbd = (props: EI) => <Root tag="kbd" {...props} />
export const Sub = (props: EI) => <Root tag="sub" {...props} />
export const Sup = (props: EI) => <Root tag="sup" {...props} />
export const I = (props: EI) => <Root tag="i" {...props} />
export const B = (props: EI) => <Root tag="b" {...props} />
export const U = (props: EI) => <Root tag="u" {...props} />
export const Mark = (props: EI) => <Root tag="mark" {...props} />
export const Bdi = (props: EI) => <Root tag="bdi" {...props} />
export const Bdo = (props: EI) => <Root tag="bdo" {...props} />
export const Span = (props: EI) => <Root tag="span" {...props} />
export const Br = (props: EI) => <Root tag="br" {...props} />
export const Wbr = (props: EI) => <Root tag="wbr" {...props} />
