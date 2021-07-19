const path = require("path");
const glob = require("glob");

const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')

const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
  }),
  withSass(withCss({
    webpack: (config, { dev }) => {
      config.module.rules.push(
        {
          test: /\.(png|jpg|jpeg|gif|webp|ico|bmp|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        // {
        //   test: /\.svg$/,
        //   issuer: {
        //     test: /\.(js|ts)x?$/,
        //   },
        //   use: ['@svgr/webpack'],
        // },
        // {
        //   test: /\.(css|scss)$/,
        //   loader: "emit-file-loader",
        //   options: {
        //     name: "dist/[path][name].[ext]"
        //   }
        // },
        // {
        //   test: /\.css$/,
        //   use: ["babel-loader", "raw-loader", "postcss-loader"]
        // },
        // {
        //   test: /\.s(a|c)ss$/,
        //   use: [
        //     "babel-loader",
        //     "raw-loader",
        //     "postcss-loader",
        //     {
        //       loader: "sass-loader",
        //       options: {
        //         includePaths: ["scss", "node_modules"]
        //           .map(d => path.join(__dirname, d))
        //           .map(g => glob.sync(g))
        //           .reduce((a, c) => a.concat(c), [])
        //       }
        //     }
        //   ]
        // }
      );
      return config;
    }
  }))
],withImages(),[withImages])

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }




// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');

// module.exports = withCSS(withSass());