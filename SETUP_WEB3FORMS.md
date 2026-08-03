# 🚀 SETUP INSTRUCTIONS - Web3Forms Email Integration

## ✅ What's Already Done
I've updated your contact form code to use Web3Forms API. Now you just need to get your API key!

---

## 📝 Step 1: Get Your Web3Forms API Key

### Quick Steps:
1. **Open your browser** and go to: **https://web3forms.com**
2. You'll see a box that says **"Enter your email to get your Access Key"**
3. Type: **ryncstudio@gmail.com**
4. Click **"Create Access Key"** or **"Get Started Free"**
5. **Check your Gmail** (ryncstudio@gmail.com) - you'll receive an email with your Access Key
6. **Copy the Access Key** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

---

## 📝 Step 2: Add the API Key to Your Project

### Create the `.env.local` file:

1. In your project folder: `c:\Users\RamsBP\Desktop\Rync-Studio-V2-main\`
2. Create a new file called: `.env.local`
3. Add this line (replace with your actual key):

```env
VITE_WEB3FORMS_ACCESS_KEY=paste_your_key_here
```

**Example:**
```env
VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

---

## 📝 Step 3: Restart Your Dev Server

If your dev server is running, **restart it** so it picks up the new environment variable:

```powershell
# Stop the current server (Ctrl+C)
# Then start it again:
npm run dev
```

---

## 📝 Step 4: Test It!

1. Open your website in the browser
2. Go to the Contact page
3. Fill out the form with test data
4. Click "Send Message"
5. **Check your Gmail** (ryncstudio@gmail.com) - you should receive the email within seconds!

---

## ✅ What to Expect

When someone submits the form, you'll receive an email like this:

**To:** ryncstudio@gmail.com  
**From:** RYNC Studio Website (via Web3Forms)  
**Subject:** New Web Development Inquiry from [Name]  
**Body:**
```
Name: John Doe
Email: john@example.com

Project Type: Web Development

Message:
I'm interested in building a website...
```

You can **reply directly** to these emails!

---

## 🔒 Security Note

- The `.env.local` file is already protected by `.gitignore` (won't be committed to GitHub)
- Your API key is safe to use client-side (Web3Forms is designed for this)
- Never share your API key publicly

---

## ❓ Need Help?

If you have any issues, just let me know and I'll help troubleshoot!
