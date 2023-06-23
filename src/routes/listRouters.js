import React from "react";
import Loadable from "react-loadable";
import Loading from "../Pages/Components/Loading"
import {
  UserOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";

const listRouters = [
  // public: là để moi người truy cập vào hay cần phải đăng nhập thì mới xem được
  // publicSiderBar: là để cho component đó hiện trên siderbar hay là chỉ hiện ở ngoài, ví dụ như trang login, signup, hoặc page notfound
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
  {
    public: true,
    publicSiderBar: false,
    component: Loadable({
      loader: () => import("../Pages/Container/Signup"),
      loading: Loading,
    }),
    urlpath: "/signup",
    icon: <UnorderedListOutlined />,
    label: "Signup",
  },
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
    icon: <UnorderedListOutlined />,
    label: "Dashboard",
  },
  {
    public: false,
    publicSiderBar: false,
    component: Loadable({
      loader: () => import("../Pages/Container/Admins"),
      loading: Loading,
    }),
    urlpath: "/admin",
    icon: <UnorderedListOutlined />,
    label: "Quản lý đơn hàng",
  },
  {
    public: false,
    publicSiderBar: true,
    component: Loadable({
      loader: () => import("../Pages/Container/MyListNft"),
      loading: Loading,
    }),
    urlpath: "",
    icon: <UnorderedListOutlined />,
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
        icon: <UnorderedListOutlined />,
        label: "Create my NFT",
      },
      // Thêm các submenu khác tại đây
    ]
  },
  {
    public: false,
    publicSiderBar: true,
    component: Loadable({
      loader: () => import("../Pages/Container/MarketplaceNFT"),
      loading: Loading,
    }),
    urlpath: "/marketplace-nft",
    icon: <UnorderedListOutlined />,
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
    icon: <UnorderedListOutlined />,
    label: "Trang user",
  },
];

export default listRouters;