/**
 * @type {import('gatsby').GatsbyConfig}
 */

// gatsby-config.js
require('dotenv').config();


module.exports = {
  pathPrefix: "/ShijimaMakana-Publish",

  siteMetadata: {
    title: `shijima-makana-publish`,
    description: `shijima-makana-publish`,
    author: `Shijima Makana`,
    siteUrl: `https://semilemons.github.io/ShijimaMakana-Publ`,
  }, 



  plugins: [
  
  {
    resolve: `gatsby-plugin-canonical-urls`,// 追加
    options: {
      siteUrl: `https://semilemons.github.io/ShijimaMakana-Publ`,
      stripQueryString: true,
    },
  },
  
  {
    resolve: 'gatsby-plugin-robots-txt', // 追加
    options: {
      host: 'https://semilemons.github.io/ShijimaMakana-Publ',
      sitemap: 'https://semilemons.github.io/ShijimaMakana-Publ/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },

  
  "gatsby-plugin-sitemap",  
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `shijima-makana-publish`,
      short_name: `四島摩訶那`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/MakanaShijima.png`,
    }
  },
  
  "gatsby-plugin-sass", "gatsby-plugin-image", 
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"], // MDXファイルの拡張子
      // その他のオプションを設定できます
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [],
    },
  }, 
  
  "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },

  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [process.env.G_TAG],  // 控えておいた、測定IDを記載します。https://analytics.google.com/analytics/web/provision/#/p424568219/reports/intelligenthome
      pluginConfig: {
        head: true  // headタグに記載されるようにコンフィグを設定します。
      }
    }
  }



]
};