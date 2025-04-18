import {
	isString,
	type,
	toPrecision,
	interpolate,
	interpolateInv,
	mapRange,
	isInstance,
} from "colorjs.io/src/util";

isString("foo"); // $ExpectType boolean

type("foo"); // $ExpectType string

// @ts-expect-error
toPrecision();
// @ts-expect-error
toPrecision(123);

toPrecision(123.456789, 3); // $ExpectType number

// @ts-expect-error
interpolate();
// @ts-expect-error
interpolate(1);
// @ts-expect-error
interpolate(1, 2);

interpolate(0, 1, 2); // $ExpectType number

// @ts-expect-error
interpolateInv();
// @ts-expect-error
interpolateInv(1);
// @ts-expect-error
interpolateInv(1, 2);

interpolateInv(0, 1, 2); // $ExpectType number

// @ts-expect-error
mapRange();
// @ts-expect-error
mapRange([1, 2]);
// @ts-expect-error
mapRange([1, 2], [3, 4]);
// @ts-expect-error
mapRange([1, 2, 3], [4, 5, 6], 7);

mapRange([1, 2], [3, 4], 5); // $ExpectType number

class SomeClass {}

declare const instance: any;

if (isInstance(instance, SomeClass)) {
	instance; // $ExpectType SomeClass
}
