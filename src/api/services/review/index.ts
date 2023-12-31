import { baseURL } from "../../../config/config";
import { urlConstants } from "../../../config/constants";
import { executeRequest } from "../../utils/axiosLib";
import { HTTP_CODES, parseUrlWithQuery, response } from "../../utils/response";

export const addReview = async ({
  receiver,
  collectionId,
  review,
  rating,
}: {
  receiver: string;
  collectionId: string;
  review: string;
  rating: number;
}) => {
  try {
    const url = `${baseURL}/${urlConstants.REVIEWS.ADD}`;

    const payload = {
      receiver,
      collectionId,
      review,
      rating,
    };

    const resp = await executeRequest(url, "POST", payload, undefined);

    const { statusCode, message, data } = resp;
    return response(statusCode > 226, statusCode, message, data);
  } catch (error: Error | unknown) {}
};

export const getAllReviews = async ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) => {
  try {
    const url = parseUrlWithQuery(`${baseURL}${urlConstants.REVIEWS.ALL}`, {
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
