import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const HoverImage = ({ message, children }: { message: string; children: React.ReactNode }) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>
        <p>&quot;{message}&quot;</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default HoverImage
