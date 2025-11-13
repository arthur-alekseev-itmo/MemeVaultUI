# Meme Vault MiniApp

Мини-приложение для телеграмма для просмотра и редактирования файлов в проекте MemeVault

[Основной репозиторий: боты, бек, ии](https://github.com/Olimp666/MemeVault)

[Ссылка на wiki: подробное описание и команда](https://cs-uni.ru/index.php?title=MemeVault#.D0.A1.D1.81.D1.8B.D0.BB.D0.BA.D0.B8)

## Возможности

- Просмотр файлов
- Фильтрация файлов по тегу
- Редактирование тегов у отдельного файла
- Удаление файла

## Инструкция по сборке

`git clone https://github.com/arthur-alekseev-itmo/MemeVaultUI.git` - склонировать репозиторий

`cd MemeVaultUI` - перейти в репозиторий

`npm install` - установить все зависимости

`npm run dev` - запусть dev-версию приложения

`npm run dev:https` - запусть dev-версию приложения с https для работы с телеграммом

`npm run build; npm run deploy` - выложить приложение на GH Pages

## Технические особенности

React/TypeScript

Хостинг тут, на Github Pages, отсюда же идет на прод

### Структура файлов

```
src
├── client
│   ├── backendClient.ts
│   └── types.ts
├── components
│   ├── App.tsx / App.css
│   ├── Loading.tsx / Loading.css
│   ├── Meme.tsx / Meme.css
│   ├── MemeBoard.tsx / MemeBoard.css
│   ├── Search.tsx / Search.css
│   ├── i18n.ts
│   ├── locale
│   │   ├── enLocale.json
│   │   └── ruLocale.json
│   └── popups
│       ├── Button.tsx / Button.css
│       ├── DeletePopup.tsx / DeletePopup.css
│       ├── EditPopup.tsx / EditPopup.css
│       └── Popups.css
├── css
│   ├── bem.ts
│   └── classnames.ts
├── helpers
│   └── publicUrl.ts
├── index.css
├── index.tsx
├── init.ts
└── mockEnv.ts
```
