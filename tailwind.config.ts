
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                teal: {
                    50: '#e6f7f7',
                    100: '#ccefef',
                    200: '#99dfdf',
                    300: '#66cfcf',
                    400: '#33bfbf',
                    500: '#00afaf',
                    600: '#008c8c',
                    700: '#006969',
                    800: '#004646',
                    900: '#002323',
                },
                blue: {
                    50: '#e6f0fa',
                    100: '#cce0f5',
                    200: '#99c2eb',
                    300: '#66a3e0',
                    400: '#3385d6',
                    500: '#0066cc',
                    600: '#0052a3',
                    700: '#003d7a',
                    800: '#002952',
                    900: '#001429',
                },
                accent: {
                    orange: '#FF6B35',
                    purple: '#7A28CB',
                    teal: '#0EA5E9',
                }
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'typing': {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' }
                },
                'blink': {
                    '0%, 100%': { borderColor: 'transparent' },
                    '50%': { borderColor: 'currentColor' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' }
                },
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'counter': {
                    '0%': { content: "'0%'" },
                    '10%': { content: "'10%'" },
                    '20%': { content: "'20%'" },
                    '30%': { content: "'30%'" },
                    '40%': { content: "'40%'" },
                    '50%': { content: "'50%'" },
                    '60%': { content: "'60%'" },
                    '70%': { content: "'70%'" },
                    '80%': { content: "'80%'" },
                    '90%': { content: "'90%'" },
                    '100%': { content: "'100%'" }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'fade-in-slow': 'fade-in 1s ease-out',
                'fade-in-right': 'fade-in-right 0.6s ease-out',
                'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
                'pulse-slow': 'pulse-slow 3s infinite',
                'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
                'counter': 'counter 2s linear forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
