# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## The Rune Cipher Fragments puzzle

Six of the scene hotspots hide a fragment of a Farseer's prophecy. A fragment
hotspot glints softly and its caption stays in unreadable Aelfa runes until the
hotspot is **clicked**, which records it in the *Farseer's Codex* — the counter
in the top-right corner of every page. Collecting all six assembles the full
prophecy and unlocks the hidden seventh scene at `/prophecy`.

| Scene | Hotspot | Fragment id |
| --- | --- | --- |
| `/dome` | Autarch Chamber | `autarch-chamber` |
| `/hanging-gardens` | Rangers Temple | `rangers-temple` |
| `/island-ocean` | The top of the mountain structure | `mountain-crown` |
| `/small-island` | Swooping Hawks hunting | `swooping-hawks` |
| `/exodite-planet` | Exodite Temple | `exodite-temple` |
| `/back-side` | Guardian Host | `guardian-host` |

Progress lives in `localStorage` under `elemmir.puzzle.v1`. To replay the puzzle,
open the Codex and use *Forget the prophecy*, or clear that key by hand.

Source: `src/puzzle/` (fragment data + provider), `src/components/FarseerCodex.tsx`,
and the `fragmentId` prop on `src/components/HoverHotspot.tsx`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
