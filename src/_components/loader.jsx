import Loader from "react-loader-spinner";


function LoadingComponent(props) {
  return <Loader
    type="ThreeDots"
    color="#00BFFF"
    height={100}
    width={100}
    visible={props.loading}
  />;
}

export { LoadingComponent };
