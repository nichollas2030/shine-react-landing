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
                // 🎨 NOVA PALETA PROFISSIONAL - Preto, Branco e Azul Escuro
                
                // Core Brand Colors - Azul Escuro para CTAs
                'tc-primary': {
                    50: '#f0f4f8',   // Azul muito claro
                    100: '#d9e2ec',  // Azul claro
                    200: '#bcccdc',  // Azul suave
                    300: '#9fb3c8',  // Azul médio claro
                    400: '#829ab1',  // Azul médio
                    500: '#2A5B8C',  // Azul Escuro (PRINCIPAL) #2A5B8C
                    600: '#1e3a5f',  // Azul mais escuro
                    700: '#1a2d4a',  // Azul profundo
                    800: '#162238',  // Azul muito escuro
                    900: '#121829',  // Azul máximo
                    DEFAULT: '#2A5B8C', // Azul Escuro
                },
                
                // Texto Principal - Preto
                'tc-text': {
                    50: '#f8f9fa',   // Quase branco
                    100: '#f1f3f4',  // Branco suave
                    200: '#e8eaed',  // Cinza muito claro
                    300: '#dadce0',  // Cinza claro
                    400: '#bdc1c6',  // Cinza médio
                    500: '#9aa0a6',  // Cinza
                    600: '#80868b',  // Cinza escuro
                    700: '#5f6368',  // Cinza mais escuro
                    800: '#3c4043',  // Cinza muito escuro
                    900: '#000000',  // Preto (PRINCIPAL) #000000
                    DEFAULT: '#000000', // Preto
                },
                
                // Background - Branco e Cinzas
                'tc-background': {
                    50: '#FFFFFF',   // Branco Puro (PRINCIPAL) #FFFFFF
                    100: '#FEFEFE',  // Branco quase puro
                    200: '#F5F5F5',  // Cinza Muito Claro (SECUNDÁRIO) #F5F5F5
                    300: '#F0F0F0',  // Cinza claro
                    400: '#E8E8E8',  // Cinza médio claro
                    500: '#E0E0E0',  // Cinza Claro (BORDAS) #E0E0E0
                    600: '#D0D0D0',  // Cinza médio
                    700: '#C0C0C0',  // Cinza escuro
                    800: '#A0A0A0',  // Cinza mais escuro
                    900: '#808080',  // Cinza profundo
                    DEFAULT: '#FFFFFF', // Branco
                },
                
                // Border - Cinza Claro
                'tc-border': {
                    50: '#FAFAFA',   // Quase branco
                    100: '#F5F5F5',  // Cinza muito suave
                    200: '#E0E0E0',  // Cinza Claro (PRINCIPAL) #E0E0E0
                    300: '#D0D0D0',  // Cinza médio
                    400: '#C0C0C0',  // Cinza
                    500: '#A0A0A0',  // Cinza escuro
                    600: '#808080',  // Cinza mais escuro
                    700: '#606060',  // Cinza profundo
                    800: '#404040',  // Cinza muito escuro
                    900: '#202020',  // Quase preto
                    DEFAULT: '#E0E0E0', // Cinza Claro
                },
                
                // Secondary - Manter compatibilidade (mapeado para nova paleta)
                'tc-secondary': {
                    50: '#F5F5F5',   // Cinza muito claro
                    100: '#F0F0F0',  // Cinza claro
                    200: '#E8E8E8',  // Cinza suave
                    300: '#E0E0E0',  // Cinza médio
                    400: '#D0D0D0',  // Cinza
                    500: '#C0C0C0',  // Cinza escuro
                    600: '#A0A0A0',  // Cinza mais escuro
                    700: '#808080',  // Cinza profundo
                    800: '#606060',  // Cinza muito escuro
                    900: '#404040',  // Quase preto
                    DEFAULT: '#F5F5F5', // Cinza muito claro
                },
                
                // Accent - Azul escuro para destaques
                'tc-accent': {
                    50: '#f0f4f8',   // Azul muito claro
                    100: '#d9e2ec',  // Azul claro
                    200: '#bcccdc',  // Azul suave
                    300: '#9fb3c8',  // Azul médio claro
                    400: '#829ab1',  // Azul médio
                    500: '#2A5B8C',  // Azul Escuro (PRINCIPAL) #2A5B8C
                    600: '#1e3a5f',  // Azul mais escuro
                    700: '#1a2d4a',  // Azul profundo
                    800: '#162238',  // Azul muito escuro
                    900: '#121829',  // Azul máximo
                    DEFAULT: '#2A5B8C', // Azul Escuro
                },				// Manter compatibilidade com sistema antigo
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
