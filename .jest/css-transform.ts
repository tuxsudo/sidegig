const config = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    return "cssTransform";
  },
};

export default config;
