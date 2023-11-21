import { useFetch } from '../../hooks/useFetch';
import { useMutation } from '../../hooks/useMutation';
import styles from './Home.module.css';
import { useState } from 'react';
import { api } from '../../api/api';

export default function Home() {
  const [counter, setCounter] = useState(0);

  const {
    data: posts,
    isLoading,
    refetch,
  } = useFetch(
    [counter],
    async () => {
      const { data } = await api('https://jsonplaceholder.typicode.com/posts');
      return data;
    },
    {
      onSuccess: () => {
        console.log('GET 성공');
      },
      onError: () => {
        console.log('GET 실패');
      },
    }
  );

  const { mutate } = useMutation(
    async (params) => {
      await api({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: params,
      });
    },
    {
      onSuccess: () => {
        console.log('POST 성공');
        refetch();
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const mapedPosts = posts.map((v) => (
    <div key={v.id}>
      <h2 className={styles.greeting}>{v.title}</h2>
      <p>{v.body}</p>
    </div>
  ));

  return (
    <div>
      <button type='button' onClick={() => setCounter((prev) => prev + 1)}>
        버튼1
      </button>
      <button
        type='button'
        onClick={() =>
          mutate({
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
        }
      >
        버튼2
      </button>
      {/* {mapedPosts} */}
    </div>
  );
}
