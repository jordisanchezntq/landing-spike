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
    <div>
      <div className='h-full md:h-[1480px] w-full relative grid grid-cols-1 md:grid-cols-2'>
        <Cover />
        <Form co={country} />
        <Steps />
      </div>
    </div>
  );
}
