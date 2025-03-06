import { useRouter } from 'next/router';

export default function Community() {
  const router = useRouter();
  return <h1>Community: {router.query.community}</h1>;
}
