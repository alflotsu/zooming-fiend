<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from '$lib/components/ui/button';
	import { NavigationMenuRoot, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '$lib/components/ui/navigation-menu';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import { themeStore } from '$lib/stores/ThemeStore';
	import { Smartphone, Code, FileText } from 'lucide-svelte';
	import { onMount } from 'svelte';
	
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
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Header -->
	<header class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container flex h-14 max-w-screen-2xl items-center">
			<div class="mr-4 hidden md:flex">
				<a class="mr-6 flex items-center space-x-2" href="/">
					<Smartphone class="h-6 w-6" />
					<span class="hidden font-bold sm:inline-block">Velourcity</span>
				</a>
				<NavigationMenuRoot>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink href="/" class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
								Home
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Developers</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<div class="row-span-3">
										<NavigationMenuLink href="/developers" class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
											<Code class="h-6 w-6" />
											<div class="mb-2 mt-4 text-lg font-medium">
												Developer Platform
											</div>
											<p class="text-sm leading-tight text-muted-foreground">
												Integrate delivery features into your app with our REST API and deeplinks.
											</p>
										</NavigationMenuLink>
									</div>
									<NavigationMenuLink href="/developers/signup" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
										<div class="text-sm font-medium leading-none">Get Started</div>
										<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
											Sign up for API access and start integrating.
										</p>
									</NavigationMenuLink>
									<NavigationMenuLink href="/docs" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
										<div class="text-sm font-medium leading-none">Documentation</div>
										<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
											API reference, guides, and examples.
										</p>
									</NavigationMenuLink>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink href="/docs" class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
								Docs
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenuRoot>
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
