import minSideTjenester from "./bundle/min-side-tjenester";

export default [
    {
      url: "/tms-min-side-proxy/login/status",
      method: "get",
      response: () => {
        return {
            authenticated: true,
            level: "Level3"
        };
      },
    },
    {
      url: "/dittnav-api/authPing",
      method: "get",
      rawResponse: async (req, res) => {
        res.statusCode = 401
        res.end()
      },
    },
];
