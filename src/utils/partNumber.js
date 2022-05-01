const partNumber = (number, separator = ',') => {
  return number.toLocaleString(
    'en-US',
    { minimumFractionDigits: 2 }
  )
}

export default partNumber