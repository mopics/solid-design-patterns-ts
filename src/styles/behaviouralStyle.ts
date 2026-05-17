import type { PanelStyle } from './panelStyle'

const elec = "'Electrolize', sans-serif"

export const behaviouralStyle: PanelStyle = {
  header: (open) => ({
    className: 'group w-full flex items-center justify-between px-4 py-3 transition-colors text-left',
    style: { background: open ? '#130020' : '#080010', fontFamily: elec },
  }),
  name: (open) => ({
    className: 'text-sm font-medium transition-colors',
    style: {
      color: open ? '#c084fc' : '#7e22ce',
      fontFamily: elec,
      textShadow: open ? '0 0 6px rgba(180,80,255,0.5)' : 'none',
    },
  }),
  panel: {
    className: 'relative overflow-hidden px-4 py-4 border-t border-purple-950 font-mono',
    style: {
      background: '#10000d',
      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9), inset 0 0 15px rgba(140,0,255,0.05)',
    },
  },
  overlays: [
    {
      // synaptic dot grid
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      backgroundImage: 'radial-gradient(circle, rgba(255, 80, 232, 0.18) 1px, transparent 1px)',
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
    style: { textShadow: '0 0 8px rgba(255, 80, 217, 0.8)' },
  },
  placeholder: {
    className: 'text-violet-900 text-sm italic',
    style: { textShadow: '0 0 6px rgba(255, 0, 157, 0.4)' },
  },
  snippet: {
    className: 'rounded-md p-3 text-xs text-purple-300 overflow-x-auto leading-relaxed',
    style: {
      background: 'rgba(30, 0, 24, 0.75)',
      textShadow: '0 0 6px rgba(255, 80, 197, 0.7)',
    },
  },
  editButton: {
    className: 'mt-3 text-xs text-violet-900 hover:text-violet-400 transition-colors',
    style: {},
  },
  cardGlow: '0 0 18px rgba(180,0,255,0.5), 0 0 40px rgba(140,0,220,0.2)',
}
