import axios from "axios";
import httpContext from "express-http-context";
import https from "https";

const TAG = "utils/axiosLib";

export const executeRequest = async (
  url: string,
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE",
  payload: {
    [key: string]: string | Record<string, any> | number | boolean | undefined;
  } = {},
  headers: { [key: string]: string } = {},
  reject_unauthorized = true
) => {
  headers["Content-Type"] = headers["Content-Type"]
    ? headers["Content-Type"]
    : "application/json";

  let httpsAgent;
  if (!reject_unauthorized) {
    httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }
  const reqId = httpContext.get("reqId");
  const sessionId = httpContext.get("sessionId");

  if (!headers.requestId && !headers.request_id) {
    headers.request_id = reqId || "NO-ID";
  }

  if (!headers.sessionId && !headers.session_id) {
    headers.session_id = sessionId || reqId;
  }
  try {
    const _res = await axios({
      method: method,
      url: url,
      data: payload,
      headers: headers,
      httpsAgent,
    });
    const responseBody = _res.data || _res.data;

    return {
      message: "success",
      data: responseBody,
      statusCode: _res.status,
    };
  } catch (e: any) {
    console.error(`${TAG}::executeRequest ${String(e)}`);
    const errmsg = e.message ?? e.response.data.message;
    const responseBody = e.response.data || e.response.data;
    const statusCode = e.response ? e.response.status : 500;
    return {
      message: errmsg,
      data: responseBody,
      statusCode: statusCode,
    };
  }
};
