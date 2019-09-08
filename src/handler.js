export const example = async event => {
  const a = 1;
  console.log("test");

  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "world"
    })
  };
};
