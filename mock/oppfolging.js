export default [
  {
    url: "/dittnav-api/oppfolging",
    method: "get",
    response: () => {
      return {
        erBrukerUnderOppfolging: false
      };
    },
  },
];
