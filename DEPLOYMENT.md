# Deployment Guide - COWAfrica Website

This guide shows you how to deploy the COWAfrica website using Git and cPanel.

---

## 🎯 Deployment Method: cPanel Git Version Control

This is the **recommended method** - it's simple and built into most cPanel hosting.

---

## 📋 Prerequisites

- [x] GitHub account
- [x] cPanel hosting account
- [x] Git installed on your local machine
- [x] Repository created on GitHub

---

## 🚀 Initial Setup (One-Time)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository:
   - **Name:** `cowafrica-website` (or any name you prefer)
   - **Visibility:** Private (recommended)
   - **DON'T** initialize with README (we already have one)
3. Click **"Create repository"**

### Step 2: Initialize Local Git Repository

Open PowerShell in your project folder and run:

```powershell
cd "d:\New folder (2)\public_html"

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: COWAfrica website with Firebase application system"

# Rename branch to main
git branch -M main

# Add remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/cowafrica-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Set Up cPanel Git Deployment

1. **Login to cPanel**

2. **Find "Git Version Control"** (under Files section)

3. **Click "Create"**

4. **Fill in the details:**
   - **Clone a Repository:** Yes
   - **Clone URL:** `https://github.com/yourusername/cowafrica-website.git`
   - **Repository Path:** `/home/yourusername/public_html`
   - **Repository Name:** `cowafrica-website`

5. **Click "Create"**

6. **If private repo, add SSH key:**
   - cPanel will generate an SSH key
   - Copy the public key
   - Go to GitHub → Settings → SSH and GPG keys
   - Add the key

7. **Pull the code:**
   - Click "Manage" on your repository
   - Click "Pull or Deploy"
   - Click "Update from Remote"

✅ **Your website is now live!**

---

## 🔄 Making Updates (Regular Workflow)

### Method 1: Via Git (Recommended)

1. **Make your changes locally**

2. **Commit and push:**
   ```powershell
   cd "d:\New folder (2)\public_html"
   
   # Check what changed
   git status
   
   # Add all changes
   git add .
   
   # Commit with descriptive message
   git commit -m "Updated application form styling"
   
   # Push to GitHub
   git push
   ```

3. **Deploy to live site:**
   - Login to cPanel
   - Go to Git Version Control
   - Click "Manage" on your repo
   - Click "Pull or Deploy" → "Update from Remote"

✅ **Changes are now live!**

### Method 2: Direct cPanel Edit (For Quick Fixes)

1. Login to cPanel
2. Go to File Manager
3. Edit files directly
4. **Remember:** These changes are NOT in Git - you'll need to pull them or they'll be overwritten on next deploy

---

## 🔐 Handling Sensitive Files

**IMPORTANT:** Your `firebase-config.js` and `resend-email.js` are gitignored!

### When deploying to a new server:

1. **Deploy the code via Git** (as above)

2. **Manually create config files on server:**
   - Go to cPanel File Manager
   - Navigate to `/public_html/admin/`
   - Create `firebase-config.js` and `resend-email.js`
   - Copy content from your local files
   - **OR** use the template files as a guide

### Alternative: Use environment variables (advanced)

You can also store credentials in cPanel environment variables and load them via PHP.

---

## 🧪 Testing Before Going Live

### Test Locally:
```powershell
# Start local server
cd "d:\New folder (2)\public_html"
python -m http.server 8000

# Visit: http://localhost:8000
```

### Test on Live Site:
1. Deploy to a subdomain first (e.g., `test.cowafrica.org`)
2. Test thoroughly
3. Then deploy to main domain

---

## 🆘 Troubleshooting

### Git push rejected?
```powershell
# Pull first, then push
git pull origin main
git push
```

### cPanel can't access private GitHub repo?
- Add cPanel's SSH key to your GitHub account
- Or make repo public (not recommended for sensitive data)

### Files not updating on live site?
- Make sure you clicked "Update from Remote" in cPanel
- Check file permissions (should be 644 for files, 755 for folders)
- Clear browser cache

### Config files missing after deployment?
- Remember: `firebase-config.js` and `resend-email.js` are gitignored
- You must create these manually on the server or use cPanel environment variables

---

## 📝 Best Practices

1. **Always test locally first**
2. **Use descriptive commit messages**
3. **Never commit sensitive data (API keys, passwords)**
4. **Pull before you make changes** (if working in a team)
5. **Create branches for major features**
6. **Keep commits small and focused**

---

## 🎯 Quick Reference Commands

```powershell
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard
```

---

## 🚨 Emergency: Restore Previous Version

If something breaks:

1. **Via cPanel:**
   - Git Version Control → Manage
   - Click "Reset HEAD" to a previous commit

2. **Via Git locally:**
   ```powershell
   # View commit history
   git log --oneline
   
   # Reset to specific commit
   git reset --hard COMMIT_HASH
   
   # Force push (be careful!)
   git push --force
   ```

---

## ✅ Deployment Checklist

Before deploying:
- [ ] All changes committed to Git
- [ ] Tested locally
- [ ] No sensitive data in commits
- [ ] Updated README if needed
- [ ] Config files ready on server

After deploying:
- [ ] Verified site loads correctly
- [ ] Tested application form submission
- [ ] Tested admin login
- [ ] Checked all links work
- [ ] Mobile responsiveness check

---

## 📞 Need Help?

- Check GitHub issues
- Contact team lead
- Review Git documentation: https://git-scm.com/doc

---

**Happy Deploying! 🚀**
