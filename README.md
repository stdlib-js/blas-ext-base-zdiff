<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zdiff

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the k-th discrete forward difference of a double-precision complex floating-point strided array.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zdiff
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zdiff = require( '@stdlib/blas-ext-base-zdiff' );
```

<!-- lint disable maximum-heading-length -->

#### zdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )

<!-- lint enable maximum-heading-length -->

Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
var p = new Complex128Array( [ 1.0, -1.0 ] );
var a = new Complex128Array( [ 11.0, -11.0 ] );
var out = new Complex128Array( 6 );
var w = new Complex128Array( 6 );

zdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
// out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: number of times to recursively compute differences.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **N1**: number of indexed elements to `prepend`.
-   **prepend**: a [`Complex128Array`][@stdlib/array/complex128] containing values to prepend prior to computing differences.
-   **strideP**: stride length for `prepend`.
-   **N2**: number of indexed elements to `append`.
-   **append**: a [`Complex128Array`][@stdlib/array/complex128] containing values to append prior to computing differences.
-   **strideA**: stride length for `append`.
-   **out**: output [`Complex128Array`][@stdlib/array/complex128]. Must have `N + N1 + N2 - k` elements.
-   **strideOut**: stride length for `out`.
-   **workspace**: workspace [`Complex128Array`][@stdlib/array/complex128]. Must have `N + N1 + N2 - 1` elements.
-   **strideW**: stride length for `workspace`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute differences of every other element:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
var p = new Complex128Array( [ 1.0, -1.0 ] );
var a = new Complex128Array( [ 11.0, -11.0 ] );
var out = new Complex128Array( 4 );
var w = new Complex128Array( 4 );

zdiff( 3, 1, x, 2, 1, p, 1, 1, a, 1, out, 1, w, 1 );
// out => <Complex128Array>[ 1.0, -1.0, 4.0, -4.0, 4.0, -4.0, 1.0, -1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial array...
var x0 = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );

// Create an offset view...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var p = new Complex128Array( [ 1.0, -1.0 ] );
var a = new Complex128Array( [ 11.0, -11.0 ] );
var out = new Complex128Array( 5 );
var w = new Complex128Array( 5 );

zdiff( x1.length, 1, x1, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
// out => <Complex128Array>[ 3.0, -3.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
```

<!-- lint disable maximum-heading-length -->

#### zdiff.ndarray( N, k, x, strideX, offsetX, N1, prepend, strideP, offsetP, N2, append, strideA, offsetA, out, strideOut, offsetOut, workspace, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
var p = new Complex128Array( [ 1.0, -1.0 ] );
var a = new Complex128Array( [ 11.0, -11.0 ] );
var out = new Complex128Array( 6 );
var w = new Complex128Array( 6 );

zdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
// out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetP**: starting index for `prepend`.
-   **offsetA**: starting index for `append`.
-   **offsetOut**: starting index for `out`.
-   **offsetW**: starting index for `workspace`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to access only the last three elements:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
var p = new Complex128Array( [ 1.0, -1.0 ] );
var a = new Complex128Array( [ 11.0, -11.0 ] );
var out = new Complex128Array( 4 );
var w = new Complex128Array( 4 );

