async function makeCourseDir(courseName) {
  const fs = require('fs');
  const path = require('path');
  const folderPath = require('./myPath');

  try {
    const fs = require('fs').promises;
    await fs.mkdir(`${folderPath}/${courseName}`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 1`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 2`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 3`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 4`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 5`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 6`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 7`);
    await fs.mkdir(`${folderPath}/${courseName}/Week 8`);
    await fs.mkdir(`${folderPath}/${courseName}/Final`);
  } catch (err) {
    console.error(err);
  }
}

makeCourseDir('My Course');