const Loading = () => {
  return (
    <div
      classNameName="d-flex justify-content-center"
      style={{ height: "1000px", alignItems: "center" }}
    >
      <div classNameName="spinner-border" role="status">
        <span classNameName="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
