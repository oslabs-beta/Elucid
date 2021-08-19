const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/khayalalasgaroff/Desktop/Elucid/demo/client/gatsby/website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/khayalalasgaroff/Desktop/Elucid/demo/client/gatsby/website/src/pages/404.js"))),
  "component---src-pages-demo-js": hot(preferDefault(require("/Users/khayalalasgaroff/Desktop/Elucid/demo/client/gatsby/website/src/pages/demo.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/khayalalasgaroff/Desktop/Elucid/demo/client/gatsby/website/src/pages/index.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/Users/khayalalasgaroff/Desktop/Elucid/demo/client/gatsby/website/src/pages/team.js")))
}

