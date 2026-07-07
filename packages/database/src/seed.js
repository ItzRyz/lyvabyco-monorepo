"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var typeProductStatus, typeOrderStatus, typePaymentStatus, typePaymentMethod, productStatuses, _i, productStatuses_1, status_1, orderStatuses, _a, orderStatuses_1, status_2, paymentStatuses, _b, paymentStatuses_1, status_3, roleSuperAdmin, roleAdmin, roleCustomer, paymentMethods, _c, paymentMethods_1, pm, warehouses, _d, warehouses_1, wh, menuDashboard, menuCatalog, menuOrders, menuSettings, superAdminMenus, _e, superAdminMenus_1, menuId, adminMenus, _f, adminMenus_1, menuId;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    console.log("🔄 Memulai proses seeding database dinamis Lyvaby & Co...");
                    // ==========================================
                    // 1. SEEDING TABLES: TYPES
                    // ==========================================
                    console.log("🌱 Seeding Master Types...");
                    return [4 /*yield*/, client_1.prisma.type.upsert({
                            where: { code: "PRODUCT_STATUS" },
                            update: {},
                            create: {
                                code: "PRODUCT_STATUS",
                                nameId: "Status Produk",
                                nameEn: "Product Status",
                                description: "Klasifikasi status visibilitas produk di katalog",
                            },
                        })];
                case 1:
                    typeProductStatus = _g.sent();
                    return [4 /*yield*/, client_1.prisma.type.upsert({
                            where: { code: "ORDER_STATUS" },
                            update: {},
                            create: {
                                code: "ORDER_STATUS",
                                nameId: "Status Pesanan",
                                nameEn: "Order Status",
                                description: "Tahapan pemrosesan pesanan / logistik belanja",
                            },
                        })];
                case 2:
                    typeOrderStatus = _g.sent();
                    return [4 /*yield*/, client_1.prisma.type.upsert({
                            where: { code: "PAYMENT_STATUS" },
                            update: {},
                            create: {
                                code: "PAYMENT_STATUS",
                                nameId: "Status Pembayaran",
                                nameEn: "Payment Status",
                                description: "Status penagihan invoice keuangan",
                            },
                        })];
                case 3:
                    typePaymentStatus = _g.sent();
                    return [4 /*yield*/, client_1.prisma.type.upsert({
                            where: { code: "PAYMENT_METHOD" },
                            update: {},
                            create: {
                                code: "PAYMENT_METHOD",
                                nameId: "Metode Pembayaran",
                                nameEn: "Payment Method",
                                description: "Kategori kanal transaksi atau gateway payment",
                            },
                        })
                        // ==========================================
                        // 2. SEEDING TABLES: STATUSES
                        // ==========================================
                    ];
                case 4:
                    typePaymentMethod = _g.sent();
                    // ==========================================
                    // 2. SEEDING TABLES: STATUSES
                    // ==========================================
                    console.log("🌱 Seeding Master Statuses...");
                    productStatuses = [
                        {
                            code: "DRAFT",
                            nameId: "Draf",
                            nameEn: "Draft",
                            typeId: typeProductStatus.id,
                        },
                        {
                            code: "PUBLISHED",
                            nameId: "Diterbitkan",
                            nameEn: "Published",
                            typeId: typeProductStatus.id,
                        },
                        {
                            code: "ARCHIVED",
                            nameId: "Diarsipkan",
                            nameEn: "Archived",
                            typeId: typeProductStatus.id,
                        },
                    ];
                    _i = 0, productStatuses_1 = productStatuses;
                    _g.label = 5;
                case 5:
                    if (!(_i < productStatuses_1.length)) return [3 /*break*/, 8];
                    status_1 = productStatuses_1[_i];
                    return [4 /*yield*/, client_1.prisma.status.upsert({
                            where: { code: status_1.code },
                            update: {},
                            create: status_1,
                        })];
                case 6:
                    _g.sent();
                    _g.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 5];
                case 8:
                    orderStatuses = [
                        {
                            code: "ORDER_PENDING",
                            nameId: "Menunggu Konfirmasi",
                            nameEn: "Pending Confirmation",
                            typeId: typeOrderStatus.id,
                        },
                        {
                            code: "ORDER_PROCESSING",
                            nameId: "Diproses",
                            nameEn: "Processing",
                            typeId: typeOrderStatus.id,
                        },
                        {
                            code: "ORDER_SHIPPED",
                            nameId: "Dikirim",
                            nameEn: "Shipped",
                            typeId: typeOrderStatus.id,
                        },
                        {
                            code: "ORDER_DELIVERED",
                            nameId: "Selesai",
                            nameEn: "Delivered",
                            typeId: typeOrderStatus.id,
                        },
                        {
                            code: "ORDER_CANCELLED",
                            nameId: "Dibatalkan",
                            nameEn: "Cancelled",
                            typeId: typeOrderStatus.id,
                        },
                    ];
                    _a = 0, orderStatuses_1 = orderStatuses;
                    _g.label = 9;
                case 9:
                    if (!(_a < orderStatuses_1.length)) return [3 /*break*/, 12];
                    status_2 = orderStatuses_1[_a];
                    return [4 /*yield*/, client_1.prisma.status.upsert({
                            where: { code: status_2.code },
                            update: {},
                            create: status_2,
                        })];
                case 10:
                    _g.sent();
                    _g.label = 11;
                case 11:
                    _a++;
                    return [3 /*break*/, 9];
                case 12:
                    paymentStatuses = [
                        {
                            code: "PAYMENT_UNPAID",
                            nameId: "Belum Dibayar",
                            nameEn: "Unpaid",
                            typeId: typePaymentStatus.id,
                        },
                        {
                            code: "PAYMENT_PAID",
                            nameId: "Lunas",
                            nameEn: "Paid",
                            typeId: typePaymentStatus.id,
                        },
                        {
                            code: "PAYMENT_EXPIRED",
                            nameId: "Kedaluwarsa",
                            nameEn: "Expired",
                            typeId: typePaymentStatus.id,
                        },
                        {
                            code: "PAYMENT_REFUNDED",
                            nameId: "Dikembalikan",
                            nameEn: "Refunded",
                            typeId: typePaymentStatus.id,
                        },
                    ];
                    _b = 0, paymentStatuses_1 = paymentStatuses;
                    _g.label = 13;
                case 13:
                    if (!(_b < paymentStatuses_1.length)) return [3 /*break*/, 16];
                    status_3 = paymentStatuses_1[_b];
                    return [4 /*yield*/, client_1.prisma.status.upsert({
                            where: { code: status_3.code },
                            update: {},
                            create: status_3,
                        })];
                case 14:
                    _g.sent();
                    _g.label = 15;
                case 15:
                    _b++;
                    return [3 /*break*/, 13];
                case 16:
                    // ==========================================
                    // 3. SEEDING TABLES: ROLES
                    // ==========================================
                    console.log("🌱 Seeding Roles...");
                    return [4 /*yield*/, client_1.prisma.role.upsert({
                            where: { code: "SUPER_ADMIN" },
                            update: {},
                            create: {
                                code: "SUPER_ADMIN",
                                name: "Super Admin",
                                description: "Akses penuh kontrol sistem",
                            },
                        })];
                case 17:
                    roleSuperAdmin = _g.sent();
                    return [4 /*yield*/, client_1.prisma.role.upsert({
                            where: { code: "ADMIN" },
                            update: {},
                            create: {
                                code: "ADMIN",
                                name: "Admin Operasional",
                                description: "Manajemen produk & logistik toko",
                            },
                        })];
                case 18:
                    roleAdmin = _g.sent();
                    return [4 /*yield*/, client_1.prisma.role.upsert({
                            where: { code: "CUSTOMER" },
                            update: {},
                            create: {
                                code: "CUSTOMER",
                                name: "Pelanggan",
                                description: "Pembeli retail platform Lyvaby",
                            },
                        })
                        // ==========================================
                        // 4. SEEDING TABLES: PAYMENT METHODS (Xendit Direct API)
                        // ==========================================
                    ];
                case 19:
                    roleCustomer = _g.sent();
                    // ==========================================
                    // 4. SEEDING TABLES: PAYMENT METHODS (Xendit Direct API)
                    // ==========================================
                    console.log("🌱 Seeding Xendit Payment Methods...");
                    paymentMethods = [
                        {
                            code: "VA_BCA",
                            name: "BCA Virtual Account",
                            xenditChannel: "BCA",
                            typeId: typePaymentMethod.id,
                        },
                        {
                            code: "VA_MANDIRI",
                            name: "Mandiri Virtual Account",
                            xenditChannel: "MANDIRI",
                            typeId: typePaymentMethod.id,
                        },
                        {
                            code: "QRIS",
                            name: "QRIS Dinamis",
                            xenditChannel: "QRIS",
                            typeId: typePaymentMethod.id,
                        },
                    ];
                    _c = 0, paymentMethods_1 = paymentMethods;
                    _g.label = 20;
                case 20:
                    if (!(_c < paymentMethods_1.length)) return [3 /*break*/, 23];
                    pm = paymentMethods_1[_c];
                    return [4 /*yield*/, client_1.prisma.paymentMethod.upsert({
                            where: { code: pm.code },
                            update: {},
                            create: pm,
                        })];
                case 21:
                    _g.sent();
                    _g.label = 22;
                case 22:
                    _c++;
                    return [3 /*break*/, 20];
                case 23:
                    // ==========================================
                    // 5. SEEDING TABLES: INITIAL WAREHOUSES
                    // ==========================================
                    console.log("🌱 Seeding Warehouses...");
                    warehouses = [
                        {
                            code: "GDG_JKT_01",
                            name: "Gudang Utama Jakarta",
                            address: "Sudirman, JKT",
                            city: "Jakarta",
                            latitude: -6.214,
                            longitude: 106.845,
                        },
                        {
                            code: "GDG_SBY_01",
                            name: "Gudang Surabaya",
                            address: "Rungkut, SBY",
                            city: "Surabaya",
                            latitude: -7.319,
                            longitude: 112.768,
                        },
                    ];
                    _d = 0, warehouses_1 = warehouses;
                    _g.label = 24;
                case 24:
                    if (!(_d < warehouses_1.length)) return [3 /*break*/, 27];
                    wh = warehouses_1[_d];
                    return [4 /*yield*/, client_1.prisma.warehouse.upsert({
                            where: { code: wh.code },
                            update: {},
                            create: wh,
                        })];
                case 25:
                    _g.sent();
                    _g.label = 26;
                case 26:
                    _d++;
                    return [3 /*break*/, 24];
                case 27:
                    // ==========================================
                    // 6. SEEDING TABLES: MENUS & PERMISSIONS (NEW 100% DYNAMIC FEATURE)
                    // ==========================================
                    console.log("🌱 Seeding Dinamis UI Menus & Hak Akses...");
                    return [4 /*yield*/, client_1.prisma.menu.upsert({
                            where: { path: "/admin/dashboard" },
                            update: {},
                            create: {
                                titleId: "Dasbor",
                                titleEn: "Dashboard",
                                path: "/admin/dashboard",
                                icon: "LayoutDashboard",
                                order: 1,
                            },
                        })];
                case 28:
                    menuDashboard = _g.sent();
                    return [4 /*yield*/, client_1.prisma.menu.upsert({
                            where: { path: "/admin/products" },
                            update: {},
                            create: {
                                titleId: "Katalog Produk",
                                titleEn: "Product Catalog",
                                path: "/admin/products",
                                icon: "ShoppingBag",
                                order: 2,
                            },
                        })];
                case 29:
                    menuCatalog = _g.sent();
                    return [4 /*yield*/, client_1.prisma.menu.upsert({
                            where: { path: "/admin/orders" },
                            update: {},
                            create: {
                                titleId: "Pesanan Masuk",
                                titleEn: "Incoming Orders",
                                path: "/admin/orders",
                                icon: "Receipt",
                                order: 3,
                            },
                        })];
                case 30:
                    menuOrders = _g.sent();
                    return [4 /*yield*/, client_1.prisma.menu.upsert({
                            where: { path: "/admin/settings" },
                            update: {},
                            create: {
                                titleId: "Pengaturan Sistem",
                                titleEn: "System Settings",
                                path: "/admin/settings",
                                icon: "Settings",
                                order: 4,
                            },
                        })
                        // --- Pemetaan Hak Akses Granular (RolePermission) ---
                        // 1. SUPER_ADMIN memperoleh akses ke seluruh menu (Dashboard, Produk, Pesanan, Settings)
                    ];
                case 31:
                    menuSettings = _g.sent();
                    superAdminMenus = [
                        menuDashboard.id,
                        menuCatalog.id,
                        menuOrders.id,
                        menuSettings.id,
                    ];
                    _e = 0, superAdminMenus_1 = superAdminMenus;
                    _g.label = 32;
                case 32:
                    if (!(_e < superAdminMenus_1.length)) return [3 /*break*/, 35];
                    menuId = superAdminMenus_1[_e];
                    return [4 /*yield*/, client_1.prisma.rolePermission.upsert({
                            where: { roleId_menuId: { roleId: roleSuperAdmin.id, menuId: menuId } },
                            update: {},
                            create: {
                                roleId: roleSuperAdmin.id,
                                menuId: menuId,
                                canCreate: true,
                                canRead: true,
                                canUpdate: true,
                                canDelete: true,
                            },
                        })];
                case 33:
                    _g.sent();
                    _g.label = 34;
                case 34:
                    _e++;
                    return [3 /*break*/, 32];
                case 35:
                    adminMenus = [menuDashboard.id, menuCatalog.id, menuOrders.id];
                    _f = 0, adminMenus_1 = adminMenus;
                    _g.label = 36;
                case 36:
                    if (!(_f < adminMenus_1.length)) return [3 /*break*/, 39];
                    menuId = adminMenus_1[_f];
                    return [4 /*yield*/, client_1.prisma.rolePermission.upsert({
                            where: { roleId_menuId: { roleId: roleAdmin.id, menuId: menuId } },
                            update: {},
                            create: {
                                roleId: roleAdmin.id,
                                menuId: menuId,
                                canCreate: true,
                                canRead: true,
                                canUpdate: true,
                                canDelete: false,
                            }, // Tidak bisa delete data
                        })];
                case 37:
                    _g.sent();
                    _g.label = 38;
                case 38:
                    _f++;
                    return [3 /*break*/, 36];
                case 39:
                    // 3. CUSTOMER (Opsional jika ingin menu riwayat belanja ditarik dari DB)
                    // Kosongkan atau daftarkan route '/account/orders' jika halaman profil pembeli ingin dibuat dinamis juga.
                    console.log("✅ Seeding database selesai! Seluruh konfigurasi menu & role siap digunakan.");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error("❌ Terjadi kesalahan saat seeding:", e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
