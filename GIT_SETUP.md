# Git Setup & GitHub Deployment - Quick Start

## 🚀 Let's Get Your Site on GitHub!

Follow these steps exactly. I'll guide you through each one.

---

## Step 1: Create GitHub Repository (2 minutes)

1. **Go to GitHub:** https://github.com/new

2. **Fill in the details:**
   - **Repository name:** `cowafrica-website`
   - **Description:** `Official COWAfrica website with Firebase application system`
   - **Visibility:** Choose **Private** (recommended)
   - **DON'T check** "Add a README file"
   - **DON'T check** "Add .gitignore"

3. **Click "Create repository"**

4. **STOP!** Don't follow GitHub's instructions yet. Come back here.

---

## Step 2: Initialize Git Locally (3 minutes)

Copy and paste these commands one by one into PowerShell:

```powershell
# Navigate to your project
cd "d:\New folder (2)\public_html"

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: COWAfrica website with Firebase application system"

# Rename branch to main
git branch -M main
```

✅ **Git is now initialized!**

---

## Step 3: Connect to GitHub

**IMPORTANT:** Replace `your-github-username` with your actual GitHub username!

```powershell
# Add GitHub as remote
git remote add origin https://github.com/your-github-username/cowafrica-website.git

# Push code to GitHub
git push -u origin main
```

You'll be prompted for:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your password)

### 🔑 How to get Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Classic"
3. Give it a name: `COWAfrica Deployment`
4. Select scopes: Check **"repo"**
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password

✅ **Code is now on GitHub!**

---

## Step 4: Set Up cPanel Auto-Deploy (5 minutes)

1. **Login to your cPanel**

2. **Scroll down to "Files" section**

3. **Click "Git Version Control"**

4. **Click "Create" button**

5. **Fill in these details:**

   **Clone a Repository:** Check ✓
   
   **Clone URL:**
   ```
   https://github.com/your-github-username/cowafrica-website.git
   ```
   
   **Repository Path:**
   ```
   /home/YOUR_CPANEL_USERNAME/public_html
   ```
   (Replace YOUR_CPANEL_USERNAME with your actual cPanel username)
   
   **Repository Name:**
   ```
   cowafrica-website
   ```

6. **Click "Create"**

---

### If Your Repo is Private:

You'll need to add an SSH key:

1. cPanel will show you an **SSH Public Key**
2. **Copy the entire key**
3. Go to GitHub: https://github.com/settings/keys
4. Click **"New SSH key"**
5. Title: `cPanel - COWAfrica`
6. Paste the key
7. Click **"Add SSH key"**

---

## Step 5: Deploy Your Site! (1 minute)

1. **In cPanel Git Version Control**, your repo should now be listed

2. **Click "Manage"** button next to your repo

3. **Click "Pull or Deploy" tab**

4. **Click "Update from Remote" button**

5. **Wait for it to complete** (should show green success message)

🎉 **YOUR SITE IS NOW LIVE!**

---

## 🎯 Future Updates - Simple 3-Step Process

Whenever you make changes:

### 1. Save and commit locally:
```powershell
cd "d:\New folder (2)\public_html"
git add .
git commit -m "Describe what you changed"
git push
```

### 2. Deploy to live site:
- Login to cPanel
- Git Version Control → Manage
- Click "Update from Remote"

### 3. Done! ✅

---

## ⚠️ Important: Config Files

Your API keys are NOT in Git (for security). After first deployment:

1. **Go to cPanel File Manager**
2. **Navigate to `/public_html/admin/`**
3. **Create these files manually:**
   - `firebase-config.js` (copy from your local file)
   - `resend-email.js` (copy from your local file)

Or use the template files as guides!

---

## 🆘 Troubleshooting

**Problem:** Git push asks for password
**Solution:** Use Personal Access Token, not your GitHub password

**Problem:** cPanel can't clone repo
**Solution:** Add SSH key (see Step 4)

**Problem:** Site showing old version
**Solution:** Click "Update from Remote" in cPanel

**Problem:** Admin login not working on live site
**Solution:** Copy `firebase-config.js` and `resend-email.js` to server

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Initialized Git locally
- [ ] Pushed code to GitHub
- [ ] Set up cPanel Git deployment
- [ ] Deployed site successfully
- [ ] Copied config files to server
- [ ] Tested site is working

---

**Need help? Check the full [DEPLOYMENT.md](DEPLOYMENT.md) guide!**
