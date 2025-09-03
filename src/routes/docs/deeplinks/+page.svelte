<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Smartphone, ArrowLeft, Copy } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations';

	onMount(() => {
		initializeAnimations();
	});
</script>

<svelte:head>
	<title>Deeplinks Documentation - Velourcity API Platform</title>
	<meta name="description" content="Mobile deeplink integration guide for the Velourcity delivery platform." />
</svelte:head>

<!-- Full-page animated grid background -->
<div class="fixed inset-0 bg-background grid-background grid-background-animated -z-10"></div>

<div class="container max-w-4xl py-8">
	<!-- Breadcrumbs -->
	<Breadcrumb class="mb-6">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<span class="font-medium">Deeplinks</span>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Header -->
	<div class="flex items-center space-x-4 mb-8">
		<Button variant="ghost" size="sm" href="/docs">
			<ArrowLeft class="h-4 w-4 mr-2" />
			Back to Docs
		</Button>
	</div>

	<div class="space-y-6 mb-8">
		<div class="flex items-center space-x-2 hero-title">
			<Smartphone class="h-8 w-8 text-indigo-600" />
			<h1 class="font-heading text-3xl sm:text-4xl">Deeplinks Integration</h1>
		</div>
		<p class="text-muted-foreground text-lg max-w-3xl hero-description">
			Integrate delivery features into your mobile or web application using deeplinks. Redirect users to the Velourcity app with pre-populated delivery information.
		</p>
		<Badge variant="outline" class="hero-badge">Simple • Fast Setup • No API Keys Required</Badge>
	</div>

	<!-- URL Format -->
	<section class="mb-12">
		<Card class="feature-card">
			<CardHeader>
				<CardTitle class="text-xl">URL Format</CardTitle>
				<CardDescription>
					Basic structure for Velourcity deeplinks
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div>
					<h4 class="font-semibold mb-2">Base URL</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>https://app.velourcity.com/delivery</code></pre>
				</div>
				<div>
					<h4 class="font-semibold mb-2">Complete Example</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>https://app.velourcity.com/delivery?pickup_address=123%20Restaurant%20St&dropoff_address=456%20Customer%20Ave&partner_id=your_partner_id&callback_url=https://yourapp.com/delivery/complete</code></pre>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Parameters -->
	<section class="mb-12">
		<Card class="feature-card">
			<CardHeader>
				<CardTitle class="text-xl">URL Parameters</CardTitle>
				<CardDescription>
					Available parameters for customizing the delivery request
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">pickup_address</code>
							<Badge variant="secondary">Required</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Full pickup address including street, city, and postal code.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">dropoff_address</code>
							<Badge variant="secondary">Required</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Full delivery address including street, city, and postal code.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">partner_id</code>
							<Badge variant="secondary">Required</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Your unique partner identifier for tracking and attribution.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">callback_url</code>
							<Badge variant="outline">Optional</Badge>
						</div>
						<p class="text-sm text-muted-foreground">URL to redirect users back to your app after completing the delivery request.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">delivery_instructions</code>
							<Badge variant="outline">Optional</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Special instructions for the delivery driver.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">reference_id</code>
							<Badge variant="outline">Optional</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Your internal reference ID for this delivery request.</p>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Implementation Examples -->
	<section class="mb-12">
		<Card class="feature-card">
			<CardHeader>
				<CardTitle class="text-xl">Implementation Examples</CardTitle>
				<CardDescription>
					Code examples for different platforms and languages
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div>
					<h4 class="font-semibold mb-2">JavaScript / React</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
						
						<!-- <code>
							// Function to create delivery deeplink
const createDeliveryLink = (pickupAddress, dropoffAddress, partnerId, options = {}) => {
  const baseUrl = 'https://app.velourcity.com/delivery';
  const params = new URLSearchParams({
    pickup_address: pickupAddress,
    dropoff_address: dropoffAddress,
    partner_id: partnerId,
    ...options
  });
  
  return `${baseUrl}?${params.toString()}`;
};

// React component example
const DeliveryButton = () => {
  const handleDelivery = () => {
    const deliveryUrl = createDeliveryLink(
      '123 Restaurant Street, New York, NY 10001',
      '456 Customer Ave, New York, NY 10002',
      'your_partner_id',
      {
        callback_url: 'https://yourapp.com/delivery/complete',
        delivery_instructions: 'Leave at door'
      }
    );
    
    window.open(deliveryUrl, '_blank');
  };
  
  return (
    &lt;button onClick={handleDelivery}&gt;
      Request Delivery
    &lt;/button&gt;
  );
};</code></pre>
				</div>
				
				<div>
					<h4 class="font-semibold mb-2">iOS (Swift)</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>import UIKit

