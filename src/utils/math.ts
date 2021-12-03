export function bin2dec(binStr: string) {
  const lastIndex = binStr.length - 1

  return Array.from(binStr).reduceRight(
    (total, currValue, index) =>
      currValue === "1" ? total + Number(2) ** Number(lastIndex - index) : total,
    Number(0)
  )
}
