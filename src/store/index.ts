import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import {UiSlice, createUiSlice} from './ui.slice'

type ShareState = UiSlice

export const useWordleGameStore = create<ShareState>()(
  devtools(
    (...a) => ({
      ...createUiSlice(...a),
    })
  )
)