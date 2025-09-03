<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { User, Mail, Calendar, LogOut } from 'lucide-svelte';

	let { data } = $props();
	const { user, supabase } = data;

	async function handleSignOut() {
		await supabase.auth.signOut();
	}
</script>

<svelte:head>
	<title>Dashboard - Velourcity</title>
	<meta name="description" content="Your Velourcity dashboard" />
</svelte:head>

<div class="container mx-auto py-6">
	<div class="flex items-center justify-between mb-6">
		<div>
			<h1 class="text-3xl font-bold">Dashboard</h1>
			<p class="text-muted-foreground">Welcome back to Velourcity!</p>
		</div>
		<Button variant="outline" on:click={handleSignOut}>
			<LogOut class="mr-2 h-4 w-4" />
			Sign out
		</Button>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center space-x-2">
					<User class="h-5 w-5" />
					<span>Profile Information</span>
				</CardTitle>
				<CardDescription>Your account details</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-2">
					<div class="flex items-center space-x-2">
						<Mail class="h-4 w-4 text-muted-foreground" />
						<span class="text-sm">{user.email}</span>
					</div>
					<div class="flex items-center space-x-2">
						<Calendar class="h-4 w-4 text-muted-foreground" />
						<span class="text-sm">
							Joined {new Date(user.created_at).toLocaleDateString()}
						</span>
					</div>
				</div>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Recent Activity</CardTitle>
				<CardDescription>Your latest actions</CardDescription>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-muted-foreground">No recent activity to display.</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Quick Actions</CardTitle>
				<CardDescription>Common tasks</CardDescription>
			</CardHeader>
			<CardContent class="space-y-2">
				<Button variant="outline" class="w-full justify-start">
					View Orders
				</Button>
				<Button variant="outline" class="w-full justify-start">
					Track Delivery
				</Button>
				<Button variant="outline" class="w-full justify-start">
					Account Settings
				</Button>
			</CardContent>
		</Card>
	</div>
</div>
