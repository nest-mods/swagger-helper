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
 * Created by Diluka on 2019/12/5.
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
import * as Decorators from '@nestjs/swagger/dist/decorators';
import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as path from 'path';

const file = Mustache.render(
  `let D: typeof import('@nestjs/swagger/dist/decorators');
try {
    D = require('@nestjs/swagger/dist/decorators');
} catch (ingored) {
}

type DecoratorType = (target: object, key?: any, descriptor?: any) => any

function applySwagger(fn: string, ...args: any[]): DecoratorType {
    return (target: object, key?: string | symbol, descriptor?: any) => D && D[fn] && D[fn](...args)(target, key, descriptor);
}

export namespace SwaggerDecorators {
{{#list}}
  {{> one}}
{{/list}}
}`,
  { list: Object.keys(Decorators).map(fn => ({ fn })) },
  { one: `export const {{fn}}: typeof D.{{fn}} = (...args: any[]) => applySwagger('{{fn}}', ...args);\n` });

console.log(file);

fs.writeFileSync(path.join(__dirname, 'src', 'decorator.ts'), file);
