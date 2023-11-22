export interface TextProps {
  fontSize? : number;
  fontWeight? : number;
  lineHeight? : number;
  color?: string;
  text : string;
}

const Text : React.FC<TextProps> = ({ fontSize = 18,lineHeight = 24,fontWeight = 400,color = '#222222', text }: TextProps) => {
  return (
    <p style={{fontSize:`${fontSize}px`,lineHeight :`${lineHeight}px`,fontWeight : `${fontWeight}px`, color: color }}>
        {text}
    </p>
  )
}

export default Text