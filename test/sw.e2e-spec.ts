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

import { Body, Controller, Get, Post } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Test } from '@nestjs/testing';
import * as prettyjson from 'prettyjson';
import * as supertest from 'supertest';
import { SwaggerDecorators } from '../src';
import ApiBasicAuth = SwaggerDecorators.ApiBasicAuth;
import ApiBearerAuth = SwaggerDecorators.ApiBearerAuth;
import ApiCreatedResponse = SwaggerDecorators.ApiCreatedResponse;
import ApiOperation = SwaggerDecorators.ApiOperation;
import ApiProduces = SwaggerDecorators.ApiProduces;
import ApiProperty = SwaggerDecorators.ApiProperty;
import ApiPropertyOptional = SwaggerDecorators.ApiPropertyOptional;
import ApiTags = SwaggerDecorators.ApiTags;

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

class DemoModel {

  @ApiProperty({ description: 'person\'s name' })
  name: string;

  @ApiPropertyOptional({ type: 'int', minimum: 0, maximum: 120 })
  age: number;

  @ApiPropertyOptional({ type: 'string', enum: Gender })
  gender: Gender;
}

@ApiTags('demo')
@Controller('demo')
class DemoController {

  @ApiOperation({ description: 'hello' })
  @ApiProduces('text/html')
  @ApiBasicAuth()
  @Get('hello')
  hello() {
    return 'hello';
  }

  @ApiOperation({ description: 'create model' })
  @ApiCreatedResponse({ type: DemoModel })
  @ApiBearerAuth()
  @Post('create')
  create(@Body() form: DemoModel) {
    return form;
  }
}

describe('swagger decorators', () => {

  let $: supertest.SuperTest<supertest.Test>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [DemoController],
    }).compile();

    const app = module.createNestApplication();

    const options = new DocumentBuilder()
      .setTitle('test')
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);

    await app.init();

    $ = supertest(app.getHttpServer());
  });

  it('should have docs', async () => {
    const res = await $.get('/api-docs-json').expect(200);
    console.log(prettyjson.render(res.body));
  });
});
