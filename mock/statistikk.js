export default [
  {
    url: "/tms-min-side-proxy/statistikk/innlogging",
    method: "post",
    response: () => {
      return {
        post: "done",
      };
    },
  },
];
