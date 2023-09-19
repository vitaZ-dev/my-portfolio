import MainView from '@/components/home/MainView';

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <MainView />
        </div>
      </section>
    </div>
  );
}
