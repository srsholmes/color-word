export const shuffle = (list) => sort(() => 0.5 - Math.random(), list)

export const sort = (fn, list) => {
  const clone = list.slice(0)
  return clone.sort(fn)
}
