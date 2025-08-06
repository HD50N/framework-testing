<script lang="ts">
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Here you would typically send the data to your backend
		alert('Thank you for your message! We\'ll get back to you soon.');
		formData = { name: '', email: '', message: '' };
	}

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		const { name, value } = target;
		formData = { ...formData, [name]: value };
	}
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
	<div class="container mx-auto px-4 py-16">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
				<p class="text-xl text-gray-600">
					Get in touch with us. We'd love to hear from you!
				</p>
			</div>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div class="bg-white rounded-lg shadow-lg p-8">
					<h2 class="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
					
					<form on:submit={handleSubmit} class="space-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
								placeholder="Your name"
							/>
						</div>
						
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
								placeholder="your.email@example.com"
							/>
						</div>
						
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								bind:value={formData.message}
								required
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
								placeholder="Your message..."
							></textarea>
						</div>
						
						<button
							type="submit"
							class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
						>
							Send Message
						</button>
					</form>
				</div>
				
				<div class="space-y-8">
					<div class="bg-white rounded-lg shadow-lg p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
						<div class="space-y-4">
							<div class="flex items-center">
								<div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
									</svg>
								</div>
								<div>
									<p class="font-medium text-gray-900">Email</p>
									<p class="text-gray-600">hello@example.com</p>
								</div>
							</div>
							
							<div class="flex items-center">
								<div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
									</svg>
								</div>
								<div>
									<p class="font-medium text-gray-900">Phone</p>
									<p class="text-gray-600">+1 (555) 123-4567</p>
								</div>
							</div>
							
							<div class="flex items-center">
								<div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
									</svg>
								</div>
								<div>
									<p class="font-medium text-gray-900">Address</p>
									<p class="text-gray-600">123 Main Street, City, State 12345</p>
								</div>
							</div>
						</div>
					</div>
					
					<div class="bg-white rounded-lg shadow-lg p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
						<div class="space-y-2 text-gray-600">
							<div class="flex justify-between">
								<span>Monday - Friday</span>
								<span>9:00 AM - 6:00 PM</span>
							</div>
							<div class="flex justify-between">
								<span>Saturday</span>
								<span>10:00 AM - 4:00 PM</span>
							</div>
							<div class="flex justify-between">
								<span>Sunday</span>
								<span>Closed</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> 