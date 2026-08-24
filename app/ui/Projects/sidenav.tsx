import { AppSidebar } from "@/app/ui/components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/app/ui/shadcn-components/sidebar";

export default function SideNav() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
        <SidebarTrigger />
    </SidebarProvider>
  );
}
