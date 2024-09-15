# FE-GlowUp

## Project structure

Reusable UI components based on the [Atomic design](https://atomicdesign.bradfrost.com/chapter-2/)

Note: In the below description of the project structure, there is no a `pages` directory. However, we still have and apply `pages` of atomic design in our project.
Because the expo-router navigates based on the file under the app directory, the `pages` of atomic design will be files that are represented for `pages` under `app` folder.
 https://atomicdesign.bradfrost.com/chapter-2/#pages

```
├── app/
│   ├── GlowUp/   
│   │   ├── index.tsx
│   └── index.tsx
├── components/          # Reusable UI components  
│   ├── templates/   
│   ├── organisms/   
│   ├── molecules/   
│   ├── atoms/   
├── hooks
│   ├── useDevice.ts
├── features
│   ├── deviceSlice.ts
│
│── assets/                  # Images, fonts, and other static assets
│
│── constants/               # constant values
```
