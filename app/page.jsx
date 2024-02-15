import Script from 'next/script';
import Cover from './components/cover'
import Form from './components/form';


export default async function Home({
  searchParams,
}) {
  const params = searchParams || {};

  // Search Params
  const country = params.co
  console.log(country)

  return (
    <>
      <Script src="/js/singular.js" />
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Cover />
        <Form co={country} />
      </div>
    </>
  );
}
