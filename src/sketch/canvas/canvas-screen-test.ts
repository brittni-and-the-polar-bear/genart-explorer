import p5 from 'p5';

import { ASPECT_RATIOS, CanvasScreen, CanvasScreenConfig, CanvasScreenConfigBuilder, ContextConfig, GraphicsContext } from '@batpb/genart';

import { buildContextConfig } from '../../context-config-builder';

export class CanvasScreenTest extends CanvasScreen {
    public constructor(config: CanvasScreenConfig) {
        super(config);
    }

    public override drawToGraphics(context: GraphicsContext): void {
        const ctx: p5.Graphics = context.GRAPHICS;
        ctx.background(0);
        ctx.fill(255, 0, 0);
        ctx.noStroke();
        ctx.ellipse(context.center.x, context.center.y, 100, 100);
        ctx.ellipse(context.COORDINATE_MAPPER.minX + 50, context.COORDINATE_MAPPER.minY + 50, 50, 50);
        ctx.ellipse(context.COORDINATE_MAPPER.maxX - 50, context.COORDINATE_MAPPER.maxY - 50, 50, 50);
    }
}

export function buildCanvasScreenTest(): CanvasScreen {
    const context: ContextConfig = buildContextConfig(`canvas-screen-test_SQUARE`, ASPECT_RATIOS.SQUARE, 1080);
    const context2: ContextConfig = buildContextConfig('canvas-screen-test_WIDESCREEN', ASPECT_RATIOS.WIDESCREEN, 720);
    const builder: CanvasScreenConfigBuilder = new CanvasScreenConfigBuilder();
    builder.setActiveGraphics(context);
    builder.addGraphics(context2);
    builder.setName('canvas-screen-test');
    return new CanvasScreenTest(builder.build());
}
