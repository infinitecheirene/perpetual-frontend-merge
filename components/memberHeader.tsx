"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  Bell,
  LogOut,
  Home,
  Megaphone,
  Newspaper,
  User,
} from "lucide-react";

export default function MemberHeader() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const navigationItems = [
    { icon: Home, label: "Home", path: "/dashboard/member" },
    { icon: Megaphone, label: "Announcement", path: "/dashboard/member/announcement" },
    { icon: Newspaper, label: "News", path: "/dashboard/member/news" },
    { icon: User, label: "Profile", path: "/dashboard/member/account" },
  ];

  return (
    <header className="lg:hidden bg-white shadow-sm sticky top-0 z-30 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* BRAND */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-600 to-orange-500 flex items-center justify-center">
            <span className="text-lg font-bold text-white">CC</span>
          </div>
          <div>
            <h1 className="font-bold text-sm">Perpetual College</h1>
            <p className="text-xs text-gray-500">Connect</p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 relative">
          
          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>

          {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute right-0 top-12 w-70 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
              <nav className="py-2">
                {navigationItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      router.push(item.path);
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
