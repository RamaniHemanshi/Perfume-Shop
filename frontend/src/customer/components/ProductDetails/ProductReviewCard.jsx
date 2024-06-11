import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard =({item})=>{
    const [value, setValue] = React.useState(4.5);
    return(
        <div>
            <Grid container spacing={2} gap={3}>
                
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}} alt={item?.user?.firstName}>{item?.user?.firstName ? item.user.firstName[0].toUpperCase() : ''}</Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">{item.user?.firstName}</p>
              <p className="opacity-70">{item.user?.createdAt}</p>
            </div>
          </div>

          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            name="half-rating"
            readOnly
            precision={0.5}
          />
          <p>{item?.review}</p>
        </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard    