import { Card, Text } from "@nextui-org/react";

const CardComponent = ({ text }) => {
  return (
    <Card
      isHoverable
      isPressable
      css={{ mw: "330px", $$cardColor: "$colors$primary" }}
    >
      <Card.Body>
        <Text h2 size={15} color="white" css={{ mt: 0 }}>
          {text.name}
        </Text>
        <Text h2 size={15} color="white" css={{ mt: 0 }}>
          {text.description}
        </Text>
      </Card.Body>
    </Card>
  );
};
export default CardComponent;
