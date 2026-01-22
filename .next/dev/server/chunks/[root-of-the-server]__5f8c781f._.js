module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/perpetual_merged/perpetual_frontend/app/api/announcements/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const LARAVEL_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
async function GET(request) {
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        const token = cookieStore.get("auth_token")?.value;
        const { searchParams } = new URL(request.url);
        const queryString = searchParams.toString();
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const url = `${LARAVEL_API_URL}/announcements${queryString ? `?${queryString}` : ''}`;
        console.log('Fetching from Laravel:', url);
        const response = await fetch(url, {
            method: "GET",
            headers,
            cache: "no-store"
        });
        const data = await response.json();
        console.log('Laravel response:', data);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: response.status
        });
    } catch (error) {
        console.error("Error fetching announcements:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to fetch announcements"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        const token = cookieStore.get("auth_token")?.value;
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Not authenticated. Please log in again."
            }, {
                status: 401
            });
        }
        // Get FormData from request
        const formData = await request.formData();
        console.log('Creating announcement with FormData');
        const response = await fetch(`${LARAVEL_API_URL}/announcements`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest"
            },
            body: formData
        });
        const data = await response.json();
        console.log('Laravel create response:', data);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: response.status
        });
    } catch (error) {
        console.error("Error creating announcement:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to create announcement"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5f8c781f._.js.map