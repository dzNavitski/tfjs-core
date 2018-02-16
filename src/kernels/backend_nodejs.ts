/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Context, execute, TensorHandle, TF_BOOL, TF_FLOAT, TF_INT32} from 'tfnodejs';

import {ENV} from '../environment';
import {KernelBackend} from '../kernels/backend';
// tslint:disable-next-line:max-line-length
import {DataId, Tensor, Tensor1D, Tensor2D, Tensor3D, Tensor4D} from '../tensor';
import {Rank} from '../types';

// import {DTypeCode, TFNodeJS} from './nodejs/tf_node';
// import {TensorHandle} from './nodejs/tf_node';
import {MatrixOrientation} from './types/matmul';

export class MathBackendNodeJS implements KernelBackend {
  private tensorMap = new WeakMap<DataId, TensorHandle>();

  constructor() {}

  matMul(
      a: Tensor2D, b: Tensor2D, aOrientation: MatrixOrientation,
      bOrientation: MatrixOrientation): Tensor2D {
    throw new Error('Method not implemented.');
  }
  slice1D(x: Tensor1D, begin: number, size: number): Tensor1D {
    throw new Error('Method not implemented.');
  }
  slice2D(x: Tensor2D, begin: [number, number], size: [number, number]):
      Tensor2D {
    throw new Error('Method not implemented.');
  }
  slice3D(x: Tensor3D, begin: [number, number, number], size: [
    number, number, number
  ]): Tensor3D {
    throw new Error('Method not implemented.');
  }
  slice4D(x: Tensor4D, begin: [number, number, number, number], size: [
    number, number, number, number
  ]): Tensor4D {
    throw new Error('Method not implemented.');
  }
  reverse4D(a: Tensor4D, axis: number[]): Tensor4D {
    throw new Error('Method not implemented.');
  }
  concat(a: Tensor2D, b: Tensor2D): Tensor2D {
    throw new Error('Method not implemented.');
  }
  neg<T extends Tensor<Rank>>(a: T): T {
    throw new Error('Method not implemented.');
  }
  add(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  subtract(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  multiply(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  divide(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  sum(x: Tensor<Rank>, axes: number[]): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  argMin(x: Tensor<Rank>, axes: number[]): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  argMax(x: Tensor<Rank>, axes: number[]): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  equal(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    //
    // TODO(kreeger): write me.
    //
    // execute(new Context(), 'Equal', [a, b]);
    throw new Error('Method not implemented.');
  }
  notEqual(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  less(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  lessEqual(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  greater(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  greaterEqual(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  logicalNot(a: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  logicalAnd(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  logicalOr(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  logicalXor(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  where(
      condition: Tensor<Rank>, a: Tensor<Rank>, b: Tensor<Rank>,
      dtype: 'float32'|'int32'|'bool'): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  topKValues<T extends Tensor<Rank>>(x: T, k: number): Tensor1D {
    throw new Error('Method not implemented.');
  }
  topKIndices(x: Tensor<Rank>, k: number): Tensor1D {
    throw new Error('Method not implemented.');
  }
  min(x: Tensor<Rank>, axes: number[]): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  minimum(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  max(x: Tensor<Rank>, axes: number[]): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  maximum(a: Tensor<Rank>, b: Tensor<Rank>): Tensor<Rank> {
    throw new Error('Method not implemented.');
  }
  ceil<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  floor<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  pow<T extends Tensor<Rank>>(a: T, b: Tensor<Rank>): T {
    throw new Error('Method not implemented.');
  }
  exp<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  log<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  sqrt<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  square<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  relu<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  elu<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  eluDer<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  selu<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  leakyRelu<T extends Tensor<Rank>>(x: T, alpha: number): T {
    throw new Error('Method not implemented.');
  }
  prelu<T extends Tensor<Rank>>(x: T, alpha: T): T {
    throw new Error('Method not implemented.');
  }
  preluDer<T extends Tensor<Rank>>(x: T, alpha: T): T {
    throw new Error('Method not implemented.');
  }
  int<R extends Rank>(x: Tensor<R>): Tensor<R> {
    throw new Error('Method not implemented.');
  }
  clip<T extends Tensor<Rank>>(x: T, min: number, max: number): T {
    throw new Error('Method not implemented.');
  }
  abs<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  sigmoid<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  sin<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  cos<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  tan<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  asin<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  acos<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  atan<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  sinh<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  cosh<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  tanh<T extends Tensor<Rank>>(x: T): T {
    throw new Error('Method not implemented.');
  }
  step<T extends Tensor<Rank>>(x: T, alpha: number): T {
    throw new Error('Method not implemented.');
  }
  conv2d(x: Tensor4D, filter: Tensor4D, bias: Tensor1D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  conv2dDerInput(dy: Tensor4D, filter: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  conv2dDerFilter(x: Tensor4D, dY: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  conv2dDerBias(dY: Tensor4D): Tensor1D {
    throw new Error('Method not implemented.');
  }
  depthwiseConv2D(input: Tensor4D, filter: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  maxPool(x: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  maxPoolBackprop(dy: Tensor4D, x: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  minPool(x: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  avgPool(x: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  avgPoolBackprop(dy: Tensor4D, x: Tensor4D, convInfo: {
    batchSize: number; inHeight: number; inWidth: number; inChannels: number;
    outHeight: number;
    outWidth: number;
    outChannels: number;
    dataFormat: 'channelsFirst' | 'channelsLast';
    strideHeight: number;
    strideWidth: number;
    filterHeight: number;
    filterWidth: number;
    padInfo: {top: number; left: number; right: number; bottom: number;};
    inShape: [number, number, number, number];
    outShape: [number, number, number, number];
    filterShape: [number, number, number, number];
  }): Tensor4D {
    throw new Error('Method not implemented.');
  }
  tile<T extends Tensor<Rank>>(x: T, reps: number[]): T {
    throw new Error('Method not implemented.');
  }
  pad1D(x: Tensor1D, paddings: [number, number], constantValue: number):
      Tensor1D {
    throw new Error('Method not implemented.');
  }
  pad2D(
      x: Tensor2D, paddings: [[number, number], [number, number]],
      constantValue: number): Tensor2D {
    throw new Error('Method not implemented.');
  }
  transpose<T extends Tensor<Rank>>(x: T, perm: number[]): T {
    throw new Error('Method not implemented.');
  }
  gather<T extends Tensor<Rank>>(x: T, indices: Tensor1D, axis: number): T {
    throw new Error('Method not implemented.');
  }
  resizeBilinear(
      x: Tensor4D, newHeight: number, newWidth: number,
      alignCorners: boolean): Tensor4D {
    throw new Error('Method not implemented.');
  }
  batchNormalization4D(
      x: Tensor4D, mean: Tensor1D|Tensor4D, variance: Tensor1D|Tensor4D,
      varianceEpsilon: number, scale?: Tensor1D|Tensor4D,
      offset?: Tensor1D|Tensor4D): Tensor4D {
    throw new Error('Method not implemented.');
  }
  localResponseNormalization4D(
      x: Tensor4D, radius: number, bias: number, alpha: number, beta: number,
      normRegion: 'acrossChannels'|'withinChannel'): Tensor4D {
    throw new Error('Method not implemented.');
  }
  multinomial(probabilities: Tensor2D, numSamples: number, seed: number):
      Tensor2D {
    throw new Error('Method not implemented.');
  }
  oneHot(indices: Tensor1D, depth: number, onValue: number, offValue: number):
      Tensor2D {
    throw new Error('Method not implemented.');
  }
  dispose(): void {
    throw new Error('Method not implemented.');
  }
  read(dataId: object): Promise<Float32Array|Int32Array|Uint8Array> {
    throw new Error('Method not implemented.');
  }
  readSync(dataId: object): Float32Array|Int32Array|Uint8Array {
    return this.tensorMap.get(dataId).data();
  }
  disposeData(dataId: object): void {
    throw new Error('Method not implemented.');
  }
  write(dataId: object, values: Float32Array|Int32Array|Uint8Array): void {
    const tensor = this.tensorMap.get(dataId);
    tensor.bindBuffer(values);
  }
  fromPixels(
      pixels: ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement,
      numChannels: number): Tensor3D {
    throw new Error('Method not implemented.');
  }
  time(query: () => void): Promise<number> {
    throw new Error('Method not implemented.');
  }
  register(dataId: object, shape: number[], dtype: 'float32'|'int32'|'bool'):
      void {
    if (this.tensorMap.has(dataId)) {
      console.log('Tensor already regsitered.');
    }

    let tfDtype: number;
    switch (dtype) {
      case 'float32':
        tfDtype = TF_FLOAT;  // symbols not working...
        break;
      case 'int32':
        tfDtype = TF_INT32;
        break;
      case 'bool':
        tfDtype = TF_BOOL;
        break;
      default:
        console.log('unknown');
    }

    this.tensorMap.set(dataId, new TensorHandle(shape, tfDtype));
  }
  memory(): {unreliable: boolean;} {
    throw new Error('Method not implemented.');
  }
}

ENV.registerBackend('nodejs', () => new MathBackendNodeJS());