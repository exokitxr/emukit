#version 450

/*
   GBC Color Correction Shader
   A shader that replicates the LCD dynamics from a Game Boy Color
   Color values are derived from Gambatte's color correction implementation, with some tweaks.

   Based on Color Mangler
   Author: hunterk
   License: Public domain
*/

layout(push_constant) uniform Push
{
   float darken_screen;
} params;

layout(std140, set = 0, binding = 0) uniform UBO
{
   mat4 MVP;
   vec4 OutputSize;
   vec4 OriginalSize;
   vec4 SourceSize;
} global;

#pragma parameter darken_screen "Darken Screen" 0.0 -0.25 2.0 0.05

#define target_gamma 2.2
#define display_gamma 2.2
#define blr 0.0
#define blg 0.0
#define blb 0.0
#define r 0.78824
#define g 0.72941
#define b 0.82
#define rg 0.025
#define rb 0.12039
#define gr 0.12157
#define gb 0.12157
#define br 0.0
#define bg 0.275000

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
   vec4 screen = pow(texture(Source, vTexCoord), vec4(target_gamma + params.darken_screen)).rgba;
   
   //                red   green  blue  alpha ; alpha does nothing for our purposes
   mat4 color = mat4(r,    rg,    rb,   0.0,    //red
                     gr,   g,     gb,   0.0,    //green
                     br,   bg,    b,    0.0,    //blue
                     blr,  blg,   blb,  0.0);   //black
                 
   screen = color * screen;
   FragColor = pow(screen, vec4(1.0 / display_gamma));
}
