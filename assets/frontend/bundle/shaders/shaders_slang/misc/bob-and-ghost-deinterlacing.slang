#version 450

/*
   Bob-and-ghost Deinterlacing
   Author: hunterk
   License: Public domain
   
   Note: This shader is designed to work with the typical interlaced output from an emulator, which displays both even and odd fields twice.
   As such, it is inappropriate for general video use unless the video has already been similarly woven beforehand.
*/

layout(push_constant) uniform Push
{
	vec4 SourceSize;
	vec4 OriginalSize;
	vec4 OutputSize;
	uint FrameCount;
} params;

layout(std140, set = 0, binding = 0) uniform UBO
{
	mat4 MVP;
} global;

#pragma stage vertex
layout(location = 0) in vec4 Position;
layout(location = 1) in vec2 TexCoord;
layout(location = 0) out vec2 vTexCoord;

void main()
{
   gl_Position = global.MVP * Position;
   vTexCoord = TexCoord;
}

#pragma stage fragment
layout(location = 0) in vec2 vTexCoord;
layout(location = 0) out vec4 FragColor;
layout(set = 0, binding = 2) uniform sampler2D Source;

void main()
{
	vec4 current = pow(texture(Source, vTexCoord.xy), vec4(2.2));
	vec4 prev  = vec4(0.0);
	float y = 0.0;
	// assume anything with a vertical resolution greater than 400 lines is interlaced
	if (params.SourceSize.y > 400.0){
		y = params.SourceSize.y * vTexCoord.y + params.FrameCount;
		current = pow(vec4(texture(Source, vTexCoord + vec2(0.0, params.SourceSize.w))), vec4(2.2));
		vec4 evens = pow(vec4(texture(Source, vTexCoord - vec2(0.0, 0.5 * params.SourceSize.w))), vec4(2.2));
		vec4 odds = pow(vec4(texture(Source, vTexCoord + vec2(0.0, 0.5 * params.SourceSize.w))), vec4(2.2));
		prev = (evens + odds) / 2.0;
	}
	else
	{
		y = 2.000001 * params.SourceSize.y * vTexCoord.y;
		prev = current;
	}

	if (mod(y, 2.0) > 0.99999) current = current;
	else current = vec4(pow(texture(Source, vTexCoord), vec4(2.2)));
	FragColor = vec4(pow((current + prev) / vec4(2.0), vec4(1.0 / 2.2)));
}
