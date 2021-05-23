import Head from 'next/head';


export default function Meta() {
  return (
    <Head>

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

    <link rel="stylesheet" href="https://use.typekit.net/wjm5owj.css" />
    <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin="anonymous" />
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/19648772.js" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />


      {/*<meta name="msapplication-TileColor" content="#000000" />*/}
      {/*<meta name="msapplication-config" content="/favicon/browserconfig.xml" />*/}
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {/*<meta*/}
      {/*  name="description"*/}
      {/*  content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}*/}
      {/*/>*/}
      {/*<meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" />*/}



    </Head>
  )
}
