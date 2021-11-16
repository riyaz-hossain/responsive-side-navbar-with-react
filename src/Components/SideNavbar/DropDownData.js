import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import StarIcon from '@material-ui/icons/Star';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/Message';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const dropDownData = [
    {
        mainMenu: "Dashboard",
        icon: DashboardIcon,
        link: "/"
    },
    {
        main: 'Admin',
        mainIcon:'fa-user-tie',
        icon: MonetizationOnIcon,
        dropDown1: "Cash In",
        dropDown2: 'Cash In Statement',
        link1: "/admin-cash-in",
        link2: "/admin/cash/details",
        icon1:LocalAtmIcon,
        icon2:AccountBalanceWalletIcon,
        noNotification:"",
        id: 1,
    },

    // { 
    //     main: 'cash in request', 
    //     icon: MonetizationOnIcon, 
    //     dropDown1: "Cash In Requests ", 
    //     dropDown2: 'Cash In Statement', 
    //     link1: "/admin-cash-in", 
    //     link2: "/admin/cash/details", 
    //     id: 2, 
    // },

    {
        main: 'send balance request',
        mainIcon:'fa-money-bill',
        icon: MonetizationOnIcon,
        dropDown1: "From Admin cash balance",
        dropDown2: 'from Agent cash balance',
        dropDown3: "from Customer cash balance",
        dropDown4: "from seller shop balance",
        dropDown5: "from Deliver Earn balance",
        link1: "/send-admin-cash-balance",
        link2: "/send-agent-cash-balance",
        link3: "/send-customer-cash-balance",
        link4: "/send-seller-cash-balance",
        link5: "/send-deliver-cash-balance",
        id: 3,
    },
    {
        main: 'withdraw request',
        mainIcon:'fa-money-check',
        icon: MonetizationOnIcon,
        dropDown1: "Agent cash balance",
        dropDown2: 'Customer cash balance',
        dropDown3: "seller shop balance",
        dropDown4: "Deliver Earn balance",
        link1: "/withdraw-agent-cash-balance",
        link2: "/withdraw-customer-cash-balance",
        link3: "/withdraw-seller-cash-balance",
        link4: "/withdraw-deliver-cash-balance",
        id: 4,
    },
    {
        main: 'Ads',
        mainIcon:'fa-ad',
        icon: MonetizationOnIcon,
        dropDown1: "1",
        dropDown2: '2',
        link1: "/ads-1",
        link2: "/ads-2",
        icon1:LocalAtmIcon,
        icon2:AccountBalanceWalletIcon,
        noNotification:"",
        id: 7,
    },
    {
        mainMenu: "product purchase request",
        icon: LocalMallIcon,
        link: "/product-purchase-req"
    },
    {
        main: 'Products',
        mainIcon:'fa-book',
        dropDown1: "brand",
        dropDown2: 'category',
        dropDown3: "pending product",
        dropDown4: "all products",
        link1: "/",
        link2: "/",
        id: 5,
    },
    {
        main: 'product Delivery',
        mainIcon:'fa-biking',
        icon: MonetizationOnIcon,
        dropDown1: "pending delivery",
        dropDown2: 'Success delivery',
        link1: "/pending-delivery",
        link2: "/success-delivery",
        icon1:StarIcon,
        icon2: StarHalfIcon,
        id: 6,
    },
    {
        mainMenu: "product categories",
        icon:  AccountTreeIcon,
        link: "/add-category"
    },
    {
        mainMenu: "country list",
        icon:  StarIcon ,
        link: "/country"
    },
    {
        mainMenu: "notification",
        icon: NotificationsNoneIcon,
        link: "/notification"
    },
    {
        mainMenu: "message",
        icon: MessageIcon,
        link: "/message"
    },
    {
        mainMenu: "banner",
        icon: WallpaperIcon,
        link: "/"
    },
    {
        mainMenu: "commission",
        icon: DashboardIcon,
        link: "/commission"
    },
    {
        mainMenu: "reviews",
        icon: StarIcon,
        link: "/"
    },
];

export default dropDownData;
