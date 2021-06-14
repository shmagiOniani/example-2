export const deviceTypes = [
  {
    name: "midea vrf",
    modes: [
      {
        name: "mode type",
        mode: ["Cool", "Heat", "Fan", "Off"],
        type: "select",
      },
      {
        name: "speed",
        mode: ["Off", "Low", "Middle", "High"],
        type: "select",
      },
      {
        name: "swing",
        mode: ["closed", "open"],
        type: "select",
      },
      {
        name: "temperature",
        defaultValue: 25,
        type: "input",
      },
    ],
  },
  {
    name: "fan coil",
    modes: [
      {
        name: "mode",
        mode: ["Cool", "Heat", "Fan", "Off"],
        type: "select",
      },
      {
        name: "speed",
        mode: ["Off", "Low", "Middle", "High"],
        type: "select",
      },
      {
        name: "temperature",
        defaultValue: 65,
        type: "input",
      },
      {
        name: "CO Carbon-Monoxide Sensor Trigger Value",
        defaultValue: 20,
        type: "input",
      },
      {
        name: "Time to return to normal state after alarm (in seconds)",
        defaultValue: 15,
        type: "input",
      },
    ],
  },
];
