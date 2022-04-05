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
      url: "/innloggingsstatus",
      method: "get",
      response: () => {
        return {
          authenticated: true,
        };
      },
    },
];
