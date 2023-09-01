export default async function fetcher<JSON = any>(
	input: RequestInfo,
	init?: RequestInit
  ): Promise<JSON> {
	try {
	  const res = await fetch(input, init);
  
	  if (!res.ok) {
		//throw new Error(`Fetch error: ${res.status} - ${res.statusText}`);
		console.error("An error occurred while fetching data:");
	  }
  
	  return res.json();
	} catch (error) {
	  // Handle the error gracefully
	  console.error("An error occurred while fetching data:", error);
	  throw error; // Re-throw the error if needed
	}
  }
  