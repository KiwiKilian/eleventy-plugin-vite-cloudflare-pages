import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(
    `${eleventyConfig.directories.input}assets/`,
  );

  eleventyConfig.addPlugin(EleventyVitePlugin);
}
