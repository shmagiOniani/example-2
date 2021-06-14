// core components/views
import {
  Account,
  Admin,
  Alerts,
  AlertLogs,
  Application,
  Analytics,
  Customers,
  Contacts,
  // Device,
  DeviceGroup,
  GatewayGroup,
  Gateway,
  Login,
  MailTemplate,
  MailHistory,
  MapComponent,
  NotFound,
  Registration,
  Schedule,
} from "./components";

export const routes = [
  {
    path: "/Admin",
    component: Admin,
    layout: "/Table",
  },
  {
    path: "/Account",
    component: Account,
    layout: "/User",
  },
  {
    path: "/Alerts",
    component: Alerts,
    layout: "/Notification",
  },
  {
    path: "/AlertLogs",
    component: AlertLogs,
    layout: "/Notification",
  },
  {
    path: "/Application",
    component: Application,
    layout: "/Dashboard",
  },
  {
    path: "/Analytics",
    component: Analytics,
    layout: "/Dashboard",
  },
  {
    path: "/Customers",
    component: Customers,
    layout: "/Table",
  },
  {
    path: "/Contacts",
    component: Contacts,
    layout: "/Table",
  },
  // {
  //   path: "/Device",
  //   component: Device,
  //   layout: "/Device",
  // },
  {
    path: "/DeviceGroup",
    component: DeviceGroup,
    layout: "/Device",
  },
  {
    path: "/Gateway",
    component: Gateway,
    layout: "/Device",
  },
  {
    path: "/GatewayGroup",
    component: GatewayGroup,
    layout: "/Device",
  },
  {
    path: "/Login",
    component: Login,
    layout: "",
  },
  {
    path: "/MailTemplate",
    component: MailTemplate,
    layout: "/Mail",
  },
  {
    path: "/MailHistory",
    component: MailHistory,
    layout: "/Mail",
  },
  {
    path: "/MapComponent",
    component: MapComponent,
    layout: "/MapComponent",
  },
  {
    path: "/NotFound",
    component: NotFound,
    layout: "",
  },
  {
    path: "/Registration",
    component: Registration,
    layout: "",
  },
  {
    path: "/Schedule",
    component: Schedule,
    layout: "/Device",
  },
];
