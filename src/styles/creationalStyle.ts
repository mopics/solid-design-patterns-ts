import type { PanelStyle } from './panelStyle'

export const creationalStyle: PanelStyle = {
  panel: {
    className: 'relative overflow-hidden px-4 py-4 border-t border-orange-950 font-mono',
    style: {
      background: '#0f0500',
      boxShadow: 'inset 0 0 50px rgba(0,0,0,0.9), inset 0 0 20px rgba(200,80,0,0.06)',
    },
  },
  overlays: [
    {
      // forge radial glow from below
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      background: 'radial-gradient(ellipse at 50% 120%, rgba(220,100,0,0.18) 0%, transparent 65%)',
    },
    {
      // vignette
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.8) 100%)',
    },
  ],
  text: {
    className: 'text-amber-400 text-sm leading-relaxed mb-3',
    style: { textShadow: '0 0 8px rgba(255,160,0,0.75)' },
  },
  placeholder: {
    className: 'text-amber-900 text-sm italic',
    style: { textShadow: '0 0 6px rgba(255,120,0,0.4)' },
  },
  snippet: {
    className: 'rounded-md p-3 text-xs text-orange-300 overflow-x-auto leading-relaxed',
    style: {
      background: 'rgba(30,8,0,0.8)',
      textShadow: '0 0 6px rgba(255,140,0,0.65)',
    },
  },
  editButton: {
    className: 'mt-3 text-xs text-amber-900 hover:text-amber-500 transition-colors',
    style: {},
  },
}
