"use client";

<<<<<<< HEAD
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Ambulance,
  LayoutDashboard,
  Newspaper,
  Mail,
  User,
  LogOut,
  Shield,
  FileText,
  Building,
  ScrollText,
  Heart,
  UserCheck,
  ShieldCheck,
  Home,
  HandHelping,
  MapPin,
  ChevronDown,
  NotebookText,
  Megaphone,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { authClient } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

export default function AdminSidebar({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: (v: boolean) => void;
}) {
=======
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Home, 
  Grid3x3, 
  Newspaper, 
  AlertTriangle, 
  User,
  Menu,
  FileText,
  GraduationCap,
  Rocket,
  Building2,
  MapPin,
  Bell,
  LogOut,
  File  // Added icon for "Certificate of Indigency"
} from 'lucide-react';
import { authClient } from '@/lib/auth';
import { useToast } from '@/components/ui/use-toast';

export default function MemberSidebar() {
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);

<<<<<<< HEAD

  // Dropdown state
  const [expandedSections, setExpandedSections] = React.useState({
    government: false,
    civilRegistry: false,
    health: false,
    publicSafety: false,
    aboutUs: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);

    if (!isCollapsed) {
      setExpandedSections({
        government: false,
        civilRegistry: false,
        health: false,
        publicSafety: false,
        aboutUs: false,
      });
    }
  };

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoggingOut(true);

    try {
      await authClient.logout();

=======
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsLoggingOut(true);
    
    try {
      await authClient.logout();
      
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
      toast({
        title: "✓ Logged Out Successfully",
        description: "You have been securely logged out.",
        className: "bg-green-50 border-green-200",
        duration: 2000,
      });

<<<<<<< HEAD
      setTimeout(() => router.push("/login"), 500);
    } catch (error) {
      console.error("Logout error:", error);

=======
      // Small delay for better UX
      setTimeout(() => {
        router.push('/login');
      }, 500);
      
    } catch (error) {
      console.error('Logout error:', error);
      
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
      toast({
        variant: "destructive",
        title: "Logout Failed",
        description: "An error occurred. Please try again.",
      });
<<<<<<< HEAD

=======
      
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
      setIsLoggingOut(false);
    }
  };

