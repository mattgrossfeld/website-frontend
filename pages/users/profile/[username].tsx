import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  return <h1>Profile: {router.query.username}</h1>;
}
