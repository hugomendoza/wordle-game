import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import {UiSlice, createUiSlice} from './ui.slice'
import {GameSlice, createGameSlice} from './game.slice'

type ShareState = UiSlice & GameSlice

export const useWordleGameStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createUiSlice(...a),
      ...createGameSlice(...a),
    })
  )
)