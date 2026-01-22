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
"[project]/perpetual_merged/perpetual_frontend/app/api/our-community/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perpetual_merged/perpetual_frontend/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function getAuthToken() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return cookieStore.get("auth_token")?.value;
}
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
async function GET(request) {
    try {
        console.log("[Community API] GET - Fetching from:", `${API_URL}/our-community`);
        const token = await getAuthToken();
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Unauthorized"
            }, {
                status: 401
            });
        }
        const response = await fetch(`${API_URL}/our-community`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest"
            }
        });
        const responseText = await response.text();
        console.log("[Community API] GET - Response status:", response.status);
        if (!response.ok) {
            try {
                const errorData = JSON.parse(responseText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: errorData.message || "Failed to fetch community data",
                    details: errorData.errors || errorData
                }, {
                    status: response.status
                });
            } catch  {
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Failed to fetch community data from server"
                }, {
                    status: response.status
                });
            }
        }
        const data = JSON.parse(responseText);
        // Parse JSON strings back to arrays when reading from Laravel
        if (data.success && data.data) {
            try {
                data.data.community_list = typeof data.data.community_list === 'string' ? JSON.parse(data.data.community_list) : data.data.community_list || [];
                data.data.community_card_icon = typeof data.data.community_card_icon === 'string' ? JSON.parse(data.data.community_card_icon) : data.data.community_card_icon || [];
                data.data.community_card_number = typeof data.data.community_card_number === 'string' ? JSON.parse(data.data.community_card_number) : data.data.community_card_number || [];
                data.data.community_card_category = typeof data.data.community_card_category === 'string' ? JSON.parse(data.data.community_card_category) : data.data.community_card_category || [];
            } catch (parseError) {
                console.error("[Community API] GET - Error parsing arrays:", parseError);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error("[Community API] GET - Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const token = await getAuthToken();
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Unauthorized"
            }, {
                status: 401
            });
        }
        const body = await request.json();
        // Convert arrays to JSON strings before sending to Laravel
        const processedBody = {
            ...body,
            community_list: Array.isArray(body.community_list) ? JSON.stringify(body.community_list) : body.community_list,
            community_card_icon: Array.isArray(body.community_card_icon) ? JSON.stringify(body.community_card_icon) : body.community_card_icon,
            community_card_number: Array.isArray(body.community_card_number) ? JSON.stringify(body.community_card_number) : body.community_card_number,
            community_card_category: Array.isArray(body.community_card_category) ? JSON.stringify(body.community_card_category) : body.community_card_category
        };
        console.log("[Community API] POST - Sending to:", `${API_URL}/our-community`);
        console.log("[Community API] POST - Payload:", JSON.stringify(processedBody, null, 2));
        const response = await fetch(`${API_URL}/our-community`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify(processedBody)
        });
        const responseText = await response.text();
        console.log("[Community API] POST - Status:", response.status);
        console.log("[Community API] POST - Response:", responseText.substring(0, 500));
        if (!response.ok) {
            try {
                const errorData = JSON.parse(responseText);
                console.log("[Community API] POST - Error data:", errorData);
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: errorData.message || "Failed to create community data",
                    details: errorData.errors || errorData
                }, {
                    status: response.status
                });
            } catch  {
                console.log("[Community API] POST - HTML error response");
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Server returned an error. Check Laravel logs for details.",
                    isHtmlError: responseText.includes("<html") || responseText.includes("<!DOCTYPE")
                }, {
                    status: response.status
                });
            }
        }
        const data = JSON.parse(responseText);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error("[Community API] POST - Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const token = await getAuthToken();
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Unauthorized"
            }, {
                status: 401
            });
        }
        const body = await request.json();
        // Convert arrays to JSON strings before sending to Laravel
        const processedBody = {
            ...body,
            community_list: Array.isArray(body.community_list) ? JSON.stringify(body.community_list) : body.community_list,
            community_card_icon: Array.isArray(body.community_card_icon) ? JSON.stringify(body.community_card_icon) : body.community_card_icon,
            community_card_number: Array.isArray(body.community_card_number) ? JSON.stringify(body.community_card_number) : body.community_card_number,
            community_card_category: Array.isArray(body.community_card_category) ? JSON.stringify(body.community_card_category) : body.community_card_category
        };
        console.log("[Community API] PUT - Sending to:", `${API_URL}/our-community`);
        console.log("[Community API] PUT - Payload:", JSON.stringify(processedBody, null, 2));
        const response = await fetch(`${API_URL}/our-community`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify(processedBody)
        });
        const responseText = await response.text();
        console.log("[Community API] PUT - Status:", response.status);
        console.log("[Community API] PUT - Response:", responseText.substring(0, 500));
        if (!response.ok) {
            try {
                const errorData = JSON.parse(responseText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: errorData.message || "Failed to update community data",
                    details: errorData.errors || errorData
                }, {
                    status: response.status
                });
            } catch  {
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Server returned an error. Check Laravel logs for details.",
                    isHtmlError: responseText.includes("<html") || responseText.includes("<!DOCTYPE")
                }, {
                    status: response.status
                });
            }
        }
        const data = JSON.parse(responseText);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error("[Community API] PUT - Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        console.log("[Community API] DELETE - Sending to:", `${API_URL}/our-community`);
        const token = await getAuthToken();
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Unauthorized"
            }, {
                status: 401
            });
        }
        const response = await fetch(`${API_URL}/our-community`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "X-Requested-With": "XMLHttpRequest"
            }
        });
        const responseText = await response.text();
        console.log("[Community API] DELETE - Status:", response.status);
        if (!response.ok) {
            try {
                const errorData = JSON.parse(responseText);
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: errorData.message || "Failed to delete community data",
                    details: errorData.errors || errorData
                }, {
                    status: response.status
                });
            } catch  {
                return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Server returned an error. Check Laravel logs for details."
                }, {
                    status: response.status
                });
            }
        }
        const data = JSON.parse(responseText);
        return __TURBOPACK__imported__module__$5b$project$5d2f$perpetual_merged$2f$perpetual_frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error("[Community API] DELETE - Error:", error);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__7815e577._.js.map