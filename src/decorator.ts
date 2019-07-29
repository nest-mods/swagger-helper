/*
 * MIT License
 *
 * Copyright (c) 2019 nest-mods
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Created by Diluka on 2019-07-29.
 *
 *
 * ----------- 神 兽 佑 我 -----------
 *        ┏┓      ┏┓+ +
 *       ┏┛┻━━━━━━┛┻┓ + +
 *       ┃          ┃
 *       ┣     ━    ┃ ++ + + +
 *      ████━████   ┃+
 *       ┃          ┃ +
 *       ┃  ┴       ┃
 *       ┃          ┃ + +
 *       ┗━┓      ┏━┛  Code is far away from bug
 *         ┃      ┃       with the animal protecting
 *         ┃      ┃ + + + +
 *         ┃      ┃
 *         ┃      ┃ +
 *         ┃      ┃      +  +
 *         ┃      ┃    +
 *         ┃      ┗━━━┓ + +
 *         ┃          ┣┓
 *         ┃          ┏┛
 *         ┗┓┓┏━━━━┳┓┏┛ + + + +
 *          ┃┫┫    ┃┫┫
 *          ┗┻┛    ┗┻┛+ + + +
 * ----------- 永 无 BUG ------------
 */
let Swagger: typeof import('@nestjs/swagger');
try {
  Swagger = require('@nestjs/swagger');
} catch (ingored) {
}

type DecoratorType = (target: object, key?: any, descriptor?: any) => any
type SwaggerEnumType = import('@nestjs/swagger/dist/types/swagger-enum.type').SwaggerEnumType
type ResponseMetadata = import('@nestjs/swagger').ResponseMetadata

function applySwagger(fn: string, ...args: any[]): DecoratorType {
  return (target: object, key?: string | symbol, descriptor?: any) => {
    if (Swagger && Swagger[fn]) {
      Swagger[fn](...args)(target, key, descriptor);
    }
  };
}

export namespace SwaggerDecorators {
  export function ApiBearerAuth() {
    return applySwagger('ApiBearerAuth', ...arguments);
  }

  export function ApiConsumes(...mimeTypes: string[]) {
    return applySwagger('ApiConsumes', ...arguments);
  }

  export function ApiExcludeEndpoint() {
    return applySwagger('ApiExcludeEndpoint');
  }

  export function ApiImplicitBody(metadata: {
    name: string;
    type: any;
    description?: string;
    required?: boolean;
    isArray?: boolean;
  }) {
    return applySwagger('ApiImplicitBody', ...arguments);
  }

  export function ApiImplicitFile(metadata: {
    name: string;
    description?: string;
    required?: boolean;
  }) {
    return applySwagger('ApiImplicitFile', ...arguments);
  }

  export function ApiImplicitHeader(metadata: {
    name: string;
    description?: string;
    required?: boolean;
  }) {
    return applySwagger('ApiImplicitHeader', ...arguments);
  }

  export function ApiImplicitHeaders(metadata: {
    name: string;
    description?: string;
    required?: boolean;
  }) {
    return applySwagger('ApiImplicitHeaders', ...arguments);
  }

  export function ApiImplicitParam(metadata: {
    name: string;
    description?: string;
    required?: boolean;
    type?: any;
  }) {
    return applySwagger('ApiImplicitParam', ...arguments);
  }

  export function ApiImplicitQuery(metadata: {
    name: string;
    description?: string;
    required?: boolean;
    type?: any;
    isArray?: boolean;
    enum?: SwaggerEnumType;
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';
  }) {
    return applySwagger('ApiImplicitQuery', ...arguments);
  }

  export function ApiModelProperty(metadata?: {
    description?: string;
    required?: boolean;
    type?: any;
    isArray?: boolean;
    collectionFormat?: string;
    default?: any;
    enum?: SwaggerEnumType;
    format?: string;
    in?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    readOnly?: boolean;
    xml?: any;
    example?: any;
  }) {
    return applySwagger('ApiModelProperty', ...arguments);
  }

  export function ApiModelPropertyOptional(metadata?: {
    description?: string;
    type?: any;
    isArray?: boolean;
    collectionFormat?: string;
    default?: any;
    enum?: SwaggerEnumType;
    format?: string;
    in?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    readOnly?: boolean;
    xml?: any;
    example?: any;
  }) {
    return applySwagger('ApiModelPropertyOptional', ...arguments);
  }

  export function ApiResponseModelProperty(metadata?: {
    type?: any;
    example?: any;
  }) {
    return applySwagger('ApiResponseModelProperty', ...arguments);
  }

  export function ApiOAuth2Auth(scopes?: string[]) {
    return applySwagger('ApiOAuth2Auth', ...arguments);
  }

  export function ApiOperation(metadata: {
    title: string;
    description?: string;
    operationId?: string;
    deprecated?: boolean;
  }) {
    return applySwagger('ApiOperation', ...arguments);
  }

  export function ApiProduces(...mimeTypes: string[]) {
    return applySwagger('ApiProduces', ...arguments);
  }

  export function ApiResponse(metadata: {
    status: number;
    headers?: any;
  } & ResponseMetadata) {
    return applySwagger('ApiResponse', ...arguments);
  }

  export function ApiOkResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiOkResponse', ...arguments);
  }

  export function ApiCreatedResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiCreatedResponse', ...arguments);
  }

  export function ApiBadRequestResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiBadRequestResponse', ...arguments);
  }

  export function ApiNotFoundResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiNotFoundResponse', ...arguments);
  }

  export function ApiInternalServerErrorResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiInternalServerErrorResponse', ...arguments);
  }

  export function ApiBadGatewayResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiBadGatewayResponse', ...arguments);
  }

  export function ApiConflictResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiConflictResponse', ...arguments);
  }

  export function ApiForbiddenResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiForbiddenResponse', ...arguments);
  }

  export function ApiGatewayTimeoutResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiGatewayTimeoutResponse', ...arguments);
  }

  export function ApiGoneResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiGoneResponse', ...arguments);
  }

  export function ApiMethodNotAllowedResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiMethodNotAllowedResponse', ...arguments);
  }

  export function ApiNotAcceptableResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiNotAcceptableResponse', ...arguments);
  }

  export function ApiNotImplementedResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiNotImplementedResponse', ...arguments);
  }

  export function ApiPayloadTooLargeResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiPayloadTooLargeResponse', ...arguments);
  }

  export function ApiRequestTimeoutResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiRequestTimeoutResponse', ...arguments);
  }

  export function ApiServiceUnavailableResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiServiceUnavailableResponse', ...arguments);
  }

  export function ApiUnprocessableEntityResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiUnprocessableEntityResponse', ...arguments);
  }

  export function ApiUnsupportedMediaTypeResponse(metadata: ResponseMetadata) {
    return applySwagger('ApiUnsupportedMediaTypeResponse', ...arguments);
  }

  export function ApiUseTags(...tags: string[]) {
    return applySwagger('ApiUseTags', ...arguments);
  }
}
