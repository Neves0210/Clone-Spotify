import { After_page } from '@/components/After_page';
import { Buttons } from '@/components/Buttons';
import { Central_page } from '@/components/Central_page';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <Buttons/>
          <Central_page/>
          <After_page/>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
