import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const HTTP_MSG = {
  VALIDATION_ERROR: "ValidationError",
  ...ReasonPhrases,
};

export const HTTP_CODES = {
  VALIDATION_ERROR: 400,
  ...StatusCodes,
};

export const parseUrlWithQuery = (
  url: string,
  filter: Record<string, any> | any
) => {
  let querys = "?";
  const objectKeys = Object.keys(filter || {});
  if (objectKeys.length === 0) return url;
  objectKeys.map((key, i) => {
    let $and = "&";
    if (
      key === undefined ||
      key === "undefined" ||
      key === null ||
      key === "null" ||
      key.length === 0
    ) {
      querys = querys;
    }
    if (i + 1 === objectKeys.length) {
      $and = "";
    }
    querys = querys + `${key}=${filter[key]}${$and}`;
  });
  return url + querys;
};

export const response = (
  error: boolean,
  statusCode: number,
  message: string,
  data: any
) => {
  return { error, statusCode, message, data };
};
