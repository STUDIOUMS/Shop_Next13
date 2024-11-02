import { CURRENCY } from "@/constants";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

type PriceSizeType = "large" | "small";

type PriceBoxProps = {
  price: string;
  oldprice?: string;
  size?: PriceSizeType;
};

const PriceBox = (props: PriceBoxProps): JSX.Element => {
  const { price, oldprice, size = "small" } = props;
  return (
    <Box>
      <Typography variant="body1" component="span">
        {price}
      </Typography>
      <Typography variant="body2" component="span">
        {CURRENCY}
      </Typography>
      {oldprice && (
        <Box>
          <Typography variant="body1" component="span">
            {oldprice}
          </Typography>
          <Typography variant="body2" component="span">
            {CURRENCY}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default PriceBox;
