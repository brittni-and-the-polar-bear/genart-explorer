import { AspectRatio, AspectRatioConfig, ContextConfig, ContextConfigBuilder, P5Context } from '@batpb/genart';

export function buildContextConfig(name: string, aspectRatio: AspectRatio | AspectRatioConfig, resolution: number): ContextConfig {
    const builder: ContextConfigBuilder = new ContextConfigBuilder();
    builder.setName(name);
    builder.setAspectRatio(aspectRatio);
    builder.setMatchContainerRatio(false);
    builder.setRenderType(P5Context.instance.P2D);
    builder.setResolution(resolution);
    return builder.build();
}
