export default [
    {
      url: "/login/status",
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
