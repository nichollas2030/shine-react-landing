import type { Config } from "tailwindcss";

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
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// TC Shine Brand Colors
				'tc-primary': {
					50: 'hsl(214 100% 97%)',
					100: 'hsl(214 95% 93%)', 
					200: 'hsl(214 90% 85%)',
					300: 'hsl(214 85% 75%)',
					400: 'hsl(214 88% 60%)',
					500: 'hsl(var(--tc-primary))',      // Main brand blue
					600: 'hsl(214 95% 40%)',
					700: 'hsl(214 100% 35%)',
					800: 'hsl(var(--tc-primary-dark))',
					900: 'hsl(214 100% 15%)',
				},
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
				
				// System colors
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
			fontFamily: {
				'heading': ['Montserrat', 'system-ui', 'sans-serif'],
				'body': ['Open Sans', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-primary': 'var(--tc-gradient-primary)',
				'gradient-whatsapp': 'var(--tc-gradient-whatsapp)',
				'gradient-hero': 'var(--tc-gradient-hero)',
			},
			boxShadow: {
				'tc-sm': 'var(--tc-shadow-sm)',
				'tc-md': 'var(--tc-shadow-md)', 
				'tc-lg': 'var(--tc-shadow-lg)',
				'tc-xl': 'var(--tc-shadow-xl)',
				'tc-glow': 'var(--tc-shadow-glow)',
			},
			transitionDuration: {
				'tc-fast': 'var(--tc-transition-fast)',
				'tc-base': 'var(--tc-transition-base)',
				'tc-slow': 'var(--tc-transition-slow)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'pulse-whatsapp': 'pulse-whatsapp 2s infinite',
				'slide-in': 'slide-in 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
