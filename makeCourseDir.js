async function makeCourseDir(courseName) {
  const fs = require('fs');
  const path = require('path');
  const folderPath = require('./myPath');
  const folders = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Final']

  try {
    const fs = require('fs').promises;
    await fs.mkdir(`${folderPath}/${courseName}`);

    folders.forEach(async (ele) => {
      await fs.mkdir(`${folderPath}/${courseName}/${ele}`);
    })
  } catch (err) {
    console.error(err);
  }
}

makeCourseDir('Test');