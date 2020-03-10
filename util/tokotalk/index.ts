/**
 * tokotalk otp
 * 
 * author   : alfianokt
 * date     : 10-03-2020
 */

import fetch from 'isomorphic-unfetch'

/**
 * 
 * @param target number
 * @return json
 */
const tokotalk = async (target) => {
  const req = await fetch(`https://api.tokotalk.com/v1/shop/${Math.floor(Math.random()*999)}/verifications`, {
    method: 'POST',
    headers: {
      'host': 'api.tokotalk.com',
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 4A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.116 Mobile Safari/537.36',
      'sec-fetch-site': 'cross-site',
      'sec-fetch-mode': 'cors',
      'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,ms;q=0.6',
    },
    body: JSON.stringify({"value": target})
  })
  const json = await req.json()
  return json
}

export default tokotalk