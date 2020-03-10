import { NowResponse } from '@now/node'

export default async (_, res: NowResponse) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TokoTalk OTP</title>
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <div class="container">
    <p>/api/tokotalk/08xxx</p>
  </div>
</body>
</html>`)
}