import { assertEquals } from "jsr:@std/assert";

import { romanConverter } from "./main.ts";



Deno.test('Roman number converter', () => { assertEquals(romanConverter(1), 'I');} );
Deno.test('Roman number converter', () => { assertEquals(romanConverter(2), 'II');} );  
Deno.test('Roman number converter', () => { assertEquals(romanConverter(1000), 'M');} );
Deno.test('Roman number converter', () => { assertEquals(romanConverter(3652), 'MMMDCLII');} ); 
Deno.test('Roman number converter', () => { assertEquals(romanConverter(-1), 'Number must be between 1 and 3999');} );
