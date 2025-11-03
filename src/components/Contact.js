 

const Contact = () =>{
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="md:col-span-2 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 p-6 sm:p-8">
					<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact us</h1>
					<p className="mt-1 text-sm text-gray-600">We’d love to hear from you. Send us a message and we’ll respond soon.</p>
					<form className="mt-6 space-y-4">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">Name</label>
								<input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">Email</label>
								<input type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
							</div>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Message</label>
							<textarea rows="5" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="How can we help?" />
						</div>
						<button type="button" className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 font-medium shadow-sm">Send message</button>
					</form>
				</div>
				<div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 p-6 sm:p-8">
					<div className="text-sm font-semibold text-emerald-800 inline-flex items-center gap-2">
						<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✉️</span>
						Reach us
					</div>
					<div className="mt-3 space-y-3 text-sm">
						<div>
							<div className="font-medium text-gray-900 inline-flex items-center gap-2"><span>📧</span>Email:</div>
							<a href="mailto:support@tripnest.com" className="text-green-700 hover:text-green-800"><span> adishelke10@gmail.com</span></a>
						</div>
						<div>
							<div className="font-medium text-gray-900 inline-flex items-center gap-2"><span>📞</span>Phone:</div>
							<a href="tel:+910000000000" className="text-green-700 hover:text-green-800"><span> +91 8007219118</span></a>
						</div>
						<div>
							<div className="font-medium text-gray-900 inline-flex items-center gap-2"><span>📍</span>Address:</div>
							<span> Pune, India</span>
						</div>
						<div className="pt-3">
						<div className="aspect-video rounded-xl ring-1 ring-emerald-200 bg-white flex items-center justify-center">
							<div className="flex items-center gap-6">
								<span className="inline-block h-24 w-24 sm:h-28 sm:w-28" aria-hidden>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-full w-full">
										<defs>
											<linearGradient id="tripnest-g-ct" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
												<stop offset="0" stopColor="#34d399"/>
												<stop offset="1" stopColor="#16a34a"/>
											</linearGradient>
										</defs>
										<circle cx="32" cy="32" r="30" fill="url(#tripnest-g-ct)"/>
										<path d="M18 36c6-6 12-9 14-10l14-6-6 14c-1 2-4 8-10 14-5 5-12 4-16 0s-5-11 0-16z" fill="#fff"/>
										<path d="M40 18l6 6" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
									</svg>
								</span>
								
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;