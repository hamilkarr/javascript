const router = require('express').Router();
const {
  sequelize,
  Sequelize: { QueryTypes },
} = require('../../models');

/*
router.get('/', async (req, res, next) => {
  const sql = 'SELECT * FROM worklist WHERE status = ?';
  const replacements = ['ready'];
  try {
    const rows = await sequelize.query(sql, {
      replacements,
      type: QueryTypes.SELECT,
    });
    res.render('db/list', { rows });
  } catch (error) {
    next(error);
  }
  /*
  sequelize
    .query(sql, {
      replacements: replocements, // 바인딩할 값 - 배열객체 (키값으로 바인딩 필요 없는 경우) [], 일반 객체(키 값으로 바인딩할때) {}
      type: QueryTypes.SELECT,
    })
    .then((rows) => {
      console.log(rows);
    })
    .catch((err) => {
      console.error(err);
    });
    
});
*/
router.get('/insert', async (req, res) => {
  try {
    const sql = `INSERT INTO worklist (gid,status, subject, content) VALUES (:gid, :status,:subject, :content)`;
    const replacements = {
      gid: Date.now(),
      status: 'progress',
      subject: '작업 제목...',
      content: '작업 내용...',
    };

    const result = await sequelize.query(sql, {
      replacements,
      type: QueryTypes.INSERT,
    });
    console.log('result: ', result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
