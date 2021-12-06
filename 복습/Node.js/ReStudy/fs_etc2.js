const fs = require('fs');
const constants = require('fs').constants;

(async function () {
  try {
    await fs.access('./testDir', constants.F_OK);
  } catch (error) {
    // 디렉토리가 없는 경우
    await fs.mkdir('./testDir');
    console.error(error);
  }
})();