<<<<<<< HEAD
  const isActive = (path: string) => {
    if (path === "/dashboard/admin") {
      return pathname === path;
    }
    return pathname === path || pathname.startsWith(path + "/");
  };


  const isSectionActive = (items: { path: string }[]) =>
    items.some(item => isActive(item.path));

  const navigationItems = [
    { icon: Home, label: 'Home', path: '/dashboard/member' },
    { icon: Megaphone, label: 'Announcement', path: '/dashboard/member/announcement' },
    { icon: Newspaper, label: 'News', path: '/dashboard/member/news' },
    { icon: User, label: 'Profile', path: '/dashboard/member/account' },
  ];

  return (
    <aside className={`hidden lg:block fixed top-0 left-0 h-full overflow-visible bg-gradient-to-b from-yellow-600/90 via-red-800/90 to-red-900/90 text-white shadow-2xl z-50 transition-all duration-300 ${isCollapsed ? "w-[70px]" : "w-[300px]"}`}>
      <button onClick={toggleSidebar} className="absolute top-4 -right-3 bg-white text-slate-800 rounded-full p-1.5 shadow-lg hover:bg-slate-100 transition-colors z-[999]">
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Scrollable Content */}
      <div className={`h-full overflow-y-auto overflow-x-hidden ${isCollapsed ? 'py-8 px-4' : 'py-8 px-8'} flex flex-col min-h-full`}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#eda909b0 #992f2f"
        }}
      >
        {/* Logo Section */}
        <div className={`flex items-center gap-2 mb-4 py-3 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <Shield className="text-slate-800" size={20} />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-base">Perpetual College</h1>
              <p className="text-xs text-slate-200">Member's Dashboard</p>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1 flex-1 py-2 border-t border-white/20">
          {navigationItems.map((item, index) => {
            const active = isActive(item.path);

            return (
              <div key={index} className="group">
                {/* MAIN BUTTON */}
                <button
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center gap-2 px-3 py-3 rounded-lg text-left transition-colors text-sm ${isCollapsed ? 'justify-center' : ''} ${active ? "bg-white/20 font-semibold shadow-lg" : "hover:bg-white/10"}`}>
                  <item.icon size={20} />
                  {!isCollapsed && <span className="text-sm">{item.label}</span>}
                </button>

                {/* COLLAPSED MODE FLYOUT */}
                {isCollapsed && (
                  <div
                    className=" absolute left-full w-44 -translate-y-1/2 -m-5 px-3 py-2 -ml-2 bg-yellow-600 text-white text-xs font-semibold rounded-md shadow-xl opacity-0 translate-x-2 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-[9999]">
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout Section */}
        <div className="py-6 border-t border-white/20">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`w-full flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-red-500/20 transition-colors text-left group disabled:opacity-50 disabled:cursor-not-allowed text-sm ${isCollapsed ? 'justify-center' : ''
              }`}
          >
            {isLoggingOut ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {!isCollapsed && <span className="font-medium">Logging out...</span>}
              </>
            ) : (
              <>
                <LogOut size={16} className="group-hover:text-red-200" />
                {!isCollapsed && (
                  <span className="font-medium group-hover:text-red-200">
                    Logout
                  </span>
                )}
=======
  const navigationItems = [
    { icon: Home, label: 'Home', path: '/dashboard/member' },
    { icon: Grid3x3, label: 'Services', path: '/dashboard/member/services' },
    { icon: Newspaper, label: 'News', path: '/dashboard/member/news' },
    { icon: AlertTriangle, label: 'Emergency', path: '/dashboard/member/emergency' },
    { icon: User, label: 'Account', path: '/dashboard/member/account/applications' },
  ];

  const quickAccessItems = [
  { icon: FileText, label: 'Member Guide', path: '/dashboard/member/member-guide' },
  { icon: GraduationCap, label: 'Students', path: '/dashboard/member/students' },
  { icon: Rocket, label: 'Startup', path: '/dashboard/member/startup' },
  { icon: Building2, label: 'Business', path: '/dashboard/member/business' },
  { icon: MapPin, label: 'City Map', path: '/dashboard/member/city-map' },
  { icon: Bell, label: 'Alerts', path: '/dashboard/member/alerts' },
  { icon: File, label: 'Certificate of Indigency', path: '/dashboard/member/services/certificate-of-indigency' },
  { icon: File, label: 'Residency Certificate', path: '/dashboard/member/services/residency-certificate' }, // NEW ITEM
    { icon: File, label: 'Good Moral', path: '/dashboard/member/services/good-moral' }, // NEW ITEM
        { icon: File, label: 'Barangay Blotter', path: '/dashboard/member/services/barangay-blotter' }, // NEW ITEM
];


  const isActive = (path: string) => pathname === path;

  return (
    <aside className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-linear-to-b from-emerald-600 to-orange-500 text-white shadow-2xl z-50">
      <div className="p-6 h-full flex flex-col overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <span className="text-2xl font-bold text-orange-600">CC</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">Perpetual Village City</h1>
            <p className="text-xs text-emerald-100">Connect</p>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2 mb-8">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                isActive(item.path) 
                  ? 'bg-white/30 font-semibold' 
                  : 'hover:bg-white/20'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Quick Access */}
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-emerald-100 uppercase tracking-wider mb-3 px-4">
            Quick Access
          </h3>
          <nav className="space-y-1">
            {quickAccessItems.map((item, index) => (
              <button
                key={index}
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-left text-sm ${
                  isActive(item.path) 
                    ? 'bg-white/20 font-semibold' 
                    : 'hover:bg-white/10'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 transition-colors text-left group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoggingOut ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="font-medium">Logging out...</span>
              </>
            ) : (
              <>
                <LogOut size={20} className="group-hover:text-red-200" />
                <span className="font-medium group-hover:text-red-200">Logout</span>
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> d961c4d44f144ef19bb3ed9d984f12c663c610e4
