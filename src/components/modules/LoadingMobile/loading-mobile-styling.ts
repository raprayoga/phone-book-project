import Skeleton from "@/components/elements/Skeleton"
import styled from "@emotion/styled"

const StyledSkeletonImage = styled(Skeleton)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
const StyledSkeletonText = styled(Skeleton)`
  width: 100px;
  height: 10px;
  margin: 3px 0;
`

export { StyledSkeletonImage, StyledSkeletonText }
