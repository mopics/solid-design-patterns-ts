import type { PanelStyle } from './panelStyle'

export const solidStyle: PanelStyle = {
  panel: {
    className: 'relative overflow-hidden px-4 py-4 border-t border-blue-900 font-mono',
    style: {
      background: '#060d1f',
      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9), inset 0 0 15px rgba(50,120,255,0.05)',
    },
  },
  overlays: [
    {
      // blueprint grid
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      background: [
        'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(80,140,255,0.12) 19px, rgba(80,140,255,0.12) 20px)',
        'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(80,140,255,0.12) 19px, rgba(80,140,255,0.12) 20px)',
      ].join(', '),
    },
    {
      // vignette
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%)',
    },
  ],
  text: {
    className: 'text-cyan-300 text-sm leading-relaxed mb-3',
    style: { textShadow: '0 0 8px rgba(80,200,255,0.8)' },
  },
  placeholder: {
    className: 'text-cyan-800 text-sm italic',
    style: { textShadow: '0 0 6px rgba(80,200,255,0.4)' },
  },
  snippet: {
    className: 'rounded-md p-3 text-xs text-cyan-200 overflow-x-auto leading-relaxed',
    style: {
      background: 'rgba(0,10,40,0.7)',
      textShadow: '0 0 6px rgba(80,200,255,0.7)',
    },
  },
  editButton: {
    className: 'mt-3 text-xs text-cyan-800 hover:text-cyan-400 transition-colors',
    style: {},
  },
}
