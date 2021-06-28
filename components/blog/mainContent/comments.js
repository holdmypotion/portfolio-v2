import { useState } from 'react';
import {
  Container,
  Form,
  Heading,
  TextArea,
  Input,
  InputContainer,
  TextAreaContainer,
  DiscussionContainer,
  CommentBlock,
  Author,
  Name,
  Email,
  Date,
  Reply,
  Message,
  Replies,
} from '../../../styles/blog/commentsStyles';

const Comment = ({ data }) => {
  const [showForm, setShowFrom] = useState(false);

  const form = (
    <Form>
      <InputContainer>
        <Input type='text' placeholder='Your Name..' />
        <span>
          <i></i>
        </span>
      </InputContainer>
      <InputContainer>
        <Input type='email' placeholder='Your Email..' />
        <span>
          <i></i>
        </span>
      </InputContainer>
      <TextAreaContainer>
        <TextArea rows='4' cols='50' placeholder='Add to the discussion' />
        <span>
          <i></i>
        </span>
      </TextAreaContainer>
    </Form>
  );

  return (
    <CommentBlock>
      <Author>
        <Name>{data.name}</Name>
        <div></div>
        <Date>Mar 1, 2021</Date>
      </Author>
      <Message>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='feather feather-corner-down-right'
        >
          <polyline points='15 10 20 15 15 20'></polyline>
          <path d='M4 4v7a4 4 0 0 0 4 4h12'></path>
        </svg>

        <p>{data.message}</p>
      </Message>
      <Reply onClick={() => setShowFrom(!showForm)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='feather feather-message-circle'
        >
          <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path>
        </svg>
        <span>Reply</span>
      </Reply>
      {showForm && form}
    </CommentBlock>
  );
};

export default function Comments({ data }) {
  const comments = data.comments;
  console.log(comments);

  const commentsList = comments.map(comment => (
    <DiscussionContainer key={comment.id}>
      <Comment data={comment} />
      {comment.replies.map(reply => (
        <Replies key={reply.id} style={{ paddingLeft: '2rem' }}>
          <Comment data={reply} />
          {reply.replies &&
            reply.replies.map(reply => (
              <Replies key={reply.id} style={{ paddingLeft: '3rem' }}>
                <Comment data={reply} />
                {reply.replies &&
                  reply.replies.map(reply => (
                    <Replies key={reply.id} style={{ paddingLeft: '4rem' }}>
                      <Comment data={reply} />
                      {reply.replies &&
                        reply.replies.map(reply => (
                          <Replies
                            key={reply.id}
                            style={{ paddingLeft: '5rem' }}
                          >
                            <Comment data={reply} />
                          </Replies>
                        ))}
                    </Replies>
                  ))}
              </Replies>
            ))}
        </Replies>
      ))}
    </DiscussionContainer>
  ));
  return (
    <Container>
      <Heading>Discussion</Heading>
      {commentsList}
    </Container>
  );
}
