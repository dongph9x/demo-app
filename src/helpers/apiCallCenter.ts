import axios from "axios";
import { configConstants } from "../configs";
import { clearStorage } from "./clearStorage";
import $ from "jquery";
import { isEmpty } from "lodash";
function apiCallCenter(
  endpoint: any,
  method = "GET",
  body = {},
  headers = {},
  clearToken = true,
  showLoading = true,
  basUrl = configConstants.API_URL
) {
  if (isEmpty(headers)) {
    if (localStorage.getItem("Authorization")) {
      headers = {
        Authorization: localStorage.getItem("Authorization"),
      };
    }
  }
  let idUrlCallApi = Date.now() + "-" + endpoint;
  if (!globalThis.listUrlCallApi) {
    globalThis.listUrlCallApi = [idUrlCallApi];
  } else {
    globalThis.listUrlCallApi.push(idUrlCallApi);
  }

  // eslint-disable-next-line
  if (globalThis.listTimeoutLoadingCallApi) {
    for (var i = 0; i < globalThis.listTimeoutLoadingCallApi.length; i++) {
      clearTimeout(globalThis.listTimeoutLoadingCallApi[i]);
    }
    globalThis.listTimeoutLoadingCallApi = [];
  }

  if (showLoading) {
    $("#loading-spinner").removeClass("hide");
  }

  return axios({
    method,
    timeout: configConstants.API_TIMEOUT,
    url: `${basUrl}${endpoint}`,
    data: body,
    headers: headers,
  } as any)
    .then((response) => {
      return handleResponse(response, idUrlCallApi);
    })
    .catch((error) => {
      hideLoadding(idUrlCallApi);
      if (error && error.response) {
        // handle auto remove token + logout when token expired
        if (clearToken && error.response.status === 401) {
          clearStorage();
        } else {
          let msg = "Server Error";
          if (error.response.data.errorMessage) {
            msg = error.response.data.errorMessage;
          }
          return Promise.reject(msg);
        }
      } else {
        if (typeof error === "string" || error instanceof String) {
          return Promise.reject(error);
        } else {
          return Promise.reject("Server Error");
        }
      }
    });
}

function hideLoadding(idUrlCallApi: string) {
  let listUrlCallApi = globalThis.listUrlCallApi.filter(
    (i) => i !== idUrlCallApi
  );
  globalThis.listUrlCallApi = listUrlCallApi;
  if (!listUrlCallApi.length) {
    let timeoutLoading = setTimeout(() => {
      $("#loading-spinner").addClass("hide");
    }, 300);
    if (!globalThis.listTimeoutLoadingCallApi) {
      globalThis.listTimeoutLoadingCallApi = [timeoutLoading];
    } else {
      globalThis.listTimeoutLoadingCallApi.push(timeoutLoading);
    }
  }
}

function handleResponse(response: any, idUrlCallApi: string) {
  hideLoadding(idUrlCallApi);
  if (!response.status) {
    let msg = response.data.msg ? response.data.msg : response.data.error;
    return Promise.reject(msg);
  } else {
    return response.data;
  }
}

export { apiCallCenter };
