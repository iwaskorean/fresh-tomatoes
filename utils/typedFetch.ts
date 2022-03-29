export async function typedFetch<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  return await response.json();
}
