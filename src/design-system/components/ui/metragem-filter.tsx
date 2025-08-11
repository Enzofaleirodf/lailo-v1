import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/design-system/components/ui/collapsible';
import { Input } from '@/design-system/components/ui/input';
import { Label } from '@/design-system/components/ui/label';

interface MetragemFilterProps {
  className?: string;
  showBorder?: boolean;
}

export default function MetragemFilter({ className = '', showBorder = true }: MetragemFilterProps) {
  const [menorValue, setMenorValue] = useState('');
  const [maiorValue, setMaiorValue] = useState('');

  const borderClass = showBorder ? 'border-b border-[#04040514]' : '';

  return (
    <Collapsible className={`mb-6 pb-6 ${borderClass} ${className}`}>
      <CollapsibleTrigger className='flex items-center justify-between w-full'>
        <span className='text-[#040405] text-sm font-medium font-montserrat'>Metragem</span>
        <ChevronDown className='w-4 h-4 text-[#0404054D]' />
      </CollapsibleTrigger>
      <CollapsibleContent className='mt-5'>
        <div className='flex items-start gap-3'>
          {/* Menor */}
          <div className='flex-1 max-w-[135px]'>
            <Label 
              htmlFor='metragem-menor' 
              className='text-[#00000099] text-xs font-medium font-montserrat mb-3 block'
            >
              Menor
            </Label>
            <div className='relative flex items-center'>
              <Input
                id='metragem-menor'
                type='number'
                value={menorValue}
                onChange={(e) => setMenorValue(e.target.value)}
                placeholder='0'
                className='h-12 pr-8 border-[#00000014] bg-[#04040505] text-[#040405] placeholder:text-[#04040580] font-montserrat text-sm'
              />
              <span className='absolute right-3 text-[#00000099] text-sm font-medium font-montserrat pointer-events-none'>
                m2
              </span>
            </div>
          </div>

          {/* Maior */}
          <div className='flex-1 max-w-[135px]'>
            <Label 
              htmlFor='metragem-maior' 
              className='text-[#00000099] text-xs font-medium font-montserrat mb-3 block'
            >
              Maior
            </Label>
            <div className='relative flex items-center'>
              <Input
                id='metragem-maior'
                type='number'
                value={maiorValue}
                onChange={(e) => setMaiorValue(e.target.value)}
                placeholder='0'
                className='h-12 pr-8 border-[#00000014] bg-[#04040505] text-[#040405] placeholder:text-[#04040580] font-montserrat text-sm'
              />
              <span className='absolute right-3 text-[#00000099] text-sm font-medium font-montserrat pointer-events-none'>
                m2
              </span>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}