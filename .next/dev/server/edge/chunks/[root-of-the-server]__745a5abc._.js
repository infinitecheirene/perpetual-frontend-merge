(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__745a5abc._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/perpetual_merged/perpetual_frontend/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
// middleware.ts (root level)
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
async function middleware(request) {
    const token = request.cookies.get('auth_token')?.value;
    const { pathname } = request.nextUrl;
    console.log('Middleware:', {
        pathname,
        hasToken: !!token
    });
    // Public paths that don't require authentication
    const publicPaths = [
        '/',
        '/login',
        '/register',
        '/announcements',
        '/news',
        '/services',
        '/about',
        '/contact',
        '/cookies',
        '/terms',
        '/privacy'
    ];
    const isPublicPath = publicPaths.includes(pathname);
    // API routes should be handled separately
    const isApiRoute = pathname.startsWith('/api/');
    // PWA files - CRITICAL for PWA to work
    const isPWAFile = pathname === '/manifest.json' || pathname === '/sw.js' || pathname === '/workbox-' || pathname.startsWith('/workbox-') || pathname === '/swe-worker-' || pathname.startsWith('/swe-worker-');
    // Static and public assets
    const isPublicAsset = pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico|json|js)$/);
    // Don't process API routes, public assets, or PWA files
    if (isApiRoute || isPublicAsset || isPWAFile) {
        console.log('Middleware: Allowing asset/API/PWA:', pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // If accessing protected route without token, redirect to login
    if (!token && !isPublicPath) {
        console.log('Middleware: No token, redirecting to login');
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    // If has token and on login/register page, redirect based on role
    if (token && (pathname === '/login' || pathname === '/register')) {
        console.log('Middleware: User has token on login/register, checking role...');
        try {
            // Fetch user data to determine role
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const response = await fetch(`${apiUrl}/api/auth/me`, {
                headers: {
                    'Cookie': `auth_token=${token}`,
                    'Accept': 'application/json'
                },
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                const userRole = data.user?.role;
                console.log('Middleware: User role detected:', userRole);
                // Redirect based on role
                if (userRole === 'admin') {
                    console.log('Middleware: Redirecting admin to admin dashboard');
                    return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/dashboard/admin/news', request.url));
                } else if (userRole === 'member') {
                    console.log('Middleware: Redirecting member to member dashboard');
                    return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/dashboard/member/certificate', request.url));
                }
            }
        } catch (error) {
            console.error('Middleware: Error fetching user role:', error);
        }
        // Default redirect if role check fails
        console.log('Middleware: Role check failed, redirecting to home');
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.url));
    }
    // Allow access to all other routes
    console.log('Middleware: Allowing access');
    return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all paths EXCEPT:
     * - api routes
     * - next internals
     * - static files
     * - PWA files
     */ '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|sw.js|workbox-.*|swe-worker-.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__745a5abc._.js.map