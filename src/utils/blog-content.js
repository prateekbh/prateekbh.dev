export const getMetadata = (blogContent) => {
  const title = /title\: ([\w\ \-\:\.]*)/.exec(blogContent)[1];
  const date = /date\: ([\w\ \-\:\.]*)/.exec(blogContent)[1];
  const thumbnail = /thumbnail\: ([\w\ \-\:\.\/]*)/.exec(blogContent)[1];
  return {
    title,
    date,
    thumbnail
  }
}

export const getPreviewText = (blogContent) => {
  let content = blogContent.replace(/#.*/g, '');
  for(let i = 0; i< 7; i++ ) {
    // delete 7 lines of matadata
    content = content.replace(/.*\n/,'');
  }
  return content.substr(0, 600);
}