import { assertEquals } from 'jsr:@std/assert';
import { hello } from './main.ts';

Deno.test(function addTest() {
  assertEquals(hello('ozaki25'), 'hello ozaki25');
});
