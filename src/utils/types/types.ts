import { SVGProps } from 'react'

export type ElementIndexType = string | boolean | Function | Array<any> | Object
export type ElementChildren =
    | string
    | JSX.Element
    | Array<JSX.Element>
    | SVGProps<SVGSVGElement>

export interface ElementInterface {
    [key: string]: ElementIndexType
    id?: string
    className?: string
    children?: ElementChildren
    style?: string
    i18n?: {
        [key: string]: string
    }
}
