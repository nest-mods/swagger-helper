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
 * Created by Diluka on 2019-03-11.
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
export type Type<T> = any;

export interface ParamOptions {
    name: string;
    in: 'path';
    description?: string;
    required?: boolean;
    type?: Type<any>;
}

export interface QueryOptions {
    name: string;
    in: 'query';
    description?: string;
    required?: boolean;
    type?: Type<any>;
    enum?: import('@nestjs/swagger/dist/types/swagger-enum.type').SwaggerEnumType;
    items?: any;
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';
    isArray?: boolean;
}

export interface HeaderOptions {
    name: string;
    in: 'header';
    description?: string;
    required?: boolean;
    type?: Type<String>;
}

export interface BodyOptions {
    name: string;
    in: 'body';
    description?: string;
    required?: boolean;
    type?: Type<any>;
    isArray?: boolean;
}

export type ApiImplicitOptions = ParamOptions | QueryOptions | HeaderOptions | BodyOptions;

export interface ResponseOptions {
    status: import('@nestjs/common/enums/http-status.enum').HttpStatus;
    headers?: any;
    description?: string;
    type?: any;
    isArray?: boolean;
}

export interface OperationOptions {
    summary: string;
    description?: string;
    operationId?: string;
    deprecated?: boolean;
}
