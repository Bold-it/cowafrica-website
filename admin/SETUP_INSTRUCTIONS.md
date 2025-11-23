# Firebase Application System - Setup Instructions

## 🎉 Almost Ready!

Your Firebase application management system has been created! Follow these final steps to get it running.

---

## Step 1: Set Your Admin Secret Code

1. Open `admin/firebase-config.js`
2. Find line 15: `const ADMIN_SECRET = "YOUR_ADMIN_SECRET_HERE";`
3. Replace `YOUR_ADMIN_SECRET_HERE` with a strong password (e.g., `COWAfrica2025!Admin`)
4. **Save the file**

Example:
```javascript
const ADMIN_SECRET = "COWAfrica2025!Admin";
```

---

## Step 2: Get Your Resend API Key

1. Go to [Resend.com](https://resend.com) and sign up/login
2. Click **"API Keys"** in the left menu
3. Click **"Create API Key"**
4. Name it "COWAfrica Applications"
5. Copy the API key (starts with `re_...`)
6. Open `admin/resend-email.js`
7. Replace `YOUR_RESEND_API_KEY` on line 2 with your actual API key
8. **Save the file**

---

## Step 3: Update the Application Form

You need to add a few lines to `getinvolved/student-interns.html`:

### Add Firebase SDK (before closing `</head>` tag, around line 213):

```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
<script src="../admin/firebase-config.js"></script>
<script src="../admin/form-submit.js"></script>
```

### Update the form tag (around line 414):

**Change from:**
```html
<form action="https://formspree.io/f/mgvkrnyw" method="POST">
```

**Change to:**
```html
<form id="applicationForm">
```

---

## Step 4: Upload All Files

Upload the following files to your web server:

**New Files:**
- `admin/firebase-config.js` ✅
- `admin/resend-email.js` ✅
- `admin/form-submit.js` ✅
- `admin/login.html` ✅
- `admin/applications.html` ✅

**Modified Files:**
- `getinvolved/student-interns.html` (after Step 3 above)

---

## Step 5: Test Everything!

### Test the Application Form:
1. Go to your website: `yoursite.com/getinvolved/student-interns.html`
2. Fill out the form
3. Submit it
4. You should see a success message
5. Check Firebase Console → Firestore to see the submitted data

### Test the Admin Panel:
1. Go to: `yoursite.com/admin/login.html`
2. Enter your admin secret code (from Step 1)
3. You should see the applications dashboard
4. Try viewing an application
5. Try sending a confirmation email (requires Resend API key)

---

## 🔒 Security Notes

> **IMPORTANT:** Keep these secure:
> - Your admin secret code
> - Your Resend API key
> - Never share these publicly or commit to GitHub

---

## ❓ Troubleshooting

**Form not submitting?**
- Check browser console for errors (F12)
- Verify Firebase config is correct
- Make sure you uploaded all files

**Can't login to admin panel?**
- Double-check your admin secret code in `firebase-config.js`
- Clear browser cache and try again

**Emails not sending?**
- Verify your Resend API key is correct
- Check Resend.com dashboard for errors
- Emails might go to spam folder

---

## 📧 Need Help?

If you encounter any issues, check:
1. Browser console (F12 → Console tab)
2. Firebase Console → Firestore for submitted data
3. Resend dashboard for email delivery status

---

## ✅ You're All Set!

Once everything is configured, you'll have:
- ✅ Real-time application submissions to Firebase
- ✅ Secure admin panel to view applications
- ✅ Email confirmations to applicants
- ✅ Status tracking (Pending/Reviewed/Accepted/Rejected)
