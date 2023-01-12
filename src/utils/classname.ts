/**
 * @description A simple utility to join classnames
 */
export const clsx = (...args: string[]) => args.filter(Boolean).join(' ')
