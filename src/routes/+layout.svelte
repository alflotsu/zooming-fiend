<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from '$lib/components/ui/button';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import { themeStore } from '$lib/stores/ThemeStore';
	import { Smartphone, Code, FileText, ChevronDown } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuTrigger,
	} from '$lib/components/ui/dropdown-menu';
	
	let { children } = $props();
	
	// Apply theme changes to document
	$effect(() => {
		if (typeof document !== 'undefined') {
			if ($themeStore === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});
</script>

<svelte:head>
	<title>Velourcity - Fast & Reliable Delivery Service</title>
	<meta name="description" content="Lightning-fast delivery service for food, groceries, and packages. Download our app or integrate our API into your application." />
	<link rel="icon" href={favicon} />
	<!-- Early theme application to prevent FOUC -->
	<script>
		(function() {
			try {
				var t = localStorage.getItem('theme');
				if (!t) {
					// fall back to system preference
					var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
					t = prefersDark ? 'dark' : 'light';
				}
				if (t === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			} catch (e) {
				// ignore
			}
		})();
	</script>
</svelte:head>

<div class="min-h-screen">
	<!-- Header -->
	<header class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container flex h-14 max-w-screen-2xl items-center">
			<div class="mr-4 hidden md:flex">
				<a class="mr-6 flex items-center space-x-2" href="/">
					<Smartphone class="h-6 w-6" />
					<span class="hidden font-bold sm:inline-block">Velourcity</span>
				</a>
				<nav class="flex items-center space-x-4">
					<a href="/" class="text-sm font-medium transition-colors hover:text-primary">
						Home
					</a>
					<DropdownMenu>
						<DropdownMenuTrigger class="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
							<span>Developers</span>
							<ChevronDown class="h-3 w-3" />
						</DropdownMenuTrigger>
					<DropdownMenuContent align="start" class="w-56">
						<DropdownMenuLabel class="flex items-center space-x-2">
							<Code class="h-4 w-4" />
							<span>Developer Platform</span>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<a href="/developers" class="flex w-full">
								Overview
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<a href="/developers/signup" class="flex w-full">
								Get Started
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<a href="/docs" class="flex w-full">
								Documentation
							</a>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<a href="/docs/api" class="flex w-full">
								API Reference
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<a href="/docs/deeplinks" class="flex w-full">
								Deeplinks
							</a>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<a href="/drivers" class="flex w-full">
								Drive with Us
							</a>
						</DropdownMenuItem>
					</DropdownMenuContent>
					</DropdownMenu>
					<a href="/docs" class="text-sm font-medium transition-colors hover:text-primary">
						Docs
					</a>
				</nav>
			</div>
			<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
				<div class="w-full flex-1 md:w-auto md:flex-none">
					<!-- Mobile nav toggle could go here -->
				</div>
				<nav class="flex items-center space-x-2">
					<ThemeToggle />
					<Button variant="outline" size="sm" href="https://apps.apple.com/app/velourcity" class="focus-visible-ring">
						<Smartphone class="mr-1 h-3 w-3" />
						Download App
					</Button>
				</nav>
			</div>
		</div>
	</header>

	<!-- Main content -->
	<main>
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="border-t bg-background">
		<div class="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
			<div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
				<Smartphone class="h-6 w-6" />
				<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
					Built for developers by developers. © 2025 Velourcity.
				</p>
			</div>
			<div class="flex items-center space-x-4">
				<a href="/docs" class="text-sm text-muted-foreground hover:text-foreground">
					Documentation
				</a>
				<a href="/developers" class="text-sm text-muted-foreground hover:text-foreground">
					Developers
				</a>
				<a href="mailto:support@velourcity.com" class="text-sm text-muted-foreground hover:text-foreground">
					Support
				</a>
			</div>
		</div>
	</footer>
</div>
