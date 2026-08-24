import "@livekit/components-styles";
import "@livekit/components-styles/prefabs";
import SideNav from '@/app/ui/Projects/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none w-auto">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto flex justify-center">{children}</div>
    </div>
  );
}