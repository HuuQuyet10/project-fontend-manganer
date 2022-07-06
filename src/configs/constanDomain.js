module.exports = Object.freeze({
    DOMAIN_API: "https://webappfashion.herokuapp.com",
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
        DELETE_POST: "/api/v1/posts/delete/:_id"
    }
})