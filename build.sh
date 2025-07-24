#!/bin/bash

# 🚀 NETLIFY BUILD SCRIPT - Build robusto para deploy
set -e

echo "🔧 Installing dependencies..."
npm ci --include=dev

echo "🏗️ Building project..."
npm run build

echo "✅ Build completed successfully!"

# Verificar se o dist foi criado
if [ ! -d "dist" ]; then
  echo "❌ Error: dist directory not found!"
  exit 1
fi

echo "📦 Build artifacts:"
ls -la dist/
