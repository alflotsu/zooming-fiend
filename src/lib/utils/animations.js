import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { browser } from '$app/environment';

if (browser) {
	gsap.registerPlugin(ScrollTrigger);
}

// Animation configuration
export const animationConfig = {
	// Check for reduced motion preference
	get prefersReducedMotion() {
		if (!browser) return false;
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	},
	
	// Default durations and easings
	durations: {
		fast: 0.3,
		normal: 0.6,
		slow: 0.8,
		verySlow: 1.2
	},
	
	easings: {
		smooth: 'power2.out',
		bounce: 'back.out(1.2)',
		elastic: 'elastic.out(1, 0.3)',
		strong: 'power3.out'
	},
	
	// Enable/disable specific animation types
	enabled: {
		hero: true,
		scroll: true,
		hover: true,
		parallax: true,
		microinteractions: true
	}
};

// Hero animations with reduced motion support
export function createHeroAnimations() {
	if (!browser || animationConfig.prefersReducedMotion || !animationConfig.enabled.hero) {
		// Just ensure elements are visible if animations are disabled
		gsap.set(['.hero-badge', '.hero-title', '.hero-description', '.hero-buttons', '.hero-badges'], {
			opacity: 1,
			y: 0,
			scale: 1
		});
		return;
	}
	
	const tl = gsap.timeline();
	
	tl.fromTo('.hero-badge', 
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, duration: animationConfig.durations.normal, ease: animationConfig.easings.smooth }
	)
	.fromTo('.hero-title', 
		{ opacity: 0, y: 30 },
		{ opacity: 1, y: 0, duration: animationConfig.durations.slow, ease: animationConfig.easings.smooth },
		'-=0.4'
	)
	.fromTo('.hero-description', 
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, duration: animationConfig.durations.normal, ease: animationConfig.easings.smooth },
		'-=0.4'
	)
	.fromTo('.hero-buttons', 
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, duration: animationConfig.durations.normal, ease: animationConfig.easings.smooth },
		'-=0.3'
	)
	.fromTo('.hero-badges', 
		{ opacity: 0, scale: 0.9 },
		{ opacity: 1, scale: 1, duration: animationConfig.durations.slow, ease: animationConfig.easings.bounce },
		'-=0.2'
	);
	
	return tl;
}

// Scroll-triggered animations
export function createScrollAnimations() {
	if (!browser || animationConfig.prefersReducedMotion || !animationConfig.enabled.scroll) {
		// Ensure visibility without animations
		gsap.set(['.stat-number', '.feature-card', '.step-item'], {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			rotateX: 0
		});
		return;
	}
	
	// Stats animation
	gsap.fromTo('.stat-number', 
		{ opacity: 0, scale: 0.5 },
		{ 
			opacity: 1, 
			scale: 1, 
			duration: animationConfig.durations.slow, 
			ease: animationConfig.easings.bounce,
			stagger: 0.1,
			scrollTrigger: {
				trigger: '.stats-section',
				start: 'top 80%'
			}
		}
	);
	
	// Feature cards animation
	gsap.fromTo('.feature-card', 
		{ opacity: 0, y: 50, rotateX: 15 },
		{ 
			opacity: 1, 
			y: 0, 
			rotateX: 0,
			duration: animationConfig.durations.slow, 
			ease: animationConfig.easings.smooth,
			stagger: 0.15,
			scrollTrigger: {
				trigger: '.features-grid',
				start: 'top 80%'
			}
		}
	);
	
	// Steps animation
	gsap.fromTo('.step-item', 
		{ opacity: 0, x: -30 },
		{ 
			opacity: 1, 
			x: 0,
			duration: animationConfig.durations.normal, 
			ease: animationConfig.easings.smooth,
			stagger: 0.2,
			scrollTrigger: {
				trigger: '.steps-grid',
				start: 'top 80%'
			}
		}
	);
}

// Hover interactions
export function createHoverAnimations() {
	if (!browser || animationConfig.prefersReducedMotion || !animationConfig.enabled.hover) {
		return;
	}
	
	document.querySelectorAll('.feature-card').forEach(card => {
		card.addEventListener('mouseenter', () => {
			gsap.to(card, { 
				y: -5, 
				scale: 1.02, 
				duration: animationConfig.durations.fast, 
				ease: animationConfig.easings.smooth 
			});
		});
		
		card.addEventListener('mouseleave', () => {
			gsap.to(card, { 
				y: 0, 
				scale: 1, 
				duration: animationConfig.durations.fast, 
				ease: animationConfig.easings.smooth 
			});
		});
	});
}

// Parallax effects
export function createParallaxEffects() {
	if (!browser || animationConfig.prefersReducedMotion || !animationConfig.enabled.parallax) {
		return;
	}
	
	// Floating icons
	document.querySelectorAll('.hero-badges img, .stat-number').forEach((element, index) => {
		gsap.to(element, {
			y: -10,
			rotation: index % 2 === 0 ? 1 : -1,
			duration: 3 + (index * 0.5),
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: index * 0.2
		});
	});
	
	// Background parallax on scroll
	gsap.to('.hero-bg', {
		y: -50,
		scrollTrigger: {
			trigger: '.hero-bg',
			start: 'top bottom',
			end: 'bottom top',
			scrub: true
		}
	});
}

// Button ripple effects
export function createButtonRipples() {
	if (!browser || animationConfig.prefersReducedMotion || !animationConfig.enabled.microinteractions) {
		return;
	}
	
	document.querySelectorAll('button, .btn-ripple').forEach(button => {
		button.addEventListener('click', (e) => {
			const ripple = document.createElement('div');
			const rect = button.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			
			ripple.style.cssText = `
				position: absolute;
				width: ${size}px;
				height: ${size}px;
				left: ${x}px;
				top: ${y}px;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 50%;
				pointer-events: none;
				z-index: 1;
				transform: scale(0);
			`;
			
			button.style.position = 'relative';
			button.style.overflow = 'hidden';
			button.appendChild(ripple);
			
			gsap.to(ripple, {
				scale: 2,
				opacity: 0,
				duration: 0.6,
				ease: 'power2.out',
				onComplete: () => ripple.remove()
			});
		});
	});
}

// Initialize all animations
export function initializeAnimations() {
	if (!browser) return;
	
	// Add reduced motion detection
	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	mediaQuery.addListener(() => {
		// Refresh ScrollTrigger when preference changes
		ScrollTrigger.refresh();
	});
	
	// Initialize animations
	createHeroAnimations();
	createScrollAnimations();
	createHoverAnimations();
	createParallaxEffects();
	createButtonRipples();
}
