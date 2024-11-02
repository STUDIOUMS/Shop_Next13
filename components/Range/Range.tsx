import FormInput from "../../OLD_ui/FormInput";
import styles from "./Range.module.scss";

interface IRange {
  handlerFrom: React.Dispatch<React.SetStateAction<string>>;
  handlerTo: React.Dispatch<React.SetStateAction<string>>;
  from: string;
  to: string;
  reset?: boolean;
}

const Range: React.FC<IRange> = ({
  from,
  to,
  reset,
  handlerFrom,
  handlerTo,
}) => {
  return (
    <div className={styles.rangebox}>
      <FormInput handler={handlerFrom} placeholder="От" expand val={from} />
      <span className={styles.rangeboxDivider}></span>
      <FormInput handler={handlerTo} placeholder="До" expand val={to} />
    </div>
  );
};

export default Range;
