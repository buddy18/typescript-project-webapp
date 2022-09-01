import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
    isRed?: boolean
  }
  export const ConditionalButton = styled.button(({ isRed }:ButtonProps) => [
      isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
      tw`
        text-white
        font-bold
        py-2
        px-4
        border
        border-black
        rounded
      `,
    ]);