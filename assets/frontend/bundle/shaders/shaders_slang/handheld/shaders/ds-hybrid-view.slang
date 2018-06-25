#version 450

//	DS Hybrid View
//	by hunterk
//	license: public domain
//
//	This shader requires 16:9 aspect ratio
//	and integer scaling OFF

layout(push_constant) uniform Push
{
	vec4 SourceSize;
	vec4 OriginalSize;
	vec4 OutputSize;
	uint FrameCount;
	float screen_toggle;
	float aspect_correction;
} params;

#pragma parameter screen_toggle "Screen Toggle" 0.0 0.0 0.5 0.5
#pragma parameter aspect_correction "Aspect Correction" 1.0 0.5 5.0 0.01

layout(std140, set = 0, binding = 0) uniform UBO
{
	mat4 MVP;
} global;

#pragma stage vertex
layout(location = 0) in vec4 Position;
layout(location = 1) in vec2 TexCoord;
layout(location = 0) out vec2 vTexCoord;
layout(location = 1) out float video_scale;

void main()
{
	video_scale = floor(params.SourceSize.w * params.OutputSize.y);
	vec2 integer_scale = video_scale * params.SourceSize.xy;
   gl_Position = (global.MVP * Position);
   vTexCoord = TexCoord * (params.OutputSize.xy / vec2(integer_scale)) * vec2(params.aspect_correction, 1.0);
}

#pragma stage fragment
layout(location = 0) in vec2 vTexCoord;
layout(location = 1) in float video_scale;
layout(location = 0) out vec4 FragColor;
layout(set = 0, binding = 2) uniform sampler2D Source;

void main()
{
vec2 bigCoord = vTexCoord * vec2(0.3570) + vec2(0.0, 0.0 + params.screen_toggle);
vec2 smallCoord = vTexCoord * vec2(1.05,1.00) + vec2(-2.94, -0.2);
FragColor = texture(Source, bigCoord) + texture(Source, smallCoord);
}
