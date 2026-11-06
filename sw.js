// ホーム画面に追加できるようにするための最小限のサービスワーカー（キャッシュはしない）
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
