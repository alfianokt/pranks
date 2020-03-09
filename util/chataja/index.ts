/**
 * chataja otp
 * 
 * author   : alfianokt
 * date     : 09-03-2020
 */

import fetch from 'isomorphic-unfetch'

/**
 * chataja
 * 
 * @param target number
 * @return JSON
 * 
 */
const chataja = async (target = null) => {
  const request = await fetch('https://api.chataja.co.id/api/v2/auth_nonce', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'okhttp/4.2.2'
    },
    body: `user%5Bapp_id%5D=kiwari-prod&user%5Bphone_number%5D=%2B${target}`
  })
  const text = await request.json()
  return text
}


export default chataja