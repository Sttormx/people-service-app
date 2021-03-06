import { AxiosRequestConfig } from "axios";
import API from "./API";
import { getToken, doUpdateToken } from "./token";
import { refreshToken, logout } from "../Store/actions/auth";

const setup = (store: any) =>
{
    API.interceptors.request.use(
        async (config: AxiosRequestConfig) =>
        {
            if (config.headers === undefined) 
            {
                config.headers = {};
            }

            const token = await getToken()
            if (token !== '')
            {
                config.headers['x-access-token'] = token;
            }

            return config;
        },

        (error) =>
        {
            return Promise.reject(error);
        }
    );

    const { dispatch } = store;
    API.interceptors.response.use(
        (res) =>
        {
            return res;
        },

        async (err) =>
        {
            if (err.config.url !== '/login' && err.response)
            {
                if (err.response.status === 401)
                {
                    try 
                    {
                        const oldToken = await getToken();
                        const newRequest = await API.post('/relogin', { id: 1, refreshToken: oldToken })
                        const { token } = newRequest.data;

                        if (token)
                        {
                            dispatch(refreshToken(token));
                            doUpdateToken(token);
                        }
                        else
                        {
                            dispatch(logout());
                        }
                    } 
                    catch (_error) 
                    {
                        return Promise.reject(_error);   
                    }
                }
            }
        }
    );

}

export default setup;