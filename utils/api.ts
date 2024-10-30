// Getting data
export const getData = async <T>(uri: string): Promise<T> => {
  const response = await fetch(process.env.API_URL + uri);
  const data = await response.json();
  return data;
};
