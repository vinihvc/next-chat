import { atom } from 'jotai'

import { generateRandomColor } from '@/utils/color'

export const userAtom = atom({
  name: 'User_' + String(new Date().getTime()).substr(-3),
  color: generateRandomColor(),
})
