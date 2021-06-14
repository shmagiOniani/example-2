export const gatewayData = [
  {
    checked: false,
    label: "გეითვეი 1",
    value: "d-34845",
    model: "d-34845",
    status: 1,
    group: [],
    device: [
      {
        id: "1",
        name: "Device 1",
        label: "Device 1",

        type: "fan coil",
        value: 4,
        errors: [
          {
            id: 1,
            name: "error name",
            content: "some text abou an error",
          },
        ],
        status: "active",
        variables: [
          {
            value: 22,
            temperature: 22,
            name: "ცვლადი 1",
            id: "1",
            status: "active",
            mode: "summer",
            speed: "low",
          },
        ],
      },
    ],
  },
  {
    checked: false,
    label: "გეითვეი 2",
    value: "d-71345",
    model: "d-71345",
    status: 0,
    group: [],
    device: [
      {
        id: "2",
        name: "Device 2",
        label: "Device 2",

        type: "midea vrf",
        value: "27",
        errors: [
          {
            id: 2,
            name: "error name",
            content: "some text abou an error",
          },
        ],
        status: "notActive",
        variables: [
          {
            value: 27,
            temperature: 22,
            name: "ცვლადი 3",
            id: "3",
            status: "active",
            mode: "fan",
            swing: "closed",
          },
        ],
      },
      {
        id: "3",
        name: "Device 3",
        label: "Device 3",

        type: "midea vrf",
        value: "17",
        errors: [
          {
            id: 3,
            name: "error name",
            content: "some text abou an error",
          },
        ],
        status: "removed",
        variables: [
          {
            value: "28",
            temperature: 22,
            name: "ცვლადი 5",
            id: "5",
            status: "active",
            mode: "fan",
            swing: "open",
          },
        ],
      },
      {
        id: "4",
        name: "Device 4",
        label: "Device 4",

        type: "fan coil",
        value: "247",
        errors: [
          {
            id: 4,
            name: "error name",
            content: "some text abou an error",
          },
        ],
        status: "removed",
        variables: [
          {
            value: 23,
            temperature: 22,
            name: "ცვლადი 6",
            id: "6",
            status: "active",
            mode: "fan",
            swing: "open",
          },
        ],
      },
      {
        id: "5",
        name: "Device 5",
        label: "Device 5",

        type: "midea vrf",
        value: "2337",
        errors: [
          {
            id: 5,
            name: "error name",
            content: "some text abou an error",
          },
        ],
        status: "removed",
        variables: [
          {
            value: 13,
            temperature: 22,
            name: "ცვლადი 7",
            id: "7",
            status: "active",
            mode: "fan",
            swing: "open",
          },
        ],
      },
      {
        id: "6",
        name: "Device 6",
        label: "Device 6",

        type: "midea vrf",
        value: "2347",
        errors: [
          {
            id: 6,
            name: "error name",
            content: "some text abou an error",
          },
        ],
        status: "removed",
        variables: [
          {
            value: 31,
            temperature: 22,
            name: "ცვლადი 8",
            id: "8",
            status: "active",
            mode: "fan",
            swing: "open",
          },
        ],
      },
      {
        id: "7",
        name: "Device 7",
        label: "Device 7",

        type: "midea vrf",
        value: "24347",
        errors: [
          {
            id: 7,
            name: "error name",
            content: "some text abou an error",
          },
        ],
        status: "removed",
        variables: [
          {
            value: 31,
            temperature: 22,
            name: "ცვლადი 9",
            id: "9",
            status: "active",
            mode: "fan",
            swing: "open",
          },
        ],
      },
    ],
  },
];
