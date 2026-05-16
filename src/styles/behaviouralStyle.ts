import type { PanelStyle } from './panelStyle'

export const behaviouralStyle: PanelStyle = {
  panel: {
    className: 'relative overflow-hidden px-4 py-4 border-t border-purple-950 font-mono',
    style: {
      background: '#080010',
      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9), inset 0 0 15px rgba(140,0,255,0.05)',
    },
  },
  overlays: [
    {
      // synaptic dot grid
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      backgroundImage: 'radial-gradient(circle, rgba(160,80,255,0.18) 1px, transparent 1px)',
      backgroundSize: '22px 22px',
    },
    {
      // vignette
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.85) 100%)',
    },
  ],
  text: {
    className: 'text-violet-300 text-sm leading-relaxed mb-3',
    style: { textShadow: '0 0 8px rgba(180,80,255,0.8)' },
  },
  placeholder: {
    className: 'text-violet-900 text-sm italic',
    style: { textShadow: '0 0 6px rgba(140,0,255,0.4)' },
  },
  snippet: {
    className: 'rounded-md p-3 text-xs text-purple-300 overflow-x-auto leading-relaxed',
    style: {
      background: 'rgba(15,0,30,0.75)',
      textShadow: '0 0 6px rgba(160,80,255,0.7)',
    },
  },
  editButton: {
    className: 'mt-3 text-xs text-violet-900 hover:text-violet-400 transition-colors',
    style: {},
  },
}
