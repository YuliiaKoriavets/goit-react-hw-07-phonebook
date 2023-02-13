import { FallingLines } from 'react-loader-spinner';
import css from "../Loader/Loader.module.css"

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <FallingLines
        color="#b6e0e0"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
   </div>
  );
}
