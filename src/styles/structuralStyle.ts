import type { PanelStyle } from './panelStyle'

const elec = "'Electrolize', sans-serif"

export const structuralStyle: PanelStyle = {
  header: (open) => ({
    className: 'group w-full flex items-center justify-between px-4 py-3 transition-colors text-left',
    style: { background: open ? '#0a150a' : '#050a05', fontFamily: elec },
  }),
  name: (open) => ({
    className: 'text-sm font-medium transition-colors',
    style: {
      color: open ? '#4ade80' : '#166534',
      fontFamily: elec,
      textShadow: open ? '0 0 6px rgba(0,255,0,0.5)' : 'none',
    },
  }),
  panel: {
    className: 'relative overflow-hidden px-4 py-4 border-t border-green-900 font-mono',
    style: {
      background: '#050a05',
      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.85), inset 0 0 10px rgba(0,255,0,0.05)',
    },
  },
  overlays: [
    {
      // scanlines
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 4px)',
    },
    {
      // vignette
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%)',
    },
  ],
  text: {
    className: 'text-green-400 text-sm leading-relaxed mb-3',
    style: { textShadow: '0 0 8px rgba(0,255,0,0.8)' },
  },
  placeholder: {
    className: 'text-green-800 text-sm italic',
    style: { textShadow: '0 0 6px rgba(0,255,0,0.4)' },
  },
  snippet: {
    className: 'rounded-md p-3 text-xs text-green-300 overflow-x-auto leading-relaxed',
    style: {
      background: 'rgba(0,20,0,0.6)',
      textShadow: '0 0 6px rgba(0,255,0,0.7)',
    },
  },
  editButton: {
    className: 'mt-3 text-xs text-green-800 hover:text-green-400 transition-colors',
    style: {},
  },
  cardGlow: '0 0 18px rgba(0,220,80,0.5), 0 0 40px rgba(0,180,0,0.2)',
}
