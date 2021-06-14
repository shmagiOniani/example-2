export const users = [
  {
    id: 1,
    name: "name 1",
    permission: [
      {
        componnet: "gatewayGroup",
        type: ["read", "write"],
      },
      {
        componnet: "deviceGroup",
        type: ["read", "write"],
      },
    ],
  },
  {
    id: 2,
    name: "name 2",
    permission: [
      {
        componnet: "gatewayGroup",
        type: ["write"],
      },
      {
        componnet: "deviceGroup",
        type: ["write"],
      },
    ],
  },
];
