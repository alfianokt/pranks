/**
 * generate random string
 * 
 * @param length string length
 * @param char custom character
 * 
 * @return string
 */
const randomString = (length, char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
  let res = ''
  const charLength = char.length
  for (var i = 0; i < length; i++) {
    res += char.charAt(Math.floor(Math.random() * charLength))
  }
  return res
}

export default randomString