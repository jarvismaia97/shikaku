export interface ThemeTokens {
  bg: string;
  surface: string;
  gridSep: string;
  text: string;
  sub: string;
  accent: string;
}

export type ThemeName = 'pastel' | 'ocean' | 'sunset' | 'forest' | 'dark';

export const THEMES: Record<ThemeName, ThemeTokens> = {
  pastel: { bg: '#faf4fb', surface: '#ffffff', gridSep: '#e0d4e8', text: '#3a2d45', sub: '#b09abf', accent: '#9b7bb8' },
  ocean: { bg: '#f0f7fb', surface: '#ffffff', gridSep: '#c0d8ea', text: '#1a3045', sub: '#7aaabf', accent: '#3a80b8' },
  sunset: { bg: '#fdf5f0', surface: '#ffffff', gridSep: '#e8c8b8', text: '#3a1a0a', sub: '#c09080', accent: '#e07060' },
  forest: { bg: '#f2faf5', surface: '#ffffff', gridSep: '#b8ddc8', text: '#1a3025', sub: '#70a888', accent: '#3a8860' },
  dark: { bg: '#1e1e2e', surface: '#2a2a3e', gridSep: '#3a3a54', text: '#d0d0e8', sub: '#7070a0', accent: '#9070d0' },
};

export const THEME_NAMES = Object.keys(THEMES) as ThemeName[];
