export const example = async event => {
  console.log("test");

  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "world"
    })
  };
};
