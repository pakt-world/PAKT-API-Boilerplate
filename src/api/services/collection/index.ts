import { baseURL } from "../../../config/config";
import { urlConstants } from "../../../config/constants";
import { executeRequest } from "../../utils/axiosLib";
import { HTTP_CODES, parseUrlWithQuery, response } from "../../utils/response";

export const create = async ({
  type,
  name,
  description,
  category,
  paymentFee,
  deliveryDate,
  tags,
  isPrivate,
  image,
  status,
  attachments,
  meta,
}: {
  type: string;
  name: string;
  description: string;
  paymentFee?: number;
  category?: string;
  deliveryDate?: string;
  isPrivate?: boolean;
  tags?: string[];
  parent?: string;
  image?: string;
  status?: string;
  attachments?: string[];
  meta?: Record<string, any>;
}) => {
  try {
    const url = `${baseURL}/${urlConstants.COLLECTION.CREATE_A_COLLECTION}`;

    const payload = {
      type,
      name,
      description,
      category,
      paymentFee,
      deliveryDate,
      isPrivate,
      tags,
      parent,
      image,
      status,
      attachments,
      meta,
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

export const fetchCollections = async ({
  page,
  limit,
  type,
  status,
  tags,
  creator,
  receiver,
  isPrivate,
  price,
}: {
  page?: string;
  limit?: string;
  type?: string;
  status?: string;
  tags?: string;
  creator?: boolean;
  receiver?: boolean;
  isPrivate?: boolean;
  price?: string;
}) => {
  try {
    const url = parseUrlWithQuery(
      `${baseURL}/${urlConstants.COLLECTION.GET_COLLECTIONS}`,
      {
        page,
        limit,
        type,
        status,
        tags,
        creator,
        receiver,
        isPrivate,
        price,
      }
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

export const fetchACollection = async ({
  page,
  limit,
  type,
  status,
  tags,
  creator,
  receiver,
  isPrivate,
  price,
}: {
  page?: string;
  limit?: string;
  type?: string;
  status?: string;
  tags?: string;
  creator?: boolean;
  receiver?: boolean;
  isPrivate?: boolean;
  price?: string;
}) => {
  try {
    const url = parseUrlWithQuery(`${baseURL}/${urlConstants.WITHDRAWAL.ALL}`, {
      page,
      limit,
      type,
      status,
      tags,
      creator,
      receiver,
      isPrivate,
      price,
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
