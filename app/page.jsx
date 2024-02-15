'use client'

import Script from 'next/script';
import Cover from './components/cover'
import Form from './components/form';

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
    </>
  );
}
