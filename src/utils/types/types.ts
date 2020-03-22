import { SVGProps } from 'react'

export type ElementInterfacePropertyTypes =
    | string
    | boolean
    | Function
    | Array<any>
    | Object

export type ElementChildren =
    | string
    | JSX.Element
    | Array<JSX.Element>
    | SVGProps<SVGSVGElement>

export interface ElementInterface {
    [key: string]: ElementInterfacePropertyTypes
    id?: string
    className?: string
    children?: ElementChildren
    style?: string
    i18n?: {
        [key: string]: string
    }
}
