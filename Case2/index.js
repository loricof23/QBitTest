const comments = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
          commentId: 111,
          commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
          commentId: 121,
          commentContent: 'Haai juga hai jugaa'
          },
            
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  },
]

function getReplies(replies, count = 0) {
  replies.forEach(reply => {
    count += 1;

    if (reply.replies) {
      count += (reply.replies.length);

      return getReplies(reply.replies, count);
    }
  });

  return count;
}

function totalComment(passedComments){
  let result = {
    total: 0
  }

  passedComments.forEach((comment, index) => {
    let allRepliesCount = 0;

    if (comment.replies) {
      allRepliesCount = getReplies(comment.replies);
    }
    

    result.total += (allRepliesCount + 1);
  })
  
 return result;
}
console.log(totalComment(comments));
