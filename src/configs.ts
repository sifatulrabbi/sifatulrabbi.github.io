const API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) {
	console.error("unable to find env NEXT_PUBLIC_API_URL")
	process.exit(1)
}

export const configs = {
	API_URL,
}