class DeliveryManager {
    static func createDeliveryURL(pickupAddress: String, 
                                 dropoffAddress: String, 
                                 partnerId: String,
                                 callbackUrl: String? = nil) -> URL? {
        
        var components = URLComponents(string: "https://app.velourcity.com/delivery")
        
        var queryItems = [
            URLQueryItem(name: "pickup_address", value: pickupAddress),
            URLQueryItem(name: "dropoff_address", value: dropoffAddress),
            URLQueryItem(name: "partner_id", value: partnerId)
        ]
        
        if let callbackUrl = callbackUrl {
            queryItems.append(URLQueryItem(name: "callback_url", value: callbackUrl))
        }
        
        components?.queryItems = queryItems
        return components?.url
    }
    
    static func requestDelivery() {
        guard let url = createDeliveryURL(
            pickupAddress: "123 Restaurant Street, New York, NY 10001",
            dropoffAddress: "456 Customer Ave, New York, NY 10002",
            partnerId: "your_partner_id",
            callbackUrl: "yourapp://delivery/complete"
        ) else { return }
        
        if UIApplication.shared.canOpenURL(url) {
            UIApplication.shared.open(url)
        } else {
            // Handle app not installed - redirect to App Store
            let appStoreURL = URL(string: "https://apps.apple.com/app/velourcity")
            UIApplication.shared.open(appStoreURL!)
        }
    }
}</code> -->

</pre>
				</div>
				
				<div>
					<h4 class="font-semibold mb-2">Android (Java)</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
<!-- 						
						<code>import android.content.Intent;
import android.net.Uri;
import android.content.Context;
import android.content.pm.PackageManager;

public class DeliveryManager {
    
    public static String createDeliveryUrl(String pickupAddress, 
                                          String dropoffAddress, 
                                          String partnerId,
                                          String callbackUrl) {
        
        Uri.Builder builder = Uri.parse("https://app.velourcity.com/delivery").buildUpon();
        
        builder.appendQueryParameter("pickup_address", pickupAddress)
               .appendQueryParameter("dropoff_address", dropoffAddress)
               .appendQueryParameter("partner_id", partnerId);
        
        if (callbackUrl != null) {
            builder.appendQueryParameter("callback_url", callbackUrl);
        }
        
        return builder.build().toString();
    }
    
    public static void requestDelivery(Context context) {
        String deliveryUrl = createDeliveryUrl(
            "123 Restaurant Street, New York, NY 10001",
            "456 Customer Ave, New York, NY 10002",
            "your_partner_id",
            "yourapp://delivery/complete"
        );
        
        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(deliveryUrl));
        
        // Check if Velourcity app is installed
        PackageManager pm = context.getPackageManager();
        if (intent.resolveActivity(pm) != null) {
            context.startActivity(intent);
        } else {
            // Redirect to Play Store if app not installed
            Intent playStoreIntent = new Intent(Intent.ACTION_VIEW, 
                Uri.parse("market://details?id=com.velourcity.app"));
            context.startActivity(playStoreIntent);
        }
    }
}</code></pre> -->
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Best Practices -->
	<section class="mb-12">
		<Card class="feature-card">
			<CardHeader>
				<CardTitle class="text-xl">Best Practices</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-semibold mb-2">✅ Do</h4>
						<ul class="space-y-1 text-sm text-muted-foreground">
							<li>• URL encode all parameter values</li>
							<li>• Validate addresses before creating links</li>
							<li>• Provide clear user feedback</li>
							<li>• Handle app not installed scenarios</li>
							<li>• Use HTTPS for callback URLs</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold mb-2">❌ Don't</h4>
						<ul class="space-y-1 text-sm text-muted-foreground">
							<li>• Include sensitive information in URLs</li>
							<li>• Assume the app is always installed</li>
							<li>• Use invalid or placeholder addresses</li>
							<li>• Forget to handle callback responses</li>
							<li>• Hardcode partner IDs in client code</li>
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Getting Started -->
	<section class="mb-12">
		<div class="bg-muted/50 rounded-lg p-6 md:p-8">
			<h2 class="text-2xl font-semibold mb-4">Ready to integrate deeplinks?</h2>
			<p class="text-muted-foreground mb-6">
				Get your partner ID and start redirecting users to Velourcity for seamless delivery experiences.
			</p>
			<Button href="/developers/signup" class="bg-purple-600 hover:bg-purple-700 text-white">
				Get Partner ID
			</Button>
		</div>
	</section>
</div>
