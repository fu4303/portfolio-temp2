import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import { TextButton } from "./Button";
import Text from "./Text";
import Icon from "./Icon";
import Link from "./Link";

const ViewMoreLinkWrapper = styled(Box)`
  color: ${p => p.theme.colors.blue};
  ${Icon} {
    transition: transform 50ms ease-in-out;
  }

  &:hover ${Icon} {
    transform: translateX(4px);
  }
`;

type Props = {
  href: string,
  children: React$Node
};

const ViewMoreLink = (props: Props) => (
  <ViewMoreLinkWrapper mt={4} {...props}>
    <TextButton as={Link} href={props.href}>
      <Text as="div" fontSize={2} color="blue">
        {props.children}
      </Text>
    </TextButton>
  </ViewMoreLinkWrapper>
);

export default ViewMoreLink;
