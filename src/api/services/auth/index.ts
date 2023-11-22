import { baseURL } from "../../../config/config";
import { urlConstants } from "../../../config/constants";
import { executeRequest } from "../../utils/axiosLib";
import { HTTP_CODES, response } from "../../utils/response";

interface RegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  referral: string;
}

export const register = async ({ payload }: { payload: RegisterPayload }) => {
  try {
    const url = `${baseURL}${urlConstants.AUTH.REGISTRATION}`;
    const resp = await executeRequest(url, "POST", { ...payload }, undefined);
    const { statusCode, message, data } = resp;
    return response(statusCode > 226, statusCode, message, data);
  } catch (error: Error | unknown) {
    return response(
      true,
      HTTP_CODES.INTERNAL_SERVER_ERROR,
      String(error),
      null
    );
  }
};

export const verifyAccount = async ({
  token,
  tempToken,
}: {
  token: string;
  tempToken: string;
}) => {
  try {
    const payload = {
      token,
      tempToken,
    };
    const url = `${baseURL}${urlConstants.AUTH.REGISTRATION}`;
    const resp = await executeRequest(url, "POST", { ...payload }, undefined);
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

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const payload = {
      email,
      password,
    };
    const url = `${baseURL}${urlConstants.AUTH.LOGIN}`;
    const resp = await executeRequest(url, "POST", { ...payload }, undefined);
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

export const sendResetPasswordLink = async ({ email }: { email: string }) => {
  try {
    const payload = {
      email,
    };
    const url = `${baseURL}${urlConstants.AUTH.SEND_PASSWORD_RESET_LINK}`;
    const resp = await executeRequest(url, "POST", { ...payload }, undefined);
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

export const validatePasswordResetToken = async ({
  token,
  tempToken,
}: {
  token: string;
  tempToken: string;
}) => {
  try {
    const payload = {
      token,
      tempToken,
    };
    const url = `${baseURL}${urlConstants.AUTH.VERIFY_RESET_PASSWORD_TOKEN}`;
    const resp = await executeRequest(url, "POST", { ...payload }, undefined);
    const { statusCode, message, data } = resp;
    return response(statusCode > 226, statusCode, message, data);
  } catch (error: Error | unknown) {
    console.log({ error });
    return response(true, 500, String(error), null);
  }
};

export const changePassword = async ({
  token,
  tempToken,
  password,
}: {
  token: string;
  tempToken: string;
  password: string;
}) => {
  try {
    const payload = {
      token,
      tempToken,
      password,
    };
    const url = `${baseURL}${urlConstants.AUTH.RESET_PASSWORD}`;
    const resp = await executeRequest(url, "POST", { ...payload }, undefined);
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

export const validateReferral = async ({ token }: { token: string }) => {
  try {
    const payload = {
      token,
    };
    const url = `${baseURL}${urlConstants.AUTH.RESET_PASSWORD}`;
    const resp = await executeRequest(url, "POST", { ...payload }, undefined);
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
