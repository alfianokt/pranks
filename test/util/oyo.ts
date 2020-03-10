import oyo from '../../util/oyo'

const main = async () => {
  const target = process.env.target
  console.log('send to', target)
  const req = await oyo(target)
  console.log(req)
}

main()