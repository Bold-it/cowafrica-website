# COWAfrica Website

Official website for the Center for One Welfare - Africa (COWAfrica), promoting One Health principles across Africa.

## 🌍 About

COWAfrica is dedicated to advancing human health, animal welfare, and environmental conservation through the One Health approach.

## 🚀 Features

- **Student Intern & Ambassador Application System**
  - Firebase Firestore database for real-time applications
  - Secure admin panel with dashboard
  - Automated email confirmations via Resend API
  - Application status tracking

- **Responsive Design**
  - Mobile-friendly navigation
  - Modern UI/UX

- **Content Management**
  - Event galleries
  - News updates
  - Team profiles
  - Partner information

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Database:** Firebase Firestore
- **Email:** Resend API
- **Hosting:** cPanel with Git deployment

## 📁 Project Structure

```
public_html/
├── admin/                    # Admin panel
│   ├── login.html           # Admin login
│   ├── applications.html    # Application dashboard
│   ├── firebase-config.js   # Firebase config (gitignored)
│   ├── resend-email.js      # Email integration (gitignored)
│   └── form-submit.js       # Form handler
├── getinvolved/             # Get Involved section
│   └── student-interns.html # Application form
├── about/                   # About pages
├── whatwedo/               # What We Do section
├── events/                 # Events & News
├── media/                  # Media resources
├── support/                # Support pages
└── index.html              # Homepage
```

## 🔐 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cowafrica.git
cd cowafrica
```

### 2. Configure Firebase

1. Copy the template config:
   ```bash
   cp admin/firebase-config.template.js admin/firebase-config.js
   ```

2. Edit `admin/firebase-config.js` with your Firebase credentials

3. Set your admin secret code

### 3. Configure Resend API

Edit `admin/resend-email.js` and add your Resend API key.

### 4. Deploy to cPanel

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 🔑 Admin Access

- **Login:** `yoursite.com/admin/login.html`
- **Dashboard:** View and manage applications
- **Features:**
  - Search and filter applications
  - Update application status
  - Send confirmation emails

## 📧 Email Configuration

The system uses Resend API for sending confirmation emails. You'll need:
- Resend account
- Verified domain (optional but recommended)
- API key

## 🤝 Contributing

This is a private repository for COWAfrica team members.

## 📄 License

© 2025 Center for One Welfare - Africa. All rights reserved.

## 📞 Contact

- **Website:** cowafrica.org
- **Email:** info@cowafrica.org

---

**Note:** This repository contains sensitive configuration files that are gitignored. Team members must configure their own Firebase and Resend credentials.
