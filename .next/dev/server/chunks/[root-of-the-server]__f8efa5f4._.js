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
"[project]/perpetual_merged/perpetual_frontend/app/api/news/published/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/server.js [app-route] (ecmascript)");
;
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const queryString = searchParams.toString();
        // Construct the full endpoint URL
        const endpoint = `${API_URL}/news/published${queryString ? `?${queryString}` : ''}`;
        console.log("=".repeat(50));
        console.log("[News API] 🔍 Fetching from:", endpoint);
        console.log("[News API] 📍 Base API_URL:", API_URL);
        console.log("[News API] 🔗 Query params:", queryString);
        console.log("=".repeat(50));
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            cache: 'no-store'
        });
        const responseText = await response.text();
        console.log("[News API] ✅ Response status:", response.status);
        console.log("[News API] 📝 Response preview:", responseText.substring(0, 500));
        if (!response.ok) {
            console.error("[News API] ❌ Error - Full response:", responseText);
            try {
                const errorData = JSON.parse(responseText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: errorData.message || "Failed to fetch news",
                    details: errorData.errors || errorData
                }, {
                    status: response.status
                });
            } catch  {
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Failed to fetch news from server",
                    details: responseText
                }, {
                    status: response.status
                });
            }
        }
        const data = JSON.parse(responseText);
        console.log("[News API] 🎉 Success! News items:", data.data?.data?.length || 0);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error("[News API] 💥 Fatal error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f8efa5f4._.js.map