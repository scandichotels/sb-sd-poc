# sb-sd-poc

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Create Next.js and TypeScript project:
```
npx create-next-app --typescript
```

## Install Material UI:
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

## Install Material UI date and time picker:
```
`npm install @date-io/date-fns` or `npm install date-fns @types/date-fns`
npm install @mui/x-date-pickers
```

## Install and run Storybook:
```
npx sb init
npm run storybook
```

## Install Style Dictionary:
```
npm install -D style-dictionary
mkdir style-dictionary
cd style-dictionary
style-dictionary init basic (create starter code)
style-dictionary build
```

## Install Token Transformer:
```
npm install -D token-transformer
```

## Install and run Chromatic:
```
npm install --save-dev chromatic 
npx chromatic --project-token= chromatic_project_token
npx chromatic --project-token= chromatic_project_token --force-rebuild
```

## Connect Figma tokens plugin with a GitHub repo:
- Create GitHub token

<div align="center">
  <img width="900" alt="Screenshot 2022-06-20 at 16 33 32" src="https://user-images.githubusercontent.com/43675670/174627098-40e22779-4d22-41fe-8dbd-c2934f9a6439.png">
</div>

- Add the new created GitHub token to Figma tokens plugin

<div align="center">
  <img width="400" alt="Screenshot 2022-06-20 at 16 51 11" src="https://user-images.githubusercontent.com/43675670/174629173-474117de-7a4d-4d26-b13a-189b6894823b.png">
</div>

<div align="center">
  <img width="400" alt="Screenshot 2022-06-20 at 16 53 42" src="https://user-images.githubusercontent.com/43675670/174629189-04d1f0f3-06eb-4d6d-9e5e-22ff7c2b632c.png">
</div>

- Change or create a token in Figma and push to your GitHub repo

<div align="center">
  <img width="400" alt="Screenshot 2022-06-20 at 16 59 43" src="https://user-images.githubusercontent.com/43675670/174630374-d76d2553-2449-424c-8b0b-ce078265ad67.png">
</div>

<div align="center">
  <img width="400" alt="Screenshot 2022-06-20 at 17 01 57" src="https://user-images.githubusercontent.com/43675670/174630918-78a35fe9-7f55-4ec3-8858-a73924a23fde.png">
</div>
