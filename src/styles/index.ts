import { solidStyle } from './solidStyle'
import { creationalStyle } from './creationalStyle'
import { structuralStyle } from './structuralStyle'
import { behaviouralStyle } from './behaviouralStyle'
import type { PanelStyle } from './panelStyle'

const styles: Record<string, PanelStyle> = {
  solid: solidStyle,
  creational: creationalStyle,
  structural: structuralStyle,
  behavioural: behaviouralStyle,
}

export function getPanelStyle(categoryId: string): PanelStyle {
  return styles[categoryId] ?? structuralStyle
}
