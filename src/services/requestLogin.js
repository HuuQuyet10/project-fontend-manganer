import DomainServer from "src/utils/DomainServer";
import request from "./request";

export function LoginPage(bodyParamster) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyParamster)
    };
    const requestURL = DomainServer.GET_SERVICE + DomainServer.PARAMASTER.LOGIN;
    return request(requestURL, options)
};