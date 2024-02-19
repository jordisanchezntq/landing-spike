import Cover from './ui/cover'
import Form from './ui/form';
import Steps from './ui/steps';

export default async function Home({
  searchParams,
}) {
  const params = searchParams || {};

  // Search Params
  const country = params.co
  console.log(country)

  return (
    <div className='relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
        <Cover />
        <Form co={country} />
        <div>
          <Steps />
        </div>
      </div>
    </div>
  );
}
