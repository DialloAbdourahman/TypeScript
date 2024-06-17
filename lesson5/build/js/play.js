const fetchedData = async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('waited patiently for 2 seconds');
    }, 2000);
  });
  return data;
};

const test = async () => {
  const data = await fetchedData();
  console.log(data);
};
test();
