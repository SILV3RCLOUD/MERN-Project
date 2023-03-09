import { useList } from '@pankod/refine-core'
import { Box, Typography, Stack } from '@pankod/refine-mui'

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'

const home = () => {
  return (
      <Box>
        <Typography fontSize={25} fontWeight={700} color="#111420">
          Dashboard
        </Typography>

        <Box mt="20px" display="flex" sx={{ flexWrap:"warp" }} gap={4}>
          <PieChart title="Properties for Sale" value={100} series={[75, 25]} colors={['#475AE8', '#E4E8EF']} />
          <PieChart title="Properties for Rent" value={50} series={[60, 40]} colors={['#475BE8', '#E4E8EF']} />
          <PieChart title="Total Customers" value={5680} series={[50, 50]} colors={['#475CE8', '#E4E8EF']} />
          <PieChart title="Total Cities" value={5} series={[70, 30]} colors={['#475DE8', '#E4E8EF']} />
        </Box>

        <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row'}} gap={4}>
          <TotalRevenue />
          <PropertyReferrals />
        </Stack>
      </Box>
    )
}

export default home