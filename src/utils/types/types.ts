import { SVGProps } from 'react'

export type ElIndexType = string | boolean | Function | Array<any> | Object
export type ElChildren =
    | string
    | JSX.Element
    | Array<JSX.Element>
    | SVGProps<SVGSVGElement>

export interface ElInterface {
    [key: string]: ElIndexType
    ariaLabel?: string
    children?: ElChildren
    style?: string
    i18n?: {
        [key: string]: string
    }
}
