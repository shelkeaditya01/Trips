const Login = () =>{
	return(
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 p-6 sm:p-8">
				<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome back</h1>
				<p className="mt-1 text-sm text-gray-600">Sign in to continue to TripNest.</p>

				<form className="mt-6 space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700">Email</label>
						<input type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">Password</label>
						<input type="password" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••" />
					</div>
					<div className="flex items-center justify-between">
						<label className="inline-flex items-center gap-2 text-sm text-gray-600">
							<input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
							<span>Remember me</span>
						</label>
						<button type="button" className="text-sm text-green-700 hover:text-green-800">Forgot password?</button>
					</div>
					<button type="button" onClick={() => { localStorage.setItem("tn_isLoggedIn", "true"); window.dispatchEvent(new Event("tn_authchange")); window.location.href = "/"; }} className="w-full inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 font-medium shadow-sm">Sign in</button>
				</form>

				<p className="mt-6 text-xs text-gray-500">By continuing, you agree to our Terms and Privacy Policy.</p>
			</div>
		</div>
	)
}

export default Login;
