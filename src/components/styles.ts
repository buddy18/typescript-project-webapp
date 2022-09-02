import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
    isRed?: boolean
  }

interface FlexBoxProps {
  flex?: boolean,
  position?: string,
  row?: boolean,
  wrap?: boolean,
  justify?:any,
  align?:string,
}


interface JustifyType {
center?: any,
end?: any ,
start?: any,
}

const gapSize: JustifyType = {
  center: tw`justify-center`,
  end: tw`justify-end`,
  start: tw`justify-end`,
};
console.log(gapSize);

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

    export const FlexBox = styled.div(({ row,wrap,justify }:FlexBoxProps) => [
      row ? tw`flex-row` : tw`flex-col`,
      wrap ? tw`flex-wrap` : tw`flex-nowrap`,
      gapSize[justify as keyof JustifyType],
      tw`
        flex
        flex-auto 
      `,
    ]);