import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Text } from '@mantine/core';
import { PostCard } from '../../components/PostCard/PostCard';
import { posts } from '../_app';

export default function PostPage() {
  const router = useRouter();
  const { postName } = router.query;
  const [topPost, setTopPost] = useState<{ id: number; title: string; content: string; createdBy: string; communityId: number; communityName: string; createdTm: string; parent_post_id: number | null } | null>(null);
  const [replies, setReplies] = useState<Array<{ id: number; title: string; content: string; createdBy: string; communityId: number; communityName: string; createdTm: string; parent_post_id: number | null }>>([]);

  useEffect(() => {
    if (postName) {
      const topPost = posts.find((post) => post.parent_post_id === null);
      if (topPost) {
        setTopPost(topPost);
        const replies = posts.filter((post) => post.parent_post_id === topPost.id).sort((a, b) => new Date(a.createdTm).getTime() - new Date(b.createdTm).getTime());
        setReplies(replies);
        document.title = topPost.title; // Set the page title to the title of the original post
      }
    }
  }, [postName]);

  if (!topPost) {
    return <Text>Loading...</Text>;
  }

  return (
    <div>
      <PostCard body={topPost.content} community="" {...topPost} />
      {replies.map((reply) => (
        <PostCard body={reply.content} community="" key={reply.id} {...reply} />
      ))}
    </div>
  );
}
