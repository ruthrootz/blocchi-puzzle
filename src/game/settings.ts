// Board
export const BOARD_ROWS = 20;
export const BOARD_CELLS = 10;
export const BOARD_GAP = 0.5;

// Tile
export const TILE_WIDTH = 4;
export const TILE_HEIGHT = 4;

// Theme
export enum PaletteEnum {
  Cedar = '#442217',
  Tan = '#d7b185',
  Paco = '#32180c',
  White = '#ffffff',
}
export const TILE_COLOR_NOTETRO = PaletteEnum.Paco;
export enum TITLE_COLOR_ENUM {
  Z = '#926eff ',
  S = '#e04ac0',
  J = '#4ac309',
  T = '#f2d707',
  I = '#e22b24',
  L = '#ff8839',
  O = '#39a6ff',
}

// Viewport sizes
export const VP_SM = 600;
export const VP_MD = 960;
export const VP_LG = 1280;
export const VP_XL = 1930;
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'md_l' | 'md_p';
export type SizeMap = Record<Size, number>;
export const SIZE: SizeMap = {
  sm: VP_SM,
  md: VP_MD,
  md_l: VP_MD,
  md_p: VP_MD,
  lg: VP_LG,
  xl: VP_XL,
};
// Compartmentalized media queries technique
export const DEVICE: Record<Size, string> = {
  sm: `(min-width: 0px) and (max-width: ${VP_SM}px)`,
  md: `(min-width: ${VP_SM}px) and (max-width: ${VP_MD}px)`,
  md_l: `(min-width: ${VP_MD}px) and (max-width: ${VP_LG}px) and (orientation:landscape)`,
  md_p: `(min-width: ${VP_MD}px) and (max-width: ${VP_LG}px) and (orientation:portrait)`,
  lg: `(min-width: ${VP_LG}px) and (max-width: ${VP_XL}px)`,
  xl: `(min-width: ${VP_XL}px)`,
};
export const mq_o: Record<string, string> = {
  p: `@media (orientation:portrait)`,
  l: `@media (orientation:landscape)`,
};

// Notes: use with styled as: `${mq.sm}{ color: red; }`
export const mq: Record<Size, string> = {
  sm: `@media ${DEVICE.sm}`,
  md: `@media ${DEVICE.md}`,
  md_l: `@media ${DEVICE.md_l}`,
  md_p: `@media ${DEVICE.md_p}`,
  lg: `@media ${DEVICE.lg}`,
  xl: `@media ${DEVICE.xl}`,
};
