# GitHub Pages pe Live Kaise Karein - Step by Step Guide

## PEHLE EK BAAR BUILD KARO
```bash
cd Agency-Portfolio
npm install
npm run build
```

---

## STEP 1: GitHub Account Pe Jao
https://github.com pe jao aur login karo

---

## STEP 2: Naya Repository Banao
1. "+" button pe click karo
2. "New repository" select karo
3. Repository name daalo (example: `my-agency-website`)
4. "Public" select karo
5. "Create repository" pe click karo

---

## STEP 3: Code Upload Karo

### Method A: GitHub Desktop (Aasan hai)
1. GitHub Desktop download karo: https://desktop.github.com
2. "Clone a repository" pe click karo
3. Apna repo select karo
4. Saari files copy karo folder mein
5. "Commit" pe click karo
6. "Push origin" pe click karo

### Method B: Git Command Line
```bash
cd Agency-Portfolio
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

---

## STEP 4: GitHub Pages Enable Karo

1. Repository khole GitHub pe
2. **Settings** pe click karo (upar)
3. Left sidebar mein **Pages** pe click karo
4. Source mein **"GitHub Actions"** select karo
5. Save karo

---

## STEP 5: Wait Karo (2-5 Minute)

Thoda wait karo... Build hoga automatically.

---

## STEP 6: Live Website Dekho!

Website live ho jayegi:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

Example:
```
https://rahul123.github.io/my-agency-website/
```

Ye link users ko do - wo directly website dekhenge!

---

## IMPORTANT NOTES

### Repository Name Kya Rakho?
- Repo name = website ka last URL part
- Example: Repo name `fitfocushub` = URL `https://username.github.io/fitfocushub/`

### Base Path Kaise Set Kare?
`vite.config.js` mein:
```js
base: '/YOUR-REPO-NAME/'
```

### Media Files (Images/Videos)
- Small images (< 100MB): GitHub pe directly upload karo
- Large videos: YouTube/Vimeo pe upload karo, URL JSON mein daalo

---

## PROBLEM AAYE TOH

### 404 Error Aa Raha Hai?
Check karo `vite.config.js` mein `base` sahi hai ya nahi.

### Build Fail Ho Raha Hai?
```bash
npm install
npm run build
```
Pehle local pe test karo.

### CSS/Images Load Nahi Ho Rahe?
`base` path sahi hai ya nahi check karo.

---

## QUICK SUMMARY

| Step | Kya Karna Hai |
|------|---------------|
| 1 | GitHub pe repo banao |
| 2 | Code upload karo |
| 3 | Settings > Pages > GitHub Actions select karo |
| 4 | 2-5 minute wait karo |
| 5 | Live URL mil jayega! |
