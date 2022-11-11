import { ButtonHTMLAttributes, HTMLAttributes } from "react"

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}
