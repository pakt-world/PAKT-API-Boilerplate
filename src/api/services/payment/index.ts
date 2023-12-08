import { baseURL } from "../../../config/config";
import { urlConstants } from "../../../config/constants";
import { executeRequest } from "../../utils/axiosLib";
import { HTTP_CODES, response } from "../../utils/response";

export const createOrder = async ({
  coin,
  collection,
}: {
  collection: string;
  coin: string;
}) => {
  try {
    const url = `${baseURL}/${urlConstants.PAYMENT.CREATE_ORDER}`;

    const payload = {
      coin,
      collection,
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

export const validateOrder = async ({ collection }: { collection: string }) => {
  try {
    const url = `${baseURL}/${urlConstants.PAYMENT.VALIDATE_PAYMENT}`;

    const payload = {
      collection,
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

export const releasePayment = async ({
  collection,
  amount,
}: {
  collection: string;
  amount?: string;
}) => {
  try {
    const url = `${baseURL}/${urlConstants.PAYMENT.CREATE_ORDER}`;

    const payload = {
      collection,
      amount,
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

export const getPaymentMethods = async () => {
  try {
    const url = `${baseURL}/${urlConstants.PAYMENT.PAYMENT_METHODS}`;

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

export const getActiveRPCs = async () => {
  try {
    const url = `${baseURL}/${urlConstants.PAYMENT.ACTIVE_RPC}`;

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
