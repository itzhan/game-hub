import { Text } from "@chakra-ui/react"

interface Props {
    rating: number
}

interface Emoji {
    emoji: string,
    fontSize: string
}

const GameCardEmoji = ({rating}: Props) => {
    if (rating < 3) return null;
    
    const emoji: { [key: number]: Emoji} = {
        3: {emoji: '😐', fontSize: '30px'},
        4: {emoji: '👍', fontSize: '25px'},
        5: {emoji: '🎯', fontSize: '30px'}
    }

  return (
    <Text fontSize={emoji[rating].fontSize} mt={1}>{emoji[rating].emoji}</Text>
  )
}

export default GameCardEmoji
