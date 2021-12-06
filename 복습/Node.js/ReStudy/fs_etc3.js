const fs = require('fs').promises;

(async function () {
  try {
    await fs.rename('./readme.txt', './readme3.txt');
  } catch (error) {
    console.error(error);
  }
})();
