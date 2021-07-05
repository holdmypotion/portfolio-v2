export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // console.log(JSON.parse(req.body));
    res.status(400).send({ message: 'opnl' });
    return;
  }

  const { articleID, commentID, name, email, message, reply } = JSON.parse(
    req.body
  );
  let postComments = [];
  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY,
  });
  try {
    await client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then(space => space.getEnvironment(process.env.CONTENTFUL_ENV))
      .then(environment => environment.getEntry(articleID))
      .then(entry => {
        console.log(entry);
        entry.fields.comments['en-US'].comments.forEach(comment => {
          postComments.push(comment);
        });
      })
      .catch(console.error);
    if (reply) {
      postComments.forEach(comment => {
        if (comment.id === commentID) {
          comment.replies.push({
            name: name,
            email: email,
            message: message,
            id: v4(),
          });
        }
      });
    } else {
      postComments.push({
        name: name,
        email: email,
        message: message,
        id: v4(),
        replies: [],
      });
    }
    await client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then(space => space.getEnvironment(process.env.CONTENTFUL_ENV))
      .then(environment => environment.getEntry(articleID))
      .then(entry => {
        entry.fields.comments = { 'en-US': { comments: postComments } };
        return entry.update();
      })
      .then(entry => console.log(`Entry ${entry.sys.id} updated.`))
      .catch(console.error);
    // Callback with updated comments to update state
    // callback(null, {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     comments: postComments,
    //   }),
    // });
  } catch (err) {
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }
  return res.status(200).json({ message: 'Comment submitted' });
}
