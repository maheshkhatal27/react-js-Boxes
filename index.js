const Box = (props) => {
  const { boxName, className } = props;
  const containerClassName = `${className}`;
  return (
    <div className={containerClassName}>
      <p className="text">{boxName}</p>
    </div>
  );
};

const element = (
  <div className="main-bg-container">
    <h1 className="box-title">Boxes</h1>
    <div className="boxes-container">
      <Box boxName="Small" className="small-box" />
      <Box boxName="Medium" className="medium-box" />
      <Box boxName="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
