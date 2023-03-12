export function fullCircle(self: string, ms: number) {
  const timeDone = Date.now() + ms

  while (Date.now() < timeDone) {
    // do nothing
  }

  return self
}

export function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
