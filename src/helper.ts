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
import 'reflect-metadata';
import {Constants} from './swagger';
import {ApiImplicitOptions, OperationOptions, ResponseOptions} from './interfaces';
import * as _ from 'lodash';

let helpers: typeof import('@nestjs/swagger/dist/decorators/helpers');
try {
    helpers = require('@nestjs/swagger/dist/decorators/helpers');
} catch (ignored) {
}

export function setSwagger(func: Function, ...params: ApiImplicitOptions[]) {
    if (!Constants) {
        return;
    }

    for (const param of params) {
        switch (param.in) {
            case 'body':
                const [type, isArray] = helpers.getTypeIsArrayTuple(param.type, param.isArray);
                param.type = type;
                param.isArray = isArray;
                break;
            case 'query':
                if (param.enum) {
                    param.type = String;
                }

                if (param.isArray) {
                    param.type = Array;
                    if (param.enum) {
                        param.items = {
                            type: 'String',
                            enum: param.enum
                        };
                        param.collectionFormat = 'multi';
                        param.enum = undefined;
                    } else {
                        param.items = {
                            type: param.type
                        };
                        param.collectionFormat = _.isNil(param.collectionFormat) ? 'csv' : param.collectionFormat;
                    }
                }
                break;
            case 'path':
                break;
            case 'header':
                param.type = String;
                break;
        }
    }
    const metadata = Reflect.getMetadata(Constants.DECORATORS.API_PARAMETERS, func) || [];
    Reflect.defineMetadata(Constants.DECORATORS.API_PARAMETERS, [...metadata, ...params], func);
}

export function setSwaggerResponse(func: Function, options: ResponseOptions) {
    if (!Constants) {
        return;
    }

    const responses = Reflect.getMetadata(Constants.DECORATORS.API_RESPONSE, func) || {};
    const groupedMetadata = {
        [options.status]: {
            type: options.type,
            isArray: options.isArray,
            description: options.description || '',
            headers: options.headers
        },
    };
    Reflect.defineMetadata(Constants.DECORATORS.API_RESPONSE, {...responses, ...groupedMetadata}, func);
}

export function setSwaggerOperation(func: Function, options: OperationOptions) {
    if (!Constants) {
        return;
    }

    const meta = Reflect.getMetadata(Constants.DECORATORS.API_OPERATION, func) || {};
    Reflect.defineMetadata(Constants.DECORATORS.API_OPERATION, _.assign(meta, options), func);
}

export function setSwaggerUseTags(func: Function, ...tags: string[]) {
    if (!Constants) {
        return;
    }

    const meta = Reflect.getMetadata(Constants.DECORATORS.API_USE_TAGS, func) || [];
    Reflect.defineMetadata(Constants.DECORATORS.API_USE_TAGS, [...meta, ...tags], func);
}
