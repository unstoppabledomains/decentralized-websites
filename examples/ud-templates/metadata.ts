const metaData = (title: string, htmlBody: string) => `
<html lang="en">
  <head>
    <meta charset="utf-8" />
	 <link rel="icon" href="./assets/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="theme-color" content="#000000" />
	    <meta
      name="description"
      content="Web site created using Unstoppable Domains IPFS Template Launcher"
    />
	<link href="./styles.css" rel="stylesheet">
    <title>${title}</title>
  </head>
  <body>${htmlBody}</body>
</html>
  `;

export default metaData;
