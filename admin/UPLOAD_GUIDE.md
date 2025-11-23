# Quick Upload Guide for FileZilla & cPanel

## 📁 Files to Upload

You need to upload these **5 NEW files** to your live server:

### New Admin Folder (upload entire folder):
```
admin/
├── firebase-config.js
├── login.html
├── applications.html
├── resend-email.js
├── form-submit.js
└── SETUP_INSTRUCTIONS.md
```

### Modified File:
```
getinvolved/student-interns.html
```

---

## 🚀 Method 1: FileZilla (Easiest)

### Step-by-Step:

1. **Open FileZilla** and connect to your server

2. **Left panel** (your computer):
   - Navigate to: `D:\New folder (2)\public_html\`

3. **Right panel** (your server):
   - Navigate to: `/public_html/` (or wherever your website files are)

4. **Upload admin folder:**
   - Find `admin` folder on left
   - Right-click → "Upload"
   - OR just drag and drop to the right panel

5. **Upload modified form:**
   - Find `getinvolved` folder on left
   - Find `student-interns.html` inside it
   - Drag it to the `getinvolved` folder on the right
   - Click "Overwrite" when asked

✅ **Done!** Your files are now live!

---

## 🌐 Method 2: cPanel File Manager

### Step-by-Step:

1. **Login to cPanel** (your hosting control panel)

2. **Click "File Manager"**

3. **Navigate to** `public_html` folder

4. **Create admin folder** (if it doesn't exist):
   - Click "New Folder"
   - Name it: `admin`

5. **Upload files to admin folder:**
   - Open the `admin` folder
   - Click "Upload" button
   - Select all 5 admin files from your computer
   - Wait for upload to complete

6. **Upload student-interns.html:**
   - Navigate to `public_html/getinvolved/`
   - Click "Upload"
   - Select `student-interns.html`
   - Overwrite the existing file

✅ **Done!** Your files are now live!

---

## 🧪 After Upload - Test Your Live Site

### Test Admin Login:
👉 `https://yoursite.com/admin/login.html`
- Enter: `M@br3mp0-@dm1n`

### Test Application Form:
👉 `https://yoursite.com/getinvolved/student-interns.html`
- Fill and submit test application

---

## ⚠️ Troubleshooting Login Issue

If login still doesn't work locally OR live, **check the browser console**:

1. **Open the login page**
2. **Press F12** (opens Developer Tools)
3. **Click "Console" tab**
4. **Try logging in**
5. **Look for RED error messages**

**Common errors:**
- `firebase is not defined` → Firebase scripts didn't load
- `CORS error` → Need to use http:// not file://
- `ADMIN_SECRET is not defined` → Config file didn't load

**Send me a screenshot of any errors you see!**

---

## 🔑 Double-Check Your Secret Code

Your secret in `firebase-config.js` line 17:
```javascript
const ADMIN_SECRET = "M@br3mp0-@dm1n";
```

**Make sure you type EXACTLY:**
```
M@br3mp0-@dm1n
```

(Case-sensitive! Capital M, @ symbol, lowercase letters)

---

## 📝 Quick Checklist

Before contacting support, verify:
- [ ] Uploaded all 5 admin files
- [ ] Uploaded modified student-interns.html
- [ ] Can access login page (no 404 error)
- [ ] Typed secret code exactly right
- [ ] Checked browser console for errors (F12)
- [ ] Tested on live site (not local file://)

---

Need help? Send a screenshot of:
1. FileZilla showing uploaded files
2. Browser console (F12) when trying to login
