import Cover from './components/cover'
import Form from './components/form';
export default function Home() {
  return (
    <>
      <div className='flex'>
        <Cover />
        <Form />
      </div>
    </>
  );
}
