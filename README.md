## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Ta-Achariya/DPU-Assignment.git
cd hospital-middleware
```

### 2. Environment Setup

Create .env.local file and configure your settings:

```env
API_BASE_URL=https://dummyjson.com
```


### 3. installation and Run

```bash
# install dependencies (make sure you have Node.js)
npm install

# run in local
npm run dev
```


## API Proxy
ใช้ Next.js API route pattern เพื่อสร้างตัวกลางสำหรับเรียก External API

```
#work flow
Client (Browser) → Next.js API Route (Proxy) → External API


#file structure
app/api/products/[id]/route.ts  // Product detail proxy endpoint

```

### Security 
- External API endpoint stored in environment variables
- Never exposed to the browser or client-side code
- Prevents direct access to backend services
