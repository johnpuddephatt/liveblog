module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/uploads');
  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./src/posts/*.md');
  });

  return {
    dir: {
      input: "./src",
      output: "./dist"
    }
  }
}