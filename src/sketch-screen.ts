/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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

import p5 from 'p5';

import { CanvasScreen, GraphicsContext } from '@batpb/genart';

// export function buildSketchScreenConfig(): CanvasScreenConfig {
//     const builder: CanvasScreenConfigBuilder
// }

export class SketchScreen extends CanvasScreen {
    public override drawToGraphics(context: GraphicsContext) {
        const graphics: p5.Graphics = context.GRAPHICS;
        graphics.background(0);
        graphics.stroke(0, 255, 0);
        graphics.strokeWeight(context.defaultStrokeWeight * 5);
        graphics.ellipse(context.center.x, context.center.y, 100, 100);
        graphics.ellipse(context.width / 4.0, context.center.y, 100, 100);
        graphics.ellipse(3.0 * context.width / 4.0, context.center.y, 100, 100);
    }
}
