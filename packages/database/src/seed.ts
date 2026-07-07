import { prisma } from "./client"

async function main() {
    console.log("🔄 Memulai proses seeding database dinamis Lyvaby & Co...")

    // ==========================================
    // 1. SEEDING TABLES: TYPES
    // ==========================================
    console.log("🌱 Seeding Master Types...")
    const typeProductStatus = await prisma.type.upsert({
        where: { code: "PRODUCT_STATUS" },
        update: {},
        create: {
            code: "PRODUCT_STATUS",
            nameId: "Status Produk",
            nameEn: "Product Status",
            description: "Klasifikasi status visibilitas produk di katalog",
        },
    })

    const typeOrderStatus = await prisma.type.upsert({
        where: { code: "ORDER_STATUS" },
        update: {},
        create: {
            code: "ORDER_STATUS",
            nameId: "Status Pesanan",
            nameEn: "Order Status",
            description: "Tahapan pemrosesan pesanan / logistik belanja",
        },
    })

    const typePaymentStatus = await prisma.type.upsert({
        where: { code: "PAYMENT_STATUS" },
        update: {},
        create: {
            code: "PAYMENT_STATUS",
            nameId: "Status Pembayaran",
            nameEn: "Payment Status",
            description: "Status penagihan invoice keuangan",
        },
    })

    const typePaymentMethod = await prisma.type.upsert({
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
    console.log("🌱 Seeding Master Statuses...")

    const productStatuses = [
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
    ]
    for (const status of productStatuses) {
        await prisma.status.upsert({
            where: { code: status.code },
            update: {},
            create: status,
        })
    }

    const orderStatuses = [
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
    ]
    for (const status of orderStatuses) {
        await prisma.status.upsert({
            where: { code: status.code },
            update: {},
            create: status,
        })
    }

    const paymentStatuses = [
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
    ]
    for (const status of paymentStatuses) {
        await prisma.status.upsert({
            where: { code: status.code },
            update: {},
            create: status,
        })
    }

    // ==========================================
    // 3. SEEDING TABLES: ROLES
    // ==========================================
    console.log("🌱 Seeding Roles...")
    const roleSuperAdmin = await prisma.role.upsert({
        where: { code: "SUPER_ADMIN" },
        update: {},
        create: {
            code: "SUPER_ADMIN",
            name: "Super Admin",
            description: "Akses penuh kontrol sistem",
        },
    })

    const roleAdmin = await prisma.role.upsert({
        where: { code: "ADMIN" },
        update: {},
        create: {
            code: "ADMIN",
            name: "Admin Operasional",
            description: "Manajemen produk & logistik toko",
        },
    })

    const roleCustomer = await prisma.role.upsert({
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
    console.log("🌱 Seeding Xendit Payment Methods...")
    const paymentMethods = [
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
    ]
    for (const pm of paymentMethods) {
        await prisma.paymentMethod.upsert({
            where: { code: pm.code },
            update: {},
            create: pm,
        })
    }

    // ==========================================
    // 5. SEEDING TABLES: INITIAL WAREHOUSES
    // ==========================================
    console.log("🌱 Seeding Warehouses...")
    const warehouses = [
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
    ]
    for (const wh of warehouses) {
        await prisma.warehouse.upsert({
            where: { code: wh.code },
            update: {},
            create: wh,
        })
    }

    // ==========================================
    // 6. SEEDING TABLES: MENUS & PERMISSIONS (NEW 100% DYNAMIC FEATURE)
    // ==========================================
    console.log("🌱 Seeding Dinamis UI Menus & Hak Akses...")

    // --- Menu Level Root / Parent ---
    const menuDashboard = await prisma.menu.upsert({
        where: { path: "/admin/dashboard" },
        update: {},
        create: {
            titleId: "Dasbor",
            titleEn: "Dashboard",
            path: "/admin/dashboard",
            icon: "LayoutDashboard",
            order: 1,
        },
    })

    const menuCatalog = await prisma.menu.upsert({
        where: { path: "/admin/products" },
        update: {},
        create: {
            titleId: "Katalog Produk",
            titleEn: "Product Catalog",
            path: "/admin/products",
            icon: "ShoppingBag",
            order: 2,
        },
    })

    const menuOrders = await prisma.menu.upsert({
        where: { path: "/admin/orders" },
        update: {},
        create: {
            titleId: "Pesanan Masuk",
            titleEn: "Incoming Orders",
            path: "/admin/orders",
            icon: "Receipt",
            order: 3,
        },
    })

    const menuSettings = await prisma.menu.upsert({
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
    const superAdminMenus = [
        menuDashboard.id,
        menuCatalog.id,
        menuOrders.id,
        menuSettings.id,
    ]
    for (const menuId of superAdminMenus) {
        await prisma.rolePermission.upsert({
            where: { roleId_menuId: { roleId: roleSuperAdmin.id, menuId } },
            update: {},
            create: {
                roleId: roleSuperAdmin.id,
                menuId,
                canCreate: true,
                canRead: true,
                canUpdate: true,
                canDelete: true,
            },
        })
    }

    // 2. ADMIN OPERASIONAL hanya diberi akses ke Dashboard, Produk, dan Pesanan (Tanpa Settings)
    const adminMenus = [menuDashboard.id, menuCatalog.id, menuOrders.id]
    for (const menuId of adminMenus) {
        await prisma.rolePermission.upsert({
            where: { roleId_menuId: { roleId: roleAdmin.id, menuId } },
            update: {},
            create: {
                roleId: roleAdmin.id,
                menuId,
                canCreate: true,
                canRead: true,
                canUpdate: true,
                canDelete: false,
            }, // Tidak bisa delete data
        })
    }

    // 3. CUSTOMER (Opsional jika ingin menu riwayat belanja ditarik dari DB)
    // Kosongkan atau daftarkan route '/account/orders' jika halaman profil pembeli ingin dibuat dinamis juga.

    console.log(
        "✅ Seeding database selesai! Seluruh konfigurasi menu & role siap digunakan."
    )
}

main()
    .catch((e) => {
        console.error("❌ Terjadi kesalahan saat seeding:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
