import { baseURL } from "../../../config/config";
import { urlConstants } from "../../../config/constants";
import { executeRequest } from "../../utils/axiosLib";
import { HTTP_CODES, parseUrlWithQuery, response } from "../../utils/response";

type AccountAvailability = "busy" | "available" | "working";

interface UpdateAccountInterface {
  profileImage?: string;
  bgImage?: string;
  profile?: {
    contact?: {
      country?: string;
      state?: string;
      city?: string;
      address?: string;
      phone?: string;
    };
    bio?: {
      title?: string;
      description?: string;
    };
    talent?: {
      about?: string;
      availability?: AccountAvailability;
      tags?: string[];
      tagsIds?: string | any[];
      tagsCategory?: string;
    };
  };
  isPrivate?: boolean;
  socials?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  meta?: Record<string, any>;
}

interface FilterUserInterface {
  page?: number;
  limit?: number;
  type?: "creator" | "recipient";
  tags?: string[];
  owner?: boolean;
  profileCompletenessMin?: number;
  profileCompletenessMax?: number;
}

export const updateAccount = async ({
  updatePayload,
}: {
  updatePayload: UpdateAccountInterface;
}) => {
  try {
    const url = `${baseURL}${urlConstants.ACCOUNT.UPDATE_ACCOUNT}`;
    const resp = await executeRequest(
      url,
      "PATCH",
      { ...updatePayload },
      undefined
    );
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

export const fetchUsers = async (filter: FilterUserInterface) => {
  try {
    const url = parseUrlWithQuery(
      `${baseURL}${urlConstants.ACCOUNT.FIND_ACCOUNT}`,
      filter
    );
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

export const fetchAUser = async ({ userId }: { userId: string }) => {
  try {
    const url = `${baseURL}${urlConstants.ACCOUNT.FIND_ACCOUNT_BY_ID}/${userId}`;
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

type TwoFaAuthType = "email" | "google_auth";

export const initiateTwoFactorAuth = async ({
  type,
}: {
  type: TwoFaAuthType;
}) => {
  try {
    const payload = { type };
    const url = `${baseURL}${urlConstants.ACCOUNT.INITIATE_TWO_FA}`;
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

export const activateTwoFactorAuth = async ({ code }: { code: string }) => {
  try {
    const payload = { code };
    const url = `${baseURL}${urlConstants.ACCOUNT.ACTIVATE_TWO_FA}`;
    const resp = await executeRequest(url, "POST", undefined, undefined);
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

export const deactivateTwoFactorAuth = async ({ code }: { code: string }) => {
  try {
    const payload = { code };
    const url = `${baseURL}${urlConstants.ACCOUNT.DEACTIVATE_TWO_FA}`;
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

export const sendEmailForTwoFactorAuth = async () => {
  try {
    const url = `${baseURL}${urlConstants.ACCOUNT.SEND_EMAIL_TWO_FA}`;
    const resp = await executeRequest(url, "POST", undefined, undefined);
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

export const getLoggedInUserProfile = async () => {
  try {
    const url = `${baseURL}${urlConstants.ACCOUNT.GET_LOGGED_IN_USER_PROFILE}`;
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

export const changeUserPassword = async ({
  oldPassword,
  newPassword,
}: {
  oldPassword: string;
  newPassword: string;
}) => {
  try {
    const payload = {
      oldPassword,
      newPassword,
    };
    const url = `${baseURL}${urlConstants.ACCOUNT.SEND_EMAIL_TWO_FA}`;
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

export const logout = async () => {
  try {
    const url = `${baseURL}${urlConstants.ACCOUNT.SEND_EMAIL_TWO_FA}`;
    const resp = await executeRequest(url, "POST", undefined, undefined);
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
