import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Group, Text } from '@mantine/core';
import { posts } from '../_app';
import { PostCard } from '../../components/PostCard/PostCard';

import '@mantine/tiptap/styles.css';

import dynamic from 'next/dynamic';

const RichTextEditorComponent = dynamic<{}>(
  () =>
    import('../../components/RichTextEditor/RichTextEditor').then(
      (mod) => mod.RichTextEditorComponent
    ),
  { ssr: false }
);

// const RichTextEditorComponent = dynamic(() => import('@mantine/rte'), { ssr: false });

export default function PostPage() {
  const router = useRouter();
  const { postName } = router.query;
  const [topPost, setTopPost] = useState<{
    id: number;
    title: string;
    content: string;
    createdBy: string;
    communityId: number;
    communityName: string;
    createdTm: string;
    parent_post_id: number | null;
  } | null>(null);
  const [replies, setReplies] = useState<
    Array<{
      id: number;
      title: string;
      content: string;
      createdBy: string;
      communityId: number;
      communityName: string;
      createdTm: string;
      parent_post_id: number | null;
    }>
  >([]);
  const latestPostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postName) {
      const decodedTitle = decodeURIComponent(postName as string).replace(/-/g, ' ');
      const topPost = posts.find(
        (post) =>
          post.title.toLowerCase() === decodedTitle.toLowerCase() && post.parent_post_id === null
      );
      if (topPost) {
        setTopPost(topPost);
        const replies = posts
          .filter((post) => post.parent_post_id === topPost.id)
          .sort((a, b) => new Date(a.createdTm).getTime() - new Date(b.createdTm).getTime());
        setReplies(replies);
        if (typeof window !== 'undefined') {
          document.title = topPost.title; // Set the page title to the title of the original post
        }
      }
    }
  }, [postName]);

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Submitted content');
  };

  const handlePreview = () => {
    // Handle preview logic here
    console.log('Preview content');
  };

  const scrollToLatestPost = () => {
    if (latestPostRef.current) {
      latestPostRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!topPost) {
    return <Text>Loading...</Text>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Group align="left" style={{ marginBottom: 'var(--mantine-spacing-md)' }}>
          <Button color="green" onClick={scrollToLatestPost}>
            Latest Post In Thread
          </Button>
        </Group>
        <PostCard body={topPost.content} community="" {...topPost} />
        {replies.map((reply, index) => (
          <div key={reply.id} ref={index === replies.length - 1 ? latestPostRef : null}>
            <PostCard body={reply.content} community="" {...reply} />
          </div>
        ))}
        <div
          style={{
            minHeight: '200px',
            border: '1px solid var(--mantine-color-dark-9)',
            borderRadius: '4px',
            marginTop: 'var(--mantine-spacing-md)',
          }}
        >
          <RichTextEditorComponent />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 'var(--mantine-spacing-md)',
          }}
        >
          <Button
            color="green"
            onClick={handlePreview}
            style={{ marginRight: 'var(--mantine-spacing-xs)' }}
          >
            Preview
          </Button>
          <Button color="green" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
