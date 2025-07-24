// 🚀 LIGHTHOUSE OPTIMIZATION + 🔒 SECURITY: Service Worker para cache e performance
const CACHE_NAME = 'tc-shine-v1';
const STATIC_CACHE_NAME = 'tc-shine-static-v1';
const FONT_CACHE_NAME = 'tc-shine-fonts-v1';

// 🔒 SECURITY: Origens permitidas
const ALLOWED_ORIGINS = [
  'https://cleaningserviceladingpage.netlify.app',
  'https://tc-shine-cleaning.netlify.app',
  self.location.origin
];

// 🔒 SECURITY: URLs permitidas para cache
const ALLOWED_CACHE_URLS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

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

// � SECURITY: Validar origem da request
function isAllowedOrigin(url) {
  try {
    const requestUrl = new URL(url);
    return ALLOWED_ORIGINS.some(origin => 
      requestUrl.origin === origin || 
      ALLOWED_CACHE_URLS.some(allowed => requestUrl.origin === allowed)
    );
  } catch (e) {
    console.error('🔒 SW Security: Invalid URL', url);
    return false;
  }
}

// 🔒 SECURITY: Sanitizar cache key
function sanitizeCacheKey(request) {
  const url = new URL(request.url);
  // Remove query parameters que podem conter dados sensíveis
  url.search = '';
  url.hash = '';
  return url.toString();
}

// Install Event - Cache recursos críticos
self.addEventListener('install', (event) => {
  // 🔒 SECURITY: Não loggar informações sensíveis em produção
  if (self.location.hostname === 'localhost') {
    console.log('Service Worker: Installing...');
  }
  
  event.waitUntil(
    Promise.all([
      // Cache crítico
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_RESOURCES).catch(err => {
          console.error('🔒 SW Security: Failed to cache critical resources', err);
        });
      }),
      
      // Cache estático
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_RESOURCES).catch(err => {
          console.error('🔒 SW Security: Failed to cache static resources', err);
        });
      })
    ])
  );
  
  // 🚀 LIGHTHOUSE: Ativar imediatamente o novo SW
  self.skipWaiting();
});

// Activate Event - Limpar caches antigos
self.addEventListener('activate', (event) => {
  if (self.location.hostname === 'localhost') {
    console.log('Service Worker: Activating...');
  }
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![CACHE_NAME, STATIC_CACHE_NAME, FONT_CACHE_NAME].includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // 🚀 LIGHTHOUSE: Tomar controle imediatamente
  event.waitUntil(self.clients.claim());
});

// Fetch Event - Estratégia de cache segura
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // � SECURITY: Validações de segurança
  if (request.method !== 'GET') return;
  if (!isAllowedOrigin(request.url)) return;
  
  // 🔒 SECURITY: Sanitizar URL para cache
  const sanitizedUrl = sanitizeCacheKey(request);
  
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
