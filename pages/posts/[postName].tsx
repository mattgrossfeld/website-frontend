import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { Text, Button, Group, Card } from '@mantine/core';
import { PostCard } from '../../components/PostCard/PostCard';
import { posts } from '../_app';
import dynamic from 'next/dynamic';

const RichTextEditorComponent = dynamic(() => import('@mantine/rte'), { ssr: false });

export default function PostPage() {
  const router = useRouter();
  const { postName } = router.query;
  const [topPost, setTopPost] = useState<{ id: number; title: string; content: string; createdBy: string; communityId: number; communityName: string; createdTm: string; parent_post_id: number | null } | null>(null);
  const [replies, setReplies] = useState<Array<{ id: number; title: string; content: string; createdBy: string; communityId: number; communityName: string; createdTm: string; parent_post_id: number | null }>>([]);
  const [editorValue, setEditorValue] = useState('');
  const latestPostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postName) {
      const decodedTitle = decodeURIComponent(postName as string).replace(/-/g, ' ');
      const topPost = posts.find((post) => post.title.toLowerCase() === decodedTitle.toLowerCase() && post.parent_post_id === null);
      if (topPost) {
        setTopPost(topPost);
        const replies = posts.filter((post) => post.parent_post_id === topPost.id).sort((a, b) => new Date(a.createdTm).getTime() - new Date(b.createdTm).getTime());
        setReplies(replies);
        if (typeof window !== 'undefined') {
          document.title = topPost.title; // Set the page title to the title of the original post
        }
      }
    }
  }, [postName]);

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Submitted content:', editorValue);
  };

  const handlePreview = () => {
    // Handle preview logic here
    console.log('Preview content:', editorValue);
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
    <div>
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
        <RichTextEditorComponent value={editorValue} onChange={setEditorValue} style={{ minHeight: '200px', border: '1px solid #ced4da', borderRadius: '4px' }} />
        <Group align="right" mt="md">
          <Button color="green" onClick={handlePreview}>
            Preview
          </Button>
          <Button color="green" onClick={handleSubmit}>
            Submit
          </Button>
        </Group>
    </div>
  );
}

