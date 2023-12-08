import { baseURL } from "../../../config/config";
import { urlConstants } from "../../../config/constants";
import { executeRequest } from "../../utils/axiosLib";
import { HTTP_CODES, response } from "../../utils/response";

export const getWallets = async () => {
  try {
    const url = `${baseURL}/${urlConstants.WALLET.USER}`;

    const resp = await executeRequest(url, "GET", undefined, undefined);
    const { statusCode, message, data } = resp;
    return response(statusCode > 226, statusCode, message, data);
  } catch (error: Error | unknown) {
    console.log({ error });
    return response(
      true,
      HTTP_CODES.INTERNAL_SERVER_ERROR,
      String(error),
      null
    );
  }
};

export const getSingleWallet = async ({ coin }: { coin: string }) => {
  try {
    const url = `${baseURL}/${urlConstants.WALLET.SINGLE}/${coin}`;

    const resp = await executeRequest(url, "GET", undefined, undefined);
    const { statusCode, message, data } = resp;
    return response(statusCode > 226, statusCode, message, data);
  } catch (error: Error | unknown) {
    console.log({ error });
    return response(
      true,
      HTTP_CODES.INTERNAL_SERVER_ERROR,
      String(error),
      null
    );
  }
};
