module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/perpetual_merged/perpetual_frontend/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/auth.ts
__turbopack_context__.s([
    "authClient",
    ()=>authClient
]);
const authClient = {
    async login (email, password) {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                return {
                    success: false,
                    message: data.message,
                    errors: data.errors,
                    status: response.status,
                    data: data
                };
            }
            return {
                success: true,
                user: data.user
            };
        } catch (error) {
            throw error;
        }
    },
    async logout () {
        await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include"
        });
    },
    async getCurrentUser () {
        try {
            const response = await fetch("/api/auth/me", {
                credentials: "include"
            });
            console.log('authClient.getCurrentUser - Response status:', response.status);
            if (!response.ok) {
                console.log('authClient.getCurrentUser - Not OK, returning null');
                return null;
            }
            const data = await response.json();
            console.log('authClient.getCurrentUser - Response data:', data);
            // The API returns { success: true, user: {...} }
            // So we need to return data.user, not just data
            return data.user || null;
        } catch (error) {
            console.error('authClient.getCurrentUser - Error:', error);
            return null;
        }
    },
    async checkAuth () {
        const user = await this.getCurrentUser();
        return !!user;
    },
    async getUserRole () {
        const user = await this.getCurrentUser();
        return user?.role || null;
    },
    async isAdmin () {
        const role = await this.getUserRole();
        return role === 'admin';
    },
    async isMember () {
        const role = await this.getUserRole();
        return role === 'member';
    }
};
}),
"[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/components/ui/use-toast.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AdminSidebar({ isCollapsed, setIsCollapsed }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [isLoggingOut, setIsLoggingOut] = __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Dropdown state
    const [expandedSections, setExpandedSections] = __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        government: false,
        civilRegistry: false,
        health: false,
        publicSafety: false,
        certificateItems: false,
        aboutUs: false
    });
    const toggleSection = (section)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    const toggleSidebar = ()=>{
        setIsCollapsed(!isCollapsed);
        if (!isCollapsed) {
            setExpandedSections({
                government: false,
                civilRegistry: false,
                health: false,
                publicSafety: false,
                certificateItems: false,
                aboutUs: false
            });
        }
    };
    const handleLogout = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsLoggingOut(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authClient"].logout();
            toast({
                title: "✓ Logged Out Successfully",
                description: "You have been securely logged out.",
                className: "bg-green-50 border-green-200",
                duration: 2000
            });
            setTimeout(()=>router.push("/login"), 500);
        } catch (error) {
            console.error("Logout error:", error);
            toast({
                variant: "destructive",
                title: "Logout Failed",
                description: "An error occurred. Please try again."
            });
            setIsLoggingOut(false);
        }
    };
    const isActive = (path)=>{
        if (path === "/dashboard/admin") {
            return pathname === path;
        }
        return pathname === path || pathname.startsWith(path + "/");
    };
    const isSectionActive = (items)=>items.some((item)=>isActive(item.path));
    const navigationItems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            label: "Dashboard",
            path: "/dashboard/admin"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
            label: "News",
            path: "/dashboard/admin/news"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
            label: "Announcements",
            path: "/dashboard/admin/announcements"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            label: "Contact Messages",
            path: "/dashboard/admin/contact"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: "Legitimacy",
            path: "/dashboard/admin/legitimacy"
        }
    ];
    // const certificateItems = [
    //   { icon: FileText, label: "Legitimacy", path: "/dashboard/admin/legitimacy" },
    //   { icon: FileText, label: "Certificate Verifications", path: "/dashboard/admin/certification-verifications" },
    // ];
    const aboutUs = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: "Our Comunity",
            path: "/dashboard/admin/our-community"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: "Goals",
            path: "/dashboard/admin/goals"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: "Mission & Vision",
            path: "/dashboard/admin/mission-and-vision"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: "Objectives",
            path: "/dashboard/admin/objectives"
        }
    ];
    // const iscertificateItemsActive =
    //   expandedSections.certificateItems || isSectionActive(certificateItems);
    const isaboutUsActive = expandedSections.aboutUs || isSectionActive(aboutUs);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `hidden lg:block fixed top-0 left-0 h-full overflow-visible bg-gradient-to-b from-yellow-600/90 via-red-800/90 to-red-900/90 text-white shadow-2xl z-50 transition-all duration-300 ${isCollapsed ? "w-[70px]" : "w-[300px]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleSidebar,
                className: "absolute top-4 -right-3 bg-white text-slate-800 rounded-full p-1.5 shadow-lg hover:bg-slate-100 transition-colors z-[999]",
                children: isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                    lineNumber: 147,
                    columnNumber: 24
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                    lineNumber: 147,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-full overflow-y-auto overflow-x-hidden ${isCollapsed ? 'py-8 px-4' : 'py-8 px-8'} flex flex-col min-h-full`,
                style: {
                    scrollbarWidth: "thin",
                    scrollbarColor: "#eda909b0 #992f2f"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 mb-4 py-3 ${isCollapsed ? 'justify-center' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "text-slate-800",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-base",
                                        children: "Perpetual Village City"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-200",
                                        children: "Admin Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "space-y-1 flex-1 py-2 border-t border-white/20",
                        children: [
                            navigationItems.map((item, index)=>{
                                const active = isActive(item.path);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push(item.path),
                                            className: `w-full flex items-center gap-2 px-3 py-3 rounded-lg text-left transition-colors text-sm ${isCollapsed ? 'justify-center' : ''} ${active ? "bg-white/20 font-semibold shadow-lg" : "hover:bg-white/10"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this),
                                                !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " absolute left-full w-44 -translate-y-1/2 -m-5 px-3 py-2 -ml-2 bg-yellow-600 text-white text-xs font-semibold rounded-md shadow-xl opacity-0 translate-x-2 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-[9999]",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>!isCollapsed && toggleSection("aboutUs"),
                                        className: `w-full flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-colors text-sm hover:bg-white/10 ${isaboutUsActive ? "bg-white/20 font-semibold shadow-lg" : "hover:bg-white/10"} ${isCollapsed ? "justify-center" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this),
                                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-semibold text-white/90 text-xs tracking-wide ${isaboutUsActive ? "text-white font-semibold" : "text-white/90"}`,
                                                        children: "ABOUT US"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            !isCollapsed && (expandedSections.aboutUs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    !isCollapsed && expandedSections.aboutUs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 pl-3 m-1",
                                        children: aboutUs.map((item, index)=>{
                                            const active = isActive(item.path);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push(item.path),
                                                className: `w-full flex items-center gap-2 p-3 py-3 rounded-lg text-left transition-colors text-xs ${active ? "bg-white/20 font-semibold shadow-lg" : "hover:bg-white/10"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 227,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-full -translate-y-1/2 -ml-5 py-2 w-56 bg-yellow-600 rounded-lg shadow-xl opacity-0 translate-x-2 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible group-hover:pointer-events-auto group-hover:delay-150 transition-all duration-200 ease-out z-[9999]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-full flex items-center px-4 py-2 font-semibold text-white/90 text-xs tracking-wide border-b border-white/20",
                                                children: "ABOUT US"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            aboutUs.map((item, index)=>{
                                                const active = isActive(item.path);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push(item.path),
                                                    className: `w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${active ? "bg-white/20 font-semibold" : "hover:bg-white/10"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/admin/business-partners"),
                                        className: `w-full flex items-center gap-2 px-3 py-3 rounded-lg text-left transition-colors text-sm ${isCollapsed ? "justify-center" : ""} ${isActive("/dashboard/admin/business-partners") ? "bg-white/20 font-semibold shadow-lg" : "hover:bg-white/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this),
                                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Business Partners"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 271,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " absolute left-full w-44 -translate-y-1/2  -my-5 -m-2 px-3 py-2 bg-yellow-600 text-white text-xs font-semibold rounded-md shadow-xl opacity-0 translate-x-2 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-[9999]",
                                        children: "Business Partners"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/admin/users"),
                                        className: `w-full flex items-center gap-2 px-3 py-3 rounded-lg text-left transition-colors text-sm ${isCollapsed ? "justify-center" : ""} ${isActive("/dashboard/admin/users") ? "bg-white/20 font-semibold shadow-lg" : "hover:bg-white/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Users"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 290,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " absolute left-full w-44 -translate-y-1/2  -my-5 -m-2 px-3 py-2 bg-yellow-600 text-white text-xs font-semibold rounded-md shadow-xl opacity-0 translate-x-2 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-[9999]",
                                        children: "Users"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/admin/office-contact"),
                                        className: `w-full flex items-center gap-2 px-3 py-3 rounded-lg text-left transition-colors text-sm ${isCollapsed ? "justify-center" : ""} ${isActive("/dashboard/admin/users") ? "bg-white/20 font-semibold shadow-lg" : "hover:bg-white/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Office Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                                lineNumber: 307,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " absolute left-full w-44 -translate-y-1/2  -my-5 -m-2 px-3 py-2 bg-yellow-600 text-white text-xs font-semibold rounded-md shadow-xl opacity-0 translate-x-2 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 ease-out z-[9999]",
                                        children: "Office"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-6 border-t border-white/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            disabled: isLoggingOut,
                            className: `w-full flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-red-500/20 transition-colors text-left group disabled:opacity-50 disabled:cursor-not-allowed text-sm ${isCollapsed ? 'justify-center' : ''}`,
                            children: isLoggingOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Logging out..."
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 331,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        size: 16,
                                        className: "group-hover:text-red-200"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 335,
                                        columnNumber: 17
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium group-hover:text-red-200",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                                        lineNumber: 337,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
}),
"[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-ssr] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/user-check.js [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/ambulance.js [app-ssr] (ecmascript) <export default as Ambulance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$helping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHelping$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/hand-helping.js [app-ssr] (ecmascript) <export default as HandHelping>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
"use client";
;
;
;
;
function AdminBottomNav() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeDropup, setActiveDropup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ---------------------------
    // CATEGORIZED LIKE SIDEBAR
    // ---------------------------
    const governmentServices = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: 'Business Permit',
            path: '/dashboard/admin/business-permit'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
            label: 'Building Permit',
            path: '/dashboard/admin/building-permit'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"],
            label: 'Cedula',
            path: '/dashboard/admin/cedula'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            label: 'Marriage License',
            path: '/dashboard/admin/marriage-license'
        }
    ];
    const civilRegistry = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            label: 'Residency Certificate',
            path: '/dashboard/admin/residency-certificate'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
            label: 'Indigency Certificate',
            path: '/dashboard/admin/indigency-certificate'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$helping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHelping$3e$__["HandHelping"],
            label: 'Good Moral Certificate',
            path: '/dashboard/admin/good-moral-certificate'
        }
    ];
    const healthServices = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
            label: 'Health Certificate',
            path: '/dashboard/admin/health-certificate'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            label: 'Medical Assistance',
            path: '/dashboard/admin/medical-assistance'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__["Ambulance"],
            label: 'Ambulance Request',
            path: '/dashboard/admin/ambulance-request'
        }
    ];
    const publicSafety = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: 'Barangay Clearance',
            path: '/dashboard/admin/barangay-clearance'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            label: 'Barangay Blotter',
            path: '/dashboard/admin/barangay-blotter'
        }
    ];
    const newsAndUpdates = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
            label: 'News',
            path: '/dashboard/admin/news'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"],
            label: 'Announcements',
            path: '/dashboard/admin/announcements'
        }
    ];
    // ---------------------------
    // BOTTOM NAV GROUPS
    // ---------------------------
    const allNavItems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            label: 'Dashboard',
            path: '/dashboard/admin',
            type: 'link'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            label: 'Gov Services',
            type: 'dropup',
            items: governmentServices
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"],
            label: 'Civil Registry',
            type: 'dropup',
            items: civilRegistry
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            label: 'Health',
            type: 'dropup',
            items: healthServices
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            label: 'Public Safety',
            type: 'dropup',
            items: publicSafety
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
            label: 'Updates',
            type: 'dropup',
            items: newsAndUpdates
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            label: 'Messages',
            path: '/dashboard/admin/contact',
            type: 'link'
        }
    ];
    // Show first 4 items + More button
    const primaryNavItems = allNavItems.slice(0, 4);
    const moreNavItems = allNavItems.slice(4);
    const isActive = (path)=>{
        if (path === '/dashboard/admin') {
            return pathname === path;
        }
        return pathname === path || pathname.startsWith(path + '/');
    };
    const isGroupActive = (items)=>{
        return items.some((item)=>isActive(item.path));
    };
    const isMoreActive = ()=>{
        return moreNavItems.some((item)=>{
            if (item.type === 'link' && item.path) {
                return isActive(item.path);
            } else if (item.type === 'dropup' && item.items) {
                return isGroupActive(item.items);
            }
            return false;
        });
    };
    const handleNavClick = (item)=>{
        if (item.type === 'link' && item.path) {
            router.push(item.path);
            setActiveDropup(null);
        } else if (item.type === 'dropup') {
            setActiveDropup(activeDropup === item.label ? null : item.label);
        }
    };
    const handleSubItemClick = (path)=>{
        router.push(path);
        setActiveDropup(null);
    };
    const getDropupItems = ()=>{
        if (activeDropup === 'Gov Services') return governmentServices;
        if (activeDropup === 'Civil Registry') return civilRegistry;
        if (activeDropup === 'Health') return healthServices;
        if (activeDropup === 'Public Safety') return publicSafety;
        if (activeDropup === 'Updates') return newsAndUpdates;
        if (activeDropup === 'More') return moreNavItems;
        return [];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            activeDropup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200",
                onClick: ()=>setActiveDropup(null)
            }, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            activeDropup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 animate-in slide-in-from-bottom duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[60vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-3 border-b border-gray-200  bg-linear-to-tl from-yellow-500/90 via-red-800/90 to-red-900/90 text-white",
                            children: [
                                activeDropup !== 'More' && activeDropup !== 'Dashboard' && activeDropup !== 'Gov Services' && activeDropup !== 'Civil Registry' && activeDropup !== 'Health' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveDropup('More'),
                                    className: "p-1 hover:bg-white/20 rounded-full transition-colors mr-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-sm flex-1",
                                    children: activeDropup
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveDropup(null),
                                    className: "p-1 hover:bg-white/20 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: activeDropup === 'More' ? // Display More menu items as categories
                            getDropupItems().map((item, index)=>{
                                const isLinkItem = item.type === 'link';
                                const isDropupItem = item.type === 'dropup';
                                const itemActive = isLinkItem && item.path ? isActive(item.path) : false;
                                const groupItemActive = isDropupItem && item.items ? isGroupActive(item.items) : false;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (isLinkItem && item.path) {
                                            handleSubItemClick(item.path);
                                        } else if (isDropupItem) {
                                            setActiveDropup(item.label);
                                        }
                                    },
                                    className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${itemActive || groupItemActive ? 'bg-linear-to-r from-yellow-50 to-orange-50 text-yellow-500 font-semibold' : 'hover:bg-gray-50 text-gray-500'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            size: 20,
                                            className: itemActive || groupItemActive ? 'text-yellow-500' : 'text-gray-500'
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                            lineNumber: 203,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                            lineNumber: 208,
                                            columnNumber: 23
                                        }, this),
                                        isDropupItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 16,
                                            className: "ml-auto text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                            lineNumber: 210,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                    lineNumber: 188,
                                    columnNumber: 21
                                }, this);
                            }) : // Display subcategory items - check if items exist
                            (()=>{
                                const items = getDropupItems();
                                // If it's a NavItem array (from More menu), map differently
                                if (items.length > 0 && 'type' in items[0]) {
                                    return items.map((item, index)=>{
                                        if (item.type === 'link' && item.path) {
                                            const active = isActive(item.path);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSubItemClick(item.path),
                                                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${active ? 'bg-linear-to-r from-yellow-50 to-orange-50 text-yellow-500 font-semibold' : 'hover:bg-gray-50 text-gray-700'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        size: 20,
                                                        className: active ? 'text-yellow-500' : 'text-gray-500'
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                                lineNumber: 225,
                                                columnNumber: 27
                                            }, this);
                                        }
                                        return null;
                                    });
                                }
                                // Otherwise it's a regular sub-items array
                                return items.map((item, index)=>{
                                    const active = item.path ? isActive(item.path) : false;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>item.path && handleSubItemClick(item.path),
                                        className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${active ? 'bg-linear-to-r from-yellow-50 to-orange-50 text-yellow-500 font-semibold' : 'hover:bg-gray-50 text-gray-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 20,
                                                className: active ? 'text-yellow-500' : 'text-gray-500'
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                                lineNumber: 255,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                                lineNumber: 256,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                        lineNumber: 246,
                                        columnNumber: 23
                                    }, this);
                                });
                            })()
                        }, void 0, false, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-around",
                    children: [
                        primaryNavItems.map((item, index)=>{
                            const active = item.type === 'link' && item.path ? isActive(item.path) : item.type === 'dropup' && item.items ? isGroupActive(item.items) : false;
                            const isDropupOpen = activeDropup === item.label;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavClick(item),
                                className: `flex-1 flex flex-col items-center py-3 transition-colors relative ${active || isDropupOpen ? 'text-yellow-500' : 'text-gray-500'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 22,
                                                className: active || isDropupOpen ? 'text-yellow-500' : ''
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this),
                                            item.type === 'dropup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                size: 12,
                                                className: `absolute -top-1 -right-1 transition-transform ${isDropupOpen ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                                lineNumber: 296,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] mt-1 font-medium",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this),
                                    (active || isDropupOpen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 w-10 h-1 bg-linear-to-r from-yellow-500 via-yellow-500 to-red-600 rounded-t-full"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                        lineNumber: 308,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveDropup(activeDropup === 'More' ? null : 'More'),
                            className: `flex-1 flex flex-col items-center py-3 transition-colors relative ${isMoreActive() || activeDropup === 'More' ? 'text-yellow-500' : 'text-gray-500'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        size: 22,
                                        className: isMoreActive() || activeDropup === 'More' ? 'text-yellow-500' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] mt-1 font-medium",
                                    children: "More"
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                (isMoreActive() || activeDropup === 'More') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 w-10 h-1 bg-linear-to-r from-yellow-500 via-yellow-500 to-red-600 rounded-t-full"
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/components/ui/use-toast.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AdminHeader() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const handleLogout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authClient"].logout();
            toast({
                title: "✓ Logged Out Successfully",
                description: "You have been securely logged out.",
                className: "bg-green-50 border-green-200",
                duration: 2000
            });
            setTimeout(()=>{
                router.push('/login');
            }, 500);
        } catch (error) {
            console.error('Logout error:', error);
            toast({
                variant: "destructive",
                title: "Logout Failed",
                description: "An error occurred. Please try again."
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "hidden lg:block bg-white shadow-sm sticky top-0 z-30"
            }, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "lg:hidden bg-white shadow-sm sticky top-0 z-30 px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-linear-to-br from-slate-700 to-slate-900 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "text-white",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-bold text-sm",
                                            children: "Perpetual Village City"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Admin Panel"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "relative p-2 hover:bg-gray-100 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "p-2 text-slate-800 hover:bg-slate-50 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$AdminSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/components/AdminSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$adminBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/components/adminBottomNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$adminHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/components/adminHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/lib/auth.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AdminLayout({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function checkAuth() {
            try {
                console.log('AdminLayout: Checking authentication...');
                // Get user from cookie-based auth
                const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authClient"].getCurrentUser();
                console.log('AdminLayout: User data received:', currentUser);
                if (!currentUser) {
                    console.log('AdminLayout: No user found, redirecting to login');
                    router.push('/login');
                    return;
                }
                // Check if user is an admin
                if (currentUser.role !== 'admin') {
                    console.log('AdminLayout: User is not an admin, role:', currentUser.role);
                    router.push('/login');
                    return;
                }
                console.log('AdminLayout: Auth successful, user:', currentUser.name);
                setUser(currentUser);
            } catch (error) {
                console.error('AdminLayout: Auth check error:', error);
                router.push('/login');
            } finally{
                setIsChecking(false);
            }
        }
        checkAuth();
    }, []); // Run only once on mount
    // Show loading state while checking auth
    if (isChecking) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Verifying authentication..."
                    }, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    // Don't render content if no user (will redirect anyway)
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$AdminSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isCollapsed: isSidebarCollapsed,
                setIsCollapsed: setIsSidebarCollapsed
            }, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `pb-20 lg:pb-0 transition-all duration-300  ${isSidebarCollapsed ? "lg:ml-[70px]" : "lg:ml-[300px]"}  `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$adminHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$adminBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/perpetual_merged/perpetual_frontend/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
function useAuth(requireAuth = true) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function checkAuth() {
            try {
                console.log('useAuth: Starting auth check...');
                const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authClient"].getCurrentUser();
                console.log('useAuth: Got user:', currentUser);
                if (!currentUser && requireAuth) {
                    console.log('useAuth: No user and auth required, redirecting to login');
                    router.push("/login");
                } else {
                    console.log('useAuth: Setting user');
                    setUser(currentUser);
                }
            } catch (err) {
                console.error('useAuth: Error during auth check:', err);
                setError(err instanceof Error ? err.message : 'Authentication failed');
                if (requireAuth) {
                    router.push("/login");
                }
            } finally{
                console.log('useAuth: Setting loading to false');
                setLoading(false);
            }
        }
        checkAuth();
    }, [
        requireAuth,
        router
    ]);
    return {
        user,
        loading,
        error
    };
}
}),
"[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAnnouncementsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/toggle-left.js [app-ssr] (ecmascript) <export default as ToggleLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleRight$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/toggle-right.js [app-ssr] (ecmascript) <export default as ToggleRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$adminLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/components/adminLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/components/ui/use-toast.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AdminAnnouncementsPage() {
    const { user, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])(true);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || "http://localhost:8000";
    // Helper function to get full image URL
    const getImageUrl = (imageUrl)=>{
        if (!imageUrl) return "";
        // If the URL already includes http:// or https://, return as is
        if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
            return imageUrl;
        }
        // If it starts with a slash, concatenate with IMAGE_URL
        if (imageUrl.startsWith("/")) {
            return `${IMAGE_URL}${imageUrl}`;
        }
        // For relative paths like 'images/announcements/file.png', add leading slash
        return `${IMAGE_URL}/${imageUrl}`;
    };
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedAnnouncement, setSelectedAnnouncement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalMode, setModalMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("view");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current_page: 1,
        last_page: 1,
        per_page: 15,
        total: 0,
        from: 0,
        to: 0
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        date: new Date().toISOString().split("T")[0],
        category: "Update",
        description: "",
        content: "",
        is_active: true,
        priority: 0
    });
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Single useEffect to fetch announcements
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!authLoading && user) {
            fetchAnnouncements();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        authLoading,
        user,
        pagination.current_page,
        categoryFilter
    ]);
    // Replace the fetchAnnouncements function with this:
    const fetchAnnouncements = async ()=>{
        try {
            setLoading(true);
            const params = new URLSearchParams({
                page: pagination.current_page.toString(),
                per_page: pagination.per_page.toString()
            });
            if (categoryFilter !== "all") {
                params.append("category", categoryFilter);
            }
            if (searchQuery) {
                params.append("search", searchQuery);
            }
            console.log('Fetching announcements with params:', params.toString());
            // Use Next.js API route instead of calling Laravel directly
            const response = await fetch(`/api/announcements?${params}`, {
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response status:', response.status);
            if (response.ok) {
                const data = await response.json();
                console.log('Announcements response:', data);
                if (data.success && data.data) {
                    setAnnouncements(data.data.data || []);
                    setPagination({
                        current_page: data.data.current_page || 1,
                        last_page: data.data.last_page || 1,
                        per_page: data.data.per_page || 15,
                        total: data.data.total || 0,
                        from: data.data.from || 0,
                        to: data.data.to || 0
                    });
                } else {
                    console.warn('Unexpected response structure:', data);
                }
            } else {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (e) {
                    errorData = {
                        message: `HTTP ${response.status}: ${response.statusText}`
                    };
                }
                console.error('Error response:', errorData);
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: errorData.message || "Failed to fetch announcements."
                });
            }
        } catch (error) {
            console.error("Error fetching announcements:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to load announcements."
            });
        } finally{
            setLoading(false);
        }
    };
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                toast({
                    variant: "destructive",
                    title: "File too large",
                    description: "Image must be less than 10MB."
                });
                return;
            }
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const removeImage = ()=>{
        setImage(null);
        setPreview("");
    };
    const handleViewAnnouncement = (announcement)=>{
        setSelectedAnnouncement(announcement);
        setModalMode("view");
        setIsModalOpen(true);
    };
    const handleCreateNew = ()=>{
        setFormData({
            title: "",
            date: new Date().toISOString().split("T")[0],
            category: "Update",
            description: "",
            content: "",
            is_active: true,
            priority: 0
        });
        setImage(null);
        setPreview("");
        setSelectedAnnouncement(null);
        setModalMode("create");
        setIsModalOpen(true);
    };
    const handleEdit = (announcement)=>{
        setSelectedAnnouncement(announcement);
        setFormData({
            title: announcement.title,
            date: announcement.date,
            category: announcement.category,
            description: announcement.description,
            content: announcement.content,
            is_active: announcement.is_active,
            priority: announcement.priority
        });
        setPreview(getImageUrl(announcement.image_url));
        setImage(null);
        setModalMode("edit");
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedAnnouncement(null);
        setFormData({
            title: "",
            date: new Date().toISOString().split("T")[0],
            category: "Update",
            description: "",
            content: "",
            is_active: true,
            priority: 0
        });
        setImage(null);
        setPreview("");
    };
    // Replace your handleSubmit function with this:
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("date", formData.date);
            formDataToSend.append("category", formData.category);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("content", formData.content);
            formDataToSend.append("is_active", formData.is_active ? "1" : "0");
            formDataToSend.append("priority", String(formData.priority));
            if (image) {
                formDataToSend.append("image", image);
            }
            const isEdit = modalMode === "edit";
            // Use POST for both create and update
            const url = isEdit ? `/api/announcements/${selectedAnnouncement.id}` : `/api/announcements`;
            // Add _method for Laravel to understand it's an update
            if (isEdit) {
                formDataToSend.append("_method", "PATCH");
            }
            const res = await fetch(url, {
                method: "POST",
                body: formDataToSend,
                credentials: "include"
            });
            let data = null;
            const text = await res.text();
            if (text) {
                try {
                    data = JSON.parse(text);
                } catch (e) {
                    console.error("Response is not JSON:", text);
                }
            }
            if (!res.ok) {
                console.error("Request failed:", res.status, data);
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: data?.message || "Failed to save announcement."
                });
                return;
            }
            toast({
                title: "Success",
                description: modalMode === "create" ? "Announcement created successfully." : "Announcement updated successfully."
            });
            closeModal();
            fetchAnnouncements();
        } catch (error) {
            console.error("Error saving announcement:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "An unexpected error occurred."
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    // Replace handleDelete function with this:
    const handleDelete = async (id)=>{
        if (!confirm("Are you sure you want to delete this announcement?")) {
            return;
        }
        try {
            // Use Next.js API route
            const response = await fetch(`/api/announcements/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (data.success) {
                toast({
                    title: "Success",
                    description: "Announcement deleted successfully."
                });
                fetchAnnouncements();
            } else {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: data.message || "Failed to delete announcement."
                });
            }
        } catch (error) {
            console.error("Error deleting announcement:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to delete announcement."
            });
        }
    };
    const handleSearch = ()=>{
        setPagination((prev)=>({
                ...prev,
                current_page: 1
            }));
        fetchAnnouncements();
    };
    const handlePageChange = (page)=>{
        setPagination((prev)=>({
                ...prev,
                current_page: page
            }));
    };
    const handleCategoryChange = (value)=>{
        setCategoryFilter(value);
        setPagination((prev)=>({
                ...prev,
                current_page: 1
            }));
    };
    const getCategoryBadge = (category)=>{
        const styles = {
            Alert: "bg-red-100 text-red-700",
            Event: "bg-purple-100 text-purple-700",
            Update: "bg-blue-100 text-blue-700",
            Development: "bg-indigo-100 text-indigo-700",
            Health: "bg-green-100 text-green-700",
            Notice: "bg-yellow-100 text-yellow-700"
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `px-2 py-1 text-xs font-medium rounded-full ${styles[category] || styles.Update}`,
            children: category
        }, void 0, false, {
            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
            lineNumber: 419,
            columnNumber: 7
        }, this);
    };
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    };
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                lineNumber: 436,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
            lineNumber: 435,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$components$2f$adminLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-b border-gray-200 sticky top-0 z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-orange-100 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "w-6 h-6 text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "Announcements"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Manage public announcements and notices"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateNew,
                                    className: "hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-orange-500 text-white rounded-lg hover:from-emerald-700 hover:to-orange-600 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this),
                                        "New Announcement"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateNew,
                                    className: "sm:hidden p-2 bg-gradient-to-r from-emerald-600 to-orange-500 text-white rounded-lg hover:from-emerald-700 hover:to-orange-600 transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                            lineNumber: 450,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg border border-gray-200 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search announcements...",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    onKeyDown: (e)=>e.key === "Enter" && handleSearch(),
                                                    className: "w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: categoryFilter,
                                                    onChange: (e)=>handleCategoryChange(e.target.value),
                                                    className: "w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All Categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Update",
                                                            children: "Update"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Event",
                                                            children: "Event"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Alert",
                                                            children: "Alert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Development",
                                                            children: "Development"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Health",
                                                            children: "Health"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Notice",
                                                            children: "Notice"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSearch,
                                    className: "mt-4 w-full sm:w-auto px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4 sm:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg border border-gray-200 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-1",
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: pagination.total
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg border border-gray-200 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-1",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-green-600",
                                            children: announcements.filter((a)=>a.is_active).length
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg border border-gray-200 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-1",
                                            children: "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-gray-400",
                                            children: announcements.filter((a)=>!a.is_active).length
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 534,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg border border-gray-200 overflow-hidden",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center py-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-gray-600",
                                            children: "Loading announcements..."
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 548,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 546,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                lineNumber: 545,
                                columnNumber: 15
                            }, this) : announcements.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-gray-900 mb-2",
                                        children: "No announcements found"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 mb-4",
                                        children: "Create your first announcement"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 555,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCreateNew,
                                        className: "px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors",
                                        children: "New Announcement"
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                lineNumber: 552,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-gray-50 border-b border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",
                                                                children: "Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",
                                                                children: "Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",
                                                                children: "Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 579,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",
                                                                children: "Priority"
                                                            }, void 0, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",
                                                                children: "Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "bg-white divide-y divide-gray-200",
                                                    children: announcements.map((announcement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            announcement.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: getImageUrl(announcement.image_url),
                                                                                    alt: announcement.title,
                                                                                    width: 48,
                                                                                    height: 48,
                                                                                    className: "w-full h-full object-cover",
                                                                                    unoptimized: true
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                    lineNumber: 597,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 596,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-sm font-medium text-gray-900 max-w-xs truncate",
                                                                                children: announcement.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 607,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                        lineNumber: 594,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: getCategoryBadge(announcement.category)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 612,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                    children: formatDate(announcement.date)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 615,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            announcement.is_active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleRight$3e$__["ToggleRight"], {
                                                                                className: "w-5 h-5 text-green-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 621,
                                                                                columnNumber: 33
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__["ToggleLeft"], {
                                                                                className: "w-5 h-5 text-gray-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-sm ${announcement.is_active ? "text-green-600 font-medium" : "text-gray-400"}`,
                                                                                children: announcement.is_active ? "Active" : "Inactive"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 625,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                    children: announcement.priority
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 633,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleViewAnnouncement(announcement),
                                                                                className: "p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors",
                                                                                title: "View",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                    lineNumber: 643,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 638,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleEdit(announcement),
                                                                                className: "p-1.5 text-orange-600 hover:bg-orange-50 rounded transition-colors",
                                                                                title: "Edit",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                    lineNumber: 650,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 645,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDelete(announcement.id),
                                                                                className: "p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                                                title: "Delete",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                    lineNumber: 657,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 636,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, announcement.id, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 17
                                    }, this),
                                    !loading && announcements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    "Showing ",
                                                    pagination.from,
                                                    " to ",
                                                    pagination.to,
                                                    " of ",
                                                    pagination.total,
                                                    " results"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 670,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePageChange(pagination.current_page - 1),
                                                        disabled: pagination.current_page === 1,
                                                        className: "p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: Array.from({
                                                            length: Math.min(5, pagination.last_page)
                                                        }, (_, i)=>{
                                                            let pageNum;
                                                            if (pagination.last_page <= 5) {
                                                                pageNum = i + 1;
                                                            } else if (pagination.current_page <= 3) {
                                                                pageNum = i + 1;
                                                            } else if (pagination.current_page >= pagination.last_page - 2) {
                                                                pageNum = pagination.last_page - 4 + i;
                                                            } else {
                                                                pageNum = pagination.current_page - 2 + i;
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handlePageChange(pageNum),
                                                                className: `w-8 h-8 rounded-lg text-sm font-medium transition-colors ${pagination.current_page === pageNum ? "bg-orange-600 text-white" : "border border-gray-300 hover:bg-gray-50"}`,
                                                                children: pageNum
                                                            }, pageNum, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePageChange(pagination.current_page + 1),
                                                        disabled: pagination.current_page === pagination.last_page,
                                                        className: "p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 669,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                            lineNumber: 543,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this),
                isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-gray-900",
                                                children: modalMode === "create" ? "Create Announcement" : modalMode === "edit" ? "Edit Announcement" : "Announcement Details"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 733,
                                                columnNumber: 19
                                            }, this),
                                            selectedAnnouncement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mt-1",
                                                children: [
                                                    "ID #",
                                                    selectedAnnouncement.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 732,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeModal,
                                        className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 748,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                lineNumber: 731,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 sm:px-6 py-4 overflow-y-auto flex-1",
                                children: modalMode === "view" && selectedAnnouncement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        selectedAnnouncement.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-64 rounded-lg overflow-hidden bg-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: getImageUrl(selectedAnnouncement.image_url),
                                                alt: selectedAnnouncement.title,
                                                fill: true,
                                                className: "object-cover",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 759,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 758,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        selectedAnnouncement.is_active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleRight$3e$__["ToggleRight"], {
                                                            className: "w-5 h-5 text-green-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 774,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__["ToggleLeft"], {
                                                            className: "w-5 h-5 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-sm font-medium ${selectedAnnouncement.is_active ? "text-green-600" : "text-gray-400"}`,
                                                            children: selectedAnnouncement.is_active ? "Active" : "Inactive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 778,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-500 mb-1",
                                                            children: "Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base text-gray-900",
                                                            children: selectedAnnouncement.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 791,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-500 mb-1",
                                                                    children: "Category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 796,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: getCategoryBadge(selectedAnnouncement.category)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 795,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-500 mb-1",
                                                                    children: "Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-base text-gray-900",
                                                                    children: formatDate(selectedAnnouncement.date)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 803,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 801,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-500 mb-1",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 810,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base text-gray-900",
                                                            children: selectedAnnouncement.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 813,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 809,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-500 mb-1",
                                                            children: "Content"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 bg-gray-50 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base text-gray-900 whitespace-pre-wrap",
                                                                children: selectedAnnouncement.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-500 mb-1",
                                                            children: "Priority"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 826,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base text-gray-900",
                                                            children: selectedAnnouncement.priority
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 788,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Title ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.title,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            title: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                    placeholder: "Enter announcement title"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: [
                                                                "Category ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 36
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 851,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: formData.category,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    category: e.target.value
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Update",
                                                                    children: "Update"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 864,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Event",
                                                                    children: "Event"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Alert",
                                                                    children: "Alert"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Notice",
                                                                    children: "Notice"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 867,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Development",
                                                                    children: "Development"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Health",
                                                                    children: "Health"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 869,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 854,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 850,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: [
                                                                "Date ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 875,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: formData.date,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    date: e.target.value
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 877,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 873,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 849,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Description ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 888,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.description,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            description: e.target.value
                                                        }),
                                                    rows: 3,
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                    placeholder: "Brief description (max 500 characters)",
                                                    maxLength: 500
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        formData.description.length,
                                                        "/500 characters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 886,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Content ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 905,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.content,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            content: e.target.value
                                                        }),
                                                    rows: 8,
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                                                    placeholder: "Full announcement content"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 903,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Featured Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 23
                                                }, this),
                                                preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full h-48 rounded-lg overflow-hidden bg-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: preview,
                                                            alt: "Preview",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: removeImage,
                                                            className: "absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-red-600 transition-colors",
                                                            children: "×"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 929,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                    className: "w-12 h-12 text-gray-400 mb-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 940,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-gray-600",
                                                                    children: "Upload featured image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 941,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 mt-1",
                                                                    children: "PNG, JPG, GIF (max 10MB)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 942,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: handleImageChange,
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 944,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Priority (0-100)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 956,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            max: "100",
                                                            value: formData.priority,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    priority: parseInt(e.target.value) || 0
                                                                }),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 959,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mt-1",
                                                            children: "Higher priority appears first"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 973,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 h-[42px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    id: "is_active",
                                                                    checked: formData.is_active,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            is_active: e.target.checked
                                                                        }),
                                                                    className: "w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 975,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "is_active",
                                                                    className: "text-sm text-gray-700",
                                                                    children: "Active (visible to public)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 984,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 974,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                    lineNumber: 972,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                            lineNumber: 954,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 834,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                lineNumber: 753,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-200 px-4 sm:px-6 py-3 bg-white shadow-lg flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 w-full",
                                    children: modalMode === "view" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: closeModal,
                                                className: "w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium",
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 999,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(selectedAnnouncement),
                                                className: "w-full sm:w-auto px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: closeModal,
                                                className: "w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSubmit,
                                                disabled: isSubmitting,
                                                className: "w-full sm:w-auto px-4 py-3 bg-gradient-to-r from-emerald-600 to-orange-500 text-white rounded-lg hover:from-emerald-700 hover:to-orange-600 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "animate-spin h-4 w-4 text-white",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    className: "opacity-25",
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 1033,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    className: "opacity-75",
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                                    lineNumber: 1041,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 29
                                                        }, this),
                                                        modalMode === "create" ? "Creating..." : "Saving..."
                                                    ]
                                                }, void 0, true) : modalMode === "create" ? "Create Announcement" : "Save Changes"
                                            }, void 0, false, {
                                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                    lineNumber: 996,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                                lineNumber: 995,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                        lineNumber: 729,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
                    lineNumber: 728,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
            lineNumber: 446,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/perpetual_merged/perpetual_frontend/app/dashboard/admin/announcements/page.tsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6dc5f592._.js.map