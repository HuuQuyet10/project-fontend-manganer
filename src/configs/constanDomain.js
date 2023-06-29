module.exports = Object.freeze({
    DOMAIN_API: "https://api-web-nodejs.onrender.com",
    PARAMS_USER: {
        REGISTER: "/api/v1/user/register",
        LOGIN: "/api/v1/user/login",
        REFRES_TOKEN: "/api/v1/user/refreshtoken",
        DELETE_USER: "/delete/:_id",
    },
    PARAMS_POST: {
        GET_POST: "/api/v1/posts",
        GET_POST_BY_ID: "/api/v1/posts/:_id",
        NEW_POST: "/api/v1/posts",
        UPDATE_POST: "/api/v1/posts/update",
        DELETE_POST: "/api/v1/posts/delete/"
    },
    PARAMS_LIST_MY_NTF: {
        GET_NFT: "/api/v1/my-list-nft",
        GET_NFT_BY_ID: "/api/v1/my-list-nft/",
        NEW_NFT: "/api/v1/my-list-nft",
        UPDATE_NFT: "/api/v1/my-list-nft/update",
        DELETE_NFT: "/api/v1/my-list-nft/delete/",
        SEARCH_NFT_NAME: "/api/v1/my-list-nft/search/",
    },
    PUBLIC_SALE_NFT: {
        GET_LIST_NFT: "/api/v1/list-nft-public-sale",
        UPDATE_NFT_BY_ID: "/api/v1/list-nft-public-sale/update"
    },
    GET_DASHBOARD: {
        TOTAL_NUMBER_ETH: "/api/v1/total-sum",
        GET_CHART_DATA: "/api/v1/total-sum/get-sort-dashboard"
    }
})