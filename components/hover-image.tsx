import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const HoverImage = ({ quote, children }: { quote: string; children: React.ReactNode }) => {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100}>
        {children}
      </HoverCardTrigger>
      <HoverCardContent side='top' className='flex w-64 flex-col gap-0.5'>
        <div className='text-center'>&quot;{quote}&quot;</div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverImage
