/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* gold */
        background: "var(--color-background)", /* warm-pearl */
        foreground: "var(--color-foreground)", /* charcoal-dark */
        primary: {
          DEFAULT: "var(--color-primary)", /* sophisticated-charcoal */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* cultural-earth */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* helpful-earth-concern */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* luxury-gold */
          foreground: "var(--color-accent-foreground)", /* sophisticated-charcoal */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* charcoal-dark */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* charcoal-dark */
        },
        success: {
          DEFAULT: "var(--color-success)", /* natural-wellness */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* gentle-earth-urgency */
          foreground: "var(--color-warning-foreground)", /* sophisticated-charcoal */
        },
        error: {
          DEFAULT: "var(--color-error)", /* helpful-earth-concern */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* sage-tranquility */
          foreground: "var(--color-surface-foreground)", /* white */
        },
        'text-primary': "var(--color-text-primary)", /* charcoal-dark */
        'text-secondary': "var(--color-text-secondary)", /* gray-500 */
        cta: {
          DEFAULT: "var(--color-cta)", /* deep-gold */
          foreground: "var(--color-cta-foreground)", /* white */
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-2': ['1.5rem', { lineHeight: '1.3' }],
        'heading-3': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 13px */
        'md': 'var(--spacing-md)', /* 21px */
        'lg': 'var(--spacing-lg)', /* 34px */
        'xl': 'var(--spacing-xl)', /* 55px */
      },
      borderRadius: {
        'sm': 'var(--radius-sm)', /* 4px */
        'md': 'var(--radius-md)', /* 8px */
        'lg': 'var(--radius-lg)', /* 12px */
        'xl': 'var(--radius-xl)', /* 20px */
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'cultural': 'var(--shadow-cultural)',
        'warm': 'var(--shadow-warm)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "pulse-gentle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      backdropBlur: {
        'cultural': '5px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}