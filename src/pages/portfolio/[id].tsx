import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h2>Kategoria: {id}</h2>;
};

export default Category;
