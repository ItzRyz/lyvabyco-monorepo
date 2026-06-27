# 🍼 Lyvaby & Co. — Modern E-Commerce Platform

Welcome to the official repository of **Lyvaby & Co.**, a cutting-edge, high-performance e-commerce platform specializing in baby products and essentials. 

This project is built using a modern **Monorepo architecture** powered by Turborepo, utilizing Next.js 16 for an ultra-fast frontend, Express.js with TypeScript for a robust API backend, and a completely dynamic database schema designed to eliminate rigid code dependencies.

---

## 🏗️ Technical Architecture & Tech Stack

This ecosystem centralizes all components into a single repository to maximize code sharing, maintainability, and deployment efficiency.

### 🚀 Key Technologies
* **Monorepo Manager:** [Turborepo](https://turbo.build/)
* **Frontend (apps/web):** Next.js 16 (App Router, React Server Components for SEO, Zustand for instant state management)
* **Backend API (apps/api):** Express.js (TypeScript) following the *Controller-Service-Repository* pattern with Zod for strict input validation
* **Database & ORM:** PostgreSQL + Prisma ORM (`packages/database`)
* **Design System (packages/ui):** Tailwind CSS + Shadcn/ui (Shared component library)
* **Authentication:** Better-auth via secure HTTP-Only Cookies

### 📐 Architecture Diagram

::: mermaid
graph TD
    %% Users
    User([User / Browser])
    AdminUser([Admin / Internal Staff])

    %% Applications
    Web[apps/web <br> Next.js 16 Storefront]
    Admin[apps/admin <br> Next.js 16 Dashboard]
    API[apps/api <br> Express TS + Zod]

    %% Packages & Integrations
    Auth[Better-auth]
    Xendit[Xendit Payment Gateway]
    Logistics[Logistics API <br> Biteship / RajaOngkir]
    DB_Pkg[packages/database <br> Prisma Client]
    DB[(PostgreSQL)]

    %% Connections
    User -->|Browse / Buy| Web
    AdminUser -->|Manage| Admin
    
    Web -->|Fetch / Auth Cookies| API
    Admin -->|Fetch / Auth Cookies| API
    
    API <--> Auth
    API <-->|Direct API / Webhook| Xendit
    API -->|Live Shipping Rates| Logistics
    API --> DB_Pkg
    DB_Pkg --> DB

    %% Styling
    style User fill:#111827,stroke:#374151,stroke-width:2px,color:#fff
    style AdminUser fill:#111827,stroke:#374151,stroke-width:2px,color:#fff
    style Web fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px,color:#fff
    style Admin fill:#5b21b6,stroke:#8b5cf6,stroke-width:2px,color:#fff
    style API fill:#065f46,stroke:#10b981,stroke-width:2px,color:#fff
    style DB fill:#111827,stroke:#374151,stroke-width:2px,color:#fff
    style Xendit fill:#7c2d12,stroke:#f97316,stroke-width:2px,color:#fff
    style Logistics fill:#7c2d12,stroke:#f97316,stroke-width:2px,color:#fff
:::

---

## ✨ Core System Features

### 🧩 100% Dynamic Database (No-Enum Design)
To prevent code fragility and avoid database locking, this platform completely removes hardcoded `enums`. All classifications, business roles, and order/payment tracking statuses are handled dynamically through **Master Tables** (`Type`, `Status`, and `Role`). You can add new operational statuses directly through the admin panel without rebuilding or re-deploying applications.

### 💳 Native Xendit Payment Integration
We provide a seamless and premium user experience by handling payments natively within the platform (without external redirects). 
* **Seamless Checkout:** Generates raw Virtual Account numbers or QRIS data (`qr_string`) directly via Xendit's Specific Payment Methods API.
* **Real-time Synchronization:** Utilizes secure webhooks (`POST /api/webhooks/xendit`) protected by `x-callback-token` verification to process successful or expired payments instantaneously.
* **Live Polling UI:** The client UI automatically checks backend payment updates every 5 seconds, triggering an instant transition to the success page upon confirmation.

### 📦 Multi-Warehouse & Smart Shipping
* **Atomic Stock Counter:** Multi-level product variations (by color, size, or age group) have strict stock counts managed through atomic database queries to prevent race conditions during high-traffic flash sales.
* **Proximity Routing:** The system calculates the customer's coordinates/sub-district and routes the shipping origin to the nearest active warehouse containing the required stock.
* **Real-time Shipping Cost:** Connects directly with logistics aggregators (like Biteship or RajaOngkir) using precise product parameters (`weight` in grams and volumetric dimension `l x w x h` in cm).

### ⏳ Resilient Failure Handling (Restock Logic)
* **Auto-Restock:** If a customer checks out an item but fails to complete the payment within the time limit, Xendit's `EXPIRED` webhook automatically triggers an atomic `increment` to restore the stock.
* **Backup Cron Jobs:** A background cron service runs every 15 minutes on the Express backend to sweep, cancel stale orders, and replenish inventory safely.

---

## 📂 Repository Structure

```bash
lyvaby-monorepo/
├── apps/
│   ├── web/          # Next.js 16 customer-facing storefront
│   └── admin/        # Next.js 16 internal management dashboard
├── packages/
│   ├── database/     # Prisma schema, migrations, and shared client
│   └── ui/           # Unified design system using Tailwind + Shadcn/ui
├── turbo.json        # Turborepo orchestration settings
└── package.json
```

## 🛠️ Local Development Setup

### Prerequisites

Ensure you have the following installed on your machine:

* Node.js (v22+ or latest LTS)
* Bun (Recommended package manager)
* PostgreSQL instance running locally or via Docker

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/ItzRyz/lyvabyco-monorepo.git
cd lyvabyco-monorepo
bun install
```

### 2. Set Up Environment Variables

Create a .env file in packages/database and apps/api:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/lyvabyco_db?schema=public"
XENDIT_SECRET_KEY="xnd_development_..."
XENDIT_CALLBACK_TOKEN="your_webhook_token"
```

### 3. Initialize Database & Run Seed
Run the migrations and execute the database seeder to populate the crucial master tables (Type, Status, Role):

```bash
bun --filter database prisma migrate dev
bun --filter database prisma db seed
```

### 4. Run the Development Server

Launch all applications simultaneously using Turborepo's unified terminal command:

```bash
bun run dev
```

* Storefront will be accessible at http://localhost:3000
* API Server will be accessible at http://localhost:8000

## 📄 License

This project is proprietary and confidential. All rights reserved by Lyvaby & Co.