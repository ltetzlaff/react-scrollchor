import { h } from "preact"

export interface IAnimation {
  offset?: number
  duration?: number
  easing?: Easing
}

export type Easing = (
  x: undefined | {},
  t: number,
  b: number,
  c: number,
  d: number
) => number

export type BeforeAnimate = (event?: Event) => void

export type AfterAnimate = (event?: Event) => void

export interface IScrollchorProps {
  to: string
  animate?: IAnimation
  beforeAnimate?: BeforeAnimate
  afterAnimate?: AfterAnimate
  disableHistory?: boolean
}
