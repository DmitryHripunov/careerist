export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Careerist-test-app</title>
  <script src="/static/client.js" type="application/javascript"></script>
  <script>
  </script>
</head>
<body>
  <div id="react_root">${content}</div>
</body>
</html>
`
