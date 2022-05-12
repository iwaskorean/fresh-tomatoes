export async function typedFetch<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const data = await response.json();

  return data;
}
