/**
 * Generate random light color
 *
 * @see https://helderesteves.com/generating-random-colors-js
 */
export const generateRandomColor = () => {
  let color = '#'

  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2)

  return color
}
