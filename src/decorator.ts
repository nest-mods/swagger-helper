let D: typeof import('@nestjs/swagger/dist/decorators');
try {
    D = require('@nestjs/swagger/dist/decorators');
} catch (ingored) {
}

type DecoratorType = (target: object, key?: any, descriptor?: any) => any

function applySwagger(fn: string, ...args: any[]): DecoratorType {
    return (target: object, key?: string | symbol, descriptor?: any) => D && D[fn] && D[fn](...args)(target, key, descriptor);
}

export namespace SwaggerDecorators {
  export const ApiBasicAuth: typeof D.ApiBasicAuth = (...args: any[]) => applySwagger('ApiBasicAuth', ...args);
  export const ApiBearerAuth: typeof D.ApiBearerAuth = (...args: any[]) => applySwagger('ApiBearerAuth', ...args);
  export const ApiBody: typeof D.ApiBody = (...args: any[]) => applySwagger('ApiBody', ...args);
  export const ApiConsumes: typeof D.ApiConsumes = (...args: any[]) => applySwagger('ApiConsumes', ...args);
  export const ApiExcludeEndpoint: typeof D.ApiExcludeEndpoint = (...args: any[]) => applySwagger('ApiExcludeEndpoint', ...args);
  export const ApiExtraModels: typeof D.ApiExtraModels = (...args: any[]) => applySwagger('ApiExtraModels', ...args);
  export const ApiHeader: typeof D.ApiHeader = (...args: any[]) => applySwagger('ApiHeader', ...args);
  export const ApiHeaders: typeof D.ApiHeaders = (...args: any[]) => applySwagger('ApiHeaders', ...args);
  export const ApiHideProperty: typeof D.ApiHideProperty = (...args: any[]) => applySwagger('ApiHideProperty', ...args);
  export const ApiOAuth2: typeof D.ApiOAuth2 = (...args: any[]) => applySwagger('ApiOAuth2', ...args);
  export const ApiOperation: typeof D.ApiOperation = (...args: any[]) => applySwagger('ApiOperation', ...args);
  export const ApiParam: typeof D.ApiParam = (...args: any[]) => applySwagger('ApiParam', ...args);
  export const ApiProduces: typeof D.ApiProduces = (...args: any[]) => applySwagger('ApiProduces', ...args);
  export const ApiProperty: typeof D.ApiProperty = (...args: any[]) => applySwagger('ApiProperty', ...args);
  export const ApiPropertyOptional: typeof D.ApiPropertyOptional = (...args: any[]) => applySwagger('ApiPropertyOptional', ...args);
  export const ApiResponseProperty: typeof D.ApiResponseProperty = (...args: any[]) => applySwagger('ApiResponseProperty', ...args);
  export const ApiQuery: typeof D.ApiQuery = (...args: any[]) => applySwagger('ApiQuery', ...args);
  export const ApiResponse: typeof D.ApiResponse = (...args: any[]) => applySwagger('ApiResponse', ...args);
  export const ApiOkResponse: typeof D.ApiOkResponse = (...args: any[]) => applySwagger('ApiOkResponse', ...args);
  export const ApiCreatedResponse: typeof D.ApiCreatedResponse = (...args: any[]) => applySwagger('ApiCreatedResponse', ...args);
  export const ApiAcceptedResponse: typeof D.ApiAcceptedResponse = (...args: any[]) => applySwagger('ApiAcceptedResponse', ...args);
  export const ApiNoContentResponse: typeof D.ApiNoContentResponse = (...args: any[]) => applySwagger('ApiNoContentResponse', ...args);
  export const ApiMovedPermanentlyResponse: typeof D.ApiMovedPermanentlyResponse = (...args: any[]) => applySwagger('ApiMovedPermanentlyResponse', ...args);
  export const ApiBadRequestResponse: typeof D.ApiBadRequestResponse = (...args: any[]) => applySwagger('ApiBadRequestResponse', ...args);
  export const ApiUnauthorizedResponse: typeof D.ApiUnauthorizedResponse = (...args: any[]) => applySwagger('ApiUnauthorizedResponse', ...args);
  export const ApiTooManyRequestsResponse: typeof D.ApiTooManyRequestsResponse = (...args: any[]) => applySwagger('ApiTooManyRequestsResponse', ...args);
  export const ApiNotFoundResponse: typeof D.ApiNotFoundResponse = (...args: any[]) => applySwagger('ApiNotFoundResponse', ...args);
  export const ApiInternalServerErrorResponse: typeof D.ApiInternalServerErrorResponse = (...args: any[]) => applySwagger('ApiInternalServerErrorResponse', ...args);
  export const ApiBadGatewayResponse: typeof D.ApiBadGatewayResponse = (...args: any[]) => applySwagger('ApiBadGatewayResponse', ...args);
  export const ApiConflictResponse: typeof D.ApiConflictResponse = (...args: any[]) => applySwagger('ApiConflictResponse', ...args);
  export const ApiForbiddenResponse: typeof D.ApiForbiddenResponse = (...args: any[]) => applySwagger('ApiForbiddenResponse', ...args);
  export const ApiGatewayTimeoutResponse: typeof D.ApiGatewayTimeoutResponse = (...args: any[]) => applySwagger('ApiGatewayTimeoutResponse', ...args);
  export const ApiGoneResponse: typeof D.ApiGoneResponse = (...args: any[]) => applySwagger('ApiGoneResponse', ...args);
  export const ApiMethodNotAllowedResponse: typeof D.ApiMethodNotAllowedResponse = (...args: any[]) => applySwagger('ApiMethodNotAllowedResponse', ...args);
  export const ApiNotAcceptableResponse: typeof D.ApiNotAcceptableResponse = (...args: any[]) => applySwagger('ApiNotAcceptableResponse', ...args);
  export const ApiNotImplementedResponse: typeof D.ApiNotImplementedResponse = (...args: any[]) => applySwagger('ApiNotImplementedResponse', ...args);
  export const ApiPayloadTooLargeResponse: typeof D.ApiPayloadTooLargeResponse = (...args: any[]) => applySwagger('ApiPayloadTooLargeResponse', ...args);
  export const ApiRequestTimeoutResponse: typeof D.ApiRequestTimeoutResponse = (...args: any[]) => applySwagger('ApiRequestTimeoutResponse', ...args);
  export const ApiServiceUnavailableResponse: typeof D.ApiServiceUnavailableResponse = (...args: any[]) => applySwagger('ApiServiceUnavailableResponse', ...args);
  export const ApiUnprocessableEntityResponse: typeof D.ApiUnprocessableEntityResponse = (...args: any[]) => applySwagger('ApiUnprocessableEntityResponse', ...args);
  export const ApiUnsupportedMediaTypeResponse: typeof D.ApiUnsupportedMediaTypeResponse = (...args: any[]) => applySwagger('ApiUnsupportedMediaTypeResponse', ...args);
  export const ApiDefaultResponse: typeof D.ApiDefaultResponse = (...args: any[]) => applySwagger('ApiDefaultResponse', ...args);
  export const ApiSecurity: typeof D.ApiSecurity = (...args: any[]) => applySwagger('ApiSecurity', ...args);
  export const ApiTags: typeof D.ApiTags = (...args: any[]) => applySwagger('ApiTags', ...args);
}