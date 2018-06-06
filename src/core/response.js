/**
 * Wrapper for API responses
 */
class NomadoResponse {
  fromError(httpResponse) {
    this.error = httpResponse;
    return this;
  }

  fromSuccess(httpResponse) {
    this.data = httpResponse;
    return this;
  }

  fromException(httpResponse) {
    this.error = {
      code: httpResponse.code,
      status: (httpResponse.response || {}).status,
      statusText: (httpResponse.response || {}).statusText,
      url: (httpResponse.config || {}).url,
    };
    return this;
  }
}

/**
 * Check http response error code
 * @param response
 * @returns {boolean}
 */
function hasError(response) {
  return response.code >= 300;
}

async function responseBuilder(httpResponse) {
  let nomadoResponse = new NomadoResponse();
  let responses;

  try {
    // wait for http response
    responses = (await httpResponse).responses || [];
  }
  catch (e) {
    throw nomadoResponse.fromException(e);
  }

  if (responses.some(hasError)) {
    // throw error if error code >= 300
    throw nomadoResponse.fromError(responses);
  }

  return nomadoResponse.fromSuccess(responses);
}

module.exports = { responseBuilder, NomadoResponse };
