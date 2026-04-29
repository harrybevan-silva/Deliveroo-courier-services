# Deliveroo Kenya - Technical Architecture & Schema

## 1. Tech Stack Overview
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, React Router.
- **Backend / API**: Node.js (Express) or Firebase Cloud Functions.
- **Database**: PostgreSQL (Prisma ORM) or Firestore (NoSQL).
- **Integrations**: 
  - Google Maps API (Geocoding, Distance Matrix for pricing).
  - M-Pesa Daraja API (STK Push, C2B integration).
  - Twilio/Africa's Talking (SMS Notifications).

## 2. API Endpoints (RESTful)

### Auth
- `POST /api/auth/register` (User / Rider registration)
- `POST /api/auth/login`

### Deliveries (Booking)
- `POST /api/deliveries/estimate`
  - Body: `{ pickupLat, pickupLng, dropoffLat, dropoffLng, packageType }`
  - Response: `{ estimatedPrice, distance, duration }`
- `POST /api/deliveries/book`
  - Body: `{ pickupAddress, dropoffAddress, packageType, paymentMethod, mpesaPhone? }`
  - Response: `{ deliveryId, status, paymentStatus }`
- `GET /api/deliveries/:id` (Get details & tracking)

### Payments (M-Pesa)
- `POST /api/payments/stkpush` (Triggers prompt on user phone)
- `POST /api/payments/webhook` (M-Pesa callback url)

### Rider Matching & Tracking
- `POST /api/riders/update-location` (Rider app pings loc)
- `WS /ws/track/:deliveryId` (WebSocket for real-time map updates)
- `POST /api/deliveries/:id/status` (Rider updates status: picked_up, delivered)

## 3. Database Schema (PostgreSQL/Prisma example)

```prisma
model User {
  id        String   @id @default(uuid())
  phone     String   @unique
  name      String
  role      Role     @default(CUSTOMER) // CUSTOMER, RIDER, ADMIN
  createdAt DateTime @default(now())
  
  deliveries Delivery[] @relation("CustomerDeliveries")
  rides      Delivery[] @relation("RiderDeliveries")
}

model Delivery {
  id             String         @id @default(uuid())
  trackingId     String         @unique // e.g., DEL-123456
  
  customerId     String
  customer       User           @relation("CustomerDeliveries", fields: [customerId], references: [id])
  
  riderId        String?
  rider          User?          @relation("RiderDeliveries", fields: [riderId], references: [id])

  pickupAddress  String
  pickupLat      Float
  pickupLng      Float
  
  dropoffAddress String
  dropoffLat     Float
  dropoffLng     Float

  packageType    PackageType    // DOCUMENT, FOOD, SMALL_BOX, LARGE_BOX
  status         DeliveryStatus // PENDING, ACCEPTED, PICKED_UP, ON_THE_WAY, DELIVERED, CANCELLED
  
  price          Float
  paymentRef     String?        // M-Pesa transaction ID
  paymentStatus  PaymentStatus  // PENDING, COMPLETED, FAILED

  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @updatedAt
}

enum Role {
  CUSTOMER
  RIDER
  ADMIN
}

enum PackageType {
  DOCUMENT
  FOOD
  SMALL_BOX
  LARGE_BOX
}

enum DeliveryStatus {
  PENDING
  ACCEPTED
  PICKED_UP
  ON_THE_WAY
  DELIVERED
  CANCELLED
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
}
```

## 4. System Logic & Scaling
- **Pricing Engine**: Distance (km) * Base Rate + Surge multiplier (time of day / weather) + Package Weight.
- **Rider Assignment**: Spatial query using PostGIS or GeoFirestore. Find closest available rider. Broadcast to top 5 closest riders, first to accept gets the order.
- **Offline Capabilities**: Rider app should cache data in case of poor network coverage and sync upon reconnection.
