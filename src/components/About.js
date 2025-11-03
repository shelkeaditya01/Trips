const About = () =>{
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div>
					<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">About TripNest</h1>
					<p className="mt-3 text-gray-600">We help travelers discover memorable destinations with transparent pricing and curated insights like weather tags and durations. TripNest brings inspiration and booking together with a clean, mobile-first experience.</p>
					<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="rounded-2xl border border-gray-200 p-4">
							<div className="text-sm font-semibold">Curated picks</div>
							<div className="mt-1 text-sm text-gray-600">Handpicked destinations and stays for every season.</div>
						</div>
						<div className="rounded-2xl border border-gray-200 p-4">
							<div className="text-sm font-semibold">Straightforward pricing</div>
							<div className="mt-1 text-sm text-gray-600">Indicative budgets upfront, no surprises.</div>
						</div>
						<div className="rounded-2xl border border-gray-200 p-4">
							<div className="text-sm font-semibold">Mobile first</div>
							<div className="mt-1 text-sm text-gray-600">A smooth, responsive interface across devices.</div>
						</div>
						<div className="rounded-2xl border border-gray-200 p-4">
							<div className="text-sm font-semibold">Secure payments</div>
							<div className="mt-1 text-sm text-gray-600">Backed by trusted providers and server-side verification.</div>
						</div>
					</div>
				</div>
				<div className="aspect-video rounded-3xl overflow-hidden ring-1 ring-gray-200 shadow-sm bg-white">
					<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
						<defs>
							<linearGradient id="tn-grad" x1="0" y1="0" x2="1" y2="1">
								<stop offset="0%" stopColor="#d1fae5" />
								<stop offset="100%" stopColor="#a7f3d0" />
							</linearGradient>
						</defs>
						<rect x="0" y="0" width="300" height="200" fill="url(#tn-grad)" />
						<g>
							<circle cx="70" cy="120" r="40" fill="#34d399" />
							<rect x="115" y="80" width="120" height="70" rx="10" fill="#10b981" />
							<path d="M120 85 L150 65 L230 65 L235 85 Z" fill="#059669" />
							<circle cx="210" cy="55" r="10" fill="#34d399" />
							<rect x="145" y="95" width="40" height="25" rx="4" fill="#ecfdf5" />
							<rect x="190" y="95" width="35" height="25" rx="4" fill="#ecfdf5" />
							<rect x="155" y="125" width="60" height="10" rx="5" fill="#065f46" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default About;