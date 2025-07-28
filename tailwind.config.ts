import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		// 🔧 SISTEMA MOBILE-FIRST ROBUSTO - Cobertura total de dispositivos
		screens: {
			'xs': '360px',      // Galaxy Fold, dispositivos ultra-small
			'sm': '480px',      // iPhone SE, dispositivos small
			'md': '768px',      // iPad Mini, tablets portrait
			'lg': '1024px',     // Desktop small, tablets landscape
			'xl': '1280px',     // Desktop medium
			'2xl': '1536px',    // Desktop large
			// Breakpoints auxiliares para casos específicos
			'iPhone': '375px',
			'phablet': '600px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '0.875rem',  // 14px - Para devices 320px+ (safe spacing)
				'xs': '1rem',         // 16px - 360px+ (Galaxy, small phones)
				'sm': '1.25rem',      // 20px - 480px+ (iPhone SE+)
				'md': '2rem',         // 32px - 768px+ (tablets)
				'lg': '2.5rem',       // 40px - 1024px+ (desktop)
				'xl': '3rem',         // 48px - 1280px+ (large desktop)
				'2xl': '4rem',        // 64px - 1536px+ (ultra-wide)
			},
			screens: {
				'sm': '100%',         // Full width até tablet
				'md': '768px',        // Max width tablet
				'lg': '1024px',       // Max width desktop small
				'xl': '1280px',       // Max width desktop medium
				'2xl': '1400px'       // Max width desktop large
			}
		},
		extend: {
			// SISTEMA DE TIPOGRAFIA UNIVERSAL - Fluid Typography Approach
			fontSize: {
				// Micro Devices (320px-374px) - Base readable sizes
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
				'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
				'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
				'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.025em' }],
				'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }],
				'2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.05em' }],
				'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.05em' }],
				'4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.075em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.075em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.1em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.1em' }],
				'8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.125em' }],
				'9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.125em' }],
				
				// Responsive Typography Classes
				'responsive-h1': 'clamp(1.875rem, 4vw, 3.75rem)',  // 30px - 60px
				'responsive-h2': 'clamp(1.5rem, 3vw, 2.25rem)',    // 24px - 36px
				'responsive-h3': 'clamp(1.25rem, 2.5vw, 1.875rem)', // 20px - 30px
				'responsive-body': 'clamp(1rem, 1.5vw, 1.125rem)',  // 16px - 18px
				'responsive-small': 'clamp(0.875rem, 1vw, 1rem)',   // 14px - 16px
			},
			
			// SPACING SYSTEM INTELIGENTE - Universal proportional spacing
			spacing: {
				// Touch Target Optimization - Minimum 44px para touch devices
				'touch': '2.75rem',     // 44px - Minimum touch target
				'touch-lg': '3rem',     // 48px - Comfortable touch target
				'touch-xl': '3.5rem',   // 56px - Large touch target
				
				// Micro spacing (2px-8px) - elementos densamente relacionados
				'0.5': '0.125rem',      // 2px
				'1.5': '0.375rem',      // 6px
				'2.5': '0.625rem',      // 10px
				
				// Viewport-proportional spacing
				'vw-sm': '2vw',         // Small viewport proportional
				'vw-md': '4vw',         // Medium viewport proportional
				'vw-lg': '6vw',         // Large viewport proportional
				
				// Extended spacing scale
				'18': '4.5rem',         // 72px
				'22': '5.5rem',         // 88px
				'26': '6.5rem',         // 104px
				'30': '7.5rem',         // 120px
				'34': '8.5rem',         // 136px
				'38': '9.5rem',         // 152px
			},
			
			colors: {
				// 🎨 NOVA PALETA - Turquesa & Coral System
				'tc-primary': {
					50: '#f0fdfa',       // Turquesa muito claro
					100: '#ccfbf1',      // Turquesa claro
					200: '#99f6e4',      // Turquesa suave
					300: '#5eead4',      // Turquesa médio claro
					400: '#2dd4bf',      // Turquesa médio
					500: '#14b8a6',      // Turquesa (PRINCIPAL) #14b8a6
					600: '#0d9488',      // Turquesa escuro
					700: '#0f766e',      // Turquesa mais escuro
					800: '#115e59',      // Turquesa muito escuro
					900: '#134e4a',      // Turquesa profundo
				},
				'tc-secondary': {
					50: '#FDF8E1',       // Bege Areia (PRINCIPAL) #FDF8E1
					100: '#fef7cd',      // Bege claro
					200: '#fef08a',      // Bege suave
					300: '#fde047',      // Bege médio
					400: '#facc15',      // Bege vibrante
					500: '#eab308',      // Bege forte
					600: '#ca8a04',      // Bege escuro
					700: '#a16207',      // Bege mais escuro
					800: '#854d0e',      // Bege muito escuro
					900: '#713f12',      // Bege profundo
				},
				'tc-accent': {
					50: '#fff7ed',       // Coral muito claro
					100: '#ffedd5',      // Coral claro
					200: '#fed7aa',      // Coral suave
					300: '#fdba74',      // Coral médio
					400: '#fb923c',      // Coral vibrante
					500: '#F97316',      // Coral Vivo (PRINCIPAL) #F97316
					600: '#ea580c',      // Coral escuro
					700: '#c2410c',      // Coral mais escuro
					800: '#9a3412',      // Coral muito escuro
					900: '#7c2d12',      // Coral profundo
				},
				'tc-background': {
					50: '#F7FAFC',       // Branco Neve (PRINCIPAL) #F7FAFC
					100: '#ffffff',      // Branco puro
					200: '#f8fafc',      // Branco suave
					300: '#f1f5f9',      // Branco médio
					400: '#e2e8f0',      // Branco escuro
					500: '#cbd5e1',      // Branco forte
					600: '#94a3b8',      // Branco profundo
					700: '#64748b',      // Branco escuríssimo
					800: '#475569',      // Branco máximo
					900: '#334155',      // Branco extremo
				},
				'tc-text': {
					50: '#f8fafc',       // Azul petróleo muito claro
					100: '#f1f5f9',      // Azul petróleo claro
					200: '#e2e8f0',      // Azul petróleo suave
					300: '#cbd5e1',      // Azul petróleo médio claro
					400: '#94a3b8',      // Azul petróleo médio
					500: '#64748b',      // Azul petróleo forte
					600: '#475569',      // Azul petróleo escuro
					700: '#334155',      // Azul petróleo mais escuro
					800: '#1A202C',      // Azul Petróleo (PRINCIPAL) #1A202C
					900: '#0f172a',      // Azul petróleo profundo
				},
				'tc-border': {
					50: '#f9fafb',       // Cinza gelo muito claro
					100: '#f3f4f6',      // Cinza gelo claro
					200: '#E1E5E9',      // Cinza Gelo (PRINCIPAL) #E1E5E9
					300: '#d1d5db',      // Cinza gelo médio
					400: '#9ca3af',      // Cinza gelo forte
					500: '#6b7280',      // Cinza gelo escuro
					600: '#4b5563',      // Cinza gelo mais escuro
					700: '#374151',      // Cinza gelo muito escuro
					800: '#1f2937',      // Cinza gelo profundo
					900: '#111827',      // Cinza gelo máximo
				},
				
				// Manter compatibilidade com sistema antigo
				'tc-whatsapp': {
					50: 'hsl(142 80% 95%)',
					100: 'hsl(142 75% 90%)',
					200: 'hsl(142 70% 80%)',
					300: 'hsl(142 75% 65%)',
					400: 'hsl(142 75% 55%)',
					500: 'hsl(var(--tc-whatsapp))',     // WhatsApp green
					600: 'hsl(142 75% 38%)',
					700: 'hsl(142 75% 33%)',
					800: 'hsl(142 75% 28%)',
					900: 'hsl(142 75% 23%)',
				},
				'tc-neutral': {
					50: 'hsl(var(--tc-neutral-50))',
					100: 'hsl(var(--tc-neutral-100))',
					200: 'hsl(var(--tc-neutral-200))', 
					300: 'hsl(var(--tc-neutral-300))',
					400: 'hsl(var(--tc-neutral-400))',
					500: 'hsl(var(--tc-neutral-500))',
					600: 'hsl(var(--tc-neutral-600))',
					700: 'hsl(var(--tc-neutral-700))',
					800: 'hsl(var(--tc-neutral-800))',
					900: 'hsl(var(--tc-neutral-900))',
				},
				
				// System colors - shadcn/ui compatibility
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			
			// LAYOUT FLUIDO E ADAPTATIVO - Container Strategy Universal
			maxWidth: {
				'xs': '20rem',      // 320px - ultra-compact
				'sm': '24rem',      // 384px - small mobile
				'md': '28rem',      // 448px - large mobile
				'lg': '32rem',      // 512px - tablet
				'xl': '36rem',      // 576px - small desktop
				'2xl': '42rem',     // 672px - medium desktop
				'3xl': '48rem',     // 768px - large desktop
				'4xl': '56rem',     // 896px - extra large
				'5xl': '64rem',     // 1024px - ultra wide
				'6xl': '72rem',     // 1152px - max content width
				'7xl': '80rem',     // 1280px - ultra-wide comfort
				'screen-xs': '475px',
				'screen-sm': '640px',
				'screen-md': '768px',
				'screen-lg': '1024px',
				'screen-xl': '1280px',
				'screen-2xl': '1536px',
			},
			
			// COMPONENT RESPONSIVITY UNIVERSAL
			aspectRatio: {
				'4/3': '4 / 3',
				'3/2': '3 / 2',
				'5/4': '5 / 4',
				'9/16': '9 / 16',     // Mobile video
				'16/9': '16 / 9',     // Desktop video
				'21/9': '21 / 9',     // Ultra-wide
			},
			
			fontFamily: {
				'heading': ['Montserrat', 'system-ui', 'sans-serif'],
				'body': ['Open Sans', 'system-ui', 'sans-serif'],
			},
			
			// BACKGROUND SYSTEM - Brand consistency universal
			backgroundImage: {
				'gradient-primary': 'var(--tc-gradient-primary)',
				'gradient-whatsapp': 'var(--tc-gradient-whatsapp)',
				'gradient-hero': 'var(--tc-gradient-hero)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			
			// SHADOW SYSTEM - Depth perception universal
			boxShadow: {
				'tc-sm': 'var(--tc-shadow-sm)',
				'tc-md': 'var(--tc-shadow-md)', 
				'tc-lg': 'var(--tc-shadow-lg)',
				'tc-xl': 'var(--tc-shadow-xl)',
				'tc-glow': 'var(--tc-shadow-glow)',
				'touch': '0 2px 8px rgba(0, 0, 0, 0.1)',
				'card-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
				'floating': '0 16px 64px rgba(0, 0, 0, 0.16)',
			},
			
			// TRANSITION SYSTEM - Universal smooth interactions
			transitionDuration: {
				'tc-fast': 'var(--tc-transition-fast)',
				'tc-base': 'var(--tc-transition-base)',
				'tc-slow': 'var(--tc-transition-slow)',
				'50': '50ms',
				'150': '150ms',
				'250': '250ms',
				'350': '350ms',
				'400': '400ms',
				'450': '450ms',
				'600': '600ms',
				'800': '800ms',
				'1200': '1200ms',
			},
			
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'4xl': '2rem',
				'5xl': '2.5rem',
				'6xl': '3rem',
			},
			
			// ANIMATION SYSTEM UNIVERSAL - Smooth interactions para todos os devices
			keyframes: {
				// shadcn/ui animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				// TC Shine Universal Animations
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pulse-whatsapp': {
					'0%, 100%': {
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)'
					},
					'50%': {
						transform: 'scale(1.05)',
						boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-5px)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				// shadcn/ui animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// TC Shine Universal Animations
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.4s ease-out forwards',
				'pulse-whatsapp': 'pulse-whatsapp 2s infinite',
				'slide-in': 'slide-in 0.8s ease-out forwards',
				'bounce-gentle': 'bounce-gentle 2s infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				
				// Performance optimized animations
				'fade-in-fast': 'fade-in-up 0.3s ease-out forwards',
				'scale-in-fast': 'scale-in 0.2s ease-out forwards',
				'slide-in-fast': 'slide-in 0.4s ease-out forwards',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
