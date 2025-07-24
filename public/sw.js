// 🚀 LIGHTHOUSE OPTIMIZATION: Service Worker para cache e performance
const CACHE_NAME = 'tc-shine-v1';
const STATIC_CACHE_NAME = 'tc-shine-static-v1';

// Recursos críticos para cache
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Recursos estáticos para cache
const STATIC_RESOURCES = [
  '/favicon.ico',
  '/robots.txt',
];

// 🚀 LIGHTHOUSE: Cache de fontes do Google
const FONT_CACHE_NAME = 'tc-shine-fonts-v1';
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.gstatic.com',
];

// Install Event - Cache recursos críticos
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache crítico
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Service Worker: Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      }),
      
      // Cache estático
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('Service Worker: Caching static resources');
        return cache.addAll(STATIC_RESOURCES);
      })
    ])
  );
  
  // 🚀 LIGHTHOUSE: Ativar imediatamente o novo SW
  self.skipWaiting();
});

// Activate Event - Limpar caches antigos
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![CACHE_NAME, STATIC_CACHE_NAME, FONT_CACHE_NAME].includes(cacheName)) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // 🚀 LIGHTHOUSE: Tomar controle imediatamente
  event.waitUntil(self.clients.claim());
});

// Fetch Event - Estratégia de cache inteligente
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // 🚀 LIGHTHOUSE: Pular requests não-GET
  if (request.method !== 'GET') return;
  
  // 🚀 LIGHTHOUSE: Cache de fontes do Google (Cache First)
  if (request.url.includes('fonts.googleapis.com') || request.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(FONT_CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(request).then((response) => {
            if (response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          });
        });
      })
    );
    return;
  }
  
  // 🚀 LIGHTHOUSE: Recursos estáticos (Cache First)
  if (request.url.includes('/assets/') || 
      request.url.endsWith('.js') || 
      request.url.endsWith('.css') ||
      request.url.endsWith('.jpg') ||
      request.url.endsWith('.png') ||
      request.url.endsWith('.webp')) {
    
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(STATIC_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }
  
  // 🚀 LIGHTHOUSE: HTML (Network First with fallback)
  if (request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }
  
  // 🚀 LIGHTHOUSE: Outros recursos (Network First)
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});

// 🚀 LIGHTHOUSE: Background Sync para WhatsApp (se disponível)
self.addEventListener('sync', (event) => {
  if (event.tag === 'whatsapp-message') {
    event.waitUntil(
      // Implementar logic de retry para mensagens do WhatsApp se necessário
      Promise.resolve()
    );
  }
});

// 🚀 LIGHTHOUSE: Push notifications (preparado para futuro)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});
