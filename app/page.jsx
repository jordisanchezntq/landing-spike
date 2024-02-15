import Cover from './ui/cover'
import Form from './ui/form';
import Steps from './ui/steps';

// Singular
import { initSingular } from './components/Recruitment/recruitmentTracking';


export default function Home({
  searchParams,
}) {
  initSingular();
  const params = searchParams || {};

  // Search Params
  const country = params.co

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Cover />
        <Form co={country} />
      </div>
      <Steps />
    </>
  );
}
