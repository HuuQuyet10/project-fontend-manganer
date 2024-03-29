import React from "react";
import Loadable from "react-loadable";
import Loading from "../Pages/Components/Loading"
import {
  UserOutlined,
  UnorderedListOutlined,
  DashboardOutlined,
  BarsOutlined,
  PlusCircleOutlined,
  EditOutlined,
  BankOutlined,
  SettingOutlined
} from "@ant-design/icons";

const listRouters = [
  // public: là để moi người truy cập vào hay cần phải đăng nhập thì mới truy cập được
  // publicSiderBar: là để cho component đó hiện trên siderbar hay là chỉ hiện ở ngoài, ví dụ như trang login, signup, hoặc page notfound đều publicSiderBar = false
  {
    public: true,
    publicSiderBar: false,
    component: Loadable({
      loader: () => import("../Pages/Container/Login"),
      loading: Loading,
    }),
    urlpath: "/",
    icon: <UnorderedListOutlined />,
    label: "Login",
  },
  {
    public: true,
    publicSiderBar: false,
    component: Loadable({
      loader: () => import("../Pages/Container/Login"),
      loading: Loading,
    }),
    urlpath: "/login",
    icon: <UnorderedListOutlined />,
    label: "Login",
  },
  // {
  //   public: true,
  //   publicSiderBar: false,
  //   component: Loadable({
  //     loader: () => import("../Pages/Container/Signup"),
  //     loading: Loading,
  //   }),
  //   urlpath: "/signup",
  //   icon: <UnorderedListOutlined />,
  //   label: "Signup",
  // },
  {
    public: true,
    publicSiderBar: false,
    component: Loadable({
      loader: () => import("../Pages/Container/PageNotFound"),
      loading: Loading,
    }),
    urlpath: "*",
    icon: <UnorderedListOutlined />,
    label: "Page notFound",
  },
  {
    public: false,
    publicSiderBar: true,
    component: Loadable({
      loader: () => import("../Pages/Container/Dashboard"),
      loading: Loading,
    }),
    urlpath: "/dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    public: false,
    publicSiderBar: true,
    component: Loadable({
      loader: () => import("../Pages/Container/MyListNft"),
      loading: Loading,
    }),
    urlpath: "",
    icon: <BarsOutlined />,
    label: "My list NFT",
    submenu: [
      {
        public: false,
        publicSiderBar: true,
        component: Loadable({
          loader: () => import("../Pages/Container/MyListNft"),
          loading: Loading,
        }),
        urlpath: "/list-nft",
        icon: <UnorderedListOutlined />,
        label: "List NFT",
      },
      {
        public: false,
        publicSiderBar: true,
        component: Loadable({
          loader: () => import("../Pages/Container/MyListNft/AddNft"),
          loading: Loading,
        }),
        urlpath: "/list-nft/create-nft",
        icon: <PlusCircleOutlined />,
        label: "Create my NFT",
      },
      // Thêm các submenu khác tại đây
    ]
  },
  {
    public: false,
    publicSiderBar: false,
    component: Loadable({
      loader: () => import("../Pages/Container/MyListNft/EditNft"),
      loading: Loading,
    }),
    urlpath: "/list-nft/update-nft/:_id",
    icon: <EditOutlined />,
    label: "Action NFT",
  },
  {
    public: false,
    publicSiderBar: true,
    component: Loadable({
      loader: () => import("../Pages/Container/MarketplaceNFT"),
      loading: Loading,
    }),
    urlpath: "/marketplace-nft",
    icon: <BankOutlined />,
    label: "Marketplace NFT",
  },
  {
    public: false,
    publicSiderBar: true,
    component: Loadable({
      loader: () => import("../Pages/Container/Users"),
      loading: Loading,
    }),
    urlpath: "/user",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

export default listRouters;