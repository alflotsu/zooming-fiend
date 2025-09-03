<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { signUpWithEmail, signInWithGoogle } from '$lib/auth';
	import { goto } from '$app/navigation';
	import { Mail, Lock, Chrome } from 'lucide-svelte';

	let { data } = $props();
	const { supabase } = data;

	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let loading = $state(false);
	let error = $state('');
	let success = $state('');

	async function handleEmailSignUp() {
		if (!email || !password || !confirmPassword) {
			error = 'Please fill in all fields';
			return;
		}

		if (password !== confirmPassword) {
			error = 'Passwords do not match';
			return;
		}

		if (password.length < 6) {
			error = 'Password must be at least 6 characters';
			return;
		}

		loading = true;
		error = '';
		success = '';

		try {
			const { data: signUpData, error: signUpError } = await signUpWithEmail(supabase, email, password);
			
			if (signUpError) {
				error = signUpError.message;
			} else {
				if (signUpData.user && !signUpData.user.email_confirmed_at) {
					success = 'Please check your email for a confirmation link before signing in.';
				} else {
					goto('/dashboard');
				}
			}
		} catch (err) {
			error = 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	}

	async function handleGoogleSignIn() {
		loading = true;
		error = '';

		try {
			const { error: signInError } = await signInWithGoogle(supabase);
			
			if (signInError) {
				error = signInError.message;
			}
		} catch (err) {
			error = 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Sign Up - Velourcity</title>
	<meta name="description" content="Create your Velourcity account" />
</svelte:head>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
	<Card class="w-full max-w-lg">
		<CardHeader class="space-y-1">
			<CardTitle class="text-2xl text-center">Create account</CardTitle>
			<CardDescription class="text-center">
				Enter your email below to create your account
			</CardDescription>
		</CardHeader>
		<CardContent class="space-y-4">
			{#if error}
				<div class="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
					{error}
				</div>
			{/if}

			{#if success}
				<div class="bg-green-500/15 text-green-700 dark:text-green-400 text-sm p-3 rounded-md">
					{success}
				</div>
			{/if}

			<form on:submit|preventDefault={handleEmailSignUp} class="space-y-4">
				<div class="space-y-2">
					<Label for="email">Email</Label>
					<div class="relative">
						<Mail class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
						<Input
							id="email"
							type="email"
							placeholder="Enter your email"
							bind:value={email}
							disabled={loading}
							class="pl-9"
							required
						/>
					</div>
				</div>

				<div class="space-y-2">
					<Label for="password">Password</Label>
					<div class="relative">
						<Lock class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
						<Input
							id="password"
							type="password"
							placeholder="Enter your password"
							bind:value={password}
							disabled={loading}
							class="pl-9"
							required
						/>
					</div>
				</div>

				<div class="space-y-2">
					<Label for="confirmPassword">Confirm Password</Label>
					<div class="relative">
						<Lock class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
						<Input
							id="confirmPassword"
							type="password"
							placeholder="Confirm your password"
							bind:value={confirmPassword}
							disabled={loading}
							class="pl-9"
							required
						/>
					</div>
				</div>

				<Button type="submit" class="w-full" disabled={loading}>
					{loading ? 'Creating account...' : 'Create account'}
				</Button>
			</form>

			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
				</div>
			</div>

			<Button 
				variant="outline" 
				class="w-full" 
				on:click={handleGoogleSignIn}
				disabled={loading}
			>
				<Chrome class="mr-2 h-4 w-4" />
				Google
			</Button>

			<div class="text-center text-sm">
				<span class="text-muted-foreground">Already have an account? </span>
				<a href="/auth/login" class="underline underline-offset-4 hover:text-primary">
					Sign in
				</a>
			</div>
		</CardContent>
	</Card>
</div>
