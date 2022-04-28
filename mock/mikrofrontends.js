import minSideTjenester from "./bundle/min-side-tjenester";

export default [
  {
    url: '/tms-min-side-oversikt/bundle.js',
    method: 'get',
    rawResponse: async (req, res) => {
      res.setHeader('Content-Type', 'text/javascript')
      res.statusCode = 200
      res.end(minSideTjenester)
    },
  },
  {
    url: '/tms-min-side-tjenester/bundle.js',
    method: 'get',
    rawResponse: async (req, res) => {
      res.setHeader('Content-Type', 'text/javascript')
      res.statusCode = 200
      res.end(minSideTjenester)
    },
  },
  {
    url: '/tms-min-side-varslinger/bundle.js',
    method: 'get',
    rawResponse: async (req, res) => {
      res.setHeader('Content-Type', 'text/javascript')
      res.statusCode = 200
      res.end(minSideTjenester)
    },
  },
];
