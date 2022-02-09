import minSideTopp from "./bundle/min-side-topp";
import minSideBunn from "./bundle/min-side-topp";

export default [
  {
    url: '/tms-min-side-topp/bundle.js',
    method: 'get',
    rawResponse: async (req, res) => {
      res.setHeader('Content-Type', 'text/javascript')
      res.statusCode = 200
      res.end(minSideTopp)
    },
  },
  {
    url: '/tms-min-side-bunn/bundle.js',
    method: 'get',
    rawResponse: async (req, res) => {
      res.setHeader('Content-Type', 'text/javascript')
      res.statusCode = 200
      res.end(minSideBunn)
    },
  },
];
