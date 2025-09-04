<script>
	import { onMount } from 'svelte';
	import { themeStore } from '$lib/stores/ThemeStore';

	let canvas;
	let ctx;
	let animationId;
	let bubbles = [];
	let isDark = false;

	// Bubble configuration
	const BUBBLE_COUNT = 15;
	const MIN_RADIUS = 20;
	const MAX_RADIUS = 80;
	const MIN_SPEED = 0.5;
	const MAX_SPEED = 2;

	class Bubble {
		constructor(x, y, radius, vx, vy, color, opacity) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.vx = vx;
			this.vy = vy;
			this.color = color;
			this.opacity = opacity;
			this.originalOpacity = opacity;
		}

		update(width, height) {
			// Update position
			this.x += this.vx;
			this.y += this.vy;

			// Bounce off walls
			if (this.x - this.radius <= 0 || this.x + this.radius >= width) {
				this.vx *= -0.8; // Add some dampening
				this.x = Math.max(this.radius, Math.min(width - this.radius, this.x));
			}
			if (this.y - this.radius <= 0 || this.y + this.radius >= height) {
				this.vy *= -0.8;
				this.y = Math.max(this.radius, Math.min(height - this.radius, this.y));
			}

			// Add subtle floating effect
			this.vy += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.02;
			this.vx += Math.cos(Date.now() * 0.001 + this.y * 0.01) * 0.01;

			// Limit speed
			const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
			if (speed > MAX_SPEED) {
				this.vx = (this.vx / speed) * MAX_SPEED;
				this.vy = (this.vy / speed) * MAX_SPEED;
			}
		}

		checkCollision(other) {
			const dx = other.x - this.x;
			const dy = other.y - this.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			return distance < this.radius + other.radius;
		}

		resolveCollision(other) {
			const dx = other.x - this.x;
			const dy = other.y - this.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			
			if (distance < this.radius + other.radius) {
				// Calculate collision angle
				const angle = Math.atan2(dy, dx);
				
				// Calculate new velocities using elastic collision physics
				const sin = Math.sin(angle);
				const cos = Math.cos(angle);
				
				// Rotate velocities
				const vx1 = this.vx * cos + this.vy * sin;
				const vy1 = this.vy * cos - this.vx * sin;
				const vx2 = other.vx * cos + other.vy * sin;
				const vy2 = other.vy * cos - other.vx * sin;
				
				// Collision reaction (simplified)
				const finalVx1 = ((this.radius - other.radius) * vx1 + 2 * other.radius * vx2) / (this.radius + other.radius);
				const finalVx2 = ((other.radius - this.radius) * vx2 + 2 * this.radius * vx1) / (this.radius + other.radius);
				
				// Rotate back
				this.vx = finalVx1 * cos - vy1 * sin;
				this.vy = vy1 * cos + finalVx1 * sin;
				other.vx = finalVx2 * cos - vy2 * sin;
				other.vy = vy2 * cos + finalVx2 * sin;
				
				// Separate bubbles to prevent overlap
				const overlap = this.radius + other.radius - distance;
				const separateX = (dx / distance) * overlap * 0.5;
				const separateY = (dy / distance) * overlap * 0.5;
				
				this.x -= separateX;
				this.y -= separateY;
				other.x += separateX;
				other.y += separateY;

				// Add collision effect
				this.opacity = Math.min(1, this.originalOpacity * 1.5);
				other.opacity = Math.min(1, other.originalOpacity * 1.5);
			}
		}

		draw(ctx) {
			// Fade opacity back to original
			this.opacity = Math.max(this.originalOpacity, this.opacity * 0.98);

			// Create gradient
			const gradient = ctx.createRadialGradient(
				this.x - this.radius * 0.3,
				this.y - this.radius * 0.3,
				0,
				this.x,
				this.y,
				this.radius
			);
			
			gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity * 0.8})`);
			gradient.addColorStop(0.7, `rgba(${this.color}, ${this.opacity * 0.4})`);
			gradient.addColorStop(1, `rgba(${this.color}, 0)`);

			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			ctx.fill();

			// Add subtle border
			ctx.strokeStyle = `rgba(${this.color}, ${this.opacity * 0.3})`;
			ctx.lineWidth = 1;
			ctx.stroke();
		}
	}

	function createBubbles(width, height) {
		bubbles = [];
		const colors = isDark 
			? ['139, 92, 246', '59, 130, 246', '16, 185, 129', '245, 101, 101'] // Purple, blue, emerald, red
			: ['139, 92, 246', '59, 130, 246', '16, 185, 129', '251, 191, 36']; // Purple, blue, emerald, amber

		for (let i = 0; i < BUBBLE_COUNT; i++) {
			const radius = MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS);
			const x = radius + Math.random() * (width - 2 * radius);
			const y = radius + Math.random() * (height - 2 * radius);
			const vx = (Math.random() - 0.5) * MAX_SPEED;
			const vy = (Math.random() - 0.5) * MAX_SPEED;
			const color = colors[Math.floor(Math.random() * colors.length)];
			const opacity = 0.1 + Math.random() * 0.2;

			bubbles.push(new Bubble(x, y, radius, vx, vy, color, opacity));
		}
	}

	function resize() {
		if (!canvas) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		createBubbles(canvas.width, canvas.height);
	}

	function animate() {
		if (!ctx) return;

		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Update and check collisions
		for (let i = 0; i < bubbles.length; i++) {
			bubbles[i].update(canvas.width, canvas.height);
			
			// Check collisions with other bubbles
			for (let j = i + 1; j < bubbles.length; j++) {
				if (bubbles[i].checkCollision(bubbles[j])) {
					bubbles[i].resolveCollision(bubbles[j]);
				}
			}
		}

		// Draw bubbles
		for (const bubble of bubbles) {
			bubble.draw(ctx);
		}

		animationId = requestAnimationFrame(animate);
	}

	// Subscribe to theme changes
	$: {
		isDark = $themeStore === 'dark';
		if (canvas) {
			createBubbles(canvas.width, canvas.height);
		}
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		resize();
		animate();

		window.addEventListener('resize', resize);

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			window.removeEventListener('resize', resize);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="fixed inset-0 pointer-events-none"
	style="background: transparent; z-index: -1;"
/>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -10;
		pointer-events: none;
	}
</style>
