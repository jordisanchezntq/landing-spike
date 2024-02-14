import Cover from './components/cover'
import Form from './components/form';


export default async function Home({
  searchParams,
}) {
  const params = searchParams || {};

  // Search Params
  const country = params.country
  console.log(country)

  return (
    <>
      <div className='flex flex-col'>
        <Cover />
        <Form />
      </div>
    </>
  );
}
