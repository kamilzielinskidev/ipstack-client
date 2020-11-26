export const thenPipe = <T>(callback: (data: T) => void) => (data: T) => {
  callback(data);
  return data;
};

export const pluck = <T>(key: keyof T) => (data: T) => data[key];