zdiff.ndarray( 3, 1, x, 1, x.length-3, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
// out => <Complex128Array>[ 5.0, -5.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When `k <= 1`, the workspace array is unused and thus ignored.
-   If `N + N1 + N2 <= 1` or `k >= N + N1 + N2`, both functions return the output array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Array = require( '@stdlib/array-complex128' );
var zdiff = require( '@stdlib/blas-ext-base-zdiff' );

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
console.log( 'Input array: ', x );

var pbuf = discreteUniform( 4, -100, 100, {
    'dtype': 'float64'
});
var p = new Complex128Array( pbuf.buffer );
console.log( 'Prepend array: ', p );

var abuf = discreteUniform( 4, -100, 100, {
    'dtype': 'float64'
});
var a = new Complex128Array( abuf.buffer );
console.log( 'Append array: ', a );

var out = new Complex128Array( 10 );
var w = new Complex128Array( 13 );

zdiff( x.length, 4, x, 1, 2, p, 1, 2, a, 1, out, 1, w, 1 );
console.log( 'Output: ', out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zdiff.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_zdiff( N, k, \*X, strideX, N1, \*Prepend, strideP, N2, \*Append, strideA, \*Out, strideOut, \*Workspace, strideW )

<!-- lint enable maximum-heading-length -->

Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 };
const double p[] = { 1.0, -1.0 };
const double a[] = { 11.0, -11.0 };
double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
double w[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_zdiff( 5, 1, (const stdlib_complex128_t *)x, 1, 1, (const stdlib_complex128_t *)p, 1, 1, (const stdlib_complex128_t *)a, 1, (stdlib_complex128_t *)out, 1, (stdlib_complex128_t *)w, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to recursively compute differences.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **N1**: `[in] CBLAS_INT` number of indexed elements for `Prepend`.
-   **Prepend**: `[in] stdlib_complex128_t*` array containing values to prepend prior to computing differences.
-   **strideP**: `[in] CBLAS_INT` stride length for `Prepend`.
-   **N2**: `[in] CBLAS_INT` number of indexed elements for `Append`.
-   **Append**: `[in] stdlib_complex128_t*` array containing values to append prior to computing differences.
-   **strideA**: `[in] CBLAS_INT` stride length for `Append`.
-   **Out**: `[out] stdlib_complex128_t*` output array. Must have `N + N1 + N2 - k` elements.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **Workspace**: `[out] stdlib_complex128_t*` workspace array. Must have `N + N1 + N2 - 1` elements.
-   **strideW**: `[in] CBLAS_INT` stride length for `Workspace`.

```c
void stdlib_strided_zdiff( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT N1, const stdlib_complex128_t *Prepend, const CBLAS_INT strideP, const CBLAS_INT N2, const stdlib_complex128_t *Append, const CBLAS_INT strideA, stdlib_complex128_t *Out, const CBLAS_INT strideOut, stdlib_complex128_t *Workspace, const CBLAS_INT strideW );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_zdiff_ndarray( N, k, \*X, strideX, offsetX, N1, \*Prepend, strideP, offsetP, N2, \*Append, strideA, offsetA, \*Out, strideOut, offsetOut, \*Workspace, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 };
const double p[] = { 1.0, -1.0 };
const double a[] = { 11.0, -11.0 };
double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
double w[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_zdiff_ndarray( 5, 1, (const stdlib_complex128_t *)x, 1, 0, 1, (const stdlib_complex128_t *)p, 1, 0, 1, (const stdlib_complex128_t *)a, 1, 0, (stdlib_complex128_t *)out, 1, 0, (stdlib_complex128_t *)w, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to recursively compute differences.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **N1**: `[in] CBLAS_INT` number of indexed elements for `Prepend`.
-   **Prepend**: `[in] stdlib_complex128_t*` array containing values to prepend prior to computing differences.
-   **strideP**: `[in] CBLAS_INT` stride length for `Prepend`.
-   **offsetP**: `[in] CBLAS_INT` starting index for `Prepend`.
-   **N2**: `[in] CBLAS_INT` number of indexed elements for `Append`.
-   **Append**: `[in] stdlib_complex128_t*` array containing values to append prior to computing differences.
-   **strideA**: `[in] CBLAS_INT` stride length for `Append`.
-   **offsetA**: `[in] CBLAS_INT` starting index for `Append`.
-   **Out**: `[out] stdlib_complex128_t*` output array. Must have `N + N1 + N2 - k` elements.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **offsetOut**: `[in] CBLAS_INT` starting index for `Out`.
-   **Workspace**: `[out] stdlib_complex128_t*` workspace array. Must have `N + N1 + N2 - 1` elements.
-   **strideW**: `[in] CBLAS_INT` stride length for `Workspace`.
-   **offsetW**: `[in] CBLAS_INT` starting index for `Workspace`.

```c
void stdlib_strided_zdiff_ndarray( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const stdlib_complex128_t *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const stdlib_complex128_t *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, stdlib_complex128_t *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut, stdlib_complex128_t *Workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zdiff.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    const double x[] = { 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 };

    // Define a list of values to prepend:
    const double p[] = { 0.0, 0.0 };

    // Define a list of values to append:
    const double a[] = { 5.0, -5.0 };

    // Define an output array:
    double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Define a workspace:
    double w[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Compute forward differences:
    stdlib_strided_zdiff( 4, 1, (const stdlib_complex128_t *)x, 1, 1, (const stdlib_complex128_t *)p, 1, 1, (const stdlib_complex128_t *)a, 1, (stdlib_complex128_t *)out, 1, (stdlib_complex128_t *)w, 1 );

    // Print the result:
    for ( int i = 0; i < 10; i++ ) {
        printf( "out[ %i ] = %lf\n", i, out[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zdiff.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zdiff

[test-image]: https://github.com/stdlib-js/blas-ext-base-zdiff/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zdiff/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zdiff/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zdiff?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zdiff.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zdiff/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zdiff/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zdiff/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zdiff/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zdiff/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zdiff/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zdiff/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zdiff/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zdiff/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
