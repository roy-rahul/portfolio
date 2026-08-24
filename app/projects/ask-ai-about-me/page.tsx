import Chat from './chatBot';

export default function Page() {
  return (
    <div className='flex flex-col justify-center w-3/4 p-8 pb-0'>
      <h1 className='text-2xl text-brand-600 font-bold mb-4'>Ask AI about me</h1>
      <Chat />
    </div>
  );
}