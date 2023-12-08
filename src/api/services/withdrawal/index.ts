import { baseURL } from "../../../config/config";
import { urlConstants } from "../../../config/constants";
import { executeRequest } from "../../utils/axiosLib";
import { HTTP_CODES, parseUrlWithQuery, response } from "../../utils/response";

export const createWithdrawals = async ({
  amount,
  coin,
  address,
  password,
  otp,
}: {
  amount: number;
  coin: string;
  address: string;
  password: string;
  otp?: string;
}) => {
  try {
    const url = `${baseURL}/${urlConstants.WITHDRAWAL.CREATE}`;

    const payload = {
      amount,
      coin,
      address,
      password,
      otp,
    };

    const resp = await executeRequest(url, "POST", payload, undefined);
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

export const getWithdrawals = async ({
  page,
  limit,
}: {
  page: string;
  limit: string;
}) => {
  try {
    const url = parseUrlWithQuery(`${baseURL}/${urlConstants.WITHDRAWAL.ALL}`, {
      page,
      limit,
    });

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
