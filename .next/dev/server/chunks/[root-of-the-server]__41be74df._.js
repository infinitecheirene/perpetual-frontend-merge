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
"[project]/perpetual_merged/perpetual_frontend/app/api/business-partners/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
// app/api/business-partners/route.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/server.js [app-route] (ecmascript)");
;
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || "http://localhost:8000";
// Helper function to transform photo URLs
function transformPhotoUrl(photoPath) {
    if (!photoPath) return null;
    // If already a full URL, return as is
    if (photoPath.startsWith('http://') || photoPath.startsWith('https://')) {
        return photoPath;
    }
    // Construct full URL from relative path
    const cleanPath = photoPath.startsWith('/') ? photoPath : `/${photoPath}`;
    return `${IMAGE_BASE_URL}${cleanPath}`;
}
async function GET(req) {
    try {
        const url = new URL(req.url);
        const queryParams = url.searchParams.toString();
        console.log("Fetching public business partners from:", `${API_URL}/business-partners${queryParams ? '?' + queryParams : ''}`);
        const res = await fetch(`${API_URL}/business-partners${queryParams ? '?' + queryParams : ''}`, {
            headers: {
                Accept: "application/json",
                "X-Requested-With": "XMLHttpRequest"
            },
            cache: 'no-store'
        });
        const contentType = res.headers.get("content-type");
        let data;
        if (contentType?.includes("application/json")) {
            data = await res.json();
            console.log("Laravel response:", data);
            // Transform photo URLs in the response
            if (data.success && data.data) {
                if (Array.isArray(data.data)) {
                    // Handle array of business partners
                    data.data = data.data.map((partner)=>({
                            ...partner,
                            photo: transformPhotoUrl(partner.photo)
                        }));
                } else if (data.data.data && Array.isArray(data.data.data)) {
                    // Handle paginated response
                    data.data.data = data.data.data.map((partner)=>({
                            ...partner,
                            photo: transformPhotoUrl(partner.photo)
                        }));
                }
            }
            console.log("Transformed response with full image URLs");
        } else {
            const text = await res.text();
            console.error("Non-JSON response from Laravel:", text);
            return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Invalid response from server",
                debug: text.substring(0, 500)
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: res.status
        });
    } catch (err) {
        console.error("Server error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error",
            error: err instanceof Error ? err.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__41be74df._.js.map