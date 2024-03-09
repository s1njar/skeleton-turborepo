TurboRepo Base
===============

This monorepository is based on turborepo

---

## Table of Contents

- [TurboRepo Base](#turborepo-base)
  - [Table of Contents](#table-of-contents)
  - [1. Prepare your system](#1-prepare-your-system)
    - [1.1 Needed Extensions](#11-needed-extensions)
  - [2. Prepare the Project](#2-prepare-the-project)
    - [2.1 Add .env](#21-add-env)
    - [2.2 Install](#22-install)
  - [3. Scripts](#3-scripts)

---

## 1. Prepare your system

These things make developing with this project easier.

### 1.1 Needed Extensions

- Eslint
- Prettier
- Stylelint

---

## 2. Prepare the Project

### 2.1 Add .env

```bash
cp .env.example .env

cd apps/web && ln -s ../../.env .env && cd ../../
```

### 2.2 Install

```bash
pnpm install
```

## 3. Scripts

| Script                   | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `pnpm dev`               | Start the development Server                         |
| `pnpm build`             | Building a production ready version of monorepo      |
| `pnpm lint`              | Lint the current Typescript code using eslint        |
| `pnpm lint-staged-husky` | Lint the current staged Typescript code using eslint |
| `pnpm test`              | Tests the code                                       |
| `pnpm clean`             | Cleans the root and workspace projects node modules  |
| `pnpm format:lint`       | Checks the linting of the project                    |
| `pnpm format:fix`        | Fixes automatically linting problems                 |
| `pnpm cache:turbo:clear` | Deletes the turbo cache                              |
| `pnpm deps:update`       | Updates all project dependencies                     |
