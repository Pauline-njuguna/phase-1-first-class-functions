function receivesAFunction (spy) {
    return spy();
};

const returnsANamedFunction = () => {
  let name = () => "";
  return name;
};

const returnsAnAnonymousFunction = () => {
  return function () {
    console.log("");
  };
};
